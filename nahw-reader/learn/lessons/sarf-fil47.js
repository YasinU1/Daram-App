/* ── Daram Learn — Shadhā al-ʿArf · التقسيمات ٤–٧ للفعل (Worksheets 13–16) ──
   Jāmid/mutaṣarrif & deriving forms; taʿaddī/luzūm with the 8+5 causes;
   maʿlūm/majhūl and passive formation; tawkīd with the nūn and the six states.
   Authored from books/shadha-arf/wk13–wk16.                                   */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'sarf-fil-4-7',
  titleAr: 'التَّقْسِيمَاتُ ٤–٧ لِلْفِعْلِ',
  titleEn: 'The Verb IV: Divisions 4–7',
  pages: 'Wk 13–16',
  sections: [

    /* ═══ 1. Frozen vs conjugable ═══ */
    {
      id: 'jumud',
      title: 'Frozen vs conjugable (جامد ومتصرف)',
      subtitle: 'ليس · عسى · نِعم · هبْ — وتام التصرف وناقصه',
      matn: { src: 'DATA_WK13', from: 1, to: 13, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'The jāmid — one frozen shape',
          focus: [3, 4, 5, 6, 7, 9],
          points: [
            '**Past-bound** (no present, no imperative): لَيْسَ؛ كَرَبَ (approach)؛ عَسَى، حَرَى، اخْلَوْلَقَ (hope)؛ أَنْشَأَ، طَفِقَ، أَخَذَ، جَعَلَ، عَلِقَ (beginning)؛ نِعْمَ، حَبَّذَا / بِئْسَ، سَاءَ (praise/blame)؛ خَلَا، عَدَا، حَاشَا (exception).',
            'Khilāf: some count خلا/عدا/حاشا as **particles**; the Kūfans count نِعْمَ وبِئْسَ as **nouns**.',
            '**Imperative-bound**: هَبْ (= ظُنَّ) and تَعَلَّمْ (= اعْلَمْ) — وَلَا ثَالِثَ لَهُمَا.',
          ] },

        { t: 'teach', title: 'The mutaṣarrif',
          focus: [11, 12, 13],
          points: [
            '**تام التصرف** — past, present AND imperative: نَصَرَ، دَحْرَجَ — most verbs.',
            '**ناقص التصرف** — past & present only: زَالَ يَزَالُ، بَرِحَ، فَتِئَ، انْفَكَّ (continuance = بَقِيَ)، and كَادَ يَكَادُ، أَوْشَكَ يُوشِكُ.',
          ] },

        { t: 'mcq', q: 'A جامد verb is one that…',
          choices: ['keeps to a single form — no conjugation', 'has no meaning', 'is always transitive', 'is borrowed'],
          correct: 0,
          why: 'مَا لَازَمَ صُورَةً وَاحِدَةً — frozen either in the past (ليس، عسى) or the imperative (هبْ).' },

        { t: 'mcq', q: 'The ONLY two imperative-bound jāmid verbs are…',
          choices: ['هَبْ and تَعَلَّمْ', 'صَهْ and آمِينَ', 'نِعْمَ and بِئْسَ', 'خَلَا and عَدَا'],
          correct: 0,
          why: 'hab (= suppose!) and taʿallam (= know!) — وَلَا ثَالِثَ لَهُمَا. (ṣah/āmīn are asmāʾ afʿāl, not verbs.)' },

        { t: 'mcq', q: 'زَالَ يَزَالُ is classified as…',
          choices: ['ناقص التصرف — past and present, no imperative', 'jāmid', 'tāmm at-taṣarruf', 'ism fiʿl'],
          correct: 0,
          why: 'The continuance verbs (زال، برح، فتئ، انفكّ = بقي) and كاد/أوشك conjugate but never command.' },

        { t: 'mcq', q: 'Who treats نِعْمَ and بِئْسَ as NOUNS?',
          choices: ['The Kūfans', 'Sībawayh', 'al-Ḥamlāwī', 'Everyone'],
          correct: 0,
          why: 'وَيَعُدُّ الْكُوفِيُّونَ نِعْمَ وَبِئْسَ اسْمَيْنِ — while some treat خلا/عدا/حاشا as particles.' },
      ],
    },

    /* ═══ 2. Deriving one form from another ═══ */
    {
      id: 'tasrif',
      title: 'Deriving المضارع and الأمر',
      subtitle: 'فصل في تصريف الأفعال بعضها من بعض',
      matn: { src: 'DATA_WK13', from: 14, to: 22, check: 'فَصْلٌ' },
      steps: [
        { t: 'teach', title: 'Māḍī → muḍāriʿ',
          focus: [15, 16, 17, 18],
          points: [
            'Prefix one of أَنَيْتُ — **ḍammah** on it in the quadriliteral (يُدَحْرِجُ)، **fatḥah** elsewhere (يَكْتُبُ، يَنْطَلِقُ، يَسْتَغْفِرُ).',
            'Trilateral: sukūn the fāʾ, vowel the ʿayn **as the language attests** (يَنْصُرُ يَضْرِبُ يَفْتَحُ).',
            'Non-trilateral: keep as-is if it starts with an added tāʾ (يَتَعَلَّمُ)؛ otherwise kasrah before the last (يُعَظِّمُ، يُقَاتِلُ)؛ drop an added initial hamzah (أَكْرَمَ ← يُكْرِمُ، اسْتَخْرَجَ ← يَسْتَخْرِجُ).',
          ] },

        { t: 'teach', title: 'Muḍāriʿ → amr',
          focus: [19, 20, 22],
          points: [
            'Drop the present-prefix: عَظِّمْ، تَشَارَكْ، تَعَلَّمْ.',
            'If what remains starts with a sukūn, prepend a hamzah: انْصُرْ، اضْرِبْ، أَكْرِمْ، اسْتَغْفِرْ.',
          ] },

        { t: 'mcq', q: 'The present-prefix takes ḍammah only in…',
          choices: ['the four-letter verb: يُدَحْرِجُ، يُكْرِمُ، يُقَاتِلُ', 'the trilateral', 'hollow verbs', 'never'],
          correct: 0,
          why: 'مَضْمُومًا فِي الرُّبَاعِيِّ (counting letters: أكرم/قاتل/دحرج are 4) — fatḥah elsewhere.' },

        { t: 'mcq', q: 'Why does أَكْرَمَ give يُكْرِمُ and not يُؤَكْرِمُ?',
          choices: ['The added initial hamzah is deleted when the prefix joins', 'The kāf swallows it', 'It is irregular', 'The hamzah becomes wāw'],
          correct: 0,
          why: 'حُذِفَتِ الْهَمْزَةُ الزَّائِدَةُ فِي أَوَّلِهِ — same for استخرج ← يستخرج.' },

        { t: 'mcq', q: 'Form the amr of يَتَعَلَّمُ and of يَنْصُرُ.',
          choices: ['تَعَلَّمْ and انْصُرْ', 'اتَعَلَّمْ and نْصُرْ', 'تَعَلَّمَنَّ and نَاصِرْ', 'عَلِّمْ and نَصْرًا'],
          correct: 0,
          why: 'Drop the prefix; ta-ʿallam starts vowelled so no hamzah; n-ṣur starts sākin so hamzat waṣl is added.' },

        { t: 'mcq', q: 'When deriving يُعَظِّمُ from عَظَّمَ, what happens before the last letter?',
          choices: ['It takes kasrah — the rule for non-trilaterals not starting with tāʾ', 'It takes fatḥah always', 'It is elided', 'Nothing changes'],
          correct: 0,
          why: 'وَإِلَّا كُسِرَ مَا قَبْلَ آخِرِهِ — يُعَظِّمُ، يُقَاتِلُ. (After an added tāʾ it stays: يَتَشَارَكُ.)' },
      ],
    },

    /* ═══ 3. Transitive & intransitive ═══ */
    {
      id: 'taaddi',
      title: 'Transitive & intransitive (متعدٍّ ولازم)',
      subtitle: 'المجاوز والقاصر · أفعال القلوب والتصيير · باب أعطى وأعلم',
      matn: { src: 'DATA_WK14', from: 1, to: 18, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Definition & the two signs',
          focus: [1, 2, 3, 4, 5, 6, 7],
          points: [
            '**المتعدي** (المجاوز): crosses from agent to object *by itself* — حَفِظَ مُحَمَّدٌ الدَّرْسَ. **اللازم** (القاصر): stays with its agent — قَعَدَ، خَرَجَ.',
            'Sign 1: takes a **هاء** referring to other than the maṣdar — زَيْدٌ ضَرَبَهُ عَمْرٌو. (A maṣdar-hāʾ attaches to both kinds: الْفَرَحُ فَرِحَهُ زَيْدٌ — that hāʾ is مفعول مطلق.)',
            'Sign 2: forms a **complete** ism mafʿūl — مَضْرُوب, needing no jarr-particle or ẓarf.',
          ] },

        { t: 'teach', title: 'The three transitive classes',
          focus: [8, 9, 10, 11, 12, 14, 15, 16],
          points: [
            '**One object** — plentiful: حَفِظَ الدَّرْسَ.',
            '**Two objects**: (a) origin = mubtadaʾ + khabar — **ظنّ وأخواتها**: أفعال القلوب (ظَنَّ حَسِبَ خَالَ زَعَمَ عَلِمَ رَأَى وَجَدَ دَرَى) and **التصيير** (جَعَلَ صَيَّرَ اتَّخَذَ رَدَّ تَرَكَ — جَعَلْتُ التُّرَابَ ذَهَبًا)؛ (b) not so — **أَعْطَى وأخواتها**: أَعْطَى زَيْدٌ عَمْرًا دِرْهَمًا.',
            '**Three objects**: بَابُ أَعْلَمَ وَأَرَى — ﴿كَذَلِكَ يُرِيهِمُ اللهُ أَعْمَالَهُمْ حَسَرَاتٍ عَلَيْهِمْ﴾.',
          ] },

        { t: 'mcq', q: 'In الْفَرَحُ فَرِحَهُ زَيْدٌ, does the hāʾ prove فَرِحَ transitive?',
          choices: ['No — it refers to the maṣdar, so it is a mafʿūl muṭlaq, not an object', 'Yes — any hāʾ proves transitivity', 'Yes — فرح is transitive', 'No — the hāʾ is a subject'],
          correct: 0,
          why: 'The sign requires a hāʾ referring to **other than** the maṣdar; the maṣdar-hāʾ attaches even to lāzim verbs.' },

        { t: 'mcq', q: 'What distinguishes ظنّ\'s two objects from أعطى\'s two?',
          choices: ['ظنّ\'s objects originate as mubtadaʾ + khabar; أعطى\'s do not', 'أعطى takes three', 'ظنّ is intransitive', 'No difference'],
          correct: 0,
          why: 'ظَنَّ الطَّالِبُ الدَّرْسَ سَهْلًا ← الدرسُ سهلٌ. But أَعْطَى زَيْدٌ عَمْرًا دِرْهَمًا — "ʿAmr is a dirham" is nonsense.' },

        { t: 'mcq', q: 'جَعَلْتُ التُّرَابَ ذَهَبًا uses جعل as…',
          choices: ['a taṣyīr verb — transforming the object from state to state', 'a qulūb verb of certainty', 'a shurūʿ verb', 'a jāmid verb'],
          correct: 0,
          why: 'أفعال التصيير: جعل، صيّر، اتخذ، ردّ، ترك — two objects with transformation.' },

        { t: 'mcq', q: 'Which Qurʾānic witness shows THREE objects?',
          choices: ['﴿كَذَلِكَ يُرِيهِمُ اللهُ أَعْمَالَهُمْ حَسَرَاتٍ﴾', '﴿قَدْ أَفْلَحَ مَنْ تَزَكَّى﴾', '﴿اقْتَرَبَتِ السَّاعَةُ﴾', '﴿لَمْ يَلِدْ﴾'],
          correct: 0,
          why: 'yurī-him (1) aʿmālahum (2) ḥasarātin (3) — bāb أَعْلَمَ وَأَرَى.' },

        { t: 'mcq', q: 'The complete ism-mafʿūl test: which verb PASSES?',
          choices: ['ضَرَبَ — you can say مَضْرُوب with no preposition', 'ذَهَبَ — مَذْهُوب needs بِهِ', 'جَلَسَ — مَجْلُوس needs فيه', 'قَعَدَ'],
          correct: 0,
          why: 'A lāzim verb\'s passive participle stays incomplete (مذهوب *به*) — the mutaʿaddī\'s stands alone.' },
      ],
    },

    /* ═══ 4. The 8 + 5 causes ═══ */
    {
      id: 'asbab',
      title: 'Making lāzim transitive — and the reverse',
      subtitle: 'الأسباب الثمانية · التضمين · نزع الخافض · وأسباب اللزوم الخمسة',
      matn: { src: 'DATA_WK14', from: 19, to: 34, check: 'أَسْبَابُ' },
      steps: [
        { t: 'teach', title: 'Eight causes of taʿdiyah',
          focus: [20, 21, 22, 23, 25, 26, 27],
          points: [
            '1 **الهمزة** أَكْرَمَ · 2 **التضعيف** فَرَّحْتُ · 3 **ألف المفاعلة** جَالَسَ الْعُلَمَاءَ · 4 **زيادة حرف جر** ذَهَبْتُ بِعَلِيٍّ · 5 **همزة+سين+تاء** اسْتَخْرَجَ الْمَالَ.',
            '6 **التضمين النحوي** — imbue a lāzim with a transitive\'s meaning: ﴿وَلَا تَعْزِمُوا عُقْدَةَ النِّكَاحِ﴾ (ʿazama ← nawā)؛ رَحُبَتْكُمُ الطَّاعَةُ (= وَسِعَتْكُمْ).',
            '7 **حذف حرف الجر** — النصب بنزع الخافض: تَمُرُّونَ الدِّيَارَ (= بِالدِّيَارِ)؛ regular with أَنَّ/أَنْ: ﴿شَهِدَ اللهُ أَنَّهُ﴾ = بِأَنَّهُ. 8 **تحويل إلى نصر للمغالبة**. — And in truth taʿdiyah is **سماعية**: a verb heard with one particle may not take another.',
          ] },

        { t: 'teach', title: 'Five causes of luzūm',
          focus: [28, 29, 30, 31, 32, 33, 34],
          points: [
            '1 **التضمين** the reverse way: ﴿يُخَالِفُونَ عَنْ أَمْرِهِ﴾ — khālafa imbued with yakhruju\'s meaning.',
            '2 Transfer to **فَعُلَ** for taʿajjub: ضَرُبَ زَيْدٌ = مَا أَضْرَبَهُ · 3 becoming **مطاوعًا**: كَسَرْتُهُ فَانْكَسَرَ.',
            '4 **ضعف العامل بتأخيره**: ﴿إِنْ كُنْتُمْ لِلرُّؤْيَا تَعْبُرُونَ﴾ — the postponed verb needs the lām · 5 **الضرورة الشعرية**.',
          ] },

        { t: 'mcq', q: 'In ﴿وَلَا تَعْزِمُوا عُقْدَةَ النِّكَاحِ﴾, how does the lāzim-with-ʿalā verb govern a direct object?',
          choices: ['Taḍmīn — it is imbued with the meaning of تَنْوُوا, so governs like it', 'The ʿuqdah is a maṣdar', 'A preposition was added', 'It is poetic necessity'],
          correct: 0,
          why: 'التضمين النحوي: أَنْ تُشْرَبَ كَلِمَةٌ لَازِمَةٌ مَعْنَى كَلِمَةٍ مُتَعَدِّيَةٍ.' },

        { t: 'mcq', q: 'تَمُرُّونَ الدِّيَارَ — the accusative here is called…',
          choices: ['النصب بنزع الخافض — the jarr-particle dropped by extension', 'mafʿūl muṭlaq', 'tamyīz', 'ḥāl'],
          correct: 0,
          why: 'Origin: تَمُرُّونَ بِالدِّيَارِ. And the drop is *regular* before أنّ/أنْ: شَهِدَ اللهُ أَنَّهُ = بأنه.' },

        { t: 'mcq', q: 'What limits all eight causes of taʿdiyah?',
          choices: ['Samāʿ — a verb\'s transitivising must itself be heard from the Arabs', 'Nothing — they are fully productive', 'Only poetry', 'The verb\'s bāb'],
          correct: 0,
          why: 'وَالْحَقُّ أَنَّ تَعْدِيَةَ الْفِعْلِ سَمَاعِيَّةٌ — heard with بِ, you may not swap in عَلَى.' },

        { t: 'mcq', q: '﴿فَلْيَحْذَرِ الَّذِينَ يُخَالِفُونَ عَنْ أَمْرِهِ﴾ — why does the normally-transitive خالف take عن?',
          choices: ['It is imbued (taḍmīn) with يَخْرُجُ\'s meaning, becoming lāzim like it', 'It is a scribal issue', 'ʿan is extra', 'khālafa is always lāzim'],
          correct: 0,
          why: 'The first cause of luzūm — the mirror-image of the taʿdiyah-taḍmīn.' },

        { t: 'mcq', q: '﴿إِنْ كُنْتُمْ لِلرُّؤْيَا تَعْبُرُونَ﴾ — the lām appears because…',
          choices: ['the postponed governor weakened, so it needs the lām\'s support', 'ruʾyā is definite', 'taʿburūna is passive', 'it is an oath-lām'],
          correct: 0,
          why: 'ضَعْفُ الْعَامِلِ بِتَأْخِيرِهِ — cause 4 of luzūm; الشاهد زيادة اللام.' },

        { t: 'written',
          prompt: 'List the eight causes that make a lāzim verb transitive, with one example each.',
          model: '1 الهمزة (أَكْرَمَ) 2 التضعيف (فَرَّحْتُ زيدًا) 3 ألف المفاعلة (جَالَسَ العلماءَ) 4 زيادة حرف الجر (ذهبتُ بعليٍّ) 5 الهمزة والسين والتاء (اسْتَخْرَجَ المالَ) 6 التضمين النحوي (ولا تَعْزِمُوا عُقْدَةَ النكاح) 7 حذف حرف الجر توسعًا (تمرّون الديارَ؛ مطّرد مع أنّ وأنْ) 8 التحويل إلى باب نَصَرَ للمغالبة (قاعدتُه فقَعَدْتُه فأنا أقْعُدُه).' },
      ],
    },

    /* ═══ 5. Active & passive ═══ */
    {
      id: 'majhul-1',
      title: 'Active & passive — and the agent\'s stand-in',
      subtitle: 'المعلوم والمجهول · نائب الفاعل',
      matn: { src: 'DATA_WK15', from: 1, to: 6, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Why delete the agent?',
          focus: [1, 2, 3, 4],
          points: [
            '**المعلوم**: agent mentioned — حَفِظَ مُحَمَّدٌ الدَّرْسَ. **المجهول**: agent deleted, the verb re-built.',
            'Purposes: **الجهل به** (سُرِقَ الْمَتَاعُ)، **العلم به** (أُنْزِلَ الْمَطَرُ — everyone knows Who)، or another stands in (حُفِظَ الدَّرْسُ).',
          ] },

        { t: 'teach', title: 'Who stands in',
          focus: [5, 6],
          points: [
            'The default deputy is the **مفعول به** — Sībawayh allows no other while it is present; the Kūfans permit others absolutely.',
            'Otherwise: **الجار والمجرور** ﴿لَمَّا سُقِطَ فِي أَيْدِيهِمْ﴾ · **المصدر** ﴿نُفِخَ فِي الصُّورِ نَفْخَةٌ وَاحِدَةٌ﴾ · **الظرف** صِيمَ رَمَضَانُ.',
          ] },

        { t: 'mcq', q: 'أُنْزِلَ الْمَطَرُ hides the agent because of…',
          choices: ['العلم به — He is too well known to need mention', 'الجهل به', 'fear of him', 'poetic metre'],
          correct: 0,
          why: 'Deletion serves opposite ends: ignorance (سُرِقَ المتاع) or perfect knowledge (أُنزل المطر).' },

        { t: 'mcq', q: 'While a مفعول به is present, can the ẓarf deputise (per Sībawayh)?',
          choices: ['No — the object has first right; others deputise only in its absence', 'Yes, freely', 'Only in poetry', 'Only with ḍamīr objects'],
          correct: 0,
          why: 'الْأَصْلُ فِي بَابِ النِّيَابَةِ الْمَفْعُولُ بِهِ وَلَا تَصِحُّ نِيَابَةُ غَيْرِهِ — the Kūfans disagree.' },

        { t: 'mcq', q: 'In ﴿فَإِذَا نُفِخَ فِي الصُّورِ نَفْخَةٌ وَاحِدَةٌ﴾, what deputises for the agent?',
          choices: ['The maṣdar نَفْخَةٌ', 'The jārr-majrūr فِي الصُّورِ', 'The Trumpet', 'Nothing'],
          correct: 0,
          why: 'nafkhatun (nominative!) is the verbal noun standing in — the ṣūr sits inside a jarr phrase.' },
      ],
    },

    /* ═══ 6. Building the passive ═══ */
    {
      id: 'majhul-2',
      title: 'Building the passive: past & present',
      subtitle: 'ضُرِبَ · تُعُلِّمَ · اسْتُخْرِجَ · قِيلَ وَبِيعَ · يُقَالُ وَيُبَاعُ',
      matn: { src: 'DATA_WK15', from: 7, to: 18, check: 'بِنَاءُ' },
      steps: [
        { t: 'teach', title: 'The passive past — five cases',
          focus: [8, 9, 10, 12, 13],
          points: [
            'Default: **ḍammah first + kasrah before last** — ضُرِبَ؛ رُدَّ (أصلها رُدِدَ).',
            'Starts with added **tāʾ** → ḍammah on 1st AND 2nd: تُعُلِّمَ، تُقُوتِلَ. Starts with **hamzat waṣl** → ḍammah on 1st AND 3rd: انْطُلِقَ بِزَيْدٍ، اسْتُخْرِجَ.',
            'Alif ʿayn → yāʾ with pure kasrah or ishmām: قِيلَ، بِيعَ، اخْتِيرَ، انْقِيدَ. Doubled trilateral: the jumhūr require ḍammah (شُدَّ، مُدَّ)؛ the Kūfans permit kasrah (Banū Ḍabbah): رِدَّتْ.',
          ] },

        { t: 'teach', title: 'The passive present — and the lāzim',
          focus: [15, 16, 17, 18],
          points: [
            'Present: **ḍammah first + fatḥah before last** — يُضْرَبُ، يُرَدُّ. A madd before the last turns to alif: يَقُولُ ← يُقَالُ، يَبِيعُ ← يُبَاعُ.',
            'A **lāzim** verb goes passive only with a deputising ẓarf, maṣdar, or non-fixed jarr phrase: سِيرَ يَوْمُ الْجُمْعَةِ، جُلِسَ جُلُوسٌ حَسَنٌ، فُرِحَ بِقُدُومِ مُحَمَّدٍ.',
          ] },

        { t: 'mcq', q: 'The passive of تَعَلَّمَ is…',
          choices: ['تُعُلِّمَ — ḍammah on the first AND second', 'تَعُلِّمَ', 'تُعُلِّمُ', 'اتُّعِلَّمَ'],
          correct: 0,
          why: 'مَبْدُوءٌ بِتَاءٍ زَائِدَةٍ → ضُمَّ الثَّانِي مَعَ الْأَوَّلِ — like تُقُوتِلَ.' },

        { t: 'mcq', q: 'And of اسْتَخْرَجَ?',
          choices: ['اسْتُخْرِجَ — ḍammah on the first and THIRD', 'اسْتَخْرِجَ', 'اسْتُخْرَجُ', 'أُسْتُخْرِجَ'],
          correct: 0,
          why: 'hamzat waṣl start → ضُمَّ الثَّالِثُ مَعَ الْأَوَّلِ: unṭuliqa, ustukhrija.' },

        { t: 'mcq', q: 'Why does قَالَ become قِيلَ rather than قُوِلَ?',
          choices: ['The alif-ʿayn flips to yāʾ and the first takes kasrah (or ishmām of ḍammah)', 'The wāw is deleted', 'It is irregular', 'Dialect mixing'],
          correct: 0,
          why: 'إِنْ كَانَتْ عَيْنُهُ أَلِفًا قُلِبَتْ يَاءً وَكُسِرَ أَوَّلُهُ — بِيعَ، اخْتِيرَ، انْقِيدَ follow suit.' },

        { t: 'mcq', q: 'The passive present of يَبِيعُ is…',
          choices: ['يُبَاعُ — the madd before the last becomes alif', 'يُبْيَعُ', 'يُبِيعُ', 'يَبِيعُ itself'],
          correct: 0,
          why: 'ḍammah first + fatḥah before last; the ī of yabīʿu surfaces as ā: yubāʿu (so too yuqālu).' },

        { t: 'mcq', q: 'Is سِيرَ يَوْمُ الْجُمْعَةِ valid, given سَارَ is lāzim?',
          choices: ['Yes — the specified ẓarf deputises for the agent', 'No — lāzim verbs never go passive', 'Only in poetry', 'Only with بِ'],
          correct: 0,
          why: 'لَا يُبْنَى اللَّازِمُ لِلْمَجْهُولِ إِلَّا مَعَ الظَّرْفِ أَوِ الْمَصْدَرِ الْمُتَصَرِّفَيْنِ الْمُخْتَصَّيْنِ (or a free jarr phrase: فُرِحَ بِقُدُومِ محمد).' },
      ],
    },

    /* ═══ 7. Emphasis with the nūn ═══ */
    {
      id: 'tawkid',
      title: 'The nūn of emphasis — past, imperative',
      subtitle: 'مؤكد وغير مؤكد · الماضي لا يؤكد · الأمر يؤكد مطلقًا',
      matn: { src: 'DATA_WK16', from: 1, to: 8, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'The seventh division',
          focus: [1, 2, 3, 4],
          points: [
            '**المؤكد**: followed by نون التوكيد, heavy or light — ﴿لَيُسْجَنَنَّ وَلَيَكُونًا﴾.',
            'Emphasis also comes by **قد، اللام، القسم** — but this chapter is for the nūn.',
            'The nūn signals two things at once: **التوكيد والاستقبال**.',
          ] },

        { t: 'teach', title: 'Past and imperative',
          focus: [6, 7],
          points: [
            '**الماضي لا يؤكد مطلقًا** — the nūn emphasises a *future* event; the past is over.',
            '**الأمر يجوز توكيده مطلقًا** — it always seeks a future act: اكْتُبَنَّ، اجْتَهِدَنْ.',
          ] },

        { t: 'mcq', q: 'The nūn of emphasis indicates emphasis and…',
          choices: ['futurity (الاستقبال)', 'the past', 'negation', 'plurality'],
          correct: 0,
          why: 'يَدُلُّ عَلَى شَيْئَيْنِ: التوكيد والاستقبال — which is exactly why the māḍī refuses it.' },

        { t: 'mcq', q: 'Why can the past NEVER take the nūn?',
          choices: ['The nūn emphasises a future event, and the past is not future', 'The past is too long', 'The nūn clashes with the tāʾ', 'It can, rarely'],
          correct: 0,
          why: 'التَّوْكِيدُ إِنَّمَا يُؤَكَّدُ بِهِ حَدَثٌ مُسْتَقْبَلٌ.' },

        { t: 'mcq', q: 'And the imperative?',
          choices: ['Freely emphasised — it always points to the future (اكْتُبَنَّ)', 'Never emphasised', 'Only with the light nūn', 'Only in the Qurʾān'],
          correct: 0,
          why: 'الأمر يُطلب به حدوث الفعل في المستقبل دائمًا — so the nūn always fits.' },
      ],
    },

    /* ═══ 8. The six states of the muḍāriʿ ═══ */
    {
      id: 'mudari-halat',
      title: 'The muḍāriʿ\'s six states',
      subtitle: 'واجب · قريب منه · كثير · قليل · أقل · ممتنع',
      matn: { src: 'DATA_WK16', from: 9, to: 20, check: 'وَأَمَّا' },
      steps: [
        { t: 'teach', title: 'States 1–3',
          focus: [10, 11, 12, 14, 15],
          points: [
            '**الواجب**: future + affirmative + answer of an oath + unseparated from its lām — ﴿وَتَاللهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾.',
            '**القريب من الواجب**: condition of **إمّا** (إنْ + extra mā) — ﴿فَإِمَّا تَرَيِنَّ مِنَ الْبَشَرِ أَحَدًا﴾، ﴿وَإِمَّا تَخَافَنَّ﴾.',
            '**الكثير**: after a request-particle — لِيَقُومَنَّ زَيْدٌ؛ ﴿وَلَا تَحْسَبَنَّ اللهَ غَافِلًا﴾ — also duʿāʾ, ʿarḍ, tamannī, istifhām.',
          ] },

        { t: 'teach', title: 'States 4–6',
          focus: [16, 17, 19, 20],
          points: [
            '**القليل**: after لا النافية or extra mā without in — ﴿فِتْنَةً لَا تُصِيبَنَّ الَّذِينَ ظَلَمُوا﴾ · **الأقل**: after لم and after non-immā condition particles — مَا لَمْ يَعْلَمَنْ.',
            '**الممتنع**: the wājib\'s conditions fail — negated oath-answer ﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾ (i.e. لا تفتأ)؛ present-tense ﴿لَا أُقْسِمُ﴾؛ separated from the lām ﴿لَإِلَى اللهِ تُحْشَرُونَ﴾، ﴿وَلَسَوْفَ يُعْطِيكَ﴾.',
          ] },

        { t: 'mcq', q: '﴿وَتَاللهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾ — the nūn is wājib because the verb is…',
          choices: ['future, affirmative, answering an oath, joined to its lām', 'after a request particle', 'after إمّا', 'negated'],
          correct: 0,
          why: 'All four conditions present. Remove any one and the wājib collapses.' },

        { t: 'mcq', q: '﴿فَإِمَّا تَرَيِنَّ مِنَ الْبَشَرِ أَحَدًا﴾ sits in which state?',
          choices: ['قريب من الواجب — condition of in + extra mā (إمّا)', 'واجب', 'ممتنع', 'قليل'],
          correct: 0,
          why: 'The immā-condition makes emphasis nearly obligatory: تَخَافَنَّ، نَذْهَبَنَّ، تَرَيِنَّ.' },

        { t: 'mcq', q: '﴿تَاللهِ تَفْتَأُ تَذْكُرُ يُوسُفَ﴾ has NO nūn despite the oath. Why?',
          choices: ['The answer is (implicitly) negated — لا تفتأ — so emphasis is barred', 'The reciter dropped it', 'tafta\'u is past', 'Oaths never take the nūn'],
          correct: 0,
          why: 'A manfī oath-answer bars the nūn — one of the mumtaniʿ forms, with the ḥāl case (لا أقسم) and lām-separation (لَإِلَى اللهِ تُحْشَرُونَ).' },

        { t: 'mcq', q: '﴿وَلَسَوْفَ يُعْطِيكَ رَبُّكَ﴾ — why no nūn here?',
          choices: ['سوف separates the verb from the lām — a mumtaniʿ form', 'The verb is passive', 'It is not an oath at all', 'The nūn is present but hidden'],
          correct: 0,
          why: 'مَفْصُولًا مِنَ اللَّامِ بِفَاصِلٍ — like ﴿لَإِلَى اللهِ تُحْشَرُونَ﴾ where the jarr phrase intervenes.' },

        { t: 'written',
          prompt: 'Name the six states of the muḍāriʿ with respect to the nūn of emphasis, and give the condition of the wājib in full.',
          model: 'واجب · قريب من الواجب · كثير · قليل · أقل · ممتنع.\nWājib: when the muḍāriʿ is (1) future, (2) affirmative, (3) in the answer of an oath, (4) not separated from its lām — ﴿وَتَاللهِ لَأَكِيدَنَّ أَصْنَامَكُمْ﴾. Near-wājib: after إمّا. Kathīr: after ṭalab particles. Qalīl: after لا النافية / extra mā. Aqall: after لم and non-immā condition particles. Mumtaniʿ: negated oath-answer, present-tense meaning, or separation from the lām.' },
      ],
    },

  ],
});
