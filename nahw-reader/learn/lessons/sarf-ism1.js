/* ── Daram Learn — Shadhā al-ʿArf · التقسيمان الأول والثاني للاسم (Worksheets 17–18) ──
   The bare noun's patterns (trilateral 10/12, quadriliteral 5+1, quinqueliteral 4),
   then jāmid vs mushtaqq, ishtiqāq's three grades, and the ten derivatives.
   Authored from books/shadha-arf/wk17-ism1-tajarrud.js, wk18-ism2-jumud.js.      */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'sarf-ism-1-2',
  titleAr: 'التَّقْسِيمَانِ الْأَوَّلُ وَالثَّانِي لِلِاسْمِ',
  titleEn: 'The Noun I: Patterns & Derivation',
  pages: 'Wk 17–18',
  sections: [

    /* ═══ 1. Trilateral noun patterns ═══ */
    {
      id: 'thulathi',
      title: 'The bare trilateral noun: ten patterns',
      subtitle: 'من فَعْل إلى فُعُل — ولماذا ليست اثني عشر',
      matn: { src: 'DATA_WK17', from: 1, to: 21, check: 'الْبَابُ' },
      steps: [
        { t: 'teach', title: 'The ten agreed patterns',
          focus: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
          points: [
            'Fāʾ fatḥah: **فَعْل** سَهْم · **فَعَل** قَمَر · **فَعِل** كَتِف · **فَعُل** عَضُد.',
            'Fāʾ kasrah: **فِعْل** جِمْل · **فِعَل** عِنَب · **فِعِل** إِبِل — so rare Sībawayh claimed إبل is its only word.',
            'Fāʾ ḍammah: **فُعْل** قُفْل · **فُعَل** صُرَد · **فُعُل** عُنُق.',
          ] },

        { t: 'teach', title: 'Why not twelve? — and takhfīf',
          focus: [17, 18, 19, 20, 21],
          points: [
            '3 fāʾ-vowels × 4 ʿayn-states = 12, but: **فُعِل** is nearly reserved for the passive verb (rare: دُئِل)، and **فِعُل** does not exist — moving kasrah→ḍammah is hard on the tongue.',
            'The ḥubuk-reading (بكسر فضم) is answered by **تداخل اللغتين** — ḥibik + ḥubuk mixed — or itbāʿ to ذَاتِ.',
            '**Lightening**: كَتِف → كَتْف/كِتْف؛ a guttural second letter allows a fourth variant with two kasrahs — فَخِذ has four dialects. عَضُد، إبل، عُنُق lighten by sukūning the ʿayn.',
          ] },

        { t: 'mcq', q: 'How many BARE trilateral noun patterns are agreed upon?',
          choices: ['Ten', 'Twelve', 'Six', 'Twenty'],
          correct: 0,
          why: 'الأوزان المتفق عليها عشرة — the rational grid gives 12, but فُعِل is scant and فِعُل unattested.' },

        { t: 'mcq', q: 'Why does فِعُل (kasrah then ḍammah) not exist?',
          choices: ['The shift from kasrah to ḍammah is articulatorily difficult (عُسر الانتقال)', 'It clashes with the verb', 'Sībawayh forbade it', 'It exists in poetry'],
          correct: 0,
          why: 'لِعُسْرِ الِانْتِقَالِ مِنْ كَسْرٍ إِلَى ضَمٍّ — the tongue resists rising from i to u.' },

        { t: 'mcq', q: 'Sībawayh claimed فِعِل (two kasrahs) has only ONE word:',
          choices: ['إِبِل', 'عِنَب', 'كَتِف', 'عُنُق'],
          correct: 0,
          why: 'حَتَّى ادَّعَى سِيبَوَيْهِ أَنَّهُ لَمْ يَرِدْ مِنْهُ إِلَّا إِبِلٌ.' },

        { t: 'mcq', q: 'فُعِل barely occurs in nouns because…',
          choices: ['it was reserved for the passive verb', 'it is hard to pronounce', 'it clashes with فُعَل', 'no reason given'],
          correct: 0,
          why: 'قُصِدَ تَخْصِيصُهُ بِالْفِعْلِ الْمَبْنِيِّ لِلْمَجْهُولِ — ḍuriba\'s shape stays verbal.' },

        { t: 'mcq', q: 'فَخِذ can be said four ways because…',
          choices: ['its second letter is guttural, adding the double-kasrah variant to the usual lightenings', 'it is a loanword', 'it has two roots', 'poets invented them'],
          correct: 0,
          why: 'katif-type nouns lighten two ways (فَخْذ، فِخْذ)؛ a ḥalqī second letter permits فِخِذ too — أربع لغات.' },
      ],
    },

    /* ═══ 2. Quadriliteral & quinqueliteral ═══ */
    {
      id: 'rubai-khumasi',
      title: 'Quadriliteral & quinqueliteral noun patterns',
      subtitle: 'جعفر · درهم · قِمَطْر — سفرجل · جحمرش',
      matn: { src: 'DATA_WK17', from: 22, to: 39, check: 'وَأَوْزَانُ' },
      steps: [
        { t: 'teach', title: 'Five (or six) quadriliteral patterns',
          focus: [22, 23, 24, 25, 26, 27, 28, 29],
          points: [
            '**فَعْلَل** جَعْفَر · **فِعْلِل** زِبْرِج (adornment) · **فُعْلُل** بُرْثُن (lion\'s claw) · **فِعَلّ** قِمَطْر (book-satchel) · **فِعْلَل** دِرْهَم.',
            'Al-Akhfash added **فُعْلَل** جُخْدَب — some call it a variant of jukhdub; الصحيح أنه أصل قليل.',
          ] },

        { t: 'teach', title: 'Four quinqueliteral patterns — and the limits',
          focus: [31, 32, 33, 34, 35, 36, 38, 39],
          points: [
            '**فَعَلَّل** سَفَرْجَل (quince) · **فَعْلَلِل** جَحْمَرِش (old woman) · **فِعْلَلّ** قِرْطَعْب (trifle) · **فُعَلِّل** قُذَعْمِل (trifle).',
            'Tanbīh: the mutamakkin noun\'s radicals never drop below **three** except by elision (يَد، دَم، عِدَة، سِنَة)؛ bare-noun patterns total **20 or 21**.',
            'With augmentation the noun peaks at **seven** letters (اسْتِخْرَاج) — the verb at six.',
          ] },

        { t: 'mcq', q: 'دِرْهَم sits on which pattern?',
          choices: ['فِعْلَل — kasrah, sukūn, fatḥah', 'فَعْلَل', 'فُعْلُل', 'فِعَلّ'],
          correct: 0,
          why: 'dir-ham: i-sukūn-a. jaʿfar is faʿlal; burthun fuʿlul; qimaṭr fiʿall.' },

        { t: 'mcq', q: 'What did al-Akhfash contribute to the quadriliteral list?',
          choices: ['A sixth pattern فُعْلَل, as in جُخْدَب', 'He removed فِعَلّ', 'The pattern فَعْلَلِل', 'Nothing'],
          correct: 0,
          why: 'زَادَ الْأَخْفَشُ وَزْنَ فُعْلَلٍ كَجُخْدَبٍ — and the ṣaḥīḥ view treats it as an original, though scant.' },

        { t: 'mcq', q: 'سَفَرْجَل is on which quinqueliteral pattern?',
          choices: ['فَعَلَّل — fatḥahs with the first lām doubled', 'فَعْلَلِل', 'فِعْلَلّ', 'فُعَلِّل'],
          correct: 0,
          why: 'safarjal: all fatḥahs, doubled first lām. jaḥmarish is faʿlalil; qirṭaʿb fiʿlall; qudhaʿmil fuʿallil.' },

        { t: 'mcq', q: 'يَد and دَم seem two-letter nouns. How does the tanbīh explain them?',
          choices: ['Elision struck a trilateral root — the minimum is three except with ḥadhf', 'They are particles', 'They are foreign', 'They are duals'],
          correct: 0,
          why: 'لَا تَقِلُّ حُرُوفُهُ الْأَصْلِيَّةُ عَنْ ثَلَاثَةٍ إِلَّا إِذَا دَخَلَهُ الْحَذْفُ — like عِدَة and سِنَة.' },

        { t: 'mcq', q: 'Maximum letters for noun vs verb under augmentation:',
          choices: ['Noun 7, verb 6', 'Both 6', 'Noun 6, verb 7', 'Both 7'],
          correct: 0,
          why: 'The light noun bears one more letter than the heavy verb — استخراج (7) vs استخرج (6), as wk07 argued.' },
      ],
    },

    /* ═══ 3. Jāmid vs mushtaqq ═══ */
    {
      id: 'jamid-mushtaqq',
      title: 'Frozen vs derived nouns',
      subtitle: 'اسم ذات · اسم معنى · المشتق يلاحظ صاحب المعنى',
      matn: { src: 'DATA_WK18', from: 1, to: 8, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'The jāmid — two kinds',
          focus: [2, 3, 4, 5],
          points: [
            '**الجامد**: not taken from another word. Either denoting a **sensory entity** (ذات محسوس) — قَلَم، رَجُل، شَجَر — or a **conceptual meaning** (معنى معقول) with NO regard to a bearer — نَصْر، فَهْم (maṣdars)، ضَوْء، زَمَان.',
          ] },

        { t: 'teach', title: 'The mushtaqq — and rare sensory derivation',
          focus: [6, 7, 8],
          points: [
            '**المشتق**: taken from another word AND denoting a meaning **with regard to its bearer** — عَالِم (one who knows)، ظَرِيف، مَضْرُوب.',
            'Derivation flows mostly from the **maṣdar-type** conceptual nouns (فَهِمَ from الفهم). From sensory nouns it is rare: أَوْرَقَتِ الْأَشْجَارُ (from ورق)، عَقْرَبَ الصُّدْغَ، فَلْفَلْتُ الطَّعَامَ.',
          ] },

        { t: 'mcq', q: 'The decisive difference between نَصْر and عَالِم?',
          choices: ['naṣr denotes a bare meaning; ʿālim denotes the meaning WITH its bearer', 'naṣr is a verb', 'ʿālim is jāmid', 'no difference'],
          correct: 0,
          why: 'The jāmid maʿnā-noun ignores the ṣāḥib; the mushtaqq points at him — مع ملاحظة صفة.' },

        { t: 'mcq', q: 'قَلَم is classified as…',
          choices: ['جامد — اسم جنس محسوس', 'مشتق', 'مصدر', 'صفة مشبهة'],
          correct: 0,
          why: 'Not taken from anything, denoting a sensory entity — like رجل، شجر، بقر.' },

        { t: 'mcq', q: 'أَوْرَقَتِ الْأَشْجَارُ is remarkable because…',
          choices: ['it derives a verb from a SENSORY noun (الورق) — normally rare', 'it is a naḥt verb', 'awraqa has no root', 'trees cannot act'],
          correct: 0,
          why: 'نَدَرَ الِاشْتِقَاقُ مِنْ أَسْمَاءِ الْأَجْنَاسِ الْمَحْسُوسَةِ — like أسبعت الأرض، نرجستُ، فلفلتُ.' },
      ],
    },

    /* ═══ 4. Ishtiqāq: definition & grades ═══ */
    {
      id: 'ishtiqaq',
      title: 'Ishtiqāq: definition, three grades, the root dispute',
      subtitle: 'صغير · كبير · أكبر — والمصدر أم الفعل؟',
      matn: { src: 'DATA_WK18', from: 9, to: 17, check: 'وَالِاشْتِقَاقُ' },
      steps: [
        { t: 'teach', title: 'Definition & the three grades',
          focus: [10, 11, 12, 13, 14, 15],
          points: [
            '**الاشتقاق**: taking one word from another, with kinship in **meaning** and change in **wording**.',
            '**صغير**: same letters, same order — عَلِمَ/عَالِم from العلم · **كبير**: same letters, different order — جَبَذَ from الجذب · **أكبر**: most letters shared + kinship in the rest — نَعَقَ from النهق (ʿayn ≈ hāʾ in makhraj).',
            'The kabīr and akbar belong to the lexicographers; **the ṣarf-scholar\'s concern is the ṣaghīr**.',
          ] },

        { t: 'teach', title: 'The root of the derivatives',
          focus: [16, 17],
          points: [
            '**Baṣrans**: the root is the **maṣdar** — it is simple, denoting the event alone.',
            '**Kūfans**: the root is the **verb** — the maṣdar follows it in conjugation. The morphologists side with the first view.',
          ] },

        { t: 'mcq', q: 'جَبَذَ from الجذب is which grade of ishtiqāq?',
          choices: ['كبير — same letters, order changed (metathesis)', 'صغير', 'أكبر', 'naḥt'],
          correct: 0,
          why: 'j-b-dh vs j-dh-b: letters identical, tartīb differs. The ṣaghīr keeps both; the akbar swaps a letter for a near one.' },

        { t: 'mcq', q: 'نَعَقَ from النَّهَق qualifies as أكبر because…',
          choices: ['most letters match and ع ≈ هـ in point of articulation', 'all letters match', 'the order changed', 'they rhyme'],
          correct: 0,
          why: 'اتَّحَدَتَا فِي أَكْثَرِ الْحُرُوفِ مَعَ تَنَاسُبٍ فِي الْبَاقِي — ʿayn and hāʾ are throat neighbours.' },

        { t: 'mcq', q: 'Which grade does the morphologist actually work with?',
          choices: ['الصغير', 'الكبير', 'الأكبر', 'all three equally'],
          correct: 0,
          why: 'أَهَمُّ الْأَقْسَامِ عِنْدَ الصَّرْفِيِّ هُوَ الصَّغِيرُ — the other two are lexicon-studies.' },

        { t: 'mcq', q: 'The Baṣran argument for the maṣdar as root:',
          choices: ['It is basīṭ — denotes the event only, while the verb carries event + time', 'It is shorter', 'It came first historically', 'The Qurʾān uses it more'],
          correct: 0,
          why: 'لِكَوْنِهِ بَسِيطًا… بِخِلَافِ الْفِعْلِ فَإِنَّهُ يَدُلُّ عَلَى الْحَدَثِ وَالزَّمَنِ. The simple begets the compound.' },
      ],
    },

    /* ═══ 5. The ten derivatives ═══ */
    {
      id: 'ashara',
      title: 'Ten things derived from the maṣdar',
      subtitle: 'ثلاثة أفعال وسبعة أسماء — على مادة «ض ر ب»',
      matn: { src: 'DATA_WK18', from: 19, to: 23, check: 'وَيُشْتَقُّ' },
      steps: [
        { t: 'teach', title: 'The list of ten',
          focus: [19, 20, 21, 22],
          points: [
            '**Three verbs**: الماضي، المضارع، الأمر — already covered.',
            '**Seven nouns**: اسم الفاعل (ضَارِب — with المبالغة ضَرَّاب)، اسم المفعول (مَضْرُوب)، الصفة المشبهة (like حَسَن — none from ضرب)، اسم التفضيل (أَضْرَب)، اسما الزمان والمكان (مَضْرَب)، اسم الآلة (مِضْرَب).',
          ],
          after: 'The grid on ض ر ب above is the whole map of the coming chapters.' },

        { t: 'teach', title: 'Two attached non-derivatives',
          focus: [23],
          body: 'Joined to the ten but NOT derivatives: **المنسوب** (رَجُلٌ مِصْرِيّ) and **المُصغّر** — each needing its own bayān.' },

        { t: 'mcq', q: 'How do the ten derivatives split?',
          choices: ['3 verbs + 7 nouns', '5 verbs + 5 nouns', '10 nouns', '2 verbs + 8 nouns'],
          correct: 0,
          why: 'ثَلَاثَةٌ مِنَ الْأَفْعَالِ وَسَبْعَةٌ مِنَ الْأَسْمَاءِ.' },

        { t: 'mcq', q: 'From ض ر ب: distinguish مَضْرَب from مِضْرَب.',
          choices: ['مَضْرَب = time/place noun; مِضْرَب = instrument noun', 'both instruments', 'مِضْرَب = place', 'both maṣdars'],
          correct: 0,
          why: 'Fatḥah mīm → ẓarf (اسما الزمان والمكان)؛ kasrah mīm → آلة. One vowel carries the meaning.' },

        { t: 'mcq', q: 'Why does the grid say the ṣifah mushabbahah from ضرب "does not exist"?',
          choices: ['ḍaraba is an action verb, not a trait verb — the ṣifah needs a lāzim trait like حَسَن', 'The pattern is banned', 'It was forgotten', 'ḍarb has no adjective'],
          correct: 0,
          why: 'لا يُوجَد، مثل حَسَن — the assimilate adjective grows from enduring qualities, not transitive acts.' },

        { t: 'mcq', q: 'مِصْرِيّ (Egyptian) is treated how?',
          choices: ['Attached to the derivatives but NOT one of them (المنسوب)', 'The eleventh derivative', 'A ṣifah mushabbahah', 'A jāmid'],
          correct: 0,
          why: 'وَيَلْحَقُ بِهَا شَيْئَانِ لَيْسَ مِنَ الْمُشْتَقَّاتِ: المنسوب والمصغّر.' },

        { t: 'written',
          prompt: 'Name the ten things derived from the maṣdar and produce each from the root ض ر ب.',
          model: 'Verbs: الماضي ضَرَبَ · المضارع يَضْرِبُ · الأمر اضْرِبْ.\nNouns: اسم الفاعل ضَارِب (مبالغة ضَرَّاب) · اسم المفعول مَضْرُوب · الصفة المشبهة — none from this root (like حَسَن from ḥ-s-n) · اسم التفضيل أَضْرَب · اسما الزمان والمكان مَضْرَب · اسم الآلة مِضْرَب.' },
      ],
    },

  ],
});
