import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-hero">
          <h2 className="contact-title">Let's Build Something.</h2>
          <p className="contact-subtitle">
            Have an interesting problem, project, or opportunity?
          </p>

          <div className="contact-actions">
            <a
              href={`mailto:${portfolio.personal.email}`}
              className="btn btn-primary"
            >
              Email Me
            </a>
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
          </div>
        </div>
      </div>
    </section>
  );
}
