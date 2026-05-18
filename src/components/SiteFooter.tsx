import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export function SiteFooter() {
  return (
    <footer className="gradient-navy text-white mt-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <img src={logo} alt="Emulus" className="h-10 w-auto brightness-0 invert" />
          <p className="kicker mt-3">Data-Backed Insights. AI-Driven Impact.</p>
          <p className="mt-5 max-w-md text-sm text-white/70 leading-relaxed">
            Emulus Consulting LLP is a global consulting and technology partner
            specializing in market research, data engineering, software services,
            and Generative AI.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-orange">Explore</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li><Link to="/about" className="story-link hover:text-orange transition">About</Link></li>
            <li><Link to="/services" className="story-link hover:text-orange transition">Services</Link></li>
            <li><Link to="/case-studies" className="story-link hover:text-orange transition">Case studies</Link></li>
            <li><Link to="/industries" className="story-link hover:text-orange transition">Industries</Link></li>
            <li><Link to="/careers" className="story-link hover:text-orange transition">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-orange">Global presence</h4>
          <ul className="mt-5 space-y-3 text-sm text-white/70">
            <li>India · Headquarters</li>
            <li>Canada</li>
            <li>Australia</li>
            <li>Singapore</li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center text-sm font-semibold text-orange hover:text-white transition"
          >
            Talk to us →
          </Link>
        </div>
      </div>
      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col sm:flex-row justify-between gap-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/40">
          <span>© {new Date().getFullYear()} Emulus Consulting LLP</span>
          <span>Made with intent · From data to decisions</span>
        </div>
      </div>
    </footer>
  );
}
