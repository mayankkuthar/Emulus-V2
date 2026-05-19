import { useState } from "react";
import { PageShell, PageHero } from "@/components/PageShell";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useSEO } from "@/lib/useSEO";
import content from "@/content.json";

const c = content.pages.contact;

export default function Contact() {
  useSEO(c.seo);
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHero kicker={c.hero.kicker} title={c.hero.title} subtitle={c.hero.subtitle} />

      <section className="block">
        <div className="wrap">
          <div className="contact-grid">
            <div className="form-card">
              <p className="eyebrow" style={{ marginBottom: 24 }}><span className="dot" /> {c.form.eyebrow}</p>
              <form
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                style={{ display: "flex", flexDirection: "column", gap: 18 }}
              >
                <div className="form-row-2">
                  {c.form.fields.slice(0, 2).map((f: any) => (
                    <FormField key={f.name} label={f.label} name={f.name} type={f.type} required={f.required} />
                  ))}
                </div>
                <div className="form-row-2">
                  {c.form.fields.slice(2).map((f: any) => (
                    <FormField key={f.name} label={f.label} name={f.name} type={f.type} required={f.required} />
                  ))}
                </div>
                <div className="form-field">
                  <label htmlFor="message">
                    {c.form.textareaLabel} <span className="req">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder={c.form.textareaPlaceholder}
                  />
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--c-ink-2)", letterSpacing: "0.04em" }}>
                    {c.form.footnote}
                  </span>
                  <button type="submit" disabled={sent} className="btn btn-accent">
                    {sent ? c.form.sentText : (<>{c.form.submitText} <Send size={14} /></>)}
                  </button>
                </div>
              </form>
            </div>

            <div className="info-card">
              <p className="eyebrow on-dark" style={{ marginBottom: 24 }}><span className="dot" /> {c.info.eyebrow}</p>
              <div className="info-row">
                <div className="info-ico"><Mail size={18} /></div>
                <div>
                  <div className="info-lab">Email</div>
                  <div className="info-val">{c.info.email}</div>
                </div>
              </div>
              <div className="info-row">
                <div className="info-ico"><Phone size={18} /></div>
                <div>
                  <div className="info-lab">Phone</div>
                  <div className="info-val">{c.info.phone}</div>
                </div>
              </div>
              <div className="info-row">
                <div className="info-ico"><MapPin size={18} /></div>
                <div>
                  <div className="info-lab">Offices</div>
                  <div className="info-val">{c.info.offices}</div>
                </div>
              </div>
              <div style={{ paddingTop: 24, marginTop: 8 }}>
                <p className="eyebrow on-dark"><span className="dot" /> {c.info.responseEyebrow}</p>
                <p style={{ marginTop: 8, color: "rgba(255,255,255,0.8)", fontSize: 15 }}>
                  {c.info.responseText}
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
