import React from 'react';
import { APOS_CONTACT } from '../data/aposData';
import {
  Users,
  MessageCircle,
  HelpCircle,
  Share2,
  HeartHandshake,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

interface CommunitySectionProps {
  onOpenEnrollment: () => void;
}

export const CommunitySection: React.FC<CommunitySectionProps> = ({ onOpenEnrollment }) => {
  const communityFeatures = [
    {
      title: 'Learn Together',
      desc: 'Never feel isolated in front of a computer screen. Join cohorts of ambitious students growing together.',
      icon: Users
    },
    {
      title: 'Ask Questions Freely',
      desc: 'No query is too small or basic. Mentors and senior batchmates respond actively in dedicated discussion channels.',
      icon: HelpCircle
    },
    {
      title: 'Share & Critique Projects',
      desc: 'Showcase your draft designs, ad copies, and client proposals before delivering them for honest constructive feedback.',
      icon: Share2
    },
    {
      title: 'Support Each Other',
      desc: 'Celebrate wins, exchange client leads, and build lifelong professional friendships across all provinces.',
      icon: HeartHandshake
    }
  ];

  return (
    <section id="community" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        <div className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-950 text-white p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          {/* Subtle Glows */}
          <div className="absolute -top-10 -right-10 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
              <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
              Community-Based Learning Model
            </div>

            <blockquote className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              “This is not just a course, it’s a learning community.”
            </blockquote>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Most online courses fail because students get stuck and quit alone. At APOS School, our collaborative
              ecosystem ensures you always have guidance, accountability, and encouragement every step of the way.
            </p>
          </div>

          {/* 4 Core Pillars of Community */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {communityFeatures.map((item) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-amber-400/60 transition-colors space-y-3"
                >
                  <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <h4 className="text-base font-bold text-white">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Action inside Community Card */}
          <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-300">
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
              <span>Active WhatsApp VIP Group Access included with all 120-Day enrollments</span>
            </div>

            <div className="flex items-center gap-3">
              <a
                href={APOS_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-emerald-500 text-white hover:bg-emerald-600 transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Join Community Discussion</span>
              </a>

              <button
                onClick={onOpenEnrollment}
                className="px-5 py-2.5 rounded-xl font-bold text-xs bg-amber-400 text-slate-950 hover:bg-amber-300 transition-colors"
              >
                Enroll Now
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
