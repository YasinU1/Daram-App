/* ── Daram Learn — al-Kubrā fī an-Naḥw · الخاتمة · وجوه الكلمات · القسم 24: ليس → نعم (pp. 249–253) ──
   Backward-pass course (ch 24), one step in from the tail [[kh-wujuh-tail]] (ch 25). Key-idea teach
   cards carry `page:` AND an interactive matn panel (src: DATA_KH_W24 in
   ../books/kubra-nahw/khatima-wujuh-24.js, loaded in learn.html before this file).
   Notes source: books/kubra-nahw/notes/khatima_04_wujuh-al-kalimat.md. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'kh-wujuh-24',
  num: 26,
  titleAr: 'وُجُوهُ الْكَلِمَاتِ: لَيْسَ ← نَعَمْ',
  titleEn: 'Faces of words — laysa → naʿam',
  pages: '249–253',
  sections: [

    /* ═══ 1. ليس ═══ */
    {
      id: 'laysa',
      title: 'لَيْسَ',
      subtitle: 'ثَلَاثَةُ أَوْجُهٍ: نَاقِص · اسْتِثْنَاء · نَفْيٌ مُهْمَل',
      matn: { src: 'DATA_KH_W24', from: 1, to: 4, check: 'لَيْسَ' },
      steps: [
        { t: 'teach', title: 'laysa — not always the sister of kāna', page: 249,
          focus: [1, 2, 3, 4],
          ar: 'لَيْسَ عَلَى ثَلَاثَةِ أَوْجُهٍ',
          arEn: 'laysa comes in three faces.',
          points: [
            '**فِعْل نَاقِص** (the famous one): raises an ism, sets a khabar in naṣb — ﴿لَيْسُوا سَوَاءً﴾.',
            '**فِعْل اسْتِثْنَاء** (a verb of exception, = إِلّا): «فَكُلْ لَيْسَ السِّنَّ وَالظُّفُرَ» — “eat with anything **except** tooth and nail”; السِّنّ is its manṣūb مُسْتَثْنَى.',
            '**حَرْف نَفْي مُهْمَل** (an inert negator, = لَا) entering a **verbal** sentence: «لَيْسَ يَعْلَمُ الْغَيْبَ إِلَّا اللَّهُ» — here it governs nothing.',
          ],
          after: 'Trigger: what follows. A مُضَارِع after لَيْسَ → it is the inert حَرْف نَفْي, not the نَاقِص.' },

        { t: 'mcq', q: 'In «لَيْسَ يَعْلَمُ الْغَيْبَ إِلَّا اللَّهُ», ليس is …',
          choices: ['a حرف نفي مُهمَل (= لا) — it governs nothing; the sentence after it is فعلية', 'the فعل ناقص with اسم and خبر', 'a verb of exception like إلّا', 'a redundant particle'],
          correct: 0,
          why: 'A مضارع (يعلم) directly follows ليس, so it cannot be the ناقص (which needs an ism + khabar). It is the inert negator, merely negating the verb.' },

        { t: 'mcq', q: '«فَكُلْ لَيْسَ السِّنَّ وَالظُّفُرَ» — which face, and why is السِّنَّ manṣūb?',
          choices: ['فعل استثناء (= إلّا); السنّ is its منصوب on استثناء', 'فعل ناقص; السنّ is its خبر', 'حرف نفي; السنّ is مفعول به', 'a redundant ليس'],
          correct: 0,
          why: 'Here ليس means “except”: it excepts السنّ والظفر from what may be used, giving them naṣb as the مستثنى — the exception-verb face.' },

        { t: 'written',
          prompt: 'State the three faces of ليس with an example of each, and give the contextual trigger that separates the فعل ناقص from the حرف نفي المُهمَل.',
          model: 'ليس has three faces: (1) فعل ناقص — raises an ism and sets its khabar in naṣb ﴿ليسوا سواءً﴾; (2) فعل استثناء = إلّا — «فكُل ليس السنَّ والظفرَ», excepting السنّ والظفر in naṣb; (3) حرف نفي مُهمَل = لا — entering a verbal sentence and governing nothing «ليس يعلم الغيبَ إلا الله». Trigger: if a مضارع فعل follows immediately, ليس is the inert negator (المُهمَل); if it takes a noun as ism followed by a khabar, it is the ناقص.' },
      ],
    },

    /* ═══ 2. ما الاسمية ═══ */
    {
      id: 'ma-ismiyya',
      title: 'مَا الِاسْمِيَّة',
      subtitle: 'سَبْعَةُ أَوْجُهٍ — كُلُّهَا أَسْمَاء',
      matn: { src: 'DATA_KH_W24', from: 6, to: 13, check: 'مَا الِاسْمِيَّةُ' },
      steps: [
        { t: 'teach', title: 'Nominal mā — the “which one is it?” engine', page: 250,
          focus: [7, 8, 9],
          body: 'When مَا is a **noun** it has seven faces; the first three are the everyday trio:',
          points: [
            '**مَوْصُولَة** (relative, “what/that which”): ﴿مَا عِنْدَكُمْ يَنْفَدُ وَمَا عِنْدَ اللَّهِ بَاقٍ﴾.',
            '**شَرْطِيَّة** (conditional, “whatever”): ﴿وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللَّهُ﴾ — it jazms two verbs.',
            '**اسْتِفْهَامِيَّة** (interrogative, “what?”): ﴿وَمَا تِلْكَ بِيَمِينِكَ يَا مُوسَى﴾.',
          ],
          after: 'Trigger: a jussive pair after it → شَرْطِيَّة; a question-sense → اسْتِفْهَامِيَّة; else مَوْصُولَة.' },

        { t: 'teach', title: 'The four subtler nominal faces', page: 250,
          focus: [10, 11, 12, 13],
          body: 'The remaining four are easy to miss:',
          points: [
            '**تَامَّة مَعْرِفَة** (= الشَّيْء): ﴿فَنِعِمَّا هِيَ﴾ — نِعْمَ + مَا, “how excellent a thing!”. And **نَكِرَة تَامَّة** (= شَيْء): «لِمَا نَافِعٍ يَسْعَى اللَّبِيبُ».',
            '**نَعْتًا** (a نَكِرَة used as adjective): ﴿أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً﴾ — “a parable **of some kind**”.',
            '**ظَرْفِيَّة بِمَعْنَى مَا دَامَ** (“as long as”): ﴿فَمَا اسْتَقَامُوا لَكُمْ فَاسْتَقِيمُوا لَهُمْ﴾.',
          ] },

        { t: 'mcq', q: 'In ﴿وَمَا تَفْعَلُوا مِنْ خَيْرٍ يَعْلَمْهُ اللَّهُ﴾, ما is …',
          choices: ['شرطية — “whatever”; note the two jazm-ed verbs تفعلوا / يعلمْه', 'موصولة — “that which”', 'استفهامية — “what?”', 'نافية'],
          correct: 0,
          why: 'The tell-tale of شرطية ما is the pair of majzūm verbs (فعل الشرط + الجواب): تفعلوا…يعلمْه. Relative ما would not jazm.' },

        { t: 'mcq', q: '﴿أَنْ يَضْرِبَ مَثَلًا مَا بَعُوضَةً﴾ — the ما is …',
          choices: ['نكرة نعت (“a parable of some kind”), qualifying مثلًا', 'موصولة', 'استفهامية', 'كافّة'],
          correct: 0,
          why: 'ما here is an indefinite noun used adjectivally on مثلًا — “a parable, some parable”. It is a اسم, not a particle.' },

        { t: 'mcq', q: '﴿فَمَا اسْتَقَامُوا لَكُمْ فَاسْتَقِيمُوا لَهُمْ﴾ — which face of ما?',
          choices: ['ظرفية بمعنى “ما دام” (as long as)', 'شرطية', 'موصولة', 'زائدة'],
          correct: 0,
          why: 'ما here spans a duration = “for as long as they stay upright”: the ظرفية / مصدرية-ظرفية face (ما دام).' },

        { t: 'written',
          prompt: 'List the seven faces of nominal ما with a Qurʾānic or poetic example for each, and give the trigger that distinguishes the شرطية from the موصولة.',
          model: 'Nominal ما: (1) موصولة ﴿ما عندكم ينفد وما عند الله باق﴾; (2) شرطية ﴿وما تفعلوا من خير يعلمه الله﴾; (3) استفهامية ﴿وما تلك بيمينك يا موسى﴾; (4) تامّة معرفة = الشيء ﴿فنعمّا هي﴾; (5) نكرة تامّة = شيء «لما نافع يسعى اللبيب»; (6) نعتًا (نكرة موصوفًا بها) ﴿يضرب مثلًا ما بعوضةً﴾; (7) ظرفية بمعنى ما دام ﴿فما استقاموا لكم فاستقيموا لهم﴾. Trigger شرطية vs موصولة: شرطية jazms a pair of verbs (شرط + جواب); موصولة governs nothing and is completed by its صلة.' },
      ],
    },

    /* ═══ 3. ما الحرفية ═══ */
    {
      id: 'ma-harfiyya',
      title: 'مَا الْحَرْفِيَّة',
      subtitle: 'أَرْبَعَةُ أَوْجُهٍ — كُلُّهَا حُرُوف',
      matn: { src: 'DATA_KH_W24', from: 14, to: 19, check: 'مَا الْحَرْفِيَّةُ' },
      steps: [
        { t: 'teach', title: 'Particle mā — four faces', page: 250,
          focus: [15, 16, 18, 19],
          ar: 'مَا الْحَرْفِيَّةُ عَلَى أَرْبَعَةِ أَوْجُهٍ',
          arEn: 'Particle mā comes in four faces.',
          points: [
            '**نَافِيَة** (negating), over a noun ﴿مَا هَذَا بَشَرًا﴾ (مَا الحِجَازِيَّة, works like لَيْس) or a verb ﴿وَمَا قَتَلُوهُ وَمَا صَلَبُوهُ﴾.',
            '**مَصْدَرِيَّة** (turns its clause into a maṣdar): ﴿بِمَا رَحُبَتْ﴾ = بِرُحْبِهَا — “despite its vastness”.',
            '**كَافَّة** (restrains a governor): ﴿إِنَّمَا اللَّهُ إِلَهٌ وَاحِدٌ﴾ — مَا stops إِنّ from working; also *قَلَّمَا، طَالَمَا*.',
            '**زَائِدَة لِلتَّوْكِيد**: ﴿فَبِمَا رَحْمَةٍ مِنَ اللَّهِ﴾ — inert, after a جَرّ / شَرْط particle.',
          ],
          after: 'Only four, but مَا الكَافَّة vs مَا النَّافِيَة vs مَا المَصْدَرِيَّة is a classic parsing trap.' },

        { t: 'mcq', q: 'In ﴿إِنَّمَا اللَّهُ إِلَهٌ وَاحِدٌ﴾, the ما attached to إنّ is …',
          choices: ['كافّة — it restrains إنّ from governing, so اللهُ is مبتدأ not اسم إنّ', 'نافية', 'مصدرية', 'موصولة'],
          correct: 0,
          why: 'ما الكافّة “caps” إنّ: with إنّما, إنّ no longer sets an اسم in naṣb — اللهُ is raised as a plain مبتدأ. Same mechanism in قلّما / طالما over verbs.' },

        { t: 'mcq', q: '﴿ضَاقَتْ عَلَيْهِمُ الْأَرْضُ بِمَا رَحُبَتْ﴾ — which face of ما?',
          choices: ['مصدرية — بما رحبت = بِرُحْبِها (“with/despite its vastness”)', 'نافية', 'كافّة', 'زائدة'],
          correct: 0,
          why: 'ما المصدرية + رحبت resolves to the maṣdar رُحْب: “the earth straitened on them despite its vastness”.' },

        { t: 'mcq', q: 'Which ما is grammatically inert (adds only emphasis)?',
          choices: ['﴿فَبِمَا رَحْمَةٍ مِنَ اللَّهِ﴾ — ما زائدة after the جرّ', '﴿مَا هَذَا بَشَرًا﴾', '﴿إِنَّمَا اللَّهُ إِلَهٌ وَاحِدٌ﴾', '﴿بِمَا رَحُبَتْ﴾'],
          correct: 0,
          why: 'The زائدة after بـ adds nothing to the iʿrāb (رحمةٍ is still majrūr by بـ). The others are نافية, كافّة, and مصدرية.' },

        { t: 'written',
          prompt: 'Give the four faces of particle ما, and explain how ما الكافّة changes the parse of ﴿إنما الله إله واحد﴾.',
          model: 'Particle ما: (1) نافية — over a noun ﴿ما هذا بشرًا﴾ (like ليس) or a verb ﴿وما قتلوه وما صلبوه﴾; (2) مصدرية ﴿بما رحبت﴾ = برُحبها; (3) كافّة ﴿إنما الله إله واحد﴾; (4) زائدة للتوكيد ﴿فبما رحمة من الله﴾. ما الكافّة: it “caps” إنّ so that إنّ no longer governs — instead of an اسم إنّ منصوب, اللهُ is a plain مبتدأ مرفوع and إله واحد its خبر. The same ما can cap a verb from seeking a fāʿil (قلّما، طالما).' },
      ],
    },

    /* ═══ 4. متى + مَن ═══ */
    {
      id: 'mata-man',
      title: 'مَتَى · مَنْ',
      subtitle: 'ظَرْفُ الزَّمَانِ وَأَدَاةُ الْعَاقِلِ',
      matn: { src: 'DATA_KH_W24', from: 20, to: 28, check: 'مَتَى' },
      steps: [
        { t: 'teach', title: 'matā — two faces', page: 251,
          focus: [21, 22],
          points: [
            '**اسْتِفْهَام** (“when?”): «مَتَى هَذَا الْوَعْدُ».',
            '**شَرْط** (“whenever”), jazming two verbs: «مَتَى تَحْسُدْ تَهْلِكْ».',
          ],
          after: 'Same split as مَا / كَيْف: a jazm-pair after it → شَرْط, else اسْتِفْهَام.' },

        { t: 'teach', title: 'man — five faces (all nominal)', page: 251,
          focus: [24, 25, 26, 27],
          body: 'مَنْ is always a **noun**; the context fixes which:',
          points: [
            '**شَرْطِيَّة لِلْعَاقِل**: ﴿مَنْ يَعْمَلْ سُوءًا يُجْزَ بِهِ﴾ — jazms a pair. · **مَوْصُولَة**: ﴿مُنْذِرُ مَنْ يَخْشَاهَا﴾.',
            '**اسْتِفْهَامِيَّة**: ﴿مَنْ بَعَثَنَا مِنْ مَرْقَدِنَا﴾.',
            '**نَكِرَة مَوْصُوفَة** (= a person): «عَلَى مَنْ غَيْرِنَا» — “over a person other than us”. (A fifth interrogative face is noted in the footnote.)',
          ] },

        { t: 'mcq', q: '«مَتَى تَحْسُدْ تَهْلِكْ» — which face of متى, and what is the tell?',
          choices: ['شرط — it jazms the pair تحسدْ / تهلكْ', 'استفهام — “when?”', 'a plain ظرف with no governing effect', 'موصولة'],
          correct: 0,
          why: 'Two majzūm verbs (شرط + جواب) after متى mark the conditional face — “whenever you envy, you perish”.' },

        { t: 'mcq', q: 'In ﴿إِنَّمَا أَنْتَ مُنْذِرُ مَنْ يَخْشَاهَا﴾, مَن is …',
          choices: ['موصولة — “the one who fears it”, majrūr by إضافة to مُنذر', 'شرطية', 'استفهامية', 'نكرة موصوفة'],
          correct: 0,
          why: 'مَن here = الذي, completed by its صلة يخشاها, and annexed to مُنذر — the relative face. No jazm, no question.' },

        { t: 'written',
          prompt: 'Give the faces of متى (2) and مَن (with four clear faces + example each), and state the shared trigger for the شرط face in both.',
          model: 'متى: (1) استفهام «متى هذا الوعد»; (2) شرط «متى تحسدْ تهلكْ». مَن (a noun throughout): (1) شرطية للعاقل ﴿من يعمل سوءًا يُجزَ به﴾; (2) موصولة ﴿منذرُ من يخشاها﴾; (3) استفهامية ﴿من بعثنا من مرقدنا﴾; (4) نكرة موصوفة = شخص «على مَن غيرِنا» (a further interrogative face is in the footnote). Shared شرط trigger: both jazm a pair of verbs (فعل الشرط + جوابه); absent that pairing, they are interrogative or relative.' },
      ],
    },

    /* ═══ 5. مُنذ + النون + نعم ═══ */
    {
      id: 'mundhu-nun-naam',
      title: 'مُنْذُ · النُّون · نَعَمْ',
      subtitle: 'خَاتِمَةُ الْقِسْمِ قَبْلَ الْوَاوِ وَالْيَاءِ',
      matn: { src: 'DATA_KH_W24', from: 30, to: 40, check: 'مُنْذُ' },
      steps: [
        { t: 'teach', title: 'mundhu — two faces', page: 252,
          focus: [31, 32],
          points: [
            '**حَرْف جَارّ**: «مَا رَأَيْتُهُ مُنْذُ يَوْمِ الْجُمُعَةِ» — jarring the following noun.',
            '**مُضَاف إِلَى جُمْلَة**: «مَا زِلْتُ أَبْغِي الْعِلْمَ مُذْ أَنَا يَافِعٌ» — here مُذْ/مُنْذ is a ظَرْف annexed to a whole sentence.',
          ],
          after: 'Trigger: a single majrūr noun after it → جَارّ; a full جُمْلَة after it → a ظَرْف muḍāf.' },

        { t: 'teach', title: 'the nūn — three faces', page: 252,
          focus: [34, 35, 37],
          body: 'Beyond spelling, the نُون carries three grammatical jobs:',
          points: [
            '**ضَمِير مَرْفُوع لِلنِّسْوَة** (the feminine-plural subject): ﴿وَقَطَّعْنَ أَيْدِيَهُنَّ﴾.',
            '**نُون التَّأْكِيد** (heavy or light): «لَيُسْجَنَنَّ» — the light one is written as an alif in the muṣḥaf ﴿لَنَسْفَعًا﴾.',
            '**نُون الوِقَايَة** (maksūra, shields the speaker’s yāʾ from the verb’s ending): ﴿خَلَقَنِي فَهُوَ يَهْدِينِ﴾.',
          ] },

        { t: 'teach', title: 'naʿam — and the road on to the wāw & yāʾ', page: 253,
          focus: [39, 40],
          body: 'The last entry before the book’s final two letters:',
          points: [
            '**نَعَمْ** is a حَرْف of three faces — like **إِي** (taṣdīq of a report, iʿlām after a question, waʿd after a request) but **not restricted to an oath**.',
            'Next in the book come **الْوَاو** (ten faces) then **الْيَاء** (three) — covered in the tail course [[kh-wujuh-tail]] (ch 25).',
          ],
          after: 'This closes ch 24; ch 23 (working backward) picks up كَم → لَوْلَا.' },

        { t: 'mcq', q: 'In «مَا زِلْتُ أَبْغِي الْعِلْمَ مُذْ أَنَا يَافِعٌ», مُذ is …',
          choices: ['ظرف مضاف إلى جملة (اسمية: أنا يافع)', 'حرف جرّ', 'a redundant particle', 'ضمير'],
          correct: 0,
          why: 'A full sentence (أنا يافع) follows, so مُذ/منذ is a ظرف annexed to a جملة — not the جارّ, which would take a single majrūr noun.' },

        { t: 'mcq', q: 'The نون in ﴿خَلَقَنِي فَهُوَ يَهْدِينِ﴾ is …',
          choices: ['نون الوقاية — it protects the verb’s ending before ياء المتكلم', 'نون التوكيد', 'ضمير النسوة', 'نون التنوين'],
          correct: 0,
          why: 'The kasra-bearing نون sits between the verb and the speaker’s ي to “protect” the verb’s form — نون الوقاية (obligatory after a verb, اسم فعل, ليت, مِن, عن).' },

        { t: 'mcq', q: 'نَعَمْ differs from إي in that …',
          choices: ['نعم is not restricted to preceding an oath, whereas إي occurs only before القَسَم', 'نعم only affirms, إي only promises', 'نعم is a noun, إي is a particle', 'they are identical in every respect'],
          correct: 0,
          why: 'Both cover taṣdīq / iʿlām / waʿd, but إي never occurs except before a قَسَم («إي وربّي»), while نعم is unrestricted.' },

        { t: 'written',
          prompt: 'Give the two faces of مُنذ, the three of the نون, and how نعم relates to إي.',
          model: 'مُنذ: (1) حرف جارّ «ما رأيته منذ يوم الجمعة»; (2) ظرف مضاف إلى جملة «ما زلت أبغي العلم مذ أنا يافع». النون: (1) ضمير مرفوع للنسوة ﴿وقطّعن أيديهن﴾; (2) نون التأكيد (ثقيلة/خفيفة) «ليُسجننّ»، والخفيفة تُرسم ألفًا ﴿لنسفعًا﴾; (3) نون الوقاية ﴿خلقني فهو يهدين﴾. نعم: a particle of three faces (تصديق، إعلام، وعد) exactly like إي, except that إي is confined to occurring before a قَسَم while نعم is not.' },
      ],
    },
  ],
});
