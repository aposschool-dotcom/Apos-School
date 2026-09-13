import React from 'react';
import { WHY_CHOOSE_US } from '../data/aposData';
import {
  Hammer,
  Sparkles,
  Users,
  Award,
  FolderGit2,
  CheckCircle,
  ShieldCheck,
  Star
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Hammer: Hammer,
    Sparkles: Sparkles,
    Users: Users,
    Award: Award,
    FolderGit2: FolderGit2
  };

  return (
    <section id="why-us" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 text-amber-900 border border-amber-200 text-xs font-bold uppercase tracking-wider">
            <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            The APOS Advantage
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why Choose <span className="text-navy-900">APOS School?</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            We eliminated the outdated teaching methods that leave students helpless. Here is how we build
            genuine confidence, technical competence, and financial independence.
          </p>
        </div>

        {/* 5 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_US.map((item, idx) => {
            const IconComp = iconMap[item.icon] || CheckCircle;
            return (
              <div
                key={item.title}
                className="p-7 rounded-3xl bg-slate-50 border border-slate-200/90 hover:border-amber-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-amber-400/20 text-slate-900 flex items-center justify-center border border-amber-300 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">0{idx + 1}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-amber-700">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Guaranteed in Every Batch</span>
                </div>
              </div>
            );
          })}

          {/* 6th Highlight Card: Transparent & Accessible Fee Model */}
          <div className="p-7 rounded-3xl bg-gradient-to-br from-slate-900 to-blue-950 text-white shadow-md flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold text-amber-400">06</span>
              </div>

              <h3 className="text-xl font-bold text-white">Unmatched Affordability</h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                Rs. 5,000 for 120 Days with an effortless plan of Rs. 410 every 10th day. High-income digital skills
                within reach of every passionate learner in Pakistan.
              </p>
            </div>

            <div className="pt-4 mt-3 border-t border-slate-800 flex items-center justify-between text-xs text-amber-400 font-bold">
              <span>Financial Inclusivity</span>
              <span>120 Days Access</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
