import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { motion } from "framer-motion";
import { Pill, Landmark, Microscope, HeartHandshake, Building2, Sprout } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

const items = [
  { icon: Pill, name: "Pharma", body: "Commercial analytics, market access, and AI-enabled medical insights." },
  { icon: Microscope, name: "Life Sciences", body: "Research automation, evidence synthesis, and decision support." },
  { icon: Landmark, name: "BFSI", body: "Risk, fraud, customer intelligence, and Gen AI for operations." },
  { icon: Building2, name: "Enterprise", body: "Modern data platforms, MLOps, and product engineering at scale." },
  { icon: HeartHandshake, name: "Social Impact", body: "Impact measurement and monitoring platforms for NGOs." },
  { icon: Sprout, name: "Rural Development", body: "Field data systems and analytics for grassroots organizations." },
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
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {items.map((i, idx) => (
          <Reveal key={i.name} delay={(idx % 3) * 0.08}>
            <motion.div
              whileHover={{ y: -6, rotate: -0.4 }}
              transition={{ duration: 0.4 }}
              className="bg-card rounded-3xl p-8 border border-border h-full hover:border-orange/40 hover:shadow-xl hover:shadow-navy/5 transition-all duration-500 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-navy text-orange flex items-center justify-center group-hover:bg-orange group-hover:text-white group-hover:rotate-6 transition-all duration-500">
                <i.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-6 text-xl">{i.name}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{i.body}</p>
            </motion.div>
          </Reveal>
        ))}
      </section>
    </PageShell>
  );
}
