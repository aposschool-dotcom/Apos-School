import React, { useState } from 'react';
import { PHILOSOPHY_STEPS } from '../data/aposData';
import {
  BookOpen,
  CheckCircle2,
  FolderGit2,
  Coins,
  ArrowRight,
  Sparkles,
  Layers
} from 'lucide-react';

interface PhilosophySectionProps {
  onOpenEnrollment: () => void;
}

export const PhilosophySection: React.FC<PhilosophySectionProps> = ({ onOpenEnrollment }) => {
  const [activeStep, setActiveStep] = useState(0);

  const icons = [BookOpen, CheckCircle2, FolderGit2, Coins];

  return (
    <section id="philosophy" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            Our Proven Learning Engine
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Learn → Practice → Build → Earn
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Students at APOS School don't just passively watch videos. We follow a 4-tier practical pipeline
            that transforms curious learners into capable, portfolio-backed professionals.
          </p>
        </div>

        {/* 4 Steps Navigation Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-8">
          {PHILOSOPHY_STEPS.map((step, idx) => {
            const IconComp = icons[idx];
            const isActive = activeStep === idx;
            return (
              <button
                key={step.title}
                onClick={() => setActiveStep(idx)}
                className={`p-4 rounded-2xl text-left transition-all duration-200 border relative ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 border-amber-300 shadow-lg shadow-amber-400/20 scale-102'
                    : 'bg-slate-800/80 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm ${
                      isActive ? 'bg-slate-950 text-amber-400' : 'bg-slate-700 text-slate-200'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-xs font-mono font-bold ${
                      isActive ? 'text-slate-900' : 'text-slate-400'
                    }`}
                  >
                    Phase {step.step}
                  </span>
                </div>

                <div className="font-extrabold text-base sm:text-lg">{step.title}</div>
                <div
                  className={`text-xs mt-0.5 font-medium ${
                    isActive ? 'text-slate-900' : 'text-slate-400'
                  }`}
                >
                  {step.tagline}
                </div>

                {/* Urdu subtitle badge */}
                <div
                  className={`text-[12px] font-bold mt-2 pt-2 border-t ${
                    isActive ? 'border-slate-900/20 text-slate-950 font-serif' : 'border-slate-700 text-amber-400 font-serif'
                  }`}
                >
                  {step.urdu}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div className="rounded-3xl bg-slate-800/90 border border-slate-700/90 p-6 sm:p-10 shadow-2xl backdrop-blur-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-lg bg-amber-400/20 text-amber-400 font-mono text-xs font-bold border border-amber-400/30">
                  STEP {PHILOSOPHY_STEPS[activeStep].step}
                </span>
                <span className="text-xl font-black text-white">
                  {PHILOSOPHY_STEPS[activeStep].title} Phase
                </span>
                <span className="text-amber-400 text-sm font-serif">
                  ({PHILOSOPHY_STEPS[activeStep].urdu})
                </span>
              </div>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed">
                {PHILOSOPHY_STEPS[activeStep].description}
              </p>

              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-amber-400">
                  What Happens In This Phase:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-1 gap-2.5">
                  {PHILOSOPHY_STEPS[activeStep].bulletPoints.map((point) => (
                    <div
                      key={point}
                      className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/60 border border-slate-700/70 text-sm text-slate-200"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={onOpenEnrollment}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 transition-all shadow-md shadow-amber-400/20"
                >
                  <span>Start This Journey With Us</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <span className="text-xs text-slate-400">
                  Complete roadmap spans 120 days of guided growth
                </span>
              </div>
            </div>

            {/* Right Summary Graphic */}
            <div className="lg:col-span-5 bg-slate-900/90 rounded-2xl border border-slate-700 p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <span className="text-xs font-semibold text-slate-400">APOS Systematic Method</span>
                <span className="text-xs font-bold text-emerald-400">Outcome-Driven</span>
              </div>

              <div className="space-y-3">
                <div className="text-xs text-slate-300">
                  <strong className="text-white block mb-1">Traditional Learning:</strong>
                  Watch 100 hours of boring theory → Forget 80% → Still don't know how to handle real clients.
                </div>
                
                <div className="p-3.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-200 space-y-1">
                  <strong className="text-amber-300 flex items-center gap-1.5 font-bold">
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    APOS School Method:
                  </strong>
                  <div>
                    Learn immediate concepts → Apply on today's assignment → Ship completed project to portfolio → Pitch for real orders.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-slate-400 border-t border-slate-800">
                <span>Personal Feedback Provided</span>
                <span className="text-amber-400 font-semibold">100% Practical</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
