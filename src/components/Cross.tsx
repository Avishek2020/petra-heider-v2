interface CrossProps {
  className?: string;
  size?: number;
}

const Cross = ({ className = "", size = 120 }: CrossProps) => {
  return (
    <svg
      width={size}
      height={size * 1.4}
      viewBox="0 0 80 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Cross shadow */}
      <rect x="35" y="8" width="14" height="100" rx="1" fill="#c4b8a8" />
      <rect x="12" y="28" width="60" height="12" rx="1" fill="#c4b8a8" />
      
      {/* Main cross */}
      <rect x="33" y="5" width="14" height="100" rx="1" fill="url(#crossGradient)" />
      <rect x="10" y="25" width="60" height="12" rx="1" fill="url(#crossGradient)" />
      
      {/* Cross highlights */}
      <rect x="35" y="7" width="4" height="96" rx="0.5" fill="rgba(255,255,255,0.3)" />
      <rect x="12" y="27" width="56" height="3" rx="0.5" fill="rgba(255,255,255,0.3)" />
      
      {/* Decorative elements */}
      <circle cx="40" cy="31" r="4" fill="#d4c4a8" stroke="#b8a888" strokeWidth="0.5" />
      
      <defs>
        <linearGradient id="crossGradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#d8cbb8" />
          <stop offset="50%" stopColor="#c8b8a0" />
          <stop offset="100%" stopColor="#b8a888" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Cross;
