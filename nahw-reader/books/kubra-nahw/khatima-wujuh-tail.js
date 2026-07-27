/* ── al-Kubrā fī an-Naḥw — الخاتمة · وجوه الكلمات · آخر الكتاب: الواو والياء (pp. 253–254) ──
   Matn data for the Daram Learn "end of the book" course. Transcribed word-by-word from the
   book PDF (reader proper stops at p.59, so this passage is transcribed here just for the
   learn matn panel). Reuses the shared glyph consts (OPEN/CLOSE/NAHW/COMMA/ELL) defined in
   muqaddimah.js — do NOT redeclare them. Var: DATA_KH_WT.                                    */

const DATA_KH_WT = [
  { t: 'page', n: '٢٥٣' },

  { t: 'h2', c: 'blue', ar: 'الْوَاوُ', en: 'The wāw' },

  { t: 'line', w: [
    { a: 'الْوَاوُ', t: 'al-wāwu', e: 'the wāw' },
    { a: 'حَرْفٌ', t: 'ḥarfun', e: 'is a particle' },
    { a: 'تَأْتِي', t: 'taʾtī', e: 'that comes' },
    { a: 'عَلَى', t: 'ʿalā', e: 'in' },
    { a: 'عَشَرَةِ', t: 'ʿasharati', e: 'ten' },
    { a: 'وُجُوهٍ', t: 'wujūhin', e: 'faces / uses' },
  ] },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'لِلِاسْتِئْنَافِ', t: 'li-l-istiʾnāf', e: 'for resumption', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَإِذْ', t: 'wa-idh', e: 'and when', q: 1 },
    { a: 'قَالَ', t: 'qāla', e: 'said', q: 1 },
    { a: 'رَبُّكَ', t: 'rabbuka', e: 'your Lord', q: 1 },
    { a: 'لِلْمَلَائِكَةِ', t: 'li-l-malāʾikati', e: 'to the angels', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلْعَطْفِ', t: 'li-l-ʿaṭf', e: 'for coordination', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَعَهِدْنَا', t: 'wa-ʿahidnā', e: 'and We charged', q: 1 },
    { a: 'إِلَى', t: 'ilā', e: 'unto', q: 1 },
    { a: 'إِبْرَاهِيمَ', t: 'ibrāhīma', e: 'Ibrāhīm', q: 1 },
    { a: 'وَإِسْمَاعِيلَ', t: 'wa-ismāʿīla', e: 'and Ismāʿīl', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِلْحَالِ', t: 'li-l-ḥāl', e: 'for the circumstance', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَأَغْرَقْنَا', t: 'wa-aghraqnā', e: 'and We drowned', q: 1 },
    { a: 'آلَ', t: 'āla', e: 'the folk of', q: 1 },
    { a: 'فِرْعَوْنَ', t: 'firʿawna', e: 'Pharaoh', q: 1 },
    { a: 'وَأَنْتُمْ', t: 'wa-antum', e: 'while you', q: 1 },
    { a: 'تَنْظُرُونَ', t: 'tanẓurūna', e: 'were looking on', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الرَّابِعُ', t: 'ar-rābiʿu', e: 'the fourth:', c: 'red' },
    { a: 'لِلْمَعِيَّةِ', t: 'li-l-maʿiyyah', e: 'for accompaniment (“with”)', c: 'red' },
    NAHW, COMMA,
    { a: 'لَا', t: 'lā', e: 'do not' },
    { a: 'تَنْهَ', t: 'tanha', e: 'forbid' },
    { a: 'عَنْ', t: 'ʿan', e: 'from' },
    { a: 'خُلُقٍ', t: 'khuluqin', e: 'a trait' },
    { a: 'وَتَأْتِيَ', t: 'wa-taʾtiya', e: 'and (yet) do', n: 'naṣb after the معية-wāw' },
    { a: 'مِثْلَهُ', t: 'mithlahu', e: 'its like' },
  ] },

  { t: 'line', w: [
    { a: 'الْخَامِسُ', t: 'al-khāmisu', e: 'the fifth:', c: 'red' },
    { a: 'لِلْقَسَمِ', t: 'li-l-qasam', e: 'for the oath', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'ن', t: 'nūn', e: 'Nūn', q: 1 },
    { a: 'وَالْقَلَمِ', t: 'wa-l-qalami', e: 'by the pen', q: 1 },
    { a: 'وَمَا', t: 'wa-mā', e: 'and what', q: 1 },
    { a: 'يَسْطُرُونَ', t: 'yasṭurūna', e: 'they inscribe', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'السَّادِسُ', t: 'as-sādisu', e: 'the sixth:', c: 'red' },
    { a: 'بِمَعْنَى', t: 'bi-maʿnā', e: 'in the sense of', c: 'red' },
    { a: 'رُبَّ', t: 'rubba', e: 'rubba (“many a”)', c: 'red' },
    NAHW, COMMA,
    { a: 'وَلَيْلٍ', t: 'wa-laylin', e: 'and many a night' },
    { a: 'كَمَوْجِ', t: 'ka-mawji', e: 'like the waves of' },
    { a: 'الْبَحْرِ', t: 'al-baḥri', e: 'the sea' },
    { a: 'أَرْخَى', t: 'arkhā', e: 'let down' },
    { a: 'سُدُولَهُ', t: 'sudūlahu', e: 'its curtains' },
  ] },

  { t: 'line', w: [
    { a: 'السَّابِعُ', t: 'as-sābiʿu', e: 'the seventh:', c: 'red' },
    { a: 'الْوَاوُ', t: 'al-wāwu', e: 'the', c: 'red' },
    { a: 'الزَّائِدَةُ', t: 'az-zāʾidah', e: 'extra wāw', c: 'red' },
    NAHW, COMMA,
    { a: 'رَبَّنَا', t: 'rabbanā', e: 'our Lord' },
    { a: 'وَلَكَ', t: 'wa-laka', e: 'and to You' },
    { a: 'الْحَمْدُ', t: 'al-ḥamdu', e: 'is all praise' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّامِنُ', t: 'ath-thāminu', e: 'the eighth:', c: 'red' },
    { a: 'ضَمِيرٌ', t: 'ḍamīrun', e: 'a', c: 'red' },
    { a: 'مَرْفُوعٌ', t: 'marfūʿun', e: 'marfūʿ pronoun', c: 'red' },
    NAHW, COMMA,
    { a: 'آمَنُوا', t: 'āmanū', e: 'they believed' },
    { a: 'وَيُؤْمِنُونَ', t: 'wa-yuʾminūna', e: 'and (they) believe', n: 'the wāw = the doer' },
  ] },

  { t: 'line', w: [
    { a: 'التَّاسِعُ', t: 'at-tāsiʿu', e: 'the ninth:', c: 'red' },
    { a: 'عَلَامَةُ', t: 'ʿalāmatu', e: 'a sign of', c: 'red' },
    { a: 'رَفْعٍ', t: 'rafʿin', e: 'rafʿ', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'وَكَانَ', t: 'wa-kāna', e: 'and was', q: 1 },
    { a: 'أَبُوهُمَا', t: 'abūhumā', e: 'their father', q: 1, n: 'أبو with wāw = marfūʿ (five nouns)' },
    { a: 'صَالِحًا', t: 'ṣāliḥan', e: 'righteous', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الْعَاشِرُ', t: 'al-ʿāshiru', e: 'the tenth:', c: 'red' },
    { a: 'لِلْإِشْبَاعِ', t: 'li-l-ishbāʿ', e: 'for vowel-elongation', c: 'red' },
  ] },

  { t: 'page', n: '٢٥٤' },

  { t: 'h2', c: 'blue', ar: 'الْيَاءُ', en: 'The yāʾ' },

  { t: 'line', w: [
    { a: 'الْيَاءُ', t: 'al-yāʾu', e: 'the yāʾ' },
    { a: 'حَرْفٌ', t: 'ḥarfun', e: 'is a particle' },
    { a: 'عَلَى', t: 'ʿalā', e: 'of' },
    { a: 'ثَلَاثَةِ', t: 'thalāthati', e: 'three' },
    { a: 'أَوْجُهٍ', t: 'awjuhin', e: 'faces / uses' },
  ] },

  { t: 'line', w: [
    { a: 'الْأَوَّلُ', t: 'al-awwalu', e: 'the first:', c: 'red' },
    { a: 'عَلَامَةُ', t: 'ʿalāmatu', e: 'a sign of', c: 'red' },
    { a: 'نَصْبٍ', t: 'naṣbin', e: 'naṣb', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'رَبِّ', t: 'rabbi', e: 'Lord of', q: 1 },
    { a: 'الْمَشْرِقَيْنِ', t: 'al-mashriqayni', e: 'the two easts', q: 1 },
    { a: 'وَرَبِّ', t: 'wa-rabbi', e: 'and Lord of', q: 1 },
    { a: 'الْمَغْرِبَيْنِ', t: 'al-maghribayni', e: 'the two wests', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'الثَّانِي', t: 'ath-thānī', e: 'the second:', c: 'red' },
    { a: 'لِلْإِشْبَاعِ', t: 'li-l-ishbāʿ', e: 'for vowel-elongation', c: 'red' },
    NAHW, COMMA,
    { a: 'إِنَّ', t: 'inna', e: 'indeed' },
    { a: 'اللَّهَ', t: 'allāha', e: 'Allāh' },
    { a: 'أَطَعْتِيهِ', t: 'aṭaʿtīhi', e: 'you (f.) obeyed Him', n: 'yāʾ elongated for rhythm' },
  ] },

  { t: 'line', w: [
    { a: 'الثَّالِثُ', t: 'ath-thālithu', e: 'the third:', c: 'red' },
    { a: 'لِضَمِيرِ', t: 'li-ḍamīri', e: 'for the pronoun of', c: 'red' },
    { a: 'الْمُخَاطَبَةِ', t: 'al-mukhāṭabah', e: 'the addressed female', c: 'red' },
    { a: 'وَالْمُتَكَلِّمِ', t: 'wa-l-mutakallim', e: 'and the speaker', c: 'red' },
    NAHW, COMMA,
    OPEN,
    { a: 'هَذَا', t: 'hādhā', e: 'this is', q: 1 },
    { a: 'مِنْ', t: 'min', e: 'of', q: 1 },
    { a: 'فَضْلِ', t: 'faḍli', e: 'the bounty of', q: 1 },
    { a: 'رَبِّي', t: 'rabbī', e: 'my Lord', q: 1 },
    CLOSE,
  ] },

  { t: 'line', w: [
    { a: 'سُبْحَانَكَ', t: 'subḥānaka', e: 'Glory be to You', c: 'red' },
    { a: 'اللَّهُمَّ', t: 'allāhumma', e: 'O Allah', c: 'red' },
    { a: 'وَبِحَمْدِكَ،', t: 'wa-bi-ḥamdika', e: 'and with Your praise', c: 'red' },
    { a: 'أَشْهَدُ', t: 'ashhadu', e: 'I bear witness', c: 'red' },
    { a: 'أَنْ', t: 'an', e: 'that', c: 'red' },
    { a: 'لَا', t: 'lā', e: 'there is no', c: 'red' },
    { a: 'إِلَهَ', t: 'ilāha', e: 'god', c: 'red' },
    { a: 'إِلَّا', t: 'illā', e: 'except', c: 'red' },
    { a: 'أَنْتَ،', t: 'anta', e: 'You', c: 'red' },
    { a: 'أَسْتَغْفِرُكَ', t: 'astaghfiruka', e: 'I seek Your forgiveness', c: 'red' },
    { a: 'وَأَتُوبُ', t: 'wa-atūbu', e: 'and I turn', c: 'red' },
    { a: 'إِلَيْكَ', t: 'ilayka', e: 'to You', c: 'red' },
  ] },
];
