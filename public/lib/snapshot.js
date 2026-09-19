import { BATCH_SIZE, MASTERY_STREAK, createLearnerState } from './progression.js'

export const FORMAT_VERSION = 1
export const CURRICULUM_ID = 'xkcd-949-v1'

export class UnsupportedSnapshot extends Error {
  constructor() {
    super('This progress was saved by a different version. Keep an export before changing it.')
    this.name = 'UnsupportedSnapshot'
  }
}

const plainObject = (value) => value !== null && typeof value === 'object' && !Array.isArray(value)
const ids = (values, allowed) => [...new Set(values.filter((id) => typeof id === 'string' && allowed.has(id)))]

/** Decode only learning fields, never config, account details, or arbitrary imported properties. */
export function restoreSnapshot(snapshot, orderedColorIds, assumedKnownCount = 0) {
  if (snapshot === undefined) return createLearnerState(orderedColorIds, BATCH_SIZE, assumedKnownCount)
  if (!plainObject(snapshot)) throw new TypeError('Saved progress is not a learning record.')
  if (snapshot.formatVersion !== FORMAT_VERSION) throw new UnsupportedSnapshot()
  if (!Array.isArray(snapshot.masteredIds) || !Array.isArray(snapshot.activeBatchIds) || !plainObject(snapshot.streaks)) {
    throw new TypeError('Saved progress is incomplete. Keep an export before starting again.')
  }
  const allowed = new Set(orderedColorIds)
  const masteredIds = ids(snapshot.masteredIds, allowed)
  const mastered = new Set(masteredIds)
  const activeBatchIds = ids(snapshot.activeBatchIds, allowed).filter((id) => !mastered.has(id)).slice(0, BATCH_SIZE)
  const introduced = new Set([...masteredIds, ...activeBatchIds])
  for (const id of orderedColorIds) {
    if (activeBatchIds.length === BATCH_SIZE) break
    if (!introduced.has(id)) {
      activeBatchIds.push(id)
      introduced.add(id)
    }
  }
  const streaks = Object.fromEntries(activeBatchIds.map((id) => {
    const value = snapshot.streaks[id]
    return [id, Number.isInteger(value) && value >= 0 && value < MASTERY_STREAK ? value : 0]
  }))
  const masteredAt = {}
  if (plainObject(snapshot.masteredAt)) {
    for (const id of masteredIds) {
      const value = snapshot.masteredAt[id]
      if (typeof value === 'string' && /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value) && Number.isFinite(Date.parse(value))) {
        masteredAt[id] = value
      }
    }
  }
  return { orderedColorIds, batchSize: BATCH_SIZE, activeBatchIds, masteredIds, streaks, masteredAt }
}

export function snapshotForState(state, previous = null, now = new Date().toISOString()) {
  const previousDates = previous?.masteredAt ?? state.masteredAt ?? {}
  const previouslyMastered = new Set(previous?.masteredIds ?? state.masteredIds)
  const masteredAt = {}
  for (const id of state.masteredIds) {
    if (previousDates[id]) masteredAt[id] = previousDates[id]
    else if (!previouslyMastered.has(id)) masteredAt[id] = now
  }
  return {
    formatVersion: FORMAT_VERSION,
    activeBatchIds: [...state.activeBatchIds],
    masteredIds: [...state.masteredIds],
    streaks: Object.fromEntries(state.activeBatchIds.map((id) => [id, state.streaks[id] ?? 0])),
    masteredAt,
  }
}
