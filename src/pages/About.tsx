import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { useSEO } from "@/lib/useSEO";
import { icon } from "@/lib/icons";
import { Linkedin } from "lucide-react";
import content from "@/content.json";

const c = content.pages.about;

const teamImages = import.meta.glob<{ default: string }>("/src/assets/[1-8].jpg", { eager: true, import: "default" });

function teamImg(path: string): string {
  return (teamImages[path] as string) || "";
}

export default function About() {
  useSEO(c.seo);
  return (
    <PageShell>
      <PageHero kicker={c.hero.kicker} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.visionPurpose.eyebrow}</p>
              <h2>{c.visionPurpose.heading}</h2>
            </div>
            <p>{c.visionPurpose.description}</p>
          </div>
          <div className="duo">
            <article className="duo-card light">
              <div className="ico-lg">
                {icon(c.visionPurpose.vision.icon, { size: 24, strokeWidth: 1.8 })}
              </div>
              <p className="eyebrow" style={{ marginTop: 24 }}><span className="dot" /> {c.visionPurpose.vision.eyebrow}</p>
              <h2>{c.visionPurpose.vision.heading}</h2>
            </article>
            <article className="duo-card dark">
              <div className="ico-lg">
                {icon(c.visionPurpose.purpose.icon, { size: 24, strokeWidth: 1.8 })}
              </div>
              <p className="eyebrow on-dark" style={{ marginTop: 24 }}><span className="dot" /> {c.visionPurpose.purpose.eyebrow}</p>
              <h2>{c.visionPurpose.purpose.heading}</h2>
            </article>
          </div>
        </div>
      </section>

      <section className="block" style={{ background: "#f6f7fa", paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.values.eyebrow}</p>
              <h2>{c.values.heading}</h2>
            </div>
            <p>{c.values.description}</p>
          </div>
          <div className="tri">
            {c.values.items.map((v: any) => (
                <div key={v.title} className="tri-card">
                  <div className="tri-ico">
                    {icon(v.icon, { size: 22, strokeWidth: 1.8 })}
                  </div>
                  <h3>{v.title}</h3>
                  <p>{v.body}</p>
                </div>
            ))}
          </div>
        </div>
      </section>

      <section className="block" style={{ background: "#f6f7fa", paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.team.eyebrow}</p>
              <h2>{c.team.heading}</h2>
            </div>
            <p>{c.team.description}</p>
          </div>
          <div className="team-grid">
            {c.team.members.map((m: any) => {
              const img = teamImg(m.image);
              return (
                <div key={m.name} className="team-card">
                  <div className="team-avatar">
                    {img ? (
                      <img src={img} alt={m.name} className="team-photo" />
                    ) : (
                      m.name[0]
                    )}
                  </div>
                  <div className="team-name-row">
                    <h3>{m.name}</h3>
                    {m.linkedin && (
                      <a href={m.linkedin} target="_blank" rel="noopener noreferrer" className="team-linkedin">
                        <Linkedin size={16} />
                      </a>
                    )}
                  </div>
                  <div className="team-role">{m.role}</div>
                  <p>{m.bio}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.presence.eyebrow}</p>
              <h2>{c.presence.heading}</h2>
            </div>
            <p>{c.presence.description}</p>
          </div>
          <div className="countries">
            {c.presence.countries.map((c2: any) => (
              <div key={c2.name} className="country">
                <div className="country-marker">{c2.marker}</div>
                <div className="country-name">{c2.name}</div>
                <div className="country-info">{c2.info}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link to={c.presence.ctaLink} className="btn btn-accent">
              {c.presence.cta}
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
