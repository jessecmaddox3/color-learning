# Colors

![Colors: learn the names behind the shades. 949 colors. Five at a time. Make it your own.](docs/colors-hero.png)

**Learn color names, five at a time.** Identify a swatch, build a streak, and watch your spectrum fill in. The full 949-color course is here, from familiar basics to the shades you can see but never quite name.

**[Play in your browser](https://jessemaddox.com/projects/color-learning/play/)** · **[Download the offline app](https://github.com/jessecmaddox3/color-learning/releases/latest/download/Color-Learning.html)**

I built this for my own personal use, around the way I like to learn things. Make it your own, and feel free to improve mine. Hopefully it gives you a useful starting point, or at the very least some ideas. Cheers!

## Start in a minute

1. Download **Color-Learning.html** using the link above. Save it somewhere you can find it.
2. Double-click the file. It opens in your browser. If it opens as text, right-click it and choose **Open with**, then your browser.
3. Choose a nickname and press **Start**. Pick the name that matches the swatch.

No account, terminal, installation, AI subscription, or internet connection is needed to play the downloaded file. It includes the code, color list, and font. On phones, a hosted copy is easier than opening a downloaded HTML file.

You begin with 11 familiar colors already marked as known. Five more enter practice. Three correct answers in a row master a color; a mistake resets only that color’s streak. The spectrum brightens as you learn. You can also answer with the **1–4** keys.

The original xkcd survey vocabulary includes informal and profane names. This is the complete survey list, not a screened preschool course. Screens and vision differ, so treat it as a vocabulary game rather than a color-vision test.

## Keep your progress

Choose **Continue as…** when you return. Up to eight local learners can share a browser. A repeated nickname creates a separate learner; names never sign anyone into an account.

In **Settings**, use **Export progress** to save a backup. **Import progress** restores it as another local learner. Moving the HTML file, changing browsers, private browsing, or clearing browser data can affect saved progress. If the browser refuses to save, the game says so and still lets you export the current session.

Conflicting saves keep recovery copies. **Show recovery copies** lets you export one, then import it as a separate learner. An all-colors-complete profile resumes at its completion screen, without starting an accidental extra question.

## Optional saves across devices

The hosted app can use an operator’s own Supabase project. Cloud saving starts disconnected. An adult signs in by email code, then chooses which local learner to upload or which cloud learner to restore. There is no shared project or account bundled here.

Conflicts ask you to choose a version, preserving the other in a recovery copy. Disconnecting stops this browser’s cloud connection; downloaded progress remains on the device. The separate remove action clears this account’s downloaded learners locally, while keeping cloud copies.

See [cloud setup](docs/cloud-setup.md) for hosting, email templates, database ownership rules, and integration-test status. Local play never depends on that setup.

## What’s included

The complete color catalog, curriculum builder, five-color progression, weaker-color weighting, perceptual distractors, stable mastery dates, responsive spectrum, multiple learners, and progress restoration are preserved. The public version adds offline play, backups, safe completion, durable uploads, and authenticated cloud ownership. Personal learner records and backend configuration are excluded.

The swatch choices are selected using CIEDE2000 color distance. The teaching thresholds are design choices, not validated educational or perceptual guarantees. [Design notes](docs/design.md) explain the actual decisions and their tradeoffs.

## Make it yours

The original code and documentation use the [MIT license](LICENSE). Use, change, share, or sell your version, keeping the license notice. The color dataset is CC0, and the font and bundled dependencies keep their [own notices](THIRD_PARTY_NOTICES.md).

For the source, use GitHub’s green **Code** button, then **Download ZIP**, and unzip it. Contributors need **Node.js 22 or newer**. Open a terminal in the unzipped folder and run:

```sh
npm ci
npm start
```

Open the local address printed in the terminal, usually `http://127.0.0.1:4173`. Press **Ctrl+C** in the terminal to stop it. To make your own single-file download:

```sh
npm run build
```

The result is `artifacts/Color-Learning.html`. The `public/` folder can also be served by an ordinary static host after building. It includes a local SDK bundle that is loaded only when someone chooses cloud sign-in.

If you use an AI coding assistant, point it at [the adaptation skill](skills/adapt-color-learning/SKILL.md) and describe your change. Good starting points are a different practice pace, clearer feedback, browser support, or an optional filtered vocabulary that preserves existing saves. [Contributions are welcome](CONTRIBUTING.md).

## Verification

```sh
npm test
npm run build
python3 scripts/test-browser.py
python3 scripts/test-cloud-schema.py
```

The browser check needs Python Playwright 1.58.0 and its Chromium browser. The SQL check needs PostgreSQL 17 and creates only a disposable local database. The separate Supabase integration check exercises actual email-code auth and REST; see [cloud setup](docs/cloud-setup.md) for its current evidence. All checks passed with Node 22 and 24, a network-blocked offline browser, and a disposable local Supabase stack. This includes actual email codes, two-account isolation, concurrent saves, conflict choices, lost-response recovery, and cross-device restoration. See the [integration run](https://github.com/jessecmaddox3/color-learning/actions/runs/35427896149). A host still needs to verify its own deployment and email delivery.

The README hero is [ChatGPT-generated marketing artwork](docs/artwork.md). No runtime AI service is used.
