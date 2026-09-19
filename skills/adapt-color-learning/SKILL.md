---
name: adapt-color-learning
description: Adapt this Colors learning app, its curriculum or save workflow while preserving existing progress and independently usable offline packaging.
---

# Adapt Colors

Use the user's requested change to choose the scope. Read `docs/design.md` for the teaching and persistence decisions; use `docs/cloud-setup.md` only when changing optional cloud behavior. Paths here are relative to the repository root, two directories above this skill.

- Teaching logic is in `public/lib/progression.js`, perceptual distance in `colorDistance.js`, generated curriculum in `public/data/colors.json`, and its builder/source in `data/`. Keep stable IDs. Hue sorting belongs to the spectrum, not teaching order.
- A color is mastered after three consecutive correct answers. Misses lower streaks and resets are real changes. Do not merge device snapshots using numeric maxima or unions of mastered sets.
- `snapshot.js` owns the learning-field whitelist. Preserve stable mastery dates, normalize removed IDs, and keep unsupported future records exportable. Never serialize the whole app, account session, DOM, or configuration as learning progress.
- `progress-store.js` atomically saves a snapshot and outbox. Preserve its local revision checks, immutable in-flight attempts, full backend/owner/profile binding, and recovery copies. Cloud responses must not acknowledge a different account or erase later local answers.
- `cloud-transport.js` loads the official local SDK only after opt-in. Keep the default disconnected and never supply a personal provider target in source. SQL ownership tests and actual Supabase Auth/REST tests are distinct from response doubles.
- The spectrum needs both CSS and canvas dimensions to change orientation. All-colors-complete and storage-disabled states are ordinary product states, not exceptional crashes.

Run the relevant existing checks from the repository root, then `npm run build`. The generated `public/dist/app.js`, `public/vendor/supabase.js`, and standalone artifact must match source. For changed browser behavior, run `scripts/test-browser.py` and inspect actual narrow and wide layouts. A filtered vocabulary or different learning policy is a design change; explain its saved-progress compatibility rather than quietly changing the course.

Keep demos and tests invented. Public code, reusable instructions, and licenses belong in the repository. Learner exports, cloud configuration, and host credentials do not. This skill does not authorize publishing, contacting others, or changing a live backend beyond the user's request.
