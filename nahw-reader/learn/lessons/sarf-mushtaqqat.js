/* ── Daram Learn — Shadhā al-ʿArf · المشتقات (Worksheets 21–23 + 26) ──
   The derived nouns: اسم الفاعل وصيغ المبالغة (wk21)، اسم المفعول والصفة
   المشبهة (wk22)، اسم التفضيل (wk23–24)، اسم الآلة (wk26).
   Authored from books/shadha-arf/wk21, wk22, wk23, wk26.                       */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'sarf-mushtaqqat',
  titleAr: 'الْمُشْتَقَّاتُ: اسْمُ الْفَاعِلِ وَالْمَفْعُولِ وَالتَّفْضِيلِ وَالْآلَةِ',
  titleEn: 'The Noun III: the Derivatives',
  pages: 'Wk 21–26',
  sections: [

    /* ═══ 1. Ism al-fāʿil ═══ */
    {
      id: 'ism-fail',
      title: 'The active participle (اسم الفاعل)',
      subtitle: 'فَاعِل من الثلاثي — وزنة المضارع من غيره',
      matn: { src: 'DATA_WK21', from: 1, to: 11, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Definition & the trilateral form',
          focus: [1, 2, 3, 4, 5, 6, 7, 8],
          points: [
            'Derived from the **active-built maṣdar** for the one from whom the act occurs — or to whom it relates (سَاقِط).',
            'Trilateral → **فَاعِل** mostly: نَاصِر، ضَارِب، مَادّ، رَاقٍ، طَاوٍ — and the ailing ajwaf turns its alif to **hamzah**: قَائِل، بَائِع.',
          ] },

        { t: 'teach', title: 'Non-trilateral — and the anomalies',
          focus: [9, 10, 11],
          points: [
            'Non-trilateral: on **the muḍāriʿ\'s pattern**, the prefix swapped for a **ḍammah-mīm**, kasrah before the last: مُدَحْرِج، مُنْطَلِق، مُسْتَخْرِج.',
            'Three anomalies with FATḤAH before the last: أَسْهَبَ فهو **مُسْهَب**، أَحْصَنَ فهو **مُحْصَن**، أَلْفَجَ فهو **مُلْفَج**.',
            'And some afʿala verbs give **فَاعِل**: أَعْشَبَ فهو عَاشِب، أَوْرَسَ فهو وَارِس، أَيْفَعَ فهو يَافِع — never مُفْعِل.',
          ] },

        { t: 'mcq', q: 'The ism fāʿil of اسْتَخْرَجَ is…',
          choices: ['مُسْتَخْرِج — mīm with ḍammah, kasrah before the last', 'مُسْتَخْرَج', 'سَاخِر', 'مِسْتَخْرِج'],
          correct: 0,
          why: 'زِنَةُ مُضَارِعِهِ بِإِبْدَالِ حَرْفِ الْمُضَارَعَةِ مِيمًا مَضْمُومَةً وَكَسْرِ مَا قَبْلَ الْآخِرِ. (Fatḥah before the last = ism mafʿūl.)' },

        { t: 'mcq', q: 'Why قَائِل rather than قَاوِل from قَالَ?',
          choices: ['The ailing hollow verb\'s alif turns to hamzah in fāʿil', 'The wāw was never there', 'Dialect', 'It is mubālaghah'],
          correct: 0,
          why: 'إِنْ كَانَ فِعْلُهُ أَجْوَفَ مُعَلًّا قُلِبَتْ أَلِفُهُ هَمْزَةً — so too بَائِع.' },

        { t: 'mcq', q: 'مُحْصَن (with fatḥah!) from أَحْصَنَ is cited as…',
          choices: ['one of three anomalous participles: مُسْهَب، مُحْصَن، مُلْفَج', 'the regular form', 'a passive participle only', 'a typo for مُحْصِن'],
          correct: 0,
          why: 'شَذَّ ثَلَاثَةُ أَلْفَاظٍ… بِفَتْحِ مَا قَبْلَ الْآخِرِ فِيهَا — active in meaning despite the mafʿūl-like shape.' },

        { t: 'mcq', q: 'أَعْشَبَ الْمَكَانُ gives which participle?',
          choices: ['عَاشِب — a fāʿil form from afʿala; مُعْشِب is not said', 'مُعْشِب', 'مَعْشُوب', 'عَشِيب'],
          correct: 0,
          why: 'جَاءَ مِنْ أَفْعَلَ عَلَى فَاعِلٍ… وَلَا يُقَالُ فِيهَا مُفْعِلٌ — with وَارِس and يَافِع.' },
      ],
    },

    /* ═══ 2. Ṣiyagh al-mubālaghah ═══ */
    {
      id: 'mubalagha',
      title: 'The intensive patterns (صيغ المبالغة)',
      subtitle: 'فعّال · مفعال · فعول · فعيل · فَعِل — والسماعية',
      matn: { src: 'DATA_WK21', from: 12, to: 27, check: 'صِيَغُ' },
      steps: [
        { t: 'teach', title: 'The five famous patterns',
          focus: [12, 13, 14, 15, 17, 18, 19],
          points: [
            'فَاعِل is *shifted* to show **frequency & intensity** in the act. The five:',
            '**فَعَّال** أَكَّال، شَرَّاب · **مِفْعَال** مِنْحَار · **فَعُول** غَفُور · **فَعِيل** سَمِيع · **فَعِل** حَذِر.',
          ] },

        { t: 'teach', title: 'Heard extras — and crossover uses',
          focus: [20, 21, 22, 23, 24, 25, 26, 27],
          points: [
            'Samāʿī intensives: **فِعِّيل** سِكِّير · **مِفْعِيل** مِعْطِير · **فُعَلَة** هُمَزَة لُمَزَة · **فَاعُول** فَارُوق · **فُعَّال** طُوَّال، كُبَّار — ﴿وَمَكَرُوا مَكْرًا كُبَّارًا﴾ read both ways.',
            'Crossovers: fāʿil intending mafʿūl — ﴿فِي عِيشَةٍ رَاضِيَةٍ﴾ = مَرْضِيَّة؛ and فَعِيل/فَعُول intending fāʿil — قَدِير = قَادِر، غَفُور = غَافِر.',
          ] },

        { t: 'mcq', q: 'What semantic change turns ضَارِب into ضَرَّاب?',
          choices: ['Intensity & frequency of the act (المبالغة والكثرة)', 'Passivity', 'Pastness', 'Diminution'],
          correct: 0,
          why: 'تُحَوَّلُ صِيغَةُ فَاعِلٍ لِلدَّلَالَةِ عَلَى الْكَثْرَةِ وَالْمُبَالَغَةِ فِي الْحَدَثِ.' },

        { t: 'mcq', q: 'Which set is the FIVE famous mubālaghah patterns?',
          choices: ['فعّال، مفعال، فعول، فعيل، فَعِل', 'فِعّيل، مِفعيل، فُعَلة، فاعول، فُعّال', 'فاعل، مفعول، فعيل، أفعل، فعلان', 'تفعيل، إفعال، فعللة'],
          correct: 0,
          why: 'The second set is the *heard* extras; the first is the canonical five (akkāl, minḥār, ghafūr, samīʿ, ḥadhir).' },

        { t: 'mcq', q: 'هُمَزَة لُمَزَة sit on which heard pattern?',
          choices: ['فُعَلَة — ḍammah then fatḥah', 'فَاعُول', 'فِعِّيل', 'مِفْعِيل'],
          correct: 0,
          why: 'The slanderer-verse\'s pair: one who goads and defames *habitually* — fuʿalah.' },

        { t: 'mcq', q: '﴿فِي عِيشَةٍ رَاضِيَةٍ﴾ — rāḍiyah here means…',
          choices: ['مَرْضِيَّة — the active form intends the passive (rare)', 'a life that is literally pleased', 'a scribal variant', 'an intensive'],
          correct: 0,
          why: 'اسم الفاعل مُرَادًا بِهِ اسْمُ الْمَفْعُولِ قَلِيلًا — the pleasing/pleased-with life.' },
      ],
    },

    /* ═══ 3. Ism al-mafʿūl ═══ */
    {
      id: 'ism-maful',
      title: 'The passive participle (اسم المفعول)',
      subtitle: 'مفعول · مَقُول ومَبِيع ومَرْمِيّ · قتيل — ومُختار المحتمِل',
      matn: { src: 'DATA_WK22', from: 1, to: 13, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Trilateral: مفعول and its iʿlāl',
          focus: [2, 3, 4, 5, 6, 7, 8],
          points: [
            'Derived from the **passive-built maṣdar** for the one on whom the act fell. Trilateral → **مَفْعُول**: مَنْصُور، مَوْعُود.',
            'Weak verbs contract: مَقُول (أصله مَقْوُول)، مَبِيع (مَبْيُوع)، مَرْمِيّ (مَرْمُوي)، مَطْوِيّ.',
            'Sometimes **فَعِيل** = mafʿūl: قَتِيل، جَرِيح. And mafʿūl may intend the *maṣdar*: لَيْسَ لِفُلَانٍ مَعْقُولٌ — أي عَقْل.',
          ] },

        { t: 'teach', title: 'Non-trilateral — one vowel from the fāʿil',
          focus: [9, 10, 11, 12, 13],
          points: [
            'Like its ism fāʿil but **fatḥah** before the last: مُكْرَم، مُعَظَّم، مُسْتَعَان بِهِ.',
            'Forms like **مُخْتَار، مُعْتَدّ، مُنْصَبّ، مُحَابّ** serve BOTH participles — التقدير decides.',
            'From a lāzim verb only with a deputising ẓarf/jarr-phrase/maṣdar: جُلِسَ مَجْلِسٌ يَوْمَ الْخَمِيسِ / فِي الْمَسْجِدِ / جُلُوسٌ طَوِيلٌ.',
          ] },

        { t: 'mcq', q: 'مَبِيع traces back to which fuller form?',
          choices: ['مَبْيُوع — trimmed by iʿlāl', 'مِبْيَاع', 'بَائِع', 'مُبَاع'],
          correct: 0,
          why: 'أَصْلُ مَا عَدَا الْأُولَيْنِ: مَقْوُول وَمَبْيُوع وَمَرْمُوي… — the iʿlāl chapter will explain the surgery.' },

        { t: 'mcq', q: 'The ONLY difference between مُكْرِم and مُكْرَم is…',
          choices: ['kasrah = active participle; fatḥah = passive participle', 'the mīm\'s vowel', 'number', 'tense'],
          correct: 0,
          why: 'Non-trilateral participles share everything except the vowel before the last letter.' },

        { t: 'mcq', q: 'Why can مُخْتَار mean both "chooser" and "chosen"?',
          choices: ['Iʿlāl erased the kasrah/fatḥah distinction — only implied reckoning (التقدير) decides', 'It is a noun, not a participle', 'Copyists confused it', 'It cannot'],
          correct: 0,
          why: 'مُخْتَيِر/مُخْتَيَر both collapse to مُخْتَار — like مُعْتَدّ، مُنْصَبّ، مُحَابّ، مُتَحَابّ.' },

        { t: 'mcq', q: 'قَتِيل is…',
          choices: ['faʿīl in the sense of مَقْتُول — a passive-meaning faʿīl', 'an intensive of قاتل', 'a maṣdar', 'a ṣifah mushabbahah'],
          correct: 0,
          why: 'قَدْ يَكُونُ عَلَى وَزْنِ فَعِيلٍ كَقَتِيلٍ أَيْ مَقْتُولٍ وَجَرِيحٍ أَيْ مَجْرُوحٍ.' },

        { t: 'mcq', q: 'جُلِسَ مَجْلِسٌ يَوْمَ الْخَمِيسِ shows the passive participle of a lāzim formed with…',
          choices: ['a deputising ẓarf — same conditions as the passive voice', 'a direct object', 'no conditions', 'a ḥāl'],
          correct: 0,
          why: 'لَا يُصَاغُ مِنَ اللَّازِمِ إِلَّا مَعَ الظَّرْفِ أَوِ الْجَارِّ وَالْمَجْرُورِ أَوِ الْمَصْدَرِ.' },
      ],
    },

    /* ═══ 4. Ṣifah mushabbahah ═══ */
    {
      id: 'sifa',
      title: 'The assimilate adjective (الصفة المشبهة)',
      subtitle: 'الثبوت — واثنا عشر وزنًا: ٢ لفرح، ٤ لشرف، ٦ مشتركة',
      matn: { src: 'DATA_WK22', from: 14, to: 42, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Definition & source-bābs',
          focus: [15, 16, 17, 18],
          points: [
            'A word formed from the **lāzim\'s maṣdar** to denote **الثبوت** — a fixed quality in its bearer (vs the participle\'s transient act).',
            'Mostly from bāb **فَرِحَ** and bāb **شَرُفَ**؛ outside them: سَيِّد، مَيِّت (from سَادَ، مَاتَ)، شَيْخ.',
          ] },

        { t: 'teach', title: 'The twelve patterns',
          focus: [20, 21, 22, 23, 24, 26, 27, 28, 29],
          points: [
            '**Two for فَرِحَ**: أَفْعَل/فَعْلَاء (أَحْمَر، حَمْرَاء) and فَعْلَان/فَعْلَى (عَطْشَان، عَطْشَى).',
            '**Four for شَرُفَ**: فَعَل (حَسَن، بَطَل)، فُعُل (جُنُب — rare)، فُعَال (شُجَاع، فُرَات)، فَعَال (جَبَان، حَصَان).',
          ] },

        { t: 'teach', title: 'The six shared — and beyond',
          focus: [30, 31, 32, 33, 34, 35, 36, 38, 39, 41, 42],
          points: [
            '**Shared by both bābs**: فَعْل (سَبْط، ضَخْم)، فِعْل (صِفْر، مِلْح)، فُعْل (حُرّ، صُلْب)، فَعِل (فَرِح، نَجِس)، فَاعِل (صَاحِب، طَاهِر)، فَعِيل (بَخِيل، كَرِيم).',
            'فَاعِل and فَعِيل may share one verb: مَاجِد/مَجِيد. Rarer shapes exist (شَنْكَب…).',
            'From the **non-trilateral** it runs on the ism-fāʿil pattern (مُعْتَدِل الْقَامَة)، and the trilateral may shift to فَاعِل to mark **ḥudūth** (fresh occurrence) instead of thubūt.',
          ] },

        { t: 'mcq', q: 'What separates حَسَن (ṣifah mushabbahah) from ضَارِب (ism fāʿil)?',
          choices: ['ḥasan denotes a FIXED quality (ثبوت); ḍārib a transient act', 'ḥasan is feminine', 'ḍārib is passive', 'nothing'],
          correct: 0,
          why: 'لِلدَّلَالَةِ عَلَى الثُّبُوتِ فِي صَاحِبِهَا — and it grows only from lāzim maṣdars.' },

        { t: 'mcq', q: 'أَحْمَر/حَمْرَاء and عَطْشَان/عَطْشَى belong exclusively to…',
          choices: ['بَاب فَرِحَ', 'بَاب شَرُفَ', 'بَاب نَصَرَ', 'both bābs'],
          correct: 0,
          why: 'اثْنَانِ مُخْتَصَّانِ بِبَابِ فَرِحَ — colours/defects and fullness/thirst states live in faʿila.' },

        { t: 'mcq', q: 'شُجَاع sits on which sharufa-specific pattern?',
          choices: ['فُعَال with ḍammah', 'فَعَال with fatḥah', 'فُعُل', 'فَعَل'],
          correct: 0,
          why: 'fuʿāl: shujāʿ, furāt. (jabān and ḥaṣān are faʿāl; ḥasan faʿal; junub fuʿul.)' },

        { t: 'mcq', q: 'مَاجِد and مَجِيد illustrate…',
          choices: ['fāʿil and faʿīl sharing one and the same verb', 'two different roots', 'an anomaly', 'active vs passive'],
          correct: 0,
          why: 'رُبَّمَا اشْتَرَكَ فَاعِلٌ وَفَعِيلٌ فِي بِنَاءٍ وَاحِدٍ.' },

        { t: 'mcq', q: 'Shifting a ṣifah to فَاعِل form (e.g. طَاهِر) signals…',
          choices: ['ḥudūth — the quality as freshly occurring, not fixed', 'intensity', 'passivity', 'the dual'],
          correct: 0,
          why: 'قَدْ تُحَوَّلُ فِي الثُّلَاثِيِّ إِلَى زِنَةِ فَاعِلٍ إِذَا قُصِدَ الْحُدُوثُ.' },
      ],
    },

    /* ═══ 5. Ism at-tafḍīl: form & eight conditions ═══ */
    {
      id: 'tafdil-shurut',
      title: 'اسم التفضيل: أَفْعَل and the eight conditions',
      subtitle: 'خير وشر وحب — وأزهى من ديك الشاذ',
      matn: { src: 'DATA_WK23', from: 1, to: 26, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Definition & the three hamzah-less words',
          focus: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11],
          points: [
            'Formed from the maṣdar to show two things **shared a quality and one exceeded**: زَيْدٌ أَكْرَمُ مِنْ عَمْرٍو — pattern **أَفْعَل**.',
            'Three words lost their hamzah through heavy use: **خَيْر، شَرّ، حَبّ** — though the full forms occur: بِلَالٌ… وَابْنُ الْأَخْيَرِ؛ الْكَذَّابُ الْأَشَرُّ؛ أَحَبُّ الْأَعْمَالِ إِلَى اللهِ أَدْوَمُهَا.',
          ] },

        { t: 'teach', title: 'Conditions 1–5',
          focus: [12, 13, 14, 15, 16, 17, 18, 19],
          points: [
            '1 **Has a verb** (شذّ أَقْمَن، أَلَصّ) · 2 **trilateral** — from longer verbs say أَكْثَر/أَشَدّ + the real maṣdar (أَكْثَرُ انْطِلَاقًا)؛ heard: أَعْطَاهُمْ لِلدَّرَاهِمِ، أَقْفَر.',
            '3 **Mutaṣarrif** — excludes عَسَى وَلَيْسَ · 4 **admits disparity** — excludes مَاتَ وَفَنِيَ · 5 **tāmm** — excludes كَانَ وأخواتها.',
          ] },

        { t: 'teach', title: 'Conditions 6–8',
          focus: [21, 22, 23, 24, 25, 26],
          points: [
            '6 **Not negated** (even inherently: مَا عَاجَ بِالدَّوَاءِ) · 7 **its waṣf not on أفعل/فعلاء** — colours, defects, adornments are "occupied"؛ the Kūfans allow it (المتنبي: لِأَنَّكَ أَسْوَدُ فِي عَيْنِي)، ar-Raḍī bars only the *visible* ones (أَبْلَه، أَحْمَق pass).',
            '8 **Not passive-built** — heard anomalously: أَزْهَى مِنْ دِيكٍ، أَشْغَلُ مِنْ ذَاتِ النِّحْيَيْنِ، كَلَامٌ أَخْصَرُ (from زُهِيَ، اخْتُصِرَ).',
          ] },

        { t: 'mcq', q: 'خَيْر and شَرّ lack the hamzah because…',
          choices: ['frequent use wore it away (كثرة الاستعمال) — the full أَخْيَر/أَشَرّ still occur', 'they are not tafḍīl at all', 'they are particles', 'euphony bans hamzah'],
          correct: 0,
          why: 'حُذِفَتْ هَمْزَتُهُنَّ لِكَثْرَةِ الِاسْتِعْمَالِ — with حَبّ as the third.' },

        { t: 'mcq', q: 'How do you express preference from انْطَلَقَ (non-trilateral)?',
          choices: ['أَكْثَرُ/أَشَدُّ انْطِلَاقًا — helper + the real maṣdar', 'أَنْطَلَقُ', 'مُنْطَلِق أكثر', 'you cannot at all'],
          correct: 0,
          why: 'إن فُقِدَ شرط الثلاثية ذَكَرْنَا مَصْدَرَهُ الْحَقِيقِيَّ بَعْدَ أَكْثَرَ أَوْ أَشَدَّ.' },

        { t: 'mcq', q: 'Why no tafḍīl from مَاتَ?',
          choices: ['Death admits no disparity (التفاوت) — one is not "more dead"', 'māta is passive', 'it is not trilateral', 'it has no maṣdar'],
          correct: 0,
          why: 'Condition 4: أَنْ يَكُونَ حَدَثُهُ قَابِلًا لِلتَّفَاوُتِ — فَنِيَ fails the same test.' },

        { t: 'mcq', q: 'Why does the ṣifah-on-أفعل condition (7) exist?',
          choices: ['The afʿal shape is already "occupied" describing colour/defect — confusion would follow', 'Colours are inferior', 'Kūfans invented it', 'No reason given'],
          correct: 0,
          why: 'لِأَنَّ الصِّيغَةَ مَشْغُولَةٌ بِالْوَصْفِ عَنِ التَّفْضِيلِ — أَحْمَر already means "red", not "redder".' },

        { t: 'mcq', q: 'أَزْهَى مِنْ دِيكٍ violates which condition?',
          choices: ['8 — formed from the passive-built زُهِيَ, heard anomalously', '6 — negation', '3 — jāmid verb', '1 — no verb'],
          correct: 0,
          why: 'سُمِعَ شُذُوذًا… مِنْ زُهِيَ بِمَعْنَى تَكَبَّرَ — with أَشْغَل and أَخْصَر.' },

        { t: 'written',
          prompt: 'List the eight conditions of اسم التفضيل, and give one excluded example for any four.',
          model: '1 له فعل (شذّ أَقْمَن) 2 ثلاثي (فمن غيره: أكثرُ انطلاقًا) 3 متصرف (خرج عسى وليس) 4 حدثه قابل للتفاوت (خرج مات وفني) 5 تام (خرجت كان وأخواتها) 6 غير منفي (خرج ما عاجَ به) 7 وصفه ليس على أفعل فعلاء (خرج الألوان والعيوب: أحمر) 8 غير مبني للمجهول (شذّ أزهى من ديك، أخصر).' },
      ],
    },

    /* ═══ 6. Tafḍīl: the states ═══ */
    {
      id: 'tafdil-ahwal',
      title: 'اسم التفضيل: its states in wording & meaning',
      subtitle: 'مجرد · بأل · مضاف — وأحلى من الخل',
      matn: { src: 'DATA_WK23', from: 27, to: 45, check: 'أَحْوَالُ' },
      steps: [
        { t: 'teach', title: 'Three states by WORDING',
          focus: [28, 29, 30, 32, 33, 34, 35],
          points: [
            '**Bare of أل and iḍāfah** → invariably singular-masculine + مِنْ: ﴿لَيُوسُفُ وَأَخُوهُ أَحَبُّ إِلَى أَبِينَا﴾. مِنْ + its object may drop: ﴿وَالْآخِرَةُ خَيْرٌ وَأَبْقَى﴾.',
            '**With أل** → agreement REQUIRED, مِنْ forbidden: مُحَمَّدٌ الْأَفْضَلُ، فَاطِمَةُ الْفُضْلَى، الزَّيْدُونَ الْأَفْضَلُونَ.',
            '**Muḍāf**: to an **indefinite** → singular-masculine, the muḍāf-ilayh agrees (أَفْضَلُ رَجُلَيْنِ، أَفْضَلُ امْرَأَةٍ)؛ ﴿أَوَّلَ كَافِرٍ بِهِ﴾ implies أول فريقٍ. To a **definite** → agreement optional: ﴿أَكَابِرَ مُجْرِمِيهَا﴾ (with) vs ﴿أَحْرَصَ النَّاسِ﴾ (without).',
          ] },

        { t: 'teach', title: 'Three states by MEANING',
          focus: [41, 42, 43, 44, 45],
          points: [
            '1 True tafḍīl — shared quality, one exceeds.',
            '2 Each exceeds **in its own quality**: الْعَسَلُ أَحْلَى مِنَ الْخَلِّ — honey tops in sweetness what vinegar has in sourness; الصَّيْفُ أَحَرُّ مِنَ الشِّتَاءِ.',
            '3 Mere **thubūt with no preference**: النَّاقِصُ وَالْأَشَجُّ أَعْدَلَا بَنِي مَرْوَانَ = the ONLY just two — here agreement is required.',
          ] },

        { t: 'mcq', q: 'زَيْدٌ أَفْضَلُ مِنْ عَمْرٍو — what MUST hold in this bare state?',
          choices: ['Singular masculine + مِنْ before the surpassed', 'Full agreement', 'أل required', 'The dual for two'],
          correct: 0,
          why: 'المجرد: يجب الإفراد والتذكير وأن يؤتى بعده بمن — even هَذِهِ أَفْضَلُ مِنْ…' },

        { t: 'mcq', q: 'With أل — الزَّيْدَانِ …؟',
          choices: ['الْأَفْضَلَانِ — agreement obligatory, no مِنْ', 'الأفضل', 'أفضلان من', 'أفضل الزيدين'],
          correct: 0,
          why: 'المعرَّف بأل تجب المطابقة ولا يؤتى معه بمن.' },

        { t: 'mcq', q: '﴿وَلَتَجِدَنَّهُمْ أَحْرَصَ النَّاسِ﴾ keeps أَحْرَصَ singular though "them" is plural. Valid?',
          choices: ['Yes — annexed to a definite, agreement is optional (cf. أَكَابِرَ مُجْرِمِيهَا with it)', 'No — an error', 'Only in Qurʾān', 'It is not tafḍīl'],
          correct: 0,
          why: 'إضافته للمعرفة: جَازَتِ الْمُطَابَقَةُ وَعَدَمُهَا — both readings sit side by side in the two verses.' },

        { t: 'mcq', q: 'الْعَسَلُ أَحْلَى مِنَ الْخَلِّ cannot be TRUE tafḍīl because…',
          choices: ['honey and vinegar share no sweetness — each exceeds in its OWN quality', 'vinegar is sweeter', 'the min is extra', 'ʿasal is definite'],
          correct: 0,
          why: 'The second maʿnā-state: زاد في صفة نفسه على شيء آخر في صفته — sweetness vs sourness.' },

        { t: 'mcq', q: 'أَعْدَلَا بَنِي مَرْوَانَ (dual!) marks which meaning-state?',
          choices: ['Thubūt without preference — "the only just two"; agreement then required', 'true preference', 'self-comparison', 'an error for أعدل'],
          correct: 0,
          why: 'ثُبُوتُ الْوَصْفِ لِمَحَلِّهِ مِنْ غَيْرِ نَظَرٍ إِلَى تَفْضِيلٍ — وَلَا عَدْلَ فِي غَيْرِهِمَا.' },
      ],
    },

    /* ═══ 7. Ism al-ālah ═══ */
    {
      id: 'ism-ala',
      title: 'The noun of instrument (اسم الآلة)',
      subtitle: 'مِفعال · مِفعل · مِفعلة — والجديدة: غسّالة وحاسوب',
      matn: { src: 'DATA_WK26', from: 1, to: 11, check: 'التَّقْسِيمُ' },
      steps: [
        { t: 'teach', title: 'Definition & the three classical patterns',
          focus: [2, 3, 4, 5, 6],
          points: [
            'Formed from a **trilateral maṣdar** for that **by means of which** the act occurs.',
            'Three heard classical patterns, all with **kasrah on the mīm**: **مِفْعَال** مِفْتَاح، مِنْشَار · **مِفْعَل** مِحْلَب، مِبْرَد، مِشْرَط · **مِفْعَلَة** مِكْنَسَة، مِقْرَعَة.',
          ] },

        { t: 'teach', title: 'Modern patterns, departures & jāmid tools',
          focus: [7, 9, 10, 11],
          points: [
            'New (modern) patterns: **فَعَّالَة** نَظَّارَة، غَسَّالَة، ثَلَّاجَة · **فُعَّال** عَدَّاد، سَخَّان · **فَاعُول** حَاسُوب.',
            'Departures with **ḍammah on mīm and ʿayn**: مُسْعُط، مُنْخُل، مُنْصُل، مُدُقّ، مُدْهُن، مُكْحُلَة، مُحْرُضَة.',
            'And jāmid instrument-nouns with no rule: فَأْس، قَدُوم، سِكِّين. Plurals: مِفْعَل/مِفْعَلَة → **مَفَاعِل**؛ مِفْعَال → **مَفَاعِيل**.',
          ] },

        { t: 'mcq', q: 'The unifying mark of the three classical instrument patterns:',
          choices: ['kasrah on the mīm — مِفعال، مِفعل، مِفعلة', 'ḍammah on the mīm', 'no mīm at all', 'a final tāʾ'],
          correct: 0,
          why: 'بِكَسْرِ الْمِيمِ فِيهَا — contrast اسم الزمان والمكان\'s fatḥah-mīm (مَضْرَب) from wk18.' },

        { t: 'mcq', q: 'غَسَّالَة and حَاسُوب belong to…',
          choices: ['the NEW patterns (فعّالة، فاعول) of modern coinage', 'the classical three', 'the departures', 'jāmid tools'],
          correct: 0,
          why: 'أوزان جديدة: فعّالة (نظّارة، ثلّاجة)، فُعّال (عدّاد، سخّان)، فاعول (حاسوب).' },

        { t: 'mcq', q: 'مُنْخُل ("sieve") is listed among…',
          choices: ['departures from qiyās — ḍammah on mīm AND ʿayn', 'classical mifʿal', 'modern faʿʿālah', 'broken plurals'],
          correct: 0,
          why: 'خَرَجَ عَنِ الْقِيَاسِ… بِضَمِّ الْمِيمِ وَالْعَيْنِ فِي الْجَمِيعِ — with مُسْعُط، مُدُقّ، مُكْحُلَة.' },

        { t: 'mcq', q: 'سِكِّين is a tool, but the book classes it as…',
          choices: ['jāmid — instrument nouns on assorted patterns with no ḍābiṭ', 'mifʿāl', 'a mubālaghah form', 'an ism maṣdar'],
          correct: 0,
          why: 'أَتَى جَامِدًا عَلَى أَوْزَانٍ شَتَّى لَا ضَابِطَ لَهَا — كالفأس والقَدُوم والسكين.' },

        { t: 'mcq', q: 'Plural of مِفْتَاح vs plural of مِبْرَد:',
          choices: ['مَفَاتِيح (mafāʿīl) vs مَبَارِد (mafāʿil)', 'both mafāʿil', 'both mafāʿīl', 'مفاتح vs مباريد'],
          correct: 0,
          why: 'The grid: مِفْعَال → مَفَاعِيل؛ مِفْعَل/مِفْعَلَة → مَفَاعِل.' },

        { t: 'written',
          prompt: 'Define اسم الآلة, name its three classical patterns with one example each, and explain how its mīm distinguishes it from اسم الزمان والمكان.',
          model: 'اسم مصوغ من مصدر ثلاثي لما وقع الفعل بواسطته.\nPatterns: مِفْعَال (مِفتاح) · مِفْعَل (مِبْرَد) · مِفْعَلَة (مِكْنَسَة) — all with kasrah on the mīm.\nThe time/place noun takes fatḥah on its mīm (مَضْرَب), the instrument kasrah (مِضْرَب) — one vowel separates "place of striking" from "striking-tool".' },
      ],
    },

  ],
});
