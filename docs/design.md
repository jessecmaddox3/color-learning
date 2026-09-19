# How Colors is designed

> **TL;DR:** Preserve a small practice set, choose meaningful distractors, and save the exact learner state. Local storage is authoritative for the current device; cloud writes use explicit ownership and version checks.

## Curriculum and questions

The xkcd survey contributes all 949 names and RGB values. `data/build-colors.mjs` reverses the survey’s least-common-first source into commonness order, then defers perceptually similar introductions within a bounded displacement. The raw commonness rank stays separate from teaching order. `public/data/colors.json` is the generated curriculum, with stable IDs used in progress files.

`public/lib/progression.js` starts with eleven basic names assumed known. The active batch holds five colors, each with a streak from zero to two. Correct answers increment the target streak; the third consecutive correct answer masters it and introduces the next unseen ID. A miss resets only the target’s streak. Mastered colors are not automatically forgotten or scheduled for later review in this version.

Target selection favors lower streaks and avoids an immediate repeat when another active target exists. Distractors come from introduced colors, ranked by distance from the target. The CIEDE2000 floor of 12 was chosen for this four-label identification task; it is not a scientifically validated universal threshold. When an unusually small candidate pool cannot supply three separated distractors, the farthest remaining candidates fill the choices.

The spectrum is visual feedback, not curriculum order. It sorts all colors by hue, with opacity 1 for mastered, 0.55 for active, and 0.12 for unseen colors. Its canvas changes from a vertical 1×949 bitmap to a horizontal 949×1 bitmap on narrow screens, including after resizing.

## State and local saving

`snapshot.js` reconstructs runtime state from explicit learning fields: format version, active IDs, mastered IDs, streaks, and stable earned dates. Removed and duplicate IDs cannot introduce nonexistent questions. Malformed values do not grant mastery. Unsupported future records remain available for export instead of being silently replaced.

`progress-store.js` keeps profiles, snapshots/outboxes, and recovery copies in IndexedDB. A profile UUID identifies a learner; its nickname is only a label. Each save compares the loaded local revision inside a read/write transaction. If another tab saved first, the losing edit goes into recovery rather than overwriting the winner.

A snapshot and its need for upload commit together. An upload freezes its write UUID, snapshot, expected remote revision, and local revision. Later local answers preserve that in-flight attempt. Acknowledging it cannot clear a newer answer. If the response is lost, the same write UUID can be reconciled after reload.

Storage refusal falls back to a clearly marked memory-only session. A later quota failure leaves the current state exportable. Cloud uploads require durable storage, so a memory-only session never pretends to have a recoverable upload queue.

## Cloud ownership and conflicts

`cloud-transport.js` uses the pinned official SDK, created only after explicit sign-in. Sessions live in memory. A connection’s backend, owner UUID, abort signal, and lifetime stay together. Cancelling or switching connections retires the whole client; late responses cannot attach another account or acknowledge its saves. Automatic background refresh is disabled, although an actively connected SDK may refresh an expiring token when making a request.

`cloud/schema.sql` defines owner-scoped profiles and snapshots. Row-level security checks `auth.uid()` both when selecting old rows and validating new ones. A composite owner/profile foreign key prevents one account’s save from being attached to another account’s profile. Server triggers fix the initial revision, increment it on each update, protect identity fields, and set server timestamps.

Writes use INSERT for a new row or UPDATE filtered by the full key and expected revision. They never use a blind upsert. A missing acknowledgement stays pending. A different remote revision produces an explicit choice, with the losing version retained in recovery. Streaks can decrease and resets are legitimate; numeric maxima or unions would silently change the learning model.

A conflict choice includes the precise conflict token the interface displayed. A newer cloud response invalidates an old dialog instead of applying a different version than the one the person chose. The interface also retains a requested second flush when a learner switches during an in-flight first flush.

## Packaging and changes

The hosted build has a bundled game and a separately loaded local Supabase SDK. The single-file download embeds the curriculum, application, CSS, font, and notices. It deliberately offers device saves and export/import without attempting cloud setup from a `file:` URL.

The public release keeps the useful design intact while replacing identity-by-name, an in-memory-only cloud queue, stale-answer acceptance, and a missing final completion state. New demonstrations and tests use invented learners. No personal records, account targets, or source history are required to run it.
