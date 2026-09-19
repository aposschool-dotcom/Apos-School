import React from 'react';
import { AposLogo } from './AposLogo';
import { APOS_CONTACT } from '../data/aposData';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Users,
  Award,
  Play,
  TrendingUp,
  Laptop,
  Briefcase,
  Zap,
  Smartphone
} from 'lucide-react';

interface HeroProps {
  onOpenEnrollment: () => void;
  onExploreCourses: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEnrollment, onExploreCourses }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white pt-10 pb-20 lg:pt-16 lg:pb-28">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-600/10 blur-3xl pointer-events-none rounded-full"></div>
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-500/10 blur-3xl pointer-events-none rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Value Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-7 text-left">
            
            {/* Institution Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 backdrop-blur-xs text-xs sm:text-sm text-slate-200">
              <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-ping"></span>
              <span className="font-semibold text-amber-400">APOS School</span>
              <span className="text-slate-400">•</span>
              <Smartphone className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-slate-300">Pakistan's First Mobile Freelancing School</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
              Learn Modern Digital Skills.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500">
                Build Your Future.
              </span>
            </h1>

            {/* Subheadline from User Specification */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              APOS School helps you learn <span className="text-amber-300 font-medium">AI</span>,{' '}
              <span className="text-amber-300 font-medium">Digital Marketing</span>,{' '}
              <span className="text-amber-300 font-medium">Freelancing</span>,{' '}
              <span className="text-amber-300 font-medium">Graphic Design</span>,{' '}
              <span className="text-amber-300 font-medium">Video Editing</span> and other future skills through
              practical project-based learning.
            </p>

            {/* Urdu Cultural Resonance Sub-badge */}
            <div className="inline-block bg-slate-800/50 border border-slate-700/60 rounded-xl px-4 py-2 text-sm text-amber-200/90 font-medium">
              <span className="font-serif">سیکھیں، عمل کریں، پورٹ فولیو بنائیں اور آن لائن کمائیں — پریکٹیکل پروجیکٹ لرننگ</span>
            </div>

            {/* Main Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenEnrollment}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-bold text-sm sm:text-base text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/20 group"
              >
                <span>Join Our Courses</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onExploreCourses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm sm:text-base text-white bg-slate-800/90 hover:bg-slate-700 border border-slate-700 active:scale-95 transition-all"
              >
                <span>Explore Programs</span>
              </button>

              <a
                href={APOS_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-semibold text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-500/30 transition-all"
              >
                <span>Quick WhatsApp: {APOS_CONTACT.phoneFormatted}</span>
              </a>
            </div>

            {/* Key Trust Highlights */}
            <div className="pt-4 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <span className="text-2xl font-black text-amber-400">120 Days</span>
                <span className="text-xs text-slate-400 font-medium">Practical Roadmap</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-white">Rs. 410</span>
                <span className="text-xs text-slate-400 font-medium">Every 10th Day Plan</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-emerald-400">5,000+</span>
                <span className="text-xs text-slate-400 font-medium">Students Enrolled</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black text-sky-400">100%</span>
                <span className="text-xs text-slate-400 font-medium">Project Based</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Learning Workspace / Interactive Badge */}
          <div className="lg:col-span-5 relative">
            
            {/* Outer Decorative Glow Container */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Floating Badge Top-Right */}
              <div className="absolute -top-4 -right-2 sm:-right-4 z-20 bg-amber-400 text-slate-950 rounded-2xl p-3 shadow-xl flex items-center gap-2.5 border border-amber-300 transform rotate-2 hover:rotate-0 transition-transform">
                <div className="p-1.5 bg-slate-950 rounded-xl text-amber-400">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-wider font-extrabold">Next-Gen Curriculum</div>
                  <div className="text-xs font-black">AI Integrated 2026</div>
                </div>
              </div>

              {/* Main Digital Workspace Card */}
              <div className="rounded-3xl bg-slate-850/90 border border-slate-700/80 p-5 sm:p-6 shadow-2xl backdrop-blur-md relative overflow-hidden">
                
                {/* Header of Workspace */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
                  <div className="flex items-center gap-3">
                    <AposLogo size={42} />
                    <div>
                      <div className="text-sm font-bold text-white flex items-center gap-1.5">
                        APOS Learning Portal
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      </div>
                      <div className="text-[11px] text-slate-400">Live Hands-On Student Lab</div>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                    Active Session
                  </span>
                </div>

                {/* Simulated Workspace Screen */}
                <div className="mt-4 space-y-3">
                  
                  {/* Skill Card 1: AI Prompting & Marketing */}
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-amber-400/50 transition-colors">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-amber-300 flex items-center gap-1.5">
                        <Zap className="w-3.5 h-3.5 text-amber-400" />
                        AI Marketing Workflow
                      </span>
                      <span className="text-emerald-400 font-bold text-[11px]">88% Complete</span>
                    </div>
                    <div className="text-[12px] text-slate-300 mb-2">
                      Prompt Engineering → Midjourney Creative → Meta Ad Copy
                    </div>
                    <div className="w-full h-1.5 bg-slate-700 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-amber-400 to-emerald-400 w-[88%]"></div>
                    </div>
                  </div>

                  {/* Skill Card 2: Freelancing ABCD Profile */}
                  <div className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/70 hover:border-emerald-400/50 transition-colors">
                    <div className="flex items-center justify-between text-xs mb-1.5">
                      <span className="font-semibold text-emerald-300 flex items-center gap-1.5">
                        <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
                        Local Market Client Portfolio
                      </span>
                      <span className="text-amber-400 font-bold text-[11px]">Direct Pitch Ready</span>
                    </div>
                    <div className="text-[12px] text-slate-300">
                      Local Client Pitch Sent • 3 Business Responses Received
                    </div>
                  </div>

                  {/* Live Student Community Pulse */}
                  <div className="p-3 rounded-2xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex -space-x-2">
                        <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center font-bold text-[10px] text-white border-2 border-slate-900">U</div>
                        <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center font-bold text-[10px] text-slate-950 border-2 border-slate-900">A</div>
                        <div className="w-7 h-7 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-[10px] text-white border-2 border-slate-900">H</div>
                      </div>
                      <span className="text-[11px] font-medium text-slate-300">
                        1,400+ Active in Student WhatsApp Group
                      </span>
                    </div>
                    <span className="text-emerald-400 text-[10px] font-bold">24/7 Peer Help</span>
                  </div>

                </div>

                {/* Floating Bottom Badge */}
                <div className="mt-4 pt-3 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    No Prior Tech Background Needed
                  </span>
                  <span className="text-amber-400 font-medium">Start From Scratch</span>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
