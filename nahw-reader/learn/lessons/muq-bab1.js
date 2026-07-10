/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقدمة · الباب الأول في الكلمة (pp. 6–10) ──
   Lesson content authored from the reader transcription (books/kubra-nahw/muqaddimah.js).
   Bank questions referenced by id from ../questions-bank.js (chapterId muq-bab-1).      */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'muq-bab-1',
  titleAr: 'الْبَابُ الْأَوَّلُ فِي الْكَلِمَةِ',
  titleEn: 'The Word (al-kalimah)',
  pages: '6–10',
  sections: [

    /* ═══ 1. From sound to word ═══ */
    {
      id: 'ladder',
      title: 'From sound to word',
      subtitle: 'اللفظ · القول · المفرد · المركب',
      matn: { src: 'DATA', from: 2, to: 6, check: 'الْبَابُ' },
      steps: [
        { t: 'teach', title: 'What is a كَلِمَة?',
          focus: [2, 3],
          body: 'All of naḥw is built on this tiny definition. To unpack it you need three terms the book defines first: **لَفْظ**, **قَوْل**, and **مُفْرَد**.\n\nHover (or tap) any word above for its gloss.' },

        { t: 'teach', title: 'The ladder of terms',
          focus: [4, 5, 6],
          points: [
            '**اللَّفْظ** — every sound out of a human mouth. Meaningless = **مُهْمَل** (babble); coined for a meaning = **مَوْضُوع**.',
            '**القَوْل** — a لفظ that denotes a meaning.',
            '**المُفْرَد** — that whose parts do not denote a meaning; **المُرَكَّب** — that whose parts do.',
          ],
          examples: [
            { ar: 'دز', en: 'a meaningless sound', note: 'لفظ مهمل, not قول' },
            { ar: 'كِتَابُ الْوَلَدِ', en: 'the book of the child — each part means something', note: 'قول مركّب' },
          ],
          after: 'So a كلمة = a meaningful utterance whose parts, taken alone, mean nothing — a قول مفرد.' },

        { t: 'mcq', q: 'Which is the matn’s definition of the كلمة?',
          choices: ['قَوْلٌ مُفْرَدٌ', 'قَوْلٌ مُفِيدٌ', 'لَفْظٌ مُرَكَّبٌ', 'مَا دَلَّ عَلَى مَعْنًى فِي نَفْسِهِ'],
          correct: 0,
          why: 'قول مفيد is the definition of **الكلام** (Bāb 2), and «ما دلّ على معنى في نفسه…» opens the definition of the **اسم**. The كلمة is precisely قول مفرد.' },

        { t: 'mcq', q: 'A cough, or a random noise like «دز» — what is it?',
          choices: ['لفظ only — sound with no meaning', 'قول only', 'Both لفظ and قول', 'Neither'],
          correct: 0,
          why: 'Everything out of the mouth is لفظ. It only becomes قول once it denotes a meaning.' },

        { t: 'mcq', q: 'Why does رَجُلٌ count as مفرد?',
          choices: ['Its parts — ر, ج, ل — do not individually denote a meaning', 'It refers to only one man', 'It carries tanwīn', 'It is short'],
          correct: 0,
          why: 'مفرد here = non-compound: the parts don’t carry meaning. Careful — مفرد is *sometimes* also used for “singular vs dual/plural”, a different sense (note ١ in the book).' },

        { t: 'mcq', q: 'كِتَابُ الْوَلَدِ is مركّب because…',
          choices: ['each of its parts denotes a meaning on its own', 'it contains two nouns', 'it is definite', 'it is a complete sentence'],
          correct: 0,
          why: 'كتاب denotes a meaning and الولد denotes a meaning — parts that mean something = مركّب. (Two nouns alone isn’t the test, and it is not a complete sentence.)' },

        { t: 'teach', title: 'Compounds that still count as single',
          points: [
            '**تركيب المزج** (mixture-compound): the parts no longer denote their meanings, so it counts as مفرد — e.g. بَعْلَبَكّ.',
            'Number-compounds are two kinds: **أَحَدَ عَشَرَ → تِسْعَةَ عَشَرَ** = تركيب مزج; **أَحَدٌ وَعِشْرُونَ** and its sisters = تركيب عطف (conjunction-compound).',
          ] },

        { t: 'mcq', q: 'How is بَعْلَبَكّ classified?',
          choices: ['مفرد — a mixture-compound whose parts lost their meaning', 'مركّب — it has two parts', 'قول مفيد', 'Not a قول at all'],
          correct: 0,
          why: 'In تركيب المزج the parts (بعل + بكّ) no longer denote meanings, so the whole behaves as one single word.' },

        { t: 'mcq', q: 'أَحَدَ عَشَرَ (11) and أَحَدٌ وَعِشْرُونَ (21) are, respectively…',
          choices: ['تركيب مزج and تركيب عطف', 'both تركيب مزج', 'both تركيب عطف', 'تركيب عطف and تركيب مزج'],
          correct: 0,
          why: '11–19 are mixture-compounds; 21 onwards join with و so they are conjunction-compounds.' },

        { t: 'written',
          prompt: 'Define the كلمة, and explain the ladder beneath it (لفظ → قول → مفرد). Give one example of a قول that is NOT a كلمة, and say why.',
          model: 'The كلمة is قول مفرد — a single meaningful utterance.\n• لفظ: any sound from the mouth, meaningful or not.\n• قول: a لفظ that denotes a meaning.\n• مفرد: that whose parts do not denote a meaning (vs مركّب, whose parts do).\nExample of a قول that is not a كلمة: كِتَابُ الْوَلَدِ — it denotes a meaning (so it is قول) but its parts each denote meanings too, so it is مركّب, not مفرد.' },
      ],
    },

    /* ═══ 2. The noun: definition & signs ═══ */
    {
      id: 'ism',
      title: 'الاسم — definition & six signs',
      subtitle: 'The noun and how to recognise it',
      matn: { src: 'DATA', from: 8, to: 12, check: 'الْقِسْمُ' },
      steps: [
        { t: 'teach', title: 'Definition of the اسم',
          focus: [8, 9],
          body: 'The definition has two working parts — two fences:',
          points: [
            '**فِي نَفْسِهِ** — its meaning is complete in itself → fences out the **حرف** (whose meaning is فِي غَيْرِهِ).',
            '**غَيْرِ مُقْتَرِنٍ بِزَمَانٍ** — no built-in tense → fences out the **فعل**.',
          ],
          examples: [
            { ar: 'رَجُلٌ', en: 'a man' },
            { ar: 'عِلْمٌ', en: 'knowledge' },
          ] },

        { t: 'mcq', q: 'Which phrase of the definition excludes the VERB?',
          choices: ['غَيْرِ مُقْتَرِنٍ بِزَمَانٍ', 'فِي نَفْسِهِ', 'مَا دَلَّ عَلَى مَعْنًى', 'قَوْلٌ مُفْرَدٌ'],
          correct: 0,
          why: 'The verb’s meaning IS coupled with time (past/present/command), so “not coupled with time” fences it out.' },

        { t: 'mcq', q: 'And which phrase excludes the ḤARF?',
          choices: ['فِي نَفْسِهِ', 'غَيْرِ مُقْتَرِنٍ بِزَمَانٍ', 'مَا دَلَّ', 'none — the ḥarf is included'],
          correct: 0,
          why: 'The ḥarf denotes a meaning **في غيره** — only through another word. “In itself” excludes it.' },

        { t: 'teach', title: 'Six signs of the noun',
          focus: [10],
          body: 'A word showing ANY of these must be an اسم — the matn gives one Qurʾānic witness per sign:',
          points: [
            '**الجَرّ/الخَفْض** — being مَجْرُور (بِسْمِ اللهِ); and **التَّنْوِين** (هُدًى لِلْمُتَّقِينَ). Only nouns do either.',
            '**أل** of definiteness (الرَّحْمٰنِ); and **النِّدَاء** — being genuinely called, a مُنادى (يَٰنُوحُ).',
            '**الإسْنَاد إليه** — being predicated about, as مبتدأ or فاعل (إِنَّ إِبْرَاهِيمَ لَحَلِيمٌ); and **الإضافة** — being مُضاف (رَبِّ الْعَالَمِينَ).',
          ],
          after: 'The sign is the **state** — actually being in jarr — not merely a particle standing in front of the word.' },

        { t: 'mcq', q: 'Which sign of the noun appears in ﴿هُدًى لِلْمُتَّقِينَ﴾ on the word هُدًى?',
          choices: ['التنوين', 'أل التعريف', 'النداء', 'الإضافة'],
          correct: 0,
          why: 'هُدًى ends in tanwīn — and tanwīn attaches only to nouns.' },

        { t: 'mcq', q: 'The matn cites ﴿رَبِّ الْعَالَمِينَ﴾ as an example of which sign?',
          choices: ['being مُضاف', 'being منادى', 'tanwīn', 'أل'],
          correct: 0,
          why: 'رَبِّ is the first term of an iḍāfah (رب + العالمين) — being مضاف is a sign of nounhood.' },

        { t: 'teach', title: 'Two traps around the signs',
          focus: [11, 12],
          points: [
            '**Jarr never touches verbs or particles** — الْفِعْلُ وَالْحَرْفُ لَا يَكُونَانِ مَجْرُورَيْنِ even if a jārr enters upon them; what is actually مجرور is the understood **اسم مؤوّل**.',
            '**يا is not always vocative** — أحرف النداء may enter on other than the مُنادى: in يَٰلَيْتَ قَوْمِي يَعْلَمُونَ the يا is for تنبيه (alerting), or the منادى is omitted.',
          ] },

        { t: 'mcq', q: 'In ﴿لِيَكُونَ لِلْعَالَمِينَ نَذِيرًا﴾ a jārr (لِـ) sits before the verb يَكُونَ. Does that make the verb مجرور — hence an ism?',
          choices: ['No — verbs and particles never become مجرور even if a jārr enters upon them', 'Yes — anything after a jārr is مجرور', 'Yes, but only for كان', 'No — because لِـ here is not a preposition'],
          correct: 0,
          why: 'The book is explicit: الفعل والحرف لا يكونان مجرورين وإن دخل عليهما جارّ. What is actually مجرور is the interpreted noun (اسم مؤوّل) understood from أن + the verb.' },

        { t: 'mcq', q: '﴿يَٰلَيْتَ قَوْمِي يَعْلَمُونَ﴾ — يا has entered on لَيْتَ. Does that prove ليت is a noun (منادى)?',
          choices: ['No — vocative particles sometimes enter on other than the منادى', 'Yes — whatever follows يا is a منادى', 'Yes — ليت is a noun anyway', 'No — يا is a preposition here'],
          correct: 0,
          why: 'قد تدخل أحرف النداء على غير المنادى. Here يا is a particle of alerting (تنبيه), or the منادى is omitted: يا هؤلاء، ليتني…' },

        { t: 'bank', id: 'muq-bab-1--enumerate--enumerate-the-six-signs-by-which-u' },
        { t: 'bank', id: 'muq-bab-1--explain-line--explain-the-following-matn-line--a' },
        { t: 'bank', id: 'muq-bab-1--explain-statement--explain-the-following-statement--m' },
      ],
    },

    /* ═══ 3. Kinds of noun ═══ */
    {
      id: 'ism-kinds',
      title: 'Kinds of noun',
      subtitle: 'صريح/مؤوّل · موصوف (عين/معنى) · صفة',
      matn: { src: 'DATA', from: 17, to: 36, check: 'أَضْرُبُ' },
      steps: [
        { t: 'teach', title: 'By simple vs compounded: صريح & مؤوّل',
          focus: [17, 18, 19, 20, 21, 22],
          points: [
            '**الاسم الصريح** — the explicit noun, on its own: الصَّوْمُ.',
            '**الاسم المؤوّل** — a **حرف مصدري** + the clause after it, interpreted as one noun (the **مصدر مؤوّل**) standing **في محلّ اسم**.',
            'The tool words (**الأحرف المصدرية**): أَنْ، أَنَّ، مَا، كَيْ، لَوْ — mentally swap in the مصدر and ask which noun-slot it fills.',
          ],
          after: 'Explicit and interpreted do the same syntactic job: الصَّوْمُ خَيْرٌ ≈ أَنْ تَصُومُوا خَيْرٌ.',
          examples: [
            { ar: 'الصَّوْمُ', en: 'fasting', note: 'صريح' },
            { ar: 'وَأَنْ تَصُومُوا خَيْرٌ لَكُمْ', en: '“that you fast” ≈ صومُكم — one interpreted noun', note: 'مؤوّل' },
          ] },

        { t: 'mcq', q: 'In ﴿وَأَنْ تَصُومُوا خَيْرٌ لَكُمْ﴾, what is the mubtadaʾ?',
          choices: ['أَنْ تَصُومُوا — an interpreted noun ≈ صومُكم', 'تَصُومُوا alone', 'خَيْرٌ', 'لَكُمْ'],
          correct: 0,
          why: 'أنْ + the clause = اسم مؤوّل, standing as one noun (“your fasting”), which is the mubtadaʾ of خَيْرٌ.' },

        { t: 'teach', title: 'By meaning: موصوف & صفة',
          focus: [29, 30, 31, 32, 33, 34, 35, 36],
          points: [
            '**الموصوف** — also called **اسم الذات** — denotes an entity that can bear an attribute (ذات تحتمل الصفة). Test: can you describe it?',
            'Its two kinds: **اسم عين** — subsists by itself (ما يقوم بذاته); and **اسم معنى** — subsists through another (يقوم بغيره).',
            '**الصفة** (**اسم الصفة**) — denotes a quality of something described (وصف موصوف): صَالِحٌ.',
          ],
          examples: [
            { ar: 'رَجُلٌ', en: 'a man — self-subsisting entity', note: 'اسم عين' },
            { ar: 'عِلْمٌ', en: 'knowledge — subsists in a knower', note: 'اسم معنى' },
          ],
          after: 'A صفة names the one in whom the meaning subsists: عَالِمٌ = one who has العِلْم — the book’s table pairs رَجُلٌ · عِلْمٌ · عَالِمٌ.' },

        { t: 'mcq', q: 'عِلْمٌ is…',
          choices: ['اسم معنى — it subsists through another', 'اسم عين — it subsists by itself', 'صفة', 'اسم مؤوّل'],
          correct: 0,
          why: 'Knowledge cannot stand alone in the world; it exists only in a knower — so it is a موصوف of the اسم معنى kind.' },

        { t: 'mcq', q: 'Which of these is a صفة?',
          choices: ['صَالِحٌ', 'رَجُلٌ', 'عِلْمٌ', 'الصَّوْمُ'],
          correct: 0,
          why: 'صالح denotes a quality (وصف) of something described. The others denote entities (موصوف) — concrete or abstract.' },

        { t: 'mcq', q: 'Why is عِلْم NOT an اسم عين?',
          choices: ['Because it does not subsist by itself — it needs a bearer', 'Because it is indefinite', 'Because it is abstract in English', 'Because it takes tanwīn'],
          correct: 0,
          why: 'The test is قيام بالذات: does it stand on its own? A man does; knowledge only exists قائمًا بغيره — in a knower.' },

        { t: 'bank', id: 'muq-bab-1--compare--explain-with-examples-the-differ-g' },
        { t: 'bank', id: 'muq-bab-1--define-types-examples--what-is-the-noun-considered-with-o' },
        { t: 'bank', id: 'muq-bab-1--define-types-examples--what-is-the-substantive-consider-q' },
        { t: 'bank', id: 'muq-bab-1--classify-tarkib--classify-the-category-ism-fi-l-a-w' },
      ],
    },

    /* ═══ 4. The verb ═══ */
    {
      id: 'fil',
      title: 'الفعل — definition & signs',
      subtitle: 'The verb, its three meanings, and its signs',
      matn: { src: 'DATA', from: 37, to: 43, check: 'الْقِسْمُ' },
      steps: [
        { t: 'teach', title: 'Definition of the فعل',
          focus: [37, 38],
          body: 'Same skeleton as the noun — but the meaning is **coupled with time** (مقترن بزمان). The matn’s one root shows all three tenses: عَبَدَ (ماضٍ) · يَعْبُدُ (مضارع) · اعْبُدْ (أمر).' },

        { t: 'teach', title: 'The verb packs three meanings',
          body: 'From the book’s note: every verb comprises **three** meanings. جَلَسَ denotes:',
          points: [
            '**الحَدَث** — the event, the maṣdar-meaning (sitting).',
            '**الزَّمَان** — its time (in the past).',
            '**النِّسْبَة إلى الفَاعِل** — it is always linked to a doer.',
          ] },

        { t: 'mcq', q: 'The verb differs from the noun by…',
          choices: ['its meaning being coupled with time', 'denoting a meaning in itself', 'accepting tanwīn', 'having a doer'],
          correct: 0,
          why: 'Both noun and verb denote a meaning في نفسه. Only the verb’s meaning is مقترن بزمان.' },

        { t: 'mcq', q: 'Which three meanings does جَلَسَ carry?',
          choices: ['event + time + doer', 'event + place + doer', 'meaning + tense + object', 'root + pattern + tanwīn'],
          correct: 0,
          why: 'الحدث (sitting), الزمان (past), الفاعل (a doer). The root/pattern split (مادة/هيئة) is a separate فائدة: the مادة gives the event, the هيئة gives the tense.' },

        { t: 'teach', title: 'Signs of the verb — general & الماضي',
          focus: [43],
          points: [
            '**General (العامّة)**: conjugation (تصريف) into ماضٍ/مضارع/أمر/نهي.',
            '**General**: attaching overt nominative pronouns (الضمائر البارزة المرفوعة): آمَنْتُ، آمِنُوا.',
            '**Special to الماضي**: quiescent تاء التأنيث — آمَنَتْ.',
          ] },

        { t: 'teach', title: 'Signs of المضارع, قد & الأمر',
          focus: [43],
          points: [
            '**Special to المضارع**: لَمْ، لَنْ، السِّين، سَوْفَ، the مضارعة prefixes (نَأْتِي = ن أ ت ي), and نُونَا التَّوْكِيد.',
            '**Māḍī + muḍāriʿ**: قَدْ — لَقَدْ سَمِعَ اللهُ / قَدْ يَعْلَمُ اللهُ.',
            '**Special to الأمر**: denotes a command AND accepts ياء المخاطبة — وَادْخُلِي جَنَّتِي.',
          ] },

        { t: 'mcq', q: 'آمَنَتْ — which sign is at work, and what does it prove?',
          choices: ['quiescent تاء التأنيث → a ماضٍ verb', 'tanwīn → a noun', 'ياء المخاطبة → an أمر verb', 'the sīn → a مضارع verb'],
          correct: 0,
          why: 'The vowelless تْ of feminisation attaches only to the past verb.' },

        { t: 'mcq', q: 'Which of these signs is special to the مضارع alone?',
          choices: ['لَمْ', 'قَدْ', 'تاء التأنيث الساكنة', 'ياء المخاطبة'],
          correct: 0,
          why: 'قد enters on māḍī AND muḍāriʿ; the tāʾ marks the māḍī; yāʾ al-mukhāṭabah marks the amr. Only لم (with لن، س، سوف…) is muḍāriʿ-only.' },

        { t: 'mcq', q: 'The mnemonic نَأْتِي stands for…',
          choices: ['the four مضارعة prefixes: ن أ ت ي', 'the four sisters of إنّ', 'the negation particles', 'the letters of the root'],
          correct: 0,
          why: 'A مضارع verb always opens with one of نأتي: نَكْتُبُ، أَكْتُبُ، تَكْتُبُ، يَكْتُبُ — e.g. ﴿وَاللهُ يُحْيِي وَيُمِيتُ﴾.' },

        { t: 'mcq', q: 'What is the sign of the أمر (command) verb?',
          choices: ['It denotes a request AND accepts ياء المخاطبة', 'It begins with a مضارعة letter', 'It accepts قد', 'It ends in sukūn'],
          correct: 0,
          why: 'Both halves needed: دلالته على الطلب مع قبوله ياء المخاطبة — like ﴿وَادْخُلِي جَنَّتِي﴾. (Denoting a request alone isn’t enough — a noun like صَهْ requests too but refuses the yāʾ.)' },

        { t: 'mcq', q: 'سَيَرْحَمُهُمُ اللهُ — the sīn on يَرْحَمُ shows it is…',
          choices: ['a مضارع verb', 'a ماضٍ verb', 'an أمر verb', 'a noun'],
          correct: 0,
          why: 'The prefixed س (and سوف) enter only on the present-tense verb.' },

        { t: 'bank', id: 'muq-bab-1--enumerate--enumerate-the-signs-al-m-t-of-th-s' },
        { t: 'bank', id: 'muq-bab-1--explain-statement--explain-the-following-statement--k' },
        { t: 'bank', id: 'muq-bab-1--classify-tarkib--classify-the-category-ism-fi-l-a-y' },
      ],
    },

    /* ═══ 5. The particle ═══ */
    {
      id: 'harf',
      title: 'الحرف — definition, sign & senses',
      subtitle: 'The particle, plus madd vs līn',
      matn: { src: 'DATA', from: 44, to: 51, check: 'الْقِسْمُ' },
      steps: [
        { t: 'teach', title: 'Definition of the حرف',
          focus: [44, 45, 49],
          body: 'فِي alone tells you nothing settled; join it to a word — فِي الْبَيْتِ — and its meaning lands. The ḥarf needs a **متعلَّق**.',
          points: [
            '**Its sign is an absence**: nothing of the noun’s signs, nothing of the verb’s signs is found in it — like هَلْ and بَلْ.',
          ] },

        { t: 'mcq', q: 'How is the حرف recognised?',
          choices: ['By the absence of any sign of the noun or the verb', 'By taking أل', 'By accepting قد', 'By being مجرور'],
          correct: 0,
          why: 'The particle has no positive sign — يُعرف بألّا يوجد فيه شيء من علامات الاسم والفعل, e.g. هل، بل.' },

        { t: 'mcq', q: 'Why does فِي denote meaning only «في غيره»?',
          choices: ['Its sense appears only when joined to another word — في البيت', 'It has too many meanings', 'It is too short to mean anything', 'It denotes a time'],
          correct: 0,
          why: 'Alone, “in” is suspended. Attached — في البيت — the containment-meaning is realised. Nouns and verbs mean something في نفسه; the ḥarf never does.' },

        { t: 'teach', title: 'Senses of the word «حرف»',
          focus: [50, 51],
          points: [
            '**حروف المباني** — the building/spelling letters (حروف التهجّي), i.e. the alphabet: فاء، عين، لام.',
            '**حروف المعاني** — the meaning-particles of naḥw: فِي، إِنَّ، بَلْ، لَا — this is the ḥarf of grammar.',
            'A phonetic sense: **حرف المدّ** — a weak letter, sākin, preceded by its matching vowel (the wāw of وَكُونُوا); **حرف اللين** — wāw or yāʾ, sākin, preceded by a **fatḥa** (the yāʾ of الخَيْر).',
          ] },

        { t: 'mcq', q: 'The letters ف، ع، ل recited as alphabet letters are…',
          choices: ['حروف المباني', 'حروف المعاني', 'أسماء', 'أفعال'],
          correct: 0,
          why: 'They are letters of spelling (التهجّي) — building blocks, not meaning-particles like في and إنّ.' },

        { t: 'mcq', q: 'The wāw in كُونُوا and the yāʾ in الخَيْرِ are, respectively…',
          choices: ['حرف مدّ and حرف لين', 'both حرف مدّ', 'حرف لين and حرف مدّ', 'both حرف لين'],
          correct: 0,
          why: 'كُونُوا: wāw sākinah after a ḍamma that matches it → مدّ. الخَيْر: yāʾ sākinah after a **fatḥa** (not its matching vowel) → لين.' },

        { t: 'bank', id: 'muq-bab-1--explain-line--explain-the-following-matn-line--c' },
        { t: 'bank', id: 'muq-bab-1--compare--explain-with-examples-the-differ-i' },
        { t: 'bank', id: 'muq-bab-1--state-types--state-the-three-divisions-of-the-e' },
      ],
    },
  ],
});
