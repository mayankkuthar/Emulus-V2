import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
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

      <section className="block">
        <div className="wrap">
          <div className="contact-grid">
            <div className="form-card">
              <p className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" /> Send a message</p>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <div className="form-row-2">
                  <FormField label="Full name" name="name" required />
                  <FormField label="Work email" name="email" type="email" required />
                </div>
                <div className="form-row-2">
                  <FormField label="Company" name="company" />
                  <FormField label="Country" name="country" />
                </div>
                <div className="form-field">
                  <label htmlFor="message">
                    How can we help? <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Project context, timelines, anything else..."
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--c-ink-2)", letterSpacing: "0.04em" }}>
                    We reply within one business day.
                  </span>
                  <button type="submit" disabled={sent} className="btn btn-accent">
                    {sent ? "Thanks — we'll be in touch!" : (<>Send message <Send size={14} /></>)}
                  </button>
                </div>
              </form>
            </div>

            <div className="info-card">
              <p className="eyebrow on-dark" style={{ marginBottom: 24 }}><span className="dot" /> Get in touch</p>
              <div className="info-row">
                <div className="info-ico"><Mail size={18} /></div>
                <div>
                  <div className="info-lab">Email</div>
                  <div className="info-val">hello@emulus.co</div>
                </div>
              </div>
              <div className="info-row">
                <div className="info-ico"><Phone size={18} /></div>
                <div>
                  <div className="info-lab">Phone</div>
                  <div className="info-val">+91 · +1 · +61 · +65</div>
                </div>
              </div>
              <div className="info-row">
                <div className="info-ico"><MapPin size={18} /></div>
                <div>
                  <div className="info-lab">Offices</div>
                  <div className="info-val">{`India · Canada\nAustralia · Singapore`}</div>
                </div>
              </div>
              <div style={{ paddingTop: 24, marginTop: 8, borderTop: "1px solid rgba(255,255,255,0.10)" }}>
                <p className="eyebrow on-dark"><span className="dot" /> Response time</p>
                <p style={{ marginTop: 8, color: "rgba(255,255,255,0.8)", fontSize: 15 }}>
                  We typically reply within one business day.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}

function FormField({
  label, name, type = "text", required = false,
}: {
  label: string; name: string; type?: string; required?: boolean;
}) {
  return (
    <div className="form-field">
      <label htmlFor={name}>
        {label}{required && <span className="req">*</span>}
      </label>
      <input id={name} name={name} type={type} required={required} />
    </div>
  );
}
