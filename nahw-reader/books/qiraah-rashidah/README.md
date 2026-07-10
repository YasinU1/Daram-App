# al-Qirāʾah ar-Rāshidah — story reader

Story-based reader with a Duolingo-style chapter path, per-paragraph reading, and
quizzes. Unlike the other books (which use the shared token-based `reader.js`
engine), this book keeps its own self-contained engine (`app.js`) because its
functionality — chapter unlocking, phrase tooltips, tile-builder quizzes,
localStorage progress — is different in kind. It shares only the Daram theme
(`../../styles.css`).

## Run it

Static site, no build step. Serve the `nahw-reader` folder (so the shared
stylesheet resolves), e.g. from `nahw-reader/`:

```
python -m http.server 8000
```

Then open http://localhost:8000/books/qiraah-rashidah/book.html (opening the file
directly won't work — the browser blocks `fetch()` of local files without a server).
The book is also linked from the Daram library (`http://localhost:8000/`).

## How it works

The app is a set of real, separately-navigable pages:

- `book.html` — the path: a Duolingo-style trail of chapters. Chapter 1 is always unlocked; each next chapter unlocks once the previous one is completed.
- `read.html?chapter=<id>&paragraph=<n>` — shows one paragraph of the story. Hover/tap/focus any tagged phrase for its translation (no visible highlight box — the whole paragraph is quietly interactive). Continue moves on.
- `quiz.html?chapter=<id>&paragraph=<n>` — a 5-question quiz drawn randomly from that paragraph's phrases (fewer if the paragraph has fewer than 5), asked Arabic→English or English→Arabic. When word-split data is available (see below) you answer by tapping word tiles in order to build the sentence, from a bank that mixes in a few wrong-word distractors; otherwise it falls back to a free-text box graded case/harakat-insensitively. A paragraph with no tagged phrases skips straight past the quiz.
- `complete.html?chapter=<id>` — end-of-chapter recap (score + missed phrases) once every paragraph is done.

Which paragraph you're on and which chapters are completed is saved in the browser's `localStorage`, so it survives reloads and drives the path's lock/unlock/resume state. Visiting a chapter or paragraph out of order (e.g. by editing the URL) is caught and redirected. A completed chapter can be reopened for a full review from paragraph 1.

## Add a new story

1. Create `Chapters/Chapter_N/` with these files:
   - `story.txt` — first non-blank line(s) before the first blank line are treated as the title (optionally prefixed with a `(N)` line), remaining blocks separated by blank lines become paragraphs. Each paragraph becomes one read→quiz step.
   - `phrases_translation_words_separate.json` — array of:
     ```json
     { "phrase": "...", "translation": "...", "arabic_words": ["...", "..."], "english_words": ["...", "..."] }
     ```
     `phrase` must appear verbatim (same diacritics) somewhere in `story.txt` — that's how hover finds it, and which paragraph a phrase belongs to (and thus which paragraph's quiz it appears in) is determined automatically from where it's found in the text. Aim for full coverage (every word in some phrase, nothing left dead/non-hoverable) using small 2-5 word chunks rather than one entry per whole sentence — see `Chapters/Chapter_1/phrases_translation_words_separate.json` for the pattern. Avoid single-letter or very short standalone entries (e.g. just "و"/"and"): the matcher is substring-based with no word-boundary awareness, so a short entry can accidentally match inside an unrelated longer word — attach short conjunctions to an adjacent word instead (e.g. `"وأرجع إلى البيت"` rather than a bare `"و"`).

     `arabic_words` and `english_words` are `phrase` and `translation` each independently split into their own natural word order (they are **not** paired word-for-word with each other) — joining `arabic_words` with spaces must reconstruct `phrase` exactly, and joining `english_words` must reconstruct `translation` exactly. These power the quiz's tap-the-word-tiles UI: correct tiles come from the matching direction's array (`english_words` for Arabic→English questions, `arabic_words` for English→Arabic), plus a few distractor tiles pulled from other phrases' word lists in the same chapter. A phrase missing these two arrays just falls back to a free-text quiz question instead.
2. Add an entry to `manifest.json`:
   ```json
   { "id": "chapter_2", "title": "Story Title", "path": "Chapters/Chapter_2" }
   ```

The path view and lessons automatically pick up any chapter listed in `manifest.json` — no code changes needed.
