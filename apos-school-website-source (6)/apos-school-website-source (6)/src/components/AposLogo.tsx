import React from 'react';

interface AposLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
}

export const AposLogo: React.FC<AposLogoProps> = ({
  className = '',
  size = 48,
  showText = false
}) => {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <img
        src="/assets/brand/apos-logo.png"
        alt="APOS School - Ameer PopcornWala Online School Official Logo"
        width={size}
        height={size}
        style={{ width: size, height: size }}
        className="shrink-0 object-contain drop-shadow-sm transition-transform hover:scale-105 duration-200"
      />

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-tight flex items-center gap-1.5">
            APOS <span className="text-amber-500 font-bold">School</span>
          </span>
          <span className="text-[11px] font-medium text-slate-500 tracking-wider uppercase">
            Ameer PopcornWala Online School
          </span>
        </div>
      )}
    </div>
  );
};
