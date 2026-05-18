import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { Pill, Landmark, Microscope, HeartHandshake, Building2, Sprout } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const items = [
  { icon: Pill, num: "01", name: "Pharma", body: "Commercial analytics, market access, and AI-enabled medical insights." },
  { icon: Microscope, num: "02", name: "Life Sciences", body: "Research automation, evidence synthesis, and decision support." },
  { icon: Landmark, num: "03", name: "BFSI", body: "Risk, fraud, customer intelligence, and Gen AI for operations." },
  { icon: Building2, num: "04", name: "Enterprise", body: "Modern data platforms, MLOps, and product engineering at scale." },
  { icon: HeartHandshake, num: "05", name: "Social Impact", body: "Impact measurement and monitoring platforms for NGOs." },
  { icon: Sprout, num: "06", name: "Rural Development", body: "Field data systems and analytics for grassroots organizations." },
];

export default function Industries() {
  useSEO({
    title: "Industries — Emulus Consulting LLP",
    description: "Pharma, life sciences, BFSI, social impact, enterprise and rural development sectors we serve.",
  });
  return (
    <PageShell>
      <PageHero
        kicker="Industries"
        title="Where we deliver outcomes."
        subtitle="From regulated enterprise environments to community-led social impact work — same rigor, tailored approach."
      />

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Sectors we serve</p>
              <h2>Six industries.<br />One standard of rigour.</h2>
            </div>
            <p>
              Regulated or impact-driven, enterprise or field-team — we adapt our practice to
              your sector's pace and constraints.
            </p>
          </div>
          <div className="ind-grid">
            {items.map((item) => (
              <div key={item.name} className="ind-cell">
                <span className="ind-num">{item.num}</span>
                <div className="ind-ico">
                  <item.icon size={24} strokeWidth={1.8} />
                </div>
                <h3>{item.name}</h3>
                <p>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ paddingBottom: 140 }}>
        <div className="wrap">
          <div className="cta-card">
            <p className="eyebrow on-dark" style={{ position: "relative" }}><span className="dot" /> Work with us</p>
            <h2 style={{ marginTop: 14 }}>
              Same toolkit, different <span className="accent">velocity.</span>
            </h2>
            <p className="cta-sub">
              We meet you where you are — whether that's a regulated pharma rollout or a field-team
              MIS deployed in 12 districts.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-accent">
                Book a discovery call
              </Link>
              <Link to="/services" className="btn btn-ghost on-dark">See our services</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
