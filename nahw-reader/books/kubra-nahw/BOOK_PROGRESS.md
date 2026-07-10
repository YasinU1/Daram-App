# al-Kubrā fī an-Naḥw — Reader Transcription Progress

Tracks how much of the book **al-Kubrā fī an-Naḥw** (الكُبْرى في النَّحْو) has been
transcribed into the interactive reader (`book.html`). This is **separate** from
`../nahw_notes/PROGRESS.md`, which tracks the YouTube *playlist notes*, not the book.

- **Source:** `../nahw_notes/an-Nahw al-Kubra 2026 May (Website).pdf` (book page = PDF index + 1)
- **Format:** each word is a `{a, t, e, n?}` token (Arabic · transliteration · English · optional note); see `muqaddimah.js` header.
- **Footnotes & commentary boxes (فوائد / خواطر / مسائل):** transcribed for pp. 6–9 only.
  **Dropped from p.10 onward** per request — only the matn spine (headings, definitions, نحو
  evidences) and descriptively-labelled exposition boxes are transcribed.

Legend: ✅ done · 🟡 partial · 🔜 next · ⬜ pending

| Pages | Section | TOC id | File | ✓ |
|---|---|---|---|:--:|
| 6–10 | المقدمة · الباب الأول في الكلمة (the Word) | `muq-bab-1` | `muqaddimah.js` | ✅ |
| 10–16 | المقدمة · الباب الثاني في الجملة وشبه الجملة والكلام | `muq-bab-2` | `muqaddimah-bab2.js` | ✅ |
| 17–19 | المقدمة · الباب الثالث في العامل والمعمول والإعراب | `muq-bab-3` | `muqaddimah-bab3.js` | ✅ |
| 22 | المقصد الأول · المقدمة (five mabādiʾ) | `m1-muq` | `maqsad1-muq.js` | ✅ |
| 22–40 | المقصد الأول · الباب الأول في الفعل (complete) — القياسي (لازم/متعدّي) + السماعي (الأفعال الناقصة، المدح والذم، التعجب) | `m1-bab-1` | `maqsad1-bab1.js` | ✅ |
| 41–59 | المقصد الأول · الباب الثاني في الحرف — القسم الأول حروف الجر complete (الأصلي 13، الشبيه بالزائد: رُبّ/التبعيضية/حاشا، الزائد: الباء/مِن/اللام/الكاف، + appendix) | `m1-bab-2` | `maqsad1-bab2.js` | 🟡 |
| 104–119 | المقصد الأول · الباب الثالث في الاسم | `m1-bab-3` | — | ⬜ |
| 120–121 | المقصد الأول · الباب الرابع في العامل المعنوي + الخاتمة | `m1-bab-4`,`m1-kh` | — | ⬜ |
| 132–172 | المقصد الثاني: في المعمول وغير المعمول | `m2-*` | — | ⬜ |
| 176–197 | المقصد الثالث: في الإعراب | `m3-*` | — | ⬜ |
| 200–228 | الخاتمة | `kh-*` | — | ⬜ |

**Done so far:** the entire Introduction (pp. 6–19) + Aim One's مقدمة, the **complete** Verb chapter
(pp. 22–40), and the Particle chapter through **all of حروف الجر** (القسم الأول: الأصلي، الشبيه بالزائد،
الزائد — pp. 41–59).
**Next 🔜:** continue `m1-bab-2` — القسم الثاني (حروف تجرّ اسمين / تنصب وترفع، إنّ وأخواتها …) from p. 60,
then the remaining particle types through p. 103.

## Notes on conventions
- Page breaks are `{ t:'page', n:'<arabic-numeral>' }`; they render as a labelled divider.
- Block types: `page · h1 · h2 (green|blue|red|plain) · line · box · table · grid · note`.
- `grid` (added with Bab 3) renders the class-vs-property matrices on pp. 17–18.
- Quranic words carry `q:1` (Uthmanic font) and sit between `OPEN`/`CLOSE` braces ﴿ ﴾.
