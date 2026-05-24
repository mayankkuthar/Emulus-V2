const bars = [
  { label: "Apr", h: 26 },
  { label: "May", h: 38 },
  { label: "Jun", h: 32 },
  { label: "Jul", h: 50 },
  { label: "Aug", h: 40 },
  { label: "Sep", h: 59 },
  { label: "Oct", h: 47 },
  { label: "Nov", h: 67 },
];

const mapPins = [
  { x: 22, y: 18 },
  { x: 60, y: 12 },
  { x: 102, y: 22 },
  { x: 36, y: 50 },
  { x: 78, y: 44 },
  { x: 112, y: 38 },
  { x: 20, y: 80 },
  { x: 56, y: 76 },
  { x: 96, y: 88 },
  { x: 130, y: 68 },
  { x: 34, y: 108 },
  { x: 74, y: 114 },
  { x: 126, y: 118 },
];

export function Scene5Dashboard() {
  return (
    <svg viewBox="0 0 400 300" className="w-full h-full">
      <defs>
        <linearGradient id="barFill" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#f99467" />
          <stop offset="100%" stopColor="#e54727" />
        </linearGradient>
      </defs>

      {/* Card background */}
      <rect width="400" height="300" rx="12" fill="#ffffff" stroke="#e5e7eb" strokeWidth="0.5" />

      {/* ── TOP BAR ── */}
      <rect width="400" height="28" rx="12" fill="#131931" />
      <rect y="18" width="400" height="10" fill="#131931" />
      <circle cx="14" cy="14" r="3" fill="#e54727" />
      <text x="22" y="18" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#ffffff">Gramvikas Analytics</text>
      <rect x="340" y="6" width="42" height="16" rx="8" fill="rgba(229,71,39,0.15)" stroke="rgba(229,71,39,0.4)" strokeWidth="0.6" />
      <circle cx="348" cy="14" r="2" fill="#e54727" />
      <text x="353" y="18" fontFamily="system-ui,sans-serif" fontSize="7" fontWeight="700" fill="#e54727" letterSpacing="0.8">LIVE</text>

      {/* ── KPI ROW ── */}
      <line x1="0" y1="28" x2="400" y2="28" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="133" y1="28" x2="133" y2="72" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="266" y1="28" x2="266" y2="72" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="0" y1="72" x2="400" y2="72" stroke="#e5e7eb" strokeWidth="0.5" />

      {/* KPI 1 */}
      <text x="12" y="38" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="500" fill="#6b7280" letterSpacing="0.6">TRANSACTIONS</text>
      <text x="12" y="55" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#131931">24.8k</text>
      <text x="12" y="65" fontFamily="system-ui,sans-serif" fontSize="6" fill="#059669">▲ 12.4%</text>
      <rect x="12" y="67" width="110" height="1.5" rx="0.75" fill="#f3f4f6" />
      <rect x="12" y="67" width="86" height="1.5" rx="0.75" fill="#e54727" />

      {/* KPI 2 */}
      <text x="144" y="38" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="500" fill="#6b7280" letterSpacing="0.6">ACTIVE SHOPS</text>
      <text x="144" y="55" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#131931">1,240</text>
      <text x="144" y="65" fontFamily="system-ui,sans-serif" fontSize="6" fill="#059669">▲ 8.7%</text>
      <rect x="144" y="67" width="110" height="1.5" rx="0.75" fill="#f3f4f6" />
      <rect x="144" y="67" width="68" height="1.5" rx="0.75" fill="#e54727" />

      {/* KPI 3 */}
      <text x="278" y="38" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="500" fill="#6b7280" letterSpacing="0.6">VILLAGES</text>
      <text x="278" y="55" fontFamily="system-ui,sans-serif" fontSize="16" fontWeight="700" fill="#131931">86</text>
      <text x="278" y="65" fontFamily="system-ui,sans-serif" fontSize="6" fill="#dc2626">▼ 3 pending</text>
      <rect x="278" y="67" width="110" height="1.5" rx="0.75" fill="#f3f4f6" />
      <rect x="278" y="67" width="50" height="1.5" rx="0.75" fill="#e54727" />

      {/* ── CONTENT ROW ── */}
      <line x1="250" y1="72" x2="250" y2="230" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="0" y1="230" x2="400" y2="230" stroke="#e5e7eb" strokeWidth="0.5" />

      {/* Chart panel */}
      <text x="12" y="84" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="600" fill="#6b7280" letterSpacing="0.6">REGIONAL GROWTH</text>

      {/* Y grid */}
      {[96, 114, 132, 150, 168].map((y) => (
        <line key={y} x1="12" y1={y} x2="240" y2={y} stroke="#f3f4f6" strokeWidth="0.5" />
      ))}
      {["5k", "4k", "3k", "2k", "1k"].map((l, i) => (
        <text key={l} x="10" y={100 + i * 18} fontFamily="system-ui,sans-serif" fontSize="5" fill="#6b7280" textAnchor="end" dominantBaseline="middle">{l}</text>
      ))}

      {/* Bars — static y and height computed directly */}
      {bars.map((b, i) => {
        const x = 14 + i * 28;
        const y = 172 - b.h;
        return (
          <rect
            key={b.label}
            x={x}
            y={y}
            width="18"
            height={b.h}
            rx="2"
            fill={i === 7 ? "#e54727" : "url(#barFill)"}
          />
        );
      })}
      {bars.map((b, i) => (
        <text key={b.label} x={23 + i * 28} y={178} fontFamily="system-ui,sans-serif" fontSize="5" fill="#6b7280" textAnchor="middle">{b.label}</text>
      ))}

      {/* Trend line */}
      <polyline
        points={bars.map((b, i) => `${23 + i * 28},${172 - b.h - 4}`).join(" ")}
        fill="none" stroke="#131931" strokeWidth="1.2" strokeDasharray="2.5 2" strokeLinecap="round" strokeLinejoin="round"
      />
      {bars.map((b, i) => (
        <circle key={i} cx={23 + i * 28} cy={172 - b.h - 4} r={i === 7 ? 2.5 : 1.5} fill="#131931" />
      ))}

      {/* ── MAP PANEL ── */}
      <text x="260" y="84" fontFamily="system-ui,sans-serif" fontSize="6" fontWeight="600" fill="#6b7280" letterSpacing="0.6">VILLAGE MAP</text>
      <rect x="258" y="88" width="134" height="135" rx="6" fill="#f7f7fa" />

      {/* Map grid */}
      {[108, 128, 148, 168, 188].map((y) => (
        <line key={y} x1="258" y1={y} x2="392" y2={y} stroke="#e5e7eb" strokeWidth="0.3" />
      ))}
      {[291, 325, 358].map((x) => (
        <line key={x} x1={x} y1="88" x2={x} y2="223" stroke="#e5e7eb" strokeWidth="0.3" />
      ))}

      {/* Map pins — static circles */}
      {mapPins.map((p, i) => (
        <circle
          key={i}
          cx={258 + p.x}
          cy={88 + p.y}
          r="3"
          fill="#e54727"
        />
      ))}

      {/* Active / pending legend */}
      <circle cx="262" cy="227" r="2.5" fill="#e54727" />
      <text x="268" y="230" fontFamily="system-ui,sans-serif" fontSize="6" fill="#6b7280">Active</text>
      <circle cx="310" cy="227" r="2" fill="#fbf1ee" stroke="#e54727" strokeWidth="1" />
      <text x="316" y="230" fontFamily="system-ui,sans-serif" fontSize="6" fill="#6b7280">Pending</text>

      {/* ── FOOTER ROW ── */}
      <line x1="0" y1="230" x2="400" y2="230" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="100" y1="230" x2="100" y2="262" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="200" y1="230" x2="200" y2="262" stroke="#e5e7eb" strokeWidth="0.5" />
      <line x1="300" y1="230" x2="300" y2="262" stroke="#e5e7eb" strokeWidth="0.5" />

      {[
        { label: "AVG TXN", value: "₹847", sub: "+5.2%" },
        { label: "DISTRICTS", value: "14", sub: "Rajasthan" },
        { label: "DAILY ACTIVE", value: "892", sub: "shops today" },
        { label: "UPTIME", value: "99.8%", sub: "Reliability" },
      ].map((cell, i) => (
        <g key={cell.label} transform={`translate(${i * 100}, 230)`}>
          <text x="12" y="242" fontFamily="system-ui,sans-serif" fontSize="5.5" fontWeight="500" fill="#6b7280" letterSpacing="0.5">{cell.label}</text>
          <text x="12" y="256" fontFamily="system-ui,sans-serif" fontSize="11" fontWeight="700" fill="#131931">{cell.value}</text>
          <text x="12" y="260" fontFamily="system-ui,sans-serif" fontSize="5.5" fill="#6b7280">{cell.sub}</text>
        </g>
      ))}

      {/* ── BOTTOM TAGLINE ── */}
      <rect x="0" y="262" width="400" height="38" fill="#fbf1ee" />
      <text x="14" y="278" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="600" fill="#131931">Operating principle —</text>
      <text x="108" y="278" fontFamily="system-ui,sans-serif" fontSize="8" fill="#2a3147">Every transaction brings a village closer to</text>
      <text x="318" y="278" fontFamily="system-ui,sans-serif" fontSize="8" fontWeight="700" fill="#e54727">financial inclusion.</text>
    </svg>
  );
}