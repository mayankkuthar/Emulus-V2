import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Brain, Search, Database, Code2, Users, Heart } from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { useSEO } from "@/lib/useSEO";

/* ── Animated SVG chart panel ── */
const logs = [
  "ingest::pipeline.v3 → batch 4,812 rows",
  "model::risk-score → inference 12ms",
  "genai::summary → 24 tokens drafted",
  "segment::cohort_A → drift 0.04σ",
  "eval::accuracy → 98.2% holdout",
  "agent::plan → 3 actions queued",
  "kpi::churn → -3.4% wow",
  "feature::v_engagement → recomputed",
];

function HeroDataPanel() {
  const lineRef = useRef<SVGPathElement>(null);
  const areaRef = useRef<SVGPathElement>(null);
  const dotRef = useRef<SVGCircleElement>(null);
  const phase = useRef(0);
  const [logIdx, setLogIdx] = useState(0);
  const [kpis, setKpis] = useState(["0", "0%", "0"]);

  useEffect(() => {
    const W = 600, H = 260, pts = 36;
    const render = () => {
      let d = "";
      let lx = 0, ly = 0;
      for (let i = 0; i < pts; i++) {
        const x = (i / (pts - 1)) * W;
        const t = i / (pts - 1);
        const y =
          90 - t * 60 +
          Math.sin(i * 0.5 + phase.current) * 14 +
          Math.sin(i * 0.17 + phase.current * 0.7) * 18 +
          Math.cos(i * 0.31 + phase.current * 1.3) * 8 +
          (1 - t) * 14;
        d += (i === 0 ? "M" : "L") + x.toFixed(1) + " " + y.toFixed(1) + " ";
        lx = x; ly = y;
      }
      lineRef.current?.setAttribute("d", d);
      areaRef.current?.setAttribute("d", d + `L${W} ${H} L0 ${H}Z`);
      dotRef.current?.setAttribute("cx", lx.toFixed(1));
      dotRef.current?.setAttribute("cy", ly.toFixed(1));
    };
    render();
    const id = setInterval(() => { phase.current += 0.06; render(); }, 60);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const id = setInterval(() => setLogIdx((i) => (i + 1) % logs.length), 2200);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const targets = [12834, 98.2, 47];
    const dur = 1800;
    const t0 = performance.now();
    const tick = () => {
      const k = Math.min(1, (performance.now() - t0) / dur);
      const e = 1 - Math.pow(1 - k, 3);
      setKpis([
        (targets[0] * e | 0).toLocaleString(),
        (targets[1] * e).toFixed(1) + "%",
        (targets[2] * e | 0).toString(),
      ]);
      if (k < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  return (
    <div className="hero-vis">
      <div className="panel-head">
        <span className="panel-title">
          <span className="dots-os"><i /><i /><i /></span>
          <span><b>emulus.</b>insights · production</span>
        </span>
        <span className="panel-title" style={{ opacity: 0.7, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: "50%" }}>
          {logs[logIdx]}
        </span>
      </div>

      <div className="chart">
        <div className="chart-grid" />
        <div className="chart-labels">
          <span className="live-pill"><i />Live</span>
          <span>Decisions / hour · <b>last 24h</b></span>
        </div>
        <svg viewBox="0 0 600 260" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}>
          <defs>
            <linearGradient id="lineGrad" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#ff8d5e" />
              <stop offset="100%" stopColor="#e54727" />
            </linearGradient>
            <linearGradient id="areaGrad" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="rgba(229,71,39,0.35)" />
              <stop offset="100%" stopColor="rgba(229,71,39,0)" />
            </linearGradient>
          </defs>
          <path ref={areaRef} fill="url(#areaGrad)" />
          <path ref={lineRef} stroke="url(#lineGrad)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle ref={dotRef} r="5" fill="#e54727">
            <animate attributeName="r" values="5;9;5" dur="1.6s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="1;0.4;1" dur="1.6s" repeatCount="indefinite" />
          </circle>
        </svg>
      </div>

      <div className="kpis">
        {[
          { lab: "Records / sec", val: kpis[0], delta: "+18.4% wow" },
          { lab: "Model accuracy", val: kpis[1], delta: "+1.2 pts" },
          { lab: "Agents online", val: kpis[2], delta: "+6 today" },
        ].map((k) => (
          <div key={k.lab} className="kpi">
            <div className="lab">{k.lab}</div>
            <div className="val">{k.val}</div>
            <div className="delta">{k.delta}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Animated stat counter ── */
function StatCounter({ value, suffix = "", decimals = 0, label }: { value: number; suffix?: string; decimals?: number; label: string }) {
  const [n, setN] = useState(0);
  const fired = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) {
        fired.current = true;
        io.disconnect();
        const dur = 1500, t0 = performance.now();
        const tick = () => {
          const k = Math.min(1, (performance.now() - t0) / dur);
          setN(value * (1 - Math.pow(1 - k, 3)));
          if (k < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="stat-cell">
      <div className="stat-num">
        {n.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}
        {suffix && <span className="suffix">{suffix}</span>}
      </div>
      <div className="stat-lab">{label}</div>
    </div>
  );
}

/* ── Animated bar chart ── */
function MiniChart({ heights, variant }: { heights: number[]; variant: "dark" | "light" }) {
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); io.disconnect(); }
    }, { threshold: 0.4 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className="mini-chart">
      <div className="bars">
        {heights.map((h, i) => (
          <i key={i} style={{ height: started ? `${h}%` : "0%", transitionDelay: `${i * 90}ms` }} />
        ))}
      </div>
    </div>
  );
}

/* ── Cap card with mouse-glow ── */
const capabilities = [
  {
    icon: Brain,
    title: "Generative AI Consulting",
    body: "Agentic workflows, RAG systems, and operationalized analytics built for production-grade reliability.",
    href: "/services",
  },
  {
    icon: Search,
    title: "Market Research & Insights",
    body: "Primary surveys, interviews, FGDs and competitive intelligence with statistical rigor and human depth.",
    href: "/services",
  },
  {
    icon: Database,
    title: "Data Engineering & Analytics",
    body: "Pipelines, warehouses, BI dashboards, and visual storytelling that drives action — not slide decks.",
    href: "/services",
  },
  {
    icon: Code2,
    title: "Software Services & Products",
    body: "Full-stack product lifecycle: discovery, agile delivery, resilient deployment, and post-launch ops.",
    href: "/services",
  },
  {
    icon: Users,
    title: "Staff Augmentation",
    body: "Embed senior data scientists, ML engineers and analysts directly into your roadmap.",
    href: "/careers",
  },
  {
    icon: Heart,
    title: "Social Enterprises & NGOs",
    body: "Impact measurement, MIS platforms, and analytics for purpose-led organizations and field teams.",
    href: "/services",
  },
];

function CapCard({ icon: Icon, title, body, href }: (typeof capabilities)[0]) {
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) + "px");
    e.currentTarget.style.setProperty("--my", (e.clientY - r.top) + "px");
  };
  return (
    <article className="cap" onMouseMove={onMouseMove}>
      <div className="cap-ico">
        <Icon size={22} strokeWidth={1.8} />
      </div>
      <h3>{title}</h3>
      <p>{body}</p>
      <Link to={href} className="cap-link">Learn more →</Link>
    </article>
  );
}

/* ── Hero cursor spotlight ── */
function HeroSpot() {
  const spotRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const hero = spotRef.current?.parentElement;
    if (!hero) return;
    heroRef.current = hero as HTMLElement;
    const onMove = (e: MouseEvent) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      spotRef.current?.style.setProperty("--sx", x + "%");
      spotRef.current?.style.setProperty("--sy", y + "%");
    };
    hero.addEventListener("mousemove", onMove);
    return () => hero.removeEventListener("mousemove", onMove);
  }, []);

  return <div ref={spotRef} className="spot" />;
}

export default function Home() {
  useSEO({
    title: "Emulus Consulting LLP — Data-Backed Insights. AI-Driven Impact.",
    description:
      "Emulus is a global consulting partner for market research, data engineering, software, and Generative AI — helping enterprises and social-impact teams ship outcomes.",
  });

  return (
    <PageShell>
      {/* ── HERO ── */}
      <section className="hero" id="top">
        <HeroSpot />
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow"><span className="dot" /> Data-backed insights · AI-driven impact</p>
            <h1>
              Turn complex data<br />
              into <span className="accent">decisions</span> that<br />
              move your business.
            </h1>
            <p className="sub">
              Emulus is a global consulting partner for market research, data engineering,
              software, and Generative AI — helping enterprises and social-impact teams ship
              outcomes, not just dashboards.
            </p>
            <div className="cta-row">
              <Link to="/contact" className="btn btn-accent">
                Book a discovery call
                <ArrowRight className="arr" style={{ width: 14, height: 14 }} />
              </Link>
              <Link to="/case-studies" className="btn btn-ghost">See case studies</Link>
            </div>
            <div className="trust">
              <span className="avatars" aria-hidden="true">
                <span>RD</span><span>EM</span><span>FA</span><span>SR</span>
              </span>
              <span>Trusted by teams in <b style={{ color: "#131931" }}>4 countries</b> across pharma, BFSI &amp; impact.</span>
            </div>
          </div>
          <HeroDataPanel />
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="marquee-strip" aria-label="Selected clients">
        <div className="marquee-row">
          {["Pharma Co", "Global BFSI", "Life Sciences", "Rural Dev NGO", "Education Trust", "FinTech Lab", "MedTech Inc", "Impact Fund", "HealthLine", "Atlas Capital",
            "Pharma Co", "Global BFSI", "Life Sciences", "Rural Dev NGO", "Education Trust", "FinTech Lab", "MedTech Inc", "Impact Fund", "HealthLine", "Atlas Capital"].map((n, i) => (
            <span key={i}>{n}</span>
          ))}
        </div>
      </div>

      {/* ── STATS ── */}
      <div className="wrap" style={{ paddingTop: 80, paddingBottom: 0 }}>
        <div className="stats-grid">
          <StatCounter value={4} label="Countries served" />
          <StatCounter value={50} suffix="+" label="Engagements delivered" />
          <StatCounter value={98.2} decimals={1} suffix="%" label="Avg. model accuracy" />
          <StatCounter value={24} suffix="/7" label="On-call AI engineers" />
        </div>
      </div>

      {/* ── CAPABILITIES ── */}
      <section className="block" id="capabilities">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Capabilities</p>
              <h2>Six capabilities,<br />one outcome: <em style={{ fontStyle: "normal", color: "#e54727" }}>clarity.</em></h2>
            </div>
            <p>
              We combine research rigor with engineering discipline and modern AI — a single
              team that goes from raw data to working product, end to end.
            </p>
          </div>
          <div className="caps">
            {capabilities.map((c) => <CapCard key={c.title} {...c} />)}
          </div>
        </div>
      </section>

      {/* ── PIPELINE / HOW WE WORK ── */}
      <section className="block pipeline-section" id="solutions">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow on-dark"><span className="dot" /> How we work</p>
              <h2>From raw data<br />→ insights<br />→ AI-driven decisions.</h2>
            </div>
            <p>
              A three-stage operating model. Every engagement begins with measurable
              outcomes, and ends with a live system your team owns.
            </p>
          </div>
          <div className="pipeline">
            <div className="pipe-line-bar" aria-hidden="true" />
            {[
              {
                num: "01", title: "Raw Data",
                body: "We integrate sources you already have — and the ones you didn't know you needed. Surveys, sensors, systems, field teams.",
                tags: ["Surveys", "ETL", "Field ops", "APIs"],
              },
              {
                num: "02", title: "Insights",
                body: "Cleaned, modeled, contextualized. Statistical baselines meet business questions to produce signal — not noise.",
                tags: ["Modeling", "BI", "Storytelling"],
              },
              {
                num: "03", title: "AI-Driven Decisions",
                body: "Insights operationalized through GenAI — agents, copilots and automations embedded where the work actually happens.",
                tags: ["Agents", "RAG", "Automations", "Eval"],
              },
            ].map((s) => (
              <article key={s.num} className="pipe-card">
                <div className="pipe-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="pipe-tags">
                  {s.tags.map((t) => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES SPLIT ── */}
      <section className="block" id="industries">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Industries</p>
              <h2>Built for enterprises.<br />Honed for impact.</h2>
            </div>
            <p>
              Same toolkit, different velocity. We meet you where you are — whether that's
              a regulated pharma rollout or a field-team MIS deployed in 12 districts.
            </p>
          </div>
          <div className="split">
            <article className="split-card dark">
              <div>
                <p className="eyebrow on-dark"><span className="dot" /> Commercial clients</p>
                <h3>Pharma, BFSI, life sciences &amp; enterprise.</h3>
                <p>Decision intelligence, growth analytics and AI products built with the rigor that regulated industries require.</p>
                <div className="tag-row">
                  {["Pharma", "BFSI", "Life sciences", "SaaS"].map((t) => (
                    <span key={t} className="split-tag">{t}</span>
                  ))}
                </div>
              </div>
              <MiniChart heights={[40, 55, 38, 68, 62, 80, 70, 92, 78, 88]} variant="dark" />
            </article>
            <article className="split-card light">
              <div>
                <p className="eyebrow"><span className="dot" /> Social impact</p>
                <h3>Driving impact you can measure.</h3>
                <p>Custom MIS, results-monitoring platforms and analytics-driven program evaluation for NGOs and not-for-profits.</p>
                <div className="tag-row">
                  {["Education", "Health", "Livelihoods", "Field MIS"].map((t) => (
                    <span key={t} className="split-tag">{t}</span>
                  ))}
                </div>
              </div>
              <MiniChart heights={[30, 45, 58, 50, 72, 62, 84, 70, 90, 78]} variant="light" />
            </article>
          </div>
        </div>
      </section>

      {/* ── SELECTED WORK ── */}
      <section className="block" id="work" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Selected work</p>
              <h2>Outcomes, not output.</h2>
            </div>
            <p>
              A few of the engagements we're proud of — from BFSI risk models to district-scale
              impact dashboards.
            </p>
          </div>
          <div className="cases">
            {[
              {
                cover: "case-cover-navy",
                tag: "Pharma · Decision Intelligence",
                stat: "3.2×",
                statLabel: "ROI",
                title: "Forecasting field-rep effectiveness across 14 markets.",
                body: "Replaced a spreadsheet-driven planning cycle with a live forecasting engine and embedded LLM summaries.",
              },
              {
                cover: "case-cover-orange",
                tag: "BFSI · Risk Modeling",
                stat: "-38%",
                statLabel: "defaults",
                title: "Real-time credit-risk scoring on a streaming pipeline.",
                body: "Cut decisioning latency from 6 hours to 90 seconds with a Spark + feature-store rebuild.",
              },
              {
                cover: "case-cover-teal",
                tag: "NGO · Impact MIS",
                stat: "12",
                statLabel: "districts",
                title: "An MIS that turned 240 field workers into a real-time program.",
                body: "Offline-first data collection + a results-monitoring dashboard funders can read at a glance.",
              },
            ].map((c) => (
              <article key={c.title} className="case">
                <div className={`case-cover ${c.cover}`}>
                  <div className="case-meta">
                    <span>{c.tag}</span>
                    <span>{c.stat} {c.statLabel}</span>
                  </div>
                </div>
                <div className="case-body">
                  <h3>{c.title}</h3>
                  <p>{c.body}</p>
                  <Link to="/case-studies" className="case-read">Read case study →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ── */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="testimonial">
            <p className="eyebrow"><span className="dot" /> Client voices</p>
            <blockquote>
              <span className="quote-mark">&ldquo;</span>Emulus didn't sell us a dashboard — they re-wrote how our commercial team makes decisions. Eight weeks in, we'd pulled an entire planning cycle forward.<span className="quote-mark">&rdquo;</span>
            </blockquote>
            <div className="testimonial-meta">
              <div className="t-ava">NK</div>
              <div>
                <div className="t-name">Nikhil Kapoor</div>
                <div className="t-role">VP Strategy · Global Pharma</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ padding: "80px 0 140px" }} id="contact">
        <div className="wrap">
          <div className="cta-card">
            <p className="eyebrow on-dark" style={{ position: "relative" }}><span className="dot" /> Get in touch</p>
            <h2 style={{ marginTop: 14 }}>
              Ready to turn your data into <span className="accent">decisions</span>?
            </h2>
            <p className="cta-sub">
              Scope a 30-minute discovery call. No slides, no fluff — just your data and what's possible with it.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-accent">
                Book a discovery call
                <ArrowRight className="arr" style={{ width: 14, height: 14 }} />
              </Link>
              <Link to="/contact" className="btn btn-ghost on-dark">Email the team</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
