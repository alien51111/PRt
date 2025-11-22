
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
    steps: {
        id: string;
        title: string;
        items: string[];
    }[];
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
      disclaimer: string;
      proofInPractice: {
        title: string;
        items: { title: string; description: string }[];
      };
  };
  valueStats: ValueStat[];
  clients: {
    title: string;
    subtitle: string;
    logos: { name: string; src: string; alt: string }[];
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
                { title: "Integrity Above All", description: "We protect your narrative as diligently as scribes of history." },
                { title: "Extraordinary from the Ordinary", description: "We find poetry hidden within the mundane, crafting compelling stories from everyday moments." },
                { title: "Milestones That Matter", description: "We measure success not in campaigns, but in cultural impact and lasting legacy." },
                { title: "Innovation as a Creed", description: "We challenge convention, relentlessly exploring uncharted paths that redefine what's possible." },
                { title: "Action Over Words", description: "Our commitments are etched in actions, not merely spoken." },
                { title: "Unity in Diversity", description: "Our strength stems from diverse perspectives; each voice enriches our narrative." },
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
      title: "Our Expertise",
      subtitle: "At PRt, we understand that every client has unique needs. To meet these, we offer an extensive range of services:",
      steps: [
        {
          id: "01",
          title: "Strategic Communication & Influence",
          items: [
            "Specialized PR for Specific Industries",
            "Thought Leadership",
            "Public Affairs and Advocacy",
            "Crisis Management",
            "Media Relations",
            "Internal Communications",
            "Branding and Reputation Management",
          ]
        },
        {
          id: "02",
          title: "Creative & Digital Storytelling",
          items: [
            "Content Creation",
            "Creative Campaign Development",
            "Digital and Social Media PR",
            "Influencer Marketing",
            "Media Monitoring and Reporting",
            "Product and Service Launches",
          ]
        },
        {
          id: "03",
          title: "Events & Community Activation",
          items: [
            "Event Creation and Management",
            "On-Ground Activation",
            "Community Engagement",
            "Sponsorship and Endorsements",
            "Strategic Partnerships",
          ]
        },
        {
          id: "04",
          title: "Insight, Research & Capacity Building",
          items: [
            "Market Research and Analytics",
            "Training and Media Coaching",
          ]
        }
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
              expertImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1287&auto=format&fit=crop",
              content: [
                  "In the age of information, data is not just a resource; it's the compass that guides strategic narratives. By analyzing vast datasets, we can decode public sentiment before it shifts, allowing brands to be proactive rather than reactive.",
                  "AI tools enable us to process millions of data points from social media, news outlets, and search trends in real-time. This means we can identify emerging crises or viral opportunities instantly.",
                  "However, the human element remains crucial. Data provides the 'what', but cultural context provides the 'why'. At PRt, we blend this technological precision with deep anthropological understanding to craft campaigns that truly resonate."
              ]
            },
            { 
              topic: "Internal communication strategies that build employee loyalty.", 
              expertName: "Aya Al-Nuaimi", 
              expertTitle: "Head of Internal Communications",
              expertImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop",
              content: [
                  "Your employees are your first and most critical audience. A disconnected workforce leads to a disjointed brand. True loyalty isn't bought with perks; it's earned through transparency and shared purpose.",
                  "Effective internal communication transforms employees from staff into brand ambassadors. It's about creating a narrative that they see themselves in. When they understand the 'why' behind company decisions, they become invested in the outcome.",
                  "We focus on two-way communication channels. It's not just top-down directives; it's about creating spaces for feedback and dialogue. This fosters a culture of trust and psychological safety where innovation thrives."
              ]
            },
            { 
              topic: "How does PR build a bridge between the brand and society?", 
              expertName: "Tariq Al-Janabi", 
              expertTitle: "Media Relations Manager",
              expertImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop",
              content: [
                  "Brands no longer exist in a vacuum. They are community members. PR is the art of humanizing corporations, proving that they share the values and concerns of the people they serve.",
                  "It's about moving beyond transactional relationships to emotional connections. We help brands find their authentic voice in social conversations, whether it's about sustainability, culture, or social support.",
                  "By facilitating genuine partnerships and community initiatives, we demonstrate that a brand's success contributes to the collective well-being. That is the foundation of enduring trust."
              ]
            },
            { 
              topic: "Navigating crises: The pivotal role of PR in reputation management.", 
              expertName: "Layla Hassan", 
              expertTitle: "Crisis Communications Lead",
              expertImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1287&auto=format&fit=crop",
              content: [
                  "A reputation takes years to build and minutes to destroy. In crisis, silence is not an option; it is an admission. The pivotal role of PR is to control the narrative before it controls you.",
                  "Speed and accuracy are our primary currencies. We prepare proactive crisis frameworks that allow us to respond with clarity and empathy immediately. It's not just about 'spin'; it's about accountability and action.",
                  "Post-crisis recovery is equally important. We help brands rebuild trust by demonstrating tangible change and maintaining open, honest communication with stakeholders throughout the healing process."
              ]
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
              icon: "",
              items: ["Media Relations", "Crisis Management", "Corporate Communications", "Reputation Management"]
          },
      ]
    },
    projects: {
        title: "A GLIMPSE INTO OUR IMPACT",
        subtitle: "",
        subtitle_detail: "",
        approachLabel: "Our Approach",
        impactLabel: "Impact",
        cta: "Learn More",
        cta_show_more: "Show Details",
        cta_show_less: "Hide Details",
        items: [
            {
                title: "Yalla Formula: Igniting Speed & Connection",
                category: "Telecom",
                image: "https://media.licdn.com/dms/image/v2/D4E22AQFhQPEfN70fwg/feedshare-shrink_800/feedshare-shrink_800/0/1721298920219?e=2147483647&v=beta&t=_2FtNOiVB2crlluebEliX-F75EdXzZ2Loe8yftGLIl8",
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
                ]
            },
            {
                title: "Ramadan Festival: Celebrating Culture, Community & Connection",
                category: "Events",
                image: "https://sharjahevents.ae/wp-content/uploads/2024/03/RamadanNights2-1130x650.jpg",
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
                ]
            },
            {
                title: "AI for Influencers: Redefining Digital Influence",
                category: "Tech",
                image: "https://framerusercontent.com/images/HRSJkz6m9sRpZLpDnwn2DyiP0.webp?width=2048&height=1152",
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
                ]
            },
            {
                title: "LAILA Campaign: Iraq’s First AI-Powered Assistant",
                category: "Tech",
                image: "https://media.licdn.com/dms/image/v2/D4D22AQFi21LfZL70Jg/feedshare-shrink_800/feedshare-shrink_800/0/1731783981800?e=2147483647&v=beta&t=VbN6o84xPaaLyyt2McSVKwNnf-xggctsbY2FQLTedRY",
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
                ]
            },
            {
                title: "TechWave Forums: Inspiring Iraq’s Tech Generation",
                category: "Corporate",
                image: "https://iraqbritainbusiness.org/wp-content/uploads/2018/11/Iraq-Tech-Conference-Pic-1.jpg",
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
                ]
            }
        ],
        disclaimer: "The projects featured in this profile are selected highlights—distinct campaigns that reflect the breadth and depth of our capabilities. They are not the full story. Behind the scenes, PRt has led and executed dozens of additional initiatives across sectors, cities, and scales. From grassroots activations to boardroom-level strategies, our work spans the spectrum of public relations excellence. Each project, whether included here or not, carries our signature: thoughtful strategy, cultural fluency, and a relentless commitment to results.",
        proofInPractice: {
          title: "Proof in Practice",
          items: [
            {
              title: "Telecom Transformation",
              description: "From Zakho to Basra, PRt ignited nationwide conversations for Iraq’s leading telecoms. Through immersive experiences and data-driven storytelling, we connected over 20 million hearts—blending creativity, technology, and culture into one powerful voice."
            },
            {
              title: "National Financial Vision",
              description: "In partnership with key national stakeholders, PRt crafted and managed the communication strategy behind one of Iraq’s most significant economic initiatives—bridging vision, trust, and public engagement."
            },
            {
              title: "Empowering Innovators",
              description: "From BYD’s bold brand presence to Iraq Mall’s entertainment evolution, PRt celebrates innovation and creativity across industries. Through storytelling and strategic engagement, we amplify the voices shaping Iraq’s modern culture and commerce."
            }
          ]
        }
    },
    valueStats: [
        { value: 3.5, label: "managed annually in strategic client communications", prefix: '$', suffix: 'M+', decimals: 1 },
        { value: 2, label: "strategic offices plus a dedicated warehouse facility" },
        { value: 300, label: "professional on-ground promoters deployed nationwide", suffix: '+' },
        { value: 30, label: "Staff members across the region", suffix: '+' }
    ],
    clients: {
      title: "Clients & Collaborations",
      subtitle: "Our journey includes partnerships with industry leaders, renowned global organizations, and influential local enterprises. They entrust us with their stories—allowing us to amplify their voices and expand their reach.",
      logos: [
        { name: 'Startup Grind', src: 'https://mlwdmr8a4b9i.i.optimole.com/RKW2kd4-4lqtblsY/w:1279/h:662/q:90/https://about.startupgrind.com/wp-content/uploads/sites/6/2024/07/sg-stacked-whitepink.png', alt: 'Startup Grind Logo' },
        { name: 'USAID', src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/USAID-Identity.svg/1200px-USAID-Identity.svg.png', alt: 'USAID Logo' },
        { name: 'Chemonics', src: 'https://icfp2022.org/wp-content/uploads/2022/09/ICFP2022_Sponsor_Logo_Chemonics_Color.png', alt: 'Chemonics Logo' },
        { name: 'Kapita', src: 'https://www.kapita.iq/favicon.ico', alt: 'Kapita Logo' },
        { name: 'Earthlink', src: 'https://upload.wikimedia.org/wikipedia/commons/4/42/Earthlink_Telecommunications_Logo.png', alt: 'Earthlink Logo' },
        { name: 'GIZ', src: 'https://landportal.org/sites/default/files/2024-03/giz-standard-logo_0.png', alt: 'GIZ Logo' },
        { name: 'Asiacell', src: 'https://upload.wikimedia.org/wikipedia/commons/9/97/Logo_-Asiacell.png', alt: 'Asiacell Logo' },
        { name: 'Tafa3ul', src: 'https://1000logos.net/wp-content/uploads/2024/01/TagAz-Logo.png', alt: 'Tafa3ul Logo' },
        { name: '1001', src: 'https://ar.iraqbritainbusiness.org/wp-content/uploads/2023/09/1001-780x470.jpg', alt: '1001 Logo' },
        { name: 'The Station', src: 'https://media.licdn.com/dms/image/v2/C4D1BAQG8Zf0JSfEO1w/company-background_1536_768/company-background_1536_768/0/1583193839140?e=2147483647&v=beta&t=y4EllPNmQJuLnqcDdTrBKAglfzRlFrVWXoy1O3cGDZA', alt: 'The Station Logo' },
        { name: 'Iraqi Private Banks League', src: 'https://ipbl-iraq.org/vrsfls/cntnt/pctr/729.jpg', alt: 'Iraqi Private Banks League Logo' },
        { name: 'Central Bank of Iraq', src: 'https://upload.wikimedia.org/wikipedia/en/e/e4/Central_Bank_of_Iraq_logo.png', alt: 'Central Bank of Iraq Logo' }
      ]
    },
    careers: {
      title: "Join Our Team",
      subtitle: "Be part of a team that's redefining communication in the heart of Iraq. We're looking for passionate, creative, and driven individuals to help us craft the next generation of narratives.",
      culture: {
        title: "Our Culture",
        text: "We foster a collaborative and innovative environment where every voice is heard and every idea is valued. We believe in continuous learning, professional growth, and maintaining a healthy work-life balance.",
        perks: {
          title: "What We Offer",
          items: ["Competitive Salaries", "Health & Wellness Benefits", "Professional Development", "Flexible Work Hours", "Creative Freedom", "Team Retreats"]
        },
      },
      openings: {
        title: "Current Openings",
        cta: "Apply Now",
        jobs: [
          { title: "Senior PR Manager", location: "Baghdad", type: "Full-time" },
          { title: "Digital Media Specialist", location: "Suli", type: "Full-time" },
          { title: "Graphic Designer", location: "Baghdad", type: "Contract" },
          { title: "Events Coordinator", location: "Remote/Nationwide", type: "Part-time" }
        ]
      }
    },
    contact: {
        title: "Let's Create Together",
        subtitle: "Have a story to tell or a challenge to solve? We're here to listen and collaborate.",
        details: {
            title: "Get in Touch",
            address: "123 Storyteller St, Mansour, Baghdad, Iraq",
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
                message: "Your message has been sent. We'll get back to you shortly."
            }
        }
    },
    footer: {
        subtitle: "Bridging Heritage & Innovation",
        email: "hello@prt.iq",
        copyright: "© {year} PRt Agency. All Rights Reserved."
    }
};

const arTranslations: Translations = {
    navLinks: [
        { name: 'الرئيسية', id: 'home' },
        { name: 'من نحن', id: 'about' },
        { name: 'مشاريعنا', id: 'projects' },
        { name: 'وظائف', id: 'careers' },
        { name: 'اتصل بنا', id: 'contact' },
    ],
    hero: {
        title: { part1: 'سرديات تؤثر في', highlighted: 'الأجيال', part2: '' },
        subtitle: 'نحول التواصل اليومي إلى قصص مؤثرة تشكل المجتمع وتبني الثقة.',
        button: 'اروي قصتك',
    },
    about: {
        title: "من نحن",
        aboutText: [
            "\"عند تقاطع التراث والابتكار، تحول PRt العلامات التجارية إلى سرديات قوية تشكل الثقافة.\"",
            "تأسست PRt في عام 2022، وهي أكثر من مجرد وكالة للعلاقات العامة، نحن مهندسو ثقافة. بجذور راسخة في التقاليد العراقية ووعي عالمي، نصوغ سرديات تخاطب العقول، وتؤثر في القلوب، وتقود تغييراً دائماً عبر مشهد الأعمال المتطور في العراق.",
            "مع مكتبين استراتيجيين (بغداد والسليمانية)، يمتد نطاق عملنا ليشمل جميع أنحاء البلاد. ندير بشكل استراتيجي محفظة اتصالات سنوية تزيد عن 3.5 مليون دولار، تُستثمر بعناية في نجاح عملائنا. يضمن فريق PRt المتنوع والواسع تنفيذاً سلساً وحضوراً مؤثراً من زاخو إلى البصرة."
        ],
        quote: "كل قصة تمتلك القوة لإعادة كتابة المستقبل. في أيدينا، تصبح الكلمات جسوراً تربط الأحلام بالواقع، وتغير المفاهيم، وتحول المصائر.",
        mission: {
            title: "رسالتنا",
            text: "تمكين العلامات التجارية بسرديات تشعل المحادثات، وتبني الثقة، وتلهم العمل عبر المجتمعات."
        },
        vision: {
            title: "رؤيتنا",
            text: "أن نكون الراوي الأول في العراق، محولين التواصل اليومي إلى سرديات قوية تشكل المجتمع وتؤثر في الأجيال."
        },
        coreBeliefs: {
            title: "مبادئنا الأساسية",
            items: [
                { title: "النزاهة قبل كل شيء", description: "نحمي سرديتك بنفس الدقة التي يحمي بها المؤرخون التاريخ." },
                { title: "استثنائي من العادي", description: "نجد الشعر المختبئ في المألوف، ونصوغ قصصاً مقنعة من اللحظات اليومية." },
                { title: "إنجازات ذات مغزى", description: "لا نقيس النجاح بالحملات، بل بالتأثير الثقافي والإرث الدائم." },
                { title: "الابتكار كعقيدة", description: "نتحدى المألوف، ونستكشف بلا هوادة مسارات غير مطروقة تعيد تعريف ما هو ممكن." },
                { title: "أفعال لا أقوال", description: "التزاماتنا محفورة في الأفعال، وليست مجرد كلمات منطوقة." },
                { title: "الوحدة في التنوع", description: "تكمن قوتنا في وجهات النظر المتنوعة؛ كل صوت يثري سرديتنا." },
            ],
        },
        team: {
            title: "تعرف على مهندسي التأثير",
            subtitle: "القوة الدافعة وراء استراتيجياتنا الإبداعية وسردياتنا المؤثرة. خبرات فريقنا المتنوعة وشغفنا المشترك بسرد القصص هما حجر الزاوية لنجاحنا.",
            members: enTranslations.about.team.members // Keep names/images/titles same for now or localize titles if needed
        }
    },
    technology: {
        title: "التكنولوجيا والابتكار",
        subtitle: "تسخير قوة البيانات والذكاء الاصطناعي لصياغة سرديات لا تُروى فحسب، بل تُحس. نحن نهندس التأثير من خلال التكنولوجيا المتطورة.",
        feature1: {
            title: "سرديات مبنية على البيانات",
            text: "نحن نتجاوز الحدس. تُبنى استراتيجياتنا على أساس متين من تحليلات البيانات القوية، وأبحاث السوق، وتحليل المشاعر. من خلال فهم سلوكيات الجمهور والفروق الثقافية الدقيقة، نضمن أن كل رسالة موجهة بدقة ومؤثرة بقوة."
        },
        feature2: {
            title: "رؤى مدعومة بالذكاء الاصطناعي",
            text: "بالاستفادة من الذكاء الاصطناعي، نفتح آفاق الرؤى التنبؤية ونقوم بأتمتة مراقبة وسائل الإعلام المعقدة. يتيح لنا ذلك توقع الاتجاهات، وتحديد الفرص، والاستجابة للأزمات بسرعة وذكاء لا مثيل لهما، مما يبقي عملاءنا دائماً في المقدمة."
        }
    },
    process: {
        title: "خبراتنا",
        subtitle: "في PRt، ندرك أن لكل عميل احتياجات فريدة. لتلبية هذه الاحتياجات، نقدم مجموعة واسعة من الخدمات:",
        steps: [
            {
                id: "01",
                title: "الاتصال الاستراتيجي والتأثير",
                items: [
                    "علاقات عامة متخصصة لصناعات محددة",
                    "الريادة الفكرية",
                    "الشؤون العامة والمناصرة",
                    "إدارة الأزمات",
                    "العلاقات الإعلامية",
                    "الاتصالات الداخلية",
                    "إدارة العلامة التجارية والسمعة"
                ]
            },
            {
                id: "02",
                title: "السرد القصصي الإبداعي والرقمي",
                items: [
                    "صناعة المحتوى",
                    "تطوير الحملات الإبداعية",
                    "العلاقات العامة الرقمية ووسائل التواصل الاجتماعي",
                    "التسويق عبر المؤثرين",
                    "مراقبة وسائل الإعلام وإعداد التقارير",
                    "إطلاق المنتجات والخدمات"
                ]
            },
            {
                id: "03",
                title: "الفعاليات وتنشيط المجتمع",
                items: [
                    "ابتكار وإدارة الفعاليات",
                    "التنشيط الميداني",
                    "المشاركة المجتمعية",
                    "الرعاية والتأييد",
                    "الشراكات الاستراتيجية"
                ]
            },
            {
                id: "04",
                title: "الرؤى، الأبحاث وبناء القدرات",
                items: [
                    "أبحاث السوق والتحليلات",
                    "التدريب والتوجيه الإعلامي"
                ]
            }
        ]
    },
    insights: {
        title: "رؤى من خبرائنا",
        subtitle: "تعرف على الاستراتيجيين، ورواة القصص، والمبتكرين الذين يشكلون مستقبل الاتصال في منطقتنا.",
        items: [
            {
                topic: "كيف يمكن للعلاقات العامة الاستفادة من الذكاء الاصطناعي وتحليلات البيانات؟",
                expertName: "زيد الغنام",
                expertTitle: "مدير مشاريع التأثير الاجتماعي",
                expertImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1287&auto=format&fit=crop",
                content: [
                    "في عصر المعلومات، البيانات ليست مجرد مورد؛ إنها البوصلة التي توجه السرديات الاستراتيجية. من خلال تحليل مجموعات البيانات الضخمة، يمكننا فك شفرة المشاعر العامة قبل أن تتحول، مما يسمح للعلامات التجارية بأن تكون استباقية وليست رد فعل.",
                    "تتيح لنا أدوات الذكاء الاصطناعي معالجة الملايين من نقاط البيانات من وسائل التواصل الاجتماعي ومنافذ الأخبار واتجاهات البحث في الوقت الفعلي. وهذا يعني أنه يمكننا تحديد الأزمات الناشئة أو الفرص الفيروسية على الفور.",
                    "ومع ذلك، يظل العنصر البشري حاسماً. توفر البيانات 'ماذا'، لكن السياق الثقافي يوفر 'لماذا'. في PRt، نمزج هذه الدقة التكنولوجية بفهم أنثروبولوجي عميق لصياغة حملات لها صدى حقيقي."
                ]
            },
            {
                topic: "استراتيجيات الاتصال الداخلي التي تبني ولاء الموظفين.",
                expertName: "آية النعيمي",
                expertTitle: "رئيس الاتصالات الداخلية",
                expertImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop",
                content: [
                    "موظفوك هم جمهورك الأول والأكثر أهمية. القوى العاملة المنفصلة تؤدي إلى علامة تجارية مفككة. الولاء الحقيقي لا يُشترى بالمزايا؛ بل يُكتسب من خلال الشفافية والهدف المشترك.",
                    "يحول الاتصال الداخلي الفعال الموظفين من طاقم عمل إلى سفراء للعلامة التجارية. يتعلق الأمر بإنشاء سرد يرون أنفسهم فيه. عندما يفهمون 'السبب' وراء قرارات الشركة، يصبحون مستثمرين في النتائج.",
                    "نحن نركز على قنوات الاتصال ثنائية الاتجاه. ليست مجرد توجيهات من أعلى إلى أسفل؛ بل يتعلق الأمر بخلق مساحات للتعليقات والحوار. هذا يعزز ثقافة الثقة والأمان النفسي حيث يزدهر الابتكار."
                ]
            },
            {
                topic: "كيف تبني العلاقات العامة جسراً بين العلامة التجارية والمجتمع؟",
                expertName: "طارق الجنابي",
                expertTitle: "مدير العلاقات الإعلامية",
                expertImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop",
                content: [
                    "لم تعد العلامات التجارية موجودة في فراغ. إنها أعضاء في المجتمع. العلاقات العامة هي فن أنسنة الشركات، وإثبات أنها تشارك القيم والاهتمامات للأشخاص الذين تخدمهم.",
                    "يتعلق الأمر بالانتقال إلى ما وراء العلاقات القائمة على المعاملات إلى الروابط العاطفية. نساعد العلامات التجارية في العثور على صوتها الأصيل في المحادثات الاجتماعية، سواء كان ذلك حول الاستدامة أو الثقافة أو الدعم الاجتماعي.",
                    "من خلال تسهيل الشراكات الحقيقية والمبادرات المجتمعية، نثبت أن نجاح العلامة التجارية يساهم في الرفاهية الجماعية. هذا هو أساس الثقة الدائمة."
                ]
            },
            {
                topic: "إدارة الأزمات: الدور المحوري للعلاقات العامة في إدارة السمعة.",
                expertName: "ليلى حسن",
                expertTitle: "مسؤول اتصالات الأزمات",
                expertImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1287&auto=format&fit=crop",
                content: [
                    "تستغرق السمعة سنوات لبنائها ودقائق لتدميرها. في الأزمات، الصمت ليس خياراً؛ إنه اعتراف. الدور المحوري للعلاقات العامة هو السيطرة على السرد قبل أن يسيطر عليك.",
                    "السرعة والدقة هما عملاتنا الأساسية. نعد أطر عمل استباقية للأزمات تسمح لنا بالاستجابة بوضوح وتعاطف على الفور. لا يتعلق الأمر فقط بـ 'تجميل الصورة'؛ بل يتعلق بالمساءلة والعمل.",
                    "التعافي بعد الأزمة لا يقل أهمية. نساعد العلامات التجارية على إعادة بناء الثقة من خلال إظهار تغيير ملموس والحفاظ على تواصل مفتوح وصادق مع أصحاب المصلحة طوال عملية الشفاء."
                ]
            }
        ]
    },
    testimonials: {
        title: "ماذا يقول عملاؤنا",
        subtitle: "شراكات مبنية على الثقة، الاستراتيجية، والنتائج الاستثنائية. إليك ما يقوله بعض عملائنا عن رحلتهم مع PRt.",
        items: [
            { quote: "لم تقم PRt بحملة فحسب؛ بل أطلقت حركة. فهمهم للمشهد الثقافي العراقي لا مثيل له. إنهم شركاء حقيقيون بكل ما للكلمة من معنى.", author: "أحمد السوداني", title: "الرئيس التنفيذي، شركة المبتكرون التقنيون" },
            { quote: "حولت الرؤية الاستراتيجية للفريق وتنفيذهم الخالي من العيوب مهرجاننا السنوي إلى حدث معترف به وطنياً. شغفهم وتفانيهم واضحان في كل التفاصيل.", author: "فاطمة الجبوري", title: "مديرة مهرجان بغداد للفنون والثقافة" },
            { quote: "في لحظة حرجة لعلامتنا التجارية، قدمت PRt التوجيه وإدارة الأزمات التي كنا في أمس الحاجة إليها. حمى نهجهم الهادئ والاستراتيجي سمعتنا وبنى ثقة أقوى مع أصحاب المصلحة لدينا.", author: "يوسف المالكي", title: "المدير الإداري، بصرة لوجيستيكس" },
        ]
    },
    services: {
        title: "خدماتنا",
        items: [
            {
                title: "العلاقات العامة",
                description: "صياغة سرديات تبني السمعة والتأثير.",
                icon: "",
                items: ["العلاقات الإعلامية", "إدارة الأزمات", "اتصالات الشركات", "إدارة السمعة"]
            },
        ]
    },
    projects: {
        title: "لمحة عن تأثيرنا",
        subtitle: "",
        subtitle_detail: "",
        approachLabel: "نهجنا",
        impactLabel: "الأثر",
        cta: "اعرف المزيد",
        cta_show_more: "عرض التفاصيل",
        cta_show_less: "إخفاء التفاصيل",
        items: [
            {
                title: "يلا فورمولا: إشعال السرعة والتواصل",
                category: "اتصالات",
                image: "https://media.licdn.com/dms/image/v2/D4E22AQFhQPEfN70fwg/feedshare-shrink_800/feedshare-shrink_800/0/1721298920219?e=2147483647&v=beta&t=_2FtNOiVB2crlluebEliX-F75EdXzZ2Loe8yftGLIl8",
                overview: "تنشيط وطني للاتصالات دمج إثارة الفورمولا 1 مع براعة الاتصالات الاستراتيجية - موحداً المشاركة المادية، التفاعل الرقمي، ودقة السرد. حولت هذه الحملة حافز إعادة الشحن إلى لحظة ثقافية شاملة.",
                approach: [
                    "قادت PRt حملة علاقات عامة بزاوية 360 درجة، دامجة بسلاسة التجارب الميدانية مع استراتيجية اتصالات كاملة الطيف.",
                    "طورت لعبة سباق تفاعلية للهاتف المحمول مرتبطة بسلوك إعادة الشحن، مكافئة المشاركة بحوافز رقمية ذات مغزى.",
                    "نفذت تنشيطات ميدانية غامرة في المحافظات الرئيسية، مقدمة رسائل موحدة من خلال التصميم، السيناريو، والتجربة المكانية.",
                    "حشدت كبار المؤثرين لسرد رحلة الحملة في الوقت الفعلي، مولدة محتوى تردد صداه عبر المنصات والتركيبات السكانية."
                ],
                impact: [
                    "أشركت أكثر من 200,000 مشارك عبر نقاط الاتصال الرقمية والمادية للحملة.",
                    "ولدت الملايين من الانطباعات العضوية، مدفوعة بسرد قصص المؤثرين والمشاركة المجتمعية.",
                    "عززت الفة العلامة التجارية وسلوك إعادة الشحن، مرسخة مكانة العميل كقائد مدفوع بنمط الحياة في مجال الاتصالات."
                ]
            },
            {
                title: "مهرجان رمضان: الاحتفال بالثقافة والمجتمع والتواصل",
                category: "فعاليات",
                image: "https://sharjahevents.ae/wp-content/uploads/2024/03/RamadanNights2-1130x650.jpg",
                overview: "حملة ذات صدى ثقافي صُممت لتعميق الاتصال العاطفي وعكس القيم المشتركة خلال أكثر الشهور روحانية في العراق. تم تصميم وتنفيذ مهرجان رمضان لعامين متتاليين، ليصبح أكثر من مجرد تنشيط للعلامة التجارية، بل أصبح تقليداً.",
                approach: [
                    "أشرفت PRt على احتفال وطني دمج التراث والإنسانية وسرد القصص.",
                    "نفذت فعاليات واسعة النطاق تركز على المجتمع في جميع أنحاء العراق، مكرمة روح رمضان وداعية الجمهور إلى تجارب غامرة وهادفة.",
                    "طورت محتوى مرئياً وسرديات غنية ثقافياً تشيد بالعادات والتقاليد العراقية وروح الكرم."
                ],
                impact: [
                    "استقبلت أكثر من 25,000 زائر كل عام، مما جعلها واحدة من أكثر الحملات الموسمية وضوحاً في السوق.",
                    "رفعت مشاركة الجمهور بشكل كبير خلال شهر رمضان، دافعة المشاركة عبر الإنترنت وعلى أرض الواقع."
                ]
            },
            {
                title: "الذكاء الاصطناعي للمؤثرين: إعادة تعريف التأثير الرقمي",
                category: "تكنولوجيا",
                image: "https://framerusercontent.com/images/HRSJkz6m9sRpZLpDnwn2DyiP0.webp?width=2048&height=1152",
                overview: "حدث مبتكر يقدم أحدث تقنيات الذكاء الاصطناعي لكبار المؤثرين، معززاً قدراتهم في إنشاء المحتوى وتأثيرهم الرقمي.",
                approach: [
                    "ورش عمل حصرية عملية لكبار المؤثرين العراقيين.",
                    "عروض توضيحية لأدوات الذكاء الاصطناعي المصممة لابتكار المحتوى.",
                    "حملات مؤثرة على وسائل التواصل الاجتماعي توثق تجارب المؤثرين."
                ],
                impact: [
                    "رفعت القدرات الرقمية للمؤثرين وجودة المحتوى.",
                    "زادت من رؤية العلامة التجارية من خلال محتوى أصيل يقوده المؤثرون.",
                    "رسخت مكانة PRt وعميلها كرواد في التكامل التكنولوجي."
                ]
            },
            {
                title: "حملة ليلى: أول مساعد مدعوم بالذكاء الاصطناعي في العراق",
                category: "تكنولوجيا",
                image: "https://media.licdn.com/dms/image/v2/D4D22AQFi21LfZL70Jg/feedshare-shrink_800/feedshare-shrink_800/0/1731783981800?e=2147483647&v=beta&t=VbN6o84xPaaLyyt2McSVKwNnf-xggctsbY2FQLTedRY",
                overview: "حملة علاقات عامة رائدة تقدم 'ليلى'، أول مساعد اتصالات مدعوم بالذكاء الاصطناعي في العراق، يمكن الوصول إليه عبر منصات رقمية مختلفة.",
                approach: [
                    "أنتجت محتوى رقمياً فكاهياً وذا بصيرة يضم مؤثرين بارزين لجذب انتباه الجمهور.",
                    "استغلت استراتيجياً منصات وسائل التواصل الاجتماعي لعرض سهولة استخدام ليلى واستجابتها."
                ],
                impact: [
                    "أسست ليلى بنجاح كمساعد رقمي معروف وموثوق.",
                    "عززت المشاركة الرقمية بشكل كبير، دافعة تبني خدمات العملاء الرقمية للعميل."
                ]
            },
            {
                title: "منتديات تيك ويف: إلهام جيل التكنولوجيا في العراق",
                category: "شركات",
                image: "https://iraqbritainbusiness.org/wp-content/uploads/2018/11/Iraq-Tech-Conference-Pic-1.jpg",
                overview: "حدث تكنولوجي حيوي موجه للشباب عُقد بالتعاون مع المؤسسات الأكاديمية، مسلطاً الضوء على اتجاهات التكنولوجيا الناشئة وملهمًا الجيل القادم من المبتكرين ورواد الأعمال العراقيين.",
                approach: [
                    "نظمت جلسات تفاعلية، حلقات نقاش، وعروضاً حية تسلط الضوء على أحدث التقنيات.",
                    "سهلت التعاون بين الأوساط الأكاديمية، شركات التكنولوجيا، ومجتمعات ريادة الأعمال."
                ],
                impact: [
                    "أشركت بنجاح الآلاف من المشاركين، رافعة الوعي بشكل كبير حول الفرص المدفوعة بالتكنولوجيا.",
                    "عززت العلاقات مع المجتمع وأصحاب المصلحة."
                ]
            }
        ],
        disclaimer: "المشاريع المعروضة في هذا الملف هي مقتطفات مختارة - حملات مميزة تعكس اتساع وعمق قدراتنا. إنها ليست القصة الكاملة. خلف الكواليس، قادت PRt ونفذت عشرات المبادرات الإضافية عبر القطاعات والمدن والمقاييس. من التنشيطات الشعبية إلى استراتيجيات مجالس الإدارة، يغطي عملنا طيف التميز في العلاقات العامة. كل مشروع، سواء أدرج هنا أم لا، يحمل توقيعنا: استراتيجية مدروسة، طلاقة ثقافية، والتزام لا هوادة فيه بالنتائج.",
        proofInPractice: {
            title: "برهان في الممارسة",
            items: [
                {
                    title: "تحول الاتصالات",
                    description: "من زاخو إلى البصرة، أشعلت PRt محادثات وطنية لشركات الاتصالات الرائدة في العراق. من خلال تجارب غامرة وسرد قصصي مدفوع بالبيانات، قمنا بربط أكثر من 20 مليون قلب - مازجين الإبداع والتكنولوجيا والثقافة في صوت قوي واحد."
                },
                {
                    title: "الرؤية المالية الوطنية",
                    description: "بالشراكة مع أصحاب المصلحة الوطنيين الرئيسيين، صاغت PRt وأدارت استراتيجية الاتصال وراء واحدة من أهم المبادرات الاقتصادية في العراق - جسرة الرؤية والثقة والمشاركة العامة."
                },
                {
                    title: "تمكين المبتكرين",
                    description: "من حضور علامة BYD الجريء إلى تطور الترفيه في العراق مول، تحتفل PRt بالابتكار والإبداع عبر الصناعات. من خلال سرد القصص والمشاركة الاستراتيجية، نضخم الأصوات التي تشكل الثقافة والتجارة الحديثة في العراق."
                }
            ]
        }
    },
    valueStats: [
        { value: 3.5, label: "تُدار سنوياً في اتصالات العملاء الاستراتيجية", prefix: '$', suffix: 'M+', decimals: 1 },
        { value: 2, label: "مكاتب استراتيجية بالإضافة إلى مستودع مخصص" },
        { value: 300, label: "مروج ميداني محترف تم نشرهم في جميع أنحاء البلاد", suffix: '+' },
        { value: 30, label: "عضو فريق في جميع أنحاء المنطقة", suffix: '+' }
    ],
    clients: {
        title: "عملاء وشراكات",
        subtitle: "تتضمن رحلتنا شراكات مع قادة الصناعة، ومنظمات عالمية مشهورة، ومؤسسات محلية مؤثرة. يثقون بنا في قصصهم - مما يسمح لنا بتضخيم أصواتهم وتوسيع نطاق وصولهم.",
        logos: enTranslations.clients.logos
    },
    careers: {
        title: "انضم إلى فريقنا",
        subtitle: "كن جزءاً من فريق يعيد تعريف التواصل في قلب العراق. نبحث عن أفراد شغوفين ومبدعين ومدفوعين لمساعدتنا في صياغة الجيل القادم من السرديات.",
        culture: {
            title: "ثقافتنا",
            text: "نعزز بيئة تعاونية ومبتكرة حيث يُسمع كل صوت وتُقدر كل فكرة. نؤمن بالتعلم المستمر، والنمو المهني، والحفاظ على توازن صحي بين العمل والحياة.",
            perks: {
                title: "ما نقدمه",
                items: ["رواتب تنافسية", "مزايا الصحة والرفاهية", "تطوير مهني", "ساعات عمل مرنة", "حرية إبداعية", "خلوات الفريق"]
            },
        },
        openings: {
            title: "الوظائف المتاحة",
            cta: "قدم الآن",
            jobs: [
                { title: "مدير علاقات عامة أول", location: "بغداد", type: "دوام كامل" },
                { title: "أخصائي وسائط رقمية", location: "السليمانية", type: "دوام كامل" },
                { title: "مصمم جرافيك", location: "بغداد", type: "عقد" },
                { title: "منسق فعاليات", location: "عن بعد/وطني", type: "دوام جزئي" }
            ]
        }
    },
    contact: {
        title: "لنبدع معاً",
        subtitle: "لديك قصة لترويها أو تحدٍ لحله؟ نحن هنا للاستماع والتعاون.",
        details: {
            title: "تواصل معنا",
            address: "123 شارع الحكواتي، المنصور، بغداد، العراق",
            email: "hello@prt.iq",
            phone: "+964 780 123 4567"
        },
        form: {
            name: "الاسم",
            email: "البريد الإلكتروني",
            message: "الرسالة",
            submit: "إرسال الرسالة",
            sending: "جاري الإرسال...",
            success: {
                title: "شكراً لك!",
                message: "تم إرسال رسالتك. سنعود إليك قريباً."
            }
        }
    },
    footer: {
        subtitle: "جسر بين التراث والابتكار",
        email: "hello@prt.iq",
        copyright: "© {year} وكالة PRt. جميع الحقوق محفوظة."
    }
};

const kuTranslations: Translations = {
    navLinks: [
      { name: 'سەرەکی', id: 'home' },
      { name: 'دەربارەی ئێمە', id: 'about' },
      { name: 'پڕۆژەکان', id: 'projects' },
      { name: 'هەلی کار', id: 'careers' },
      { name: 'پەیوەندی', id: 'contact' },
    ],
    hero: {
        title: { part1: 'گێڕانەوەکان کە کاریگەری لەسەر', highlighted: 'نەوەکان', part2: 'دادەنێن' },
        subtitle: 'ئێمە پەیوەندییە ڕۆژانەییەکان دەگۆڕین بۆ چیرۆکی بەهێز کە کۆمەڵگا دروست دەکەن و متمانە بونیاد دەنێن.',
        button: 'چیرۆکەکەت بگێڕەوە',
    },
    about: {
        title: "ئێمە کێین",
        aboutText: [
          "\"لە یەکتربڕی کەلەپوور و داهێنان، PRt براندەکان دەگۆڕێت بۆ گێڕانەوەی بەهێز کە کولتوور دروست دەکەن.\"",
          "لە ساڵی ٢٠٢٢ دامەزراوە، PRt زیاترە لە ئاژانسێکی پەیوەندییە گشتییەکان، ئێمە تەلارسازانی ڕۆشنبیرین. بە ڕەگێکی قوڵ لە دابونەریتی عێراقی و هۆشیاری جیهانی، گێڕانەوەکان دادەڕێژین کە مێشکەکان سەرقاڵ دەکەن، کاریگەری لەسەر دڵەکان دادەنێن، و گۆڕانکاری بەردەوام لە دیمەنی بازرگانی عێراقدا دروست دەکەن.",
          "بە دوو نووسینگەی ستراتیژی (بەغدا و سلێمانی)، مەودای ئێمە هەموو وڵات دەگرێتەوە. ئێمە ساڵانە بەڕێوەبردنی پۆرتفۆلیۆی پەیوەندییەکان بە بڕی زیاتر لە ٣.٥ ملیۆن دۆلار دەکەین، کە بە وردی لە سەرکەوتنی کڕیارەکانماندا وەبەرهێنانی تێدا دەکرێت. تیمی فراوان و هەمەچەشنی PRt، جێبەجێکردنی بێ کێشە و ئامادەیی کاریگەر لە زاخۆوە تا بەسرە مسۆگەر دەکات."
        ],
        quote: "هەر چیرۆکێک هێزی ئەوەی هەیە داهاتوو بنووسێتەوە. لە دەستەکانی ئێمەدا، وشەکان دەبنە پرد، خەونەکان بە واقیعەوە دەبەستنەوە، تێڕوانینەکان دەگۆڕن، و چارەنووسەکان وەردەچەرخێنن.",
        mission: {
            title: "پەیام",
            text: "بەهێزکردنی براندەکان بە گێڕانەوەکان کە گفتوگۆکان دادەگیرسێنن، متمانە بونیاد دەنێن، و ئیلهام دەبەخشن بۆ کارکردن لە نێو کۆمەڵگاکاندا."
        },
        vision: {
            title: "دیدگا",
            text: "ناسینەوەمان وەک یەکەم چیرۆکبێژی عێراق، گۆڕینی پەیوەندی ڕۆژانە بۆ گێڕانەوەی بەهێز کە کۆمەڵگا دروست دەکەن و کاریگەری لەسەر نەوەکان دادەنێن."
        },
        coreBeliefs: {
            title: "باوەڕە بنەڕەتییەکانمان",
            items: [
                { title: "دەستپاکی لە سەرووی هەموو شتێکەوە", description: "ئێمە گێڕانەوەکەت دەپارێزین بە هەمان وردبینی کە مێژوونووسان مێژوو دەپارێزن." },
                { title: "نائاسایی لە ئاساییەوە", description: "ئێمە شیعر لە ناو شتە سادەکاندا دەدۆزینەوە، چیرۆکی سەرنجڕاکێش لە ساتە ڕۆژانەییەکان دروست دەکەین." },
                { title: "وێستگە گرنگەکان", description: "ئێمە سەرکەوتن بە هەڵمەتەکان ناپێوین، بەڵکو بە کاریگەری کولتووری و میراتی بەردەوام." },
                { title: "داهێنان وەک بیروباوەڕ", description: "ئێمە تەحەدای نەریتەکان دەکەین، بە بەردەوامی ڕێڕەوە نەزانراوەکان دەگەڕێین کە ئەوەی مومکینە پێناسەی دەکەنەوە." },
                { title: "کردار نەک تەنها وتە", description: "پەیمانەکانی ئێمە لە کردارەکاندا نەخشێنراون، نەک تەنها وشەی وتراو." },
                { title: "یەکگرتوویی لە جیاوازیدا", description: "هێزی ئێمە لە دیدگا جیاوازەکانەوە سەرچاوە دەگرێت؛ هەر دەنگێک گێڕانەوەکەمان دەوڵەمەند دەکات." },
            ],
        },
        team: {
          title: "ناسینەوەی تەلارسازانی کاریگەری",
          subtitle: "هێزی پاڵنەر لە پشت ستراتیژییە داهێنەرەکانمان و گێڕانەوە کاریگەرەکانمان. شارەزایی هەمەچەشنی تیمەکەمان و خولیای هاوبەشمان بۆ چیرۆکبێژی بەردی بناغەی سەرکەوتنمانن.",
          members: enTranslations.about.team.members
        }
    },
    technology: {
      title: "تەکنەلۆژیا و داهێنان",
      subtitle: "بەهێزکردنی داتا و ژیری دەستکرد بۆ داڕشتنی گێڕانەوەکان کە تەنها ناوترێن، بەڵکو هەستیان پێدەکرێت. ئێمە کاریگەری ئەندازیاری دەکەین لە ڕێگەی تەکنەلۆژیای پێشکەوتوو.",
      feature1: {
        title: "گێڕانەوەکان بەپێی داتا",
        text: "ئێمە لە دەروونبینی تێدەپەڕین. ستراتیژییەکانمان لەسەر بنەمایەکی بەهێزی شیکاری داتا، توێژینەوەی بازاڕ، و شیکاری هەستەکان بونیاد نراون. بە تێگەیشتن لە ڕەفتاری جەماوەر و وردەکارییە کولتوورییەکان بە وردی، ئێمە دڵنیایی دەدەین کە هەر پەیامێک بە وردی ئاراستە کراوە و کاریگەری بەهێزی هەیە."
      },
      feature2: {
        title: "تێڕوانینەکانی بەهێزکراو بە ژیری دەستکرد",
        text: "بە سوودوەرگرتن لە ژیری دەستکرد، ئێمە تێڕوانینە پێشبینیکەرەکان دەکەینەوە و چاودێری میدیای ئاڵۆز ئۆتۆماتیکی دەکەین. ئەمە ڕێگەمان دەدات پێشبینی ئاڕاستەکان بکەین، دەرفەتەکان دەستنیشان بکەین، و بە خێرایی و ژیری بێ وێنە وەڵامی قەیرانەکان بدەینەوە، و کڕیارەکانمان هەمیشە یەک هەنگاو لە پێشەوە بهێڵینەوە."
      }
    },
    process: {
      title: "شارەزایی ئێمە",
      subtitle: "لە PRt، تێدەگەین کە هەر کڕیارێک پێداویستی تایبەتی هەیە. بۆ جێبەجێکردنی ئەمانە، ئێمە کۆمەڵێک خزمەتگوزاری بەرفراوان پێشکەش دەکەین:",
      steps: [
        {
          id: "01",
          title: "پەیوەندی ستراتیژی و کاریگەری",
          items: [
            "پەیوەندییە گشتییە تایبەتمەندەکان بۆ پیشەسازییە دیاریکراوەکان",
            "سەرکردایەتی هزری",
            "کاروباری گشتی و داکۆکی",
            "بەڕێوەبردنی قەیران",
            "پەیوەندییە میدیاییەکان",
            "پەیوەندییە ناوخۆییەکان",
            "بەڕێوەبردنی براند و ناوبانگ"
          ]
        },
        {
          id: "02",
          title: "چیرۆکبێژی داهێنەر و دیجیتاڵ",
          items: [
            "دروستکردنی ناوەڕۆک",
            "پەرەپێدانی هەڵمەتی داهێنەر",
            "پەیوەندییە گشتییە دیجیتاڵییەکان و سۆشیال میدیا",
            "بازاڕگەری لە ڕێگەی کاریگەرەکان (ئینفلوێنسەر)",
            "چاودێری میدیا و ڕاپۆرتکردن",
            "خستنەبازاڕی بەرهەم و خزمەتگوزاری"
          ]
        },
        {
          id: "03",
          title: "چالاکییەکان و چالاککردنی کۆمەڵگا",
          items: [
            "دروستکردن و بەڕێوەبردنی چالاکییەکان",
            "چالاککردنی مەیدانی",
            "بەشداریکردنی کۆمەڵگا",
            "سپۆنسەری و پشتیوانی",
            "هاوبەشییە ستراتیژییەکان"
          ]
        },
        {
          id: "04",
          title: "تێڕوانین، توێژینەوە و بونیادنانی تواناکان",
          items: [
            "توێژینەوەی بازاڕ و شیکاری",
            "ڕاهێنان و ڕاهێنانی میدیایی"
          ]
        }
      ]
    },
    insights: {
        title: "تێڕوانینەکان لە شارەزایانمانەوە",
        subtitle: "ئاشنابە بە ستراتیژیستەکان، چیرۆکبێژەکان، و داهێنەران کە داهاتووی پەیوەندی لە ناوچەکەماندا دروست دەکەن.",
        items: [
            { 
              topic: "چۆن پەیوەندییە گشتییەکان دەتوانن سوود لە ژیری دەستکرد و شیکاری داتا وەربگرن؟", 
              expertName: "زەید غەنام", 
              expertTitle: "بەڕێوەبەری پڕۆژەکانی کاریگەری کۆمەڵایەتی",
              expertImage: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=1287&auto=format&fit=crop",
              content: [
                  "لە سەردەمی زانیاریدا، داتا تەنها سەرچاوە نییە؛ بەڵکو قیبلەنومایەکە کە گێڕانەوە ستراتیژییەکان ئاراستە دەکات. بە شیکردنەوەی کۆمەڵە داتا گەورەکان، دەتوانین هەستی گشتی شرۆڤە بکەین پێش ئەوەی بگۆڕێت، ئەمەش ڕێگە بە براندەکان دەدات پێشوەختە بن نەک کاردانەوە.",
                  "ئامرازەکانی ژیری دەستکرد ڕێگەمان دەدەن ملیۆنان خاڵی داتا لە سۆشیال میدیا، دەزگا هەواڵییەکان، و ئاڕاستەکانی گەڕان لە کاتی ڕاستەقینەدا پڕۆسێس بکەین. ئەمەش مانای ئەوەیە دەتوانین قەیرانە سەرھەڵداوەکان یان دەرفەتە بڵاوبووەوەکان دەستبەجێ دەستنیشان بکەین.",
                  "لەگەڵ ئەوەشدا، توخمی مرۆیی بە گرنگی دەمێنێتەوە. داتا 'چی' دابین دەکات، بەڵام سياقی کولتووری 'بۆچی' دابین دەکات. لە PRt، ئێمە ئەم وردبینییە تەکنەلۆژییە لەگەڵ تێگەیشتنی قووڵی مرۆڤناسی تێکەڵ دەکەین بۆ داڕشتنی هەڵمەتگەلێک کە بەڕاستی کاریگەرییان هەبێت."
              ]
            },
            { 
              topic: "ستراتیژییەکانی پەیوەندی ناوخۆیی کە دڵسۆزی فەرمانبەران دروست دەکەن.", 
              expertName: "ئایە ئەلنوعەیمی", 
              expertTitle: "سەرۆکی پەیوەندییە ناوخۆییەکان",
              expertImage: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1287&auto=format&fit=crop",
              content: [
                  "فەرمانبەرانت یەکەم و گرنگترین جەماوەری تۆن. هێزی کاری دابڕاو دەبێتە هۆی براندێکی پچڕپچڕ. دڵسۆزی ڕاستەقینە بە ئیمتیازات ناکڕدرێت؛ بەڵکو بە شەفافیەت و ئامانجی هاوبەش بەدەست دێت.",
                  "پەیوەندی ناوخۆیی کاریگەر فەرمانبەران لە کارمەندەوە دەگۆڕێت بۆ باڵیۆزی براند. پەیوەندی بە دروستکردنی گێڕانەوەیەکە کە خۆیانی تێدا دەبیننەوە. کاتێک لە 'بۆچی' پشت بڕیارەکانی کۆمپانیا تێدەگەن، دەبنە بەشێک لە ئەنجامەکە.",
                  "ئێمە جەخت لەسەر کەناڵەکانی پەیوەندی دوو ئاڕاستەیی دەکەینەوە. تەنها ڕێنمایی لە سەرەوە بۆ خوارەوە نییە؛ بەڵکو دروستکردنی بۆشاییە بۆ فیدباک و گفتوگۆ. ئەمە کولتووری متمانە و سەلامەتی دەروونی پەروەردە دەکات کە تێیدا داهێنان گەشە دەکات."
              ]
            },
            { 
              topic: "چۆن پەیوەندییە گشتییەکان پردێک لە نێوان براند و کۆمەڵگا دروست دەکات؟", 
              expertName: "تاریق جەنابی", 
              expertTitle: "بەڕێوەبەری پەیوەندییە میدیاییەکان",
              expertImage: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=1471&auto=format&fit=crop",
              content: [
                  "براندەکان چیتر لە بۆشاییدا نین. ئەوان ئەندامی کۆمەڵگان. پەیوەندییە گشتییەکان هونەری مرۆڤیکردنی کۆمپانیاکانە، و سەلماندنی ئەوەی کە ئەوان بەها و نیگەرانییەکانی ئەو خەڵکە بەشداری دەکەن کە خزمەتیان دەکەن.",
                  "پەیوەندی بە تێپەڕبوونە لە پەیوەندییە مامەڵەییەکان بۆ پەیوەندییە سۆزدارییەکان. ئێمە یارمەتی براندەکان دەدەین دەنگی ڕاستەقینەی خۆیان لە گفتوگۆ کۆمەڵایەتییەکاندا بدۆزنەوە، جا سەبارەت بە بەردەوامی، کولتوور، یان پاڵپشتی کۆمەڵایەتی بێت.",
                  "بە ئاسانکاری هاوبەشی ڕاستەقینە و دەستپێشخەرییە کۆمەڵایەتییەکان، ئێمە نیشانی دەدەین کە سەرکەوتنی براندێک بەشداری لە خۆشگوزەرانی گشتیدا دەکات. ئەمە بنەمای متمانەی بەردەوامە."
              ]
            },
            { 
              topic: "تێپەڕاندنی قەیرانەکان: ڕۆڵی سەرەکی پەیوەندییە گشتییەکان لە بەڕێوەبردنی ناوبانگ.", 
              expertName: "لەیلا حەسەن", 
              expertTitle: "سەرپەرشتیاری پەیوەندییەکانی قەیران",
              expertImage: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1287&auto=format&fit=crop",
              content: [
                  "ناوبانگ ساڵانێکی دەوێت بۆ بونیادنان و خولەکێک بۆ لەناوبردن. لە قەیراندا، بێدەنگی بژاردە نییە؛ بەڵکو دانپێدانانە. ڕۆڵی سەرەکی پەیوەندییە گشتییەکان کۆنترۆڵکردنی گێڕانەوەکەیە پێش ئەوەی کۆنترۆڵت بکات.",
                  "خێرایی و وردبینی دراوە سەرەکییەکانمانن. ئێمە چوارچێوەی قەیرانی پێشوەختە ئامادە دەکەین کە ڕێگەمان دەدات بە ڕوونی و هاوسۆزی دەستبەجێ وەڵام بدەینەوە. تەنها پەیوەندی بە 'ڕازاندنەوە' نییە؛ بەڵکو بەرپرسیارێتی و کردارە.",
                  "چاکبوونەوە دوای قەیران هەمان گرنگی هەیە. ئێمە یارمەتی براندەکان دەدەین متمانە بونیاد بنێنەوە بە نیشاندانی گۆڕانکاری بەرچاو و پاراستنی پەیوەندی کراوە و ڕاستگۆ لەگەڵ لایەنە پەیوەندیدارەکان لە تەواوی پڕۆسەی چاکبوونەوەدا."
              ]
            }
        ]
    },
    testimonials: {
        title: "کڕیارەکانمان چی دەڵێن",
        subtitle: "هاوبەشییەکان کە لەسەر متمانە، ستراتیژی، و ئەنجامی نائاسایی بونیاد نراون. لێرەدا ئەوەی هەندێک لە کڕیارەکانمان دەربارەی گەشتەکەیان لەگەڵ PRt دەیڵێن.",
        items: [
            { quote: "PRt تەنها هەڵمەتێکی ئەنجام نەدا؛ بەڵکو بزووتنەوەیەکی دەستپێکرد. تێگەیشتنیان بۆ دیمەنی کولتووری عێراق بێ وێنەیە. ئەوان بە هەموو مانای وشە هاوبەشی ڕاستەقینەن.", author: "ئەحمەد سودانی", title: "بەڕێوەبەری جێبەجێکار، کۆمپانیای داهێنەرانی تەکنەلۆژیا" },
            { quote: "دروشمبینی ستراتیژی تیمەکە و جێبەجێکردنی بێ کێشە فێستیڤاڵە ساڵانەکەمان گۆڕی بۆ ڕووداوێکی ناسراو لە ئاستی نیشتمانی. سۆز و دڵسۆزییان لە هەموو وردەکارییەکدا دیارە.", author: "فاتیمە جبوری", title: "بەڕێوەبەر، فێستیڤاڵی هونەر و ڕۆشنبیری بەغدا" },
            { quote: "لە ساتێکی هەستیاردا بۆ براندەکەمان، PRt ڕێنمایی و بەڕێوەبردنی قەیرانی پێشکەش کرد کە زۆر پێویستمان بوو. نهجە هێمن و ستراتیژییەکەیان ناوبانگی ئێمەی پاراست و متمانەی بەهێزتری لەگەڵ لایەنە پەیوەندیدارەکانمان دروست کرد.", author: "یوسف مالیکی", title: "بەڕێوەبەری جێبەجێکار، بەسرە لۆجیستیکس" },
        ]
    },
    services: {
        title: "خزمەتگوزارییەکانمان",
        items: [
            {
                title: "پەیوەندییە گشتییەکان",
                description: "داڕشتنی گێڕانەوەکان کە ناوبانگ و کاریگەری دروست دەکەن.",
                icon: "",
                items: ["پەیوەندییە میدیاییەکان", "بەڕێوەبردنی قەیران", "پەیوەندییەکانی کۆمپانیا", "بەڕێوەبردنی ناوبانگ"]
            },
        ]
    },
    projects: {
        title: "کورتەیەک لە کاریگەریمان",
        subtitle: "",
        subtitle_detail: "",
        approachLabel: "ڕێبازی ئێمە",
        impactLabel: "کاریگەری",
        cta: "زیاتر فێربە",
        cta_show_more: "پیشاندانی وردەکارییەکان",
        cta_show_less: "شاردنەوەی وردەکارییەکان",
        items: [
            {
                title: "یەڵا فۆرمولا: داگیرساندنی خێرایی و پەیوەندی",
                category: "پەیوەندییەکان",
                image: "https://media.licdn.com/dms/image/v2/D4E22AQFhQPEfN70fwg/feedshare-shrink_800/feedshare-shrink_800/0/1721298920219?e=2147483647&v=beta&t=_2FtNOiVB2crlluebEliX-F75EdXzZ2Loe8yftGLIl8",
                overview: "چالاککردنێکی نیشتمانی پەیوەندییەکان کە جۆش و خرۆشی فۆرمولا وەن لەگەڵ شارەزایی پەیوەندییە ستراتیژییەکان تێکەڵ کرد — یەکخستنی بەشداری مەیدانی، کارلێکی دیجیتاڵ، و وردبینی گێڕانەوە. ئەم هەڵمەتە هاندەری بارگاوی کردنەوەی گۆڕی بۆ ساتێکی کولتووری گشتگیر.",
                approach: [
                    "PRt سەرکردایەتی هەڵمەتێکی پەیوەندییە گشتییەکانی ٣٦٠ پلەی کرد، بە شێوەیەکی بێ کێشە ئەزموونە مەیدانییەکانی لەگەڵ ستراتیژییەکی پەیوەندی تەواو تێکەڵ کرد.",
                    "یارییەکی پێشبڕکێی مۆبایلی کارلێککەری پەرەپێدا کە بەستراوەتەوە بە ڕەفتاری بارگاوی کردنەوە، بەشداری کردن بە خەڵاتی دیجیتاڵیی بەهادار پاداشت دەکات.",
                    "چالاکییە مەیدانییە غوڵپکەرەکانی لە پارێزگا سەرەکییەکان جێبەجێ کرد، پەیامی یەکگرتووی گەیاند لە ڕێگەی دیزاین، سیناریۆ، و ئەزموونی شوێن.",
                    "کاریگەرە (ئینفلوێنسەر) پلە باڵاکانی کۆکردەوە بۆ گێڕانەوەی گەشتی هەڵمەتەکە لە کاتی ڕاستەقینەدا، ناوەڕۆکیان دروست کرد کە دەنگدانەوەی هەبوو لە نێو پلاتفۆرمەکان و چینە جیاوازەکان."
                ],
                impact: [
                    "زیاتر لە ٢٠٠,٠٠٠ بەشداربووی لە خاڵەکانی پەیوەندی دیجیتاڵ و مەیدانی هەڵمەتەکەدا بەشدار کرد.",
                    "ملیۆنان بینینی سروشتی دروست کرد، کە بەهۆی چیرۆکبێژی کاریگەرەکان و بەشداری کۆمەڵگا بەڕێوە دەچوو.",
                    "خۆشەویستی براند و ڕەفتاری بارگاوی کردنەوەی بەهێز کرد، پێگەی کڕیاری وەک پێشەنگێکی سەر بە شێوازی ژیان لە پەیوەندییەکاندا چەسپاند."
                ]
            },
            {
                title: "فێستیڤاڵی ڕەمەزان: ئاهەنگگێڕان بە کولتوور، کۆمەڵگا و پەیوەندی",
                category: "چالاکییەکان",
                image: "https://sharjahevents.ae/wp-content/uploads/2024/03/RamadanNights2-1130x650.jpg",
                overview: "هەڵمەتێکی دەنگدانەوەی کولتووری کە بۆ قووڵکردنەوەی پەیوەندی سۆزداری و ڕەنگدانەوەی بەها هاوبەشەکان لە پیرۆزترین مانگی عێراقدا داڕێژراوە. بۆ دوو ساڵی لەسەریەک دیزاین و جێبەجێ کرا، فێستیڤاڵی ڕەمەزان بوو بە زیاتر لە چالاککردنی براندێک، بوو بە نەریت.",
                approach: [
                    "PRt سەرپەرشتی ئاهەنگێکی نیشتمانی کرد کە کەلەپوور، مرۆڤایەتی و چیرۆکبێژی تێکەڵ کرد.",
                    "ڕووداوی گەورەی جەخت لەسەر کۆمەڵگا لە سەرانسەری عێراق جێبەجێ کرد، ڕێزی لە ڕۆحی ڕەمەزان گرت و جەماوەری بانگهێشت کرد بۆ ئەزموونی غوڵپکەر و مانادار.",
                    "ناوەڕۆکی بینراو و گێڕانەوەی دەوڵەمەندی کولتووری پەرەپێدا کە ستایشی دابونەریتی عێراقی و ڕۆحی بەخشندەیی دەکرد."
                ],
                impact: [
                    "ساڵانە پێشوازی لە زیاتر لە ٢٥,٠٠٠ ئامادەبوو کرد، کە کردی بە یەکێک لە دیارترین هەڵمەتە وەرزییەکان لە بازاڕدا.",
                    "بەشداریکردنی جەماوەری بە شێوەیەکی بەرچاو بەرز کردەوە لە مانگی ڕەمەزاندا، هاندانی بەشداری هەم لە ئۆنلاین و هەم لەسەر زەوی."
                ]
            },
            {
                title: "ژیری دەستکرد بۆ کاریگەرەکان: پێناسەکردنەوەی کاریگەری دیجیتاڵ",
                category: "تەکنەلۆژیا",
                image: "https://framerusercontent.com/images/HRSJkz6m9sRpZLpDnwn2DyiP0.webp?width=2048&height=1152",
                overview: "ڕووداوێکی داهێنەر کە تەکنەلۆژیای پێشکەوتووی ژیری دەستکرد دەناسێنێت بە کاریگەرە (ئینفلوێنسەر) باڵاکان، تواناکانی دروستکردنی ناوەڕۆک و کاریگەری دیجیتاڵیان بەرز دەکاتەوە.",
                approach: [
                    "وۆرک شۆپی تایبەتی کردەیی بۆ کاریگەرە عێراقییە پێشەنگەکان.",
                    "نمایشکردنی ئامرازەکانی ژیری دەستکرد کە بۆ داهێنانی ناوەڕۆک دیزاین کراون.",
                    "هەڵمەتی کاریگەر لە سۆشیال میدیا کە ئەزموونی کاریگەرەکان بەڵگەدار دەکات."
                ],
                impact: [
                    "توانای دیجیتاڵی کاریگەرەکان و کوالیتی ناوەڕۆکی بەرز کردەوە.",
                    "بینینی براندی زیاد کرد لە ڕێگەی ناوەڕۆکی ڕاستەقینەی کاریگەرەکان.",
                    "PRt و کڕیارەکەی وەک پێشەنگ لە یەکخستنی تەکنەلۆژیا جێگیر کرد."
                ]
            },
            {
                title: "هەڵمەتی لەیلا: یەکەم یاریدەدەری بەهێزکراو بە ژیری دەستکرد لە عێراق",
                category: "تەکنەلۆژیا",
                image: "https://media.licdn.com/dms/image/v2/D4D22AQFi21LfZL70Jg/feedshare-shrink_800/feedshare-shrink_800/0/1731783981800?e=2147483647&v=beta&t=VbN6o84xPaaLyyt2McSVKwNnf-xggctsbY2FQLTedRY",
                overview: "هەڵمەتێکی پەیوەندی گشتی پێشەنگ کە 'لەیلا' دەناسێنێت، یەکەم یاریدەدەری پەیوەندییەکان لە عێراق کە بە ژیری دەستکرد کاردەکات، لە ڕێگەی پلاتفۆرمە دیجیتاڵییە جیاوازەکانەوە دەستدەکەوێت.",
                approach: [
                    "ناوەڕۆکی دیجیتاڵی کۆمیدی بەڵام بەسیرەتی بەرهەم هێنا کە کاریگەرە دیارەکانی تێدابوو بۆ ڕاکێشانی سەرنجی گشتی.",
                    "بە شێوەیەکی ستراتیژی پلاتفۆرمەکانی سۆشیال میدیای بەکارهێنا بۆ نیشاندانی ئاسانی بەکارهێنان و وەڵامدانەوەی لەیلا."
                ],
                impact: [
                    "بە سەرکەوتوویی لەیلای وەک یاریدەدەرێکی دیجیتاڵی ناسراو و جێی متمانە دامەزراند.",
                    "بەشداری دیجیتاڵی بە شێوەیەکی بەرچاو بەرز کردەوە، هاندانی بەکارهێنانی خزمەتگوزارییە دیجیتاڵییەکانی کڕیار."
                ]
            },
            {
                title: "کۆڕبەندەکانی تێك وەیڤ: ئیلهامبەخشین بە نەوەی تەکنەلۆژیا لە عێراق",
                category: "کۆمپانیاکان",
                image: "https://iraqbritainbusiness.org/wp-content/uploads/2018/11/Iraq-Tech-Conference-Pic-1.jpg",
                overview: "ڕووداوێکی تەکنەلۆژی زیندوو کە ئاراستەی گەنجان کراوە و بە هاوکاری لەگەڵ دامەزراوە ئەکادیمییەکان ئەنجامدراوە، تیشک دەخاتە سەر ئاراستە تەکنەلۆژییە سەرهەڵداوەکان و ئیلهام دەبەخشێت بە نەوەی داهاتووی داهێنەران و خاوەنکارانی تەکنەلۆژی عێراقی.",
                approach: [
                    "دانیشتنی کارلێککەر، پانێڵی گفتوگۆ، و نمایشی زیندووی ڕێکخست کە تیشکی دەخستە سەر تەکنەلۆژیا پێشکەوتووەکان.",
                    "ئاسانکاری هاوکاری کرد لە نێوان ئەکادیمیا، کۆمپانیاکانی تەکنەلۆژیا، و کۆمەڵگاکانی خاوەنکاری."
                ],
                impact: [
                    "بە سەرکەوتوویی هەزاران بەشداربووی بەشدار کرد، هۆشیاری بە شێوەیەکی بەرچاو بەرز کردەوە دەربارەی ئەو دەرفەتانەی کە بە تەکنەلۆژیا دەبرێن بەڕێوە.",
                    "پەیوەندییەکانی لەگەڵ کۆمەڵگا و لایەنە پەیوەندیدارەکان بەهێز کرد."
                ]
            }
        ],
        disclaimer: "ئەو پڕۆژانەی لەم فایلەدا نیشان دراون هەڵبژاردەیەکن - هەڵمەتی جیاواز کە فراوانی و قووڵی تواناکانمان دەردەخەن. ئەمانە تەواوی چیرۆکەکە نین. لە پشت پەردەوە، PRt سەرکردایەتی و جێبەجێکردنی دەیان دەستپێشخەری دیکەی کردوە لە کەرتەکان، شارەکان، و ئاستەکان. لە چالاککردنی جەماوەرییەوە تا ستراتیژییەکانی ژووری دەستەی بەڕێوەبەران، کارەکەمان مەودای نایابی پەیوەندییە گشتییەکان دەگرێتەوە. هەر پڕۆژەیەک، چ لێرەدا باسكرابێت یان نا، واژۆی ئێمەی هەڵگرتووە: ستراتیژی بیرلێکراوە، شارەزایی کولتووری، و پابەندبوونی بێ وچان بە ئەنجامەکان.",
        proofInPractice: {
            title: "سەلماندن لە کردەدا",
            items: [
                {
                    title: "گۆڕینی پەیوەندییەکان",
                    description: "لە زاخۆوە تا بەسرە، PRt گفتوگۆی نیشتمانی بۆ کۆمپانیا پێشەنگەکانی پەیوەندی لە عێراق داگیرساند. لە ڕێگەی ئەزموونی غوڵپکەر و چیرۆکبێژی بەپێی داتا، ئێمە زیاتر لە ٢٠ ملیۆن دڵمان بەیەکەوە بەستەوە - تێکەڵکردنی داهێنان، تەکنەلۆژیا، و کولتوور لە یەک دەنگی بەهێزدا."
                },
                {
                    title: "دیدگای دارایی نیشتمانی",
                    description: "بە هاوبەشی لەگەڵ لایەنە نیشتمانییە سەرەکییەکان، PRt ستراتیژی پەیوەندی لە پشت یەکێک لە گرنگترین دەستپێشخەرییە ئابوورییەکانی عێراق داڕشت و بەڕێوەی برد - پڕکردنەوەی بۆشایی نێوان دیدگا، متمانە، و بەشداری گشتی."
                },
                {
                    title: "بەهێزکردنی داهێنەران",
                    description: "لە دەرکەوتنی بوێرانەی براندی BYD تا پەرەسەندنی کات بەسەربردن لە عێراق مۆڵ، PRt ئاهەنگ دەگێڕێت بۆ داهێنان و خەیاڵ لە پیشەسازییەکاندا. لە ڕێگەی چیرۆکبێژی و بەشداری ستراتیژی، ئێمە ئەو دەنگانە بەرز دەکەینەوە کە کولتوور و بازرگانی مۆدێرنی عێراق دروست دەکەن."
                }
            ]
        }
    },
    valueStats: [
        { value: 3.5, label: "ساڵانە بەڕێوە دەبرێت لە پەیوەندییە ستراتیژییەکانی کڕیار", prefix: '$', suffix: 'M+', decimals: 1 },
        { value: 2, label: "نووسینگەی ستراتیژی لەگەڵ کۆگایەکی تایبەت" },
        { value: 300, label: "مروج مەیدانی پیشەیی بڵاوکراونەتەوە لە سەرانسەری وڵات", suffix: '+' },
        { value: 30, label: "ئەندامی تیم لە سەرانسەری هەرێم", suffix: '+' }
    ],
    clients: {
        title: "کڕیار و هاوبەشییەکان",
        subtitle: "گەشتەکەمان هاوبەشی لەگەڵ سەرکردەکانی پیشەسازی، ڕێکخراوە جیهانییە ناسراوەکان، و دامەزراوە ناوخۆییە کاریگەرەکان لەخۆ دەگرێت. ئەوان متمانەیان پێمانە لە چیرۆکەکانیان - ڕێگەمان پێ دەدەن دەنگیان بەرز بکەینەوە و مەودای گەیشتنیان فراوان بکەین.",
        logos: enTranslations.clients.logos
    },
    careers: {
        title: "پەیوەندی بە تیمەکەمانەوە بکە",
        subtitle: "بە بەشێک لە تیمێک کە پەیوەندی لە دڵی عێراقدا پێناسە دەکاتەوە. ئێمە بە دوای کەسانی بە سۆز، داهێنەر، و خاوەن ئیرادەدا دەگەڕێین بۆ ئەوەی یارمەتیمان بدەن لە داڕشتنی نەوەی داهاتووی گێڕانەوەکان.",
        culture: {
            title: "کولتووری ئێمە",
            text: "ئێمە ژینگەیەکی هاوکاری و داهێنەرانە پەروەردە دەکەین کە تێیدا هەموو دەنگێک دەبیسترێت و هەموو بیرۆکەیەک بەرز دەنرخێنرێت. ئێمە بڕوامان بە فێربوونی بەردەوام، گەشەی پیشەیی، و پاراستنی هاوسەنگی تەندروست لە نێوان کار و ژیان هەیە.",
            perks: {
                title: "ئەوەی پێشکەشی دەکەین",
                items: ["مووچەی کێبڕکێکار", "مایەکانی تەندروستی و خۆشگوزەرانی", "پەرەپێدانی پیشەیی", "كاتژمێری کاری نەرم", "ئازادی داهێنان", "گەشت و پشووی تیم"]
            },
        },
        openings: {
            title: "هەلی کارەکان",
            cta: "داواکاری پێشکەش بکە",
            jobs: [
                { title: "بەڕێوەبەری باڵای پەیوەندییە گشتییەکان", location: "بەغدا", type: "تەواو کات" },
                { title: "پسپۆڕی میدیای دیجیتاڵ", location: "سلێمانی", type: "تەواو کات" },
                { title: "دیزاینەری گرافیک", location: "بەغدا", type: "گرێبەست" },
                { title: "ڕێکخەری چالاکییەکان", location: "لە دوورەوە/نیشتمانی", type: "نیوە کات" }
            ]
        }
    },
    contact: {
        title: "با پێکەوە داهێنان بکەین",
        subtitle: "چیرۆکێکت هەیە بۆ گێڕانەوە یان تەحدییەک بۆ چارەسەرکردن؟ ئێمە لێرەین بۆ گوێگرتن و هاوکاری.",
        details: {
            title: "پەیوەندیمان پێوە بکە",
            address: "١٢٣ شەقامی چیرۆکبێژ، مەنسوور، بەغدا، عێراق",
            email: "hello@prt.iq",
            phone: "+964 780 123 4567"
        },
        form: {
            name: "ناو",
            email: "ئیمەیڵ",
            message: "پەیام",
            submit: "ناردنی پەیام",
            sending: "ناردن...",
            success: {
                title: "سوپاس!",
                message: "پەیامەکەت نێردرا. بەمزووانە وەڵامت دەدەینەوە."
            }
        }
    },
    footer: {
        subtitle: "پردی نێوان کەلەپوور و داهێنان",
        email: "hello@prt.iq",
        copyright: "© {year} ئاژانسی PRt. هەموو مافەکان پارێزراون."
    }
};

export const translations: { [key: string]: Translations } = {
  en: enTranslations,
  ar: arTranslations,
  ku: kuTranslations,
};
