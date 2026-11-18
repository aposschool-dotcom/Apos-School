import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { KIDS_CURRENT_BATCH } from '../data/aposData';

const VIDEO_ID = 'Z8TMhiDofYo';
const urdu = { fontFamily: "'Noto Nastaliq Urdu', serif" } as const;

const topics = ['اے آئی', 'ویب سائٹ', 'ڈیجیٹل آرٹ', 'کوڈنگ', 'بزنس'];

export const KidsVideoPoster: React.FC = () => {
  const [playing, setPlaying] = useState(false);

  if (playing) {
    return (
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
        title="آپ کے بچے کو یہاں کیا سکھایا جائے گا؟ مکمل تعارف"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label="ویڈیو چلائیں"
      className="relative w-full h-full bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-800 text-white text-center flex flex-col items-center justify-center gap-2 sm:gap-4 px-4 group"
    >
      <span className="px-3 sm:px-5 py-1 sm:py-1.5 rounded-full bg-amber-400 text-slate-950 text-[11px] sm:text-base font-extrabold" style={urdu}>
        بیچ {KIDS_CURRENT_BATCH} میں داخلے جاری ہیں
      </span>
      <span className="text-[11px] sm:text-sm font-bold tracking-widest text-amber-300 uppercase">APOS Kids School</span>
      <span className="text-lg sm:text-4xl font-extrabold leading-[1.9] sm:leading-[2]" style={urdu}>
        آپ کے بچے کو یہاں کیا سکھایا جائے گا؟
      </span>
      <span className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
        {topics.map((t) => (
          <span key={t} className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full bg-white/10 border border-white/20 text-[10px] sm:text-sm" style={urdu}>
            {t}
          </span>
        ))}
      </span>
      <span className="mt-1 inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white text-emerald-900 font-extrabold text-xs sm:text-base shadow-lg group-hover:scale-105 transition-transform">
        <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-emerald-900" />
        <span style={urdu}>مکمل تعارف دیکھیں</span>
      </span>
    </button>
  );
};
