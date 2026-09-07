import React, { useState } from 'react';
import { TESTIMONIALS } from '../data/aposData';
import {
  Star,
  Quote,
  TrendingUp,
  ArrowRight,
  Sparkles,
  Award,
  CheckCircle2,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

export const SuccessStories: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'freelancing' | 'kids'>('all');

  return (
    <section id="success-stories" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5 text-emerald-600" />
            Real Results • Real Impact
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Student Success <span className="text-navy-900">Stories & Reviews</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            From absolute beginners to confident freelancers and digital service providers. See how APOS
            students transformed their digital skills and created sustainable earnings.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((story) => (
            <div
              key={story.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                
                {/* Header: Stars & Platform badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {story.platform && (
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-md bg-blue-50 text-blue-800 border border-blue-200">
                      {story.platform}
                    </span>
                  )}
                </div>

                {/* Achievement Highlight Pill */}
                {story.earningsOrResult && (
                  <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200/80 text-emerald-800 font-bold text-xs flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{story.earningsOrResult}</span>
                  </div>
                )}

                {/* Testimonial Quote */}
                <p className="text-sm text-slate-700 leading-relaxed italic">
                  "{story.story}"
                </p>

                {/* Before / After Box */}
                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200/70 text-xs space-y-2">
                  <div className="flex items-start gap-2 text-slate-500">
                    <span className="font-bold text-rose-600 uppercase text-[10px] tracking-wider shrink-0 mt-0.5">
                      Before:
                    </span>
                    <span>{story.beforeAfter.before}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-800 font-medium">
                    <span className="font-bold text-emerald-600 uppercase text-[10px] tracking-wider shrink-0 mt-0.5">
                      After:
                    </span>
                    <span>{story.beforeAfter.after}</span>
                  </div>
                </div>

              </div>

              {/* Author Footer */}
              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900">{story.name}</div>
                  <div className="text-xs text-slate-500">{story.role} • {story.city}</div>
                </div>
                <div className="text-[11px] font-semibold text-amber-600">
                  {story.course}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Social Proof Bar */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-slate-900 text-white flex flex-wrap items-center justify-around gap-6">
          <div>
            <div className="text-2xl font-black text-amber-400">4.9 / 5.0</div>
            <div className="text-xs text-slate-400">Average Student Satisfaction</div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
          <div>
            <div className="text-2xl font-black text-white">5,000+</div>
            <div className="text-xs text-slate-400">Pakistani Youth & Beginners Trained</div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block"></div>
          <div>
            <div className="text-2xl font-black text-emerald-400">100% Verified</div>
            <div className="text-xs text-slate-400">Project-Based Portfolios Built</div>
          </div>
        </div>

      </div>
    </section>
  );
};
