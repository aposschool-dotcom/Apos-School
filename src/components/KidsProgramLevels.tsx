import React, { useState } from 'react';
import { KIDS_AI_INNOVATOR_PROGRAM, KIDS_ADMISSIONS_WHATSAPP, KIDS_ADMISSIONS_PHONE_FORMATTED } from '../data/aposData';
import {
  CheckCircle2, GraduationCap, Users, ShieldCheck, Download, MessageCircle, Lock, PlayCircle,
} from 'lucide-react';

export const KidsProgramLevels: React.FC = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const level = KIDS_AI_INNOVATOR_PROGRAM.levels[activeLevel];

  return (
    <div className="py-16 sm:py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Program header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold border border-blue-200 mb-5">
            <GraduationCap className="w-3.5 h-3.5" />
            {KIDS_AI_INNOVATOR_PROGRAM.tagline}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            {KIDS_AI_INNOVATOR_PROGRAM.title}
          </h2>
          <p className="text-slate-600 leading-relaxed">
            {KIDS_AI_INNOVATOR_PROGRAM.description}
          </p>
        </div>

        {/* Parent explainer video */}
        <div className="max-w-3xl mx-auto mb-14">
          <div className="flex items-center justify-center gap-2 mb-4">
            <PlayCircle className="w-5 h-5 text-red-600" />
            <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 text-center">
              آپ کے بچے کو یہاں کیا سکھایا جائے گا؟ مکمل تعارف دیکھیں
            </h3>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/Z8TMhiDofYo"
              title="آپ کے بچے کو یہاں کیا سکھایا جائے گا؟ مکمل تعارف"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Level tab selector */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {KIDS_AI_INNOVATOR_PROGRAM.levels.map((l, i) => (
            <button
              key={l.id}
              onClick={() => setActiveLevel(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-bold border transition-colors ${
                activeLevel === i
                  ? 'bg-slate-900 text-white border-slate-900'
                  : 'bg-white text-slate-600 border-slate-300 hover:border-slate-400'
              }`}
            >
              Level {l.levelNumber}: {l.title}
            </button>
          ))}
        </div>

        {/* Active level card */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 mb-10">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-3">
                <span className="w-9 h-9 rounded-xl bg-slate-900 text-white flex items-center justify-center font-black text-sm shrink-0">
                  {level.levelNumber}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">{level.title}</h3>
                  <span className="text-xs font-semibold text-slate-500">{level.duration}</span>
                </div>
              </div>

              {level.eligibilityNote && (
                <div className="flex items-start gap-2 bg-amber-50 border border-amber-200 rounded-xl px-3 py-2 mb-4 text-xs text-amber-800">
                  <Lock className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                  <span>{level.eligibilityNote}</span>
                </div>
              )}

              <ul className="space-y-2.5 mb-4">
                {level.topics.map((t) => (
                  <li key={t} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              {level.capstone && (
                <div className="bg-white border border-slate-200 rounded-xl p-4 text-sm text-slate-600">
                  <span className="font-bold text-slate-800">Capstone Project: </span>
                  {level.capstone}
                </div>
              )}
            </div>

            {/* Fee box */}
            <div className="bg-white border-2 border-slate-900 rounded-2xl p-5 h-fit">
              <div className="text-xs font-bold text-slate-400 uppercase mb-1">Total Fee</div>
              <div className="text-3xl font-black text-slate-900 mb-3">
                PKR {level.totalFeePKR.toLocaleString()}
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-600 border-t border-slate-100 pt-3">
                <Users className="w-4 h-4 text-slate-400" />
                <span>{level.installments} monthly installments of <strong className="text-slate-900">PKR {level.monthlyFeePKR.toLocaleString()}</strong></span>
              </div>
              <a
                href={KIDS_ADMISSIONS_WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-green-600 text-white font-bold text-sm hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                Admission Ke Liye WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Learning model + eligibility */}
        <div className="grid sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h4 className="font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-blue-600" /> Program Learning Model
            </h4>
            <ul className="space-y-2">
              {KIDS_AI_INNOVATOR_PROGRAM.learningModel.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white border border-slate-200 rounded-2xl p-6">
            <h4 className="font-extrabold text-slate-900 mb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-green-600" /> Eligibility & Requirements
            </h4>
            <ul className="space-y-2">
              {KIDS_AI_INNOVATOR_PROGRAM.eligibility.map((m) => (
                <li key={m} className="flex items-start gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Outcomes */}
        <div className="bg-slate-900 rounded-3xl p-6 sm:p-8 mb-10">
          <h4 className="font-extrabold text-white mb-4 text-lg">What Your Child Will Be Able To Do</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            {KIDS_AI_INNOVATOR_PROGRAM.outcomes.map((o) => (
              <div key={o} className="flex items-start gap-2 text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                {o}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <a
            href="/assets/documents/APOS-Kids-AI-Innovator-Program-Prospectus.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-slate-300 text-slate-700 font-bold text-sm hover:border-slate-400 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Full Prospectus (PDF)
          </a>
          <p className="text-sm text-slate-500">
            Admission ke liye WhatsApp karein: <strong className="text-slate-800">{KIDS_ADMISSIONS_PHONE_FORMATTED}</strong>
          </p>
        </div>

      </div>
    </div>
  );
};
