import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { ArrowUpRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const studies = [
  {
    tag: "Education NGO · India",
    title: "Field MIS that scaled to 2M+ student records",
    body: "We built a low-bandwidth field data platform with offline-first sync and dashboards used by district teams.",
    stat: "2M+",
    statLabel: "records managed",
  },
  {
    tag: "Global Pharma",
    title: "Generative AI for medical insight synthesis",
    body: "RAG pipeline over internal research repositories cut analyst time on literature review by 64%.",
    stat: "64%",
    statLabel: "time saved",
  },
  {
    tag: "Rural Development Partner",
    title: "Impact measurement for water & livelihoods",
    body: "Designed an outcomes framework and dashboards tracking 14 indicators across 800+ villages.",
    stat: "800+",
    statLabel: "villages tracked",
  },
  {
    tag: "BFSI Enterprise",
    title: "Customer intelligence on a modern stack",
    body: "Re-platformed analytics with a lakehouse and rolled out 12 cross-functional BI products in 4 months.",
    stat: "12",
    statLabel: "BI products shipped",
  },
];

export default function CaseStudies() {
  useSEO({
    title: "Case Studies — Emulus Consulting LLP",
    description: "Selected work across commercial enterprises, NGOs, and social-impact organizations.",
  });
  return (
    <PageShell>
      <PageHero
        kicker="Case studies"
        title="Outcomes we've delivered — across business and impact."
        subtitle="A selection of anonymized engagements. Reach out for detailed walkthroughs."
      />

      <section className="block">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="eyebrow"><span className="dot" /> Our work</p>
              <h2>Results that speak<br />for themselves.</h2>
            </div>
            <p>
              Every engagement has a measurable outcome. Here are a few — from BFSI risk models
              to district-scale impact dashboards.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="md:grid-cols-2">
            {studies.map((s) => (
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
            <p className="eyebrow on-dark" style={{ position: "relative" }}><span className="dot" /> Let's talk</p>
            <h2 style={{ marginTop: 14 }}>
              Want a detailed <span className="accent">walkthrough?</span>
            </h2>
            <p className="cta-sub">
              We're happy to share anonymized deep-dives on any of these engagements over a 30-minute call.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-accent">Book a call</Link>
              <Link to="/contact" className="btn btn-ghost on-dark">Email the team</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
