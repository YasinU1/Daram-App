/* ── Daram Learn — al-Kubrā fī an-Naḥw · الخاتمة · وجوه الكلمات — آخر الكتاب: الواو والياء (pp. 253–254) ──
   FIRST course of the "build backwards from the end" pass. Key-idea teach cards carry `page:`
   (book page) AND an interactive matn panel (src: DATA_KH_WT in ../books/kubra-nahw/khatima-wujuh-tail.js,
   loaded in learn.html before this file). Notes source: books/kubra-nahw/notes/khatima_04_wujuh-al-kalimat.md. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'kh-wujuh-tail',
  num: 25,
  titleAr: 'خَاتِمَةُ الْكِتَابِ: الْوَاوُ وَالْيَاءُ',
  titleEn: 'End of the Book — the wāw & the yāʾ',
  pages: '253–254',
  sections: [

    /* ═══ 1. الواو — ten faces ═══ */
    {
      id: 'al-waw',
      title: 'الْوَاوُ',
      subtitle: 'عَشَرَةُ وُجُوهٍ: مِنَ الاسْتِئْنَافِ إِلَى الإِشْبَاعِ',
      matn: { src: 'DATA_KH_WT', from: 1, to: 12, check: 'الْوَاوُ' },
      steps: [
        { t: 'teach', title: 'The wāw — one letter, ten jobs', page: 253,
          focus: [1, 2],
          ar: 'الْوَاوُ حَرْفٌ تَأْتِي عَلَى عَشَرَةِ وُجُوهٍ',
          arEn: 'The wāw is a particle that comes in ten faces.',
          points: [
            'The single most overloaded letter in the language — the same **و** can carry **ten** distinct grammatical jobs.',
            'Some are **meaning-bearing coordinators/particles** (عَطْف، حَال، مَعِيَّة، قَسَم، رُبَّ، اسْتِئْنَاف), others are purely **structural** parts of the word (a doer-pronoun, a rafʿ-sign, or elongation).',
            'The skill is not memorising ten meanings but **reading the context** that fixes which و you are looking at.',
          ],
          after: 'The book lists them in order; we group them into three clusters.' },

        { t: 'teach', title: 'Cluster 1 — the coordination family', page: 253,
          focus: [3, 4, 5, 6],
          body: 'Four faces that link one thing to another:',
          points: [
            '**الاسْتِئْنَاف** (fresh start): ﴿وَإِذْ قَالَ رَبُّكَ لِلْمَلَائِكَةِ﴾ — a new sentence, no iʿrāb link.',
            '**العَطْف** (coordination): ﴿وَعَهِدْنَا إِلَى إِبْرَاهِيمَ وَإِسْمَاعِيلَ﴾ — joins two of the same rank.',
            '**الحَال** (circumstance, “while”): ﴿وَأَغْرَقْنَا آلَ فِرْعَوْنَ وَأَنْتُمْ تَنْظُرُونَ﴾.',
            '**المَعِيَّة** (“together with”): «لَا تَنْهَ عَنْ خُلُقٍ وَتَأْتِيَ مِثْلَهُ» — note the **naṣb** on تَأْتِيَ: the مَعِيَّة-wāw puts the following مُضَارِع in the accusative.',
          ] },

        { t: 'teach', title: 'Cluster 2 — oath, rubba, extra', page: 253,
          focus: [7, 8, 9],
          body: 'Three particle-faces:',
          points: [
            '**القَسَم** (oath): ﴿ن وَالْقَلَمِ وَمَا يَسْطُرُونَ﴾ — “by the pen”; it is a حَرْفُ جَرٍّ for the oath.',
            '**بِمَعْنَى رُبَّ** (“many a”): «وَلَيْلٍ كَمَوْجِ الْبَحْرِ أَرْخَى سُدُولَهُ» — the *wāw rubba*, jarring what follows.',
            '**الزَّائِدَة** (extra): «رَبَّنَا وَلَكَ الْحَمْدُ» — adds nothing to the iʿrāb.',
          ] },

        { t: 'teach', title: 'Cluster 3 — the wāw as part of the word', page: 253,
          focus: [10, 11, 12],
          body: 'Three faces where the و belongs to the word itself, not between words:',
          points: [
            '**ضَمِير مَرْفُوع** (a doer-pronoun): «آمَنُوا وَيُؤْمِنُونَ» — the و *is* the plural subject.',
            '**عَلَامَة رَفْع** (a rafʿ-marker): ﴿وَكَانَ أَبُوهُمَا صَالِحًا﴾ — the و of *أَبُو* marks rafʿ in the five nouns (also the و of the sound masculine plural).',
            '**الإِشْبَاع** (elongation): a ḍammah stretched into a و for rhythm.',
          ],
          after: 'So before parsing any و, ask: is it linking, swearing, or part of the word?' },

        { t: 'mcq', q: 'In «لا تَنْهَ عن خُلُقٍ وَتَأْتِيَ مِثْلَهُ», why is تأتيَ manṣūb?',
          choices: ['It follows the واو المعيّة (“together with”), which puts the مضارع after it in naṣb', 'It is a normal عطف on تنهَ, so it copies its jazm', 'واو الحال requires naṣb', 'It is an oath-wāw'],
          correct: 0,
          why: 'The معية-wāw = “don’t forbid a trait while doing its like”. It is the one و that itself governs naṣb on the following verb — not a plain عطف (which would copy تنهَ).' },

        { t: 'mcq', q: '﴿ن وَالْقَلَمِ وَمَا يَسْطُرُونَ﴾ — the first و is which face?',
          choices: ['واو القسم — the oath particle (“by the pen”)', 'واو العطف joining ن and القلم', 'واو المعية', 'واو الحال'],
          correct: 0,
          why: 'After the opening ن, «والقلم» is an oath: و here is a حرف جر للقسم. The second و (وما يسطرون) is عطف.' },

        { t: 'mcq', q: 'The و of أَبُوهُمَا in ﴿وَكَانَ أَبُوهُمَا صَالِحًا﴾ is …',
          choices: ['علامة رفع — a rafʿ-marker of the five nouns, part of the word', 'واو العطف', 'a doer-pronoun (ضمير مرفوع)', 'واو الإشباع'],
          correct: 0,
          why: 'أبو / أخو / حمو … (الأسماء الخمسة) show rafʿ with و. It is a *marker*, not a coordinator or a pronoun — cluster 3.' },

        { t: 'mcq', q: 'Which is the واو الزائدة?',
          choices: ['«رَبَّنَا وَلَكَ الْحَمْدُ» — adds nothing to the iʿrāb', '﴿وَأَغْرَقْنَا آلَ فِرْعَوْنَ وَأَنْتُمْ تَنْظُرُونَ﴾', '«آمَنُوا وَيُؤْمِنُونَ»', '﴿وَالْقَلَمِ﴾'],
          correct: 0,
          why: 'The زائدة is grammatically inert. The others are حال, a doer-pronoun, and an oath respectively.' },

        { t: 'written',
          prompt: 'Name the ten faces of the wāw and sort them into “particle/linking” faces vs “part-of-the-word” faces. Give the special ruling of the واو المعيّة.',
          model: 'The ten: (1) الاستئناف ﴿وإذ قال ربك للملائكة﴾, (2) العطف ﴿وعهدنا إلى إبراهيم وإسماعيل﴾, (3) الحال ﴿وأغرقنا آل فرعون وأنتم تنظرون﴾, (4) المعية «لا تنه عن خلق وتأتيَ مثله», (5) القسم ﴿ن والقلم وما يسطرون﴾, (6) بمعنى رُبَّ «وليل كموج البحر أرخى سدوله», (7) الزائدة «ربنا ولك الحمد», (8) ضمير مرفوع «آمنوا ويؤمنون», (9) علامة رفع ﴿وكان أبوهما صالحا﴾, (10) الإشباع. Linking/particle faces: 1–7 (they sit between words — coordination, circumstance, accompaniment, oath, rubba, resumption, extra). Part-of-the-word faces: 8–10 (the doer-pronoun, the rafʿ-marker of the five nouns and sound masculine plural, and elongation). Special ruling: the واو المعية itself puts the مضارع after it in naṣb — تأتيَ — unlike plain عطف which would copy the preceding verb’s case.' },
      ],
    },

    /* ═══ 2. الياء — three faces + the closing of the book ═══ */
    {
      id: 'al-ya',
      title: 'الْيَاءُ',
      subtitle: 'ثَلَاثَةُ أَوْجُهٍ · وَخِتَامُ الْكِتَابِ',
      matn: { src: 'DATA_KH_WT', from: 14, to: 19, check: 'الْيَاءُ' },
      steps: [
        { t: 'teach', title: 'The yāʾ — three faces', page: 254,
          focus: [15, 16, 17, 18],
          ar: 'الْيَاءُ حَرْفٌ عَلَى ثَلَاثَةِ أَوْجُهٍ',
          arEn: 'The yāʾ is a particle of three faces.',
          points: [
            '**عَلَامَة نَصْب** (a naṣb-marker): ﴿رَبِّ الْمَشْرِقَيْنِ وَرَبِّ الْمَغْرِبَيْنِ﴾، ﴿يَتَقَبَّلُ اللهُ مِنَ الْمُتَّقِينَ﴾ — the ـيْنِ of the dual and the sound masculine plural.',
            '**لِلإِشْبَاع** (elongation): a kasrah stretched into a ي for rhythm — «إِنَّ اللهَ أَطَعْتِيهِ».',
            '**ضَمِير** (a pronoun): for the **addressed female** «تَشْكُرُ اللهَ … فَاشْكُرِيهِ», and for the **speaker** ﴿هَذَا مِنْ فَضْلِ رَبِّي﴾.',
          ],
          after: 'Mirror of the wāw’s cluster 3: a naṣb-marker (vs the wāw’s rafʿ-marker), elongation, and a pronoun.' },

        { t: 'teach', title: 'The book ends here', page: 254,
          focus: [19],
          body: 'With the yāʾ the author closes al-Kubrā fī an-Naḥw.',
          points: [
            'He seals it: *«قَدْ تَمَّتِ الكُبْرَى في النَّحْوِ بِتَوْفِيقِ اللَّهِ»*.',
            'And the final line — **سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا أَنْتَ، أَسْتَغْفِرُكَ وَأَتُوبُ إِلَيْكَ**.',
            'This course is the **last page of the book**; the backwards build proceeds from here toward the front.',
          ] },

        { t: 'mcq', q: 'The ـيْنِ in ﴿مِنَ الْمُتَّقِينَ﴾ and ﴿الْمَشْرِقَيْنِ﴾ is which face of the yāʾ?',
          choices: ['علامة نصب (also jarr) — the marker of the dual and sound masculine plural', 'a speaker-pronoun', 'إشباع (elongation)', 'an addressed-female pronoun'],
          correct: 0,
          why: 'The dual (ـَيْنِ) and sound masculine plural (ـِينَ) show naṣb/jarr with ي — a case-marker, parallel to the wāw as a rafʿ-marker.' },

        { t: 'mcq', q: 'In ﴿هَذَا مِنْ فَضْلِ رَبِّي﴾, the ي is …',
          choices: ['ضمير المتكلم — the speaker’s “my”', 'علامة نصب', 'للإشباع', 'ضمير المخاطبة'],
          correct: 0,
          why: 'رَبِّي = “my Lord”: the ي is the متكلم pronoun. The مخاطبة (addressed-female) ي appears in «فاشكُريهِ».' },

        { t: 'written',
          prompt: 'State the three faces of the yāʾ with an example each, and note how they parallel the wāw’s “part-of-the-word” cluster.',
          model: 'The yāʾ has three faces: (1) علامة نصب (and jarr) — the marker of the dual and the sound masculine plural ﴿رب المشرقين ورب المغربين﴾، ﴿من المتقين﴾; (2) للإشباع — a kasrah elongated into ي for rhythm «إن الله أطعتيه»; (3) ضمير — for the addressed female «فاشكريه» and for the speaker ﴿هذا من فضل ربي﴾. This mirrors the wāw’s third cluster: where the wāw is a rafʿ-marker (five nouns / sound masculine plural), a doer-pronoun, and elongation, the yāʾ is the matching naṣb/jarr-marker, a pronoun, and elongation. With this face the author closes the book.' },
      ],
    },
  ],
});
