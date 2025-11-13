import type { ServiceCategory, Project, CoreBelief, ValueStat, ProjectSummary, Job } from './types';

interface Translations {
  navLinks: { name: string; id: string }[];
  hero: {
    title: { part1: string; highlighted: string; part2: string };
    subtitle: string;
    button: string;
  };
  about: {
    title: string;
    aboutText: string[];
    quote: string;
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
      subtitle_detail: string;
      impactLabel: string;
      cta: string;
      summaries: ProjectSummary[];
      items: Project[];
  };
  valueStats: ValueStat[];
  clients: {
    title: string;
    subtitle: string;
    list: string[];
  };
  careers: {
    title: string;
    subtitle: string;
    culture: {
      title: string;
      text: string;
      perks: { title: string; items: string[] };
    };
    openings: {
      title: string;
      cta: string;
      jobs: Job[];
    }
  };
  contact: {
      title: string;
      subtitle: string;
      details: { title: string; address: string; email: string; phone: string; };
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
      { name: 'Home', id: 'home' },
      { name: 'About', id: 'about' },
      { name: 'Services', id: 'services' },
      { name: 'Projects', id: 'projects' },
      { name: 'Careers', id: 'careers' },
      { name: 'Contact', id: 'contact' },
    ],
    hero: {
        title: { part1: 'NARRATIVES THAT', highlighted: 'INFLUENCE', part2: 'GENERATIONS' },
        subtitle: 'We turn everyday communication into powerful stories that shape society and build trust.',
        button: 'TELL YOUR STORY',
    },
    about: {
        title: "Who We Are",
        aboutText: [
          "\"At the intersection of heritage and innovation, PRt transforms brands into powerful narratives that shape culture.\"",
          "Founded in 2022, PRt is more than a public relations agency, we are cultural architects. Deeply rooted in Iraqi tradition yet globally conscious, we craft narratives that engage minds, influence hearts, and drive enduring change across Iraq’s evolving business landscape.",
          "With two strategic offices (Baghdad and Suli), our reach extends nationwide. We strategically manage an annual communications portfolio of over $3.5 million, meticulously invested in our clients’ success. PRt’s expansive and diverse team, ensuring seamless execution and impactful presence from Zakho to Basra."
        ],
        quote: "Every story has the power to rewrite the future. In our hands, words become bridges, connecting dreams to reality, transforming perceptions, and shifting destinies.",
        mission: {
            title: "Mission",
            text: "To empower brands with narratives that ignite conversations, build trust, and inspire action across communities."
        },
        vision: {
            title: "Vision",
            text: "To be recognized as Iraq’s foremost storyteller, turning everyday communication into powerful narratives that shape society and influence generations."
        },
        coreBeliefs: {
            title: "Core Beliefs",
            items: [
                { title: "Integrity Above All", description: "We protect your narrative as diligently as scribes of history." },
                { title: "Extraordinary from the Ordinary", description: "We find poetry hidden within the mundane, crafting compelling stories from everyday moments." },
                { title: "Milestones That Matter", description: "We measure success not in campaigns, but in cultural impact and lasting legacy." },
                { title: "Innovation as a Creed", description: "We challenge convention, relentlessly exploring uncharted paths that redefine what's possible." },
                { title: "Action Over Words", description: "Our commitments are etched in actions, not merely spoken." },
                { title: "Unity in Diversity", description: "Our strength stems from diverse perspectives; each voice enriches our narrative." },
            ],
        },
    },
    services: {
        title: "Our Expertise",
        items: [
            { title: "Strategic Communication & Influence", description: "We shape perceptions and build powerful reputations by placing your brand at the center of influential conversations. Our strategies ensure your voice is heard by the people who matter most.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`, items: ["Specialized PR for Specific Industries", "Thought Leadership", "Public Affairs and Advocacy", "Crisis Management", "Media Relations", "Internal Communications", "Branding and Reputation Management"] },
            { title: "Creative & Digital Storytelling", description: "In the digital age, stories are the currency of connection. We craft compelling, multi-platform narratives that capture attention, drive engagement, and build lasting communities around your brand.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`, items: ["Content Creation", "Creative Campaign Development", "Digital and Social Media PR", "Influencer Marketing", "Media Monitoring and Reporting", "Product and Service Launches"] },
            { title: "Events & Community Activation", description: "We create unforgettable experiences that bring your brand to life. From high-profile launches to grassroots community programs, we build moments of connection that foster loyalty and advocacy.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`, items: ["Event Creation and Management", "On-Ground Activation", "Community Engagement", "Sponsorship and Endorsements", "Strategic Partnerships"] },
            { title: "Insight, Research & Capacity Building", description: "Data-driven decisions are at the heart of impactful communication. We provide the market insights, analytics, and training needed to navigate complex landscapes and empower your team to excel.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`, items: ["Market Research and Analytics", "Training and Media Coaching"] },
        ],
    },
    projects: {
        title: "Proof in Practice",
        subtitle: "A Glimpse Into Our Impact",
        subtitle_detail: "The projects featured in this profile are selected highlights—distinct campaigns that reflect the breadth and depth of our capabilities. They are not the full story. Behind the scenes, PRt has led and executed dozens of additional initiatives across sectors, cities, and scales. From grassroots activations to boardroom-level strategies, our work spans the spectrum of public relations excellence. Each project, whether included here or not, carries our signature: thoughtful strategy, cultural fluency, and a relentless commitment to results.",
        impactLabel: "Impact",
        cta: "View Case Study",
        summaries: [
          { title: "Telecom Transformation", description: "From Zakho to Basra, PRt ignited nationwide conversations for Iraq’s leading telecoms. Through immersive experiences and data-driven storytelling, we connected over 20 million hearts—blending creativity, technology, and culture into one powerful voice." },
          { title: "National Financial Vision", description: "In partnership with key national stakeholders, PRt crafted and managed the communication strategy behind one of Iraq’s most significant economic initiatives—bridging vision, trust, and public engagement." },
          { title: "Empowering Innovators", description: "From BYD’s bold brand presence to Iraq Mall’s entertainment evolution, PRt celebrates innovation and creativity across industries. Through storytelling and strategic engagement, we amplify the voices shaping Iraq’s modern culture and commerce." },
        ],
        items: [
            { 
              title: "Yalla Formula", 
              overview: "A nationwide telecom activation that fused the thrill of Formula One with strategic communications mastery—uniting physical engagement, digital interaction, and narrative precision. This campaign transformed a recharge incentive into a sweeping cultural moment.", 
              approach: [
                "PRt led a 360-degree public relations campaign, seamlessly integrating on-ground experiences with a full spectrum communications strategy.",
                "Developed an interactive mobile racing game linked to recharge behavior, rewarding participation with meaningful digital incentives.",
                "Executed immersive on-ground activations in key governorates, delivering unified messaging through design, scripting, and spatial experience.",
                "Mobilized top-tier influencers to narrate the campaign journey in real time, generating content that resonated across platforms and demographics.",
                "Launched a synchronized social media strategy, supported by live coverage, creative assets, and audience engagement tactics.",
                "Oversaw end-to-end monitoring and reporting, sentiment analysis, and performance optimization to guide message alignment and amplification.",
                "Deployed trained crowd management professionals to ensure seamless, elevated public experience and brand interaction at each event site."
              ],
              impact: [
                "Engaged over 200,000 participants across the campaign’s digital and physical touchpoints.",
                "Generated millions of organic impressions, driven by influencer storytelling and community engagement.",
                "Strengthened brand affinity and recharge behavior, reinforcing the client’s position as a lifestyle-driven leader in telecommunications."
              ], 
              image: "https://www.datocms-assets.com/134341/1745407148-pexels-tara-winstead-8386440-1.jpg?ar64=MTQxOjY1&auto=format&crop=focalpoint&fit=crop&fm=webp" 
            },
            { 
              title: "Ramadan Festival", 
              overview: "A culturally resonant campaign crafted to deepen emotional connection and reflect shared values during Iraq’s most spiritually significant month. Designed and delivered for two consecutive years, the Ramadan Festival became more than a brand activation, it became a tradition.", 
              approach: [
                "PRt curated a nationwide celebration that fused heritage, humanity, and storytelling.",
                "Executed large-scale, community-centric events across Iraq, honoring the spirit of Ramadan and inviting the public into immersive, meaningful experiences.",
                "Developed culturally rich visual content and narratives that paid tribute to Iraqi customs, traditions, and the spirit of generosity.",
                "Activated a cohesive digital campaign that elevated stories of togetherness, creating emotional resonance across audiences and platforms."
              ],
              impact: [
                "Welcomed over 25,000 attendees each year, making it one of the most visible seasonal campaigns in the market.",
                "Significantly elevated audience engagement during Ramadan, driving participation both online and on-ground.",
                "Deepened the client’s position as a brand of empathy and cultural relevance, strengthening trust and emotional loyalty across communities."
              ], 
              image: "https://kurdishglobe.krd/wp-content/uploads/2025/03/IMG-20250310-WA0023.jpg" 
            },
            { 
              title: "AI for Influencers", 
              overview: "An innovative event introducing cutting-edge AI technology to top influencers, enhancing their content creation capabilities and digital impact.",
              approach: [
                "Exclusive hands-on workshops for leading Iraqi influencers.",
                "Demonstrations of AI tools designed for content innovation.",
                "High-impact social media campaigns documenting influencer experiences."
              ],
              impact: [
                "Elevated influencers' digital capabilities and content quality.",
                "Increased brand visibility through authentic influencer-driven content.",
                "Positioned PRt and its client as pioneers in technological integration."
              ], 
              image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=3540&auto=format&fit=crop" 
            },
            { 
              title: "LAILA Campaign", 
              overview: "A groundbreaking PR campaign introducing LAILA, Iraq’s first-ever AI-powered telecom assistant, accessible through various digital platforms including WhatsApp, Messenger, and the client's website.",
              approach: [
                "Produced humorous yet insightful digital content featuring prominent influencers to capture public attention.",
                "Strategically leveraged social media platforms to showcase LAILA’s ease of use and responsiveness.",
                "Managed proactive PR communications highlighting technological innovation and customer experience."
              ],
              impact: [
                "Successfully established LAILA as a recognizable and trusted digital assistant.",
                "Boosted digital engagement significantly, driving adoption of the client’s digital customer services.",
                "Reinforced client’s leadership position in tech-driven customer care solutions."
              ], 
              image: "https://media.licdn.com/dms/image/v2/D4D22AQFi21LfZL70Jg/feedshare-shrink_800/feedshare-shrink_800/0/1731783981800?e=2147483647&v=beta&t=VbN6o84xPaaLyyt2McSVKwNnf-xggctsbY2FQLTedRY" 
            },
            { 
              title: "TechWave Forums", 
              overview: "A vibrant, youth-oriented technology event held in collaboration with academic institutions, spotlighting emerging tech trends and inspiring the next generation of Iraqi tech innovators and entrepreneurs.",
              approach: [
                "Organized interactive sessions, panel discussions, and live demonstrations highlighting cutting-edge technologies.",
                "Facilitated collaborations between academia, tech companies, and entrepreneurial communities.",
                "Executed dynamic PR and digital strategies to attract widespread attendance and media attention."
              ],
              impact: [
                "Successfully engaged thousands of participants, significantly raising awareness about tech-driven opportunities.",
                "Strengthened community and stakeholder relationships, positioning clients as leaders in tech education and innovation.",
                "Generated strong media coverage and social buzz, positively impacting client brand visibility among youth and educators."
              ], 
              image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=3540&auto=format=fit&crop" 
            },
             { 
              title: "Asiacell Ramadan Festival", 
              overview: "A vibrant evening of culture, creativity, and community, the festival brought thousands together under the lights of Baghdad for music, games, art, and shared moments. More than an event—it was a living expression of brand empathy, crafted with care across every detail and every face.",
              impact: [
                "Fostered significant community engagement and brand loyalty.",
                "Generated widespread positive media coverage and social media buzz.",
                "Reinforced the client's commitment to cultural and community initiatives."
              ], 
              image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=3540&auto=format&fit=crop"
            },
            { 
              title: "A Story Unfinished", 
              overview: "A voice silenced too soon, but never unheard—this tribute honors Buraq Yassin’s dream through a final recording that echoes with soul and sincerity. Produced with deep respect, it stands as both a farewell and a promise: that true passion leaves a lasting note.",
              impact: [
                "Created a touching and respectful tribute that resonated deeply with the audience.",
                "Generated a wave of heartfelt support and engagement online.",
                "Honored the artist's legacy and provided a platform for their final work."
              ], 
              image: "https://kurdishglobe.krd/wp-content/uploads/2025/03/IMG-20250310-WA0023.jpg"
            }
        ],
    },
    valueStats: [
        { value: 3.5, decimals: 1, prefix: "$", suffix: "M+", label: "Managed in Client Communications" },
        { value: 30, suffix: "+", label: "Staff Members Across Region" },
        { value: 300, suffix: "+", label: "Promoters Deployed Nationwide" },
        { value: 2, label: "Strategic Offices & Warehouse" },
    ],
    clients: {
      title: "Clients & Collaborations",
      subtitle: "Our journey includes partnerships with industry leaders, renowned global organizations, and influential local enterprises. They entrust us with their stories—allowing us to amplify their voices and expand their reach.",
      list: ["Startup Grind", "USAID", "Chemonics", "KAPITA", "EARTHLINK", "GIZ", "Asiacell", "Tafa3ul", "1001", "The Station", "Iraqi Private Banks League", "Central Bank of Iraq"],
    },
    careers: {
      title: "Join Our Team",
      subtitle: "We are cultural architects, shaping narratives that define tomorrow. If you thrive on innovation, diversity, and creating lasting impact, we want to hear from you.",
      culture: {
        title: "Why Work at PRt?",
        text: "We are more than an agency; we are a community of storytellers, strategists, and creators. Our strength stems from our diverse perspectives, unified by a passion for crafting narratives that matter. We challenge convention, find poetry in the mundane, and believe that our actions define our legacy.",
        perks: {
          title: "Perks & Benefits",
          items: ["Competitive Salaries", "Professional Development", "Collaborative Environment", "Meaningful Work"],
        }
      },
      openings: {
        title: "Current Openings",
        cta: "Apply Now",
        jobs: [
          { title: "Public Relations Specialist", location: "Baghdad", type: "Full-time" },
          { title: "Digital Content Creator", location: "Baghdad", type: "Full-time" },
          { title: "Social Media Manager", location: "Suli", type: "Full-time" },
          { title: "Events Coordinator", location: "Baghdad", type: "Contract" },
        ]
      }
    },
    contact: {
        title: "Let Your Story Begin With Us",
        subtitle: "Great narratives don't simply happen; they are meticulously crafted. Your story deserves to be told powerfully. Together, let's write the next compelling chapter.",
        details: { title: "Contact Information", address: "Iraq-Baghdad", email: "info@prt.agency", phone: "+964 772 211 1118" },
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
        subtitle: "Mastering the Art of Public Relations",
        email: "info@prt.agency",
        copyright: "© {year} PRt Agency. All Rights Reserved.",
    }
  },
  ar: {
    navLinks: [
      { name: 'الرئيسية', id: 'home' },
      { name: 'حولنا', id: 'about' },
      { name: 'خدماتنا', id: 'services' },
      { name: 'مشاريعنا', id: 'projects' },
      { name: 'وظائف', id: 'careers' },
      { name: 'تواصل معنا', id: 'contact' },
    ],
    hero: {
        title: { part1: 'روايات', highlighted: 'تُلهم', part2: 'الأجيال' },
        subtitle: 'نحن نحوّل التواصل اليومي إلى قصص قوية تشكل المجتمع وتبني الثقة.',
        button: 'اروِ قصتك',
    },
    about: {
        title: "من نحن",
        aboutText: [
          "\"عند تقاطع التراث والابتكار، تحول PRt العلامات التجارية إلى روايات قوية تشكل الثقافة.\"",
          "تأسست وكالة PRt في عام 2022، وهي أكثر من مجرد وكالة علاقات عامة، نحن مهندسون ثقافيون. متجذرون بعمق في التقاليد العراقية ولكن بوعي عالمي، نصنع روايات تشرك العقول وتؤثر في القلوب وتدفع التغيير الدائم عبر مشهد الأعمال المتطور في العراق.",
          "مع مكتبين استراتيجيين (بغداد والسليمانية)، يمتد نطاق عملنا ليشمل جميع أنحاء البلاد. نحن ندير استراتيجيًا محفظة اتصالات سنوية تزيد عن 3.5 مليون دولار، مستثمرة بدقة في نجاح عملائنا. يضمن فريق PRt الواسع والمتنوع تنفيذًا سلسًا وحضورًا مؤثرًا من زاخو إلى البصرة."
        ],
        quote: "كل قصة لديها القدرة على إعادة كتابة المستقبل. في أيدينا، تصبح الكلمات جسورًا، تربط الأحلام بالواقع، وتحول التصورات، وتغير المصائر.",
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
                { title: "النزاهة فوق كل شيء", description: "نحمي روايتك بجدية كما يفعل كتبة التاريخ." },
                { title: "الاستثنائي من العادي", description: "نجد الشعر مخبأً في التفاصيل اليومية، صانعين قصصاً مؤثرة من لحظات الحياة العادية." },
                { title: "إنجازات ذات معنى", description: "نقيس النجاح ليس بالحملات، بل بالتأثير الثقافي والإرث الدائم." },
                { title: "الابتكار كعقيدة", description: "نتحدى التقاليد، ونستكشف بلا هوادة مسارات مجهولة تعيد تعريف الممكن." },
                { title: "الفعل قبل القول", description: "التزاماتنا محفورة في الأفعال، وليست مجرد كلمات." },
                { title: "الوحدة في التنوع", description: "قوتنا تنبع من وجهات النظر المتنوعة؛ كل صوت يثري روايتنا." },
            ],
        },
    },
    services: {
        title: "خبراتنا",
        items: [
            { title: "الاتصال الاستراتيجي والتأثير", description: "نشكل التصورات ونبني سمعة قوية من خلال وضع علامتك التجارية في قلب الحوارات المؤثرة. تضمن استراتيجياتنا أن صوتك مسموع من قبل الأشخاص الأكثر أهمية.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`, items: ["علاقات عامة متخصصة للصناعات المحددة", "القيادة الفكرية", "الشؤون العامة والدعوة", "إدارة الأزمات", "العلاقات الإعلامية", "الاتصالات الداخلية", "إدارة العلامة التجارية والسمعة"] },
            { title: "السرد القصصي الإبداعي والرقمي", description: "في العصر الرقمي، القصص هي عملة التواصل. نصنع روايات جذابة ومتعددة المنصات تلفت الانتباه وتحفز التفاعل وتبني مجتمعات دائمة حول علامتك التجارية.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`, items: ["إنشاء المحتوى", "تطوير الحملات الإبداعية", "العلاقات العامة الرقمية ووسائل التواصل الاجتماعي", "التسويق عبر المؤثرين", "مراقبة الإعلام وإعداد التقارير", "إطلاق المنتجات والخدمات"] },
            { title: "الفعاليات وتفعيل المجتمع", description: "نخلق تجارب لا تنسى تعيد الحياة لعلامتك التجارية. من الإطلاقات البارزة إلى البرامج المجتمعية الشعبية، نبني لحظات تواصل تعزز الولاء والدعم.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`, items: ["إنشاء وإدارة الفعاليات", "التفعيل الميداني", "المشاركة المجتمعية", "الرعايات والتأييدات", "الشراكات الاستراتيجية"] },
            { title: "الرؤى والبحث وبناء القدرات", description: "القرارات المستندة إلى البيانات هي جوهر التواصل المؤثر. نقدم رؤى السوق والتحليلات والتدريب اللازم للتنقل في المشاهد المعقدة وتمكين فريقك من التفوق.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`, items: ["أبحاث السوق والتحليلات", "التدريب والتوجيه الإعلامي"] },
        ],
    },
    projects: {
        title: "البرهان في الممارسة",
        subtitle: "لمحة عن تأثيرنا",
        subtitle_detail: "المشاريع المعروضة في هذا الملف هي أبرز ما قمنا به — حملات متميزة تعكس اتساع وعمق قدراتنا. إنها ليست القصة الكاملة. خلف الكواليس، قادت PRt ونفذت العشرات من المبادرات الإضافية عبر القطاعات والمدن والمقاييس. من التفعيلات الشعبية إلى الاستراتيجيات على مستوى مجالس الإدارة، يمتد عملنا ليشمل طيف التميز في العلاقات العامة. كل مشروع، سواء تم إدراجه هنا أم لا، يحمل توقيعنا: استراتيجية مدروسة، طلاقة ثقافية، والتزام لا هوادة فيه بالنتائج.",
        impactLabel: "التأثير",
        cta: "عرض دراسة الحالة",
        summaries: [
          { title: "تحول الاتصالات", description: "من زاخو إلى البصرة، أشعلت PRt حوارات على مستوى البلاد لشركات الاتصالات الرائدة في العراق. من خلال التجارب الغامرة والسرد القصصي القائم على البيانات، ربطنا أكثر من 20 مليون قلب - مزجنا بين الإبداع والتكنولوجيا والثقافة في صوت واحد قوي." },
          { title: "الرؤية المالية الوطنية", description: "بالشراكة مع أصحاب المصلحة الوطنيين الرئيسيين، صاغت PRt وأدارت استراتيجية الاتصال وراء واحدة من أهم المبادرات الاقتصادية في العراق - جسر الرؤية والثقة والمشاركة العامة." },
          { title: "تمكين المبتكرين", description: "من الحضور الجريء لعلامة BYD التجارية إلى تطور الترفيه في مول العراق، تحتفل PRt بالابتكار والإبداع عبر الصناعات. من خلال السرد القصصي والمشاركة الاستراتيجية، نضخم الأصوات التي تشكل ثقافة العراق الحديثة وتجارته." },
        ],
        items: [
             { 
              title: "يلا فورمولا", 
              overview: "تفعيل لشركة اتصالات على مستوى البلاد دمج إثارة الفورمولا واحد مع إتقان الاتصالات الاستراتيجية - موحداً المشاركة المادية والتفاعل الرقمي والدقة السردية. حولت هذه الحملة حافز إعادة الشحن إلى لحظة ثقافية شاملة.", 
              approach: [
                "قادت PRt حملة علاقات عامة بزاوية 360 درجة، دمجت بسلاسة التجارب الميدانية مع استراتيجية اتصالات كاملة الطيف.",
                "طورت لعبة سباق سيارات تفاعلية مرتبطة بسلوك إعادة الشحن، تكافئ المشاركة بحوافز رقمية ذات معنى.",
                "نفذت تفعيلات ميدانية غامرة في المحافظات الرئيسية، وقدمت رسائل موحدة من خلال التصميم والسيناريو والتجربة المكانية.",
                "حشدت كبار المؤثرين لرواية رحلة الحملة في الوقت الفعلي، مما أدى إلى إنشاء محتوى يتردد صداه عبر المنصات والتركيبة السكانية.",
                "أطلقت استراتيجية متزامنة لوسائل التواصل الاجتماعي، مدعومة بالتغطية الحية والأصول الإبداعية وتكتيكات إشراك الجمهور.",
                "أشرفت على المراقبة وإعداد التقارير الشاملة، وتحليل المشاعر، وتحسين الأداء لتوجيه مواءمة الرسائل وتضخيمها.",
                "نشرت محترفين مدربين في إدارة الحشود لضمان تجربة عامة سلسة وراقية وتفاعل مع العلامة التجارية في كل موقع للحدث."
              ],
              impact: [
                "إشراك أكثر من 200,000 مشارك عبر نقاط الاتصال الرقمية والمادية للحملة.",
                "توليد الملايين من الانطباعات العضوية، مدفوعة بسرد قصص المؤثرين والمشاركة المجتمعية.",
                "عززت تقارب العلامة التجارية وسلوك إعادة الشحن، مما عزز مكانة العميل كشركة رائدة في مجال الاتصالات تعتمد على أسلوب الحياة."
              ], 
              image: "https://www.datocms-assets.com/134341/1745407148-pexels-tara-winstead-8386440-1.jpg?ar64=MTQxOjY1&auto=format&crop=focalpoint&fit=crop&fm=webp" 
            },
            { 
              title: "مهرجان رمضان", 
              overview: "حملة ذات صدى ثقافي تم تصميمها لتعميق الارتباط العاطفي وتعكس القيم المشتركة خلال أكثر شهور العراق أهمية روحية. تم تصميمها وتقديمها لمدة عامين متتاليين، وأصبح مهرجان رمضان أكثر من مجرد تفعيل للعلامة التجارية، بل أصبح تقليدًا.", 
              approach: [
                "نظمت PRt احتفالًا على مستوى البلاد دمج بين التراث والإنسانية والسرد القصصي.",
                "نفذت فعاليات واسعة النطاق تتمحور حول المجتمع في جميع أنحاء العراق، تكريمًا لروح رمضان ودعوة الجمهور إلى تجارب غامرة وذات مغزى.",
                "طورت محتوى مرئيًا وروايات غنية ثقافيًا تشيد بالعادات والتقاليد العراقية وروح الكرم.",
                "فعلت حملة رقمية متماسكة رفعت من شأن قصص التآزر، مما خلق صدى عاطفيًا عبر الجماهير والمنصات."
              ],
              impact: [
                "استقبال أكثر من 25,000 حاضر كل عام، مما يجعلها واحدة من أبرز الحملات الموسمية في السوق.",
                "رفع تفاعل الجمهور بشكل كبير خلال رمضان، مما أدى إلى المشاركة عبر الإنترنت وعلى أرض الواقع.",
                "عمقت مكانة العميل كعلامة تجارية للتعاطف والأهمية الثقافية، مما عزز الثقة والولاء العاطفي عبر المجتمعات."
              ], 
              image: "https://kurdishglobe.krd/wp-content/uploads/2025/03/IMG-20250310-WA0023.jpg" 
            },
            { 
              title: "الذكاء الاصطناعي للمؤثرين", 
              overview: "حدث مبتكر يقدم تكنولوجيا الذكاء الاصطناعي المتطورة لكبار المؤثرين، مما يعزز قدراتهم في إنشاء المحتوى وتأثيرهم الرقمي.",
              approach: [
                "ورش عمل عملية حصرية لكبار المؤثرين العراقيين.",
                "عروض لأدوات الذكاء الاصطناعي المصممة لابتكار المحتوى.",
                "حملات وسائل تواصل اجتماعي عالية التأثير توثق تجارب المؤثرين."
              ],
              impact: [
                "رفع القدرات الرقمية للمؤثرين وجودة المحتوى.",
                "زيادة رؤية العلامة التجارية من خلال محتوى أصيل يقوده المؤثرون.",
                "ترسيخ مكانة PRt وعملائها كرواد في التكامل التكنولوجي."
              ], 
              image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=3540&auto=format&fit=crop" 
            },
            { 
              title: "حملة ليلى", 
              overview: "حملة علاقات عامة رائدة تقدم ليلى، أول مساعد اتصالات مدعوم بالذكاء الاصطناعي في العراق، متاح عبر منصات رقمية مختلفة بما في ذلك واتساب، ماسنجر، وموقع العميل.",
              approach: [
                "أنتجت محتوى رقميًا فكاهيًا ولكنه ثاقب يضم مؤثرين بارزين لجذب انتباه الجمهور.",
                "استفادت بشكل استراتيجي من منصات وسائل التواصل الاجتماعي لعرض سهولة استخدام ليلى واستجابتها.",
                "أدارت اتصالات علاقات عامة استباقية تسلط الضوء على الابتكار التكنولوجي وتجربة العملاء."
              ],
              impact: [
                "نجحت في ترسيخ ليلى كمساعد رقمي معترف به وموثوق.",
                "عززت التفاعل الرقمي بشكل كبير، مما أدى إلى اعتماد خدمات العملاء الرقمية للعميل.",
                "عززت مكانة العميل الرائدة في حلول خدمة العملاء القائمة على التكنولوجيا."
              ], 
              image: "https://media.licdn.com/dms/image/v2/D4D22AQFi21LfZL70Jg/feedshare-shrink_800/feedshare-shrink_800/0/1731783981800?e=2147483647&v=beta&t=VbN6o84xPaaLyyt2McSVKwNnf-xggctsbY2FQLTedRY" 
            },
            { 
              title: "منتديات TechWave", 
              overview: "حدث تكنولوجي نابض بالحياة وموجه للشباب، أقيم بالتعاون مع المؤسسات الأكاديمية، يسلط الضوء على الاتجاهات التكنولوجية الناشئة ويلهم الجيل القادم من المبتكرين ورجال الأعمال التقنيين العراقيين.",
              approach: [
                "نظمت جلسات تفاعلية وحلقات نقاش وعروض حية تسلط الضوء على التقنيات المتطورة.",
                "سهلت التعاون بين الأوساط الأكاديمية وشركات التكنولوجيا ومجتمعات ريادة الأعمال.",
                "نفذت استراتيجيات علاقات عامة ورقمية ديناميكية لجذب حضور واسع واهتمام إعلامي."
              ],
              impact: [
                "نجحت في إشراك آلاف المشاركين، مما زاد الوعي بشكل كبير بالفرص التي تعتمد على التكنولوجيا.",
                "عززت العلاقات مع المجتمع وأصحاب المصلحة، مما وضع العملاء كقادة في التعليم التكنولوجي والابتكار.",
                "ولدت تغطية إعلامية قوية وضجة اجتماعية، مما أثر بشكل إيجابي على رؤية علامة العميل التجارية بين الشباب والمعلمين."
              ], 
              image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=3540&auto=format=fit&crop" 
            },
            { 
              title: "مهرجان آسياسيل الرمضاني", 
              overview: "أمسية نابضة بالحياة من الثقافة والإبداع والمجتمع، جمع المهرجان الآلاف تحت أضواء بغداد للموسيقى والألعاب والفن واللحظات المشتركة. أكثر من مجرد حدث - لقد كان تعبيرًا حيًا عن تعاطف العلامة التجارية، تم إعداده بعناية في كل التفاصيل وكل وجه.",
              impact: [
                "عززت مشاركة مجتمعية كبيرة وولاء للعلامة التجارية.",
                "ولدت تغطية إعلامية إيجابية واسعة النطاق وضجة على وسائل التواصل الاجتماعي.",
                "عززت التزام العميل بالمبادرات الثقافية والمجتمعية."
              ], 
              image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=3540&auto=format&fit=crop"
            },
            { 
              title: "قصة لم تكتمل", 
              overview: "صوت أُسكت قبل الأوان، لكنه لم يُسمع أبدًا - هذا التكريم يكرم حلم براق ياسين من خلال تسجيل نهائي يتردد صداه بالروح والصدق. تم إنتاجه باحترام عميق، وهو بمثابة وداع ووعد: أن الشغف الحقيقي يترك بصمة دائمة.",
              impact: [
                "خلق تكريمًا مؤثرًا ومحترمًا تردد صداه بعمق لدى الجمهور.",
                "ولد موجة من الدعم والمشاركة الصادقة عبر الإنترنت.",
                "كرم إرث الفنان وقدم منصة لعمله الأخير."
              ], 
              image: "https://kurdishglobe.krd/wp-content/uploads/2025/03/IMG-20250310-WA0023.jpg"
            }
        ],
    },
    valueStats: [
        { value: 3.5, decimals: 1, prefix: "$", suffix: "+M", label: "تدار في اتصالات العملاء" },
        { value: 30, suffix: "+", label: "موظفًا في جميع أنحاء المنطقة" },
        { value: 300, suffix: "+", label: "مروجًا ميدانيًا منتشرين" },
        { value: 2, label: "مكتب استراتيجي ومستودع" },
    ],
    clients: {
      title: "العملاء والتعاونات",
      subtitle: "تشمل رحلتنا شراكات مع قادة الصناعة والمنظمات العالمية الشهيرة والشركات المحلية المؤثرة. يثقون بنا في قصصهم - مما يسمح لنا بتضخيم أصواتهم وتوسيع نطاق وصولهم.",
      list: ["ستارت أب گرايند", "الوكالة الأمريكية للتنمية الدولية", "كيمونكس", "كابيتا", "ايرثلنك", "GIZ", "آسياسيل", "تفاعل", "1001", "المحطة", "رابطة المصارف الخاصة العراقية", "البنك المركزي العراقي"],
    },
    careers: {
      title: "انضم إلى فريقنا",
      subtitle: "نحن مهندسون ثقافيون، نشكل الروايات التي تحدد الغد. إذا كنت تزدهر على الابتكار والتنوع وخلق تأثير دائم، فنحن نرغب في الاستماع إليك.",
      culture: {
        title: "لماذا تعمل في PRt؟",
        text: "نحن أكثر من مجرد وكالة؛ نحن مجتمع من رواة القصص والاستراتيجيين والمبدعين. قوتنا تنبع من وجهات نظرنا المتنوعة، التي يوحدها شغف لصياغة روايات مهمة. نحن نتحدى التقاليد، ونجد الشعر في الأمور العادية، ونؤمن بأن أفعالنا تحدد إرثنا.",
        perks: {
          title: "المزايا والفوائد",
          items: ["رواتب تنافسية", "التطوير المهني", "بيئة تعاونية", "عمل هادف"],
        }
      },
      openings: {
        title: "الشواغر الحالية",
        cta: "قدم الآن",
        jobs: [
          { title: "أخصائي علاقات عامة", location: "بغداد", type: "دوام كامل" },
          { title: "صانع محتوى رقمي", location: "بغداد", type: "دوام كامل" },
          { title: "مدير وسائل التواصل الاجتماعي", location: "السليمانية", type: "دوام كامل" },
          { title: "منسق فعاليات", location: "بغداد", type: "عقد" },
        ]
      }
    },
    contact: {
        title: "دع قصتك تبدأ معنا",
        subtitle: "الروايات العظيمة لا تحدث ببساطة؛ بل تُصنع بدقة. قصتك تستحق أن تُروى بقوة. معًا، دعنا نكتب الفصل التالي المثير.",
        details: { title: "معلومات الاتصال", address: "العراق - بغداد", email: "info@prt.agency", phone: "+964 772 211 1118" },
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
        subtitle: "إتقان فن العلاقات العامة",
        email: "info@prt.agency",
        copyright: "© {year} وكالة PRt. جميع الحقوق محفوظة.",
    }
  },
  ku: {
    navLinks: [
      { name: 'سەرەکی', id: 'home' },
      { name: 'دەربارەی ئێمە', id: 'about' },
      { name: 'خزمەتگوزارییەکان', id: 'services' },
      { name: 'پڕۆژەکان', id: 'projects' },
      { name: 'کارەکان', id: 'careers' },
      { name: 'پەیوەندی', id: 'contact' },
    ],
    hero: {
        title: { part1: 'گێڕانەوەگەلێک کە', highlighted: 'کاریگەری', part2: 'لەسەر نەوەکان دادەنێن' },
        subtitle: 'ئێمە پەیوەندییەکانی ڕۆژانە دەکەینە چیرۆکی بەهێز کە کۆمەڵگە oblik دەکەن و متمانە دروست دەکەن.',
        button: 'چیرۆکی خۆت بگێڕەوە',
    },
    about: {
        title: "ئێمە کێین",
        aboutText: [
          "\"لەیەکتربڕینی کەلەپوور و dاهێناندا، PRt براندەکان دەگۆڕێت بۆ گێڕانەوەی بەهێز کە کەلتوور oblik دەکەن.\"",
          "PRt لە ساڵی ٢٠٢٢ دامەزراوە، زیاتر لە ئاژانسێکی پەیوەندییە گشتییەکانە، ئێمە ئەندازیاری کەلتوورین. ڕەگمان لە نەریتی عێراقیدایە بەڵام بە ئاگاییەکی جیهانییەوە، گێڕانەوەی وا دادەڕێژین کە مێشکەکان بهەژێنن، کاریگەری لەسەر دڵەکان دانێن و گۆڕانکاری بەردەوام لە دیمەنی بازرگانی گەشەسەندووی عێراقدا بهێننە ئاراوە.",
          "لەگەڵ دوو نووسینگەی ستراتیژی (بەغدا و سلێمانی)، سنووری کارکردنمان سەرتاسەری وڵات دەگرێتەوە. ئێمە بە شێوەیەکی ستراتیژی پۆرتفۆلیۆیەکی پەیوەندییەکانی ساڵانە بە بەهای زیاتر لە ٣.٥ ملیۆن دۆلار بەڕێوەدەبەین، کە بە وردی لە سەرکەوتنی کڕیارەکانماندا وەبەرهێنراوە. تیمی فراوان و هەمەچەشنی PRt، دڵنیایی دەدات لە جێبەجێکردنی بێ کێشە و ئامادەیی کاریگەر لە زاخۆوە تا بەسرە."
        ],
        quote: "هەموو چیرۆکێک هێزی ئەوەی هەیە داهاتوو بنووسێتەوە. لە دەستی ئێمەدا، وشەکان دەبنە پرد، خەونەکان بە واقیعەوە دەبەستنەوە، تێڕوانینەکان دەگۆڕن، و چارەنووسەکان دەگۆڕن.",
        mission: {
            title: "ئەرک",
            text: "تواناسازکردنی براندەکان بە گێڕانەوەگەلێک کە گفتوگۆکان هەڵدەگیرسێنن، متمانە دروست دەکەن و هانی کردار دەدەن لە سەرانسەری کۆمەڵگەکاندا."
        },
        vision: {
            title: "ڕوانگە",
            text: "وەک پێشەنگی چیرۆکگێڕی عێراق بناسرێین، گۆڕینی پەیوەندییەکانی ڕۆژانە بۆ گێڕانەوەی بەهێز کە کۆمەڵگە oblik دەکەن و کاریگەری لەسەر نەوەکان دادەنێن."
        },
        coreBeliefs: {
            title: "باوەڕە سەرەکییەکانمان",
            items: [
                { title: "ڕاستگۆیی لە سەرووی هەموو شتێکەوە", description: "ئێمە پارێزگاری لە گێڕانەوەکەت دەکەین بە وردی وەک نووسەرانی مێژوو." },
                { title: "نائاسایی لە ئاساییەوە", description: "ئێمە شیعر لە شتە ئاساییەکاندا دەدۆزینەوە، چیرۆki سەرنجڕاکێش لە ساتەکانی ڕۆژانەوە دادەڕێژین." },
                { title: "وێستگەی گرنگ", description: "ئێمە سەرکەوتن بە کاریگەریی کەلتووری و میراتی بەردەوام دەپێوین، نەک تەنها بە کەمپینەکان." },
                { title: "داهێنان وەک باوەڕ", description: "ئێمە تەحەدای نەریتەکان دەکەین، بێوچان بەدوای ڕێگا نەزانراوەکاندا دەگەڕێین کە ئەوەی Mümkünە پێناسە دەکەنەوە." },
                { title: "کردار لە پێش قسە", description: "پابەندبوونەکانمان بە کردار نەخشێنراون، نەک تەنها بە قسە." },
                { title: "یەکڕیزی لە فرەییدا", description: "هێزی ئێمە لە دیدگا جیاوازەکاندایە؛ هەر دەنگێک گێڕانەوەکەمان دەوڵەمەند دەکات." },
            ],
        },
    },
    services: {
        title: "شارەزاییەکانی ئێمە",
        items: [
            { title: "پەیوەندی ستراتیژی و کاریگەری", description: "ئێمە تێڕوانینەکان oblik دەکەین و ناوبانگی بەهێز دروست دەکەین بە دانانی براندەکەت لە چەقی گفتوگۆ کاریگەرەکاندا. ستراتیژییەکانی ئێمە دڵنیایی دەدەن کە دەنگت لەلایەن کەسە گرنگەکانەوە دەبیسترێت.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>`, items: ["PRی تایبەتمەند بۆ پیشەسازییە دیاریکراوەکان", "پێشەوایەتی بیر", "کاروباری گشتی و داکۆکیکردن", "بەڕێوەبردنی قەیران", "پەیوەندییە میدیاییەکان", "پەیوەندییەکانی ناوخۆیی", "بەڕێوەبردنی براند و ناوبانگ"] },
            { title: "چیرۆکگێڕی dاهێنەرانە و دیجیتاڵی", description: "لە سەردەمی دیجیتاڵیدا، چیرۆکەکان دراوی پەیوەندین. ئێمە گێڕانەوەی سەرنجڕاکێش و فرە-پلاتفۆرم دروست دەکەین کە سەرنج ڕادەکێشن، هانی بەشداری دەدەن و کۆمەڵگەی بەردەوام لە دەوری براندەکەت دروست دەکەن.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>`, items: ["دروستکردنی ناوەڕۆک", "پەرەپێدانی کەمپینی dاهێنەرانە", "PRی دیجیتاڵی و سۆشیال میدیا", "بازاڕکردن لە ڕێگەی کاریگەران", "چاودێریکردنی میدیا و ڕاپۆرتکردن", "خستنەبازاڕی بەرهەم و خزمەتگوزاری"] },
            { title: "بۆنەکان و چالاککردنی کۆمەڵگە", description: "ئێمە ئەزموونی لەبیرنەکراو دروست دەکەین کە ژیان دەبەخشنە براندەکەت. لە بۆنە گەورەکانەوە تا بەرنامە بنەڕەتییەکانی کۆمەڵگە، ئێمە ساتەکانی پەیوەندی دروست دەکەین کە وەفاداری و پشتیوانی بەهێز دەکەن.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`, items: ["دروستکردن و بەڕێوەبردنی بۆنە", "چالاککردنی مەیدانی", "بەشداریی کۆمەڵگە", "سپۆنسەر و پشتگیریکردن", "هاوبەشی ستراتیژی"] },
            { title: "تێگەیشتن، لێکۆڵینەوە و بنیاتنانی توانا", description: "بڕیارە لەسەر-داتا-بنەماکان لە دڵی پەیوەندی کاریگەردان. ئێمە تێگەیشتنی بازاڕ، شیکاری و ڕاهێنان پێشکەش دەکەین کە پێویستن بۆ تێپەڕاندنی دیمەنە ئاڵۆزەکان و تواناسازکردنی تیمەکەت بۆ سەرکەوتن.", icon: `<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`, items: ["لێکۆڵینەوە و شیکاریی بازاڕ", "ڕاهێنان و ڕێنمایی میدیایی"] },
        ],
    },
    projects: {
        title: "بەڵگە لە کرداردا",
        subtitle: "تێڕوانینێک بۆ کاریگەریمان",
        subtitle_detail: "ئەو پڕۆژانەی لەم پرۆفایلەدا نیشان دراون، هەڵبژاردەیەکن لە کارە دیارەکانمان—کەمپینی جیاواز کە پان و بەرینی تواناکانمان نیشان دەدەن. ئەمانە تەواوی چیرۆکەکە نین. لە پشت پەردەوە، PRt دەیان دەستپێشخەری دیکەی لە سەرانسەری کەرتەکان، شارەکان و قەبارەکاندا سەرکردایەتی و جێبەجێ کردووە. لە چالاکییە بنەڕەتییەکانەوە تا ستراتیژییەکانی ئاستی دەستەی بەڕێوەبردن، کارەکانمان تەواوی بواری نایابی پەیوەندییە گشتییەکان دەگرێتەوە. هەموو پڕۆژەیەک، جا لێرەدا باس کرابێت یان نا، ئیمزای ئێمەی هەڵگرتووە: ستراتیژی بیرلێکراوە، شارەزایی کەلتووری، و پابەندبوونی بێوچان بە ئەنجامەکان.",
        impactLabel: "کاریگەری",
        cta: "ببینە",
        summaries: [
          { title: "گۆڕانکاری لە بواری پەیوەندییەکان", description: "لە زاخۆوە تا بەسرە، PRt گفتوگۆی سەرتاسەری بۆ کۆمپانیا پێشەنگەکانی پەیوەندییەکانی عێراق هەڵگیرساند. لە ڕێگەی ئەزموونی نوقمکەر و چیرۆکگێڕی لەسەر بنەمای داتا، ئێمە زیاتر لە ٢٠ ملیۆن دڵمان پێکەوە بەستەوە—تێکەڵکردنی داهێنان، تەکنەلۆژیا و کەلتوور لە یەک دەنگی بەهێزدا." },
          { title: "دیدگای دارایی نیشتمانی", description: "بە هاوبەشی لەگەڵ لایەنە پەیوەندیدارە نیشتمانییە سەرەکییەکان، PRt ستراتیژی پەیوەندییەکانی لە پشت یەکێک لە گرنگترین دەستپێشخەرییە ئابوورییەکانی عێراقەوە داڕشت و بەڕێوەی برد—پردێک لە نێوان دیدگا، متمانە و بەشداری گشتیدا." },
          { title: "تواناسازکردنی داهێنەران", description: "لە ئامادەیی بوێرانەی براندی BYDەوە تا پەرەسەندنی کات بەسەربردنی عێراق مۆڵ، PRt ئاهەنگ دەگێڕێت بۆ داهێنان و داهێنەری لە سەرانسەری پیشەسازییەکاندا. لە ڕێگەی چیرۆکگێڕی و بەشداری ستراتیژییەوە، ئێمە ئەو دەنگانە بەرز دەکەینەوە کە کەلتوور و بازرگانی مۆدێرنی عێراق oblik دەکەن." },
        ],
        items: [
           { 
              title: "یەلا فۆرمولا", 
              overview: "چالاکییەکی تەلەفۆنی نیشتمانی کە جۆشی فۆرمولا یەک و شارەزایی پەیوەندییە ستراتیژییەکانی تێکەڵ کرد—یەکخستنی بەشداریی جەستەیی، کارلێکی دیجیتاڵی و وردبینی گێڕانەوە. ئەم کەمپینە هاندەرێکی بارگاویکردنەوەی گۆڕی بۆ ساتێکی کەلتووری گشتگیر.",
              approach: [
                  "PRt سەرکردایەتی کەمپینێکی پەیوەندییە گشتییەکانی ٣٦٠ پلەی کرد، بە شێوەیەکی بێ کێشە ئەزموونە مەیدانییەکانی لەگەڵ ستراتیژییەکی پەیوەندییەکانی تەواودا تێکەڵ کرد.",
                  "یارییەکی پێشبڕکێی مۆبایلی کارلێککاری پەرەپێدا کە بەستراوەتەوە بە ڕەفتاری بارگاویکردنەوە، پاداشتی بەشداریکردنی بە هاندەری دیجیتاڵی بەمانا دەدا.",
                  "چالاکییە مەیدانییە نوقمکەرەکانی لە پارێzga سەرەکییەکاندا جێبەجێ کرد، پەیامی یەکگرتووی لە ڕێگەی دیزاین، سیناریۆ و ئەزموونی شوێنەوە گەیاند.",
                  "کاریگەرە پلە یەکەکانی کۆکردەوە بۆ گێڕانەوەی گەشتی کەمپینەکە لە کاتی ڕاستەقینەدا، ناوەڕۆکی وا دروست کرد کە لە سەرانسەری پلاتفۆرم و دیمۆگرافیاکاندا دەنگی دایەوە.",
                  "ستراتیژییەکی سۆشیال میدیای هاوکاتی خستەگەڕ، بە پاڵپشتی ڕووماڵی ڕاستەوخۆ، سەرمایەی داهێنەرانە و تاکتیکی بەشداریی بینەران.",
                  "سەرپەرشتی چاودێری و ڕاپۆرتکردنی سەرەتا تا کۆتایی، شیکاریی هەست و سۆز و باشکردنی ئەدای کرد بۆ ڕێنماییکردنی یەکخستنی پەیام و بەهێزکردنی.",
                  "پسپۆڕانی ڕاهێنراوی بەڕێوەبردنی قەرەباڵغی نارد بۆ دڵنیابوون لە ئەزموونی گشتیی بێ کێشە و بەرز و کارلێکی براند لە هەر شوێنێکی بۆنەکەدا."
              ],
              impact: [
                  "زیاتر لە ٢٠٠،٠٠٠ بەشداربووی لە سەرانسەری خاڵە دیجیتاڵی و جەستەییەکانی کەمپینەکەدا هەبوو.",
                  "ملیۆنەها بینینی ئۆرگانیکی بەدەستهێنا، بەهۆی چیرۆکگێڕی کاریگەران و بەشداریی کۆمەڵگەوە.",
                  "پەیوەندیی براند و ڕەفتاری بارگاویکردنەوەی بەهێز کرد، پێگەی کڕیارەکەی وەک پێشەنگێکی ژیان-محور لە بواری پەیوەندییەکاندا پتەو کرد."
              ], 
              image: "https://www.datocms-assets.com/134341/1745407148-pexels-tara-winstead-8386440-1.jpg?ar64=MTQxOjY1&auto=format&crop=focalpoint&fit=crop&fm=webp" 
            },
            { 
              title: "فیستیڤاڵی ڕەمەزان", 
              overview: "کەمپینێکی کەلتووری دەوڵەمەند کە بۆ قووڵکردنەوەی پەیوەندیی سۆزداری و نیشاندانی بەها هاوبەشەکان لە پیرۆزترین مانگی عێراقدا داڕێژرا. بۆ دوو ساڵی یەک لە دوای یەک دیزاین و پێشکەش کرا، فیستیڤاڵی ڕەمەزان بوو بە زیاتر لە چالاکییەکی براند، بوو بە نەریتێک.",
              approach: [
                  "PRt ئاهەنگێکی سەرتاسەری وڵاتی ڕێکخست کە کەلەپوور، مرۆڤایەتی و چیرۆکگێڕی تێکەڵ کرد.",
                  "بۆنەی گەورە و کۆمەڵگە-محوری لە سەرانسەری عێراقدا جێبەجێ کرد، ڕێزی لە ڕۆحی ڕەمەزان گرت و بانگهێشتی خەڵکی کرد بۆ ئەزموونی نوقمکەر و بەمانا.",
                  "ناوەڕۆکی بینراو و گێڕانەوەی کەلتووری دەوڵەمەندی پەرەپێدا کە ڕێزیان لە داب و نەریتی عێراقی و ڕۆحی بەخشندەیی دەگرت.",
                  "کەمپینێکی دیجیتاڵی یەکگرتووی چالاک کرد کە چیرۆکەکانی پێکەوەبوون و یەکڕیزی بەرز کردەوە، دەنگدانەوەی سۆزداری لە سەرانسەری بینەران و پلاتفۆرمەکاندا دروست کرد."
              ],
              impact: [
                  "ساڵانە پێشوازی لە زیاتر لە ٢٥،٠٠٠ ئامادەبوو کرا، ئەمەش وایکرد ببێتە یەکێک لە دیارترین کەمپینە وەرزییەکانی بازاڕ.",
                  "بەشداریی بینەرانی لە ڕەمەزاندا بە شێوەیەکی بەرچاو بەرز کردەوە، هانی بەشداریی هەم لەسەر ئینتەرنێت و هەم لە مەیداندا دا.",
                  "پێگەی کڕیارەکەی وەک براندێکی هاوسۆزی و گرنگیی کەلتووری قووڵ کردەوە، متمانە و وەفاداری سۆزداری لە سەرانسەری کۆمەڵگەکاندا بەهێز کرد."
              ], 
              image: "https://kurdishglobe.krd/wp-content/uploads/2025/03/IMG-20250310-WA0023.jpg" 
            },
            { 
              title: "AI بۆ کاریگەران", 
              overview: "بۆنەیەکی dاهێنەرانە بۆ ناساندنی تەکنەلۆژیای زیرەکیی دەستکردی پێشکەوتوو بە کاریگەرە دیارەکان، بەرزکردنەوەی تواناکانیان لە دروستکردنی ناوەڕۆک و کاریگەریی دیجیتاڵییان.",
              approach: [
                  "وۆرکشۆپی کرداریی تایبەت بۆ کاریگەرە پێشەنگەکانی عێراق.",
                  "نمایشی ئامرازەکانی زیرەکیی دەستکرد کە بۆ داهێنانی ناوەڕۆک دیزاین کراون.",
                  "کەمپینی سۆشیال میدیای کاریگەر بۆ دۆکیومێنتکردنی ئەزموونی کاریگەران."
              ],
              impact: [
                  "توانا دیجیتاڵییەکان و کوالیتی ناوەڕۆکی کاریگەرانی بەرز کردەوە.",
                  "بینرانی براندی لە ڕێگەی ناوەڕۆکی ڕەسەنی کاریگەرانەوە زیاد کرد.",
                  "پێگەی PRt و کڕیارەکەی وەک پێشەنگ لە یەکخستنی تەکنەلۆژیادا چەسپاند."
              ], 
              image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=3540&auto=format&fit=crop" 
            },
            { 
              title: "کەمپینی لەیلا", 
              overview: "کەمپینێکی PRی پێشەنگ بۆ ناساندنی لەیلا، یەکەم یاریدەدەری تەلەfۆنی عێراق کە بە زیرەکیی دەستکرد کاردەکات، بەردەست لە ڕێگەی پلاتفۆرمە دیجیتاڵییە جیاوازەکانەوە وەک واتسئەپ، مەسنجەر و وێبسایتی کڕیار.",
              approach: [
                  "ناوەڕۆکی دیجیتاڵی گاڵتەجاڕانە بەڵام پڕ لە تێگەیشتنی بەرهەمهێنا کە کاریگەرە دیارەکانی تێدابوو بۆ ڕاکێشانی سەرنجی گشتی.",
                  "بە شێوەیەکی ستراتیژی سوودی لە پلاتفۆرمەکانی سۆشیال میدیا وەرگرت بۆ نیشاندانی ئاسانی بەکارهێنان و وەڵامدانەوەی لەیلا.",
                  "پەیوەندییەکانی PRی پێشەنگانەی بەڕێوەبرد کە تیشکیان دەخستە سەر داهێنانی تەکنەلۆژی و ئەزموونی کڕیار."
              ],
              impact: [
                  "بەسەرکەوتوویی لەیلای وەک یاریدەدەرێکی دیجیتاڵی ناسراو و متمانەپێکراو چەسپاند.",
                  "بەشداریی دیجیتاڵی بە شێوەیەکی بەرچاو بەرز کردەوە، هانی بەکارهێنانی خزمەتگوزارییە دیجیتاڵییەکانی کڕیاری دا.",
                  "پێشەنگایەتیی کڕیarەکەی لە چارەسەرەکانی خزمەتگوزاریی کڕیارانی تەکنەلۆژی-محوردا بەهێز کرد."
              ], 
              image: "https://media.licdn.com/dms/image/v2/D4D22AQFi21LfZL70Jg/feedshare-shrink_800/feedshare-shrink_800/0/1731783981800?e=2147483647&v=beta&t=VbN6o84xPaaLyyt2McSVKwNnf-xggctsbY2FQLTedRY" 
            },
            { 
              title: "کۆڕەکانی TechWave", 
              overview: "بۆنەیەکی تەکنەلۆژی زیندوو و گەنجانە کە بە هاوکاریی دامەزراوە ئەکادیمییەکان بەڕێوەچوو، تیشکی خستە سەر ترێندە تەکنەلۆژییە نوێیەکان و نەوەی داهاتووی dاهێنەران و کارسازانی تەکنەلۆژیای عێراقی هان دا.",
              approach: [
                  "دانیشتنی کارلێککار، گفتوگۆی پانێڵ و نمایشی ڕاستەوخۆی ڕێکخست کە تیشکیان دەخستە سەر تەکنەلۆژیا پێشکەوتووەکان.",
                  "هاوکارییەکانی نێوان ئەکادیمیا، کۆمپانیاکانی تەکنەلۆژیا و کۆمەڵگە کارسازییەکانی ئاسان کرد.",
                  "ستراتیژییەکانی PR و دیجیتاڵی دینامیکی جێبەجێ کرد بۆ ڕاکێشانی ئامادەبوونی بەرفراوان و سەرنجی میدیا."
              ],
              impact: [
                  "بەسەرکەوتوویی هەزاران بەشداربووی هێنایە ناوەوە، بە شێوەیەکی بەرچاو هۆشیاریی دەربارەی دەرفەتە تەکنەلۆژییەکان بەرز کردەوە.",
                  "پەیوەندییەکانی کۆمەڵگە و لایەنە پەیوەندیدارەکانی بەهێز کرد، کڕیارەکانی وەک پێشەنگ لە پەروەردەی تەکنەلۆژی و داهێناندا جێگیر کرد.",
                  "میدیا کاڤەرێکی بەهێز و دەنگدانەوەی سۆشیالی دروست کرد، کاریگەریی ئەرێنی لەسەر بینرانی براندی کڕیار لەنێو گەنجان و پەروەردەکاراندا هەبوو."
              ], 
              image: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=3540&auto=format=fit&crop" 
            },
             { 
              title: "فیستیڤاڵی ڕەمەزانی ئاسیاسێڵ", 
              overview: "ئێوارەیەکی زیندوو لە کەلتوور، داهێنان و کۆمەڵگە، فیستیڤاڵەکە هەزارانی لەژێر ڕووناکی بەغدادا کۆکردەوە بۆ مۆسیقا، یاری، هونەر و ساتە هاوبەشەکان. زیاتر لە بۆنەیەک—ئەو دەربڕینێکی زیندووی هاوسۆزیی براند بوو، کە بە وردی لە هەموو وردەکارییەک و هەموو ڕوخسارێکدا داڕێژرابوو.",
              impact: [
                  "بەشدارییەکی بەرچاوی کۆمەڵگەیی و وەفاداری بۆ براندی دروست کرد.",
                  "ڕووماڵێکی میدیایی ئەرێنی بەرفراوان و دەنگدانەوەیەکی زۆری لە سۆشیال میدیادا دروست کرد.",
                  "پابەندبوونی کڕیاری بە دەستپێشخەرییە کەلتووری و کۆمەڵگەییەکان دووپات کردەوە."
              ], 
              image: "https://images.unsplash.com/photo-1573496130407-57329f01f769?q=80&w=3540&auto=format&fit=crop"
            },
            { 
              title: "چیرۆکێکی تەواونەکراو", 
              overview: "دەنگێک زوو بێدەنگ کرا، بەڵام هەرگیز نەبیستراو نەبوو—ئەم ڕێزلێنانە ڕێز لە خەونی بوراق یاسین دەگرێت لە ڕێگەی تۆمارێکی کۆتاییەوە کە بە ڕۆح و ڕاستگۆیی دەنگ دەداتەوە. بە ڕێزێکی قووڵەوە بەرهەم هێنراوە، هەم وەک ماڵئاوایی و هەم وەک بەڵێنێک دەمێنێتەوە: کە حەزی ڕاستەقینە تێبینییەکی بەردەوام بەجێدەهێڵێت.",
              impact: [
                  "ڕێزلێنانێکی کاریگەر و بەڕێزی دروست کرد کە بە قووڵی لەلایەن بینەرانەوە دەنگی دایەوە.",
                  "شەپۆلێک لە پشتیوانی و بەشداریی دڵسۆزانەی لەسەر ئینتەرنێت دروست کرد.",
                  "ڕێزی لە میراتی هونەرمەندەکە گرت و پلاتفۆرمێکی بۆ کاری کۆتایی دابین کرد."
              ], 
              image: "https://kurdishglobe.krd/wp-content/uploads/2025/03/IMG-20250310-WA0023.jpg"
            }
        ],
    },
    valueStats: [
        { value: 3.5, decimals: 1, prefix: "$", suffix: "+M", label: "بەڕێوەبردنی ساڵانە لە پەیوەندییەکانی کڕیار" },
        { value: 30, suffix: "+", label: "کارمەند لە سەرانسەری هەرێم" },
        { value: 300, suffix: "+", label: "پێشخەری مەیدانی لە سەرانسەری وڵات" },
        { value: 2, label: "ئۆفیسی ستراتیژی و کۆگا" },
    ],
    clients: {
      title: "کڕیاران و هاوکارییەکان",
      subtitle: "گەشتەکەمان هاوبەشی لەگەڵ پێشەنگانی پیشەسازی، ڕێکخراوە جیهانییە ناسراوەکان و کۆمپانیا ناوخۆییە کاریگەرەکان لەخۆدەگرێت. ئەوان متمانەمان پێدەکەن بە چیرۆکەکانیان—ڕێگەمان پێدەدات دەنگیان بەرز بکەینەوە و مەودایان فراوان بکەین.",
      list: ["Startup Grind", "USAID", "Chemonics", "KAPITA", "EARTHLINK", "GIZ", "Asiacell", "Tafa3ul", "1001", "The Station", "Iraqi Private Banks League", "Central Bank of Iraq"],
    },
    careers: {
      title: "ببە بە بەشێک لە تیمەکەمان",
      subtitle: "ئێمە ئەندازیاری کەلتوورین، گێڕانەوەی وا دادەڕێژین کە سبەی پێناسە دەکەن. ئەگەر حەزت لە داهێنان، فرەیی و دروستکردنی کاریگەریی بەردەوامە، دەمانەوێت گوێمان لێت بێت.",
      culture: {
        title: "بۆچی لە PRt کار بکەیت؟",
        text: "ئێمە زیاتر لە ئاژانسێکین؛ ئێمە کۆمەڵگەیەکی چیرۆکگێڕ، ستراتیژیست و داهێنەرین. هێزمان لە دیدگا جیاوازەکانمانەوە سەرچاوە دەگرێت، کە حەزێکی هاوبەش بۆ داڕشتنی گێڕانەوەی گرنگ یەکماندەخات. ئێمە تەحەدای نەریتەکان دەکەین، شیعر لە شتە ئاساییەکاندا دەدۆزینەوە، و باوەڕمان وایە کە کردارەکانمان میراتمان دیاری دەکەن.",
        perks: {
          title: "سوود و ئیمتیازات",
          items: ["مووچەی ڕکابەر", "پەرەپێدانی پیشەیی", "ژینگەی هاوکارانە", "کاری بەمانا"],
        }
      },
      openings: {
        title: "هەلەکانی کاری ئێستا",
        cta: "ئێستا داواکاری پێشکەش بکە",
        jobs: [
          { title: "پسپۆڕی پەیوەندییە گشتییەکان", location: "بەغداد", type: "کاتی تەواو" },
          { title: "دروستکەری ناوەڕۆکی دیجیتاڵی", location: "بەغداد", type: "کاتی تەواو" },
          { title: "بەڕێوەبەری سۆشیال میدیا", location: "سلێمانی", type: "کاتی تەواو" },
          { title: "ڕێکخەری بۆنەکان", location: "بەغداد", type: "گرێبەست" },
        ]
      }
    },
    contact: {
        title: "با چیرۆکەکەت لەگەڵ ئێمە دەست پێ بکات",
        subtitle: "گێڕانەوەی مەزن هەروا بەڕێکەوت دروست نابن؛ بە وردی دادەڕێژرێن. چیرۆکەکەت شایەنی ئەوەیە بەهێز بگێڕدرێتەوە. پێکەوە، با بەشی dاهاتووی سەرنجڕاکێش بنووسین.",
        details: { title: "زانیارییەکانی پەیوەندی", address: "عێراق-بەغداد", email: "info@prt.agency", phone: "+964 772 211 1118" },
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
        subtitle: "شارەزابوون لە هونەری پەیوەندییە گشتییەکان",
        email: "info@prt.agency",
        copyright: "© {year} ئاژانسی PRt. هەموو مافەکان پارێزراون.",
    }
  }
};