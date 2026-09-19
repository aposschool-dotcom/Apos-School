import React from 'react';
import { AposLogo } from './AposLogo';
import {
  Code2,
  Cpu,
  TrendingUp,
  Globe2,
  Briefcase,
  CheckCircle,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Smartphone
} from 'lucide-react';

export const AboutSection: React.FC = () => {
  const pillars = [
    {
      title: 'Skill Development',
      desc: 'Targeting modern market-demanded competencies that businesses in Pakistan and abroad actively pay for.',
      icon: Code2,
      color: 'bg-blue-50 text-blue-700 border-blue-200'
    },
    {
      title: 'Practical Learning',
      desc: 'Real assignments and screen-shared workflows. Zero rote memorization or dry theoretical lectures.',
      icon: CheckCircle,
      color: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      title: 'AI Integration',
      desc: 'Empowering every student with modern AI assistants to write copy, generate images, automate research, and work 5x faster.',
      icon: Cpu,
      color: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      title: 'Freelancing Opportunities',
      desc: 'Step-by-step guidance on Pakistani local market client acquisition, direct business outreach, proposal writing, and pricing.',
      icon: Briefcase,
      color: 'bg-purple-50 text-purple-700 border-purple-200'
    },
    {
      title: 'Digital Entrepreneurship',
      desc: 'Cultivating an independent mindset to launch micro-agencies, e-commerce stores, and digital service businesses.',
      icon: TrendingUp,
      color: 'bg-rose-50 text-rose-700 border-rose-200'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-900 border border-blue-200/60 text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Who We Are
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            About <span className="text-navy-900">APOS School</span>
          </h2>
          
          <p className="text-lg text-slate-600 leading-relaxed">
            APOS School (Ameer PopcornWala Online School) is <strong className="text-slate-800 inline-flex items-center gap-1">
              <Smartphone className="w-4 h-4 text-amber-500" />Pakistan's first mobile freelancing school</strong> —
            a digital learning platform where students learn practical skills according to modern market demands,
            entirely from their mobile phones. We bridge the gap between conventional academia
            and real-world earning capability.
          </p>
        </div>

        {/* Featured Quote Card */}
        <div className="relative mb-16 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white p-8 sm:p-12 shadow-xl overflow-hidden">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-3 flex flex-col items-center text-center lg:text-left lg:items-start border-b lg:border-b-0 lg:border-r border-slate-700/80 pb-6 lg:pb-0 lg:pr-8">
              <AposLogo size={68} />
              <div className="mt-3">
                <div className="font-extrabold text-lg text-white">APOS School</div>
                <div className="text-xs text-amber-400 font-semibold tracking-wide uppercase">
                  Ameer PopcornWala
                </div>
              </div>
            </div>

            <div className="lg:col-span-9 space-y-3 text-center lg:text-left">
              <div className="text-xs uppercase tracking-widest text-amber-400 font-bold">
                Our Guiding Philosophy
              </div>
              <blockquote className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight text-white leading-snug">
                “We don't just teach skills, we build confident individuals who can create opportunities.”
              </blockquote>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed pt-1">
                Whether you are a college student, an ambitious beginner, a homemaker seeking financial
                independence, or an entrepreneur scaling a brand — APOS provides the exact practical roadmap,
                friendly peer support, and tools required to succeed in the digital economy.
              </p>
            </div>
          </div>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-slate-900">
              Our 5 Core Strategic Focus Areas
            </h3>
            <p className="text-sm text-slate-500 mt-1">
              Every lesson, assignment, and workshop is crafted around these essential capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
            {pillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-white border border-slate-200/80 hover:border-amber-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${item.color}`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-slate-400 font-mono">0{idx + 1}</span>
                      <h4 className="text-lg font-bold text-slate-900">{item.title}</h4>
                    </div>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Final Highlight Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-100/60 border border-amber-200 flex flex-col justify-between md:col-span-2 lg:col-span-1">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-amber-400 text-slate-950 font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h4 className="text-lg font-bold text-slate-900">Affordable & Transparent</h4>
                <p className="text-sm text-slate-700 leading-relaxed">
                  Quality digital education shouldn't be a luxury. We offer complete 120-day access with broken-down
                  installments of just Rs. 410 every 10 days so anyone in Pakistan can afford to learn.
                </p>
              </div>
              <div className="pt-4 mt-2 border-t border-amber-200/80 text-xs font-bold text-amber-900 flex items-center justify-between">
                <span>Inclusive Learning</span>
                <span className="text-amber-800">100% Student-First</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
