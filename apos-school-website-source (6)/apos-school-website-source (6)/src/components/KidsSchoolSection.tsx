import React from 'react';
import { KIDS_PROGRAM } from '../data/aposData';
import {
  Sparkles,
  Cpu,
  Palette,
  Video,
  Gamepad2,
  Globe,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Heart,
  Smile
} from 'lucide-react';

interface KidsSchoolSectionProps {
  onEnrollKids: () => void;
}

export const KidsSchoolSection: React.FC<KidsSchoolSectionProps> = ({ onEnrollKids }) => {
  const iconMap: Record<string, React.ElementType> = {
    Cpu: Cpu,
    Palette: Palette,
    Video: Video,
    Gamepad2: Gamepad2,
    Globe: Globe,
    Lightbulb: Lightbulb
  };

  return (
    <section id="kids-school" className="py-20 bg-gradient-to-b from-amber-500/10 via-amber-500/5 to-white border-b border-amber-200/60 relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-amber-300/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/30 text-amber-950 border border-amber-400/50 text-xs font-extrabold uppercase tracking-wider shadow-xs">
            <Smile className="w-4 h-4 text-amber-700" />
            Special Dedicated Wing: APOS Kids School
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            {KIDS_PROGRAM.title}
          </h2>

          {/* Age Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-xl bg-slate-900 text-white font-bold text-sm shadow-sm">
            <span>Audience: Children Age {KIDS_PROGRAM.ageRange}</span>
          </div>

          {/* Core Philosophy Message from User specification */}
          <div className="pt-2">
            <blockquote className="text-lg sm:text-2xl font-extrabold text-blue-950 bg-white/80 backdrop-blur-xs p-5 sm:p-6 rounded-2xl border border-amber-300 shadow-sm max-w-2xl mx-auto">
              “{KIDS_PROGRAM.tagline}”
            </blockquote>
          </div>

          <p className="text-base text-slate-600 max-w-2xl mx-auto leading-relaxed pt-1">
            {KIDS_PROGRAM.description}
          </p>
        </div>

        {/* 6 Skill Modules Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {KIDS_PROGRAM.pillars.map((pillar, idx) => {
            const IconComp = iconMap[pillar.icon] || Sparkles;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-400 transition-all duration-200 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 border border-amber-200 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-amber-600">Module 0{idx + 1}</span>
                    <h3 className="text-lg font-extrabold text-slate-900">{pillar.title}</h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-slate-400">
                  <span>Hands-on mini project</span>
                  <span className="text-amber-600">Beginner Friendly</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reassurance & Enrollment CTA for Parents */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <ShieldCheck className="w-4 h-4" />
                Trusted By Parents Across Pakistan
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Turn Screen Time Into A High-Value Creative Superpower
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {KIDS_PROGRAM.benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-stretch sm:items-center lg:items-end gap-3">
              <button
                onClick={onEnrollKids}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl font-black text-sm sm:text-base bg-amber-400 text-slate-950 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2"
              >
                <span>Enroll in Kids Batch</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <span className="text-xs text-slate-400 text-center">
                Seats limited to ensure 1-on-1 child attention
              </span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
