import { test } from 'node:test'
import assert from 'node:assert/strict'
import { createLearnerState, recordAnswer, selectTarget } from '../public/lib/progression.js'
import { restoreSnapshot, snapshotForState, UnsupportedSnapshot } from '../public/lib/snapshot.js'

test('completed progress resumes completed, with no fabricated next color', () => {
  const saved = { formatVersion: 1, activeBatchIds: [], masteredIds: ['a', 'b'], streaks: {} }
  const state = restoreSnapshot(saved, ['a', 'b'])
  assert.equal(selectTarget(state), null)
  assert.deepEqual(state.masteredIds, ['a', 'b'])
})

test('removed, duplicate and overlapping saved IDs cannot enter the next quiz', () => {
  const saved = { formatVersion: 1, masteredIds: ['a', 'a', 'retired'], activeBatchIds: ['a', 'b', 'b', 'retired'], streaks: { b: 2, retired: 2 } }
  const state = restoreSnapshot(saved, ['a', 'b', 'c', 'd'])
  assert.deepEqual(state.masteredIds, ['a'])
  assert.deepEqual(state.activeBatchIds, ['b', 'c', 'd'])
  assert.deepEqual(state.streaks, { b: 2, c: 0, d: 0 })
})

test('malformed streaks restart only the affected color without granting mastery', () => {
  const state = restoreSnapshot({ formatVersion: 1, masteredIds: [], activeBatchIds: ['a', 'b', 'c'], streaks: { a: -1, b: '3', c: 999 } }, ['a', 'b', 'c'])
  assert.deepEqual(state.streaks, { a: 0, b: 0, c: 0 })
  assert.deepEqual(state.masteredIds, [])
})

test('wrong JSON shapes and newer formats stay recoverable rather than becoming a new save', () => {
  for (const saved of [null, [], false, 'learner', { formatVersion: 1, activeBatchIds: null, masteredIds: [], streaks: {} }]) {
    assert.throws(() => restoreSnapshot(saved, ['a']))
  }
  assert.throws(() => restoreSnapshot({ formatVersion: 2 }, ['a']), UnsupportedSnapshot)
})

test('earned mastery dates survive later answers and serialization never includes account details', () => {
  let state = createLearnerState(['a', 'b'], 1)
  let snapshot = snapshotForState(state)
  for (let i = 0; i < 3; i++) {
    state = recordAnswer(state, 'a', true)
    snapshot = snapshotForState({ ...state, email: 'invented@example.invalid', cloudKey: 'must-not-copy' }, snapshot, '2030-04-05T12:00:00.000Z')
  }
  state = recordAnswer(state, 'b', false)
  snapshot = snapshotForState(state, snapshot, '2031-04-05T12:00:00.000Z')
  assert.equal(snapshot.masteredAt.a, '2030-04-05T12:00:00.000Z')
  assert.equal('email' in snapshot, false)
  assert.equal('cloudKey' in snapshot, false)
  const restored = restoreSnapshot(snapshot, ['a', 'b'])
  assert.equal(restored.masteredAt.a, '2030-04-05T12:00:00.000Z')
})

test('assumed-known colors are not assigned invented earned dates', () => {
  const state = createLearnerState(['red', 'blue', 'teal'], 5, 2)
  const saved = snapshotForState(state)
  assert.deepEqual(saved.masteredIds, ['red', 'blue'])
  assert.deepEqual(saved.masteredAt, {})
})
