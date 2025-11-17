import type { ServiceCategory, Project, CoreBelief, ValueStat, Job, Testimonial, Insight, TeamMember } from './types';

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
    team: {
      title: string;
      subtitle: string;
      members: TeamMember[];
    }
  };
  technology: {
    title: string;
    subtitle: string;
    feature1: {
      title: string;
      text: string;
    };
    feature2: {
      title: string;
      text: string;
    };
  };
  process: {
    title: string;
    subtitle: string;
    steps: { title: string; description: string, icon: string; }[];
  };
  insights: {
    title: string;
    subtitle: string;
    items: Insight[];
  };
  testimonials: {
    title: string;
    subtitle: string;
    items: Testimonial[];
  };
  services: {
      title: string;
      items: ServiceCategory[];
  };
  projects: {
      title: string;
      subtitle: string;
      subtitle_detail: string;
      approachLabel: string;
      impactLabel: string;
      cta: string;
      cta_show_more: string;
      cta_show_less: string;
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

const enTranslations: Translations = {
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
            title: "Our Core Beliefs",
            items: [
                { title: "Integrity Above All", description: "We protect your narrative as diligently as scribes of history.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>` },
                { title: "Extraordinary from the Ordinary", description: "We find poetry hidden within the mundane, crafting compelling stories from everyday moments.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L9 9l-7 2 5 5-1 7 6-4 6 4-1-7 5-5-7-2z"></path></svg>` },
                { title: "Milestones That Matter", description: "We measure success not in campaigns, but in cultural impact and lasting legacy.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>` },
                { title: "Innovation as a Creed", description: "We challenge convention, relentlessly exploring uncharted paths that redefine what's possible.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 14h.01"></path><path d="M8.5 14h.01"></path><path d="M4.53 9.47 5.24 11"></path><path d="M19.47 9.47 18.76 11"></path><path d="m12 2-3.5 3.5"></path><path d="M12 22v-3.5"></path><path d="M9 18.5h6"></path><path d="M12 2v10c0 3.3-2.7 6-6 6h-1a6 6 0 0 1-6-6V8"></path><path d="m13 12 5-5"></path></svg>` },
                { title: "Action Over Words", description: "Our commitments are etched in actions, not merely spoken.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>` },
                { title: "Unity in Diversity", description: "Our strength stems from diverse perspectives; each voice enriches our narrative.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg>` },
            ],
        },
        team: {
          title: "Meet the Architects of Influence",
          subtitle: "The driving force behind our creative strategies and impactful narratives. Our team's diverse expertise and shared passion for storytelling are the cornerstones of our success.",
          members: [
            { name: "Nour Al-Hashimi", title: "Chief Executive Officer", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" },
            { name: "Omar Khalil", title: "Creative Director", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop" },
            { name: "Zaid Al-Ghanam", title: "Social Impact Projects Manager", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1287&auto=format&fit=crop" },
            { name: "Aya Al-Nuaimi", title: "Head of Internal Communications", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop" },
            { name: "Tariq Al-Janabi", title: "Media Relations Manager", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop" },
            { name: "Layla Hassan", title: "Crisis Communications Lead", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1287&auto=format&fit=crop" },
            { name: "Ali Mohannad Khaled", title: "Logistics Officer", image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1287&auto=format&fit=crop" },
            { name: "Fatima Al-Amir", title: "Project Manager", image: "https://images.unsplash.com/photo-1554415511-53a4f85412a8?q=80&w=1470&auto=format&fit=crop" }
          ]
        }
    },
    technology: {
      title: "Technology & Innovation",
      subtitle: "Harnessing the power of data and AI to craft narratives that are not just told, but felt. We engineer influence through cutting-edge technology.",
      feature1: {
        title: "Data-Driven Narratives",
        text: "We move beyond intuition. Our strategies are built on a foundation of robust data analytics, market research, and sentiment analysis. By understanding audience behaviors and cultural nuances at a granular level, we ensure every message is precisely targeted and powerfully resonant."
      },
      feature2: {
        title: "AI-Powered Insights",
        text: "Leveraging artificial intelligence, we unlock predictive insights and automate complex media monitoring. This allows us to anticipate trends, identify opportunities, and react to crises with unmatched speed and intelligence, keeping our clients always one step ahead."
      }
    },
    process: {
        title: "Our Strategic Process",
        subtitle: "We blend methodical precision with creative intuition. Our process is designed to uncover deep insights and transform them into culturally resonant, impactful narratives.",
        steps: [
            { title: "Discovery & Strategy", description: "We begin by immersing ourselves in your world. Through deep listening, market analysis, and collaborative workshops, we define clear objectives and map out a strategic path to success.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>` },
            { title: "Narrative Crafting", description: "This is where insight becomes story. Our team of writers, strategists, and creatives collaborate to build a compelling core narrative that is authentic to your brand and captivating to your audience.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>` },
            { title: "Multi-Channel Activation", description: "A great story deserves a grand stage. We deploy your narrative across a carefully selected mix of channels—from media relations and digital platforms to immersive events—ensuring maximum reach and resonance.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>` },
            { title: "Impact Analysis", description: "Our work doesn't end at launch. We meticulously track performance, measure sentiment, and analyze data to provide clear reports on ROI and gather insights for future optimization and growth.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V16"></path></svg>` }
        ]
    },
    insights: {
        title: "Insights From Our Experts",
        subtitle: "Meet the strategists, storytellers, and innovators shaping the future of communication in our region.",
        items: [
            { 
              topic: "How can public relations leverage AI and Data Analytics?", 
              expertName: "Zaid Al-Ghanam", 
              expertTitle: "Social Impact Projects Manager",
              expertImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1287&auto=format&fit=crop"
            },
            { 
              topic: "Internal communication strategies that build employee loyalty.", 
              expertName: "Aya Al-Nuaimi", 
              expertTitle: "Head of Internal Communications",
              expertImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop"
            },
            { 
              topic: "How does PR build a bridge between the brand and society?", 
              expertName: "Tariq Al-Janabi", 
              expertTitle: "Media Relations Manager",
              expertImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop"
            },
            { 
              topic: "Navigating crises: The pivotal role of PR in reputation management.", 
              expertName: "Layla Hassan", 
              expertTitle: "Crisis Communications Lead",
              expertImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1287&auto=format&fit=crop"
            }
        ]
    },
    testimonials: {
        title: "What Our Clients Say",
        subtitle: "Partnerships built on trust, strategy, and exceptional results. Here's what some of our clients have to say about their journey with PRt.",
        items: [
            { quote: "PRt didn't just run a campaign; they started a movement. Their understanding of the Iraqi cultural landscape is unparalleled. They are true partners in every sense of the word.", author: "Ahmed Al-Sudani", title: "CEO, Tech Innovators Inc." },
            { quote: "The team's strategic foresight and flawless execution turned our annual festival into a nationally recognized event. Their passion and dedication are evident in every detail.", author: "Fatima Al-Jubori", title: "Director, Baghdad Arts & Culture Festival" },
            { quote: "In a critical moment for our brand, PRt provided the guidance and crisis management we desperately needed. Their calm, strategic approach protected our reputation and built stronger trust with our stakeholders.", author: "Yusuf Al-Maliki", title: "Managing Director, Basra Logistics" },
        ]
    },
    services: {
      title: "Our Services",
      items: [
          {
              title: "Public Relations",
              description: "Crafting narratives that build reputation and influence.",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
              items: ["Media Relations", "Crisis Management", "Corporate Communications", "Reputation Management"]
          },
          {
              title: "Digital Strategy",
              description: "Engaging audiences in the digital landscape with data-driven strategies.",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
              items: ["Social Media Management", "Content Creation", "Influencer Marketing", "SEO & SEM"]
          },
          {
              title: "Event Management",
              description: "Creating memorable experiences that connect brands with their audience.",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
              items: ["Corporate Events", "Product Launches", "Press Conferences", "Cultural Festivals"]
          },
      ]
    },
    projects: {
        title: "Our Work",
        subtitle: "Stories we've shaped, impacts we've made.",
        subtitle_detail: "A selection of projects that showcase our strategic approach and creative execution. Click and drag the sphere to explore our portfolio.",
        approachLabel: "Our Approach",
        impactLabel: "Impact",
        cta: "Learn More",
        cta_show_more: "Show Details",
        cta_show_less: "Hide Details",
        items: [
            {
                title: "Tech Innovators Launch",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop",
                overview: "A comprehensive campaign to launch a new tech product in the Iraqi market, establishing it as a market leader from day one.",
                approach: ["In-depth market research to identify key demographics.", "Strategic influencer outreach program.", "Multi-platform media blitz across digital and traditional channels."],
                impact: ["Achieved 200% of sales target in the first quarter.", "Generated over 50 million media impressions.", "Secured 'Product of the Year' award from a leading tech publication."]
            },
            {
                title: "Baghdad Arts Festival",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
                overview: "A social impact initiative to promote youth empowerment and cultural exchange through a city-wide arts festival.",
                approach: ["Community engagement and partnership with local artists.", "A targeted digital campaign to drive attendance and participation.", "High-profile media relations to secure national coverage."],
                impact: ["Engaged over 10,000 young people across 5 cities.", "Secured long-term funding from international cultural partners.", "Increased tourism to the region by 15% during the festival period."]
            },
            { title: "National Telecom Rebrand", image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1374&auto=format&fit=crop", overview: "Revitalizing a major telecom brand to reconnect with a younger audience and modernize its image.", impact: ["25% increase in brand sentiment among the 18-25 demographic.", "Successful launch of a new youth-focused mobile plan."] },
            { title: "Horizon Bank CSR Initiative", image: "https://images.unsplash.com/photo-1560439546-17b79d71a17c?q=80&w=1374&auto=format&fit=crop", overview: "Developing and promoting a nationwide financial literacy program for small business owners.", impact: ["Empowered over 500 entrepreneurs with essential financial skills.", "Received a national award for Corporate Social Responsibility."] },
            { title: "Gulf Industries Expansion", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop", overview: "A strategic communications plan to support the company's expansion into new regional markets.", impact: ["Successfully established a strong brand presence in two new countries.", "Facilitated key partnerships with local distributors and stakeholders."] },
            { title: "Basra Logistics Reputation Management", image: "https://images.unsplash.com/photo-1577563908411-5ab7254a4f35?q=80&w=1470&auto=format&fit=crop", overview: "A proactive crisis communication and reputation management strategy to navigate complex industry challenges.", impact: ["Maintained a positive public image during a period of market volatility.", "Strengthened trust and transparency with clients and investors."] },
            { title: "Eco-Iraq Sustainability Campaign", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1470&auto=format&fit=crop", overview: "Raising awareness about environmental issues and promoting sustainable practices among the public.", impact: ["Reached over 2 million people through an integrated media campaign.", "Led to a measurable increase in recycling rates in target communities."] }
        ]
    },
    valueStats: [
        { value: 15, suffix: 'M+', label: "Media Impressions" },
        { value: 98, suffix: '%', label: "Client Satisfaction" },
        { value: 25, label: "Successful Campaigns" },
        { value: 8, label: "Industry Awards" }
    ],
    clients: {
        title: "Our Partners",
        subtitle: "We are proud to collaborate with leading brands and organizations.",
        list: ["Tech Innovators Inc.", "Baghdad Arts & Culture Festival", "Gulf Industries", "Basra Logistics", "National Telecom", "Horizon Bank", "Eco-Iraq"]
    },
    careers: {
        title: "Join Our Team",
        subtitle: "Shape the future of communication with us. We're looking for passionate storytellers and strategists.",
        culture: {
            title: "Our Culture",
            text: "We foster a collaborative, innovative, and inclusive environment where every voice is heard and every idea matters. We believe in growth, both for our clients and our team.",
            perks: {
                title: "What We Offer",
                items: ["Competitive Salary", "Health Insurance", "Professional Development", "Flexible Work Hours", "Creative Workspace", "Team Events"]
            }
        },
        openings: {
            title: "Current Openings",
            cta: "Apply Now",
            jobs: [
                { title: "PR Specialist", location: "Baghdad", type: "Full-time" },
                { title: "Digital Marketing Manager", location: "Sulaimaniyah", type: "Full-time" },
                { title: "Graphic Designer", location: "Remote", type: "Contract" }
            ]
        }
    },
    contact: {
        title: "Get in Touch",
        subtitle: "Have a story to tell? We're here to listen. Let's create something impactful together.",
        details: {
            title: "Contact Details",
            address: "123 Al-Mansour St, Baghdad, Iraq",
            email: "hello@prt.iq",
            phone: "+964 780 123 4567"
        },
        form: {
            name: "Your Name",
            email: "Your Email",
            message: "Your Message",
            submit: "Send Message",
            sending: "Sending...",
            success: {
                title: "Thank You!",
                message: "Your message has been sent successfully. We will get back to you shortly."
            }
        }
    },
    footer: {
        subtitle: "Narratives that Influence Generations.",
        email: "hello@prt.iq",
        copyright: "© {year} PRt Agency. All Rights Reserved."
    }
};

const arTranslations: Translations = {
    navLinks: [
      { name: 'الرئيسية', id: 'home' },
      { name: 'من نحن', id: 'about' },
      { name: 'خدماتنا', id: 'services' },
      { name: 'مشاريعنا', id: 'projects' },
      { name: 'وظائف', id: 'careers' },
      { name: 'اتصل بنا', id: 'contact' },
    ],
    hero: {
        title: { part1: 'سرديات', highlighted: 'تؤثر', part2: 'في الأجيال' },
        subtitle: 'نحن نحول التواصل اليومي إلى قصص قوية تشكل المجتمع وتبني الثقة.',
        button: 'اروِ قصتك',
    },
    about: {
        title: "من نحن",
        aboutText: [
          "\"عند تقاطع التراث والابتكار، تحول PRt العلامات التجارية إلى سرديات قوية تشكل الثقافة.\"",
          "تأسست PRt في عام 2022، وهي أكثر من مجرد وكالة علاقات عامة، نحن مهندسون ثقافيون. متجذرون بعمق في التقاليد العراقية ولكن بوعي عالمي، نحن نصوغ سرديات تشرك العقول وتؤثر في القلوب وتدفع التغيير الدائم عبر مشهد الأعمال المتطور في العراق.",
          "من خلال مكتبين استراتيجيين (بغداد والسليمانية)، يمتد وصولنا على مستوى البلاد. نحن ندير استراتيجياً محفظة اتصالات سنوية تزيد عن 3.5 مليون دولار، مستثمرة بدقة في نجاح عملائنا. يضمن فريق PRt الواسع والمتنوع التنفيذ السلس والحضور المؤثر من زاخو إلى البصرة."
        ],
        quote: "كل قصة لديها القدرة على إعادة كتابة المستقبل. بين أيدينا، تصبح الكلمات جسورًا، تربط الأحلام بالواقع، وتحول التصورات، وتغير المصائر.",
        mission: {
            title: "مهمتنا",
            text: "تمكين العلامات التجارية بسرديات تشعل المحادثات، وتبني الثقة، وتلهم العمل عبر المجتمعات."
        },
        vision: {
            title: "رؤيتنا",
            text: "أن نكون معترفًا بنا كأبرز راوي قصص في العراق، محولين التواصل اليومي إلى سرديات قوية تشكل المجتمع وتؤثر في الأجيال."
        },
        coreBeliefs: {
            title: "قيمنا الأساسية",
            items: [
                { title: "النزاهة فوق كل شيء", description: "نحمي سردك بجدية كما يفعل كتبة التاريخ.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>` },
                { title: "الاستثنائي من العادي", description: "نجد الشعر المخبأ في الأمور العادية، صانعين قصصًا آسرة من لحظات الحياة اليومية.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L9 9l-7 2 5 5-1 7 6-4 6 4-1-7 5-5-7-2z"></path></svg>` },
                { title: "إنجازات تهم", description: "نقيس النجاح ليس بالحملات، بل بالتأثير الثقافي والإرث الدائم.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>` },
                { title: "الابتكار كعقيدة", description: "نتحدى التقاليد، مستكشفين بلا هوادة مسارات غير مألوفة تعيد تعريف الممكن.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 14h.01"></path><path d="M8.5 14h.01"></path><path d="M4.53 9.47 5.24 11"></path><path d="M19.47 9.47 18.76 11"></path><path d="m12 2-3.5 3.5"></path><path d="M12 22v-3.5"></path><path d="M9 18.5h6"></path><path d="M12 2v10c0 3.3-2.7 6-6 6h-1a6 6 0 0 1-6-6V8"></path><path d="m13 12 5-5"></path></svg>` },
                { title: "الفعل قبل القول", description: "التزاماتنا محفورة في الأفعال، وليست مجرد كلمات تقال.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>` },
                { title: "الوحدة في التنوع", description: "قوتنا تنبع من وجهات نظر متنوعة؛ كل صوت يثري سردنا.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg>` },
            ],
        },
        team: {
          title: "تعرف على مهندسي التأثير",
          subtitle: "القوة الدافعة وراء استراتيجياتنا الإبداعية وسردياتنا المؤثرة. خبرة فريقنا المتنوعة وشغفهم المشترك برواية القصص هما حجر الزاوية في نجاحنا.",
          members: [
            { name: "نور الهاشمي", title: "الرئيس التنفيذي", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" },
            { name: "عمر خليل", title: "المدير الإبداعي", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop" },
            { name: "زيد الغنام", title: "مدير مشاريع التأثير الاجتماعي", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1287&auto=format&fit=crop" },
            { name: "آية النعيمي", title: "رئيسة الاتصالات الداخلية", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop" },
            { name: "طارق الجنابي", title: "مدير العلاقات الإعلامية", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop" },
            { name: "ليلى حسن", title: "قائدة اتصالات الأزمات", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1287&auto=format&fit=crop" },
            { name: "علي مهند خالد", title: "مسؤول اللوجستيات", image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1287&auto=format&fit=crop" },
            { name: "فاطمة الأمير", title: "مديرة المشاريع", image: "https://images.unsplash.com/photo-1554415511-53a4f85412a8?q=80&w=1470&auto=format&fit=crop" }
          ]
        }
    },
    technology: {
      title: "التكنولوجيا والابتكار",
      subtitle: "تسخير قوة البيانات والذكاء الاصطناعي لصياغة سرديات لا تروى فحسب، بل تُشعر بها. نحن نهندس التأثير من خلال التكنولوجيا المتطورة.",
      feature1: {
        title: "سرديات قائمة على البيانات",
        text: "نتجاوز الحدس. استراتيجياتنا مبنية على أساس من تحليلات البيانات القوية، وأبحاث السوق، وتحليل المشاعر. من خلال فهم سلوكيات الجمهور والفروق الثقافية الدقيقة على مستوى تفصيلي، نضمن أن كل رسالة مستهدفة بدقة وقوية الصدى."
      },
      feature2: {
        title: "رؤى مدعومة بالذكاء الاصطناعي",
        text: "بالاستفادة من الذكاء الاصطناعي، نكشف عن رؤى تنبؤية ونقوم بأتمتة مراقبة وسائل الإعلام المعقدة. هذا يسمح لنا بتوقع الاتجاهات، وتحديد الفرص، والاستجابة للأزمات بسرعة وذكاء لا مثيل لهما، مما يبقي عملاءنا دائمًا متقدمين بخطوة."
      }
    },
    process: {
        title: "عمليتنا الاستراتيجية",
        subtitle: "نمزج الدقة المنهجية بالحدس الإبداعي. تم تصميم عمليتنا للكشف عن رؤى عميقة وتحويلها إلى سرديات مؤثرة وذات صدى ثقافي.",
        steps: [
            { title: "الاكتشاف والاستراتيجية", description: "نبدأ بالانغماس في عالمك. من خلال الاستماع العميق، وتحليل السوق، وورش العمل التعاونية، نحدد أهدافًا واضحة ونرسم مسارًا استراتيجيًا للنجاح.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>` },
            { title: "صياغة السرد", description: "هنا تتحول الرؤية إلى قصة. يتعاون فريقنا من الكتاب والاستراتيجيين والمبدعين لبناء سرد أساسي مقنع يكون أصيلاً لعلامتك التجارية وجذابًا لجمهورك.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>` },
            { title: "التفعيل متعدد القنوات", description: "القصة العظيمة تستحق مسرحًا كبيرًا. ننشر سردك عبر مزيج مختار بعناية من القنوات - من العلاقات الإعلامية والمنصات الرقمية إلى الفعاليات الغامرة - مما يضمن أقصى وصول وصدى.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>` },
            { title: "تحليل الأثر", description: "عملنا لا ينتهي عند الإطلاق. نتتبع الأداء بدقة، ونقيس المشاعر، ونحلل البيانات لتقديم تقارير واضحة عن عائد الاستثمار وجمع رؤى للتحسين والنمو المستقبلي.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V16"></path></svg>` }
        ]
    },
    insights: {
        title: "رؤى من خبرائنا",
        subtitle: "تعرف على الاستراتيجيين، ورواة القصص، والمبتكرين الذين يشكلون مستقبل التواصل في منطقتنا.",
        items: [
            { 
              topic: "كيف يمكن للعلاقات العامة الاستفادة من الذكاء الاصطناعي وتحليلات البيانات؟", 
              expertName: "زيد الغنام", 
              expertTitle: "مدير مشاريع التأثير الاجتماعي",
              expertImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1287&auto=format&fit=crop"
            },
            { 
              topic: "استراتيجيات الاتصال الداخلي التي تبني ولاء الموظفين.", 
              expertName: "آية النعيمي", 
              expertTitle: "رئيسة الاتصالات الداخلية",
              expertImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop"
            },
            { 
              topic: "كيف تبني العلاقات العامة جسرًا بين العلامة التجارية والمجتمع؟", 
              expertName: "طارق الجنابي", 
              expertTitle: "مدير العلاقات الإعلامية",
              expertImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop"
            },
            { 
              topic: "إدارة الأزمات: الدور المحوري للعلاقات العامة في إدارة السمعة.", 
              expertName: "ليلى حسن", 
              expertTitle: "قائدة اتصالات الأزمات",
              expertImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1287&auto=format&fit=crop"
            }
        ]
    },
    testimonials: {
        title: "ماذا يقول عملاؤنا",
        subtitle: "شراكات مبنية على الثقة والاستراتيجية والنتائج الاستثنائية. إليك ما يقوله بعض عملائنا عن رحلتهم مع PRt.",
        items: [
            { quote: "PRt لم تقم بحملة فقط؛ بل بدأت حركة. فهمهم للمشهد الثقافي العراقي لا مثيل له. هم شركاء حقيقيون بكل معنى الكلمة.", author: "أحمد السوداني", title: "الرئيس التنفيذي، Tech Innovators Inc." },
            { quote: "البصيرة الاستراتيجية للفريق والتنفيذ الخالي من العيوب حولا مهرجاننا السنوي إلى حدث معترف به وطنياً. شغفهم وتفانيهم واضحان في كل التفاصيل.", author: "فاطمة الجبوري", title: "مديرة، مهرجان بغداد للفنون والثقافة" },
            { quote: "في لحظة حرجة لعلامتنا التجارية، قدمت PRt التوجيه وإدارة الأزمات التي كنا في أمس الحاجة إليها. نهجهم الهادئ والاستراتيجي حمى سمعتنا وبنى ثقة أقوى مع أصحاب المصلحة.", author: "يوسف المالكي", title: "المدير الإداري، Basra Logistics" },
        ]
    },
    services: {
      title: "خدماتنا",
      items: [
          {
              title: "العلاقات العامة",
              description: "صياغة سرديات تبني السمعة وتؤثر.",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
              items: ["العلاقات الإعلامية", "إدارة الأزمات", "الاتصالات المؤسسية", "إدارة السمعة"]
          },
          {
              title: "الاستراتيجية الرقمية",
              description: "إشراك الجماهير في المشهد الرقمي باستراتيجيات قائمة على البيانات.",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
              items: ["إدارة وسائل التواصل الاجتماعي", "إنشاء المحتوى", "التسويق عبر المؤثرين", "تحسين محركات البحث والتسويق عبرها"]
          },
          {
              title: "إدارة الفعاليات",
              description: "خلق تجارب لا تنسى تربط العلامات التجارية بجمهورها.",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
              items: ["فعاليات الشركات", "إطلاق المنتجات", "مؤتمرات صحفية", "مهرجانات ثقافية"]
          },
      ]
    },
    projects: {
        title: "أعمالنا",
        subtitle: "قصص شكلناها، تأثيرات صنعناها.",
        subtitle_detail: "مجموعة مختارة من المشاريع التي تعرض نهجنا الاستراتيجي وتنفيذنا الإبداعي. انقر واسحب الكرة لاستكشاف محفظتنا.",
        approachLabel: "نهجنا",
        impactLabel: "الأثر",
        cta: "اعرف المزيد",
        cta_show_more: "إظهار التفاصيل",
        cta_show_less: "إخفاء التفاصيل",
        items: [
            {
                title: "إطلاق مبتكري التكنولوجيا",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop",
                overview: "حملة شاملة لإطلاق منتج تقني جديد في السوق العراقي، وترسيخه كرائد في السوق من اليوم الأول.",
                approach: ["بحث سوقي متعمق لتحديد الفئات الديموغرافية الرئيسية.", "برنامج استراتيجي للتواصل مع المؤثرين.", "حملة إعلامية متعددة المنصات عبر القنوات الرقمية والتقليدية."],
                impact: ["تحقيق 200% من هدف المبيعات في الربع الأول.", "توليد أكثر من 50 مليون انطباع إعلامي.", "الحصول على جائزة 'منتج العام' من مجلة تقنية رائدة."]
            },
            {
                title: "مهرجان بغداد للفنون",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
                overview: "مبادرة ذات تأثير اجتماعي لتعزيز تمكين الشباب والتبادل الثقافي من خلال مهرجان فني على مستوى المدينة.",
                approach: ["المشاركة المجتمعية والشراكة مع الفنانين المحليين.", "حملة رقمية موجهة لزيادة الحضور والمشاركة.", "علاقات إعلامية رفيعة المستوى لتأمين تغطية وطنية."],
                impact: ["إشراك أكثر من 10,000 شاب في 5 مدن.", "تأمين تمويل طويل الأجل من شركاء ثقافيين دوليين.", "زيادة السياحة في المنطقة بنسبة 15% خلال فترة المهرجان."]
            },
            { title: "إعادة إطلاق علامة الاتصالات الوطنية", image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1374&auto=format&fit=crop", overview: "تنشيط علامة تجارية كبرى للاتصالات لإعادة التواصل مع جمهور أصغر سنًا وتحديث صورتها.", impact: ["زيادة بنسبة 25% في مشاعر العلامة التجارية بين الفئة العمرية 18-25.", "إطلاق ناجح لخطة جوال جديدة موجهة للشباب."] },
            { title: "مبادرة المسؤولية الاجتماعية لبنك الأفق", image: "https://images.unsplash.com/photo-1560439546-17b79d71a17c?q=80&w=1374&auto=format&fit=crop", overview: "تطوير وتعزيز برنامج وطني للتثقيف المالي لأصحاب المشاريع الصغيرة.", impact: ["تمكين أكثر من 500 رائد أعمال بالمهارات المالية الأساسية.", "الحصول على جائزة وطنية للمسؤولية الاجتماعية للشركات."] },
            { title: "توسع صناعات الخليج", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop", overview: "خطة اتصالات استراتيجية لدعم توسع الشركة في أسواق إقليمية جديدة.", impact: ["إنشاء حضور قوي للعلامة التجارية بنجاح في بلدين جديدين.", "تسهيل شراكات رئيسية مع الموزعين المحليين وأصحاب المصلحة."] },
            { title: "إدارة سمعة بصره لوجيستكس", image: "https://images.unsplash.com/photo-1577563908411-5ab7254a4f35?q=80&w=1470&auto=format&fit=crop", overview: "استراتيجية استباقية لاتصالات الأزمات وإدارة السمعة للتغلب على تحديات الصناعة المعقدة.", impact: ["الحفاظ على صورة عامة إيجابية خلال فترة تقلبات السوق.", "تعزيز الثقة والشفافية مع العملاء والمستثمرين."] },
            { title: "حملة الاستدامة لـ Eco-Iraq", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1470&auto=format&fit=crop", overview: "زيادة الوعي بالقضايا البيئية وتشجيع الممارسات المستدامة بين الجمهور.", impact: ["الوصول إلى أكثر من 2 مليون شخص من خلال حملة إعلامية متكاملة.", "أدى إلى زيادة قابلة للقياس في معدلات إعادة التدوير في المجتمعات المستهدفة."] }
        ]
    },
    valueStats: [
        { value: 15, suffix: 'M+', label: "انطباع إعلامي" },
        { value: 98, suffix: '%', label: "رضا العملاء" },
        { value: 25, label: "حملة ناجحة" },
        { value: 8, label: "جوائز صناعية" }
    ],
    clients: {
        title: "شركاؤنا",
        subtitle: "نفخر بالتعاون مع العلامات التجارية والمنظمات الرائدة.",
        list: ["Tech Innovators Inc.", "Baghdad Arts & Culture Festival", "Gulf Industries", "Basra Logistics", "National Telecom", "Horizon Bank", "Eco-Iraq"]
    },
    careers: {
        title: "انضم إلى فريقنا",
        subtitle: "شكل مستقبل التواصل معنا. نحن نبحث عن رواة قصص واستراتيجيين شغوفين.",
        culture: {
            title: "ثقافتنا",
            text: "نعزز بيئة تعاونية ومبتكرة وشاملة حيث يُسمع كل صوت وكل فكرة تهم. نؤمن بالنمو، لعملائنا ولفريقنا على حد سواء.",
            perks: {
                title: "ماذا نقدم",
                items: ["راتب تنافسي", "تأمين صحي", "تطوير مهني", "ساعات عمل مرنة", "مساحة عمل إبداعية", "فعاليات الفريق"]
            }
        },
        openings: {
            title: "الوظائف الشاغرة الحالية",
            cta: "قدم الآن",
            jobs: [
                { title: "أخصائي علاقات عامة", location: "بغداد", type: "دوام كامل" },
                { title: "مدير تسويق رقمي", location: "السليمانية", type: "دوام كامل" },
                { title: "مصمم جرافيك", location: "عن بعد", type: "عقد" }
            ]
        }
    },
    contact: {
        title: "تواصل معنا",
        subtitle: "هل لديك قصة لترويها؟ نحن هنا للاستماع. دعنا نخلق شيئًا مؤثرًا معًا.",
        details: {
            title: "تفاصيل الاتصال",
            address: "123 شارع المنصور، بغداد، العراق",
            email: "hello@prt.iq",
            phone: "+964 780 123 4567"
        },
        form: {
            name: "اسمك",
            email: "بريدك الإلكتروني",
            message: "رسالتك",
            submit: "إرسال الرسالة",
            sending: "جارٍ الإرسال...",
            success: {
                title: "شكرًا لك!",
                message: "تم إرسال رسالتك بنجاح. سنتواصل معك قريبًا."
            }
        }
    },
    footer: {
        subtitle: "سرديات تؤثر في الأجيال.",
        email: "hello@prt.iq",
        copyright: "© {year} وكالة PRt. جميع الحقوق محفوظة."
    }
};

const kuTranslations: Translations = {
    navLinks: [
      { name: 'سەرەکی', id: 'home' },
      { name: 'دەربارەی ئێمە', id: 'about' },
      { name: 'خزمەتگوزارییەکان', id: 'services' },
      { name: 'پڕۆژەکان', id: 'projects' },
      { name: 'هەلی کار', id: 'careers' },
      { name: 'پەیوەندی', id: 'contact' },
    ],
    hero: {
        title: { part1: 'گێڕانەوەکان کە', highlighted: 'کاریگەری', part2: 'لەسەر نەوەکان دادەنێن' },
        subtitle: 'ئێمە پەیوەندی ڕۆژانە دەکەین بە چیرۆکی بەهێز کە کۆمەڵگا پێکدەهێنن و متمانە دروست دەکەن.',
        button: 'چیرۆکی خۆت بگێڕەوە',
    },
    about: {
        title: "ئێمە کێین",
        aboutText: [
          "\"لەیەکتربڕی کەلەپوور و داهێناندا، PRt براندەکان دەگۆڕێت بۆ گێڕانەوەی بەهێز کە کەلتوور پێکدەهێنن.\"",
          "PRt لە ساڵی 2022 دامەزراوە، زیاترە لە ئاژانسێکی پەیوەندییە گشتییەکان، ئێمە ئەندازیاری کەلتوورین. بە قووڵی لە نەریتی عێراقیدا ڕەگمان داکوتاوە بەڵام بە هۆشیارییەکی جیهانییەوە، گێڕانەوەکان دادەڕێژین کە مێشکەکان بەشدار دەکەن، کاریگەری لەسەر دڵەکان دادەنێن، و گۆڕانکارییەکی بەردەوام لە دیمەنی بازرگانی گەشەسەندووی عێراقدا دروست دەکەن.",
          "بە دوو نووسینگەی ستراتیژی (بەغدا و سلێمانی)، دەستڕاگەیشتنمان سەرتاسەری وڵات دەگرێتەوە. ئێمە بە شێوەیەکی ستراتیژی پۆرتفۆلیۆیەکی پەیوەندی ساڵانە بەڕێوەدەبەین کە زیاترە لە 3.5 ملیۆن دۆلار، کە بە وردی لە سەرکەوتنی کڕیارەکانماندا وەبەرهێنراوە. تیمی فراوان و هەمەجۆری PRt، جێبەجێکردنی بێ کێشە و ئامادەیی کاریگەر لە زاخۆوە تا بەسرە مسۆگەر دەکات."
        ],
        quote: "هەموو چیرۆکێک هێزی ئەوەی هەیە داهاتوو لە نوێ بنووسێتەوە. لە دەستی ئێمەدا، وشەکان دەبنە پرد، خەونەکان بە واقیعەوە دەبەستنەوە، تێڕوانینەکان دەگۆڕن، و چارەنووسەکان دەگۆڕن.",
        mission: {
            title: "ئەرکمان",
            text: "بەهێزکردنی براندەکان بە گێڕانەوەکان کە گفتوگۆکان دادەگیرسێنن، متمانە دروست دەکەن، و هانی کردار دەدەن لە سەرانسەری کۆمەڵگاکاندا."
        },
        vision: {
            title: "دیدگامان",
            text: "دانپێدانانمان وەک پێشەنگترین چیرۆکبێژی عێراق، گۆڕینی پەیوەندی ڕۆژانە بۆ گێڕانەوەی بەهێز کە کۆمەڵگا پێکدەهێنن و کاریگەری لەسەر نەوەکان دادەنێن."
        },
        coreBeliefs: {
            title: "باوەڕە سەرەکییەکانمان",
            items: [
                { title: "ڕاستگۆیی لە سەرووی هەموو شتێکەوە", description: "ئێمە پارێزگاری لە گێڕانەوەکەت دەکەین بەوپەڕی وردییەوە وەک نووسەرانی مێژوو.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>` },
                { title: "نائاسایی لە ئاساییەوە", description: "ئێمە شیعری شاراوە لەناو شتە ئاساییەکاندا دەدۆزینەوە، چیرۆکی سەرنجڕاکێش لە ساتەکانی ڕۆژانە دروست دەکەین.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L9 9l-7 2 5 5-1 7 6-4 6 4-1-7 5-5-7-2z"></path></svg>` },
                { title: "وێستگە گرنگەکان", description: "ئێمە سەرکەوتن بە هەڵمەت ناپێوین، بەڵکو بە کاریگەری کەلتووری و میراتی بەردەوام.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path><line x1="4" y1="22" x2="4" y2="15"></line></svg>` },
                { title: "داهێنان وەک باوەڕ", description: "ئێمە تەحەدای نەریتەکان دەکەین، بێوچان بەدوای ڕێگا نەدۆزراوەکاندا دەگەڕێین کە ئەوەی مومکینە لە نوێ پێناسە دەکەنەوە.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 14h.01"></path><path d="M8.5 14h.01"></path><path d="M4.53 9.47 5.24 11"></path><path d="M19.47 9.47 18.76 11"></path><path d="m12 2-3.5 3.5"></path><path d="M12 22v-3.5"></path><path d="M9 18.5h6"></path><path d="M12 2v10c0 3.3-2.7 6-6 6h-1a6 6 0 0 1-6-6V8"></path><path d="m13 12 5-5"></path></svg>` },
                { title: "کردار لەپێش وشەوە", description: "پابەندبوونەکانمان بە کردار نەخشێنراون، نەک تەنها بە قسە.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>` },
                { title: "یەکێتی لە هەمەجۆریدا", description: "هێزی ئێمە لە دیدگا جیاوازەکانەوە سەرچاوە دەگرێت؛ هەموو دەنگێک گێڕانەوەکەمان دەوڵەمەند دەکات.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><path d="M20 8v6"></path><path d="M23 11h-6"></path></svg>` },
            ],
        },
        team: {
          title: "ئاشنا بن بە ئەندازیارانی کاریگەری",
          subtitle: "هێزی پاڵنەری پشت ستراتیژییە داهێنەرەکانمان و گێڕانەوە کاریگەرەکانمان. شارەزایی هەمەجۆری تیمەکەمان و حەزی هاوبەشیان بۆ چیرۆکگێڕانەوە بنچینەی سەرکەوتنمانن.",
          members: [
            { name: "نور ئەلهاشمی", title: "بەرپرسی جێبەجێکار", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1288&auto=format&fit=crop" },
            { name: "عومەر خەلیل", title: "بەڕێوەبەری داهێنان", image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop" },
            { name: "زەید ئەلغەنام", title: "بەڕێوەبەری پڕۆژەکانی کاریگەری کۆمەڵایەتی", image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1287&auto=format&fit=crop" },
            { name: "ئایە ئەلنوعەیمی", title: "سەرۆکی پەیوەندییە ناوخۆییەکان", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop" },
            { name: "تارق ئەلجەنابی", title: "بەڕێوەبەری پەیوەندییەکانی میدیا", image: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop" },
            { name: "لەیلا حەسەن", title: "سەرۆکی پەیوەندییەکانی قەیرانەکان", image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1287&auto=format&fit=crop" },
            { name: "عەلی موهەنەد خالد", title: "بەرپرسی لۆجستی", image: "https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=1287&auto=format&fit=crop" },
            { name: "فاتیمە ئەلئەمیر", title: "بەڕێوەبەری پڕۆژە", image: "https://images.unsplash.com/photo-1554415511-53a4f85412a8?q=80&w=1470&auto=format&fit=crop" }
          ]
        }
    },
     technology: {
      title: "تەکنەلۆژیا و داهێنان",
      subtitle: "کەڵک وەرگرتن لە هێزی داتا و زیرەکی دەستکرد بۆ داڕشتنی گێڕانەوەکان کە تەنها ناگێڕدرێنەوە، بەڵکو هەستیان پێدەکرێت. ئێمە کاریگەری ئەندازیاری دەکەین لە ڕێگەی تەکنەلۆژیای پێشکەوتووەوە.",
      feature1: {
        title: "گێڕانەوەکانی پشتیوان بە داتا",
        text: "ئێمە لە تێگەیشتنی ئاسایی تێدەپەڕین. ستراتیژییەکانمان لەسەر بنەمای شیکاری داتای پتەو، توێژینەوەی بازاڕ، و شیکاری هەستەکان بنیات نراون. بە تێگەیشتن لە ڕەفتاری بینەران و وردەکارییە کەلتوورییەکان لە ئاستێکی ورددا، دڵنیا دەبینەوە کە هەموو پەیامێک بە وردی ئاراستە کراوە و بەهێزیی دەنگدانەوەی هەیە."
      },
      feature2: {
        title: "تێڕوانینەکانی پشتیوان بە زیرەکی دەستکرد",
        text: "بە بەکارهێنانی زیرەکی دەستکرد، تێڕوانینی پێشبینیکراو دەکەینەوە و چاودێری میدیای ئاڵۆز ئۆتۆماتیکی دەکەین. ئەمە ڕێگەمان پێدەدات پێشبینی ترێندەکان بکەین، دەرفەتەکان دیاری بکەین، و بە خێرایی و زیرەکییەکی بێوێنە وەڵامی قەیرانەکان بدەینەوە، هەمیشە کڕیارەکانمان یەک هەنگاو لە پێشەوە دەهێڵینەوە."
      }
    },
    process: {
        title: "پرۆسەی ستراتیژی ئێمە",
        subtitle: "ئێمە وردبینی میتۆدی لەگەڵ تێگەیشتنی داهێنەرانە تێکەڵ دەکەین. پرۆسەکەمان بۆ دۆزینەوەی تێڕوانینی قووڵ و گۆڕینیان بۆ گێڕانەوەی کاریگەر و دەنگدانەوەی کەلتووری داڕێژراوە.",
        steps: [
            { title: "دۆزینەوە و ستراتیژی", description: "بە نوقمبوون لە جیهانی ئێوە دەست پێدەکەین. لە ڕێگەی گوێگرتنی قووڵ، شیکاری بازاڕ، و وۆرک شۆپی هاوبەشەوە، ئامانجی ڕوون دیاری دەکەین و نەخشەی ڕێگایەکی ستراتیژی بۆ سەرکەوتن دەکێشین.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>` },
            { title: "داڕشتنی گێڕانەوە", description: "لێرەدایە تێڕوانین دەبێتە چیرۆک. تیمی نووسەران، ستراتیژیستەکان، و داهێنەرانمان پێکەوە کاردەکەن بۆ بنیاتنانی گێڕانەوەیەکی سەرەکی سەرنجڕاکێش کە ڕەسەن بێت بۆ براندەکەتان و سەرنجی بینەرانتان ڕابکێشێت.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>` },
            { title: "چالاککردنی فرە-کەناڵ", description: "چیرۆکێکی مەزن شایەنی شانۆیەکی گەورەیە. ئێمە گێڕانەوەکەتان لە سەرانسەری تێکەڵەیەکی بە وردی هەڵبژێردراوی کەناڵەکاندا بڵاودەکەینەوە - لە پەیوەندییەکانی میدیا و پلاتفۆرمە دیجیتاڵییەکانەوە تا بۆنە نوقمکەرەکان - دڵنیایی لە زۆرترین دەستڕاگەیشتن و دەنگدانەوە دەدەین.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>` },
            { title: "شیکاری کاریگەری", description: "کاری ئێمە لەگەڵ دەستپێکردندا کۆتایی نایەت. ئێمە بە وردی بەدواداچوون بۆ ئەدا دەکەین، هەستەکان دەپێوین، و داتاکان شیدەکەینەوە بۆ دابینکردنی ڕاپۆرتی ڕوون لەسەر گەڕانەوەی وەبەرهێنان و کۆکردنەوەی تێڕوانینەکان بۆ باشترکردن و گەشەی داهاتوو.", icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20V10"></path><path d="M18 20V4"></path><path d="M6 20V16"></path></svg>` }
        ]
    },
     insights: {
        title: "تێڕوانین لە شارەزایانمانەوە",
        subtitle: "ئاشنا بن بە ستراتیژیستەکان، چیرۆکبێژان، و داهێنەران کە داهاتووی پەیوەندی لە ناوچەکەماندا شێوە دەکەن.",
        items: [
            { 
              topic: "چۆن دەتوانێت پەیوەندییە گشتییەکان سوود لە زیرەکی دەستکرد و شیکاری داتا وەربگرێت؟", 
              expertName: "زەید ئەلغەنام", 
              expertTitle: "بەڕێوەبەری پڕۆژەکانی کاریگەری کۆمەڵایەتی",
              expertImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1287&auto=format&fit=crop"
            },
            { 
              topic: "ستراتیژییەکانی پەیوەندی ناوخۆیی کە دڵسۆزی کارمەندان دروست دەکەن.", 
              expertName: "ئایە ئەلنوعەیمی", 
              expertTitle: "سەرۆکی پەیوەندییە ناوخۆییەکان",
              expertImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop"
            },
            { 
              topic: "چۆن پەیوەندییە گشتییەکان پردێک لە نێوان براند و کۆمەڵگادا دروست دەکات؟", 
              expertName: "تارق ئەلجەنابی", 
              expertTitle: "بەڕێوەبەری پەیوەندییەکانی میدیا",
              expertImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop"
            },
            { 
              topic: "ڕووبەڕووبوونەوەی قەیرانەکان: ڕۆڵی گرنگی پەیوەندییە گشتییەکان لە بەڕێوەبردنی ناوبانگدا.", 
              expertName: "لەیلا حەسەن", 
              expertTitle: "سەرۆکی پەیوەندییەکانی قەیرانەکان",
              expertImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1287&auto=format&fit=crop"
            }
        ]
    },
    testimonials: {
        title: "کڕیارەکانمان چی دەڵێن",
        subtitle: "هاوبەشی بنیات نراو لەسەر متمانە، ستراتیژی، و ئەنجامی نایاب. لێرەدا هەندێک لە کڕیارەکانمان باسی گەشتەکەیان لەگەڵ PRt دەکەن.",
        items: [
            { quote: "PRt تەنها هەڵمەتێکی بەڕێوە نەبرد؛ ئەوان بزووتنەوەیەکیان دەستپێکرد. تێگەیشتنیان لە دیمەنی کەلتووری عێراقی بێوێنەیە. ئەوان هاوبەشی ڕاستەقینەن بە هەموو مانایەکی وشەکە.", author: "ئەحمەد ئەلسودانی", title: "بەڕێوەبەری جێبەجێکار، Tech Innovators Inc." },
            { quote: "دووربینی ستراتیژی و جێبەجێکردنی بێ کەموکوڕی تیمەکە فێستیڤاڵی ساڵانەی ئێمەی گۆڕی بۆ بۆنەیەکی ناسراوی نیشتمانی. حەز و دڵسۆزییان لە هەموو وردەکارییەکدا دیارە.", author: "فاتیمە ئەلجبوری", title: "بەڕێوەبەر، فێستیڤاڵی هونەر و کەلتووری بەغدا" },
            { quote: "لە ساتێکی kritîkî بۆ براندەکەمان، PRt ڕێنمایی و بەڕێوەبردنی قەیرانی پێشکەش کرد کە ئێمە زۆر پێویستمان بوو. ڕێبازی هێمن و ستراتیژییان ناوبانگی ئێمەی پاراست و متمانەیەکی بەهێزتری لەگەڵ لایەنە پەیوەندیدارەکانمان دروست کرد.", author: "یوسف ئەلمالیکی", title: "بەڕێوەبەری گشتی، Basra Logistics" },
        ]
    },
    services: {
      title: "خزمەتگوزارییەکانمان",
      items: [
          {
              title: "پەیوەندییە گشتییەکان",
              description: "داڕشتنی گێڕانەوەکان کە ناوبانگ دروست دەکەن و کاریگەری دادەنێن.",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>`,
              items: ["پەیوەندییەکانی میدیا", "بەڕێوەبردنی قەیرانەکان", "پەیوەندییەکانی کۆمپانیا", "بەڕێوەبردنی ناوبانگ"]
          },
          {
              title: "ستراتیژی دیجیتاڵی",
              description: "بەشدارکردنی بینەران لە دیمەنی دیجیتاڵیدا بە ستراتیژی پشتیوان بە داتا.",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>`,
              items: ["بەڕێوەبردنی سۆشیال میدیا", "دروستکردنی ناوەڕۆک", "بازاڕکردن لە ڕێگەی کاریگەرانەوە", "باشترکردنی بزوێنەری گەڕان و بازاڕکردن لە ڕێگەیەوە"]
          },
          {
              title: "بەڕێوەبردنی بۆنەکان",
              description: "دروستکردنی ئەزموونی لەبیرنەکراو کە براندەکان بە بینەرانیانەوە دەبەستێتەوە.",
              icon: `<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>`,
              items: ["بۆنەکانی کۆمپانیاکان", "دەستپێکردنی بەرهەم", "کۆنفرانسی ڕۆژنامەوانی", "فێستیڤاڵی کەلتووری"]
          },
      ]
    },
    projects: {
        title: "کارەکانمان",
        subtitle: "چیرۆکانێک کە ئێمە شێوەمان داون، کاریگەرییانێک کە ئێمە دروستمان کردوون.",
        subtitle_detail: "کۆمەڵێک پڕۆژەی هەڵبژێردراو کە ڕێبازی ستراتیژی و جێبەجێکردنی داهێنەرانەی ئێمە نیشان دەدەن. کلیک بکە و گۆیەکە ڕابکێشە بۆ گەڕان بەناو پۆرتفۆلیۆکەماندا.",
        approachLabel: "ڕێبازی ئێمە",
        impactLabel: "کاریگەری",
        cta: "زیاتر بزانە",
        cta_show_more: "پیشاندانی وردەکارییەکان",
        cta_show_less: "شاردنەوەی وردەکارییەکان",
        items: [
            {
                title: "دەستپێکردنی داهێنەرانی تەکنەلۆژیا",
                image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=1470&auto=format&fit=crop",
                overview: "هەڵمەتێکی گشتگیر بۆ دەستپێکردنی بەرهەمێکی تەکنەلۆژی نوێ لە بازاڕی عێراقدا، دامەزراندنی وەک پێشەنگی بازاڕ لە ڕۆژی یەکەمەوە.",
                approach: ["توێژینەوەی بازاڕی قووڵ بۆ دیاریکردنی دیمۆگرافیای سەرەکی.", "بەرنامەی ستراتیژی بۆ پەیوەندیکردن بە کاریگەرانەوە.", "هەڵمەتی میدیایی فرە-پلاتفۆرم لە سەرانسەری کەناڵە دیجیتاڵی و نەریتییەکاندا."],
                impact: ["بەدەستهێنانی 200%ی ئامانجی فرۆشتن لە چارەکی یەکەمدا.", "دروستکردنی زیاتر لە 50 ملیۆن بینینی میدیایی.", "بەدەستهێنانی خەڵاتی 'بەرهەمی ساڵ' لە بڵاوکراوەیەکی تەکنەلۆژی پێشەنگەوە."]
            },
            {
                title: "فێستیڤاڵی هونەری بەغدا",
                image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1470&auto=format&fit=crop",
                overview: "دەستپێشخەرییەکی کاریگەری کۆمەڵایەتی بۆ برەودان بە بەهێزکردنی گەنجان و ئاڵوگۆڕی کەلتووری لە ڕێگەی فێستیڤاڵێکی هونەری لەسەر ئاستی شار.",
                approach: ["بەشداریپێکردنی کۆمەڵگا و هاوبەشی لەگەڵ هونەرمەندە ناوخۆییەکان.", "هەڵمەتێکی دیجیتاڵی ئاراستەکراو بۆ هاندانی ئامادەبوون و بەشداریکردن.", "پەیوەندی میدیایی ئاست بەرز بۆ مسۆگەرکردنی ڕووماڵی نیشتمانی."],
                impact: ["بەشداریکردنی زیاتر لە 10,000 گەنج لە 5 شاردا.", "مسۆگەرکردنی پارەدارکردنی درێژخایەن لە هاوبەشە کەلتوورییە نێودەوڵەتییەکانەوە.", "زیادکردنی گەشتیاری بۆ ناوچەکە بە ڕێژەی 15% لە ماوەی فێستیڤاڵەکەدا."]
            },
            { title: "دووبارە براندکردنەوەی تەلەکۆمی نیشتمانی", image: "https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?q=80&w=1374&auto=format&fit=crop", overview: "بوژاندنەوەی براندێکی گەورەی تەلەکۆم بۆ دووبارە پەیوەستبوونەوە بە بینەرێکی گەنجتر و نوێکردنەوەی وێنەکەی.", impact: ["زیادبوونی 25% لە هەستی براند لەنێو دیمۆگرافیای 18-25 ساڵاندا.", "دەستپێکردنی سەرکەوتووانەی پلانێکی مۆبایلی نوێی تایبەت بە گەنجان."] },
            { title: "دەستپێشخەری بەرپرسیارێتی کۆمەڵایەتی بانکی هۆریزۆن", image: "https://images.unsplash.com/photo-1560439546-17b79d71a17c?q=80&w=1374&auto=format&fit=crop", overview: "پەرەپێدان و برەودان بە بەرنامەیەکی خوێندەواری دارایی نیشتمانی بۆ خاوەن کارە بچووکەکان.", impact: ["بەهێزکردنی زیاتر لە 500 خاوەنکار بە کارامەیی دارایی سەرەکی.", "وەرگرتنی خەڵاتێکی نیشتمانی بۆ بەرپرسیارێتی کۆمەڵایەتی کۆمپانیاکان."] },
            { title: "فراوانبوونی پیشەسازییەکانی کەنداو", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1470&auto=format&fit=crop", overview: "پلانێکی پەیوەندی ستراتیژی بۆ پشتیوانیکردنی فراوانبوونی کۆمپانیاکە بۆ بازاڕە هەرێمییە نوێیەکان.", impact: ["بە سەرکەوتوویی دامەزراندنی ئامادەییەکی بەهێزی براند لە دوو وڵاتی نوێدا.", "ئاسانکاریکردنی هاوبەشییە سەرەکییەکان لەگەڵ دابەشکەر و لایەنە پەیوەندیدارە ناوخۆییەکان."] },
            { title: "بەڕێوەبردنی ناوبانگی لۆجستی بەسرە", image: "https://images.unsplash.com/photo-1577563908411-5ab7254a4f35?q=80&w=1470&auto=format&fit=crop", overview: "ستراتیژییەکی چالاکانەی پەیوەندی قەیران و بەڕێوەبردنی ناوبانگ بۆ ڕووبەڕووبوونەوەی تەحەددییە ئاڵۆزەکانی پیشەسازییەکە.", impact: ["پاراستنی وێنەیەکی گشتی ئەرێنی لە ماوەی ناجێگیری بازاڕدا.", "بەهێزکردنی متمانە و شەفافیەت لەگەڵ کڕیاران و وەبەرهێنەران."] },
            { title: "هەڵمەتی بەردەوامیی ئیکۆ-عێراق", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1470&auto=format&fit=crop", overview: "بڵاوکردنەوەی هۆشیاری دەربارەی کێشە ژینگەییەکان و برەودان بە کردەوە بەردەوامەکان لەنێو خەڵکدا.", impact: ["گەیشتن بە زیاتر لە 2 ملیۆن کەس لە ڕێگەی هەڵمەتێکی میدیایی یەکخراوەوە.", "بووە هۆی زیادبوونێکی پێوانەکراو لە ڕێژەکانی ڕیسایکلکردن لە کۆمەڵگا ئامانجدارەکاندا."] }
        ]
    },
    valueStats: [
        { value: 15, suffix: 'M+', label: "بینینی میدیایی" },
        { value: 98, suffix: '%', label: "ڕەزامەندی کڕیار" },
        { value: 25, label: "هەڵمەتی سەرکەوتوو" },
        { value: 8, label: "خەڵاتی پیشەسازی" }
    ],
    clients: {
        title: "هاوبەشەکانمان",
        subtitle: "شانازی دەکەین بە هاوکاریکردن لەگەڵ براند و ڕێکخراوە پێشەنگەکان.",
        list: ["Tech Innovators Inc.", "Baghdad Arts & Culture Festival", "Gulf Industries", "Basra Logistics", "National Telecom", "Horizon Bank", "Eco-Iraq"]
    },
    careers: {
        title: "پەیوەست بە بە تیمەکەمان",
        subtitle: "داهاتووی پەیوەندی لەگەڵ ئێمەدا شێوە بکە. ئێمە بەدوای چیرۆکبێژ و ستراتیژیستی بە حەزدا دەگەڕێین.",
        culture: {
            title: "کەلتووری ئێمە",
            text: "ئێمە ژینگەیەکی هاوکار، داهێنەر، و گشتگیر پەرە پێدەدەین کە تێیدا هەموو دەنگێک دەبیسترێت و هەموو بیرۆکەیەک گرنگە. ئێمە باوەڕمان بە گەشەکردن هەیە، هەم بۆ کڕیارەکانمان و هەم بۆ تیمەکەمان.",
            perks: {
                title: "ئەوەی پێشکەشی دەکەین",
                items: ["مووچەی کێبڕکێکار", "دڵنیایی تەندروستی", "پەرەپێدانی پیشەیی", "کاتژمێرەکانی کاری نەرم", "شوێنی کاری داهێنەرانە", "بۆنەکانی تیم"]
            }
        },
        openings: {
            title: "هەلە کراوەکانی ئێستا",
            cta: "ئێستا داواکاری پێشکەش بکە",
            jobs: [
                { title: "پسپۆڕی پەیوەندییە گشتییەکان", location: "بەغدا", type: "کاتی تەواو" },
                { title: "بەڕێوەبەری بازاڕکردنی دیجیتاڵی", location: "سلێمانی", type: "کاتی تەواو" },
                { title: "دیزاینەری گرافیک", location: "دوورکاری", type: "گرێبەست" }
            ]
        }
    },
    contact: {
        title: "پەیوەندیمان پێوە بکە",
        subtitle: "چیرۆکێکت هەیە بۆ گێڕانەوە؟ ئێمە لێرەین بۆ گوێگرتن. با پێکەوە شتێکی کاریگەر دروست بکەین.",
        details: {
            title: "وردەکارییەکانی پەیوەندی",
            address: "123 شەقامی مەنسوور، بەغدا، عێراق",
            email: "hello@prt.iq",
            phone: "+964 780 123 4567"
        },
        form: {
            name: "ناوی تۆ",
            email: "ئیمەیڵی تۆ",
            message: "پەیامی تۆ",
            submit: "ناردنی پەیام",
            sending: "ناردن...",
            success: {
                title: "سوپاس!",
                message: "پەیامەکەت بە سەرکەوتوویی نێردرا. بە زوویی پەیوەندیت پێوە دەکەین."
            }
        }
    },
    footer: {
        subtitle: "گێڕانەوەکان کە کاریگەری لەسەر نەوەکان دادەنێن.",
        email: "hello@prt.iq",
        copyright: "© {year} ئاژانسی PRt. هەموو مافەکان پارێزراون."
    }
};

export const translations: { [key: string]: Translations } = {
  en: enTranslations,
  ar: arTranslations,
  ku: kuTranslations,
};