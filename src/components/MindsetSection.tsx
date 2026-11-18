import React from 'react';
import { Film, Headphones, HeartHandshake, Hourglass, Heart, Compass, MessageCircle, Gift, Smartphone } from 'lucide-react';

const assignments = [
  { icon: HeartHandshake, title: 'Gratitude (Shukrguzari)', text: 'Daily practice of noticing and thanking for what you already have.' },
  { icon: Hourglass, title: 'Patience (Sabr)', text: 'Learn to stay calm and consistent while results take time.' },
  { icon: Heart, title: 'Feeling Your Emotions', text: 'Understand what you feel instead of running from it.' },
  { icon: Compass, title: 'Living With Purpose', text: 'Decide why you are learning and where your life is going.' },
];

export const MindsetSection: React.FC = () => (
  <section id="mindset" className="py-20 bg-emerald-950 text-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
          <Heart className="w-3.5 h-3.5" /> Included in Your 90 Days
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          Skills Earn Money. A Strong Mindset Keeps It.
        </h2>
        <p className="text-emerald-100/80 leading-relaxed">
          Along with your skills, you go through a self-help journey that changes how you think, feel and live.
          It is built into the course, not an extra.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto mb-5">
        <div className="p-6 rounded-3xl bg-emerald-900/60 border border-emerald-700/50 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0"><Film className="w-7 h-7" /></div>
          <div><div className="text-4xl font-black text-amber-400">5</div><div className="font-bold">Movies, each with a life lesson</div></div>
        </div>
        <div className="p-6 rounded-3xl bg-emerald-900/60 border border-emerald-700/50 flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0"><Headphones className="w-7 h-7" /></div>
          <div><div className="text-4xl font-black text-amber-400">5</div><div className="font-bold">Books, listened to as audio books</div></div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-6xl mx-auto">
        {assignments.map(({ icon: Icon, title, text }) => (
          <div key={title} className="p-5 rounded-2xl bg-white/5 border border-emerald-700/40 space-y-2">
            <Icon className="w-6 h-6 text-amber-400" />
            <div className="font-bold">{title}</div>
            <p className="text-sm text-emerald-100/75 leading-relaxed">{text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
