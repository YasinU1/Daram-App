# Daram

Arabic grammar (naḥw/ṣarf) study apps. Static HTML/JS — open the HTML files directly in a browser, except the test maker which runs a small Node server.

## Apps

| App | Path | What it does |
|-----|------|--------------|
| Reader | `nahw-reader/index.html` | Book reader with per-word grammar colour coding |
| Learn | `nahw-reader/learn/learn.html` | Seneca-style adaptive lessons (teach → MCQ → flashcard, with session requeue and spaced review) |
| Test Maker | `nahw-reader/test-maker/` | Node/Express backend that drives the local Claude Code CLI to generate Dar al-Ulum-style naḥw papers and AI-grade answers |
| Notes | `nahw-reader/notes/` | Markdown chapter notes for al-Kubrā fī an-Naḥw |

## Books

- `nahw-reader/books/kubra-nahw/` — al-Kubrā fī an-Naḥw (naḥw)
- `nahw-reader/books/shadha-arf/` — Shadhā al-ʿArf (ṣarf), colour coding mirrors the class worksheets

## Test Maker setup

```sh
cd nahw-reader/test-maker
npm install
node server.js
```

No API key needed — it uses your local `claude` CLI login. See `.env.example` for optional overrides.
