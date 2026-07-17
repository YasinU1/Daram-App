/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الثالث (٣أ): الاسم العامل عمل الفعل (pp. 104–112) ──
   Authored directly from the book PDF. NO matn panels: these pages are not transcribed in the
   reader — teach cards use static ar:/arEn: blocks and carry `page:` (book page) so every key
   idea maps back to the book. No bank steps yet.                                              */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-3a',
  titleAr: 'الْبَابُ الثَّالِثُ فِي الاسْمِ — شِبْهُ الْفِعْلِ',
  titleEn: 'The Noun I — nouns that work like verbs',
  pages: '104–112',
  sections: [

    /* ═══ 1. المصدر ═══ */
    {
      id: 'masdar',
      title: 'الضرب الأول: المصدر',
      subtitle: 'أسماء تعمل عمل الفعل',
      steps: [
        { t: 'teach', title: 'The Noun chapter — the map', page: 104,
          body: 'الباب الثالث في الاسم has two فصلان: **the operating noun** (الاسم العامل) and the non-operating. Operating nouns split into **أسماء تعمل في الاسم** and **أسماء تعمل في الفعل**. The first قسم of noun-governors: **أسماء تعمل عمل الفعل**, called **شبه الفعل** — three أضرب, starting with **المصدر**.',
          points: [
            'The maṣdar usually works **مضافًا إلى معموله** — to its **fāʿil**: ﴿كَذِكْرِكُمْ آبَاءَكُمْ﴾ (you remember), to its **mafʿūl**: ﴿وَلِلهِ عَلَى النَّاسِ حِجُّ الْبَيْتِ﴾ (the House is visited), or to neither: ﴿مَكْرُ اللَّيْلِ وَالنَّهَارِ﴾.',
          ] },

        { t: 'teach', title: 'Tanwīned, أل-defined, and two special rules', page: 105,
          points: [
            'It also works **منوَّنًا**: ﴿أَوْ إِطْعَامٌ فِي يَوْمٍ ذِي مَسْغَبَةٍ ۝ يَتِيمًا ذَا مَقْرَبَةٍ﴾ — يتيمًا is mafʿūl of the tanwīned إطعام. Working **معرفًا باللام is شاذ**: «كيف التَّوَقِّي ظَهْرَ ما أنتَ راكبُهُ».',
            'Unique licence: **its fāʿil may be deleted with no substitute** (بلا نائب) — unlike every other operating noun.',
            'Its معمول may **not precede it** — except the ẓarf, for most grammarians: ﴿فَلَمَّا بَلَغَ مَعَهُ السَّعْيَ﴾.',
          ] },

        { t: 'mcq', q: '﴿كَذِكْرِكُمْ آبَاءَكُمْ﴾ — parse the maṣdar’s two معمولان.',
          choices: ['كم is its fāʿil (by iḍāfa), آباءَكم its mafʿūl bihi — “as YOU remember your fathers”', 'كم is mafʿūl, آباء is fāʿil', 'Both are mafʿūl', 'ذكر has no معمول here'],
          correct: 0,
          why: 'The commonest pattern: maṣdar مضاف to its fāʿil, then the mafʿūl in naṣb. In ﴿حِجُّ الْبَيْتِ﴾ the iḍāfa is to the mafʿūl instead.' },

        { t: 'mcq', q: 'Which maṣdar usage is شاذ?',
          choices: ['Operating while defined with أل — «كيف التوقي ظهرَ ما أنت راكبه»', 'Operating while مضاف', 'Operating while منوَّن ﴿أو إطعامٌ … يتيمًا﴾', 'Operating on a ẓarf'],
          correct: 0,
          why: 'مضاف and منوَّن are the normal operating states; المعرف باللام working is anomalous.' },

        { t: 'mcq', q: 'What may the maṣdar do that other operating nouns may not?',
          choices: ['Drop its fāʿil entirely, with no نائب standing in', 'Take two objects', 'Precede its معمول', 'Govern jazm'],
          correct: 0,
          why: 'يجوز حذف فاعله بلا نائب بخلاف سائر الأسماء العاملة. And only the ẓarf may precede it ﴿فلما بلغ معه السعي﴾.' },

        { t: 'written',
          prompt: 'Describe the three states in which the maṣdar operates (with the شاذ case), and its two special rules about the deleted fāʿil and the fronted معمول.',
          model: 'The maṣdar operates like its verb: usually مضافًا إلى معموله — to its fāʿil ﴿كذكركم آباءكم﴾, to its mafʿūl ﴿ولله على الناس حج البيت﴾, or to neither ﴿مكر الليل والنهار﴾; also منوَّنًا ﴿أو إطعام في يوم ذي مسغبة يتيما﴾; while its operating when معرف باللام is شاذ — «كيف التوقي ظهر ما أنت راكبه». Two special rules: its fāʿil may be deleted with no نائب, unlike all other operating nouns; and its معمول may not precede it, excepting the ẓarf according to most ﴿فلما بلغ معه السعي﴾.' },
      ],
    },

    /* ═══ 2. اسم الفاعل ═══ */
    {
      id: 'ism-fail',
      title: 'الضرب الثاني: المشتقات — اسم الفاعل',
      subtitle: 'شرائط عمله المعرف والمنكر',
      steps: [
        { t: 'teach', title: 'The five verb-like derivatives', page: 105,
          body: 'The second ḍarb: **المشتقات بمعنى الفعل** — five: **اسم الفاعل · اسم المفعول · الصفة المشبهة · اسم المبالغة · اسم التفضيل**. Their fāʿil is an explicit noun ﴿رَبَّنَا أَخْرِجْنَا مِنْ هَذِهِ الْقَرْيَةِ **الظَّالِمِ أَهْلُهَا**﴾ or a hidden pronoun ﴿إِنِّي **خَالِقٌ** بَشَرًا﴾ (= أنا).',
          points: [
            '**اسم الفاعل** works the work of its **active** verb: ﴿إِنِّي خَالِقٌ بَشَرًا﴾.',
            '**المعرَّف باللام** operates **unconditionally** (مطلقًا) — hidden or explicit fāʿil, objects and more: ﴿الْقَرْيَةِ الظَّالِمِ أَهْلُهَا﴾ ﴿فَالتَّالِيَاتِ ذِكْرًا﴾.',
          ] },

        { t: 'teach', title: 'The indefinite one needs support', page: 105,
          body: 'The **منكَّر** operates on its hidden fāʿil unconditionally ﴿وَهُوَ قَائِمٌ يُصَلِّي فِي الْمِحْرَابِ﴾ — but on an explicit fāʿil or objects only if it means **الحال أو الاستقبال** AND leans (مُعتمِدًا) on one of five supports (p. 106):',
          points: [
            'a **mubtadaʾ** ﴿وَكَلْبُهُمْ بَاسِطٌ ذِرَاعَيْهِ بِالْوَصِيدِ﴾ — or **what stands like one** ﴿فَإِنَّهُ آثِمٌ قَلْبُهُ﴾,',
            'a **ذو الحال** ﴿فَاعْبُدِ اللهَ مُخْلِصًا لَهُ الدِّينَ﴾,',
            'the **hamza of استفهام** ﴿قَالَ أَرَاغِبٌ أَنْتَ عَنْ آلِهَتِي يَا إِبْرَاهِيمُ﴾ — or a **negative particle**: «ما ناصرٌ زيدٌ عمرًا».',
          ] },

        { t: 'teach', title: 'The connected معمول: three cases; the separated: one', page: 106,
          points: [
            'A معمول **attached** to اسم الفاعل allows **rafʿ** ﴿فَإِنَّهُ آثِمٌ **قَلْبُهُ**﴾, **naṣb** ﴿إِنِّي خَالِقٌ **بَشَرًا**﴾, and **iḍāfa** ﴿إِنَّ رَبَّكَ وَاسِعُ **الْمَغْفِرَةِ**﴾ ﴿إِنِّي جَاعِلُكَ لِلنَّاسِ **إِمَامًا**﴾.',
            'A معمول **separated** from it must take **naṣb**: ﴿إِنِّي جَاعِلٌ فِي الْأَرْضِ **خَلِيفَةً**﴾.',
          ] },

        { t: 'mcq', q: '﴿وَكَلْبُهُمْ بَاسِطٌ ذِرَاعَيْهِ﴾ — باسط is indefinite yet governs ذراعيه. What licenses it?',
          choices: ['It means the ḥāl/istiqbāl and leans on the mubtadaʾ كلبُهم', 'Indefinite ism fāʿil always operates', 'ذراعيه is actually majrūr', 'The أل on الكلب'],
          correct: 0,
          why: 'The نكرة operates beyond its hidden fāʿil only بمعنى الحال أو الاستقبال + اعتماد on mubtadaʾ/its like/ذي الحال/استفهام/نفي.' },

        { t: 'mcq', q: 'Which support licenses «أَرَاغِبٌ أَنْتَ عَنْ آلِهَتِي» with أنت as explicit fāʿil?',
          choices: ['The interrogative hamza before راغب', 'A mubtadaʾ', 'A ذو الحال', 'None — the sentence is anomalous'],
          correct: 0,
          why: 'همزة الاستفهام is one of the five supports; راغب then raises أنت as its fāʿil — the classic sadd-masadd pattern.' },

        { t: 'mcq', q: '﴿إِنِّي جَاعِلٌ فِي الْأَرْضِ خَلِيفَةً﴾ — why must خليفة be manṣūb (no iḍāfa possible)?',
          choices: ['The معمول is SEPARATED from اسم الفاعل (by في الأرض) — the separated معمول takes naṣb obligatorily', 'خليفة is definite', 'جاعل is معرف باللام', 'It is a tamyīz'],
          correct: 0,
          why: 'Attached: rafʿ/naṣb/iḍāfa all allowed. Separated: naṣb only — يجب في المعمول المنفصل النصب.' },

        { t: 'mcq', q: '﴿الْقَرْيَةِ الظَّالِمِ أَهْلُهَا﴾ — why does الظالم operate with no ḥāl-meaning and no support?',
          choices: ['It is معرف باللام — the أل-defined اسم فاعل operates مطلقًا', 'أهلها is not its fāʿil', 'It leans on القرية as mubtadaʾ', 'The verse is an exception'],
          correct: 0,
          why: 'The conditions (حال/استقبال + اعتماد) bind only the نكرة. المعرف باللام works unconditionally, hidden or explicit fāʿil, objects and more.' },

        { t: 'written',
          prompt: 'State the operating conditions of اسم الفاعل — المعرف باللام vs المنكر (with the five supports) — and the case options for its attached vs separated معمول.',
          model: 'اسم الفاعل works the work of its active verb ﴿إني خالق بشرا﴾. المعرف باللام operates مطلقًا — in its hidden and explicit fāʿil, the objects and beyond ﴿القرية الظالم أهلها﴾ ﴿فالتاليات ذكرا﴾. المنكر operates in its hidden fāʿil مطلقًا ﴿وهو قائم يصلي في المحراب﴾, but in its explicit fāʿil and the objects only when it means الحال أو الاستقبال and leans on: a mubtadaʾ ﴿وكلبهم باسط ذراعيه بالوصيد﴾, what stands like a mubtadaʾ ﴿فإنه آثم قلبه﴾, a ذي الحال ﴿فاعبد الله مخلصا له الدين﴾, همزة الاستفهام ﴿أراغب أنت عن آلهتي﴾, or a negative particle «ما ناصر زيد عمرا». The معمول attached to it may take rafʿ ﴿فإنه آثم قلبه﴾, naṣb ﴿إني خالق بشرا﴾, or iḍāfa ﴿إن ربك واسع المغفرة﴾ ﴿إني جاعلك للناس إماما﴾; the separated معمول must take naṣb ﴿إني جاعل في الأرض خليفة﴾.' },
      ],
    },

    /* ═══ 3. اسم المفعول · الصفة المشبهة · المبالغة ═══ */
    {
      id: 'maful-sifa',
      title: 'اسم المفعول · الصفة المشبهة · المبالغة',
      subtitle: 'حسابُه · حسابَه · حسابًا · الحساب',
      steps: [
        { t: 'teach', title: 'اسم المفعول and اسم المبالغة', page: 106,
          points: [
            '**اسم المفعول** works the work of its **passive** verb (فعله المجهول): ﴿ذَلِكَ يَوْمٌ مَجْمُوعٌ لَهُ النَّاسُ﴾ — الناس is its نائب فاعل.',
            '**اسم المبالغة** works the work of its verb: ﴿إِنَّ رَبَّكَ فَعَّالٌ لِمَا يُرِيدُ﴾ (p. 107).',
          ] },

        { t: 'teach', title: 'الصفة المشبهة — one معمول, four cases', page: 106,
          body: 'The **صفة مشبهة باسم الفاعل** works like an اسم فاعل of a **one-object transitive** — though it derives from a لازم verb; the Arabs simply treat its معمول that way. Its معمول (the paradigm: God’s reckoning is swift) can be (p. 107):',
          points: [
            '**rafʿ** as fāʿil: «اللهُ سريعٌ **حسابُهُ**» — and **naṣb**: على المفعولية if definite «اللهُ سريعٌ **حسابَهُ**», على التمييز if indefinite «اللهُ سريعٌ **حسابًا**».',
            '**jarr** by iḍāfa: ﴿وَاللهُ سَرِيعُ **الْحِسَابِ**﴾.',
          ] },

        { t: 'mcq', q: '﴿ذَلِكَ يَوْمٌ مَجْمُوعٌ لَهُ النَّاسُ﴾ — what is الناسُ to مجموع?',
          choices: ['Its نائب فاعل — اسم المفعول works like the passive verb (يُجمَع له الناسُ)', 'Its fāʿil, active sense', 'A mubtadaʾ', 'Tamyīz'],
          correct: 0,
          why: 'اسم المفعول = عمل فعله المجهول; the raised noun is a deputy-fāʿil, exactly as after يُجمع.' },

        { t: 'mcq', q: '«اللهُ سَرِيعٌ حِسَابَهُ» with naṣb — the naṣb is on what basis, and what if we said حسابًا?',
          choices: ['Definite → naṣb على المفعولية; indefinite (حسابًا) → naṣb على التمييز', 'Both are مفعول به', 'Both are تمييز', 'The naṣb is impossible'],
          correct: 0,
          why: 'The صفة مشبهة resembles a one-object transitive: a definite معمول is object-like; an indefinite one is تمييز. Rafʿ (فاعل) and jarr (إضافة ﴿سريع الحساب﴾) complete the four.' },

        { t: 'mcq', q: 'Why is it called صفة مشبهة **باسم الفاعل** in its working?',
          choices: ['Its verb is لازم, yet it takes a معمول like an اسم فاعل from a one-object transitive', 'It shares اسم الفاعل’s pattern فاعل', 'It only works with أل', 'It works like a passive'],
          correct: 0,
          why: 'From a لازم verb no mafʿūl should exist — but usage gives it one معمول, so it is “assimilated” to the ism fāʿil of a متعدٍّ إلى واحد.' },

        { t: 'written',
          prompt: 'Define the working of اسم المفعول, الصفة المشبهة and اسم المبالغة, and run the four case options of the صفة مشبهة’s معمول on «الله سريع حسابه».',
          model: 'اسم المفعول works the work of its passive verb ﴿ذلك يوم مجموع له الناس﴾ — الناس its نائب فاعل. اسم المبالغة works the work of its verb ﴿إن ربك فعال لما يريد﴾. الصفة المشبهة باسم الفاعل works like the اسم فاعل of a verb transitive to one object although her verb is لازم. Her معمول: rafʿ على الفاعلية «الله سريعٌ حسابُه»; naṣb — على المفعولية if definite «الله سريعٌ حسابَه», على التمييز if indefinite «الله سريعٌ حسابًا»; and jarr بالإضافة ﴿والله سريع الحساب﴾.' },
      ],
    },

    /* ═══ 4. اسم التفضيل ═══ */
    {
      id: 'tafdil',
      title: 'الخامس: اسم التفضيل',
      subtitle: 'أركانه · مسألة الكحل · أحواله الثلاثة',
      steps: [
        { t: 'teach', title: 'Its work and its three أركان', page: 107,
          body: '**اسم التفضيل** works the work of its verb: ﴿إِنَّ هَذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ﴾. The comparison has **three pillars** (p. 108):',
          points: [
            '**اسم التفضيل** itself,',
            '**المُفَضَّل** — its fāʿil, the noun that exceeds in the quality,',
            '**المُفَضَّل عليه** — the noun exceeded.',
          ] },

        { t: 'teach', title: 'Its fāʿil — and مسألة الكحل', page: 108,
          points: [
            'Its fāʿil is a **hidden pronoun**: ﴿لِلَّتِي هِيَ أَقْوَمُ﴾ —',
            '**except in مسألة الكحل**: a negation, then a genus-noun described by اسم التفضيل, after which comes a noun preferred **over itself in two regards**: «ما رأيتُ رجلًا أحسنَ في عينِهِ **الكُحْلُ** منه في عينِ زيدٍ» — here الكحل is an explicit fāʿil.',
          ] },

        { t: 'teach', title: 'Its three states', page: 108,
          body: 'اسم التفضيل comes in **three أحوال**:',
          points: [
            'With **مِن + المفضل عليه** — obligatorily **singular masculine** (إفراد وتذكير): ﴿لَيُوسُفُ وَأَخُوهُ أَحَبُّ إِلَى أَبِينَا مِنَّا﴾ ﴿وَمَا نُرِيهِمْ مِنْ آيَةٍ إِلَّا هِيَ أَكْبَرُ مِنْ أُخْتِهَا﴾.',
            '**Muḍāf to an indefinite** — again singular masculine: ﴿وَلَا تَكُونُوا أَوَّلَ كَافِرٍ بِهِ﴾. **Muḍāf to a definite** — both options: إفراد وتذكير ﴿وَلَتَجِدَنَّهُمْ أَحْرَصَ النَّاسِ عَلَى حَيَاةٍ﴾ or مطابقة ﴿هُمْ أَرَاذِلُنَا﴾ (p. 109).',
            '**With أل** — agreement (المطابقة) is obligatory: ﴿يَصْلَى النَّارَ الْكُبْرَى﴾ (p. 109).',
          ] },

        { t: 'mcq', q: '﴿لَيُوسُفُ وَأَخُوهُ أَحَبُّ إِلَى أَبِينَا مِنَّا﴾ — two people, yet أحبُّ stays singular. Why?',
          choices: ['With من + المفضل عليه, اسم التفضيل must stay singular masculine', 'Poetic licence', 'أخوه does not count', 'It should have been أحبّانِ — shādh'],
          correct: 0,
          why: 'First حال: بعده من الجارة → يجب إفراده وتذكيره, whatever the مفضّل’s number/gender ﴿إلا هي أكبر من أختها﴾.' },

        { t: 'mcq', q: '﴿أَحْرَصَ النَّاسِ﴾ vs ﴿هُمْ أَرَاذِلُنَا﴾ — both muḍāf to definites, different forms. How?',
          choices: ['Muḍāf to a definite allows BOTH: singular-masculine (أحرص) or full agreement (أراذل)', 'One of them is wrong', 'أراذل is not a تفضيل', 'The difference is qirāʾah only'],
          correct: 0,
          why: 'إلى معرفة → يجوز الإفراد والتذكير والمطابقة. Muḍāf to a nakira, by contrast, must stay singular ﴿أولَ كافرٍ به﴾, and with أل agreement is وجوبًا ﴿النار الكبرى﴾.' },

        { t: 'mcq', q: 'In «ما رأيتُ رجلًا أحسنَ في عينه الكحلُ منه في عين زيد», what is exceptional?',
          choices: ['اسم التفضيل raises an EXPLICIT fāʿil (الكحل) — allowed only in this مسألة الكحل pattern (negation + genus noun + one thing preferred over itself in two regards)', 'The من phrase', 'رجلًا being indefinite', 'Nothing — any تفضيل can do this'],
          correct: 0,
          why: 'Everywhere else its fāʿil is a hidden pronoun. The كحل-construction is the carved-out exception the books all cite.' },

        { t: 'mcq', q: '﴿يَصْلَى النَّارَ الْكُبْرَى﴾ — why كبرى and not أكبر?',
          choices: ['With أل, المطابقة is obligatory — feminine النار demands الكبرى', 'كبرى is not a تفضيل', 'Free variation', 'Because of the verb يصلى'],
          correct: 0,
          why: 'Third حال: المحلى باللام agrees in gender/number with its noun, وجوبًا.' },

        { t: 'written',
          prompt: 'Name the three pillars of التفضيل, the rule for its fāʿil with the كحل exception, and its three states with the agreement ruling of each.',
          model: 'Pillars: اسم التفضيل; المفضل — its fāʿil, the noun exceeding in the quality; المفضل عليه — the one exceeded. Its fāʿil is a hidden pronoun ﴿للتي هي أقوم﴾ except in مسألة الكحل — negation, then a genus noun described by اسم التفضيل, then a thing preferred over itself in two regards: «ما رأيت رجلا أحسن في عينه الكحلُ منه في عين زيد», where الكحل is an explicit fāʿil. Three states: (1) followed by من + المفضل عليه — singular masculine obligatorily ﴿ليوسف وأخوه أحب إلى أبينا منا﴾ ﴿إلا هي أكبر من أختها﴾; (2) muḍāf — to a nakira: singular masculine obligatorily ﴿ولا تكونوا أول كافر به﴾; to a maʿrifa: singular-masculine or agreement both allowed ﴿أحرص الناس على حياة﴾ / ﴿هم أراذلنا﴾; (3) with أل: agreement obligatory ﴿يصلى النار الكبرى﴾.' },
      ],
    },

    /* ═══ 5. أسماء فيها معنى الفعل ═══ */
    {
      id: 'ism-fil',
      title: 'الضرب الثالث: أسماء فيها معنى الفعل',
      subtitle: 'اسم الفعل · الظرف المستقر · المنسوب · الجامد المؤول',
      steps: [
        { t: 'teach', title: 'اسم الفعل — meaning of a verb, form of a noun', page: 109,
          body: 'Third ḍarb: every لفظ from which a **verb’s meaning** is understood. First and biggest: **اسم الفعل** — it works like the verb it means, **raising a fāʿil** ﴿هَيْهَاتَ هَيْهَاتَ لِمَا تُوعَدُونَ﴾ and **naṣbing an object**: «بَلْهَ الشَّرَّ».',
          points: [
            '**By tense**: māḍī-meaning — هيهات (= بَعُدَ); muḍāriʿ-meaning — أُفٍّ (= أتضجَّرُ) ﴿فَلَا تَقُلْ لَهُمَا أُفٍّ﴾; amr-meaning — آمين (= استجِبْ).',
          ] },

        { t: 'teach', title: 'By origin: مرتجل، منقول، قياسي', page: 110,
          points: [
            '**سماعي مرتجل** — coined as ismu fiʿl from the start: هيهات (بَعُدَ) · وَيْ (أعجبُ) ﴿وَيْكَأَنَّ اللهَ يَبْسُطُ الرِّزْقَ﴾ · رُوَيْدَ (أمهِلْ) ﴿أَمْهِلْهُمْ رُوَيْدًا﴾ · هَلُمَّ (احضُرْ) ﴿هَلُمَّ شُهَدَاءَكُمْ﴾ · آمين — plus حَيَّ وحَيَّهَل (أقبِلْ) · سَرْعانَ (ما أسرعَ) · مَهْ (اكفُفْ) · صَهْ (اسكُتْ) · أُفٍّ · شَتَّانَ (بَعُدَ): «شتانَ ما بين الصدقِ والكذبِ» (p. 111).',
            '**سماعي منقول** — transferred from: a jārr-majrūr «**عليكم** بسنَّتي» (= الزموا) · a ẓarf «**دونَك** الكتابَ» (= خذه), «**أمامَك**» (= تقدَّم) · a maṣdar «**بَلْهَ** الشرَّ» (= اتركه) · a tanbīh particle «**هاءَ** زيدًا» (= خذه) — this هاء takes a mīm ﴿هَاؤُمُ اقْرَءُوا كِتَابِيَهْ﴾ or a tāʾ ﴿هَاتُوا بُرْهَانَكُمْ﴾ (p. 111).',
            '**قياسي** — the pattern **فَعالِ** bent from افعَلْ: «نَزالِ» = انزِلْ (p. 111).',
          ],
          after: 'By inflection (p. 112): متصرف «عليكما» vs غير متصرف «هيهات». And its معمول may NEVER precede it: «زيدًا عليكَ» ✗.' },

        { t: 'teach', title: 'The other three verb-meaning nouns', page: 112,
          points: [
            '**الظرف المستقر** leaning on نفي أو استفهام works like **استقرَّ**: ﴿أَفِي اللهِ شَكٌّ﴾ — شكٌّ is fāʿil of the jārr-majrūr.',
            '**الاسم المنسوب** works like **اسم المفعول**: «ينبغي للعالِمِ أن يكونَ محمديًّا **خُلُقُهُ**» — خلقه its raised معمول.',
            '**الاسم الجامد المؤول بمعنى المشتق**: ﴿وَهُوَ اللهُ فِي السَّمَاوَاتِ وَفِي الْأَرْضِ﴾ — الله read as **مستحقٌّ للعبادة**.',
          ] },

        { t: 'mcq', q: '﴿هَيْهَاتَ هَيْهَاتَ لِمَا تُوعَدُونَ﴾ — what does هيهات DO grammatically?',
          choices: ['Works like بَعُدَ: an ismu fiʿl raising its fāʿil', 'Nothing — pure interjection', 'Naṣbs لما', 'Works like a maṣdar'],
          correct: 0,
          why: 'اسم الفعل يعمل عمل ما هو في معناه — rafʿ of the fāʿil, naṣb of the object («بله الشرَّ»).' },

        { t: 'mcq', q: 'Sort by origin: نَزالِ · عليكم · هيهات.',
          choices: ['قياسي (فَعالِ from انزل) · منقول (from jārr-majrūr) · مرتجل (coined as such)', 'All مرتجل', 'منقول · قياسي · منقول', 'قياسي · مرتجل · منقول'],
          correct: 0,
          why: 'The three origins: coined (مرتجل), transferred from jārr-majrūr/ẓarf/maṣdar/tanbīh (منقول), and the productive فَعالِ pattern (قياسي).' },

        { t: 'mcq', q: 'Why is «زَيْدًا عَلَيْكَ» rejected?',
          choices: ['The معمول of an ismu fiʿl may never precede it', 'عليك cannot take an object', 'زيد must be marfūʿ', 'It is fine'],
          correct: 0,
          why: 'لا يجوز تقديم معموله عليه — فلا يصح «زيدًا عليك» ولا «ذنبًا تراكِ».' },

        { t: 'mcq', q: '﴿أَفِي اللهِ شَكٌّ﴾ — what raises شكٌّ?',
          choices: ['The ẓarf mustaqarr (في الله), leaning on the استفهام, working like استقرّ', 'A deleted كان', 'The hamza itself', 'شك is mubtadaʾ by necessity — no other reading exists'],
          correct: 0,
          why: 'الظرف المستقر المعتمد على نفي أو استفهام يعمل عمل فعل استقرّ — شك is its fāʿil (though some make it a delayed mubtadaʾ).' },

        { t: 'written',
          prompt: 'Define اسم الفعل and classify it three ways (tense, origin, inflection) with examples; then name the other three verb-meaning nouns and what each works like.',
          model: 'اسم الفعل works like the verb it means — raising the fāʿil ﴿هيهات هيهات لما توعدون﴾ and naṣbing the object «بله الشرَّ». By tense: māḍī-meaning (هيهات = بعُد), muḍāriʿ-meaning (أفٍّ = أتضجر ﴿فلا تقل لهما أف﴾), amr-meaning (آمين = استجب). By origin: سماعي مرتجل — coined as such: هيهات، وي ﴿ويكأن﴾، رويد، هلم ﴿هلم شهداءكم﴾، آمين، حي وحيهل، سرعان، مه، صه، شتان; سماعي منقول — from jārr-majrūr «عليكم بسنتي», ẓarf «دونك الكتاب» «أمامك», maṣdar «بله الشر», or tanbīh «هاء زيدا» (with mīm ﴿هاؤم﴾ or tāʾ ﴿هاتوا﴾); قياسي — فَعالِ from افعل: «نزالِ» = انزل. By inflection: متصرف «عليكما» and غير متصرف «هيهات»; and its معمول never precedes it. The other three: الظرف المستقر leaning on نفي/استفهام works like استقرّ ﴿أفي الله شك﴾; الاسم المنسوب works like اسم المفعول «محمديًّا خلقُه»; الاسم الجامد المؤول بالمشتق ﴿وهو الله في السماوات﴾ أي مستحق للعبادة.' },
      ],
    },
  ],
});
