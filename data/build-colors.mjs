import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { deltaE2000 } from '../public/lib/colorDistance.js'
import { ASSUMED_KNOWN_NAMES } from '../public/lib/progression.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export function slugify(name) {
  return name
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

export function parseXkcdSource(text) {
  return text
    .split('\n')
    .filter((line) => line.trim() && !line.startsWith('#'))
    .map((line) => {
      const [name, hex] = line.split('\t')
      return { name: name.trim(), hex: hex.trim() }
    })
}

export function buildColorList(entries) {
  const commonFirst = [...entries].reverse()
  const seenIds = new Set()
  return commonFirst.map((entry, index) => {
    let id = slugify(entry.name)
    let suffix = 2
    while (seenIds.has(id)) {
      id = `${slugify(entry.name)}-${suffix}`
      suffix += 1
    }
    seenIds.add(id)
    return {
      id,
      name: entry.name,
      hex: entry.hex,
      rank: index,
    }
  })
}

// How far apart (CIEDE2000) a color must be from everything already introduced
// before it is allowed into the curriculum, as a function of how many have been
// taught.
//
// Frequency order alone measures how often survey respondents typed a name, not
// whether the color is distinguishable from what the learner already knows, and
// the two are uncorrelated: in pure frequency order olive arrives right beside
// olive green (3.3 apart) and lavender beside lilac (2.3), so the curriculum
// served near-duplicate vocabulary in its opening stretch.
//
// This bar is a preference, not a fairness guarantee. Fairness is enforced at
// question time by MIN_DISTRACTOR_SEPARATION, which is what stops two colors
// the eye cannot separate from ever being offered as alternatives to each other.
// What this bar buys is a curriculum that spreads across the gamut before it
// drills into any one region, so early vocabulary is broad rather than six
// shades of the same green.
//
// Swept against the dataset: at 18 the closest pair inside the first 50 taught
// goes from 5.5 to 7.8, while the mean commonness rank of those 50 slips only
// from 34 to 43 and the rarest among them is #91 of 949. Higher bars buy little
// and start pulling genuinely obscure colors forward. The bar decays with
// progress so the later curriculum is free to get fine-grained.
export const SEPARATION_AT_START = 18
export const SEPARATION_DECAY = 0.24

// How far ahead we may reach for a more distinct replacement. Bounds how far a
// rare color can be pulled forward past commoner ones.
export const LOOKAHEAD = 60

// A color that keeps losing to more-distinct neighbors still has to appear
// eventually, or a color adjacent to a very common one could be pushed
// arbitrarily far past where its own commonness justifies.
export const MAX_DISPLACEMENT = 250

export function minSeparation(taughtCount, start = SEPARATION_AT_START, decay = SEPARATION_DECAY) {
  return start / Math.pow(1 + taughtCount, decay)
}

function nearestIntroduced(color, introduced) {
  let nearest = Infinity
  for (const other of introduced) {
    const d = deltaE2000(color.hex, other.hex)
    if (d < nearest) nearest = d
  }
  return nearest
}

// Reorders a frequency-ranked list into a teaching order, keeping frequency as
// the primary signal and only stepping past a color when it is too close to
// something the learner has already met. Returns a new list whose `rank` is the
// curriculum position and whose `commonness` preserves the original frequency
// rank, so the reordering stays inspectable.
export function orderCurriculum(colors, options = {}) {
  const {
    seedNames = ASSUMED_KNOWN_NAMES,
    lookahead = LOOKAHEAD,
    maxDisplacement = MAX_DISPLACEMENT,
    separationAtStart = SEPARATION_AT_START,
    separationDecay = SEPARATION_DECAY,
  } = options

  // The seed colors are pre-mastered for every new learner, so they count as
  // already introduced when judging whether the next color is distinct enough.
  const seed = colors.filter((c) => seedNames.includes(c.name))
  const introduced = [...seed]
  const queue = colors
    .filter((c) => !seedNames.includes(c.name))
    .map((color, from) => ({ color, from, isolation: 0 }))

  for (const item of queue) item.isolation = nearestIntroduced(item.color, introduced)

  const taught = []
  while (queue.length > 0) {
    const bar = minSeparation(taught.length, separationAtStart, separationDecay)
    const window = Math.min(lookahead, queue.length)

    let chosenIndex = -1
    let mostIsolated = 0
    for (let i = 0; i < window; i++) {
      if (queue[i].isolation > queue[mostIsolated].isolation) mostIsolated = i
      if (chosenIndex === -1 && queue[i].isolation >= bar) chosenIndex = i
    }
    // Nothing in reach clears the bar, so take the best available rather than
    // stalling. Late in the curriculum this is the normal path: by then every
    // remaining color is close to something, which is the point.
    if (chosenIndex === -1) chosenIndex = mostIsolated
    if (taught.length - queue[0].from >= maxDisplacement) chosenIndex = 0

    const [chosen] = queue.splice(chosenIndex, 1)
    taught.push(chosen.color)
    introduced.push(chosen.color)

    // Introducing one color can only ever pull a candidate's nearest-neighbor
    // distance down, so update incrementally instead of rescanning.
    for (const item of queue) {
      const d = deltaE2000(item.color.hex, chosen.color.hex)
      if (d < item.isolation) item.isolation = d
    }
  }

  return [...seed, ...taught].map((color, index) => ({
    id: color.id,
    name: color.name,
    hex: color.hex,
    rank: index,
    commonness: color.rank,
  }))
}

function main() {
  const sourcePath = path.join(__dirname, 'xkcd-rgb-source.txt')
  const outputPath = path.join(__dirname, '..', 'public', 'data', 'colors.json')
  const text = readFileSync(sourcePath, 'utf8')
  const colors = orderCurriculum(buildColorList(parseXkcdSource(text)))
  mkdirSync(path.dirname(outputPath), { recursive: true })
  writeFileSync(outputPath, JSON.stringify(colors, null, 2))
  console.log(`Wrote ${colors.length} colors to ${outputPath}`)
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main()
}
