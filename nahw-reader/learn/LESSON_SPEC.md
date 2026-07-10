# Daram Learn — LESSON_SPEC

Single source of truth for generating `lessons/*.js` from the Obsidian notes and the
reader transcription. Read this **before** authoring or retrofitting any section.
The mapping table at the bottom is the progress tracker — update it the same way
`BOOK_PROGRESS.md` is updated for the reader.

## Sources (never re-explain from scratch)

| Source | Location | Role |
|---|---|---|
| Obsidian notes (80) | `/Users/sayedmuhammadyasin.usman/Documents/Beacons/Nahw Fi Kubra/NN_*.md` | Explanations, examples, warnings — the teaching content |
| Reader transcription | `../books/kubra-nahw/*.js` (see `BOOK_PROGRESS.md`) | Word-by-word matn tokens for the interactive matn panel |
| Question bank | `../questions-bank.js` (70 qs, chapterIds = course ids) | Exam-practice `bank` steps |
| This app's engine | `learn.js` | Step types below are what it renders — nothing else |

A lesson section is **assembled**, not written: matn slice from the reader + condensed
points from the note + questions derived from the note's examples/warnings + bank ids.

## Step types (the whole vocabulary)

```js
// section-level (opt-in interactive book excerpt):
matn: { src: 'DATA_X', from: <blockIdx>, to: <blockIdx>, check: '<first Arabic word of block[from]>' }

// steps:
{ t:'teach', title, kicker?, body?, points?[], examples?[{ar,en,note?}], after?, focus?[blockIdx] }
{ t:'mcq', q, ar?, arEn?, choices[4], correct:<idx>, why }
{ t:'written', prompt, model, marks? }
{ t:'bank', id:'<questions-bank id>' }
```

- `focus` = which matn blocks this card shows in the panel ("From the matn").
  Card without `focus` → no panel (right for commentary whose matn is a footnote).
- Quiz phase automatically collapses the matn to a "View matn" bar showing `from…to`.
- `after` = one synthesis sentence rendered under points/examples (`.prose.synth`).
- `**bold**` works in body/points/why; Arabic runs are auto-wrapped (`fmt()`), so
  write Arabic inline freely.

### Deriving matn block indices

```bash
node -e "
const fs=require('fs');
const src=fs.readFileSync('books/kubra-nahw/<FILE>.js','utf8');
const D=new Function(src+'; return <DATA_VAR>;')();
D.forEach((b,i)=>console.log(i, b.t, b.ar || (b.w&&b.w.filter(x=>x.a).map(x=>x.a).join(' ').slice(0,60)) || (b.lines&&b.lines[0].filter(x=>x.a).map(x=>x.a).join(' ').slice(0,40)) || b.n || ''));
" # run from nahw-reader/
```

Always set `check` to the first word of `blocks[from]` — the engine console-warns if
indices drift after a reader edit. Data vars: `DATA` (muqaddimah.js), `DATA_BAB2`,
`DATA_BAB3`, `DATA_M1_MUQ`, `DATA_M1_BAB1`, `DATA_M1_BAB2`.

**The book data file must be loaded in `learn.html` before `learn.js`**
(e.g. `<script src="../books/kubra-nahw/muqaddimah.js"></script>`). One tag per file;
no token copying into lessons — reader is the single source of truth.

## Distillation rules (Obsidian → teach cards)

1. **Caps per card**: max **3 points** + max **2 examples** + optional one-line `after`
   synthesis. A note section that doesn't fit = split into more cards, not fatter cards.
2. **Matn cap**: a card's `focus` slice ≤ ~6–8 lines. Longer passage → split across cards.
3. **⚠️ warnings** in the note → at most one point each, phrased as the trap
   ("يا is not always vocative"). Warnings are also the best MCQ distractors.
4. **Skip entirely**: "Scholarly asides" sections, scholar bios, khilāf discussions,
   📌 asides, poetic shawāhid beyond the book's own نحو evidences. They stay in Obsidian.
5. **Quick-reference tables** in notes are not cards — they are MCQ raw material.
6. Note's `> **bold matn quote**` definition lines: do **not** duplicate as a static
   `ar:` block if the same line is in the card's `focus` — the panel already shows it
   word-by-word. Static `ar:` is only for content not in the transcription.
7. Preserve the note's Arabic terms verbatim (المُهْمَل، المَوْضُوع…) — terminology gaps
   between note and lesson are drift (that's how مهمل/موضوع went missing from 1.1).

## Question sourcing

- MCQs: from the note's examples + warnings. Correct answer's `why` should name the
  trap the distractors represent. 3–8 MCQs per section.
- One `written` step per section (define + explain + example, mirroring exam style),
  `model` from the note's definition lines.
- `bank` steps: append every `questions-bank.js` id whose `chapterId` = the course id
  and whose topic belongs to this section. Bank coverage: muq-bab-1 ×13, muq-bab-2 ×11,
  muq-bab-3 ×10, m1-muq ×10, m1-bab-1 ×15, m1-bab-2 ×11. Later chapters: build bank
  first via `test-maker/build-bank.mjs`, or author without bank steps and add later.
- Retrofitting an existing section: **questions are frozen** — only add the section
  `matn`, add `focus` to teach cards, re-trim cards to the caps, fill terminology gaps.

## Authoring checklist (MANDATORY, mirrors BOOK_PROGRESS discipline)

1. Read the note(s) + dump matn indices; check the note's `book_pages` against
   `BOOK_PROGRESS.md` — if pages aren't transcribed yet, transcribe first or mark ⛔.
2. Write/extend `lessons/<course>.js` (push onto `window.DARAM_COURSES`).
3. Wire `learn.html`: lesson script tag + the book data file script tag (if new).
4. Open learn.html, walk every card of the new section: matn panel renders, hover
   gloss works, translation toggle works, quiz peek expands, MCQs check correctly.
5. Flip the section's row(s) below to ✅ and move the Next 🔜 pointer.

## Worked example — 1.1 "From sound to word" (the reference retrofit)

```js
matn: { src: 'DATA', from: 2, to: 6, check: 'الْبَابُ' },
steps: [
  { t:'teach', title:'What is a كَلِمَة?', focus:[2,3],
    body:'…three terms the book defines first…\n\nHover (or tap) any word above for its gloss.' },
  { t:'teach', title:'The ladder of terms', focus:[4,5,6],
    points:[ /* لفظ (مهمل/موضوع) · قول · مفرد/مركب — 3 points */ ],
    examples:[ /* دز · كتاب الولد — 2 */ ],
    after:'So a كلمة = a meaningful utterance whose parts, taken alone, mean nothing — a قول مفرد.' },
  // compounds card: no focus (its matn is footnotes — rule 4 keeps note blocks out)
  // …6 frozen MCQs + 1 written…
]
```

---

# Mapping table — all 80 notes

Legend: ✅ done · 🟠 retrofit needed (section exists, pre-spec format) · 🔜 next ·
⬜ pending (transcription ready) · ⛔ blocked (book pages not transcribed) · ➖ skipped by rule

**Reader data:** muqaddimah.js `DATA` (pp.6–10) · muqaddimah-bab2.js `DATA_BAB2` (pp.10–16) ·
muqaddimah-bab3.js `DATA_BAB3` (pp.17–19) · maqsad1-muq.js `DATA_M1_MUQ` (p.22) ·
maqsad1-bab1.js `DATA_M1_BAB1` (pp.22–40) · maqsad1-bab2.js `DATA_M1_BAB2` (pp.41–59, 🟡 stops at p.59)

### Course muq-bab-1 — The Word (pp.6–10, bank ×13)

| Note | Learn section | Matn src | Status |
|---|---|---|:--:|
| 01 qabl-al-kitab (p.4) | ➖ preface — optionally 1 teach-only card at course top; no quiz | — | ➖ |
| 02 muqaddimah | `ladder` | `DATA` | ✅ |
| 03 al-ism-wa-alamatuhu | `ism` | `DATA` | ✅ |
| 04 al-ism-al-sarih-wa-al-muawwal | `ism-kinds` (with 05) | `DATA` | ✅ |
| 05 ism-al-dhat-wa-ism-al-sifah | `ism-kinds` | `DATA` | ✅ |
| 06 al-fil-wa-alamatuhu | `fil` | `DATA` | ✅ |
| 07 al-harf | `harf` | `DATA` | ✅ |

### Course muq-bab-2 — Sentence, Quasi-Sentence & Speech (pp.10–16, bank ×11)

| Note | Learn section | Matn src | Status |
|---|---|---|:--:|
| 08 arkan-al-jumlah | `jumlah` | `DATA_BAB2` | ✅ |
| 09 al-jumlah-al-ismiyyah-wal-filiyyah | `form` | `DATA_BAB2` | ✅ |
| 10 al-jumlah-al-khabariyyah-wal-inshaiyyah | `meaning` | `DATA_BAB2` | ✅ |
| 11 al-jumlah-al-kubra-wal-sughra | `kubra` | `DATA_BAB2` | ✅ |
| 12 shibh-al-jumlah | `shibh` | `DATA_BAB2` | ✅ |
| 13 al-zarf-al-laghw-wal-mustaqarr | `shibh` (laghw) + `mustaqarr` | `DATA_BAB2` | ✅ |
| 14 al-kalam-al-mujab | `kalam` | `DATA_BAB2` | ✅ |

### Course muq-bab-3 — Governor, Governed & Iʿrāb (pp.17–19, bank ×10)

| Note | Learn section | Matn src | Status |
|---|---|---|:--:|
| 15 al-amil-wa-ghayr-al-amil | `amil` | `DATA_BAB3` | ✅ |
| 16 al-mamul-wa-ghayr-al-mamul | `mamul` | `DATA_BAB3` | ✅ |
| 17 al-irab | `irab` | `DATA_BAB3` | ✅ |

### Course m1-muq — Five mabādiʾ (p.22, bank ×10)

| Note | Learn section | Matn src | Status |
|---|---|---|:--:|
| — (no Obsidian note; book-only) | `mabadi`, `mabadi-applied` | `DATA_M1_MUQ` | ✅ |

### Course m1-bab-1 — The Verb (pp.22–40, bank ×15)

| Note | Learn section | Matn src | Status |
|---|---|---|:--:|
| 18 al-fil-al-lazim | `qiyasi` | `DATA_M1_BAB1` | ✅ |
| 19 al-fil-al-mutaaddi | `qiyasi` | `DATA_M1_BAB1` | ✅ |
| 20 al-mutaaddi-ila-mafulayn | `qulub` | `DATA_M1_BAB1` | ✅ |
| 21 afal-al-yaqin | `qulub` | `DATA_M1_BAB1` | ✅ |
| 22 afal-al-zann | `qulub` | `DATA_M1_BAB1` | ✅ |
| 23 alam-tara-wa-araayta | `qulub` | `DATA_M1_BAB1` | ✅ |
| 24 afal-al-qulub-ahkam | `taliq` | `DATA_M1_BAB1` | ✅ |
| 25 afal-al-tahwil | `tahwil` | `DATA_M1_BAB1` | ✅ |
| 26 al-mutaaddi-ila-thalathah | `tahwil` | `DATA_M1_BAB1` | ✅ |
| 27 kana | `kana` | `DATA_M1_BAB1` | ✅ |
| 28 asbaha-wa-akhawatuha | `sisters` | `DATA_M1_BAB1` | ✅ |
| 29 sara | `sisters` | `DATA_M1_BAB1` | ✅ |
| 30 ma-bariha-wa-akhawatuha | `sisters` | `DATA_M1_BAB1` | ✅ |
| 31 ma-dama-wa-laysa | `sisters` | `DATA_M1_BAB1` | ✅ |
| 32 afal-al-raja | `raja` | `DATA_M1_BAB1` | ✅ |
| 33 kada | `raja` | `DATA_M1_BAB1` | ✅ |
| 34 karaba-wa-awshaka | `raja` | `DATA_M1_BAB1` | ✅ |
| 35 afal-al-shuru | `raja` | `DATA_M1_BAB1` | ✅ |
| 36 afal-al-madh-wal-dhamm | `madh` | `DATA_M1_BAB1` | ✅ |
| 37 masail-al-madh-wal-dhamm | `madh` | `DATA_M1_BAB1` | ✅ |
| 38 siyagh-al-taajjub | `taajjub` | `DATA_M1_BAB1` | ✅ |

### Course m1-bab-2 — The Particle I: حروف الجر (pp.41–59, bank ×11)

Sections in `lessons/m1-bab2.js`:

| Note | Learn section (proposed) | Matn src | Status |
|---|---|---|:--:|
| 39 huruf-al-jarr | `jarr-overview` | `DATA_M1_BAB2` | ✅ |
| 40 al-ba | `ba` | `DATA_M1_BAB2` | ✅ |
| 41 min · 42 ila · 43 an | `min-ila-an` | `DATA_M1_BAB2` | ✅ |
| 44 ala · 45 al-lam · 46 fi | `ala-lam-fi` | `DATA_M1_BAB2` | ✅ |
| 47 al-kaf · 48 hatta | `kaf-hatta` | `DATA_M1_BAB2` | ✅ |
| 49 ahruf-al-qasam · 50 mudh-wa-mundh | `qasam-mudh` | `DATA_M1_BAB2` | ✅ |
| 51 harf-jarr-shabih-bil-zaid | `shabih` | `DATA_M1_BAB2` | ✅ |
| 52–55 al-ba/min/al-lam/al-kaf al-zaida | `zaida` | `DATA_M1_BAB2` | ✅ |
| 56 al-huruf-al-mukhtalaf-fiha · 57 hadhf-harf-al-jarr | `khilaf-hadhf` | `DATA_M1_BAB2` | ✅ |

### Course m1-bab-2b — The Particle II: إنّ وأخواتها والنواسخ الحرفية (pp.60–72) — authored matn-less in `lessons/m1-bab2b.js`/`2c`/`2d`; add matn when transcription reaches these pages

| Note | Learn section (proposed) | Matn src | Status |
|---|---|---|:--:|
| 58 illa | `illa` | — (matn pending) | ✅ |
| 59 inna · 60 anna · 61 mawadi-inna-wa-anna | `inna-anna` | — (matn pending) | ✅ |
| 62 masail-inna-wa-akhawatuha | `masail-inna` | — (matn pending) | ✅ |
| 63 kaanna · 64 lakinna · 65 laalla · 66 layta | `akhawat` | — (matn pending) | ✅ |
| 67 huruf-mushabbaha-bil-fil · 68 takhfif | `mushabbaha` | — (matn pending) | ✅ |
| 69 la-li-nafy-al-jins | `la-jins` | — (matn pending) | ✅ |
| 70 al-huruf-al-mushabbaha-bi-laysa · 71 al-nawasikh | `laysa-nawasikh` | — (matn pending) | ✅ |

### Course m1-bab-2c — The Particle III: نواصب وجوازم (pp.72–80) — authored matn-less in `lessons/m1-bab2b.js`/`2c`/`2d`; add matn when transcription reaches these pages

| Note | Learn section (proposed) | Matn src | Status |
|---|---|---|:--:|
| 72 an-al-nasiba | `an-nasiba` | — (matn pending) | ✅ |
| 73 kay · 74 lan · 75 idhan | `kay-lan-idhan` | — (matn pending) | ✅ |
| 76 ma-tajzim-filan-wahidan · 77 ma-tajzim-filayn | `jazm` | — (matn pending) | ✅ |

### Course m1-bab-2d — The Particle IV: حروف العطف (pp.81–82) — authored matn-less in `lessons/m1-bab2b.js`/`2c`/`2d`; add matn when transcription reaches these pages

| Note | Learn section (proposed) | Matn src | Status |
|---|---|---|:--:|
| 78 al-waw · 79 thumma · 80 al-fa | `atf` | — (matn pending) | ✅ |

---

**Progress (2026-07-08):** ALL 46 sections across 9 courses done — 26 retrofitted with
matn/focus, 9 jarr sections authored with matn + all 11 m1-bab-2 bank questions, 11
sections for notes 58–80 authored matn-less. Totals: 134 teach cards, 215 MCQs, 24
written, 70/70 bank questions wired exactly once. Validated (node integration check:
0 errors) + browser-verified (matn panel, translation toggle, popover, quiz peek, MCQ flow).

**Next 🔜:** when reader transcription passes p.60 (see BOOK_PROGRESS.md), add
matn/focus to m1-bab-2b/2c/2d sections; and build bank questions for those chapters
(test-maker/build-bank.mjs) then wire them in.
