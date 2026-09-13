import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { PhilosophySection } from './components/PhilosophySection';
import { CoursesSection } from './components/CoursesSection';
import { KidsSchoolSection } from './components/KidsSchoolSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { FacebookReviewsSection } from './components/FacebookReviewsSection';
import { CommunitySection } from './components/CommunitySection';
import { FreeClassesSection } from './components/FreeClassesSection';
import { PricingSection } from './components/PricingSection';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CourseModal } from './components/CourseModal';
import { EnrollmentModal } from './components/EnrollmentModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Course } from './types';

export default function App() {
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [enrollmentOpen, setEnrollmentOpen] = useState(false);
  const [enrollCourseId, setEnrollCourseId] = useState<string | undefined>(undefined);

  const handleOpenEnrollment = (courseId?: string) => {
    setEnrollCourseId(courseId);
    setEnrollmentOpen(true);
  };

  const handleExploreCourses = () => {
    const el = document.getElementById('courses');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950">
      {/* Navigation */}
      <Navbar onOpenEnrollment={handleOpenEnrollment} />

      {/* Main Content Area */}
      <main className="flex-1">
        {/* 1. Hero */}
        <Hero
          onOpenEnrollment={() => handleOpenEnrollment()}
          onExploreCourses={handleExploreCourses}
        />

        {/* 2. About APOS School */}
        <AboutSection />

        {/* 3. Learning Philosophy (Learn -> Practice -> Build -> Earn) */}
        <PhilosophySection onOpenEnrollment={() => handleOpenEnrollment()} />

        {/* 4. Courses Catalog */}
        <CoursesSection
          onSelectCourse={(course) => setSelectedCourse(course)}
          onEnrollCourse={(courseId) => handleOpenEnrollment(courseId)}
        />

        {/* 5. APOS Kids School Dedicated Section */}
        <KidsSchoolSection
          onEnrollKids={() => handleOpenEnrollment('kids-school')}
        />

        {/* 6. Why Choose APOS School */}
        <WhyChooseUs />

        {/* 7. Real Student Reviews (from Facebook) */}
        <FacebookReviewsSection />

        {/* 8. Learning Community */}
        <CommunitySection onOpenEnrollment={() => handleOpenEnrollment()} />

        {/* 8.5 Free YouTube Classes for students who can't afford the fee */}
        <FreeClassesSection />

        {/* 9. Fee & Enrollment Breakdown */}
        <PricingSection onOpenEnrollment={() => handleOpenEnrollment()} />

        {/* FAQ Section */}
        <FaqSection />

        {/* 10. Contact & Direct Admissions Desk */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenEnrollment={() => handleOpenEnrollment()} />

      {/* Modals & Floating CTAs */}
      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onEnroll={(courseId) => {
          setSelectedCourse(null);
          handleOpenEnrollment(courseId);
        }}
      />

      <EnrollmentModal
        isOpen={enrollmentOpen}
        onClose={() => setEnrollmentOpen(false)}
        preselectedCourseId={enrollCourseId}
      />

      <FloatingWhatsApp />
    </div>
  );
}
