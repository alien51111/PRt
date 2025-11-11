import type { ServiceCategory, Project, CoreBelief, ValueStat } from './types';

interface Translations {
  navLinks: { name: string; href: string }[];
  hero: {
    title: { part1: string; highlighted: string; part2: string };
    subtitle: string;
    button: string;
  };
  about: {
    title: string;
    aboutText: string;
    mission: { title: string; text: string };
    vision: { title: string; text: string };
    coreBeliefs: { title: string; items: CoreBelief[] };
  };
  services: {
      title: string;
      items: ServiceCategory[];
  };
  projects: {
      title: string;
      subtitle: string;
      impactLabel: string;
      items: Project[];
  };
  valueStats: ValueStat[];
  contact: {
      title: string;
      subtitle: string;
      details: { title: string; address: string; email: string; phone: string; };
      careers: { title: string; text: string; link: string; };
      form: { 
          name: string; 
          email: string; 
          message: string; 
          submit: string; 
          sending: string;
          success: { title: string; message: string; };
       };
  };
  footer: {
      subtitle: string;
      email: string;
      copyright: string;
  };
}

export const translations: { [key: string]: Translations } = {
  en: {
    navLinks: [
      { name: 'About', href: '#about' },
      { name: 'Services', href: '#services' },
      { name: 'Projects', href: '#projects' },
      { name: 'Contact', href: '#contact' },
    ],
    hero: {
        title: { part1: 'NARRATIVES THAT', highlighted: 'INFLUENCE', part2: 'GENERATIONS' },
        subtitle: 'We turn everyday communication into powerful stories that shape society and build trust.',
        button: 'TELL YOUR STORY',
    },
    about: {
        title: "Bridging Heritage & Innovation",
        aboutText: "Founded in 2022, PRt is a public relations and communications agency that bridges heritage and innovation. Rooted in Iraqi tradition yet globally aware, PRt transforms brands into narratives that shape culture, inspire trust, and influence generations.",
        mission: {
            title: "Our Mission",
            text: "To empower brands with narratives that ignite conversations, build trust, and inspire action across communities."
        },
        vision: {
            title: "Our Vision",
            text: "To be recognized as Iraq’s foremost storyteller, turning everyday communication into powerful narratives that shape society and influence generations."
        },
        coreBeliefs: {
            title: "Our Core Beliefs",
            items: [
                { title: "Integrity Above All", description: "We protect your narrative as diligently as scribes of history.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`},
                { title: "Extraordinary from the Ordinary", description: "We find poetry in the everyday, transforming simplicity into powerful storytelling.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`},
                { title: "Milestones That Matter", description: "Our success is measured by cultural impact, not just campaigns.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`},
                { title: "Innovation as a Creed", description: "We challenge conventions and explore uncharted possibilities.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><path d="M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8" /><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" /></svg>`},
                { title: "Action Over Words", description: "Commitments are defined by actions, not promises.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>`},
                { title: "Unity in Diversity", description: "Our strength lies in diverse perspectives that enrich our story.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/></svg>`},
            ],
        },
    },
    services: {
        title: "Our Expertise",
        items: [
            { title: "Strategic Communication & Influence", description: "We shape perceptions and build powerful reputations by placing your brand at the center of influential conversations. Our strategies ensure your voice is heard by the people who matter most.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`, items: ["Thought Leadership", "Public Affairs & Advocacy", "Crisis Management", "Media Relations", "Internal Communications", "Branding & Reputation Management"] },
            { title: "Creative & Digital Storytelling", description: "In the digital age, stories are the currency of connection. We craft compelling, multi-platform narratives that capture attention, drive engagement, and build lasting communities around your brand.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`, items: ["Content Creation", "Campaign Development", "Digital & Social Media PR", "Influencer Marketing", "Media Monitoring & Reporting", "Product & Service Launches"] },
            { title: "Events & Community Activation", description: "We create unforgettable experiences that bring your brand to life. From high-profile launches to grassroots community programs, we build moments of connection that foster loyalty and advocacy.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`, items: ["Event Creation & Management", "On-Ground Activation", "Community Engagement", "Sponsorships & Endorsements", "Strategic Partnerships"] },
            { title: "Insight, Research & Capacity Building", description: "Data-driven decisions are at the heart of impactful communication. We provide the market insights, analytics, and training needed to navigate complex landscapes and empower your team to excel.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`, items: ["Market Research & Analytics", "Training & Media Coaching"] },
        ],
    },
    projects: {
        title: "Milestones That Matter",
        subtitle: "Our success is measured by cultural impact, not just campaigns. Here are a few of our proudest moments.",
        impactLabel: "Impact",
        items: [
            { title: "Yalla Formula", description: "A telecom campaign blending Formula One excitement with data-driven storytelling.", impact: "Engaged 200,000+ participants, generated millions of impressions, and boosted brand affinity.", image: "https://www.datocms-assets.com/134341/1745407148-pexels-tara-winstead-8386440-1.jpg?ar64=MTQxOjY1&auto=format&crop=focalpoint&fit=crop&fm=webp" },
            { title: "Ramadan Festival", description: "A nationwide celebration reflecting Iraqi values and community.", impact: "Over 25,000 attendees annually, strengthening emotional and cultural brand connection.", image: "https://kurdishglobe.krd/wp-content/uploads/2025/03/IMG-20250310-WA0023.jpg" },
            { title: "AI for Influencers", description: "Workshops introducing AI tools to top Iraqi influencers.", impact: "Elevated content quality and positioned PRt as a leader in tech innovation.", image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=3540&auto=format&fit=crop" },
            { title: "LAILA Campaign", description: "Iraq’s first AI-powered telecom assistant.", impact: "Boosted digital engagement and established the client’s leadership in tech-driven customer care.", image: "https://media.licdn.com/dms/image/v2/D4D22AQFi21LfZL70Jg/feedshare-shrink_800/feedshare-shrink_800/0/1731783981800?e=2147483647&v=beta&t=VbN6o84xPaaLyyt2McSVKwNnf-xggctsbY2FQLTedRY" },
            { title: "TechWave Forums", description: "Technology events inspiring Iraq’s next generation of innovators.", impact: "Thousands engaged; reinforced client brands as tech education pioneers.", image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=3540&auto=format=fit&crop" },
        ],
    },
    valueStats: [
        { value: 3.5, decimals: 1, prefix: "$", suffix: "M+", label: "Managed Annually" },
        { value: 30, suffix: "+", label: "Staff Across Iraq" },
        { value: 300, suffix: "+", label: "On-Ground Promoters" },
        { value: 2, label: "Offices Nationwide" },
    ],
    contact: {
        title: "Let's Build Together",
        subtitle: "Have a project in mind or just want to say hello? We'd love to hear from you.",
        details: { title: "Contact Details", address: "Head Office: Baghdad, Iraq", email: "info@prt.agency", phone: "+964 772 211 1118" },
        careers: { title: "Careers", text: "We're always looking for talented individuals. Check our open positions.", link: "View Openings" },
        form: { 
            name: "Your Name", 
            email: "Your Email", 
            message: "Your Message", 
            submit: "Send Message", 
            sending: "Sending...",
            success: { title: "Thank You!", message: "Your message has been sent successfully. We'll be in touch soon." }
         },
    },
    footer: {
        subtitle: "Bridging Heritage & Innovation",
        email: "info@prt.agency",
        copyright: "© {year} PRt Agency. All Rights Reserved.",
    }
  },
  ar: {
    navLinks: [
      { name: 'حولنا', href: '#about' },
      { name: 'خدماتنا', href: '#services' },
      { name: 'مشاريعنا', href: '#projects' },
      { name: 'تواصل معنا', href: '#contact' },
    ],
    hero: {
        title: { part1: 'روايات', highlighted: 'تُلهم', part2: 'الأجيال' },
        subtitle: 'نحن نحوّل التواصل اليومي إلى قصص قوية تشكل المجتمع وتبني الثقة.',
        button: 'اروِ قصتك',
    },
    about: {
        title: "سد الفجوة بين التراث والابتكار",
        aboutText: "تأسست وكالة PRt في عام 2022، وهي وكالة علاقات عامة واتصالات تسد الفجوة بين التراث والابتكار. متجذرة في التقاليد العراقية ولكنها مواكبة للعالم، تحول PRt العلامات التجارية إلى روايات تشكل الثقافة وتلهم الثقة وتؤثر في الأجيال.",
        mission: {
            title: "مهمتنا",
            text: "تمكين العلامات التجارية بروايات تشعل الحوارات وتبني الثقة وتلهم العمل عبر المجتمعات."
        },
        vision: {
            title: "رؤيتنا",
            text: "أن نكون معروفين كأبرز رواة القصص في العراق، محولين التواصل اليومي إلى روايات قوية تشكل المجتمع وتؤثر في الأجيال."
        },
        coreBeliefs: {
            title: "معتقداتنا الأساسية",
            items: [
                { title: "النزاهة فوق كل شيء", description: "نحمي روايتك بجدية كما يفعل كتبة التاريخ.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`},
                { title: "الاستثنائي من العادي", description: "نجد الشعر في الحياة اليومية، محولين البساطة إلى سرد قصصي قوي.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`},
                { title: "إنجازات ذات معنى", description: "يقاس نجاحنا بالتأثير الثقافي، وليس فقط بالحملات.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`},
                { title: "الابتكار كعقيدة", description: "نتحدى التقاليد ونستكشف الإمكانيات غير المكتشفة.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><path d="M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8" /><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" /></svg>`},
                { title: "الفعل قبل القول", description: "الالتزامات تحددها الأفعال، وليس الوعود.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>`},
                { title: "الوحدة في التنوع", description: "قوتنا تكمن في وجهات النظر المتنوعة التي تثري قصتنا.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/></svg>`},
            ],
        },
    },
    services: {
        title: "خبراتنا",
        items: [
            { title: "الاتصال الاستراتيجي والتأثير", description: "نشكل التصورات ونبني سمعة قوية من خلال وضع علامتك التجارية في قلب الحوارات المؤثرة. تضمن استراتيجياتنا أن صوتك مسموع من قبل الأشخاص الأكثر أهمية.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`, items: ["القيادة الفكرية", "الشؤون العامة والدعوة", "إدارة الأزمات", "العلاقات الإعلامية", "الاتصالات الداخلية", "إدارة العلامة التجارية والسمعة"] },
            { title: "السرد القصصي الإبداعي والرقمي", description: "في العصر الرقمي، القصص هي عملة التواصل. نصنع روايات جذابة ومتعددة المنصات تلفت الانتباه وتحفز التفاعل وتبني مجتمعات دائمة حول علامتك التجارية.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`, items: ["إنشاء المحتوى", "تطوير الحملات", "العلاقات العامة الرقمية ووسائل التواصل الاجتماعي", "التسويق عبر المؤثرين", "مراقبة الإعلام وإعداد التقارير", "إطلاق المنتجات والخدمات"] },
            { title: "الفعاليات وتفعيل المجتمع", description: "نخلق تجارب لا تنسى تعيد الحياة لعلامتك التجارية. من الإطلاقات البارزة إلى البرامج المجتمعية الشعبية، نبني لحظات تواصل تعزز الولاء والدعم.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`, items: ["إنشاء وإدارة الفعاليات", "التفعيل الميداني", "المشاركة المجتمعية", "الرعايات والتأييدات", "الشراكات الاستراتيجية"] },
            { title: "الرؤى والبحث وبناء القدرات", description: "القرارات المستندة إلى البيانات هي جوهر التواصل المؤثر. نقدم رؤى السوق والتحليلات والتدريب اللازم للتنقل في المشاهد المعقدة وتمكين فريقك من التفوق.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`, items: ["أبحاث السوق والتحليلات", "التدريب والتوجيه الإعلامي"] },
        ],
    },
    projects: {
        title: "إنجازات ذات معنى",
        subtitle: "يقاس نجاحنا بالتأثير الثقافي، وليس فقط بالحملات. إليك بعض من أكثر لحظاتنا فخراً.",
        impactLabel: "التأثير",
        items: [
            { title: "يلا فورمولا", description: "حملة اتصالات تمزج بين إثارة الفورمولا واحد والسرد القصصي القائم على البيانات.", impact: "أشركت أكثر من 200,000 مشارك، وولدت ملايين الانطباعات، وعززت تقارب العلامة التجارية.", image: "https://www.datocms-assets.com/134341/1745407148-pexels-tara-winstead-8386440-1.jpg?ar64=MTQxOjY1&auto=format&crop=focalpoint&fit=crop&fm=webp" },
            { title: "مهرجان رمضان", description: "احتفال على مستوى البلاد يعكس القيم والمجتمع العراقي.", impact: "أكثر من 25,000 حاضر سنوياً، مما يعزز الارتباط العاطفي والثقافي بالعلامة التجارية.", image: "https://kurdishglobe.krd/wp-content/uploads/2025/03/IMG-20250310-WA0023.jpg" },
            { title: "الذكاء الاصطناعي للمؤثرين", description: "ورش عمل لتقديم أدوات الذكاء الاصطناعي لكبار المؤثرين العراقيين.", impact: "رفعت جودة المحتوى ورسخت مكانة PRt كرائدة في الابتكار التكنولوجي.", image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=3540&auto=format&fit=crop" },
            { title: "حملة ليلى", description: "أول مساعد اتصالات مدعوم بالذكاء الاصطناعي في العراق.", impact: "عززت التفاعل الرقمي وأثبتت ريادة العميل في خدمة العملاء المعتمدة على التكنولوجيا.", image: "https://media.licdn.com/dms/image/v2/D4D22AQFi21LfZL70Jg/feedshare-shrink_800/feedshare-shrink_800/0/1731783981800?e=2147483647&v=beta&t=VbN6o84xPaaLyyt2McSVKwNnf-xggctsbY2FQLTedRY" },
            { title: "منتديات TechWave", description: "فعاليات تكنولوجية تلهم الجيل القادم من المبتكرين في العراق.", impact: "تفاعل الآلاف؛ عززت علامات العملاء التجارية كرواد في التعليم التكنولوجي.", image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=3540&auto=format=fit&crop" },
        ],
    },
    valueStats: [
        { value: 3.5, decimals: 1, prefix: "$", suffix: "+M", label: "تُدار سنوياً" },
        { value: 30, suffix: "+", label: "موظف في جميع أنحاء العراق" },
        { value: 300, suffix: "+", label: "مروج ميداني" },
        { value: 2, label: "مكتباً على مستوى البلاد" },
    ],
    contact: {
        title: "دعنا نبنِ معًا",
        subtitle: "هل لديك مشروع في ذهنك أو تريد فقط أن تقول مرحباً؟ نود أن نسمع منك.",
        details: { title: "تفاصيل الاتصال", address: "المكتب الرئيسي: بغداد، العراق", email: "info@prt.agency", phone: "+964 772 211 1118" },
        careers: { title: "وظائف", text: "نحن نبحث دائماً عن أفراد موهوبين. تحقق من شواغرنا المتاحة.", link: "عرض الشواغر" },
        form: { 
            name: "اسمك", 
            email: "بريدك الإلكتروني", 
            message: "رسالتك", 
            submit: "إرسال الرسالة", 
            sending: "جارٍ الإرسال...",
            success: { title: "شكراً لك!", message: "تم إرسال رسالتك بنجاح. سنتواصل معك قريباً." }
         },
    },
    footer: {
        subtitle: "سد الفجوة بين التراث والابتكار",
        email: "info@prt.agency",
        copyright: "© {year} وكالة PRt. جميع الحقوق محفوظة.",
    }
  },
  ku: {
    navLinks: [
      { name: 'دەربارەی ئێمە', href: '#about' },
      { name: 'خزمەتگوزارییەکان', href: '#services' },
      { name: 'پڕۆژەکان', href: '#projects' },
      { name: 'پەیوەندی', href: '#contact' },
    ],
    hero: {
        title: { part1: 'گێڕانەوەگەلێک کە', highlighted: 'کاریگەری', part2: 'لەسەر نەوەکان دادەنێن' },
        subtitle: 'ئێمە پەیوەندییەکانی ڕۆژانە دەکەینە چیرۆکی بەهێز کە کۆمەڵگە oblik دەکەن و متمانە دروست دەکەن.',
        button: 'چیرۆکی خۆت بگێڕەوە',
    },
    about: {
        title: "پردی نێوان کەلەپوور و داهێنان",
        aboutText: "ئاژانسی PRt لە ساڵی ٢٠٢٢ دامەزراوە، ئاژانسێکی پەیوەندییە گشتییەکان و گەیاندنە کە پردی نێوان کەلەپوور و داهێنان دروست دەکات. ڕەگی لە نەریتی عێراقیدایە و لە هەمان کاتدا ئاگاداری جیهانە، PRt براندەکان دەگۆڕێت بۆ گێڕانەوەگەلێک کە کەلتوور oblik دەکەن، متمانە دەبەخشن و کاریگەری لەسەر نەوەکان دادەنێن.",
        mission: {
            title: "ئەرکی ئێمە",
            text: "تواناسازیی براندەکان بە گێڕانەوەگەلێک کە گفتوگۆکان هەڵدەگیرسێنن، متمانە دروست دەکەن و هانی کردار دەدەن لە سەرانسەری کۆمەڵگەکاندا."
        },
        vision: {
            title: "ڕوانگەی ئێمە",
            text: "وەک پێشەنگی چیرۆکگێڕی عێراق بناسرێین، گۆڕینی پەیوەندییەکانی ڕۆژانە بۆ گێڕانەوەی بەهێز کە کۆمەڵگە oblik دەکەن و کاریگەری لەسەر نەوەکان دادەنێن."
        },
        coreBeliefs: {
            title: "باوەڕە سەرەکییەکانی ئێمە",
            items: [
                { title: "ڕاستگۆیی لە سەرووی هەموو شتێکەوە", description: "ئێمە پارێزگاری لە گێڕانەوەکەت دەکەین بە وردی وەک نووسەرانی مێژوو.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>`},
                { title: "نائاسایی لە ئاساییەوە", description: "ئێمە شیعر لە ژیانی ڕۆژانەدا دەدۆزینەوە، سادەیی دەکەینە چیرۆکگێڕی بەهێز.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`},
                { title: "وێستگەی گرنگ", description: "سەرکەوتنی ئێمە بە کاریگەریی کەلتووری دەپێورێت، نەک تەنها بە کەمپینەکان.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/><line x1="4" y1="22" x2="4" y2="15"/></svg>`},
                { title: "داهێنان وەک باوەڕ", description: "ئێمە تەحەدای نەریتەکان دەکەین و ئەگەرە نەدۆزراوەکان دەگەڕێین.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="1"/><circle cx="12" cy="5" r="1"/><circle cx="12" cy="19" r="1"/><circle cx="5" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><path d="M12 8a4 4 0 1 0 0 8 4 4 0 1 0 0-8" /><path d="M8 12a4 4 0 1 0 8 0 4 4 0 1 0-8 0" /></svg>`},
                { title: "کردار لە پێش قسە", description: "پابەندبوونەکان بە کردار پێناسە دەکرێن، نەک بە بەڵێنەکان.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>`},
                { title: "یەکڕیزی لە فرەییدا", description: "هێزی ئێمە لە دیدگا جیاوازەکاندایە کە چیرۆکەکەمان دەوڵەمەند دەکەن.", icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/></svg>`},
            ],
        },
    },
    services: {
        title: "شارەزاییەکانی ئێمە",
        items: [
            { title: "پەیوەندی ستراتیژی و کاریگەری", description: "ئێمە تێڕوانینەکان oblik دەکەین و ناوبانگی بەهێز دروست دەکەین بە دانانی براندەکەت لە چەقی گفتوگۆ کاریگەرەکاندا. ستراتیژییەکانی ئێمە دڵنیایی دەدەن کە دەنگت لەلایەن کەسە گرنگەکانەوە دەبیسترێت.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`, items: ["پێشەوایەتی بیر", "کاروباری گشتی و داکۆکیکردن", "بەڕێوەبردنی قەیران", "پەیوەندییە میدیاییەکان", "پەیوەندییەکانی ناوخۆیی", "بەڕێوەبردنی براند و ناوبانگ"] },
            { title: "چیرۆکگێڕی داهێنەرانە و دیجیتاڵی", description: "لە سەردەمی دیجیتاڵیدا، چیرۆکەکان دراوی پەیوەندین. ئێمە گێڕانەوەی سەرنجڕاکێش و فرە-پلاتفۆرم دروست دەکەین کە سەرنج ڕادەکێشن، هانی بەشداری دەدەن و کۆمەڵگەی بەردەوام لە دەوری براندەکەت دروست دەکەن.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`, items: ["دروستکردنی ناوەڕۆک", "پەرەپێدانی کەمپین", "پەیوەندییە گشتییەکانی دیجیتاڵی و سۆشیال میدیا", "بازاڕکردن لە ڕێگەی کاریگەران", "چاودێریکردنی میدیا و ڕاپۆرتکردن", "خستنەبازاڕی بەرهەم و خزمەتگوزاری"] },
            { title: "بۆنەکان و چالاککردنی کۆمەڵگە", description: "ئێمە ئەزموونی لەبیرنەکراو دروست دەکەین کە ژیان دەبەخشنە براندەکەت. لە بۆنە گەورەکانەوە تا بەرنامە بنەڕەتییەکانی کۆمەڵگە، ئێمە ساتەکانی پەیوەندی دروست دەکەین کە وەفاداری و پشتیوانی بەهێز دەکەن.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`, items: ["دروستکردن و بەڕێوەبردنی بۆنە", "چالاککردنی مەیدانی", "بەشداریی کۆمەڵگە", "سپۆنسەر و پشتگیریکردن", "هاوبەشی ستراتیژی"] },
            { title: "تێگەیشتن، لێکۆڵینەوە و بنیاتنانی توانا", description: "بڕیارە لەسەر-داتا-بنەماکان لە دڵی پەیوەندی کاریگەردان. ئێمە تێگەیشتنی بازاڕ، شیکاری و ڕاهێنان پێشکەش دەکەین کە پێویستن بۆ تێپەڕاندنی دیمەنە ئاڵۆزەکان و تواناسازکردنی تیمەکەت بۆ سەرکەوتن.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`, items: ["لێکۆڵینەوە و شیکاریی بازاڕ", "ڕاهێنان و ڕێنمایی میدیایی"] },
        ],
    },
    projects: {
        title: "وێستگەی گرنگ",
        subtitle: "سەرکەوتنی ئێمە بە کاریگەریی کەلتووری دەپێورێت، نەک تەنها بە کەمپینەکان. ئەمانە چەند ساتێکی شانازیمانن.",
        impactLabel: "کاریگەری",
        items: [
            { title: "یەلا فۆرمولا", description: "کەمپینێکی تەلەفۆنی کە جۆشی فۆرمولا یەک و چیرۆکگێڕی لەسەر-داتا-بنەما تێکەڵ دەکات.", impact: "زیاتر لە ٢٠٠،٠٠٠ بەشداربووی هەبوو، ملیۆنەها بینینی بەدەستهێنا و پەیوەندیی براندی بەهێز کرد.", image: "https://www.datocms-assets.com/134341/1745407148-pexels-tara-winstead-8386440-1.jpg?ar64=MTQxOjY1&auto=format&crop=focalpoint&fit=crop&fm=webp" },
            { title: "فیستیڤاڵی ڕەمەزان", description: "ئاهەنگێکی نیشتمانی کە بەها و کۆمەڵگەی عێراقی دەردەخات.", impact: "ساڵانە زیاتر لە ٢٥،٠٠٠ ئامادەبوو، پەیوەندی سۆزداری و کەلتووری براندی بەهێز کرد.", image: "https://kurdishglobe.krd/wp-content/uploads/2025/03/IMG-20250310-WA0023.jpg" },
            { title: "AI بۆ کاریگەران", description: "وۆرکشۆپ بۆ ناساندنی ئامرازەکانی زیرەکیی دەستکرد بە کاریگەرە دیارەکانی عێراق.", impact: "کوالیتی ناوەڕۆکی بەرز کردەوە و پێگەی PRtی وەک پێشەنگێک لە داهێنانی تەکنەلۆژیادا چەسپاند.", image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=3540&auto=format&fit=crop" },
            { title: "کەمپینی لەیلا", description: "یەکەم یاریدەدەری تەلەفۆنی عێراق کە بە زیرەکیی دەستکرد کاردەکات.", impact: "بەشداریی دیجیتاڵی بەرز کردەوە و پێشەنگایەتیی کڕیارەکەی لە خزمەتگوزاریی کڕیارانی تەکنەلۆژی-محوردا چەسپاند.", image: "https://media.licdn.com/dms/image/v2/D4D22AQFi21LfZL70Jg/feedshare-shrink_800/feedshare-shrink_800/0/1731783981800?e=2147483647&v=beta&t=VbN6o84xPaaLyyt2McSVKwNnf-xggctsbY2FQLTedRY" },
            { title: "کۆڕەکانی TechWave", description: "بۆنەی تەکنەلۆژی کە نەوەی داهاتووی داهێنەرانی عێراق هان دەدات.", impact: "هەزاران کەس بەشداریان کرد؛ براندەکانی کڕیارانی وەک پێشەنگی پەروەردەی تەکنەلۆژیایان بەهێز کرد.", image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=3540&auto=format=fit&crop" },
        ],
    },
    valueStats: [
        { value: 3.5, decimals: 1, prefix: "$", suffix: "+M", label: "ساڵانە بەڕێوەدەبرێت" },
        { value: 30, suffix: "+", label: "کارمەند لە سەرانسەری عێراق" },
        { value: 300, suffix: "+", label: "پێشخەری مەیدانی" },
        { value: 2, label: "ئۆفیس لە سەرانسەری وڵات" },
    ],
    contact: {
        title: "با پێکەوە بنیات بنێین",
        subtitle: "پڕۆژەیەکت لە μυαλόدایە یان تەنها دەتەوێت سڵاوێک بکەیت؟ پێمان خۆشە لێتەوە ببیستین.",
        details: { title: "زانیارییەکانی پەیوەندی", address: "ئۆفیسی سەرەکی: بەغداد، عێراق", email: "info@prt.agency", phone: "+964 772 211 1118" },
        careers: { title: "هەلی کار", text: "ئێمە هەمیشە بەدوای کەسانی بەهرەمەنددا دەگەڕێین. سەیری هەلە کارە بەردەستەکانمان بکە.", link: "بینینی هەلی کارەکان" },
        form: { 
            name: "ناوی تۆ", 
            email: "ئیمەیڵی تۆ", 
            message: "نامەکەت", 
            submit: "ناردنی نامە", 
            sending: "ناردن...",
            success: { title: "سوپاس!", message: "نامەکەت بە سەرکەوتوویی نێردرا. بەم زووانە پەیوەندیت پێوە دەکەین." }
         },
    },
    footer: {
        subtitle: "پردی نێوان کەلەپوور و داهێنان",
        email: "info@prt.agency",
        copyright: "© {year} ئاژانسی PRt. هەموو مافەکان پارێزراون.",
    }
  }
};