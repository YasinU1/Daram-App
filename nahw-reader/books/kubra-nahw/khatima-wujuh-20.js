/* ── al-Kubrā fī an-Naḥw — الخاتمة · وجوه الكلمات · القسم 20: الهمزة → أنْ (pp. 233–237) ──
   Backward-pass matn for the Daram Learn "wujūh al-kalimāt" dictionary (ch 20, the START of the
   alphabetical dictionary). Word-by-word from the book PDF for the learn matn panel. Reuses shared
   glyph consts (OPEN/CLOSE/NAHW/COMMA/ELL) from muqaddimah.js — do NOT redeclare. Var: DATA_KH_W20. */

const DATA_KH_W20 = [
  { t: 'page', n: '٢٣٣' },

  { t: 'line', w: [
    { a: 'قَدْ', t: 'qad', e: 'sometimes' },
    { a: 'يَكُونُ', t: 'yakūnu', e: 'one and the same word has' },
    { a: 'لِكَلِمَةٍ', t: 'li-kalimatin', e: 'for a word' },
    { a: 'وَاحِدَةٍ', t: 'wāḥidatin', e: '' },
    { a: 'وُجُوهٌ', t: 'wujūhun', e: 'different faces' },
    { a: 'مُخْتَلِفَةٌ', t: 'mukhtalifah', e: '', c: 'red' },
  ] },

  /* ═══ الهمزة — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'الْهَمْزَةُ', en: 'the hamzah — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'نِدَاءُ', t: 'nidāʾu', e: 'calling one near', c: 'red' },
    { a: 'الْقَرِيبِ', t: 'al-qarīb', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'أَزَيْدُ', t: 'a-zaydu', e: 'O Zayd!' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'الِاسْتِفْهَامُ', t: 'al-istifhām', e: 'interrogation', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'أَأَنْتُمْ', t: 'a-antum', e: 'are you', q: 1 },
    { a: 'أَعْلَمُ', t: 'aʿlamu', e: 'more knowing', q: 1 },
    { a: 'أَمِ', t: 'ami', e: 'or', q: 1 },
    { a: 'اللَّهُ', t: 'allāhu', e: 'Allah', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِلْمَصْدَرِ', t: 'li-l-maṣdar', e: 'heading a maṣdar-clause (تسوية)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'سَوَاءٌ', t: 'sawāʾun', e: 'it is the same', q: 1 },
    { a: 'عَلَيْهِمْ', t: 'ʿalayhim', e: 'to them', q: 1 },
    { a: 'أَأَنْذَرْتَهُمْ', t: 'a-andhartahum', e: 'whether you warn them', q: 1 },
    { a: 'أَمْ', t: 'am', e: 'or', q: 1 },
    { a: 'لَمْ', t: 'lam', e: 'do not', q: 1 },
    { a: 'تُنْذِرْهُمْ', t: 'tundhirhum', e: 'warn them', q: 1 },
    CLOSE,
  ] },

  /* ═══ إذْ — 5 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'إِذْ', en: 'idh — five faces (a noun)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'مَفْعُولٌ', t: 'mafʿūlun', e: 'an adverb of time (usually past)', c: 'red' },
    { a: 'فِيهِ', t: 'fīhi', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'إِذْ', t: 'idh', e: 'when', q: 1 },
    { a: 'أَخْرَجَهُ', t: 'akhrajahu', e: 'those who disbelieved drove him out', q: 1 },
    { a: 'الَّذِينَ', t: 'alladhīna', e: '', q: 1 },
    { a: 'كَفَرُوا', t: 'kafarū', e: '', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'مَفْعُولٌ', t: 'mafʿūlun', e: 'a direct object (verb مقدّر = اذكُر)', c: 'red' },
    { a: 'بِهِ', t: 'bihi', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَاذْكُرُوا', t: 'wa-dhkurū', e: 'and remember', q: 1 },
    { a: 'إِذْ', t: 'idh', e: 'when', q: 1 },
    { a: 'كُنْتُمْ', t: 'kuntum', e: 'you were', q: 1 },
    { a: 'قَلِيلًا', t: 'qalīlan', e: 'few', q: 1 },
    CLOSE,
  ] },

  { t: 'page', n: '٢٣٤' },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'بَدَلٌ', t: 'badalun', e: 'a substitute', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَاذْكُرْ', t: 'wa-dhkur', e: 'and mention', q: 1 },
    { a: 'مَرْيَمَ', t: 'maryama', e: 'Maryam,', q: 1 },
    { a: 'إِذِ', t: 'idhi', e: 'when', q: 1 },
    { a: 'انْتَبَذَتْ', t: 'antabadhat', e: 'she withdrew', q: 1, n: 'إذ بدل من مريم' },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'لِلْمُفَاجَأَةِ', t: 'li-l-mufājaʾah', e: 'for surprise (after بينا/بينما)', c: 'red' },
    NAHW, COMMA,
    { a: 'فَبَيْنَمَا', t: 'fa-baynamā', e: 'and while' },
    { a: 'الْعُسْرُ', t: 'al-ʿusru', e: 'hardship (reigned),' },
    { a: 'إِذْ', t: 'idh', e: 'suddenly' },
    { a: 'دَارَتْ', t: 'dārat', e: 'turned' },
    { a: 'مَيَاسِيرُ', t: 'mayāsīru', e: 'easings' },
  ] },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'لِلتَّعْلِيلِ', t: 'li-t-taʿlīl', e: 'for causation (“because”)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَإِذْ', t: 'wa-idh', e: 'and because', q: 1 },
    { a: 'لَمْ', t: 'lam', e: 'they were not', q: 1 },
    { a: 'يَهْتَدُوا', t: 'yahtadū', e: 'guided', q: 1 },
    { a: 'بِهِ', t: 'bihi', e: 'by it', q: 1 },
    CLOSE,
  ] },

  /* ═══ إذا — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'إِذَا', en: 'idhā — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'ظَرْفٌ', t: 'ẓarfun', e: 'an adverb (with شرط-sense, over a verb)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَإِذَا', t: 'fa-idhā', e: 'then when', q: 1 },
    { a: 'أَفَضْتُمْ', t: 'afaḍtum', e: 'you pour forth', q: 1 },
    { a: 'مِنْ', t: 'min', e: 'from', q: 1 },
    { a: 'عَرَفَاتٍ', t: 'ʿarafātin', e: 'ʿArafāt', q: 1 },
    { a: 'فَاذْكُرُوا', t: 'fa-dhkurū', e: 'remember', q: 1 },
    { a: 'اللَّهَ', t: 'allāha', e: 'Allah', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a particle of surprise (before a nominal)', c: 'red' },
    { a: 'مُفَاجَأَةٍ', t: 'mufājaʾatin', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَأَلْقَاهَا', t: 'fa-alqāhā', e: 'so he cast it down,', q: 1 },
    { a: 'فَإِذَا', t: 'fa-idhā', e: 'and behold,', q: 1 },
    { a: 'هِيَ', t: 'hiya', e: 'it', q: 1 },
    { a: 'حَيَّةٌ', t: 'ḥayyatun', e: 'was a serpent', q: 1 },
    { a: 'تَسْعَى', t: 'tasʿā', e: 'moving', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a particle of answer/requital (for the fāʾ)', c: 'red' },
    { a: 'جَزَاءٍ', t: 'jazāʾin', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَإِذَا', t: 'fa-idhā', e: 'then when', q: 1 },
    { a: 'رَكِبُوا', t: 'rakibū', e: 'they board', q: 1 },
    { a: 'فِي', t: 'fī', e: 'a', q: 1 },
    { a: 'الْفُلْكِ', t: 'al-fulki', e: 'ship', q: 1 },
    { a: 'دَعَوُا', t: 'daʿawu', e: 'they call upon', q: 1 },
    { a: 'اللَّهَ', t: 'allāha', e: 'Allah', q: 1 },
    CLOSE,
  ] },

  { t: 'page', n: '٢٣٥' },

  /* ═══ أَل — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'أَلْ', en: 'al — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'لِلتَّعْرِيفِ', t: 'li-t-taʿrīf', e: 'the definite article', c: 'red' },
    NAHW, COMMA,
    { a: 'الرَّجُلُ', t: 'ar-rajulu', e: 'the man' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'اسْمٌ', t: 'ismun', e: 'a relative noun (on a participle)', c: 'red' },
    { a: 'مَوْصُولٌ', t: 'mawṣūlun', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'إِنَّ', t: 'inna', e: 'indeed', q: 1 },
    { a: 'الْمُصَّدِّقِينَ', t: 'al-muṣṣaddiqīna', e: 'the charitable men', q: 1, n: 'أل الموصولة = الذين تصدّقوا' },
    { a: 'وَالْمُصَّدِّقَاتِ', t: 'wa-l-muṣṣaddiqāti', e: 'and women', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'زَائِدَةٌ', t: 'zāʾidah', e: 'redundant (لازمة or غير لازمة)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'اللَّاتَ', t: 'al-lāta', e: 'al-Lāt', q: 1 },
    { a: 'وَالْعُزَّى', t: 'wa-l-ʿuzzā', e: 'and al-ʿUzzā', q: 1, n: 'زائدة لازمة في الأعلام' },
    CLOSE,
    { a: '،', g: '،' },
    { a: 'وَغَيْرُ', t: 'wa-ghayru', e: 'and non-fixed (tafkhīm):' },
    { a: 'لَازِمَةٍ', t: 'lāzimah', e: '' },
    { a: 'الْقَاسِمُ', t: 'al-qāsimu', e: 'al-Qāsim, al-ʿAbbās' },
  ] },

  /* ═══ أَم — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'أَمْ', en: 'am — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'أَدَاةُ', t: 'adātu', e: 'a definite article (Yemeni dialect)', c: 'red' },
    { a: 'تَعْرِيفٍ', t: 'taʿrīfin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'لَيْسَ', t: 'laysa', e: 'fasting on a journey is not' },
    { a: 'مِنَ', t: 'mina', e: 'part of' },
    { a: 'امْبِرِّ', t: 'am-birri', e: 'righteousness', n: 'أم = أل في لغة حِمْيَر' },
    { a: 'امْصِيَامُ', t: 'am-ṣiyāmu', e: '' },
    { a: 'فِي', t: 'fī', e: 'while' },
    { a: 'امْسَفَرِ', t: 'am-safari', e: 'traveling' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'عَاطِفَةٌ', t: 'ʿāṭifah', e: 'coordinating, paired (معادلة)', c: 'red' },
    { a: 'مُتَّصِلَةٌ', t: 'muttaṣilah', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'أَأَنْتُمْ', t: 'a-antum', e: 'are you', q: 1 },
    { a: 'أَعْلَمُ', t: 'aʿlamu', e: 'more knowing', q: 1 },
    { a: 'أَمِ', t: 'ami', e: 'or', q: 1 },
    { a: 'اللَّهُ', t: 'allāhu', e: 'Allah', q: 1, n: 'أم متّصلة تعادل همزة الاستفهام, تطلب التعيين' },
    CLOSE,
  ] },

  { t: 'page', n: '٢٣٦' },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'مُنْقَطِعَةٌ', t: 'munqaṭiʿah', e: 'disjunctive (= بل + hamzah)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'أَمْ', t: 'am', e: 'or do', q: 1 },
    { a: 'يَقُولُونَ', t: 'yaqūlūna', e: 'they say', q: 1 },
    { a: 'افْتَرَاهُ', t: 'iftarāhu', e: 'he invented it?', q: 1 },
    { a: 'بَلْ', t: 'bal', e: 'nay,', q: 1 },
    { a: 'هُوَ', t: 'huwa', e: 'it is', q: 1 },
    { a: 'الْحَقُّ', t: 'al-ḥaqqu', e: 'the truth', q: 1 },
    CLOSE,
  ] },

  /* ═══ إمّا — 2 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'إِمَّا', en: 'immā — two faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'مُرَكَّبَةٌ', t: 'murakkabah', e: 'compound (= إنْ الشرطية + ما الزائدة)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَإِمَّا', t: 'wa-immā', e: 'and if', q: 1 },
    { a: 'يَنْزَغَنَّكَ', t: 'yanzaghannaka', e: 'a whisper provokes you', q: 1, n: 'يغلب توكيد الفعل بالنون' },
    { a: 'مِنَ', t: 'mina', e: 'from', q: 1 },
    { a: 'الشَّيْطَانِ', t: 'ash-shayṭāni', e: 'Satan', q: 1 },
    { a: 'نَزْغٌ', t: 'nazghun', e: '', q: 1 },
    { a: 'فَاسْتَعِذْ', t: 'fa-staʿidh', e: 'seek refuge', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'عَاطِفَةٌ', t: 'ʿāṭifah', e: 'coordinating, for detailing', c: 'red' },
    { a: 'لِلتَّفْصِيلِ', t: 'li-t-tafṣīl', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'إِمَّا', t: 'immā', e: 'either', q: 1 },
    { a: 'شَاكِرًا', t: 'shākiran', e: 'grateful', q: 1 },
    { a: 'وَإِمَّا', t: 'wa-immā', e: 'or', q: 1 },
    { a: 'كَفُورًا', t: 'kafūran', e: 'ungrateful', q: 1 },
    CLOSE,
  ] },

  { t: 'page', n: '٢٣٧' },

  /* ═══ إنْ — 4 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'إِنْ', en: 'in — four faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'لِلشَّرْطِ', t: 'li-sh-sharṭ', e: 'conditional', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'إِنْ', t: 'in', e: 'if', q: 1 },
    { a: 'يَنْتَهُوا', t: 'yantahū', e: 'they desist,', q: 1 },
    { a: 'يُغْفَرْ', t: 'yughfar', e: 'it will be forgiven', q: 1 },
    { a: 'لَهُمْ', t: 'lahum', e: 'them', q: 1 },
    { a: 'مَا', t: 'mā', e: 'what', q: 1 },
    { a: 'قَدْ', t: 'qad', e: 'has passed', q: 1 },
    { a: 'سَلَفَ', t: 'salafa', e: '', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلنَّفْيِ', t: 'li-n-nafy', e: 'negating (= ما, often w/ إلّا)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'إِنْ', t: 'in', e: 'each one did nothing', q: 1 },
    { a: 'كُلٌّ', t: 'kullun', e: 'but', q: 1 },
    { a: 'إِلَّا', t: 'illā', e: 'except', q: 1 },
    { a: 'كَذَّبَ', t: 'kadhdhaba', e: 'deny', q: 1 },
    { a: 'الرُّسُلَ', t: 'ar-rusula', e: 'the messengers', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'مُخَفَّفَةٌ', t: 'mukhaffafah', e: 'lightened from the heavy إنّ', c: 'red' },
    { a: 'مِنَ', t: 'mina', e: '', c: 'red' },
    { a: 'الثَّقِيلَةِ', t: 'ath-thaqīlah', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَإِنْ', t: 'wa-in', e: 'and indeed', q: 1 },
    { a: 'كُنْتُمْ', t: 'kuntum', e: 'you were', q: 1 },
    { a: 'مِنْ', t: 'min', e: 'before it', q: 1 },
    { a: 'قَبْلِهِ', t: 'qablihi', e: '', q: 1 },
    { a: 'لَمِنَ', t: 'la-mina', e: 'surely of', q: 1, n: 'اللام الفارقة تميّزها من النافية' },
    { a: 'الضَّالِّينَ', t: 'aḍ-ḍāllīna', e: 'the astray', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'زَائِدَةٌ', t: 'zāʾidah', e: 'redundant (after ما النافية)', c: 'red' },
    NAHW, COMMA,
    { a: 'مَا', t: 'mā', e: 'I did not' },
    { a: 'إِنْ', t: 'in', e: '(at all)' },
    { a: 'مَدَحْتُ', t: 'madaḥtu', e: 'praise' },
    { a: 'مُحَمَّدًا', t: 'muḥammadan', e: 'Muḥammad' },
    { a: 'بِمَقَالَتِي', t: 'bi-maqālatī', e: 'by my speech', n: 'إنْ زائدة بعد ما' },
  ] },

  /* ═══ أنْ — 4 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'أَنْ', en: 'an — four faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'مَصْدَرِيَّةٌ', t: 'maṣdariyyah', e: 'infinitival (naṣbing the مضارع)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'أَلَا', t: 'alā', e: 'do you not', q: 1 },
    { a: 'تُحِبُّونَ', t: 'tuḥibbūna', e: 'love', q: 1 },
    { a: 'أَنْ', t: 'an', e: 'that', q: 1 },
    { a: 'يَغْفِرَ', t: 'yaghfira', e: 'Allah forgive', q: 1 },
    { a: 'اللَّهُ', t: 'allāhu', e: '', q: 1 },
    { a: 'لَكُمْ', t: 'lakum', e: 'you', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'مُفَسِّرَةٌ', t: 'mufassirah', e: 'explanatory (“that is”)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَنُودُوا', t: 'wa-nūdū', e: 'and they were called:', q: 1 },
    { a: 'أَنْ', t: 'an', e: 'that,', q: 1 },
    { a: 'تِلْكُمُ', t: 'tilkumu', e: 'this is', q: 1 },
    { a: 'الْجَنَّةُ', t: 'al-jannatu', e: 'the Garden', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'مُخَفَّفَةٌ', t: 'mukhaffafah', e: 'lightened from the heavy أنّ', c: 'red' },
    { a: 'مِنَ', t: 'mina', e: '', c: 'red' },
    { a: 'الثَّقِيلَةِ', t: 'ath-thaqīlah', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'عَلِمَ', t: 'ʿalima', e: 'He knew', q: 1 },
    { a: 'أَنْ', t: 'an', e: 'that', q: 1 },
    { a: 'سَيَكُونُ', t: 'sa-yakūnu', e: 'there will be', q: 1 },
    { a: 'مِنْكُمْ', t: 'minkum', e: 'among you', q: 1 },
    { a: 'مَرْضَى', t: 'marḍā', e: 'sick ones', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'زَائِدَةٌ', t: 'zāʾidah', e: 'redundant (after لمّا)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَلَمَّا', t: 'fa-lammā', e: 'so when', q: 1 },
    { a: 'أَنْ', t: 'an', e: '(then)', q: 1 },
    { a: 'جَاءَ', t: 'jāʾa', e: 'the bearer of glad tidings came', q: 1 },
    { a: 'الْبَشِيرُ', t: 'al-bashīru', e: '', q: 1 },
    CLOSE,
  ] },
];
