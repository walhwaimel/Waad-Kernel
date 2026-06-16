const pages = [
    { id: 'home', label: 'Home', ar: 'الرئيسية', href: 'index.html', description: 'Waad Kernel portfolio home' },
    { id: 'about', label: 'About', ar: 'نبذة', href: 'about-waad-alhwaimel.html', description: 'About Waad Alhwaimel, her journey, focus, and resume' },
    { id: 'projects', label: 'Projects', ar: 'المشاريع', href: 'software-engineering-projects.html', description: 'Software engineering, AI, database, and research projects' },
    { id: 'knowledge', label: 'Knowledge', ar: 'المعرفة', href: 'software-engineering-knowledge-base.html', description: 'Software engineering and AI guides, tips, and resources' },
    { id: 'tools', label: 'Tools', ar: 'الأدوات', href: 'student-project-planning-tools.html', description: 'Student project planning, UML, SRS, and database tools' }
];

const searchItems = [
    ...pages,
    { label: 'My Destination', ar: 'وجهتي', href: 'software-engineering-projects.html', description: 'Accessibility platform, maps, services, and events' },
    { label: 'Arabic Sentiment Analysis', ar: 'تحليل المشاعر العربية', href: 'software-engineering-projects.html', description: 'Arabic NLP, Explainable AI, research, and bias evaluation' },
    { label: 'MySchool Database', ar: 'قاعدة بيانات مدرستي', href: 'software-engineering-projects.html', description: 'SQL, relational schema, students, teachers, and courses' },
    { label: 'SVD Image Compression', ar: 'ضغط الصور باستخدام SVD', href: 'software-engineering-projects.html', description: 'Linear algebra, MATLAB, matrices, and image processing' },
    { label: 'How to Draw UML Diagrams', ar: 'كيف ترسم مخططات UML', href: 'software-engineering-knowledge-base.html', description: 'UML architecture and software diagrams guide' },
    { label: 'Design a Database from Scratch', ar: 'صمّم قاعدة بيانات من الصفر', href: 'software-engineering-knowledge-base.html', description: 'Database schema, normalization, relationships, and SQL guide' },
    { label: 'Understanding Design Patterns', ar: 'فهم أنماط التصميم', href: 'software-engineering-knowledge-base.html', description: 'Structural, creational, and behavioral software patterns' },
    { label: 'AI Concepts Explained Simply', ar: 'مفاهيم الذكاء الاصطناعي ببساطة', href: 'software-engineering-knowledge-base.html', description: 'Beginner artificial intelligence and machine learning concepts' },
    { label: 'UML Assistant', ar: 'مساعد UML', href: 'student-project-planning-tools.html', description: 'Use cases, classes, sequence, and activity diagrams' },
    { label: 'SRS Builder', ar: 'منشئ SRS', href: 'student-project-planning-tools.html', description: 'Software requirements specification planning' },
    { label: 'Database Planner', ar: 'مخطط قاعدة البيانات', href: 'student-project-planning-tools.html', description: 'Entities, relationships, tables, keys, and SQL planning' },
    { label: 'Project Planner', ar: 'مخطط المشروع', href: 'student-project-planning-tools.html', description: 'Milestones, tasks, roadmap, and deliverables' },
    { label: 'Presentation Planner', ar: 'مخطط العرض', href: 'student-project-planning-tools.html', description: 'Slides, demo flow, speaking points, and questions' }
    ,{ label: 'Copyright & Usage Policy', ar: 'سياسة حقوق النشر والاستخدام', href: 'copyright-and-usage-policy.html', description: 'Copyright, permitted use, prohibited use, licensing, and permissions' }
    ,{ label: 'Academic Disclaimer', ar: 'إخلاء المسؤولية الأكاديمية', href: 'academic-disclaimer.html', description: 'Educational purpose, academic affiliation, intellectual property, and liability' }
];

const arabicTitles = {
    home: 'Waad Kernel | ملف وعد الهويميل في هندسة البرمجيات',
    about: 'عن وعد الهويميل | هندسة البرمجيات والذكاء الاصطناعي',
    projects: 'مشاريع هندسة البرمجيات والذكاء الاصطناعي | Waad Kernel',
    knowledge: 'قاعدة معرفة هندسة البرمجيات | Waad Kernel',
    tools: 'أدوات تخطيط مشاريع الطلاب | Waad Kernel'
    ,copyright: 'سياسة حقوق النشر والاستخدام | Waad Kernel'
    ,academic: 'إخلاء المسؤولية الأكاديمية | Waad Kernel'
};

const ar = {
    'Home': 'الرئيسية', 'About': 'نبذة', 'Projects': 'المشاريع', 'Knowledge': 'المعرفة', 'Tools': 'الأدوات',
    'Search': 'بحث', 'Arabic': 'العربية', 'English': 'English', 'Dark Mode': 'الوضع الداكن', 'Light Mode': 'الوضع الفاتح',
    'Search Waad Kernel': 'ابحثي في Waad Kernel', 'Type to search pages, projects, guides, and tools...': 'اكتبي للبحث في الصفحات والمشاريع والأدلة والأدوات...',
    'No results found.': 'ما لقينا نتائج.', 'Close': 'إغلاق',
    '10 min': '١٠ دقائق', '12 min': '١٢ دقيقة', '14 min': '١٤ دقيقة', '15 min': '١٥ دقيقة', '18 min': '١٨ دقيقة', '20 min': '٢٠ دقيقة',
    'System Online': 'النظام شغّال', 'Building practical knowledge': 'نبني معرفة عملية',
    'Explore': 'استكشف', 'Resources': 'المصادر', 'Legal': 'السياسات', 'Contact': 'التواصل',
    'Software engineering, artificial intelligence, and practical technical knowledge documented with clarity.': 'هندسة برمجيات وذكاء اصطناعي ومعرفة تقنية عملية موثقة بوضوح.',
    'Copyright & Usage Policy': 'سياسة حقوق النشر والاستخدام', 'Academic Disclaimer': 'إخلاء المسؤولية الأكاديمية',
    'All rights reserved.': 'جميع الحقوق محفوظة.', 'Designed and documented by Waad Ibrahim Alhwaimel.': 'تصميم وتوثيق وعد إبراهيم الهويميل.',
    'Email Waad': 'مراسلة وعد', 'Back to Home': 'العودة للرئيسية',
    'GitHub': 'GitHub',
    'LinkedIn': 'LinkedIn',
    'Legal / Usage': 'قانوني / استخدام', 'Academic / Educational': 'أكاديمي / تعليمي',
    '© 2026 Waad Ibrahim Alhwaimel. All rights reserved.': '© 2026 وعد إبراهيم الهويميل. جميع الحقوق محفوظة.',
    'All content published under this domain and its subdomains is protected by international copyright laws. This includes software projects, source code, documentation, designs, research, and written content.': 'كل المحتوى المنشور تحت هذا النطاق ونطاقاته الفرعية محمي بأنظمة حقوق النشر الدولية، ويشمل المشاريع البرمجية، والكود المصدري، والتوثيق، والتصاميم، والأبحاث، والمحتوى المكتوب.',
    'Permitted & Prohibited Use': 'الاستخدام المسموح والممنوع', 'You May': 'مسموح لك', 'You May Not': 'غير مسموح لك',
    'View and reference content for personal, educational, and non-commercial purposes': 'عرض المحتوى والرجوع له لأغراض شخصية وتعليمية وغير تجارية',
    'Quote small portions with proper attribution': 'اقتباس أجزاء بسيطة مع ذكر المصدر بشكل صحيح',
    'Reproduce or redistribute full projects': 'نسخ المشاريع كاملة أو إعادة توزيعها',
    'Use content commercially without written permission': 'استخدام المحتوى تجاريًا بدون إذن مكتوب',
    'Claim authorship of this work': 'نسب هذا العمل لنفسك',
    'Licensing': 'التراخيص',
    'Specific projects may include their own separate licenses. In the event of any conflict between a project-level license and this policy, the project-level license takes precedence.': 'بعض المشاريع ممكن يكون لها تراخيص مستقلة. إذا صار تعارض بين ترخيص مشروع وهذه السياسة، تكون الأولوية لترخيص المشروع.',
    'For permissions or licensing inquiries, please reach out directly.': 'لطلب الإذن أو الاستفسار عن التراخيص، تواصلوا معي مباشرة.',
    'Last updated: 2026': 'آخر تحديث: 2026',
    'Waad Kernel is a personal academic documentation and portfolio platform. Materials published here are created as part of my learning process, knowledge organization, and project development, and are intended for educational and reference purposes only.': 'Waad Kernel منصة شخصية للتوثيق الأكاديمي وعرض الأعمال. المحتوى المنشور هنا ناتج عن رحلة تعلمي وتنظيم المعرفة وتطوير المشاريع، ومخصص للأغراض التعليمية والمرجعية فقط.',
    'Purpose of This Website': 'هدف الموقع',
    'The academic content on this website, including notes, summaries, diagrams, guides, project documentation, and reflections, represents my personal understanding and interpretation of the subjects discussed. Content may simplify, reorganize, or rephrase official material for clarity and should not replace lectures, textbooks, professional advice, or official course documentation.': 'المحتوى الأكاديمي في هذا الموقع، بما فيه الملاحظات والملخصات والمخططات والأدلة وتوثيق المشاريع والتأملات، يمثل فهمي وتفسيري الشخصي للمواضيع. ممكن يكون المحتوى مبسط أو معاد ترتيبه أو صياغته للتوضيح، وما يعتبر بديلًا للمحاضرات أو الكتب أو المشورة المهنية أو التوثيق الرسمي للمقررات.',
    'While care is taken to support accuracy, errors or omissions may exist.': 'مع الحرص على الدقة، ممكن توجد أخطاء أو معلومات ناقصة.',
    'University Affiliation': 'الارتباط بالجامعة',
    'This website is independently maintained and is not formally affiliated with, endorsed by, or operated on behalf of Prince Sultan University or any other academic institution. Course names, concepts, and structures are referenced for documentation purposes only. Rights to official course materials remain with their respective institutions, instructors, and authors.': 'هذا الموقع يُدار بشكل مستقل، وليس تابعًا رسميًا أو معتمدًا أو مشغلًا بالنيابة عن جامعة الأمير سلطان أو أي جهة أكاديمية أخرى. أسماء المقررات والمفاهيم والهياكل تُذكر لأغراض التوثيق فقط، وتبقى حقوق المواد الرسمية للجهات والمدرسين والمؤلفين المعنيين.',
    'Intellectual Property': 'الملكية الفكرية',
    'Some materials may reference standard textbooks, academic frameworks, research papers, or publicly available educational resources. Where applicable, attribution is provided. All original notes, summaries, designs, source code, and structured documentation on this website are my own intellectual work unless otherwise stated.': 'بعض المواد ممكن تشير لكتب معيارية أو أطر أكاديمية أو أوراق بحثية أو مصادر تعليمية متاحة للعامة. يتم ذكر المصادر عند الحاجة. كل الملاحظات والملخصات والتصاميم والكود والتوثيق المنظم الأصلي في الموقع هو عملي الفكري ما لم يُذكر غير ذلك.',
    'Permitted Use': 'الاستخدام المسموح',
    'Use materials for personal study and educational reference': 'استخدام المواد للدراسة الشخصية والمرجع التعليمي',
    'Reference concepts with proper attribution': 'الرجوع للمفاهيم مع ذكر المصدر بشكل صحيح',
    'Reproduce content commercially': 'نسخ المحتوى لأغراض تجارية',
    'Redistribute materials without appropriate credit or permission': 'إعادة توزيع المواد بدون ذكر المصدر أو إذن مناسب',
    'Present the work as official institutional documentation': 'تقديم العمل كأنه توثيق رسمي لجهة أكاديمية',
    'No Academic Liability': 'لا مسؤولية أكاديمية',
    'This website does not guarantee academic outcomes, grades, examination performance, or the suitability of content for a particular course or assessment. Visitors are responsible for verifying information against official academic sources.': 'هذا الموقع ما يضمن نتائج أكاديمية أو درجات أو أداء في الاختبارات أو مناسبة المحتوى لمقرر أو تقييم معين. الزوار مسؤولون عن التحقق من المعلومات من المصادر الأكاديمية الرسمية.',
    'If you believe any content requires correction, clarification, attribution adjustment, or removal, please reach out directly.': 'إذا تشوفون أن أي محتوى يحتاج تصحيح أو توضيح أو تعديل في نسب المصدر أو إزالة، تواصلوا معي مباشرة.',
    'Waad Kernel': 'Waad Kernel', 'Software Engineering Student': 'هندسة البرمجيات', 'AI Minor': 'تخصص فرعي في الذكاء الاصطناعي',
    'SOFTWARE_ENG': 'هندسة برمجيات', 'AI_MINOR': 'ذكاء اصطناعي', 'BILINGUAL': 'ثنائي اللغة',
    'Building systems. Documenting knowledge. In Arabic and English.': 'مساحة تجمع بين هندسة البرمجيات والذكاء الاصطناعي وتوثيق المعرفة التقنية.',
    'Selected Works': 'أعمال مختارة', 'Knowledge Base': 'قاعدة المعرفة',
    'Explore Waad Kernel': 'استكشف محتوى Waad Kernel',
    'Explore My Work': 'استعرض مشاريعي',
    'Explore Projects': 'استعرض مشاريعي',
    'Explore Knowledge': 'استعرض المعرفة',
    'Guides': 'أدلة', 'Tips': 'نصائح', 'Resources': 'مصادر',
    'Neural Task Scheduler': 'مجدول مهام عصبي', 'Kernel Diagnostics UI': 'واجهة تشخيص كيرنل', 'Bilingual Data Parser': 'محلل بيانات ثنائي اللغة',
    'Distributed computing architecture optimized by deep reinforcement learning for load balancing across cluster nodes.': 'معمارية حوسبة موزعة محسّنة بالتعلم المعزز العميق لموازنة الأحمال بين عُقد المجموعة.',
    'Real-time hardware monitoring interface utilizing WebGL for rendering high-density telemetry data from native OS APIs.': 'واجهة تراقب العتاد لحظيًا وتستخدم WebGL لعرض بيانات قياس كثيفة من واجهات نظام التشغيل.',
    'A highly efficient text processing engine capable of simultaneous semantic analysis in both Arabic and English document structures.': 'محرك معالجة نصوص عالي الكفاءة يقدر يحلل المعنى في المستندات العربية والإنجليزية بنفس الوقت.',
    'Understanding Memory Management in Rust': 'فهم إدارة الذاكرة في Rust', 'Building Scalable APIs with Graph QL': 'بناء واجهات API قابلة للتوسع باستخدام GraphQL',
    'Profile Data': 'بيانات الملف', 'Waad Ibrahim': 'وعد إبراهيم', 'Alhwaimel': 'الهويميل',
    "I'm a Software Engineering student at Prince Sultan University with a minor in Artificial Intelligence. I enjoy building systems, exploring AI applications, and documenting what I learn in both Arabic and English.": 'أنا طالبة هندسة برمجيات في جامعة الأمير سلطان، وعندي تخصص فرعي في الذكاء الاصطناعي. أحب أبني الأنظمة، وأستكشف تطبيقات الذكاء الاصطناعي، وأوثّق اللي أتعلمه بالعربي والإنجليزي.',
    '"I build software systems, study artificial intelligence, and transform what I learn into practical knowledge that others can use. Waad Kernel is my digital space for documenting ideas, sharing technical knowledge, and showcasing my academic and personal growth."': '"أبني أنظمة برمجية، وأدرس الذكاء الاصطناعي، وأحوّل اللي أتعلمه لمعرفة عملية يقدر غيري يستفيد منها. Waad Kernel هي مساحتي الرقمية لتوثيق الأفكار، ومشاركة المعرفة التقنية، وعرض تطوري الأكاديمي والشخصي."',
    'My Journey': 'رحلتي', 'Started Software Engineering at Prince Sultan University': 'بدأت دراسة هندسة البرمجيات في جامعة الأمير سلطان',
    'Developed a strong interest in Artificial Intelligence': 'صار عندي اهتمام كبير بالذكاء الاصطناعي', 'Began building academic and technical projects': 'بدأت أبني مشاريع أكاديمية وتقنية',
    'Started documenting technical knowledge systematically': 'بدأت أوثّق المعرفة التقنية بشكل منظّم', 'Created Waad Kernel': 'أنشأت Waad Kernel',
    'What I Focus On': 'وش أركز عليه', 'Software Engineering': 'هندسة البرمجيات', 'Artificial Intelligence': 'الذكاء الاصطناعي', 'Databases': 'قواعد البيانات',
    'Focused on software design, system thinking, architecture, and building practical solutions.': 'أركز على تصميم البرمجيات، والتفكير بالأنظمة، والمعمارية، وبناء حلول عملية.',
    'Interested in machine learning, natural language processing, explainable AI, and real-world AI applications.': 'مهتمة بتعلم الآلة، ومعالجة اللغة الطبيعية، والذكاء الاصطناعي القابل للتفسير، وتطبيقاته الواقعية.',
    'Interested in database design, SQL development, and organizing information effectively.': 'مهتمة بتصميم قواعد البيانات، وتطوير SQL، وتنظيم المعلومات بفعالية.',
    'Languages': 'اللغات', 'Arabic': 'العربية', 'English': 'الإنجليزية', 'Native': 'اللغة الأم', 'Professional': 'احترافي',
    'Why Waad Kernel Exists': 'ليش Waad Kernel موجودة', 'Core Objective': 'الهدف الأساسي',
    'Waad Kernel exists because knowledge becomes more valuable when it is organized and shared. Through projects, coursework, and independent learning, I aim to transform what I learn into practical knowledge that other students can benefit from, especially within the Arabic technical community.': 'Waad Kernel موجودة لأن المعرفة تصير أقيم لما تكون مرتبة ومشتركة. من خلال المشاريع والدراسة والتعلم الذاتي، هدفي أحوّل اللي أتعلمه لمعرفة عملية يستفيد منها الطلاب والطالبات، خصوصًا في المجتمع التقني العربي.',
    'Share knowledge clearly': 'مشاركة المعرفة بوضوح', 'Document learning deeply': 'توثيق التعلم بعمق', 'Build useful technical resources': 'بناء موارد تقنية مفيدة', 'Contribute to Arabic technical content': 'الإسهام في المحتوى التقني العربي',
    'Resume': 'السيرة الذاتية', 'Available for viewing and download.': 'متاحة للعرض والتحميل.', 'View Resume': 'عرض السيرة', 'Download CV': 'تحميل السيرة',
    "Let's Connect": 'خلّنا نتواصل', 'Open to discussions, questions, and collaborations.': 'متاحة للنقاشات والأسئلة وفرص التعاون.',
    'Project Archive': 'أرشيف المشاريع', 'A collection of academic, technical, and research projects built throughout my Software Engineering and Artificial Intelligence journey.': 'مجموعة مشاريع أكاديمية وتقنية وبحثية بنيتها خلال رحلتي في هندسة البرمجيات والذكاء الاصطناعي.',
    'My Destination': 'وجهتي', 'Arabic Sentiment Analysis': 'تحليل المشاعر العربية', 'MySchool Database': 'قاعدة بيانات مدرستي', 'SVD Image Compression': 'ضغط الصور باستخدام SVD',
    'Key Highlights': 'أبرز النقاط', 'View Details': 'عرض التفاصيل', 'Building Through Learning': 'البناء من خلال التعلم',
    'Accessibility-focused platform designed to help users discover accessible locations, services, and events.': 'منصة تركّز على سهولة الوصول وتساعد المستخدمين يكتشفون الأماكن والخدمات والفعاليات المهيأة.',
    'Research project examining gender bias in Arabic sentiment analysis models using Explainable AI techniques.': 'مشروع بحثي يدرس التحيّز الجندري في نماذج تحليل المشاعر العربية باستخدام تقنيات الذكاء الاصطناعي القابل للتفسير.',
    'Database management system designed to manage students, teachers, courses, enrollments, and administration workflows.': 'نظام إدارة قواعد بيانات لتنظيم الطلاب والمعلمين والمقررات والتسجيل وسير العمل الإداري.',
    'Image compression project using Singular Value Decomposition to reduce image size while preserving quality.': 'مشروع ضغط صور يستخدم تحليل القيم المفردة لتقليل حجم الصورة مع الحفاظ على الجودة.',
    'Every project in Waad Kernel represents a stage in my learning journey. Together they reflect my growth across software engineering, artificial intelligence, databases, and technical problem solving.': 'كل مشروع في Waad Kernel يمثل مرحلة من رحلة تعلمي، وكلها تعكس تطوري في هندسة البرمجيات والذكاء الاصطناعي وقواعد البيانات وحل المشكلات التقنية.',
    'Accessibility': 'سهولة الوصول', 'User-centered design': 'تصميم متمحور حول المستخدم', 'Interactive maps': 'خرائط تفاعلية', 'Event management': 'إدارة الفعاليات',
    'Accessibility-focused features': 'خصائص تركّز على سهولة الوصول', 'Recommendation system': 'نظام توصيات',
    'Full-stack integration': 'تكامل الواجهة والخلفية', 'Research methodology': 'منهجية البحث', 'Dataset generation': 'إنشاء مجموعة البيانات', 'Evaluation': 'التقييم',
    'Explainable AI': 'ذكاء اصطناعي قابل للتفسير', 'Arabic NLP': 'معالجة اللغة العربية', 'SQL implementation': 'تنفيذ SQL', 'Relational schema': 'المخطط العلاقي',
    'Image processing': 'معالجة الصور', 'Matrix decomposition': 'تحليل المصفوفات', 'Linear algebra applications': 'تطبيقات الجبر الخطي',
    'Curated Learning': 'تعلم منتقى', 'Practical technical knowledge, guides, tutorials, and learning resources in Arabic and English.': 'معرفة تقنية عملية، وأدلة، وشروحات، ومصادر تعلم بالعربي والإنجليزي.',
    'Core Domains': 'المجالات الأساسية', 'Learning Guides': 'أدلة التعلم', 'Tips & Tricks': 'نصائح وحيل', 'Curated Resources': 'مصادر منتقاة',
    'Topics related to software engineering, system design, software architecture, database design, UML, requirements engineering, design patterns, and software testing.': 'مواضيع عن هندسة البرمجيات، وتصميم الأنظمة، والمعمارية، وقواعد البيانات، وUML، وهندسة المتطلبات، وأنماط التصميم، واختبار البرمجيات.',
    'Topics related to machine learning, AI concepts, explainable AI, sentiment analysis, and practical applications.': 'مواضيع عن تعلم الآلة، ومفاهيم الذكاء الاصطناعي، والذكاء القابل للتفسير، وتحليل المشاعر، والتطبيقات العملية.',
    'How to Draw UML Diagrams': 'كيف ترسم مخططات UML', 'Design a Database from Scratch': 'صمّم قاعدة بيانات من الصفر', 'Build a Software Project': 'ابنِ مشروع برمجي',
    'Understanding Design Patterns': 'فهم أنماط التصميم', 'AI Concepts Explained Simply': 'مفاهيم الذكاء الاصطناعي ببساطة', 'Normalization Rules in Practice': 'قواعد التطبيع عمليًا',
    'A practical guide to visualizing software architecture using standardized UML conventions and structures.': 'دليل عملي لتصوير معمارية البرمجيات باستخدام معايير وهياكل UML.',
    'Step-by-step tutorial on translating real-world requirements into a solid relational database schema.': 'شرح خطوة بخطوة لتحويل متطلبات واقعية إلى مخطط قاعدة بيانات علائقية متين.',
    'Walkthrough of the full software development lifecycle from initial requirements to final deployment.': 'شرح كامل لدورة حياة تطوير البرمجيات من المتطلبات الأولى إلى النشر النهائي.',
    'A deep dive into common structural, creational, and behavioral design patterns in software.': 'تعمّق في أنماط التصميم الهيكلية والإنشائية والسلوكية الشائعة في البرمجيات.',
    'Breaking down complex artificial intelligence and machine learning paradigms for beginners.': 'تبسيط مفاهيم الذكاء الاصطناعي وتعلم الآلة المعقدة للمبتدئين.',
    'Practical examples of moving data from 1NF to 3NF to eliminate anomalies.': 'أمثلة عملية لنقل البيانات من 1NF إلى 3NF لتقليل المشاكل.',
    'Common UML Mistakes': 'أخطاء UML الشائعة', 'SQL Mistakes Beginners Make': 'أخطاء SQL عند المبتدئين', 'Choosing the Right Design Pattern': 'اختيار نمط التصميم المناسب',
    'Project Presentation Tips': 'نصائح لعرض المشروع', 'Documentation Tips': 'نصائح للتوثيق', 'Books': 'كتب', 'Websites': 'مواقع', 'References': 'مراجع',
    'Avoiding Data Leakage': 'تجنب تسرّب البيانات', 'Choosing Evaluation Metrics': 'اختيار مقاييس التقييم', 'Documenting Model Experiments': 'توثيق تجارب النماذج',
    'Workspace': 'مساحة العمل', 'Practical tools designed to help students plan, structure, and build better software engineering and AI projects.': 'أدوات عملية تساعد الطلاب والطالبات يخططون وينظمون ويبنون مشاريع أفضل في هندسة البرمجيات والذكاء الاصطناعي.',
    'UML Assistant': 'مساعد UML', 'SRS Builder': 'منشئ SRS', 'Database Planner': 'مخطط قاعدة البيانات', 'Project Planner': 'مخطط المشروع', 'Presentation Planner': 'مخطط العرض',
    'Best For': 'مناسب لـ', 'Available': 'متاح', 'Coming Soon': 'قريبًا', 'Open Tool': 'فتح الأداة', 'Built for Student Projects': 'مصممة لمشاريع الطلاب',
    'Helps students structure UML diagrams by identifying actors, use cases, classes, interactions, and system flows.': 'يساعد الطلاب يرتبون مخططات UML بتحديد الأطراف وحالات الاستخدام والفئات والتفاعلات وتدفقات النظام.',
    'Helps students organize a Software Requirements Specification document by structuring the problem, scope, requirements, constraints, and system features.': 'يساعد الطلاب ينظمون وثيقة مواصفات متطلبات البرمجيات من خلال ترتيب المشكلة والنطاق والمتطلبات والقيود وخصائص النظام.',
    'Helps students convert project requirements into database entities, relationships, tables, primary keys, foreign keys, and SQL planning.': 'يساعد الطلاب يحوّلون متطلبات المشروع لكيانات وعلاقات وجداول ومفاتيح أساسية وخارجية وخطة SQL.',
    'Helps students break a project into phases, milestones, deliverables, tasks, and presentation-ready progress.': 'يساعد الطلاب يقسمون المشروع لمراحل ومحطات وتسليمات ومهام وتقدم جاهز للعرض.',
    'Helps students prepare clear project presentations by organizing slides, speaking points, demo flow, and expected questions.': 'يساعد الطلاب يجهزون عروض واضحة بتنظيم الشرائح ونقاط الحديث وتسلسل العرض والأسئلة المتوقعة.',
    'These tools are designed to support the parts of technical projects that students often struggle with: planning, documentation, diagrams, databases, and presentations.': 'هالأدوات مصممة لدعم الجوانب اللي غالبًا يتعب فيها الطلاب بالمشاريع التقنية: التخطيط، والتوثيق، والمخططات، وقواعد البيانات، والعروض.',
    'Beginner': 'مبتدئ', 'Intermediate': 'متوسط', 'Advanced': 'متقدم', 'Guide': 'دليل', 'Tutorial': 'شرح', 'Concepts': 'مفاهيم', 'Fundamentals': 'أساسيات',
    'System Design': 'تصميم النظام', 'Database Design': 'تصميم قاعدة البيانات', 'Machine Learning': 'تعلم الآلة', 'Sentiment Analysis': 'تحليل المشاعر',
    'Requirements': 'المتطلبات', 'Architecture': 'المعمارية', 'Design Patterns': 'أنماط التصميم', 'Testing': 'الاختبار', 'Database Systems': 'أنظمة قواعد البيانات',
    'Use Case Diagrams': 'مخططات حالات الاستخدام', 'Class Diagrams': 'مخططات الفئات', 'Sequence Diagrams': 'مخططات التسلسل', 'Activity Diagrams': 'مخططات الأنشطة',
    'Problem Statement': 'وصف المشكلة', 'Scope': 'النطاق', 'Functional Requirements': 'المتطلبات الوظيفية', 'Non-Functional Requirements': 'المتطلبات غير الوظيفية',
    'System Features': 'خصائص النظام', 'ERD Planning': 'تخطيط ERD', 'Table Design': 'تصميم الجداول', 'Relationships': 'العلاقات', 'SQL Structure': 'هيكلة SQL',
    'Project Roadmap': 'خارطة المشروع', 'Task Breakdown': 'تقسيم المهام', 'Weekly Plan': 'الخطة الأسبوعية', 'Deliverables': 'التسليمات',
    'Slide Structure': 'هيكلة الشرائح', 'Script Planning': 'تخطيط النص', 'Demo Flow': 'تسلسل العرض', 'Q&A Preparation': 'الاستعداد للأسئلة',
    'Linear Algebra': 'الجبر الخطي', 'Mathematics': 'الرياضيات', 'Normalization': 'التطبيع', 'Research': 'البحث', 'UI/UX': 'تجربة وواجهة المستخدم'
};

const originalText = new WeakMap();
const originalAttributes = new WeakMap();
const getLanguage = () => localStorage.getItem('waad-language') || 'en';
const getTheme = () => localStorage.getItem('waad-theme') || 'dark';
const currentPage = () => document.body.dataset.page || 'home';

function translateTextNode(node, language) {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const source = originalText.get(node);
    const trimmed = source.trim();
    if (!trimmed) return;
    const translated = language === 'ar' ? ar[trimmed] : trimmed;
    node.nodeValue = source.replace(trimmed, translated || trimmed);
}

function applyLanguage(language) {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.body.dataset.language = language;
    if (!document.documentElement.dataset.englishTitle) document.documentElement.dataset.englishTitle = document.title;
    document.title = language === 'ar' ? arabicTitles[currentPage()] : document.documentElement.dataset.englishTitle;
    updateControlLabels();

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: (node) => node.nodeValue.trim() && !node.parentElement.closest('script, style')
            ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
    });
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => translateTextNode(node, language));

    document.querySelectorAll('[placeholder], [aria-label], [title]').forEach((element) => {
        if (!originalAttributes.has(element)) {
            originalAttributes.set(element, ['placeholder', 'aria-label', 'title'].reduce((values, attribute) => {
                if (element.hasAttribute(attribute)) values[attribute] = element.getAttribute(attribute);
                return values;
            }, {}));
        }
        Object.entries(originalAttributes.get(element)).forEach(([attribute, value]) => {
            element.setAttribute(attribute, language === 'ar' ? (ar[value] || value) : value);
        });
    });
    updateControlLabels();
}

function setLanguage(language) {
    localStorage.setItem('waad-language', language);
    applyLanguage(language);
    document.querySelectorAll('site-header').forEach((header) => header.render());
    document.querySelectorAll('site-footer').forEach((footer) => footer.render());
    applyLanguage(language);
}

function setTheme(theme) {
    localStorage.setItem('waad-theme', theme);
    document.documentElement.dataset.theme = theme;
    updateControlLabels();
}

function updateControlLabels() {
    const language = getLanguage();
    const theme = getTheme();
    document.querySelectorAll('[data-language-toggle]').forEach((button) => {
        button.textContent = language === 'en' ? 'Arabic' : 'English';
        button.setAttribute('aria-label', language === 'en' ? 'Switch to Arabic' : 'Switch to English');
    });
    document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
        const nextThemeLabel = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
        button.textContent = language === 'ar' ? (ar[nextThemeLabel] || nextThemeLabel) : nextThemeLabel;
        button.setAttribute('aria-label', theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode');
    });
}

function controls() {
    return `
        <div class="kernel-controls" aria-label="Site controls">
            <button type="button" class="kernel-control search-trigger" data-search-open aria-label="Search">Search</button>
            <button type="button" class="kernel-control" data-language-toggle>Arabic</button>
            <button type="button" class="kernel-control" data-theme-toggle>Light Mode</button>
        </div>`;
}

function searchDialog() {
    return `
        <dialog class="kernel-search-dialog" data-search-dialog>
            <form method="dialog" class="kernel-search-panel">
                <div class="kernel-search-head">
                    <label for="kernel-search-input">Search Waad Kernel</label>
                    <button value="close" aria-label="Close">Close</button>
                </div>
                <input id="kernel-search-input" type="search" autocomplete="off" placeholder="Type to search pages, projects, guides, and tools..." data-search-input>
                <div class="kernel-search-results" data-search-results></div>
            </form>
        </dialog>`;
}

function initializeControls(root) {
    root.querySelectorAll('[data-language-toggle]').forEach((button) => button.addEventListener('click', () => {
        setLanguage(getLanguage() === 'en' ? 'ar' : 'en');
    }));
    root.querySelectorAll('[data-theme-toggle]').forEach((button) => button.addEventListener('click', () => {
        setTheme(getTheme() === 'dark' ? 'light' : 'dark');
    }));
    root.querySelector('[data-search-open]')?.addEventListener('click', () => {
        const dialog = document.querySelector('[data-search-dialog]');
        dialog.showModal();
        dialog.querySelector('input').focus();
    });
}

function initializeKnowledgeModules() {
    if (currentPage() !== 'knowledge') return;
    const selectors = [...document.querySelectorAll('[data-domain-select]')];
    const content = [...document.querySelectorAll('[data-domain-content]')];
    const setDomain = (domain) => {
        localStorage.setItem('waad-knowledge-domain', domain);
        selectors.forEach((selector) => selector.setAttribute('aria-pressed', String(selector.dataset.domainSelect === domain)));
        content.forEach((item) => {
            item.hidden = item.dataset.domainContent !== domain;
        });
    };

    selectors.forEach((selector) => {
        selector.addEventListener('click', () => setDomain(selector.dataset.domainSelect));
        selector.addEventListener('keydown', (event) => {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                setDomain(selector.dataset.domainSelect);
            }
        });
    });

    content.forEach((item) => item.addEventListener('click', (event) => {
        if (item.getAttribute('href') === '#') event.preventDefault();
    }));

    setDomain(localStorage.getItem('waad-knowledge-domain') || 'software');
}

class SiteHeader extends HTMLElement {
    connectedCallback() { this.render(); }

    render() {
        this.style.display = 'block';
        const page = currentPage();
        this.innerHTML = (page === 'home' ? this.homeHeader() : this.innerHeader(page)) + searchDialog();
        initializeControls(this);
        const dialog = this.querySelector('[data-search-dialog]');
        const input = dialog.querySelector('[data-search-input]');
        const results = dialog.querySelector('[data-search-results]');
        input.addEventListener('input', () => this.runSearch(input.value, results));
        this.runSearch('', results);

        const menuButton = this.querySelector('[data-menu-button]');
        const mobileMenu = this.querySelector('[data-mobile-menu]');
        menuButton?.addEventListener('click', () => {
            const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
            menuButton.setAttribute('aria-expanded', String(!isOpen));
            mobileMenu.hidden = isOpen;
        });
    }

    homeHeader() {
        const links = pages.filter(({ id }) => id !== 'home').map(({ label, href }) => `<a href="${href}">${label}</a>`).join('');
        return `<header class="home-site-header">
            <a class="logo-group" href="index.html" aria-label="Waad Kernel home"><span class="logo-box">WK</span><span class="brand-name">Waad Kernel</span></a>
            <nav class="home-nav" aria-label="Primary navigation">${links}</nav>
            ${controls()}
        </header>`;
    }

    innerHeader(page) {
        const desktopLinks = pages.map((item) => this.navLink(item, page)).join('');
        const mobileLinks = pages.map((item) => this.mobileNavLink(item, page)).join('');
        return `<nav class="fixed top-0 w-full z-50 glass-panel border-t-0 border-l-0 border-r-0 border-b border-white/5 py-3 rounded-none kernel-main-nav" aria-label="Primary navigation">
            <div class="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center gap-4">
                <a href="index.html" class="flex items-center gap-3 group shrink-0" aria-label="Waad Kernel home">
                    <span class="w-8 h-8 rounded bg-cyan-dim border border-cyan/30 flex items-center justify-center text-cyan"><i class="ph-fill ph-hexagon"></i></span>
                    <span class="font-display font-bold text-lg tracking-wider text-white">WAAD<span class="text-cyan font-mono font-normal opacity-80">KERNEL</span></span>
                </a>
                <div class="kernel-desktop-links hidden lg:flex items-center gap-5 font-mono text-xs uppercase tracking-widest text-slate-400">${desktopLinks}</div>
                <div class="hidden md:block">${controls()}</div>
                <button type="button" class="lg:hidden text-slate-300 hover:text-cyan transition-colors" data-menu-button aria-expanded="false" aria-controls="mobile-navigation" aria-label="Open navigation menu"><i class="ph ph-list text-2xl"></i></button>
            </div>
            <div id="mobile-navigation" class="lg:hidden max-w-7xl mx-auto px-6 pt-4" data-mobile-menu hidden>
                <div class="glass-panel rounded-xl p-4 flex flex-col gap-2 font-mono text-sm uppercase tracking-widest">${mobileLinks}${controls()}</div>
            </div>
        </nav>`;
    }

    navLink(item, page) {
        const active = item.id === page;
        return `<a href="${item.href}" class="${active ? 'text-cyan font-medium relative text-glow-cyan' : 'hover:text-white transition-colors duration-300'}"${active ? ' aria-current="page"' : ''}>${item.label}</a>`;
    }

    mobileNavLink(item, page) {
        const active = item.id === page;
        return `<a href="${item.href}" class="${active ? 'text-cyan bg-cyan-dim border border-cyan/20' : 'text-slate-300 hover:text-white hover:bg-white/5'} rounded-lg px-4 py-3 transition-colors"${active ? ' aria-current="page"' : ''}>${item.label}</a>`;
    }

    runSearch(query, results) {
        const language = getLanguage();
        const value = query.trim().toLocaleLowerCase();
        const matches = searchItems.filter((page) => !value || `${page.label} ${page.ar} ${page.description}`.toLocaleLowerCase().includes(value));
        results.innerHTML = matches.length ? matches.map((page) => `
            <a href="${page.href}">
                <strong>${language === 'ar' ? page.ar : page.label}</strong>
                <span>${language === 'ar' ? 'اضغطي للانتقال وعرض المحتوى' : page.description}</span>
            </a>`).join('') : `<p>${language === 'ar' ? ar['No results found.'] : 'No results found.'}</p>`;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() { this.render(); }
    render() {
        this.style.display = 'block';
        const year = new Date().getFullYear();
        this.innerHTML = `
            <footer class="professional-footer">
                <div class="professional-footer-grid">
                    <div class="footer-brand">
                        <a href="index.html" class="footer-logo" aria-label="Waad Kernel home"><span>WK</span><strong>WAAD KERNEL</strong></a>
                        <p>Software engineering, artificial intelligence, and practical technical knowledge documented with clarity.</p>
                    </div>
                    <div class="footer-column">
                        <h2>Explore</h2>
                        <a href="about-waad-alhwaimel.html">About</a>
                        <a href="software-engineering-projects.html">Projects</a>
                        <a href="software-engineering-knowledge-base.html">Knowledge</a>
                        <a href="student-project-planning-tools.html">Tools</a>
                    </div>
                    <div class="footer-column">
                        <h2>Legal</h2>
                        <a href="copyright-and-usage-policy.html">Copyright & Usage Policy</a>
                        <a href="academic-disclaimer.html">Academic Disclaimer</a>
                    </div>
                    <div class="footer-column">
                        <h2>Contact</h2>
                        <a href="mailto:waad@waad-kernel.com">Email Waad</a>
                        <a href="https://github.com/walhwaimel" target="_blank" rel="noopener noreferrer">GitHub</a>
                        <a href="https://www.linkedin.com/in/waad-alhwaimel" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    </div>
                </div>
                <div class="professional-footer-bottom">
                    <span>WAAD_KERNEL &copy; ${year}. All rights reserved.</span>
                    <span>Designed and documented by Waad Ibrahim Alhwaimel.</span>
                </div>
            </footer>`;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);

document.documentElement.dataset.theme = getTheme();
window.addEventListener('DOMContentLoaded', () => {
    setTheme(getTheme());
    applyLanguage(getLanguage());
    initializeKnowledgeModules();
});
