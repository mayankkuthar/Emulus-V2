import { motion } from "framer-motion";

export function Scene3Scan() {
  const rows = Array.from({ length: 7 });
  const SCAN_DURATION = 5;

  return (
    <svg viewBox="0 0 400 300" className="w-full h-full" style={{ background: "#131931" }}>
      <defs>
        <linearGradient id="s3-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E54727" stopOpacity="0" />
          <stop offset="50%" stopColor="#E54727" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#E54727" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="s3-page" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="100%" stopColor="#F7F7FA" />
        </linearGradient>
      </defs>

      {Array.from({ length: 8 }).map((_, i) => (
        <line key={i} x1="0" y1={40 + i * 35} x2="400" y2={40 + i * 35} stroke="#FFFFFF" strokeOpacity="0.03" />
      ))}

      <g transform="translate(28, 30)">
        <rect width="220" height="240" rx="6" fill="url(#s3-page)" />
        <rect width="220" height="22" fill="#131931" />
        <text x="12" y="15" fill="#FFFFFF" fontSize="10" fontWeight="600" fontFamily="Poppins" letterSpacing="2">
          LEDGER · 14
        </text>
        <text x="208" y="15" textAnchor="end" fill="#E54727" fontSize="9" fontWeight="600" fontFamily="Poppins">
          SCANNING
        </text>

        {rows.map((_, i) => {
          const y = 44 + i * 26;
          const w = 120 + ((i * 17) % 50);
          const triggerStart = (i / rows.length) * 0.85;
          const triggerEnd = triggerStart + 0.06;

          return (
            <g key={i}>
              <line x1="12" y1={y + 12} x2="208" y2={y + 12} stroke="#E5E7EB" strokeWidth="0.5" />
              <motion.path
                d={`M 16 ${y + 6} q 10 -3 20 0 t 20 0 t 18 -1 t 22 1 t 14 0`}
                stroke="#2A3147" strokeWidth="1.4" fill="none" strokeLinecap="round"
              />
              <motion.path
                d={`M 130 ${y + 6} q 8 -2 16 0 t 14 0`}
                stroke="#2A3147" strokeWidth="1.4" fill="none" strokeLinecap="round"
              />

              <motion.rect
                x="14" y={y} width={w} height="16" rx="1"
                fill="none" stroke="#E54727" strokeWidth="1.2" strokeDasharray="3 2"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: [0, 0, 1, 1, 0], scale: [0.96, 0.96, 1, 1, 1] }}
                transition={{
                  duration: SCAN_DURATION,
                  times: [0, triggerStart, triggerEnd, 0.95, 1],
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{ transformOrigin: `${14 + w / 2}px ${y + 8}px` }}
              />
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0, 1, 1, 0] }}
                transition={{ duration: SCAN_DURATION, times: [0, triggerStart, triggerEnd, 0.95, 1], repeat: Infinity }}
              >
                <rect x={w + 18} y={y + 1} width="28" height="13" rx="2" fill="#E54727" />
                <text x={w + 32} y={y + 10} textAnchor="middle" fill="#FFFFFF" fontSize="7" fontWeight="600" fontFamily="Poppins">
                  {95 + (i % 5)}%
                </text>
              </motion.g>
            </g>
          );
        })}

        <motion.rect
          x="0" width="220" height="44"
          fill="url(#s3-beam)"
          animate={{ y: [22, 240, 22] }}
          transition={{ duration: SCAN_DURATION, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="0" x2="220"
          stroke="#E54727" strokeWidth="1.6"
          animate={{ y1: [22, 262, 22], y2: [22, 262, 22] }}
          transition={{ duration: SCAN_DURATION, repeat: Infinity, ease: "linear" }}
          style={{ filter: "drop-shadow(0 0 6px #E54727)" }}
        />

        <rect x="0" y="252" width="220" height="3" fill="#E5E7EB" />
        <motion.rect
          x="0" y="252" height="3" fill="#E54727"
          animate={{ width: [0, 220] }}
          transition={{ duration: SCAN_DURATION, repeat: Infinity, ease: "linear" }}
        />
      </g>

      <g transform="translate(268, 30)">
        <rect width="108" height="240" rx="6" fill="#33384F" />
        <text x="12" y="20" fill="#FFFFFF" fontSize="9" fontWeight="600" fontFamily="Poppins" letterSpacing="2">
          EXTRACTED
        </text>
        <line x1="12" y1="26" x2="96" y2="26" stroke="#E54727" strokeWidth="2" />

        {rows.map((_, i) => {
          const y = 44 + i * 26;
          const triggerStart = (i / rows.length) * 0.85;
          const labels = ["Sugar", "Atta", "Tea", "Soap", "Dal", "Oil", "Rice"];
          const qty = [2, 5, 1, 3, 4, 1, 6][i % 7];
          const amt = [120, 340, 60, 180, 240, 90, 420][i % 7];

          return (
            <motion.g
              key={i}
              initial={{ opacity: 0, x: -6 }}
              animate={{ opacity: [0, 0, 1, 1], x: [-6, -6, 0, 0] }}
              transition={{
                duration: SCAN_DURATION,
                times: [0, triggerStart, triggerStart + 0.08, 1],
                repeat: Infinity,
                ease: "easeOut",
              }}
            >
              <text x="12" y={y + 6} fill="#FFFFFF" fontSize="9" fontWeight="500" fontFamily="Poppins">
                {labels[i]}
              </text>
              <text x="64" y={y + 6} fill="#B7BCD0" fontSize="8" fontFamily="Poppins">
                ×{qty}
              </text>
              <text x="96" y={y + 6} textAnchor="end" fill="#E54727" fontSize="9" fontWeight="600" fontFamily="Poppins">
                ₹{amt}
              </text>
              <line x1="12" y1={y + 10} x2="96" y2={y + 10} stroke="#FFFFFF" strokeOpacity="0.08" />
            </motion.g>
          );
        })}

        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0, 0, 1, 1] }}
          transition={{ duration: SCAN_DURATION, times: [0, 0.7, 0.88, 0.92, 1], repeat: Infinity }}
        >
          <rect x="6" y="216" width="96" height="20" rx="3" fill="#E54727" />
          <text x="12" y="230" fill="#FFFFFF" fontSize="9" fontWeight="600" fontFamily="Poppins">
            TOTAL
          </text>
          <text x="96" y="230" textAnchor="end" fill="#FFFFFF" fontSize="10" fontWeight="700" fontFamily="Poppins">
            ₹1,450
          </text>
        </motion.g>
      </g>
    </svg>
  );
}
