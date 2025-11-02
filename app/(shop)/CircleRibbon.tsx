// components/CircleRibbon.tsx
type Props = {
    /** Tâm vòng tròn (đặt lệch để chỉ lộ 1 phần trên canvas) */
    cx?: number;
    cy?: number;
    /** Bán kính & độ dày “ribbon” */
    r?: number;
    strokeWidth?: number;
    /** Độ trong suốt */
    opacity?: number;
    className?: string; // để position: absolute; inset-0
  };
  
  export default function CircleRibbon({
    cx = 1120,
    cy = 860,
    r = 520,
    strokeWidth = 64,
    opacity = 0.85,
    className = "pointer-events-none absolute inset-0 w-full h-full",
  }: Props) {
    return (
      <svg
        className={className}
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* Glow mềm quanh stroke */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
  
          {/* Gradient dọc theo chu vi (userSpace để giữ hướng) */}
          <linearGradient id="gSunsetCircle" x1={cx - r} y1={cy} x2={cx + r} y2={cy} gradientUnits="userSpaceOnUse">
            <stop offset="0%"  stopColor="#A24CE6" />
            <stop offset="45%" stopColor="#E042A3" />
            <stop offset="100%" stopColor="#FF9A3E" />
          </linearGradient>
  
          {/* Mask mép mềm (để ribbon mượt hơn) */}
          <radialGradient id="edgeFade" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
          <mask id="softEdge">
            <rect width="100%" height="100%" fill="url(#edgeFade)" />
          </mask>
        </defs>
  
        {/* Vòng tròn duy nhất */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="none"
          stroke="url(#gSunsetCircle)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          opacity={opacity}
          vectorEffect="non-scaling-stroke"
          filter="url(#softGlow)"
          mask="url(#softEdge)"
        />
      </svg>
    );
  }
  