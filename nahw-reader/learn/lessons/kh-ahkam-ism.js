/* ── Daram Learn — al-Kubrā fī an-Naḥw · الخَاتِمَة: الْبَابُ الْأَوَّلُ فِي أَحْكَامِ الِاسْمِ (pp. 200–219) ──
   Authored directly from books/kubra-nahw/notes/ahkam-ism_*.md (backward book pass), which
   distil the book PDF page-by-page. NO matn panels: these pages are not transcribed in the
   reader — teach cards use static ar:/arEn: blocks and carry `page:` (book page) so every key
   idea maps back to the book. No bank steps, no written steps (key-idea + MCQ only). Full
   tashkeel throughout per user request (2026-08-06).                                          */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'kh-ahkam-ism',
  num: 19,
  titleAr: 'أَحْكَامُ الِاسْمِ',
  titleEn: 'الخَاتِمَة · أَحْكَامُ الِاسْمِ — pronoun, definiteness, gender, number, numerals',
  pages: '200–219',
  sections: [

    /* ═══ 1. أَقْسَامُ الِاسْمِ ═══ */
    {
      id: 'aqsam-ism',
      title: 'مُقَدِّمَةٌ: أَقْسَامُ الِاسْمِ',
      subtitle: 'مَصْدَرٌ · مُشْتَقٌّ · جَامِدٌ',
      steps: [
        { t: 'teach', title: 'الْمَصْدَرُ — the root', page: 200,
          body: 'الْبَصْرِيُّونَ: الْمَصْدَرُ is the root every derivative springs from. الْكُوفِيُّونَ: الْفِعْلُ is the root instead — same words, opposite starting point.\n\nA مَصْدَر can also stand in for a describer — this is مُبَالَغَة.',
          points: [
            'Standing for اسْمِ الْفَاعِلِ (the doer).',
            'Standing for اسْمِ الْمَفْعُولِ (the one acted on).',
          ],
          examples: [
            { ar: '﴿الَّذِينَ يُؤْمِنُونَ بِالْغَيْبِ﴾', en: '“Those who believe in the unseen” — الْغَيْبِ used أَيِ الْغَائِبِ.', note: 'مَصْدَرٌ بِمَعْنَى اسْمِ الْفَاعِلِ' },
            { ar: '«هَذَا عَذْبٌ فُرَاتٌ سَائِغٌ شَرَابُهُ»', en: '“This is sweet, fresh water, pleasant to drink” — شَرَابُهُ used أَيِ الْمَشْرُوبِ.', note: 'مَصْدَرٌ بِمَعْنَى اسْمِ الْمَفْعُولِ' },
          ] },

        { t: 'teach', title: 'الْمُشْتَقُّ بِمَعْنَى الْفِعْلِ — five forms', page: 200,
          body: 'الْمُشْتَقُّ is derived from الْمَصْدَرِ. Its first branch still carries a verbal meaning — five forms.',
          points: [
            'اسْمُ الْفَاعِلِ — the one who does the action.',
            'اسْمُ الْمَفْعُولِ — the one the action happens to.',
            'الصِّفَةُ الْمُشَبَّهَةُ — a permanent quality.',
            'اسْمُ الْمُبَالَغَةِ — an intensified doer.',
            'اسْمُ التَّفْضِيلِ — a comparison of degree.',
          ],
          examples: [
            { ar: '﴿جَامِعُ النَّاسِ﴾', en: '“the Gatherer of mankind”', note: 'اسْمُ فَاعِلٍ' },
            { ar: '«مَقْبُولٌ تَوْبَتُهُ»', en: '“one whose repentance is accepted”', note: 'اسْمُ مَفْعُولٍ' },
            { ar: '«حَسَنٌ ثَوَابُهَا»', en: '“good is its reward”', note: 'الصِّفَةُ الْمُشَبَّهَةُ' },
            { ar: '«غَفَّارٌ لِلتَّوَّابِينَ»', en: '“ever-forgiving to those who repent”', note: 'اسْمُ الْمُبَالَغَةِ' },
            { ar: '«أَفْضَلُ مِنَ الْمَالِ»', en: '“better than wealth”', note: 'اسْمُ التَّفْضِيلِ' },
          ],
          after: 'Sometimes the noun-sense wins over the verbal — التَّاجِرُ · الْمَرِيضُ · الدُّنْيَا still مُشْتَقّ in form, but felt as plain nouns.' },

        { t: 'teach', title: 'الْمُشْتَقُّ بِغَيْرِ مَعْنَى الْفِعْلِ — two forms', page: 200,
          body: 'The second branch is derived in form but carries no verb-like action.',
          points: [
            'اسْمُ الظَّرْفِ — the place or time of the action.',
            'اسْمُ الْآلَةِ — the tool used for it.',
          ],
          examples: [
            { ar: '«الْمَسْجِدُ»', en: '“the mosque” — the place of prostration.', note: 'اسْمُ ظَرْفٍ' },
            { ar: '«الْمِفْتَاحُ»', en: '“the key” — the tool of opening.', note: 'اسْمُ آلَةٍ' },
          ] },

        { t: 'teach', title: 'الْجَامِدُ — neither root nor derived', page: 201,
          ar: 'القَلَمُ',
          arEn: '“The pen” — jāmid: no derivation in, none out.',
          after: 'Placing a word here first decides everything downstream — الْمُشْتَقُّ بِمَعْنَى الْفِعْلِ can act like a verb (شِبْهُ الْفِعْلِ, take a فَاعِلًا, govern a مَعْمُولًا); الْجَامِدُ cannot.' },

        { t: 'mcq', q: '﴿إِنَّ اللَّهَ جَامِعُ النَّاسِ لِيَوْمِ الْقِيَامَةِ﴾ — جَامِعُ is which type, and can it govern a مَعْمُول?',
          choices: ['مُشْتَقٌّ بِمَعْنَى الْفِعْلِ (اسْمُ فَاعِلٍ) — yes, it carries verbal force and takes النَّاسَ as its مَعْمُول', 'جَامِدٌ — no verbal force at all', 'مَصْدَرٌ standing in for a describer', 'مُشْتَقٌّ بِغَيْرِ مَعْنَى الْفِعْلِ'],
          correct: 0,
          why: 'اسْمُ الْفَاعِلِ heads the five مُشْتَقّ بِمَعْنَى الْفِعْلِ forms — these act like verbs, unlike جَامِد words such as الْقَلَمِ.' },

        { t: 'mcq', q: '«هَذَا عَذْبٌ فُرَاتٌ سَائِغٌ شَرَابُهُ» — شَرَابٌ here is a مَصْدَر used how?',
          choices: ['Standing in for اسْمِ الْمَفْعُولِ (= الْمَشْرُوبِ) — مُبَالَغَةً', 'As اسْمِ آلَةٍ', 'As جَامِدٍ', 'As اسْمِ تَفْضِيلٍ'],
          correct: 0,
          why: 'A مَصْدَر may replace a describer for مُبَالَغَةً — here it means الْمَشْرُوبَ, an اسْمُ مَفْعُولٍ sense.' },

        { t: 'mcq', q: 'الْمَسْجِدُ وَالْمِفْتَاحُ — same family, different branch. Which?',
          choices: ['Both مُشْتَقٌّ بِغَيْرِ مَعْنَى الْفِعْلِ — اسْمُ ظَرْفٍ / اسْمُ آلَةٍ: derived in form, but with no فِعْل-like action', 'Both جَامِدٌ', 'Both بِمَعْنَى الْفِعْلِ', 'الْمَسْجِدُ جَامِدٌ · الْمِفْتَاحُ مُشْتَقٌّ'],
          correct: 0,
          why: 'الْمُشْتَقُّ بِغَيْرِ مَعْنَى الْفِعْلِ covers just two slots: اسْمَ الظَّرْفِ and اسْمَ الْآلَةِ.' },
      ],
    },

    /* ═══ 2. الضَّمِيرُ — الْأَشْكَالُ ═══ */
    {
      id: 'damir-kinds',
      title: 'الْقِسْمُ الْأَوَّلُ: الضَّمِيرُ — أَشْكَالُهُ',
      subtitle: 'مَرْفُوعٌ (مُنْفَصِلٌ/مُتَّصِلٌ/مُسْتَتِرٌ) · مَنْصُوبٌ · مَجْرُورٌ · يَاءُ الْمُتَكَلِّمِ',
      steps: [
        { t: 'teach', title: 'Three cases, three shapes', page: 201,
          points: [
            '**مَرْفُوعٌ مُنْفَصِلٌ**: هُوَ · أَنْتَ · أَنَا. **مُتَّصِلٌ** splits again: **مُسْتَتِرٌ** (hidden, no visible letter) — the “أَنْتَ” inside اشْكُرْ; **بَارِزٌ** (visible) — the تَاءُ of شَكَرْتُ.',
            '**مَنْصُوبٌ**: مُنْفَصِلٌ ﴿إِيَّاكَ نَعْبُدُ﴾ or مُتَّصِلٌ «فَاعْبُدْهُ».',
            '**مَجْرُورٌ**: always مُتَّصِلٌ, no exception — «رَبِّي».',
          ] },

        { t: 'teach', title: 'Where the مَرْفُوع hides', page: 202,
          body: 'مُسْتَتِرٌ shows up in six specific slots — everywhere else it is بَارِزٌ.',
          points: [
            'مَاضِي/مُضَارِعُ الْغَائِبِ وَالْغَائِبَةِ: شَكَرَ · شَكَرَتْ · يَشْكُرُ · تَشْكُرُ.',
            'مُضَارِعُ الْمُخَاطَبِ تَشْكُرُ · مُضَارِعُ الْمُتَكَلِّمِ أَشْكُرُ/نَشْكُرُ · أَمْرُ الْمُخَاطَبِ اشْكُرْ · and inside الْمُشْتَقِّ بِمَعْنَى الْفِعْلِ: شَاكِرٌ · مَشْكُورٌ · أَشْكَرُ.',
          ],
          after: 'Concealment in الْغَائِبِ (مَاضِي/مُضَارِع) is جَائِزٌ — a visible noun could replace it; everywhere else it is وَاجِبٌ.' },

        { t: 'teach', title: 'Joining يَاءُ الْمُتَكَلِّمِ', page: 203,
          body: 'Attaching the speaker’s yāʾ changes shape by what the noun ends in.',
          points: [
            'صَحِيحٌ noun: kasra + sākin yāʾ ﴿إِنَّ اللَّهَ رَبِّي وَرَبُّكُمْ﴾ (or fatḥa ﴿رَبِّيَ الَّذِي يُحْيِي وَيُمِيتُ﴾).',
            'مَقْصُورٌ: the alif stays — «هِيَ عَصَايَ». مَنْقُوصٌ: the two yāʾs merge, 2nd fatḥa — ﴿وَمَا أَنْتُمْ بِمُصْرِخِيَّ﴾.',
            'Ends in wāw-ḍamma: the wāw flips to yāʾ, prior letter kasra — ﴿أَوْ مُخْرِجِيَّ هُمْ﴾.',
          ] },

        { t: 'mcq', q: 'شَكَرَتْ vs تَشْكُرُ — where is the hidden فَاعِل, and is its concealment جَائِز or وَاجِب?',
          choices: ['Both hide a مُسْتَتِر pronoun (هِيَ); مَاضِي/مُضَارِعُ الْغَائِبِ(ة) concealment is جَائِزٌ — a visible noun could replace it', 'Both بَارِزٌ, no pronoun hidden', 'وَاجِبٌ in both, no visible-noun option ever', 'Only شَكَرَتْ hides a pronoun'],
          correct: 0,
          why: 'الْغَائِبِ concealment alone is جَائِزٌ; the other five slots (مُخَاطَبٌ مُضَارِعٌ · مُتَكَلِّمٌ · أَمْرُ مُخَاطَبٍ · مُشْتَقٌّ) are وَاجِبٌ.' },

        { t: 'mcq', q: '«هِيَ عَصَايَ» vs ﴿وَمَا أَنْتُمْ بِمُصْرِخِيَّ﴾ — why does one keep the alif and the other merge two yāʾs?',
          choices: ['عَصَا is مَقْصُورٌ (alif stays); مُصْرِخِيّ is مَنْقُوصٌ (ends yāʾ, so the noun-yāʾ merges with the speaker-yāʾ, 2nd fatḥa)', 'Both follow the same rule', 'عَصَا is مَنْقُوصٌ', 'مُصْرِخِي is مَقْصُورٌ'],
          correct: 0,
          why: 'Joining يَاءَ الْمُتَكَلِّمِ reacts to the noun’s own ending — الْمَقْصُورُ keeps its alif, الْمَنْقُوصُ merges its yāʾ with the speaker’s.' },
      ],
    },

    /* ═══ 3. الضَّمِيرُ — الِاسْتِعْمَالُ ═══ */
    {
      id: 'damir-usage',
      title: 'الضَّمِيرُ — مَتَى يُفْصَلُ · وَإِلَى أَيْنَ يَعُودُ',
      subtitle: 'تَعَذُّرُ الْمُتَّصِلِ · مَرْجِعُ الضَّمِيرِ · لَا ضَمِيرَيْنِ لِفَاعِلٍ وَاحِدٍ',
      steps: [
        { t: 'teach', title: 'مُتَّصِلٌ is default — مُنْفَصِلٌ only when forced', page: 204,
          body: 'The base rule: «أَعْبُدُهُ», never «أَعْبُدُ إِيَّاهُ». The detached form appears only where the attached one is grammatically impossible.',
          points: [
            'Pronoun is **مُبْتَدَأً or خَبَرًا**: «أَنْتَ رَبِّي» · «وَالْمَعْبُودُ أَنْتَ».',
            '**مَفْعُولٌ مُقَدَّمٌ** (fronted): ﴿إِيَّاكَ نَعْبُدُ﴾. **بَعْدَ إِلَّا**: ﴿أَمَرَ أَلَّا تَعْبُدُوا إِلَّا إِيَّاهُ﴾. **مَعْطُوفٌ**: ﴿وَإِنَّا أَوْ إِيَّاكُمْ لَعَلَى هُدًى﴾.',
            'Where both work (مُنْفَصِلٌ preferred): خَبَرُ كَانَ — «كُنْتُهُ» / «كُنْتُ إِيَّاهُ».',
          ] },

        { t: 'teach', title: 'مَرْجِعُ الضَّمِيرِ & the double-pronoun trap', page: 204,
          points: [
            'A غَائِبٌ pronoun returns to something earlier — by wording ﴿ذَلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ﴾, by meaning ﴿اعْدِلُوا هُوَ أَقْرَبُ لِلتَّقْوَى﴾ (= الْعَدْلُ, drawn from the verb), or by rule ﴿إِذَا بَلَغَتِ التَّرَاقِيَ﴾ (= الرُّوحُ).',
            'A singular-worded/plural-meant antecedent may take a plural pronoun: ﴿وَكَمْ مِنْ مَلَكٍ … لَا تُغْنِي شَفَاعَتُهُمْ﴾.',
            '**No two attached pronouns as فَاعِل+مَفْعُول for the same doer** — not «مَدَحْتُنِي»; say «مَدَحْتُ نَفْسِي» — **except** in أَفْعَالِ الْقُلُوبِ: «رَأَيْتُنِي», ﴿إِنِّي أَرَانِي أَعْصِرُ خَمْرًا﴾.',
          ] },

        { t: 'mcq', q: '﴿إِيَّاكَ نَعْبُدُ﴾ — why إِيَّاكَ rather than the attached «نَعْبُدُكَ»?',
          choices: ['The مَفْعُول is fronted (مَفْعُولٌ مُقَدَّمٌ) — one of the slots where the attached form becomes impossible, forcing مُنْفَصِلٌ', 'إِيَّاكَ is simply always paired with نَعْبُدُ', 'It is a scribal variant', 'Attached forms cannot follow نَعْبُدُ at all'],
          correct: 0,
          why: 'الْمُتَّصِلُ is the default; الْمُنْفَصِلُ is forced only in specific slots — تَقْدِيمُ الْمَفْعُولِ is one of them.' },

        { t: 'mcq', q: '«مَدَحْتُنِي» is avoided for «مَدَحْتُ نَفْسِي» — why, and what is the exception?',
          choices: ['Two attached pronouns cannot be فَاعِل+مَفْعُول for the same doer — except in أَفْعَالِ الْقُلُوبِ like «رَأَيْتُنِي»', 'مَدَحْتُنِي is simply ungrammatical with no exception at all', 'نَفْسِي is required after every verb', 'The rule applies only to مَدَحَ'],
          correct: 0,
          why: 'The rule blocks self-referential attached-pronoun pairs generally — أَفْعَالُ الْقُلُوبِ (رَأَى · عَدِمَ · فَقَدَ) are the carved-out exception.' },
      ],
    },

    /* ═══ 4. الْعَلَمُ وَالْمُعَرَّفُ بِأَلْ ═══ */
    {
      id: 'alam-al',
      title: 'الْقِسْمُ الثَّانِي وَالثَّالِثُ: الْعَلَمُ وَالْمُعَرَّفُ بِأَلْ',
      subtitle: 'شَخْصِيٌّ/جِنْسِيٌّ · عَهْدٌ ذِكْرِيٌّ/ذِهْنِيٌّ/حُضُورِيٌّ · لَامُ الْجِنْسِ',
      steps: [
        { t: 'teach', title: 'الْعَلَمُ — شَخْصِيٌّ vs جِنْسِيٌّ', page: 205,
          body: 'الْعَلَمُ names one individual (شَخْصِيّ: عُثْمَانُ) or a whole type (جِنْسِيّ: أُسَامَةُ = “lion”).',
          points: [
            'By form: **الِاسْمُ** itself · **الْكُنْيَةُ** (prefixed with أَبٍ/ابْنٍ/أُمٍّ… «أَبُو بَكْرٍ», «أُمُّ رُمَّانٍ») · **اللَّقَبُ** (praise/blame: «الْفَارُوقُ», «الصِّدِّيقَةُ»).',
            'Order: الْعَلَمُ normally precedes الْلَّقَبَ — as بَدَلٌ «هَارُونُ الرَّشِيدُ» or مُضَافٌ «هَارُونُ الرَّشِيدِ» — **unless اللَّقَبُ is more famous**, then it leads: ﴿الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ﴾.',
            'No fixed order between الْعَلَمِ وَالْكُنْيَةِ.',
          ] },

        { t: 'teach', title: 'الْمُعَرَّفُ بِأَلْ — عَهْدٌ vs جِنْسٌ', page: 206,
          body: 'لَامُ التَّعْرِيفِ splits into two families, each with three sub-kinds.',
          points: [
            '**لَامُ الْعَهْدِ** (points to something known): ذِكْرِيٌّ (mentioned before) — «فَعَصَى فِرْعَوْنُ الرَّسُولَ»؛ ذِهْنِيٌّ (known though unmentioned) ﴿إِذْ هُمَا فِي الْغَارِ﴾؛ حُضُورِيٌّ (present now) ﴿الْيَوْمَ أَكْمَلْتُ لَكُمْ دِينَكُمْ﴾.',
            '**لَامُ الْجِنْسِ**: the type without individuals ﴿وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ﴾؛ an unspecified single member ﴿كَمَثَلِ الْحِمَارِ يَحْمِلُ أَسْفَارًا﴾؛ or اسْتِغْرَاقٌ (all members) — حَقِيقِيٌّ ﴿إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ﴾ or عُرْفِيٌّ ﴿يَأْتُوكَ بِكُلِّ سَحَّارٍ﴾.',
          ] },

        { t: 'mcq', q: '«فَعَصَى فِرْعَوْنُ الرَّسُولَ» — أَلْ in الرَّسُولِ is which kind of عَهْد?',
          choices: ['ذِكْرِيّ — the messenger was mentioned just before', 'ذِهْنِيّ — known but never mentioned', 'حُضُورِيّ — present at the moment of speech', 'لَامُ الْجِنْسِ'],
          correct: 0,
          why: 'ذِكْرِيّ points back to something already named in the same passage.' },

        { t: 'mcq', q: '﴿الْمَسِيحُ عِيسَى ابْنُ مَرْيَمَ﴾ — why does الْمَسِيحُ (a لَقَب) come before the name عِيسَى?',
          choices: ['Because اللَّقَبَ is more famous than الِاسْمَ itself — the one exception to عَلَم-before-لَقَب ordering', 'اللَّقَبُ always precedes الِاسْمَ', 'الْمَسِيحُ is actually a كُنْيَة', 'Word order is free here'],
          correct: 0,
          why: 'الْعَلَمُ normally leads (هَارُونُ الرَّشِيدِ), but a famous-enough لَقَب overrides that default.' },
      ],
    },

    /* ═══ 5. الْإِشَارَةُ وَالْمَوْصُولُ وَالْمُضَافُ ═══ */
    {
      id: 'ishara-mawsul-mudaf',
      title: 'الْقِسْمُ الرَّابِعُ–السَّادِسُ: الْإِشَارَةُ · الْمَوْصُولُ · الْمُضَافُ',
      subtitle: 'قُرْبٌ/بُعْدٌ · صِلَةٌ وَعَائِدٌ · مُتَوَغِّلٌ فِي الْإِبْهَامِ',
      steps: [
        { t: 'teach', title: 'أَسْمَاءُ الْإِشَارَةِ', page: 206,
          points: [
            'ذَا / ذِهْ / تِهْ for masc/fem singular · ذَانِ / تَانِ dual · أُولَاءِ plural (both genders).',
            '**هَاءُ التَّنْبِيهِ** marks nearness: «هَذَا», «هَذِهِ». **كَافُ الْخِطَابِ + اللَّامُ** marks distance: «ذَلِكَ», «تِلْكَ» (root تِهْ → drop the hāʾ, add لَامًا + كَافَ الْخِطَابِ).',
          ] },

        { t: 'teach', title: 'الْأَسْمَاءُ الْمَوْصُولَةُ', page: 207,
          body: 'Relatives need a صِلَة carrying a returning عَائِد pronoun.',
          points: [
            'الَّذِي / اللَّذَانِ / الَّذِينَ (masc) · الَّتِي / اللَّتَانِ / اللَّاتِي (fem) · and مَنْ / مَا / أَيّ؛ ذَا after interrogative مَا/مَنْ ﴿مَنْ ذَا الَّذِي يُقْرِضُ اللَّهَ﴾.',
            'الصِّلَة may be a full جُمْلَة («أُحِبُّ الَّذِي قَبْرُهُ فِي الْمَدِينَةِ») or a شِبْهُ جُمْلَةٍ («أُحِبُّ الَّذِي بِجَنْبِهِ») — its عَائِد pronoun may drop: «أُحِبُّ الَّذِي تُحِبُّهُ» / «تُحِبُّ».',
            'أَلْ الْمَوْصُولَةُ rides a verb-sense مُشْتَقّ: ﴿إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ﴾.',
          ] },

        { t: 'teach', title: 'الْمُضَافُ إِلَى مَعْرِفَةٍ', page: 207,
          body: 'Annexation to any of the five مَعَارِف above makes a noun definite — ﴿كِتَابُ اللَّهِ﴾ — with exceptions.',
          points: [
            'No تَعْرِيف gained if الْمُضَاف is **مُتَوَغِّلٌ فِي الْإِبْهَامِ** — غَيْرٌ · سِوًى · مِثْلٌ · ذُو: «لَا نَطُوفُ بِبَيْتٍ غَيْرِ بَيْتِ اللَّهِ».',
            'In الْإِضَافَةِ اللَّفْظِيَّةِ, annexation gives only lightness, not definiteness: «كُنْ مُؤْمِنًا سَلِيمَ الْقَلْبِ».',
            'الْمُنَادَى الْمَقْصُودُ counts as definite too: «يَا رَجُلُ».',
          ] },

        { t: 'mcq', q: '«ذَلِكَ» — break down its parts.',
          choices: ['Root تِهْ, drop the hāʾ, add لَامًا + كَافَ الْخِطَابِ — the distance-marking demonstrative', 'ذَا + الْكَافِ only, no other change', 'A frozen irreducible word', 'هَاءُ التَّنْبِيهِ + كَافُ الْخِطَابِ'],
          correct: 0,
          why: 'Nearness uses هَاءَ التَّنْبِيهِ («هَذَا»); distance replaces it with لَامٍ + كَافِ الْخِطَابِ on the root تِهْ.' },

        { t: 'mcq', q: '«لَا نَطُوفُ بِبَيْتٍ غَيْرِ بَيْتِ اللَّهِ» — does «غَيْرُ بَيْتِ اللَّهِ» count as مَعْرِفَة?',
          choices: ['No — غَيْرٌ is مُتَوَغِّلٌ فِي الْإِبْهَامِ, so annexation to اللَّهِ does not make it definite', 'Yes, fully مَعْرِفَة', 'Only فِي الْإِعْرَابِ, not in meaning', 'غَيْرٌ is never مُضَاف'],
          correct: 0,
          why: 'غَيْر · سِوَى · مِثْل · ذُو stay indefinite in sense even when annexed to a definite noun.' },

        { t: 'mcq', q: '«أُحِبُّ الَّذِي بِجَنْبِهِ» — صِلَة type & عَائِد?',
          choices: ['شِبْهُ جُمْلَةٍ صِلَةٌ («بِجَنْبِهِ») with the عَائِد pronoun ـهُ attached', 'جُمْلَةٌ فِعْلِيَّةٌ صِلَةٌ with no عَائِد', 'It has no صِلَة at all', 'الَّذِي here is not مَوْصُول'],
          correct: 0,
          why: 'Every مَوْصُول needs a صِلَة carrying a returning عَائِد — here a جَارٌّ وَمَجْرُورٌ does the job, with ـهُ as the عَائِد.' },
      ],
    },

    /* ═══ 6. النَّكِرَةُ ═══ */
    {
      id: 'nakira',
      title: 'النَّوْعُ الثَّانِي: النَّكِرَةُ',
      subtitle: 'مُفِيدَةٌ (مَخْصُوصَةٌ / نَفْيٌ-اسْتِفْهَامٌ) vs مَحْضَةٌ · الْجُمْلَةُ نَكِرَةٌ',
      steps: [
        { t: 'teach', title: 'نَكِرَةٌ مُفِيدَةٌ vs غَيْرُ مُفِيدَةٍ', page: 207,
          body: 'Not every indefinite is equal — some still “say something,” some do not.',
          points: [
            '**مَخْصُوصَةٌ** (narrowed, نَكِرَةٌ غَيْرُ مَحْضَةٍ): مَوْصُوفَةٌ (with adjective) «طَالِبٌ مُجْتَهِدٌ», or مُضَافَةٌ to a نَكِرَة «طَالِبُ عِلْمٍ».',
            '**in a context of النَّفْيِ or الِاسْتِفْهَامِ**: نَفْيٌ «مَا أَحَدٌ خَيْرًا مِنْ أَحَدٍ إِلَّا بِالتَّقْوَى»؛ اسْتِفْهَامٌ ﴿أَإِلَهٌ مَعَ اللَّهِ﴾.',
            '**غَيْرُ مُفِيدَةٍ** (نَكِرَةٌ مَحْضَةٌ): a bare «طَالِبٌ» — nothing narrows or contextualises it.',
          ] },

        { t: 'teach', title: 'A جُمْلَة counts as a نَكِرَة', page: 208,
          body: 'A sentence is neither مَعْرِفَةً nor نَكِرَةً in itself — but it sits under the ruling of a نَكِرَة.',
          after: 'That is exactly why a جُمْلَة can serve as نَعْت for a نَكِرَة («رَأَيْتُ رَجُلًا يَبْكِي») but never for a مَعْرِفَة.' },

        { t: 'mcq', q: '«طَالِبٌ مُجْتَهِدٌ» vs «طَالِبٌ» alone — what separates them?',
          choices: ['طَالِبٌ مُجْتَهِدٌ is نَكِرَةٌ مُفِيدَةٌ (مَخْصُوصَة, narrowed by the adjective); bare طَالِبٌ is نَكِرَةٌ مَحْضَةٌ, unnarrowed', 'Both are identical in eligibility', 'طَالِبٌ مُجْتَهِدٌ is مَعْرِفَة', 'طَالِبٌ alone is مُفِيدَة, the other مَحْضَة'],
          correct: 0,
          why: 'الْإِفَادَةُ (usefulness) turns on narrowing — by وَصْفٍ, إِضَافَةٍ to a نَكِرَة, or a نَفْيٍ/اسْتِفْهَامٍ context.' },

        { t: 'mcq', q: '«رَأَيْتُ رَجُلًا يَبْكِي» — why can the جُمْلَة «يَبْكِي» serve as a نَعْت for «رَجُلًا»?',
          choices: ['A جُمْلَة sits under the ruling of a نَكِرَة, and نَعْت-جُمْلَة only ever qualifies a نَكِرَة, never a مَعْرِفَة', 'Any جُمْلَة can qualify any noun', 'يَبْكِي is actually an اسْمُ فَاعِلٍ here', 'رَجُلًا is مَعْرِفَة, so this is an exception'],
          correct: 0,
          why: 'The جُمْلَة-as-نَكِرَة rule is exactly why sentence-نَعْت only attaches to indefinite heads.' },
      ],
    },

    /* ═══ 7. التَّذْكِيرُ وَالتَّأْنِيثُ ═══ */
    {
      id: 'tadhkir-tanith',
      title: 'الْفَصْلُ الثَّانِي: التَّذْكِيرُ وَالتَّأْنِيثُ',
      subtitle: 'حَقِيقِيٌّ/غَيْرُ حَقِيقِيٍّ · السَّمَاعِيُّ بِلَا تَاءٍ · يُذَكَّرُ وَيُؤَنَّثُ',
      steps: [
        { t: 'teach', title: 'الْحَقِيقِيُّ vs غَيْرُ الْحَقِيقِيِّ', page: 209,
          body: 'Feminine splits into real (by creation) and figurative (treated as feminine though not really female).',
          points: [
            '**حَقِيقِيٌّ**: a real female — «الْمَرْأَةُ», «النَّاقَةُ».',
            '**غَيْرُ حَقِيقِيٍّ** (لَفْظِيّ/مَجَازِيّ): ends in تَاءٍ مَرْبُوطَةٍ («السَّاعَةُ» — sometimes تَاءٌ مُقَدَّرَةٌ/سَمَاعِيَّةٌ: «الشَّمْسُ», root شَمْسَةٌ) · ends in أَلِفِ التَّأْنِيثِ («الْبُشْرَى», «الصَّحْرَاءُ») · every plural except جَمْعِ الْمُذَكَّرِ السَّالِمِ («أَوْرَقَتِ الشَّجَرُ», ﴿كَذَّبَتْ قَبْلَهُمْ قَوْمُ نُوحٍ﴾).',
          ] },

        { t: 'teach', title: 'The سَمَاعِيّ trap & both-ways words', page: 210,
          body: 'Most Arabic feminines carry no تَاء at all — that is exactly where learners misgender.',
          points: [
            'A long سَمَاعِيّ list has zero تَاء yet triggers feminine agreement: الْأُذُنُ · الْأَرْضُ · الشَّمْسُ · الْيَدُ · النَّارُ · الرِّيحُ · الْعَيْنُ… («الشَّمْسُ طَالِعٌ» ✗ — must be «طَالِعَةٌ»).',
            '**يُذَكَّرُ وَيُؤَنَّثُ** (both ways): السَّبِيلُ · الطَّرِيقُ · الدِّرْعُ · السِّكِّينُ · السُّوقُ… — explains why classical texts disagree on their gender.',
            'The letters (حُرُوف) themselves: feminine if meant as a كَلِمَة («الْبَاءُ تَجُرُّ»), masculine if meant as a حَرْف («الْبَاءُ يَجُرُّ»).',
          ] },

        { t: 'mcq', q: '«الشَّمْسُ طَالِعَةٌ» — why طَالِعَة, not طَالِعٌ, though الشَّمْسُ has no تَاء?',
          choices: ['الشَّمْسُ is سَمَاعِيّ feminine (root شَمْسَة, تَاءٌ مُقَدَّرَةٌ) — no visible تَاء but still feminine agreement', 'الشَّمْسُ is مُذَكَّر — طَالِعَة is an error', 'طَالِعَة is simply more common stylistically', 'الشَّمْسُ is جَمْع here'],
          correct: 0,
          why: 'The سَمَاعِيّ list (الْأَرْض · الشَّمْس · الْيَد…) is exactly the trap: no تَاء, yet feminine.' },

        { t: 'mcq', q: '«الْبَاءُ تَجُرُّ» vs «الْبَاءُ يَجُرُّ» — both correct?',
          choices: ['Yes — تَجُرُّ treats الْبَاءَ as a كَلِمَة (fem.), يَجُرُّ treats it as a حَرْف (masc.) — meaning decides gender here', 'Only تَجُرُّ is correct', 'Only يَجُرُّ is correct', 'الْبَاءُ is always fem., no exception'],
          correct: 0,
          why: 'الْحُرُوفُ gender by what you mean: كَلِمَة → مُؤَنَّث · حَرْف → مُذَكَّر.' },
      ],
    },

    /* ═══ 8. الْمُثَنَّى ═══ */
    {
      id: 'muthanna',
      title: 'الْفَصْلُ الثَّالِثُ ‹١›: الْمُثَنَّى',
      subtitle: 'أَلِفٌ وَنُونٌ / يَاءٌ وَنُونٌ · مَقْصُورٌ/مَنْقُوصٌ/مَمْدُودٌ · مُثَنًّى مُضَافٌ إِلَى مُثَنًّى',
      steps: [
        { t: 'teach', title: 'Building the مُثَنَّى', page: 210,
          body: 'الْمُثَنَّى denotes two — «مُسْلِمَانِ» from «مُسْلِمٌ».',
          points: [
            'Open the last letter of the singular, add **أَلِفًا وَنُونًا** in رَفْعٍ («مُؤْمِنَانِ») or **يَاءً وَنُونًا** in نَصْبٍ/جَرٍّ («مُسْلِمَيْنِ»).',
            'مَنْقُوصٌ: the yāʾ returns — «هَادِيَانِ» (from «هَادٍ»). مَقْصُورٌ: 3rd-letter alif reverts to its root «عَصَوَانِ», «فَتَيَانِ»; 4th+ letter alif flips to yāʾ «مَلْهَيَانِ», «مَسْعَيَانِ».',
            'مَمْدُودٌ: original hamzah stays «قَرَّاءَانِ»؛ taʾnīth-hamzah flips to wāw «صَحْرَاوَانِ»؛ hamzah converted from wāw/yāʾ takes either «كِسَاءَانِ» / «كِسَاوَانِ».',
          ] },

        { t: 'teach', title: 'Dual quirks', page: 210,
          points: [
            '**Dual annexed to a dual** is expressed in الْجَمْعِ to avoid two duals meeting: ﴿وَالسَّارِقُ وَالسَّارِقَةُ فَاقْطَعُوا أَيْدِيَهُمَا﴾.',
            'تَاءُ التَّأْنِيثِ drops before the dual ending: «الْخُصْيَةُ», «الْأَلْيَةُ» → «خُصْيَانِ», «أَلْيَانِ».',
          ] },

        { t: 'mcq', q: '﴿فَاقْطَعُوا أَيْدِيَهُمَا﴾ — each thief loses only one hand, so why the plural أَيْدِي, not a dual?',
          choices: ['Dual-annexed-to-dual is expressed in الْجَمْعِ form, to avoid two duals colliding', 'It is a scribal irregularity', 'أَيْدِي here literally means many hands', 'الْمُثَنَّى cannot be مُضَاف'],
          correct: 0,
          why: 'إِضَافَةُ مُثَنًّى إِلَى مُثَنًّى switches to plural wording specifically to dodge the two-dual clash.' },

        { t: 'mcq', q: '«هَادٍ» → «هَادِيَانِ» — what happens to the yāʾ that الْمَنْقُوصُ drops in the singular?',
          choices: ['It returns — the dual restores the yāʾ الْمَنْقُوصُ drops', 'It stays dropped', 'It becomes a wāw', 'الْمَنْقُوصُ nouns cannot be dualled'],
          correct: 0,
          why: 'الْمَنْقُوصُ recovers its yāʾ specifically when dualled: هَادٍ → هَادِيَانِ.' },
      ],
    },

    /* ═══ 9. الْمَجْمُوعُ ═══ */
    {
      id: 'jamu',
      title: 'الْفَصْلُ الثَّالِثُ ‹٢›: الْمَجْمُوعُ',
      subtitle: 'سَالِمٌ مُذَكَّرٌ/مُؤَنَّثٌ · تَكْسِيرٌ: قِلَّةٌ (٣–١٠) وَكَثْرَةٌ (١١+)',
      steps: [
        { t: 'teach', title: 'جَمْعُ الْمُذَكَّرِ السَّالِمِ — rules and blockers', page: 211,
          body: 'ḍamma + وَاوٌ وَنُونٌ in رَفْعٍ («تَائِبُونَ») · kasra + يَاءٌ وَنُونٌ in نَصْبٍ/جَرٍّ («آتِينَ»).',
          points: [
            'مَقْصُورٌ drops its alif ﴿وَأَنْتُمُ الْأَعْلَوْنَ﴾؛ مَنْقُوصٌ drops its yāʾ ﴿وَالنَّاهُونَ عَنِ الْمُنْكَرِ﴾.',
            '**Restricted to rational-male referents**, and the singular must not be: أَفْعَلَ/فَعْلَاءَ («أَحْمَرُ») · فَعْلَانَ/فَعْلَى («سَكْرَانُ») · فَعِيلٌ=مَفْعُولٌ («جَرِيحٌ») · فَعُولٌ=فَاعِلٌ («صَبُورٌ») · or common-gender («جَنُبٌ»).',
            'النُّونُ drops on إِضَافَةٍ: ﴿إِنَّا رَسُولُو رَبِّكَ﴾. Anomalous survivors: سِنُونَ · أَرَضُونَ · بَنُونَ · قِلُونَ.',
          ] },

        { t: 'teach', title: 'جَمْعُ الْمُؤَنَّثِ السَّالِمِ', page: 212,
          body: 'fatḥa + أَلِفٌ وَتَاءٌ — «عَابِدَاتٌ».',
          points: [
            'A masc-having صِفَة that jumps by وَاوٍ/نُونٍ: مُسْلِمُونَ → عَابِدَاتٌ.',
            'A صِفَة with no masc form at all: «حَائِضَاتٌ».',
            'Any noun with no condition at all: «هِنْدَاتٌ».',
          ] },

        { t: 'teach', title: 'جَمْعُ التَّكْسِيرِ — قِلَّة vs كَثْرَة', page: 213,
          body: 'Broken plurals reshape the singular. Triliteral: by hearing («رُكَّعٌ» from «رَاكِعٍ»); longer roots: by analogy on فَعَالِلَ/فَعَالِيلَ («السَّلْسَبِيلُ», «قَرَاطِيسُ»).',
          points: [
            '**جَمْعُ قِلَّةٍ** (٣–١٠), four patterns: أَفْعَالٌ «أَثْوَابٌ» · أَفْعُلٌ «أَنْفُسٌ» · أَفْعِلَةٌ «أَمْتِعَةٌ/أَذِلَّةٌ» · فِعْلَةٌ «فِتْيَةٌ».',
            '**جَمْعُ كَثْرَةٍ** (١١+): everything else — فُعُلٌ · فُعْلٌ · فُعَلٌ · فِعَلٌ · فَعْلَى («قَتْلَى») · فُعَّلٌ («رُكَّعٌ») · فُعَّالٌ · فُعُولٌ · فِعَالٌ · فُعْلَانٌ («غِلْمَانٌ») · فُعَلَاءُ («فُقَرَاءُ») · أَفَاعِيلُ («أَسَاطِيرُ»)…',
            '**Deficient-of-the-other**: a singular with both قِلَّةٍ وَكَثْرَةٍ plurals — each covers its own range; with only one plural, it covers both ranges.',
          ],
          after: 'اسْمُ الْجِنْسِ الْجَمْعِيُّ («تَمْرٌ/تَمْرَةٌ») can be masc ﴿أَعْجَازُ نَخْلٍ مُنْقَعِرٍ﴾ or fem ﴿…خَاوِيَةٍ﴾; a broken-plural pronoun prefers fem+singular in قِلَّة, fem+plural in كَثْرَة.' },

        { t: 'mcq', q: '«تَائِبُونَ» is a جَمْعُ مُذَكَّرٍ سَالِمٌ for «تَائِبٍ» — could «صَبُورٌ» take the same plural («صَبُورُونَ»)?',
          choices: ['No — فَعُولٌ=فَاعِلٌ (صَبُورٌ) is one of the blocked singular-shapes for جَمْعِ الْمُذَكَّرِ السَّالِمِ', 'Yes, freely', 'Only in poetry', 'صَبُورٌ has no plural at all'],
          correct: 0,
          why: 'The five blocked shapes: أَفْعَلُ/فَعْلَاءُ · فَعْلَانُ/فَعْلَى · فَعِيلٌ=مَفْعُولٌ · فَعُولٌ=فَاعِلٌ · common-gender.' },

        { t: 'mcq', q: '﴿إِنَّا رَسُولُو رَبِّكَ﴾ — why no نُون on رَسُولُو?',
          choices: ['جَمْعُ الْمُذَكَّرِ السَّالِمِ drops its نُون on إِضَافَةٍ — رَسُولُو رَبِّكَ = رُسُلُ رَبِّكَ', 'It is a spelling error', 'رَسُولٌ is مُفْرَد here', 'النُّونُ is optional stylistically'],
          correct: 0,
          why: 'حَذْفُ النُّونِ عِنْدَ الْإِضَافَةِ is a fixed rule of جَمْعِ الْمُذَكَّرِ السَّالِمِ — the dual drops its نُون the same way.' },

        { t: 'mcq', q: '«رُكَّعٌ» (jamʿ of «رَاكِعٍ») — قِلَّة or كَثْرَة, and how was the pattern chosen?',
          choices: ['كَثْرَة — فُعَّلٌ is a hearing-based (سَمَاعِيّ) triliteral pattern outside the four fixed قِلَّة templates', 'قِلَّة — matches أَفْعَالٌ', 'Neither, it is جَمْعُ مُذَكَّرٍ سَالِمٌ', 'It is a dual form'],
          correct: 0,
          why: 'Triliteral broken plurals are سَمَاعِيّ; فُعَّلٌ sits among الْكَثْرَةِ patterns, not the four الْقِلَّةِ ones (أَفْعَالٌ · أَفْعُلٌ · أَفْعِلَةٌ · فِعْلَةٌ).' },
      ],
    },

    /* ═══ 10. التَّصْغِيرُ وَالنِّسْبَةُ ═══ */
    {
      id: 'tasghir-nisba',
      title: 'الْفَصْلُ الرَّابِعُ وَالْخَامِسُ: التَّصْغِيرُ وَالنِّسْبَةُ',
      subtitle: 'فُعَيْلٌ / فُعَيْعِلٌ / فُعَيْعِيلٌ · يَاءٌ مُشَدَّدَةٌ',
      steps: [
        { t: 'teach', title: 'التَّصْغِيرُ — three templates', page: 216,
          ar: 'تَغْيِيرُ بِنَاءِ الِاسْمِ لِلدَّلَالَةِ عَلَى صِغَرِهِ',
          arEn: 'Taṣghīr: reshaping a noun’s structure to mark it as small.',
          points: [
            '**فُعَيْلٌ** for الثُّلَاثِيّ: «نُجَيْمٌ» (from «نَجْمٍ»).',
            '**فُعَيْعِلٌ** for الرُّبَاعِيّ, and الْخُمَاسِيّ with no مَدّ letter before its last: «دُرَيْهِمٌ» (دِرْهَمٍ) · «سُفَيْرِجٌ» (سَفَرْجَلٍ).',
            '**فُعَيْعِيلٌ** for الْخُمَاسِيّ with a مَدّ letter before its last: «مُفَيْتِيحٌ» (مِفْتَاحٍ).',
          ] },

        { t: 'teach', title: 'النِّسْبَةُ — the ـيّ ending', page: 216,
          ar: 'إِلْحَاقُ يَاءٍ مُشَدَّدَةٍ فِي آخِرِ الِاسْمِ لِنِسْبَتِهِ إِلَى شَيْءٍ',
          arEn: 'Nisba: appending a doubled yāʾ to relate a noun to something.',
          points: [ '«مَكَّةُ» → «مَكِّيٌّ» · «ثَوْرَةٌ» → «ثَوْرِيٌّ» · «دُرَّةٌ» → «دُرِّيٌّ» ﴿كَوْكَبٌ دُرِّيٌّ﴾.' ],
          after: 'The resulting اسْمٌ مَنْسُوبٌ can itself serve as a نَعْت.' },

        { t: 'mcq', q: '«مُفَيْتِيحٌ» (تَصْغِيرُ «مِفْتَاحٍ») — which template, and why the extra يّ before the end?',
          choices: ['فُعَيْعِيلٌ — used when الْخُمَاسِيّ has a مَدّ letter before its last radical (مِفْتَاح’s alif)', 'فُعَيْلٌ — the basic ثُلَاثِيّ template', 'فُعَيْعِلٌ — the plain رُبَاعِيّ/خُمَاسِيّ template', 'It is not a تَصْغِير form at all'],
          correct: 0,
          why: 'فُعَيْعِيلٌ is reserved for a خُمَاسِيّ whose letter before the last is a مَدّ letter — that extra length shows up as the extra يّ.' },

        { t: 'mcq', q: '«دُرَّةٌ» → «دُرِّيٌّ» — what does the ـيّ ending do here?',
          choices: ['It is النِّسْبَة — relating the noun to “durrah” (pearl-like), turning it into a describer', 'It is تَصْغِير (diminutive)', 'It marks a plural', 'It marks the feminine'],
          correct: 0,
          why: 'A doubled shadda-yāʾ appended at the end = نِسْبَة, distinct from تَصْغِير’s internal reshaping.' },
      ],
    },

    /* ═══ 11. الْعَدَدُ — الْأَقْسَامُ وَالتَّذْكِيرُ وَالتَّأْنِيثُ ═══ */
    {
      id: 'adad-kinds-gender',
      title: 'خَاتِمَةُ الْبَابِ ‹١›: الْعَدَدُ — أَقْسَامُهُ وَتَذْكِيرُهُ وَتَأْنِيثُهُ',
      subtitle: 'مُفْرَدٌ/مُرَكَّبٌ · الْمُخَالَفَةُ (٣–١٠) · الْعِبْرَةُ بِمُفْرَدِ الْمَعْدُودِ',
      steps: [
        { t: 'teach', title: 'Simple vs compound numbers', page: 217,
          body: 'الْعَدَدُ الْمُفْرَدُ has four kinds: الْآحَادُ (١–١٠) · الْعَشَرَاتُ (٢٠–٩٠) · مِائَةٌ · أَلْفٌ.',
          points: [
            'الْعَدَدُ الْمُرَكَّبُ: تَرْكِيبُ مَزْجٍ (١١–١٩) «أَحَدَ عَشَرَ … تِسْعَ عَشْرَةَ» ﴿أَحَدَ عَشَرَ كَوْكَبًا﴾ · and تَرْكِيبُ عَطْفٍ (everything else) ﴿تِسْعَةٌ وَتِسْعُونَ﴾.',
            'Order in a compound: الْأَلْفُ before الْمِائَةِ («أَلْفٌ وَمِائَةُ سَنَةٍ») · الْمِائَةُ before الْآحَادِ («مِائَةٌ وَأَرْبَعُ سَنَوَاتٍ») · الْآحَادُ before الْعَشَرَاتِ («سَبْعٌ وَعِشْرُونَ لَيْلَةً»).',
          ] },

        { t: 'teach', title: 'الْمُخَالَفَةُ — the gender-reversal rule', page: 218,
          body: 'Numbers ١–١٠ take a feminine marker; round numbers ٢٠+ never do.',
          points: [
            '**١ and ٢ agree** with the counted noun’s own gender: «رَجُلٌ وَاحِدٌ», «امْرَأَتَانِ اثْنَتَانِ» — مُرَكَّبًا «أَحَدَ عَشَرَ رَجُلًا», «إِحْدَى عَشْرَةَ امْرَأَةً».',
            '**٣–١٠ take the OPPOSITE gender**: «ثَلَاثَةُ رِجَالٍ» (تَاء on a masc. count!), «أَرْبَعُ نِسَاءٍ» (no تَاء on a fem. count) — مُرَكَّبًا «ثَلَاثَةَ عَشَرَ رَجُلًا», «ثَلَاثَ عَشْرَةَ امْرَأَةً».',
            '**٢٠–٩٠ · مِائَةٌ · أَلْفٌ**: invariant, no feminine marker at all.',
          ],
          after: 'Gender is judged by مُفْرَدِ الْمَعْدُودِ, not its plural — «أَرْبَعُ حِجَجٍ» (حِجَّةٌ = سَنَةٌ, fem.), not أَرْبَعَةُ, even though حِجَجٌ itself looks masculine-shaped.' },

        { t: 'mcq', q: '«ثَلَاثَةُ رِجَالٍ» vs «أَرْبَعُ نِسَاءٍ» — the counted nouns are masc./fem., but look at the numbers. What rule is this?',
          choices: ['الْمُخَالَفَةُ — ٣–١٠ take the opposite gender of الْمَعْدُود: تَاء with a masc. count, no تَاء with a fem. one', 'الْمُوَافَقَةُ — numbers always match الْمَعْدُود', 'A spelling inconsistency', 'Only applies to compound numbers'],
          correct: 0,
          why: '٣–١٠ reverse-gender; ١–٢ instead agree («رَجُلٌ وَاحِدٌ», «امْرَأَتَانِ اثْنَتَانِ»); ٢٠+ mark no gender at all.' },

        { t: 'mcq', q: '﴿أَحَدَ عَشَرَ كَوْكَبًا﴾ — what kind of عَدَد is this, and why «أَحَدَ» not «إِحْدَى»?',
          choices: ['تَرْكِيبُ مَزْجٍ (١١–١٩)؛ أَحَدَ because ١ and ٢ AGREE with الْمَعْدُود, and كَوْكَب is masculine', 'تَرْكِيبُ عَطْفٍ', 'الْمُخَالَفَةُ rule applies here', 'أَحَدَ عَشَرَ is a single عَدَدٌ مُفْرَدٌ'],
          correct: 0,
          why: '١١–١٩ is compound-by-مَزْج; but the gender-agreement rule for ١ still follows الْمَعْدُودِ’s own gender.' },

        { t: 'mcq', q: '«أَرْبَعُ حِجَجٍ» — حِجَّةٌ means “year” (fem.) but حِجَج looks like a masc. broken-plural shape. Why «أَرْبَعُ» not «أَرْبَعَةُ»?',
          choices: ['Gender is judged by مُفْرَدِ الْمَعْدُودِ (حِجَّة, fem.), never by the plural’s shape', 'أَرْبَعَةُ is also correct, no rule applies', 'حِجَج is actually feminine-shaped', 'The rule only applies to ١–٢'],
          correct: 0,
          why: 'الْعِبْرَةُ بِمُفْرَدِ الْمَعْدُودِ لَا بِجَمْعِهِ — a classic trap for exactly this kind of plural.' },
      ],
    },

    /* ═══ 12. الْعَدَدُ — إِفْرَادُ الْمَعْدُودِ وَجَمْعُهُ وَإِعْرَابُهُ ═══ */
    {
      id: 'adad-irab',
      title: 'خَاتِمَةُ الْبَابِ ‹٢›: إِفْرَادُ الْمَعْدُودِ وَجَمْعُهُ وَإِعْرَابُهُ',
      subtitle: 'مُفْرَدٌ/مُثَنًّى/جَمْعٌ · نَعْتٌ · مُضَافٌ إِلَيْهِ · تَمْيِيزٌ مَنْصُوبٌ',
      steps: [
        { t: 'teach', title: 'How many things, and what shape', page: 219,
          body: 'الْمَعْدُودِ’s own number depends on the number word.',
          points: [
            '**١ → مُفْرَد**, **٢ → مُثَنًّى**: «رَجُلٌ وَاحِدٌ», «امْرَأَتَانِ اثْنَتَانِ».',
            '**٣–١٠ → جَمْع**: «ثَلَاثَةُ رِجَالٍ», «أَرْبَعُ نِسَاءٍ».',
            '**everything else (١١+) → مُفْرَد**: «عِشْرُونَ رَجُلًا», «مِائَةُ امْرَأَةٍ», «أَلْفُ وَلَدٍ».',
          ] },

        { t: 'teach', title: 'الْإِعْرَابُ of الْمَعْدُود', page: 219,
          body: 'Each range governs الْمَعْدُودَ differently.',
          points: [
            '**١ · ٢** → the number is a **نَعْت**: «رَجُلٌ وَاحِدٌ», «امْرَأَتَانِ اثْنَتَانِ».',
            '**٣–١٠** → counted is **مُضَافٌ إِلَيْهِ** (مَجْرُور): «ثَلَاثَةُ رِجَالٍ». **١١–٩٩** → counted is **تَمْيِيزٌ مَنْصُوبٌ**: «أَحَدَ عَشَرَ رَجُلًا», «تِسْعُونَ امْرَأَةً».',
            '**مِائَةٌ · أَلْفٌ** → counted is **مُضَافٌ إِلَيْهِ** again: «مِائَةُ رَجُلٍ», «أَلْفُ امْرَأَةٍ».',
          ],
          after: 'If الْمَعْدُود is dropped, prefer تَاء for masc./none for fem.: «صُمْتُ خَمْسَةً» (أَيْ أَيَّامًا) · «قُمْتُ خَمْسًا» (أَيْ لَيَالِيَ) — dropping التَّاء for masc. too is also allowed.' },

        { t: 'mcq', q: '«تِسْعُونَ امْرَأَةً» — what is الْإِعْرَابُ of امْرَأَةً, and why not مَجْرُورَةً?',
          choices: ['تَمْيِيزٌ مَنْصُوبٌ — the ١١–٩٩ range governs its counted as مَنْصُوبٍ تَمْيِيزٍ, not مُضَافٍ إِلَيْهِ', 'مُضَافٌ إِلَيْهِ مَجْرُورٌ', 'نَعْتٌ مَرْفُوعٌ', 'مَفْعُولٌ بِهِ'],
          correct: 0,
          why: 'The shape shifts three times: ٣–١٠ مُضَافٌ إِلَيْهِ → ١١–٩٩ تَمْيِيزٌ مَنْصُوبٌ → مِائَة/أَلْف مُضَافٌ إِلَيْهِ again.' },

        { t: 'mcq', q: '«مِائَةُ رَجُلٍ» — same إِعْرَاب pattern as «ثَلَاثَةُ رِجَالٍ»?',
          choices: ['Yes — both مُضَافٌ إِلَيْهِ مَجْرُورٌ, though تِسْعُونَ in between switches to تَمْيِيزٍ مَنْصُوبٍ', 'No, مِائَةُ رَجُلٍ is تَمْيِيز', 'No, مِائَةُ رَجُلٍ is نَعْت', 'They differ in every respect'],
          correct: 0,
          why: 'مِائَة/أَلْف circle back to مُضَافٍ إِلَيْهِ, bracketing the ١١–٩٩ تَمْيِيز zone on both sides.' },

        { t: 'mcq', q: '«صُمْتُ خَمْسًا» — الْمَعْدُود is dropped. What does the missing تَاء on خَمْسًا imply?',
          choices: ['A feminine dropped counted (لَيَالٍ, “nights”) — الْمُخَالَفَةُ still works silently even when الْمَعْدُود is unspoken', 'خَمْسًا always means “days”', 'التَّاءُ is dropped at random, no meaning', 'This construction is ungrammatical'],
          correct: 0,
          why: 'Dropping الْمَعْدُودَ still carries its gender-shadow: تَاء ↔ masc. counted (أَيَّام), no تَاء ↔ fem. counted (لَيَالٍ).' },
      ],
    },

  ],
});
