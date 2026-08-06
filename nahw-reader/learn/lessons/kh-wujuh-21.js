/* ── Daram Learn — al-Kubrā fī an-Naḥw · الخاتمة · وجوه الكلمات · القسم 21: إي → خلا وعدا (pp. 237–242) ──
   Backward-pass course (ch 21). Teach cards carry `page:` + an interactive matn panel
   (src: DATA_KH_W21 in ../books/kubra-nahw/khatima-wujuh-21.js, loaded in learn.html before this
   file). Notes source: books/kubra-nahw/notes/khatima_04_wujuh-al-kalimat.md. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'kh-wujuh-21',
  num: 23,
  titleAr: 'وُجُوهُ الْكَلِمَاتِ: إِي ← خَلَا وَعَدَا',
  titleEn: 'Faces of words — ī → khalā & ʿadā',
  pages: '237–242',
  sections: [

    /* ═══ 1. إي + أَي ═══ */
    {
      id: 'iy-ay',
      title: 'إِي · أَيْ',
      subtitle: 'حَرْفُ التَّصْدِيقِ قَبْلَ الْقَسَمِ · وَأَدَاتَا النِّدَاءِ وَالتَّفْسِيرِ',
      matn: { src: 'DATA_KH_W21', from: 1, to: 8, check: 'إِي' },
      steps: [
        { t: 'teach', title: 'ī — “yes”, but only before an oath', page: 237,
          focus: [2, 3, 4],
          body: 'إِي never occurs except immediately **before a قَسَم** (وَرَبِّي). Its three faces track what it answers:',
          points: [
            '**لِلتَّصْدِيق** — confirming a **report** (= أَجَل): «إِي وَرَبِّي» to «إِنَّ فِي الْعِلْمِ لَلَذَّة».',
            '**لِلإِعْلَام** — informing after a **question** (= نَعَم): ﴿قُلْ إِي وَرَبِّي…﴾.',
            '**لِلْوَعْد** — promising after a **request**: «إِي وَرَبِّي» to «أَطْلُبُ الْعِلْمَ».',
          ],
          after: 'What precedes (خَبَر / اسْتِفْهَام / طَلَب) fixes which face — the word إِي and its oath never change.' },

        { t: 'teach', title: 'ay (a particle) — two faces', page: 238,
          focus: [7, 8],
          points: [
            '**نِدَاء القَرِيب** (calling one near): «أَيْ بُنَيَّ».',
            '**لِلتَّفْسِير** (“that is / meaning”): «أَسْأَلُ اللَّهَ الْفِرْدَوْسَ أَيِ الْجَنَّةَ».',
          ],
          after: 'Do not confuse the particle أَيْ (call/explain) with the noun أَيّ (next section).' },

        { t: 'mcq', q: 'What is common to all three faces of إي?',
          choices: ['it occurs only immediately before a قَسَم (an oath)', 'it always answers a question', 'it is a noun', 'it negates'],
          correct: 0,
          why: 'إي is confined to the position before an oath («إي وربّي»); the report/question/request before it merely selects تصديق / إعلام / وعد.' },

        { t: 'mcq', q: 'In «أَسْأَلُ اللَّهَ الْفِرْدَوْسَ أَيِ الْجَنَّةَ», أيْ is …',
          choices: ['حرف تفسير — “that is, Paradise”', 'حرف نداء', 'اسم استفهام', 'a relative pronoun'],
          correct: 0,
          why: 'أيْ here glosses the preceding word (الفردوس = الجنّة) — the explanatory particle, distinct from the vocative أيْ («أي بنيّ»).' },

        { t: 'written',
          prompt: 'Give the three faces of إي (and its fixed condition) and the two faces of the particle أيْ.',
          model: 'إي: لا تقع إلا قبل القسم، ولها ثلاثة أوجه بحسب ما قبلها: (1) للتصديق بعد الخبر = أجَل «إي وربّي»; (2) للإعلام بعد الاستفهام = نعم ﴿قل إي وربّي﴾; (3) للوعد بعد الطلب «إي وربّي». أيْ (حرف): (1) نداء القريب «أي بنيّ»; (2) للتفسير «أسأل الله الفردوس أيِ الجنّة».' },
      ],
    },

    /* ═══ 2. أيّ — 5 faces ═══ */
    {
      id: 'ayy',
      title: 'أَيّ',
      subtitle: 'خَمْسَةُ أَوْجُهٍ — كُلُّهَا أَسْمَاء',
      matn: { src: 'DATA_KH_W21', from: 9, to: 15, check: 'أَيّ' },
      steps: [
        { t: 'teach', title: 'ayy — the most versatile noun', page: 238,
          focus: [10, 11, 12],
          body: 'أَيّ is always a noun; its first three faces mirror the “which?” family:',
          points: [
            '**لِلشَّرْط**: «أَيُّ عَالِمٍ يَتَكَبَّرْ يُبْغِضْهُ اللَّهُ» — jazms a pair.',
            '**لِلِاسْتِفْهَام**: ﴿أَيُّكُمْ يَأْتِينِي بِعَرْشِهَا﴾ (as an interrogative it suspends its عَامِل — تَعْلِيق).',
            '**لِلْمَوْصُول**: ﴿لَنَنْزِعَنَّ مِنْ كُلِّ شِيعَةٍ أَيُّهُمْ أَشَدُّ﴾ — mabnī on ḍamm when the head of its صِلَة is dropped.',
          ] },

        { t: 'teach', title: 'ayy — perfection & the vocative link', page: 239,
          focus: [14, 15],
          points: [
            '**لِلْكَمَال** (perfection / emphasis): «أَضَاعُونِي وَأَيَّ فَتًى أَضَاعُوا» — “and what a man they wasted!”.',
            '**وُصْلَة to calling a word with أَلْ**: ﴿يَا أَيُّهَا الْإِنْسَانُ﴾ — you cannot say «يَا الإِنْسَان», so أَيّ + هَا bridge يَا to the مُعَرَّف بِأَلْ.',
          ],
          after: 'The vocative أَيّ (يَا أَيُّهَا) is a bridge with no meaning of its own — the called noun follows it.' },

        { t: 'mcq', q: 'Why is أيّ needed in ﴿يَا أَيُّهَا الْإِنْسَانُ﴾?',
          choices: ['as a وُصلة — يا cannot directly call a word carrying أل, so أيّها bridges them', 'because أيّ is interrogative here', 'because أيّ is the منادى itself', 'because أيّ jazms the following verb'],
          correct: 0,
          why: 'The vocative يا does not enter المعرّف بأل directly; أيّ (+ ها التنبيه) links them — the وُصلة/link face, the الإنسان being the intended call.' },

        { t: 'mcq', q: '﴿أَيُّهُمْ أَشَدُّ﴾ (after مِنْ كُلِّ شِيعَةٍ) — أيّ is …',
          choices: ['موصولة, mabnī on ḍamm because the head of its صلة is dropped', 'شرطية', 'استفهامية', 'للكمال'],
          correct: 0,
          why: 'Here أيّ = الذي (relative), and it is built on ḍamm precisely because the ṣadr of its صلة (هو أشدّ) is elided — a signature of أيّ الموصولة.' },

        { t: 'written',
          prompt: 'Enumerate the five faces of أيّ with an example each, and explain the بناء of أيّ الموصولة on ḍamm.',
          model: 'أيّ خمسة أوجه (اسم): (1) شرطية «أيُّ عالمٍ يتكبّرْ يُبغضْه الله»; (2) استفهامية ﴿أيّكم يأتيني بعرشها﴾ (تعلّق عاملها); (3) موصولة ﴿أيّهم أشدّ﴾; (4) للكمال «وأيَّ فتًى أضاعوا»; (5) وُصلة لنداء المعرّف بأل ﴿يا أيّها الإنسان﴾. تُبنى أيّ الموصولة على الضمّ إذا حُذف صدر صلتها (أيّهم [هو] أشدّ)، وأُعربت فيما سوى ذلك.' },
      ],
    },

    /* ═══ 3. بَل ═══ */
    {
      id: 'bal',
      title: 'بَلْ',
      subtitle: 'حَرْفُ إِضْرَابٍ: عَاطِفَة أَوِ ابْتِدَائِيَّة',
      matn: { src: 'DATA_KH_W21', from: 16, to: 19, check: 'بَلْ' },
      steps: [
        { t: 'teach', title: 'bal — coordinate a word, or shift a sentence', page: 239,
          focus: [17, 18, 19],
          body: 'بَلْ is a particle of إِضْرَاب (turning aside). What follows it decides its face:',
          points: [
            '**عَاطِفَة** if before a **مُفْرَد**: «لَا تَطْلُبْ حَرَامًا بَلْ حَلَالًا» — it coordinates حَلَالًا onto the earlier noun.',
            '**ابْتِدَائِيَّة** if before a **جُمْلَة**, in one of two senses: **لِلإِبْطَال** (negates the prior, affirms the new) ﴿سُبْحَانَهُ بَلْ عِبَادٌ مُكْرَمُونَ﴾, or **لِلِانْتِقَال** (moves to a new topic without negating) ﴿بَلْ تُؤْثِرُونَ الْحَيَاةَ الدُّنْيَا﴾.',
          ],
          after: 'Compare أَم/بَلْ: إِضْرَاب بِـ بَلْ = إِبْطَال أَوِ انْتِقَال; the الانْتِقَالِيَّة بَلْ simply pivots the discourse.' },

        { t: 'mcq', q: '«لَا تَطْلُبْ حَرَامًا بَلْ حَلَالًا» — بل is …',
          choices: ['عاطفة — it comes before a مفرد (حلالًا), coordinating it', 'ابتدائية للإبطال', 'ابتدائية للانتقال', 'a redundant particle'],
          correct: 0,
          why: 'A single word (حلالًا) follows بل, so it is the coordinating بل; حلالًا takes the case of the preceding منصوب by عطف.' },

        { t: 'mcq', q: 'What distinguishes بل الإبطالية from بل الانتقالية?',
          choices: ['الإبطالية negates what precedes and affirms what follows; الانتقالية merely pivots to a new point without negation', 'الإبطالية precedes a مفرد, الانتقالية a جملة', 'they differ only in spelling', 'الانتقالية always precedes a منصوب'],
          correct: 0,
          why: 'Both are ابتدائية (before a جملة); the إبطالية cancels the earlier claim ﴿بل عباد مكرمون﴾, while the انتقالية changes subject without denying ﴿بل تؤثرون الحياة الدنيا﴾.' },

        { t: 'written',
          prompt: 'Give the two faces of بل and, for the ابتدائية, the two senses it can carry.',
          model: 'بل حرف إضراب على وجهين: (1) عاطفة إذا وقعت قبل مفرد «لا تطلب حرامًا بل حلالًا»; (2) ابتدائية إذا وقعت قبل جملة، وهي إمّا للإبطال (تنفي ما قبلها وتُثبت ما بعدها) ﴿سبحانه بل عباد مكرمون﴾، أو للانتقال (تنتقل إلى غرض جديد دون إبطال) ﴿بل تؤثرون الحياة الدنيا﴾.' },
      ],
    },

    /* ═══ 4. التاء — 7 faces ═══ */
    {
      id: 'ta',
      title: 'التَّاء',
      subtitle: 'سَبْعَةُ أَوْجُهٍ — حَرْفًا وَاسْمًا وَعَلَامَةً',
      matn: { src: 'DATA_KH_W21', from: 21, to: 28, check: 'التَّاءُ' },
      steps: [
        { t: 'teach', title: 'the tāʾ — seven jobs for one letter', page: 240,
          focus: [22, 23, 24, 25],
          body: 'The tāʾ ranges across particle, prefix, and marker. First four:',
          points: [
            '**حَرْف جَرّ لِلْقَسَم** (oath): ﴿تَاللَّهِ لَقَدْ آثَرَكَ اللَّهُ﴾. · **حَرْف مُضَارَعَة** (present prefix): «تُؤْمِنُ».',
            '**لِلنِّسْبَة** (relational, in some plurals): «الْحَنَابِلَة».',
            '**حَرْف خِطَاب** at the end of a noun: «أَنْتَ».',
          ] },

        { t: 'teach', title: 'the tāʾ — the last three', page: 240,
          focus: [26, 27, 28],
          points: [
            '**عَلَامَة تَأْنِيث**: **مَرْبُوطَة** on a noun «السَّاعَة», **مَفْتُوحَة** on a past verb «قَامَتْ».',
            '**ضَمِير بَارِز** at the end of a verb (the doer): «آمَنْتُ».',
            '**زَائِدَة**: on the جَارّة «رُبَّتَ», on the عَاطِفَة «ثُمَّتَ», on the ظَرْف «ثَمَّتَ».',
          ],
          after: 'Position tells much: prefix → مُضَارَعَة; suffix on a verb → doer-pronoun or feminizing; on a noun → address or tāʾ marbūṭah.' },

        { t: 'mcq', q: 'The تاء in «قَامَتْ» versus the تاء in «آمَنْتُ» are …',
          choices: ['a تاء التأنيث (a feminizing marker, no maḥall) vs a ضمير بارز (the doer, a full pronoun)', 'both doer-pronouns', 'both feminizing markers', 'both oath-particles'],
          correct: 0,
          why: 'قامتْ: the sākinah تاء feminizes the past verb — a mere marker. آمنتُ: the ḍammah-bearing تاء is the فاعل pronoun with a maḥall of rafʿ.' },

        { t: 'mcq', q: 'In ﴿تَاللَّهِ لَقَدْ آثَرَكَ اللَّهُ﴾, the تاء is …',
          choices: ['حرف جر للقسم — an oath particle, like the واو and الباء of القسم', 'حرف مضارعة', 'ضمير', 'علامة تأنيث'],
          correct: 0,
          why: 'تالله = an oath: the تاء is a preposition of القَسَم (rarer than وَ/بِ, and specific to the name اللّٰه).' },

        { t: 'mcq', q: 'Which is the تاء الزائدة?',
          choices: ['«رُبَّتَ / ثُمَّتَ / ثَمَّتَ» — appended to a جارّة, عاطفة, or ظرف', '«أَنْتَ»', '«تُؤْمِنُ»', '«الْحَنَابِلَة»'],
          correct: 0,
          why: 'The extra تاء on رُبّ/ثُمّ/ثَمّ adds nothing grammatically — الزائدة. The others are خطاب, مضارعة, and نسبة.' },

        { t: 'written',
          prompt: 'Enumerate the seven faces of the tāʾ, and contrast تاء التأنيث with تاء الفاعل.',
          model: 'التاء سبعة: (1) حرف جر للقسم ﴿تالله لقد آثرك الله﴾; (2) حرف مضارعة «تؤمن»; (3) للنسبة «الحنابلة»; (4) حرف خطاب «أنت»; (5) علامة تأنيث: مربوطة على الاسم «الساعة»، مفتوحة على الفعل الماضي «قامتْ»; (6) ضمير بارز في آخر الفعل «آمنتُ»; (7) زائدة «رُبّتَ، ثُمّتَ، ثَمّتَ». والفرق: تاء التأنيث ساكنة لا محلّ لها، وتاء الفاعل ضمير مرفوع المحلّ (متحرّكة بحسب المتكلّم/المخاطب).' },
      ],
    },

    /* ═══ 5. حتى + حاشا + خلا وعدا ═══ */
    {
      id: 'hatta-hasha-khala',
      title: 'حَتَّى · حَاشَا · خَلَا وَعَدَا',
      subtitle: 'الْجَرُّ وَالْعَطْفُ وَالِاسْتِثْنَاءُ',
      matn: { src: 'DATA_KH_W21', from: 30, to: 40, check: 'حَتَّى' },
      steps: [
        { t: 'teach', title: 'ḥattā — three faces', page: 241,
          focus: [31, 32, 33],
          points: [
            '**حَرْف جَرّ** — on a noun ﴿حَتَّى مَطْلَعِ الْفَجْرِ﴾, or a مُضَارِع with future sense ﴿حَتَّى تُنْفِقُوا﴾ (naṣb by أَنْ مُضْمَرَة).',
            '**حَرْف عَطْف** — «أَكَلْتُ السَّمَكَةَ حَتَّى رَأْسَهَا» (the last part, joined to the whole).',
            '**حَرْف اسْتِئْنَاف (ابْتِدَائِيَّة)** before a جُمْلَة: «…حَتَّى مَاءُ دِجْلَةَ أَشْكَلُ» — may carry the sense of غَايَة / سَبَب.',
          ],
          after: 'A noun in jarr after it → جَارّة; a whole جُمْلَة after it → ابْتِدَائِيَّة; a coordinated part → عَاطِفَة.' },

        { t: 'teach', title: 'ḥāshā · khalā & ʿadā — the exception cluster', page: 242,
          focus: [36, 37, 39, 40],
          points: [
            '**حَاشَا**: **اسْم مَصْدَر لِلتَّنْزِيه** ﴿حَاشَ لِلَّهِ مَا هَذَا بَشَرًا﴾ (alif may drop → حَاش; parsed as مَفْعُول مُطْلَق, conveying tanzīh + taʿajjub); or **حَرْف جَرّ** for exception «أَسَاءَ الْقَوْمُ حَاشَا زَيْدٍ».',
            '**خَلَا وَعَدَا**: **فِعْل مَاضٍ** naṣbing the mustathnā «مَا خَلَا اللَّهَ», or **حَرْف جَرّ** «خَلَا اللَّهِ». When preceded by **مَا** they must be verbs (naṣb).',
          ],
          after: 'The case of the excluded word tells you: naṣb → the verb face; jarr → the preposition face.' },

        { t: 'mcq', q: '«…حَتَّى مَاءُ دِجْلَةَ أَشْكَلُ» — حتى is …',
          choices: ['حرف استئناف (ابتدائية) — a full jumlah (ماءُ دجلة أشكلُ) follows it', 'حرف جر', 'حرف عطف', 'a redundant particle'],
          correct: 0,
          why: 'ماءُ is مرفوع مبتدأ, so a complete sentence follows حتى — the ابتدائية/resumptive face, not jarr (which would need a majrūr noun).' },

        { t: 'mcq', q: 'In «أَلَا كُلُّ شَيْءٍ مَا خَلَا اللَّهَ بَاطِلُ», خلا is …',
          choices: ['a فعل ماضٍ (naṣbing اللَّهَ) — forced to be a verb by the preceding ما', 'حرف جر', 'a redundant particle', 'a noun of exception'],
          correct: 0,
          why: 'ما المصدرية before خلا/عدا forces the verb reading, so اللَّهَ is منصوب as its مفعول به — «all but Allah is vain».' },

        { t: 'mcq', q: 'Which حاشا is the اسم مصدر للتنزيه?',
          choices: ['﴿حَاشَ لِلَّهِ مَا هَذَا بَشَرًا﴾ — exalting Allah, parsed as مفعول مطلق', '«أَسَاءَ الْقَوْمُ حَاشَا زَيْدٍ»', 'both', 'neither'],
          correct: 0,
          why: '﴿حاش لله﴾ exalts Allah (tanzīh + taʿajjub), a verbal-noun for an omitted verb. «حاشا زيدٍ» is instead the exception preposition (jarr).' },

        { t: 'written',
          prompt: 'Give the three faces of حتى and the two each of حاشا and خلا/عدا, with the case-cue that fixes the exception faces.',
          model: 'حتى ثلاثة: (1) حرف جر ﴿حتى مطلع الفجر﴾، ﴿حتى تنفقوا﴾; (2) حرف عطف «أكلت السمكة حتى رأسها»; (3) حرف استئناف قبل الجملة «حتى ماءُ دجلة أشكلُ». حاشا: (1) اسم مصدر للتنزيه ﴿حاش لله ما هذا بشرًا﴾ (مفعول مطلق)، (2) حرف جر للاستثناء «حاشا زيدٍ». خلا وعدا: (1) فعل ماضٍ ينصب المستثنى «ما خلا اللهَ»، (2) حرف جر يجرّه «خلا اللهِ»، وإذا سبقتهما ما تعيّنت فعليّتهما فنصبتا. القاعدة: نصب المستثنى → الفعل، جرّه → الحرف.' },
      ],
    },
  ],
});
