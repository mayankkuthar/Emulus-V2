import { motion } from "framer-motion";

export function Scene5Dashboard() {
  const bars = [40, 65, 50, 80, 60, 95, 75];
  const pins = [
    { x: 60, y: 40 }, { x: 110, y: 70 }, { x: 160, y: 50 },
    { x: 90, y: 95 }, { x: 145, y: 110 }, { x: 50, y: 90 },
    { x: 180, y: 85 }, { x: 130, y: 35 },
  ];

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" style={{ background: "linear-gradient(160deg, oklch(0.2 0.04 240), oklch(0.14 0.03 240))" }}>
      <defs>
        <linearGradient id="barGrad" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="oklch(0.65 0.22 245)" />
          <stop offset="100%" stopColor="oklch(0.82 0.16 165)" />
        </linearGradient>
      </defs>

      <rect x="15" y="15" width="370" height="270" rx="8" fill="oklch(0.18 0.03 240)" stroke="oklch(0.3 0.04 240)" strokeWidth="1" />
      <rect x="15" y="15" width="370" height="22" rx="8" fill="oklch(0.22 0.04 240)" />
      <circle cx="27" cy="26" r="3" fill="oklch(0.6 0.2 27)" />
      <circle cx="38" cy="26" r="3" fill="oklch(0.78 0.16 70)" />
      <circle cx="49" cy="26" r="3" fill="oklch(0.82 0.16 165)" />
      <text x="200" y="30" fill="oklch(0.75 0.03 240)" fontSize="9" fontFamily="monospace" textAnchor="middle">analytics.gramvikas.dashboard</text>

      {[
        { x: 28, label: "Txns", val: "24.8k" },
        { x: 118, label: "Shops", val: "1,240" },
        { x: 208, label: "Villages", val: "86" },
      ].map((c, i) => (
        <g key={c.label} transform={`translate(${c.x}, 48)`}>
          <rect width="82" height="44" rx="5" fill="oklch(0.22 0.04 240)" stroke="oklch(0.3 0.05 245)" strokeWidth="0.5" />
          <text x="8" y="16" fill="oklch(0.7 0.04 240)" fontSize="8" fontFamily="monospace">{c.label.toUpperCase()}</text>
          <motion.text
            x="8" y="35" fill="oklch(0.82 0.16 165)" fontSize="16" fontFamily="monospace" fontWeight="700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 + i * 0.2 }}
          >{c.val}</motion.text>
          <motion.path
            d="M 50 32 L 58 22 L 64 26 L 72 14"
            fill="none" stroke="oklch(0.82 0.16 165)" strokeWidth="1.2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1] }}
            transition={{ duration: 1.5, delay: 0.7 + i * 0.2, repeat: Infinity, repeatDelay: 3 }}
          />
        </g>
      ))}

      <g transform="translate(28, 110)">
        <text x="0" y="0" fill="oklch(0.7 0.04 240)" fontSize="8" fontFamily="monospace">REGIONAL GROWTH</text>
        <line x1="0" y1="100" x2="220" y2="100" stroke="oklch(0.3 0.04 240)" strokeWidth="0.5" />
        {bars.map((h, i) => (
          <motion.rect
            key={i}
            x={i * 30 + 4}
            width="22"
            rx="2"
            fill="url(#barGrad)"
            initial={{ height: 0, y: 100 }}
            animate={{ height: h, y: 100 - h }}
            transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut", repeat: Infinity, repeatType: "reverse", repeatDelay: 2 }}
          />
        ))}
        <motion.path
          d={`M ${bars.map((h, i) => `${i * 30 + 15},${100 - h - 5}`).join(" L ")}`}
          fill="none" stroke="oklch(0.78 0.16 70)" strokeWidth="1.5"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1] }}
          transition={{ duration: 2, delay: 1, repeat: Infinity, repeatDelay: 2 }}
          style={{ filter: "drop-shadow(0 0 3px oklch(0.78 0.16 70))" }}
        />
      </g>

      <g transform="translate(260, 110)">
        <text x="0" y="0" fill="oklch(0.7 0.04 240)" fontSize="8" fontFamily="monospace">VILLAGE MAP</text>
        <rect x="0" y="8" width="115" height="130" rx="4" fill="oklch(0.16 0.03 240)" stroke="oklch(0.3 0.04 240)" strokeWidth="0.5" />
        {Array.from({ length: 5 }).map((_, i) => (
          <g key={i}>
            <line x1="0" y1={8 + i * 32} x2="115" y2={8 + i * 32} stroke="oklch(0.25 0.03 240)" strokeWidth="0.3" />
            <line x1={i * 28} y1="8" x2={i * 28} y2="138" stroke="oklch(0.25 0.03 240)" strokeWidth="0.3" />
          </g>
        ))}
        {pins.map((p, i) => (
          <motion.g key={i} transform={`translate(${p.x * 0.55}, ${p.y + 10})`}>
            <motion.circle
              r="3" fill="oklch(0.82 0.16 165)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{ duration: 0.6, delay: i * 0.18, repeat: Infinity, repeatDelay: 4 }}
              style={{ filter: "drop-shadow(0 0 4px oklch(0.82 0.16 165))" }}
            />
            <motion.circle
              r="3" fill="none" stroke="oklch(0.82 0.16 165)" strokeWidth="1"
              animate={{ r: [3, 10], opacity: [0.8, 0] }}
              transition={{ duration: 1.5, delay: i * 0.18, repeat: Infinity, repeatDelay: 3 }}
            />
          </motion.g>
        ))}
      </g>

      <g transform="translate(355, 240)">
        <circle cx="0" cy="0" r="6" fill="oklch(0.65 0.22 245)" />
        <path d="M -10 30 Q -8 10 0 8 Q 8 10 10 30 Z" fill="oklch(0.65 0.22 245)" />
        <motion.path
          d="M 5 14 L 18 4"
          stroke="oklch(0.65 0.22 245)" strokeWidth="3" strokeLinecap="round"
          animate={{ d: ["M 5 14 L 18 4", "M 5 14 L 20 0", "M 5 14 L 18 4"] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </g>
    </svg>
  );
}
