/* ── Daram Learn — Shadhā al-ʿArf · التقسيم الثالث للفعل (Worksheets 5–7) ──
   Two courses: the bare trilateral & its six bābs (wk05 + wk06a tanbīhāt),
   and the quadriliteral / augmented patterns & ilḥāq (wk06b + wk07).
   Authored from books/shadha-arf/wk05-fil3.js, wk06a-fil3-tanbihat.js,
   wk06b-fil3-rubai.js, wk07-fil3-mazid.js.                                    */

window.DARAM_COURSES = window.DARAM_COURSES || [];

/* ═════════ Course: the bare trilateral & its six bābs ═════════ */
window.DARAM_COURSES.push({
  id: 'sarf-fil-3a',
  titleAr: 'التَّقْسِيمُ الثَّالِثُ: الثُّلَاثِيُّ الْمُجَرَّدُ وَأَبْوَابُهُ',
  titleEn: 'The Verb II: the Six Bābs',
  pages: 'Wk 5–6a',
  sections: [

    /* ═══ 1. Bare vs augmented — and why six bābs ═══ */
    {
      id: 'mujarrad-mazid',
      title: 'Bare vs augmented — and why six bābs',
      subtitle: 'مجرد ومزيد · ٣ × ٣ − ٣ = ٦',
      matn: { src: 'DATA_WK05', from: 1, to: 10, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'The third division',
          focus: [1, 2, 3, 4, 5, 6],
          points: [
            '**المجرد**: all letters radical — none drops in conjugation without cause.',
            '**المزيد**: one or more letters added onto the radicals.',
            'Each splits in two: مجرد ثلاثي/رباعي، مزيد الثلاثي/الرباعي.',
          ] },

        { t: 'teach', title: 'Counting the bābs',
          focus: [7, 8, 9, 10],
          points: [
            'Past alone: the fāʾ is **always fatḥah**, so only the ʿayn varies → **3** shapes (فَعَلَ فَعِلَ فَعُلَ).',
            'Past × present: 3 × 3 = 9, minus 3 barred pairings = **6 bābs**.',
            'Barred: kasrah māḍī + ḍammah muḍāriʿ (فَعِلَ يَفْعُلُ)، and ḍammah māḍī with kasrah or fatḥah muḍāriʿ.',
          ],
          after: 'The grid above is the whole map: memorise its six filled cells.' },

        { t: 'mcq', q: 'Why does the bare trilateral past have only THREE shapes?',
          choices: ['Its fāʾ is always fatḥah; only the ʿayn varies', 'Arabic has only three vowels on any letter', 'Its lām is always sākin', 'The present determines the past'],
          correct: 0,
          why: 'دَائِمًا مَفْتُوحُ الْفَاءِ — so the variable is the ʿayn alone: fatḥah, kasrah or ḍammah.' },

        { t: 'mcq', q: 'Which pairing is BARRED (never a bāb)?',
          choices: ['فَعِلَ يَفْعُلُ', 'فَعَلَ يَفْعُلُ', 'فَعِلَ يَفْعَلُ', 'فَعُلَ يَفْعُلُ'],
          correct: 0,
          why: 'Kasrah in the past may not pair with ḍammah in the present; and ḍammah in the past pairs only with ḍammah. The other three listed are bābs 1, 4 and 5.' },

        { t: 'mcq', q: 'A verb where a letter drops in conjugation — e.g. قَالَ ← قُلْتُ — is still مجرد. Why?',
          choices: ['The drop has a CAUSE (iʿlāl); mujarrad only requires all letters be radical', 'It is not mujarrad — it becomes mazīd', 'Because قال has four letters', 'Because the wāw is augmentative'],
          correct: 0,
          why: 'The definition says لَا يَسْقُطُ حَرْفٌ مِنْهَا **بِغَيْرِ عِلَّةٍ** — a weakness-driven elision doesn\'t disqualify it.' },

        { t: 'mcq', q: 'How many bābs does the bare trilateral have when past and present are considered together?',
          choices: ['Six', 'Three', 'Nine', 'Twelve'],
          correct: 0,
          why: 'Nine combinations minus the three barred = six. (Twelve is the count of *augmented* trilateral patterns.)' },
      ],
    },

    /* ═══ 2. Bābs 1–3 ═══ */
    {
      id: 'abwab-1-3',
      title: 'Bābs 1–3: نصر · ضرب · فتح',
      subtitle: 'دعائم الأبواب — وشرط باب فَتَحَ',
      matn: { src: 'DATA_WK05', from: 11, to: 20, check: 'الْبَابُ' },
      steps: [
        { t: 'teach', title: 'Bāb 1 & Bāb 2',
          focus: [11, 12, 13, 14],
          points: [
            '**نَصَرَ يَنْصُرُ** (fatḥah → ḍammah): قَعَدَ، أَخَذَ، قَالَ يَقُولُ، غَزَا يَغْزُو، مَرَّ يَمُرُّ.',
            '**ضَرَبَ يَضْرِبُ** (fatḥah → kasrah): جَلَسَ، وَعَدَ يَعِدُ، بَاعَ يَبِيعُ، رَمَى يَرْمِي، فَرَّ يَفِرُّ.',
          ] },

        { t: 'teach', title: 'Bāb 3 — fatḥah in both needs a THROAT letter',
          focus: [15, 16, 17, 18, 20],
          points: [
            '**فَتَحَ يَفْتَحُ**: ذَهَبَ، سَعَى، وَضَعَ، سَأَلَ، قَرَأَ — every such verb is guttural in its ʿayn or lām.',
            'The six throat letters: **الهمزة، الهاء، الحاء، الخاء، العين، الغين**. But not every guttural verb is from this bāb.',
            'Without a throat letter it is **شاذّ**: أَبَى يَأْبَى؛ and يَبْقَى/قَلَى from dialect-mixing (بَقَى is Ṭayyiʾ\'s fatḥah-for-kasrah).',
          ],
          after: 'Direction matters: throat letter is *necessary* for bāb 3, not *sufficient* for it.' },

        { t: 'mcq', q: 'What condition does bāb فَتَحَ يَفْتَحُ impose?',
          choices: ['A throat letter as ʿayn or lām', 'A weak first radical', 'A doubled lām', 'A hamzah as fāʾ'],
          correct: 0,
          why: 'Fatḥah in both tenses requires ḥalqī ʿayn or lām — the six throat letters ء هـ ح خ ع غ.' },

        { t: 'mcq', q: 'ذَهَبَ يَذْهَبُ qualifies for bāb 3 through which letter?',
          choices: ['The هـ — its ʿayn is guttural', 'The ذ — its fāʾ is guttural', 'The ب — its lām is guttural', 'It is shādhdh'],
          correct: 0,
          why: 'dh-h-b: the middle radical hāʾ is a throat letter. (The fāʾ being guttural doesn\'t count — the rule looks at ʿayn and lām.)' },

        { t: 'mcq', q: 'أَبَى يَأْبَى has no guttural ʿayn or lām, yet takes fatḥah in both. The book calls it…',
          choices: ['شاذّ — anomalous', 'قياسي', 'a Ṭayyiʾ dialect form', 'a mazīd verb'],
          correct: 0,
          why: 'Its hamzah is the fāʾ, which doesn\'t satisfy the condition — so it is anomalous. (يَبْقَى is the dialect-overlap case.)' },

        { t: 'mcq', q: 'Every verb with a guttural ʿayn or lām must be from bāb فَتَحَ. True?',
          choices: ['False — the throat letter is necessary, not sufficient (e.g. سَأَلَ but also أَخَذَ يَأْخُذُ)', 'True — the rule works both ways', 'True for hamzah only', 'False — bāb 3 needs no condition at all'],
          correct: 0,
          why: 'وَلَيْسَ كُلُّ مَا كَانَ حَلْقِيًّا مَفْتُوحًا فِيهِمَا — plenty of guttural verbs live in other bābs.' },

        { t: 'mcq', q: 'وَعَدَ يَعِدُ belongs to which bāb?',
          choices: ['ضَرَبَ يَضْرِبُ', 'نَصَرَ يَنْصُرُ', 'فَتَحَ يَفْتَحُ', 'حَسِبَ يَحْسِبُ'],
          correct: 0,
          why: 'Fatḥah past, kasrah present — bāb 2. (This is also the wāwī-mithāl\'s default, as tanbīh 3 confirms.)' },
      ],
    },

    /* ═══ 3. Bābs 4–6 ═══ */
    {
      id: 'abwab-4-6',
      title: 'Bābs 4–6: فرح · كرم · حسب',
      subtitle: 'معاني باب فَرِحَ · الأوصاف الخِلقية · أقل الأبواب',
      matn: { src: 'DATA_WK05', from: 21, to: 36, check: 'الْبَابُ' },
      steps: [
        { t: 'teach', title: 'Bāb 4: فَعِلَ يَفْعَلُ — the feelings bāb',
          focus: [21, 22, 23, 24, 25, 26, 28],
          points: [
            'فَرِحَ يَفْرَحُ، عَلِمَ، خَافَ يَخَافُ، رَضِيَ يَرْضَى. Its semantic fields:',
            '**Joy & its kin** (فَرِحَ، طَرِبَ، غَضِبَ، حَزِنَ) · **fullness/emptiness** (شَبِعَ، رَوِيَ، عَطِشَ، ظَمِئَ).',
            '**Colours & defects** (حَمِرَ، سَوِدَ، عَوِرَ، عَمِشَ) · **outward traits praised in ghazal** (غَيِدَ، هَيِفَ، لَمِيَ).',
          ] },

        { t: 'teach', title: 'Bāb 5: فَعُلَ يَفْعُلُ — innate traits',
          focus: [29, 30, 31, 32, 33, 34],
          points: [
            'شَرُفَ، حَسُنَ، جَرُؤَ — for **الأوصاف الخِلقية**, traits with permanence (مُكْث).',
            'Only ONE yāʾ-lām verb exists here: **هَيُؤَ**; doubled verbs are rare (شَرُرْتَ، لَبُبْتَ).',
            'Any trilateral can be *converted* into this bāb to mean the act became **like an instinct**: جَهُلَ، أَكُلَ — and it can express **taʿajjub**: ضَرُبَتْ يَدُهُ = مَا أَضْرَبَهُ!',
          ] },

        { t: 'teach', title: 'Bāb 6: فَعِلَ يَفْعِلُ — the rarest',
          focus: [35, 36],
          body: '**حَسِبَ يَحْسِبُ**، نَعِمَ يَنْعِمُ — kasrah in both. Rare in the sound verb, frequent in the weak (24 verbs).' },

        { t: 'mcq', q: 'Verbs of joy, grief, colours, defects and ghazal-traits typically come from…',
          choices: ['بَاب فَرِحَ (فَعِلَ يَفْعَلُ)', 'بَاب نَصَرَ', 'بَاب كَرُمَ', 'بَاب حَسِبَ'],
          correct: 0,
          why: 'Bāb 4 is the home of states and conditions: فَرِحَ، شَبِعَ، عَطِشَ، حَمِرَ، غَيِدَ…' },

        { t: 'mcq', q: 'What is special about the meanings of بَاب كَرُمَ (فَعُلَ)?',
          choices: ['Innate, enduring traits — and its verbs are never transitive', 'Momentary actions', 'Colours only', 'Commands'],
          correct: 0,
          why: 'الأوصاف الخلقية التي لها مُكْث — and (tanbīh 1) its verbs are exclusively lāzim.' },

        { t: 'mcq', q: 'ضَرُبَتْ يَدُهُ — moving ضَرَبَ into bāb فَعُلَ — expresses…',
          choices: ['Wonderment: "how skilful his hand!" (= مَا أَضْرَبَهُ)', 'A command to strike', 'The passive voice', 'A contract'],
          correct: 0,
          why: 'Bāb 5 can shed the action-sense (تَنْسَلِخُ عَنِ الْحَدَثِ) and carry taʿajjub.' },

        { t: 'mcq', q: 'هَيُؤَ is remarkable because…',
          choices: ['it is the ONLY yāʾ-lām verb in bāb فَعُلَ', 'it is the only doubled verb in Arabic', 'it belongs to two bābs at once', 'it has no present tense'],
          correct: 0,
          why: 'لَمْ يَرِدْ مِنْ هَذَا الْبَابِ يَائِيُّ اللَّامِ إِلَّا لَفْظَةُ هَيُؤَ — "he became of good form".' },

        { t: 'mcq', q: 'Bāb حَسِبَ يَحْسِبُ is…',
          choices: ['rare in the sound verb, frequent in the weak', 'the commonest of all bābs', 'restricted to colours', 'used only for taʿajjub'],
          correct: 0,
          why: 'قَلِيلٌ فِي الصَّحِيحِ كَثِيرٌ فِي الْمُعْتَلِّ — twenty-four weak verbs, as the coming tanbīh lists.' },

        { t: 'written',
          prompt: 'Name the six bābs of the bare trilateral with the ʿayn-vowelling of each, and one example verb per bāb.',
          model: '1. فَعَلَ يَفْعُلُ (fatḥah→ḍammah): نَصَرَ. 2. فَعَلَ يَفْعِلُ (fatḥah→kasrah): ضَرَبَ. 3. فَعَلَ يَفْعَلُ (fatḥah→fatḥah, requires guttural ʿayn/lām): فَتَحَ. 4. فَعِلَ يَفْعَلُ (kasrah→fatḥah): فَرِحَ. 5. فَعُلَ يَفْعُلُ (ḍammah→ḍammah): كَرُمَ. 6. فَعِلَ يَفْعِلُ (kasrah→kasrah): حَسِبَ.' },
      ],
    },

    /* ═══ 4. Tanbīh 1–2 ═══ */
    {
      id: 'tanbih-1-2',
      title: 'Remarks 1–2: transitivity & first defaults',
      subtitle: 'دعائم الأبواب · المهموز والمثال والمضاعف',
      matn: { src: 'DATA_WK06A', from: 2, to: 10, check: 'الْأَوَّلُ' },
      steps: [
        { t: 'teach', title: 'Remark 1 — transitivity & the pillars',
          focus: [3, 4, 5, 6, 7],
          points: [
            'All six bābs host transitive AND intransitive verbs — **except bāb 5 (فَعُلَ): only لازم**. رَحُبَتْكَ الدَّارُ is loose usage for رَحُبَتْ بِكَ.',
            'Bābs 1–3 (فَعَلَ with its three presents) = **دعائم الأبواب**, the pillars — most trilaterals live there.',
            'Frequency order: نَصَرَ ← ضَرَبَ ← فَتَحَ ← سَمِعَ ← كَرُمَ — and the least: حَسِبَ.',
          ] },

        { t: 'teach', title: 'Remark 2 — defaults for فَعَلَ',
          focus: [9, 10],
          points: [
            'فَعَلَ hamzated in the fāʾ, or a wāwī mithāl → usually **bāb ضَرَبَ**: أَسَرَ يَأْسِرُ، وَعَدَ يَعِدُ، وَزَنَ يَزِنُ. (Exceptions: أَخَذَ، أَكَلَ يأخُذ/يأكُل.)',
            'فَعَلَ doubled (مضاعف) → **bāb نَصَرَ** if transitive (مَدَّهُ يَمُدُّهُ)، **bāb ضَرَبَ** if intransitive (خَفَّ يَخِفُّ، شَذَّ يَشِذُّ).',
          ] },

        { t: 'mcq', q: 'Which bāb\'s verbs are ONLY intransitive?',
          choices: ['فَعُلَ (بَاب كَرُمَ)', 'فَعَلَ يَفْعُلُ', 'فَعِلَ يَفْعَلُ', 'فَعِلَ يَفْعِلُ'],
          correct: 0,
          why: 'Innate-trait verbs act on no object. رَحُبَتْكَ الدَّارُ only *seems* transitive — تَوَسُّع for رَحُبَتْ بِكَ.' },

        { t: 'mcq', q: 'A doubled فَعَلَ verb that is TRANSITIVE usually follows…',
          choices: ['بَاب نَصَرَ — مَدَّهُ يَمُدُّهُ', 'بَاب ضَرَبَ — خَفَّ يَخِفُّ', 'بَاب فَرِحَ', 'بَاب فَتَحَ'],
          correct: 0,
          why: 'Transitive muḍāʿaf → naṣara; intransitive → ḍaraba. The transitivity test picks the bāb.' },

        { t: 'mcq', q: 'The "pillars of the bābs" (دعائم الأبواب) are…',
          choices: ['The three bābs of فَعَلَ (naṣara, ḍaraba, fataḥa)', 'The three throat-letter bābs', 'Bābs 4–6', 'The weak-verb bābs'],
          correct: 0,
          why: 'faʿala with its three presents holds most bare trilaterals — hence "pillars".' },

        { t: 'mcq', q: 'Rank by frequency: which is MOST common and which LEAST?',
          choices: ['نَصَرَ most؛ حَسِبَ least', 'فَتَحَ most؛ كَرُمَ least', 'ضَرَبَ most؛ سَمِعَ least', 'حَسِبَ most؛ نَصَرَ least'],
          correct: 0,
          why: 'فَأَكْثَرُهَا نَصَرَ… وَأَقَلُّهَا حَسِبَ يَحْسِبُ.' },
      ],
    },

    /* ═══ 5. Tanbīh 3 ═══ */
    {
      id: 'tanbih-3',
      title: 'Remark 3: which bābs each type enters',
      subtitle: 'المضاعف والمهموز والمثال والأجوف والناقص واللفيف',
      matn: { src: 'DATA_WK06A', from: 11, to: 33, check: 'الثَّالِثُ' },
      steps: [
        { t: 'teach', title: 'Doubled & hamzated',
          focus: [13, 15, 16, 17, 19, 21],
          points: [
            '**المضاعف**: 3 bābs (نصر/ضرب/فرح) — سَرَّهُ، فَرَّ، عَضَّ. From فَعَلَ: naṣara if transitive, ḍaraba if lāzim; from فَعِلَ: like سَمِعَ.',
            '**مهموز الفاء**: 5 bābs (all but ḥasiba) — أَخَذَ، أَسَرَ، أَهَبَ، أَمِنَ، أَسُلَ. Its فَعَلَ is **سماع** — no qiyās.',
            '**مهموز العين**: 4 bābs · **مهموز اللام**: 5 bābs — and for both, فَعَلَ defaults to **bāb فَتَحَ**, because the hamzah is a throat letter in ʿayn/lām position (سَأَلَ، قَرَأَ).',
          ] },

        { t: 'teach', title: 'Mithāl, ajwaf, nāqiṣ & lafīf',
          focus: [23, 24, 25, 26, 28, 29, 31, 32, 33],
          points: [
            '**المثال**: 5 bābs; the wāwī\'s qiyās = **ضَرَبَ** (وَعَدَ يَعِدُ) — unless guttural-lām, then فَتَحَ (وَضَعَ يَضَعُ).',
            '**الأجوف**: 3 bābs (نصر/ضرب/فرح) with a condition — bāb 1 wāwī (قَالَ يَقُولُ)، bāb 2 yāʾī (بَاعَ يَبِيعُ)، bāb 3 free. طَالَ يَطُولُ alone came from شَرُفَ.',
            '**الناقص**: 5 bābs with the ajwaf\'s same condition in bābs 1–2 (دَعَا يَدْعُو، رَمَى يَرْمِي). **اللفيف المفروق**: 3 bābs (وَفَى يَفِي)؛ **المقرون**: ضرب وفرح (رَوَى، قَوِيَ) — yāʾī ʿayn+lām only in عَيِيَ وحَيِيَ.',
          ] },

        { t: 'mcq', q: 'Why does فَعَلَ hamzated in ʿayn or lām default to bāb فَتَحَ?',
          choices: ['The hamzah is a throat letter sitting as ʿayn/lām — bāb 3\'s condition', 'Hamzah always takes ḍammah', 'Because hamzah is augmentative', 'It doesn\'t — it defaults to نَصَرَ'],
          correct: 0,
          why: 'لِأَنَّ الْهَمْزَةَ حَرْفُ حَلْقٍ وَقَعَ عَيْنًا/لَامًا — e.g. سَأَلَ يَسْأَلُ، قَرَأَ يَقْرَأُ.' },

        { t: 'mcq', q: 'An ajwaf from bāb نَصَرَ must be…',
          choices: ['wāwī — like قَالَ يَقُولُ', 'yāʾī — like بَاعَ يَبِيعُ', 'either wāw or yāʾ', 'alifī'],
          correct: 0,
          why: 'Condition: bāb 1 wāwī, bāb 2 yāʾī, bāb 3 (فَرِحَ) unrestricted (خَافَ، غَيِدَ، عَوِرَ).' },

        { t: 'mcq', q: 'Which verb came from bāb شَرُفَ as a unique hollow exception?',
          choices: ['طَالَ يَطُولُ', 'قَالَ يَقُولُ', 'خَافَ يَخَافُ', 'بَاتَ يَبِيتُ'],
          correct: 0,
          why: 'وَجَاءَ طَالَ يَطُولُ فَقَطْ مِنْ بَابِ شَرُفَ — the only ajwaf of faʿula.' },

        { t: 'mcq', q: 'The wāwī mithāl\'s standard bāb is ضَرَبَ — except when…',
          choices: ['its lām is guttural, then فَتَحَ (وَضَعَ يَضَعُ)', 'it is doubled', 'its fāʾ is hamzah', 'it is transitive'],
          correct: 0,
          why: 'وَعَدَ يَعِدُ is the qiyās; a throat-letter lām pulls it to bāb 3.' },

        { t: 'mcq', q: 'The ONLY two verbs with yāʾ as both ʿayn and lām are…',
          choices: ['عَيِيَ وَحَيِيَ — from bāb فَرِحَ', 'رَوَى وَقَوِيَ', 'وَفَى وَوَلِيَ', 'طَوَى وَرَوَى'],
          correct: 0,
          why: 'لَمْ يَرِدْ يَائِيَّ الْعَيْنِ وَاللَّامِ إِلَّا فِي كَلِمَتَيْنِ مِنْ بَابِ فَرِحَ: ʿayiya and ḥayiya.' },
      ],
    },

    /* ═══ 6. Tanbīh 4–5 ═══ */
    {
      id: 'tanbih-4-5',
      title: 'Remarks 4–5: reading the weak letter · bāb ḥasiba\'s lists',
      subtitle: 'ألف وواو وياء تدلك على الباب · الثلاثة عشر والأحد عشر',
      matn: { src: 'DATA_WK06A', from: 34, to: 47, check: 'الرَّابِعُ' },
      steps: [
        { t: 'teach', title: 'Remark 4 — the weak letter names the bāb',
          focus: [35, 36, 37, 38, 40, 41, 42],
          points: [
            '**Ajwaf**: alif māḍī + wāw muḍāriʿ = نَصَرَ (قَالَ يَقُولُ، صَامَ)؛ alif + yāʾ = ضَرَبَ (بَاعَ، بَاتَ)؛ alif/yāʾ/wāw in both = فَرِحَ (خَافَ يَخَافُ، غَيِدَ، عَوِرَ).',
            '**Nāqiṣ**: alif+wāw = نَصَرَ (دَعَا يَدْعُو)؛ alif+yāʾ = ضَرَبَ (رَمَى يَرْمِي)؛ alif in both = فَتَحَ (سَعَى يَسْعَى)؛ wāw in both = شَرُفَ (سَرُوَ يَسْرُو)؛ yāʾ in both = حَسِبَ (وَلِيَ يَلِي)؛ yāʾ māḍī + alif muḍāriʿ = فَرِحَ (رَضِيَ يَرْضَى، بَقِيَ، خَشِيَ).',
          ],
          after: 'So the surface letters of a weak verb are a decoder for its bāb.' },

        { t: 'teach', title: 'Remark 5 — bāb ḥasiba\'s two memorised lists',
          focus: [44, 45, 46, 47],
          points: [
            '**Thirteen verbs** with obligatory kasrah in both tenses — all wāw-initial: وَثِقَ، وَجِدَ، وَرِثَ، وَرِعَ، وَرِكَ، وَرِمَ، وَرِيَ، وَعِقَ، وَفِقَ، وَقِهَ، وَكِمَ، وَلِيَ، وَمِقَ.',
            '**Eleven verbs** with kasrah in the past and BOTH options in the present (kasrah rare, fatḥah the qiyās): بَئِسَ، يَئِسَ، حَسِبَ، وَبِقَ، وَحِمَ، وَحِرَ، وَغِرَ، وَلِغَ، وَلِهَ، وَهِلَ، يَبِسَ.',
          ] },

        { t: 'mcq', q: 'دَعَا يَدْعُو — its bāb is…',
          choices: ['نَصَرَ — alif in the past, wāw in the present', 'ضَرَبَ', 'فَتَحَ', 'شَرُفَ'],
          correct: 0,
          why: 'Nāqiṣ decoder: alif+wāw = bāb 1. رَمَى يَرْمِي (alif+yāʾ) = bāb 2؛ سَعَى يَسْعَى = bāb 3.' },

        { t: 'mcq', q: 'رَضِيَ يَرْضَى — the yāʾ then alif pattern signals…',
          choices: ['بَاب فَرِحَ', 'بَاب حَسِبَ', 'بَاب شَرُفَ', 'بَاب نَصَرَ'],
          correct: 0,
          why: 'Yāʾ in the māḍī + alif in the muḍāriʿ = faʿila yafʿalu — like بَقِيَ يَبْقَى، خَشِيَ يَخْشَى.' },

        { t: 'mcq', q: 'What unites the THIRTEEN verbs of obligatory bāb ḥasiba?',
          choices: ['All begin with wāw (mithāl wāwī) — وَثِقَ، وَرِثَ، وَلِيَ…', 'All are doubled', 'All are hamzated', 'All denote colours'],
          correct: 0,
          why: 'The thirteen are wāw-initial verbs whose kasrah is obligatory in past and present: يَثِقُ، يَرِثُ، يَلِي…' },

        { t: 'mcq', q: 'For the ELEVEN verbs (بَئِسَ، يَئِسَ، حَسِبَ…), the present allows kasrah and fatḥah. Which is the qiyās?',
          choices: ['The fatḥah — the kasrah is rare', 'The kasrah — the fatḥah is rare', 'Both equally standard', 'Neither: ḍammah is the qiyās'],
          correct: 0,
          why: 'يَجُوزُ الْكَسْرُ (نادر) وَالْفَتْحُ (هو القياس) — so يَحْسَبُ is the standard, يَحْسِبُ the transmitted rarity.' },

        { t: 'mcq', q: 'صَامَ يَصُومُ is from which bāb?',
          choices: ['نَصَرَ', 'ضَرَبَ', 'فَرِحَ', 'شَرُفَ'],
          correct: 0,
          why: 'Ajwaf: alif in the past + wāw in the present = bāb 1, like قَالَ and عَادَ. (Only طَالَ bucks this, from شَرُفَ.)' },
      ],
    },

    /* ═══ 7. Tanbīh 6–7 ═══ */
    {
      id: 'tanbih-6-7',
      title: 'Remarks 6–7: samāʿ rules — and بَاب المغالبة',
      subtitle: 'الأبواب سماعية · غلبتُه فأنا أغلُبُه',
      matn: { src: 'DATA_WK06A', from: 49, to: 60, check: 'السَّادِسُ' },
      steps: [
        { t: 'teach', title: 'Remark 6 — bāb membership is heard, not derived',
          focus: [50, 51, 52, 53, 54],
          points: [
            'Which of the six bābs a trilateral belongs to is **سماعي** — the ḍawābiṭ above only *approximate*.',
            'For the trilateral you must observe **past AND present together**: the same present shape serves different pasts (ذَهَبَ يَذْهَبُ vs حَسِبَ يَحْسِبُ vs كَرُمَ يَكْرُمُ)، and one past serves three presents.',
            'For the **non-trilateral**, the past alone suffices — every other māḍī has ONE fixed muḍāriʿ shape.',
          ] },

        { t: 'teach', title: 'Remark 7 — بَاب المغالبة',
          focus: [56, 58, 59, 60],
          points: [
            'A verb built to express **winning a contest** (الغَلَبَة في المُفَاخَرَة) moves its present to **bāb نَصَرَ**: سَابَقَنِي زَيْدٌ فَسَبَقْتُهُ فَأَنَا أَسْبُقُهُ.',
            'Even against the verb\'s own bāb: سَبَقَ يَسْبِقُ is bāb ضَرَبَ، yet the mughālabah present is أَسْبُقُهُ؛ likewise فَاضَلْتُهُ فَفَضَلْتُهُ فَأَنَا أَفْضُلُهُ.',
          ] },

        { t: 'mcq', q: 'Why must you memorise a trilateral\'s past AND present together?',
          choices: ['The present\'s shape is not predictable from the past — bāb membership is samāʿī', 'Because the past changes with the present', 'Only the present carries meaning', 'To know if it is transitive'],
          correct: 0,
          why: 'فَعَلَ alone could be yanṣuru, yaḍribu or yaftaḥu — no rule decides; hearing does.' },

        { t: 'mcq', q: 'For non-trilateral verbs (أَكْرَمَ، دَحْرَجَ، اسْتَخْرَجَ), you memorise…',
          choices: ['the past alone — the present is fixed by the pattern', 'past and present together', 'the maṣdar', 'nothing — all are qiyāsī'],
          correct: 0,
          why: 'لِكُلِّ مَاضٍ مُضَارِعٌ لَا تَخْتَلِفُ صُورَتُهُ — akrama can only give yukrimu.' },

        { t: 'mcq', q: 'سَابَقَنِي زَيْدٌ فَسَبَقْتُهُ، فَأَنَا …ُهُ — the mughālabah present is:',
          choices: ['أَسْبُقُهُ — ḍammah, moved to bāb نَصَرَ', 'أَسْبِقُهُ — kasrah, keeping bāb ضَرَبَ', 'أَسْبَقُهُ — fatḥah', 'أُسَابِقُهُ'],
          correct: 0,
          why: 'The contest-victory sense transfers ANY verb\'s present to yafʿulu — even though سَبَقَ يَسْبِقُ is bāb ḍaraba by origin.' },

        { t: 'mcq', q: 'What is بَاب المغالبة about?',
          choices: ['Mutual contest between parties, then one prevailing over the other', 'Verbs of colours', 'The passive voice', 'Double transitivity'],
          correct: 0,
          why: 'المُفَاعَلَة بَيْنَ أَكْثَرَ مِنْ طَرَفٍ ثُمَّ غَلَبَةُ أَحَدِ الْأَطْرَافِ — "he raced me and I out-raced him".' },

        { t: 'written',
          prompt: 'Your friend claims: "Once I know a verb\'s past form, I can always derive its present." Correct him using remarks 6 and 7.',
          model: 'For the bare trilateral this fails: bāb membership is samāʿī. فَعَلَ alone may give يَفْعُلُ (نصر)، يَفْعِلُ (ضرب) or يَفْعَلُ (فتح only with a guttural); likewise فَعِلَ gives يَفْعَلُ or rarely يَفْعِلُ. Past and present must be memorised together. Only in the NON-trilateral is the present fixed by the pattern (أَكْرَمَ ← يُكْرِمُ). And even a known bāb can shift: in the mughālabah sense every present moves to bāb نَصَرَ (سَبَقْتُهُ فَأَنَا أَسْبُقُهُ).' },
      ],
    },

  ],
});

/* ═════════ Course: quadriliteral, augmented patterns & ilḥāq ═════════ */
window.DARAM_COURSES.push({
  id: 'sarf-fil-3b',
  titleAr: 'التَّقْسِيمُ الثَّالِثُ: الرُّبَاعِيُّ وَالْمَزِيدُ وَالْمُلْحَقُ',
  titleEn: 'The Verb III: Augmented Patterns',
  pages: 'Wk 6b–7',
  sections: [

    /* ═══ 1. The bare quadriliteral & naḥt ═══ */
    {
      id: 'rubai',
      title: 'The bare quadriliteral & carved verbs',
      subtitle: 'فَعْلَلَ · المضاعف · النحت',
      matn: { src: 'DATA_WK06B', from: 1, to: 5, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'One pattern only: فَعْلَلَ',
          focus: [2, 3],
          points: [
            'The bare quadriliteral has a single wazn — **فَعْلَلَ يُفَعْلِلُ**: دَحْرَجَ، بَعْثَرَ.',
            'Of it is the **reduplicated** quadriliteral: زَلْزَلَ، عَسْعَسَ، حَصْحَصَ.',
          ] },

        { t: 'teach', title: 'النحت — verbs carved from phrases',
          focus: [4, 5],
          points: [
            'The Arabs carved verbs out of whole phrases — memorised, never analogised: **بَسْمَلَ** (بسم الله)، **حَوْقَلَ** (لا حول ولا قوة إلا بالله)، **حَمْدَلَ** (الحمد لله).',
            'Also: طَلْبَقَ (أطال الله بقاءك)، دَمْعَزَ (أدام الله عزك)، جَعْفَلَ، سَبْحَلَ، هَلَّلَ، سَمْعَلَ.',
          ] },

        { t: 'mcq', q: 'How many patterns does the BARE quadriliteral have?',
          choices: ['One — فَعْلَلَ', 'Three', 'Six', 'Twelve'],
          correct: 0,
          why: 'وَلِلرُّبَاعِيِّ الْمُجَرَّدِ وَزْنٌ وَاحِدٌ. (Six bābs is the trilateral; twelve is the augmented trilateral.)' },

        { t: 'mcq', q: 'حَوْقَلَ is carved (naḥt) from…',
          choices: ['لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ', 'الْحَمْدُ لِلهِ', 'سُبْحَانَ اللهِ', 'أَطَالَ اللهُ بَقَاءَكَ'],
          correct: 0,
          why: 'ḥawqala = "he said lā ḥawla wa-lā quwwata illā bi-llāh". ḥamdala is the ḥamd; sabḥala the tasbīḥ; ṭalbaqa the long-life prayer.' },

        { t: 'mcq', q: 'Can you coin a new naḥt verb by analogy — say from a modern phrase?',
          choices: ['No — carved verbs are memorised, لَا يُقَاسُ عَلَيْهَا', 'Yes — naḥt is fully productive', 'Only in poetry', 'Only for religious formulas'],
          correct: 0,
          why: 'فَتُحْفَظُ وَلَا يُقَاسُ عَلَيْهَا — the list is closed transmission.' },
      ],
    },

    /* ═══ 2. The seven mulḥaqāt & ilḥāq ═══ */
    {
      id: 'mulhaq',
      title: 'Ilḥāq — the seven attached forms',
      subtitle: 'جَلْبَبَ · جَوْرَبَ · بَيْطَرَ … فائدة لفظية لا معنوية',
      matn: { src: 'DATA_WK06B', from: 6, to: 18, check: 'وَمُلْحَقَاتُهُ' },
      steps: [
        { t: 'teach', title: 'Seven trilaterals dressed as quadriliterals',
          focus: [6, 7, 9, 10, 11, 12, 14, 15],
          points: [
            '**فَعْلَلَ** جَلْبَبَ (root جلب + extra bāʾ) · **فَوْعَلَ** جَوْرَبَ · **فَعْوَلَ** رَهْوَكَ.',
            '**فَيْعَلَ** بَيْطَرَ، شَيْطَنَ · **فَعْيَلَ** شَرْيَفَ · **فَعْلَى** سَلْقَى (= صَرَعَهُ على ظهره، متعدٍّ!) · **فَعْنَلَ** قَلْنَسَ.',
          ] },

        { t: 'teach', title: 'What ilḥāq IS',
          focus: [16, 17, 18],
          points: [
            '**الإلحاق**: adding to a form so it *joins* a larger form and **conjugates exactly like it**: جَلْبَبَ يُجَلْبِبُ جَلْبَبَةً مِثْلَ دَحْرَجَ يُدَحْرِجُ دَحْرَجَةً.',
            'The mulḥaq differs from the mazīd: its added letter is **لفظية لا معنوية** — phonetic dress, no new meaning.',
          ],
          after: 'Mazīd\'s ziyādah buys meaning; mulḥaq\'s ziyādah buys a conjugation template.' },

        { t: 'mcq', q: 'The added letter in جَلْبَبَ serves to…',
          choices: ['attach the trilateral جلب to فَعْلَلَ so it conjugates like دَحْرَجَ', 'add a causative meaning', 'mark the passive', 'show emphasis'],
          correct: 0,
          why: 'Ilḥāq: زِدْنَا بَاءً أُخْرَى… كَيْ يَتَصَرَّفَ مِثْلَهُ — benefit is lafẓī, not maʿnawī.' },

        { t: 'mcq', q: 'How does the mulḥaq differ from the mazīd?',
          choices: ['Mulḥaq\'s addition is phonetic (no new meaning); mazīd\'s addition carries meaning', 'Mulḥaq has more letters', 'Mazīd cannot be conjugated', 'They are identical'],
          correct: 0,
          why: 'الْمُلْحَقَ فَائِدَتُهُ لَفْظِيَّةٌ لَا مَعْنَوِيَّةٌ، فَلَا يَكُونُ لِمَعْنًى جَدِيدٍ كَالْمَزِيدِ.' },

        { t: 'mcq', q: 'بَيْطَرَ ("he treated animals") is on which mulḥaq pattern?',
          choices: ['فَيْعَلَ', 'فَوْعَلَ', 'فَعْوَلَ', 'فَعْنَلَ'],
          correct: 0,
          why: 'b-ṭ-r + added yāʾ after the fāʾ = fayʿala — like شَيْطَنَ. jawraba is fawʿala; qalnasa is faʿnala.' },

        { t: 'mcq', q: 'The book corrects a common gloss of سَلْقَى: it actually means…',
          choices: ['he threw someone down on his back — transitive, unlike اسْتَلْقَى', 'he lay on his own back', 'he hastened', 'he wore a cap'],
          correct: 0,
          why: 'مَعْنَى سَلْقَاهُ صَرَعَهُ وَأَلْقَاهُ عَلَى ظَهْرِهِ — a mutaʿaddin, whereas istalqā is lāzim.' },
      ],
    },

    /* ═══ 3. Augmented trilateral — one added letter ═══ */
    {
      id: 'mazid-1',
      title: 'Augmented trilateral I: the 12-pattern map & +1 letter',
      subtitle: 'أَفْعَلَ · فَاعَلَ · فَعَّلَ — وغاية الفعل ستة أحرف',
      matn: { src: 'DATA_WK07', from: 1, to: 10, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'The map: 3 + 5 + 4 = 12',
          focus: [2, 3, 4],
          points: [
            'Augmented by **one** letter: 3 patterns · by **two**: 5 · by **three**: 4 — **12 abniyah** in all (see the grid above).',
          ] },

        { t: 'teach', title: 'Why the verb stops at six letters',
          focus: [5, 6],
          points: [
            'With augmentation the verb peaks at **6 letters** (اسْتَخْرَجَ); the noun reaches **7** (اسْتِخْرَاج).',
            'Reason: the verb is *heavy* — it denotes **two** things (الحدث وزمانه); the noun is *light*, denoting its referent only.',
          ] },

        { t: 'teach', title: 'The three +1 patterns',
          focus: [7, 8, 9, 10],
          points: [
            '**أَفْعَلَ**: أَكْرَمَ، أَعْطَى، أَقَامَ، آمَنَ، أَقَرَّ.',
            '**فَاعَلَ**: قَاتَلَ، آخَذَ، وَالَى.',
            '**فَعَّلَ** (doubled ʿayn): فَرَّحَ، زَكَّى، وَلَّى، بَرَّأَ.',
          ] },

        { t: 'mcq', q: 'Maximum letters a VERB can reach by augmentation?',
          choices: ['Six — like اسْتَخْرَجَ', 'Seven — like اسْتِخْرَاج', 'Five', 'Four'],
          correct: 0,
          why: 'The verb already carries ḥadath + time (heavy), so it stops at 6; the light noun may reach 7.' },

        { t: 'mcq', q: 'How many augmented-trilateral patterns exist in total?',
          choices: ['Twelve: 3 (+1 letter) + 5 (+2) + 4 (+3)', 'Six', 'Nine', 'Fifteen'],
          correct: 0,
          why: 'عَرَفْنَا أَنَّ لَهُ ١٢ بِنَاءً وَوَزْنًا — the grid\'s three columns.' },

        { t: 'mcq', q: 'آمَنَ and أَقَرَّ belong to which +1 pattern?',
          choices: ['أَفْعَلَ', 'فَاعَلَ', 'فَعَّلَ', 'انْفَعَلَ'],
          correct: 0,
          why: 'āmana = ʾa + ʾ-m-n (the two hamzahs fuse to ā); aqarra = ʾa + q-r-r. Both are afʿala.' },

        { t: 'mcq', q: 'زَكَّى is augmented by which letter?',
          choices: ['A repeat of its ʿayn (فَعَّلَ, doubling)', 'A prefixed hamzah', 'A prefixed tāʾ', 'An infixed alif'],
          correct: 0,
          why: 'z-k-w → zakkā: the doubled ʿayn is the single added element — faʿʿala, like فَرَّحَ.' },
      ],
    },

    /* ═══ 4. Augmented trilateral — two & three letters ═══ */
    {
      id: 'mazid-2-3',
      title: 'Augmented trilateral II: +2 and +3 letters',
      subtitle: 'انفعل · افتعل · افعلّ · تفعّل · تفاعل — استفعل · افعوعل · افعالّ · افعوّل',
      matn: { src: 'DATA_WK07', from: 11, to: 24, check: 'وَالَّذِي' },
      steps: [
        { t: 'teach', title: 'Five patterns with two added letters',
          focus: [11, 12, 14, 15, 16],
          points: [
            '**انْفَعَلَ**: انْكَسَرَ، انْشَقَّ، انْمَحَى · **افْتَعَلَ**: اجْتَمَعَ، ادَّعَى، اتَّقَى، اصْطَبَرَ، اضْطَرَبَ.',
            '**افْعَلَّ**: احْمَرَّ، اصْفَرَّ، اعْوَرَّ — mostly for **colours & defects**; rare elsewhere (ارْفَضَّ عَرَقًا، اخْضَلَّ الرَّوْضُ).',
          ] },

        { t: 'teach', title: 'تَفَعَّلَ and تَفَاعَلَ — and their idghām',
          focus: [17, 18, 19],
          points: [
            '**تَفَعَّلَ**: تَعَلَّمَ، تَزَكَّى. When the tāʾ meets a near-articulated letter it assimilates: تَذَكَّرَ ← **اذَّكَّرَ**؛ تَطَهَّرَ ← **اطَّهَّرَ**.',
            '**تَفَاعَلَ**: تَبَاعَدَ، تَشَاوَرَ، تَبَارَكَ، تَعَالَى — with the same idghām: اثَّاقَلَ، ادَّارَكَ.',
          ] },

        { t: 'teach', title: 'Four patterns with three added letters',
          focus: [20, 21, 22, 23, 24],
          points: [
            '**اسْتَفْعَلَ**: اسْتَخْرَجَ، اسْتَقَامَ.',
            '**افْعَوْعَلَ**: اغْدَوْدَنَ الشَّعْرُ، اعْشَوْشَبَ الْمَكَانُ · **افْعَالَّ**: احْمَارَّ، اشْهَابَّ — the colour *intensified*.',
            '**افْعَوَّلَ**: اجْلَوَّذَ (hastened)، اعْلَوَّطَ.',
          ] },

        { t: 'mcq', q: 'The pattern افْعَلَّ (احْمَرَّ، اعْوَرَّ) is mostly used for…',
          choices: ['colours and defects', 'contracts', 'motion verbs', 'requests'],
          correct: 0,
          why: 'غَالِبًا فِي الْأَلْوَانِ وَالْعُيُوبِ — rare outside them (ارْفَضَّ، اخْضَلَّ).' },

        { t: 'mcq', q: 'اذَّكَّرَ comes from تَذَكَّرَ by…',
          choices: ['assimilating the tāʾ into the dhāl — close in articulation point', 'dropping the dhāl', 'adding a nūn', 'metathesis'],
          correct: 0,
          why: 'لِقُرْبِ التَّاءِ وَالذَّالِ فِي الْمَخْرَجِ أُدْغِمَتِ التَّاءُ فِي الذَّالِ — same story in اطَّهَّرَ، اثَّاقَلَ، ادَّارَكَ.' },

        { t: 'mcq', q: 'What extra nuance does احْمَارَّ (افْعَالَّ) add over احْمَرَّ?',
          choices: ['Intensification — the redness strengthens', 'Negation', 'Reciprocity', 'Pretence'],
          correct: 0,
          why: 'يَتَقَوَّى حُمْرَتُهُ — ifʿālla is ifʿalla with the colour dialled up.' },

        { t: 'mcq', q: 'Sort into the right pattern: اصْطَبَرَ.',
          choices: ['افْتَعَلَ — with the pattern-tāʾ turned ṭāʾ after ṣād', 'اسْتَفْعَلَ', 'انْفَعَلَ', 'تَفَعَّلَ'],
          correct: 0,
          why: 'ṣ-b-r + iftiʿāl; the tāʾ becomes ṭāʾ next to ṣād (as in اضْطَرَبَ) — the wk02 special case returning.' },

        { t: 'mcq', q: 'اعْشَوْشَبَ الْمَكَانُ is on which pattern?',
          choices: ['افْعَوْعَلَ', 'افْعَوَّلَ', 'افْعَالَّ', 'اسْتَفْعَلَ'],
          correct: 0,
          why: 'ʿ-sh-b with hamzah + repeated ʿayn-slot + wāw: ifʿawʿala, like اغْدَوْدَنَ.' },
      ],
    },

    /* ═══ 5. Augmented quadriliteral & its mulḥaq ═══ */
    {
      id: 'rubai-mazid',
      title: 'The augmented quadriliteral & its attached forms',
      subtitle: 'تَفَعْلَلَ · افْعَنْلَلَ · افْعَلَلَّ — واحرنجم مقابل اقعنسس',
      matn: { src: 'DATA_WK07', from: 25, to: 36, check: 'أَوْزَانُ' },
      steps: [
        { t: 'teach', title: 'Three genuine patterns',
          focus: [26, 27, 28, 29, 30],
          points: [
            '+1 letter, one wazn: **تَفَعْلَلَ** — تَدَحْرَجَ، تَزَلْزَلَ.',
            '+2 letters, two wazns: **افْعَنْلَلَ** (احْرَنْجَمَ = اجتمع) and **افْعَلَلَّ** (اقْشَعَرَّ، اطْمَأَنَّ) — hamzat waṣl + doubled second lām.',
          ] },

        { t: 'teach', title: 'The attached forms — and the giveaway test',
          focus: [32, 33, 34, 36],
          points: [
            'Mulḥaq to تَفَعْلَلَ = the seven wk-6b forms with a prefixed tāʾ: تَجَلْبَبَ، تَرَهْوَكَ، تَشَيْطَنَ، تَجَوْرَبَ، تَمَسْكَنَ، تَقَلْسَى.',
            'Mulḥaq +2: **افْعَنْلَلَ** كاقْعَنْسَسَ and **افْعَنْلَى** كاسْلَنْقَى.',
            '**احْرَنْجَمَ vs اقْعَنْسَسَ**: same surface — but iḥranjama\'s two lāms are both radical (root حرجم), while iqʿansasa\'s second sīn is added لِلْإِلْحَاق. Same as بَعْثَرَ vs جَلْبَبَ.',
          ] },

        { t: 'mcq', q: 'تَدَحْرَجَ is…',
          choices: ['the quadriliteral augmented by one letter (تَفَعْلَلَ)', 'a mulḥaq trilateral', 'a bare quinqueliteral', 'iftaʿala of دحرج'],
          correct: 0,
          why: 'daḥraja (genuine 4-radical) + prefixed tāʾ — the single +1 wazn.' },

        { t: 'mcq', q: 'How do تَجَلْبَبَ and تَدَحْرَجَ differ beneath the identical surface?',
          choices: ['تَجَلْبَبَ is a trilateral attached to the pattern; تَدَحْرَجَ has four true radicals', 'They don\'t differ', 'تَدَحْرَجَ is mulḥaq', 'تَجَلْبَبَ has five radicals'],
          correct: 0,
          why: 'jalbaba was already mulḥaq (root جلب); prefixing tāʾ keeps it attached. daḥraja\'s four letters are all radical.' },

        { t: 'mcq', q: 'اطْمَأَنَّ follows which pattern?',
          choices: ['افْعَلَلَّ — hamzat waṣl + doubling of the second lām', 'افْعَنْلَلَ', 'تَفَعْلَلَ', 'اسْتَفْعَلَ'],
          correct: 0,
          why: 'ṭ-m-ʾ-n → iṭmaʾanna, like اقْشَعَرَّ from ق ش ع ر.' },

        { t: 'mcq', q: 'The proof that اقْعَنْسَسَ is mulḥaq (not a real quadriliteral like احْرَنْجَمَ) is…',
          choices: ['one of its two final sīns is added purely for ilḥāq', 'it starts with hamzat waṣl', 'it has a nūn', 'it is intransitive'],
          correct: 0,
          why: 'iḥranjama: both lāms radical (حرجم). iqʿansasa: root قعس — the doubled sīn is the ilḥāq letter.' },
      ],
    },

    /* ═══ 6. The two closing remarks ═══ */
    {
      id: 'tanbihan',
      title: 'Two closing remarks',
      subtitle: '٣٧ بابًا · المدار على السماع — إلا الهمزة للتعدية',
      matn: { src: 'DATA_WK07', from: 37, to: 40, check: 'تَنْبِيهَانِ' },
      steps: [
        { t: 'teach', title: 'The grand tally',
          focus: [38],
          points: [
            'By **letter-count** (radical + added) the verb is four kinds: ثلاثي، رباعي، خماسي، سداسي.',
            'By **configuration** (vowels & sukūns) the whole verb system yields **37 bābs**.',
          ] },

        { t: 'teach', title: 'Samāʿ rules ilḥāq too — with ONE productive exception',
          focus: [39, 40],
          points: [
            'Not every mujarrad has a mazīd in use, nor every mazīd a mujarrad: **افْتَقَرَ** exists with no فَقَرَ. المَدَارُ عَلَى السَّمَاع.',
            'Exception: the intransitive trilateral **regularly** takes the hamzah of أَفْعَلَ **للتعدية**: ذَهَبَ ← أَذْهَبَ، خَرَجَ ← أَخْرَجَ.',
          ] },

        { t: 'mcq', q: 'How many bābs does the verb system total, counting by configuration?',
          choices: ['37', '12', '6', '19'],
          correct: 0,
          why: 'بِاعْتِبَارِ هَيْئَتِهِ… سَبْعَةٌ وَثَلَاثُونَ بَابًا — 6 bare trilateral + 1 quadriliteral + 12 + augmented quadriliteral + mulḥaqāt…' },

        { t: 'mcq', q: 'افْتَقَرَ ("to become poor") illustrates that…',
          choices: ['a mazīd may exist with NO bare verb in use — usage is samāʿ', 'every mazīd has a mujarrad', 'iftaʿala always lacks a base', 'it is a naḥt verb'],
          correct: 0,
          why: 'وَلَيْسَ لَهُ فَقَرَ — the augmented form was heard; the bare one never was.' },

        { t: 'mcq', q: 'The ONE regular (qiyāsī) augmentation the book allows is…',
          choices: ['hamzah on an intransitive trilateral to make it transitive: خَرَجَ ← أَخْرَجَ', 'doubling any ʿayn for emphasis', 'prefixing tāʾ to any verb', 'infixing wāw for colours'],
          correct: 0,
          why: 'يُسْتَثْنَى الثُّلَاثِيُّ اللَّازِمُ فَتَطَّرِدُ زِيَادَةُ الْهَمْزَةِ لِلتَّعْدِيَةِ.' },

        { t: 'written',
          prompt: 'List the twelve patterns of the augmented trilateral, grouped by how many letters are added.',
          model: '+1 (three): أَفْعَلَ، فَاعَلَ، فَعَّلَ.\n+2 (five): انْفَعَلَ، افْتَعَلَ، افْعَلَّ، تَفَعَّلَ، تَفَاعَلَ.\n+3 (four): اسْتَفْعَلَ، افْعَوْعَلَ، افْعَالَّ، افْعَوَّلَ.' },
      ],
    },

  ],
});
