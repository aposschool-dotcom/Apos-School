import React, { useState } from 'react';
import { Course } from '../types';
import { COURSES_DATA } from '../data/aposData';
import {
  Sparkles,
  Clock,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  GraduationCap,
  Briefcase,
  Layers,
  ChevronRight
} from 'lucide-react';

interface CoursesSectionProps {
  onSelectCourse: (course: Course) => void;
  onEnrollCourse: (courseId: string) => void;
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({
  onSelectCourse,
  onEnrollCourse
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Courses (5)' },
    { id: 'ai-marketing', label: 'AI & Digital Marketing' },
    { id: 'freelancing', label: 'Freelancing Workshop' },
    { id: 'foundation', label: 'Level 1 Foundation' },
    { id: 'advanced', label: 'Level 2 Advanced' },
    { id: 'smm', label: 'SMM Batch' },
  ];

  const filteredCourses = selectedCategory === 'all'
    ? COURSES_DATA
    : COURSES_DATA.filter((c) => c.category === selectedCategory);

  return (
    <section id="courses" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5 text-amber-600" />
            Market-Relevant Curriculum
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Flagship <span className="text-navy-900">Programs & Courses</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Every course is engineered to deliver immediate practical competence. Choose your starting
            point and master high-demand digital skills with hands-on mentor support.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <div
              key={course.id}
              className="rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Top / Header */}
              <div className="p-6 sm:p-7 space-y-4">
                
                {/* Badge & Level */}
                <div className="flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-800 border border-amber-200">
                    <Sparkles className="w-3 h-3 text-amber-500" />
                    {course.badge || 'APOS Certified'}
                  </span>
                  
                  <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 border border-slate-200">
                    {course.level}
                  </span>
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-blue-900 transition-colors leading-snug">
                    {course.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2 line-clamp-2">
                    {course.tagline}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200/70">
                  <Clock className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Duration: {course.duration}</span>
                </div>

                {/* Core Topics Checklist */}
                <div className="space-y-2 pt-2">
                  <div className="text-[11px] uppercase tracking-wider font-extrabold text-slate-400">
                    Key Topics Covered:
                  </div>
                  <ul className="space-y-1.5">
                    {course.topics.slice(0, 5).map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{topic}</span>
                      </li>
                    ))}
                    {course.topics.length > 5 && (
                      <li className="text-[11px] font-bold text-amber-700 pl-5">
                        +{course.topics.length - 5} more practical modules
                      </li>
                    )}
                  </ul>
                </div>

              </div>

              {/* Card Footer Action Area */}
              <div className="p-6 bg-slate-50/70 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500 pb-1">
                  <span>Projects: <strong className="text-slate-800">{course.projects.length} Real Tasks</strong></span>
                  <span className="text-emerald-700 font-bold">Enrollment Open</span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectCourse(course)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-200 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>View Syllabus</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onEnrollCourse(course.id)}
                    className="w-full py-2.5 px-3 rounded-xl text-xs font-extrabold text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-xs flex items-center justify-center gap-1"
                  >
                    <span>Join Now</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Banner for All Courses Included */}
        <div className="mt-12 rounded-2xl bg-white border border-slate-200 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-slate-900">
              Not sure which course is right for you?
            </h4>
            <p className="text-sm text-slate-600">
              Our 120-Day Comprehensive Roadmap guides you through foundation, AI tools, and freelancing step by step!
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => onEnrollCourse('ai-digital-marketing')}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold bg-slate-900 text-white hover:bg-slate-800 transition-all shadow-sm"
            >
              Get Counseling & Enroll
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
