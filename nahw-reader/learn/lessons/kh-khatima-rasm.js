/* ── Daram Learn — al-Kubrā fī an-Naḥw · الخاتمة: الرسم والوصل والوقف (pp. 228–232) ──
   Authored directly from books/kubra-nahw/notes/khatima_01/02/03_*.md (backward book pass),
   which distil the book PDF page-by-page. NO matn panels: these pages are not transcribed in
   the reader — teach cards use static ar:/arEn: blocks and carry `page:` (book page) so every
   key idea maps back to the book. No bank steps, no written steps (key-idea + MCQ only).
   Sits right before kh-wujuh-20 (p.233) — see LESSON_SPEC.md mapping table.                    */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'kh-khatima-rasm',
  num: 21,
  titleAr: 'الرَّسْمُ وَالْوَصْلُ وَالْوَقْفُ',
  titleEn: 'الخاتمة · orthography — spelling, joining, stopping',
  pages: '228–232',
  sections: [

    /* ═══ 1. رسم الحروف ═══ */
    {
      id: 'rasm',
      title: 'الفصل الأول: رَسْم الحروف',
      subtitle: 'يُكتَب ولا يُلفَظ · يُلفَظ ولا يُكتَب · كتابة الألف المتطرفة',
      steps: [
        { t: 'teach', title: 'Written but not pronounced', page: 228,
          body: 'Where spelling and sound part ways — first direction: letters written but silent.',
          points: [
            'The alif is written silent after the **واو** of the attached marfūʿ pronoun: «أَطَاعُوا» (the final ا).',
            'And in «مِائَة»: ﴿مِائَةٍ﴾.',
          ] },

        { t: 'teach', title: 'Pronounced but not written (الرسم العثماني)', page: 229,
          body: 'The mushaf drops letters the ear still hears.',
          points: [
            '**alif dropped**: جمع مذكر سالم ﴿الْعَالَمِينَ﴾ · جمع مؤنث سالم «كَلِمَاتٌ» · أعلام أعجمية 3+ letters ﴿إِبْرَاهِيمَ · إِسْمَاعِيلَ · إِسْحَاقَ﴾ · متكلم-مع-غيره مرفوع pronoun before ها وأخواتها ﴿زِدْنَاهُمْ﴾.',
            '**yāʾ dropped**: two yāʾs meeting mid-word ﴿الْأُمِّيِّينَ﴾ or word-final ﴿يَحْيَى﴾; before a sākin «يُنَادِ الْمُنَادَ»; end of an āyah ﴿الْكَبِيرُ الْمُتَعَالِ﴾; muḍāf to ياء المتكلم before a منادى ﴿رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ﴾.',
            '**wāw dropped** when a wāw meets a sākin after a ḍammah ﴿يَسْتَوُونَ﴾.',
          ] },

        { t: 'teach', title: 'Writing the final alif (الألف المتطرفة)', page: 229,
          body: 'For a ثلاثي word, the choice between ى and ا follows the root.',
          points: [
            'written **yāʾ** if the root is yāʾ: «سَعَى الْفَتَى إِلَى الْهُدَى».',
            'written **alif** if the root is wāw: «دَعَا النَّبِيُّ ﷺ بِالْخُلُقِ».',
            'In a رباعي and above: always written **yāʾ** — «الْمُصْطَفَى».',
          ] },

        { t: 'mcq', q: '﴿الْعَالَمِينَ﴾ — the mushaf writes no alif though we say “al-ʿālamīn.” Why?',
          choices: ['الرسم العثماني drops the alif of جمع المذكر السالم — spelling and sound diverge here', 'It is a scribal error preserved by tradition', 'العالمين is not really جمع مذكر سالم', 'The alif was never pronounced'],
          correct: 0,
          why: 'This فصل explains exactly these mushaf spellings: جمع مذكر سالم loses its written alif though it is fully pronounced.' },

        { t: 'mcq', q: '«سَعَى الْفَتَى» vs «دَعَا النَّبِيُّ ﷺ» — why ى on one final alif and ا on the other?',
          choices: ['سعى’s root is yāʾ (→ ى); دعا’s root is wāw (→ ا) — the ثلاثي’s final alif is written by its root letter', 'Random spelling variation', 'Both should be written ى', 'Both should be written ا'],
          correct: 0,
          why: 'Rule of thumb: root-yāʾ → ى, root-wāw → ا in the ثلاثي; anything longer (رباعي+) is always ى.' },

        { t: 'mcq', q: '﴿رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ﴾ — a yāʾ is silently dropped here in writing. Which case is this?',
          choices: ['muḍāf to ياء المتكلم right before a منادى — the yāʾ is elided in writing though heard', 'Two yāʾs meeting mid-word', 'End of an āyah', 'Before a sākin letter'],
          correct: 0,
          why: 'رَبِّ = يا ربّي with the speaker-yāʾ dropped in writing before the vocative — one of five yāʾ-dropping cases.' },
      ],
    },

    /* ═══ 2. الوصل ═══ */
    {
      id: 'wasl',
      title: 'الفصل الثاني: الوَصْل',
      subtitle: 'همزة الوصل ومواضعها · التقاء الساكنين',
      steps: [
        { t: 'teach', title: 'الوصل and همزة الوصل', page: 230,
          ar: 'عَدَمُ قَطْعِ الصَّوْتِ عِنْدَ آخِرِ الْكَلِمَةِ',
          arEn: 'Al-waṣl: not cutting the sound at a word’s end — the default in continuous speech.',
          body: 'همزة الوصل is written at a word’s start, sounded only when you begin on it, dropped when you join to it — ﴿اقْرَأِ الْقُرْآنَ وَاعْمَلْ بِهِ﴾ (the ا of واعمل is silent in flow).',
          points: [
            'Four مواضع: الاسم المعرَّف بأل («الرَّبّ»)؛ specific nouns — اسم · است · ابن · ابنة · ابنم · امرئ · امرأة · اثنين · اثنتين · أيمن الله.',
            'أمر الفعل الثلاثي («اعْرِفْ رَبَّكَ وَاعْبُدْهُ»)؛ الماضي 5+ letters + its أمر + its مصدر («اسْتَغْفَرَ» · «اسْتَغْفِرْ» · «اسْتِغْفَار»).',
          ],
          after: 'The alif of ابن drops when it is بدل directly between two proper names: «مُحَمَّدُ بْنُ عَبْدِ اللَّهِ» — but stays when a third name intervenes: «عَبْدُ اللَّهِ بْنُ أُبَيِّ بْنِ سَلُولٍ».' },

        { t: 'teach', title: 'التقاء الساكنين', page: 231,
          body: 'Two sukūns meeting — sometimes fine as-is, sometimes must be fixed.',
          points: [
            '**على حَدِّه** (allowed, no fix): at a stop ﴿بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ﴾ (stop on الرحيمْ); a حرف مدّ followed by a مُدغَم letter ﴿الضَّالِّينَ﴾.',
            '**على غير حَدِّه** (must be fixed): يُحذَف الأول if it is a حرف مدّ («النَّجَاةُ فِي الصِّدْقِ» → pronounced فـ الصدق); يُضَمّ الأول — ميم الجمع «هُمُ النَّاصِحُونَ», واو الجمع in a verb «الْمُسْلِمُونَ دَعَوُا اللَّهَ».',
            'يُفتَح الأول if it is **مِنْ** («الْإِخْلَاصُ مِنَ النَّصِيحَةِ»)؛ يُكسَر الأول (the default) — صحيح letter · نون تنوين · حرف لين.',
          ] },

        { t: 'mcq', q: '﴿اقْرَأِ الْقُرْآنَ وَاعْمَلْ بِهِ﴾ — is the alif of واعمل sounded when read in flow?',
          choices: ['No — همزة الوصل is dropped in continuous speech, only sounded when you START on that word', 'Yes, always sounded', 'Only in the Qurʾān', 'It depends on the reciter’s style, no rule'],
          correct: 0,
          why: 'The defining trait of همزة الوصل: written, but silent once joined to preceding speech.' },

        { t: 'mcq', q: '«مُحَمَّدُ بْنُ عَبْدِ اللَّهِ» — the alif of ابن drops here. Why not in the first بن of «عَبْدُ اللَّهِ بْنُ أُبَيِّ بْنِ سَلُولٍ»?',
          choices: ['ابن’s alif drops only when it sits as بدل directly BETWEEN two proper names — a third name breaks that adjacency', 'ابن’s alif always drops', 'ابن’s alif never drops', 'This is unrelated to همزة الوصل'],
          correct: 0,
          why: 'The drop-condition is narrow: بدل sandwiched exactly between two علم names.' },

        { t: 'mcq', q: '«هُمُ النَّاصِحُونَ» — why هُمُ rather than هُمْ before الناصحون?',
          choices: ['التقاء الساكنين off its footing: ميم الجمع facing a sākin is fixed by ḍamma (يُضَمّ الأول)', 'It is a dialectal variant with no rule', 'هم is always spelled with a ḍamma', 'الناصحون starts with a vowel, so no fix was needed'],
          correct: 0,
          why: 'Two sukūns meeting off their normal footing must be resolved — ميم الجمع and واو الجمع are fixed by ḍamma.' },
      ],
    },

    /* ═══ 3. الوقف ═══ */
    {
      id: 'waqf',
      title: 'الفصل الثالث: الوَقْف',
      subtitle: 'قطع الصوت عند آخر الكلمة · إعراب المنوَّن عند الوقف',
      steps: [
        { t: 'teach', title: 'The rules of stopping', page: 232,
          ar: 'قَطْعُ الصَّوْتِ عِنْدَ آخِرِ الْكَلِمَةِ',
          arEn: 'Al-waqf: cutting the sound at a word’s end — the opposite of الوصل.',
          points: [
            '**ساكن الآخر** → keep the sukūn: «رَحْمَةَ اللَّهِ نَرْجُو». **متحرِّك الآخر** → drop the vowel to sukūn: «أَنْزَلَ اللَّهُ الْقُرْآنْ».',
            '**تاء التأنيث المربوطة** → turns into a silent **هاء**: «اسْتُشْهِدَ حَمْزَهْ». **الاسم المقصور** → keeps its alif: «الْهُدَى».',
            '**الاسم المنقوص المنوَّن** → either sukūn (drop the yāʾ: «جَاءَنَا هَادْ») or restore the yāʾ («جَاءَنَا هَادِي»).',
          ] },

        { t: 'teach', title: 'Stopping on a منوَّن ending', page: 232,
          body: 'Nunation behaves differently depending on its vowel.',
          points: [
            '**ضمة/كسرة** tanwīn → drop it to sukūn: «صَدَقَ مُحَمَّدْ».',
            '**فتحة** tanwīn → replace with an **alif**: «وَكَذَّبَ الْفَاسِقُونَ مُحَمَّدًا» → stopped مُحَمَّدَا.',
            '**نون التوكيد الخفيفة** → stop with alif ﴿لَنَسْفَعًا بِالنَّاصِيَةِ﴾. **إذَنْ** → its نون flips to alif when stopped on.',
          ] },

        { t: 'mcq', q: '«اسْتُشْهِدَ حَمْزَهْ» — what happened to the ة of حمزة at the stop?',
          choices: ['تاء التأنيث المربوطة turns into a silent هاء at الوقف', 'It disappears entirely', 'It becomes a full تاء sound', 'It stays a ة sound, unchanged'],
          correct: 0,
          why: 'One of the fixed waqf-transformations: ة → silent هـ when you stop.' },

        { t: 'mcq', q: '«وَكَذَّبَ الْفَاسِقُونَ مُحَمَّدًا» stopped → «مُحَمَّدَا» — why does the fatḥa-tanwīn become an alif rather than just dropping?',
          choices: ['فتحة tanwīn is the one case replaced by alif at الوقف, unlike ضمة/كسرة tanwīn which simply drop to sukūn', 'All tanwīn becomes alif at waqf', 'This word is an exception with no rule', 'محمدا has no tanwīn here'],
          correct: 0,
          why: 'ضمة/كسرة-tanwīn drop to sukūn at waqf; فتحة-tanwīn alone converts to a long alif sound.' },
      ],
    },

  ],
});
