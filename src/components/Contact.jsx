import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container-text">
        <div className="section-header">
          <p className="section-label">Contact</p>
          <h2 className="section-title">If You'd Like to Talk</h2>
        </div>

        <div className="contact-content">
          <a
            href={`mailto:${portfolio.personal.email}`}
            className="contact-email link"
          >
            {portfolio.personal.email}
          </a>

          <div className="contact-links">
            <a
              href={`https://${portfolio.personal.linkedin}`}
              className="btn btn-ghost link-external"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href={`https://${portfolio.personal.github}`}
              className="btn btn-ghost link-external"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={portfolio.assets.resume}
              className="btn btn-ghost link-external"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              href={portfolio.assets.resume}
              className="btn btn-ghost"
              download
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
