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
      <svg
        width={size}
        height={size}
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-sm transition-transform hover:scale-105 duration-200"
        aria-label="APOS School Official Logo"
      >
        <defs>
          {/* Top text arc path */}
          <path
            id="topTextArc"
            d="M 28 100 A 72 72 0 0 1 172 100"
            fill="none"
          />
          {/* Bottom text arc path */}
          <path
            id="bottomTextArc"
            d="M 172 100 A 72 72 0 0 1 28 100"
            fill="none"
          />
          {/* Gradients */}
          <radialGradient id="badgeYellow" cx="50%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#FFF176" />
            <stop offset="60%" stopColor="#FDD835" />
            <stop offset="100%" stopColor="#FBC02D" />
          </radialGradient>
          <filter id="subtleShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* Outer Circular Rim */}
        <circle cx="100" cy="100" r="96" fill="#1E293B" stroke="#0F172A" strokeWidth="2" />
        <circle cx="100" cy="100" r="94" fill="url(#badgeYellow)" stroke="#222" strokeWidth="2" />

        {/* Inner Guide Circle */}
        <circle cx="100" cy="100" r="66" fill="none" stroke="#222" strokeWidth="1.2" strokeOpacity="0.3" />

        {/* Arched Top Text: "Ameer PopcornWala" */}
        <text
          fill="#111827"
          fontSize="17"
          fontWeight="800"
          fontFamily="Outfit, Plus Jakarta Sans, system-ui, sans-serif"
          letterSpacing="0.8"
        >
          <textPath
            href="#topTextArc"
            startOffset="50%"
            textAnchor="middle"
          >
            Ameer PopcornWala
          </textPath>
        </text>

        {/* Arched Bottom Text: "Online School" */}
        <text
          fill="#111827"
          fontSize="16"
          fontWeight="800"
          fontFamily="Outfit, Plus Jakarta Sans, system-ui, sans-serif"
          letterSpacing="0.5"
        >
          <textPath
            href="#bottomTextArc"
            startOffset="50%"
            textAnchor="middle"
          >
            Online School
          </textPath>
        </text>

        {/* Left Blue Stars */}
        <g fill="#0284C7" stroke="#0369A1" strokeWidth="0.5">
          {/* Star 1 */}
          <polygon points="34,136 36,141 41,141 37,144 38,149 34,146 30,149 31,144 27,141 32,141" transform="scale(0.8) translate(8, 18)" />
          {/* Star 2 */}
          <polygon points="44,147 46,151 51,151 47,154 48,158 44,155 40,158 41,154 37,151 42,151" transform="scale(0.85) translate(8, 14)" />
          {/* Star 3 */}
          <polygon points="56,156 58,160 62,160 59,163 60,167 56,164 52,167 53,163 50,160 54,160" transform="scale(0.8) translate(12, 10)" />
        </g>

        {/* Right Blue Stars */}
        <g fill="#0284C7" stroke="#0369A1" strokeWidth="0.5">
          {/* Star 1 */}
          <polygon points="166,136 168,141 173,141 169,144 170,149 166,146 162,149 163,144 159,141 164,141" transform="scale(0.8) translate(38, 18)" />
          {/* Star 2 */}
          <polygon points="156,147 158,151 163,151 159,154 160,158 156,155 152,158 153,154 149,151 154,151" transform="scale(0.85) translate(28, 14)" />
          {/* Star 3 */}
          <polygon points="144,156 146,160 150,160 147,163 148,167 144,164 140,167 141,163 138,160 142,160" transform="scale(0.8) translate(22, 10)" />
        </g>

        {/* Center Educational Cube Icon */}
        <g transform="translate(0, -2)">
          {/* Left Cube Face (Orange / Media Screen) */}
          <path
            d="M 67 92 L 100 106 L 100 134 L 67 120 Z"
            fill="#F97316"
            stroke="#1E3A8A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* White inner screen frame on left face */}
          <path
            d="M 72 96 L 95 106 L 95 128 L 72 118 Z"
            fill="#EA580C"
            stroke="#FFFFFF"
            strokeWidth="2"
            strokeLinejoin="round"
          />
          {/* Blue Play Button Triangle inside left face */}
          <polygon
            points="80,105 80,119 90,112"
            fill="#0284C7"
            stroke="#FFFFFF"
            strokeWidth="0.8"
          />

          {/* Right Cube Face (Green / Notes & Lessons) */}
          <path
            d="M 100 106 L 133 92 L 133 120 L 100 134 Z"
            fill="#10B981"
            stroke="#1E3A8A"
            strokeWidth="2.5"
            strokeLinejoin="round"
          />
          {/* Three White Notes Lines on right face */}
          <line x1="108" y1="107" x2="125" y2="100" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="108" y1="115" x2="125" y2="108" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
          <line x1="108" y1="123" x2="125" y2="116" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />

          {/* Graduation Cap Base Band (Navy Blue) */}
          <path
            d="M 64 89 L 100 104 L 136 89 L 100 74 Z"
            fill="#0284C7"
            stroke="#1E3A8A"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />

          {/* Mortarboard Top (Cyan Diamond/Rhombus) */}
          <polygon
            points="100,66 142,82 100,98 58,82"
            fill="#0284C7"
            stroke="#1E3A8A"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Cyan/White Diamond Highlight */}
          <polygon
            points="100,70 134,82 100,94 66,82"
            fill="#38BDF8"
            stroke="#E0F2FE"
            strokeWidth="1.5"
          />

          {/* Cap Center Button */}
          <circle cx="100" cy="82" r="3.5" fill="#FFFFFF" stroke="#1E3A8A" strokeWidth="1" />

          {/* Tassel hanging to the left */}
          <path
            d="M 97 82 Q 74 85 64 94"
            fill="none"
            stroke="#0369A1"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          {/* Tassel tip */}
          <rect x="62" y="94" width="4" height="7" rx="1.5" fill="#0369A1" />
        </g>
      </svg>

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
