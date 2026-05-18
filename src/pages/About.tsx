import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Target, Compass, Users2, BookOpen, Globe } from "lucide-react";
import { useSEO } from "@/lib/useSEO";
import { motion } from "framer-motion";

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

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="bg-card rounded-3xl p-10 border border-border h-full">
            <Target className="w-10 h-10 text-orange" />
            <p className="kicker mt-6">Our vision</p>
            <h2 className="mt-3 text-3xl leading-tight">
              Consistently drive meaningful transformations in our clients' businesses through every engagement.
            </h2>
          </motion.div>
        </Reveal>
        <Reveal delay={0.1}>
          <motion.div whileHover={{ y: -4 }} transition={{ duration: 0.4 }} className="gradient-navy text-white rounded-3xl p-10 h-full relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="relative">
              <Compass className="w-10 h-10 text-orange animate-spin-slow" />
              <p className="kicker mt-6">Our purpose</p>
              <h2 className="mt-3 text-3xl leading-tight text-white">
                Transform complex data into actionable insights, empowering exceptional results.
              </h2>
            </div>
          </motion.div>
        </Reveal>
      </section>

      <section className="bg-mist py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="kicker">Our core values</p>
            <h2 className="mt-3 text-3xl md:text-4xl max-w-2xl">Three principles that shape every engagement.</h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.4 }}
                  className="bg-background rounded-3xl p-8 border border-border h-full hover:border-orange/40 transition-all duration-500"
                >
                  <v.icon className="w-8 h-8 text-orange" />
                  <h3 className="mt-5 text-xl">{v.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{v.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <Reveal>
          <p className="kicker">Our people</p>
          <h2 className="mt-3 text-3xl md:text-4xl max-w-2xl">A global team grounded in research, engineering, and impact.</h2>
        </Reveal>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -6, rotate: -0.5 }}
                transition={{ duration: 0.4 }}
                className="bg-card rounded-3xl p-8 border border-border h-full"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange to-orange-soft flex items-center justify-center text-white text-2xl font-bold shadow-lg shadow-orange/30">
                  {m.name[0]}
                </div>
                <h3 className="mt-5 text-xl">{m.name}</h3>
                <p className="text-sm font-semibold text-orange uppercase tracking-wider mt-1">{m.role}</p>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24">
        <Reveal>
          <div className="bg-card rounded-3xl p-10 lg:p-14 border border-border">
            <Globe className="w-10 h-10 text-orange animate-spin-slow" />
            <p className="kicker mt-6">Global presence</p>
            <h2 className="mt-3 text-3xl md:text-4xl max-w-2xl">Global, but local — wherever our clients work.</h2>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              {["India", "Canada", "Australia", "Singapore"].map((c, i) => (
                <motion.div
                  key={c}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-t-2 border-orange pt-3"
                >
                  <div className="text-2xl font-bold text-navy">{c}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
