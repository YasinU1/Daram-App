/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الثاني (٢د): حروف العطف (pp. 81–82) ──
   Authored from the Obsidian notes 78–80 (Nahw Fi Kubra). NO matn panels: pp.81–82 are not yet
   transcribed in the reader — teach cards use static ar:/arEn: blocks instead. When the reader
   catches up, add section `matn` + card `focus` per LESSON_SPEC.md. No bank steps yet either.   */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-2d',
  titleAr: 'حُرُوفُ الْعَطْفِ',
  titleEn: 'The Particle IV — coordination',
  pages: '81–82',
  sections: [

    /* ═══ 1. الواو · الفاء · ثم ═══ */
    {
      id: 'atf',
      title: 'الواو · الفاء · ثمّ',
      subtitle: 'الجمع المطلق · الترتيب والتعقيب · الترتيب والتراخي',
      steps: [
        { t: 'teach', title: 'الأول: الواو — absolute joining',
          ar: 'أَطِيعُوا اللهَ وَالرَّسُولَ',
          arEn: 'Obey Allah AND the Messenger — the wāw merely joins.',
          body: 'A new chapter: the **non-operating** particles (الحرف غير العامل). Its first class is **أحرف العطف** — nine: **الواو · الفاء · ثم · حتى · أو · أم · لا · بل · لكن**. First, the واو — **للجمع مطلقًا**.',
          points: [
            'It joins **without implying order or simultaneity**: «جاءَ زيدٌ وعمرٌو» may mean together OR in sequence — the واو is neutral on **المعية vs الترتيب**; context decides.',
            'It also serves beyond plain joining: in a command ﴿فانكِحوا ما طابَ لكم من النساءِ **مَثنى وثُلاثَ ورُباعَ**﴾, and in a condition ﴿مَن كانَ عدوًّا لله **و**ملائكتِه **و**رُسُلِه…﴾.',
          ] },

        { t: 'teach', title: 'الثاني: الفاء — order + immediacy',
          ar: 'الثاني: الفاء، وهي للجمعِ مع الترتيبِ والتعقيبِ',
          arEn: 'The second: al-fāʾ — joining with sequence and immediacy.',
          points: [
            '«آمنَتْ خديجةُ **فـ**أبو بكرٍ» — Abū Bakr’s faith followed Khadījah’s, right after.',
            'Joining sentence to sentence it gives **الترتيب الزماني** ﴿وكنتم أمواتًا فأحياكم﴾, or **الترتيب الذكري** — detail upon a summary: ﴿فقد سألوا موسى أكبرَ من ذلك **فـ**قالوا أَرِنا اللهَ جهرةً﴾.',
            'It also marks **السبب**: what follows is the cause ﴿وتَزَوَّدوا **فـ**إنَّ خيرَ الزادِ التقوى﴾ (≈ because), or what precedes is the cause ﴿…ظلمتم أنفسَكم باتخاذِكم العجلَ **فـ**توبوا﴾ (≈ therefore).',
          ] },

        { t: 'teach', title: 'الفاء الفصيحة',
          body: 'The **eloquent فاء** signals a whole **deleted** stretch of speech before the clause it introduces:',
          examples: [
            { ar: 'فَقُلْنَا اذْهَبَا إِلَى الْقَوْمِ الَّذِينَ كَذَّبُوا بِآيَاتِنَا فَدَمَّرْنَاهُمْ تَدْمِيرًا', en: '“Go to the people…” — THEN We destroyed them', note: 'ellipsis: they went, called them, were denied — فدمّرناهم' },
          ],
          after: 'The فاء “speaks eloquently” of what was omitted: the going, the summons, and the denial are all understood between the two clauses.' },

        { t: 'teach', title: 'الثالث: ثُمَّ — order + delay',
          ar: 'الثالث: ثُمَّ، وهي للجمعِ مع الترتيبِ والتراخي',
          arEn: 'The third: thumma — joining with sequence and delay.',
          points: [
            '«آمنَ عليٌّ **ثُمَّ** عمرُ» — ʿUmar’s faith came later, after an interval.',
            'Sentence to sentence: **الترتيب الزماني** ﴿وكنتم أمواتًا فأحياكم ثم يُميتُكم ثم يُحييكم ثم إليه تُرجَعونَ﴾, or **الترتيب الذكري** — the joined clause HIGHER in rank (≈ furthermore): ﴿وقال آلِهتنا … **ثم** اللهُ شهيدٌ على ما يفعلونَ﴾.',
          ],
          after: 'الفاء vs ثم: both order — الفاء with immediacy (تعقيب), ثم with delay (تراخٍ).' },

        { t: 'mcq', q: '«جَاءَ زَيْدٌ وَعَمْرٌو» — does the واو say who came first?',
          choices: ['No — it is للجمع مطلقًا, neutral on order and simultaneity; context decides', 'Yes — Zayd came first', 'Yes — they came together', 'Yes — ʿAmr came first'],
          correct: 0,
          why: 'The classic trap: reading الترتيب into the واو. Unlike الفاء and ثم, the واو merely joins — they may have come together or in either sequence.' },

        { t: 'mcq', q: '«آمَنَتْ خَدِيجَةُ فَأَبُو بَكْرٍ» — the فاء tells us…',
          choices: ['Abū Bakr believed after Khadījah, immediately after (ترتيب + تعقيب)', 'They believed simultaneously', 'Abū Bakr believed after a long interval', 'Nothing about order'],
          correct: 0,
          why: 'الفاء = joining + sequence + immediacy. A long interval would want ثم (تراخٍ); no claim about order at all would be the واو.' },

        { t: 'mcq', q: 'And «آمَنَ عَلِيٌّ ثُمَّ عُمَرُ»?',
          choices: ['ʿUmar believed after ʿAlī, with a delay (ترتيب + تراخٍ)', 'ʿUmar believed right after ʿAlī', 'They believed together', 'ثم only emphasises'],
          correct: 0,
          why: 'ثم = joining + sequence + DELAY. That interval is exactly what separates it from الفاء’s تعقيب.' },

        { t: 'mcq', q: 'In ﴿وَتَزَوَّدُوا فَإِنَّ خَيْرَ الزَّادِ التَّقْوَى﴾ the فاء marks…',
          choices: ['السبب — what follows is the cause: “take provision, BECAUSE the best provision is taqwā”', 'الترتيب الزماني', 'a deleted clause (الفاء الفصيحة)', 'a conditional answer'],
          correct: 0,
          why: 'One of الفاء’s sentence-joining senses: the following clause gives the reason (≈ لام التعليل). The mirror case — preceding clause as cause, ≈ “therefore” — is ﴿…فتوبوا إلى بارئِكم﴾.' },

        { t: 'mcq', q: '﴿… ثُمَّ اللهُ شَهِيدٌ عَلَى مَا يَفْعَلُونَ﴾ — what kind of ترتيب is this ثم?',
          choices: ['الترتيب الذكري — the joined clause is higher in rank (≈ furthermore), not later in time', 'الترتيب الزماني — Allah’s witnessing came afterwards', 'No ترتيب at all', 'تعقيب'],
          correct: 0,
          why: 'Allah’s witnessing is not chronologically after their words — it OUTRANKS them. That rhetorical stepping-up is الترتيب الذكري.' },

        { t: 'mcq', q: '﴿اذْهَبَا إِلَى الْقَوْمِ … فَدَمَّرْنَاهُمْ تَدْمِيرًا﴾ — what is this فاء?',
          choices: ['الفاء الفصيحة — signalling deleted clauses (they went, summoned, were denied) before the destruction', 'فاء السببية with hidden أنْ', 'A فاء of simultaneity', 'فاء الجزاء of a condition'],
          correct: 0,
          why: 'Straight from command to destruction skips the whole story — the فصيحة fāʾ eloquently implies the omitted events. (فاء السببية would put a following مضارع in naṣb.)' },

        { t: 'written',
          prompt: 'Compare الواو، الفاء، and ثم as coordinating particles: state the meaning of each with an example, and the key contrast between الفاء and ثم.',
          model: 'الواو is للجمع مطلقًا: it joins without implying order or simultaneity — ﴿أطيعوا اللهَ والرسولَ﴾; «جاء زيدٌ وعمرٌو» may mean together or in sequence, context deciding. الفاء is للجمع مع الترتيب والتعقيب: joining with sequence and immediacy — آمنتْ خديجةُ فأبو بكرٍ; between sentences it also gives الترتيب الزماني ﴿وكنتم أمواتًا فأحياكم﴾, الترتيب الذكري, and السبب ﴿وتزوَّدوا فإنَّ خيرَ الزادِ التقوى﴾. ثم is للجمع مع الترتيب والتراخي: sequence with delay — آمن عليٌّ ثم عمرُ; it too joins sentences زمانيًّا ﴿ثم يميتُكم ثم يحييكم﴾ or ذكريًّا ﴿ثم اللهُ شهيدٌ على ما يفعلون﴾. The contrast: الفاء implies the second follows immediately (تعقيب); ثم implies an interval (تراخٍ).' },
      ],
    },
  ],
});
