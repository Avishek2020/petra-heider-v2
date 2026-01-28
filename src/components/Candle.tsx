import { useState } from "react";

interface CandleProps {
  className?: string;
}

const Candle = ({ className = "" }: CandleProps) => {
  const [isLit, setIsLit] = useState(true);

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <button
        onClick={() => setIsLit(!isLit)}
        className="relative cursor-pointer transition-all duration-300 hover:scale-105 focus:outline-none"
        aria-label={isLit ? "Kerze löschen" : "Kerze anzünden"}
      >
        <svg
          width="60"
          height="140"
          viewBox="0 0 60 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={isLit ? "candle-glow" : ""}
        >
          {/* Flame */}
          {isLit && (
            <g className="flame-animation gentle-float" style={{ transformOrigin: "30px 25px" }}>
              {/* Outer glow */}
              <ellipse
                cx="30"
                cy="25"
                rx="12"
                ry="20"
                fill="url(#flameGradientOuter)"
                opacity="0.6"
              />
              {/* Main flame */}
              <path
                d="M30 5 C20 20, 18 35, 30 45 C42 35, 40 20, 30 5"
                fill="url(#flameGradient)"
              />
              {/* Inner flame */}
              <path
                d="M30 15 C25 25, 24 35, 30 40 C36 35, 35 25, 30 15"
                fill="url(#flameInnerGradient)"
              />
              {/* Flame core */}
              <ellipse cx="30" cy="35" rx="4" ry="6" fill="#fff8e7" opacity="0.9" />
            </g>
          )}
          
          {/* Smoke when extinguished */}
          {!isLit && (
            <g className="gentle-float" opacity="0.4">
              <path
                d="M30 45 Q35 35, 30 25 Q25 15, 32 5"
                stroke="#888"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
              />
            </g>
          )}
          
          {/* Wick */}
          <rect x="28" y="45" width="4" height="8" fill="#2d2d2d" rx="1" />
          
          {/* Candle body */}
          <rect
            x="15"
            y="53"
            width="30"
            height="85"
            rx="2"
            fill="url(#candleGradient)"
          />
          
          {/* Candle highlight */}
          <rect
            x="17"
            y="55"
            width="8"
            height="80"
            rx="1"
            fill="rgba(255,255,255,0.3)"
          />
          
          {/* Wax drips */}
          <ellipse cx="20" cy="65" rx="3" ry="5" fill="rgba(255,255,255,0.2)" />
          <ellipse cx="40" cy="75" rx="2" ry="4" fill="rgba(255,255,255,0.15)" />
          
          {/* Base */}
          <rect
            x="10"
            y="135"
            width="40"
            height="5"
            rx="2"
            fill="#8B7355"
          />
          
          <defs>
            <linearGradient id="flameGradient" x1="30" y1="5" x2="30" y2="45" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fff4c4" />
              <stop offset="30%" stopColor="#ffcc33" />
              <stop offset="60%" stopColor="#ff9500" />
              <stop offset="100%" stopColor="#ff6600" />
            </linearGradient>
            <linearGradient id="flameInnerGradient" x1="30" y1="15" x2="30" y2="40" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#fffef0" />
              <stop offset="50%" stopColor="#fff4c4" />
              <stop offset="100%" stopColor="#ffdd66" />
            </linearGradient>
            <radialGradient id="flameGradientOuter" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0%" stopColor="#ffcc33" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff6600" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="candleGradient" x1="15" y1="53" x2="45" y2="53" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#f5f0e6" />
              <stop offset="50%" stopColor="#fffef8" />
              <stop offset="100%" stopColor="#e8e0d0" />
            </linearGradient>
          </defs>
        </svg>
      </button>
      <p className="mt-3 text-xs text-muted-foreground text-center italic">
        {isLit ? "Klicken Sie auf die Kerze, um sie zu löschen" : "Klicken Sie, um die Kerze anzuzünden"}
      </p>
    </div>
  );
};

export default Candle;
