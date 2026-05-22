import { motion } from "framer-motion";

export function Scene2Photograph() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" style={{ background: "linear-gradient(160deg, oklch(0.3 0.06 45), oklch(0.2 0.04 50))" }}>
      <defs>
        <linearGradient id="page2" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.9 0.05 75)" />
          <stop offset="100%" stopColor="oklch(0.78 0.06 65)" />
        </linearGradient>
      </defs>

      <rect x="30" y="40" width="340" height="220" rx="4" fill="url(#page2)" />
      <line x1="200" y1="40" x2="200" y2="260" stroke="oklch(0.55 0.05 50)" strokeWidth="0.5" />
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={i} x1="40" y1={60 + i * 20} x2="360" y2={60 + i * 20} stroke="oklch(0.65 0.04 55)" strokeWidth="0.3" />
      ))}
      {Array.from({ length: 18 }).map((_, i) => (
        <line
          key={`ink${i}`}
          x1={45 + (i % 2) * 165}
          y1={68 + Math.floor(i / 2) * 20}
          x2={45 + (i % 2) * 165 + 80 + (i % 4) * 15}
          y2={68 + Math.floor(i / 2) * 20}
          stroke="oklch(0.25 0.04 40)" strokeWidth="0.8" strokeLinecap="round"
        />
      ))}

      <motion.rect
        x="30" y="40" width="340" height="220" rx="4"
        fill="oklch(0.65 0.22 245)"
        animate={{ opacity: [0, 0, 0.25, 0] }}
        transition={{ duration: 4, repeat: Infinity, times: [0, 0.5, 0.62, 1] }}
      />

      <motion.rect
        x="0" y="0" width="400" height="300"
        fill="white"
        animate={{ opacity: [0, 0, 0.9, 0] }}
        transition={{ duration: 4, times: [0, 0.48, 0.5, 0.58], repeat: Infinity }}
      />

      <motion.g
        animate={{ y: [60, 0, 0, 60] }}
        transition={{ duration: 4, times: [0, 0.35, 0.75, 1], repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M 160 290 Q 180 270 200 270 Q 230 270 250 285 L 250 300 L 160 300 Z" fill="oklch(0.55 0.08 40)" />
        <g transform="translate(155, 100)">
          <rect x="0" y="0" width="90" height="170" rx="12" fill="oklch(0.12 0.01 240)" stroke="oklch(0.35 0.02 240)" strokeWidth="1" />
          <rect x="5" y="14" width="80" height="142" rx="4" fill="oklch(0.18 0.02 240)" />
          <rect x="8" y="18" width="74" height="10" rx="2" fill="oklch(0.25 0.03 240)" />
          <circle cx="13" cy="23" r="1.5" fill="oklch(0.65 0.22 245)" />
          <rect x="18" y="22" width="30" height="2" rx="1" fill="oklch(0.7 0.04 240)" />
          <g stroke="oklch(0.82 0.16 165)" strokeWidth="1.5" fill="none">
            <motion.path d="M 14 38 L 14 46 M 14 38 L 22 38"
              animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <motion.path d="M 76 38 L 76 46 M 76 38 L 68 38"
              animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <motion.path d="M 14 138 L 14 130 M 14 138 L 22 138"
              animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
            <motion.path d="M 76 138 L 76 130 M 76 138 L 68 138"
              animate={{ opacity: [0.3, 1, 0.3] }} transition={{ duration: 1.5, repeat: Infinity }} />
          </g>
          <rect x="18" y="50" width="54" height="76" fill="oklch(0.88 0.05 75)" />
          {Array.from({ length: 7 }).map((_, i) => (
            <line key={i} x1="22" y1={56 + i * 10} x2="68" y2={56 + i * 10} stroke="oklch(0.4 0.04 50)" strokeWidth="0.4" />
          ))}
          <circle cx="45" cy="148" r="6" fill="none" stroke="white" strokeWidth="1.2" />
          <motion.circle
            cx="45" cy="148" r="4" fill="oklch(0.65 0.22 245)"
            animate={{ scale: [1, 0.7, 1] }}
            transition={{ duration: 4, times: [0, 0.5, 0.55], repeat: Infinity }}
          />
          <motion.circle
            cx="45" cy="148" r="6" fill="none" stroke="oklch(0.82 0.16 165)" strokeWidth="1"
            animate={{ r: [6, 22], opacity: [0.8, 0] }}
            transition={{ duration: 4, times: [0.48, 0.6], repeat: Infinity }}
          />
        </g>
      </motion.g>
    </svg>
  );
}
