/* ── Daram Learn — Shadhā al-ʿArf · التقسيمان الأول والثاني للفعل (Worksheets 3–4) ──
   Lesson content authored from the reader transcription
   (books/shadha-arf/wk03-fil1.js, wk04-fil2.js).                                  */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'sarf-fil-1-2',
  titleAr: 'التَّقْسِيمَانِ الْأَوَّلُ وَالثَّانِي لِلْفِعْلِ',
  titleEn: 'The Verb I: Tense & Soundness',
  pages: 'Wk 3–4',
  sections: [

    /* ═══ 1. The past ═══ */
    {
      id: 'madi',
      title: 'The past (الماضي)',
      subtitle: 'حدوث شيء قبل زمن التكلم — غالبًا',
      matn: { src: 'DATA_WK03', from: 3, to: 7, check: 'مَاضٍ' },
      steps: [
        { t: 'teach', title: 'Definition — and why «غالبًا»',
          focus: [3, 4, 5],
          points: [
            '**الماضي**: denotes the occurrence of a thing **before** the time of speaking — **غالبًا** (usually).',
            '«usually» because of **أفعال العقود**: performatives like بِعْتُكَ، زَوَّجْتُكَ — past in form, *present* in effect.',
            'And past form can carry **future** meaning: إِنْ زُرْتَنِي أُكْرِمْكَ؛ ﴿إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ﴾ — the giving is certain, so worded as past.',
          ] },

        { t: 'teach', title: 'Sign of the past',
          focus: [7],
          points: [
            'Accepts **تاء الفاعل**: قَرَأْتُ.',
            'Accepts **تاء التأنيث الساكنة**: قَرَأَتْ هِنْدُ.',
          ],
          after: 'Both tāʾs attach only to the past — that is the test.' },

        { t: 'mcq', q: 'Why does the definition of the māḍī say غَالِبًا («usually»)?',
          choices: ['Some past-form verbs carry present or future meaning (contracts; إِنْ زُرْتَنِي)', 'Because some past verbs are frozen', 'Because the past sometimes takes the future sīn', 'It is a scribal addition'],
          correct: 0,
          why: 'بِعْتُكَ enacts a sale *now*; ﴿إِنَّا أَعْطَيْنَاكَ﴾ and conditional pasts point ahead. Form ≠ meaning always.' },

        { t: 'mcq', q: 'بِعْتُكَ («I hereby sell to you») is classified as…',
          choices: ['A verb of contract — past form, present meaning', 'A pure past verb', 'An ism fiʿl', 'A present verb'],
          correct: 0,
          why: 'أفعال العقود are performative: uttering them *is* the act, so the meaning is at the moment of speech.' },

        { t: 'mcq', q: 'Which pair marks a verb as māḍī?',
          choices: ['تاء الفاعل and تاء التأنيث الساكنة', 'قد and the sīn', 'نون التوكيد and ياء المخاطبة', 'lam and lan'],
          correct: 0,
          why: 'قَرَأْتُ and قَرَأَتْ. The nūn/yāʾ pair signs the **amr**; qad/sīn mark verbs generally or the muḍāriʿ.' },
      ],
    },

    /* ═══ 2. The present ═══ */
    {
      id: 'mudari',
      title: 'The present (المضارع)',
      subtitle: 'صالح للحال والاستقبال — وما يعيّنه لأحدهما',
      matn: { src: 'DATA_WK03', from: 8, to: 23, check: 'مُضَارِعٌ' },
      steps: [
        { t: 'teach', title: 'Definition',
          focus: [8, 9, 10],
          points: [
            '**المضارع**: occurrence **at** the time of speaking **or after it** — usually — or for **continuity** (الاستمرار).',
            'So يَقْرَأُ is ambiguous: suitable for the present *and* the future — until something pins it down.',
            'Excluded: لَمْ يَلِدْ — the form is muḍāriʿ but **لم** flips the meaning to past.',
          ] },

        { t: 'teach', title: 'Pinned to the PRESENT',
          focus: [11, 12, 13, 14, 15],
          points: [
            '**لام الابتداء**: ﴿إِنِّي لَيَحْزُنُنِي﴾ — grieving *now*. But not every lām: ﴿لَيَحْكُمُ بَيْنَهُمْ يَوْمَ الْقِيَامَةِ﴾ is future.',
            '**لا النافية**: ﴿لَا يُحِبُّ اللَّهُ الْجَهْرَ بِالسُّوءِ﴾.',
            '**ما النافية**: ﴿وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا﴾.',
          ] },

        { t: 'teach', title: 'Pinned to the FUTURE — and the sign',
          focus: [16, 17, 18, 19, 20, 21, 22, 23],
          points: [
            'Five fixers: **السين** ﴿سَيَقُولُ السُّفَهَاءُ﴾ · **سوف** ﴿وَلَسَوْفَ يُعْطِيكَ﴾ · **لن** ﴿لَنْ تَنَالُوا﴾ · **أن** ﴿وَأَنْ تَصُومُوا﴾ · **إن** الشرطية ﴿إِنْ يَنْصُرْكُمُ اللَّهُ﴾.',
            '**Sign** of the muḍāriʿ: valid after **لم** — لَمْ يَلِدْ.',
            'It must begin with a letter of **أَنَيْتُ** (أ ن ي ت) — أحرف المضارعة.',
          ],
          after: 'أَكْتُبُ · نَكْتُبُ · يَكْتُبُ · تَكْتُبُ — the four prefixes in one word: anaytu.' },

        { t: 'mcq', q: 'What does لام الابتداء do to a muḍāriʿ?',
          choices: ['Fixes it to the present', 'Fixes it to the future', 'Negates it', 'Turns its meaning past'],
          correct: 0,
          why: '﴿إِنِّي لَيَحْزُنُنِي﴾ — happening now. (Careful: ﴿لَيَحْكُمُ… يَوْمَ الْقِيَامَةِ﴾ shows context can override.)' },

        { t: 'mcq', q: 'Which set fixes the muḍāriʿ to the FUTURE?',
          choices: ['السين، سوف، لن، أن، إن', 'لام الابتداء، لا، ما', 'قد، تاء الفاعل', 'لم، لما'],
          correct: 0,
          why: 'Sa-, sawfa, lan, an and conditional in all point forward. The lām/lā/mā trio pins to the present; لم gives *past* meaning.' },

        { t: 'mcq', q: 'The decisive SIGN of a muḍāriʿ is…',
          choices: ['that it can validly follow لَمْ', 'that it starts with any letter', 'that it accepts تاء الفاعل', 'that it ends in ḍammah'],
          correct: 0,
          why: 'أَنْ يَصِحَّ وُقُوعُهُ بَعْدَ لَمْ — like لَمْ يَلِدْ. (Tāʾ al-fāʿil is the *past*\'s sign.)' },

        { t: 'mcq', q: 'أَنَيْتُ gathers…',
          choices: ['the four present-prefix letters أ ن ي ت', 'the ten augmentative letters', 'the letters of weakness', 'the jussive particles'],
          correct: 0,
          why: 'aḥruf al-muḍāraʿah: أَقرأ نَقرأ يَقرأ تَقرأ. The ten augmentatives are سألتمونيها; the weak letters are و ا ي.' },

        { t: 'mcq', q: 'In ﴿وَمَا تَدْرِي نَفْسٌ مَاذَا تَكْسِبُ غَدًا﴾, تَدْرِي is fixed to the present by…',
          choices: ['مَا النافية', 'the future sīn', 'لام الابتداء', 'إِنْ الشرطية'],
          correct: 0,
          why: 'The negating mā pins the not-knowing to now — even though what is unknown (تكسب غدًا) lies in tomorrow.' },
      ],
    },

    /* ═══ 3. The imperative & asmāʾ al-afʿāl ═══ */
    {
      id: 'amr',
      title: 'The imperative & verbal nouns',
      subtitle: 'الأمر · أسماء الأفعال الثلاثة',
      matn: { src: 'DATA_WK03', from: 24, to: 32, check: 'أَمْرٌ' },
      steps: [
        { t: 'teach', title: 'The امر',
          focus: [24, 25, 26],
          points: [
            '**الأمر**: seeks the occurrence of a thing **after** the time of speaking — اجْتَهِدْ.',
            'Its sign: accepting **نون التوكيد** and **ياء المخاطبة** *together with* denoting a request (الطَّلَب).',
          ],
          after: 'The ṭalab condition matters: the muḍāriʿ also takes those attachments, but it does not command.' },

        { t: 'teach', title: 'أسماء الأفعال — verb-meaning, no verb-signs',
          focus: [28, 29, 30, 31, 32],
          points: [
            'A word denoting a verb\'s meaning but **refusing its signs** = **اسم فعل**. Three kinds:',
            '**ماضٍ**: هَيْهَاتَ (= بَعُدَ)، شَتَّانَ (= افْتَرَقَ) · **مضارع**: وَيْ (= أَتَعَجَّبُ)، أُفٍّ (= أَتَضَجَّرُ).',
            '**أمر**: صَهْ (= اسْكُتْ)، آمِينَ (= اسْتَجِبْ) — the commonest kind.',
          ] },

        { t: 'mcq', q: 'The sign of the amr is accepting نون التوكيد and ياء المخاطبة plus…',
          choices: ['indicating a request (الطلب)', 'beginning with a hamzah', 'accepting قد', 'having past meaning'],
          correct: 0,
          why: 'مَعَ دَلَالَتِهِ عَلَى الطَّلَبِ. Without ṭalab, a word taking those attachments is a muḍāriʿ (تَذْهَبِينَ، لَيُسْجَنَنَّ).' },

        { t: 'mcq', q: 'هَيْهَاتَ is…',
          choices: ['اسم فعل ماضٍ meaning بَعُدَ', 'اسم فعل أمر meaning اسْكُتْ', 'a frozen past verb', 'اسم فعل مضارع meaning أَتَعَجَّبُ'],
          correct: 0,
          why: '"Far is it!" = baʿuda. It has a verb\'s meaning but takes none of the verb\'s signs — hence ism fiʿl.' },

        { t: 'mcq', q: 'Why is أُفٍّ not simply a verb?',
          choices: ['It denotes a verb\'s meaning but accepts none of the verb-signs', 'It has no meaning', 'It is a particle', 'It is borrowed from Persian'],
          correct: 0,
          why: 'It means أَتَضَجَّرُ ("I am vexed") yet refuses قد، السين، تاء الفاعل… so it is an **ism** fiʿl muḍāriʿ (note its tanwīn — a noun-sign!).' },

        { t: 'mcq', q: 'Which kind of ism fiʿl is the most common?',
          choices: ['اسم فعل أمر — like صَهْ and آمِينَ', 'اسم فعل ماضٍ', 'اسم فعل مضارع', 'all equally rare'],
          correct: 0,
          why: 'وَهُوَ أَكْثَرُهَا وُجُودًا — the command kind (ṣah!, āmīn!) occurs most.' },

        { t: 'written',
          prompt: 'Define the three tenses of the verb and give the sign of each.',
          model: '• الماضي: occurrence before the time of speaking (usually) — sign: accepts تاء الفاعل (قرأتُ) and تاء التأنيث الساكنة (قرأتْ).\n• المضارع: occurrence at the time of speaking or after (usually), or continuity — sign: validly follows لم (لم يلد), and must begin with a letter of أَنَيْتُ.\n• الأمر: seeks occurrence after the time of speaking — sign: accepts نون التوكيد and ياء المخاطبة together with denoting request.' },
      ],
    },

    /* ═══ 4. Sound vs defective ═══ */
    {
      id: 'sahih-mutall',
      title: 'Sound vs weak (صحيح ومعتل)',
      subtitle: 'حروف العلة · اللين والمد',
      matn: { src: 'DATA_WK04', from: 1, to: 8, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'The second division',
          focus: [1, 2, 3, 4],
          points: [
            'The verb divides into **صحيح** and **معتل**. The letters و ا ي are **حروف العلة** — "weak" because iʿlāl strikes them often: by **قلب**, **حذف** and **نقل الحركة**.',
            '**الصحيح**: its ROOT letters are free of weak letters — كَتَبَ، جَلَسَ.',
            '**المعتل**: one (or more) of its roots IS a weak letter — وَجَدَ، قَالَ، سَعَى.',
          ],
          after: 'The commentary\'s point: the test is the **أصول** only — added weak letters don\'t hurt (كاتِب is still sound).' },

        { t: 'teach', title: 'لين and مدّ',
          focus: [5],
          points: [
            'Weak letter **sākin** after a **fatḥah** = **لِين**: ثَوْب، سَيْف.',
            'Weak letter sākin after its **matching vowel** = **مَدّ**: قَال (ā after fatḥah)، يَقُول (ū after ḍammah)، قِيل (ī after kasrah).',
            'The **alif** is *always* ʿillah + madd + līn at once — always sākin with fatḥah before it, unlike its two sisters.',
          ] },

        { t: 'mcq', q: 'The letters of weakness are…',
          choices: ['و ا ي', 'أ ن ي ت', 'س أ ل', 'ء هـ ع'],
          correct: 0,
          why: 'Wāw, alif, yāʾ — named ʿillah-letters because qalb, ḥadhf and vowel-transfer afflict them constantly.' },

        { t: 'mcq', q: 'Is كَاتِب (from كتب) sound or weak?',
          choices: ['Sound — the alif is added, not a root', 'Weak — it contains an alif', 'Weak — it is a noun', 'Hamzated'],
          correct: 0,
          why: 'The ruling attaches to the **radical** letters only (مَا خَلَتْ أُصُولُهُ). The alif of fāʿil is a zāʾid.' },

        { t: 'mcq', q: 'The wāw in ثَوْب is a letter of…',
          choices: ['لين — sākin with a fatḥah before it', 'مدّ — sākin after a ḍammah', 'neither — it is a root consonant only', 'iʿrāb'],
          correct: 0,
          why: 'Sākin + preceding fatḥah = līn. It would be madd only if the preceding vowel matched it (ḍammah, as in يَقُول).' },

        { t: 'mcq', q: 'Why is the alif ALWAYS simultaneously ʿillah, madd and līn?',
          choices: ['It is always sākin and what precedes it is always fatḥah', 'It is written without dots', 'It can carry any vowel', 'It never appears in roots'],
          correct: 0,
          why: 'لِسُكُونِهَا وَفَتْحِ مَا قَبْلَهَا دَائِمًا — unlike wāw and yāʾ, which can be vowelled or preceded by non-matching vowels.' },
      ],
    },

    /* ═══ 5. Divisions of the sound verb ═══ */
    {
      id: 'aqsam-sahih',
      title: 'Divisions of the sound verb',
      subtitle: 'سالم · مضعّف · مهموز',
      matn: { src: 'DATA_WK04', from: 9, to: 17, check: 'أَقْسَامُ' },
      steps: [
        { t: 'teach', title: 'Three kinds of ṣaḥīḥ',
          focus: [9, 10, 11],
          points: [
            '**السالم**: roots free of weakness, hamzah AND doubling — ضَرَبَ، نَصَرَ، جَلَسَ.',
            'So **every سالم is صحيح، but not the reverse** — أَخَذَ and مَدَّ are ṣaḥīḥ yet not sālim.',
          ] },

        { t: 'teach', title: 'المضعّف — "the deaf"',
          focus: [12, 13, 15],
          points: [
            'Also called **الأَصَمّ** for its strength. Two kinds:',
            '**مضعّف الثلاثي** (and its augmented): ʿayn and lām of one kind — فَرَّ، مَدَّ، امْتَدَّ، اسْتَمَدَّ. This is **the morphologist\'s locus of concern** (idghām, vowel-transfer, pronoun attachment).',
            '**مضعّف الرباعي**: fāʾ = first lām, ʿayn = second lām — زَلْزَلَ، عَسْعَسَ، قَلْقَلَ.',
          ] },

        { t: 'teach', title: 'المهموز',
          focus: [17],
          body: 'One of its roots is a **hamzah**: أَخَذَ (fāʾ) · سَأَلَ (ʿayn) · قَرَأَ (lām).' },

        { t: 'mcq', q: 'مَدَّ is ṣaḥīḥ but NOT sālim because…',
          choices: ['sālim also requires freedom from doubling (and hamzah)', 'its ʿayn is weak', 'it begins with mīm', 'it is quadriliteral'],
          correct: 0,
          why: 'سَلِمَتْ أُصُولُهُ مِنْ أَحْرُفِ الْعِلَّةِ **وَالْهَمْزَةِ وَالتَّضْعِيفِ** — three exclusions, not one.' },

        { t: 'mcq', q: 'Why is the muḍaʿʿaf nicknamed الأَصَمّ (the deaf)?',
          choices: ['لِشِدَّتِهِ — for its strength/hardness', 'because it cannot be heard', 'because its roots are silent letters', 'after a grammarian named al-Aṣamm'],
          correct: 0,
          why: 'The doubled verb is "solid" like deaf rock — the book gives strength as the reason for the name.' },

        { t: 'mcq', q: 'زَلْزَلَ is classified as…',
          choices: ['مضعّف الرباعي', 'مضعّف الثلاثي', 'سالم', 'مهموز'],
          correct: 0,
          why: 'z-l-z-l: fāʾ matches the first lām, ʿayn matches the second — the quadriliteral doubling pattern.' },

        { t: 'mcq', q: 'Which doubled kind is the ṣarf-scholar\'s special concern, and why?',
          choices: ['The trilateral — it has rulings like idghām, vowel-transfer and pronoun attachment', 'The quadriliteral — it is longer', 'Neither — doubling is nahw\'s topic', 'Both equally'],
          correct: 0,
          why: 'مَحَلُّ نَظَرِ الصَّرْفِيِّ: مَدَّ ← مَدَدْتُ، يَمُدُّ… the rules fire on the trilateral, بخلاف الرباعي (زَلْزَلَ stays regular).' },

        { t: 'mcq', q: 'In سَأَلَ the hamzah sits as which root?',
          choices: ['the ʿayn', 'the fāʾ', 'the lām', 'it is augmentative'],
          correct: 0,
          why: 's-ʾ-l: middle root. أَخَذَ is hamzated in the fāʾ; قَرَأَ in the lām.' },
      ],
    },

    /* ═══ 6. Divisions of the weak verb ═══ */
    {
      id: 'aqsam-mutall',
      title: 'Divisions of the weak verb',
      subtitle: 'مثال · أجوف · ناقص · لفيف — وتطبيقها على الاسم',
      matn: { src: 'DATA_WK04', from: 18, to: 30, check: 'أَقْسَامُ' },
      steps: [
        { t: 'teach', title: 'Named by WHERE the weakness sits',
          focus: [18, 19, 20, 22, 24],
          points: [
            '**المثال** — weak **fāʾ**: وَعَدَ، يَسَرَ. Named "resembler" because its *past* suffers no iʿlāl, just like a sound verb.',
            '**الأجوف** — weak **ʿayn**: قَالَ، بَاعَ. Its "hollow" (middle) is empty of a sound letter. Also **ذو الثلاثة**: with tāʾ al-fāʿil it shrinks to three letters — قُلْتُ، بِعْتُ.',
            '**الناقص** — weak **lām**: غَزَا، رَمَى. "Deficient" — its end drops in some conjugations (غَزَتْ، رَمَتْ). Also **ذو الأربعة**: غَزَوْتُ is four letters.',
          ] },

        { t: 'teach', title: 'اللفيف — doubly weak',
          focus: [25, 26, 28],
          points: [
            '**مفروق**: weak fāʾ AND lām, the sound ʿayn *separating* them — وَفَى.',
            '**مقرون**: weak ʿayn AND lām *joined together* — طَوَى، رَوَى.',
          ] },

        { t: 'teach', title: 'The same divisions run through the NOUN',
          focus: [29, 30],
          points: [
            'شَمْس سالم · وَجْه/يُمْن مثال · قَوْل/سَيْف أجوف · دَلْو/ظَبْي ناقص.',
            'وَحْي لفيف مفروق · جَوّ/حَيّ لفيف مقرون · أَمْر/بِئْر/نَبَأ مهموز · حَدّ مضعّف ثلاثي · بُلْبُل مضعّف رباعي.',
          ],
          after: 'Same tests, same names — just applied to noun roots.' },

        { t: 'mcq', q: 'Why is the weak-fāʾ verb called المِثال (the resembler)?',
          choices: ['Its past resembles the sound verb — no iʿlāl strikes it (وَعَدَ، وَعَدْتُ، وَعَدُوا)', 'It resembles the noun', 'It gives examples', 'Its fāʾ resembles a ʿayn'],
          correct: 0,
          why: 'Unlike qāla→qultu (elision) or ramā→ramaw, the mithāl\'s māḍī stays intact — يُمَاثِلُ الصَّحِيحَ.' },

        { t: 'mcq', q: 'قَالَ is nicknamed ذو الثلاثة because…',
          choices: ['with تاء الفاعل it becomes three letters: قُلْتُ', 'it has three root letters', 'it has three meanings', 'it appears three times in the Qurʾān'],
          correct: 0,
          why: 'The hollow verb shrinks: qāla + tu → qul-tu (3 letters). The nāqiṣ is ذو الأربعة: ghazaw-tu (4).' },

        { t: 'mcq', q: 'The commentary says the shrinking of the ajwaf (قُلْتُ) also happens before نَا and نون النسوة. Which set is that?',
          choices: ['The vowelled attached nominative pronouns (ضمائر الرفع المتحركة المتصلة)', 'The jussive particles', 'The object pronouns', 'The letters of أنيتُ'],
          correct: 0,
          why: 'Three: tāʾ al-fāʿil, nā of the speakers, nūn an-niswah — قُلْتُ، قُلْنَا، قُلْنَ.' },

        { t: 'mcq', q: 'وَفَى vs طَوَى — their lafīf kinds are…',
          choices: ['مفروق and مقرون respectively', 'both مفروق', 'مقرون and مفروق respectively', 'both مقرون'],
          correct: 0,
          why: 'wafā: weak fāʾ + lām separated by sound ʿayn = mafrūq. ṭawā: weak ʿayn + lām side by side = maqrūn.' },

        { t: 'mcq', q: 'Classify the noun دَلْو as the book does.',
          choices: ['ناقص — its lām is weak', 'أجوف — its ʿayn is weak', 'مثال — its fāʾ is weak', 'سالم'],
          correct: 0,
          why: 'd-l-w: the wāw is the third root. The taṭbīq box pairs it with ظَبْي under nāqiṣ.' },

        { t: 'mcq', q: 'And بُلْبُل?',
          choices: ['مضعّف رباعي', 'مضعّف ثلاثي', 'سالم', 'لفيف مقرون'],
          correct: 0,
          why: 'b-l-b-l: fāʾ = first lām, ʿayn = second lām — the quadriliteral doubled pattern, like زَلْزَلَ. (حَدّ is the trilateral one.)' },

        { t: 'written',
          prompt: 'Name the seven kinds produced by the second division (3 sound + 4 weak), define each in one line, and give one example.',
          model: 'Sound: • سالم — roots free of weakness, hamzah & doubling (ضَرَبَ) • مضعّف — ʿayn+lām one kind (مَدَّ) or, in the quadriliteral, fāʾ=lām₁ & ʿayn=lām₂ (زَلْزَلَ) • مهموز — a root is hamzah (سَأَلَ).\nWeak: • مثال — weak fāʾ (وَعَدَ) • أجوف — weak ʿayn (قَالَ) • ناقص — weak lām (رَمَى) • لفيف — two weak roots: مفروق fāʾ+lām (وَفَى), مقرون ʿayn+lām (طَوَى).' },
      ],
    },

  ],
});
