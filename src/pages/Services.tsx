import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { ArrowRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";
import { icon } from "@/lib/icons";
import content from "@/content.json";

const c = content.pages.services;

export default function Services() {
  useSEO(c.seo);
  return (
    <PageShell>
      <PageHero kicker={c.hero.kicker} title={c.hero.title} subtitle={c.hero.subtitle} />

      <div style={{ borderTop: "1px solid rgba(19,25,49,0.08)", borderBottom: "1px solid rgba(19,25,49,0.08)", background: "white" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18, paddingTop: 18, paddingBottom: 18 }}>
          <span className="eyebrow" style={{ marginRight: "auto" }}><span className="dot" /> Jump to</span>
          {c.jumpLabels.map((label: string, i: number) => (
            <a key={label} href={`#${c.items[i].id}`} className="btn btn-ghost btn-sm">{label}</a>
          ))}
        </div>
      </div>

      <section className="block" style={{ paddingTop: 80 }}>
        <div className="wrap">
          {c.items.map((s: any) => (
              <article key={s.id} id={s.id} className="srv-row">
                <div className="srv-ico">
                  {icon(s.icon, { size: 26, strokeWidth: 1.8 })}
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 10 }}><span className="dot" /> {s.eyebrow}</p>
                  <h3>{s.title}</h3>
                  <p className="srv-summary" style={{ marginTop: 14 }}>{s.body}</p>
                </div>
                <ul className="srv-bullets">
                  {s.bullets.map((b: string) => <li key={b}>{b}</li>)}
                </ul>
              </article>
          ))}
        </div>
      </section>

      <section style={{ paddingBottom: 140 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="cta-card">
            <p className="eyebrow on-dark" style={{ position: "relative" }}><span className="dot" /> {c.cta.eyebrow}</p>
            <h2 style={{ marginTop: 14 }} dangerouslySetInnerHTML={{ __html: c.cta.heading.replace(c.cta.accentWord, `<span class="accent">${c.cta.accentWord}</span>`) }} />
            <p className="cta-sub">{c.cta.subtitle}</p>
            <div className="cta-buttons">
              <Link to={c.cta.primaryLink} className="btn btn-accent">
                {c.cta.primaryBtn}
                <ArrowRight className="arr" style={{ width: 14, height: 14 }} />
              </Link>
              <Link to={c.cta.secondaryLink} className="btn btn-ghost on-dark">{c.cta.secondaryBtn}</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
