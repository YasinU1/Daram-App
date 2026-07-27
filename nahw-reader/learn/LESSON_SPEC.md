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

# Book-only courses (no Obsidian notes; authored straight from the PDF) — pp. 82–170

Notes exist only through note 80 (≈ p.82). Everything past that is distilled **directly
from the book PDF** (`../books/kubra-nahw/an-Nahw al-Kubra 2026 May (Website).pdf`,
book page = PDF index + 1). NO matn panels (reader stops at p.59). Instead every teach
card carries **`page:`** (the book page) so each key idea maps back to the book — rendered
as a "Book p. N" pill by learn.js (`.pgref`, `.cardhead-row`). No bank steps.

| Course id | File | Pages | Sections | Coverage | ✓ |
|---|---|---|---|---|:--:|
| `m1-bab-2e` | `m1-bab2e.js` | 82–86 | 3 | حتى العاطفة · أو/أم/لا · بل/لكن/إمّا | ✅ |
| `m1-bab-2f` | `m1-bab2f.js` | 86–92 | 4 | أحرف الجواب · التوكيد · لو · لولا/لوما/أمّا | ✅ |
| `m1-bab-2g` | `m1-bab2g.js` | 93–104 | 6 | التوبيخ/التحضيض/العرض · التنبيه · المصدر/النفي · الزيادة · الاستفهام/التمني/الاستقبال · التفسير/التنوين | ✅ |
| `m1-bab-3a` | `m1-bab3a.js` | 104–112 | 5 | المصدر · اسم الفاعل · المفعول/الصفة المشبهة · التفضيل · اسم الفعل | ✅ |
| `m1-bab-3b` | `m1-bab3b.js` | 112–120 | 5 | الإضافة المعنوية · اللفظية · الاسم التام · أسماء الشرط · العامل المعنوي | ✅ |
| `m1-khatima` | `m1-khatima.js` | 121–130 | 7 | التنازع · حذف عامل المفعول المطلق · التحذير/الإغراء · الاختصاص/الاشتغال · النداء · اللهم/الاستغاثة · حذف عامل الحال | ✅ |
| `m2-bab-1a` | `m2-bab1a.js` | 132–138 | 5 | مدخل م٢ · الفاعل · نائب الفاعل/المبتدأ · الخبر · بقية المرفوعات | ✅ |
| `m2-bab-1b` | `m2-bab1b.js` | 138–156 | 6 | المفاعيل الثلاثة · له/معه · الحال · التمييز · المستثنى · بقية المنصوبات/المجرور | ✅ |
| `m2-tawabi` | `m2-bab234.js` | 156–170 | 7 | النعت · البدل/البيان · المعطوف · التأكيد · معمول الفعل · معمول الجملة · غير المعمول من الجملة | ✅ |

**Progress (2026-07-13):** Original 46 sections (9 note-based courses) unchanged. Added
**9 book-only courses / 48 sections** covering the book straight through to **p. 170**
(end of the reachable Aim-Two material for this pass). Book-only totals: **127 teach /
166 MCQ / 48 written**, every teach card page-stamped (range 82–170). learn.html loads all
19 lesson files. Validated: node vm full-load of all 18 courses — **0 errors, no dup ids**;
step structure checked (choices=4, correct in range, why/prompt/model present).
learn.js/​learn.css given `page:`→`.pgref` "Book p. N" pill.

**Next 🔜:** (a) continue past p.170 — Aim Two bāب 4 (شبه الجملة) + Aim Three (الإعراب,
pp.176+) + الخاتمة; (b) when reader transcription passes p.59, retro-fit matn panels onto
these book-only courses; (c) build bank questions for the new chapters.

---

# Backward pass — الخاتمة · وجوه الكلمات (built from the END of the book)

A separate "build backwards" pass authors the الخاتمة's particle dictionary (الفصل الرابع,
*wujūh al-kalimāt*, pp. 233–254 — the alphabetical look-up of multi-faced words). Unlike the
book-only courses above, **each of these carries BOTH a `page:` pill AND an interactive matn
panel**: the passage is transcribed word-by-word into its own `books/kubra-nahw/khatima-wujuh-NN.js`
(var `DATA_KH_WNN`), loaded in learn.html before its lesson. Courses use `num:` to sit at their
true chapter position (20–25); nav is ordered ascending. Source note:
`books/kubra-nahw/notes/khatima_04_wujuh-al-kalimat.md`.

| `num` | Course id | Lesson file | Matn (var) | Entries | Pages | ✓ |
|---|---|---|---|---|---|:--:|
| 20 | `kh-wujuh-20` | `lessons/kh-wujuh-20.js` | `DATA_KH_W20` | الهمزة · إذْ · إذا · أل · أم · إمّا · إنْ · أنْ | 233–237 | ✅ |
| 21 | `kh-wujuh-21` | `lessons/kh-wujuh-21.js` | `DATA_KH_W21` | إي · أيْ · أيّ · بل · التاء · حتى · حاشا · خلا/عدا | 237–242 | ✅ |
| 22 | `kh-wujuh-22` | `lessons/kh-wujuh-22.js` | `DATA_KH_W22` | ذا · ذو · عسى · غير · الفاء · قد · الكاف · كلّا | 242–245 | ✅ |
| 23 | `kh-wujuh-23` | `lessons/kh-wujuh-23.js` | `DATA_KH_W23` | كم · كي · كيف · اللام · لا · لمّا · لو · لولا | 246–249 | ✅ |
| 24 | `kh-wujuh-24` | `lessons/kh-wujuh-24.js` | `DATA_KH_W24` | ليس · ما الاسمية · ما الحرفية · متى · مَن · منذ · النون · نعم | 249–253 | ✅ |
| 25 | `kh-wujuh-tail` | `lessons/kh-wujuh-tail.js` | `DATA_KH_WT` | الواو · الياء (+ ختام الكتاب) | 253–254 | ✅ |

**Progress (2026-07-18):** ch 25 (tail) pre-existed; this pass added **ch 20–24 (5 courses /
26 sections)** working backward, covering the whole dictionary الهمزة→نعم (pp. 233–253). Each
has a transcribed matn file + page-stamped teach cards + 2–3 MCQ + 1 written per section.
Validated: `scratchpad/check-wujuh.js` per course (matn range/check/focus, mcq bounds) — 0 errors;
full learn.html headless load (Playwright) — **36 scripts, 24 courses, 0 console errors, no
matn-check warnings, no dup ids**; ch-20 section driven end-to-end (matn panel renders, "Book p.
233" pill shows). **Next 🔜:** continue backward into the الخاتمة orthography فصول (الوقف p.232,
الوصل 230–231, الرسم 228–229) then أحكام الفعل/الاسم (pp. 200–227) — notes already on disk.

---

# Shadhā al-ʿArf (ṣarf) — `learn/sarf.html`

Second book on the same engine. `learn.js` reads `window.DARAM_LEARN_CONFIG`
(bookTitle / brand / brandSub / storeKey) set in the page before the lesson scripts;
`sarf.html` uses storeKey `daram-learn-sarf-v1` so progress is separate from nahw.
Matn sources are the reader week files (`books/shadha-arf/wkNN-*.js`, vars `DATA_WKNN`)
— wk01 must load first (owns the SA_* glyph consts). The matn panel also renders
`grid`/`table` blocks (ported from reader.js; `.mbody .tbl-wrap` scrolls). No question
bank yet — sections use teach/mcq/written only.

Validation: `scratchpad check-sarf.js` (node vm loads all week + sarf lesson files;
checks matn src/check/range, focus indices, mcq bounds). Status 2026-07-12: **PASS**,
browser-verified (matn panel, hover gloss, translation toggle, grid rendering, quiz
peek, MCQ flow; nahw learn.html regression-checked).

| Wk | Course id | File | Sections | ✓ |
|---|---|---|---|:--:|
| 1–2 | `sarf-muq-mizan` | `lessons/sarf-muq-mizan.js` | 6 | ✅ |
| 3–4 | `sarf-fil-1-2` | `lessons/sarf-fil12.js` | 6 | ✅ |
| 5–6a | `sarf-fil-3a` | `lessons/sarf-fil3.js` | 7 | ✅ |
| 6b–7 | `sarf-fil-3b` | `lessons/sarf-fil3.js` | 6 | ✅ |
| 8–11 | `sarf-maani` | `lessons/sarf-maani.js` | 8 | ✅ |
| 13–16 | `sarf-fil-4-7` | `lessons/sarf-fil47.js` | 8 | ✅ |
| 17–18 | `sarf-ism-1-2` | `lessons/sarf-ism1.js` | 5 | ✅ |
| 19–20 | `sarf-masdar` | `lessons/sarf-masdar.js` | 6 | ✅ |
| 21–23, 26 | `sarf-mushtaqqat` | `lessons/sarf-mushtaqqat.js` | 7 | ✅ |
| 28 | `sarf-ism-4` | `lessons/sarf-ism4.js` | 5 | ✅ |

**Totals:** 10 courses · 64 sections · 149 teach · 288 MCQ · 22 written.

**Wk 28 pass (2026-07-26):** added `sarf-ism-4` / `lessons/sarf-ism4.js` — the noun's
fourth division by final letter, **5 sections** (17 teach / 28 MCQ / 5 written): the four
kinds + المنقوص · المقصور/الممدود/الصحيح + the قياسي/سماعي split · the 8 analogical maqṣūr
patterns · the 4 analogical mamdūd patterns · the سماعي of both. Every teach card carries a
`focus` slice of `DATA_WK28`; `sarf.html` loads the week file and the lesson. Validated:
node vm load of all 25 week files + 9 lesson files — 0 errors, no dup course/section ids,
matn `check` strings match, all `focus` indices inside their section range, choices=4 and
`correct` in range throughout. Browser-verified over http (jsdom): 10 courses, **0 console
warnings, no matn-check mismatches**, and all 5 sections opened with their matn panel
rendering glossed words (7 / 10 / 24 / 17 / 6).

**Next 🔜:** **wk25 (اسما الزمان والمكان) and wk27 (المذكَّر والمؤنَّث) are transcribed in the
reader but have no learn sections** — `sarf.html` does not yet load either week file; that is
now the real gap, not wk24. Then wk29+ as worksheets arrive; optionally build a ṣarf question
bank via test-maker and add `bank` steps.
