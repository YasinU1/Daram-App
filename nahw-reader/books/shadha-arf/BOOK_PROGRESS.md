# Shadhā al-ʿArf — Reader Transcription Progress

Tracks how much of **Shadhā al-ʿArf fī Fann aṣ-Ṣarf** (شَذَا العَرْف في فَنِّ الصَّرْف) by
Aḥmad al-Ḥamlāwī has been transcribed into the interactive reader
(`book.html`). This is the **ṣarf** counterpart to `../kubra-nahw/BOOK_PROGRESS.md`.

- **Source:** the class **Sarf Worksheets** (`worksheets/`, Wk 1–26), transcribed
  word-by-word and line-by-line — the same method used for al-Kubrā fī an-Naḥw.
- **Format:** each word is a `{a, t, e, n?}` token (Arabic · transliteration ·
  English · optional grammar note); Qur'anic words carry `q:1` and sit between
  `SA_OPEN`/`SA_CLOSE` braces ﴿ ﴾. See `wk01-muqaddimah.js` header.
- **Footnotes:** the worksheets' English glosses of example words are folded into
  the word-level `n` notes rather than separate footnote blocks.

Legend: ✅ done · 🟡 partial · 🔜 next · ⬜ pending

| Wk | Section | TOC id | File | ✓ |
|---|---|---|---|:--:|
| 1 | المقدمة — تعريف علم الصرف · تقسيم الكلمة · علامات الأسماء والأفعال والحرف | `wk01` | `wk01-muqaddimah.js` | ✅ |
| 2 | الميزان الصرفي — وزن الثلاثي · وزن ما زاد على ثلاثة أحرف · الحالات الخاصة | `wk02` | `wk02-mizan.js` | ✅ |
| 3 | التقسيم الأول للفعل (ماضٍ/مضارع/أمر) + أسماء الأفعال | `wk03` | `wk03-fil1.js` | ✅ |
| 4 | التقسيم الثاني للفعل (صحيح/معتل وأقسامهما) | `wk04` | `wk04-fil2.js` | ✅ |
| 5 | التقسيم الثالث للفعل (مجرد/مزيد + الأبواب الستة) | `wk05` | `wk05-fil3.js` | ✅ |
| 6a | التقسيم الثالث للفعل — التنبيهات السبعة | `wk06a` | `wk06a-fil3-tanbihat.js` | ✅ |
| 6b | أوزان الرباعي المجرد ومُلحقاته (النحت + السبعة) | `wk06b` | `wk06b-fil3-rubai.js` | ✅ |
| 7 | أوزان الثلاثي/الرباعي المزيد فيه ومُلحقاته | `wk07` | `wk07-fil3-mazid.js` | ✅ |
| 8 | معاني صيغ الزوائد — أَفْعَلَ وفَاعَلَ | `wk08` | `wk08-fil3-maani-zawaid.js` | ✅ |
| 9 | معاني صيغ الزوائد — فَعَّلَ | `wk09` | `wk09-fil3-maani-faaala.js` | ✅ |
| 10 | معاني صيغ الزوائد — انفعل/افتعل/افعلّ | `wk10` | `wk10-fil3-maani-infaaala.js` | ✅ |
| 11 | التقسيم الثالث للفعل — تفعّل · تفاعل · استفعل · باقي الصيغ | `wk11` | `wk11-fil3-maani-tafaaala.js` | ✅ |
| 13 | التقسيم الرابع للفعل | `wk13` | `wk13-fil4-jumud.js` | ✅ |
| 14 | التقسيم الخامس للفعل | `wk14` | `wk14-fil5-taadi.js` | ✅ |
| 15 | التقسيم السادس للفعل | `wk15` | `wk15-fil6-majhul.js` | ✅ |
| 16 | التقسيم السابع للفعل | `wk16` | `wk16-fil7-tawkid.js` | ✅ |
| 17 | التقسيم الأول للاسم — التجرُّد والزيادة (الثلاثي/الرباعي/الخماسي المجرَّد) | `wk17` | `wk17-ism1-tajarrud.js` | ✅ |
| 18 | التقسيم الثاني للاسم — الجُمود والاشتقاق (جامد/مشتق + العشرة المشتقة) | `wk18` | `wk18-ism2-jumud.js` | ✅ |
| 19 | التقسيم الثاني للاسم — المصدر الثلاثي (القياسي والسماعي) | `wk19` | `wk19-ism2-masdar-thulathi.js` | ✅ |
| 20 | التقسيم الثاني للاسم — المصدر غير الثلاثي (القياسي) | `wk20` | `wk20-ism2-masdar-ghayr-thulathi.js` | ✅ |
| 21 | التقسيم الثاني للاسم — اسم الفاعل (وصيغ المبالغة) | `wk21` | `wk21-ism2-ism-fail.js` | ✅ |
| 22 | التقسيم الثاني للاسم — اسم المفعول والصفة المشبهة | `wk22` | `wk22-ism2-ism-maful.js` | ✅ |
| 23 | التقسيم الثاني للاسم — اسم التفضيل (Wk 23–24) | `wk23` | `wk23-ism2-ism-tafdil.js` | ✅ |
| 25 | التقسيم الثاني للاسم — اسما الزمان والمكان (placeholder in TOC) | `wk25` | — | 🔜 |
| 26 | التقسيم الثاني للاسم — اسم الآلة | `wk26` | `wk26-ism2-ism-ala.js` | ✅ |

**Done so far — Worksheets 1–24 and 26 (there is no Wk 12).** The Introduction;
the morphological scale; the whole verb section (divisions 1–7); the **first division of
the noun** (Wk 17); and the complete **second division of the noun** — jumūd vs ishtiqāq
(Wk 18), the trilateral maṣdar (Wk 19), the non-trilateral maṣdar (Wk 20), the **active
participle + ṣiyagh al-mubālagha** (Wk 21), the **passive participle + ṣifa mushabbaha**
(Wk 22), the **noun of preference** (Wk 23–24: the afʿal pattern, the eight conditions,
and the three states by wording — rendered as a `grid` — and by meaning), and the
**noun of instrument** (Wk 26: definition, the three classical samāʿī patterns, the
teacher's modern patterns faʿʿāla/fuʿʿāl/fāʿūl, the anomalous muḍmūm words, the jāmid
instruments, and the singular/dual/plural `grid`).
Awzān/maṣdar/tafḍīl tables are `grid` blocks (cf. wk07); Worksheet-5's large 10-column
taṣrīf grids are still not reproduced; all prose matn is transcribed.
**Next 🔜: Wk 25 — اسما الزمان والمكان (nouns of time & place).** A placeholder TOC entry
(`wk25`) is already wired in `book.html`; transcribe the worksheet when its PDF arrives.
Remaining polish if desired: proof the densest weeks (Wk 19/22/23) against the PDFs for
example-word vocalisation, and decide whether to reproduce Worksheet-5's full taṣrīf grids.

The teacher's "قوله…" commentary paragraphs are rendered as labelled `box` blocks.
Worksheet colours are mirrored: blue headings (`c:'blue'`) and red key terms /
examples / sign-words (`c:'red'` on word tokens; see styles.css `.word.hl-*`).

## Notes on conventions
- Page breaks within a worksheet are `{ t:'page', n:'<arabic-numeral>' }`.
- Block types: `page · h1 · h2 (green|blue|red|plain) · line · box · table · grid · note`.
- The shared reader engine lives in `../../reader.js`; each book page only supplies
  its `TOC` + `CONTENT` and calls `Reader.init(TOC, CONTENT)`.
