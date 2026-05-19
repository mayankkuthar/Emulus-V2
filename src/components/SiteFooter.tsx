import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";
import content from "@/content.json";

const c = content.footer;

export function SiteFooter() {
  return (
    <footer className="ft">
      <div className="wrap ft-grid">
        <div className="ft-brand">
          <img src={logo} alt="Emulus Consulting" />
          <p>{c.brandText}</p>
        </div>

        <div>
          <h5>{c.exploreHeading}</h5>
          <ul>
            {c.exploreLinks.map((l: any) => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h5>{c.presenceHeading}</h5>
          <ul>
            {c.presenceList.map((p: string) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>

        <div>
          <h5>{c.contactHeading}</h5>
          <ul>
            {c.contactLinks.map((l: any) => (
              <li key={l.label}>
                {l.to ? <Link to={l.to}>{l.label}</Link> : <a href="#">{l.label}</a>}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="wrap ft-bottom">
        <span>© {new Date().getFullYear()} {c.copyright}</span>
        <span>{c.bottomTagline}</span>
      </div>
    </footer>
  );
}
