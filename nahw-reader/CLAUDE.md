# Daram — nahw-reader

Interactive Arabic reader for classical grammar/morphology texts. Each book is
transcribed **word-by-word** from class worksheets into a token format and rendered
by a shared engine.

## Where to continue (READ THIS FIRST after a fresh start)

Each book has a `BOOK_PROGRESS.md` that is the **single source of truth** for what is
done and what comes next. Before transcribing anything, open the relevant one and read
the table + the "Next 🔜" line. Do **not** rely on memory or assume where you left off.

| Book | Subject | Progress file |
|---|---|---|
| Shadhā al-ʿArf | ṣarf (morphology) | `books/shadha-arf/BOOK_PROGRESS.md` |
| al-Kubrā fī an-Naḥw | nahw (syntax) | `books/kubra-nahw/BOOK_PROGRESS.md` |

## Transcription method

- Source = the class worksheets in each book's `worksheets/` folder, done line-by-line.
- Each word is a `{a, t, e, n?}` token (Arabic · transliteration · English · optional
  grammar note). Qur'anic words carry `q:1` between `SA_OPEN`/`SA_CLOSE` braces ﴿ ﴾.
  See `books/shadha-arf/wk01-muqaddimah.js` for the canonical header + examples.
- Mirror worksheet colours: blue headings (`c:'blue'`), red key terms/examples
  (`c:'red'`); styles live in `styles.css` (`.word.hl-*`).
- Block types: `page · h1 · h2(green|blue|red|plain) · line · box · table · grid · note`.
- The shared engine is `reader.js`; each week file only supplies its data and the book's
  `book.html` assembles `TOC` + content map and calls `Reader.init(...)`.
- Cross-app helpers live in `shared/`: `core.js` (`Daram.esc/fmt/el/elHtml/icon/shuffle/
  loadJSON/saveJSON`) and `blocks.js` (`Daram.Blocks` block renderer + `Daram.WordPop`
  word glosses, used by both the reader and Learn's matn panels). Load them before the
  app script; put anything used by two apps there instead of copying it.
- al-Kubrā only: drop footnotes from p.10 onward.

## MANDATORY before you stop

Progress has silently drifted before (files existed but the tracker said otherwise).
After finishing any week, do **all** of these in the same session:

1. **Update `BOOK_PROGRESS.md`** — flip the week's row to ✅ and move the "Next 🔜" pointer.
2. **Wire the file into `book.html`** — it is NOT live until all three exist:
   - a `<script src="wkNN-….js"></script>` tag,
   - a TOC entry in the `TOC` array,
   - a content-map entry (e.g. `'wkNN': { blocks: DATA_WKNN }`).
3. **Open `book.html` and confirm the new week renders** before considering it done.

A week is "done" only when its `BOOK_PROGRESS.md` row is ✅ **and** it renders in the book.
