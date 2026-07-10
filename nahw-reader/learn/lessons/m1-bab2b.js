/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الباب الثاني (٢ب): إنّ وأخواتها والنواسخ الحرفية (pp. 60–72) ──
   Authored from the Obsidian notes 58–71 (Nahw Fi Kubra). NO matn panels: pp.60–72 are not yet
   transcribed in the reader — teach cards use static ar:/arEn: blocks instead. When the reader
   catches up, add section `matn` + card `focus` per LESSON_SPEC.md. No bank steps yet either.   */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-bab-2b',
  titleAr: 'إِنَّ وَأَخَوَاتُهَا وَالنَّوَاسِخُ الْحَرْفِيَّةُ',
  titleEn: 'The Particle II — inna & sisters',
  pages: '60–72',
  sections: [

    /* ═══ 1. إلّا — one noun in naṣb ═══ */
    {
      id: 'illa',
      title: 'إلّا — the exception particle',
      subtitle: 'حرف ينصب اسمًا واحدًا',
      steps: [
        { t: 'teach', title: 'The second class: إلَّا',
          ar: 'القسمُ الثاني: حرفٌ ينصِبُ اسمًا واحدًا، وهو إلَّا',
          arEn: 'The second class: a particle that puts ONE noun in naṣb — illā.',
          body: 'After the jarr-particles (which drag one noun into jarr) comes a class of one: **إلَّا**, the particle of **exception (الاستثناء)**.',
          points: [
            'إلّا **excludes** the **مُستثنى** (the excepted item) from the ruling of the **مُستثنى منه**.',
            'The excepted noun is **منصوب**.',
          ],
          examples: [
            { ar: 'فَسَجَدُوا إِلَّا إِبْلِيسَ', en: 'they prostrated — except Iblīs', note: 'إبليسَ = مستثنى، منصوب' },
          ] },

        { t: 'teach', title: 'Just the naṣb for now',
          points: [
            'The full machinery of استثناء — **متصل/منقطع**, **تامّ/مفرَّغ** — comes later, in the chapter of **المنصوبات**.',
            'Here the book’s point is single: **إلّا operates النصب on one noun**.',
          ],
          after: 'One particle, one noun, one case: إلّا → مستثنى منصوب.' },

        { t: 'mcq', q: 'What does the second class of operating particles do?',
          choices: ['Puts one noun in naṣb — its only member is إلَّا', 'Puts the اسم in naṣb and raises the خبر', 'Drags a noun into jarr', 'Puts the مضارع in jazm'],
          correct: 0,
          why: 'Naṣb of the ism + rafʿ of the khabar is the THIRD class (إنّ and sisters); jarr was the first class. This class does naṣb on a single noun — إلّا.' },

        { t: 'mcq', q: 'In ﴿فَسَجَدُوا إِلَّا إِبْلِيسَ﴾, why is إبليسَ manṣūb?',
          choices: ['It is the مستثنى — إلّا excepts it from the ruling of the مستثنى منه', 'It is the مفعول به of سجدوا', 'It is the اسم of a نافية particle', 'It is مضاف'],
          correct: 0,
          why: 'The angels’ prostration is affirmed; إلّا pulls Iblīs OUT of that ruling — and the excepted noun takes naṣb.' },

        { t: 'mcq', q: 'The item from which the exception is made (the group that DID prostrate) is called…',
          choices: ['المستثنى منه', 'المستثنى', 'أداة الاستثناء', 'المفعول معه'],
          correct: 0,
          why: 'مستثنى منه = “that from which exception is made”. The excepted item itself is the مستثنى; إلّا is the أداة.' },

        { t: 'written',
          prompt: 'What is the second class of operating particles? Name its particle, state what it does, and illustrate with the book’s شاهد.',
          model: 'The second class is a particle that puts one noun in naṣb: إلَّا, the particle of exception (الاستثناء). It excludes the مستثنى from the ruling of the مستثنى منه, and the excepted noun is منصوب — ﴿فَسَجَدُوا إِلَّا إِبْلِيسَ﴾: all prostrated, and إلّا excepts إبليسَ (منصوب) from that ruling.' },
      ],
    },

    /* ═══ 2. إنّ & أنّ ═══ */
    {
      id: 'inna-anna',
      title: 'إنَّ & أنَّ — the two hamzas',
      subtitle: 'التأكيد · مواقع الكسر والفتح · ما يجوز فيه الوجهان',
      steps: [
        { t: 'teach', title: 'The third class opens: إنَّ',
          ar: 'الأوّل: إنَّ، وهي للتأكيدِ، ويُقال للتحقيقِ',
          arEn: 'The first: inna — for emphasis, also called confirmation.',
          body: 'The third class of operators: **particles that put the اسم in naṣb and raise the خبر**. First of the six is **إنَّ**.',
          points: [
            'It enters the nominal sentence to **emphasise/affirm** it (التأكيد، ويقال التحقيق).',
            'Its **اسم is منصوب**, its **خبر is مرفوع**.',
          ],
          examples: [
            { ar: 'إِنَّ اللهَ غَفُورٌ رَحِيمٌ', en: 'Truly Allah is Forgiving, Merciful', note: 'اللهَ منصوب · غفورٌ مرفوع' },
          ] },

        { t: 'teach', title: 'Where the KASRA-form (إِنَّ) sits',
          body: 'إنّ المكسورة occurs wherever a **full sentence** belongs (موضع الجملة):',
          points: [
            '**الابتداء حقيقةً** — genuinely opening the speech.',
            '**الابتداء حُكمًا** — effectively opening: after a **حرف تنبيه/زجر**, the **قَسَم**, the **قول**, **واو الحال**, **حتى الابتدائية**…',
            '…and in the **صلة**, the **نعت**, before the **لام المعلِّقة** ﴿واللهُ يعلمُ إنّكَ لَرسولُه﴾, after **إلّا** for حصر, after **حيث**, and in the خبر of an اسم عين.',
          ],
          examples: [
            { ar: 'قَالَ إِنِّي عَبْدُ اللهِ', en: 'he said: “I am the slave of Allah”', note: 'بعد القول' },
            { ar: 'وَالْقُرْآنِ الْحَكِيمِ ۝ إِنَّكَ لَمِنَ الْمُرْسَلِينَ', en: 'by the Wise Qurʾān — you are truly of the messengers', note: 'بعد القسم' },
          ] },

        { t: 'teach', title: 'The FATḤA-form: أنَّ',
          ar: 'الثاني: أنَّ، وهي حرفٌ مصدريٌّ للتأكيدِ',
          arEn: 'The second: anna — a maṣdarī particle of emphasis.',
          points: [
            'أنّ + its اسم + its خبر are interpreted as a **مصدر مؤوّل** — one single noun.',
            'So it occurs wherever a **مفرد** belongs: فاعلة، نائبة عن فاعل، مفعولة، مبتدأة، بعد حرف الجر، مضافًا إليها…',
            '…also خبر اسم معنى, after مذ/منذ, after «ما» المصدرية الظرفية, معطوفة/بدلًا من المفرد, after **لا جَرَمَ**, and after **إذا الفجائية**.',
          ],
          examples: [
            { ar: 'فَيَعْلَمُونَ أَنَّهُ الْحَقُّ مِنْ رَبِّهِمْ', en: 'they know THAT it is the truth — the clause = one object', note: 'مفعولة' },
            { ar: 'وَاشْهَدْ بِأَنَّا مُسْلِمُونَ', en: 'bear witness that we are Muslims', note: 'بعد حرف الجر' },
          ],
          after: 'The test: أنّ + clause = an interpreted NOUN (like الاسم المؤوّل of أنْ); إنّ keeps the clause a full SENTENCE.' },

        { t: 'teach', title: 'Where BOTH are allowed — and what changes',
          body: 'يجوزُ إنَّ المكسورةُ وأنَّ المفتوحةُ في مواضعَ، منها:',
          points: [
            'As a **علّة for a preceding sentence**: استغفِروا اللهَ أنّه/إنّه غفورٌ رحيمٌ; after **فاء الجزاء**; after **لا جَرَمَ** (فتح is the more common); after a **واو preceded by a sentence**; after **إذا الفجائية**.',
            '**كسر** → the clause is read as an **استئناف** — a fresh sentence.',
            '**فتح** → a **مصدر مؤوّل**, e.g. coordinated onto a preceding noun (عطفًا على المفرد).',
          ],
          examples: [
            { ar: 'يَسْتَبْشِرُونَ بِنِعْمَةٍ مِنَ اللهِ وَفَضْلٍ وَأَنَّ اللهَ لَا يُضِيعُ أَجْرَ الْمُؤْمِنِينَ', en: '…and (the fact) that Allah wastes not the believers’ reward', note: 'فتح: عطف على المفرد' },
          ],
          after: 'Both readings are grammatical — the choice shifts the MEANING between “a new statement” and “a coordinated noun-phrase”.' },

        { t: 'mcq', q: 'What is إنّ’s effect on the nominal sentence it enters?',
          choices: ['Its اسم becomes منصوب and its خبر مرفوع', 'Its اسم becomes مرفوع and its خبر منصوب', 'Both become منصوبين', 'It only adds emphasis, with no iʿrāb change'],
          correct: 0,
          why: 'اسم منصوب + خبر مرفوع is the signature of إنّ and sisters. رفع الاسم + نصب الخبر is كان’s (and ما المشبهة بليس’s) pattern; two naṣbs is أفعال القلوب.' },

        { t: 'mcq', q: 'Why the kasra in ﴿قَالَ إِنِّي عَبْدُ اللهِ﴾?',
          choices: ['It falls after القول — a position where a full sentence belongs', 'Because قال is a past verb', 'Because the اسم is a pronoun', 'It should actually be فتح'],
          correct: 0,
          why: 'What is said is a complete sentence, so the spot after القول is موضع جملة → إنّ المكسورة (الابتداء حكمًا).' },

        { t: 'mcq', q: 'And why the fatḥa in ﴿وَاشْهَدْ بِأَنَّا مُسْلِمُونَ﴾?',
          choices: ['After a حرف جرّ a single noun belongs — أنّ + clause = مصدر مؤوّل', 'Because اشهد is a command', 'The قسم requires فتح', 'Both forms would mean the same here'],
          correct: 0,
          why: 'The بـ needs a مجرور — a NOUN slot. Only the fatḥa-form turns its clause into an interpreted noun (بأنّا مسلمون ≈ بإسلامِنا).' },

        { t: 'mcq', q: 'The core difference between إنَّ and أنَّ:',
          choices: ['أنّ + clause = interpreted noun (مصدر مؤوّل); إنّ keeps the clause a full sentence', 'إنّ emphasises, أنّ does not', 'أنّ is for verbs, إنّ for nouns', 'They differ only in pronunciation'],
          correct: 0,
          why: 'Both are للتأكيد. The split is positional: أنّ is a حرف مصدري, so it sits in مفرد-slots; إنّ sits in جملة-slots.' },

        { t: 'mcq', q: 'استغفِروا اللهَ — إنّه/أنّه غفورٌ رحيمٌ. Both are valid. What changes?',
          choices: ['كسر = a fresh statement (استئناف); فتح = a مصدر (“because of His being forgiving”)', 'كسر is correct, فتح is a solecism', 'فتح = a fresh statement; كسر = a مصدر', 'Nothing — the meaning is identical'],
          correct: 0,
          why: 'This is one of the مواضع يجوز فيها الوجهان (causal علّة). The hamza choice IS the meaning choice: new sentence vs interpreted noun.' },

        { t: 'mcq', q: 'After لا جَرَمَ — as in ﴿لَا جَرَمَ أَنَّ اللهَ يَعْلَمُ﴾ — the more common form is…',
          choices: ['الفتح (أنَّ)', 'الكسر (إنَّ)', 'Both are equally common', 'Neither — لا جرم takes لام'],
          correct: 0,
          why: 'لا جرم is one of the two-way positions, but the book notes الغالب الفتح — hence the revealed reading أنَّ.' },

        { t: 'written',
          prompt: 'Define إنَّ and أنَّ, state where each occurs (with one example each), and explain the rule for positions where both are permitted.',
          model: 'إنَّ is for emphasis (التأكيد، ويقال التحقيق): it makes its اسم منصوب and its خبر مرفوع — ﴿إنَّ اللهَ غفورٌ رحيمٌ﴾. The kasra-form occurs wherever a full sentence belongs (الابتداء حقيقةً أو حكمًا — after القول، القسم، حرف التنبيه، واو الحال…): ﴿قال إنّي عبدُ اللهِ﴾. أنَّ is a حرف مصدري للتأكيد: it and its اسم and خبر are interpreted as a مصدر مؤوّل, so it occurs wherever a single noun (مفرد) belongs — فاعلة، مفعولة، بعد حرف الجر…: ﴿واشهَدْ بأنّا مسلمونَ﴾. In some positions both are valid (علّة لجملة سابقة، بعد فاء الجزاء، بعد لا جرم، بعد واو مسبوقة بجملة، بعد إذا الفجائية): كسر reads the clause as استئناف (a fresh sentence); فتح makes it a مصدر مؤوّل, e.g. coordinated onto a preceding noun.' },
      ],
    },

    /* ═══ 3. مسائل إنّ وأخواتها ═══ */
    {
      id: 'masail-inna',
      title: 'Three rules of إنّ & sisters',
      subtitle: 'توسّط الخبر · العطف على الاسم · الباء في خبر أنّ',
      steps: [
        { t: 'teach', title: '1 · Fronting a شبه-جملة khabar',
          body: 'When إنّ’s خبر is a **شبه جملة** (jārr-majrūr or ẓarf):',
          points: [
            'اسم **definite** → fronting the خبر is **permitted**.',
            'اسم **indefinite** → fronting it is **obligatory** (as with the plain mubtadaʾ).',
          ],
          examples: [
            { ar: 'إِنَّ إِلَيْنَا إِيَابَهُمْ', en: 'truly to Us is their return', note: 'اسم معرفة → جائز' },
            { ar: 'إِنَّ فِي ذَلِكَ لَعِبْرَةً لِأُولِي الْأَبْصَارِ', en: 'in that is surely a lesson…', note: 'اسم نكرة → واجب' },
          ] },

        { t: 'teach', title: '2 · Coordinating onto إنّ’s اسم',
          body: 'A noun may be coordinated onto the اسم of إنّ in two ways — **before or after** the خبر is complete:',
          points: [
            'On the **لفظ of إنّ** → naṣb: ﴿إنَّ اللهَ حقٌّ **والساعةَ** لا ريبَ فيها﴾ (Ḥamza’s reading); before completion: ﴿إنَّ اللهَ **وملائكتَه** يُصلُّونَ على النبيِّ﴾.',
            'On the **ابتداء** → rafʿ: ﴿إنَّا لَمبعوثونَ **أو آباؤُنا** الأوّلونَ﴾; before completion: ﴿إنَّ الذينَ آمنوا **والصابئونَ**…﴾.',
          ] },

        { t: 'teach', title: '3 · The باء on أنّ’s khabar',
          body: 'The **redundant باء** may enter the خبر of أنَّ:',
          examples: [
            { ar: 'أَوَلَمْ يَرَوْا أَنَّ اللهَ الَّذِي خَلَقَ السَّمَوَاتِ وَالْأَرْضَ … بِقَادِرٍ عَلَى أَنْ يُحْيِيَ الْمَوْتَى', en: '…is well able to give life to the dead', note: 'بِقادرٍ = خبر أنّ، والباء زائدة' },
          ],
          after: 'Same باء الزائدة already met in the jarr chapter — here its host is خبر أنّ.' },

        { t: 'mcq', q: 'In ﴿إِنَّ فِي ذَلِكَ لَعِبْرَةً﴾, why does the خبر (في ذلك) come BEFORE the اسم?',
          choices: ['The اسم is indefinite and the خبر a شبه جملة — fronting is obligatory', 'For emphasis only — it could equally follow', 'Because of the لام on لَعبرةً', 'The خبر always precedes with إنّ'],
          correct: 0,
          why: 'With a definite اسم (﴿إنَّ إلينا إيابَهم﴾) fronting is merely permitted; the indefinite اسم makes it واجب.' },

        { t: 'mcq', q: '﴿إِنَّ اللهَ وَمَلَائِكَتَهُ يُصَلُّونَ عَلَى النَّبِيِّ﴾ — why is ملائكتَه manṣūb?',
          choices: ['It is coordinated on the لفظ of إنّ’s اسم — even before the خبر is complete', 'It is a second خبر', 'It is مفعول به of يصلّون', 'It must be a scribal variant'],
          correct: 0,
          why: 'عطف على اسم إنّ is valid on the لفظ (naṣb) or on the ابتداء (rafʿ), both before and after استكمال الخبر. Here the لفظ was chosen.' },

        { t: 'mcq', q: 'And in ﴿إِنَّ الَّذِينَ آمَنُوا … وَالصَّابِئُونَ﴾ — why is الصابئون marfūʿ?',
          choices: ['It is coordinated on the ابتداء (the underlying mubtadaʾ), not on إنّ’s لفظ', 'It is the خبر of إنّ', 'إنّ has been neutralised by ما', 'Rafʿ here is an error'],
          correct: 0,
          why: 'The rafʿ option: coordination on the ابتداء. The naṣb option (on the لفظ) appears in ﴿إنَّ اللهَ وملائكتَه﴾ — the two ayahs showcase the two ways.' },

        { t: 'mcq', q: 'The باء of ﴿… بِقَادِرٍ عَلَى أَنْ يُحْيِيَ الْمَوْتَى﴾ is…',
          choices: ['a redundant باء entering the خبر of أنّ', 'باء السببية', 'باء القسم', 'the باء of التعدية'],
          correct: 0,
          why: 'قادر is really the خبر of أنّ (…that Allah is able); the باء is زائدة — the third مسألة of this chapter.' },

        { t: 'written',
          prompt: 'State the rule for fronting the خبر of إنّ when it is a شبه جملة, with the two Qurʾānic examples.',
          model: 'When the خبر of إنّ is a شبه جملة: if the اسم is definite, fronting the خبر is permitted — ﴿إنَّ إلينا إيابَهم﴾; if the اسم is indefinite, fronting is obligatory — ﴿إنَّ في ذلك لَعِبرةً لأولي الأبصارِ﴾.' },
      ],
    },

    /* ═══ 4. The remaining sisters ═══ */
    {
      id: 'akhawat',
      title: 'كأنّ · لكنّ · لعلّ · ليت',
      subtitle: 'التشبيه · الاستدراك · التوقّع · التمنّي',
      steps: [
        { t: 'teach', title: 'الثالث: كأنَّ — likening',
          ar: 'الثالثُ: كأنَّ، وهي حرفٌ للتشبيهِ',
          arEn: 'The third: ka-anna — the particle of likening.',
          points: [
            'كأنّ = **كاف التشبيه + أنَّ** fused into one verb-resembling particle: اسم منصوب + خبر مرفوع, asserting the اسم is LIKE the خبر.',
            'Related point: **أنَّ can come بمعنى لعلَّ** — ﴿وما يُشعِرُكم أنّها إذا جاءت لا يؤمنونَ﴾ (= لعلَّها).',
          ],
          examples: [
            { ar: 'الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ', en: 'the glass — as if it were a brilliant star' },
          ] },

        { t: 'teach', title: 'الرابع: لكنَّ — rectification',
          ar: 'الرابعُ: لكنَّ، وهي حرفٌ للاستدراكِ',
          arEn: 'The fourth: lākinna — the particle of rectification.',
          points: [
            '**الاستدراك** = following a first statement with one that removes a **false impression** the first might suggest (of affirmation or negation).',
            'It is **usually preceded by الواو** in the Qurʾān.',
          ],
          examples: [
            { ar: 'مَا زَيْدٌ قَوِيًّا لَكِنَّهُ شُجَاعٌ', en: '“Zayd is not strong” might suggest cowardice — “…but he is brave” removes it' },
            { ar: 'وَمَا كَفَرَ سُلَيْمَانُ وَلَكِنَّ الشَّيَاطِينَ كَفَرُوا', en: 'Sulaymān did not disbelieve — but the devils disbelieved' },
          ] },

        { t: 'teach', title: 'الخامس: لعلَّ — expectation',
          ar: 'الخامسُ: لعلَّ، وهي حرفٌ للتوقُّعِ',
          arEn: 'The fifth: laʿalla — the particle of expectation.',
          points: [
            'Expecting the **liked** = **الترجّي** (hope): ﴿واتَّقوا اللهَ لعلَّكم تُرحَمونَ﴾; expecting the **disliked** = **الإشفاق** (dread).',
            'It also comes for **التعليل** (purpose) ﴿وافعَلوا الخيرَ لعلَّكم تُفلِحونَ﴾, and even **بمعنى كأنَّ**.',
            'It may be lightened to **عَلَّ**.',
          ],
          examples: [
            { ar: 'فَلَعَلَّكَ بَاخِعٌ نَفْسَكَ عَلَى آثَارِهِمْ', en: 'perhaps you would grieve yourself to death over them', note: 'إشفاق — a disliked outcome' },
          ] },

        { t: 'teach', title: 'السادس: ليتَ — wishing',
          ar: 'السادسُ: ليتَ، وهي حرفٌ للتمنّي، وهو طلبُ ما لا طمعَ فيه',
          arEn: 'The sixth: layta — the particle of wishing: seeking what one has no real hope of.',
          points: [
            '**التمنّي** targets the unattainable or far-fetched — «ليتَ الشبابَ يعودُ يومًا».',
            'الغالب أن يسبقَها **«يا»**: ﴿يا ليتَني لم أُوتَ كتابِيَه﴾.',
          ],
          after: 'Contrast: ليت = wishing the unattainable (تمنٍّ); لعلّ = expecting the attainable (ترجٍّ).' },

        { t: 'mcq', q: '﴿الزُّجَاجَةُ كَأَنَّهَا كَوْكَبٌ دُرِّيٌّ﴾ — كأنّ conveys…',
          choices: ['التشبيه — the glass is likened to a star', 'التأكيد — the glass really is a star', 'الاستدراك', 'التمنّي'],
          correct: 0,
          why: 'كأنّ is كاف التشبيه fused with أنّ: it asserts the اسم is LIKE the خبر, not that it IS it.' },

        { t: 'mcq', q: 'Why لكنّ in «مَا زَيْدٌ قَوِيًّا لَكِنَّهُ شُجَاعٌ»?',
          choices: ['The negation might suggest cowardice — لكنّ removes that false impression (استدراك)', 'To emphasise the negation', 'To liken Zayd to a brave man', 'To wish Zayd were strong'],
          correct: 0,
          why: 'That is exactly الاستدراك: a second statement removing a wrong inference — from the first’s affirmation or negation.' },

        { t: 'mcq', q: 'In ﴿فَلَعَلَّكَ بَاخِعٌ نَفْسَكَ﴾ لعلّ expresses…',
          choices: ['الإشفاق — dread of a disliked outcome', 'الترجّي — hope for a liked outcome', 'التعليل', 'التشبيه'],
          correct: 0,
          why: 'توقّع splits by the thing expected: liked → ترجٍّ (﴿لعلَّكم تُرحَمون﴾); disliked → إشفاق, as here (grieving oneself to death).' },

        { t: 'mcq', q: 'ليت vs لعلّ — the difference is…',
          choices: ['ليت wishes what one has no real hope of; لعلّ expects the attainable', 'ليت is for the future, لعلّ for the past', 'لعلّ wishes the impossible; ليت hopes', 'No difference — both are التمنّي'],
          correct: 0,
          why: 'التمنّي (ليت) = طلب ما لا طمع فيه — «ليت الشبابَ يعود»; الترجّي/التوقّع (لعلّ) targets what may realistically occur.' },

        { t: 'mcq', q: 'What usually precedes ليت — as in ﴿يَا لَيْتَنِي لَمْ أُوتَ كِتَابِيَهْ﴾?',
          choices: ['«يا»', 'الواو', 'الفاء', 'قد'],
          correct: 0,
          why: 'الغالب أن يسبقها يا. (And recall from Bāb 1: that يا before ليت is NOT vocative — a tanbīh particle.)' },

        { t: 'written',
          prompt: 'Name the four sisters كأنّ، لكنّ، لعلّ، ليت with the meaning of each and one example.',
          model: 'كأنَّ: حرف للتشبيه — ﴿الزجاجةُ كأنّها كوكبٌ دُرِّيٌّ﴾. لكنَّ: حرف للاستدراك, removing a false impression left by a preceding statement — ما زيدٌ قويًّا لكنّه شجاعٌ (and it is usually preceded by الواو: ﴿ولكنَّ الشياطينَ كفروا﴾). لعلَّ: حرف للتوقّع — الترجّي in the liked ﴿لعلَّكم تُرحَمونَ﴾ and الإشفاق in the disliked ﴿فلعلَّك باخعٌ نفسَك﴾. ليتَ: حرف للتمنّي, seeking what one has no real hope of — ليتَ الشبابَ يعودُ يومًا; usually preceded by يا. All make their اسم منصوب and خبر مرفوع.' },
      ],
    },

    /* ═══ 5. Resemblance to the verb & takhfīf ═══ */
    {
      id: 'mushabbaha',
      title: 'Why “verb-like”? — and the lightened forms',
      subtitle: 'أوجه الشبه بالفعل · تخفيف إنّ وأنّ وكأنّ · ما الكافّة',
      steps: [
        { t: 'teach', title: 'الحروف المشبَّهة بالفعل — the resemblance',
          body: 'Why are إنَّ، أنَّ، كأنَّ، لكنَّ، لعلَّ، ليت called **“resembling the verb”**? Five points:',
          points: [
            'Each **carries a verb’s meaning** (≈ أُؤكِّدُ، أُشبِّهُ، أستدرِكُ، أترجَّى، أتمنَّى) — and each is **three letters or more**, like a verb.',
            'They are **مبنيّة على الفتح** — ending in fatḥa like the past verb.',
            'A **naṣb-pronoun** attaches to them (إنَّكَ) with the **نون الوقاية** (إنَّني ≈ خلقَني) — and they **operate رفع ونصب** like a verb.',
          ],
          after: 'And like إنّ itself: these particles claim **صدر الكلام** — their معمول can never precede them.' },

        { t: 'teach', title: 'تخفيف إنَّ → إنْ',
          points: [
            'After lightening, the **default is الإهمال** (no operation); **الإعمال is permitted** — ﴿وإنْ كُلًّا لَمّا لَيُوَفِّيَنَّهُم…﴾ in the naṣb reading.',
            'When it does not operate, the **لام الفارقة** in its خبر distinguishes it from **إنْ النافية**.',
            'The lightened إنْ may enter a nominal sentence.',
          ],
          examples: [
            { ar: 'وَإِنْ نَظُنُّكَ لَمِنَ الْكَاذِبِينَ', en: '“indeed we think you one of the liars” — the لام marks إنْ as the lightened إنَّ, not negation' },
          ] },

        { t: 'teach', title: 'تخفيف أنَّ → أنْ and كأنَّ → كأنْ',
          points: [
            'أنْ المخففة **still operates**: its اسم is a deleted **ضمير الشأن**, its خبر a **sentence** — nominal ﴿وآخِرُ دعواهم أنِ الحمدُ لله﴾, or verbal with a rigid/duʿāʾ verb ﴿وأن ليسَ للإنسانِ إلا ما سعى﴾.',
            'Otherwise a **separator** stands before the verb: **قد** ﴿ونعلمُ أنْ قد صدَقتَنا﴾, a **حرف تنفيس** ﴿علِمَ أنْ سيكونُ منكم مرضى﴾, **لو**, or a **negation** (لم/لا/لن).',
            'كأنْ likewise operates on a deleted ضمير الشأن, usually separated by **لم/قد**: ﴿كأنْ لم يلبَثوا إلا ساعةً﴾.',
          ] },

        { t: 'teach', title: '«ما» الكافّة',
          points: [
            'ما may attach to these particles and **stop their operation** (تكفُّها عن العمل): ﴿إنّما إلهُكمُ اللهُ﴾ — إله is مرفوع, not منصوب.',
            'It also **lets them precede verbs**: ﴿إنّما يَتقبَّلُ اللهُ من المتقينَ﴾.',
            'With **ليتما**, operation afterwards is optional.',
          ] },

        { t: 'mcq', q: 'Which of these is NOT one of the ways إنّ & sisters resemble the verb?',
          choices: ['They accept tanwīn like a noun', 'They are built on fatḥa like the past verb', 'A naṣb-pronoun and نون الوقاية attach to them', 'They carry a verb’s meaning and operate رفع and نصب'],
          correct: 0,
          why: 'Tanwīn is a NOUN sign — irrelevant here. The five وجوه: verb-meaning · بناء على الفتح · attached naṣb-pronoun + نون الوقاية · operating رفع ونصب · three letters or more.' },

        { t: 'mcq', q: 'What is the لام in ﴿وَإِنْ نَظُنُّكَ لَمِنَ الْكَاذِبِينَ﴾?',
          choices: ['اللام الفارقة — distinguishing the lightened إنْ from إنْ النافية', 'لام الجحود', 'لام الأمر', 'لام القسم'],
          correct: 0,
          why: 'A bare إنْ could read as negation (“we do NOT think you…” — the opposite!). The فارقة lam marks the خبر of the non-operating lightened إنْ.' },

        { t: 'mcq', q: 'After إنَّ is lightened to إنْ, the default is…',
          choices: ['الإهمال — with الإعمال still permitted', 'الإعمال — with الإهمال forbidden', 'It becomes a jazm particle', 'It becomes ما الكافّة'],
          correct: 0,
          why: 'Default إهمال; the reading ﴿وإنْ كُلًّا لَمّا…﴾ with naṣb of كلًّا shows إعمال remains possible.' },

        { t: 'mcq', q: 'In ﴿وَنَعْلَمُ أَنْ قَدْ صَدَقْتَنَا﴾, what is قد doing after أنْ?',
          choices: ['Separating the lightened أنْ from its verbal-sentence خبر — its اسم being a deleted ضمير الشأن', 'Emphasising the past verb only, unrelated to أنْ', 'Turning أنْ into a ناصبة', 'Nothing — قد is redundant'],
          correct: 0,
          why: 'أنْ المخففة keeps operating on a deleted ضمير الشأن; a خبر that is a normal verbal sentence must be separated by قد / تنفيس / لو / negation.' },

        { t: 'mcq', q: '﴿إِنَّمَا إِلَهُكُمُ اللهُ﴾ — why is إلهُكم marfūʿ after إنّ?',
          choices: ['ما الكافّة has stopped إنّ’s operation', 'It is the خبر, fronted', 'إنّ here is the lightened إنْ', 'The rafʿ is a rare reading'],
          correct: 0,
          why: 'The كافّة ما neutralises the particle (and even lets it precede verbs: ﴿إنّما يتقبَّلُ اللهُ…﴾). Only ليتما keeps operation optional.' },

        { t: 'written',
          prompt: 'Why are إنّ and its sisters called الحروف المشبهة بالفعل? List the points of resemblance.',
          model: 'Five points: (1) each carries a verb’s meaning — أُؤكِّد (إنّ/أنّ)، أُشبِّه (كأنّ)، أستدرك (لكنّ)، أترجَّى (لعلّ)، أتمنَّى (ليت); (2) their endings are built on fatḥa (مبنية على الفتح) like the past verb; (3) naṣb-pronouns attach to them — إنَّكَ — with the نون الوقاية (إنّني، like خلقني); (4) they operate رفع ونصب as a verb does; (5) they are three letters or more. They also claim صدر الكلام, so their معمول cannot precede them.' },
      ],
    },

    /* ═══ 6. لا لنفي الجنس ═══ */
    {
      id: 'la-jins',
      title: 'لا of genus-negation',
      subtitle: 'لا التبرئة · شروط عملها · تكرارها',
      steps: [
        { t: 'teach', title: 'السابع: لا لنفي الجنس',
          ar: 'السابعُ: لا لنفيِ الجنسِ',
          arEn: 'The seventh: lā that negates the genus.',
          body: 'The seventh (and last) particle that puts the **اسم in naṣb** and **raises the خبر** — but this one **negates the entire genus**.',
          points: [
            'Also called **لا التَّبرِئة**: a total, categorical negation — تنصيصٌ على استغراق النفي.',
            'It does **not operate** when it falls **between a جارّ and its مجرور**: اللهمَّ أدخِلْنا الجنةَ **بلا** حسابٍ.',
          ],
          examples: [
            { ar: 'لَا فَاعِلَ شَرٍّ فَائِزٌ', en: 'no doer of evil — of any kind — succeeds', note: 'فاعلَ منصوب · فائزٌ مرفوع' },
          ] },

        { t: 'teach', title: 'Two conditions for its operation',
          points: [
            'The negation must be **of the genus** — if it negates **one** (للوحدة), لا works like **ليس** instead (raising the اسم, naṣb on the خبر): «لا رجلٌ قائمًا بل رجلانِ».',
            'Its اسم must be **directly attached** — if separated, لا is **مهملة** (neutralised) and must be **repeated**: ﴿لا فيها غَوْلٌ ولا هم عنها يُنزَفونَ﴾.',
          ] },

        { t: 'teach', title: 'When لا is repeated',
          body: 'Repeated **without separation**, both faces are valid:',
          examples: [
            { ar: 'فَلَا رَفَثَ وَلَا فُسُوقَ وَلَا جِدَالَ فِي الْحَجِّ', en: 'operating (إعمال): the nouns are منصوبة on fatḥ' },
            { ar: 'فَلَا خَوْفٌ عَلَيْهِمْ وَلَا هُمْ يَحْزَنُونَ', en: 'neutralised (إهمال): خوفٌ is مرفوع' },
          ] },

        { t: 'mcq', q: 'What does لا لنفي الجنس do to اسمها and خبرها?',
          choices: ['اسم منصوب + خبر مرفوع — like إنّ and sisters', 'اسم مرفوع + خبر منصوب — like ليس', 'Both منصوبان', 'It has no iʿrāb effect'],
          correct: 0,
          why: 'It is the SEVENTH of the class that operates like إنّ (naṣb + rafʿ). The ليس-pattern belongs to ما، لا، إنْ، لات — and to لا itself only when it negates a single unit.' },

        { t: 'mcq', q: '«لا رجلٌ قائمًا بل رجلانِ» — why rafʿ then naṣb here?',
          choices: ['The negation is للوحدة (of one), so لا operates like ليس, not like إنّ', 'The speaker erred', 'بل cancels لا’s operation', 'رجل is definite'],
          correct: 0,
          why: 'The trap: same word لا, two grammars. “Not ONE man — rather two” negates a unit, not the genus → the ليس-pattern (اسم مرفوع، خبر منصوب).' },

        { t: 'mcq', q: 'In ﴿لَا فِيهَا غَوْلٌ﴾ why is غولٌ marfūʿ, and why is لا repeated?',
          choices: ['لا is separated from its اسم → neutralised, and must then be repeated', 'غول is the خبر', 'The لا is لا الناهية', 'Repetition is merely stylistic'],
          correct: 0,
          why: 'Condition 2: the اسم must directly follow لا. Here فيها intervenes → لا مهملة, and the rule requires its repetition (ولا هم عنها يُنزَفون).' },

        { t: 'mcq', q: '﴿فَلَا رَفَثَ﴾ (naṣb) but ﴿فَلَا خَوْفٌ﴾ (rafʿ) — how are both correct?',
          choices: ['When لا is repeated without separation, both إعمال and إهمال are valid', 'One of the two readings is weak', 'رفث is a verb', 'خوف is definite'],
          correct: 0,
          why: 'تكرار لا bare of separation opens both doors: operate (فلا رفثَ ولا فسوقَ) or neutralise (فلا خوفٌ عليهم).' },

        { t: 'mcq', q: 'In «أدخِلْنا الجنةَ بِلَا حسابٍ», does لا operate?',
          choices: ['No — لا falling between a جارّ and its مجرور does not operate', 'Yes — حساب is its منصوب اسم', 'Yes — it works like ليس here', 'It becomes لا الناهية'],
          correct: 0,
          why: 'The بـ governs حسابٍ (jarr); a لا sandwiched between جارّ and مجرور is inert.' },

        { t: 'written',
          prompt: 'Define لا لنفي الجنس, state the two conditions for its operation, and give what happens when each condition fails.',
          model: 'لا لنفي الجنس (also لا التبرئة) negates the entire genus categorically (تنصيص على استغراق النفي), putting its اسم in naṣb and raising its خبر — لا فاعلَ شرٍّ فائزٌ. Conditions: (1) the negation must be of the genus — if it is للوحدة it operates like ليس: لا رجلٌ قائمًا بل رجلانِ; (2) its اسم must be directly attached — if separated, لا is neutralised and must be repeated: ﴿لا فيها غولٌ ولا هم عنها يُنزَفونَ﴾. When repeated without separation, both إعمال ﴿فلا رفثَ ولا فسوقَ﴾ and إهمال ﴿فلا خوفٌ عليهم﴾ are valid; and it does not operate between a جارّ and مجرور (بلا حسابٍ).' },
      ],
    },

    /* ═══ 7. المشبهات بليس & the five نواسخ ═══ */
    {
      id: 'laysa-nawasikh',
      title: 'The ليس-like particles & the five نواسخ',
      subtitle: 'ما · لا · لات · إنْ — then the abrogators assembled',
      steps: [
        { t: 'teach', title: 'The fourth class: raising the اسم, naṣb on the خبر',
          ar: 'القسمُ الرابعُ: حروفٌ ترفعُ الاسمَ وتنصبُ الخبرَ',
          arEn: 'The fourth class: particles that raise the ism and put the khabar in naṣb.',
          body: 'Four particles resemble **ليس** — negating, entering on mubtadaʾ + khabar, and working like it: **ما، لا، إنْ، لات**.',
          points: [
            '**ما الحجازية**: the Ḥijāzīs operate it; Banū Tamīm do not.',
            '**لا** operates mostly **in poetry only**: «تَعَزَّ فلا شيءٌ على الأرضِ باقيا».',
          ],
          examples: [
            { ar: 'وَمَا رَبُّكَ بِظَلَّامٍ لِلْعَبِيدِ', en: 'your Lord is not at all unjust to the slaves', note: 'ربُّك مرفوع · بظلّامٍ خبر (بباء زائدة)' },
          ] },

        { t: 'teach', title: 'Conditions of ما — and the odd pair لات & إنْ',
          points: [
            'ما operates only if: its **اسم precedes the خبر**; it is **not joined to the redundant إنْ** («ما إنْ أنتم قائمون» ✗); and its **خبر is not joined to إلّا** — ﴿وما محمدٌ **إلّا** رسولٌ﴾ ✗.',
            '**لاتَ** is specific to **الحين** (time), its اسم usually deleted: ﴿ولاتَ حينَ مَناصٍ﴾ = ليس الحينُ حينَ مناصٍ.',
            '**إنْ النافية** also operates like ليس, on the same conditions.',
          ] },

        { t: 'teach', title: 'النواسخ — the full set of five',
          ar: 'تُسمَّى العواملُ الداخلةُ على المبتدأِ والخبرِ نواسخَ، وهي خمسٌ',
          arEn: 'The operators entering on the mubtadaʾ and khabar are called “abrogators” — five.',
          points: [
            '**أفعال القلوب** → both become **مفعولين** (naṣb + naṣb); **الأفعال الناقصة** (كان…) → اسم مرفوع + خبر منصوب.',
            '**الحروف المشبهة بالفعل** (إنّ…) and **لا لنفي الجنس** → اسم منصوب + خبر مرفوع.',
            '**الحروف المشبهة بليس** (ما، لا، إنْ، لات) → اسم مرفوع + خبر منصوب.',
          ],
          after: 'They “abrogate” (نسخ) the original مبتدأ/خبر ruling and impose a new one — hence نواسخ. This closes the particles operating on the NOUN; next come those operating on the VERB.' },

        { t: 'mcq', q: 'ما الحجازية’s effect — as in ﴿وَمَا رَبُّكَ بِظَلَّامٍ لِلْعَبِيدِ﴾ — is…',
          choices: ['اسم مرفوع + خبر منصوب, like ليس', 'اسم منصوب + خبر مرفوع, like إنّ', 'Both منصوبان', 'jarr on the following noun'],
          correct: 0,
          why: 'The ليس-pattern — the mirror image of إنّ. (The باء on بظلّامٍ is the familiar redundant باء on a negated خبر.)' },

        { t: 'mcq', q: 'Why does ما NOT operate in ﴿وَمَا مُحَمَّدٌ إِلَّا رَسُولٌ﴾?',
          choices: ['Its خبر is joined to إلّا', 'Its اسم follows the خبر', 'It is joined to the redundant إنْ', 'محمد is definite'],
          correct: 0,
          why: 'Third condition: the خبر must not be joined to إلّا — the إلّا breaks the negation that gave ما its ليس-likeness, so رسولٌ stays مرفوع.' },

        { t: 'mcq', q: 'And in «ما إنْ أنتم قائمون»?',
          choices: ['ما is joined to the redundant إنْ, which cancels its operation', 'قائمون should be منصوبًا — the line errs', 'إنْ here is شرطية', 'The اسم is separated from ما'],
          correct: 0,
          why: 'Second condition: no redundant إنْ after ما. (Don’t confuse this إنْ الزائدة with إنْ النافية, which itself operates like ليس.)' },

        { t: 'mcq', q: '﴿وَلَاتَ حِينَ مَنَاصٍ﴾ — what is special about لاتَ?',
          choices: ['It is specific to الحين (time-words), and its اسم is usually deleted', 'It negates the genus categorically', 'It operates only in poetry', 'It requires the redundant باء'],
          correct: 0,
          why: 'لاتَ حينَ مناصٍ ≈ ليس الحينُ حينَ مناصٍ — the اسم (الحينُ) is suppressed. Poetry-only describes لا; genus-negation is the other لا.' },

        { t: 'mcq', q: 'Which ناسخ turns BOTH the mubtadaʾ and khabar into منصوبين?',
          choices: ['أفعال القلوب — they become مفعولين', 'الأفعال الناقصة', 'الحروف المشبهة بالفعل', 'الحروف المشبهة بليس'],
          correct: 0,
          why: 'ظنّ/علم and their kin take the pair as two objects. كان and the ليس-like particles raise one and set the other in naṣb; إنّ and لا الجنس do the reverse.' },

        { t: 'mcq', q: 'Why are these five families called نواسخ?',
          choices: ['They abrogate (نسخ) the original مبتدأ/خبر ruling and impose a new one', 'They delete the mubtadaʾ', 'They negate the sentence', 'They only occur in the Qurʾān'],
          correct: 0,
          why: 'نسخ = to supersede: the original double-rafʿ of mubtadaʾ + khabar is replaced by each ناسخ’s own pattern.' },

        { t: 'written',
          prompt: 'Enumerate the five نواسخ and the effect of each on the mubtadaʾ and khabar.',
          model: 'The operators entering on the mubtadaʾ and khabar are called نواسخ, and they are five: (1) أفعال القلوب — both become مفعولين (منصوبين); (2) الأفعال الناقصة (كان وأخواتها) — اسم مرفوع وخبر منصوب; (3) الحروف المشبهة بالفعل (إنّ وأخواتها) — اسم منصوب وخبر مرفوع; (4) لا لنفي الجنس — اسم منصوب وخبر مرفوع; (5) الحروف المشبهة بليس (ما، لا، إنْ، لات) — اسم مرفوع وخبر منصوب.' },
      ],
    },
  ],
});
