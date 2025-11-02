// components/ThreadsPaths.tsx
export default function ThreadsPaths() {
    return (
      <svg
        className="pointer-events-none absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <defs>
          {/* glow nhẹ quanh stroke */}
          <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
  
          {/* các dải gradient theo brand */}
          <linearGradient id="gPink" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#C0188C" />
            <stop offset="100%" stopColor="#E042A3" />
          </linearGradient>
  
          <linearGradient id="gPurple" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#7A32B4" />
            <stop offset="100%" stopColor="#9B5BEA" />
          </linearGradient>
  
          <linearGradient id="gSunset" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A24CE6" />
            <stop offset="50%" stopColor="#E042A3" />
            <stop offset="100%" stopColor="#FF9A3E" />
          </linearGradient>
  
          {/* mask để ribbon lóe sáng ở giữa, mờ 2 biên */}
          <radialGradient id="edgeFade" cx="50%" cy="50%" r="50%">
            <stop offset="60%" stopColor="white" />
            <stop offset="100%" stopColor="black" />
          </radialGradient>
          <mask id="softEdge">
            <rect width="100%" height="100%" fill="url(#edgeFade)" />
          </mask>
        </defs>
  
        {/* PATH 1: chạy chéo từ trái dưới lên phải trên */}
        <path
        d="
          M -200 820
          A 900 650 0 0 1 760 420
          A 900 650 0 0 1 1700 120
        "
        stroke="url(#gSunset)"
        strokeWidth="64"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        fill="none"
        opacity="0.85"
        filter="url(#softGlow)"
        mask="url(#softEdge)"
      />
  
        {/* PATH 2: cong lớn phía dưới (tím) */}
        <path
        d="
          M -180 980
          A 1100 700 0 0 1 900 740
          A 1100 700 0 0 1 1760 700
        "
        stroke="url(#gPurple)"
        strokeWidth="56"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        fill="none"
        opacity="0.62"
        filter="url(#softGlow)"
        mask="url(#softEdge)"
      />

  
        {/* PATH 3: cong mảnh phía trên (hồng) */}
        <path
        d="
          M -220 140
          A 1200 520 0 0 1 760 160
          A 1200 520 0 0 1 1720 240
        "
        stroke="url(#gPink)"
        strokeWidth="38"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        fill="none"
        opacity="0.58"
        filter="url(#softGlow)"
        mask="url(#softEdge)"
      />
      </svg>
    );
  }
  