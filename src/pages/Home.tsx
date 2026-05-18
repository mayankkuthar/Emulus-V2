import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Brain, Search, Database, Code2, Users, Heart, ArrowRight,
  Sparkles, LineChart, Globe2,
} from "lucide-react";
import { PageShell } from "@/components/PageShell";
import { HeroBackdrop } from "@/components/HeroBackdrop";
import { Reveal } from "@/components/Reveal";
import { useSEO } from "@/lib/useSEO";

const services = [
  { icon: Brain, title: "Generative AI Consulting", body: "AI-driven workflows, agentic systems, and operationalized analytics built for production." },
  { icon: Search, title: "Data-Backed Market Research", body: "Primary surveys, interviews and FGDs paired with deep secondary and competitive intelligence." },
  { icon: Database, title: "Data Engineering & Analytics", body: "Pipelines, warehousing, BI dashboards, and visual storytelling that drive action." },
  { icon: Code2, title: "Software Services & Products", body: "Full-stack product lifecycle, agile delivery, and resilient deployment." },
  { icon: Users, title: "Staff Augmentation", body: "Embed senior data scientists, analysts, and AI engineers directly into your team." },
  { icon: Heart, title: "Social Enterprises & NGOs", body: "Impact measurement, MIS, and analytics platforms for purpose-led organizations." },
];

const flow = [
  { step: "01", label: "Raw Data", desc: "Surveys, sensors, systems, field teams." },
  { step: "02", label: "Insights", desc: "Cleaned, modeled, contextualized." },
  { step: "03", label: "AI-Driven Decisions", desc: "Operationalized through GenAI." },
];

export default function Home() {
  useSEO({
    title: "Emulus Consulting LLP — Data-Backed Insights. AI-Driven Impact.",
    description:
      "Empowering businesses and social enterprises with data-driven insights and Generative AI. Research, analytics, software services, and staff augmentation.",
  });

  return (
    <PageShell>
      {/* HERO */}
      <section className="relative gradient-navy text-white overflow-hidden">
        <HeroBackdrop />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-32 lg:pt-32 lg:pb-44">
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="kicker"
          >
            <Sparkles className="inline w-3 h-3 mr-2 -translate-y-px animate-spin-slow" />
            Data-Backed Insights. AI-Driven Impact.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.02] text-white max-w-5xl"
          >
            Empowering businesses and social enterprises with{" "}
            <span className="text-gradient-accent">data-driven insights</span>{" "}
            and Gen AI.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25 }}
            className="mt-8 max-w-2xl text-lg md:text-xl text-white/75 leading-relaxed"
          >
            Emulus Consulting LLP helps organizations across industries and civil-society
            turn complex data into actionable decisions, powered by{" "}
            <span className="text-orange font-semibold">advanced analytics, research, and Generative AI</span>.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-orange px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-orange/30 hover:shadow-orange/50 hover:-translate-y-0.5 transition-all btn-glow"
            >
              Book a discovery call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-4 text-sm font-semibold text-white hover:bg-white/10 transition"
            >
              See our case studies
            </Link>
          </motion.div>

          {/* Benefit bullets */}
          <motion.ul
            initial="hidden" animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.6 } } }}
            className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl"
          >
            {[
              "Primary & secondary market research",
              "Generative AI for insights & automation",
              "Expert data scientists, on demand",
              "Trusted by NGOs & social enterprises",
            ].map((b, i) => (
              <motion.li
                key={b}
                variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur px-5 py-4 text-sm text-white/85 cursor-default"
              >
                <span className="block text-orange font-bold text-xs uppercase tracking-wider mb-1">0{i + 1}</span>
                {b}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <Reveal className="lg:col-span-4">
            <p className="kicker">Who we are</p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl leading-tight">
              A global partner for <span className="shimmer-text">data &amp; AI</span>.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-7 lg:col-start-6">
            <p className="text-lg leading-relaxed text-ink">
              Emulus Consulting LLP is a global consulting and technology partner
              specializing in market research and insights, data technologies,
              software services, and Generative AI. We work with commercial
              organizations and social-impact institutions to turn complex data
              into actionable strategies and measurable impact.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-6">
              {[
                { n: "4", l: "Countries" },
                { n: "50+", l: "Engagements" },
                { n: "100%", l: "Outcome-driven" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="border-t-2 border-orange pt-3"
                >
                  <div className="text-3xl md:text-4xl font-bold text-orange">{s.n}</div>
                  <div className="text-xs uppercase font-bold tracking-wider text-muted-foreground mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FLOW */}
      <section className="bg-mist py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Reveal>
            <p className="kicker">How we work</p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl max-w-2xl">
              From raw data → insights → AI-driven decisions.
            </h2>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-6 relative">
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-orange to-transparent" />
            {flow.map((f, i) => (
              <Reveal key={f.step} delay={i * 0.12}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                  className="relative bg-background rounded-3xl p-8 border border-border hover:border-orange/40 hover:shadow-xl hover:shadow-orange/5 transition-all duration-500 group"
                >
                  <div className="w-12 h-12 rounded-full bg-orange text-white flex items-center justify-center font-bold relative z-10 shadow-lg shadow-orange/30 group-hover:scale-110 transition-transform">
                    {f.step}
                  </div>
                  <h3 className="mt-6 text-xl">{f.label}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
                  <motion.div
                    className="absolute -bottom-px left-8 right-8 h-px bg-orange origin-left"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 + i * 0.15 }}
                  />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <p className="kicker">Our services</p>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl max-w-xl">
              Six capabilities, one outcome: clarity.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link to="/services" className="text-orange font-semibold inline-flex items-center gap-2 hover:gap-3 transition-all">
              All services <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <motion.div
                whileHover={{ y: -6, rotate: -0.4 }}
                transition={{ duration: 0.4 }}
                className="group h-full bg-card rounded-3xl p-7 border border-border hover:border-orange/40 hover:shadow-xl hover:shadow-navy/5 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-2xl bg-navy text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="mt-6 text-lg">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* TWO HALVES */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-24 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="gradient-navy rounded-[2rem] p-10 lg:p-12 text-white relative overflow-hidden h-full min-h-[420px]">
              <div className="absolute inset-0 grid-bg opacity-40" />
              <motion.div
                className="absolute -top-16 -right-16 w-72 h-72 rounded-full blur-3xl opacity-50"
                style={{ background: "radial-gradient(circle, #E54727 0%, transparent 70%)" }}
                animate={{ scale: [1, 1.25, 1], opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 10, repeat: Infinity }}
              />
              <div className="relative">
                <LineChart className="w-10 h-10 text-orange" />
                <p className="kicker mt-6">Commercial clients</p>
                <h3 className="mt-3 text-3xl md:text-4xl text-white max-w-sm">
                  Pharma, BFSI, life sciences &amp; enterprise.
                </h3>
                <p className="mt-5 text-white/70 max-w-md leading-relaxed">
                  Decision intelligence, growth analytics, and AI products built
                  with the rigor enterprises expect.
                </p>
                <Link
                  to="/industries"
                  className="mt-8 inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
                >
                  Explore industries <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="bg-card rounded-[2rem] p-10 lg:p-12 relative overflow-hidden h-full min-h-[420px] border border-border">
              <Heart className="w-10 h-10 text-orange animate-pulse-soft" />
              <p className="kicker mt-6">Social enterprises &amp; NGOs</p>
              <h3 className="mt-3 text-3xl md:text-4xl max-w-sm">
                Driving impact you can measure.
              </h3>
              <p className="mt-5 text-ink/80 max-w-md leading-relaxed">
                Custom MIS, results-monitoring platforms, and analytics-driven
                program evaluation for NGOs and not-for-profits.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-ink/80">
                <li>· Field-team data collection &amp; dashboards</li>
                <li>· Impact measurement frameworks</li>
                <li>· MIS and reporting platforms</li>
              </ul>
              <Link
                to="/case-studies"
                className="mt-8 inline-flex items-center gap-2 text-orange font-semibold hover:gap-3 transition-all"
              >
                Impact stories <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CLIENTS MARQUEE */}
      <section className="border-y border-border bg-mist py-12 overflow-hidden">
        <p className="kicker text-center mb-8">Trusted across industries &amp; geographies</p>
        <div className="relative flex overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-16 px-8">
            {[...Array(2)].map((_, dup) =>
              ["Pharma Co.", "Global BFSI", "Life Sciences", "Rural Dev NGO", "Education Trust", "FinTech Lab", "MedTech Inc.", "Impact Fund"].map((n) => (
                <span key={`${dup}-${n}`} className="text-2xl font-bold text-navy/30 hover:text-orange transition-colors">
                  {n}
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 lg:py-32">
        <Reveal>
          <div className="gradient-navy rounded-[2rem] p-12 lg:p-20 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <motion.div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-50"
              style={{ background: "radial-gradient(circle, #E54727 0%, transparent 60%)" }}
              animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 20, 0] }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-32 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30"
              style={{ background: "radial-gradient(circle, #3F8FD9 0%, transparent 60%)" }}
              animate={{ scale: [1.1, 1, 1.1], x: [0, 40, 0] }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            <div className="relative">
              <Globe2 className="w-12 h-12 mx-auto text-orange animate-spin-slow" />
              <h2 className="mt-6 text-3xl md:text-5xl text-white max-w-3xl mx-auto leading-tight">
                Ready to turn your data into <span className="text-gradient-accent">decisions</span>?
              </h2>
              <p className="mt-5 text-white/70 max-w-xl mx-auto">
                Let's scope a 30-minute discovery call. No slides, no fluff — just
                your data and what's possible.
              </p>
              <Link
                to="/contact"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-orange px-8 py-4 text-sm font-semibold text-white shadow-xl shadow-orange/30 hover:shadow-orange/60 hover:-translate-y-0.5 transition-all btn-glow"
              >
                Book a discovery call <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}
