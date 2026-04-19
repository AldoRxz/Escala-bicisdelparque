export function GearLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Burnished copper-gold gradient with metallic shine */}
        <linearGradient id="gearGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.82 0.10 48)" />
          <stop offset="25%" stopColor="oklch(0.72 0.12 50)" />
          <stop offset="50%" stopColor="oklch(0.68 0.13 50)" />
          <stop offset="75%" stopColor="oklch(0.58 0.14 52)" />
          <stop offset="100%" stopColor="oklch(0.52 0.15 52)" />
        </linearGradient>
        {/* Steel silver inner ring */}
        <linearGradient id="steelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="oklch(0.78 0.008 260)" />
          <stop offset="50%" stopColor="oklch(0.68 0.008 260)" />
          <stop offset="100%" stopColor="oklch(0.58 0.012 260)" />
        </linearGradient>
        {/* Subtle glow filter */}
        <filter id="copperGlow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          <feFlood floodColor="oklch(0.68 0.13 50)" floodOpacity="0.3" />
          <feComposite in2="blur" operator="in" />
          <feMerge>
            <feMergeNode />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      {/* Outer gear teeth */}
      <path
        d="M50 5 L55 15 L60 5 L65 18 L72 10 L72 22 L82 18 L78 28 L90 28 L82 38 L95 42 L85 48 L95 55 L82 58 L90 68 L78 68 L82 78 L72 75 L72 87 L65 80 L60 92 L55 82 L50 95 L45 82 L40 92 L35 80 L28 87 L28 75 L18 78 L22 68 L10 68 L18 58 L5 55 L15 48 L5 42 L18 38 L10 28 L22 28 L18 18 L28 22 L28 10 L35 18 L40 5 L45 15 L50 5Z"
        fill="url(#gearGradient)"
        filter="url(#copperGlow)"
      />
      {/* Inner circle - dark industrial background */}
      <circle cx="50" cy="50" r="25" fill="oklch(0.14 0.008 260)" />
      {/* Steel ring detail */}
      <circle cx="50" cy="50" r="22" fill="none" stroke="url(#steelGradient)" strokeWidth="1.5" />
      {/* Center copper accent */}
      <circle cx="50" cy="50" r="8" fill="url(#gearGradient)" />
    </svg>
  )
}
