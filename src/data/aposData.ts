import { Course, Testimonial, FaqItem } from '../types';

export const APOS_CONTACT = {
  phone: '03071639292',
  phoneFormatted: '0307-1639292',
  whatsappUrl: 'https://wa.me/923071639292?text=Hello%20APOS%20School%2C%20I%20want%20to%20get%20information%20about%20your%20courses.',
  email: 'aposschool@gmail.com',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  },
  address: 'Online School - Serving Students Across Pakistan & Worldwide',
  fee: {
    total: 5000,
    durationDays: 120,
    installments4: 1250,
    installments10Days: 410,
    total10DayIntervals: 12,
  }
};

export const COURSES_DATA: Course[] = [
  {
    id: 'ai-digital-marketing',
    title: 'AI + Digital Marketing Program',
    tagline: 'Combine next-gen AI tools with powerful social advertising to scale businesses and freelance careers.',
    duration: '2 Months (Part of 120 Days Roadmap)',
    level: 'All Levels',
    category: 'ai-marketing',
    badge: 'Flagship Program',
    description: 'Master practical artificial intelligence workflows combined with high-converting digital marketing. Learn to craft strategies, run ROI-driven Meta campaigns, and create client-ready assets in minutes.',
    topics: [
      'Artificial Intelligence Fundamentals',
      'Modern AI Tools & Prompt Engineering',
      'Digital Marketing Basics & Psychology',
      'Facebook & Instagram Ads Architecture',
      'Social Media Marketing (SMM) Strategy',
      'AI-Powered Content & Copywriting',
      'Marketing Strategies & Funnel Design',
      'Client Handling, Pitching & Proposal Writing',
      'End-to-End Practical Projects'
    ],
    projects: [
      'Live Facebook Ad Campaign Setup & Pixel tracking',
      'AI-driven Content Calendar for 30 days',
      'Complete Client Pitch Deck & Contract Proposal'
    ],
    targetAudience: 'Students, marketers, freelancers, and small business owners wanting modern competitive edge.',
    outcome: 'Deliver high-value marketing campaigns with 5x speed using cutting-edge AI assistance.'
  },
  {
    id: 'freelancing-abcd',
    title: 'Freelancing ABCD Workshop',
    tagline: 'A gentle, zero-jargon roadmap to understanding freelancing and landing your first paid online client.',
    duration: 'Comprehensive Workshop',
    level: 'Beginner',
    category: 'freelancing',
    badge: 'Best For Beginners',
    description: 'A beginner-friendly introduction to the world of remote work and digital freelancing. Learn how beginners can pick in-demand skills, build a trustworthy profile, and start online earning step-by-step.',
    topics: [
      'What is Freelancing & How Independent Client Work Works',
      'Local Pakistani Market & Direct Client Acquisition Strategies',
      'High-Demand Digital Skills Overview for Local Businesses',
      'How Beginners Can Start Online Earning From Scratch in Pakistan',
      'Personal Skill Selection Roadmap',
      'Creating a Winning Service Portfolio, WhatsApp Catalog & Bio',
      'Avoiding Scams & Safe Payment Handling (JazzCash, EasyPaisa, Bank Transfer)'
    ],
    projects: [
      'Professional Digital Service Portfolio & Catalog',
      'Direct Pitching Templates for Local Brands & Businesses',
      'Personalized 60-Day Local Client Action Plan'
    ],
    targetAudience: 'Absolute beginners, college students, and housewives with zero prior online earning experience.',
    outcome: 'Clear clarity on your skillset, active service portfolio, and confident local client pitching strategy.'
  },
  {
    id: 'level-1-digital-skills',
    title: 'Level 1 Digital Skills Program',
    tagline: 'Build an unshakeable digital foundation, discover your natural strengths, and master essential tools.',
    duration: 'Foundation Phase',
    level: 'Foundation',
    category: 'foundation',
    badge: 'Core Foundation',
    description: 'Transform your mindset from passive internet consumer to an active digital creator. Build foundational computer literacy, explore modern online opportunities, and master digital productivity tools.',
    topics: [
      'Digital Mindset & Wealth Creation Psychology',
      'Landscape of Modern Online Opportunities',
      'Basic Digital Tools & Cloud Productivity',
      'Skill Discovery & Strengths Assessment',
      'APOS Structured Learning System',
      'Basic Visual Design & Communication Tools',
      'Online Research & Problem-Solving Capabilities'
    ],
    projects: [
      'Digital Skills Audit & Goal Tracker',
      'Mini Cloud Workspace Setup (Docs, Sheets, Drive, Canva)',
      'Foundational Digital Resume / One-page Profile'
    ],
    targetAudience: 'Anyone seeking a solid starting point without feeling overwhelmed by technical jargon.',
    outcome: 'Confidence navigating digital ecosystems and clarity on which specialized skill to pursue.'
  },
  {
    id: 'level-2-advanced-learning',
    title: 'Level 2 Advanced Learning Program',
    tagline: 'Deep practical learning, professional tool workflows, client assignments, and portfolio perfection.',
    duration: 'Advanced Phase',
    level: 'Intermediate',
    category: 'advanced',
    badge: 'Career Accelerator',
    description: 'Move beyond basics into industry-standard execution. Work on simulated and live client assignments, master advanced automation tools, and polish your personal portfolio for high-ticket opportunities.',
    topics: [
      'Advanced Industry Tools & Automation Workflows',
      'Practical Assignments with Instructor Feedback',
      'Real-world Simulated Client Projects',
      'Professional Freelancer & Agency Workflows',
      'Continuous Skill Improvement Systems',
      'Handling Difficult Clients & Milestone Contracts',
      'Collaborative Project Management'
    ],
    projects: [
      'Full-service Client Deliverable Portfolio',
      'Agency-Style Case Study with Metrics',
      'Automated Invoicing and Client Onboarding Pipeline'
    ],
    targetAudience: 'Students with basic knowledge ready to elevate their craft to commercial quality.',
    outcome: 'Ready-to-showcase commercial portfolio that positions you as a capable professional.'
  },
  {
    id: 'smm-batch-programs',
    title: 'SMM Batch Programs',
    tagline: 'Master Social Media Marketing, Facebook campaigns, ads budgeting, and client account growth.',
    duration: 'Specialized Batch',
    level: 'All Levels',
    category: 'smm',
    badge: 'High Market Demand',
    description: 'Focused hands-on training on social media marketing and paid advertising campaigns. Learn how to research target audiences, write persuasive ad copy, optimize budgets, and deliver measurable sales to businesses.',
    topics: [
      'Social Media Marketing Strategy & Brand Voice',
      'Facebook & Instagram Ad Campaigns from Scratch',
      'Ads Strategy: Top, Middle & Bottom of Funnel',
      'In-Depth Audience Research & Competitor Spying',
      'Campaign Optimization, CBO vs ABO & Scaling',
      'Creative Testing & High-Converting Video Scripts',
      'Client Projects & Reporting Dashboard Setup'
    ],
    projects: [
      'End-to-end Meta Business Manager configuration',
      'A/B Testing Creative Experiment for a Local Brand',
      'Monthly Client Performance Report Template'
    ],
    targetAudience: 'Aspiring social media managers, agency owners, e-commerce store operators.',
    outcome: 'Run profitable paid ad campaigns and comfortably manage social media retainers for clients.'
  }
];

export const KIDS_PROGRAM = {
  title: 'Preparing The Next Generation For The AI World',
  ageRange: '8 - 15 Years Old',
  tagline: "Don't let children only consume technology. Teach them to create with technology.",
  description: 'APOS Kids School is designed to foster critical thinking, curiosity, and technological fluency. Instead of mindlessly playing games or scrolling videos, kids learn to build digital games, design graphics, edit videos, and build simple web pages with AI.',
  pillars: [
    {
      title: 'AI Literacy',
      desc: 'Understanding how artificial intelligence works, safe internet practices, and interactive AI prompts.',
      icon: 'Cpu'
    },
    {
      title: 'Graphic Designing',
      desc: 'Creating visual storyboards, school posters, and digital art using modern kid-friendly creative tools.',
      icon: 'Palette'
    },
    {
      title: 'Video Editing',
      desc: 'Crafting fun short videos, animation cuts, and voiceovers that turn imagination into visual stories.',
      icon: 'Video'
    },
    {
      title: 'AI Games Creation',
      desc: 'Learning logic, game loops, character design, and creating interactive playable games with AI assistance.',
      icon: 'Gamepad2'
    },
    {
      title: 'Website Creation',
      desc: 'Building their own personal digital presence, school portfolio, and creative project showcase.',
      icon: 'Globe'
    },
    {
      title: 'Creative Thinking',
      desc: 'Developing resilience, problem-solving, and entrepreneurial confidence that prepares them for any future.',
      icon: 'Lightbulb'
    }
  ],
  benefits: [
    'Supervised, child-safe interactive environment',
    'Practical fun projects every single week',
    'Confidence booster for school presentations & future careers',
    'Turns screen time into productive creative time'
  ]
};

export const PHILOSOPHY_STEPS = [
  {
    step: '01',
    title: 'Learn',
    tagline: 'Active Concepts & AI Tools',
    urdu: 'سیکھیں',
    description: 'No boring lectures or outdated textbook theories. We break down modern digital concepts into digestible, practical lessons using state-of-the-art AI tools.',
    bulletPoints: [
      'Interactive visual modules',
      'Hands-on demonstrations with live screens',
      'Direct exposure to ChatGPT, Midjourney, Meta Ads Manager, & Canva'
    ]
  },
  {
    step: '02',
    title: 'Practice',
    tagline: 'Daily Exercises & Feedback',
    urdu: 'مشق کریں',
    description: 'Skill is built in the fingers, not just in the mind. Students complete daily bite-sized tasks with personal mentorship and group feedback.',
    bulletPoints: [
      'Task-based checkpoints after every topic',
      'Mentor reviews with voice notes and screen recordings',
      'Correction of real beginner mistakes before pitching clients'
    ]
  },
  {
    step: '03',
    title: 'Build',
    tagline: 'Real Projects & Portfolios',
    urdu: 'بنائیں',
    description: 'Instead of memorizing definitions, students create tangible digital assets: ad campaigns, websites, video reels, and client brand kits.',
    bulletPoints: [
      'Proof-of-work portfolio link',
      'Real case studies that convince skeptical business owners',
      'Showcase your work inside our community gallery'
    ]
  },
  {
    step: '04',
    title: 'Earn',
    tagline: 'Local Clients & Opportunities',
    urdu: 'کمائیں',
    description: 'The ultimate finish line is financial independence. We train you how to locate paying clients in the Pakistani local market, connect with businesses, and close monthly retainers.',
    bulletPoints: [
      'Local client outreach scripts that actually get replies',
      'Pakistani banking, JazzCash & EasyPaisa direct client payments',
      'Confidence to handle negotiations and deliver paid results'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Practical Learning',
    description: 'Real projects instead of dry theory. You learn by doing, clicking, designing, and launching.',
    icon: 'Hammer'
  },
  {
    title: 'AI Integration',
    description: 'Learn modern AI tools used in today’s world so you work 5x faster than conventional freelancers.',
    icon: 'Sparkles'
  },
  {
    title: 'Community Support',
    description: 'Learn together in a warm, motivating environment where no question is treated as silly.',
    icon: 'Users'
  },
  {
    title: 'Experienced Mentorship',
    description: 'Personal guidance from mentors who actively work with clients and understand market realities.',
    icon: 'Award'
  },
  {
    title: 'Project-Based Learning',
    description: 'Graduate with an impressive live portfolio that speaks for your skills before you say a word.',
    icon: 'FolderGit2'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Muhammad Usman',
    role: 'Freelance SMM & AI Content Specialist',
    city: 'Faisalabad',
    course: 'AI + Digital Marketing Program',
    story: 'Before APOS, I was confused by countless YouTube videos that never taught practical client hunting. Within 45 days of APOS hands-on training, I created a full Facebook Ads campaign for a local clothing brand and landed my first paid monthly retainer.',
    earningsOrResult: 'Earned Rs. 65,000 in First Month',
    platform: 'Local Business Retainer',
    beforeAfter: {
      before: 'Watching random tutorials with zero confidence',
      after: 'Managing 2 active monthly ad retainers for local brands'
    },
    rating: 5
  },
  {
    id: 'test-2',
    name: 'Ayesha Fatima',
    role: 'Housewife & Graphic Designer',
    city: 'Lahore',
    course: 'Level 1 & Level 2 Digital Skills',
    story: 'As a mother of two, I needed a skill I could practice from home with flexible hours. APOS School’s step-by-step guidance and community support gave me the belief that I could earn with dignity from my own living room. I now design social media posts and branding for local home bakers and boutiques.',
    earningsOrResult: 'Rs. 45,000/month from Home',
    platform: 'Local Brands & Social Media',
    beforeAfter: {
      before: 'Dependent on family for every small expense',
      after: 'Financially independent home entrepreneur with regular clients'
    },
    rating: 5
  },
  {
    id: 'test-3',
    name: 'Bilal Ahmed',
    role: 'College Student & Video Editor',
    city: 'Rawalpindi',
    course: 'Freelancing ABCD Workshop',
    story: 'The 410 rupee every 10th day installment plan was a lifesaver for my student pocket money. APOS taught me how to reach out to local Pakistani business owners, create sample reels for restaurants, and close paid monthly video editing packages.',
    earningsOrResult: 'Rs. 55,000/month from 3 Local Clients',
    platform: 'Direct Client Outreach',
    beforeAfter: {
      before: 'No idea how to find paying clients in the local market',
      after: 'Handling monthly video reels for 3 local cafes and shops'
    },
    rating: 5
  },
  {
    id: 'test-4',
    name: 'Hamza Tariq',
    role: 'E-commerce Media Buyer',
    city: 'Karachi',
    course: 'SMM Batch Programs',
    story: 'Facebook ads always felt like gambling until APOS explained audience targeting and ad spend optimization. My ROAS jumped from 1.5x to 4.2x on real product tests for local Shopify and retail businesses in Pakistan.',
    earningsOrResult: 'Generated Rs. 850k+ in client store revenue',
    platform: 'Meta Ads Manager (Pakistan)',
    beforeAfter: {
      before: 'Wasting ad budget with zero conversions',
      after: 'Predictable ad scaling with confident data analysis'
    },
    rating: 5
  },
  {
    id: 'test-5',
    name: 'Mrs. Tahira & Rayan (Age 11)',
    role: 'APOS Kids School Parent',
    city: 'Islamabad',
    course: 'APOS Kids School',
    story: 'My son was addicted to mobile games. Enrolling him in APOS Kids School transformed him. He now creates his own game sprites and builds simple AI stories. The mentors are patient, loving, and truly encouraging.',
    earningsOrResult: 'Built 3 playable games & 1 portfolio website',
    platform: 'Kids AI Showcase',
    beforeAfter: {
      before: 'Hours of unproductive screen scrolling',
      after: 'Young digital creator with proud school presentations'
    },
    rating: 5
  },
  {
    id: 'test-6',
    name: 'Zeeshan Ali',
    role: 'Digital Marketing & Client Specialist',
    city: 'Multan',
    course: 'AI + Digital Marketing Program',
    story: 'APOS taught us practical direct client pitching through WhatsApp and Instagram for local businesses. I closed two real estate agencies for social media management in Multan within two weeks of completing the course.',
    earningsOrResult: 'Rs. 70,000 Monthly Retainer',
    platform: 'Local Business Outreach',
    beforeAfter: {
      before: 'Struggling to find paying local clients',
      after: 'Managing marketing for 2 real estate firms in Multan'
    },
    rating: 5
  }
];

export const FAQS: FaqItem[] = [
  {
    question: 'What is APOS School?',
    answer: 'APOS School (Ameer PopcornWala Online School) is a modern digital skills and AI learning platform dedicated to empowering Pakistani youth, beginners, housewives, and professionals with real-world practical skills in AI, Digital Marketing, Freelancing, Video Editing, and Graphic Design.'
  },
  {
    question: 'Who can join APOS School?',
    answer: 'Anyone with a basic computer or smartphone and a desire to learn! Our courses are specifically designed for students, complete beginners, professionals wanting to upskill, housewives seeking home-based income, and entrepreneurs looking to grow their businesses.'
  },
  {
    question: 'Do you provide practical learning instead of just recorded lectures?',
    answer: 'Yes, 100%! We strictly practice our "Learn → Practice → Build → Earn" philosophy. Students do not just passively watch videos; they work on live assignments, use real software tools, receive personalized mentor feedback, and graduate with a finished portfolio.'
  },
  {
    question: 'Is this only for professionals with prior technical backgrounds?',
    answer: 'No! Beginners can start from ground zero. Programs like our "Freelancing ABCD Workshop" and "Level 1 Digital Skills Program" assume zero prior computer knowledge and take you step-by-step from fundamental concepts to confident execution.'
  },
  {
    question: 'What is the fee and installment structure?',
    answer: 'Our total comprehensive course fee is only Rs. 5,000 for the full 120 Days duration. To make education universally accessible, you can pay in 4 flexible installments, or take advantage of our unique mini-plan of just Rs. 410 every 10th day (approx. Rs. 41/day)!'
  },
  {
    question: 'How does the community-based learning model work?',
    answer: 'When you enroll, you are welcomed into our active student learning community on WhatsApp. You can ask questions 24/7, get instant peer support, participate in live weekly Q&A sessions with Ameer PopcornWala and mentors, and collaborate with fellow learners.'
  },
  {
    question: 'How do I enroll or get in touch?',
    answer: 'You can easily click the "Enroll Now" button on this website or reach out directly to our official WhatsApp support number at 0307-1639292. Our admissions team will guide you through batch timing and payment confirmation.'
  }
];
