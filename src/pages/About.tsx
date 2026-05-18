import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { Target, Compass, Users2, BookOpen, Globe } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const values = [
  { icon: Users2, title: "Trusted Partners", body: "Customer-focused, long-term partnerships built on transparency and outcomes." },
  { icon: BookOpen, title: "Respect for the Individual", body: "Open to ideas, value contribution, and foster creativity in every engagement." },
  { icon: Compass, title: "Learn and Grow", body: "Continuous learning, upskilling, and knowledge sharing across our global team." },
];

const team = [
  { name: "Harish", role: "CEO & Founder", bio: "Two decades shaping data and AI strategy for enterprises and impact organizations." },
  { name: "Vineet", role: "Co-founder & COO", bio: "Operations leader with deep expertise in scaling research and engineering teams." },
  { name: "Ritesh", role: "Sales & Marketing", bio: "Builds long-term partnerships across commercial and social-impact clients." },
];

const countries = [
  { name: "India", info: "Headquarters", marker: "HQ" },
  { name: "Canada", info: "North America", marker: "CA" },
  { name: "Australia", info: "APAC", marker: "AU" },
  { name: "Singapore", info: "South-East Asia", marker: "SG" },
];

export default function About() {
  useSEO({
    title: "About — Emulus Consulting LLP",
    description: "Vision, purpose, values, and the team driving meaningful transformations through data and AI.",
  });
  return (
    <PageShell>
      <PageHero
        kicker="About us"
        title="Consistently driving meaningful transformations through every engagement."
        subtitle="We transform complex data into actionable insights using best-in-class techniques, empowering businesses and social enterprises to achieve exceptional results."
      />

      {/* Vision & Purpose */}
      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> What guides us</p>
              <h2>A clear vision.<br />A defined purpose.</h2>
            </div>
            <p>
              Two statements that orient every engagement — the destination we're heading toward,
              and the reason we exist as a firm.
            </p>
          </div>
          <div className="duo">
            <article className="duo-card light">
              <div className="ico-lg">
                <Target size={24} strokeWidth={1.8} />
              </div>
              <p className="eyebrow" style={{ marginTop: 24 }}><span className="dot" /> Our vision</p>
              <h2>Consistently drive meaningful transformations in our clients' businesses through every engagement.</h2>
            </article>
            <article className="duo-card dark">
              <div className="ico-lg">
                <Compass size={24} strokeWidth={1.8} />
              </div>
              <p className="eyebrow on-dark" style={{ marginTop: 24 }}><span className="dot" /> Our purpose</p>
              <h2>Transform complex data into actionable insights, empowering exceptional results.</h2>
            </article>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="block" style={{ background: "#f6f7fa", paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Our core values</p>
              <h2>Three principles that shape every engagement.</h2>
            </div>
            <p>
              These aren't just wall-art values — they're operational commitments that show up
              in how we staff, scope, and deliver work.
            </p>
          </div>
          <div className="tri">
            {values.map((v) => (
              <div key={v.title} className="tri-card">
                <div className="tri-ico">
                  <v.icon size={22} strokeWidth={1.8} />
                </div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Our people</p>
              <h2>A global team grounded in research, engineering, and impact.</h2>
            </div>
            <p>
              Senior practitioners who've led data and AI work across pharma, BFSI, NGOs, and
              enterprise — and do it again for every client.
            </p>
          </div>
          <div className="team-grid">
            {team.map((m) => (
              <div key={m.name} className="team-card">
                <div className="team-avatar">{m.name[0]}</div>
                <h3>{m.name}</h3>
                <div className="team-role">{m.role}</div>
                <p>{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global presence */}
      <section className="block" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Global presence</p>
              <h2>Global, but local — wherever our clients work.</h2>
            </div>
            <p>
              Four offices, one operating model. Every engagement is run by senior practitioners,
              not handed off to junior teams.
            </p>
          </div>
          <div className="countries">
            {countries.map((c) => (
              <div key={c.name} className="country">
                <div className="country-marker">{c.marker}</div>
                <div className="country-name">{c.name}</div>
                <div className="country-info">{c.info}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link to="/contact" className="btn btn-accent">
              Work with us
            </Link>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
