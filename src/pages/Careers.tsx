import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { Plug, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const reasons = [
  { icon: Plug, title: "Embed our experts", body: "Senior individuals or full pods aligned to your stack and rituals." },
  { icon: Briefcase, title: "Flexible engagements", body: "Time-boxed sprints, multi-quarter retainers, or outcomes-based scopes." },
  { icon: GraduationCap, title: "Knowledge transfer", body: "We hand-off cleanly with documentation, playbooks and training built-in." },
];

const roles = [
  { title: "Senior Data Scientist", type: "Full-time · Remote-first", tags: ["Python", "ML", "Statistics"] },
  { title: "Gen AI Engineer", type: "Contract / Staff Aug", tags: ["LLMs", "RAG", "Python"] },
  { title: "Data Analyst — Impact", type: "Full-time · India", tags: ["SQL", "BI", "Excel"] },
];

export default function Careers() {
  useSEO({
    title: "Careers & Staff Augmentation — Emulus",
    description: "Embed our data scientists, analysts and AI engineers in your team — or join ours.",
  });
  return (
    <PageShell>
      <PageHero
        kicker="Careers & staff augmentation"
        title="Plug in expert talent. Or join a team that does."
        subtitle="Our staff augmentation model lets you scale capability without overhead — embedded data scientists, analysts, and AI engineers, ready to ship."
      />

      {/* Staff aug */}
      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Staff augmentation</p>
              <h2>Your team, extended with senior practitioners.</h2>
            </div>
            <p>
              We embed skilled data scientists, analysts, and AI engineers directly into your team —
              aligned to your stack, culture, and rituals from day one.
            </p>
          </div>
          <div className="tri">
            {reasons.map((r) => (
              <div key={r.title} className="tri-card">
                <div className="tri-ico">
                  <r.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Open roles</p>
              <h2>Join a team building the<br />next generation of data systems.</h2>
            </div>
            <p>
              We're always looking for talented people. If you don't see a role that fits, reach out
              anyway — we hire for potential and craft.
            </p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {roles.map((role, i) => (
              <div
                key={role.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "28px 0",
                  borderTop: "1px solid rgba(19,25,49,0.08)",
                  borderBottom: i === roles.length - 1 ? "1px solid rgba(19,25,49,0.08)" : undefined,
                  gap: 16,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <h3 style={{ fontSize: 22, fontWeight: 600, margin: 0 }}>{role.title}</h3>
                  <p style={{ marginTop: 4, fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--c-ink-2)" }}>
                    {role.type}
                  </p>
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {role.tags.map((t) => (
                    <span key={t} style={{ fontFamily: "var(--font-mono)", fontSize: 10.5, letterSpacing: "0.08em", textTransform: "uppercase", color: "rgba(255,255,255,0.72)", padding: "4px 8px", borderRadius: 6, background: "rgba(19,25,49,0.06)", border: "1px solid rgba(19,25,49,0.10)" }}>
                      {t}
                    </span>
                  ))}
                </div>
                <Link to="/contact" className="btn btn-ghost btn-sm">Apply</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom: 140 }}>
        <div className="wrap">
          <div className="cta-card">
            <p className="eyebrow on-dark" style={{ position: "relative" }}><span className="dot" /> Join us</p>
            <h2 style={{ marginTop: 14 }}>
              Want to join Emulus? We're always meeting <span className="accent">talented people.</span>
            </h2>
            <p className="cta-sub">
              Send us your CV and what you're excited about building next.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-accent">
                Get in touch <ArrowRight className="arr" style={{ width: 14, height: 14 }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
