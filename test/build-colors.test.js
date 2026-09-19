import { test } from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import {
  slugify,
  parseXkcdSource,
  buildColorList,
  orderCurriculum,
  minSeparation,
  MAX_DISPLACEMENT,
} from '../data/build-colors.mjs'
import { deltaE2000 } from '../public/lib/colorDistance.js'
import { ASSUMED_KNOWN_NAMES } from '../public/lib/progression.js'

const sourceText = readFileSync(
  path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'data', 'xkcd-rgb-source.txt'),
  'utf8',
)

test('slugify lowercases and hyphenates', () => {
  assert.equal(slugify('Macaroni and Cheese'), 'macaroni-and-cheese')
})

test('parseXkcdSource skips the license comment line', () => {
  const text = '# License: https://creativecommons.org/publicdomain/zero/1.0/\ncloudy blue\t#acc2d9\t\nteal\t#029386\t\n'
  const entries = parseXkcdSource(text)
  assert.deepEqual(entries, [
    { name: 'cloudy blue', hex: '#acc2d9' },
    { name: 'teal', hex: '#029386' },
  ])
})

test('buildColorList reverses source order so the most common colors rank first', () => {
  const entries = [
    { name: 'cloudy blue', hex: '#acc2d9' },
    { name: 'teal', hex: '#029386' },
  ]
  const colors = buildColorList(entries)
  assert.equal(colors[0].id, 'teal')
  assert.equal(colors[0].rank, 0)
  assert.equal(colors[0].hex, '#029386')
  assert.equal(colors[1].id, 'cloudy-blue')
  assert.equal(colors[1].rank, 1)
})

test('buildColorList disambiguates colliding slugs instead of dropping entries', () => {
  const entries = [
    { name: 'yellow green', hex: '#c0fb2d' },
    { name: 'yellow/green', hex: '#c8fd3d' },
  ]
  const colors = buildColorList(entries)
  const ids = colors.map((c) => c.id)
  assert.equal(new Set(ids).size, ids.length)
  assert.equal(colors.length, 2)
})

// The whole "progressive by commonness" premise rests on this file being sorted
// least-common-first, which nothing in the file itself states -- its only comment
// is the license. A data refresh that arrived alphabetized would silently produce
// a curriculum ordered by nothing at all, and every other test would still pass.
test('the xkcd source is ordered least-common-first, which buildColorList reverses', () => {
  const entries = parseXkcdSource(sourceText)
  const lastFive = entries.slice(-5).map((e) => e.name)
  assert.deepEqual(lastFive, ['brown', 'pink', 'blue', 'green', 'purple'])

  const basic = new Set(['red', 'blue', 'green', 'yellow', 'purple', 'pink', 'brown', 'orange'])
  const firstFifty = entries.slice(0, 50).map((e) => e.name)
  assert.equal(firstFifty.filter((n) => basic.has(n)).length, 0)
})

test('minSeparation starts at the configured bar and decays toward zero', () => {
  assert.equal(minSeparation(0, 18, 0.24), 18)
  assert.ok(minSeparation(100, 18, 0.24) < minSeparation(10, 18, 0.24))
  assert.ok(minSeparation(900, 18, 0.24) < 5)
})

test('orderCurriculum keeps every color exactly once and seeds the known ones first', () => {
  const colors = orderCurriculum(buildColorList(parseXkcdSource(sourceText)))
  const ids = colors.map((c) => c.id)
  assert.equal(new Set(ids).size, ids.length)
  assert.equal(colors.length, 949)

  const seeded = colors.slice(0, ASSUMED_KNOWN_NAMES.length).map((c) => c.name)
  assert.deepEqual([...seeded].sort(), [...ASSUMED_KNOWN_NAMES].sort())
  colors.forEach((c, i) => assert.equal(c.rank, i))
})

test('orderCurriculum defers a color that collides with one already introduced', () => {
  // 'almost teal' is a near-duplicate of 'teal' and would land second in pure
  // frequency order; 'crimson' is far from everything already introduced.
  const entries = [
    { name: 'crimson', hex: '#8c000f' },
    { name: 'almost teal', hex: '#029b8c' },
    { name: 'teal', hex: '#029386' },
  ]
  const ordered = orderCurriculum(buildColorList(entries), { seedNames: [] })
  assert.deepEqual(ordered.map((c) => c.name), ['teal', 'crimson', 'almost teal'])
  assert.equal(ordered[2].commonness, 1)
})

test('orderCurriculum treats the assumed-known seed as already introduced', () => {
  // 'nearly blue' collides with the seeded 'blue', so it must not lead even
  // though it is the most common of the non-seed colors.
  const entries = [
    { name: 'crimson', hex: '#8c000f' },
    { name: 'nearly blue', hex: '#0345e0' },
    { name: 'blue', hex: '#0343df' },
  ]
  const ordered = orderCurriculum(buildColorList(entries), { seedNames: ['blue'] })
  assert.deepEqual(ordered.map((c) => c.name), ['blue', 'crimson', 'nearly blue'])
})

test('orderCurriculum never displaces a color further than the cap allows', () => {
  const colors = orderCurriculum(buildColorList(parseXkcdSource(sourceText)))
  const taught = colors.slice(ASSUMED_KNOWN_NAMES.length)
  // commonness is the rank across all colors; measure displacement within the
  // taught sequence by comparing against how many commoner colors precede it.
  const order = [...taught].sort((a, b) => a.commonness - b.commonness)
  const originalIndex = new Map(order.map((c, i) => [c.id, i]))
  for (const [i, color] of taught.entries()) {
    assert.ok(
      i - originalIndex.get(color.id) <= MAX_DISPLACEMENT,
      `${color.name} was pushed back ${i - originalIndex.get(color.id)} places`,
    )
  }
})

// The point of the whole exercise: the early curriculum must not serve
// discriminations harder than the late curriculum. Pure frequency order failed
// this badly (olive/olive green at 3.3 CIEDE2000 by color 25).
test('the real curriculum introduces early colors well clear of what came before', () => {
  const colors = orderCurriculum(buildColorList(parseXkcdSource(sourceText)))
  const introduced = colors.slice(0, ASSUMED_KNOWN_NAMES.length)
  const isolation = []
  for (const color of colors.slice(ASSUMED_KNOWN_NAMES.length)) {
    isolation.push(Math.min(...introduced.map((p) => deltaE2000(color.hex, p.hex))))
    introduced.push(color)
  }

  // CIEDE2000 units. Pure frequency order put the closest early pair at 3.3
  // (olive/olive green); the spacing pass lifts the first 50 clear of that.
  assert.ok(Math.min(...isolation.slice(0, 25)) >= 8, 'first 25 must stay well separated')
  assert.ok(Math.min(...isolation.slice(0, 50)) >= 7, 'first 50 must stay well separated')

  // ...and it must still get genuinely hard later, or the ramp is pointless.
  const median = (a) => [...a].sort((x, y) => x - y)[Math.floor(a.length / 2)]
  assert.ok(median(isolation.slice(0, 50)) > median(isolation.slice(100, 200)))
  assert.ok(median(isolation.slice(100, 200)) > median(isolation.slice(400, 600)))
})
