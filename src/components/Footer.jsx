import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-links">
          <a
            href={`https://${portfolio.personal.github}`}
            className="footer-link link-external"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={`https://${portfolio.personal.linkedin}`}
            className="footer-link link-external"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${portfolio.personal.email}`}
            className="footer-link"
          >
            {portfolio.personal.email}
          </a>
        </div>
        <p className="footer-copyright">
          © {currentYear} {portfolio.personal.name}
        </p>
      </div>
    </footer>
  );
}
