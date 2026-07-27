/* ── Daram Learn — al-Kubrā fī an-Naḥw · الخاتمة · وجوه الكلمات · القسم 20: الهمزة → أنْ (pp. 233–237) ──
   Backward-pass course (ch 20) — the START of the alphabetical "faces" dictionary. Teach cards carry
   `page:` + an interactive matn panel (src: DATA_KH_W20 in ../books/kubra-nahw/khatima-wujuh-20.js,
   loaded in learn.html before this file). Notes source: books/kubra-nahw/notes/khatima_04_wujuh-al-kalimat.md. */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'kh-wujuh-20',
  num: 20,
  titleAr: 'وُجُوهُ الْكَلِمَاتِ: الْهَمْزَةُ ← أَنْ',
  titleEn: 'Faces of words — the hamzah → an',
  pages: '233–237',
  sections: [

    /* ═══ 1. الهمزة ═══ */
    {
      id: 'hamza',
      title: 'الْهَمْزَة',
      subtitle: 'مُفْتَتَحُ الْمُعْجَمِ · وَثَلَاثَةُ أَوْجُهٍ لِلْهَمْزَةِ',
      matn: { src: 'DATA_KH_W20', from: 1, to: 5, check: 'قَدْ' },
      steps: [
        { t: 'teach', title: 'The principle: one word, many faces', page: 233,
          focus: [1],
          ar: 'قَدْ يَكُونُ لِكَلِمَةٍ وَاحِدَةٍ وُجُوهٌ مُخْتَلِفَةٌ',
          arEn: 'One and the same word may have different faces.',
          points: [
            'This فَصْل is the book’s **disambiguation index**: an alphabetical list (الهَمْزَة → اليَاء) of words that wear more than one grammatical face.',
            'The skill is **not** memorising one meaning but reading the **context** that fixes which face is in front of you.',
            'ch 20 opens the dictionary; it runs forward to the tail (الْوَاو وَالْيَاء) in [[kh-wujuh-tail]] (ch 25).',
          ] },

        { t: 'teach', title: 'the hamzah — three faces', page: 233,
          focus: [3, 4, 5],
          points: [
            '**نِدَاء القَرِيب** (calling one near): «أَزَيْدُ».',
            '**الاسْتِفْهَام** (question): ﴿أَأَنْتُمْ أَعْلَمُ أَمِ اللَّهُ﴾.',
            '**لِلْمَصْدَر / التَّسْوِيَة** (heading a maṣdar-clause of “it is the same whether…”): ﴿سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ﴾.',
          ],
          after: 'The تَسْوِيَة hamzah pairs with أَم (equative), unlike the plain interrogative that expects an answer.' },

        { t: 'mcq', q: 'In ﴿سَوَاءٌ عَلَيْهِمْ أَأَنْذَرْتَهُمْ أَمْ لَمْ تُنْذِرْهُمْ﴾, the hamzah is …',
          choices: ['همزة التسوية heading a maṣdar-clause (“it is the same whether…”)', 'a plain interrogative expecting an answer', 'the vocative hamzah', 'a redundant letter'],
          correct: 0,
          why: 'After سواء, the hamzah + أم form an equative maṣdar (“their warning and non-warning are alike”) — التسوية, not a real question.' },

        { t: 'mcq', q: '«أَزَيْدُ» (meaning “O Zayd”) uses the hamzah as …',
          choices: ['نداء القريب — a vocative for someone near', 'استفهام', 'همزة التسوية', 'a doer-pronoun'],
          correct: 0,
          why: 'The bare hamzah on a name in a call = the vocative for one nearby (أزيدُ = يا زيدُ, for the قريب).' },

        { t: 'written',
          prompt: 'State the organising principle of this فصل, then give the three faces of the hamzah with an example of each.',
          model: 'المبدأ: قد يكون لكلمة واحدة وجوه مختلفة؛ وهذا الفصل معجمٌ لتمييز أوجه الكلمات بالسياق (الهمزة → الياء). الهمزة ثلاثة أوجه: (1) نداء القريب «أزيدُ»; (2) الاستفهام ﴿أأنتم أعلم أم الله﴾; (3) للمصدر/التسوية ﴿سواء عليهم أأنذرتهم أم لم تنذرهم﴾. وتمتاز همزة التسوية بأنها تُؤوَّل بمصدر وتقترن بـ أم المعادِلة.' },
      ],
    },

    /* ═══ 2. إذْ ═══ */
    {
      id: 'idh',
      title: 'إِذْ',
      subtitle: 'خَمْسَةُ أَوْجُهٍ — كُلُّهَا أَسْمَاء',
      matn: { src: 'DATA_KH_W20', from: 6, to: 12, check: 'إِذْ' },
      steps: [
        { t: 'teach', title: 'idh — five faces of a time-noun', page: 233,
          focus: [7, 8, 10],
          body: 'إِذْ is a noun added to a whole sentence; the first three are its iʿrāb-roles:',
          points: [
            '**مَفْعُول فِيه** (adverb, usually for the past): ﴿فَقَدْ نَصَرَهُ اللَّهُ إِذْ أَخْرَجَهُ الَّذِينَ كَفَرُوا﴾.',
            '**مَفْعُول بِه** (object, with a suppressed اذْكُر — the Qurʾānic norm): ﴿وَاذْكُرُوا إِذْ كُنْتُمْ قَلِيلًا﴾.',
            '**بَدَل**: ﴿وَاذْكُرْ … مَرْيَمَ إِذِ انْتَبَذَتْ﴾ — إِذْ substitutes for مَرْيَم.',
          ] },

        { t: 'teach', title: 'idh — surprise & causation', page: 234,
          focus: [11, 12],
          points: [
            '**لِلْمُفَاجَأَة** (after بَيْنا / بَيْنَما): «فَبَيْنَمَا الْعُسْرُ إِذْ دَارَتْ مَيَاسِيرُ» — “while there was hardship, **suddenly** ease turned round”.',
            '**لِلتَّعْلِيل** (“because”): ﴿وَإِذْ لَمْ يَهْتَدُوا بِهِ فَسَيَقُولُونَ…﴾.',
          ],
          after: 'A بَيْنَمَا before it → مُفَاجَأَة; a causal reading → تَعْلِيل; else an iʿrāb-role (فِيه / بِه / بَدَل).' },

        { t: 'mcq', q: 'In ﴿وَاذْكُرُوا إِذْ كُنْتُمْ قَلِيلًا﴾, إذْ is …',
          choices: ['مفعول به of the verb اذكروا (“remember the time when…”)', 'مفعول فيه / ظرف', 'بدل', 'حرف تعليل'],
          correct: 0,
          why: 'Here إذْ is the object of اذكروا — the commonest Qurʾānic pattern where a verb of remembrance takes إذْ as its مفعول به.' },

        { t: 'mcq', q: '«فَبَيْنَمَا الْعُسْرُ إِذْ دَارَتْ مَيَاسِيرُ» — إذْ is …',
          choices: ['للمفاجأة — it follows بينما and marks the sudden turn', 'للتعليل', 'مفعول فيه for the past', 'بدل'],
          correct: 0,
          why: 'إذْ الفجائية comes after بَيْنا/بَيْنَما to signal an unexpected event breaking in — “while…suddenly”.' },

        { t: 'written',
          prompt: 'Give the five faces of إذْ, and distinguish إذْ المفعول به from إذْ الظرفية.',
          model: 'إذْ خمسة أوجه (اسم مضاف إلى جملة): (1) مفعول فيه للماضي غالبًا ﴿إذ أخرجه الذين كفروا﴾; (2) مفعول به بفعل مقدّر اذكُر ﴿واذكروا إذ كنتم قليلًا﴾; (3) بدل ﴿واذكر مريم إذ انتبذت﴾; (4) للمفاجأة بعد بينا/بينما «فبينما العسر إذ دارت مياسير»; (5) للتعليل ﴿وإذ لم يهتدوا به فسيقولون﴾. الفرق: المفعول به منصوب المحلّ بفعل الذكر، والظرفية (مفعول فيه) قيدٌ زمانيّ لعاملها.' },
      ],
    },

    /* ═══ 3. إذا ═══ */
    {
      id: 'idha',
      title: 'إِذَا',
      subtitle: 'ثَلَاثَةُ أَوْجُهٍ: ظَرْف · مُفَاجَأَة · جَزَاء',
      matn: { src: 'DATA_KH_W20', from: 13, to: 16, check: 'إِذَا' },
      steps: [
        { t: 'teach', title: 'idhā — adverb, surprise, or requital', page: 234,
          focus: [14, 15, 16],
          points: [
            '**ظَرْف** (over a **verbal** sentence, often carrying شَرْط-sense): ﴿فَإِذَا أَفَضْتُمْ مِنْ عَرَفَاتٍ فَاذْكُرُوا اللَّهَ﴾.',
            '**حَرْف مُفَاجَأَة** (before a **nominal** sentence, preceded by فَاء, = الحَال): ﴿فَأَلْقَاهَا فَإِذَا هِيَ حَيَّةٌ تَسْعَى﴾.',
            '**حَرْف جَوَاب / جَزَاء** standing in place of the فَاء: ﴿فَإِذَا رَكِبُوا فِي الْفُلْكِ دَعَوُا اللَّهَ…﴾.',
          ],
          after: 'A verb after إِذَا → ظَرْف; a sudden nominal after فَاء → مُفَاجَأَة (the “إِذَا الفُجَائِيَّة”).' },

        { t: 'mcq', q: '﴿فَأَلْقَاهَا فَإِذَا هِيَ حَيَّةٌ تَسْعَى﴾ — إذا is …',
          choices: ['حرف مفاجأة (الفجائية) — before a nominal sentence, meaning “and behold”', 'ظرف for the future', 'حرف جزاء replacing the فاء', 'a conditional particle'],
          correct: 0,
          why: 'إذا الفجائية heads a nominal clause (هي حيّة) after a فاء and conveys الحال/surprise — “suddenly it was a serpent”.' },

        { t: 'mcq', q: 'Which إذا is the ظرفية (with شرط-sense)?',
          choices: ['﴿فَإِذَا أَفَضْتُمْ مِنْ عَرَفَاتٍ فَاذْكُرُوا اللَّهَ﴾', '﴿فَإِذَا هِيَ حَيَّةٌ تَسْعَى﴾', 'neither', 'both'],
          correct: 0,
          why: 'A فعل (أفضتم) follows and the sense is conditional-temporal (“when you pour forth…”), so this is إذا الظرفية, not the فجائية.' },

        { t: 'written',
          prompt: 'Give the three faces of إذا and the shape of the sentence that triggers each.',
          model: 'إذا ثلاثة أوجه: (1) ظرف يدخل على جملة فعلية وفيه معنى الشرط ﴿فإذا أفضتم من عرفات فاذكروا الله﴾; (2) حرف مفاجأة (فجائية) قبل جملة اسمية مسبوقة بالفاء بمعنى الحال ﴿فألقاها فإذا هي حية تسعى﴾; (3) حرف جواب/جزاء يقوم مقام الفاء ﴿فإذا ركبوا في الفلك دعوا الله﴾. فالفعل بعدها → ظرف، والاسمية المفاجئة بعد الفاء → فجائية.' },
      ],
    },

    /* ═══ 4. أَل + أَم ═══ */
    {
      id: 'al-am',
      title: 'أَلْ · أَمْ',
      subtitle: 'ثَلَاثَةُ أَوْجُهٍ لِكُلٍّ مِنْهُمَا',
      matn: { src: 'DATA_KH_W20', from: 18, to: 26, check: 'أَلْ' },
      steps: [
        { t: 'teach', title: 'al — the article that is not always the article', page: 235,
          focus: [19, 20, 21],
          points: [
            '**لِلتَّعْرِيف** (the definite article): «الرَّجُل».',
            '**اسْم مَوْصُول** (relative, on a participle): ﴿إِنَّ الْمُصَّدِّقِينَ وَالْمُصَّدِّقَاتِ…﴾ = الَّذِينَ تَصَدَّقُوا.',
            '**زَائِدَة** — either **لَازِمَة** (fixed in proper names ﴿اللَّاتَ وَالْعُزَّى﴾, relatives) or **غَيْر لَازِمَة** (for tafkhīm: القَاسِم، العَبَّاس).',
          ] },

        { t: 'teach', title: 'am — dialect article, equative, or disjunctive', page: 235,
          focus: [23, 24, 26],
          points: [
            '**أَدَاة تَعْرِيف** (Yemeni/Ḥimyarī dialect, = أَلْ): «لَيْسَ مِنَ امْبِرِّ امْصِيَامُ فِي امْسَفَرِ».',
            '**عَاطِفَة مُتَّصِلَة مُعَادِلَة** (paired with the interrogative hamzah, seeking taʿyīn): ﴿أَأَنْتُمْ أَعْلَمُ أَمِ اللَّهُ﴾.',
            '**مُنْقَطِعَة (ابْتِدَائِيَّة)** = بَلْ + hamzah, an إِضْرَاب انْتِقَالِيّ: ﴿أَمْ يَقُولُونَ افْتَرَاهُ بَلْ هُوَ الْحَقُّ﴾.',
          ],
          after: 'Note: إِضْرَاب بِـ بَلْ = إِبْطَال + انْتِقَال; إِضْرَاب بِـ أَم = انْتِقَال only.' },

        { t: 'mcq', q: 'In ﴿إِنَّ الْمُصَّدِّقِينَ…﴾, the أل on the participle is …',
          choices: ['اسم موصول (= الذين تصدّقوا)', 'أل التعريف الجنسية', 'أل زائدة لازمة', 'أل زائدة للتفخيم'],
          correct: 0,
          why: 'أل entering اسم الفاعل/المفعول is relative (الموصولة): الْمُصَّدِّقين = الذين تصدّقوا — it carries a صلة, not mere definiteness.' },

        { t: 'mcq', q: '﴿أَمْ يَقُولُونَ افْتَرَاهُ﴾ is أم …',
          choices: ['المنقطعة (= بل + همزة), an إضراب انتقالي', 'المتصلة المعادلة', 'أداة تعريف', 'عاطفة على مفرد'],
          correct: 0,
          why: 'No preceding همزة استفهام pairs with it; أم here pivots to a new question = بل + hamzah — the منقطعة (transition), not the equative متصلة.' },

        { t: 'mcq', q: 'What separates أم المتصلة from أم المنقطعة?',
          choices: ['المتصلة is paired with a preceding همزة seeking taʿyīn; المنقطعة = بل + همزة, a transition', 'المتصلة precedes a مفرد, المنقطعة a جملة', 'they are the same', 'المنقطعة is a definite article'],
          correct: 0,
          why: 'المتصلة المعادلة completes an “أ…أم…?” asking which of two; المنقطعة begins afresh (إضراب انتقالي) with the force of بل + hamzah.' },

        { t: 'written',
          prompt: 'Give the three faces of أل and the three of أم, with the trigger that identifies each أم.',
          model: 'أل ثلاثة: (1) للتعريف «الرجل»; (2) اسم موصول على المشتق ﴿إن المصّدّقين والمصّدّقات﴾ = الذين تصدّقوا; (3) زائدة، لازمة في الأعلام ﴿اللات والعزّى﴾ أو غير لازمة للتفخيم «القاسم، العبّاس». أم ثلاثة: (1) أداة تعريف في لغة حِمْير «امبرّ امصيام»; (2) عاطفة متّصلة معادلة تلي همزة الاستفهام وتطلب التعيين ﴿أأنتم أعلم أم الله﴾; (3) منقطعة = بل + همزة، إضراب انتقالي ﴿أم يقولون افتراه بل هو الحق﴾. فوجود همزة معادِلة قبلها → متّصلة، وإلّا → منقطعة.' },
      ],
    },

    /* ═══ 5. إمّا ═══ */
    {
      id: 'imma',
      title: 'إِمَّا',
      subtitle: 'وَجْهَانِ: مُرَكَّبَة شَرْطِيَّة · وَعَاطِفَة لِلتَّفْصِيل',
      matn: { src: 'DATA_KH_W20', from: 27, to: 29, check: 'إِمَّا' },
      steps: [
        { t: 'teach', title: 'immā — two faces', page: 236,
          focus: [28, 29],
          points: [
            '**مُرَكَّبَة** = إِنْ الشَّرْطِيَّة + مَا الزَّائِدَة: ﴿وَإِمَّا يَنْزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ﴾ — the verb is usually stressed with نُون التَّوْكِيد.',
            '**عَاطِفَة لِلتَّفْصِيل**: ﴿إِنَّا هَدَيْنَاهُ السَّبِيلَ إِمَّا شَاكِرًا وَإِمَّا كَفُورًا﴾.',
          ],
          after: 'Do not confuse the conditional إِمَّا (إِنْ + مَا) with the coordinating إِمَّا…وَإِمَّا (detailing two options).' },

        { t: 'mcq', q: '﴿وَإِمَّا يَنْزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ﴾ — إمّا is …',
          choices: ['المركّبة الشرطية (إنْ + ما), reinforced by نون التوكيد on the verb', 'العاطفة للتفصيل', 'a definite article', 'a redundant particle'],
          correct: 0,
          why: 'Here إمّا = إنْ الشرطية + ما الزائدة; the tell-tale is the شرط structure and the emphatic نون (ينزغنّك).' },

        { t: 'mcq', q: 'The إمّا…وإمّا in ﴿إِمَّا شَاكِرًا وَإِمَّا كَفُورًا﴾ is …',
          choices: ['عاطفة للتفصيل — listing two alternative states', 'شرطية مركّبة', 'أداة تعريف', 'حرف نفي'],
          correct: 0,
          why: 'The repeated إمّا…وإمّا detailing two possibilities (grateful / ungrateful) is the coordinating إمّا, not the conditional one.' },

        { t: 'written',
          prompt: 'Give the two faces of إمّا and the clue that separates them.',
          model: 'إمّا وجهان: (1) مركّبة من إنْ الشرطية وما الزائدة ﴿وإمّا ينزغنّك من الشيطان نزغ فاستعذ بالله﴾، ويغلب توكيد فعلها بالنون; (2) عاطفة للتفصيل، تُذكر مكرّرة إمّا…وإمّا ﴿إمّا شاكرًا وإمّا كفورًا﴾. القرينة: بنية الشرط والجواب → المركّبة، والتكرار في تعداد الاحتمالات → العاطفة.' },
      ],
    },

    /* ═══ 6. إنْ + أنْ ═══ */
    {
      id: 'in-an',
      title: 'إِنْ · أَنْ',
      subtitle: 'أَرْبَعَةُ أَوْجُهٍ لِكُلٍّ — وَخِتَامُ الْقِسْمِ',
      matn: { src: 'DATA_KH_W20', from: 31, to: 40, check: 'إِنْ' },
      steps: [
        { t: 'teach', title: 'in (kasra) — four faces', page: 236,
          focus: [32, 33, 34, 35],
          points: [
            '**لِلشَّرْط**: ﴿إِنْ يَنْتَهُوا يُغْفَرْ لَهُمْ مَا قَدْ سَلَفَ﴾. · **لِلنَّفْي** (= مَا, often with إِلّا/لَمَّا): ﴿إِنْ كُلٌّ إِلَّا كَذَّبَ الرُّسُلَ﴾.',
            '**مُخَفَّفَة مِنَ الثَّقِيلَة**: ﴿وَإِنْ كُنْتُمْ مِنْ قَبْلِهِ لَمِنَ الضَّالِّينَ﴾ — the لَام الفَارِقَة marks it off from the negating إِنْ.',
            '**زَائِدَة** (after مَا النَّافِيَة): «مَا إِنْ مَدَحْتُ مُحَمَّدًا بِمَقَالَتِي».',
          ] },

        { t: 'teach', title: 'an (fatḥa) — four faces', page: 237,
          focus: [37, 38, 39, 40],
          points: [
            '**مَصْدَرِيَّة** (naṣbing the مُضَارِع): ﴿أَلَا تُحِبُّونَ أَنْ يَغْفِرَ اللَّهُ لَكُمْ﴾. · **مُفَسِّرَة** (“that is”): ﴿وَنُودُوا أَنْ تِلْكُمُ الْجَنَّةُ…﴾.',
            '**مُخَفَّفَة مِنَ الثَّقِيلَة**: ﴿عَلِمَ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَى﴾.',
            '**زَائِدَة** (after لَمَّا): ﴿فَلَمَّا أَنْ جَاءَ الْبَشِيرُ…﴾.',
          ],
          after: 'This closes ch 20 — the front of the covered dictionary. Forward: ch 21 (إِي → خَلَا/عَدَا) and on to the tail.' },

        { t: 'mcq', q: 'In ﴿إِنْ كُلٌّ إِلَّا كَذَّبَ الرُّسُلَ﴾, إنْ is …',
          choices: ['نافية (= ما) — paired with إلّا: “each did nothing but deny…”', 'شرطية', 'مخففة من الثقيلة', 'زائدة'],
          correct: 0,
          why: 'إنْ النافية = ما, and the الّا after it confirms it: “there was none but denied”. No شرط, and no فارقة lām.' },

        { t: 'mcq', q: 'How is إنْ المخففة told apart from إنْ النافية in ﴿وَإِنْ كُنْتُمْ … لَمِنَ الضَّالِّينَ﴾?',
          choices: ['by the اللام الفارقة on the khabar (لَمِن), which marks the lightened affirmative', 'by the presence of إلّا', 'by a following شرط verb', 'they cannot be distinguished'],
          correct: 0,
          why: 'Without the فارقة lām, ﴿وإن كنتم…﴾ could read as negation; the لام on لَمِن fixes إنْ as المخففة من الثقيلة (affirmative).' },

        { t: 'mcq', q: '﴿عَلِمَ أَنْ سَيَكُونُ مِنْكُمْ مَرْضَى﴾ — أنْ is …',
          choices: ['مخففة من الثقيلة (its اسم a محذوف ضمير الشأن)', 'مصدرية ناصبة', 'مفسّرة', 'زائدة'],
          correct: 0,
          why: 'أنْ before a verb beginning with س/سوف (or قد/negation) is المخففة من أنّ, not the مصدرية (which would naṣb a bare مضارع).' },

        { t: 'written',
          prompt: 'Give the four faces of إنْ and the four of أنْ, and state one reliable trigger for each pair’s “lightened” face.',
          model: 'إنْ (المكسورة) أربعة: (1) للشرط ﴿إن ينتهوا يغفر لهم﴾; (2) للنفي = ما ﴿إن كلٌّ إلا كذّب الرسل﴾; (3) مخففة من الثقيلة ﴿وإن كنتم من قبله لمن الضالين﴾; (4) زائدة بعد ما «ما إن مدحت محمدًا». أنْ (المفتوحة) أربعة: (1) مصدرية ﴿أن يغفر الله لكم﴾; (2) مفسّرة ﴿أن تلكم الجنة﴾; (3) مخففة من الثقيلة ﴿علم أن سيكون منكم مرضى﴾; (4) زائدة بعد لمّا ﴿فلما أن جاء البشير﴾. المِفتاح: إنْ المخففة تصحبها اللام الفارقة، وأنْ المخففة يليها فعل مقرون بالسين/سوف/قد/حرف نفي.' },
      ],
    },
  ],
});
