import { Link } from "react-router-dom";
import logo from "@/assets/logo.svg";

export function SiteFooter() {
  return (
    <footer className="ft">
      <div className="wrap ft-grid">
        <div className="ft-brand">
          <img src={logo} alt="Emulus Consulting" />
          <p>A global consulting and technology partner specializing in market research, data engineering, software services, and Generative AI.</p>
        </div>

        <div>
          <h5>Explore</h5>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/case-studies">Case studies</Link></li>
            <li><Link to="/industries">Industries</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        <div>
          <h5>Global presence</h5>
          <ul>
            <li>India · HQ</li>
            <li>Canada</li>
            <li>Australia</li>
            <li>Singapore</li>
          </ul>
        </div>

        <div>
          <h5>Get in touch</h5>
          <ul>
            <li><Link to="/contact">hello@emulus.co</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><a href="#">Partnerships</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap ft-bottom">
        <span>© {new Date().getFullYear()} Emulus Consulting LLP</span>
        <span>Made with intent · From data to decisions</span>
      </div>
    </footer>
  );
}
