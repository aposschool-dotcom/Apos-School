import React, { useState } from 'react';
import { APOS_CONTACT } from '../data/aposData';
import { MessageCircle, X } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  const [showBubble, setShowBubble] = useState(true);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      {/* Friendly quick chat bubble */}
      {showBubble && (
        <div className="relative bg-white text-slate-800 p-3 rounded-2xl shadow-xl border border-slate-200 max-w-xs text-xs animate-in slide-in-from-bottom-3 duration-300">
          <button
            onClick={() => setShowBubble(false)}
            className="absolute -top-1.5 -left-1.5 w-5 h-5 bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-full flex items-center justify-center transition-colors text-[10px]"
            aria-label="Dismiss message"
          >
            <X className="w-3 h-3" />
          </button>
          
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="font-bold text-slate-900">APOS Admissions Active</span>
          </div>
          <p className="text-slate-600 leading-snug">
            Need course guidance or details about the <strong>Rs. 410 installment plan</strong>? Chat with us!
          </p>
        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={APOS_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-emerald-500/30 active:scale-95 transition-all duration-200"
        title="Chat on WhatsApp (0307-1639292)"
      >
        <MessageCircle className="w-6 h-6 fill-white text-emerald-500" />
        <span className="font-bold text-xs sm:text-sm hidden sm:inline">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
};
