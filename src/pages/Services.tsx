import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Brain, Search, Database, Code2, Users, Heart, ArrowRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const services = [
  { icon: Brain, title: "Generative AI Consulting", body: "Help clients build AI-driven workflows, automate insights, and operationalize AI-enabled analytics.", bullets: ["LLM strategy & evaluation", "RAG and agent systems", "Productionizing GenAI workflows"] },
  { icon: Search, title: "Data-Backed Market Research", body: "Primary (surveys, interviews, FGDs) and secondary (desk research, competitive intelligence) with a strong analytics layer.", bullets: ["Quant & qual research design", "Competitive intelligence", "Insights synthesis & storytelling"] },
  { icon: Database, title: "Data Engineering & Analytics", body: "From data pipelines and warehousing to BI dashboards and visual storytelling.", bullets: ["Modern data stacks", "Warehouse & lakehouse design", "BI dashboards & visualization"] },
  { icon: Code2, title: "Software Services & Product Development", body: "Full-stack product lifecycle support, agile development, and deployment.", bullets: ["MVP to scale", "Web, mobile and APIs", "DevOps & cloud delivery"] },
  { icon: Users, title: "Staff Augmentation", body: "Embed skilled data scientists, analysts, and AI engineers into your team.", bullets: ["Vetted senior talent", "Flexible engagement models", "Knowledge transfer built-in"] },
  { icon: Heart, title: "Social Enterprises & NGOs", body: "We partner with NGOs and social-impact organizations to build measurement platforms, MIS, and analytics-driven monitoring systems.", bullets: ["Impact measurement frameworks", "Field MIS & dashboards", "Program evaluation"] },
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

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="grid lg:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 2) * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl p-10 border border-border h-full hover:border-orange/40 hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 group"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-navy text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white group-hover:rotate-6 transition-all duration-500 shrink-0">
                    <s.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl">{s.title}</h3>
                    <p className="mt-3 text-ink leading-relaxed">{s.body}</p>
                  </div>
                </div>
                <ul className="mt-6 pl-[4.75rem] space-y-2 text-sm text-muted-foreground">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2">
                      <span className="text-orange font-bold mt-0.5">·</span> {b}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-orange px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-orange/30 hover:-translate-y-0.5 transition-all btn-glow"
            >
              Discuss your project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
