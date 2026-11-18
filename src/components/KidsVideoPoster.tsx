import React, { useState } from 'react';
import { Play, Video, Volume2 } from 'lucide-react';

const VIDEO_ID = 'Z8TMhiDofYo';
const urdu = { fontFamily: "'Noto Nastaliq Urdu', serif" } as const;

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
      className="relative w-full h-full overflow-hidden bg-gradient-to-br from-emerald-950 via-emerald-900 to-emerald-700 text-white text-center flex flex-col items-center justify-center gap-1.5 sm:gap-2.5 px-3 sm:px-6 pb-9 sm:pb-12 cursor-pointer group"
    >
      <span className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-400/20 blur-3xl" />
      <span className="absolute -bottom-28 -right-20 w-80 h-80 rounded-full bg-emerald-300/20 blur-3xl" />

      {/* Video tag */}
      <span className="absolute top-2 left-2 sm:top-3 sm:left-3 inline-flex items-center gap-1.5 px-2 sm:px-3 py-0.5 sm:py-1 rounded-md bg-red-600 text-white text-[10px] sm:text-sm font-bold shadow">
        <Video className="w-3 h-3 sm:w-4 sm:h-4" />
        <span style={urdu}>ویڈیو</span>
      </span>

      <span className="relative hidden sm:flex items-center gap-3">
        <img src="/assets/brand/apos-logo.png" alt="" className="w-9 h-9 rounded-full bg-white p-0.5 object-contain" />
        <span className="text-lg font-black tracking-wide text-amber-300">APOS Kids School</span>
      </span>

      <span className="relative px-3 sm:px-6 py-0.5 sm:py-1 rounded-full bg-amber-400 text-slate-950 text-[11px] sm:text-base font-extrabold shadow-lg" style={urdu}>
        نئے بیچ میں داخلے جاری ہیں
      </span>

      <span className="relative text-base sm:text-[1.9rem] font-extrabold leading-[1.8] drop-shadow-lg whitespace-nowrap" style={urdu}>
        آپ کے بچے کو یہاں کیا سکھایا جائے گا؟
      </span>

      {/* Big play button */}
      <span className="relative mt-0.5 flex items-center justify-center">
        <span className="absolute w-14 h-14 sm:w-24 sm:h-24 rounded-full bg-white/30 animate-ping" />
        <span className="relative w-12 h-12 sm:w-20 sm:h-20 rounded-full bg-red-600 border-2 sm:border-4 border-white shadow-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
          <Play className="w-5 h-5 sm:w-9 sm:h-9 fill-white text-white ml-0.5" />
        </span>
      </span>

      {/* Player control bar */}
      <span className="absolute bottom-0 inset-x-0 bg-black/55 px-3 sm:px-5 py-1.5 sm:py-3 flex items-center gap-2 sm:gap-3">
        <Play className="w-3.5 h-3.5 sm:w-5 sm:h-5 fill-white text-white shrink-0" />
        <span className="flex-1 h-1 sm:h-1.5 rounded-full bg-white/30 relative">
          <span className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500" />
        </span>
        <span className="text-[10px] sm:text-sm font-semibold" style={urdu}>ویڈیو دیکھنے کے لیے کلک کریں</span>
        <Volume2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white shrink-0" />
      </span>
    </button>
  );
};
