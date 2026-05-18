import { Link } from "react-router-dom";
import { PageShell, PageHero } from "@/components/PageShell";
import { Brain, Search, Database, Code2, Users, Heart, ArrowRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const services = [
  {
    id: "genai",
    icon: Brain,
    eyebrow: "01 · Generative AI",
    title: "Generative AI Consulting",
    body: "Help clients build AI-driven workflows, automate insights, and operationalize AI-enabled analytics — built for production, not just demos.",
    bullets: ["LLM strategy & evaluation", "RAG and agent systems", "Productionizing GenAI workflows", "Eval harnesses & guardrails"],
  },
  {
    id: "research",
    icon: Search,
    eyebrow: "02 · Market Research",
    title: "Market Research & Insights",
    body: "Primary (surveys, interviews, FGDs) and secondary (desk research, competitive intelligence) with a strong analytics layer.",
    bullets: ["Quant & qual research design", "Competitive intelligence", "Insights synthesis & storytelling"],
  },
  {
    id: "data",
    icon: Database,
    eyebrow: "03 · Data & Analytics",
    title: "Data Engineering & Analytics",
    body: "From data pipelines and warehousing to BI dashboards and visual storytelling that drives action.",
    bullets: ["Modern data stacks", "Warehouse & lakehouse design", "BI dashboards & visualization"],
  },
  {
    id: "software",
    icon: Code2,
    eyebrow: "04 · Software",
    title: "Software Services & Products",
    body: "Full-stack product lifecycle support, agile development, and deployment.",
    bullets: ["MVP to scale", "Web, mobile and APIs", "DevOps & cloud delivery"],
  },
  {
    id: "staff",
    icon: Users,
    eyebrow: "05 · Staff Augmentation",
    title: "Staff Augmentation",
    body: "Embed skilled data scientists, analysts, and AI engineers directly into your team.",
    bullets: ["Vetted senior talent", "Flexible engagement models", "Knowledge transfer built-in"],
  },
  {
    id: "impact",
    icon: Heart,
    eyebrow: "06 · Social Impact",
    title: "Social Enterprises & NGOs",
    body: "We partner with NGOs to build measurement platforms, MIS, and analytics-driven monitoring systems.",
    bullets: ["Impact measurement frameworks", "Field MIS & dashboards", "Program evaluation"],
  },
];

export default function Services() {
  useSEO({
    title: "Services — Emulus Consulting LLP",
    description: "Generative AI, research, data engineering, software services, staff augmentation, and impact analytics for NGOs.",
  });
  return (
    <PageShell>
      <PageHero
        kicker="Our services"
        title="Six capabilities engineered to turn your data into decisions."
        subtitle="From discovery to deployment — research, engineering, and Generative AI delivered as one connected practice."
      />

      {/* TOC bar */}
      <div style={{ borderTop: "1px solid rgba(19,25,49,0.08)", borderBottom: "1px solid rgba(19,25,49,0.08)", background: "white" }}>
        <div className="wrap" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 18, paddingTop: 18, paddingBottom: 18 }}>
          <span className="eyebrow" style={{ marginRight: "auto" }}><span className="dot" /> Jump to</span>
          {["GenAI", "Research", "Data & analytics", "Software", "Staff aug", "Impact"].map((label, i) => (
            <a key={label} href={`#${services[i].id}`} className="btn btn-ghost btn-sm">{label}</a>
          ))}
        </div>
      </div>

      <section className="block" style={{ paddingTop: 80 }}>
        <div className="wrap">
          {services.map((s) => (
            <article key={s.id} id={s.id} className="srv-row">
              <div className="srv-ico">
                <s.icon size={26} strokeWidth={1.8} />
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: 10 }}><span className="dot" /> {s.eyebrow}</p>
                <h3>{s.title}</h3>
                <p className="srv-summary" style={{ marginTop: 14 }}>{s.body}</p>
              </div>
              <ul className="srv-bullets">
                {s.bullets.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section style={{ paddingBottom: 140 }}>
        <div className="wrap" style={{ textAlign: "center" }}>
          <div className="cta-card">
            <p className="eyebrow on-dark" style={{ position: "relative" }}><span className="dot" /> Start a project</p>
            <h2 style={{ marginTop: 14 }}>
              Ready to turn your data into <span className="accent">decisions</span>?
            </h2>
            <p className="cta-sub">Scope a 30-minute discovery call. No slides, no fluff — just your data.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-accent">
                Book a discovery call
                <ArrowRight className="arr" style={{ width: 14, height: 14 }} />
              </Link>
              <Link to="/contact" className="btn btn-ghost on-dark">Email the team</Link>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
