/* ── al-Kubrā fī an-Naḥw — الخاتمة · وجوه الكلمات · القسم 24: ليس → نعم (pp. 249–253) ──
   Backward-pass matn for the Daram Learn "wujūh al-kalimāt" dictionary (ch 24, just before the
   tail ch 25). Transcribed word-by-word from the book PDF for the learn matn panel (reader proper
   stops at p.59). Reuses the shared glyph consts (OPEN/CLOSE/NAHW/COMMA/ELL) from muqaddimah.js —
   do NOT redeclare them. Var: DATA_KH_W24.                                                        */

const DATA_KH_W24 = [
  { t: 'page', n: '٢٤٩' },

  /* ═══ ليس — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'لَيْسَ', en: 'laysa — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'فِعْلٌ', t: 'fiʿlun', e: 'a', c: 'red' },
    { a: 'نَاقِصٌ', t: 'nāqiṣun', e: 'defective verb', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لَيْسُوا', t: 'laysū', e: 'they are not', q: 1 },
    { a: 'سَوَاءً', t: 'sawāʾan', e: 'alike', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'فِعْلُ', t: 'fiʿlu', e: 'a verb of', c: 'red' },
    { a: 'اسْتِثْنَاءٍ', t: 'istithnāʾin', e: 'exception', c: 'red' },
    NAHW, COMMA,
    { a: 'فَكُلْ', t: 'fa-kul', e: 'so eat' },
    { a: 'لَيْسَ', t: 'laysa', e: 'except', n: 'ليس here excludes, like إلّا' },
    { a: 'السِّنَّ', t: 'as-sinna', e: 'the tooth' },
    { a: 'وَالظُّفُرَ', t: 'wa-ẓ-ẓufura', e: 'and the nail' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'an idle', c: 'red' },
    { a: 'نَفْيٍ', t: 'nafyin', e: 'particle of', c: 'red' },
    { a: 'مُهْمَلٌ', t: 'muhmalun', e: 'negation', c: 'red' },
    NAHW, COMMA,
    { a: 'لَيْسَ', t: 'laysa', e: 'does not', n: 'بمعنى لا, enters a verbal sentence' },
    { a: 'يَعْلَمُ', t: 'yaʿlamu', e: 'know' },
    { a: 'الْغَيْبَ', t: 'al-ghayba', e: 'the unseen' },
    { a: 'إِلَّا', t: 'illā', e: 'except' },
    { a: 'اللَّهُ', t: 'allāhu', e: 'Allah' },
  ] },

  { t: 'page', n: '٢٥٠' },

  /* ═══ ما الاسمية — 7 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'مَا الِاسْمِيَّةُ', en: 'nominal mā — seven faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'مَوْصُولَةٌ', t: 'mawṣūlah', e: 'relative', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'مَا', t: 'mā', e: 'what', q: 1 },
    { a: 'عِنْدَكُمْ', t: 'ʿindakum', e: 'is with you', q: 1 },
    { a: 'يَنْفَدُ', t: 'yanfadu', e: 'runs out', q: 1 },
    { a: 'وَمَا', t: 'wa-mā', e: 'and what', q: 1 },
    { a: 'عِنْدَ', t: 'ʿinda', e: 'is with', q: 1 },
    { a: 'اللَّهِ', t: 'allāhi', e: 'Allah', q: 1 },
    { a: 'بَاقٍ', t: 'bāqin', e: 'endures', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'شَرْطِيَّةٌ', t: 'sharṭiyyah', e: 'conditional', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَمَا', t: 'wa-mā', e: 'and whatever', q: 1 },
    { a: 'تَفْعَلُوا', t: 'tafʿalū', e: 'you do', q: 1 },
    { a: 'مِنْ', t: 'min', e: 'of', q: 1 },
    { a: 'خَيْرٍ', t: 'khayrin', e: 'good', q: 1 },
    { a: 'يَعْلَمْهُ', t: 'yaʿlamhu', e: 'Allah knows it', q: 1 },
    { a: 'اللَّهُ', t: 'allāhu', e: '', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'اسْتِفْهَامِيَّةٌ', t: 'istifhāmiyyah', e: 'interrogative', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَمَا', t: 'wa-mā', e: 'and what', q: 1 },
    { a: 'تِلْكَ', t: 'tilka', e: 'is that', q: 1 },
    { a: 'بِيَمِينِكَ', t: 'bi-yamīnika', e: 'in your right hand', q: 1 },
    { a: 'يَا', t: 'yā', e: 'O', q: 1 },
    { a: 'مُوسَى', t: 'mūsā', e: 'Mūsā', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'بِمَعْنَى', t: 'bi-maʿnā', e: 'meaning', c: 'red' },
    { a: 'الشَّيْءِ', t: 'ash-shayʾi', e: '"the thing"', c: 'red' },
    { a: '(تَامَّةٌ)', t: '(tāmmah)', e: '(complete, definite)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَنِعِمَّا', t: 'fa-niʿimmā', e: 'how excellent a thing', q: 1, n: 'أصله نِعْمَ + ما' },
    { a: 'هِيَ', t: 'hiya', e: 'it is', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'بِمَعْنَى', t: 'bi-maʿnā', e: 'meaning', c: 'red' },
    { a: 'شَيْءٍ', t: 'shayʾin', e: '"a thing"', c: 'red' },
    { a: '(نَكِرَةٌ)', t: '(nakirah)', e: '(indefinite, complete)', c: 'red' },
    NAHW, COMMA,
    { a: 'لِمَا', t: 'li-mā', e: 'for a thing' },
    { a: 'نَافِعٍ', t: 'nāfiʿin', e: 'beneficial', n: 'ما = نكرة تامّة موصوفة' },
    { a: 'يَسْعَى', t: 'yasʿā', e: 'strives' },
    { a: 'اللَّبِيبُ', t: 'al-labību', e: 'the intelligent one' },
  ] },

  { t: 'line', w: [
    { a: 'السَّادِسُ', t: 'as-sādisu', e: 'the sixth:', c: 'red' },
    { a: 'نَعْتًا', t: 'naʿtan', e: 'as an adjective', c: 'red' },
    { a: '(نَكِرَةٌ', t: '(nakiratun', e: '(indefinite,', c: 'red' },
    { a: 'مَوْصُوفٌ', t: 'mawṣūfun', e: 'described', c: 'red' },
    { a: 'بِهَا)', t: 'bihā)', e: 'by it)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'أَنْ', t: 'an', e: 'to', q: 1 },
    { a: 'يَضْرِبَ', t: 'yaḍriba', e: 'strike', q: 1 },
    { a: 'مَثَلًا', t: 'mathalan', e: 'a parable', q: 1 },
    { a: 'مَا', t: 'mā', e: 'of some kind', q: 1 },
    { a: 'بَعُوضَةً', t: 'baʿūḍatan', e: 'a mosquito', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'السَّابِعُ', t: 'as-sābiʿu', e: 'the seventh:', c: 'red' },
    { a: 'ظَرْفِيَّةٌ', t: 'ẓarfiyyah', e: 'adverbial,', c: 'red' },
    { a: 'بِمَعْنَى', t: 'bi-maʿnā', e: 'meaning', c: 'red' },
    { a: 'مَا', t: 'mā', e: '"as long as"', c: 'red' },
    { a: 'دَامَ', t: 'dāma', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَمَا', t: 'fa-mā', e: 'so as long as', q: 1 },
    { a: 'اسْتَقَامُوا', t: 'istaqāmū', e: 'they are upright', q: 1 },
    { a: 'لَكُمْ', t: 'lakum', e: 'toward you', q: 1 },
    { a: 'فَاسْتَقِيمُوا', t: 'fa-staqīmū', e: 'be upright', q: 1 },
    { a: 'لَهُمْ', t: 'lahum', e: 'toward them', q: 1 },
    CLOSE,
  ] },

  /* ═══ ما الحرفية — 4 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'مَا الْحَرْفِيَّةُ', en: 'particle mā — four faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'نَافِيَةٌ', t: 'nāfiyah', e: 'negating', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'مَا', t: 'mā', e: 'this is not', q: 1 },
    { a: 'هَذَا', t: 'hādhā', e: '', q: 1 },
    { a: 'بَشَرًا', t: 'basharan', e: 'a human', q: 1, n: 'ما الحجازية تعمل عمل ليس' },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'مَصْدَرِيَّةٌ', t: 'maṣdariyyah', e: 'infinitival', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'ضَاقَتْ', t: 'ḍāqat', e: 'straitened', q: 1 },
    { a: 'عَلَيْهِمُ', t: 'ʿalayhimu', e: 'upon them', q: 1 },
    { a: 'الْأَرْضُ', t: 'al-arḍu', e: 'the earth', q: 1 },
    { a: 'بِمَا', t: 'bimā', e: 'despite its', q: 1, n: 'بما رحبت = برحبها' },
    { a: 'رَحُبَتْ', t: 'raḥubat', e: 'vastness', q: 1 },
    CLOSE,
  ] },

  { t: 'page', n: '٢٥١' },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'كَافَّةٌ', t: 'kāffah', e: 'restraining (kāffah)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'إِنَّمَا', t: 'innamā', e: 'indeed', q: 1, n: 'ما كفّت إنّ عن العمل' },
    { a: 'اللَّهُ', t: 'allāhu', e: 'Allah', q: 1 },
    { a: 'إِلَهٌ', t: 'ilāhun', e: 'is one', q: 1 },
    { a: 'وَاحِدٌ', t: 'wāḥidun', e: 'God', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'زَائِدَةٌ', t: 'zāʾidah', e: 'redundant,', c: 'red' },
    { a: 'لِلتَّوْكِيدِ', t: 'li-t-tawkīd', e: 'for emphasis', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَبِمَا', t: 'fa-bimā', e: 'so by', q: 1, n: 'ما زائدة بعد حرف الجر' },
    { a: 'رَحْمَةٍ', t: 'raḥmatin', e: 'a mercy', q: 1 },
    { a: 'مِنَ', t: 'mina', e: 'from', q: 1 },
    { a: 'اللَّهِ', t: 'allāhi', e: 'Allah', q: 1 },
    CLOSE,
  ] },

  /* ═══ مَتَى — 2 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'مَتَى', en: 'matā — two faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'اسْتِفْهَامٌ', t: 'istifhāmun', e: 'interrogative', c: 'red' },
    NAHW, COMMA,
    { a: 'مَتَى', t: 'matā', e: 'when is' },
    { a: 'هَذَا', t: 'hādhā', e: 'this' },
    { a: 'الْوَعْدُ', t: 'al-waʿdu', e: 'promise' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'شَرْطٌ', t: 'sharṭun', e: 'conditional', c: 'red' },
    NAHW, COMMA,
    { a: 'مَتَى', t: 'matā', e: 'whenever' },
    { a: 'تَحْسُدْ', t: 'taḥsud', e: 'you envy' },
    { a: 'تَهْلِكْ', t: 'tahlik', e: 'you perish' },
  ] },

  /* ═══ مَن — 5 faces (اسم) ═══ */
  { t: 'h2', c: 'blue', ar: 'مَنْ', en: 'man — five faces (a noun)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'شَرْطِيَّةٌ', t: 'sharṭiyyah', e: 'conditional,', c: 'red' },
    { a: 'لِلْعَاقِلِ', t: 'li-l-ʿāqil', e: 'for the rational', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'مَنْ', t: 'man', e: 'whoever', q: 1 },
    { a: 'يَعْمَلْ', t: 'yaʿmal', e: 'does', q: 1 },
    { a: 'سُوءًا', t: 'sūʾan', e: 'evil', q: 1 },
    { a: 'يُجْزَ', t: 'yujza', e: 'is requited', q: 1 },
    { a: 'بِهِ', t: 'bihi', e: 'for it', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'مَوْصُولَةٌ', t: 'mawṣūlah', e: 'relative', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'إِنَّمَا', t: 'innamā', e: 'you only', q: 1 },
    { a: 'أَنْتَ', t: 'anta', e: 'are', q: 1 },
    { a: 'مُنْذِرُ', t: 'mundhiru', e: 'a warner to', q: 1 },
    { a: 'مَنْ', t: 'man', e: 'the one who', q: 1 },
    { a: 'يَخْشَاهَا', t: 'yakhshāhā', e: 'fears it', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'اسْتِفْهَامِيَّةٌ', t: 'istifhāmiyyah', e: 'interrogative', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'مَنْ', t: 'man', e: 'who', q: 1 },
    { a: 'بَعَثَنَا', t: 'baʿathanā', e: 'raised us', q: 1 },
    { a: 'مِنْ', t: 'min', e: 'from', q: 1 },
    { a: 'مَرْقَدِنَا', t: 'marqadinā', e: 'our resting place', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'نَكِرَةٌ', t: 'nakiratun', e: 'indefinite,', c: 'red' },
    { a: 'مَوْصُوفَةٌ', t: 'mawṣūfah', e: 'described (= a person)', c: 'red' },
    NAHW, COMMA,
    { a: 'فَكَفَى', t: 'fa-kafā', e: 'enough' },
    { a: 'بِنَا', t: 'binā', e: 'for us as' },
    { a: 'فَضْلًا', t: 'faḍlan', e: 'merit' },
    { a: 'عَلَى', t: 'ʿalā', e: 'over' },
    { a: 'مَنْ', t: 'man', e: 'a person', n: 'مَن نكرة موصوفة بـ غيرنا' },
    { a: 'غَيْرِنَا', t: 'ghayrinā', e: 'other than us' },
  ] },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'وَجْهٌ', t: 'wajhun', e: 'a further face —', c: 'red' },
    { a: 'آخَرُ', t: 'ākharu', e: '', c: 'red' },
    ELL,
    { a: 'يُنْظَرُ', t: 'yunẓaru', e: '(see the footnote,' },
    { a: 'الْحَاشِيَةَ', t: 'al-ḥāshiyah', e: 'p. 251)' },
  ] },

  { t: 'page', n: '٢٥٢' },

  /* ═══ مُنْذُ — 2 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'مُنْذُ', en: 'mundhu — two faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'حَرْفٌ', t: 'ḥarfun', e: 'a preposition', c: 'red' },
    { a: 'جَارٌّ', t: 'jārrun', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'مَا', t: 'mā', e: 'I have not' },
    { a: 'رَأَيْتُهُ', t: 'raʾaytuhu', e: 'seen him' },
    { a: 'مُنْذُ', t: 'mundhu', e: 'since' },
    { a: 'يَوْمِ', t: 'yawmi', e: 'the day of' },
    { a: 'الْجُمُعَةِ', t: 'al-jumuʿati', e: 'Friday' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'مُضَافٌ', t: 'muḍāfun', e: 'annexed', c: 'red' },
    { a: 'إِلَى', t: 'ilā', e: 'to a', c: 'red' },
    { a: 'جُمْلَةٍ', t: 'jumlatin', e: 'sentence', c: 'red' },
    NAHW, COMMA,
    { a: 'مَا', t: 'mā', e: 'I have not' },
    { a: 'زِلْتُ', t: 'ziltu', e: 'ceased' },
    { a: 'أَبْغِي', t: 'abghī', e: 'seeking' },
    { a: 'الْعِلْمَ', t: 'al-ʿilma', e: 'knowledge' },
    { a: 'مُذْ', t: 'mudh', e: 'since' },
    { a: 'أَنَا', t: 'anā', e: 'I was' },
    { a: 'يَافِعٌ', t: 'yāfiʿun', e: 'a youth' },
  ] },

  /* ═══ النُّون — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'النُّونُ', en: 'the nūn — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'ضَمِيرٌ', t: 'ḍamīrun', e: 'a marfūʿ pronoun', c: 'red' },
    { a: 'مَرْفُوعٌ', t: 'marfūʿun', e: 'for the women', c: 'red' },
    { a: 'لِلنِّسْوَةِ', t: 'li-n-niswah', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَقَطَّعْنَ', t: 'wa-qaṭṭaʿna', e: 'and they (f.) cut', q: 1 },
    { a: 'أَيْدِيَهُنَّ', t: 'aydiyahunna', e: 'their hands', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'نُونُ', t: 'nūnu', e: 'the nūn of', c: 'red' },
    { a: 'التَّأْكِيدِ', t: 'at-taʾkīd', e: 'emphasis', c: 'red' },
    NAHW, COMMA,
    { a: 'لَيُسْجَنَنَّ', t: 'la-yusjananna', e: 'he shall surely be imprisoned', n: 'الثقيلة; the خفيفة is written as alif ﴿لنسفعًا﴾' },
    { a: 'وَلَيَكُونًا', t: 'wa-la-yakūnan', e: 'and shall surely be' },
  ] },

  { t: 'page', n: '٢٥٣' },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'نُونُ', t: 'nūnu', e: 'the nūn of', c: 'red' },
    { a: 'الْوِقَايَةِ', t: 'al-wiqāyah', e: 'protection', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'خَلَقَنِي', t: 'khalaqanī', e: 'created me', q: 1, n: 'النون تقي ياء المتكلم من كسر آخر الفعل' },
    { a: 'فَهُوَ', t: 'fa-huwa', e: 'and He', q: 1 },
    { a: 'يَهْدِينِ', t: 'yahdīni', e: 'guides me', q: 1 },
    CLOSE,
  ] },

  /* ═══ نَعَم — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'نَعَمْ', en: 'naʿam — three faces' },

  { t: 'line', w: [
    { a: 'نَعَمْ', t: 'naʿam', e: 'naʿam (“yes”)' },
    { a: 'حَرْفٌ', t: 'ḥarfun', e: 'is a particle' },
    { a: 'عَلَى', t: 'ʿalā', e: 'of' },
    { a: 'ثَلَاثَةِ', t: 'thalāthati', e: 'three' },
    { a: 'أَوْجُهٍ', t: 'awjuhin', e: 'faces' },
  ] },

  { t: 'line', w: [
    { a: 'كَإِي', t: 'ka-ī', e: 'like إي', c: 'red' },
    NAHW, COMMA,
    { a: 'لِلتَّصْدِيقِ', t: 'li-t-taṣdīq', e: 'affirming a report,' },
    { a: 'وَالْإِعْلَامِ', t: 'wa-l-iʿlām', e: 'informing after a question,' },
    { a: 'وَالْوَعْدِ', t: 'wa-l-waʿd', e: 'and promising after a request', n: 'كإي لكنها لا تختصّ بالقَسَم' },
  ] },
];
