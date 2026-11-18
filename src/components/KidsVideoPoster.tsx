import React, { useState } from 'react';
import { Play } from 'lucide-react';

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
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 text-white text-center flex flex-col items-center justify-center gap-1.5 sm:gap-3 px-3 sm:px-6 group"
    >
      {/* soft glows */}
      <span className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl" />
      <span className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full bg-emerald-300/20 blur-3xl" />
      <span className="absolute inset-2 sm:inset-4 rounded-2xl border border-amber-300/40" />

      <span className="relative flex items-center gap-2 sm:gap-3">
        <img src="/assets/brand/apos-logo.png" alt="" className="w-6 h-6 sm:w-10 sm:h-10 rounded-full bg-white p-0.5 object-contain" />
        <span className="text-xs sm:text-xl font-black tracking-wide text-amber-300">APOS Kids School</span>
      </span>

      <span className="relative px-3 sm:px-6 py-0.5 sm:py-1.5 rounded-full bg-amber-400 text-slate-950 text-[11px] sm:text-lg font-extrabold shadow-lg" style={urdu}>
        نئے بیچ میں داخلے جاری ہیں
      </span>

      <span className="relative text-base sm:text-[2.1rem] font-extrabold leading-[1.8] sm:leading-[1.8] drop-shadow-lg whitespace-nowrap" style={urdu}>
        آپ کے بچے کو یہاں کیا سکھایا جائے گا؟
      </span>

      <span className="relative hidden sm:flex flex-wrap items-center justify-center gap-2">
        {topics.map((t) => (
          <span key={t} className="px-3 py-0.5 rounded-full bg-white/15 border border-white/30 text-sm font-semibold" style={urdu}>
            {t}
          </span>
        ))}
      </span>

      <span className="relative mt-0.5 inline-flex items-center gap-2 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full bg-white text-emerald-900 font-extrabold text-xs sm:text-lg shadow-xl group-hover:scale-105 transition-transform">
        <Play className="w-4 h-4 sm:w-6 sm:h-6 fill-emerald-900" />
        <span style={urdu}>مکمل تعارف دیکھیں</span>
      </span>
    </button>
  );
};
