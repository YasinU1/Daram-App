/* ── al-Kubrā fī an-Naḥw — المقدمة · الباب الثالث في العامل والمعمول والإعراب (pp. 17–19) ──
   Closes the Introduction. Reuses the shared glyphs (OPEN/CLOSE/NAHW/ELL) from muqaddimah.js.
   New block: { t:'grid', cols:[…], rows:[{ h, c:[…] }], caption }.  Footnotes are omitted.     */

const DATA_BAB3 = [
  { t: 'page', n: '١٧' },

  { t: 'h1', ar: 'الْبَابُ الثَّالِثُ فِي الْعَامِلِ وَالْمَعْمُولِ وَالْإِعْرَابِ',
    en: 'The Third Chapter — On the Governor, the Governed & Iʿrāb' },
  { t: 'line', w: [
    { a: 'وَفِيهِ', t: 'wa-fīhi', e: 'and in it (are)' },
    { a: 'ثَلَاثَةُ', t: 'thalāthatu', e: 'three' },
    { a: 'فُصُولٍ', t: 'fuṣūlin', e: 'sections (fuṣūl)' },
  ] },

  /* ── Section 1: governor vs non-governor ── */
  { t: 'h2', c: 'green', ar: 'الْفَصْلُ الْأَوَّلُ فِي الْعَامِلِ وَغَيْرِ الْعَامِلِ', en: 'First Section — The Governor & the Non-Governor' },
  { t: 'line', w: [
    { a: 'فَالْعَامِلُ', t: 'fal-ʿāmilu', e: 'the governor (ʿāmil)' },
    { a: 'مَا', t: 'mā', e: 'is what' },
    { a: 'يُوجِبُ', t: 'yūjibu', e: 'necessitates' },
    { a: 'حَالَةً،', t: 'ḥālatan', e: 'a [grammatical] state' },
    NAHW, { g: ':' },
    { a: 'لَنْ', t: 'lan', e: '“lan (never)”' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'قَوْلِهِ', t: 'qawlihi', e: 'His saying' },
    { a: 'تَعَالَى:', t: 'taʿālā', e: 'the Exalted' },
    OPEN,
    { a: 'وَلَنْ', t: 'wa-lan', e: 'and never', q: 1 },
    { a: 'نُشْرِكَ', t: 'nushrika', e: 'will we associate', q: 1 },
    { a: 'بِرَبِّنَا', t: 'bi-rabbinā', e: 'with our Lord', q: 1 },
    { a: 'أَحَدًا', t: 'aḥadan', e: 'anyone', q: 1 },
    CLOSE,
  ] },

  { t: 'box', label: 'العامل', labelEn: 'What governs', lines: [
    [
      { a: 'الْعَامِلُ', t: 'al-ʿāmilu', e: 'the governor' },
      { a: 'هُوَ', t: 'huwa', e: 'is' },
      ELL,
    ],
    [
      { a: 'الْأَفْعَالُ', t: 'al-afʿālu', e: 'the verbs' },
      { a: 'كُلُّهَا', t: 'kulluhā', e: 'all of them' },
    ],
    [
      { a: 'وَالْحُرُوفُ', t: 'wal-ḥurūfu', e: 'and the particles' },
      { a: 'بَعْضُهَا', t: 'baʿḍuhā', e: 'some of them' },
    ],
    [
      { a: 'وَالْأَسْمَاءُ', t: 'wal-asmāʾu', e: 'and the nouns' },
      { a: 'بَعْضُهَا', t: 'baʿḍuhā', e: 'some of them' },
    ],
  ] },

  { t: 'line', w: [
    { a: 'وَغَيْرُ', t: 'wa-ghayru', e: 'and the non-' },
    { a: 'الْعَامِلِ', t: 'al-ʿāmili', e: 'governor' },
    { a: 'مَا', t: 'mā', e: 'is what' },
    { a: 'لَا', t: 'lā', e: 'does not' },
    { a: 'يُوجِبُ', t: 'yūjibu', e: 'necessitate' },
    { a: 'حَالَةً،', t: 'ḥālatan', e: 'a state' },
    NAHW, { g: ':' },
    { a: 'مَا', t: 'mā', e: '“mā (not)”' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'قَوْلِهِ', t: 'qawlihi', e: 'His saying' },
    { a: 'تَعَالَى:', t: 'taʿālā', e: 'the Exalted' },
    OPEN,
    { a: 'مَا', t: 'mā', e: 'Not', q: 1 },
    { a: 'أَشْرَكْنَا', t: 'ashraknā', e: 'would we have associated', q: 1 },
    CLOSE,
  ] },

  { t: 'box', label: 'غير العامل', labelEn: 'What does not govern', lines: [
    [
      { a: 'غَيْرُ', t: 'ghayru', e: 'the non-' },
      { a: 'الْعَامِلِ', t: 'al-ʿāmili', e: 'governor' },
      { a: 'هُوَ', t: 'huwa', e: 'is' },
      ELL,
    ],
    [
      { a: 'الْحُرُوفُ', t: 'al-ḥurūfu', e: 'the particles' },
      { a: 'بَعْضُهَا', t: 'baʿḍuhā', e: 'some of them' },
    ],
    [
      { a: 'وَالْأَسْمَاءُ', t: 'wal-asmāʾu', e: 'and the nouns' },
      { a: 'بَعْضُهَا', t: 'baʿḍuhā', e: 'some of them' },
    ],
    [
      { a: 'وَالْجُمْلَةُ', t: 'wal-jumlatu', e: 'and the sentence' },
      { a: 'كُلُّهَا', t: 'kulluhā', e: 'all of it' },
    ],
    [
      { a: 'وَشِبْهُ', t: 'wa-shibhu', e: 'and the quasi-' },
      { a: 'الْجُمْلَةِ', t: 'al-jumlati', e: 'sentence' },
      { a: 'كُلُّهَا', t: 'kulluhā', e: 'all of it' },
    ],
  ] },

  /* ── Section 2: governed vs non-governed ── */
  { t: 'h2', c: 'green', ar: 'الْفَصْلُ الثَّانِي فِي الْمَعْمُولِ وَغَيْرِ الْمَعْمُولِ', en: 'Second Section — The Governed & the Non-Governed' },
  { t: 'line', w: [
    { a: 'الْمَعْمُولُ', t: 'al-maʿmūlu', e: 'the governed (maʿmūl)' },
    { a: 'مَا', t: 'mā', e: 'is what' },
    { a: 'يَقْبَلُ', t: 'yaqbalu', e: 'accepts' },
    { a: 'حَالَةً', t: 'ḥālatan', e: 'a state' },
    { a: 'وَيَكُونُ', t: 'wa-yakūnu', e: 'and has' },
    { a: 'لَهُ', t: 'lahu', e: 'for it' },
    { a: 'إِعْرَابٌ،', t: 'iʿrābun', e: 'iʿrāb' },
    NAHW, { g: ':' },
    { a: 'صَاحِبٌ', t: 'ṣāḥibun', e: '“ṣāḥib (companion)”' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'قَوْلِهِ', t: 'qawlihi', e: 'His saying' },
    { a: 'تَعَالَى:', t: 'taʿālā', e: 'the Exalted' },
    OPEN,
    { a: 'مَا', t: 'mā', e: 'Not', q: 1 },
    { a: 'ضَلَّ', t: 'ḍalla', e: 'has strayed', q: 1 },
    { a: 'صَاحِبُكُمْ', t: 'ṣāḥibukum', e: 'your companion', q: 1 },
    CLOSE,
  ] },

  { t: 'grid',
    cols: ['الِاسْمُ', 'الْفِعْلُ', 'الْحَرْفُ', 'الْجُمْلَةُ', 'شِبْهُ الْجُمْلَةِ'],
    rows: [
      { h: 'عَامِلٌ', c: ['بَعْضُهَا', 'كُلُّهَا', 'بَعْضُهَا', '✗', '✗'] },
      { h: 'غَيْرُ عَامِلٍ', c: ['بَعْضُهَا', '✗', 'بَعْضُهَا', 'كُلُّهَا', 'كُلُّهَا'] },
    ],
    caption: 'What can govern: verbs always; some nouns and some particles; sentences and quasi-sentences never.' },

  /* ── what is/ isn’t governed ── */
  { t: 'page', n: '١٨' },
  { t: 'box', label: 'المعمول', labelEn: 'What is governed', lines: [
    [
      { a: 'الْمَعْمُولُ', t: 'al-maʿmūlu', e: 'the governed' },
      { a: 'هُوَ', t: 'huwa', e: 'is' },
      ELL,
    ],
    [
      { a: 'الْأَسْمَاءُ', t: 'al-asmāʾu', e: 'the nouns' },
      { a: 'كُلُّهَا', t: 'kulluhā', e: 'all of them' },
      { a: 'إِلَّا', t: 'illā', e: 'except' },
      { a: 'أَسْمَاءَ', t: 'asmāʾa', e: 'the noun-' },
      { a: 'الْفِعْلِ،', t: 'al-fiʿli', e: 'verbs (asmāʾ al-fiʿl)' },
    ],
    [
      { a: 'وَالْفِعْلُ', t: 'wal-fiʿlu', e: 'and the verb,' },
      { a: 'الْمُضَارِعُ', t: 'al-muḍāriʿu', e: 'the present' },
      { a: 'وَالْمَاضِي', t: 'wal-māḍī', e: 'and the past' },
      { a: 'الَّذِي', t: 'alladhī', e: 'that' },
      { a: 'دَخَلَهُ', t: 'dakhalahu', e: 'has had enter it' },
      { a: 'نَاصِبٌ', t: 'nāṣibun', e: 'an accusative-particle (nāṣib)' },
      { a: 'أَوْ', t: 'aw', e: 'or' },
      { a: 'جَازِمٌ،', t: 'jāzimun', e: 'a jussive-particle (jāzim)' },
    ],
    [
      { a: 'وَالْجُمْلَةُ', t: 'wal-jumlatu', e: 'and the sentence' },
      { a: 'بَعْضُهَا', t: 'baʿḍuhā', e: 'some of it' },
    ],
    [
      { a: 'وَشِبْهُ', t: 'wa-shibhu', e: 'and the quasi-' },
      { a: 'الْجُمْلَةِ', t: 'al-jumlati', e: 'sentence' },
      { a: 'كُلُّهَا', t: 'kulluhā', e: 'all of it' },
    ],
  ] },

  { t: 'line', w: [
    { a: 'وَغَيْرُ', t: 'wa-ghayru', e: 'and the non-' },
    { a: 'الْمَعْمُولِ', t: 'al-maʿmūli', e: 'governed' },
    { a: 'مَا', t: 'mā', e: 'is what' },
    { a: 'لَا', t: 'lā', e: 'does not' },
    { a: 'يَقْبَلُ', t: 'yaqbalu', e: 'accept' },
    { a: 'حَالَةً', t: 'ḥālatan', e: 'a state' },
    { a: 'وَلَا', t: 'wa-lā', e: 'and not' },
    { a: 'يَكُونُ', t: 'yakūnu', e: 'has' },
    { a: 'لَهُ', t: 'lahu', e: 'for it' },
    { a: 'إِعْرَابٌ،', t: 'iʿrābun', e: 'iʿrāb' },
    NAHW, { g: ':' },
    { a: 'مَا', t: 'mā', e: '“mā”' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'قَوْلِهِ', t: 'qawlihi', e: 'His saying' },
    { a: 'تَعَالَى:', t: 'taʿālā', e: 'the Exalted' },
    OPEN,
    { a: 'مَا', t: 'mā', e: 'Not', q: 1 },
    { a: 'ضَلَّ', t: 'ḍalla', e: 'has strayed', q: 1 },
    { a: 'صَاحِبُكُمْ', t: 'ṣāḥibukum', e: 'your companion', q: 1 },
    CLOSE,
  ] },

  { t: 'box', label: 'غير المعمول', labelEn: 'What is not governed', lines: [
    [
      { a: 'غَيْرُ', t: 'ghayru', e: 'the non-' },
      { a: 'الْمَعْمُولِ', t: 'al-maʿmūli', e: 'governed' },
      { a: 'هُوَ', t: 'huwa', e: 'is' },
      ELL,
    ],
    [
      { a: 'أَسْمَاءُ', t: 'asmāʾu', e: 'the noun-' },
      { a: 'الْفِعْلِ،', t: 'al-fiʿli', e: 'verbs (asmāʾ al-fiʿl)' },
    ],
    [
      { a: 'وَالْمَاضِي', t: 'wal-māḍī', e: 'and the past verb' },
      { a: 'الَّذِي', t: 'alladhī', e: 'that' },
      { a: 'لَمْ', t: 'lam', e: 'no' },
      { a: 'يَدْخُلْهُ', t: 'yadkhulhu', e: '… has entered it' },
      { a: 'نَاصِبٌ', t: 'nāṣibun', e: 'nāṣib' },
      { a: 'أَوْ', t: 'aw', e: 'or' },
      { a: 'جَازِمٌ،', t: 'jāzimun', e: 'jāzim' },
    ],
    [
      { a: 'وَالْحُرُوفُ', t: 'wal-ḥurūfu', e: 'and the particles' },
      { a: 'كُلُّهَا،', t: 'kulluhā', e: 'all of them' },
    ],
    [
      { a: 'وَالْجُمْلَةُ', t: 'wal-jumlatu', e: 'and the sentence' },
      { a: 'بَعْضُهَا', t: 'baʿḍuhā', e: 'some of it' },
    ],
  ] },

  /* ── Section 3: Iʿrāb ── */
  { t: 'h2', c: 'green', ar: 'الْفَصْلُ الثَّالِثُ فِي الْإِعْرَابِ', en: 'Third Section — On Iʿrāb' },
  { t: 'line', w: [
    { a: 'وَهُوَ', t: 'wa-huwa', e: 'and it (iʿrāb) is' },
    { a: 'أَثَرٌ', t: 'atharun', e: 'an effect' },
    { a: 'يَجْلِبُهُ', t: 'yajlibuhu', e: 'brought about by' },
    { a: 'الْعَامِلُ', t: 'al-ʿāmilu', e: 'the governor' },
    { a: 'فِي', t: 'fī', e: 'at' },
    { a: 'آخِرِ', t: 'ākhiri', e: 'the end of' },
    { a: 'الْكَلِمَةِ،', t: 'al-kalimati', e: 'the word' },
  ] },

  { t: 'grid',
    cols: ['الِاسْمُ', 'الْفِعْلُ', 'الْحَرْفُ', 'الْجُمْلَةُ', 'شِبْهُ الْجُمْلَةِ'],
    rows: [
      { h: 'مَعْمُولٌ', c: ['كُلُّهَا', 'بَعْضُهَا', '✗', 'بَعْضُهَا', 'كُلُّهَا'] },
      { h: 'غَيْرُ مَعْمُولٍ', c: ['✗', 'بَعْضُهَا', 'كُلُّهَا', 'بَعْضُهَا', '✗'] },
    ],
    caption: 'What can be governed (take iʿrāb): all nouns; some verbs; sentences partly; quasi-sentences fully — particles never.' },

  /* ── kinds of iʿrāb ── */
  { t: 'page', n: '١٩' },
  { t: 'line', w: [
    { a: 'وَهُوَ', t: 'wa-huwa', e: 'and it is' },
    { a: 'ثَلَاثَةُ', t: 'thalāthatu', e: 'three' },
    { a: 'أَقْسَامٍ', t: 'aqsāmin', e: 'divisions' }, { g: ':' },
  ] },
  { t: 'h2', c: 'blue', ar: 'الْقِسْمُ الْأَوَّلُ: الْإِعْرَابُ اللَّفْظِيُّ', en: 'First division — overt iʿrāb (al-iʿrāb al-lafẓī)' },
  { t: 'line', w: [
    { a: 'وَهُوَ', t: 'wa-huwa', e: 'and it is' },
    { a: 'مَا', t: 'mā', e: 'what' },
    { a: 'يَظْهَرُ', t: 'yaẓharu', e: 'appears' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'اللَّفْظِ،', t: 'al-lafẓi', e: 'the utterance' },
    { a: 'كَالضَّمَّةِ', t: 'kaḍ-ḍammati', e: 'like the ḍammah' },
    { a: 'وَالْكَسْرَةِ', t: 'wal-kasrati', e: 'and the kasrah' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'قَوْلِنَا:', t: 'qawlinā', e: 'our saying' },
    { a: 'يَجْتَهِدُ', t: 'yajtahidu', e: 'strives' },
    { a: 'الْمُؤْمِنُ', t: 'al-muʾminu', e: 'the believer' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'الْخَيْرِ', t: 'al-khayri', e: 'what is good' },
  ] },
  { t: 'h2', c: 'blue', ar: 'الْقِسْمُ الثَّانِي: الْإِعْرَابُ التَّقْدِيرِيُّ', en: 'Second division — estimated iʿrāb (at-taqdīrī)' },
  { t: 'line', w: [
    { a: 'وَهُوَ', t: 'wa-huwa', e: 'and it is' },
    { a: 'مَا', t: 'mā', e: 'what' },
    { a: 'لَا', t: 'lā', e: 'does not' },
    { a: 'يَظْهَرُ', t: 'yaẓharu', e: 'appear' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'اللَّفْظِ', t: 'al-lafẓi', e: 'the utterance' },
    { a: 'لِمَانِعٍ،', t: 'li-māniʿin', e: 'due to an impediment' },
    { a: 'كَالضَّمَّةِ', t: 'kaḍ-ḍammati', e: 'like the ḍammah' },
    { a: 'وَالْكَسْرَةِ', t: 'wal-kasrati', e: 'and kasrah' },
    { a: 'الْمُقَدَّرَتَيْنِ', t: 'al-muqaddaratayni', e: 'estimated (both)' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'قَوْلِنَا:', t: 'qawlinā', e: 'our saying' },
    { a: 'يَسْعَى', t: 'yasʿā', e: 'strives' },
    { a: 'الْفَتَى', t: 'al-fatā', e: 'the youth' },
    { a: 'إِلَى', t: 'ilā', e: 'toward' },
    { a: 'الْهُدَى', t: 'al-hudā', e: 'guidance' },
  ] },
  { t: 'h2', c: 'blue', ar: 'الْقِسْمُ الثَّالِثُ: الْإِعْرَابُ الْمَحَلِّيُّ', en: 'Third division — positional iʿrāb (al-maḥallī)' },
  { t: 'line', w: [
    { a: 'وَهُوَ', t: 'wa-huwa', e: 'and it is' },
    { a: 'مَا', t: 'mā', e: 'what' },
    { a: 'لَا', t: 'lā', e: 'does not' },
    { a: 'يَظْهَرُ', t: 'yaẓharu', e: 'appear' },
    { a: 'فِي', t: 'fī', e: 'in' },
    { a: 'اللَّفْظِ', t: 'al-lafẓi', e: 'the utterance' },
    { a: 'لِعَدَمِ', t: 'li-ʿadami', e: 'because of the inability' },
    { a: 'تَحَمُّلِ', t: 'taḥammuli', e: 'to bear, of' },
    { a: 'الْكَلِمَةِ', t: 'al-kalimati', e: 'the word' },
    { a: 'عَلَامَةَ', t: 'ʿalāmata', e: 'the sign of' },
    { a: 'الْإِعْرَابِ،', t: 'al-iʿrābi', e: 'iʿrāb' },
    NAHW, { g: ':' },
    { a: 'تَسْعَيْنَ', t: 'tasʿayna', e: '“you (f.) strive”', n: 'built on sukūn — no overt case' },
    { a: 'أَنْتُنَّ', t: 'antunna', e: '“you (f. pl.)”' },
    { a: 'إِلَيْهِ', t: 'ilayhi', e: '“to it”' },
  ] },
];
