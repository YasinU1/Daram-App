/* ── al-Kubrā fī an-Naḥw — الخاتمة · وجوه الكلمات · القسم 23: كم → لولا (pp. 246–249) ──
   Backward-pass matn for the Daram Learn "wujūh al-kalimāt" dictionary (ch 23). Word-by-word from
   the book PDF for the learn matn panel. Reuses shared glyph consts (OPEN/CLOSE/NAHW/COMMA/ELL)
   from muqaddimah.js — do NOT redeclare. Var: DATA_KH_W23.                                        */

const DATA_KH_W23 = [
  { t: 'page', n: '٢٤٦' },

  /* ═══ كَم — 2 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'كَمْ', en: 'kam — two faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'اسْتِفْهَامِيَّةٌ', t: 'istifhāmiyyah', e: 'interrogative', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'كَمْ', t: 'kam', e: 'how long', q: 1 },
    { a: 'لَبِثْتُمْ', t: 'labithtum', e: 'did you remain', q: 1 },
    { a: 'فِي', t: 'fī', e: 'in', q: 1 },
    { a: 'الْأَرْضِ', t: 'al-arḍi', e: 'the earth', q: 1 },
    { a: 'عَدَدَ', t: 'ʿadada', e: 'a number of', q: 1 },
    { a: 'سِنِينَ', t: 'sinīna', e: 'years', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'خَبَرِيَّةٌ', t: 'khabariyyah', e: 'predicative (“how many!”)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'كَمْ', t: 'kam', e: 'how many', q: 1 },
    { a: 'أَنْبَتْنَا', t: 'anbatnā', e: 'We caused to grow', q: 1 },
    { a: 'فِيهَا', t: 'fīhā', e: 'therein', q: 1 },
    { a: 'مِنْ', t: 'min', e: 'of', q: 1 },
    { a: 'كُلِّ', t: 'kulli', e: 'every', q: 1 },
    { a: 'زَوْجٍ', t: 'zawjin', e: 'pair', q: 1 },
    { a: 'كَرِيمٍ', t: 'karīmin', e: 'noble', q: 1 },
    CLOSE,
  ] },

  /* ═══ كَي — 2 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'كَيْ', en: 'kay — two faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'نَاصِبَةٌ', t: 'nāṣibah', e: 'naṣb-governing (of the مضارع)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لِكَيْ', t: 'li-kay', e: 'so that', q: 1 },
    { a: 'لَا', t: 'lā', e: 'not', q: 1 },
    { a: 'يَعْلَمَ', t: 'yaʿlama', e: 'he knows', q: 1 },
    { a: 'بَعْدَ', t: 'baʿda', e: 'after', q: 1 },
    { a: 'عِلْمٍ', t: 'ʿilmin', e: 'knowledge', q: 1 },
    { a: 'شَيْئًا', t: 'shayʾan', e: 'anything', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'جَارَّةٌ', t: 'jārrah', e: 'preposition (rare)', c: 'red' },
    NAHW, COMMA,
    { a: 'كَيْمَهْ', t: 'kaymah', e: 'why (for what)' },
    { a: 'عَصَيْتَ', t: 'ʿaṣayta', e: 'did you disobey' },
    { a: 'اللَّهَ', t: 'allāha', e: 'Allah', n: 'كي جارّة داخلة على ما الاستفهامية' },
  ] },

  /* ═══ كَيْف — 2 faces (اسم) ═══ */
  { t: 'h2', c: 'blue', ar: 'كَيْفَ', en: 'kayfa — two faces (a noun)' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'لِلِاسْتِفْهَامِ', t: 'li-l-istifhām', e: 'interrogative', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'انْظُرْ', t: 'unẓur', e: 'see', q: 1 },
    { a: 'كَيْفَ', t: 'kayfa', e: 'how', q: 1 },
    { a: 'ضَرَبُوا', t: 'ḍarabū', e: 'they set forth', q: 1 },
    { a: 'لَكَ', t: 'laka', e: 'for you', q: 1 },
    { a: 'الْأَمْثَالَ', t: 'al-amthāla', e: 'the parables', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلشَّرْطِ', t: 'li-sh-sharṭ', e: 'conditional', c: 'red' },
    NAHW, COMMA,
    { a: 'كَيْفَ', t: 'kayfa', e: 'however' },
    { a: 'تَجْلِسُ', t: 'tajlisu', e: 'you sit' },
    { a: 'أَجْلِسُ', t: 'ajlisu', e: 'I sit', n: 'شرط غير جازم' },
  ] },

  /* ═══ اللام — 7 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'اللَّامُ', en: 'the lām — seven faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'الْجَارَّةُ', t: 'al-jārrah', e: 'the preposition', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'الْحَمْدُ', t: 'al-ḥamdu', e: 'all praise', q: 1 },
    { a: 'لِلَّهِ', t: 'lillāhi', e: 'is for Allah', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لَامُ', t: 'lāmu', e: 'the lām of', c: 'red' },
    { a: 'الْأَمْرِ', t: 'al-amr', e: 'command', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَلْيَعْبُدُوا', t: 'fal-yaʿbudū', e: 'so let them worship', q: 1, n: 'ساكنة بعد الفاء' },
    { a: 'رَبَّ', t: 'rabba', e: 'the Lord of', q: 1 },
    { a: 'هَذَا', t: 'hādhā', e: 'this', q: 1 },
    { a: 'الْبَيْتِ', t: 'al-bayti', e: 'House', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لَامُ', t: 'lāmu', e: 'the lām of', c: 'red' },
    { a: 'الِابْتِدَاءِ', t: 'al-ibtidāʾ', e: 'inception', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَلَدَارُ', t: 'wa-la-dāru', e: 'and the Home of', q: 1 },
    { a: 'الْآخِرَةِ', t: 'al-ākhirati', e: 'the Hereafter', q: 1 },
    { a: 'خَيْرٌ', t: 'khayrun', e: 'is better', q: 1 },
    CLOSE,
    { a: '،', g: '،' },
    { a: 'وَتُسَمَّى', t: 'wa-tusammā', e: 'and after إنّ it is called' },
    { a: 'الْمُزَحْلَقَةَ', t: 'al-muzaḥlaqah', e: 'the shifted lām', n: '﴿وإنه لغفور رحيم﴾' },
  ] },

  { t: 'page', n: '٢٤٧' },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'لَامُ', t: 'lāmu', e: 'the lām of', c: 'red' },
    { a: 'الْجَوَابِ', t: 'al-jawāb', e: 'the answer (of لو/لولا/القسم)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَلَوْ', t: 'wa-law', e: 'and had', q: 1 },
    { a: 'شَاءَ', t: 'shāʾa', e: 'willed', q: 1 },
    { a: 'اللَّهُ', t: 'allāhu', e: 'Allah', q: 1 },
    { a: 'لَذَهَبَ', t: 'la-dhahaba', e: 'He would have taken away', q: 1 },
    { a: 'بِسَمْعِهِمْ', t: 'bi-samʿihim', e: 'their hearing', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'الْمُوَطِّئَةُ', t: 'al-muwaṭṭiʾah', e: 'the oath-preparing lām', c: 'red' },
    { a: 'لِلْقَسَمِ', t: 'li-l-qasam', e: '(over شرطية إنْ)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لَئِنْ', t: 'la-ʾin', e: 'if indeed', q: 1 },
    { a: 'شَكَرْتُمْ', t: 'shakartum', e: 'you give thanks', q: 1 },
    { a: 'لَأَزِيدَنَّكُمْ', t: 'la-azīdannakum', e: 'I will surely increase you', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'السَّادِسُ', t: 'as-sādisu', e: 'the sixth:', c: 'red' },
    { a: 'لَامُ', t: 'lāmu', e: 'the lām of', c: 'red' },
    { a: 'الْبُعْدِ', t: 'al-buʿd', e: 'distance', c: 'red' },
    NAHW, COMMA,
    { a: 'تِلْكَ', t: 'tilka', e: 'that (f.)' },
    { a: 'ذَلِكَ', t: 'dhālika', e: 'that (m.)', n: 'لام تدلّ على بُعد المشار إليه' },
  ] },

  { t: 'line', w: [
    { a: 'السَّابِعُ', t: 'as-sābiʿu', e: 'the seventh:', c: 'red' },
    { a: 'اللَّامُ', t: 'al-lāmu', e: 'the distinguishing lām', c: 'red' },
    { a: 'الْفَارِقَةُ', t: 'al-fāriqah', e: '(إنْ النافية vs المخفّفة)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَإِنْ', t: 'wa-in', e: 'and indeed', q: 1 },
    { a: 'كُنْتُمْ', t: 'kuntum', e: 'you were', q: 1 },
    { a: 'مِنْ', t: 'min', e: 'before it', q: 1 },
    { a: 'قَبْلِهِ', t: 'qablihi', e: '', q: 1 },
    { a: 'لَمِنَ', t: 'la-mina', e: 'surely among', q: 1, n: 'اللام فارقة تميّز إنْ المخفّفة من النافية' },
    { a: 'الضَّالِّينَ', t: 'aḍ-ḍāllīna', e: 'the astray', q: 1 },
    CLOSE,
  ] },

  /* ═══ لا — 5 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'لَا', en: 'lā — five faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'لِلنَّفْيِ', t: 'li-n-nafy', e: 'for negation', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لَا', t: 'lā', e: 'no', q: 1 },
    { a: 'إِكْرَاهَ', t: 'ikrāha', e: 'compulsion', q: 1 },
    { a: 'فِي', t: 'fī', e: 'in', q: 1 },
    { a: 'الدِّينِ', t: 'ad-dīni', e: 'religion', q: 1 },
    CLOSE,
    { a: '،', g: '،' },
    { a: 'لِنَفْيِ', t: 'li-nafy', e: 'negating the genus,' },
    { a: 'الْجِنْسِ', t: 'al-jins', e: '' },
    { a: 'وَالْمُضَارِعِ', t: 'wa-l-muḍāriʿ', e: 'the present, and the past' },
    { a: 'وَالْمَاضِي', t: 'wa-l-māḍī', e: '' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلنَّهْيِ', t: 'li-n-nahy', e: 'for prohibition', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَلَا', t: 'fa-lā', e: 'so do not', q: 1 },
    { a: 'تَقُلْ', t: 'taqul', e: 'say', q: 1 },
    { a: 'لَهُمَا', t: 'lahumā', e: 'to them', q: 1 },
    { a: 'أُفٍّ', t: 'uffin', e: '“uff”', q: 1 },
    { a: 'وَلَا', t: 'wa-lā', e: 'and do not', q: 1 },
    { a: 'تَنْهَرْهُمَا', t: 'tanharhumā', e: 'rebuke them', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'الْعَطْفُ', t: 'al-ʿaṭf', e: 'coordination', c: 'red' },
    NAHW, COMMA,
    { a: 'جَاءَ', t: 'jāʾa', e: 'Zayd came,' },
    { a: 'زَيْدٌ', t: 'zaydun', e: '' },
    { a: 'لَا', t: 'lā', e: 'not' },
    { a: 'عَمْرٌو', t: 'ʿamrun', e: 'ʿAmr' },
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a particle of', c: 'red' },
    { a: 'جَوَابٍ', t: 'jawābin', e: 'answer (“no”)', c: 'red' },
    NAHW, COMMA,
    { a: 'لَا', t: 'lā', e: '“no”', n: 'جوابًا لـ: هل عصيت ربك؟' },
  ] },

  { t: 'page', n: '٢٤٨' },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'زَائِدَةٌ', t: 'zāʾidah', e: 'redundant', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لِئَلَّا', t: 'li-ʾallā', e: 'so that', q: 1 },
    { a: 'يَعْلَمَ', t: 'yaʿlama', e: 'know', q: 1 },
    { a: 'أَهْلُ', t: 'ahlu', e: 'the People of', q: 1 },
    { a: 'الْكِتَابِ', t: 'al-kitābi', e: 'the Book', q: 1, n: 'لا زائدة, والمعنى: ليعلم' },
    CLOSE,
  ] },

  /* ═══ لَمّا — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'لَمَّا', en: 'lammā — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'ظَرْفُ', t: 'ẓarfu', e: 'an adverb of time', c: 'red' },
    { a: 'زَمَانٍ', t: 'zamānin', e: '(with شرط-sense, over a past)', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَلَمَّا', t: 'fa-lammā', e: 'so when', q: 1 },
    { a: 'سَمِعْنَا', t: 'samiʿnā', e: 'we heard', q: 1 },
    { a: 'الْهُدَى', t: 'al-hudā', e: 'the guidance', q: 1 },
    { a: 'آمَنَّا', t: 'āmannā', e: 'we believed', q: 1 },
    { a: 'بِهِ', t: 'bihi', e: 'in it', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a jazm-negating particle', c: 'red' },
    { a: 'نَفْيٍ', t: 'nafyin', e: '(over the مضارع)', c: 'red' },
    { a: 'جَازِمٌ', t: 'jāzimun', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لَمَّا', t: 'lammā', e: 'they have not yet', q: 1 },
    { a: 'يَذُوقُوا', t: 'yadhūqū', e: 'tasted', q: 1 },
    { a: 'عَذَابِ', t: 'ʿadhābi', e: 'My punishment', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'an exception-particle', c: 'red' },
    { a: 'اسْتِثْنَاءٍ', t: 'istithnāʾin', e: '= إلّا', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَإِنْ', t: 'wa-in', e: 'and there is none', q: 1 },
    { a: 'كُلٌّ', t: 'kullun', e: 'but', q: 1 },
    { a: 'لَمَّا', t: 'lammā', e: 'except', q: 1 },
    { a: 'جَمِيعٌ', t: 'jamīʿun', e: 'all gathered', q: 1 },
    { a: 'لَدَيْنَا', t: 'ladaynā', e: 'before Us', q: 1 },
    { a: 'مُحْضَرُونَ', t: 'muḥḍarūna', e: 'brought forth', q: 1 },
    CLOSE,
  ] },

  /* ═══ لو — 5 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'لَوْ', en: 'law — five faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'conditional (impossible-for-impossible)', c: 'red' },
    { a: 'شَرْطٍ', t: 'sharṭin', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لَوْ', t: 'law', e: 'had', q: 1 },
    { a: 'شِئْنَا', t: 'shiʾnā', e: 'We willed', q: 1 },
    { a: 'أَهْلَكْنَاهُمْ', t: 'ahlaknāhum', e: 'We would have destroyed them', q: 1 },
    { a: 'مِنْ', t: 'min', e: 'before', q: 1 },
    { a: 'قَبْلُ', t: 'qablu', e: '', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلتَّمَنِّي', t: 'li-t-tamannī', e: 'for wishing', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'فَلَوْ', t: 'fa-law', e: 'if only', q: 1 },
    { a: 'أَنَّ', t: 'anna', e: 'we had', q: 1 },
    { a: 'لَنَا', t: 'lanā', e: '', q: 1 },
    { a: 'كَرَّةً', t: 'karratan', e: 'a return', q: 1 },
    { a: 'فَنَكُونَ', t: 'fa-nakūna', e: 'so we would be', q: 1 },
    { a: 'مِنَ', t: 'mina', e: 'of', q: 1 },
    { a: 'الْمُؤْمِنِينَ', t: 'al-muʾminīna', e: 'the believers', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِلْعَرْضِ', t: 'li-l-ʿarḍ', e: 'for gentle urging', c: 'red' },
    NAHW, COMMA,
    { a: 'لَوْ', t: 'law', e: 'won’t you' },
    { a: 'تَطْلُبُ', t: 'taṭlubu', e: 'seek' },
    { a: 'الْعِلْمَ', t: 'al-ʿilma', e: 'knowledge' },
    { a: 'فَتَنَالَ', t: 'fa-tanāla', e: 'and attain', n: 'نصب بعد فاء السببية' },
    { a: 'رَحْمَةَ', t: 'raḥmata', e: 'the mercy of' },
    { a: 'اللَّهِ', t: 'allāhi', e: 'Allah' },
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'infinitival (after فعل الوَدّ)', c: 'red' },
    { a: 'مَصْدَرٍ', t: 'maṣdarin', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَدُّوا', t: 'waddū', e: 'they wish', q: 1 },
    { a: 'لَوْ', t: 'law', e: 'that', q: 1 },
    { a: 'تَكْفُرُونَ', t: 'takfurūna', e: 'you disbelieve', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'لِلتَّقْلِيلِ', t: 'li-t-taqlīl', e: 'for “even a little”', c: 'red' },
    NAHW, COMMA,
    { a: 'اتَّقُوا', t: 'ittaqū', e: 'guard against' },
    { a: 'النَّارَ', t: 'an-nāra', e: 'the Fire' },
    { a: 'وَلَوْ', t: 'wa-law', e: 'even' },
    { a: 'بِشِقِّ', t: 'bi-shiqqi', e: 'with half of' },
    { a: 'تَمْرَةٍ', t: 'tamratin', e: 'a date' },
  ] },

  { t: 'page', n: '٢٤٩' },

  /* ═══ لولا — 3 faces ═══ */
  { t: 'h2', c: 'blue', ar: 'لَوْلَا', en: 'lawlā — three faces' },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'conditional (before a nominal sentence)', c: 'red' },
    { a: 'شَرْطٍ', t: 'sharṭin', e: '', c: 'red' },
    NAHW, COMMA,
    { a: 'وَلَوْلَا', t: 'wa-lawlā', e: 'and were it not for' },
    { a: 'رَهْطُكَ', t: 'rahṭuka', e: 'your clan' },
    { a: 'لَرَجَمْنَاكَ', t: 'la-rajamnāka', e: 'we would have stoned you' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'a rebuke-particle (before a past)', c: 'red' },
    { a: 'تَوْبِيخٍ', t: 'tawbīkhin', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لَوْلَا', t: 'lawlā', e: 'why do not', q: 1 },
    { a: 'يَنْهَاهُمُ', t: 'yanhāhumu', e: 'the rabbis forbid them', q: 1 },
    { a: 'الرَّبَّانِيُّونَ', t: 'ar-rabbāniyyūna', e: '', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'حَرْفُ', t: 'ḥarfu', e: 'an exhortation-particle (before a present)', c: 'red' },
    { a: 'تَحْضِيضٍ', t: 'taḥḍīḍin', e: '', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'لَوْلَا', t: 'lawlā', e: 'why do you not', q: 1 },
    { a: 'تَسْتَغْفِرُونَ', t: 'tastaghfirūna', e: 'seek forgiveness of', q: 1 },
    { a: 'اللَّهَ', t: 'allāha', e: 'Allah', q: 1 },
    CLOSE,
  ] },
];
