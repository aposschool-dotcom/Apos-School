import React, { useEffect, useState } from 'react';
import {
  MessageCircle, Play, Sparkles, Target, Rocket, Users, GraduationCap, BadgeCheck,
  ChevronDown, ArrowRight, BookOpen, Handshake, Megaphone, Heart, Coins, ClipboardList, Video,
} from 'lucide-react';
import {
  LEARN_TOPICS, MENTORS_FAQ, MENTORS_VIDEO_ID, MENTORS_WHATSAPP_DISPLAY,
  mentorsWhatsAppUrl, MentorsProgram,
} from '../data/mentorsData';
import { trackLead } from '../lib/track';

const WaButton: React.FC<{
  program: MentorsProgram;
  label?: string;
  where: string;
  variant?: 'yellow' | 'teal' | 'white';
  className?: string;
}> = ({ program, label = 'Register on WhatsApp', where, variant = 'yellow', className = '' }) => {
  const styles = {
    yellow: 'bg-amber-400 text-teal-950 hover:bg-amber-300 shadow-lg shadow-amber-400/30',
    teal: 'bg-teal-700 text-white hover:bg-teal-800 shadow-lg shadow-teal-700/20',
    white: 'bg-white text-teal-900 hover:bg-amber-50',
  }[variant];
  return (
    <a
      href={mentorsWhatsAppUrl(program)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackLead(`Start Your AI School - ${program} - ${where}`)}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-base active:scale-95 transition-all ${styles} ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      {label}
    </a>
  );
};

const SectionTitle: React.FC<{ kicker: string; title: string; text?: string; light?: boolean }> = ({ kicker, title, text, light }) => (
  <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${light ? 'bg-amber-400/20 text-amber-300' : 'bg-amber-100 text-amber-800'}`}>{kicker}</div>
    <h2 className={`text-3xl sm:text-4xl font-extrabold tracking-tight ${light ? 'text-white' : 'text-teal-950'}`}>{title}</h2>
    {text && <p className={`text-base sm:text-lg leading-relaxed ${light ? 'text-teal-50/90' : 'text-slate-600'}`}>{text}</p>}
  </div>
);

const VideoPoster: React.FC = () => {
  const [playing, setPlaying] = useState(false);
  if (playing && MENTORS_VIDEO_ID) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${MENTORS_VIDEO_ID}?autoplay=1&rel=0`}
        title="Start Your AI School"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }
  return (
    <button
      type="button"
      disabled={!MENTORS_VIDEO_ID}
      onClick={() => setPlaying(true)}
      aria-label="Play video"
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-teal-950 via-teal-800 to-teal-600 text-white flex flex-col items-center justify-center gap-2 sm:gap-4 px-4 group disabled:cursor-default"
    >
      <span className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-amber-400/25 blur-3xl" />
      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-400 text-teal-950 text-[11px] sm:text-sm font-extrabold">
        <Video className="w-3.5 h-3.5" /> VIDEO
      </span>
      <span className="relative text-xs sm:text-base font-bold tracking-widest uppercase text-amber-300">Start Your AI School</span>
      <span className="relative text-xl sm:text-4xl font-extrabold text-center leading-tight">Teach with AI.<br />Build your own classes.</span>
      {MENTORS_VIDEO_ID ? (
        <span className="relative mt-1 flex items-center justify-center">
          <span className="absolute w-14 h-14 sm:w-24 sm:h-24 rounded-full bg-white/30 animate-ping" />
          <span className="relative w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-amber-400 border-2 sm:border-4 border-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
            <Play className="w-5 h-5 sm:w-9 sm:h-9 fill-teal-950 text-teal-950 ml-0.5" />
          </span>
        </span>
      ) : (
        <span className="relative text-xs sm:text-sm font-semibold bg-white/15 border border-white/30 rounded-full px-4 py-1">Video coming soon</span>
      )}
    </button>
  );
};

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`rounded-3xl bg-white border border-teal-100 p-6 shadow-sm ${className}`}>{children}</div>
);

export const FutureReadyMentors: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    document.title = 'Start Your AI School | Teachers Training with AI | APOS School';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-teal-50/60 text-slate-800 pb-24 sm:pb-0">
      {/* 1. Hero */}
      <section className="bg-gradient-to-b from-teal-950 to-teal-800 text-white pt-10 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-amber-400/70 aspect-video bg-teal-900">
            <VideoPoster />
          </div>
          <div className="text-center space-y-5 max-w-3xl mx-auto">
            <div className="inline-block px-4 py-1.5 rounded-full bg-amber-400 text-teal-950 text-sm font-extrabold">Teachers Training • APOS School</div>
            <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]">
              Start Your <span className="text-amber-400">AI School</span>
            </h1>
            <p className="text-lg sm:text-xl text-teal-50/95 leading-relaxed">
              Learn to teach with AI, and build your own online classes with the support of APOS School.
            </p>
            <WaButton program="general" where="hero" />
            <p className="text-sm text-teal-100/80">Registration is only on WhatsApp: {MENTORS_WHATSAPP_DISPLAY}</p>
          </div>
        </div>
      </section>

      {/* 2. Mission */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4">
          <SectionTitle kicker="Our Mission" title="Every teacher, ready for tomorrow" />
          <p className="-mt-4 text-lg text-slate-700 leading-relaxed">
            Our mission is simple: to help teachers in Pakistan use AI with confidence, so they can teach better,
            reach more students and build a respected teaching career of their own.
          </p>
        </div>
      </section>

      {/* 3. Why Now */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle kicker="Why Now" title="The AI revolution has reached education" text="The way students learn is changing quickly. Teachers who understand AI will lead this change." />
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: Sparkles, t: 'AI is everywhere', d: 'Students already use AI. Teachers need to guide them, not be left behind.' },
              { icon: Rocket, t: 'Teaching is moving online', d: 'Families now look for good teachers they can find and learn from on their phones.' },
              { icon: Target, t: 'The right time to start', d: 'Those who learn early will build trust and a strong place before others do.' },
            ].map(({ icon: Icon, t, d }) => (
              <Card key={t}><Icon className="w-8 h-8 text-teal-700 mb-3" /><div className="font-extrabold text-lg text-teal-950 mb-1">{t}</div><p className="text-slate-600">{d}</p></Card>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What You'll Learn */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <SectionTitle kicker="What You'll Learn" title="8 skills every modern teacher needs" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {LEARN_TOPICS.map((tp, i) => (
              <Card key={tp.title}>
                <div className="w-10 h-10 rounded-full bg-amber-400 text-teal-950 font-black flex items-center justify-center mb-3">{i + 1}</div>
                <div className="font-extrabold text-teal-950 mb-1">{tp.title}</div>
                <p className="text-sm text-slate-600 leading-relaxed">{tp.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Opportunity for Teachers */}
      <section className="py-16 bg-teal-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle light kicker="The Opportunity" title="A real opportunity for teachers" text="You already have the knowledge. This program gives you the tools and the support to share it online and grow." />
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: GraduationCap, t: 'Teach your way', d: 'Run your own classes online, on your own terms.' },
              { icon: Handshake, t: 'Not alone', d: 'APOS School stands with you with guidance after your training.' },
              { icon: Users, t: 'Reach more students', d: 'Be found by families beyond your own area.' },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl bg-white/10 border border-white/20 p-6"><Icon className="w-8 h-8 text-amber-400 mb-3" /><div className="font-extrabold text-lg mb-1">{t}</div><p className="text-teal-50/90">{d}</p></div>
            ))}
          </div>
          <p className="text-center text-sm text-teal-100/80 mt-6">We do not promise income. Your results depend on your effort and consistency.</p>
        </div>
      </section>

      {/* 6. Two Programs */}
      <section id="programs" className="py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle kicker="Choose Your Program" title="Two programs, one goal" text="Both programs include a certificate." />
          <div className="max-w-2xl mx-auto -mt-4 mb-8 rounded-2xl bg-amber-100 border border-amber-300 px-5 py-3 text-center text-sm sm:text-base font-bold text-amber-900">
            Launch fee for the first batch. The fee may increase from the next batch.
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-3xl bg-white border-2 border-teal-200 p-7 flex flex-col shadow-sm">
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-extrabold mb-3"><Handshake className="w-4 h-4" /> 2 MONTHS</div>
              <h3 className="text-2xl font-extrabold text-teal-950 mb-2">Partner Program</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">After your training, APOS partners with you to help you run and grow your school.</p>
              <div className="rounded-2xl bg-teal-50 border border-teal-200 p-4 mb-4">
                <div className="text-3xl font-black text-teal-900">Rs. 8,000 <span className="text-sm font-bold text-slate-500">one payment</span></div>
                <div className="text-sm text-slate-700 mt-1">or Rs. 5,000 per month for 2 months (total Rs. 10,000)</div>
              </div>
              <ul className="space-y-2 mb-4 text-slate-700">
                {['Complete teacher training with AI', 'Complete course resources: PPTs, lectures and presentations', 'First 3 months: 50-50 partnership, and APOS does the marketing', 'Marketing is not taught in this program', 'After that, you can run it as your own institute', 'Certificate included'].map((x) => (
                  <li key={x} className="flex gap-2"><BadgeCheck className="w-5 h-5 text-teal-700 shrink-0 mt-0.5" />{x}</li>
                ))}
              </ul>
              <div className="rounded-2xl bg-amber-50 border border-amber-200 p-4 mb-6 text-sm text-slate-700 leading-relaxed">
                <div className="font-extrabold text-teal-950 mb-1">Refund policy</div>
                Tell us within the first 10 days and get a full refund. If, after learning, you feel it is not beneficial for you, you can get a 50% refund.
              </div>
              <WaButton program="partner" where="partner-card" label="Register for Partner Program" variant="teal" className="mt-auto" />
            </div>
            <div className="rounded-3xl bg-gradient-to-br from-teal-900 to-teal-700 text-white p-7 flex flex-col shadow-xl relative">
              <span className="absolute -top-3 right-6 bg-amber-400 text-teal-950 text-xs font-extrabold px-3 py-1 rounded-full">MOST COMPLETE</span>
              <div className="inline-flex self-start items-center gap-2 px-3 py-1 rounded-full bg-amber-400 text-teal-950 text-xs font-extrabold mb-3"><Megaphone className="w-4 h-4" /> 3 MONTHS</div>
              <h3 className="text-2xl font-extrabold mb-2">Full Program</h3>
              <p className="text-teal-50/90 mb-4 leading-relaxed">Our main program. We teach you everything, including marketing, and you run your own ads, your own marketing and your own work.</p>
              <div className="rounded-2xl bg-white/10 border border-white/25 p-4 mb-4">
                <div className="text-3xl font-black text-amber-400">Rs. 10,000 <span className="text-sm font-bold text-teal-100">one payment</span></div>
                <div className="text-sm text-teal-50/90 mt-1">or Rs. 4,000 per month for 3 months (total Rs. 12,000)</div>
              </div>
              <ul className="space-y-2 mb-6">
                {['Complete training, step by step', 'Complete course resources: PPTs, lectures and presentations', 'We teach you marketing: how to promote yourself and bring students', 'You run your own ads and marketing', 'Certificate included'].map((x) => (
                  <li key={x} className="flex gap-2"><BadgeCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />{x}</li>
                ))}
              </ul>
              <WaButton program="full" where="full-card" label="Register for Full Program" variant="yellow" className="mt-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Difference between the programs */}
      <section id="difference" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionTitle kicker="Compare Programs" title="What is different?" text="Both programs teach you to teach with AI. The main difference is marketing." />
          <div className="rounded-3xl overflow-hidden border border-teal-100 shadow-sm text-sm sm:text-base">
            <div className="grid grid-cols-[1.1fr_1fr_1fr] bg-teal-900 text-white font-extrabold text-center">
              <div className="p-3 sm:p-4 bg-white" />
              <div className="p-3 sm:p-4">Partner Program<div className="text-xs font-semibold text-teal-200">2 months</div></div>
              <div className="p-3 sm:p-4 bg-teal-700">Full Program<div className="text-xs font-semibold text-amber-300">3 months</div></div>
            </div>
            {[
              { l: 'Teacher training with AI', a: 'Yes', b: 'Yes', d: false },
              { l: 'Course resources', a: 'Yes', b: 'Yes', d: false },
              { l: 'Zoom classes, recordings, 24-hour support', a: 'Yes', b: 'Yes', d: false },
              { l: 'Certificate', a: 'Yes', b: 'Yes', d: false },
              { l: 'Marketing training', a: 'Not taught', b: 'Taught in full: how to market yourself and bring students', d: true },
              { l: 'Who does the marketing', a: 'APOS does it (first 3 months)', b: 'You do your own ads and marketing', d: true },
              { l: 'Partnership', a: '50-50 with APOS for the first 3 months, then your own institute', b: 'Your own work, with our guidance', d: true },
              { l: 'Fee', a: 'Rs. 8,000 or Rs. 5,000 x 2', b: 'Rs. 10,000 or Rs. 4,000 x 3', d: false },
            ].map((r) => (
              <div key={r.l} className={`grid grid-cols-[1.1fr_1fr_1fr] text-center border-t border-teal-100 ${r.d ? 'bg-amber-50' : 'bg-white'}`}>
                <div className="p-3 sm:p-4 text-left font-extrabold text-teal-900">{r.l}</div>
                <div className="p-3 sm:p-4 text-slate-700">{r.a}</div>
                <div className="p-3 sm:p-4 text-slate-700">{r.b}</div>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 gap-5 mt-6">
            <Card><div className="font-extrabold text-lg text-teal-950 mb-1">Partner Program</div><p className="text-slate-600">We do not teach marketing in this program. During the first 3 months of the 50-50 partnership, APOS does the marketing itself. After that you can run it as your own institute.</p></Card>
            <div className="rounded-3xl bg-teal-900 text-white p-6"><div className="font-extrabold text-lg mb-1">Full Program</div><p className="text-teal-50/90">We also teach you marketing: how to promote yourself, how to bring students, and everything that goes with it. Then you run your own ads and marketing.</p></div>
          </div>
          <p className="text-center text-slate-700 mt-6"><span className="font-extrabold text-teal-950">Which one is right for you?</span> Choose the Partner Program if you want APOS to handle the marketing with you. Choose the Full Program if you want to learn to do your own marketing and bring your own students.</p>
        </div>
      </section>

      {/* Included in both programs */}
      <section className="py-16 bg-teal-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle kicker="Included in Both Programs" title="What you get with every program" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: BookOpen, t: 'Complete course resources', d: 'All the classes you will teach are given to you as resources: PPTs, lectures and presentations.' },
              { icon: GraduationCap, t: 'Online teaching, fully covered', d: 'You learn exactly how to teach online, from setup to running live classes.' },
              { icon: Video, t: 'Live classes on Zoom', d: 'Online live classes, so you can ask questions and learn together.' },
              { icon: Play, t: 'Every class recorded', d: 'A recording of every class is provided. Missed a class? Watch it later.' },
              { icon: MessageCircle, t: '24-hour group support', d: 'A support group you can reach any time of the day.' },
              { icon: ClipboardList, t: 'Step-by-step guidance', d: 'You are guided at every step, in simple words.' },
              { icon: Target, t: 'Night-time classes', d: 'Classes are held at night at a feasible time, so you can handle your daytime responsibilities.' },
              { icon: Handshake, t: 'Our experience, shared', d: 'The experience of two running institutes is passed on to you, and we support you until you are established.' },
            ].map(({ icon: Icon, t, d }) => (
              <Card key={t}><Icon className="w-8 h-8 text-teal-700 mb-3" /><div className="font-extrabold text-lg text-teal-950 mb-1">{t}</div><p className="text-slate-600">{d}</p></Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prospectus download */}
      <section id="prospectus" className="py-16 bg-teal-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <SectionTitle light kicker="Prospectus" title="Read the complete prospectus" text="Everything in one place: what we teach, how we teach, both programs, fees and how to enroll. Available in English and Urdu." />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/APOS-Start-Your-AI-School-Prospectus-English.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-base bg-amber-400 text-teal-950 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/30"
            >
              <BookOpen className="w-5 h-5" />
              Prospectus in English (PDF)
            </a>
            <a
              href="/APOS-Start-Your-AI-School-Prospectus-Urdu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-base bg-white text-teal-900 hover:bg-amber-50 active:scale-95 transition-all"
            >
              <BookOpen className="w-5 h-5" />
              اردو میں پروسپیکٹس (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* 7. How It Works */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle kicker="How It Works" title="Four simple steps" />
          <div className="grid sm:grid-cols-4 gap-5">
            {[
              { icon: MessageCircle, t: 'Message us', d: 'Tap Register and send the ready message on WhatsApp.' },
              { icon: ClipboardList, t: 'Get guidance', d: 'We guide you and help you choose the right program.' },
              { icon: BookOpen, t: 'Learn', d: 'Attend the live training and practise step by step.' },
              { icon: Rocket, t: 'Start teaching', d: 'Begin your online classes with APOS support.' },
            ].map(({ icon: Icon, t, d }, i) => (
              <Card key={t} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full bg-teal-700 text-white flex items-center justify-center mb-3"><Icon className="w-6 h-6" /></div>
                <div className="text-xs font-bold text-amber-600 mb-1">STEP {i + 1}</div>
                <div className="font-extrabold text-teal-950 mb-1">{t}</div>
                <p className="text-sm text-slate-600">{d}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Who Is It For */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionTitle kicker="Who Is It For" title="This program is for you if you are" />
          <div className="grid sm:grid-cols-2 gap-4">
            {['A school or college teacher', 'A home tutor or academy teacher', 'A trainer or coach who wants to go online', 'Someone who wants to become a teacher', 'Comfortable using only a mobile phone', 'Ready to learn something new, step by step'].map((x) => (
              <div key={x} className="flex items-center gap-3 rounded-2xl bg-white border border-teal-100 px-5 py-4 shadow-sm"><BadgeCheck className="w-6 h-6 text-teal-700 shrink-0" /><span className="font-semibold text-teal-950">{x}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Meet Your Mentor */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <SectionTitle kicker="Meet Your Mentor" title="Learn from someone who teaches every day" />
          <div className="rounded-3xl bg-teal-50 border border-teal-100 p-7 flex flex-col sm:flex-row gap-6 items-center">
            <div className="w-28 h-28 rounded-full bg-teal-800 text-amber-400 flex items-center justify-center text-4xl font-black shrink-0">AP</div>
            <div className="space-y-2 text-center sm:text-left">
              <div className="text-2xl font-extrabold text-teal-950">Ameer Popcornwala</div>
              <div className="font-semibold text-teal-700">Founder, APOS School</div>
              <p className="text-slate-700 leading-relaxed">
                In the last 4 years, Ameer has taught thousands of people. Today he runs 2 institutes where hundreds of students study every month. All of that experience is passed on to you in this program, step by step, in simple words.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. LEARN > EARN > RETURN */}
      <section className="py-16 bg-gradient-to-b from-teal-900 to-teal-950 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <SectionTitle light kicker="Our Path" title="LEARN → EARN → RETURN" />
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { icon: BookOpen, t: 'LEARN', d: 'Master AI-powered teaching with live guidance and practice.' },
              { icon: Coins, t: 'EARN', d: 'Use your skills to build your own teaching work. Results depend on your effort.' },
              { icon: Heart, t: 'RETURN', d: 'Give back by helping other teachers and students grow.' },
            ].map(({ icon: Icon, t, d }) => (
              <div key={t} className="rounded-3xl bg-white/10 border border-white/20 p-6 text-center"><Icon className="w-9 h-9 text-amber-400 mx-auto mb-3" /><div className="text-2xl font-black text-amber-400 mb-1">{t}</div><p className="text-teal-50/90">{d}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FAQ */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <SectionTitle kicker="FAQ" title="Common questions" />
          <div className="space-y-3">
            {MENTORS_FAQ.map((f, i) => (
              <div key={f.q} className="rounded-2xl bg-white border border-teal-100 shadow-sm overflow-hidden">
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between gap-4 text-left px-5 py-4 font-bold text-teal-950">
                  {f.q}
                  <ChevronDown className={`w-5 h-5 shrink-0 text-teal-700 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && <p className="px-5 pb-5 text-slate-700 leading-relaxed">{f.a}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. Final CTA */}
      <section className="py-16 bg-amber-400">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center space-y-5">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-950">Ready to start your AI School?</h2>
          <p className="text-lg text-teal-950/80">Send us a message on WhatsApp. We will guide you step by step.</p>
          <WaButton program="general" where="final-cta" variant="teal" label="Register on WhatsApp" />
          <p className="text-sm font-semibold text-teal-950/80">{MENTORS_WHATSAPP_DISPLAY}</p>
        </div>
      </section>

      <footer className="bg-teal-950 text-teal-100 text-center text-sm py-6 px-4">
        <a href="/" className="inline-flex items-center gap-1 hover:text-amber-300">APOS School <ArrowRight className="w-4 h-4" /> Back to main website</a>
        <div className="mt-1 text-teal-300/70">© APOS School • Pakistan's First Mobile Freelancing School</div>
      </footer>

      {/* Sticky WhatsApp button on mobile */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-50 p-3 bg-white/95 backdrop-blur border-t border-teal-100">
        <WaButton program="general" where="sticky-mobile" className="w-full" />
      </div>
    </div>
  );
};
