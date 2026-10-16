import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  showSubtitle?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', showSubtitle = false }) => {
  return (
    <Link
      to="/"
      className={`group inline-flex items-center gap-3 text-slate-100 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md py-1 ${className}`}
      aria-label="Mahesh Dalvi — Freelance Website Designer Home"
    >
      {/* Original MD Monogram Mark */}
      <div className="relative w-9 h-9 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700/80 p-1 flex items-center justify-center shadow-sm group-hover:border-cyan-500/50 transition-colors shrink-0">
        <svg
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* M glyph */}
          <path
            d="M6 24V8L12.5 17L19 8V24"
            stroke="#38BDF8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* D glyph interlaced */}
          <path
            d="M17 10H22C24.5 10 26.5 12 26.5 15.5C26.5 19 24.5 21 22 21H17"
            stroke="#F8FAFC"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand Text */}
      <div className="flex flex-col">
        <span className="text-base font-bold tracking-tight text-white group-hover:text-cyan-300 transition-colors whitespace-nowrap">
          Mahesh Dalvi
        </span>
        {showSubtitle && (
          <span className="text-xs text-slate-400 font-medium tracking-normal whitespace-nowrap">
            Freelance Website Designer
          </span>
        )}
      </div>
    </Link>
  );
};
