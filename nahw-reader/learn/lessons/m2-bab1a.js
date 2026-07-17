/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الثاني · الباب الأول (١أ): المرفوعات الثمانية (pp. 132–138) ──
   Authored directly from the book PDF. NO matn panels: these pages are not transcribed in the
   reader — teach cards use static ar:/arEn: blocks and carry `page:` (book page) so every key
   idea maps back to the book. No bank steps yet.                                              */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm2-bab-1a',
  titleAr: 'الْمَقْصَدُ الثَّانِي · الْمَرْفُوعَاتُ',
  titleEn: 'Aim Two I — the eight marfūʿāt',
  pages: '132–138',
  sections: [

    /* ═══ 1. مدخل المقصد الثاني ═══ */
    {
      id: 'm2-intro',
      title: 'مقدمة المقصد الثاني',
      subtitle: 'ما يُعمَل فيه وما لا يُعمَل',
      steps: [
        { t: 'teach', title: 'Aim Two: the governed and the ungoverned', page: 132,
          body: '**المقصد الثاني في المعمول وغير المعمول** — a muqaddima and four abwāb (الاسم، الفعل، الجملة، شبه الجملة). The muqaddima settles **five مسائل**:',
          points: [
            '**Nouns**: some معمول, some not · **verbs**: some معمول, some not · **sentences**: some معمول, some not.',
            '**شبه الجمل: all معمول** · **الحروف: none معمول**.',
          ] },

        { t: 'teach', title: 'Bāb 1 — the noun, صريح ومؤول', page: 132,
          points: [
            'The noun is two: **الصريح** — the noun on its own: «الصومُ» — and **المؤول** — a maṣdar-particle with its clause: «أنْ تصوموا».',
            'The معمول noun is of two أنواع: **بالأصالة** — governed **directly, no intermediary** — and (later) by dependency. The direct kind has three أقسام: **المرفوع (٨) · المنصوب (١٢) · المجرور**.',
          ] },

        { t: 'mcq', q: 'Which category is ALWAYS معمول, and which NEVER?',
          choices: ['شبه الجمل all معمول; الحروف all غير معمول', 'Verbs always; nouns never', 'Sentences always; شبه الجمل never', 'Nouns always; sentences never'],
          correct: 0,
          why: 'The five مسائل: nouns/verbs/sentences split; quasi-sentences are wholly governed; particles wholly ungoverned.' },

        { t: 'mcq', q: '«يُعْجِبُنِي أَنْ تَصُومُوا» — what kind of noun is أن تصوموا?',
          choices: ['اسم مؤول — a maṣdar-particle with its clause, equal to الصومُ (the صريح)', 'A verb phrase, not a noun', 'A ḥarf', 'A jumla with no noun value'],
          correct: 0,
          why: 'الاسم اثنان: الصريح (الصوم) والمؤول (أن تصوموا) — the ḥarf maṣdarī fuses with its clause into a noun.' },

        { t: 'written',
          prompt: 'State the five مسائل of the Aim-Two muqaddima and the صريح/مؤول division of the noun.',
          model: 'المقصد الثاني في المعمول وغير المعمول opens with five مسائل: nouns are partly معمول and partly not; verbs likewise; sentences likewise; قuasi-sentences (شبه الجمل) are all معمول; particles are all غير معمول. Bāb one treats the noun, which is two: الصريح — the noun alone, «الصوم» — and المؤول — a maṣdar-particle with the clause after it, «أن تصوموا». The directly-governed noun (المعمول بالأصالة, no intermediary) has three أقسام: المرفوع — eight kinds, المنصوب — twelve, and المجرور.' },
      ],
    },

    /* ═══ 2. الفاعل ═══ */
    {
      id: 'fail',
      title: 'الأول: الفاعل',
      subtitle: 'جرُّه لفظًا · رتبته مع المفعول',
      steps: [
        { t: 'teach', title: 'The fāʿil and its lafẓī jarr', page: 132,
          ar: 'الفَاعِلُ، وهو ما نُسِبَ إِلَيْهِ …',
          arEn: 'The fāʿil: that to which is ascribed —',
          points: [
            '— the **active complete verb**: ﴿فَقَسَتْ قُلُوبُهُمْ﴾, or **what carries its meaning**: ﴿وَالْقَاسِيَةِ قُلُوبُهُمْ﴾ (p. 133).',
            'It may be **jarred in form** while marfūʿ in status: by **iḍāfa to the maṣdar** ﴿كَذِكْرِكُمْ آبَاءَكُمْ﴾, by **زائدة مِن** ﴿مَا جَاءَنَا مِنْ بَشِيرٍ﴾, or **زائدة باء** ﴿وَكَفَى بِاللهِ وَكِيلًا﴾ (p. 133).',
          ] },

        { t: 'teach', title: 'Who comes first — fāʿil or mafʿūl?', page: 133,
          body: 'The default: fāʿil precedes ﴿وَوَرِثَ سُلَيْمَانُ دَاوُودَ﴾. **Fāʿil first is obligatory**:',
          points: [
            'In «ضربتُ زيدًا» — a connected pronoun cannot be detached without need (no «ضربَ زيدًا أنا»).',
            'When **iʿrāb is invisible and confusion looms**: «زارَ موسى عيسى»، «زارتْ هذه تلكَ» — unlike «أكلَ الكمثرى موسى» (meaning decides) or «نصرتْ موسى سلمى» (the tāʾ decides); the same runs in كان’s ism ﴿فَمَا زَالَتْ تِلْكَ دَعْوَاهُمْ﴾.',
          ] },

        { t: 'teach', title: 'When the mafʿūl jumps ahead', page: 133,
          points: [
            '**Jawāzan**: ﴿وَلَقَدْ جَاءَ آلَ فِرْعَوْنَ النُّذُرُ﴾.',
            '**Wujūban**: ﴿وَإِذِ ابْتَلَى إِبْرَاهِيمَ رَبُّهُ﴾ — else the pronoun in ربُّه would precede its referent; ﴿لَعَنَهُمُ اللهُ﴾ — the connected pronoun must stay connected (no «لعنَ اللهُ إياهم»); and ﴿فَأَيَّ آيَاتِ اللهِ تُنْكِرُونَ﴾ — الاستفهام owns the sentence-front (p. 134).',
          ] },

        { t: 'mcq', q: '﴿وَكَفَى بِاللهِ وَكِيلًا﴾ — what is the iʿrāb status of بالله?',
          choices: ['Fāʿil of كفى, jarred in form by the زائدة bāʾ, marfūʿ in maḥall', 'A jārr-majrūr complement only', 'Mafʿūl bihi', 'Tamyīz'],
          correct: 0,
          why: 'قد يجر الفاعل لفظا: بالإضافة إلى المصدر، أو بمن الزائدة ﴿ما جاءنا من بشير﴾، أو بالباء الزائدة.' },

        { t: 'mcq', q: '«زَارَ مُوسَى عِيسَى» — who visited whom, and why?',
          choices: ['Mūsā visited ʿĪsā: with invisible iʿrāb and no clue, the fāʿil MUST come first', 'ʿĪsā visited Mūsā', 'Ambiguous by design', 'Either, freely'],
          correct: 0,
          why: 'يجب تقديم الفاعل للالتباس. With a قرينة — معنوية «أكل الكمثرى موسى» or لفظية «نصرتْ موسى سلمى» — the order frees up.' },

        { t: 'mcq', q: '﴿وَإِذِ ابْتَلَى إِبْرَاهِيمَ رَبُّهُ﴾ — why is the mafʿūl fronted obligatorily?',
          choices: ['The fāʿil ربُّه holds a pronoun referring to إبراهيم — fāʿil-first would make the pronoun precede its referent (إضمار قبل الذكر)', 'For rhyme', 'ابتلى demands it always', 'It is actually jawāzan'],
          correct: 0,
          why: 'One of the three وجوب cases; the others: ﴿لعنهم الله﴾ (keep the connected pronoun connected) and fronted استفهام ﴿فأي آيات الله تنكرون﴾.' },

        { t: 'written',
          prompt: 'Define the fāʿil, list the three ways it is jarred لفظًا, and give the obligatory-order cases in both directions (fāʿil first; mafʿūl first).',
          model: 'The fāʿil is that to which the active complete verb ﴿فقست قلوبهم﴾ or its meaning-equivalent ﴿والقاسية قلوبهم﴾ is ascribed. It may be jarred in form: by iḍāfa to the maṣdar ﴿كذكركم آباءكم﴾, by زائدة من ﴿ما جاءنا من بشير﴾, or by زائدة باء ﴿وكفى بالله وكيلا﴾. Default order: fāʿil before mafʿūl ﴿وورث سليمان داود﴾. Fāʿil first is obligatory in «ضربت زيدا» (a connectable pronoun may not be detached) and where invisible iʿrāb breeds confusion «زار موسى عيسى»، «زارت هذه تلك» — lifted by a قرينة معنوية «أكل الكمثرى موسى» or لفظية «نصرت موسى سلمى»; the rule extends to كان’s ism ﴿فما زالت تلك دعواهم﴾. The mafʿūl precedes jawāzan ﴿ولقد جاء آل فرعون النذر﴾ and wujūban: ﴿وإذ ابتلى إبراهيم ربه﴾ to avoid إضمار قبل الذكر; ﴿لعنهم الله﴾ since the connected pronoun must stay connected; ﴿فأي آيات الله تنكرون﴾ since الاستفهام claims the front.' },
      ],
    },

    /* ═══ 3. نائب الفاعل والمبتدأ ═══ */
    {
      id: 'naib-mubtada',
      title: 'نائب الفاعل · المبتدأ',
      subtitle: 'مسوغات الابتداء بالنكرة · حذف المبتدأ',
      steps: [
        { t: 'teach', title: 'نائب الفاعل', page: 134,
          points: [
            'That to which the **passive complete verb** ﴿وَجُمِعَ الشَّمْسُ وَالْقَمَرُ﴾ or its equivalent ﴿ذَلِكَ يَوْمٌ مَجْمُوعٌ لَهُ النَّاسُ﴾ is ascribed.',
            'A **شبه جملة** can be the deputy: ﴿وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾.',
          ] },

        { t: 'teach', title: 'المبتدأ — two kinds', page: 134,
          points: [
            '**First**: a noun stripped of lafẓī governors, **مسند إليه**: ﴿مُحَمَّدٌ رَسُولُ اللهِ﴾.',
            '**Second**: an operating noun **raising an explicit noun after نفي or استفهام**: ﴿أَرَاغِبٌ أَنْتَ عَنْ آلِهَتِي﴾ — called **المكتفي بمرفوعه** (its marfūʿ replaces the khabar).',
            'لام الابتداء may enter it: ﴿وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ مِنْ مُشْرِكٍ﴾.',
          ] },

        { t: 'teach', title: 'A nakira mubtadaʾ needs a مسوغ', page: 134,
          body: 'The default mubtadaʾ is definite; an indefinite one must be **مفيدة** (p. 135):',
          points: [
            '**Specified** — by iḍāfa, uttered «خمسُ صلواتٍ كتبهنَّ الله» or implied ﴿كُلٌّ يَعْمَلُ عَلَى شَاكِلَتِهِ﴾ (= كل أحد); or by وصف, uttered ﴿وَلَعَبْدٌ مُؤْمِنٌ خَيْرٌ…﴾ or implied ﴿وَطَائِفَةٌ قَدْ أَهَمَّتْهُمْ أَنْفُسُهُمْ﴾ (= طائفة منهم).',
            '**Generalised** — after نفي «ما أحدٌ خيرًا من أحدٍ إلا بالتقوى» or استفهام ﴿أَإِلَهٌ مَعَ اللهِ﴾.',
            'Or with a **fronted شبه-جملة khabar** ﴿وَفَوْقَ كُلِّ ذِي عِلْمٍ عَلِيمٌ﴾ ﴿لِكُلِّ أَجَلٍ كِتَابٌ﴾ · after **إذا الفجائية** «…فإذا رجلٌ قاعدٌ» · or as **duʿāʾ** ﴿سَلَامٌ عَلَيْكُمْ﴾ ﴿وَيْلٌ لِكُلِّ هُمَزَةٍ لُمَزَةٍ﴾.',
          ] },

        { t: 'teach', title: 'Deleting the mubtadaʾ', page: 135,
          points: [
            '**Jawāzan** with a clue: «رسولُنا» answering «مَن محمدٌ ﷺ؟» — and often after **فاء الجواب** ﴿مَنْ عَمِلَ صَالِحًا فَلِنَفْسِهِ﴾ (= فعملُه) and **القول** ﴿وَقَالُوا أَسَاطِيرُ الْأَوَّلِينَ﴾ (= هي) (p. 136).',
            '**Wujūban** in four places (p. 136): the **نعت cut off to rafʿ** «الحمدُ للهِ الحميدُ» (= هو الحميدُ) · when the **jawāb of an oath** points to it «في ذمَّتي لأفعلنَّ الصدقَ» (= في ذمتي عهدٌ) · a **maṣdar-khabar standing for its verb** ﴿فَصَبْرٌ جَمِيلٌ﴾ (= صبري) · the khabar **specified to madḥ/dhamm**: «نِعم الطالبُ المجتهدُ» (= هو المجتهدُ).',
          ] },

        { t: 'mcq', q: '﴿وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ﴾ — where is the deputy-fāʿil?',
          choices: ['The شبه جملة بجهنم stands as نائب الفاعل', 'يومئذ', 'A hidden هو', 'جهنم alone, marfūʿ'],
          correct: 0,
          why: 'قد يكون شبه الجملة نائب الفاعل — the passive of جاء takes the jārr-majrūr as its deputy.' },

        { t: 'mcq', q: '﴿أَرَاغِبٌ أَنْتَ عَنْ آلِهَتِي﴾ — راغب has no khabar. What is it?',
          choices: ['The second kind of mubtadaʾ: an operating noun after استفهام whose marfūʿ (أنت) fills the khabar’s place — المكتفي بمرفوعه', 'A khabar fronted', 'A fāʿil of a deleted verb', 'A ḥāl'],
          correct: 0,
          why: 'اسم عامل رافع لاسم ظاهر بعد نفي أو استفهام — the raised noun sadda masadd al-khabar.' },

        { t: 'mcq', q: 'Why is ﴿سَلَامٌ عَلَيْكُمْ﴾ a legitimate nakira mubtadaʾ?',
          choices: ['It is duʿāʾ — one of the مسوغات', 'It is definite by intent', 'عليكم defines it', 'It is not a mubtadaʾ'],
          correct: 0,
          why: 'The مسوغات include: specification (iḍāfa/waṣf), generality after نفي/استفهام, fronted شبه-جملة khabar, إذا الفجائية, and duʿāʾ ﴿ويل لكل همزة﴾.' },

        { t: 'mcq', q: '«الْحَمْدُ لِلهِ الْحَمِيدُ» — الحميد is marfūʿ though الله is majrūr. What happened?',
          choices: ['A نعت cut off to rafʿ — its mubtadaʾ (هو) is obligatorily deleted: هو الحميدُ', 'Concord error', 'الحميد describes الحمد', 'A second khabar'],
          correct: 0,
          why: 'النعت المقطوع إلى الرفع is the first of four places where the mubtadaʾ must vanish (with جواب القسم, the maṣdar-khabar ﴿فصبر جميل﴾, and نعم/بئس’s مخصوص).' },

        { t: 'written',
          prompt: 'Define نائب الفاعل and the two kinds of mubtadaʾ; enumerate the مسوغات of the indefinite mubtadaʾ; and give the four obligatory-deletion places of the mubtadaʾ.',
          model: 'نائب الفاعل is that to which the complete passive verb ﴿وجمع الشمس والقمر﴾ or its equivalent ﴿ذلك يوم مجموع له الناس﴾ is ascribed; a شبه جملة may serve ﴿وجيء يومئذ بجهنم﴾. The mubtadaʾ is two: a noun bare of lafẓī governors, مسند إليه ﴿محمد رسول الله﴾; and an operating noun raising an explicit noun after نفي or استفهام ﴿أراغب أنت عن آلهتي﴾ — المكتفي بمرفوعه; لام الابتداء may enter it ﴿ولعبد مؤمن خير من مشرك﴾. A nakira mubtadaʾ needs a مسوغ: specification by iḍāfa (لفظا «خمس صلوات كتبهن الله» or تقديرا ﴿كل يعمل على شاكلته﴾) or by واصف (لفظا ﴿ولعبد مؤمن﴾ or تقديرا ﴿وطائفة قد أهمتهم أنفسهم﴾); generality after نفي «ما أحد خيرا من أحد إلا بالتقوى» or استفهام ﴿أإله مع الله﴾; a fronted شبه-جملة khabar ﴿وفوق كل ذي علم عليم﴾; after إذا الفجائية «فإذا رجل قاعد»; or duʿāʾ ﴿سلام عليكم﴾. Deletion: jawāzan with a clue («رسولنا», after فاء الجواب ﴿فلنفسه﴾, after القول ﴿أساطير الأولين﴾); wujūban in four: the نعت cut to rafʿ «الحمد لله الحميدُ», when جواب القسم indicates it «في ذمتي لأفعلن الصدق», a maṣdar-khabar replacing its verb ﴿فصبر جميل﴾, and the مخصوص of madḥ/dhamm «نعم الطالب المجتهدُ».' },
      ],
    },

    /* ═══ 4. الخبر ═══ */
    {
      id: 'khabar',
      title: 'الرابع: الخبر',
      subtitle: 'تعدده وحذفه ومطابقته وفاؤه',
      steps: [
        { t: 'teach', title: 'الخبر — basics', page: 136,
          points: [
            'The **مخبَر به**: ﴿مُحَمَّدٌ رَسُولُ اللهِ﴾. It may **multiply**: ﴿وَهُوَ الْغَفُورُ الْوَدُودُ﴾, and though its default place is after the mubtadaʾ it may **precede**: ﴿لَنَا أَعْمَالُنَا﴾.',
            '**Obligatory deletion** in three: when the **jawāb of an oath** points to it ﴿لَعَمْرُكَ إِنَّهُمْ لَفِي سَكْرَتِهِمْ يَعْمَهُونَ﴾ (= لعمرُك قَسَمي) · in **لولا** ﴿وَلَوْلَا رَهْطُكَ لَرَجَمْنَاكَ﴾ (= موجودٌ) · with a mubtadaʾ ʿaṭfed by a **wāw that spells معية** ﴿فَإِنَّكُمْ وَمَا تَعْبُدُونَ﴾.',
            '**Permitted deletion** with a clue: answering استفهام ﴿لَيَقُولُنَّ اللهُ﴾, and after إذا الفجائية «خرجتُ فإذا الأسدُ» (= موجود) (p. 137).',
          ] },

        { t: 'teach', title: 'Agreement and the fāʾ-khabar', page: 137,
          points: [
            'The khabar **agrees** when it holds a hidden pronoun ﴿إِنَّهُمْ هُمُ الْمُفْسِدُونَ﴾ — unlike ﴿نَحْنُ فِتْنَةٌ﴾ — and when the mubtadaʾ is an **ism ishāra** ﴿فَذَانِكَ بُرْهَانَانِ مِنْ رَبِّكَ﴾.',
            'A mubtadaʾ can carry **شرط-meaning**, letting **الفاء** onto its khabar — when it comes after **أما** ﴿فَأَمَّا ثَمُودُ فَأُهْلِكُوا بِالطَّاغِيَةِ﴾, or is a **موصول** ﴿الَّذِينَ خَسِرُوا أَنْفُسَهُمْ فَهُمْ لَا يُؤْمِنُونَ﴾ or **موصوف بموصول** بفعل أو ظرف ﴿إِنَّ الْمَوْتَ الَّذِي تَفِرُّونَ مِنْهُ فَإِنَّهُ مُلَاقِيكُمْ﴾,',
            'or a **نكرة موصوفة** بفعل «ولدٌ حفظَ القرآنَ فله أجرٌ» أو ظرف «ولدٌ في الفصلِ فله أجرٌ», or **مضاف** to such a nakira «أمُّ يتيمٍ تأتيني فلها مالٌ», or **كل + nakira** «كلُّ يتيمٍ فله في قلبي رأفةٌ».',
          ] },

        { t: 'mcq', q: '﴿لَعَمْرُكَ إِنَّهُمْ لَفِي سَكْرَتِهِمْ﴾ — where is لعمرك’s khabar?',
          choices: ['Obligatorily deleted — the oath-jawāb points to it: لعمرُك قسمي', 'إنهم…', 'لفي سكرتهم', 'عمرك has no khabar because it is not a mubtadaʾ'],
          correct: 0,
          why: 'One of three obligatory deletions: oath-indicated, لولا’s (تقديره موجود), and the معية-wāw mubtadaʾ ﴿فإنكم وما تعبدون﴾.' },

        { t: 'mcq', q: '«كُلُّ يَتِيمٍ فَلَهُ فِي قَلْبِي رَأْفَةٌ» — what licenses the فاء on the khabar?',
          choices: ['The mubtadaʾ (كل + nakira) carries شرط-flavour — one of the licensed patterns', 'The فاء is عاطفة', 'An error for بل', 'A deleted إنْ'],
          correct: 0,
          why: 'تضمن المبتدأ معنى الشرط: after أما, a موصول, a موصوف بموصول/نكرة موصوفة بفعل أو ظرف, a muḍāf to such, or كل مضاف إلى نكرة.' },

        { t: 'mcq', q: '﴿نَحْنُ فِتْنَةٌ﴾ — why doesn’t فتنة agree with نحن?',
          choices: ['Agreement binds only when the khabar carries a hidden pronoun (a مشتق); a jāmid khabar like فتنة need not agree', 'It does agree', 'The verse is exceptional', 'نحن is singular here'],
          correct: 0,
          why: 'يطابق الخبرُ إذا كان فيه ضمير مستتر ﴿إنهم هم المفسدون﴾ بخلاف ﴿نحن فتنة﴾ — and with ism-ishāra mubtadaʾs ﴿فذانك برهانان﴾.' },

        { t: 'written',
          prompt: 'Cover the khabar: multiplicity and order; the three obligatory and two permitted deletions; the agreement rule; and the six mubtadaʾ patterns that admit the fāʾ-khabar.',
          model: 'The khabar is the مخبر به ﴿محمد رسول الله﴾; it may multiply ﴿وهو الغفور الودود﴾ and may precede its mubtadaʾ ﴿لنا أعمالنا﴾. Deletion is obligatory when: the oath-jawāb indicates it ﴿لعمرك إنهم لفي سكرتهم يعمهون﴾ أي لعمرك قسمي; in لولا ﴿ولولا رهطك لرجمناك﴾ أي موجود; and when the mubtadaʾ is ʿaṭfed by a wāw of pure معية ﴿فإنكم وما تعبدون﴾. It is permitted with a clue: answering the استفهام ﴿ليقولن الله﴾ and after إذا الفجائية «خرجت فإذا الأسدُ». Agreement: the khabar matches when it contains a hidden pronoun ﴿إنهم هم المفسدون﴾ (unlike ﴿نحن فتنة﴾) and when the mubtadaʾ is an ism ishāra ﴿فذانك برهانان من ربك﴾. The فاء may enter the khabar when the mubtadaʾ has شرط-meaning: after أما ﴿فأما ثمود فأهلكوا بالطاغية﴾; a موصول ﴿الذين خسروا أنفسهم فهم لا يؤمنون﴾; a موصوف بموصولٍ بفعل أو ظرف ﴿إن الموت الذي تفرون منه فإنه ملاقيكم﴾; a نكرة موصوفة بفعل «ولد حفظ القرآن فله أجر» or ظرف «ولد في الفصل فله أجر»; a مضاف to such a nakira «أم يتيم تأتيني فلها مال»; or كل مضافة إلى نكرة «كل يتيم فله في قلبي رأفة».' },
      ],
    },

    /* ═══ 5. بقية المرفوعات ═══ */
    {
      id: 'bawaqi-marfuat',
      title: 'المرفوعات الخامس إلى الثامن',
      subtitle: 'اسم كان · اسم ما ولا · خبر إنّ · خبر لا',
      steps: [
        { t: 'teach', title: 'Four inherited marfūʿāt', page: 138,
          points: [
            '**الخامس** — ism of the **الأفعال الناقصة**: ﴿وَكَانَ اللهُ عَلِيمًا حَكِيمًا﴾ · **السادس** — ism of the **حروف المشبهة بليس**: ﴿مَا هَذَا بَشَرًا﴾، «ولا شيءٌ مشابهًا للهِ».',
            '**السابع** — khabar of the **حروف المشبهة بالفعل**: «إنَّ اللهَ رحيمٌ». The **مزحلقة lām** may enter: the khabar ﴿وَإِنَّكَ لَعَلَى خُلُقٍ عَظِيمٍ﴾, the **delayed ism** ﴿إِنَّ فِي ذَلِكَ لَعِبْرَةً﴾, and the **ḍamīr al-faṣl** ﴿إِنَّ هَذَا لَهُوَ الْقَصَصُ الْحَقُّ﴾.',
            '**الثامن** — khabar of **لا لنفي الجنس**: «لا عملَ مراءٍ مقبولٌ»; its khabar is mostly a **شبه جملة** ﴿فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ﴾, and is often **deleted** when general like «موجود»: ﴿قَالُوا لَا ضَيْرَ﴾.',
          ] },

        { t: 'mcq', q: '﴿إِنَّ فِي ذَلِكَ لَعِبْرَةً﴾ — the lām sits on عبرة, which is إنّ’s ISM. Is that legal?',
          choices: ['Yes — المزحلقة may enter the delayed ism, besides the khabar and the ḍamīr al-faṣl', 'No, the lām only joins khabars', 'عبرة is the khabar', 'The lām is جارة'],
          correct: 0,
          why: 'Three landing spots: khabar ﴿لعلى خلق عظيم﴾, delayed ism ﴿لعبرة﴾, and the فصل pronoun ﴿لهو القصص الحق﴾.' },

        { t: 'mcq', q: '﴿قَالُوا لَا ضَيْرَ﴾ — where is the khabar of لا?',
          choices: ['Deleted — general khabars like «موجود» are commonly dropped', 'ضير itself', 'قالوا', 'لا الجنسية takes no khabar ever'],
          correct: 0,
          why: 'يحذف خبرها كثيرا إن كان عاما كالموجود — and when present it is mostly شبه جملة ﴿لا رفث ولا فسوق ولا جدال في الحج﴾.' },

        { t: 'mcq', q: 'Which pair yields a MARFŪʿ from a naṣb-family governor?',
          choices: ['خبر إنّ and خبر لا الجنسية — the nawāsikh naṣb their ism but raise their khabar', 'اسم إنّ and اسم لا', 'خبر كان and خبر ما', 'None'],
          correct: 0,
          why: 'The eight marfūʿāt close with خبر الحروف المشبهة بالفعل «إن الله رحيمٌ» and خبر لا لنفي الجنس «لا عملَ مراءٍ مقبولٌ».' },

        { t: 'written',
          prompt: 'List marfūʿāt five through eight with an example each, the three landing spots of the مزحلقة, and the two rulings about لا الجنسية’s khabar.',
          model: 'Fifth: the ism of the deficient verbs ﴿وكان الله عليما حكيما﴾. Sixth: the ism of the ليس-like particles ﴿ما هذا بشرا﴾، «ولا شيء مشابها لله». Seventh: the khabar of the verb-like particles «إن الله رحيم»; the مزحلقة lām may enter its khabar ﴿وإنك لعلى خلق عظيم﴾, its delayed ism ﴿إن في ذلك لعبرة﴾, or the ḍamīr al-faṣl between them ﴿إن هذا لهو القصص الحق﴾. Eighth: the khabar of لا لنفي الجنس «لا عمل مراء مقبول» — usually a شبه جملة ﴿فلا رفث ولا فسوق ولا جدال في الحج﴾, and often deleted when general ﴿قالوا لا ضير﴾ أي لا ضير موجود.' },
      ],
    },
  ],
});
