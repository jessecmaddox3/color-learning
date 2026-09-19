import { test } from 'node:test'
import assert from 'node:assert/strict'
import {
  hexToRgb,
  hexToLab,
  deltaE2000,
  deltaE2000FromLab,
  hexToHsl,
  sortByHue,
} from '../public/lib/colorDistance.js'

test('hexToRgb parses a hex string into RGB components', () => {
  assert.deepEqual(hexToRgb('#ff0080'), [255, 0, 128])
})

test('hexToLab places pure white and black at the ends of the L axis', () => {
  const [whiteL, whiteA, whiteB] = hexToLab('#ffffff')
  assert.ok(Math.abs(whiteL - 100) < 0.01)
  assert.ok(Math.abs(whiteA) < 0.01 && Math.abs(whiteB) < 0.01)
  assert.ok(Math.abs(hexToLab('#000000')[0]) < 0.01)
})

// The published CIEDE2000 test data from Sharma, Wu & Dalal. These exist because
// the formula has genuinely nasty edge cases -- the hue-average wrap and the
// rotation term near 275 degrees -- that a plausible-looking implementation gets
// wrong while still returning sensible-seeming numbers for ordinary pairs.
test('deltaE2000 matches the Sharma/Wu/Dalal reference pairs', () => {
  const cases = [
    [[50, 2.6772, -79.7751], [50, 0, -82.7485], 2.0425],
    [[50, 3.1571, -77.2803], [50, 0, -82.7485], 2.8615],
    [[50, 2.8361, -74.02], [50, 0, -82.7485], 3.4412],
    [[50, -1.3802, -84.2814], [50, 0, -82.7485], 1.0],
    [[50, -1.1848, -84.8006], [50, 0, -82.7485], 1.0],
    [[50, -0.9009, -85.5211], [50, 0, -82.7485], 1.0],
    [[50, 0, 0], [50, -1, 2], 2.3669],
    [[50, -1, 2], [50, 0, 0], 2.3669],
    [[50, 2.49, -0.001], [50, -2.49, 0.0009], 7.1792],
    [[50, 2.5, 0], [50, 0, -2.5], 4.3065],
    [[50, 2.5, 0], [73, 25, -18], 27.1492],
    [[50, 2.5, 0], [61, -5, 29], 22.8977],
    [[50, 2.5, 0], [56, -27, -3], 31.903],
    [[50, 2.5, 0], [58, 24, 15], 19.4535],
    [[60.2574, -34.0099, 36.2677], [60.4626, -34.1751, 39.4387], 1.2644],
    [[63.0109, -31.0961, -5.8663], [62.8187, -29.7946, -4.0864], 1.263],
    [[22.7233, 20.0904, -46.694], [23.0331, 14.973, -42.5619], 2.0373],
  ]
  for (const [labA, labB, expected] of cases) {
    const actual = deltaE2000FromLab(labA, labB)
    assert.ok(
      Math.abs(actual - expected) < 0.0001,
      `expected ${expected}, got ${actual.toFixed(4)} for ${labA} vs ${labB}`,
    )
  }
})

test('deltaE2000 is zero for identical colors and symmetric', () => {
  assert.equal(deltaE2000('#123456', '#123456'), 0)
  assert.equal(
    deltaE2000('#96f97b', '#89fe05').toFixed(6),
    deltaE2000('#89fe05', '#96f97b').toFixed(6),
  )
})

// The reason the app moved off the redmean RGB approximation. Redmean scored
// these two pairs at 186 and 188, i.e. equally far apart; they are not, and the
// quiz was serving the first pair as a legitimate question.
test('deltaE2000 separates lookalike greens from genuinely distinct colors', () => {
  const lightVsLimeGreen = deltaE2000('#96f97b', '#89fe05')
  const magentaVsViolet = deltaE2000('#c20078', '#9a0eea')
  assert.ok(lightVsLimeGreen < 10, `light/lime green measured ${lightVsLimeGreen}`)
  assert.ok(magentaVsViolet > 2 * lightVsLimeGreen)
})

test('hexToHsl identifies pure red, green, and blue hues', () => {
  assert.equal(hexToHsl('#ff0000').h, 0)
  assert.equal(hexToHsl('#00ff00').h, 120)
  assert.equal(hexToHsl('#0000ff').h, 240)
})

test('hexToHsl reports zero saturation for grayscale colors', () => {
  assert.equal(hexToHsl('#808080').s, 0)
})

test('sortByHue orders colors around the color wheel', () => {
  const colors = [
    { id: 'blue', hex: '#0000ff' },
    { id: 'red', hex: '#ff0000' },
    { id: 'green', hex: '#00ff00' },
  ]
  const sorted = sortByHue(colors).map((c) => c.id)
  assert.deepEqual(sorted, ['red', 'green', 'blue'])
})
