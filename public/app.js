import colors from './data/colors.json' with { type: 'json' }
import { selectTarget, selectDistractors, recordAnswer, buildLearningOrder } from './lib/progression.js'
import { sortByHue } from './lib/colorDistance.js'
import { restoreSnapshot, snapshotForState, CURRICULUM_ID } from './lib/snapshot.js'
import { openProgressStore } from './lib/progress-store.js'
import { createMemoryStore } from './lib/memory-store.js'
import { createCloudPanel } from './lib/cloud-panel.js'

const $ = (id) => document.getElementById(id)
const byId = Object.fromEntries(colors.map((color) => [color.id, color]))
const { order, assumedKnownCount } = buildLearningOrder(colors)
const hueSorted = sortByHue(colors)
const normalize = (snapshot) => snapshotForState(restoreSnapshot(snapshot, order, assumedKnownCount))
const initialSnapshot = () => normalize(undefined)
let store, durable = true, profile = null, record = null, state = null
let accepting = false, busy = false, saveFailed = false, epoch = 0, feedbackTimer = null
let lastTarget = null, currentTarget = null, cloud = null

function message(text = '') { for (const id of ['notice', 'settings-notice']) { $(id).textContent = text; $(id).hidden = !text } }
function updateStatus() {
  $('save-status').textContent = !durable || saveFailed ? 'Progress is not being saved on this device. Export a copy before closing.'
    : !profile ? 'Progress stays on this device unless you choose cloud saves.'
      : record?.conflict ? 'Another device changed this progress. Open Settings to choose a version.'
        : record?.binding && record.needsUpload ? 'Saved on this device. Waiting to upload.'
          : record?.binding ? 'Saved on this device and last saved to cloud.' : 'Saved on this device.'
  $('current-learner').textContent = profile?.label ?? 'Choose a learner'
  $('switch-profile').hidden = !profile
  for (const id of ['export-progress', 'reset-progress', 'remove-profile']) $(id).disabled = !profile || busy
  $('reset-progress').disabled = !state || busy
  $('export-recovery').disabled = !profile
  $('settings-profile').textContent = profile ? `Settings for ${profile.label}` : 'Learners and saving'
}
function stopQuestion() { epoch++; clearTimeout(feedbackTimer); accepting = false; currentTarget = null }
function shuffle(values) {
  const shuffled = [...values]
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]]
  }
  return shuffled
}
function renderSpectrum() {
  const canvas = $('spectrum-canvas')
  if (!state) return
  const ctx = canvas.getContext('2d')
  if (!ctx) return
  const rect = canvas.getBoundingClientRect(), vertical = rect.height >= rect.width
  canvas.width = vertical ? 1 : hueSorted.length
  canvas.height = vertical ? hueSorted.length : 1
  const mastered = new Set(state.masteredIds), active = new Set(state.activeBatchIds)
  hueSorted.forEach((color, i) => {
    ctx.globalAlpha = mastered.has(color.id) ? 1 : active.has(color.id) ? 0.55 : 0.12
    ctx.fillStyle = color.hex
    ctx.fillRect(vertical ? 0 : i, vertical ? i : 0, 1, 1)
  })
}
function renderQuestion() {
  if (!profile || !state) return
  clearTimeout(feedbackTimer)
  currentTarget = selectTarget(state, lastTarget)
  $('choices').replaceChildren(); $('feedback').hidden = true
  $('stats').textContent = `${state.masteredIds.length} mastered · ${state.activeBatchIds.length} in progress`
  $('complete').hidden = currentTarget !== null; $('question').hidden = currentTarget === null
  accepting = currentTarget !== null
  if (currentTarget !== null) {
    $('swatch').style.backgroundColor = byId[currentTarget].hex
    const choices = shuffle([currentTarget, ...selectDistractors(currentTarget, byId, [...state.activeBatchIds, ...state.masteredIds])])
    for (const id of choices) {
      const button = document.createElement('button')
      button.className = 'choice-btn'; button.type = 'button'; button.dataset.colorId = id
      button.textContent = byId[id].name
      button.addEventListener('click', () => onAnswer(id)); $('choices').append(button)
    }
  }
  renderSpectrum()
}
async function refreshProfiles() {
  const profiles = await store.listProfiles()
  $('known-learners').replaceChildren(); $('known-learners').hidden = profiles.length === 0
  for (const learner of profiles) {
    const button = document.createElement('button')
    button.type = 'button'; button.className = 'continue-btn'; button.textContent = `Continue as ${learner.label}`
    button.addEventListener('click', () => start(learner)); $('known-learners').append(button)
  }
  $('create-learner').disabled = profiles.length >= 8; $('profile-limit').hidden = profiles.length < 8
}
async function start(learner) {
  if (busy) return
  busy = true; stopQuestion()
  $('recovery-copies').replaceChildren(); $('recovery-copies').hidden = true
  const started = epoch
  try {
    const saved = await store.load(learner.id)
    if (!saved) throw new Error('That learner was removed in another tab. Choose another one.')
    profile = learner; record = saved; state = null
    const restored = restoreSnapshot(saved.snapshot, order, assumedKnownCount)
    if (started !== epoch) return
    profile = learner; record = saved; state = restored; saveFailed = false; lastTarget = null
    $('name-screen').hidden = true; $('quiz-screen').hidden = false; $('spectrum').hidden = false
    message(); renderQuestion(); cloud?.queue()
  } catch (error) {
    $('name-screen').hidden = false; $('quiz-screen').hidden = true; $('spectrum').hidden = true
    message(`${error.message} You can keep a copy with Export progress in Settings.`)
  }
  finally { busy = false; updateStatus() }
}
async function persist(next) {
  const id = profile.id, current = epoch
  const value = snapshotForState(next, record.snapshot)
  state = next
  try {
    const result = await store.save(id, value, record.localRevision)
    if (epoch !== current || profile?.id !== id) return false
    if (result.status === 'local-conflict') {
      record = result.record; state = restoreSnapshot(record.snapshot, order, assumedKnownCount)
      message('Another tab saved first. Its progress is loaded here. Your other answer was kept in a recovery copy in Settings.')
      saveFailed = false; return false
    }
    record = result.record; saveFailed = false; cloud?.queue(); return true
  } catch {
    saveFailed = true
    message('Your browser could not save this change. You can keep playing, but export your progress before leaving.')
    return false
  } finally { updateStatus() }
}
async function onAnswer(choiceId) {
  if (!accepting || busy || !currentTarget) return
  accepting = false; busy = true
  const answered = epoch, target = currentTarget, correct = choiceId === target
  for (const button of $('choices').children) {
    button.disabled = true
    if (button.dataset.colorId === target) button.classList.add('correct')
    else if (button.dataset.colorId === choiceId) button.classList.add('incorrect')
  }
  $('feedback').hidden = false; $('feedback').textContent = correct ? 'Correct!' : `That was ${byId[target].name}.`
  const started = performance.now()
  try { await persist(recordAnswer(state, target, correct)) }
  finally {
    busy = false
    if (epoch === answered) { lastTarget = target; feedbackTimer = setTimeout(renderQuestion, Math.max(0, 900 - (performance.now() - started))) }
    updateStatus()
  }
}
function download(value, filename) {
  const url = URL.createObjectURL(new Blob([JSON.stringify(value, null, 2)], { type: 'application/json' }))
  const link = document.createElement('a'); link.href = url; link.download = filename; link.click()
  setTimeout(() => URL.revokeObjectURL(url), 1000)
}
function exportProgress() {
  if (!profile || !record) return
  download({ app: 'color-learning', formatVersion: 1, curriculumId: CURRICULUM_ID, label: profile.label, exportedAt: new Date().toISOString(), snapshot: state ? snapshotForState(state, record.snapshot) : record.snapshot }, 'colors-progress.json')
}
async function showProfiles() {
  if (busy) return
  if (saveFailed && !confirm('Your latest progress is not saved. Export it in Settings first, or choose OK to leave it behind.')) return
  stopQuestion(); profile = null; record = null; state = null; saveFailed = false
  $('recovery-copies').replaceChildren(); $('recovery-copies').hidden = true
  $('quiz-screen').hidden = true; $('spectrum').hidden = true; $('name-screen').hidden = false
  await refreshProfiles(); updateStatus(); cloud?.renderConnected(); $('name-input').focus()
}
async function refreshActive() {
  if (!profile || busy || saveFailed) return
  const id = profile.id, current = epoch, latest = await store.load(profile.id)
  if (id !== profile?.id || current !== epoch || !latest || busy || saveFailed) return
  const changed = latest.localRevision !== record.localRevision
  record = latest
  if (changed) { stopQuestion(); state = restoreSnapshot(record.snapshot, order, assumedKnownCount); renderQuestion() }
  updateStatus()
}

$('name-form').addEventListener('submit', async (event) => {
  event.preventDefault(); if (busy) return; busy = true
  try {
    const learner = await store.createProfile($('name-input').value, initialSnapshot())
    busy = false; await start(learner); $('name-input').value = ''
  } catch (error) { message(error.message) }
  finally { busy = false; updateStatus() }
})
$('switch-profile').addEventListener('click', () => showProfiles().catch(() => message('Could not load the learner list. Export your current progress before closing.')))
$('open-settings').addEventListener('click', () => { updateStatus(); $('settings').showModal(); cloud?.renderConnected() })
$('close-settings').addEventListener('click', () => $('settings').close())
$('export-progress').addEventListener('click', exportProgress)
$('export-recovery').addEventListener('click', async () => {
  if (!profile) return
  try {
    const rows = await store.listRecovery(profile.id)
    if (!rows.length) { message('There are no recovery copies for this learner.'); return }
    const list = $('recovery-copies'); list.replaceChildren(); list.hidden = false
    for (const copy of rows) {
      const button = document.createElement('button'); button.type = 'button'
      button.textContent = `Export: ${copy.reason}, ${new Date(copy.createdAt).toLocaleString()}`
      const label = profile.label
      button.addEventListener('click', () => download({ app: 'color-learning', formatVersion: 1, curriculumId: CURRICULUM_ID, label, exportedAt: copy.createdAt, snapshot: copy.snapshot }, 'colors-recovered-progress.json'))
      list.append(button)
    }
    message('Choose a recovery copy to export. Then use Import progress to restore it as a separate learner.')
  } catch { message('Recovery copies could not be read. Your current progress can still be exported.') }
})
$('import-progress').addEventListener('change', async (event) => {
  const file = event.target.files?.[0]; event.target.value = ''
  if (!file || busy) return
  if (saveFailed && !confirm('Your current learner has unsaved progress. Export it first, or choose OK to leave it behind and import another learner.')) return
  busy = true
  try {
    if (file.size > 1048576) throw new Error('Choose a progress file smaller than 1 MB.')
    const data = JSON.parse(await file.text())
    if (data.app !== 'color-learning' || data.formatVersion !== 1 || data.curriculumId !== CURRICULUM_ID || !data.snapshot || typeof data.label !== 'string') throw new Error('Choose a Colors progress export from this curriculum.')
    const learner = await store.createProfile(data.label, normalize(data.snapshot))
    busy = false; await start(learner); $('settings').close()
  } catch (error) { message(error instanceof SyntaxError ? 'That file is not a readable progress export.' : error.message) }
  finally { busy = false; updateStatus() }
})
$('reset-progress').addEventListener('click', async () => {
  if (!profile || busy || !confirm(`Start ${profile.label} over with the eleven familiar colors? Export a copy first if you want to keep this progress.`)) return
  busy = true; stopQuestion()
  try { await persist(restoreSnapshot(undefined, order, assumedKnownCount)); renderQuestion() }
  finally { busy = false; updateStatus() }
})
$('remove-profile').addEventListener('click', async () => {
  if (!profile || busy || !confirm(`Remove ${profile.label} and their recovery copies from this device? Cloud copies are kept. Export first if you want a backup.`)) return
  busy = true; stopQuestion()
  try { await store.removeProfile(profile.id); saveFailed = false; busy = false; $('settings').close(); await showProfiles() }
  catch { message('This learner could not be removed. Their saved progress is still on this device.'); renderQuestion() }
  finally { busy = false; updateStatus() }
})
window.addEventListener('resize', renderSpectrum)
window.addEventListener('beforeunload', (event) => { if (saveFailed || busy) { event.preventDefault(); event.returnValue = '' } })
document.addEventListener('keydown', (event) => {
  if ($('settings').open || !accepting || !/^[1-4]$/.test(event.key) || /INPUT|TEXTAREA|SELECT/.test(event.target.tagName)) return
  $('choices').children[Number(event.key) - 1]?.click()
})
async function init() {
  try { store = await openProgressStore({ gameId: 'colors', curriculumId: CURRICULUM_ID, normalize }) }
  catch { durable = false; store = createMemoryStore(normalize) }
  cloud = createCloudPanel($('cloud-panel'), {
    store, durable, normalize, curriculumId: CURRICULUM_ID,
    getProfile: () => profile, getRecord: () => record, isBusy: () => busy || saveFailed || (!!profile && !state),
    onChange: refreshActive,
    onRestore: async (learner) => { await start(learner); $('settings').close() },
    onProfilesCleared: showProfiles,
    onMessage: message,
    describe: (snapshot) => Array.isArray(snapshot?.masteredIds) && Array.isArray(snapshot?.activeBatchIds) ? `${snapshot.masteredIds.length} mastered, ${snapshot.activeBatchIds.length} in progress` : 'This saved progress needs a different app version',
  })
  await refreshProfiles(); updateStatus()
}
init().catch(() => { message('Saved profiles could not be loaded. Keep this browser’s data until you can recover an export.'); $('create-learner').disabled = true })
