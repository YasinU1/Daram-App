/* ── al-Kubrā fī an-Naḥw — الخاتمة · وجوه الكلمات · القسم 21: إي → خلا وعدا (pp. 237–242) ──
   Backward-pass matn for the Daram Learn "wujūh al-kalimāt" dictionary (ch 21). Word-by-word from
   the book PDF for the learn matn panel. Reuses shared glyph consts (OPEN/CLOSE/NAHW/COMMA/ELL)
   from muqaddimah.js — do NOT redeclare. Var: DATA_KH_W21.                                        */

const DATA_KH_W21 = [
  { t: 'page', n: '٢٣٧' },

  /* ═══ إي — 3 faces (only before القسم) ═══ */
  { t: 'h2', c: 'blue', ar: 'إِي', en: 'ī — three faces (never but before an oath)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'لِلتَّصْدِيقِ', t: 'li-t-taṣdīq', e: 'affirming a report (= أجَل)', c: 'red' },
    NAHW, COMMA,
    { a: 'إِي', t: 'ī', e: 'yes indeed,' },
    { a: 'وَرَبِّي', t: 'wa-rabbī', e: 'by my Lord', n: 'جوابًا لخبر: إنّ في العلم للذّة' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلْإِعْلَامِ', t: 'li-l-iʿlām', e: 'informing after a question (= نَعَم)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'قُلْ', t: 'qul', e: 'say', q: 1 },
    { a: 'إِي', t: 'ī', e: 'yes,', q: 1 },
    { a: 'وَرَبِّي', t: 'wa-rabbī', e: 'by my Lord', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِلْوَعْدِ', t: 'li-l-waʿd', e: 'promising after a request', c: 'red' },
    NAHW, COMMA,
    { a: 'إِي', t: 'ī', e: 'yes,' },
    { a: 'وَرَبِّي', t: 'wa-rabbī', e: 'by my Lord', n: 'جوابًا لطلب: أطلبُ العلم' },
  ] },

  { t: 'page', n: '٢٣٨' },

  /* ═══ أَي (حرف) — 2 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'أَيْ', en: 'ay (a particle) — two faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'نِدَاءُ', t: 'nidāʾu', e: 'calling one near', c: 'red' },
    { a: 'الْقَرِيبِ', t: 'al-qarīb', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'أَيْ', t: 'ay', e: 'O' },
    { a: 'بُنَيَّ', t: 'bunayya', e: 'my dear son' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلتَّفْسِيرِ', t: 'li-t-tafsīr', e: 'for explanation (“that is”)', c: 'red' },
    NAHW, COMMA,
    { a: 'أَسْأَلُ', t: 'asʾalu', e: 'I ask' },
    { a: 'اللَّهَ', t: 'allāha', e: 'Allah for' },
    { a: 'الْفِرْدَوْسَ', t: 'al-firdaws', e: 'al-Firdaws,' },
    { a: 'أَيِ', t: 'ay', e: 'that is,' },
    { a: 'الْجَنَّةَ', t: 'al-jannata', e: 'Paradise' },
  ] },

  /* ═══ أيّ (اسم) — 5 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'أَيّ', en: 'ayy (a noun) — five faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'لِلشَّرْطِ', t: 'li-sh-sharṭ', e: 'conditional', c: 'red' },
    NAHW, COMMA,
    { a: 'أَيُّ', t: 'ayyu', e: 'whichever' },
    { a: 'عَالِمٍ', t: 'ʿālimin', e: 'scholar' },
    { a: 'يَتَكَبَّرْ', t: 'yatakabbar', e: 'is arrogant,' },
    { a: 'يُبْغِضْهُ', t: 'yubghiḍhu', e: 'Allah dislikes him' },
    { a: 'اللَّهُ', t: 'allāhu', e: '' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلِاسْتِفْهَامِ', t: 'li-l-istifhām', e: 'interrogative', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'أَيُّكُمْ', t: 'ayyukum', e: 'which of you', q: 1 },
    { a: 'يَأْتِينِي', t: 'yaʾtīnī', e: 'will bring me', q: 1 },
    { a: 'بِعَرْشِهَا', t: 'bi-ʿarshihā', e: 'her throne', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِلْمَوْصُولِ', t: 'li-l-mawṣūl', e: 'relative', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لَنَنْزِعَنَّ', t: 'la-nanziʿanna', e: 'We shall drag out', q: 1 },
    { a: 'مِنْ', t: 'min', e: 'from', q: 1 },
    { a: 'كُلِّ', t: 'kulli', e: 'every', q: 1 },
    { a: 'شِيعَةٍ', t: 'shīʿatin', e: 'sect', q: 1 },
    { a: 'أَيُّهُمْ', t: 'ayyuhum', e: 'whichever of them', q: 1, n: 'مبنيّة على الضمّ لحذف صدر صلتها' },
    { a: 'أَشَدُّ', t: 'ashaddu', e: 'is most severe', q: 1 },
    CLOSE,
  ] },

  { t: 'page', n: '٢٣٩' },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'لِلْكَمَالِ', t: 'li-l-kamāl', e: 'for perfection (emphasis)', c: 'red' },
    NAHW, COMMA,
    { a: 'أَضَاعُونِي', t: 'aḍāʿūnī', e: 'they wasted me —' },
    { a: 'وَأَيَّ', t: 'wa-ayya', e: 'and what a' },
    { a: 'فَتًى', t: 'fatan', e: 'young man' },
    { a: 'أَضَاعُوا', t: 'aḍāʿū', e: 'they wasted!' },
  ] },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'وُصْلَةٌ', t: 'wuṣlah', e: 'a link to calling a word with أل', c: 'red' },
    { a: 'لِلنِّدَاءِ', t: 'li-n-nidāʾ', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'يَا', t: 'yā', e: 'O', q: 1 },
    { a: 'أَيُّهَا', t: 'ayyuhā', e: '(you)', q: 1 },
    { a: 'الْإِنْسَانُ', t: 'al-insānu', e: 'man', q: 1, n: 'أيّ وُصلة لنداء المعرّف بأل' },
    CLOSE,
  ] },

  /* ═══ بَل — 2 faces (حرف إضراب) ═══ */
  { t: 'h2', c: 'blue', ar: 'بَلْ', en: 'bal — two faces (a particle of iḍrāb)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'عَاطِفَةٌ', t: 'ʿāṭifah', e: 'coordinating (before a مفرد)', c: 'red' },
    NAHW, COMMA,
    { a: 'لَا', t: 'lā', e: 'do not seek' },
    { a: 'تَطْلُبْ', t: 'taṭlub', e: '' },
    { a: 'حَرَامًا', t: 'ḥarāman', e: 'the unlawful,' },
    { a: 'بَلْ', t: 'bal', e: 'but rather' },
    { a: 'حَلَالًا', t: 'ḥalālan', e: 'the lawful' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'ابْتِدَائِيَّةٌ', t: 'ibtidāʾiyyah', e: 'inceptive (before a جملة)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'سُبْحَانَهُ', t: 'subḥānahu', e: 'glory be to Him!', q: 1 },
    { a: 'بَلْ', t: 'bal', e: 'rather', q: 1, n: 'للإبطال: تنفي ما قبلها وتُثبت ما بعدها' },
    { a: 'عِبَادٌ', t: 'ʿibādun', e: 'they are servants', q: 1 },
    { a: 'مُكْرَمُونَ', t: 'mukramūna', e: 'honoured', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'وَقَدْ', t: 'wa-qad', e: 'and (bal) may be', c: 'red' },
    { a: 'تَكُونُ', t: 'takūnu', e: '', c: 'red' },
    { a: 'لِلِانْتِقَالِ', t: 'li-l-intiqāl', e: 'for transition (no negation)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'بَلْ', t: 'bal', e: 'nay,', q: 1 },
    { a: 'تُؤْثِرُونَ', t: 'tuʾthirūna', e: 'you prefer', q: 1 },
    { a: 'الْحَيَاةَ', t: 'al-ḥayāta', e: 'the life of', q: 1 },
    { a: 'الدُّنْيَا', t: 'ad-dunyā', e: 'this world', q: 1 },
    CLOSE,
  ] },

  { t: 'page', n: '٢٤٠' },

  /* ═══ التاء — 7 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'التَّاءُ', en: 'the tāʾ — seven faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a preposition of oath', c: 'red' },
    { a: 'جَرٍّ', t: 'jarrin', e: '', c: 'red' },
    { a: 'لِلْقَسَمِ', t: 'li-l-qasam', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'تَاللَّهِ', t: 'ta-llāhi', e: 'by Allah', q: 1 },
    { a: 'لَقَدْ', t: 'la-qad', e: 'certainly', q: 1 },
    { a: 'آثَرَكَ', t: 'ātharaka', e: 'He preferred you', q: 1 },
    { a: 'اللَّهُ', t: 'allāhu', e: '', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a present-tense prefix', c: 'red' },
    { a: 'مُضَارَعَةٍ', t: 'muḍāraʿatin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'تُؤْمِنُ', t: 'tuʾminu', e: 'you believe' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِلنِّسْبَةِ', t: 'li-n-nisbah', e: 'for relation', c: 'red' },
    NAHW, COMMA,
    { a: 'الْحَنَابِلَةُ', t: 'al-ḥanābilah', e: 'the Ḥanbalīs', n: 'التاء للنسبة في جمع' },
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a particle of address (end of a noun)', c: 'red' },
    { a: 'خِطَابٍ', t: 'khiṭābin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'أَنْتَ', t: 'anta', e: 'you' },
  ] },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'عَلَامَةُ', t: 'ʿalāmatu', e: 'a sign of feminine gender', c: 'red' },
    { a: 'تَأْنِيثٍ', t: 'taʾnīthin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'السَّاعَةُ', t: 'as-sāʿatu', e: 'as-sāʿah (مربوطة on a noun),' },
    { a: 'قَامَتْ', t: 'qāmat', e: 'qāmat (مفتوحة on a past verb)' },
  ] },

  { t: 'line', w: [
    { a: 'السَّادِسُ', t: 'as-sādisu', e: 'the sixth:', c: 'red' },
    { a: 'ضَمِيرٌ', t: 'ḍamīrun', e: 'a prominent pronoun (end of a verb)', c: 'red' },
    { a: 'بَارِزٌ', t: 'bārizun', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'آمَنْتُ', t: 'āmantu', e: 'I believed' },
  ] },

  { t: 'line', w: [
    { a: 'السَّابِعُ', t: 'as-sābiʿu', e: 'the seventh:', c: 'red' },
    { a: 'زَائِدَةٌ', t: 'zāʾidah', e: 'redundant', c: 'red' },
    NAHW, COMMA,
    { a: 'رُبَّتَ', t: 'rubbata', e: 'rubbata (on the جارّة),' },
    { a: 'ثُمَّتَ', t: 'thummata', e: 'thummata (on the عاطفة),' },
    { a: 'ثَمَّتَ', t: 'thammata', e: 'thammata (on the ظرف)' },
  ] },

  { t: 'page', n: '٢٤١' },

  /* ═══ حَتّى — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'حَتَّى', en: 'ḥattā — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a preposition', c: 'red' },
    { a: 'جَرٍّ', t: 'jarrin', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'سَلَامٌ', t: 'salāmun', e: 'peace it is', q: 1 },
    { a: 'هِيَ', t: 'hiya', e: '', q: 1 },
    { a: 'حَتَّى', t: 'ḥattā', e: 'until', q: 1 },
    { a: 'مَطْلَعِ', t: 'maṭlaʿi', e: 'the break of', q: 1 },
    { a: 'الْفَجْرِ', t: 'al-fajri', e: 'dawn', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a particle of coordination', c: 'red' },
    { a: 'عَطْفٍ', t: 'ʿaṭfin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'أَكَلْتُ', t: 'akaltu', e: 'I ate' },
    { a: 'السَّمَكَةَ', t: 'as-samakata', e: 'the fish,' },
    { a: 'حَتَّى', t: 'ḥattā', e: 'even' },
    { a: 'رَأْسَهَا', t: 'raʾsahā', e: 'its head' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a particle of resumption', c: 'red' },
    { a: 'اسْتِئْنَافٍ', t: 'istiʾnāfin', e: '(before a jumlah)', c: 'red' },
    NAHW, COMMA,
    { a: 'حَتَّى', t: 'ḥattā', e: 'until (so that)' },
    { a: 'مَاءُ', t: 'māʾu', e: 'the water of' },
    { a: 'دِجْلَةَ', t: 'dijlata', e: 'the Tigris' },
    { a: 'أَشْكَلُ', t: 'ashkalu', e: 'became mixed', n: 'حتى ابتدائية: يليها جملة' },
  ] },

  { t: 'page', n: '٢٤٢' },

  /* ═══ حاشا — 2 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'حَاشَا', en: 'ḥāshā — two faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'اسْمُ', t: 'ismu', e: 'a verbal-noun of exalting (tanzīh)', c: 'red' },
    { a: 'مَصْدَرٍ', t: 'maṣdarin', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'حَاشَ', t: 'ḥāsha', e: 'far be it', q: 1 },
    { a: 'لِلَّهِ', t: 'lillāhi', e: 'from Allah!', q: 1 },
    { a: 'مَا', t: 'mā', e: 'this is no', q: 1 },
    { a: 'هَذَا', t: 'hādhā', e: '', q: 1 },
    { a: 'بَشَرًا', t: 'basharan', e: 'human', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a preposition (exception)', c: 'red' },
    { a: 'جَرٍّ', t: 'jarrin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'أَسَاءَ', t: 'asāʾa', e: 'the people did wrong' },
    { a: 'الْقَوْمُ', t: 'al-qawmu', e: '' },
    { a: 'حَاشَا', t: 'ḥāshā', e: 'except' },
    { a: 'زَيْدٍ', t: 'zaydin', e: 'Zayd', n: 'حاشا جارّة تجرّ المستثنى' },
  ] },

  /* ═══ خَلا وعَدا — 2 faces (both للاستثناء) ═══ */
  { t: 'h2', c: 'blue', ar: 'خَلَا وَعَدَا', en: 'khalā & ʿadā — two faces (both for exception)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'فِعْلٌ', t: 'fiʿlun', e: 'a past verb (naṣbing the mustathnā)', c: 'red' },
    { a: 'مَاضٍ', t: 'māḍin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'أَلَا', t: 'alā', e: 'lo, everything' },
    { a: 'كُلُّ', t: 'kullu', e: '' },
    { a: 'شَيْءٍ', t: 'shayʾin', e: '' },
    { a: 'مَا', t: 'mā', e: 'other than' },
    { a: 'خَلَا', t: 'khalā', e: 'except', n: 'بعد ما تتعيّن فعليّتها فتنصب' },
    { a: 'اللَّهَ', t: 'allāha', e: 'Allah' },
    { a: 'بَاطِلُ', t: 'bāṭilu', e: 'is vain' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a preposition (jarring the mustathnā)', c: 'red' },
    { a: 'جَرٍّ', t: 'jarrin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'خَلَا', t: 'khalā', e: 'except' },
    { a: 'اللَّهِ', t: 'allāhi', e: 'Allah,' },
    { a: 'مَا', t: 'mā', e: 'I hope for' },
    { a: 'أَرْجُو', t: 'arjū', e: 'none' },
    { a: 'سِوَاكَ', t: 'siwāka', e: 'but You' },
  ] },
];
