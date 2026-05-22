import { motion } from "framer-motion";

export function Scene6Impact() {
  const kpis = [
    { label: "Villages", value: "412" },
    { label: "Shopkeepers", value: "8.6k" },
    { label: "Transactions / day", value: "92k" },
  ];

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" style={{ background: "#131931" }}>
      <defs>
        <linearGradient id="s6-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#131931" />
          <stop offset="100%" stopColor="#33384F" />
        </linearGradient>
        <linearGradient id="s6-sunbeam" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#E54727" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E54727" stopOpacity="0" />
        </linearGradient>
      </defs>

      <rect width="400" height="300" fill="url(#s6-sky)" />

      <motion.circle
        cx="200" cy="280" r="120"
        fill="#E54727" opacity="0.18"
        initial={{ cy: 360 }}
        animate={{ cy: 250 }}
        transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
      />
      <motion.rect
        x="0" y="120" width="400" height="180"
        fill="url(#s6-sunbeam)"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1] }}
        transition={{ duration: 2, delay: 0.4 }}
      />

      <motion.g
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <path
          d="M 0 230 L 30 218 L 50 228 L 70 210 L 78 218 L 95 220 L 115 200 L 125 210 L 145 222 L 170 208 L 190 222 L 215 200 L 230 215 L 255 212 L 275 200 L 295 218 L 320 210 L 345 224 L 370 215 L 400 222 L 400 300 L 0 300 Z"
          fill="#131931"
        />
        {[40, 88, 130, 200, 260, 330].map((x, i) => (
          <motion.rect
            key={i}
            x={x} y={222} width="2" height="2"
            fill="#E54727"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0.6, 1] }}
            transition={{ duration: 2, delay: 1 + i * 0.15, repeat: Infinity, repeatDelay: 1.5 }}
          />
        ))}
      </motion.g>

      <motion.path
        d="M 30 220 C 90 215 130 200 170 175 S 260 110 380 50"
        fill="none" stroke="#E54727" strokeWidth="3" strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.2, delay: 0.9, ease: "easeOut" }}
        style={{ filter: "drop-shadow(0 0 8px rgba(229,71,39,0.6))" }}
      />
      <motion.path
        d="M 372 56 L 382 48 L 376 62"
        fill="none" stroke="#E54727" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, delay: 3 }}
        style={{ transformOrigin: "378px 55px" }}
      />

      {[
        { x: 90, y: 213 },
        { x: 170, y: 175 },
        { x: 260, y: 120 },
        { x: 340, y: 70 },
      ].map((p, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.2 + i * 0.35, ease: "backOut" }}
        >
          <circle cx={p.x} cy={p.y} r="6" fill="#131931" stroke="#E54727" strokeWidth="2" />
          <circle cx={p.x} cy={p.y} r="2.5" fill="#E54727" />
        </motion.g>
      ))}

      <motion.g
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.4 }}
      >
        <rect x="16" y="22" width="368" height="50" rx="8" fill="#FFFFFF" />
        {kpis.map((k, i) => (
          <g key={k.label} transform={`translate(${30 + i * 125}, 0)`}>
            <text x="0" y="42" fill="#131931" fontSize="18" fontWeight="700" fontFamily="Poppins">
              {k.value}
            </text>
            <text x="0" y="58" fill="#6B7280" fontSize="8" fontWeight="500" fontFamily="Poppins" letterSpacing="1.5">
              {k.label.toUpperCase()}
            </text>
            {i < kpis.length - 1 && (
              <line x1="110" y1="32" x2="110" y2="58" stroke="#E5E7EB" />
            )}
          </g>
        ))}
        <rect x="16" y="22" width="3" height="50" fill="#E54727" rx="1" />
      </motion.g>

      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.2 }}
      >
        <rect x="100" y="248" width="200" height="36" rx="18" fill="#E54727" />
        <text x="200" y="270" textAnchor="middle" fill="#FFFFFF" fontSize="11" fontWeight="600" fontFamily="Poppins" letterSpacing="3">
          PAPER · TO · PIXELS
        </text>
      </motion.g>

      {Array.from({ length: 8 }).map((_, i) => (
        <motion.circle
          key={i}
          cx={40 + (i * 47) % 340}
          cy={90 + ((i * 31) % 90)}
          r="1.2"
          fill="#FFFFFF"
          animate={{ opacity: [0, 0.9, 0] }}
          transition={{ duration: 2.4, delay: i * 0.3, repeat: Infinity }}
        />
      ))}
    </svg>
  );
}
