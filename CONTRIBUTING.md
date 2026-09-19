# Contributing

> **TL;DR:** Small fixes, clearer instructions, and tested learning ideas are welcome. Use invented learners and keep existing progress recoverable.

Install Node.js 22+, run `npm ci`, then `npm test` and `npm run build`. For interface changes, run the documented browser checks and inspect phone and desktop layouts. Cloud behavior additionally needs the real Supabase integration checks; fabricated response tests cannot prove backend isolation.

Describe the concrete problem, the behavior after your change, and how you checked it. Keep curriculum IDs stable unless their meaning changes, and include an explicit migration or recovery path when changing saved state. General improvements belong in the reusable engine; personal nicknames, exports, provider targets, and credentials belong in ignored local configuration.

Ideas that change the course, such as filtered vocabulary or spaced review, are welcome. Explain the choice rather than silently dropping catalog entries or changing the interpretation of earned progress. No project-specific AI tool or subscription is required to contribute. The [adaptation skill](skills/adapt-color-learning/SKILL.md) is optional guidance.

Please keep the MIT notice and third-party licenses with redistributed code, fonts, and dependencies. Report ordinary bugs with invented examples in GitHub issues. See [security reporting](SECURITY.md) before posting sensitive details.
