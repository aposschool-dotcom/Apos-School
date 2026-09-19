export interface CourseModule {
  title: string;
  subtitle?: string;
  items: string[];
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  duration: string;
  level: 'Beginner' | 'All Levels' | 'Intermediate' | 'Foundation';
  category: 'ai-marketing' | 'freelancing' | 'foundation' | 'advanced' | 'smm';
  badge?: string;
  description: string;
  topics: string[];
  modules?: CourseModule[];
  projects: string[];
  targetAudience: string;
  outcome: string;
  comingSoon?: boolean;
  eligibilityNote?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  city: string;
  course: string;
  story: string;
  earningsOrResult?: string;
  platform?: string;
  beforeAfter: {
    before: string;
    after: string;
  };
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface EnrollmentFormData {
  name: string;
  whatsapp: string;
  city: string;
  courseId: string;
  paymentPlan: 'full' | 'installments_4' | 'installments_10days';
  background: string;
  message?: string;
}
