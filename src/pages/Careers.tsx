import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Briefcase, Plug, GraduationCap, ArrowRight } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

export default function Careers() {
  useSEO({
    title: "Careers & Staff Augmentation — Emulus",
    description: "Embed our data scientists, analysts and AI engineers in your team — or join ours.",
  });
  return (
    <PageShell>
      <PageHero
        kicker="Careers & staff augmentation"
        title="Plug in expert talent. Or join a team that does."
        subtitle="Our staff augmentation model lets you scale capability without overhead — embedded data scientists, analysts, and AI engineers, ready to ship."
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid md:grid-cols-3 gap-6">
        {[
          { icon: Plug, title: "Embed our experts", body: "Senior individuals or full pods aligned to your stack and rituals." },
          { icon: Briefcase, title: "Flexible engagements", body: "Time-boxed sprints, multi-quarter retainers, or outcomes-based scopes." },
          { icon: GraduationCap, title: "Knowledge transfer", body: "We hand-off cleanly with documentation, playbooks and training built-in." },
        ].map((c, i) => (
          <Reveal key={c.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 border border-border h-full hover:border-orange/40 hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                <c.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-6 text-xl">{c.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
            </motion.div>
          </Reveal>
        ))}
      </section>
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <Reveal>
          <div className="gradient-navy rounded-[2rem] p-12 lg:p-16 text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <motion.div
              className="absolute -top-20 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-40"
              style={{ background: "radial-gradient(circle, #E54727 0%, transparent 60%)" }}
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <div className="relative">
              <h2 className="text-3xl md:text-4xl text-white max-w-2xl mx-auto">
                Want to join Emulus? We're always meeting talented people.
              </h2>
              <Link
                to="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-4 text-sm font-semibold text-white hover:-translate-y-0.5 transition-all btn-glow"
              >
                Get in touch <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
