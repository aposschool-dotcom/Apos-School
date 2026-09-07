import React, { useState } from 'react';
import { COURSES_DATA, APOS_CONTACT } from '../data/aposData';
import {
  X,
  GraduationCap,
  MessageCircle,
  CheckCircle2,
  Calendar,
  Sparkles,
  Phone,
  ShieldCheck
} from 'lucide-react';

interface EnrollmentModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedCourseId?: string;
}

export const EnrollmentModal: React.FC<EnrollmentModalProps> = ({
  isOpen,
  onClose,
  preselectedCourseId
}) => {
  if (!isOpen) return null;

  const defaultCourse = preselectedCourseId === 'kids-school'
    ? 'APOS Kids School (Age 8-15)'
    : COURSES_DATA.find((c) => c.id === preselectedCourseId)?.title || COURSES_DATA[0].title;

  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [city, setCity] = useState('');
  const [course, setCourse] = useState(defaultCourse);
  const [paymentPlan, setPaymentPlan] = useState<'installments_10days' | 'installments_4' | 'lump'>('installments_10days');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !whatsapp) return;

    const planText = paymentPlan === 'installments_10days'
      ? 'Rs. 410 every 10th day (12 intervals)'
      : paymentPlan === 'installments_4'
      ? '4 Installments of Rs. 1,250'
      : 'Rs. 5,000 One-time';

    const message = encodeURIComponent(
      `*Assalam-o-Alaikum APOS Admissions Desk*\n\n` +
      `I want to enroll in the upcoming batch:\n\n` +
      `• *Student Name:* ${name}\n` +
      `• *WhatsApp:* ${whatsapp}\n` +
      `• *City:* ${city || 'Not provided'}\n` +
      `• *Course:* ${course}\n` +
      `• *Preferred Fee Plan:* ${planText}\n\n` +
      `Please provide batch starting dates and payment details.`
    );

    const waUrl = `https://wa.me/923071639292?text=${message}`;
    setSubmitted(true);
    window.open(waUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/70 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Admissions Portal • 120 Days Roadmap</span>
          </div>

          <h3 className="text-2xl font-black text-white">
            Join APOS School
          </h3>
          <p className="text-xs text-slate-300 mt-1">
            Reserve your seat in our upcoming practical cohort.
          </p>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-7 space-y-4">
          
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-extrabold text-slate-900">
                Application Received!
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                Your details have been passed to our WhatsApp admissions team. If your chat did not launch automatically,
                click the button below:
              </p>
              <a
                href={APOS_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm bg-emerald-600 text-white hover:bg-emerald-700 shadow-md"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Open WhatsApp Admissions Desk</span>
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Full Name *</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Zainab Malik"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none"
                />
              </div>

              {/* WhatsApp */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">WhatsApp Mobile Number *</label>
                <input
                  type="tel"
                  required
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  placeholder="e.g. 0307-1639292"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none"
                />
              </div>

              {/* City */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">City / Location</label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="e.g. Faisalabad / Multan / Overseas"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none"
                />
              </div>

              {/* Course Selection */}
              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-700">Selected Program</label>
                <select
                  value={course}
                  onChange={(e) => setCourse(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 outline-none bg-white"
                >
                  {COURSES_DATA.map((c) => (
                    <option key={c.id} value={c.title}>
                      {c.title}
                    </option>
                  ))}
                  <option value="APOS Kids School (Age 8-15)">
                    APOS Kids School (Age 8-15)
                  </option>
                </select>
              </div>

              {/* Payment Schedule Selector */}
              <div className="space-y-1.5 pt-1">
                <label className="text-xs font-bold text-slate-700">
                  Select Payment Option
                </label>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <button
                    type="button"
                    onClick={() => setPaymentPlan('installments_10days')}
                    className={`p-2 rounded-xl border transition-all ${
                      paymentPlan === 'installments_10days'
                        ? 'border-amber-400 bg-amber-50 font-bold text-amber-950'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div>Rs. 410</div>
                    <div className="text-[10px] text-slate-500">every 10th day</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentPlan('installments_4')}
                    className={`p-2 rounded-xl border transition-all ${
                      paymentPlan === 'installments_4'
                        ? 'border-amber-400 bg-amber-50 font-bold text-amber-950'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div>Rs. 1,250</div>
                    <div className="text-[10px] text-slate-500">4 installments</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentPlan('lump')}
                    className={`p-2 rounded-xl border transition-all ${
                      paymentPlan === 'lump'
                        ? 'border-amber-400 bg-amber-50 font-bold text-amber-950'
                        : 'border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    <div>Rs. 5,000</div>
                    <div className="text-[10px] text-slate-500">Full 120 Days</div>
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-black text-sm bg-amber-400 text-slate-950 hover:bg-amber-300 active:scale-98 transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-slate-950" />
                  <span>Confirm & Send to WhatsApp Admissions</span>
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Instant confirmation via WhatsApp (0307-1639292)</span>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
};
