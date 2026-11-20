// Future Ready Mentors Program (Teachers Training) - content and settings.
export const MENTORS_WHATSAPP_NUMBER = '923091639292';
export const MENTORS_WHATSAPP_DISPLAY = '0309-1639292';

// Put the YouTube video ID of the program video here (the part after v= or youtu.be/).
// Leave empty until the video is ready: the poster will show "Video coming soon".
export const MENTORS_VIDEO_ID = 'lvc-ERfnDlY';

export type MentorsProgram = 'general' | 'partner' | 'full';

const messages: Record<MentorsProgram, string> = {
  general:
    'Assalam o Alaikum! I want to register for the Future Ready Mentors Program (Teachers Training). Please guide me.',
  partner:
    'Assalam o Alaikum! I am interested in the Future Ready Mentors Program - PARTNER PROGRAM (2 months). Please guide me about registration.',
  full:
    'Assalam o Alaikum! I am interested in the Future Ready Mentors Program - FULL PROGRAM (3 months, with ads and marketing). Please guide me about registration.',
};

export const mentorsWhatsAppUrl = (program: MentorsProgram) =>
  `https://wa.me/${MENTORS_WHATSAPP_NUMBER}?text=${encodeURIComponent(messages[program])}`;

export const LEARN_TOPICS = [
  { title: 'AI Tools for Teachers', text: 'Use AI to save hours of work every week, in simple steps.' },
  { title: 'Lesson Planning with AI', text: 'Build clear lesson plans, worksheets and quizzes quickly.' },
  { title: 'Creating Learning Content', text: 'Make slides, notes and short videos that students enjoy.' },
  { title: 'Teaching Online', text: 'Run live classes smoothly on Zoom and WhatsApp.' },
  { title: 'Mobile-First Classroom', text: 'Teach and manage everything from a mobile phone.' },
  { title: 'Communicating with Parents', text: 'Build trust with clear, respectful communication.' },
  { title: 'Your Teaching Brand', text: 'Show your skills on social media so families find you.' },
  { title: 'Growing Your Classes', text: 'Learn how enrollment works and how a school grows step by step.' },
];

export const MENTORS_FAQ = [
  {
    q: 'Who can join this program?',
    a: 'Any teacher, tutor or trainer who wants to teach with AI and build an online teaching presence. Aspiring teachers are welcome too.',
  },
  {
    q: 'Do I need technical experience?',
    a: 'No. Everything is taught step by step in simple language, and you can follow along on a mobile phone.',
  },
  {
    q: 'Is the program online?',
    a: 'Yes. Classes are live on Zoom, held at night at a feasible time. Every class is recorded and the recording is provided to you. You also get 24-hour group support. This is the same for both programs.',
  },
  {
    q: 'What is the difference between the two programs?',
    a: 'The Partner Program (2 months) trains you, and then APOS partners with you for the first 3 months as 50-50 partners. After that you can run it as your own institute. The Full Program (3 months) is our main program: we teach you everything, and you run your own ads and marketing yourself.',
  },
  {
    q: 'Will I get course materials?',
    a: 'Yes. All the classes you will teach are provided to you as complete resources: PPTs, lectures and presentations. You also learn how to teach online step by step. This is the same for both programs.',
  },
  {
    q: 'What are the fees?',
    a: 'Partner Program: Rs. 8,000 in one payment, or Rs. 5,000 per month for 2 months (total Rs. 10,000). Full Program: Rs. 10,000 in one payment, or Rs. 4,000 per month for 3 months (total Rs. 12,000).',
  },
  {
    q: 'Can I get a refund?',
    a: 'Yes, for the Partner Program. If you tell us within the first 10 days, you get a full refund. If, after learning, you feel it is not beneficial for you, you can get a 50% refund.',
  },
  {
    q: 'Do I get a certificate?',
    a: 'Yes. A certificate is included in both programs.',
  },
  {
    q: 'Do you guarantee income?',
    a: 'No. We do not promise any income. We give you training, guidance and support. Your results depend on your effort and consistency.',
  },
  {
    q: 'How do I register?',
    a: 'Registration is only through WhatsApp. Tap any Register button on this page and a message is ready for you to send.',
  },
];
