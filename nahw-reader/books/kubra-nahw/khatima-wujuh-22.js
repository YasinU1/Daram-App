/* ── al-Kubrā fī an-Naḥw — الخاتمة · وجوه الكلمات · القسم 22: ذا → كلّا (pp. 242–245) ──
   Backward-pass matn for the Daram Learn "wujūh al-kalimāt" dictionary (ch 22). Word-by-word from
   the book PDF for the learn matn panel. Reuses shared glyph consts (OPEN/CLOSE/NAHW/COMMA/ELL)
   from muqaddimah.js — do NOT redeclare. Var: DATA_KH_W22.                                        */

const DATA_KH_W22 = [
  { t: 'page', n: '٢٤٢' },

  /* ═══ ذا — 2 faces (اسم) ═══ */
  { t: 'h2', c: 'blue', ar: 'ذَا', en: 'dhā — two faces (a noun)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'اسْمُ', t: 'ismu', e: 'a demonstrative', c: 'red' },
    { a: 'إِشَارَةٍ', t: 'ishāratin', e: 'noun', c: 'red' },
    NAHW, COMMA,
    { a: 'هَذَا', t: 'hādhā', e: 'this' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'اسْمٌ', t: 'ismun', e: 'a relative noun', c: 'red' },
    { a: 'مَوْصُولٌ', t: 'mawṣūlun', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'مَاذَا', t: 'mādhā', e: 'what is it that', q: 1, n: 'ذا موصولة بعد ما الاستفهامية' },
    { a: 'أَنْزَلَ', t: 'anzala', e: 'your Lord sent down', q: 1 },
    { a: 'رَبُّكُمْ', t: 'rabbukum', e: '', q: 1 },
    CLOSE,
  ] },

  { t: 'page', n: '٢٤٣' },

  /* ═══ ذو — 2 faces (اسم) ═══ */
  { t: 'h2', c: 'blue', ar: 'ذُو', en: 'dhū — two faces (a noun)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'بِمَعْنَى', t: 'bi-maʿnā', e: 'meaning “possessor of”', c: 'red' },
    { a: 'صَاحِبٍ', t: 'ṣāḥibin', e: '(always muḍāf)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَاللَّهُ', t: 'wa-llāhu', e: 'and Allah', q: 1 },
    { a: 'ذُو', t: 'dhū', e: 'is the Possessor of', q: 1 },
    { a: 'الْفَضْلِ', t: 'al-faḍli', e: 'bounty', q: 1 },
    { a: 'الْعَظِيمِ', t: 'al-ʿaẓīmi', e: 'immense', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'مَوْصُولَةٌ', t: 'mawṣūlah', e: 'relative (= الذي, dialect of Ṭayyiʾ)', c: 'red' },
    NAHW, COMMA,
    { a: 'فَإِنَّ', t: 'fa-inna', e: 'for the house of' },
    { a: 'بَيْتَ', t: 'bayta', e: 'Tamīm' },
    { a: 'تَمِيمٍ', t: 'tamīmin', e: '' },
    { a: 'ذُو', t: 'dhū', e: 'which', n: 'ذو = الذي في لغة طيّئ' },
    { a: 'سَمِعْتُ', t: 'samiʿtu', e: 'I heard' },
    { a: 'بِهِ', t: 'bihi', e: 'of' },
  ] },

  /* ═══ عَسَى — 2 faces (فعل جامد) ═══ */
  { t: 'h2', c: 'blue', ar: 'عَسَى', en: 'ʿasā — two faces (a rigid verb)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'فِعْلٌ', t: 'fiʿlun', e: 'defective (needs an ism + khabar)', c: 'red' },
    { a: 'نَاقِصٌ', t: 'nāqiṣun', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'عَسَى', t: 'ʿasā', e: 'perhaps', q: 1 },
    { a: 'اللَّهُ', t: 'allāhu', e: 'Allah', q: 1 },
    { a: 'أَنْ', t: 'an', e: 'will', q: 1 },
    { a: 'يَعْفُوَ', t: 'yaʿfuwa', e: 'pardon', q: 1 },
    { a: 'عَنْهُمْ', t: 'ʿanhum', e: 'them', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'فِعْلٌ', t: 'fiʿlun', e: 'complete (an أنْ-clause is its fāʿil)', c: 'red' },
    { a: 'تَامٌّ', t: 'tāmmun', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'عَسَى', t: 'ʿasā', e: 'perhaps', q: 1 },
    { a: 'أَنْ', t: 'an', e: 'that', q: 1 },
    { a: 'يَبْعَثَكَ', t: 'yabʿathaka', e: 'your Lord will raise you', q: 1 },
    { a: 'رَبُّكَ', t: 'rabbuka', e: '', q: 1 },
    { a: 'مَقَامًا', t: 'maqāman', e: 'to a station', q: 1 },
    { a: 'مَحْمُودًا', t: 'maḥmūdan', e: 'praised', q: 1 },
    CLOSE,
  ] },

  /* ═══ غَيْر — 4 faces (اسم) ═══ */
  { t: 'h2', c: 'blue', ar: 'غَيْر', en: 'ghayr — four faces (a noun, always muḍāf)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'صِفَةٌ', t: 'ṣifah', e: 'an adjective (after a نكرة)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لَا', t: 'lā', e: 'do not', q: 1 },
    { a: 'تَدْخُلُوا', t: 'tadkhulū', e: 'enter', q: 1 },
    { a: 'بُيُوتًا', t: 'buyūtan', e: 'houses', q: 1 },
    { a: 'غَيْرَ', t: 'ghayra', e: 'other than', q: 1 },
    { a: 'بُيُوتِكُمْ', t: 'buyūtikum', e: 'your houses', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'بَدَلٌ', t: 'badalun', e: 'a substitute (after a معرفة)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'صِرَاطَ', t: 'ṣirāṭa', e: 'the path of', q: 1 },
    { a: 'الَّذِينَ', t: 'alladhīna', e: 'those You favoured', q: 1 },
    { a: 'أَنْعَمْتَ', t: 'anʿamta', e: '', q: 1 },
    { a: 'عَلَيْهِمْ', t: 'ʿalayhim', e: '', q: 1 },
    { a: 'غَيْرِ', t: 'ghayri', e: 'not', q: 1 },
    { a: 'الْمَغْضُوبِ', t: 'al-maghḍūbi', e: 'those with wrath', q: 1 },
    { a: 'عَلَيْهِمْ', t: 'ʿalayhim', e: 'upon them', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِلِاسْتِثْنَاءِ', t: 'li-l-istithnāʾ', e: 'for exception', c: 'red' },
    NAHW, COMMA,
    { a: 'صَامَ', t: 'ṣāma', e: 'the Muslims fasted' },
    { a: 'الْمُسْلِمُونَ', t: 'al-muslimūna', e: '' },
    { a: 'غَيْرَ', t: 'ghayra', e: 'except' },
    { a: 'الْمَرْضَى', t: 'al-marḍā', e: 'the sick', n: 'غير هنا كـ إلّا' },
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'بِمَعْنَى', t: 'bi-maʿnā', e: 'meaning “but / however”', c: 'red' },
    { a: 'لَكِنْ', t: 'lākin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'جَوَادٌ', t: 'jawādun', e: 'generous,' },
    { a: 'غَيْرَ', t: 'ghayra', e: 'except that (= but)' },
    { a: 'أَنَّهُ', t: 'annahu', e: 'he' },
    { a: 'لَا', t: 'lā', e: 'keeps nothing' },
    { a: 'يُبْقِي', t: 'yubqī', e: 'of wealth', n: 'غير بمعنى لكن للاستدراك' },
  ] },

  { t: 'page', n: '٢٤٤' },

  /* ═══ الفاء — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'الْفَاءُ', en: 'the fāʾ — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'عَاطِفَةٌ', t: 'ʿāṭifah', e: 'coordinating (order + immediacy)', c: 'red' },
    NAHW, COMMA,
    { a: 'جَاءَ', t: 'jāʾa', e: 'Zayd came,' },
    { a: 'زَيْدٌ', t: 'zaydun', e: '' },
    { a: 'فَعَمْرٌو', t: 'fa-ʿamrun', e: 'then ʿAmr' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'مُسْتَأْنِفَةٌ', t: 'mustaʾnifah', e: 'resumptive', c: 'red' },
    NAHW, COMMA,
    { a: 'وَدَخَلَ', t: 'wa-dakhala', e: 'and he entered' },
    { a: 'الْمَدِينَةَ', t: 'al-madīnata', e: 'the city' },
    ELL,
    { a: 'فَوَجَدَ', t: 'fa-wajada', e: 'and found', n: 'فاء الاستئناف: جملة مستقلة' },
    { a: 'فِيهَا', t: 'fīhā', e: 'in it' },
    { a: 'رَجُلَيْنِ', t: 'rajulayni', e: 'two men' },
    { a: 'يَقْتَتِلَانِ', t: 'yaqtatilāni', e: 'fighting' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'رَابِطَةٌ', t: 'rābiṭah', e: 'binding the answer of a شرط', c: 'red' },
    { a: 'لِجَوَابِ', t: 'li-jawāb', e: '', c: 'red' },
    { a: 'الشَّرْطِ', t: 'ash-sharṭ', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'إِنْ', t: 'in', e: 'if', q: 1 },
    { a: 'تُعَذِّبْهُمْ', t: 'tuʿadhdhibhum', e: 'You punish them', q: 1 },
    { a: 'فَإِنَّهُمْ', t: 'fa-innahum', e: 'then indeed they', q: 1 },
    { a: 'عِبَادُكَ', t: 'ʿibāduka', e: 'are Your servants', q: 1 },
    CLOSE,
  ] },

  /* ═══ قَد — 5 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'قَدْ', en: 'qad — five faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'لِلتَّوَقُّعِ', t: 'li-t-tawaqquʿ', e: 'for expectancy (w/ مضارع)', c: 'red' },
    NAHW, COMMA,
    { a: 'قَدْ', t: 'qad', e: 'Zayd may' },
    { a: 'يَخْرُجُ', t: 'yakhruju', e: 'go out' },
    { a: 'زَيْدٌ', t: 'zaydun', e: '' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلتَّحْقِيقِ', t: 'li-t-taḥqīq', e: 'for certainty', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'قَدْ', t: 'qad', e: 'certainly', q: 1 },
    { a: 'أَفْلَحَ', t: 'aflaḥa', e: 'have succeeded', q: 1 },
    { a: 'الْمُؤْمِنُونَ', t: 'al-muʾminūna', e: 'the believers', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِلتَّقْلِيلِ', t: 'li-t-taqlīl', e: 'for “seldom / sometimes”', c: 'red' },
    NAHW, COMMA,
    { a: 'قَدْ', t: 'qad', e: 'the habitual liar' },
    { a: 'يَصْدُقُ', t: 'yaṣduqu', e: 'may sometimes tell the truth' },
    { a: 'الْكَذُوبُ', t: 'al-kadhūbu', e: '' },
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'لِلتَّكْثِيرِ', t: 'li-t-takthīr', e: 'for “often / much”', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'قَدْ', t: 'qad', e: 'We do often', q: 1 },
    { a: 'نَرَى', t: 'narā', e: 'see', q: 1 },
    { a: 'تَقَلُّبَ', t: 'taqalluba', e: 'the turning of', q: 1 },
    { a: 'وَجْهِكَ', t: 'wajhika', e: 'your face', q: 1 },
    { a: 'فِي', t: 'fī', e: 'toward', q: 1 },
    { a: 'السَّمَاءِ', t: 'as-samāʾi', e: 'the sky', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'لِلتَّقْرِيبِ', t: 'li-t-taqrīb', e: 'for “just now / imminence”', c: 'red' },
    NAHW, COMMA,
    { a: 'قَدْ', t: 'qad', e: 'the prayer' },
    { a: 'قَامَتِ', t: 'qāmati', e: 'has just now begun' },
    { a: 'الصَّلَاةُ', t: 'aṣ-ṣalātu', e: '' },
  ] },

  { t: 'page', n: '٢٤٥' },

  /* ═══ الكاف — 4 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'الْكَافُ', en: 'the kāf — four faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'حَرْفٌ', t: 'ḥarfun', e: 'a preposition (simile / reason)', c: 'red' },
    { a: 'جَارٌّ', t: 'jārrun', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'مَثَلُ', t: 'mathalu', e: 'the likeness of', q: 1 },
    { a: 'نُورِهِ', t: 'nūrihi', e: 'His light', q: 1 },
    { a: 'كَمِشْكَاةٍ', t: 'ka-mishkātin', e: 'is as a niche', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a particle of address', c: 'red' },
    { a: 'خِطَابٍ', t: 'khiṭābin', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'ذَلِكَ', t: 'dhālika', e: 'that', q: 1 },
    { a: 'الْكِتَابُ', t: 'al-kitābu', e: 'is the Book', q: 1, n: 'الكاف حرف خطاب لا محلّ له' },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'ضَمِيرٌ', t: 'ḍamīrun', e: 'a منصوب/مجرور pronoun', c: 'red' },
    { a: 'مَنْصُوبٌ', t: 'manṣūbun', e: '', c: 'red' },
    { a: 'أَوْ', t: 'aw', e: '', c: 'red' },
    { a: 'مَجْرُورٌ', t: 'majrūrun', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'مَا', t: 'mā', e: 'your Lord has not', q: 1 },
    { a: 'وَدَّعَكَ', t: 'waddaʿaka', e: 'forsaken you', q: 1, n: 'الكاف ضمير مفعول به' },
    { a: 'رَبُّكَ', t: 'rabbuka', e: '', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'اسْمٌ', t: 'ismun', e: 'a noun meaning “like”', c: 'red' },
    { a: 'بِمَعْنَى', t: 'bi-maʿnā', e: '', c: 'red' },
    { a: 'مِثْلَ', t: 'mithla', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'أَخْلُقُ', t: 'akhluqu', e: 'I fashion', q: 1 },
    { a: 'لَكُمْ', t: 'lakum', e: 'for you', q: 1 },
    { a: 'مِنَ', t: 'mina', e: 'from', q: 1 },
    { a: 'الطِّينِ', t: 'aṭ-ṭīni', e: 'clay', q: 1 },
    { a: 'كَهَيْئَةِ', t: 'ka-hayʾati', e: 'like the form of', q: 1, n: 'الكاف اسم بمعنى مثل, مفعول به' },
    { a: 'الطَّيْرِ', t: 'aṭ-ṭayri', e: 'a bird', q: 1 },
    CLOSE,
  ] },

  /* ═══ كَلَّا — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'كَلَّا', en: 'kallā — three faces (rebuke & restraint)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'لِلزَّجْرِ', t: 'li-z-zajr', e: 'for restraint / rebuke', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'رَبِّ', t: 'rabbi', e: 'my Lord,', q: 1 },
    { a: 'ارْجِعُونِ', t: 'irjiʿūni', e: 'send me back', q: 1 },
    ELL,
    { a: 'كَلَّا', t: 'kallā', e: 'nay! (never)', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلتَّصْدِيقِ', t: 'li-t-taṣdīq', e: 'for affirmation (= truly)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'كَلَّا', t: 'kallā', e: 'nay, truly', q: 1 },
    { a: 'وَالْقَمَرِ', t: 'wa-l-qamari', e: 'by the moon', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِلِاسْتِفْتَاحِ', t: 'li-l-istiftāḥ', e: 'for opening (= alā/haqqan)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'كَلَّا', t: 'kallā', e: 'nay! / indeed', q: 1 },
    { a: 'إِنَّ', t: 'inna', e: 'surely', q: 1 },
    { a: 'الْإِنْسَانَ', t: 'al-insāna', e: 'man', q: 1 },
    { a: 'لَيَطْغَى', t: 'la-yaṭghā', e: 'transgresses', q: 1 },
    CLOSE,
  ] },
];
