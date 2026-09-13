import { Course, Testimonial, FaqItem } from '../types';

export const APOS_CONTACT = {
  phone: '03071639292',
  phoneFormatted: '0307-1639292',
  whatsappUrl: 'https://wa.me/923071639292?text=Hello%20APOS%20School%2C%20I%20want%20to%20get%20information%20about%20your%20courses.',
  email: 'aposschool@gmail.com',
  social: {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://www.youtube.com/@AmeerPopcornwala',
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

export const FREE_YOUTUBE_PLAYLISTS = [
  {
    id: 'graphic-video-module',
    moduleLabel: 'Module 1: Graphic Designing & Video Editing',
    playlistTitle: 'How to Start Freelancing (A Complete Guide) — Beginners to Advance',
    playlistId: 'PLdsMRnK6rkWTGbXI0S9BB9L0s4feKNppe',
    videoCount: 21,
  },
  {
    id: 'digital-marketing-module',
    moduleLabel: 'Module 2: Digital Marketing',
    playlistTitle: 'Master Mobile Freelancing: Create and Run Ads Directly from Your Smartphone',
    playlistId: 'PLdsMRnK6rkWSfB_iQ5Lz109uLRLa25r55',
    videoCount: 31,
  },
];

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

export interface FacebookReview {
  name: string;
  date: string;
  batch?: string;
  text: string;
}

export const FACEBOOK_REVIEWS: FacebookReview[] = [
  {
    name: 'Hani Afzal',
    date: '20 June',
    text: 'مجھے بہت فخر ہے کہ میں APOS کا حصہ بنی۔ میں شروع پی ہی سے اپنی زندگی میں کچھ منفرد کرنا چاہتی تھی، مالی طور پر خود مختار ہونا چاہتی تھی اور میرے خواب بھی بڑے تھے لیکن کوئی راستہ دکھانے والا نہیں تھا۔ اسی تلاش میں، میں نے APOS (امیر پاپ کارن والا اسکول) کو جوائن کیا۔ ان کی رہنمائی کیریئر اسکلز تک محدود نہیں بلکہ انہوں نے ہمارے اندر زندگی جینے کا ایک نیا حوصلہ پیدا کیا۔ دل سے دعائیں APOS کی پوری ٹیم کے لیے۔'
  },
  {
    name: 'Hina Anwar',
    date: '17 September 2024',
    batch: 'Batch #25',
    text: 'I had the honour of learning from Sir Ameer Popcornwala, the CEO of APOS, who guided me how to become a freelancer using an Android phone. As a student of Sir Ameer, I gained valuable knowledge in Canva, Social Media Marketing, AI. Beyond technical skills, I also learned life values like positivity and personal growth. I highly recommend APOS to everyone to expand their skills.'
  },
  {
    name: 'Farzana Khan',
    date: '17 September 2024',
    text: "My journey with APOS has been nothing short of amazing! The guidance and expertise provided by Sir Ameer have made a significant impact on my learning experience. His teaching methods are clear, engaging, and truly insightful, helping me gain both knowledge and confidence. The whole staff of APOS provides a supportive and encouraging environment, and I always feel motivated to push my limits."
  },
  {
    name: 'Sidra (Ahmed Hamdan)',
    date: '17 September 2024',
    text: "Being a student of this school I wanted to say the dedication to nurturing minds is truly remarkable. The learning experience at APOS is amazing. Thanks to APOS online school, I've gained skills that have boosted my confidence and opened up new opportunities in design and marketing. APOS truly delivers on its promise of transforming beginners into professionals, all while making learning enjoyable and accessible!"
  },
  {
    name: 'Sadaf Qutaiba',
    date: '22 June 2024',
    batch: "Sir Ameer's Canva Fiverr Course, Batch 22",
    text: "I'm thrilled to share my experience with Sir Ameer (the \"Popcorn Wala\") and Mam Razia Durrani. My journey on Facebook began in 2008, and I've been searching for a mentor and a platform like this for 5-6 years. Despite learning a lot on my own, I couldn't find a platform that offered such comprehensive training at an affordable price. Sir Ameer's Canva classes and Mam Razia Durrani's Social Media Marketing course have been a game-changer for me."
  },
  {
    name: 'Muhammad Ejaz',
    date: '22 June 2024',
    text: 'میں امیر پاپ کارن والا آن لائن سکول کا سٹوڈنٹ ہوں اور مجھے یہاں پڑھنے کا بہترین تجربہ حاصل ہوا ہے۔ اس سکول کے ٹیچرز نہایت قابل اور محنتی ہیں، جو ہر مضمون کو دلچسپ انداز میں سمجھانے کی صلاحیت رکھتے ہیں۔ یہاں کی آن لائن کلاسز نہایت منظم اور پُراثر ہیں، جو ہمیں گھروں میں بیٹھ کر بہترین تعلیم فراہم کرتی ہیں۔ اگر آپ معیاری تعلیم چاہتے ہیں تو امیر پاپ کارن والا آن لائن سکول کو ضرور منتخب کریں۔'
  },
  {
    name: 'Memoona Rubab',
    date: '30 April 2024',
    text: 'Highly recommended! AMEER POPCORNWALA ONLINE SCHOOL is a life changing online school where you learn how to earn 1 lac per month. Alhumdulilah I am student of AMEER POPCORNWALA ONLINE SCHOOL and now I am earning more than 1 lac per month. Thank you very much Sir Ameer Popcornwala and all teachers.'
  },
  {
    name: 'Tasleem Sarwar',
    date: '22 December 2023',
    text: 'السلام علیکم۔ امیر پاپکارن والا سکول، ایسا سکول جہاں سب سے پہلے آپ کو پہچان کروائی جاتی ہے، اعتماد اور ہمت اور حوصلہ دیا جاتا ہے، اور پھر جینے اور کمانے دونوں کے ہنر سکھائے جاتے ہیں۔ آپ کو نہ صرف اچھے قدم پر قدم پر مخلص رہنمائی کرنے والا استاد ملتا ہے بلکہ ایسا محسوس ہوتا ہے کہ آپ کے بھائی بہن کے لیے مخلصانہ مشورہ دیا جا رہا ہے۔ اس سکول نے سب کی رہنمائی نے ہمیں بہت اعتماد پر قابل بنایا اور جزاک اللہ خیرا کثیرا۔'
  },
  {
    name: 'Waseem Ghori',
    date: '22 June 2024',
    text: "While praising my teacher and their online school, I want to say that I have learned a lot from their hard work and knowledge. Their analytical approach and dedication provide me with answers to every question. I am thoroughly impressed by the method of my teacher's online school. It is a platform where education is imparted with creativity and innovative methods."
  },
  {
    name: 'Shamim Bilal',
    date: '22 June 2024',
    text: 'Sir Ameer is an exemplary and experienced educator who guides his students into the world of freelancing. His teachings have brought about immensely positive changes in the lives of his students. With his approach, Professor Ameer has not only made learning easy but has also left no gaps in their spiritual upbringing. He guides his students through every difficulty, always providing them with guidance and opportunities for solutions and success.'
  },
  {
    name: 'Abdul Ghaffar Balli',
    date: '23 June 2024',
    text: 'Ameer Sahb is a very great full person, his method of teaching is very easy & humble. He answers the student questions very politely, in Ameer Popcornwala Online School the environment of students among the teachers is very happy. You ask everything without any hesitation. Thanks Sir for being our teacher.'
  },
  {
    name: 'M Arshad',
    date: '23 June 2024',
    text: 'Sir Ameer taught us in a very excellent manner and explained everything very well. His way of explaining is very good, and his environment is also very conducive to learning. We learned a lot, not just graphic designing and social media, digital marketing, etc., but much more beyond that. We learned how to have a positive mindset, how to make good friends, how to improve our relationships with our people.'
  },
  {
    name: 'Sadia Sibghat',
    date: '23 June 2024',
    batch: 'Batch 23',
    text: "I watched so many videos but when I watched Sir Ameer's video I thought I should start from here. I learned so many things. I was thinking that I can't do it but the way Sir Ameer explained, the way he tells and discusses in different sessions he made me able to understand. Sir Ameer's teaching style is very simple and attractive, I highly recommend this school if you want to learn freelancing."
  },
  {
    name: 'Sana Aatif',
    date: '23 June 2024',
    text: 'My experience with Sir Ameer Popcorn Wala School has been absolutely amazing! They taught me Canva with exceptional clarity and detail, making every concept easy to understand. Sir Ameer\u2019s teaching style is highly engaging and interactive, which helped me quickly grasp all the features and techniques of Canva. His friendly and supportive attitude constantly inspired me.'
  },
  {
    name: 'M. Afzal Mughal (Empire Digital)',
    date: '26 June 2024',
    batch: "Sir Ameer's Canva Fiverr Course, Batch 22",
    text: "I'm thrilled to share my experience with Sir Ameer (the \"Popcorn Wala\") and Mam Razia Durrani. My journey on Facebook began in 2020 and I've been searching for a mentor and a platform like this for 3-4 years. That's why I'm so grateful to have found Sir Ameer Popcornwala Online School, where I could learn from experienced instructors at a nominal fee - literally below nominal!"
  },
  {
    name: 'Shafqat Khan',
    date: '17 September 2024',
    text: 'Assalaam u Alaikum, Main Shafqat Khan hoon aur District Gujrat se belong karta hoon. Aaj se 2 saal pehle maine Sir Ameer Popcornwala se Canva + Fiverr ka course kiya aur uske baad unhein ke school se Social Media Marketing ka course bhi kiya. Tamam courses boht shandaar thy, nehayat ache andaz se seekhaya gaya aur aaj bhi jab bhi mujhe support ki zarorat hoti hai Sir Ameer hazir ho jate hain.'
  },
  {
    name: 'Saher Shafique',
    date: '17 September 2024',
    batch: 'Batch 23',
    text: "Ameer Popcornwala Online School has been a game-changer for my education. The school offers a flexible and engaging learning environment, perfect for anyone looking to grow academically. The lessons are well-structured, and the interactive approach really helps in understanding difficult concepts. The quality of education is top-notch, and the convenience of learning from home has made it so much easier for me to stay consistent."
  },
  {
    name: 'Nida Abid',
    date: '17 September 2024',
    batch: 'Batch 23',
    text: "Sir ke 1 cheez positive thought convert krna apne students me bhoot acha he. Zindagi kabi kabi stuck ho jati he or kesi ese insan ki batye jinhe sun kr dobara koi umeed ki kiran nazar aye...ese insan hona bhot zaroori hota he zindagi me. I'm graphic designer and digital marketer, boht kuch seekhna he apse."
  }
];
