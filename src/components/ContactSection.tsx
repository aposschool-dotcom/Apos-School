import React, { useState } from 'react';
import { APOS_CONTACT, COURSES_DATA } from '../data/aposData';
import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Share2,
  Sparkles,
  Clock
} from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    whatsapp: '',
    city: '',
    course: COURSES_DATA[0].title,
    paymentPlan: 'installments_10days',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.whatsapp) return;

    // Format WhatsApp message
    const text = encodeURIComponent(
      `*New Student Application - APOS School*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*WhatsApp:* ${formData.whatsapp}\n` +
      `*City:* ${formData.city || 'Not provided'}\n` +
      `*Course:* ${formData.course}\n` +
      `*Preferred Plan:* ${
        formData.paymentPlan === 'installments_10days'
          ? 'Rs. 410 every 10th day'
          : formData.paymentPlan === 'installments_4'
          ? '4 Installments of Rs. 1,250'
          : 'Rs. 5,000 One-time'
      }\n` +
      `*Notes:* ${formData.message || 'Ready to start learning'}`
    );

    const waLink = `https://wa.me/923071639292?text=${text}`;
    setSubmitted(true);
    window.open(waLink, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5 text-amber-400" />
            Get In Touch & Enroll
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Connect With <span className="text-amber-400">APOS Admissions</span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300">
            Have questions about the batch schedule, fee installments, or course curriculum?
            Reach out via WhatsApp, give us a call, or submit the form below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Contact Details & Social Links */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-850/90 border border-slate-700/80 space-y-6 shadow-xl">
              <h3 className="text-xl font-bold text-white border-b border-slate-700/80 pb-3">
                Official Contact Channels
              </h3>

              {/* Official Phone */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-400 text-slate-950 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">Call Directly</div>
                  <a
                    href={`tel:${APOS_CONTACT.phone}`}
                    className="text-lg font-black text-white hover:text-amber-400 transition-colors"
                  >
                    {APOS_CONTACT.phoneFormatted}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">Direct line to Admissions Desk</div>
                </div>
              </div>

              {/* Official WhatsApp Button */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">Instant WhatsApp Support</div>
                  <a
                    href={APOS_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-black text-emerald-400 hover:text-emerald-300 transition-colors block"
                  >
                    {APOS_CONTACT.phoneFormatted}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">Quick voice notes & chat support</div>
                </div>
              </div>

              {/* Official Email */}
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-slate-750 text-slate-300 flex items-center justify-center shrink-0 border border-slate-700">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase font-bold text-slate-400">Official Email</div>
                  <a
                    href={`mailto:${APOS_CONTACT.email}`}
                    className="text-sm font-semibold text-slate-200 hover:text-white transition-colors"
                  >
                    {APOS_CONTACT.email}
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">For partnerships & verification</div>
                </div>
              </div>

              {/* Social Channels Required in Prompt */}
              <div className="pt-4 border-t border-slate-700/80 space-y-3">
                <div className="text-xs uppercase font-bold text-slate-400">
                  Follow Our Social Media:
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={APOS_CONTACT.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-blue-600/80 border border-slate-700 text-center text-xs font-bold transition-all text-white"
                  >
                    Facebook
                  </a>
                  <a
                    href={APOS_CONTACT.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-pink-600/80 border border-slate-700 text-center text-xs font-bold transition-all text-white"
                  >
                    Instagram
                  </a>
                  <a
                    href={APOS_CONTACT.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-800 hover:bg-rose-600/80 border border-slate-700 text-center text-xs font-bold transition-all text-white"
                  >
                    YouTube
                  </a>
                </div>
              </div>

            </div>

            {/* Quick Timing & Response Notice */}
            <div className="p-4 rounded-2xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-300 flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-400 shrink-0" />
              <span>
                Admissions desk responds rapidly between 9:00 AM and 11:00 PM (Monday through Sunday).
              </span>
            </div>

          </div>

          {/* Right Column: Interactive Application Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-3xl bg-white text-slate-900 shadow-2xl border border-slate-200">
              
              <div className="space-y-1 mb-6 border-b border-slate-100 pb-4">
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Student Enrollment & Inquiry Form
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Fill this quick form to reserve your seat or send your details directly via WhatsApp.
                </p>
              </div>

              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs sm:text-sm flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block font-bold text-sm text-emerald-950">Application Ready!</strong>
                    Your information was formatted for our admissions WhatsApp team. If WhatsApp didn't open automatically,{' '}
                    <a href={APOS_CONTACT.whatsappUrl} className="underline font-bold text-emerald-700">click here to chat</a>.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Ali Khan"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* WhatsApp */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      placeholder="e.g. 0300-1234567"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-sm outline-none transition-all"
                    />
                  </div>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* City */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">City / Town</label>
                    <input
                      type="text"
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      placeholder="e.g. Lahore, Karachi, Rawalpindi"
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Course of Interest */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-slate-700">Course Selection</label>
                    <select
                      value={formData.course}
                      onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-sm outline-none transition-all bg-white"
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

                </div>

                {/* Preferred Payment Schedule */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Preferred Fee Schedule
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 text-xs cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        name="paymentPlan"
                        checked={formData.paymentPlan === 'installments_10days'}
                        onChange={() => setFormData({ ...formData, paymentPlan: 'installments_10days' })}
                        className="accent-amber-500"
                      />
                      <span>Rs. 410 / 10 Days</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 text-xs cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        name="paymentPlan"
                        checked={formData.paymentPlan === 'installments_4'}
                        onChange={() => setFormData({ ...formData, paymentPlan: 'installments_4' })}
                        className="accent-amber-500"
                      />
                      <span>4 Installments</span>
                    </label>

                    <label className="flex items-center gap-2 p-2.5 rounded-xl border border-slate-200 text-xs cursor-pointer hover:bg-slate-50">
                      <input
                        type="radio"
                        name="paymentPlan"
                        checked={formData.paymentPlan === 'lump'}
                        onChange={() => setFormData({ ...formData, paymentPlan: 'lump' })}
                        className="accent-amber-500"
                      />
                      <span>Rs. 5,000 Full</span>
                    </label>
                  </div>
                </div>

                {/* Message / Additional Questions */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-700">
                    Questions or Prior Experience (Optional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us a little about your background or questions..."
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 focus:border-amber-400 focus:ring-2 focus:ring-amber-400/20 text-sm outline-none transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Action */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-extrabold text-sm sm:text-base text-slate-950 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all shadow-md shadow-amber-400/20 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 text-slate-950" />
                  <span>Submit & Connect on WhatsApp (0307-1639292)</span>
                </button>

                <p className="text-[11px] text-slate-400 text-center">
                  Your WhatsApp contact is strictly confidential. No spam guaranteed.
                </p>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
