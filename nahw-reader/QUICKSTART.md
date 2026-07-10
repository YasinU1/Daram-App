# Daram — Quick Start

Interactive Arabic reader for classical grammar (naḥw) and morphology (ṣarf) texts,
plus a test maker and an adaptive-lessons app. Everything is static HTML/JS except
the test maker, which runs a small Node server.

## Run it

**Readers, home page, Learn app** — static files, no build step. Either open
`index.html` directly in a browser, or serve the folder (nicer, avoids `file://` quirks):

```sh
cd nahw-reader
python3 -m http.server 8000
# → http://localhost:8000
```

**Test Maker** (generates & AI-grades exam papers; needs Node + the `claude` CLI logged in):

```sh
cd nahw-reader/test-maker
npm install          # first time only
npm start            # → http://localhost:3001/test-maker.html
```

Optional env vars: `PORT`, `CLAUDE_MODEL` (default `claude-opus-4-8`), `CLAUDE_BIN`.

To regenerate the question bank after new chapters are transcribed:

```sh
cd test-maker && node build-bank.mjs   # writes ../questions-bank.js
```

## Folder map

```
nahw-reader/
├── index.html            Home page — links to all books & apps
├── reader.js             Shared reader engine (token → page renderer)
├── styles.css            Shared styles (reader, home, test maker)
├── questions-bank.js     Pre-generated question bank (used by test-maker.html & learn/)
├── test-maker.html       Test Maker front-end (served by test-maker/server.js)
├── fonts/                KFGQPC Uthmanic script (Qur'anic text)
│
├── books/
│   ├── kubra-nahw/       al-Kubrā fī an-Naḥw (syntax) — book.html + chapter .js files
│   │   └── notes/        Notes from the YouTube playlist (see notes/PROGRESS.md)
│   ├── shadha-arf/       Shadhā al-ʿArf (morphology) — book.html + wkNN-*.js files
│   │   └── worksheets/   Source class worksheets (transcription source of truth)
│   └── qiraah-rashidah/  Qirāʾah Rāshidah (stories) — own engine, does NOT use reader.js
│
├── learn/                Daram Learn — Seneca-style adaptive lessons (learn.html)
│   └── lessons/          Course/section lesson banks
│
└── test-maker/           Node/Express backend — drives local `claude` CLI, no API key
```

## Where to continue work

Each book tracks its own progress — **read these before transcribing anything**:

| What | Progress file |
|---|---|
| al-Kubrā transcription | `books/kubra-nahw/BOOK_PROGRESS.md` |
| Shadhā al-ʿArf transcription | `books/shadha-arf/BOOK_PROGRESS.md` |
| al-Kubrā video notes | `books/kubra-nahw/notes/PROGRESS.md` |
| Learn lessons | `learn/LESSON_SPEC.md` |

Transcription method, token format, and the "done" checklist live in `CLAUDE.md`.

## Adding a new week/chapter (summary — full rules in CLAUDE.md)

1. Transcribe the worksheet into `books/<book>/wkNN-….js` (token format: `{a, t, e, n?}`).
2. Wire into `book.html`: `<script>` tag + `TOC` entry + content-map entry.
3. Open `book.html`, confirm it renders.
4. Flip the row in `BOOK_PROGRESS.md` to ✅ and move the "Next 🔜" pointer.
