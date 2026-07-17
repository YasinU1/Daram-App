/* ── Daram Learn — al-Kubrā fī an-Naḥw · المقصد الأول · الخاتمة: التنازع وحذف العامل (pp. 121–130) ──
   Authored directly from the book PDF. NO matn panels: these pages are not transcribed in the
   reader — teach cards use static ar:/arEn: blocks and carry `page:` (book page) so every key
   idea maps back to the book. No bank steps yet.                                              */

window.DARAM_COURSES = window.DARAM_COURSES || [];

window.DARAM_COURSES.push({
  id: 'm1-khatima',
  titleAr: 'خَاتِمَةُ الْمَقْصَدِ الأَوَّلِ',
  titleEn: 'Aim One epilogue — tanāzuʿ & the deleted governor',
  pages: '121–130',
  sections: [

    /* ═══ 1. التنازع ═══ */
    {
      id: 'tanazu',
      title: 'الفصل الأول: التنازع',
      subtitle: 'عاملان يتجاذبان معمولًا واحدًا',
      steps: [
        { t: 'teach', title: 'Two governors, one معمول', page: 121,
          ar: 'وهو تَنَازُعُ عَامِلَيْنِ فِي مَعْمُولٍ وَاحِدٍ مُتَأَخِّرٍ',
          arEn: 'Tanāzuʿ: two governors contending over one delayed governee.',
          points: [
            'The two may be **verbs**: ﴿كُلُوا وَاشْرَبُوا مِنْ رِزْقِ اللهِ﴾ — or **nouns**: ﴿وَإِنْ أَدْرِي أَقَرِيبٌ أَمْ بَعِيدٌ مَا تُوعَدُونَ﴾.',
            'It is also called **إعمالًا** — and **either** governor may be given the معمول, the first or the second.',
            'More than two may contend: «تُسبِّحونَ وتَحمَدونَ وتُكبِّرونَ دُبُرَ كلِّ صلاةٍ ثلاثًا وثلاثينَ مرةً».',
          ] },

        { t: 'mcq', q: '﴿كُلُوا وَاشْرَبُوا مِنْ رِزْقِ اللهِ﴾ — why is this تنازع?',
          choices: ['Both verbs want من رزق الله, which comes once, delayed after both', 'The two verbs contradict', 'رزق is doubly majrūr', 'It is not — each verb has its own معمول'],
          correct: 0,
          why: 'The definition: تنازع عاملين في معمول واحد متأخر. Grammarians let either عامل take it (Baṣrans prefer the second, Kūfans the first — the book allows both).' },

        { t: 'mcq', q: 'Can nouns engage in تنازع?',
          choices: ['Yes — ﴿أَقَرِيبٌ أَمْ بَعِيدٌ مَا تُوعَدُونَ﴾: two ṣifas contending over ما توعدون', 'No, verbs only', 'Only with أم between them', 'Only in poetry'],
          correct: 0,
          why: 'فعلين أو اسمين — and the count can exceed two, as in the tasbīḥ ḥadīth with three verbs before دبر كل صلاة.' },

        { t: 'written',
          prompt: 'Define التنازع, its alternative name, what kinds of governors join it, and the ruling on which governor operates.',
          model: 'التنازع is the contending of two governors over one delayed معمول, also called الإعمال. The governors may be two verbs ﴿كلوا واشربوا من رزق الله﴾ or two nouns ﴿وإن أدري أقريب أم بعيد ما توعدون﴾, and more than two may contend: «تسبحون وتحمدون وتكبرون دبر كل صلاة ثلاثا وثلاثين مرة». Either the first or the second governor may be made to operate — both are allowed.' },
      ],
    },

    /* ═══ 2. حذف عامل المفعول المطلق ═══ */
    {
      id: 'hadhf-mutlaq',
      title: 'الفصل الثاني: حذف العامل — المفعول المطلق',
      subtitle: 'الحذف الجائز والواجب',
      steps: [
        { t: 'teach', title: 'Permitted vs obligatory deletion', page: 121,
          body: 'Deleting the governor is of two kinds: **جائز** — with a contextual clue: ﴿وَمَاذَا أَنْزَلَ رَبُّكُمْ قَالُوا خَيْرًا﴾ (= أنزلَ خيرًا) — and **واجب**, in three ḍarbs: the deleted governor of the **مفعول مطلق**, of the **مفعول به**, and of the **حال**.' },

        { t: 'teach', title: 'The maṣdar whose verb must vanish — قياسي', page: 122,
          body: 'The عامل of the مفعول مطلق is deleted **by rule** in four places:',
          points: [
            'The maṣdar standing as a **نهي following a command-maṣdar**: «صبرًا لا **جزعًا**» — and the one after an **استفهام of توبيخ**: «أجُرأةً على المعاصي؟»',
            'The one detailing after **إمّا** what was summarised before: ﴿فَشُدُّوا الْوَثَاقَ فَإِمَّا مَنًّا بَعْدُ وَإِمَّا فِدَاءً﴾.',
            'The one **emphasising the content of the sentence**: ﴿أُولَئِكَ هُمُ الْمُؤْمِنُونَ حَقًّا﴾.',
          ] },

        { t: 'teach', title: '…and سماعي', page: 122,
          body: 'And by **hearing**: «سبحانَ اللهِ» · «معاذَ اللهِ» · «عجبًا لك» · «حمدًا وشكرًا لا كفرًا» · «لبَّيكَ» and its sisters (سعديك، حنانيك، دواليك، حذاريك — dualled for التكثير, not real twos).' },

        { t: 'mcq', q: '﴿أُولَئِكَ هُمُ الْمُؤْمِنُونَ حَقًّا﴾ — what is حقًّا and where is its verb?',
          choices: ['A مفعول مطلق emphasising the sentence’s content; its governor is obligatorily deleted (≈ حقَّ ذلك حقًّا)', 'A ḥāl of المؤمنون', 'A tamyīz', 'Its verb is المؤمنون'],
          correct: 0,
          why: 'المؤكد لمضمون الجملة is the fourth قياسي place of obligatory deletion.' },

        { t: 'mcq', q: '«صَبْرًا لَا جَزَعًا» — what licenses the two naṣbs with no verb in sight?',
          choices: ['Deleted governors, obligatorily: a command-maṣdar (اصبر صبرا) and the نهي following it (لا تجزع جزعا)', 'They are ḥāls', 'The verbs are merely implied jawāzan', 'An ismu fiʿl governs them'],
          correct: 0,
          why: 'First قياسي place: الواقع نهيا تابعا لمصدر يراد به الأمر. The توبيخ-question «أجرأةً على المعاصي؟» is the second.' },

        { t: 'mcq', q: '«سُبْحَانَ اللهِ» و«لَبَّيْكَ» belong to which category?',
          choices: ['سماعي — heard maṣdars whose governor is always deleted; the -ayk duals mean تكثير not twoness', 'قياسي place three', 'Ordinary مفعول به', 'أسماء أفعال'],
          correct: 0,
          why: 'The heard set: سبحانك، معاذ الله، عجبا لك، حمدا وشكرا لا كفرا، لبيك وأخواتها — the dual form is rhetorical multiplication.' },

        { t: 'written',
          prompt: 'Distinguish الحذف الجائز from الواجب, and list the four قياسي places (plus the سماعي set) where the مفعول مطلق’s governor must be deleted.',
          model: 'الحذف الجائز happens with a contextual clue ﴿وماذا أنزل ربكم قالوا خيرا﴾ أي أنزل خيرا. الحذف الواجب has three ḍarbs; the first is the governor of the مفعول مطلق, deleted قياسًا in four places: (1) the maṣdar occurring as a نهي following a command-maṣdar «صبرًا لا جزعًا»; (2) after an استفهام intending توبيخ «أجرأةً على المعاصي؟»; (3) after إمّا detailing a preceding summary ﴿فشدوا الوثاق فإما منا بعد وإما فداء﴾; (4) emphasising the sentence’s content ﴿أولئك هم المؤمنون حقا﴾. And سماعًا: «سبحان الله»، «معاذ الله»، «عجبا لك»، «حمدا وشكرا لا كفرا»، «لبيك» and its sisters — their dual form signifying تكثير.' },
      ],
    },

    /* ═══ 3. التحذير والإغراء ═══ */
    {
      id: 'tahdhir-ighra',
      title: 'حذف عامل المفعول به — التحذير والإغراء',
      subtitle: 'إياك والحسد · الصبرَ الصبرَ',
      steps: [
        { t: 'teach', title: 'التحذير — warn by naṣb', page: 122,
          body: 'The governor of the مفعول به is deleted in **five places**. First, **التحذير**: naṣb of a noun by a deleted verb warning the addressee off something hateful. **Four pillars**: the implied verb (احذر/باعد/تجنب/قِ/توقَّ…), the warner, the warned, and the thing warned against.',
          points: [
            '**Way 1** — the detached naṣb-pronoun: with ʿaṭf «**إياكَ والحسدَ**»; repeated, no ʿaṭf «إياكَ إياكَ المِراءَ»; or the warned-against jarred by مِن — uttered «إياك مِن الحسدِ» or implied «إياك أنْ تحسُدَ» (p. 123).',
            '**Way 2** — an explicit noun for [the warned-against]: alone «نفسَك», repeated «نفسَك نفسَك», or with ʿaṭf «نفسَك والحسدَ» (p. 123).',
            '**Way 3** — the warned-against itself: repeated «اللهَ اللهَ», or with a second one ʿaṭfed ﴿نَاقَةَ اللهِ وَسُقْيَاهَا﴾ (p. 123).',
          ],
          after: 'التحذير can also come with the verb intact: ﴿قُوا أَنْفُسَكُمْ وَأَهْلِيكُمْ نَارًا﴾ (p. 123).' },

        { t: 'teach', title: 'الإغراء — urge by naṣb', page: 123,
          body: 'Second, **الإغراء**: naṣb of a noun by a deleted verb of **encouragement** toward something desirable — pillars: the implied verb (الزم/اطلب/خذ/افعل), the urger, the urged, the thing urged (p. 124).',
          points: [
            'Deletion is **obligatory** when the مغرى به is **repeated** «الصبرَ الصبرَ» or **ʿaṭfed upon** «العلمَ والحلمَ» (p. 124).',
            'It may come with the verb: ﴿يَا يَحْيَى خُذِ الْكِتَابَ بِقُوَّةٍ﴾ (p. 124).',
            'Appended to this pair: «مرحبًا وأهلًا وسهلًا» (تقدير: أصبتَ) and «امرأً ونفسَه» (تقدير: دَعْ) (p. 124).',
          ] },

        { t: 'mcq', q: '«إِيَّاكَ وَالْحَسَدَ» — account for both naṣbs.',
          choices: ['إياك by a deleted warning verb (باعِدْ نفسَك), الحسدَ ʿaṭfed as the warned-against — تحذير', 'إياك is fāʿil', 'الحسد is a ḥāl', 'Both by إياك itself'],
          correct: 0,
          why: 'Way 1 of التحذير: detached pronoun + ʿaṭf. Variants: «إياك إياك المراء», «إياك من الحسد», «إياك أن تحسد».' },

        { t: 'mcq', q: '﴿نَاقَةَ اللهِ وَسُقْيَاهَا﴾ — which تحذير pattern, and is the deletion required?',
          choices: ['Way 3: the warned-against repeated-or-ʿaṭfed alone — and yes, the نحاة make the verb’s deletion obligatory here', 'Way 1 with a pronoun', 'Way 2 with نفسك', 'Free choice to utter the verb'],
          correct: 0,
          why: 'The warned-against with a second one ʿaṭfed on it (ناقة الله وسقياها = ذروا). With repetition or ʿaṭf the deletion is واجب.' },

        { t: 'mcq', q: '«الصَّبْرَ الصَّبْرَ» vs ﴿خُذِ الْكِتَابَ بِقُوَّةٍ﴾ — both إغراء?',
          choices: ['Yes — repetition forces the verb’s deletion in the first; the second shows إغراء with the verb uttered', 'No, only the first', 'No, only the second', 'Neither'],
          correct: 0,
          why: 'يجب حذف العامل إذا تكرر المغرى به وإذا عطف عليه — but قد يكون الإغراء بغير حذف الفعل ﴿يايحيى خذ الكتاب بقوة﴾.' },

        { t: 'written',
          prompt: 'Define التحذير and الإغراء with their four pillars each; set out the three ways of التحذير with examples; and state when the إغراء verb must be deleted.',
          model: 'التحذير is naṣb of the noun by a deleted verb warning the addressee off something hateful; pillars: the implied verb (احذر، باعد، تجنب، قِ، توقَّ), المحذِّر (speaker), المحذَّر (addressee), المحذَّر منه. Three ways: (1) the detached naṣb-pronoun — with ʿaṭf «إياك والحسد», repeated without ʿaṭf «إياك إياك المراء», or with من on the warned-against, uttered «إياك من الحسد» or implied «إياك أن تحسد»; (2) an explicit noun — alone «نفسك», repeated «نفسك نفسك», or ʿaṭfed «نفسك والحسد»; (3) the warned-against itself — repeated «الله الله» or ʿaṭfed ﴿ناقة الله وسقياها﴾; and it may occur without deletion ﴿قوا أنفسكم وأهليكم نارا﴾. الإغراء is naṣb of the noun by a deleted verb urging toward something desirable; pillars: the implied verb (الزم، اطلب، خذ، افعل), المغري, المغرى, المغرى به. Deletion is obligatory when the مغرى به is repeated «الصبرَ الصبرَ» or ʿaṭfed «العلمَ والحلمَ»; otherwise the verb may appear ﴿يايحيى خذ الكتاب بقوة﴾. Appended: «مرحبا وأهلا وسهلا» بتقدير أصبت, and «امرأً ونفسه» بتقدير دع.' },
      ],
    },

    /* ═══ 4. الاختصاص والاشتغال ═══ */
    {
      id: 'ikhtisas-ishtighal',
      title: 'الاختصاص والاشتغال',
      subtitle: 'أخُصُّ · ما أُضمِر عامله على شريطة التفسير',
      steps: [
        { t: 'teach', title: 'الاختصاص', page: 124,
          ar: 'رَحْمَتُ اللهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ',
          arEn: '“…upon you, O People of the House” — ahl in naṣb by a hidden akhuṣṣu.',
          points: [
            '**الاختصاص**: naṣb of a noun by a deleted verb — **أخُصُّ or أعني** — that pins down who is meant by the preceding pronoun.',
            'It may use **أيُّها/أيَّتُها without يا**, taking the vocative’s rulings: «نهى رسولُ اللهِ ﷺ المسلمين عن كلامِنا **أيُّها الثلاثةُ**».',
          ] },

        { t: 'teach', title: 'الاشتغال — the busied verb', page: 124,
          ar: 'وَرُسُلًا قَدْ قَصَصْنَاهُمْ عَلَيْكَ',
          arEn: '“And messengers We have recounted to you” — rusulan fronted, the verb busy with -hum.',
          body: 'A noun precedes a verb that operates on **that noun’s pronoun** — such that, freed of the pronoun, the verb would naṣb the fronted noun itself. Pillars: **المشغول** (the governor, aka المشتغِل), **المشغول به** (the pronoun), **المشغول عنه** (the fronted noun) (p. 125). Named: «ما أُضمِرَ عاملُهُ على شريطةِ التفسيرِ».',
          points: [
            'The fronted noun allows **rafʿ** (ابتداء) or **naṣb** by a deleted verb: ﴿وَالْمَوْتَى يَبْعَثُهُمُ اللهُ﴾ (p. 125).',
            '**Rafʿ obligatory** after a noun-only device like إذا الفجائية: «…فإذا الشيطانُ يتبعُهُ»; **naṣb obligatory** after a verb-only device: تحضيض «هلَّا الجنةَ طلبتَها», شرط «إنِ الجنةَ تُرِدْها فاعمل صالحًا» (p. 125).',
            '**Naṣb preferred** when: the governor is a **request-verb** «اللهَ اعبُدْهُ ورسولَه اتَّبِعْهُ»; a **جملة فعلية precedes** the noun «أعبدُ اللهَ ورسولَه أتَّبِعُهُ»; or a mostly-verbal particle precedes — ما النافية «ما الشيطانَ أتَّبِعُهُ», همزة الاستفهام ﴿أَبَشَرًا مِنَّا وَاحِدًا نَتَّبِعُهُ﴾ (p. 125).',
          ],
          after: 'The deleted verb may be a synonym of the busy one: ﴿وَالظَّالِمِينَ أَعَدَّ لَهُمْ عَذَابًا أَلِيمًا﴾ — تقديره أوعَدَ, since أعدّ wants a لام (p. 125).' },

        { t: 'mcq', q: '﴿وَالْمَوْتَى يَبْعَثُهُمُ اللهُ﴾ — what are the two readings of الموتى and why?',
          choices: ['Rafʿ as mubtadaʾ, or naṣb by a deleted يبعث — the classic اشتغال option', 'Rafʿ as fāʿil or naṣb as tamyīz', 'Only rafʿ', 'Only naṣb'],
          correct: 0,
          why: 'يجوز في المشغول عنه أن يُرفع بالابتداء وأن يُنصب بفعل محذوف — unless a device forces one side.' },

        { t: 'mcq', q: '«هَلَّا الْجَنَّةَ طَلَبْتَهَا» — why is naṣb obligatory here?',
          choices: ['التحضيض is verb-only territory: a noun after it must really be governed by a (deleted) verb', 'هلا naṣbs directly', 'الجنة is a ẓarf', 'It is not obligatory'],
          correct: 0,
          why: 'After verb-specific devices (تحضيض، شرط «إن الجنةَ تردها») naṣb is واجب; after noun-specific ones (إذا الفجائية) rafʿ is واجب.' },

        { t: 'mcq', q: '«اللهَ اعْبُدْهُ وَرَسُولَهُ اتَّبِعْهُ» — why do the grammarians PREFER naṣb here?',
          choices: ['The busied governor is a request-verb (أمر) — one of the three naṣb-preferring contexts', 'Naṣb is obligatory', 'Because of the ʿaṭf', 'They prefer rafʿ actually'],
          correct: 0,
          why: 'يترجح النصب: after فعل طلب; when a جملة فعلية precedes the noun; and after mostly-verbal particles (ما النافية، همزة الاستفهام ﴿أبشرا منا واحدا نتبعه﴾).' },

        { t: 'written',
          prompt: 'Define الاختصاص and الاشتغال (with the اشتغال pillars and its laqab), then give the rafʿ/naṣb rules for the مشغول عنه: the two options, the two obligatory cases, and the three naṣb-preferring cases.',
          model: 'الاختصاص is naṣb of the noun by a deleted أخصُّ or أعني specifying who is meant by the preceding pronoun ﴿رحمت الله وبركاته عليكم أهلَ البيت﴾, sometimes with أيها/أيتها without يا, carrying the vocative’s rulings («عن كلامنا أيها الثلاثة»). الاشتغال is a noun preceding a verb that operates on that noun’s pronoun, such that if freed it would naṣb the fronted noun ﴿ورسلا قد قصصناهم عليك﴾; pillars: المشغول (العامل/المشتغِل), المشغول به (الضمير), المشغول عنه (الاسم المتقدم); it is called «ما أضمر عامله على شريطة التفسير». The مشغول عنه: rafʿ بالابتداء or naṣb by a deleted verb ﴿والموتى يبعثهم الله﴾; rafʿ obligatory after noun-specific devices such as إذا الفجائية «فإذا الشيطانُ يتبعه»; naṣb obligatory after verb-specific devices — التحضيض «هلا الجنةَ طلبتها», الشرط «إن الجنةَ تردها فاعمل صالحا»; naṣb preferred when the governor is a request-verb «اللهَ اعبده ورسولَه اتبعه», when a جملة فعلية precedes «أعبد اللهَ ورسولَه أتبعه», or after ما النافية «ما الشيطانَ أتبعه» and همزة الاستفهام ﴿أبشرا منا واحدا نتبعه﴾. The deleted verb may be a synonym: ﴿والظالمين أعد لهم عذابا أليما﴾ بتقدير أوعد.' },
      ],
    },

    /* ═══ 5. النداء ═══ */
    {
      id: 'nida',
      title: 'الخامس: النداء',
      subtitle: 'أركانه وأحرفه وإعراب المنادى والترخيم',
      steps: [
        { t: 'teach', title: 'Calling = a deleted أدعو', page: 126,
          ar: 'وهو النِّدَاءُ بِحَرْفٍ يَقُومُ مَقَامَ أَدْعُو',
          arEn: 'The vocative particle stands in for the verb adʿū.',
          points: [
            '**Three pillars**: the deleted فعل النداء (أدعو or the like) · the حرف standing in for it · the **منادى** (the one called).',
            '**Seven particles**: الهمزة وأي for the **near** («أعبدَ اللهِ»، «أي عبدَ اللهِ») · يا، آ، أيا، هيا for the **far** · وا for **الندبة** (the lament-call).',
            'The particle may be **dropped** with a muḍāf ﴿اعْمَلُوا آلَ دَاوُدَ شُكْرًا﴾ or a proper name ﴿يُوسُفُ أَعْرِضْ عَنْ هَذَا﴾ — never with لفظ الجلالة or the النكرة المقصودة («يا رجلُ»).',
          ] },

        { t: 'teach', title: 'Iʿrāb of the منادى', page: 126,
          body: 'The منادى is **مفعول به لأدعو** — manṣūb **لفظًا or محلًّا**:',
          points: [
            '**لفظًا** when: **muḍāf** «يا عبدَ اللهِ» · **شبيه بالمضاف** — a noun governing what follows it: «يا غافرًا ذنوبَنا» · or **غير معيَّن** «يا غافلًا والموتُ يطلبُهُ».',
            '**محلًّا** — the **مفرد** (neither muḍāf nor shabīh) that is **معرفة or نكرة مقصودة**: it is **built on its rafʿ-sign**: «يا زيدُ»، «يا رجلُ»، «يا رجلانِ»، «يا مسلمونَ» (p. 127).',
          ] },

        { t: 'teach', title: 'يا عبادي — four faces of the yāʾ', page: 127,
          body: 'A منادى muḍāf to the **speaker’s yāʾ** allows four treatments:',
          points: [
            'Delete the yāʾ, keep the kasra ﴿يَا عِبَادِ فَاتَّقُونِ﴾ · keep it **sākina** ﴿يَا عِبَادِيْ لَا خَوْفٌ عَلَيْكُمُ الْيَوْمَ﴾ (in the reading of Nāfiʿ et al.).',
            'Keep it **maftūḥa** ﴿يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا﴾ · flip kasra to fatḥa and yāʾ to alif ﴿يَا حَسْرَتَى﴾.',
          ] },

        { t: 'teach', title: 'الترخيم — clipping the call', page: 127,
          body: '**الترخيم**: deleting the end of the منادى for lightness — «يا فاطمَ». Only two kinds ruḵḵam:',
          points: [
            'the noun **ending in tāʾ**: «يا عائشُ»,',
            'and the **masculine proper name of more than three letters, not compound**: «يا جعفُ» — unlike زينب (feminine ʿalam without tāʾ? — it does not qualify), زيد (three letters), عبد الله (compound).',
            'The clipped منادى allows **the original ḥaraka** (the better view): «يا حارِ» standing for حارثُ — or **ḍamm**: «يا حارُ».',
          ] },

        { t: 'mcq', q: '«يَا غَافِرًا ذُنُوبَنَا» vs «يَا زَيْدُ» — why naṣb on one, built-ḍamm on the other?',
          choices: ['غافرا is شبيه بالمضاف (it governs ذنوبنا) → manṣūb لفظا; زيد is a مفرد معرفة → built on its rafʿ-sign, manṣūb محلا', 'Both should be manṣūb', 'غافر is muḍāf', 'زيد is nakira'],
          correct: 0,
          why: 'Muḍāf, shabīh bil-muḍāf, and the unspecified nakira take overt naṣb; the مفرد definite/intended nakira is mabnī on its rafʿ form.' },

        { t: 'mcq', q: 'When may the vocative particle be deleted — and when never?',
          choices: ['Deletable with a muḍāf ﴿اعملوا آل داود شكرا﴾ or a ʿalam ﴿يوسف أعرض عن هذا﴾; never with لفظ الجلالة or النكرة المقصودة', 'Always deletable', 'Never deletable', 'Only in the Qurʾān'],
          correct: 0,
          why: 'قد يحذف حرف النداء إن كان المنادى مضافا أو علما؛ ولا يجوز حذفه مع لفظ الجلالة أو النكرة المقصودة.' },

        { t: 'mcq', q: 'Which of these can be ruḵḵam: عائشة · زيد · عبد الله · جعفر?',
          choices: ['عائشة (ends in tāʾ → يا عائش) and جعفر (masc. ʿalam, 4+ letters, simple → يا جعف)', 'All four', 'زيد and عبد الله', 'Only عائشة'],
          correct: 0,
          why: 'زيد is only three letters; عبد الله is مركب. The clipped form takes the original ḥaraka «يا حارِ» (preferred) or ḍamm «يا حارُ».' },

        { t: 'written',
          prompt: 'Give the three pillars and seven particles of النداء with their ranges, the iʿrāb scheme of the منادى, the four treatments of ياء المتكلم, and the ترخيم rules.',
          model: 'النداء is calling by a particle standing in for أدعو. Pillars: the deleted فعل النداء, the particle, and the منادى. Seven particles: الهمزة وأي for the near, يا وآ وأيا وهيا for the far, وا for الندبة. The particle may drop before a muḍāf ﴿اعملوا آل داود شكرا﴾ or ʿalam ﴿يوسف أعرض عن هذا﴾ but never before لفظ الجلالة or a نكرة مقصودة. The منادى is مفعول به لأدعو: manṣūb لفظًا if muḍāf «يا عبد الله», شبيه بالمضاف «يا غافرا ذنوبنا», or unspecified «يا غافلا والموت يطلبه»; manṣūb محلًّا — built on its rafʿ-sign — if a مفرد definite or intended nakira «يا زيدُ، يا رجلُ، يا رجلان، يا مسلمون». Muḍāf to the speaker’s yāʾ: delete it keeping the kasra ﴿يا عباد فاتقون﴾, keep it sākina ﴿يا عبادي لا خوف عليكم اليوم﴾, keep it maftūḥa ﴿يا عباديَ الذين أسرفوا﴾, or turn kasra+yāʾ into fatḥa+alif ﴿يا حسرتى﴾. الترخيم clips the end for lightness («يا فاطمَ») — only for tāʾ-final nouns «يا عائش» and simple masculine ʿalams above three letters «يا جعف»; the clipped form keeps the original ḥaraka «يا حارِ» (the better) or takes ḍamm «يا حارُ».' },
      ],
    },

    /* ═══ 6. اللهم · الاستغاثة · التعجب · الندبة ═══ */
    {
      id: 'allahumma-istighatha',
      title: 'اللهم · الاستغاثة · نداء التعجب · الندبة',
      subtitle: 'يا لَلّهِ لِلْمُسلمين · وا زيداه',
      steps: [
        { t: 'teach', title: 'اللَّهُمَّ', page: 128,
          ar: 'كَلِمَةُ اللَّهُمَّ صِيغَةُ نِدَاءٍ لِلْجَلَالَةِ',
          arEn: 'allāhumma: the vocative form reserved for the Majestic Name.',
          points: [
            'Its origin: **يا اللهُ** — the particle deleted, a **doubled mīm** compensating.',
            'Before **إلا** it signals the **rarity of the exception**: «اللهم إلا أن يكونَ كذا»; before **نعم** it signals the answerer’s **certainty**: «اللهم نعم».',
          ] },

        { t: 'teach', title: 'الاستغاثة', page: 128,
          body: '**نداء الاستغاثة**: calling someone **to rescue another**. Pillars: the particle — **يا, no other** — the **مستغاث** (the one called), and the **مستغاث له/لأجله**.',
          points: [
            'The مستغاث takes a **fatḥa-lām**: «يا **لَ**لّهِ» — or an **alif substituting** for that lām: «يا زيدَا!» «يا زيداه».',
            'A second مستغاث ʿaṭfed **without repeating يا** takes a **kasra-lām**: «يا لَلأميرِ و**لِ**لمسلمينَ لِلمظلومينَ».',
            'The مستغاث له takes a **kasra-lām**: «يا لَلّهِ **لِ**لمسلمينَ».',
          ] },

        { t: 'teach', title: 'نداء التعجب and الندبة', page: 128,
          points: [
            '**نداء التعجب** — calling the astonishing thing; it runs like الاستغاثة: the متعجب منه in the مستغاث slot «يا **لَ**لقرآنِ» «يا قرآنَاهْ», or in the مستغاث له slot with the مستغاث deleted «يا **لِ**لقرآنِ» (p. 128).',
            '**الندبة** — the grief-call (إظهار الحزن): with **وا** «وا أبتاه», or **يا** when confusion with plain calling is safe (p. 129). The iʿrāb of its منادى matches ordinary النداء: «وا زيدُ»، «وا عبدَ اللهِ».',
            'It allows the **ندبة-alif** at the end «وا زيدَا», and **هاء السكت** after that alif at pause: «وارأساهْ»، «واويلاهْ» (p. 129).',
          ] },

        { t: 'mcq', q: 'What is the doubled mīm in اللهم?',
          choices: ['A substitute for the deleted يا of «يا الله»', 'A pronoun', 'Part of the root', 'A plural marker'],
          correct: 0,
          why: 'أصله يا الله؛ حذف منها حرف النداء وعُوض عنه بميم مشددة — which is why يا اللهم is avoided.' },

        { t: 'mcq', q: '«يَا لَلّهِ لِلْمُسْلِمِينَ» — why fatḥa on the first lām and kasra on the second?',
          choices: ['Fatḥa-lām marks the مستغاث (the rescuer called); kasra-lām marks the مستغاث له (those needing rescue)', 'Free variation', 'The first lām is the jarr-lām, the second an oath', 'Both should be maftūḥa'],
          correct: 0,
          why: 'تدخل على المستغاث لام جارة مفتوحة وعلى المستغاث له لام مكسورة — and a wāw-ʿaṭfed second مستغاث without new يا also takes kasra.' },

        { t: 'mcq', q: '«وَارَأْسَاهْ» — decompose the ending.',
          choices: ['وا of ندبة + the noun + ندبة-alif + هاء السكت at pause', 'A feminine tāʾ turned hāʾ', 'A dual marker', 'وا + a ḍamīr'],
          correct: 0,
          why: 'يجوز إلحاق ألف الندبة بآخر المنادى وهاء السكت بعد الألف عند الوقف — واويلاه likewise.' },

        { t: 'written',
          prompt: 'Explain اللهم (origin + its two idioms), the pillars and lām-rules of الاستغاثة, how نداء التعجب rides on it, and the particles/endings of الندبة.',
          model: 'اللهم is the vocative form of the Majestic Name; its origin يا الله with the particle deleted and a doubled mīm compensating. Before إلا it marks the exception as rare («اللهم إلا أن يكون كذا»); before نعم it marks the answerer’s certainty («اللهم نعم»). الاستغاثة is calling one to rescue another; pillars: the particle — يا only — the مستغاث, and the مستغاث له. The مستغاث takes a fatḥa-lām «يا لَلّه», for which an alif may substitute «يا زيدا/يا زيداه»; a ʿaṭfed مستغاث without new يا takes kasra «يا للأمير وللمسلمين»; the مستغاث له takes a kasra-lām «يا لله للمسلمين». نداء التعجب works like الاستغاثة: the متعجب منه stands as مستغاث «يا لَلقرآن/يا قرآناه» or as مستغاث له with the مستغاث deleted «يا لِلقرآن». الندبة — showing grief — uses وا «وا أبتاه», or يا when no confusion with plain نداء; its منادى takes ordinary vocative iʿrāb «وا زيدُ، وا عبدَ الله», with an optional ندبة-alif «وا زيدا» and هاء السكت at pause «وارأساه، واويلاه».' },
      ],
    },

    /* ═══ 7. حذف عامل الحال ═══ */
    {
      id: 'hadhf-amil-hal',
      title: 'الضرب الثالث: حذف عامل الحال',
      subtitle: 'أربعة مواضع قياسًا',
      steps: [
        { t: 'teach', title: 'Four rule-bound deletions', page: 129,
          body: 'The governor of the **حال** is deleted قياسًا وجوبًا in four places:',
          points: [
            'The ḥāl **standing in for the khabar**: «دعائي ربّي **مستيقنًا**» (p. 129).',
            'One whose wording shows **gradual increase or decrease**: «تصدَّقْ بدرهمٍ **فصاعدًا**» — the deleted governor ≈ يزيد, and it must ride الفاء or ثم (p. 130).',
            'One after a **rebuking استفهام**: «أ**قاعدًا** وقد أُقيمتِ الصلاةُ؟» (≈ أتَلبَثُ) — and one **emphasising the sentence’s content**: ﴿وَهُوَ الْحَقُّ مُصَدِّقًا لِمَا مَعَهُمْ﴾, its condition: ḥāl-meaning = sentence-meaning, with a **jāmid definite** mubtadaʾ and khabar («خالدٌ أبوك عطوفًا») (p. 130).',
          ],
          after: 'And سماعًا elsewhere: «هنيئًا لك»، «سالِمًا غانمًا» (p. 130).' },

        { t: 'mcq', q: '«تَصَدَّقْ بِدِرْهَمٍ فَصَاعِدًا» — what is صاعدًا and where is its governor?',
          choices: ['A ḥāl of gradual increase; its governor is obligatorily deleted (≈ فزادَ/يزيد), and it must be carried by الفاء or ثم', 'A tamyīz', 'A مفعول مطلق', 'Its governor is تصدق'],
          correct: 0,
          why: 'Second قياسي place: الحال الدالة بلفظها على زيادة أو نقص بتدريج — شرطها الفاء أو ثم، والفاء أكثر.' },

        { t: 'mcq', q: '﴿وَهُوَ الْحَقُّ مُصَدِّقًا لِمَا مَعَهُمْ﴾ — what kind of ḥāl is مصدقا?',
          choices: ['مؤكدة لمضمون الجملة — its governor deleted; the jumla must be two definite jāmid terms whose meaning the ḥāl repeats', 'A ḥāl of الحق’s owner', 'A نعت of الحق', 'A مفعول له'],
          correct: 0,
          why: 'Fourth place. Conditions: اتفاق معنى الحال والجملة + mubtadaʾ and khabar both معرفتين جامدتين («خالد أبوك عطوفا»).' },

        { t: 'mcq', q: '«أَقَاعِدًا وَقَدْ أُقِيمَتِ الصَّلَاةُ؟» — supply the deleted governor.',
          choices: ['≈ أتَلبَثُ (أتمكث) — a توبيخ-question ḥāl whose verb is obligatorily suppressed', '≈ اجلسْ', '≈ صلِّ', 'Nothing is deleted'],
          correct: 0,
          why: 'Third place: الحال المسبوقة باستفهام يراد به التوبيخ — العامل المحذوف هو بقيتَ أو لبثتَ أو لم تزل ونحوهما.' },

        { t: 'written',
          prompt: 'List the four قياسي places where the ḥāl’s governor must be deleted (with each example and condition), plus the سماعي cases.',
          model: 'The ḥāl’s governor is deleted قياسا وجوبا in four places: (1) the ḥāl standing in for the khabar — «دعائي ربي مستيقنا»; (2) the ḥāl whose wording indicates gradual increase or decrease — «تصدق بدرهم فصاعدا», its condition being accompaniment by الفاء or ثم (الفاء more common), the deleted governor ≈ يزيد; (3) the ḥāl preceded by a rebuking استفهام — «أقاعدا وقد أقيمت الصلاة؟», the deleted governor ≈ أتلبث; (4) the ḥāl emphasising the sentence’s content — ﴿وهو الحق مصدقا لما معهم﴾, conditioned on the ḥāl’s meaning matching the sentence’s and the mubtadaʾ and khabar being definite jāmid terms («خالد أبوك عطوفا»). It is also deleted سماعا elsewhere: «هنيئا لك»، «سالما غانما».' },
      ],
    },
  ],
});
