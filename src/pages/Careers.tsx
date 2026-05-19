import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";
import { icon } from "@/lib/icons";
import content from "@/content.json";

const c = content.pages.careers;

export default function Careers() {
  useSEO(c.seo);
  return (
    <PageShell>
      <PageHero kicker={c.hero.kicker} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.staffAug.eyebrow}</p>
              <h2>{c.staffAug.heading}</h2>
            </div>
            <p>{c.staffAug.description}</p>
          </div>
          <div className="tri">
            {c.staffAug.reasons.map((r: any) => (
                <div key={r.title} className="tri-card">
                  <div className="tri-ico">
                    {icon(r.icon, { size: 22, strokeWidth: 1.8 })}
                  </div>
                  <h3>{r.title}</h3>
                  <p>{r.body}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.openRoles.eyebrow}</p>
              <h2>{c.openRoles.heading}</h2>
            </div>
            <p>{c.openRoles.description}</p>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {c.openRoles.roles.map((role: any, i: number) => (
              <div
                key={role.title}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "28px 0",
                  borderTop: "1px solid rgba(19,25,49,0.08)",
                  borderBottom: i === c.openRoles.roles.length - 1 ? "1px solid rgba(19,25,49,0.08)" : undefined,
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
                  {role.tags.map((t: string) => (
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

      <section style={{ paddingBottom: 140 }}>
        <div className="wrap">
          <div className="cta-card">
            <p className="eyebrow on-dark" style={{ position: "relative" }}><span className="dot" /> {c.cta.eyebrow}</p>
            <h2 style={{ marginTop: 14 }} dangerouslySetInnerHTML={{ __html: c.cta.heading.replace(c.cta.accentWord, `<span class="accent">${c.cta.accentWord}</span>`) }} />
            <p className="cta-sub">{c.cta.subtitle}</p>
            <div className="cta-buttons">
              <Link to={c.cta.primaryLink} className="btn btn-accent">
                {c.cta.primaryBtn} <ArrowRight className="arr" style={{ width: 14, height: 14 }} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
