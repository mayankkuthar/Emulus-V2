import { useState, useEffect } from "react";

const NODES = [
  {
    id: "talent",
    label: "Talent Models",
    sub: "managed teams · staff aug",
    angle: -90,
    icon: "👥",
  },
  { id: "software", label: "Software", sub: "builds · platforms", angle: -18, icon: "⌨" },
  { id: "genai", label: "GenAI", sub: "AI workflows · synthesis", angle: 54, icon: "✦" },
  { id: "tech", label: "Technology", sub: "automation · data", angle: 126, icon: "◈" },
  { id: "research", label: "Research", sub: "market · customer", angle: 198, icon: "◎" },
];

const R = 148,
  CX = 190,
  CY = 190;
const toXY = (a: number) => ({
  x: CX + R * Math.cos((a * Math.PI) / 180),
  y: CY + R * Math.sin((a * Math.PI) / 180),
});

export default function OutcomeOrb() {
  const [hov, setHov] = useState<string | null>(null);
  const [act, setAct] = useState<string | null>(null);
  const [entered, setEntered] = useState(false);
  const [rot1, setRot1] = useState(0);
  const [rot2, setRot2] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 80);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    let frame: number;
    const tick = () => {
      setRot1((r) => r + 0.14);
      setRot2((r) => r - 0.09);
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  const cur = hov || act;
  const activeNode = NODES.find((n) => n.id === cur);

  return (
    <div className="oo-orb">
      {/* Canvas */}
      <div className="oo-canvas" style={{ position: "relative", width: 380, height: 380, flexShrink: 0 }}>
        {/* Static rings */}
        {[200, 310].map((size) => (
          <div
            key={size}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: size,
              height: size,
              transform: "translate(-50%,-50%)",
              borderRadius: "50%",
              border: "1px solid var(--c-line)",
              pointerEvents: "none",
            }}
          />
        ))}

        {/* Spinning dashed rings */}
        <div
          className="oo-ring"
          style={{ width: 316, height: 316, transform: `translate(-50%,-50%) rotate(${rot1}deg)` }}
        >
          <div
            className="oo-ring-dot"
            style={{
              background: "var(--c-orange)",
              width: 8,
              height: 8,
              top: -4,
              marginLeft: -4,
              boxShadow: "0 0 6px rgba(229,71,39,0.7)",
            }}
          />
        </div>
        <div
          className="oo-ring"
          style={{
            width: 208,
            height: 208,
            transform: `translate(-50%,-50%) rotate(${rot2}deg)`,
            borderColor: "var(--c-line)",
          }}
        >
          <div
            className="oo-ring-dot"
            style={{
              background: "var(--c-navy)",
              width: 6,
              height: 6,
              top: -3,
              marginLeft: -3,
              opacity: 0.3,
            }}
          />
        </div>

        {/* Connector lines */}
        {NODES.map((n) => {
          const p = toXY(n.angle);
          const dx = p.x - CX,
            dy = p.y - CY;
          const len = Math.sqrt(dx * dx + dy * dy) - 54;
          const ang = Math.atan2(dy, dx) * (180 / Math.PI);
          const isOn = n.id === cur;
          return (
            <div
              key={n.id}
              className="oo-line"
              style={{
                width: len,
                height: isOn ? 1.5 : 1,
                background: isOn ? "rgba(229,71,39,0.4)" : "var(--c-line)",
                transform: `rotate(${ang}deg)`,
              }}
            />
          );
        })}

        {/* Center orb */}
        <div className="oo-center">
          <div className="oo-center-label">The Outcome</div>
          <div className="oo-center-text">
            Decision-ready
            <br />
            outcomes
          </div>
        </div>

        {/* Nodes */}
        {NODES.map((n, i) => {
          const p = toXY(n.angle);
          const isOn = n.id === cur;
          return (
            <div
              key={n.id}
              className="oo-node-wrap"
              style={{
                left: p.x,
                top: p.y,
                opacity: entered ? 1 : 0,
                animation: entered
                  ? `oo-node-in 0.5s cubic-bezier(.34,1.56,.64,1) ${120 + i * 80}ms both`
                  : "none",
              }}
              onMouseEnter={() => setHov(n.id)}
              onMouseLeave={() => setHov(null)}
              onClick={() => setAct(act === n.id ? null : n.id)}
            >
              <div className={`oo-card${isOn ? " on" : ""}`}>
                <div className="oo-dot" />
                <div className="oo-card-label">{n.label}</div>
                <div className="oo-card-sub">{n.sub}</div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
