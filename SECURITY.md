# Security and private data

> **TL;DR:** Never attach real learner exports, sign-in codes, session tokens, or host credentials to a public issue.

For a potential vulnerability, use this repository’s GitHub **Security → Advisories → Report a vulnerability** route when available. If private reporting is unavailable, open a minimal issue asking for a private reporting channel without including exploit details or personal data.

The default app makes no cloud connection. Optional cloud operators must deploy the supplied ownership policies and test with two separate accounts before inviting users. A publishable key is meant for the browser; service-role or secret keys are not. A nickname is never authentication.

Exports and downloaded progress are ordinary browser/device data, not encrypted vaults. Disconnecting cloud saves does not delete downloaded progress or instantly revoke an already issued server token. Remove local copies explicitly on shared devices.
