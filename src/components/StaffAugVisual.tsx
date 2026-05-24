import { motion } from "framer-motion";

export function StaffAugVisual() {
  return (
    <svg viewBox="0 0 520 480" className="w-full h-full" style={{ background: "#ffffff" }}>
      <defs>
        <filter id="pulseGlow">
          <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#e54727" floodOpacity="0.4" />
        </filter>
      </defs>

      {/* Subtle dot grid */}
      {[60, 130, 200, 270, 340, 410].flatMap(cx =>
        [90, 400].map(cy => (
          <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.5" fill="#131931" opacity="0.05" />
        ))
      )}
      {[60, 450].map(cx =>
        <circle key={`${cx}-mid`} cx={cx} cy="230" r="1.5" fill="#131931" opacity="0.05" />
      )}

      {/* ── SPOKE LINES ── */}
      <motion.line
        x1="260" y1="190" x2="260" y2="120" stroke="#33384F" strokeWidth="1.5" strokeDasharray="5 5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.1 }}
      />
      <motion.line
        x1="290" y1="210" x2="378" y2="135" stroke="#33384F" strokeWidth="1.5" strokeDasharray="5 5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.2 }}
      />
      <motion.line
        x1="305" y1="240" x2="410" y2="240" stroke="#33384F" strokeWidth="1.5" strokeDasharray="5 5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.3 }}
      />
      <motion.line
        x1="285" y1="265" x2="370" y2="355" stroke="#33384F" strokeWidth="1.5" strokeDasharray="5 5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.4 }}
      />
      <motion.line
        x1="230" y1="265" x2="150" y2="355" stroke="#33384F" strokeWidth="1.5" strokeDasharray="5 5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.5 }}
      />
      <motion.line
        x1="215" y1="240" x2="110" y2="240" stroke="#33384F" strokeWidth="1.5" strokeDasharray="5 5" fill="none"
        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1, delay: 0.6 }}
      />

      {/* ── PEER CONNECTIONS ── */}
      {[
        [260, 90, 385, 128],
        [260, 90, 135, 128],
        [420, 215, 390, 360],
        [100, 215, 130, 360],
        [370, 375, 150, 375],
      ].map(([x1, y1, x2, y2], i) => (
        <motion.line
          key={`peer-${i}`}
          x1={x1} y1={y1} x2={x2} y2={y2}
          stroke="#E5E7EB" strokeWidth="1" strokeDasharray="3 7" fill="none"
          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.8 + i * 0.15 }}
        />
      ))}

      {/* ── HUB NODE ── */}
      <g>
        <circle cx="260" cy="240" r="48" fill="#131931" />
        <circle cx="260" cy="223" r="13" fill="#D7D9E2" />
        <path d="M228 271 Q228 249 260 249 Q292 249 292 271Z" fill="#D7D9E2" />
        <circle cx="282" cy="208" r="6" fill="#e54727" filter="url(#pulseGlow)" />
        <circle cx="282" cy="208" r="3.5" fill="#ffffff" />
      </g>

      {/* ── SATELLITE NODES ── */}
      {[
        { cx: 260, cy: 78 },
        { cx: 395, cy: 135 },
        { cx: 430, cy: 240 },
        { cx: 385, cy: 370 },
        { cx: 135, cy: 370 },
        { cx: 90, cy: 240 },
      ].map((n, i) => (
        <motion.g
          key={i}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 + i * 0.12 }}
        >
          <circle cx={n.cx} cy={n.cy} r="36" fill="#F7F7FA" stroke="#33384F" strokeWidth="1" />
          <circle cx={n.cx} cy={n.cy - 12} r="10" fill="#2A3147" />
          <path d={`M${n.cx - 19} ${n.cy + 18} Q${n.cx - 19} ${n.cy + 5} ${n.cx} ${n.cy + 5} Q${n.cx + 19} ${n.cy + 5} ${n.cx + 19} ${n.cy + 18}Z`} fill="#2A3147" />
          <circle cx={n.cx + 12} cy={n.cy - 21} r="5" fill="#e54727" />
        </motion.g>
      ))}

      {/* ── LABELS ── */}
      <text x="260" y="24" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="500" fill="#131931" textAnchor="middle" letterSpacing="2">DISTRIBUTED TEAM NETWORK</text>
      <rect x="197" y="30" width="126" height="2" rx="1" fill="#e54727" />

      <text x="260" y="450" fontFamily="system-ui,sans-serif" fontSize="9" fill="#6B7280" textAnchor="middle" letterSpacing="1.5">REMOTE · CONNECTED · COLLABORATIVE</text>
      <line x1="85" y1="458" x2="435" y2="458" stroke="#E5E7EB" strokeWidth="1" />
      <line x1="85" y1="458" x2="155" y2="458" stroke="#e54727" strokeWidth="2" />
    </svg>
  );
}
