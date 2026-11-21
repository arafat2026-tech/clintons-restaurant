import React from 'react';

export const GoldFlourishDivider: React.FC<{ className?: string; subtitle?: string }> = ({
  className = "",
  subtitle
}) => {
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      {/* Left scroll line */}
      <div className="flex items-center gap-1">
        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-r from-transparent via-gold-600 to-gold-500"></div>
        <div className="w-1.5 h-1.5 rounded-full bg-gold-400"></div>
      </div>

      {/* Center ornate flourish */}
      <div className="flex items-center gap-2 px-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-gold-500 w-5 h-5">
          <path
            d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"
            fill="currentColor"
          />
          <circle cx="12" cy="12" r="3" fill="#10110D" stroke="#E8B923" strokeWidth="1" />
        </svg>
        {subtitle && (
          <span className="text-gold-400 font-script text-xl sm:text-2xl px-1 tracking-wider">
            {subtitle}
          </span>
        )}
      </div>

      {/* Right scroll line */}
      <div className="flex items-center gap-1">
        <div className="w-1.5 h-1.5 rounded-full bg-gold-400"></div>
        <div className="w-12 sm:w-20 h-[1px] bg-gradient-to-l from-transparent via-gold-600 to-gold-500"></div>
      </div>
    </div>
  );
};

export const GoldVerticalBorderOrnament: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`flex flex-col items-center justify-between py-2 text-gold-500 select-none pointer-events-none opacity-80 ${className}`}>
      {/* Top finial */}
      <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500/20"></div>
      <div className="w-[1px] flex-1 bg-gradient-to-b from-gold-500/80 via-gold-500/30 to-transparent my-2"></div>
      {/* Mid decorative scroll */}
      <svg width="18" height="28" viewBox="0 0 18 28" fill="none" className="my-1">
        <path d="M9 0C4 5 1 10 1 14C1 18 4 23 9 28C14 23 17 18 17 14C17 10 14 5 9 0Z" stroke="#E8B923" strokeWidth="1.2" fill="none"/>
        <circle cx="9" cy="14" r="2.5" fill="#E8B923" />
      </svg>
      <div className="w-[1px] flex-1 bg-gradient-to-t from-gold-500/80 via-gold-500/30 to-transparent my-2"></div>
      {/* Bottom finial */}
      <div className="w-2.5 h-2.5 rotate-45 border border-gold-400 bg-gold-500/20"></div>
    </div>
  );
};

export const LuxuryBadge: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className = ""
}) => {
  return (
    <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-charcoal-800/90 border border-gold-500/40 text-gold-300 text-xs sm:text-sm font-medium tracking-wide shadow-sm backdrop-blur-md ${className}`}>
      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 animate-pulse"></span>
      {children}
    </div>
  );
};
