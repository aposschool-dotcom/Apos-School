import React from 'react';
import { MessageCircle, Gift, Smartphone } from 'lucide-react';

export const CommunicationSection: React.FC = () => (
  <section id="communication" className="py-16 bg-amber-50 border-y border-amber-200">
    <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">
      <div className="text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-200 text-amber-900 text-xs font-bold uppercase tracking-wider">
          <MessageCircle className="w-3.5 h-3.5" /> Communication Mastery
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900">Good Skills Need Good Communication</h2>
        <p className="text-slate-700 max-w-2xl mx-auto">
          Most beginners lose clients because they cannot talk to them. We train you to speak, write, pitch and follow up with confidence.
        </p>
      </div>
      <div className="grid sm:grid-cols-3 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-amber-200"><Gift className="w-6 h-6 text-amber-600 mb-2" /><div className="font-bold text-slate-900">Bonus Course</div><p className="text-sm text-slate-600">A complete Client Communication course, included.</p></div>
        <div className="p-5 rounded-2xl bg-white border border-amber-200"><Gift className="w-6 h-6 text-amber-600 mb-2" /><div className="font-bold text-slate-900">Free on Completion</div><p className="text-sm text-slate-600">TikTok Ads Mastery course at no cost.</p></div>
        <div className="p-5 rounded-2xl bg-white border border-amber-200"><Smartphone className="w-6 h-6 text-amber-600 mb-2" /><div className="font-bold text-slate-900">Only a Phone</div><p className="text-sm text-slate-600">Nothing else is needed. No laptop at all.</p></div>
      </div>
    </div>
  </section>
);
