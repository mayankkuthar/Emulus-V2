import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useSEO } from "@/lib/useSEO";

export default function Contact() {
  useSEO({
    title: "Contact — Emulus Consulting LLP",
    description: "Book a discovery call or reach our global offices in India, Canada, Australia, and Singapore.",
  });
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero
        kicker="Contact"
        title="Let's turn your data into decisions."
        subtitle="Tell us a bit about what you're working on. We'll get back within one business day."
      />
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24 grid lg:grid-cols-5 gap-10">
        <Reveal className="lg:col-span-3">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="bg-card rounded-3xl p-8 lg:p-10 border border-border"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Work email" name="email" type="email" required />
              <Field label="Company" name="company" />
              <Field label="Country" name="country" />
            </div>
            <div className="mt-5">
              <label className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">How can we help?</label>
              <textarea
                required rows={5}
                className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
                placeholder="Project context, timelines, anything else..."
              />
            </div>
            <button
              type="submit"
              disabled={sent}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-orange/30 hover:-translate-y-0.5 transition-all disabled:opacity-70 btn-glow"
            >
              {sent ? "Thanks — we'll be in touch" : (<>Send message <Send className="w-4 h-4" /></>)}
            </button>
          </form>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="bg-navy text-white rounded-3xl p-8 lg:p-10 relative overflow-hidden h-full">
            <div className="absolute inset-0 grid-bg opacity-30" />
            <div className="relative space-y-8">
              <Info icon={Mail} label="Email" value="hello@emulus.com" />
              <Info icon={Phone} label="Phone" value="+91 · +1 · +61 · +65" />
              <Info icon={MapPin} label="Offices" value={`India · Canada\nAustralia · Singapore`} />
              <div className="pt-6 border-t border-white/10">
                <p className="kicker">Response time</p>
                <p className="mt-2 text-white/80">We typically reply within one business day.</p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="block text-xs font-bold uppercase tracking-wider text-navy mb-2">
        {label}{required && <span className="text-orange ml-1">*</span>}
      </label>
      <input
        id={name} name={name} type={type} required={required}
        className="w-full rounded-2xl border border-border bg-background px-4 py-3 text-sm focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition"
      />
    </div>
  );
}

function Info({ icon: Icon, label, value }: { icon: typeof Mail; label: string; value: string }) {
  return (
    <div className="flex gap-4">
      <div className="w-10 h-10 rounded-xl bg-white/10 text-orange flex items-center justify-center shrink-0">
        <Icon className="w-5 h-5" />
      </div>
      <div>
        <p className="kicker">{label}</p>
        <p className="mt-1 text-white whitespace-pre-line">{value}</p>
      </div>
    </div>
  );
}
