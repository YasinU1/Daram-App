# Authoring a module

This is the spec for writing `content/module-0N.js`, distilled from Module 01
(`المقدمة`) — the reference implementation every future module should mirror
in shape, counts, and tone. Nothing here is enforced beyond what
`scripts/validate-content.mjs` checks (shape only, not pedagogy), so this
file is the actual source of truth for "does this look like the rest of the
app."

## Wiring a new module in

1. Create `content/module-0N.js`, default-exporting the module object (shape
   below).
2. In `content/index.js`, import it and add it to the `MODULES` array, in
   order:
   ```js
   import m01 from './module-01.js';
   import m02 from './module-02.js';
   export const MODULES = [m01, m02];
   ```
   Module N+1 unlocks once every lesson in module N is complete
   (`isModuleUnlocked` in `content/index.js`) — nothing else to wire up.
3. Run `npm run validate` before doing anything else. It checks shape
   (counts, required fields, index bounds) as hard **errors**, and
   authoring quality (missing `tldr`, missing examples, over-long
   paragraphs, missing harakat) as **warnings** that print without failing
   the build. `npm run validate:strict` runs the same checks with every
   warning promoted to an error — that's the bar a finished module has to
   clear. Neither will catch a bad distractor or an unexplained sentence,
   so still read your own content back before calling it done.

## Module shape

```js
export default {
  id: '02',                 // two-digit string, matches the module-0N.js suffix
  title: 'اسم القسم',        // Arabic, short — this is the h1 on the module page
  heading: 'اسم الباب',      // optional, Arabic — groups this module under a chapter (see below)
  subheading: 'اسم الفصل',   // optional, Arabic — sub-label shown under `heading`
  blurb: 'One sentence in English summarizing what this module covers.',
  lessons: [ /* Lesson[], see below */ ],
};
```

Module 01 has 5 lessons. There's no hard rule on lesson count, but 4–6 is
the range that's worked — enough to build up a topic in stages without a
module dragging on.

### `heading` / `subheading` — grouping modules into chapters

Purely presentational: `content/index.js`'s `MODULES` array stays flat and
ordered (unlock sequencing is still array-position-based via `moduleIndex`
— see the comment above `isModuleUnlocked`), but `js/render.js`'s
`sidebarHtml` and `dashboardHtml` both walk that array and insert a chapter
divider (`heading` + optional `subheading`) whenever a module's `heading`
differs from the previous module's. Consecutive modules sharing the same
`heading`/`subheading` render as one group with no divider between them.

Every module should set `heading` (even a module alone in its own chapter,
like Module 01 under `المقدمة`) so the grouping is uniform across the whole
course, not just where there's more than one module in a chapter. Reserve
`subheading` for a chapter with a further sub-division worth naming (e.g.
Module 02 and 03 both sit under heading `العامل وغير العامل`, subheading
`الفعل`, because that chapter also covers العامل within الاسم and الحرف
that would need a different subheading if added later).

## Lesson shape

```js
{
  id: 'l1',                 // unique within the module: l1, l2, l3...
  title: 'الكلمة',           // Arabic, short — the h1 on the lesson page
  subtitle: 'English tag — a phrase naming the key Arabic terms covered',
  concepts: [ /* Concept[] */ ],
  quiz: [ /* QuizQuestion[] */ ],
  bank: [ /* BankItem[] */ ],
  // drills: [ ... ]  -- do not add. See "Dead fields" below.
}
```

Subtitle pattern, straight from Module 01 (English translation, em dash,
then a phrase that names the Arabic terms the lesson actually teaches so
the module page's lesson-card blurb is useful, not just decorative):

```
"The Word — utterance, meaning, and the three divisions of speech"
"Signs of the Word — how to tell اسم, فعل, and حرف apart in practice"
"The Quasi-Sentence — the جار والمجرور and الظرف that hang inside a جملة"
```

### Counts per lesson (Module 01's actuals)

| Lesson | concepts | quiz | bank (mcq / تركيب) |
|---|---|---|---|
| L1 | 4 | 6 | 24 (18 / 6) |
| L2 | 4 | 6 | 23 (17 / 6) |
| L3 | 6 | 6 | 26 (20 / 6) |
| L4 | 4 | 6 | 24 (18 / 6) |
| L5 | 4 | 6 | 24 (18 / 6) |

Target the same shape for a new lesson: **4–6 concepts**, **exactly 6 quiz
questions** (the validator only requires ≥3, but 6 is the established
norm and gives `QUIZ_PASS_RATIO` = 80% room to mean something), **~24 bank
items with a fixed 6 of them تركيب** and the rest MCQ. The تركيب count is
the one that's genuinely constant across every lesson — treat 6 as the
target, not a floor.

## Concept shape

```js
{
  heading: 'اللفظ، القول، والكلمة',   // Arabic, short — the h3 above the prose
  tldr: 'A كلمة is one meaningful word whose parts mean nothing alone.',  // required, see below
  body: `<bdi>اللَّفْظ</bdi> is any sound from the mouth, meaningful or not. ...`,
  examples: [                                               // required, 1–3 entries
    { ar: 'ضَرَبَ زَيْدٌ عَمْرًا', en: 'Zayd struck ʿAmr', note: 'ضَرَبَ is the عامل; عَمْرًا is منصوب by it' },
  ],
  sample: `اللفظ — كل صوت خرج من الفم...<br>القول — ...`,   // legacy, see below
  clarification: `...`,                                     // optional, see below
  exercise: {
    prompt: `Three of these four terms apply to both X and Y. Which applies to X alone?`,
    kind: 'mcq',
    options: ['...', '...', '...', '...'],
    correct: 2,   // index into options
  },
}
```

On the page a concept renders top to bottom as: the `// CONCEPT N` kicker,
the `heading`, the `tldr` box, the `body` prose, the `examples` box, the
`clarification` box, then the `exercise`.

- **`heading`** — Arabic only, names the grammatical point, not a full
  sentence.
- **`tldr`** — **required on every concept.** One sentence, the single
  takeaway, English carrying Arabic terms exactly like `body` (a `<bdi>`
  term inline is fine; nothing else). It renders in its own accent-railed
  "In short" box directly under the heading, so it has to stand alone: a
  learner who reads only the `tldr` should still come away with the point
  the concept is making. Keep it under 200 characters — the validator warns
  past that, because at that length it is no longer one sentence and no
  longer skimmable. Don't restate the heading, and don't tease ("this
  concept explains when الفعل is منصوب" is not a takeaway; "الفعل is منصوب
  after the four أدوات النصب" is).
- **`examples`** — **required, 1–3 entries per concept.** An array of
  `{ ar, en, note? }`:
  - `ar` — the example itself, Arabic only, **fully vocalised** (see
    "Tashkeel" below).
  - `en` — a short English gloss of `ar`. Required.
  - `note` — optional but strongly preferred: one clause saying *why* this
    example illustrates this concept, naming the terms involved (`'ضَرَبَ is
    the عامل; عَمْرًا is منصوب by it'`). English-carrier, same as a prompt.

  One worked example per substantive point the concept makes — a concept
  that draws a contrast wants one example of each side, not one of the two.
  `examples` supersedes `sample` for anything new or rewritten: write
  `examples`, and drop the concept's `sample` only if you have replaced
  every instance it carried.
- **`body`** — English prose, Arabic *terms* inline wrapped in `<bdi>...</bdi>`
  (this is what marks them as terms for bidi isolation — see js/html.js;
  it does **not** change their font or color, everything in the app reads
  in the same typeface by design). `content/index.js`'s `conceptLines()`
  splits `body` into one `<p>` per sentence automatically. If a sentence
  enumerates 2+ items, write it with an explicit `(1) ... (2) ... (3) ...`
  marker and it renders as a real list — **do this whenever a sentence
  would otherwise cram three-plus items into one breath**; it's the single
  biggest lever for readability. Every concept in Module 01 has exactly one
  `exercise`, so treat that as required in practice even though the
  validator doesn't demand it.
- **`sample`** — legacy, `<br>`-separated Arabic examples ("term —
  instance"). Every Module 01 concept has one. **It is no longer a dead
  field**: a concept with no `examples` falls back to its `sample`, split on
  `<br>`, and each line renders as an Arabic-only row in the same "Worked
  examples" box (no gloss, no note — `sample` carries neither). That's the
  floor, not the target: prefer `examples`, which gets the learner the
  English and the reason as well. Don't author a new `sample`, and don't
  delete an existing one until the concept has `examples` covering the same
  ground.
- **`clarification`** — optional. Only 5 of Module 01's 22 concepts have
  one, and it should stay that rare: add it only where the `body` prose
  genuinely can't be followed without more scaffolding (a conclusion
  asserted without the reasoning behind it, several new terms introduced in
  one breath with no worked contrast). It renders as a distinct
  "Clarification" box directly under the concept, using the **same**
  sentence-per-paragraph / list-for-enumerations structure as `body`
  (both go through `conceptProseHtml()` in `js/render.js` — write it as
  plain prose, the renderer handles the splitting). Ground every claim in
  facts already established elsewhere in the same module; don't introduce
  a grammar rule the learner hasn't seen yet just to explain this one.

## ADHD formatting — short chunks, real lists, worked examples

The learner this app is written for cannot read a wall of text, and a
paragraph that has to be re-read from the top is a paragraph that gets
skipped. These are hard rules, not preferences, and the validator warns on
the ones it can measure:

1. **No paragraph over ~320 rendered characters.** The unit here is a
   *rendered* line, not a source line: `conceptLines()` already splits
   `body` and `clarification` into one `<p>` per sentence, so this is a cap
   on a single sentence. Past it, split the sentence in two or turn it into
   a list. `npm run validate` reports the offenders by concept and line
   number.
2. **Any enumeration of 2+ items uses the `(1) ... (2) ...` markers.** Write
   `The اسم has six signs: (1) الجر, (2) التنوين, (3) ...` and it renders as
   a real list, one item per line. A sentence that names two or more things
   in a row and *doesn't* carry the markers renders as one dense line
   instead — that's the single most common way a concept becomes
   unreadable. (`a; b; c` after a colon, and a run of five-plus short
   comma-separated terms after a colon, also become lists; the `(n)` markers
   are the reliable form, so prefer them.)
3. **One worked example per substantive point.** If a concept makes two
   points, it wants two `examples` entries. A point asserted with no example
   under it is the thing the `examples` box exists to stop.
4. **Short concepts over long ones.** Three concepts of four sentences each
   beat one concept of twelve. If a concept's `tldr` can't be written as one
   sentence without an "and", the concept is doing two jobs — split it.

## Tashkeel — every Arabic word carries full harakat

Every Arabic word in every field the learner can see is **fully vocalised**:

- `heading`, `tldr`, and every Arabic term in `body` / `clarification` prose
- `examples.ar` (and `examples.en` / `examples.note` where they quote Arabic)
- every MCQ `options` entry — concept `exercise`, `quiz`, and `bank` alike
- تركيب `source`, `words`, `labels`, and `distractors`
- quiz `q` text and bank `title` / `prompt` / `instruction`

"Fully vocalised" means every word carries the harakat needed to read it
aloud without guessing — fatḥah/ḍammah/kasrah, tanwīn, shaddah, sukūn
(`ًٌٍَُِّْٰ`). This matters most on the very words a grammar lesson is about:
an example of a منصوب word is worthless if its case ending isn't written.

`npm run validate` prints a **tashkeel coverage** table — per module and in
total, the percentage of Arabic words (2+ letters) carrying at least one
harakah — and warns on any module under 95%. The starting baseline across
the whole course was ~26%, so expect the number for an untouched module to
be low; a module you've finished should be at or above 95%.

## Language of prompts

Every learner-facing question stem — a concept's `exercise.prompt`, a quiz
`q`, a bank `prompt`, a تركيب `instruction` — is an **English sentence**
with Arabic grammatical terms and quoted examples left in Arabic, e.g.
`'What is the definition of اللفظ؟'` or `'الفعل اللازم is defined as:'`.

What must **not** happen is the question itself being a full Arabic
sentence, e.g. `'صنّف كل فعل: لازم أم متعدٍ؟'` instead of `'Classify each
فعل: لازم or متعدٍ?'`. This crept into Module 02's later lessons and all of
Module 03 on a first pass — the source Anki notes are themselves
undiacritized English-question/English-answer cards (see Module 01's
source deck), and it's easy to drift into writing the whole prompt in
Arabic once a few concept bodies are full of Arabic terms. Before calling a
lesson done, skim every `q`, `prompt`, and `instruction` in it and confirm
each one reads as an English sentence carrying Arabic terms, not an Arabic
sentence with English nowhere in it.

### Language of `options` (MCQ answers)

`options` (and `labels`/`words`/`source`/`title`) are allowed to stay in
Arabic when the option genuinely *is* just a term, category name, short
label, or a literal quoted reconstruction of Arabic wording (e.g.
`'اليقين'`, `'أفعال الظن'`, `'تزعمونهم شركائي'` as the implied reading of an
ayah). That's normal and expected, not a bug.

What must **not** happen is an `options` entry being a full Arabic
**sentence** — a reasoning/explanatory clause that a learner has to parse
as prose, typically the kind of answer that would start with "because...",
"that...", or "X, unlike Y, ...". Those must be written the same way
prompts are: an English sentence carrying the Arabic terms, e.g.

```js
// Wrong — a full Arabic reasoning sentence:
options: ['لأن الاسم لا يدل على الوجود أصلًا', ...]
// Right — English-carrier, same terms:
options: ["Because an اسم doesn't indicate existence at all", ...]
```

This is easy to miss because it doesn't trip on an obvious keyword the way
a full-Arabic prompt does — a "why" or "what's the difference" question can
have a perfectly English prompt while every one of its four options is
still an untranslated Arabic clause. It also isn't limited to options
starting with `لأن` ("because") — comparative options (`'كلاهما...'`,
`'الأول... والثاني...'`), conditional options (`'نعم، إذا...'`), and options
completing a "such that..." prompt (`'أن الجملة بعده...'`) need the same
treatment. Before calling a lesson done, check every MCQ `options` array
(concept exercises, quiz, and bank) for "why"/"how"/"what's the
difference"/"what licenses this" style questions specifically, and confirm
every option in those is English-carrier prose, not Arabic prose — a short
Arabic term or category name sitting next to an English-carrier distractor
in the same array is fine and expected.

## Quiz question shape

```js
{
  q: 'What is the definition of اللفظ؟',
  options: ['An utterance that indicates a meaning', 'Every sound that exits a person’s mouth', 'A single meaningful utterance', 'A meaning tied to time'],
  correct: 1,
}
```

Same shape as a concept exercise, minus the `kind` field. 6 per lesson.
Passing needs ≥80% correct (`QUIZ_PASS_RATIO` in `content/index.js`) to
mark the lesson complete.

## Bank item shape (Practice Mode's question pool)

Two kinds, both need a `title` (short, used as the practice-session card
kicker) and a `kind`:

**MCQ** — identical shape to a quiz question, plus `title`/`kind`/`prompt`
instead of `q`:
```js
{
  title: 'مفرد or مركب؟',
  kind: 'mcq',
  prompt: 'Which of the following counts as two كلمات rather than one?',
  options: ['قَلَمٌ', 'بَيْتُ الطَّالِبِ', 'مُسْتَقِيمٌ', 'اسْتَغْفَرَ'],
  correct: 1,
}
```

**تركيب** (drag-the-label-onto-the-word) — `words[]` and `labels[]` must be
the same length and line up index-for-index; `distractors[]` are extra
labels shown in the chip tray that don't belong to any word (keeps the
tray from being solvable by elimination):
```js
{
  title: 'تركيب: خَرَجَ الرَّجُلُ مِنَ الْبَيْتِ',
  kind: 'tarkeeb',
  instruction: 'Identify the word class of each word: اسم, فعل, or حرف.',
  source: 'خَرَجَ الرَّجُلُ مِنَ الْبَيْتِ',   // the full phrase, shown above the words
  words: ['خَرَجَ', 'الرَّجُلُ', 'مِنَ', 'الْبَيْتِ'],
  labels: ['فعل', 'اسم', 'حرف', 'اسم'],
  distractors: ['مفرد', 'مركب'],
}
```

Bank items only need to stand alone — a learner can hit any one of them
from a shuffled, weighted Practice Mode queue pulled across every unlocked
lesson in the module, not necessarily right after studying the lesson it
came from. Don't write a bank prompt that depends on having just read a
specific concept's wording.

### Dead fields — do not use

`lesson.drills[]` is accepted by the shape validator (a leftover from a
pre-redesign flow) but is **never rendered anywhere in the app**. Do not
add it to a new lesson; if you're tempted to write a "drill," it belongs in
`bank[]` instead, which is what Practice Mode actually pulls from.

## Writing good distractors

This mattered enough in Module 01 that it's worth stating directly: a
distractor that's obviously wrong on sight (a nonsense option, a term from
an unrelated topic, "this doesn't apply") makes the question guessable
without knowing the material, which defeats the point of testing it.

- Pull wrong options from the **same conceptual family** as the correct
  one (e.g. asking which of four real signs of الاسم is *not* one of the
  six, rather than mixing in an unrelated term).
- For "which of these is the odd one out" questions, make all four options
  real terms/examples from the lesson — the only wrong thing about three of
  them should be that they answer a *different* question than the one
  asked.
- If two questions about the same fact would otherwise share the exact
  same four options, vary the phrasing or the correct-answer angle so
  Practice Mode showing both in one session doesn't feel repetitive.
- Every concept exercise, quiz question, and bank MCQ gets a fresh shuffle
  of its options on every view (see `js/state.js`) — you don't need to
  (and shouldn't) hand-place the correct answer in a particular position.

## Checklist for a new module

- [ ] `content/module-0N.js` created, default export matches the Module
      shape above
- [ ] Registered in `content/index.js`'s `MODULES` array
- [ ] Each lesson: 4–6 concepts (every concept has an `exercise`), 6 quiz
      questions, ~24 bank items with ~6 of them `kind: 'tarkeeb'`
- [ ] Every concept has a one-sentence `tldr` (under 200 chars) that stands
      on its own
- [ ] Every concept has 1–3 `examples` entries, each with `ar` (fully
      vocalised) and `en`, and a `note` wherever the "why" isn't obvious
- [ ] No rendered prose line over ~320 characters (see "ADHD formatting")
- [ ] Multi-item enumerations in `body`/`clarification` prose use the
      `(1) ... (2) ...` marker so they render as lists
- [ ] Every Arabic word in every learner-facing field is fully vocalised —
      module's tashkeel coverage is ≥95% in the `npm run validate` report
- [ ] Every `q`, `prompt`, and `instruction` is an English sentence with
      Arabic terms left in Arabic — not a full Arabic sentence (see
      "Language of prompts" above)
- [ ] Every MCQ `options` entry that's a reasoning/explanatory clause (not
      a bare term or category name) is English-carrier prose, not a full
      Arabic sentence (see "Language of `options`" above)
- [ ] `clarification` added only where genuinely needed (aim for a small
      minority of concepts, not most of them)
- [ ] No `drills[]` — put practice questions in `bank[]`
- [ ] Distractors are plausible, same-family wrong answers, not filler
- [ ] `npm run validate` passes, with no warnings left against this module
      (`npm run validate:strict` is the same run with warnings as errors)
- [ ] Read the lesson start-to-finish once in the running app
      (`npm start`) before calling it done
