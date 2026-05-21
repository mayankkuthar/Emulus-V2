import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import OutcomeOrb from "@/components/OutcomeOrb";
import { PageShell } from "@/components/PageShell";
import { useSEO } from "@/lib/useSEO";
import { useBooking } from "@/lib/BookingContext";
import { icon } from "@/lib/icons";
import content from "@/content.json";

const c = content.pages.home;

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
function CapCard({ icon: IconName, title, body, href }: { icon: string; title: string; body: string; href: string }) {
  const onMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", (e.clientX - r.left) + "px");
    e.currentTarget.style.setProperty("--my", (e.clientY - r.top) + "px");
  };
  return (
    <article className="cap" onMouseMove={onMouseMove}>
      <div className="cap-ico">
        {icon(IconName, { size: 22, strokeWidth: 1.8 })}
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
  useSEO(c.seo);
  const booking = useBooking();

  return (
    <PageShell>
      <section className="hero" id="top">
        <HeroSpot />
        <HeroBackdrop />
        <div className="wrap hero-grid">
          <div>
            <p className="eyebrow"><span className="dot" /> {c.hero.eyebrow}</p>
            <h1 dangerouslySetInnerHTML={{ __html: c.hero.heading.replace(c.hero.accentWord, `<span class="accent">${c.hero.accentWord}</span>`) }} />
            <p className="sub">{c.hero.subtitle}</p>
            <div className="cta-row">
              <button onClick={() => booking.setOpen(true)} className="btn btn-accent">
                {c.hero.ctaPrimary}
                <ArrowRight className="arr" style={{ width: 14, height: 14 }} />
              </button>
              <Link to={c.hero.ctaSecondaryLink} className="btn btn-ghost">{c.hero.ctaSecondary}</Link>
            </div>
            <div className="trust">
              <span className="avatars" aria-hidden="true">
                {c.hero.trust.avatars.map((a: string) => <span key={a}>{a}</span>)}
              </span>
              <span dangerouslySetInnerHTML={{ __html: c.hero.trust.text }} />
            </div>
          </div>
          <OutcomeOrb />
        </div>
      </section>

      <div className="marquee-strip" aria-label="Selected clients">
        <div className="marquee-row">
          {[...c.marquee, ...c.marquee].map((n: string, i: number) => (
            <span key={i}>{n}</span>
          ))}
        </div>
      </div>

      <div className="wrap" style={{ paddingTop: 80, paddingBottom: 0 }}>
        <div className="stats-grid">
          {c.stats.map((s: any) => (
            <StatCounter key={s.label} value={s.value} suffix={s.suffix} decimals={s.decimals} label={s.label} />
          ))}
        </div>
      </div>

      <section className="block" id="capabilities">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.capabilities.eyebrow}</p>
              <h2 dangerouslySetInnerHTML={{ __html: c.capabilities.heading.replace(c.capabilities.accentWord, `<em style="font-style:normal;color:#e54727">${c.capabilities.accentWord}</em>`) }} />
            </div>
            <p>{c.capabilities.description}</p>
          </div>
          <div className="caps">
            {c.capabilities.items.map((cap: any) => <CapCard key={cap.title} {...cap} />)}
          </div>
        </div>
      </section>

      <section className="block pipeline-section" id="solutions">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow on-dark"><span className="dot" /> {c.pipeline.eyebrow}</p>
              <h2 dangerouslySetInnerHTML={{ __html: c.pipeline.heading }} />
            </div>
            <p>{c.pipeline.description}</p>
          </div>
          <div className="pipeline">
            <div className="pipe-line-bar" aria-hidden="true" />
            {c.pipeline.stages.map((s: any) => (
              <article key={s.num} className="pipe-card">
                <div className="pipe-num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="pipe-tags">
                  {s.tags.map((t: string) => <span key={t}>{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" id="industries">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.industries.eyebrow}</p>
              <h2 dangerouslySetInnerHTML={{ __html: c.industries.heading }} />
            </div>
            <p>{c.industries.description}</p>
          </div>
          <div className="split">
            <article className="split-card dark">
              <div>
                <p className="eyebrow on-dark"><span className="dot" /> {c.industries.commercial.eyebrow}</p>
                <h3>{c.industries.commercial.heading}</h3>
                <p>{c.industries.commercial.body}</p>
                <div className="tag-row">
                  {c.industries.commercial.tags.map((t: string) => (
                    <span key={t} className="split-tag">{t}</span>
                  ))}
                </div>
              </div>
              <MiniChart heights={c.industries.commercial.chartHeights} variant="dark" />
            </article>
            <article className="split-card light">
              <div>
                <p className="eyebrow"><span className="dot" /> {c.industries.social.eyebrow}</p>
                <h3>{c.industries.social.heading}</h3>
                <p>{c.industries.social.body}</p>
                <div className="tag-row">
                  {c.industries.social.tags.map((t: string) => (
                    <span key={t} className="split-tag">{t}</span>
                  ))}
                </div>
              </div>
              <MiniChart heights={c.industries.social.chartHeights} variant="light" />
            </article>
          </div>
        </div>
      </section>

      <section className="block" id="work" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.work.eyebrow}</p>
              <h2>{c.work.heading}</h2>
            </div>
            <p>{c.work.description}</p>
          </div>
          <div className="cases">
            {c.work.items.map((item: any) => (
              <article key={item.title} className="case">
                <div className={`case-cover ${item.cover}`}>
                  <div className="case-meta">
                    <span>{item.tag}</span>
                    <span>{item.stat} {item.statLabel}</span>
                  </div>
                </div>
                <div className="case-body">
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                  <Link to="/case-studies" className="case-read">Read case study →</Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="testimonial">
            <p className="eyebrow"><span className="dot" /> {c.testimonial.eyebrow}</p>
            <blockquote>
              <span className="quote-mark">&ldquo;</span>{c.testimonial.quote}<span className="quote-mark">&rdquo;</span>
            </blockquote>
            <div className="testimonial-meta">
              <div className="t-ava">{c.testimonial.avatar}</div>
              <div>
                <div className="t-name">{c.testimonial.name}</div>
                <div className="t-role">{c.testimonial.role}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: "80px 0 140px" }} id="contact">
        <div className="wrap">
          <div className="cta-card">
            <p className="eyebrow on-dark" style={{ position: "relative" }}><span className="dot" /> {c.cta.eyebrow}</p>
            <h2 style={{ marginTop: 14 }} dangerouslySetInnerHTML={{ __html: c.cta.heading.replace(c.cta.accentWord, `<span class="accent">${c.cta.accentWord}</span>`) }} />
            <p className="cta-sub">{c.cta.subtitle}</p>
            <div className="cta-buttons">
              <button onClick={() => booking.setOpen(true)} className="btn btn-accent">
                {c.cta.primaryBtn}
                <ArrowRight className="arr" style={{ width: 14, height: 14 }} />
              </button>
              <Link to={c.cta.secondaryLink} className="btn btn-ghost on-dark">{c.cta.secondaryBtn}</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
