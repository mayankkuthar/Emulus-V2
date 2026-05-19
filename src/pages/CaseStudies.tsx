import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { ArrowUpRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";
import content from "@/content.json";

const c = content.pages.caseStudies;

export default function CaseStudies() {
  useSEO(c.seo);
  return (
    <PageShell>
      <PageHero kicker={c.hero.kicker} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.section.eyebrow}</p>
              <h2>{c.section.heading}</h2>
            </div>
            <p>{c.section.description}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="md:grid-cols-2">
            {c.section.items.map((s: any) => (
              <article key={s.title} className="study">
                <div className="study-head">
                  <span className="study-tag">{s.tag}</span>
                  <span className="study-ext">
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
                <div className="study-stat-row">
                  <span className="study-stat-big">{s.stat}</span>
                  <span className="study-stat-lab">{s.statLabel}</span>
                </div>
              </article>
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
              <Link to={c.cta.primaryLink} className="btn btn-accent">{c.cta.primaryBtn}</Link>
              <Link to={c.cta.secondaryLink} className="btn btn-ghost on-dark">{c.cta.secondaryBtn}</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
