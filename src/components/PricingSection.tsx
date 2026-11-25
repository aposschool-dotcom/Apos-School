import React, { useState } from 'react';
import { APOS_CONTACT } from '../data/aposData';
import {
  CheckCircle2,
  Calendar,
  CreditCard,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  HelpCircle,
  MessageCircle,
  BookOpen
} from 'lucide-react';

interface PricingSectionProps {
  onOpenEnrollment: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onOpenEnrollment }) => {
  const [selectedPlan, setSelectedPlan] = useState<'lump' | 'monthly' | 'installments10days'>('installments10days');

  const includedFeatures = [
    'Live class every night, Monday to Friday (40 min to 1 hour)',
    'Entire course on your mobile phone. No laptop needed',
    '2 free Foundational AI classes to start',
    'Graphic Designing, Video Editing, Social Media Marketing & Meta Ads with AI',
    'Practical Project-Based Assignments with Mentor Reviews',
    'Local Client Acquisition & Direct Proposal / Pitching Guide',
    'Private Student WhatsApp Community Support',
    'Weekly Live Q&A Sessions with Ameer PopcornWala',
    'Self-Help Journey: 5 movies, 5 audio books, mindset assignments',
    'BONUS: Complete Client Communication course',
    'FREE on completion: TikTok Ads Mastery course',
    'Verified Course Completion Certificate & Portfolio Review'
  ];

  return (
    <section id="fee-enrollment" className="py-20 bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 border border-amber-300 text-xs font-bold uppercase tracking-wider">
            <CreditCard className="w-3.5 h-3.5 text-amber-600" />
            Transparent & Inclusive Pricing
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Simple Fee. Easy Payments.
          </h2>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Pay in the way that is easy for you: Rs. 500 every 10 days, or Rs. 1,500 every month.
          </p>
        </div>

        {/* Limited-time offer */}
        <div className="max-w-4xl mx-auto mb-6 rounded-2xl bg-amber-400 text-slate-950 px-5 py-4 text-center sm:text-left flex flex-col sm:flex-row items-center gap-3">
          <Sparkles className="w-6 h-6 shrink-0" />
          <p className="text-sm sm:text-base font-bold leading-snug">
            Special offer for this month only: we have reduced the fee for Batch 48. Join now to get this lower fee. Next month the fee goes back up.
          </p>
        </div>

        {/* Pricing Card Container */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
          
          {/* Top Banner with Open Status */}
          <div className="bg-slate-900 text-white p-6 sm:px-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-ping"></span>
              <div>
                <span className="font-extrabold text-sm sm:text-base text-white">
                  Admissions Status: <span className="text-emerald-400">OPEN</span>
                </span>
                <span className="text-xs text-slate-400 block">
                  90-Day Mobile Freelancing Journey
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 px-3 py-1 rounded-xl bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold">
              <Calendar className="w-4 h-4" />
              <span>Full Duration: 90 DAYS</span>
            </div>
          </div>

          {/* Interactive Installment Selector */}
          <div className="p-6 sm:p-10 space-y-8">
            
            <div className="space-y-3 text-center">
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                Select Your Preferred Payment Schedule:
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl mx-auto">
                
                {/* Option 1: 10 Days Plan */}
                <button
                  onClick={() => setSelectedPlan('installments10days')}
                  className={`p-4 rounded-2xl border text-left transition-all relative ${
                    selectedPlan === 'installments10days'
                      ? 'border-amber-400 bg-amber-50/70 shadow-sm ring-2 ring-amber-400/30'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-400 text-slate-950">
                    MOST POPULAR
                  </div>
                  <div className="text-xs font-bold text-slate-500">Mini-Installment</div>
                  <div className="text-lg font-black text-slate-900 mt-1">Rs. 500</div>
                  <div className="text-xs text-amber-800 font-semibold mt-0.5">Every 10th Day</div>
                </button>

                {/* Option 2: 4 Installments */}
                <button
                  onClick={() => setSelectedPlan('monthly')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedPlan === 'monthly'
                      ? 'border-amber-400 bg-amber-50/70 shadow-sm ring-2 ring-amber-400/30'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-500">Monthly</div>
                  <div className="text-lg font-black text-slate-900 mt-1">Rs. 1,500</div>
                  <div className="text-xs text-slate-600 font-semibold mt-0.5">Per Month (3 Months)</div>
                </button>

                {/* Option 3: Full One-Time */}
                <button
                  onClick={() => setSelectedPlan('lump')}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedPlan === 'lump'
                      ? 'border-amber-400 bg-amber-50/70 shadow-sm ring-2 ring-amber-400/30'
                      : 'border-slate-200 hover:border-slate-300 bg-slate-50/50'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-500">One-Time Complete</div>
                  <div className="text-lg font-black text-slate-900 mt-1">Rs. 4,500</div>
                  <div className="text-xs text-emerald-700 font-semibold mt-0.5">Zero Follow-ups</div>
                </button>

              </div>
            </div>

            {/* Dynamic Details Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-200">
                <div>
                  <div className="text-xs uppercase tracking-wider font-extrabold text-slate-500">
                    Selected Payment Option
                  </div>
                  <div className="text-2xl font-black text-slate-900 mt-0.5 flex items-baseline gap-2">
                    {selectedPlan === 'installments10days' && (
                      <>
                        <span>Rs. 500</span>
                        <span className="text-xs font-semibold text-slate-500">/ every 10 days (9 payments)</span>
                      </>
                    )}
                    {selectedPlan === 'monthly' && (
                      <>
                        <span>Rs. 1,500</span>
                        <span className="text-xs font-semibold text-slate-500">/ per month for 3 months</span>
                      </>
                    )}
                    {selectedPlan === 'lump' && (
                      <>
                        <span>Rs. 4,500</span>
                        <span className="text-xs font-semibold text-slate-500">/ one-time complete fee</span>
                      </>
                    )}
                  </div>
                </div>

                <div className="text-right sm:text-right">
                  <div className="text-xs text-slate-500">Course Fee (3 months)</div>
                  <div className="text-lg font-bold text-slate-900">Rs. 4,500 + Rs. 500 registration = Rs. 5,000</div>
                </div>
              </div>

              <div className="text-xs sm:text-sm text-amber-900 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
                <strong>Rs. 500 registration fee</strong> (non-refundable, covers small admission expenses) is paid separately, in addition to the Rs. 4,500 course fee. Grand total: <strong>Rs. 5,000</strong>. The first 2 Foundational AI classes are <strong>free</strong>, so you can try before you pay.
              </div>

              {/* Checklist of What's Included */}
              <div className="space-y-2.5 pt-1">
                <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  What You Receive During 90 Days:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                  {includedFeatures.map((feat) => (
                    <div key={feat} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Main Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={onOpenEnrollment}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-black text-base bg-amber-400 text-slate-950 hover:bg-amber-300 active:scale-95 transition-all shadow-lg shadow-amber-400/20 flex items-center justify-center gap-2"
              >
                <span>Join Now (Enroll Today)</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={APOS_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-base bg-slate-900 text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Contact Us (WhatsApp)</span>
              </a>
            </div>

            {/* Payment security footnote */}
            <div className="text-center text-xs text-slate-400 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Payments accepted via JazzCash, EasyPaisa, and Bank Transfer across Pakistan</span>
            </div>

          </div>

        </div>

        {/* Course prospectus (PDF) */}
        <div id="prospectus" className="max-w-4xl mx-auto mt-8 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-emerald-700 flex items-center justify-center">
            <BookOpen className="w-7 h-7 text-amber-300" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="text-lg font-extrabold text-slate-900">
              Read the Full Course Prospectus
            </div>
            <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
              Everything in one place: what we teach, how classes work, the fee card and how to enroll. Available in English and Urdu.
            </p>
          </div>
          <div className="w-full sm:w-auto shrink-0 flex flex-col gap-2">
            <a
              href="/APOS-AI-Digital-Marketing-Prospectus-English.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-sm bg-emerald-700 text-white hover:bg-emerald-800 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              Prospectus (English PDF)
            </a>
            <a
              href="/APOS-AI-Digital-Marketing-Prospectus-Urdu.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl font-bold text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4" />
              اردو پراسپیکٹس (PDF)
            </a>
          </div>
        </div>

        {/* Free YouTube Alternative for students who can't afford the fee */}
        <div className="max-w-4xl mx-auto mt-8 p-6 sm:p-8 rounded-3xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          <div className="shrink-0 w-14 h-14 rounded-2xl bg-amber-400 flex items-center justify-center">
            <Zap className="w-7 h-7 text-slate-950" />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <div className="text-lg font-extrabold text-white">
              Can't Afford The Fee Right Now? Learn For Free.
            </div>
            <p className="text-sm text-slate-300 mt-1.5 leading-relaxed">
              No student should be stopped by money. Every class from this course is taught completely free
              on our YouTube channel, <span className="text-amber-400 font-semibold">Ameer PopcornWala</span> —
              learn the exact same skills at your own pace, at zero cost.
            </p>
          </div>
          <a
            href="#free-classes"
            className="w-full sm:w-auto shrink-0 px-6 py-3.5 rounded-xl font-bold text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            Watch Free Classes
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
