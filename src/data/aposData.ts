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
    tagline: 'A 120-day, step-by-step roadmap — from AI Foundation to Digital Marketing to Communication Mastery — designed to get you your first paying clients.',
    duration: '120 Days (90 Days Skill Mastery + 30 Days Communication Mastery)',
    level: 'All Levels',
    category: 'ai-marketing',
    badge: 'Flagship Program',
    description: 'Pakistan\'s first mobile freelancing school\'s flagship roadmap — master AI-powered graphic design and video editing, run real Facebook & Instagram marketing campaigns, and finish with a dedicated Communication Mastery month built to land your first 3 real clients.',
    topics: [
      'AI Foundation — Graphic Designing with AI (Canva + AI Tools)',
      'AI Foundation — Video Editing with AI',
      'Digital Marketing with AI — Facebook Management & Marketing',
      'Digital Marketing with AI — Instagram Management & Marketing',
      'Communication Mastery — Client Communication',
      'Communication Mastery — Client Hunting (Land 3 Real Clients)',
      'Communication Mastery — Ready-Made Client Proposal PDF',
    ],
    modules: [
      {
        title: 'Module 1: AI Foundation',
        subtitle: 'Build your core creative skillset using AI-powered tools',
        items: [
          'Graphic Designing with AI — learn design using Canva combined with AI tools',
          'Video Editing with AI — learn to edit professional videos using AI tools',
        ],
      },
      {
        title: 'Module 2: Digital Marketing with AI',
        subtitle: 'Learn to manage and market on the two platforms that matter most',
        items: [
          'Facebook Management & Marketing',
          'Instagram Management & Marketing',
        ],
      },
      {
        title: 'Module 3: Communication Mastery',
        subtitle: 'A full dedicated month — because communication is the #1 skill gap in Pakistan',
        items: [
          'Client Communication — how to talk to and retain clients professionally',
          'Client Hunting — a guided process to land your first 3 real clients',
          'Client Proposal PDF — a ready-made, pre-designed proposal template you simply customize with your own name and use immediately',
        ],
      },
    ],
    projects: [
      'AI-Designed Graphics & Edited Video Portfolio',
      'Live Facebook & Instagram Marketing Campaign',
      'Your First 3 Real Client Proposals (Sent & Followed Up)'
    ],
    targetAudience: 'Students, marketers, freelancers, and small business owners wanting modern competitive edge.',
    outcome: 'Deliver high-value marketing campaigns with 5x speed using cutting-edge AI assistance.'
  },
  {
    id: 'freelancing-abcd',
    title: 'Freelancing Foundation with AI',
    tagline: 'A gentle, zero-jargon roadmap to understanding freelancing and landing your first paid online client.',
    duration: 'Comprehensive Workshop',
    level: 'Foundation',
    category: 'freelancing',
    badge: 'Foundation Level',
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
    id: 'level-2-advanced-learning',
    title: 'Social Commerce with AI',
    tagline: 'Level 2 — Deep practical learning in social commerce and advanced digital marketing, powered by AI.',
    duration: 'Advanced Phase',
    level: 'Intermediate',
    category: 'advanced',
    badge: 'Coming Soon',
    comingSoon: true,
    description: 'Move beyond the main program into industry-standard, commercial-scale execution. Learn Social Commerce and Advanced Digital Marketing with AI, work on simulated and live client assignments, and polish your portfolio for high-ticket opportunities.',
    topics: [
      'Social Commerce with AI',
      'Advanced Digital Marketing with AI',
      'Advanced Industry Tools & Automation Workflows',
      'Practical Assignments with Instructor Feedback',
      'Real-world Simulated Client Projects',
      'Professional Freelancer & Agency Workflows',
      'Handling Difficult Clients & Milestone Contracts',
    ],
    projects: [
      'Full-service Client Deliverable Portfolio',
      'Agency-Style Case Study with Metrics',
      'Automated Invoicing and Client Onboarding Pipeline'
    ],
    targetAudience: 'Students who have already completed our Main Program and are earning from it.',
    outcome: 'Ready-to-showcase commercial portfolio that positions you as a capable professional.',
    eligibilityNote: 'This level is only for students who are already earning from our Main Program (AI + Digital Marketing Program).'
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
    answer: 'No! Beginners can start from ground zero. Our "Freelancing Foundation with AI" program assumes zero prior computer knowledge and takes you step-by-step from fundamental concepts to confident execution before you move into the Main Program.'
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

export const KIDS_ADMISSIONS_WHATSAPP = 'https://wa.me/923091639292?text=Assalam%20o%20Alaikum%2C%20I%20want%20to%20get%20information%20about%20APOS%20Kids%20AI%20Innovator%20Program%20admission.';
export const KIDS_ADMISSIONS_PHONE_FORMATTED = '0309-1639292';

export interface KidsLevel {
  id: string;
  levelNumber: number;
  title: string;
  duration: string;
  topics: string[];
  totalFeePKR: number;
  monthlyFeePKR: number;
  installments: number;
  eligibilityNote?: string;
  capstone?: string;
}

export const KIDS_AI_INNOVATOR_PROGRAM = {
  title: 'AI Innovator Program',
  tagline: 'Six-Month Learning Pathway — Learn, Build, Deploy, Market, Grow',
  description: 'A practical, project-based pathway for future-ready young learners. The program develops skills in a deliberate sequence: students first learn how to work with AI, then build and publish real digital projects, and finally learn how to present, market and responsibly monetize those skills.',
  levels: [
    {
      id: 'level-1',
      levelNumber: 1,
      title: 'Foundational AI Skills',
      duration: '2 Months',
      topics: [
        'Prompt engineering',
        'AI content creation',
        'Graphic design fundamentals',
        'Introductory web concepts',
        'Responsible AI use',
      ],
      totalFeePKR: 2500,
      monthlyFeePKR: 1250,
      installments: 2,
    },
    {
      id: 'level-2',
      levelNumber: 2,
      title: 'AI Development and Deployment',
      duration: '2 Months',
      topics: [
        'Websites and functional apps',
        'Git and GitHub workflows',
        'AI-assisted coding (ChatGPT, Codex, Google AI Studio)',
        'Deployment and testing (GitHub Pages, Vercel, Netlify)',
        'Advanced AI video projects',
      ],
      totalFeePKR: 3000,
      monthlyFeePKR: 1500,
      installments: 2,
      eligibilityNote: 'Requires successful completion of Level 1 or an approved skills assessment. A laptop is required.',
      capstone: 'Each student builds and deploys one complete website or useful app, maintains its GitHub repository, creates a short demonstration video, and presents the finished project.',
    },
    {
      id: 'level-3',
      levelNumber: 3,
      title: 'AI Marketing and Entrepreneurship',
      duration: '2 Months',
      topics: [
        'Digital business foundations & AI branding',
        'Content planning and social media marketing',
        'Paid advertising concepts and campaign metrics',
        'Sales communication and customer care',
        'Track A: E-Commerce & Social Commerce, or Track B: Digital Services Business',
      ],
      totalFeePKR: 3000,
      monthlyFeePKR: 1500,
      installments: 2,
      capstone: 'Each student prepares a brand identity, practical offer, content campaign, sales process, portfolio or store presence, and a parent-supervised 30-day launch plan.',
    },
  ] as KidsLevel[],
  learningModel: [
    'Three live online classes per week with guided practice and assignments',
    'Project-based learning: students demonstrate skills by building, presenting and improving real work',
    'Progress is based on participation, assignments, project quality and responsible technology use',
    'Public accounts, payments, client communication and selling activities require parent or guardian supervision',
  ],
  eligibility: [
    'Level 2 entry requires successful completion of Level 1 or an approved skills assessment',
    'A laptop is required for coding, GitHub, deployment and practical Level 2 projects',
    'Students need a stable internet connection and must attend live online classes regularly',
    'Assignments and capstone projects must be completed to demonstrate learning outcomes',
    'Parent or guardian supervision is required for public accounts, payments, client work and business activities',
  ],
  outcomes: [
    'Plan and build responsive websites with AI-assisted development tools',
    'Create simple functional apps and connect introductory data or API features',
    'Use GitHub to organize projects and publish work online',
    'Test, debug and improve projects instead of copying AI output blindly',
    'Produce advanced educational or promotional videos with responsible AI workflows',
    'Create a brand, content plan and digital marketing campaign',
    'Choose an e-commerce, social-commerce or digital-services pathway',
    'Prepare a portfolio, business offer and supervised 30-day launch plan',
  ],
};
