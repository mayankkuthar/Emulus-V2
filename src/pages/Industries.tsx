import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { useSEO } from "@/lib/useSEO";
import { useBooking } from "@/lib/BookingContext";
import { icon } from "@/lib/icons";
import content from "@/content.json";

const c = content.pages.industries;

export default function Industries() {
  useSEO(c.seo);
  const booking = useBooking();
  return (
    <PageShell>
      <PageHero kicker={c.hero.kicker} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> {c.section.eyebrow}</p>
              <h2 dangerouslySetInnerHTML={{ __html: c.section.heading }} />
            </div>
            <p>{c.section.description}</p>
          </div>
          <div className="ind-grid">
            {c.section.items.map((item: any) => (
                <div key={item.name} className="ind-cell">
                  <span className="ind-num">{item.num}</span>
                  <div className="ind-ico">
                    {icon(item.icon, { size: 24, strokeWidth: 1.8 })}
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.body}</p>
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
              <button onClick={() => booking.setOpen(true)} className="btn btn-accent">{c.cta.primaryBtn}</button>
              <Link to={c.cta.secondaryLink} className="btn btn-ghost on-dark">{c.cta.secondaryBtn}</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
