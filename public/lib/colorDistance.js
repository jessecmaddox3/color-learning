export function hexToRgb(hex) {
  const clean = hex.replace('#', '')
  return [
    parseInt(clean.slice(0, 2), 16),
    parseInt(clean.slice(2, 4), 16),
    parseInt(clean.slice(4, 6), 16),
  ]
}

// sRGB (D65) -> CIELAB. Lab is roughly perceptually uniform, which raw RGB is
// emphatically not, and it is the space CIEDE2000 is defined in.
// Memoised: the quiz measures the target against every color the learner has
// met, so the same few hundred hexes get converted over and over. Callers must
// treat the returned array as read-only.
const labCache = new Map()

export function hexToLab(hex) {
  const cached = labCache.get(hex)
  if (cached) return cached
  const lab = computeLab(hex)
  labCache.set(hex, lab)
  return lab
}

function computeLab(hex) {
  const [r8, g8, b8] = hexToRgb(hex)
  const linear = (v) => {
    const c = v / 255
    return c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4)
  }
  const r = linear(r8)
  const g = linear(g8)
  const b = linear(b8)
  const x = (r * 0.4124564 + g * 0.3575761 + b * 0.1804375) / 0.95047
  const y = r * 0.2126729 + g * 0.7151522 + b * 0.0721750
  const z = (r * 0.0193339 + g * 0.1191920 + b * 0.9503041) / 1.08883
  const f = (t) => (t > 216 / 24389 ? Math.cbrt(t) : (841 / 108) * t + 4 / 29)
  const fx = f(x)
  const fy = f(y)
  const fz = f(z)
  return [116 * fy - 16, 500 * (fx - fy), 200 * (fy - fz)]
}

const DEG = Math.PI / 180
const RAD = 180 / Math.PI

// CIEDE2000, the CIE's standard perceptual color difference.
//
// This replaced a "redmean" RGB approximation, which was measurably wrong for
// exactly the judgment this app rests on. Redmean scored light green vs lime
// green at 186 and magenta vs violet at 188, calling them equally separated;
// CIEDE2000 puts them at 8.3 and 20.9, and the eye agrees with CIEDE2000. The
// failure is structural, not a bad constant: redmean works in gamma-encoded RGB
// where a large blue-channel swing between two bright greens reads as a big
// number, while perceptually it is a modest shift in saturation.
//
// Verified against the Sharma/Wu/Dalal reference pairs in the test suite,
// including the discontinuity cases around the hue wrap that naive
// implementations get wrong.
export function deltaE2000FromLab([L1, a1, b1], [L2, a2, b2]) {
  const C1 = Math.hypot(a1, b1)
  const C2 = Math.hypot(a2, b2)
  const cBar = (C1 + C2) / 2
  const cBar7 = Math.pow(cBar, 7)
  const G = 0.5 * (1 - Math.sqrt(cBar7 / (cBar7 + Math.pow(25, 7))))

  const ap1 = (1 + G) * a1
  const ap2 = (1 + G) * a2
  const Cp1 = Math.hypot(ap1, b1)
  const Cp2 = Math.hypot(ap2, b2)

  const hue = (b, ap) => {
    if (b === 0 && ap === 0) return 0
    const h = Math.atan2(b, ap) * RAD
    return h >= 0 ? h : h + 360
  }
  const hp1 = hue(b1, ap1)
  const hp2 = hue(b2, ap2)

  const dLp = L2 - L1
  const dCp = Cp2 - Cp1

  let dhp = 0
  if (Cp1 * Cp2 !== 0) {
    dhp = hp2 - hp1
    if (dhp > 180) dhp -= 360
    else if (dhp < -180) dhp += 360
  }
  const dHp = 2 * Math.sqrt(Cp1 * Cp2) * Math.sin((dhp / 2) * DEG)

  const lBarP = (L1 + L2) / 2
  const cBarP = (Cp1 + Cp2) / 2

  let hBarP
  if (Cp1 * Cp2 === 0) {
    hBarP = hp1 + hp2
  } else if (Math.abs(hp1 - hp2) <= 180) {
    hBarP = (hp1 + hp2) / 2
  } else if (hp1 + hp2 < 360) {
    hBarP = (hp1 + hp2 + 360) / 2
  } else {
    hBarP = (hp1 + hp2 - 360) / 2
  }

  const T = 1
    - 0.17 * Math.cos((hBarP - 30) * DEG)
    + 0.24 * Math.cos(2 * hBarP * DEG)
    + 0.32 * Math.cos((3 * hBarP + 6) * DEG)
    - 0.20 * Math.cos((4 * hBarP - 63) * DEG)

  const cBarP7 = Math.pow(cBarP, 7)
  const sL = 1 + (0.015 * Math.pow(lBarP - 50, 2)) / Math.sqrt(20 + Math.pow(lBarP - 50, 2))
  const sC = 1 + 0.045 * cBarP
  const sH = 1 + 0.015 * cBarP * T
  const rT = -2
    * Math.sqrt(cBarP7 / (cBarP7 + Math.pow(25, 7)))
    * Math.sin(2 * (30 * Math.exp(-Math.pow((hBarP - 275) / 25, 2))) * DEG)

  return Math.sqrt(
    Math.pow(dLp / sL, 2) +
    Math.pow(dCp / sC, 2) +
    Math.pow(dHp / sH, 2) +
    rT * (dCp / sC) * (dHp / sH)
  )
}

export function deltaE2000(hexA, hexB) {
  return deltaE2000FromLab(hexToLab(hexA), hexToLab(hexB))
}

export function hexToHsl(hex) {
  const [r255, g255, b255] = hexToRgb(hex)
  const r = r255 / 255
  const g = g255 / 255
  const b = b255 / 255
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const l = (max + min) / 2

  if (max === min) return { h: 0, s: 0, l }

  const d = max - min
  const s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
  let h
  if (max === r) h = (g - b) / d + (g < b ? 6 : 0)
  else if (max === g) h = (b - r) / d + 2
  else h = (r - g) / d + 4

  return { h: h * 60, s, l }
}

// Orders colors the way a physical spectrum/rainbow does (by hue, with
// lightness breaking ties within the same hue) rather than by name or
// commonness rank.
export function sortByHue(colors) {
  return [...colors].sort((a, b) => {
    const ha = hexToHsl(a.hex)
    const hb = hexToHsl(b.hex)
    if (ha.h !== hb.h) return ha.h - hb.h
    return ha.l - hb.l
  })
}
