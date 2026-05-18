import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.svg";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/industries", label: "Industries" },
  { to: "/case-studies", label: "Case Studies" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`hdr${scrolled ? " scrolled" : ""}`}>
      <div className="wrap hdr-inner">
        <Link to="/" aria-label="Emulus home">
          <img src={logo} alt="Emulus Consulting" style={{ height: 26 }} />
        </Link>

        <nav className="hidden lg:flex items-center gap-0.5" aria-label="Primary">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.end}
              className={({ isActive }) =>
                `relative px-3.5 py-2 text-[13.5px] font-medium rounded-full transition-all duration-200 ${
                  isActive
                    ? "text-[#131931] after:absolute after:left-3.5 after:right-3.5 after:bottom-0.5 after:h-0.5 after:rounded-sm after:bg-gradient-to-r after:from-[#e54727] after:to-[#ff6a3d]"
                    : "text-[#2a3147]/80 hover:text-[#131931] hover:bg-[rgba(19,25,49,0.04)]"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-2.5">
          <Link to="/contact" className="btn btn-ghost btn-sm">Sign in</Link>
          <Link to="/contact" className="btn btn-primary btn-sm">
            Book a call
            <ArrowRight className="arr" style={{ width: 14, height: 14 }} />
          </Link>
        </div>

        <button
          className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(19,25,49,0.12)] text-[#131931]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-[rgba(19,25,49,0.08)] overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {links.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.end}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `py-3 font-medium border-b border-[rgba(19,25,49,0.08)] text-sm ${
                      isActive ? "text-[#e54727]" : "text-[#131931]"
                    }`
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 btn btn-accent w-full justify-center"
              >
                Book a discovery call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
