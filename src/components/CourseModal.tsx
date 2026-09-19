import React from 'react';
import { Course } from '../types';
import {
  X,
  Clock,
  CheckCircle2,
  FolderGit2,
  GraduationCap,
  Sparkles,
  ArrowRight,
  Target,
  Award
} from 'lucide-react';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onEnroll: (courseId: string) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onEnroll
}) => {
  if (!course) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Header */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-2 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{course.badge || 'APOS Certification'}</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {course.title}
            </h3>

            <p className="text-xs sm:text-sm text-slate-300">
              {course.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
          
          {/* Key Quick Metadata */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 block font-medium">Duration:</span>
              <span className="font-bold text-slate-900">{course.duration}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Experience Level:</span>
              <span className="font-bold text-slate-900">{course.level}</span>
            </div>
            <div>
              <span className="text-slate-400 block font-medium">Projects Included:</span>
              <span className="font-bold text-emerald-700">{course.projects.length} Real Assignments</span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Program Overview
            </h4>
            <p className="text-sm text-slate-700 leading-relaxed">
              {course.description}
            </p>
          </div>

          {course.eligibilityNote && (
            <div className="flex items-start gap-2.5 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-xs text-amber-800">
              <span>🔒</span>
              <span>{course.eligibilityNote}</span>
            </div>
          )}

          {/* Syllabus Topics */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
              Complete Syllabus & Modules
            </h4>

            {course.modules && course.modules.length > 0 ? (
              <div className="space-y-4">
                {course.modules.map((mod, mi) => (
                  <div key={mod.title} className="rounded-2xl border border-slate-200 overflow-hidden">
                    <div className="bg-slate-900 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded-lg bg-amber-400 text-slate-900 flex items-center justify-center text-xs font-black shrink-0">
                          {mi + 1}
                        </span>
                        <span className="text-sm font-extrabold text-white">{mod.title}</span>
                      </div>
                      {mod.subtitle && (
                        <p className="text-[11px] text-slate-400 mt-1 pl-8">{mod.subtitle}</p>
                      )}
                    </div>
                    <div className="p-3 space-y-2 bg-white">
                      {mod.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {course.topics.map((topic, i) => (
                  <div
                    key={topic}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-800"
                  >
                    <span className="font-mono font-bold text-amber-600 shrink-0">
                      {i + 1 < 10 ? `0${i + 1}` : i + 1}.
                    </span>
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Practical Projects */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <FolderGit2 className="w-4 h-4 text-amber-500" />
              <span>Real Projects You Will Build</span>
            </h4>
            <div className="space-y-2">
              {course.projects.map((proj) => (
                <div
                  key={proj}
                  className="p-3 rounded-xl bg-emerald-50/80 border border-emerald-200/80 text-xs text-emerald-900 flex items-start gap-2.5 font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{proj}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Target Audience & Outcome */}
          <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200 space-y-2 text-xs">
            <div>
              <strong className="text-amber-900 block mb-0.5">Who Should Enroll:</strong>
              <span className="text-amber-950">{course.targetAudience}</span>
            </div>
            <div className="pt-2 border-t border-amber-200/70">
              <strong className="text-amber-900 block mb-0.5">Final Outcome:</strong>
              <span className="text-amber-950 font-semibold">{course.outcome}</span>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            <span>Course Fee: Rs. 5,000 (Available in Rs. 410 installments)</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="w-1/2 sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:bg-slate-200 transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onEnroll(course.id);
              }}
              className="w-1/2 sm:w-auto px-6 py-2.5 rounded-xl text-xs font-black text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-sm flex items-center justify-center gap-1.5"
            >
              <span>Enroll in Course</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
