/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الأول في الفعل (pp. 22–40) ──
   The complete Verb chapter: qiyāsī (lāzim/mutaʿaddī, heart-verbs, taʿlīq/ilghāʾ) and
   samāʿī (kāna & sisters, rajāʾ/muqāraba/shurūʿ, madḥ/dhamm, taʿajjub).
   Authored from books/kubra-nahw/maqsad1-bab1.js. Bank ids from chapterId m1-bab-1. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-1',
  titleAr: 'الْبَابُ الْأَوَّلُ فِي الْفِعْلِ',
  titleEn: 'The Verb (al-fiʿl)',
  pages: '22–40',
  sections: [

    /* ═══ 1. Qiyāsī: lāzim & mutaʿaddī ═══ */
    {
      id: 'qiyasi',
      title: 'The regular verb — لازم & متعدٍّ',
      subtitle: 'القياسي and how far its effect reaches',
      matn: { src: 'DATA_M1_BAB1', from: 1, to: 12, check: 'الْبَابُ' },
      steps: [
        { t: 'teach', title: 'The verb is two types',
          focus: [1, 2, 3, 4, 5, 6],
          points: [
            '**القياسي** — has a consistent, always-applicable rule (قاعدة مطّردة): it raises the fāʿil (or its deputy) and puts the objects and the ḥāl in naṣb.',
            '**السماعي** — no consistent rule; depends on what is heard from the Arabs. (Comes later in the chapter.)',
          ] },

        { t: 'teach', title: 'لازم vs متعدٍّ',
          focus: [7, 8, 10, 11, 12],
          points: [
            '**اللازم** — its doer’s effect does NOT pass to a direct object: ﴿وَلَا هُمْ يَحْزَنُونَ﴾. Also called **فعل قاصر** and **فعل غير متعدٍّ**; its effect may still reach a non-object — a ظرف or a حال: جَلَسَ الطَّالِبُ أَمَامَ الْمُعَلِّمِ مُتَأَدِّبًا.',
            '**المتعدّي** — the effect passes to a مفعول به. Also called **فعل واقع** and **فعل مجاوز**.',
            'Two routes to the object — **بنفسه** or **بواسطة حرف جر** — and one verb can use both: اهْدِنَا الصِّرَاطَ vs هَدَاهُ إِلَى صِرَاطٍ.',
          ],
          examples: [
            { ar: 'أَذْهَبَ عَنَّا الْحَزَنَ', en: 'transitive by itself', note: 'بنفسه' },
            { ar: 'ذَهَبَ اللهُ بِنُورِهِمْ', en: 'transitive via a preposition', note: 'بواسطة حرف جر' },
          ],
          after: 'Reached through a preposition, the object is called **مفعول به بواسطة حرف الجر**, a متعلِّق with the sense of the object, or a **مفعول به غير صريح**.' },

        { t: 'mcq', q: 'What does قياسي mean, applied to a verb?',
          choices: ['It has a consistent rule that always applies', 'It is measured in poetry', 'It is heard from the Arabs', 'It has three root letters'],
          correct: 0,
          why: 'القياسي ما له قاعدة مطّردة — contrast السماعي, which depends on samāʿ.' },

        { t: 'mcq', q: 'The qiyāsī verb’s consistent rule is…',
          choices: ['raise the fāʿil or its deputy; put the objects and ḥāl in naṣb', 'raise everything after it', 'put the fāʿil in naṣb', 'govern only nouns'],
          correct: 0,
          why: 'يرفع الفاعل أو نائبه وينصب المفاعيل والحال — the opening line of the chapter.' },

        { t: 'mcq', q: '﴿وَلَا هُمْ يَحْزَنُونَ﴾ — يَحْزَنُ is…',
          choices: ['لازم — the effect stays with its doer', 'متعدٍّ بنفسه', 'متعدٍّ بواسطة حرف جر', 'ناقص'],
          correct: 0,
          why: 'No object receives the grieving; لا يتجاوز أثر فاعله إلى المفعول به.' },

        { t: 'mcq', q: 'In ﴿ذَهَبَ اللهُ بِنُورِهِمْ﴾, what is نُورِهِمْ?',
          choices: ['a مفعول به غير صريح — object reached via the preposition بِ', 'a fāʿil', 'a ḥāl', 'a majrūr with no relation to the verb'],
          correct: 0,
          why: 'ذهب is made transitive by بِ: “Allah took away their light.” The book allows three names: مفعول به بواسطة حرف الجر / متعلِّق بمعنى المفعول به / مفعول به غير صريح.' },

        { t: 'bank', id: 'm1-bab-1--explain-line--explain-the-following-matn-line--x' },
        { t: 'bank', id: 'm1-bab-1--state-types--state-the-types-of-the-transitiv-11' },
      ],
    },

    /* ═══ 2. Objects & the heart-verbs ═══ */
    {
      id: 'qulub',
      title: 'Two objects & أفعال القلوب',
      subtitle: 'يقين vs ظنّ · حذف المفعولين',
      matn: { src: 'DATA_M1_BAB1', from: 13, to: 42, check: 'وَالْفِعْلُ' },
      steps: [
        { t: 'teach', title: 'The mutaʿaddī is three kinds',
          focus: [13, 14, 15, 16, 17, 18],
          points: [
            '**To one object**: ﴿خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ﴾.',
            '**To two objects** — itself two types: objects NOT originally mubtadaʾ+khabar (a **فعل جارحة**: ﴿وَهَدَيْنَاهُمَا الصِّرَاطَ الْمُسْتَقِيمَ﴾ — “them” and “the path” were never a sentence), and objects that WERE mubtadaʾ+khabar (a **فعل قلب** or **فعل تحويل**: ﴿وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً﴾ ← الساعةُ قائمةٌ).',
            '**To three objects** — next section.',
          ] },

        { t: 'teach', title: 'Dropping the هدى-type objects',
          focus: [20, 21, 22, 23],
          points: [
            'With the هدى-type, drop the **first** object: ﴿وَإِنَّكَ لَتَهْدِي إِلَى صِرَاطٍ مُسْتَقِيمٍ﴾.',
            'Or the **second**: ﴿أُولَٰئِكَ الَّذِينَ هَدَاهُمُ اللهُ﴾.',
            'Or **both**: ﴿أَعْطَى كُلَّ شَيْءٍ خَلْقَهُ ثُمَّ هَدَى﴾.',
          ] },

        { t: 'mcq', q: 'وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً — what were the two objects originally?',
          choices: ['a mubtadaʾ and khabar: السَّاعَةُ قَائِمَةٌ', 'a fāʿil and mafʿūl', 'two adverbs', 'nothing — they are one object'],
          correct: 0,
          why: 'ظنّ enters on a nominal sentence and turns both parts into its objects — the mark of the heart-verb family.' },

        { t: 'mcq', q: '﴿وَهَدَيْنَاهُمَا الصِّرَاطَ﴾ takes two objects. Same type as ظنّ?',
          choices: ['No — its objects were never mubtadaʾ + khabar', 'Yes — identical', 'No — it takes three objects', 'No — it is lāzim'],
          correct: 0,
          why: '“Them-two” and “the path” never formed a sentence (هما الصراطُ ✗). That is the first type of two-object verb.' },

        { t: 'teach', title: 'أفعال القلوب — اليقين',
          focus: [24, 25, 26, 27, 28, 29, 31, 32],
          points: [
            'The heart-verbs are two families; both take two objects that were originally a مبتدأ + خبر.',
            '**اليقين** (certainty): وَجَدَ، أَلْفَى، رَأَى، عَلِمَ، عَرَفَ، دَرَى، تَعَلَّمْ (= اعْلَمْ).',
          ],
          examples: [
            { ar: 'وَإِن وَجَدْنَا أَكْثَرَهُمْ لَفَاسِقِينَ', en: 'wajada — certainty', note: 'يقين' },
          ] },

        { t: 'teach', title: 'أفعال القلوب — الظنّ',
          focus: [35, 36, 37, 38, 39, 40],
          points: [
            '**الظنّ** (probability), also called **أفعال الرجحان**: ظَنَّ، حَسِبَ، زَعَمَ، جَعَلَ، حَجَا، عَدَّ، وَهَبَ، خَالَ.',
          ],
          examples: [
            { ar: 'وَيَحْسَبُونَ أَنَّهُمْ مُهْتَدُونَ', en: 'ḥasiba — supposition', note: 'ظنّ' },
            { ar: 'زَعَمَ الَّذِينَ كَفَرُوا…', en: 'zaʿama — a claim', note: 'ظنّ' },
          ] },

        { t: 'mcq', q: 'Which verb belongs to the يقين family?',
          choices: ['عَلِمَ', 'حَسِبَ', 'زَعَمَ', 'خَالَ'],
          correct: 0,
          why: 'Certainty verbs: وجد، ألفى، رأى، علم، عرف، درى، تعلّمْ. The others are ẓann/rujḥān verbs.' },

        { t: 'mcq', q: 'The ẓann family is also called…',
          choices: ['أفعال الرجحان', 'أفعال الشروع', 'أفعال المقاربة', 'الأفعال الناقصة'],
          correct: 0,
          why: 'They denote the more-likely opinion — رجحان (preponderance).' },

        { t: 'teach', title: 'ألم تَرَ · أرأيتَ · أرأيتَكَ',
          points: [
            '**ألم تَرَ** = “do you not know?” — with amazement; knowing is voiced as *seeing*, sight being the strongest cause of knowledge.',
            '**أرأيتَ** = **أخبرني** (“tell me!”) in wondrous situations; its nominative pronoun changes: أرأيتَ، أرأيتِ، أرأيتم….',
            '**أرأيتَكَ** adds the **كاف الخطاب** for emphasis — then the pronoun stays fixed and only the kāf changes.',
          ] },

        { t: 'teach', title: 'Dropping the heart-verb’s objects',
          focus: [42],
          points: [
            '**Allowed — الاختصار**: dropping BOTH objects when an indicator points to them: ﴿أَيْنَ شُرَكَائِيَ الَّذِينَ كُنْتُمْ تَزْعُمُونَ﴾ i.e. تزعمونهم شركائي.',
            '**Not allowed — الاقتصار**: dropping just ONE with no indicator: ظَنَنْتُ… alone is broken speech.',
          ] },

        { t: 'mcq', q: 'ظَنَنْتُ زَيْدًا — said with nothing pointing to a second object. Acceptable?',
          choices: ['No — الاقتصار on one object of a heart-verb is not permitted', 'Yes — one object suffices', 'Yes — if Zayd is known', 'Only in poetry'],
          correct: 0,
          why: 'The two objects were a mubtadaʾ + khabar: you cannot state a subject and suppress its predicate without indicator. Drop both (with a دليل) or keep both.' },

        { t: 'bank', id: 'm1-bab-1--state-types--the-verbs-of-the-heart-af-l-al-q-13' },
      ],
    },

    /* ═══ 3. Taḥwīl & three objects ═══ */
    {
      id: 'tahwil',
      title: 'أفعال التحويل & three objects',
      subtitle: 'بمعنى صيّر · المتعدّي إلى ثلاثة مفاعيل',
      matn: { src: 'DATA_M1_BAB1', from: 44, to: 46, check: 'أَفْعَالُ' },
      steps: [
        { t: 'teach', title: 'The transformation verbs',
          focus: [44],
          body: 'A second family that takes two objects: whatever carries the sense of **صَيَّرَ** (to render / turn into).',
          points: [
            'The list: **صَيَّرَ، رَدَّ، تَرَكَ، اتَّخَذَ، جَعَلَ، وَهَبَ**.',
            'They take two objects **only with the taḥwīl sense**: تَرَكْتُ مِلَّةَ قَوْمٍ = “abandoned” (one object); ﴿وَجَعَلَ لَكُمُ السَّمْعَ﴾ = خَلَقَ (one object).',
          ],
          examples: [
            { ar: 'يَرُدُّونَكُم … كُفَّارًا', en: 'radda — turn you into disbelievers' },
            { ar: 'فَجَعَلْنَاهُ هَبَاءً مَنْثُورًا', en: 'jaʿala — made it scattered dust' },
          ] },

        { t: 'mcq', q: '﴿وَاتَّخَذَ اللهُ إِبْرَاهِيمَ خَلِيلًا﴾ — اتَّخَذَ here is…',
          choices: ['a taḥwīl verb (sense of صيّر) with two objects', 'a heart-verb of certainty', 'lāzim', 'transitive to one object'],
          correct: 0,
          why: 'إبراهيم and خليلًا are its two objects; the verb renders one thing into/as another — the ṣayyara sense.' },

        { t: 'mcq', q: 'جَعَلَ appears in BOTH the ẓann list and the taḥwīl list. How do you tell which is meant?',
          choices: ['By the sense: “deemed/believed” = ẓann; “made/rendered” = taḥwīl', 'By the tense', 'It is always ẓann', 'By the number of objects'],
          correct: 0,
          why: '﴿وَجَعَلُوا الْمَلَائِكَةَ … إِنَاثًا﴾ = they *deemed* (ẓann); ﴿فَجَعَلْنَاهُ هَبَاءً﴾ = He *rendered* (taḥwīl). Both take two objects; the meaning decides.' },

        { t: 'teach', title: 'Transitive to THREE objects',
          focus: [45, 46],
          points: [
            'Only a **heart-verb** (made causative, e.g. أَرَى ← رأى) reaches three objects.',
            'The 2nd and 3rd objects were a mubtadaʾ + khabar in origin: أَعْمَالُهُمْ حَسَرَاتٌ.',
            'The family: the causatives of perception — **أَرَى، أَعْلَمَ، نَبَّأَ، أَنْبَأَ، خَبَّرَ، أَخْبَرَ، حَدَّثَ**.',
          ] },

        { t: 'mcq', q: 'In يُرِيهِمُ اللهُ أَعْمَالَهُمْ حَسَرَاتٍ, the three objects are…',
          choices: ['هم · أعمالهم · حسرات', 'الله · أعمالهم · حسرات', 'هم · الله · حسرات', 'أعمالهم · حسرات · عليهم'],
          correct: 0,
          why: 'الله is the fāʿil. The attached هم is object 1; أعمالهم and حسرات (originally mubtadaʾ + khabar) are objects 2 and 3.' },

        { t: 'mcq', q: 'Which verbs can take three objects?',
          choices: ['only heart-verbs (in causative form)', 'any transitive verb', 'taḥwīl verbs', 'kāna and its sisters'],
          correct: 0,
          why: 'وَلَا يَكُونُ إِلَّا فِعْلَ قَلْبٍ — e.g. أرى، أعلم.' },

        { t: 'written',
          prompt: 'Name the three kinds of the transitive verb, and for the two-object kind give both sub-types with an example each.',
          model: 'Transitive to (1) one object: خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ. (2) Two objects — (a) objects not originally mubtadaʾ+khabar: وَهَدَيْنَاهُمَا الصِّرَاطَ الْمُسْتَقِيمَ; (b) objects originally mubtadaʾ+khabar: وَمَا أَظُنُّ السَّاعَةَ قَائِمَةً (heart-verbs, and the taḥwīl verbs with the sense of صيّر). (3) Three objects — heart-verbs only, the 2nd and 3rd originally mubtadaʾ+khabar: يُرِيهِمُ اللهُ أَعْمَالَهُمْ حَسَرَاتٍ.' },
      ],
    },

    /* ═══ 4. Taʿlīq & ilghāʾ ═══ */
    {
      id: 'taliq',
      title: 'التعليق والإلغاء',
      subtitle: 'Suspending & cancelling the heart-verb’s government',
      matn: { src: 'DATA_M1_BAB1', from: 47, to: 65, check: 'مَا' },
      steps: [
        { t: 'teach', title: 'What can stand in for the two objects',
          focus: [47, 48, 49, 51],
          points: [
            'The **اسم مؤوّل**: ﴿وَاعْلَمُوا أَنَّ اللهَ مَعَ الْمُتَّقِينَ﴾ — أنّ + clause fills both object slots.',
            'A **جملة**: ﴿وَاللهُ يَشْهَدُ إِنَّ الْمُنَافِقِينَ لَكَاذِبُونَ﴾.',
          ] },

        { t: 'teach', title: 'التعليق — suspension',
          focus: [52, 53, 54],
          body: 'When a sentence fills the two-object slot, the heart-verb governs it **in position only (محلًّا), not in form (لفظًا)** — this is taʿlīq. It happens when the clause opens with something holding **صدر الكلام** (clause-initial right).' },

        { t: 'teach', title: 'The six مُعلِّقات',
          focus: [55, 56, 57, 58, 59, 61],
          points: [
            '**إن وما النافيتان**: ﴿وَتَظُنُّونَ إِن لَّبِثْتُمْ إِلَّا قَلِيلًا﴾ · ﴿لَقَدْ عَلِمْتَ مَا أَنزَلَ هَٰؤُلَاءِ…﴾.',
            '**لام الابتداء** ﴿وَلَقَدْ عَلِمُوا لَمَنِ اشْتَرَاهُ…﴾ — its sister **اللام المزحلقة** suspends too: ﴿قَدْ نَعْلَمُ إِنَّهُ لَيَحْزُنُكَ الَّذِي يَقُولُونَ﴾ — and **لعلّ** ﴿وَمَا أَدْرِي لَعَلَّهُ فِتْنَةٌ لَكُمْ﴾.',
            '**الاستفهام** ﴿أَيَّ مُنقَلَبٍ يَنقَلِبُونَ﴾ and **لام جواب القسم** ﴿وَلَقَدْ عَلِمْتُ لَتَأْتِيَنَّ مَنِيَّتِي﴾.',
          ] },

        { t: 'teach', title: 'الإلغاء — cancellation',
          focus: [62, 63, 64, 65],
          points: [
            '**الإلغاء** = nullifying the heart-verb’s government in form AND in position (اللفظي والمحلي).',
            'Verb **between** its two objects → applying government preferred: مُحَمَّدًا عَلِمْتُ صَادِقًا.',
            'Verb **after** both → cancelling preferred: مُحَمَّدٌ صَادِقٌ عَلِمْتُ.',
          ] },

        { t: 'mcq', q: 'Taʿlīq differs from ilghāʾ how?',
          choices: ['taʿlīq: government blocked in form but kept in position · ilghāʾ: nullified in both', 'they are synonyms', 'taʿlīq is optional, ilghāʾ obligatory', 'ilghāʾ applies only to kāna'],
          correct: 0,
          why: 'المعلَّق governs محلًّا لا لفظًا; المُلغى governs neither — لفظًا ولا محلًّا.' },

        { t: 'mcq', q: '﴿وَتَظُنُّونَ إِن لَّبِثْتُمْ إِلَّا قَلِيلًا﴾ — why doesn’t تظنون put لبثتم’s clause in naṣb?',
          choices: ['إن النافية holds صدر الكلام, suspending the verb (تعليق)', 'ظنّ is lāzim here', 'The clause is a ṣilah', 'It does — invisibly'],
          correct: 0,
          why: 'Clause opens with a ṣadr-holding word (negating إن), so ẓanna is suspended: it governs the clause only by position.' },

        { t: 'mcq', q: 'مُحَمَّدٌ صَادِقٌ عَلِمْتُ — the preferred treatment of علمت is…',
          choices: ['ilghāʾ — it trails after both governed terms', 'iʿmāl — apply naṣb to both', 'taʿlīq', 'delete the verb'],
          correct: 0,
          why: 'يترجّح إلغاؤه إذا تأخّر عن معموليه. Between the two objects, iʿmāl is preferred instead.' },

        { t: 'mcq', q: 'Which of these does NOT trigger taʿlīq?',
          choices: ['أل التعريف', 'لام الابتداء', 'الاستفهام', 'لعلّ'],
          correct: 0,
          why: 'Triggers are ṣadr-holders: إن وما النافيتان، لام الابتداء، لعلّ، الاستفهام، لام جواب القسم. The definite article isn’t one.' },

        { t: 'bank', id: 'm1-bab-1--compare--explain-with-examples-the-differ-15' },
        { t: 'bank', id: 'm1-bab-1--explain-statement--explain-the-following-statement--1b' },
        { t: 'bank', id: 'm1-bab-1--explain-line--explain-the-following-matn-line--z' },
      ],
    },

    /* ═══ 5. The samāʿī & kāna ═══ */
    {
      id: 'kana',
      title: 'السماعي & كان',
      subtitle: 'الأفعال الناقصة · معاني كان',
      matn: { src: 'DATA_M1_BAB1', from: 66, to: 79, check: 'النَّوْعُ' },
      steps: [
        { t: 'teach', title: 'Second type of verb: السماعي',
          focus: [66, 67, 68, 69, 70, 71],
          points: [
            '**السماعي** — no consistent rule; depends on السماع. Three divisions: الأفعال الناقصة، أفعال المدح والذم، صيغ التعجب.',
            '**الأفعال الناقصة** enter on the mubtadaʾ + khabar: they **raise the first** (called its اسم) and **put the second in naṣb** (called its خبر).',
            'Called **ناقص** because it does not complete its meaning with its فاعل alone — it needs its خبر. Four kinds — the first: كان وأخواتها, thirteen verbs.',
          ] },

        { t: 'mcq', q: 'What do the defective verbs do to the nominal sentence they enter?',
          choices: ['raise the mubtadaʾ (now its ism) and put the khabar in naṣb', 'put both in naṣb', 'raise both', 'nothing — they only add tense'],
          correct: 0,
          why: 'ترفع الأول ويسمى اسمها وتنصب الثاني ويسمى خبرها: كان زيدٌ قائمًا.' },

        { t: 'teach', title: 'The meanings of كان',
          focus: [72, 73, 74, 76],
          points: [
            '**الماضي المنقطع** (completed past) — with fixedness (ثبوت) ﴿وَكَانُوا عَلَيْهِ شُهَدَاءَ﴾, or occurrence (حدوث) ﴿وَلَقَدْ كَانُوا عَاهَدُوا اللهَ﴾; **الماضي المتجدد** (recurring past) — continuity كُنْتُ أَذْهَبُ يَوْمًا, or habit ﴿كَانَا يَأْكُلَانِ الطَّعَامَ﴾.',
            '**الحال** — sense of ما زال: ﴿وَكَانَ الْإِنْسَانُ عَجُولًا﴾; **الاستقبال** — ﴿كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا﴾.',
            '**الانبغاء** (“it is [not] fitting”) ﴿مَا كَانَ لَنَا أَن نُّشْرِكَ﴾ and **القدرة** (capability) ﴿وَمَا كَانَ لِنَفْسٍ أَن تَمُوتَ إِلَّا بِإِذْنِ اللهِ﴾.',
          ] },

        { t: 'mcq', q: '﴿وَكَانَ الْإِنْسَانُ عَجُولًا﴾ — man stopped being hasty?',
          choices: ['No — كان here has the sense of ما زال: he still is', 'Yes — past tense', 'The verse is future', 'كان is dropped'],
          correct: 0,
          why: 'One of kāna’s meanings is الحال بمعنى ما زال — a standing description, not a lapsed one.' },

        { t: 'mcq', q: '﴿كَانَتْ لَهُمْ جَنَّاتُ الْفِرْدَوْسِ نُزُلًا﴾ speaks of…',
          choices: ['the future — kāna can denote الاستقبال', 'the abrogated past', 'a habit', 'negation'],
          correct: 0,
          why: 'Paradise as lodging is yet to come; kāna stretches over past, present and future senses.' },

        { t: 'teach', title: 'Two omission rules',
          focus: [77, 79],
          points: [
            '**Dropping the nūn**: يَكُونُ/تَكُونُ/أَكُونُ/تَكُونِي may lose the nūn when **majzūm** and not followed by a sākin or an attached naṣb-pronoun: ﴿لَمْ تَكُ مِنَ الْمُصَلِّينَ﴾ — but ﴿لَمْ يَكُنِ الَّذِينَ كَفَرُوا﴾ keeps it (sākin follows).',
            '**Dropping كان with its ism** after the conditional إنْ and لَوْ: الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ — i.e. ولو كان الملتمَسُ خاتمًا. Occasionally elsewhere: ﴿فَآمِنُوا خَيْرًا لَكُمْ﴾.',
          ] },

        { t: 'mcq', q: 'Why can’t ﴿لَمْ يَكُنِ الَّذِينَ كَفَرُوا﴾ drop the nūn of يكن?',
          choices: ['A sākin follows (the الـ of الذين) — the nūn must stay', 'It can — the verse is an exception', 'يكن is not majzūm', 'The nūn only drops in poetry'],
          correct: 0,
          why: 'Condition: majzūm + no following sākin + no attached naṣb pronoun. لَمْ تَكُ مِنَ… drops it because مِن begins with a vowelled letter.' },

        { t: 'mcq', q: 'الْتَمِسْ وَلَوْ خَاتَمًا مِنْ حَدِيدٍ — where did كان go?',
          choices: ['dropped with its ism after لو: ولو كان الملتمَسُ خاتمًا', 'nothing dropped — خاتمًا is a ḥāl', 'كان never fits here', 'dropped after إذا'],
          correct: 0,
          why: 'قد يُحذف كان مع اسمها بعد إنْ ولو الشرطيتين — the naṣb on خاتمًا is the stranded khabar.' },

        { t: 'bank', id: 'm1-bab-1--explain-statement--explain-the-following-statement--1d' },
        { t: 'bank', id: 'm1-bab-1--define-types-examples--what-are-the-defective-verbs-al--1f' },
      ],
    },

    /* ═══ 6. The sisters of kāna ═══ */
    {
      id: 'sisters',
      title: 'أخوات كان',
      subtitle: 'The thirteen · ناقص vs تام',
      matn: { src: 'DATA_M1_BAB1', from: 80, to: 106, check: 'الثَّانِي' },
      steps: [
        { t: 'teach', title: 'Sisters 2–7: times of day & صار',
          focus: [80, 81, 82, 83, 84, 85, 86],
          points: [
            'Five attach the khabar to the ism **at a time of day**: **أَصْبَحَ** الصباح ﴿فَأَصْبَحَ فِي الْمَدِينَةِ خَائِفًا﴾ · **أَضْحَى** الضحى · **أَمْسَى** المساء · **ظَلَّ** النهار · **بَاتَ** الليل ﴿يَبِيتُونَ لِرَبِّهِمْ سُجَّدًا﴾.',
            '**صَارَ** — التحوّل: of essence (تحوّل الذات) صَارَ الْخَمْرُ خَلًّا, or of attributes (تحوّل الصفات) صَارَ الْمُذْنِبُ مُتَّقِيًا.',
          ] },

        { t: 'teach', title: 'What comes with the sense of صار',
          focus: [87, 88, 90, 91, 92, 93],
          points: [
            'كان، أصبح، أضحى، أمسى، ظلّ، بات can all shift to the sense of **صار**: ﴿فَأَصْبَحْتُم بِنِعْمَتِهِ إِخْوَانًا﴾.',
            'So can **ارتدّ** ﴿فَارْتَدَّ بَصِيرًا﴾, **عاد** ﴿أَوْ لَتَعُودُنَّ فِي مِلَّتِنَا﴾, and **استحال**.',
          ] },

        { t: 'teach', title: 'Sisters 8–13: continuity, duration, negation',
          focus: [94, 95, 96, 97, 101, 103],
          points: [
            '**الاستمرار** (continuity), four: **مَا بَرِحَ** ﴿لَن نَّبْرَحَ عَلَيْهِ عَاكِفِينَ﴾ · **مَا انْفَكَّ** · **مَا زَالَ** ﴿فَمَا زِلْتُمْ فِي شَكٍّ﴾ · **مَا فَتِئَ** ﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾.',
            '**مَا دَامَ** — توقيت: it time-bounds what precedes by the duration of ism-being-khabar: ﴿مَا دُمْتُ حَيًّا﴾.',
            '**لَيْسَ** — نفي الحال: ﴿لَيْسَ عَلَيْكَ هُدَاهُمْ﴾. ما دام and ليس are **غير متصرفين** — only their māḍī occurs.',
          ] },

        { t: 'teach', title: 'Rules that ride along',
          focus: [98, 100, 102],
          points: [
            'The four continuity verbs (برح، انفكّ، زال، فتئ) are **ناقصة التصرف** (māḍī + muḍāriʿ only) and operate **only after نهي، نفي، or دعاء**.',
            'زَالَ يَزَالُ is the nāqiṣ one; زَالَ يَزُولُ (maṣdar زَوَال) is a complete verb: ﴿أَن تَزُولَا﴾.',
            'ما alone may stand for **ما دام**: وَاللهُ فِي عَوْنِ الْعَبْدِ مَا كَانَ الْعَبْدُ فِي عَوْنِ أَخِيهِ · يُسْتَجَابُ لِأَحَدِكُمْ مَا لَمْ يَعْجَلْ.',
          ] },

        { t: 'mcq', q: 'صَارَ الْمُذْنِبُ مُتَّقِيًا illustrates which use of صار?',
          choices: ['change of attributes (تحوّل الصفات)', 'change of essence (تحوّل الذات)', 'negation', 'duration'],
          correct: 0,
          why: 'The sinner’s essence stays human; his attribute changes. صَارَ الْخَمْرُ خَلًّا is the essence-change example.' },

        { t: 'mcq', q: 'Why is مَا زَالَ الْمُؤْمِنُ مُجْتَهِدًا fine but زَالَ الْمُؤْمِنُ مُجْتَهِدًا wrong?',
          choices: ['The four continuity verbs operate only after negation, prohibition or duʿāʾ', 'زال is complete only', 'The ism must be indefinite', 'Nothing wrong'],
          correct: 0,
          why: 'لا تعمل إلا إذا تقدّمها نهي أو نفي أو دعاء — hence they always appear as ما زال، لن نبرح، لا تزالُ (duʿāʾ)…' },

        { t: 'mcq', q: '﴿إِنَّ اللهَ يُمْسِكُ السَّمَاوَاتِ وَالْأَرْضَ أَن تَزُولَا﴾ — تزولا here is…',
          choices: ['the complete زال (yazūlu, “to cease”) — full verb, no khabar', 'the defective زال', 'a sister of عسى', 'a taḥwīl verb'],
          correct: 0,
          why: 'زال يزول مصدره زوال = complete; the nāqiṣ one is زال يزال. Watch the muḍāriʿ pattern.' },

        { t: 'teach', title: 'ناقص vs تام',
          focus: [104, 105, 106],
          points: [
            '**الفعل التام** suffices with its fāʿil and needs no khabar: كَانَتْ حَرْبٌ = a war *occurred*. Most sisters can occur complete: ﴿وَإِن كَانَ ذُو عُسْرَةٍ﴾ (a hardship-case EXISTS), ﴿حِينَ تُمْسُونَ وَحِينَ تُصْبِحُونَ﴾, ﴿مَا دَامَتِ السَّمَاوَاتُ وَالْأَرْضُ﴾ — always nāqiṣ: **ما زال، ما فتئ، ما برح، وليس**.',
            '**توسط الخبر** — the khabar may sit between the verb and its ism: ﴿كَانَ حَقًّا عَلَيْنَا نَصْرُ الْمُؤْمِنِينَ﴾.',
            '**تقديم معمول الخبر** — the khabar’s governed term may precede the verb: ﴿أَهَٰؤُلَاءِ إِيَّاكُمْ كَانُوا يَعْبُدُونَ﴾.',
          ] },

        { t: 'mcq', q: '﴿وَإِن كَانَ ذُو عُسْرَةٍ فَنَظِرَةٌ…﴾ — كان here?',
          choices: ['tāmmah — “if one in hardship exists”, no khabar needed', 'nāqiṣah with خبر dropped irregularly', 'a ẓann verb', 'passive'],
          correct: 0,
          why: 'ذو عسرة is simply its fāʿil. Complete kāna = وُجِدَ.' },

        { t: 'mcq', q: 'Which four can NEVER be used as complete verbs?',
          choices: ['ما زال، ما فتئ، ما برح، ليس', 'كان، صار، بات، ظلّ', 'أصبح، أضحى، أمسى، بات', 'ما دام، ليس، كان، صار'],
          correct: 0,
          why: 'قد تكون كان وأخواتها تامة إلا ما زال وما فتئ وما برح وليس.' },

        { t: 'bank', id: 'm1-bab-1--enumerate--enumerate-k-na-and-its-sisters-k-1j' },
        { t: 'bank', id: 'm1-bab-1--compare--distinguish-with-examples-betwee-19' },
        { t: 'bank', id: 'm1-bab-1--classify-tarkib--first-classify-the-category-of-t-1n' },
      ],
    },

    /* ═══ 7. Rajāʾ, muqāraba, shurūʿ ═══ */
    {
      id: 'raja',
      title: 'أفعال الرجاء والمقاربة والشروع',
      subtitle: 'عسى · كاد · طفق — and the rules of أنْ',
      matn: { src: 'DATA_M1_BAB1', from: 108, to: 131, check: 'الضَّرْبُ' },
      steps: [
        { t: 'teach', title: 'Hope — عَسَى',
          focus: [108, 109, 110, 111, 112],
          points: [
            '**عَسَى** ﴿عَسَى أَن يَنفَعَنَا﴾ carries the sense of **المقاربة** (nearness) — unlike لعلّ, which hopes without it.',
            'It denotes **الترجّي** in the desired ﴿عَسَى اللهُ أَن يَعْفُوَ عَنْهُمْ﴾, **الإشفاق** from the disliked ﴿فَهَلْ عَسَيْتُمْ … أَن تُفْسِدُوا﴾, or **التعليل** ﴿عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا﴾.',
            'When its subject is Allah, عسى conveys **اليقين** — the “hope” lies with the addressee.',
          ] },

        { t: 'teach', title: 'اخلولق · حرى — and the أنْ rule',
          focus: [113, 114, 115, 116, 117, 119],
          points: [
            '**اخْلَوْلَقَ** = صار خليقًا (became likely): اخْلَوْلَقَ الْمُسْلِمُونَ أَن يُحَافِظُوا عَلَى الصَّلَاةِ.',
            '**حَرَى** = صار حريًّا (became apt): حَرَى الْمُذْنِبُ أَن يَتُوبَ.',
            'أنْ in the khabar: **frequent** with عسى, **obligatory** with اخلولق and حرى. The hope verbs may also occur **تامّة**: ﴿عَسَىٰ أَن يَبْعَثَكَ رَبُّكَ…﴾.',
          ] },

        { t: 'teach', title: 'Proximity — أفعال المقاربة (three)',
          focus: [120, 121, 122, 123, 124],
          points: [
            '**كَادَ** ﴿وَكَادُوا يَقْتُلُونَنِي﴾, **كَرَبَ**, **أَوْشَكَ** — set for **قرب وقوع الخبر**.',
            'ʿasā vs kāda — both mean nearness, but **عسى على سبيل الرجاء** (hoped-for) while **كاد على سبيل الحصول** (actually about to happen).',
            'Affirmed كاد = the act did NOT occur but came close; negated كاد = it didn’t occur AND didn’t come close — stronger negation: ﴿يَتَجَرَّعُهُ وَلَا يَكَادُ يُسِيغُهُ﴾.',
          ] },

        { t: 'teach', title: 'كرب · أوشك — and conjugation',
          focus: [125, 126, 127, 129],
          points: [
            '**كَرَبَ**: كَرَبَ الْمُؤَذِّنُ يُقِيمُ; **أَوْشَكَ**: مَن زَرَعَ شَرًّا يُوشِكُ أَن يَحْصُدَ نَدَامَةً.',
            'أنْ: **frequent** in the khabar of أوشك, **rare** with كاد and كرب — أنْ points to futurity, and أوشك’s event is the more distant.',
            'Conjugation: hope + proximity verbs are **ناقصة التصرف ملازمة للماضي** — except **كاد** and **أوشك**, which have a muḍāriʿ: ﴿يَكَادُ الْبَرْقُ يَخْطَفُ أَبْصَارَهُمْ﴾.',
          ] },

        { t: 'teach', title: 'Beginning — أفعال الشروع',
          focus: [130, 131],
          points: [
            'Verbs coined to denote starting an action: **جَعَلَ، أَخَذَ، طَفِقَ، عَلِقَ، أَنْشَأَ**: ﴿وَطَفِقَا يَخْصِفَانِ عَلَيْهِمَا مِن وَرَقِ الْجَنَّةِ﴾.',
            'Their khabar is a muḍāriʿ clause, **never with أنْ** — beginning is incompatible with أنْ’s future sense.',
            'They are really **قياسية**, listed among the samāʿī nawāqiṣ only for their resemblance in operation.',
          ] },

        { t: 'mcq', q: 'عسى and كاد both denote proximity. The difference?',
          choices: ['عسى = by way of hope · كاد = by way of actual occurrence', 'عسى is negative, كاد positive', 'كاد takes أنْ obligatorily', 'no difference'],
          correct: 0,
          why: 'عسى على سبيل الرجاء، وكاد وأخواتها على سبيل الحصول — the book’s own comparison box.' },

        { t: 'mcq', q: '﴿وَلَا يَكَادُ يُسِيغُهُ﴾ — the negated كاد tells you…',
          choices: ['he neither swallowed it nor came close — emphatic negation', 'he nearly swallowed it', 'he swallowed it eventually', 'nothing about nearness'],
          correct: 0,
          why: 'المنفي: نفي الوقوع مع نفي مقاربة الوقوع فهو آكد في النفي. Affirmed كاد would mean close-but-didn’t.' },

        { t: 'mcq', q: 'Where is أنْ OBLIGATORY in the khabar?',
          choices: ['اخلولق and حرى', 'عسى', 'كاد and كرب', 'أفعال الشروع'],
          correct: 0,
          why: 'Frequent with عسى and أوشك; rare with كاد/كرب; obligatory only with اخلولق وحرى. Shurūʿ verbs refuse أنْ entirely.' },

        { t: 'mcq', q: 'Which pair has a usable muḍāriʿ?',
          choices: ['كاد and أوشك', 'عسى and حرى', 'كرب and اخلولق', 'none — all frozen in the māḍī'],
          correct: 0,
          why: 'ملازمة للماضي إلا كاد (يكاد) وأوشك (يوشك).' },

        { t: 'mcq', q: 'أَخَذَ الطَّالِبُ يَكْتُبُ — أخذ here is…',
          choices: ['a shurūʿ verb: “he began writing”', 'transitive “he took”', 'a heart-verb', 'a proximity verb'],
          correct: 0,
          why: 'Followed by a muḍāriʿ clause as khabar, أخذ joins جعل، طفق، علق، أنشأ in denoting the start of the action.' },

        { t: 'bank', id: 'm1-bab-1--compare--explain-with-examples-the-differ-17' },
      ],
    },

    /* ═══ 8. Praise & blame ═══ */
    {
      id: 'madh',
      title: 'أفعال المدح والذم',
      subtitle: 'نعم · بئس · حبذا and their rules',
      matn: { src: 'DATA_M1_BAB1', from: 133, to: 148, check: 'الْقِسْمُ' },
      steps: [
        { t: 'teach', title: 'The five verbs',
          focus: [133, 134, 135, 136, 137, 138, 139, 140],
          body: 'Coined to denote praise and blame; they **raise their fāʿil and their مخصوص** (the specified term being praised/blamed).',
          points: [
            'Praise: **نِعْمَ** ﴿وَلَنِعْمَ دَارُ الْمُتَّقِينَ﴾ and **حَبَّذَا** حَبَّذَا خَالِدٌ. Blame: **بِئْسَ**، **سَاءَ** ﴿بِئْسَ الشَّرَابُ وَسَاءَتْ مُرْتَفَقًا﴾، **لَا حَبَّذَا** لَا حَبَّذَا الْكِبْرُ.',
            'In نِعْمَ الرَّجُلُ زَيْدٌ: الرجل = the **فاعل** (the general kind), زيد = the **مخصوص** (the specific one meant).',
            'Appended to them: any verb on the pattern **فَعُلَ** — original ﴿وَحَسُنَتْ مُرْتَفَقًا﴾ or transferred: كَتُبَ زَيْدٌ (“what a writer!”). They are all **غير متصرفة** — only the تاء of femininity attaches.',
          ] },

        { t: 'teach', title: 'Rules of the fāʿil',
          focus: [141, 143, 144, 145],
          points: [
            'The fāʿil of نعم/بئس must be: **definite with لام الجنس** ﴿نِعْمَ الْعَبْدُ﴾, or **muḍāf to such** ﴿نِعْمَ أَجْرُ الْعَامِلِينَ﴾, or a **hidden pronoun explained by a tamyīz** ﴿وَسَاءَتْ مَصِيرًا﴾.',
            'مَا may follow نعم/بئس: ﴿فَنِعِمَّا هِيَ﴾. The makhṣūṣ may be dropped when context shows it: ﴿نِعْمَ الْمَوْلَىٰ وَنِعْمَ النَّصِيرُ﴾ — i.e. هو.',
            'Feminising: فاعل feminine → نِعْمَ or نِعْمَتِ المرأةُ فاطمةُ; makhṣūṣ feminine → نِعْمَتْ جَزَاءُ المتقين الجنةُ.',
          ] },

        { t: 'teach', title: 'حبّذا',
          focus: [147, 148],
          points: [
            'يا may enter it: يَا حَبَّذَا مُحَمَّدٌ مِنْ جَارِ.',
            'Its **ذا stays singular masculine** whatever follows: حَبَّذَا رِجَالًا الْأَنْصَارُ، وَحَبَّذَا بِنْتًا فَاطِمَةُ.',
            'A manṣūb before its makhṣūṣ is a **حال** if derived (حَبَّذَا رَاكِبًا زَيْدٌ) or a **تمييز** if rigid (حَبَّذَا رَجُلًا زَيْدٌ) — the tamyīz may even come via مِنْ: حَبَّذَا زَيْنَبُ مِنْ مُعَلِّمَةٍ.',
          ] },

        { t: 'mcq', q: 'What do the praise/blame verbs govern?',
          choices: ['they raise their fāʿil and their makhṣūṣ', 'they raise the fāʿil and naṣb the makhṣūṣ', 'they govern nothing', 'ism in rafʿ, khabar in naṣb'],
          correct: 0,
          why: 'ترفع فاعلها ومخصوصها: نِعْمَ الْعَبْدُ أَيُّوبُ — both الْعَبْدُ (fāʿil) and أيوب (makhṣūṣ) in rafʿ.' },

        { t: 'mcq', q: 'نِعْمَ رَجُلٌ زَيْدٌ — acceptable fāʿil?',
          choices: ['No — the fāʿil must carry generic أل, be muḍāf to it, or be a hidden pronoun + tamyīz', 'Yes — any noun works', 'Yes — if Zayd is famous', 'No — نعم takes no fāʿil'],
          correct: 0,
          why: 'Say نِعْمَ الرَّجُلُ زَيْدٌ, or use the pronoun pattern: نِعْمَ رَجُلًا زَيْدٌ (hidden pronoun explained by the tamyīz رجلًا).' },

        { t: 'mcq', q: '﴿وَسَاءَتْ مَصِيرًا﴾ — where is the fāʿil of ساءت?',
          choices: ['hidden pronoun, explained by the tamyīz مصيرًا', 'مصيرًا itself', 'dropped entirely', 'جهنم stated before'],
          correct: 0,
          why: 'Third fāʿil pattern: ضمير مستتر مفسَّر بتمييز محوّل عن الفاعل.' },

        { t: 'mcq', q: 'حَبَّذَا رِجَالًا الْأَنْصَارُ — why not حَبَّذُوا?',
          choices: ['the ذا of حبذا is locked singular & masculine', 'رجالًا is the fāʿil', 'it should be حبذوا', 'ḥabbadhā is a noun'],
          correct: 0,
          why: 'تلتزم ذا الإفرادَ والتذكيرَ — even with a feminine or plural makhṣūṣ: حَبَّذَا بِنْتًا فَاطِمَةُ.' },

        { t: 'mcq', q: '﴿فَنِعِمَّا هِيَ﴾ shows…',
          choices: ['مَا may attach after نعم/بئس', 'نعم becoming a noun', 'a spelling error', 'the makhṣūṣ dropped'],
          correct: 0,
          why: 'قد تقع كلمة ما بعد نعم وبئس — niʿma + mā fused as نِعِمَّا.' },

        { t: 'bank', id: 'm1-bab-1--enumerate--enumerate-the-verbs-of-praise-an-1l' },
        { t: 'bank', id: 'm1-bab-1--classify-tarkib--first-classify-the-category-of-t-1p' },
      ],
    },

    /* ═══ 9. Wonder ═══ */
    {
      id: 'taajjub',
      title: 'صيغ التعجب',
      subtitle: 'ما أفعله · أفعل به · فعُل — plus the heard forms',
      matn: { src: 'DATA_M1_BAB1', from: 149, to: 163, check: 'الْقِسْمُ' },
      steps: [
        { t: 'teach', title: 'Regular (قياسي) — three forms',
          focus: [149, 150, 151, 152, 153, 155, 157],
          points: [
            '**مَا أَفْعَلَهُ**: ﴿فَمَا أَصْبَرَهُمْ عَلَى النَّارِ﴾ — “how persevering they are!”',
            '**أَفْعِلْ بِهِ**: ﴿أَسْمِعْ بِهِمْ وَأَبْصِرْ﴾ — “how well they hear and see!”',
            '**فَعُلَ** — original or transferred: ﴿كَبُرَتْ كَلِمَةً تَخْرُجُ مِنْ أَفْوَاهِهِمْ﴾.',
          ] },

        { t: 'teach', title: 'Parsing the forms',
          focus: [154, 156],
          points: [
            'On **ما** in ما أفعله, two views: an interrogative, or an indefinite qualified noun (نكرة موصوفة) meaning شيء عظيم (“something great [made him so patient]!”).',
            '**أفعل به** is originally the māḍī أَفْعَلَ, recast as a command form; the بـ was added to the doer because predicating a command of an overt noun is ugly (قبيح).',
            'A wonder-form is built only from a **فعل ثلاثي مجرد**, with **no إعلال and no إدغام**: مَا أَطْوَلَهُ (not أطاله), مَا أَبْيَنَهُ.',
          ] },

        { t: 'teach', title: 'Heard (سماعي) forms',
          focus: [159, 160, 161, 162, 163],
          points: [
            '**سُبْحَانَ اللهِ** as wonder: ﴿قَالَ سُبْحَانَكَ مَا يَكُونُ لِي أَنْ أَقُولَ مَا لَيْسَ لِي بِحَقٍّ﴾.',
            '**الاستفهام**: ﴿كَيْفَ تَكْفُرُونَ بِاللهِ وَكُنتُمْ أَمْوَاتًا فَأَحْيَاكُمْ﴾.',
            '**النداء**: ﴿يَا بُشْرَىٰ هَٰذَا غُلَامٌ﴾.',
          ] },

        { t: 'mcq', q: 'صيغ التعجب are two kinds:',
          choices: ['قياسي (three set forms) and سماعي (heard expressions)', 'ماضٍ and مضارع', 'مدح and ذم', 'لازم and متعدٍّ'],
          correct: 0,
          why: 'Qiyāsī: ما أفعله، أفعل به، فعُل. Samāʿī: سبحان الله، the istifhām, the nidāʾ…' },

        { t: 'mcq', q: '﴿فَمَا أَصْبَرَهُمْ عَلَى النَّارِ﴾ — on the second view, ما means…',
          choices: ['شيء عظيم — “something great made them so persevering”', 'a negation', 'a relative pronoun', 'a conditional'],
          correct: 0,
          why: 'Either interrogative (“what made them…?”) or نكرة موصوفة بمعنى شيء عظيم.' },

        { t: 'mcq', q: 'Why the بـ in أَسْمِعْ بِهِمْ?',
          choices: ['the form is a recast māḍī; a command predicated of an overt noun is ugly, so بـ marks the doer', 'بهم is an object', 'the verb is passive', 'ب is an oath'],
          correct: 0,
          why: 'أصله أَفْعَلَ ماضيًا، غُيِّر إلى الأمر ثم زيدت الباء في الفاعل لأن إسناد الأمر إلى اسم ظاهر قبيح.' },

        { t: 'mcq', q: '﴿كَبُرَتْ كَلِمَةً﴾ uses which taʿajjub form?',
          choices: ['فعُل — the pattern faʿula, original or transferred', 'ما أفعله', 'أفعل به', 'a samāʿī expression'],
          correct: 0,
          why: 'كَبُرَ is on فَعُلَ: “how grave a word!” — same pattern family as the appendix to نعم/بئس.' },

        { t: 'bank', id: 'm1-bab-1--define-types-examples--what-are-the-forms-of-wonder-iya-1h' },
      ],
    },
  ],
});
