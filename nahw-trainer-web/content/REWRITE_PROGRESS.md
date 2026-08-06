# Content rewrite — progress tracker

Status of the tashkeel / ADHD-formatting rewrite of every content module. If you
are an agent picking this work up, **read this file, then `content/README.md`,
then start.**

> **Where things stand:** modules **01–09 are finished** (100% tashkeel, zero
> validator warnings). **10–16 are untouched**, and **17–18 are part-done and
> paused**. Start with `npm run status -- --todo`.

## Errors found in the existing content

The rewrite was supposed to be cosmetic. It was not — agents cross-checking the
trainer against the learn app turned up real mistakes in the book text as
transcribed. Recording them here because the same classes of error are likely to
sit in modules 10–18, which nobody has audited yet.

**Misquoted or non-existent āyāt** (each verified against the learn source, and
dropped rather than "fixed from memory" when unverifiable):

- `﴿لَنَبْلُوَنَّ أَأَشْكُرُ أَمْ أَكْفُرُ﴾` (module 02) — not a Qur'anic reading at
  all; al-Naml 27:40 reads لِيَبْلُوَنِي. Removed.
- `﴿فَآمَنُوا خَيْرًا لَكُمْ﴾` (module 03) — 4:170 is the imperative فَآمِنُوا; the
  perfect made the stranded منصوب unintelligible.
- `﴿وَمَا هُوَ إِلَّا ذِكْرَىٰ لِلْبَشَرِ﴾` (module 07) — 74:31 reads هِيَ. Corrected
  in all three places it appeared.
- `﴿أَلَا يَرَى الْهُدْهُدَ أَمْ كَانَ…﴾` (module 18) — not the Qur'anic wording;
  27:20 reads مَا لِيَ لَا أَرَى الْهُدْهُدَ.
- Module 03 dropped two āyāt it could not verify; module 05 dropped a شاهد whose
  wording the two sources disagreed on.

**Substantive grammatical errors:**

- **module 03** said *three* sisters can never be تامّة; it is **four** — مَا
  بَرِحَ was missing. Fixed in concept, exercise, and quiz.
- **module 04** listed **لَيْسَ as one of الحروف المشبهة بليس**. لَيْسَ is a فعل
  ناقص, not a حرف; the حروف are مَا, لَا, لَاتَ, إِنْ. Replaced with مَا
  الحجازية in both places it appeared.
- **module 08** said **أَلَّا** is the التحضيض particle restricted to المضارع,
  citing ﴿أَلَا تُحِبُّونَ﴾ — a verse spelled أَلَا, with no shaddah. The
  citation contradicted the claim. همزة + لا fuses to أَلَا.
- **module 05** wrote `مَا إِنْ مَفَاتِحَهُ` where the sukūn names a *different
  particle* and breaks the point being made (should be إِنَّ, with مفاتحَه
  منصوب as its اسم).
- **module 03** wrote `نِعْمَتْ جَزَاءَ الْمُتَّقِينَ` with جَزَاءَ منصوب, which
  destroys the very point the example exists to make.
- **module 07** offered `حتى سورةِ الناس` (مجرور) as an example of a **معطوف**,
  contradicting the case-sharing rule asserted in the same concept.

**Where the learn app was wrong and the trainer right** — worth knowing that learn
is not automatically the authority:

- learn's لَعَلَّ shāhid (module 02) — al-Anbiyāʾ 21:111 is وَإِنْ أَدْرِي.
- learn conflates 20:40 and 28:13 in its كَيْ example (module 06).
- learn's `﴿لَمْ تَكُ…﴾` (module 03) — 74:43 is نَكُ; learn contradicts its own
  game bank.
- learn's own lesson vs game bank disagree on the count of المشبهات بليس
  (module 05) and of المعلِّقات (module 02).

**Unverified-source rule that emerged:** never write an āyah from memory. If it is
not in the learn source or already in the trainer's deck-derived text, either drop
it or replace it with a non-Qur'anic example.

## Ground truth is a script, not this file

Percentages in any hand-written doc rot. Get the live state with:

```bash
npm run status              # per-module table + what to do next
npm run status -- --todo    # just the next module and lesson to resume at
```

It reads the real module files. A concept counts as **rewritten** when it has
`tldr` + a non-empty `examples[]` **and** its legacy `sample` has been deleted —
the three things the rewrite always does together. Trust that over any table
pasted into a chat.

## What the rewrite does

Four changes to every concept, applied together in one pass — not four separate
passes:

1. **Tashkeel** — every Arabic word in every learner-facing field: `heading`,
   Arabic terms in `body`/`clarification`/`tldr`, `examples.ar`, MCQ `options`,
   `quiz` text, `bank` `title`/`prompt`, and تركيب
   `source`/`words`/`labels`/`distractors`.
2. **`tldr`** — one sentence, under 200 chars, the takeaway of *that concept*,
   English carrying Arabic terms. Renders as the "IN SHORT" box.
3. **`examples`** — 1–3 `{ ar, en, note? }`, `ar` fully vocalised, `note` saying
   *why* it illustrates the point. Replaces the legacy `sample` string, which is
   deleted from that concept once converted.
4. **ADHD chunking** — no rendered paragraph over ~320 chars; every enumeration of
   2+ items written with explicit `(1) ... (2) ...` markers so it renders as a real
   list; one sentence per paragraph.

Full spec, including the language rules for prompts and options, is
`content/README.md`. It is binding.

## Workflow — work incrementally

**Do not rewrite a whole module in one `Write` call.** Two earlier rounds of
agents did exactly that, died mid-write on a session limit, and lost everything —
sixteen agent-runs of work, twice.

Instead, per module:

1. Rewrite **one lesson** via `Edit` on that lesson's slice.
2. `npm run validate` — confirm the file still parses and your module reports no
   warnings.
3. Repeat for the next lesson.

An interruption then costs one lesson, not a module. This is why partially-done
modules below are safe to resume: their finished lessons are already committed and
the file is always valid.

## Reference implementations

- `content/module-01.js` — the canonical example. 100% tashkeel, every concept has
  `tldr` + `examples`, prose chunked, no `sample`. Read **its first lesson only**
  (~300 lines) for the house style; reading all 1,500 wastes budget you need for
  writing.
- `content/module-09.js` — a second finished example, and newly authored, so it
  shows the target shape without legacy residue.

## Mining the learn app

A sibling app covers the same book with better explanations in places:
`../nahw-reader/learn/`. Harvest three things from the matching source file:

- **`examples`** — learn carries `{ar, en, note}` triples with Arabic already
  vocalised. **Prefer their vocalisation to your own.**
- **rationales** — learn MCQs carry a `why:` explaining why the answer is right and
  the distractors wrong → fold into example `note`s, `clarification`, or new bank
  items.
- **bank items** — convert learn MCQs, but **dedupe hard**: read every existing
  bank `prompt` and quiz `q` in the lesson first and reject anything asking the
  same thing. The user explicitly does not want repeats. Dedupe beats volume; do
  not pad.

Learn uses a different engine (`teach`/`mcq` steps, `**bold**`, `matn`/`focus`
refs) — convert the substance, never copy the shape.

### Module → learn source map

| Modules | Learn source |
|---|---|
| 01 | `lessons/muq-bab1.js`, `muq-bab2.js`, `muq-bab3.js`, `game-bank/1-muqaddimah.js` |
| 02, 03 | `lessons/m1-bab1.js`, `game-bank/2-fil.js` |
| 04 | `lessons/m1-bab2.js`, `game-bank/3-harf-amil.js` |
| 05 | `lessons/m1-bab2b.js`, `game-bank/3-harf-amil.js` |
| 06 | `lessons/m1-bab2c.js`, `game-bank/3-harf-amil.js` |
| 07 | `lessons/m1-bab2d.js`, `m1-bab2e.js`, `m1-bab2f.js`, `game-bank/4-harf-ghayr-amil.js` |
| 08 | `lessons/m1-bab2g.js`, `m1-bab2f.js`, `game-bank/4-harf-ghayr-amil.js` |
| 09 | `lessons/m1-bab3a.js`, `m1-bab3b.js`, `game-bank/5-ism-amil.js` |
| 10 | `lessons/m1-khatima.js`, `game-bank/6-khatima-amil.js` |
| 11, 12, 13 | `lessons/m2-bab1a.js`, `m2-bab1b.js`, `m2-bab234.js`, `game-bank/7-mamul.js` |
| **14, 15, 16, 17** | **none — see below** |
| 18 | `lessons/kh-wujuh-20.js` … `kh-wujuh-24.js`, `kh-wujuh-tail.js` |

**Modules 14–17 have no learn counterpart.** The learn app covers book pp. 6–170
and 233–254, skipping the range those modules teach. Author their `tldr`s and
`examples` from the trainer's own content and skip the mining steps entirely.

## Module status

Regenerate with `npm run status` — this table is a snapshot, not the source of
truth.

| # | Module | Notes for whoever resumes it |
|---|---|---|
| 01 | المقدمة | **Done.** Reference implementation. |
| 02 | الفعل القياسي | **Done.** 100% tashkeel. |
| 03 | الفعل السماعي | **Done.** 100% tashkeel. |
| 04 | حروف الجر | **Done.** 100% tashkeel, from the app's worst baseline (16%). |
| 05 | النواسخ الحرفية | **Done.** 100% tashkeel. |
| 06 | النواصب والجوازم | **Done.** 100% tashkeel. |
| 07 | العطف وما بعده | **Done.** 100% tashkeel. |
| 08 | التوبيخ والتنبيه | **Done.** 100% tashkeel. |
| 09 | الاسم العامل والعامل المعنوي | **Done.** Newly authored — see "Chapter added" below. |
| 10 | حذف العامل | Not started. |
| 11 | معمول الاسم | Not started. 8 lessons. |
| 12 | المستثنى وما بعده | Not started. 8 lessons. |
| 13 | الجملة وشبه الجملة | Not started. |
| 14 | علامات الإعراب والبناء | Not started. 8 lessons, **no learn source**. |
| 15 | خاتمة الاسم | Not started. 9 lessons — the largest, **no learn source**. |
| 16 | خاتمة الفعل | Not started. 7 lessons, **no learn source**. |
| 17 | الرسم والوصل والوقف | **Paused** by user request — L1 and L2 concepts done, L3 untouched. Agent was killed just before vocalising L2's quiz/bank, so **re-check those two arrays** before calling L2 finished. No learn source. Special case: it is *about* orthography, so preserve deliberately irregular spellings and explain them in the example `note` rather than "correcting" them. |
| 18 | وجوه الكلمات | **Paused** by user request — L1–L5 done, L6–L8 untouched. Coverage audit is **complete**; nine findings for L6–L8 are listed below, already researched and just needing to be written in. |

## Module 18 — handoff detail

Stopped cleanly at the end of L5. L1–L5 are done (tashkeel ~100%, `tldr` +
`examples` throughout, `sample` deleted); L6–L8 still carry legacy `sample` and
hold essentially all of the module's 1,647 remaining unvowelled words. +19 net new
bank items so far.

**Two renderer gotchas learned the hard way — these apply to every module:**

1. `(1) … (2) …` only becomes a real list if a **lead-in precedes `(1)`** — the
   splitter needs ≥3 segments.
2. The 320-char cap is **per rendered sentence**, so "X is of two kinds: A…, and
   B…" must be re-cast with `(1)`/`(2)` markers rather than merely shortened.

**Coverage findings for L6–L8** — the learn source has these and the trainer does
not. All are researched; they just need writing in:

1. **كم** — the tamyīz test is missing entirely: الاستفهامية takes a **مفرد
   منصوب**, الخبرية takes a **مجرور**, often with مِنْ. This is the whole
   discriminator and learn leads with it.
2. **كيف الشرطية — a real grammatical disagreement.** Learn calls it **شرط غير
   جازم** («كَيْفَ تَجْلِسُ أَجْلِسُ», ḍammah); the trainer writes it jazming
   («تَجْلِسْ أَجْلِسْ»). **Follow learn** — it is the book's own reading — and
   note that it does not jazm.
3. **اللام count.** Trainer says eight wujūh; learn/the book counts **seven**,
   treating المزحلقة as لام الابتداء shifted after إنّ rather than its own face. No
   quiz item depends on the number — keep eight, add the note.
4. **لا** — missing trigger: ناهية jazms the مضارع (تَقُلْ), نافية leaves it مرفوع.
5. **لولا** (اسمية → شرط, ماضٍ → توبيخ, مضارع → تحضيض) and **لمّا** (ماضٍ → ظرف,
   مضارع → نفي جازم, اسم → استثناء) triggers are only implicit — make them explicit.
6. **ليس** — missing trigger: a مضارع directly after it forces the حرف نفي مهمل
   reading.
7. **ما الاسمية** — شرطية jazms a pair, موصولة governs nothing. Also **لو التمني**
   vs الشرط (تمنٍّ takes أنّ, and a منصوب مضارع after a فاء).
8. **مَنْ** — learn counts **five** faces (a fifth interrogative one in the book's
   footnote); the trainer lists four. Worth a half-sentence.
9. **واو المعية** — the trainer prints وَتَأْتِيَ منصوب but never states that this
   و itself governs نصب on the following مضارع, unlike a plain عطف.

**Already fixed in L1–L5, for the record:** إذْ المفاجأة and الفاء العاطفة had **no
example at all**; حَتَّى الاستئنافية was only ever shown via حتى إذا; and أم
المنقطعة was illustrated with a **misquote** (﴿أَلَا يَرَى الْهُدْهُدَ…﴾ is not the
Qur'anic wording — Q27:20 reads مَا لِيَ لَا أَرَى الْهُدْهُدَ), replaced with
learn's verified ﴿أَمْ يَقُولُونَ افْتَرَاهُ بَلْ هُوَ الْحَقُّ﴾.

## Chapter added — module 09

The trainer was missing al-Kubrā's **باب ٣ في الاسم (الاسم العامل)** and **باب ٤ في
العامل المعنوي** (book pp. 104–120) outright. Verified absent: الإضافة المعنوية,
شروط عمل اسم الفاعل, العامل المعنوي, تمييز الذات, أسماء الشرط. Module 15 lesson 1
lists the five مشتقات as morphological categories but never teaches their **عمل**.

That chapter is now `content/module-09.js`, and modules 09–17 were renumbered to
10–18 to seat it in book order. The user's save file was empty at the time, so no
progress migration was needed. **If you renumber again, check
`~/An-Nahw/save-data.json` first** — `completed`/`quizScores`/`exStates` are keyed
by module id.

## Engine changes this rewrite depends on

Already shipped; listed so nobody re-does them:

- `tldr` and `examples` added to the concept schema, rendered by
  `conceptTldrHtml()` / `conceptExamplesHtml()` in `js/render.js`.
- `sample` is no longer a dead field — it renders as an examples fallback, which is
  why unconverted modules already show an examples box.
- `.concept-tldr`, `.concept-examples`, and concept-separator styling in
  `styles.css`.
- `scripts/validate-content.mjs` gained a warnings layer, a `--strict` mode
  (`npm run validate:strict`) that promotes warnings to errors, and a per-module
  tashkeel report.
