import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const studies = [
  { tag: "Education NGO · India", title: "Field MIS that scaled to 2M+ student records", body: "We built a low-bandwidth field data platform with offline-first sync and dashboards used by district teams.", stat: "2M+", statLabel: "records" },
  { tag: "Global Pharma", title: "Generative AI for medical insight synthesis", body: "RAG pipeline over internal research repositories cut analyst time on literature review by 64%.", stat: "64%", statLabel: "time saved" },
  { tag: "Rural Development Partner", title: "Impact measurement for water & livelihoods", body: "Designed an outcomes framework and dashboards tracking 14 indicators across 800+ villages.", stat: "800+", statLabel: "villages" },
  { tag: "BFSI Enterprise", title: "Customer intelligence on a modern stack", body: "Re-platformed analytics with a lakehouse and rolled out 12 cross-functional BI products in 4 months.", stat: "12", statLabel: "BI products" },
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-2 gap-6">
        {studies.map((s, i) => (
          <Reveal key={s.title} delay={(i % 2) * 0.1}>
            <motion.article
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="group h-full bg-card rounded-3xl p-10 border border-border hover:border-orange/40 hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 relative overflow-hidden"
            >
              <motion.div
                className="absolute -top-32 -right-32 w-64 h-64 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ background: "radial-gradient(circle, #E54727 0%, transparent 70%)" }}
              />
              <div className="relative flex justify-between items-start">
                <p className="kicker">{s.tag}</p>
                <ArrowUpRight className="w-5 h-5 text-navy/40 group-hover:text-orange group-hover:rotate-45 transition-all duration-300" />
              </div>
              <h3 className="relative mt-5 text-2xl leading-snug">{s.title}</h3>
              <p className="relative mt-4 text-ink leading-relaxed">{s.body}</p>
              <div className="relative mt-8 pt-6 border-t border-border flex items-baseline gap-3">
                <span className="text-5xl font-bold text-orange">{s.stat}</span>
                <span className="text-xs uppercase font-bold tracking-wider text-muted-foreground">{s.statLabel}</span>
              </div>
            </motion.article>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
