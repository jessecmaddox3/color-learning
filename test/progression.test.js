import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  createLearnerState,
  selectTarget,
  selectDistractors,
  recordAnswer,
  buildLearningOrder,
  BATCH_SIZE,
  MASTERY_STREAK,
  ASSUMED_KNOWN_NAMES,
} from '../public/lib/progression.js'

test('the final mastered color ends the quiz instead of producing an undefined target', () => {
  let state = createLearnerState(['last-color'], 1)
  for (let i = 0; i < MASTERY_STREAK; i++) state = recordAnswer(state, 'last-color', true)
  assert.equal(selectTarget(state, 'last-color'), null)
  assert.deepEqual(state.masteredIds, ['last-color'])
})

test('a stale answer cannot reintroduce an already mastered or unknown color', () => {
  const state = { ...createLearnerState(['a', 'b'], 1, 1) }
  assert.deepEqual(recordAnswer(state, 'a', true), state)
  assert.deepEqual(recordAnswer(state, 'removed-color', true), state)
})

test('createLearnerState activates the first BATCH_SIZE colors with zero streaks', () => {
  const ids = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
  const state = createLearnerState(ids)
  assert.deepEqual(state.activeBatchIds, ids.slice(0, BATCH_SIZE))
  for (const id of state.activeBatchIds) {
    assert.equal(state.streaks[id], 0)
  }
  assert.deepEqual(state.masteredIds, [])
})

test('createLearnerState pre-masters the first assumedKnownCount colors and starts the active batch after them', () => {
  const ids = ['k1', 'k2', 'k3', 'a', 'b', 'c', 'd', 'e']
  const state = createLearnerState(ids, BATCH_SIZE, 3)
  assert.deepEqual(state.masteredIds, ['k1', 'k2', 'k3'])
  assert.deepEqual(state.activeBatchIds, ['a', 'b', 'c', 'd', 'e'])
  for (const id of state.activeBatchIds) {
    assert.equal(state.streaks[id], 0)
  }
})

test('buildLearningOrder puts assumed-known colors first, in their original relative order', () => {
  const colors = [
    { id: 'cloudy-blue', name: 'cloudy blue' },
    { id: 'blue', name: 'blue' },
    { id: 'teal', name: 'teal' },
    { id: 'red', name: 'red' },
  ]
  const { order, assumedKnownCount } = buildLearningOrder(colors)
  assert.deepEqual(order, ['blue', 'red', 'cloudy-blue', 'teal'])
  assert.equal(assumedKnownCount, 2)
})

test('buildLearningOrder produces exactly ASSUMED_KNOWN_NAMES.length known colors up front for the real dataset shape', () => {
  const colors = ASSUMED_KNOWN_NAMES.map((name) => ({ id: name, name }))
  colors.push({ id: 'teal', name: 'teal' }, { id: 'cyan', name: 'cyan' })
  const { order, assumedKnownCount } = buildLearningOrder(colors)
  assert.equal(order.length, ASSUMED_KNOWN_NAMES.length + 2)
  assert.equal(assumedKnownCount, ASSUMED_KNOWN_NAMES.length)
  assert.deepEqual(order.slice(0, ASSUMED_KNOWN_NAMES.length), ASSUMED_KNOWN_NAMES)
})

test('buildLearningOrder reports a lower assumedKnownCount when an assumed-known name is missing from the data', () => {
  const colors = ASSUMED_KNOWN_NAMES.filter((name) => name !== 'grey').map((name) => ({ id: name, name }))
  const { assumedKnownCount } = buildLearningOrder(colors)
  assert.equal(assumedKnownCount, ASSUMED_KNOWN_NAMES.length - 1)
})

test('recordAnswer increments streak on a correct answer', () => {
  const state = createLearnerState(['a', 'b', 'c', 'd', 'e', 'f'])
  const next = recordAnswer(state, 'a', true)
  assert.equal(next.streaks.a, 1)
})

test('recordAnswer resets streak to zero on a wrong answer', () => {
  const state = createLearnerState(['a', 'b', 'c', 'd', 'e', 'f'])
  const afterCorrect = recordAnswer(state, 'a', true)
  const afterWrong = recordAnswer(afterCorrect, 'a', false)
  assert.equal(afterWrong.streaks.a, 0)
})

test('recordAnswer masters a color after MASTERY_STREAK correct answers and unlocks the next one', () => {
  let state = createLearnerState(['a', 'b', 'c', 'd', 'e', 'f'])
  for (let i = 0; i < MASTERY_STREAK; i++) {
    state = recordAnswer(state, 'a', true)
  }
  assert.deepEqual(state.masteredIds, ['a'])
  assert.ok(!state.activeBatchIds.includes('a'))
  assert.ok(state.activeBatchIds.includes('f'))
  assert.equal(state.streaks.f, 0)
  assert.equal('a' in state.streaks, false)
})

test('recordAnswer unlocks a color the learner has not met, not one by position', () => {
  // A learner whose saved progress predates a curriculum reorder holds colors
  // that are no longer the leading slice of orderedColorIds. Unlocking by index
  // would hand back a color already in hand and duplicate it into the batch.
  const state = {
    orderedColorIds: ['a', 'b', 'c', 'd', 'e'],
    batchSize: 2,
    activeBatchIds: ['c', 'd'],
    masteredIds: [],
    streaks: { c: 2, d: 0 },
  }
  const next = recordAnswer(state, 'c', true)

  assert.deepEqual(next.masteredIds, ['c'])
  assert.deepEqual(next.activeBatchIds, ['d', 'a'])
  const held = [...next.activeBatchIds, ...next.masteredIds]
  assert.equal(new Set(held).size, held.length, 'no color may be held twice')
})

test('recordAnswer does not add a new color once the ordered list is exhausted', () => {
  let state = createLearnerState(['a', 'b', 'c', 'd', 'e'])
  for (let i = 0; i < MASTERY_STREAK; i++) {
    state = recordAnswer(state, 'a', true)
  }
  assert.equal(state.activeBatchIds.length, BATCH_SIZE - 1)
})

test('selectTarget never repeats the immediately preceding target when more than one color is active', () => {
  const state = createLearnerState(['a', 'b', 'c', 'd', 'e', 'f'])
  const picked = selectTarget(state, 'a', () => 0)
  assert.notEqual(picked, 'a')
})

test('selectTarget favors lower-streak colors', () => {
  let state = createLearnerState(['a', 'b', 'c', 'd', 'e', 'f'])
  state = recordAnswer(state, 'a', true)
  state = recordAnswer(state, 'a', true)
  const picked = selectTarget(state, undefined, () => 0.999999)
  assert.notEqual(picked, 'a')
})

test('selectDistractors returns the closest colors that still clear the floor', () => {
  const colorsById = {
    base: { id: 'base', hex: '#808080' },
    near: { id: 'near', hex: '#828282' },
    mid: { id: 'mid', hex: '#b0b0b0' },
    far: { id: 'far', hex: '#ffffff' },
  }
  // 'near' is 1 unit from the target: indistinguishable, so it must not be
  // offered even though it is the closest and would make the hardest question.
  const distractors = selectDistractors('base', colorsById, ['base', 'near', 'mid', 'far'], 2)
  assert.deepEqual(distractors, ['mid', 'far'])
})

test('selectDistractors never offers a color the eye cannot separate from the target', () => {
  const colorsById = {
    target: { id: 'target', hex: '#96f97b' }, // light green
    lime: { id: 'lime', hex: '#89fe05' }, // lime green: 8.3 away, the reported bug
    teal: { id: 'teal', hex: '#029386' },
    magenta: { id: 'magenta', hex: '#c20078' },
    navy: { id: 'navy', hex: '#01153e' },
  }
  const ids = ['target', 'lime', 'teal', 'magenta', 'navy']
  const distractors = selectDistractors('target', colorsById, ids, 3)
  assert.ok(!distractors.includes('lime'), 'lime green is not a fair option for light green')
  assert.equal(distractors.length, 3)
})

test('selectDistractors still fills the slate when too few colors clear the floor', () => {
  // A learner this early has almost nothing introduced; the question must still
  // offer a full set of choices rather than silently shrinking.
  const colorsById = {
    base: { id: 'base', hex: '#808080' },
    a: { id: 'a', hex: '#818181' },
    b: { id: 'b', hex: '#828282' },
    c: { id: 'c', hex: '#838383' },
  }
  const distractors = selectDistractors('base', colorsById, ['base', 'a', 'b', 'c'], 3)
  assert.equal(distractors.length, 3)
  assert.ok(!distractors.includes('base'))
  // Falls back to the most distant of a bad lot, so the question is as fair as
  // the available colors allow.
  assert.equal(distractors[0], 'c')
})

test('selectDistractors honours an explicit separation floor', () => {
  const colorsById = {
    base: { id: 'base', hex: '#808080' },
    mid: { id: 'mid', hex: '#b0b0b0' },
    far: { id: 'far', hex: '#ffffff' },
  }
  const strict = selectDistractors('base', colorsById, ['base', 'mid', 'far'], 1, 100)
  // Nothing clears an absurd floor, so it degrades to the most distant color.
  assert.deepEqual(strict, ['far'])
})
