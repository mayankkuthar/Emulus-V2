import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function HeroBackdrop() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  // Normalized mouse position from -1..1
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const smx = useSpring(mx, { stiffness: 60, damping: 18, mass: 0.6 });
  const smy = useSpring(my, { stiffness: 60, damping: 18, mass: 0.6 });

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width;
      const y = (e.clientY - r.top) / r.height;
      mx.set(x * 2 - 1);
      my.set(y * 2 - 1);
    };
    const onLeave = () => { mx.set(0); my.set(0); };
    window.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my, reduce]);

  // Parallax transforms (different depths)
  const orangeX = useTransform(smx, [-1, 1], [-60, 60]);
  const orangeY = useTransform(smy, [-1, 1], [-40, 40]);
  const blueX = useTransform(smx, [-1, 1], [50, -50]);
  const blueY = useTransform(smy, [-1, 1], [30, -30]);
  const gridX = useTransform(smx, [-1, 1], [-18, 18]);
  const gridY = useTransform(smy, [-1, 1], [-12, 12]);
  const svgX = useTransform(smx, [-1, 1], [-30, 30]);
  const svgY = useTransform(smy, [-1, 1], [-20, 20]);
  const spotX = useTransform(smx, [-1, 1], ["30%", "70%"]);
  const spotY = useTransform(smy, [-1, 1], ["30%", "70%"]);

  const nodes: [number, number][] = [
    [120, 200], [380, 140], [640, 280], [900, 180], [1080, 360],
    [280, 480], [520, 560], [780, 500], [1020, 620],
  ];
  const lines: [number, number, number, number][] = [
    [120, 200, 380, 140], [380, 140, 640, 280], [640, 280, 900, 180],
    [900, 180, 1080, 360], [120, 200, 280, 480], [280, 480, 520, 560],
    [520, 560, 780, 500], [780, 500, 1020, 620], [640, 280, 520, 560],
    [380, 140, 280, 480], [900, 180, 780, 500],
  ];

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Mouse spotlight */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: useTransform(
            [spotX, spotY] as never,
            ([x, y]: string[]) =>
              `radial-gradient(600px circle at ${x} ${y}, rgba(229,71,39,0.22), transparent 60%)`
          ),
        }}
      />

      {/* Parallax grid */}
      <motion.div
        className="absolute inset-[-5%] grid-bg"
        style={{ x: gridX, y: gridY }}
      />

      {/* Orange orb */}
      <motion.div
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full blur-3xl opacity-40"
        style={{
          background: "radial-gradient(circle, #E54727 0%, transparent 65%)",
          x: orangeX, y: orangeY,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Teal/blue orb */}
      <motion.div
        className="absolute -bottom-40 -left-20 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
        style={{
          background: "radial-gradient(circle, #3F8FD9 0%, transparent 65%)",
          x: blueX, y: blueY,
        }}
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating data nodes — parallax layer */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.22]"
        viewBox="0 0 1200 800"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        style={{ x: svgX, y: svgY }}
      >
        <defs>
          <linearGradient id="lineG" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#E54727" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>
          <radialGradient id="nodeG" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#E54727" />
            <stop offset="100%" stopColor="#E54727" stopOpacity="0" />
          </radialGradient>
        </defs>

        {lines.map(([x1, y1, x2, y2], i) => (
          <motion.line
            key={i}
            x1={x1} y1={y1} x2={x2} y2={y2}
            stroke="url(#lineG)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: [0, 1, 1], opacity: [0, 1, 0.5] }}
            transition={{ duration: 3, delay: i * 0.18, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
          />
        ))}

        {/* Traveling pulses along lines */}
        {lines.slice(0, 6).map(([x1, y1, x2, y2], i) => (
          <motion.circle
            key={`p-${i}`}
            r="3" fill="#E54727"
            initial={{ cx: x1, cy: y1, opacity: 0 }}
            animate={{ cx: [x1, x2], cy: [y1, y2], opacity: [0, 1, 0] }}
            transition={{ duration: 2.5, delay: i * 0.4, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}

        {nodes.map(([cx, cy], i) => (
          <g key={i}>
            <motion.circle
              cx={cx} cy={cy} r="14" fill="url(#nodeG)"
              animate={{ scale: [1, 1.8, 1], opacity: [0.4, 0.1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.25 }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
            <motion.circle
              cx={cx} cy={cy} r="4" fill="#E54727"
              animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.3 }}
              style={{ transformOrigin: `${cx}px ${cy}px` }}
            />
          </g>
        ))}
      </motion.svg>

      {/* Floating particles */}
      {!reduce && Array.from({ length: 18 }).map((_, i) => {
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const dur = 6 + (i % 5) * 1.5;
        return (
          <motion.span
            key={i}
            className="absolute w-1 h-1 rounded-full bg-orange/60"
            style={{ left: `${left}%`, top: `${top}%` }}
            animate={{ y: [0, -30, 0], opacity: [0, 1, 0] }}
            transition={{ duration: dur, repeat: Infinity, delay: i * 0.25, ease: "easeInOut" }}
          />
        );
      })}
    </div>
  );
}
