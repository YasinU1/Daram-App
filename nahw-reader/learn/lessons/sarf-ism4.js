/* ── Daram Learn — Shadhā al-ʿArf · التقسيم الرابع للاسم (Worksheet 28) ──
   The noun by its final letter: المنقوص · المقصور · الممدود · الصحيح، then the
   قياسي/سماعي split — the 8 analogical maqṣūr patterns, the 4 analogical mamdūd
   patterns (each with its sound-ended نظير), and the transmitted words of both.
   Authored from books/shadha-arf/wk28-ism4-manqus-maqsur-mamdud.js.            */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'sarf-ism-4',
  titleAr: 'التَّقْسِيمُ الرَّابِعُ لِلِاسْمِ: الْمَنْقُوصُ وَالْمَقْصُورُ وَالْمَمْدُودُ وَالصَّحِيحُ',
  titleEn: 'The Noun IV: by its Final Letter',
  pages: 'Wk 28',
  sections: [

    /* ═══ 1. The four kinds & the manqūṣ ═══ */
    {
      id: 'kinds-manqus',
      title: 'The four kinds — and المنقوص',
      subtitle: 'ياء لازمة مكسور ما قبلها — كالداعي والمنادي',
      matn: { src: 'DATA_WK28', from: 1, to: 6, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'A division by the last letter',
          focus: [1, 2, 3],
          points: [
            'Divisions 1–3 sorted the noun by **derivation** and by **gender**. This fourth one looks at one thing only: **how the word ends**.',
            'Four kinds: **مَنْقُوص · مَقْصُور · مَمْدُود · صَحِيح**. The first three end in a weak letter or a hamzah; **الصحيح** is the residue — "whatever is besides that".',
          ],
          after: 'So the whole chapter is one question asked four ways: what is the last letter, and is it fixed?' },

        { t: 'teach', title: 'المنقوص — a fixed yāʾ after a kasrah',
          focus: [4, 5],
          points: [
            'A **declinable** noun whose end is a **yāʾ that is fixed (لَازِمَة)**, with a **kasrah on the letter before it**.',
            'Both halves matter: the yāʾ must always be there, and what precedes it must be kasrah-vowelled.',
          ],
          examples: [
            { ar: 'الدَّاعِي', en: 'the caller', note: 'the ʿayn carries a kasrah, and the yāʾ never leaves' },
            { ar: 'الْمُنَادِي', en: 'the summoner' },
          ] },

        { t: 'teach', title: 'What each word of the definition throws out',
          focus: [6],
          points: [
            '**"اسم"** excludes the verb **رَضِيَ** · **"المعرب"** excludes the indeclinable **الَّذِي** · **"whose end is a yāʾ"** excludes the **مقصور** (its end is an alif).',
            '**"لازمة"** excludes the **five nouns in the genitive** — أَبِي، أَخِي — whose yāʾ appears only in that one case.',
            '**"مكسور ما قبلها"** excludes **ظَبْيٌ** and **رَمْيٌ**: a sukūn sits before the yāʾ, so they are **annexed to the صحيح** (مُلْحَق بالصحيح).',
          ],
          after: 'Every clause of a Shadhā definition is doing work — read each one as a door being shut.' },

        { t: 'mcq', q: 'What qualifies الدَّاعِي as منقوص?',
          choices: ['A declinable noun ending in a fixed yāʾ with a kasrah before it', 'Any noun ending in yāʾ', 'A noun ending in alif', 'A noun ending in hamzah'],
          correct: 0,
          why: 'هُوَ الِاسْمُ الْمُعْرَبُ الَّذِي آخِرُهُ يَاءٌ لَازِمَةٌ مَكْسُورٌ مَا قَبْلَهَا — all four conditions together.' },

        { t: 'mcq', q: 'رَضِيَ ends in a yāʾ with a kasrah before it. Why is it not منقوص?',
          choices: ['It is a verb — the word "اسم" in the definition excludes it', 'Its yāʾ is not fixed', 'Its kasrah is accidental', 'It actually is منقوص'],
          correct: 0,
          why: 'فَخَرَجَ بِالِاسْمِ: الْفِعْلُ كَرَضِيَ. The definition opens by restricting the whole discussion to nouns.' },

        { t: 'mcq', q: 'Why is ظَبْيٌ excluded, though it ends in a yāʾ?',
          choices: ['A sukūn precedes the yāʾ, not a kasrah — so it is مُلْحَق بالصحيح', 'Its yāʾ is not fixed', 'It is indeclinable', 'It is a مقصور'],
          correct: 0,
          why: 'فَإِنَّهُ مُلْحَقٌ بِالصَّحِيحِ، لِسُكُونِ مَا قَبْلَ يَائِهِ — the same reason دَلْوٌ counts as sound-like.' },

        { t: 'mcq', q: 'In مَرَرْتُ بِأَبِي, is أَبِي a منقوص?',
          choices: ['No — the five nouns’ yāʾ is not لازمة; it shows only in the genitive', 'Yes — it ends in yāʾ with kasrah before', 'Yes, but only in this sentence', 'No, because it is indeclinable'],
          correct: 0,
          why: 'وَبِلَازِمَةٍ: الْأَسْمَاءُ الْخَمْسَةُ فِي حَالَةِ الْجَرِّ. Fixed means fixed in every case, not borrowed from one.' },

        { t: 'mcq', q: 'الَّذِي ends in a yāʾ with a kasrah before it. Which clause excludes it?',
          choices: ['"المعرب" — it is مبني, not declinable', '"لازمة"', '"مكسور ما قبلها"', '"اسم"'],
          correct: 0,
          why: 'وَبِالْمُعْرَبِ: الْمَبْنِيُّ كَالَّذِي. Iʿrāb is a condition of all four kinds in this chapter.' },

        { t: 'written',
          prompt: 'Define المنقوص, then show what each part of the definition excludes.',
          model: 'هو الاسم المُعْرَب الذي آخره ياء لازمة مكسور ما قبلها، كالداعي والمنادي.\nExclusions: بالاسم خرج الفعل كرَضِيَ · بالمعرب خرج المبني كالذي · بكون آخره ياء خرج المقصور · بلازمة خرجت الأسماء الخمسة في حالة الجر · بمكسور ما قبلها خرج نحو ظَبْي ورَمْي، فإنه ملحق بالصحيح لسكون ما قبل يائه.' },
      ],
    },

    /* ═══ 2. Maqṣūr, mamdūd, ṣaḥīḥ — and the qiyāsī/samāʿī split ═══ */
    {
      id: 'maqsur-mamdud-sahih',
      title: 'المقصور · الممدود · الصحيح',
      subtitle: 'ألف لازمة · همزة تلي ألفًا زائدة · ما عدا ذلك',
      matn: { src: 'DATA_WK28', from: 7, to: 17, check: 'الْمَقْصُورُ' },
      steps: [
        { t: 'teach', title: 'المقصور — a fixed alif',
          focus: [7, 8],
          points: [
            'A **declinable** noun whose end is an **alif that is fixed**. Nothing is said about the vowel before it — the alif itself carries the fatḥah implicitly.',
          ],
          examples: [
            { ar: 'الْهُدَى', en: 'guidance' },
            { ar: 'الْمُصْطَفَى', en: 'the Chosen One' },
          ] },

        { t: 'teach', title: 'Its four exclusions',
          focus: [9, 10, 11, 12],
          points: [
            '**"اسم"** excludes both the verb and the particle: **دَعَا** and **إِلَى** · **"المعرب"** excludes **أَنَا** and **هَذَا**.',
            '**"ends in an alif"** excludes the **منقوص** — the previous kind, shut out by its own clause here.',
            '**"لازمة"** excludes the **five nouns in the accusative** (أَبَا، أَخَا) and the **dual in the nominative** (الزَّيْدَانِ) — alifs that belong to a case, not to the word.',
          ],
          after: 'Note the symmetry: each of the first two kinds excludes the other by naming its own final letter.' },

        { t: 'teach', title: 'الممدود and الصحيح',
          focus: [13, 14, 15, 16],
          points: [
            '**الممدود**: a declinable noun whose end is a **hamzah following an ADDED alif** — صَحْرَاء، حَمْرَاء. The alif must be a زائدة, which is what makes the مَدّ.',
            '**الصحيح**: **مَا عَدَا ذَلِكَ** — رَجُل، كِتَاب. It is defined by subtraction, not by a shape.',
            'The teacher’s gloss widens it: its end is a sound letter **or like one** — a weak lām with a **sukūn before it**, نحو **دَلْوٌ**.',
          ] },

        { t: 'teach', title: 'قياسي and سماعي — two scholars, two jobs',
          focus: [17],
          points: [
            'Both the maqṣūr and the mamdūd come in two sorts: **قياسي** — the place of the **صَرْفِيّ**’s study — and **سماعي** — the place of the **لُغَوِيّ**’s.',
            'The lexicographer’s task is described exactly: he **lists out the Arabs’ words** and **sets their meanings beside them**. Pattern-work is not his.',
          ],
          after: 'Sections 3–4 are the ṣarfī’s half; section 5 is what he hands to the lexicographer.' },

        { t: 'mcq', q: 'Why is الْمُصْطَفَى a مقصور?',
          choices: ['A declinable noun ending in a fixed alif', 'It ends in a hamzah after an alif', 'It ends in a fixed yāʾ', 'It is indeclinable'],
          correct: 0,
          why: 'هُوَ الِاسْمُ الْمُعْرَبُ الَّذِي آخِرُهُ أَلِفٌ لَازِمَةٌ، كَالْهُدَى وَالْمُصْطَفَى.' },

        { t: 'mcq', q: 'إِلَى ends in an alif. Which clause excludes it?',
          choices: ['"اسم" — it is a particle; the same clause excludes the verb دَعَا', '"لازمة"', '"المعرب"', 'Nothing excludes it'],
          correct: 0,
          why: 'فَخَرَجَ بِالِاسْمِ: الْفِعْلُ وَالْحَرْفُ، كَدَعَا وَإِلَى. In the منقوص only the verb needed excluding; here the particle joins it.' },

        { t: 'mcq', q: 'الزَّيْدَانِ in the nominative ends in an alif. Is it a مقصور?',
          choices: ['No — the dual’s alif is not لازمة; it becomes yāʾ in naṣb and jarr', 'Yes', 'Yes, but only in the nominative', 'No, because it is indeclinable'],
          correct: 0,
          why: 'وَبِلَازِمَةٍ: … وَالْمُثَنَّى فِي حَالَةِ الرَّفْعِ — alongside the five nouns in the accusative.' },

        { t: 'mcq', q: 'What makes صَحْرَاء a ممدود rather than merely a hamzah-ending noun?',
          choices: ['Its hamzah follows an ADDED alif (ألف زائدة)', 'Its hamzah is doubled', 'Its hamzah follows a yāʾ', 'It has a feminine tāʾ'],
          correct: 0,
          why: 'الَّذِي آخِرُهُ هَمْزَةٌ تَلِي أَلِفًا زَائِدَةً — the added alif is the مَدّ, and the hamzah is what it turned into.' },

        { t: 'mcq', q: 'دَلْوٌ has a weak lām. Where does it fall?',
          choices: ['With the صحيح — "like a sound letter", since a sukūn precedes the weak lām', 'With the مقصور', 'With the منقوص', 'With the ممدود'],
          correct: 0,
          why: 'شَبِيهٌ بِصَحِيحٍ — لَامُهُ حَرْفُ عِلَّةٍ وَقَبْلَهُ سُكُونٌ. Exactly the reasoning that made ظَبْي مُلْحَق بالصحيح.' },

        { t: 'mcq', q: 'Whose field is the سماعي maqṣūr and mamdūd?',
          choices: ['The لُغَوِيّ — who lists the Arabs’ words and their meanings; the صَرْفِيّ takes the قياسي', 'The صَرْفِيّ', 'The نَحْوِيّ', 'Neither — it is not studied'],
          correct: 0,
          why: 'وَسَمَاعِيٌّ، وَهُوَ مَوْضِعُ نَظَرِ اللُّغَوِيِّ، الَّذِي يَسْرُدُ أَلْفَاظَ الْعَرَبِ، وَيَضَعُ مَعَانِيَهَا بِإِزَائِهَا.' },

        { t: 'written',
          prompt: 'Define المقصور، الممدود and الصحيح with an example of each, and say what "لازمة" excludes from the مقصور.',
          model: 'المقصور: الاسم المُعْرَب الذي آخره ألف لازمة، كالهُدَى والمصطفى.\nالممدود: الاسم المُعْرَب الذي آخره همزة تلي ألفًا زائدة، كصحراء وحمراء.\nالصحيح: ما عدا ذلك، كرجل وكتاب — وكذا الشبيه بالصحيح، لامه حرف علة وقبله سكون، نحو دَلْو.\nبلازمة خرجت الأسماء الخمسة في حالة النصب، والمثنى في حالة الرفع — ألفٌ للحالة لا للكلمة.' },
      ],
    },

    /* ═══ 3. The analogical maqṣūr — eight patterns ═══ */
    {
      id: 'maqsur-qiyasi',
      title: 'المقصور القياسي — the eight patterns',
      subtitle: 'كل معتلّ اللام له نظير من الصحيح',
      matn: { src: 'DATA_WK28', from: 18, to: 28, check: 'الْمَقْصُورُ' },
      steps: [
        { t: 'teach', title: 'The rule: find the sound-ended twin',
          focus: [19],
          points: [
            'Every noun **weak in its lām** which **has a نَظِير among the sound-ended**, and in which a **fatḥah is invariably held on the letter before its end**.',
            'The whole of this section is one method: take the maqṣūr, then name the sound-lettered word built on the very same pattern. If it exists, the maqṣūr is قياسي.',
          ],
          examples: [
            { ar: 'الْجَوَى ↔ الْفَرَح', en: 'the weak twin and its sound twin', note: 'same pattern; only the lām differs' },
          ],
          after: 'No twin, no analogy — that case is handed to section 5.' },

        { t: 'teach', title: 'Patterns 1–3 — one maṣdar, two plurals',
          focus: [20, 21, 23],
          points: [
            '**1** The maṣdar of **فَعِلَ** (bāb سَمِعَ, fatḥah then kasrah): الْجَوَى، الْهَوَى، الْعَمَى ↔ الْفَرَح، الْأَشَر، الطَّرَب.',
            '**2** **فِعَل** (kasrah then fatḥah) as the plural of **فِعْلَة**: فِرْيَة → فِرًى · مِرْيَة → مِرًى · لِحْيَة → لِحًى.',
            '**3** **فُعَل** (ḍammah then fatḥah) as the plural of **فُعْلَة**: مُدْيَة → مُدًى · زُبْيَة → زُبًى — twinned by قِرْبَة → قِرَب and قُرْبَة → قُرَب.',
          ],
          after: 'Patterns 2 and 3 are the same move at two vowels — the plural turns the sukūn into a fatḥah, and the weak lām surfaces as an alif.' },

        { t: 'teach', title: 'Patterns 4–6 — participle, elative, its plural',
          focus: [24, 25, 26],
          points: [
            '**4** Any **اسم مفعول** with a weak lām **beyond three letters**: مُعْطًى، مُسْتَدْعًى ↔ مُكْرَم، مُسْتَخْرَج.',
            '**5** **أَفْعَل** — whether an elative (**الْأَقْصَى** = remotest) or not (**الْأَعْمَى**, a ṣifah mushabbahah) ↔ الْأَبْعَد، الْأَعْمَش.',
            '**6** Whatever is the **plural of فُعْلَى**, the feminine of أفعل: الدُّنْيَا → الدُّنَا ↔ الْأُخْرَى → الْأُخَر.',
          ] },

        { t: 'teach', title: 'Patterns 7–8 — the genus noun and المَفْعَل',
          focus: [27, 28],
          points: [
            '**7** **Genus nouns** on **فَعَل** (two fatḥahs) that mean the **collective when stripped of the tāʾ** and the **single unit when it carries one**: حَصَاة → حَصًى ↔ مَدَرَة → مَدَر.',
            '**8** **الْمَفْعَل** when used for a **maṣdar, a time or a place**: مَلْهًى، مَسْعًى ↔ مَذْهَب، مَسْرَح.',
          ],
          after: 'Eight patterns, one habit: every single one is quoted with its sound-ended parallel — that pairing IS the proof of analogy.' },

        { t: 'mcq', q: 'What is the test that makes a maqṣūr قياسي?',
          choices: ['It has a sound-ended نظير, with a fatḥah invariably before its end', 'It appears in the Qurʾān', 'It is a maṣdar', 'Its alif is written as yāʾ'],
          correct: 0,
          why: 'كُلُّ اسْمٍ مُعْتَلِّ اللَّامِ، لَهُ نَظِيرٌ مِنَ الصَّحِيحِ، مُلْتَزَمٌ فَتْحُ مَا قَبْلَ آخِرِهِ.' },

        { t: 'mcq', q: 'الْعَمَى is analogical because it parallels…',
          choices: ['الْفَرَح، الْأَشَر، الطَّرَب — maṣdars of bāb سَمِعَ', 'مُكْرَم', 'الْأَبْعَد', 'مَذْهَب'],
          correct: 0,
          why: 'Pattern 1: the maṣdar of فَعِلَ (bāb samiʿa) — الجَوَى، الهَوَى، العَمَى against faraḥ, ashar, ṭarab.' },

        { t: 'mcq', q: 'مُدًى stands to مُدْيَة as…',
          choices: ['فُعَل stands to فُعْلَة — twinned by قُرْبَة → قُرَب', 'فِعَل stands to فِعْلَة', 'a maṣdar to its verb', 'an elative to its positive'],
          correct: 0,
          why: 'Pattern 3, ḍammah then fatḥah. Pattern 2 is the kasrah version: فِرْيَة → فِرًى, twinned by قِرْبَة → قِرَب.' },

        { t: 'mcq', q: 'مُسْتَدْعًى qualifies under which pattern?',
          choices: ['4 — an ism mafʿūl with weak lām beyond three letters; twin مُسْتَخْرَج', '1 — the maṣdar of bāb samiʿa', '5 — أفعل', '8 — المَفْعَل'],
          correct: 0,
          why: 'كُلُّ اسْمِ مَفْعُولٍ مُعْتَلِّ اللَّامِ، زَائِدٍ عَلَى الثَّلَاثَةِ، كَمُعْطًى وَمُسْتَدْعًى.' },

        { t: 'mcq', q: 'الْأَعْمَى is cited beside الْأَقْصَى to show that pattern 5 covers…',
          choices: ['أفعل whether it is an elative or a ṣifah mushabbahah', 'only elatives', 'only colours', 'only plurals'],
          correct: 0,
          why: 'أَفْعَلُ صِيغَةَ تَفْضِيلٍ كَالْأَقْصَى، أَوْ لِغَيْرِهِ كَالْأَعْمَى (صفة مشبهة) — twins الْأَبْعَد and الْأَعْمَش.' },

        { t: 'mcq', q: 'حَصَاة / حَصًى illustrates which pattern?',
          choices: ['7 — the genus noun: bare = collective, with tāʾ = the single unit', '6 — plural of فُعْلَى', '3 — فُعَل', '8 — المَفْعَل'],
          correct: 0,
          why: 'دَالًّا عَلَى الْجَمْعِيَّةِ بِالتَّجَرُّدِ مِنَ التَّاءِ… وَعَلَى الْوَحْدَةِ بِالتَّاءِ — twin مَدَرَة/مَدَر.' },

        { t: 'mcq', q: 'مَسْعًى and مَلْهًى are analogical as…',
          choices: ['المَفْعَل used for a maṣdar, a time or a place; twins مَذْهَب، مَسْرَح', 'ism mafʿūl forms', 'elatives', 'genus nouns'],
          correct: 0,
          why: 'الْمَفْعَلُ مَدْلُولًا بِهِ عَلَى مَصْدَرٍ أَوْ زَمَانٍ أَوْ مَكَانٍ — the wk25 chapter’s pattern reappearing with a weak lām.' },

        { t: 'written',
          prompt: 'State the rule of the analogical مقصور, then give any four of its eight patterns with an example and its نظير for each.',
          model: 'كل اسم معتلّ اللام له نظير من الصحيح، ملتزَم فتحُ ما قبل آخره.\n1 مصدر فَعِلَ (باب سمع): الجَوَى ↔ الفَرَح · 2 فِعَل جمع فِعْلَة: فِرْيَة/فِرًى · 3 فُعَل جمع فُعْلَة: مُدْيَة/مُدًى ↔ قُرْبَة/قُرَب · 4 اسم المفعول الزائد على الثلاثة: مُسْتَدْعًى ↔ مُسْتَخْرَج · 5 أفعل تفضيلًا أو صفةً: الأقصى/الأعمى ↔ الأبعد/الأعمش · 6 جمع فُعْلَى: الدنيا/الدُّنَا ↔ الأخرى/الأُخَر · 7 اسم الجنس على فَعَل: حَصَاة/حَصًى ↔ مَدَرَة/مَدَر · 8 المَفْعَل للمصدر أو الزمان أو المكان: مَسْعًى ↔ مَذْهَب.' },
      ],
    },

    /* ═══ 4. The analogical mamdūd — four patterns ═══ */
    {
      id: 'mamdud-qiyasi',
      title: 'الممدود القياسي — the four patterns',
      subtitle: 'ملتزَم فيه زيادةُ ألف قبل آخره',
      matn: { src: 'DATA_WK28', from: 29, to: 34, check: 'الْمَمْدُودُ' },
      steps: [
        { t: 'teach', title: 'The same test, one shape further',
          focus: [30],
          points: [
            'Every noun **weak in its lām** with a **نَظِير among the sound-ended**, in which an **alif is invariably added before its end**.',
            'Identical method to the maqṣūr — only now the twin’s shape gains a **مَدّ**, so the weak lām surfaces as a hamzah after that added alif.',
          ],
          after: 'Four patterns here against the maqṣūr’s eight; the mamdūd is the narrower of the pair.' },

        { t: 'teach', title: 'Patterns 1–2 — hamzat al-waṣl and أَفْعَلَ',
          focus: [31, 32],
          points: [
            '**1** The maṣdar of a verb **beginning with hamzat al-waṣl**: ارْعَوَى → ارْعِوَاءً · ابْتَغَى → ابْتِغَاءً · اسْتَقْصَى → اسْتِقْصَاءً ↔ احْمَرَّ احْمِرَارًا · اسْتَخْرَجَ اسْتِخْرَاجًا.',
            '**2** The maṣdar of any lām-weak verb **matching أَفْعَلَ**: أَعْطَى → إِعْطَاءً · أَمْلَى → إِمْلَاءً ↔ أَكْرَمَ إِكْرَامًا · أَحْسَنَ إِحْسَانًا.',
          ],
          after: 'Read the twins aloud: ابتغاء/استخراج · إعطاء/إكرام — the mould is the same, only the lām differs.' },

        { t: 'teach', title: 'Patterns 3–4 — the أَفْعِلَة singular, and sounds & diseases',
          focus: [33, 34],
          points: [
            '**3** Whatever is the **singular of an أَفْعِلَة plural**: كِسَاء/أَكْسِيَة · رِدَاء/أَرْدِيَة ↔ حِمَار/أَحْمِرَة · سِلَاح/أَسْلِحَة.',
            '**4** Any maṣdar of **فَعَلَ** (two fatḥahs) denoting a **sound or a disease**: الرُّغَاء (the camel’s cry)، الثُّغَاء (the sheep’s) ↔ الصُّرَاخ؛ and الْمُشَاء ↔ الزُّكَام.',
          ],
          after: 'Pattern 4 is a meaning-class, not just a shape — the sense "a cry" or "an ailment" is part of the rule.' },

        { t: 'mcq', q: 'ابْتِغَاء is an analogical mamdūd because…',
          choices: ['its verb begins with hamzat al-waṣl; twin استخراج from استخرج', 'it is on أَفْعَلَ', 'it is the singular of an أفعلة plural', 'it names a sound'],
          correct: 0,
          why: 'كَمَصْدَرِ مَا أَوَّلُهُ هَمْزَةُ وَصْلٍ — with ارْعِوَاء and اسْتِقْصَاء; twins احمرار، اقتدار، استخراج.' },

        { t: 'mcq', q: 'The sound-ended twin of إِعْطَاء is…',
          choices: ['إِكْرَام — both maṣdars of an أَفْعَلَ verb', 'اسْتِخْرَاج', 'حِمَار', 'الزُّكَام'],
          correct: 0,
          why: 'مَصْدَرُ كُلِّ فِعْلٍ مُعْتَلِّ اللَّامِ يُوَازِنُ أَفْعَلَ — أعطى إعطاء / أكرم إكرامًا · أملى إملاء / أحسن إحسانًا.' },

        { t: 'mcq', q: 'What puts كِسَاء among the analogical mamdūd?',
          choices: ['It is the singular of an أَفْعِلَة plural (أَكْسِيَة); twin حِمَار/أَحْمِرَة', 'Its verb has hamzat al-waṣl', 'It denotes a disease', 'It is on أَفْعَلَ'],
          correct: 0,
          why: 'كُلُّ مَا كَانَ مُفْرَدَ الْأَفْعِلَةِ، كَكِسَاءٍ وَأَكْسِيَةٍ، وَرِدَاءٍ وَأَرْدِيَةٍ — twins حِمَار/أَحْمِرَة · سِلَاح/أَسْلِحَة.' },

        { t: 'mcq', q: 'الثُّغَاء denotes…',
          choices: ['the sheep’s cry — pattern 4, the maṣdar of فَعَلَ for a sound or a disease', 'the camel’s cry', 'a head cold', 'a garment'],
          correct: 0,
          why: 'الرُّغَاء لِصَوْتِ الْبَعِيرِ، وَالثُّغَاء لِصَوْتِ الشَّاةِ — twin الصُّرَاخ; the disease side gives الْمُشَاء ↔ الزُّكَام.' },

        { t: 'mcq', q: 'What single thing decides قياسي in BOTH the maqṣūr and the mamdūd?',
          choices: ['The existence of a sound-ended نظير built on the same pattern', 'Being a maṣdar', 'Appearing in poetry', 'The number of letters'],
          correct: 0,
          why: 'Both rules are phrased around لَهُ نَظِيرٌ مِنَ الصَّحِيحِ — and the سماعي is defined precisely as مَا فَقَدَ ذَلِكَ النَّظِيرَ.' },

        { t: 'written',
          prompt: 'State the rule of the analogical ممدود and give its four patterns, each with an example and its نظير.',
          model: 'كل اسم معتلّ اللام له نظير من الصحيح الآخر، ملتزَمٌ فيه زيادةُ ألف قبل آخره.\n1 مصدر ما أوّله همزة وصل: ابتغى ابتغاءً ↔ استخرج استخراجًا · 2 مصدر كل فعل معتلّ اللام يوازن أفعل: أعطى إعطاءً ↔ أكرم إكرامًا · 3 مفرد الأفعلة: كِساء/أكسية ↔ حِمار/أحمِرة · 4 مصدر فَعَلَ بفتحتين دالًّا على صوت أو داء: الرُّغاء والثُّغاء ↔ الصُّراخ · والمُشاء ↔ الزُّكام.' },
      ],
    },

    /* ═══ 5. The samāʿī of both ═══ */
    {
      id: 'samai',
      title: 'السماعي منهما',
      subtitle: 'ما فقد ذلك النظير — الفتى والحِجَا · الثَّراء والحِذاء',
      matn: { src: 'DATA_WK28', from: 35, to: 38, check: 'السَّمَاعِيُّ' },
      steps: [
        { t: 'teach', title: 'Defined by an absence',
          focus: [35, 36],
          points: [
            'The **سماعي** of the maqṣūr and mamdūd is **whatever lacks that نَظِير**. One sentence, and it needs no more: no sound-ended twin means no pattern to reason from.',
            'These words are learned by **transmission** — which is why the chapter handed them to the لُغَوِيّ rather than the صَرْفِيّ.',
          ] },

        { t: 'teach', title: 'Transmitted maqṣūr',
          focus: [37],
          points: [
            '**الْفَتَى** — the singular of الْفِتْيَان · **الْحِجَا** — the intellect (العَقْل).',
            '**السَّنَا** — light (الضَّوْء) · **الثَّرَى** — soil (التُّرَاب).',
          ] },

        { t: 'teach', title: 'Transmitted mamdūd — and the pairs to watch',
          focus: [38],
          points: [
            '**الثَّرَاء** with fatḥah — abundance of wealth · **الْحِذَاء** with kasrah — the sandal.',
            '**الْفُتَاء** with ḍammah — youthfulness (حَدَاثَة السِّنّ) · **السَّنَاء** with fatḥah on the sīn — nobility (الشَّرَف).',
            'Set them against the previous card: **السَّنَا** = light but **السَّنَاء** = nobility; **الثَّرَى** = soil but **الثَّرَاء** = wealth. The مَدّ alone changes the word.',
          ],
          after: 'The opening vowel is doing the same work: ثَرَاء with fatḥah, حِذَاء with kasrah, فُتَاء with ḍammah — three words, three different openings.' },

        { t: 'mcq', q: 'What makes a maqṣūr or mamdūd سماعي?',
          choices: ['It lacks a sound-ended نظير, so no analogy reaches it', 'It is rare in speech', 'It is not in the Qurʾān', 'Its alif is written as yāʾ'],
          correct: 0,
          why: 'وَالسَّمَاعِيُّ مِنْهُمَا مَا فَقَدَ ذَلِكَ النَّظِيرَ — the قياسي rules were built entirely on having one.' },

        { t: 'mcq', q: 'السَّنَا and السَّنَاء mean…',
          choices: ['light (maqṣūr) and nobility (mamdūd)', 'nobility and light', 'both light', 'soil and wealth'],
          correct: 0,
          why: 'السَّنَا: أَيِ الضَّوْءُ (transmitted maqṣūr) · السَّنَاء بِفَتْحِ السِّينِ: لِلشَّرَفِ (transmitted mamdūd).' },

        { t: 'mcq', q: 'الثَّرَى against الثَّرَاء:',
          choices: ['soil, against abundance of wealth', 'wealth, against soil', 'both mean soil', 'both mean wealth'],
          correct: 0,
          why: 'الثَّرَى: أَيِ التُّرَابُ · الثَّرَاءُ بِالْفَتْحِ: لِكَثْرَةِ الْمَالِ — the مَدّ moves you from dust to riches.' },

        { t: 'mcq', q: 'الْحِذَاء بالكسر means…',
          choices: ['the sandal (النَّعْل)', 'youthfulness', 'nobility', 'the intellect'],
          correct: 0,
          why: 'وَالْحِذَاءُ بِالْكَسْرِ: لِلنَّعْلِ — contrast الْفُتَاء بِالضَّمِّ for youthfulness.' },

        { t: 'mcq', q: 'الْحِجَا means…',
          choices: ['the intellect (العَقْل)', 'light', 'soil', 'a youth'],
          correct: 0,
          why: 'وَالْحِجَا: أَيِ الْعَقْلُ — listed with الفتى، السَّنَا، الثَّرَى among the transmitted maqṣūr.' },

        { t: 'written',
          prompt: 'What is the سماعي of the maqṣūr and the mamdūd? Give two examples of each, and one pair that differs only by the مَدّ.',
          model: 'السماعي منهما: ما فقد ذلك النظير من الصحيح، فلا يُقاس عليه بل يُؤخذ سماعًا — وهو موضع نظر اللغوي.\nمن المقصور سماعًا: الفتى (واحد الفتيان)، الحِجَا أي العقل، السَّنَا أي الضوء، الثَّرَى أي التراب.\nومن الممدود سماعًا: الثَّراء بالفتح لكثرة المال، الحِذاء بالكسر للنعل، الفُتاء بالضم لحداثة السن، السَّناء بفتح السين للشرف.\nوالمَدّ وحده يفرّق: السَّنَا (الضوء) والسَّناء (الشرف)، والثَّرَى (التراب) والثَّراء (المال).' },
      ],
    },

  ],
});
