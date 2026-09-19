# Optional cloud saves

> **TL;DR:** Local play is ready without any setup. Cloud saves need your own Supabase project, the supplied SQL ownership rules, email-code templates, and a hosted HTTPS copy of the app. No backend or account is included.

## Verification status

The current candidate passes SDK transport tests with invented HTTP responses and real PostgreSQL 17 ownership/concurrency tests. Offline browser play, backups, and restoration have been exercised. **Full local Supabase email-code plus REST integration is being prepared and is not yet verified in this candidate.** This paragraph must be updated with the actual integration result before a release claims verified cloud support.

A passing disposable integration test establishes the app’s behavior with local Auth, JWTs, PostgREST, and row-level security. It does not prove your production SMTP delivery, your deployment configuration, or every policy in Supabase’s managed gateway.

## Host setup

This section is for the person hosting the app. Players only need to choose cloud saves, enter an adult email, and type the code they receive.

1. Create your own Supabase project. Use a new project or review the new table names carefully; this release does not migrate an existing personal `learners` or `progress` database.
2. Apply [`cloud/schema.sql`](../cloud/schema.sql) in the SQL editor. It creates `learning_profiles` and `learning_saves`, ownership policies, a composite foreign key, and server revision triggers. Keep all of those parts together.
3. Enable email sign-in and account creation; disable anonymous sign-in. Set the Auth site URL to your hosted app’s HTTPS address.
4. Configure both new-account confirmation and returning-user sign-in email templates to display `{{ .Token }}`. The template named **Magic Link** can display a code; do not leave the default link-only template. The app verifies with `type: 'email'`. See the [official email-code guide](https://supabase.com/docs/guides/auth/auth-email-passwordless).
5. Set up your own SMTP provider for real users. Supabase’s default sender is restricted to project-team addresses and is not general public email delivery. See [SMTP setup](https://supabase.com/docs/guides/auth/auth-smtp).
6. Copy `public/cloud-config.example.json` to **`public/cloud-config.local.json`**. Set `enabled` to `true`, choose a short host label, and fill in your project’s HTTPS origin and current `sb_publishable_…` key. This ignored file is meant to be served publicly, but keeping it out of Git avoids accidentally distributing your personal backend target.
7. Run `npm run build` and host the `public/` directory over HTTPS. Keep `cloud-config.local.json` next to `index.html`. No server runtime is needed by this static frontend.

Use a publishable key, never a secret/service-role key. The signed-in user’s JWT establishes ownership; the publishable key alone must not grant access to learner tables. The app rejects HTTP backends, path/query credentials, legacy JWT keys, and secret-key prefixes before loading the SDK. [Supabase API keys](https://supabase.com/docs/guides/api/api-keys) explains the distinction.

## Player flow

Open **Settings → Explore cloud saves** to see the host destination. Enter an adult email, request a code, and type it into the same browser. This creates an account if one does not exist. Nicknames do not authenticate anyone and matching names do not merge learners.

Choose a local learner to upload as a new cloud learner, or preview an existing cloud learner. A preview can be restored as a new local learner, or explicitly applied to the current one. If a device has eight local profiles already, export and remove one before creating another.

Two devices changing the same learner produce a choice. The app keeps a recovery copy instead of guessing which streaks to merge. **Show recovery copies** exports an alternate snapshot that **Import progress** can restore separately.

Disconnect stops this browser’s connection and keeps local progress, including pending work tied to its original account and backend. It does not erase downloaded snapshots or instantly revoke an already issued server token. Use **Remove this account’s downloaded learners** on a shared device when you want those copies removed. This action does not delete cloud copies. Operators can apply their own cloud retention/deletion policy through their project’s account-management tools.

## Before inviting anyone

Use two invented adult accounts and separate browser profiles. Verify that A can save and restore A’s learner, B cannot see or change it even with a guessed identifier, and anonymous requests cannot read or write either account’s tables. Test a stale concurrent update, a reset, a disconnected browser, and a lost upload response. The exact disposable checks live alongside the source so another host can reproduce the evidence.

The standalone HTML remains a device-only option. No configuration file is loaded when it opens from disk, and no SDK is initialized just because the hosted page loads. Cloud configuration is fetched only after an explicit settings action; an unavailable backend never prevents local play.

## Development checks

`scripts/test-cloud-schema.py` needs PostgreSQL 17 and uses a new temporary Unix-socket cluster with invented identities. It checks SQL policies and concurrency, then removes only its own cluster.

The full integration workflow uses pinned Supabase CLI **2.117.0**, real local Auth/PostgREST/Kong, and Mailpit to capture synthetic email. It needs Docker and is intended for a disposable Ubuntu runner. It does not log in, link a cloud project, send external email, or use repository secrets. Local TLS exceptions are confined to the test browser and loopback test requests; the production app’s HTTPS validation stays unchanged.
