import { deltaE2000FromLab, hexToLab } from './colorDistance.js'

export const BATCH_SIZE = 5
export const MASTERY_STREAK = 3

// A question shows one swatch and four color names, so the learner is doing
// absolute identification, not side-by-side comparison: they have to know which
// name this color deserves without the alternatives in view to compare against.
// That is far harder than telling two adjacent swatches apart, so the floor has
// to sit well above a just-noticeable difference.
//
// Measured in CIEDE2000, and set by eye against rendered sample questions rather
// than derived. Light green vs lime green, the pair that prompted this, is 8.3
// apart and is excluded; cyan vs aqua at 11.3 is excluded; teal vs turquoise at
// 14.0 is allowed, and is about as hard as a question is meant to get. Below
// this bar the question is not hard, it is unanswerable, and no amount of
// progress should unlock a coin flip.
export const MIN_DISTRACTOR_SEPARATION = 12

// Colors nearly every adult already knows without being taught. New
// learners start with these pre-mastered so the game begins at the first
// color actually worth teaching, rather than re-testing the obvious.
export const ASSUMED_KNOWN_NAMES = [
  'red', 'orange', 'yellow', 'green', 'blue', 'purple',
  'pink', 'brown', 'black', 'white', 'grey',
]

// Reorders the full color list so every assumed-known color comes first
// (in their original relative order), followed by everything else in its
// original commonness order. Returns assumedKnownCount alongside the order
// (rather than letting callers assume it equals ASSUMED_KNOWN_NAMES.length)
// so a future data/name mismatch can't silently pre-master the wrong colors.
export function buildLearningOrder(colors) {
  const known = colors.filter((c) => ASSUMED_KNOWN_NAMES.includes(c.name))
  const rest = colors.filter((c) => !ASSUMED_KNOWN_NAMES.includes(c.name))
  return {
    order: [...known, ...rest].map((c) => c.id),
    assumedKnownCount: known.length,
  }
}

export function createLearnerState(orderedColorIds, batchSize = BATCH_SIZE, assumedKnownCount = 0) {
  const masteredIds = orderedColorIds.slice(0, assumedKnownCount)
  const activeBatchIds = orderedColorIds.slice(assumedKnownCount, assumedKnownCount + batchSize)
  const streaks = {}
  for (const id of activeBatchIds) streaks[id] = 0
  return { orderedColorIds, batchSize, activeBatchIds, streaks, masteredIds }
}

export function selectTarget(state, lastTargetId, rng = Math.random) {
  if (state.activeBatchIds.length === 0) return null
  const pool = state.activeBatchIds.length > 1
    ? state.activeBatchIds.filter((id) => id !== lastTargetId)
    : state.activeBatchIds
  const weights = pool.map((id) => MASTERY_STREAK + 1 - state.streaks[id])
  const total = weights.reduce((sum, w) => sum + w, 0)
  let roll = rng() * total
  for (let i = 0; i < pool.length; i++) {
    roll -= weights[i]
    if (roll <= 0) return pool[i]
  }
  return pool[pool.length - 1]
}

export function selectDistractors(
  targetId,
  colorsById,
  introducedIds,
  count = 3,
  minSeparation = MIN_DISTRACTOR_SEPARATION,
) {
  const targetLab = hexToLab(colorsById[targetId].hex)
  const ranked = introducedIds
    .filter((id) => id !== targetId)
    .map((id) => ({ id, distance: deltaE2000FromLab(targetLab, hexToLab(colorsById[id].hex)) }))
    .sort((a, b) => a.distance - b.distance)

  // Hardest legible options first: as close to the target as possible without
  // crossing the floor.
  const legible = ranked.filter((entry) => entry.distance >= minSeparation)
  if (legible.length >= count) return legible.slice(0, count).map((entry) => entry.id)

  // Too few clear the floor, which only happens with a very small introduced
  // pool. Pad with the most distant of the rest rather than showing the learner
  // fewer choices than the question promises.
  const tooClose = ranked.filter((entry) => entry.distance < minSeparation).reverse()
  return [...legible, ...tooClose].slice(0, count).map((entry) => entry.id)
}

export function recordAnswer(state, colorId, correct, masteryStreak = MASTERY_STREAK) {
  if (!state.activeBatchIds.includes(colorId)) return state
  const currentStreak = state.streaks[colorId] ?? 0
  const newStreak = correct ? currentStreak + 1 : 0

  if (newStreak < masteryStreak) {
    return { ...state, streaks: { ...state.streaks, [colorId]: newStreak } }
  }

  const activeBatchIds = state.activeBatchIds.filter((id) => id !== colorId)
  const masteredIds = [...state.masteredIds, colorId]
  const streaks = { ...state.streaks }
  delete streaks[colorId]

  // Take the first color the learner has not met yet, rather than indexing at
  // activeBatchIds.length + masteredIds.length. That arithmetic assumes the
  // introduced colors are exactly the leading slice of orderedColorIds, which
  // stops being true the moment the curriculum is reordered under a learner who
  // already has saved progress -- it would then hand back a color they already
  // hold and duplicate it into the batch.
  const introduced = new Set([...activeBatchIds, ...masteredIds])
  const nextId = state.orderedColorIds.find((id) => !introduced.has(id))
  if (nextId) {
    activeBatchIds.push(nextId)
    streaks[nextId] = 0
  }

  return { ...state, activeBatchIds, masteredIds, streaks }
}
