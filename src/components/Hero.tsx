import React from 'react';
import { APOS_CONTACT } from '../data/aposData';
import { ArrowRight, Smartphone, Gift, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onExploreCourses: () => void;
}

const steps = [
  { n: '1', title: 'Join 2 free classes', text: 'See if the course suits you. Nothing to pay.' },
  { n: '2', title: 'Learn for 60 days', text: 'One class every night on your phone.' },
  { n: '3', title: 'Practice and earn', text: 'Last 30 days: real projects and your first clients.' },
];

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onExploreCourses }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-10 pb-16 lg:pt-16 lg:pb-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-xs sm:text-sm">
              <Smartphone className="w-4 h-4 text-amber-300" />
              <span className="text-slate-200">Pakistan's First Mobile Freelancing School</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Learn a Skill on Your Phone.{' '}
              <span className="text-amber-400">Start Earning.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed">
              Graphic designing, video editing, social media marketing and Meta ads, with the help of AI.
              Easy words. No laptop. No experience needed.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={onOpenEnrollment}
                className="inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-base text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/20"
              >
                Join Free Classes <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={onExploreCourses}
                className="px-6 py-4 rounded-xl font-semibold text-base text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                See the Course
              </button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 text-sm text-slate-300">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> 90 days</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Rs. 500 every 10 days</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> WhatsApp: {APOS_CONTACT.phoneFormatted}</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-slate-800/70 border border-slate-700 p-6 space-y-4">
              <div className="text-sm font-bold text-amber-300 uppercase tracking-wider">How it works</div>
              {steps.map((s) => (
                <div key={s.n} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-amber-400 text-slate-950 font-black flex items-center justify-center shrink-0">{s.n}</div>
                  <div>
                    <div className="font-bold text-white">{s.title}</div>
                    <div className="text-sm text-slate-300">{s.text}</div>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-3 rounded-2xl bg-emerald-900/60 border border-emerald-700/50 p-3 text-sm text-emerald-50">
                <Gift className="w-5 h-5 text-amber-400 shrink-0" />
                Free on completion: TikTok Ads Mastery course
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
