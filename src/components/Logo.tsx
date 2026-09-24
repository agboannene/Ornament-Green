import React from 'react';

interface LogoProps {
  className?: string;
  size?: number;
  lightBackground?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 32,
  lightBackground = false,
}) => {
  const uniqueId = React.useId().replace(/:/g, '');

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="Ornament Green Logo"
    >
      <defs>
        {/* Left ring: Dark forest green */}
        <linearGradient
          id={`og-left-grad-${uniqueId}`}
          x1="28"
          y1="96"
          x2="124"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={lightBackground ? '#165B36' : '#22C55E'} />
          <stop offset="50%" stopColor={lightBackground ? '#146342' : '#10B981'} />
          <stop offset="100%" stopColor={lightBackground ? '#116C62' : '#14B8A6'} />
        </linearGradient>

        {/* Right ring: Ocean blue/cyan */}
        <linearGradient
          id={`og-right-grad-${uniqueId}`}
          x1="76"
          y1="96"
          x2="172"
          y2="96"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={lightBackground ? '#116C62' : '#14B8A6'} />
          <stop offset="60%" stopColor={lightBackground ? '#0E7490' : '#06B6D4'} />
          <stop offset="100%" stopColor={lightBackground ? '#0284C7' : '#38BDF8'} />
        </linearGradient>

        {/* Central leaf fill: Rich deep teal */}
        <linearGradient
          id={`og-leaf-fill-${uniqueId}`}
          x1="100"
          y1="54"
          x2="100"
          y2="138"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={lightBackground ? '#156B61' : '#10B981'} />
          <stop offset="100%" stopColor={lightBackground ? '#0D534B' : '#047857'} />
        </linearGradient>
      </defs>

      {/* Central filled leaf (intersection of two circles of radius 48 at x=76 and x=124) */}
      <path
        d="M 100 54.43 A 48 48 0 0 1 100 137.57 A 48 48 0 0 1 100 54.43 Z"
        fill={`url(#og-leaf-fill-${uniqueId})`}
      />

      {/* Stem extending downwards from bottom vertex */}
      <line
        x1="100"
        y1="136"
        x2="100"
        y2="152"
        stroke={lightBackground ? '#0D534B' : '#047857'}
        strokeWidth="3.6"
        strokeLinecap="square"
      />

      {/* Left Ring */}
      <circle
        cx="76"
        cy="96"
        r="48"
        stroke={`url(#og-left-grad-${uniqueId})`}
        strokeWidth="3.4"
        fill="none"
      />

      {/* Right Ring */}
      <circle
        cx="124"
        cy="96"
        r="48"
        stroke={`url(#og-right-grad-${uniqueId})`}
        strokeWidth="3.4"
        fill="none"
      />
    </svg>
  );
};

export const BrandMark: React.FC<{ size?: number; className?: string }> = ({
  size = 36,
  className = '',
}) => {
  return (
    <div
      className={`rounded-lg bg-white p-1 flex items-center justify-center shadow-sm border border-slate-200/60 overflow-hidden ${className}`}
      style={{ width: size, height: size }}
    >
      <Logo size={size - 6} lightBackground={true} />
    </div>
  );
};
