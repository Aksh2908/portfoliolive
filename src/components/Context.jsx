import { portfolio } from '../data/portfolio.js';
import ScrollReveal from './ScrollReveal.jsx';
import '../styles/components.css';

export default function Context() {
  return (
    <section className="section context">
      <div className="container">
        <div className="context-grid">
          <div className="context-main">
            <ScrollReveal>
              <div className="section-header">
                <p className="section-label">A Little Context</p>
              </div>
              <p className="context-description">
                Computer Science & Engineering student at Graphic Era Hill University,
                interested in software development, AI/ML, and building practical systems.
              </p>
            </ScrollReveal>
          </div>

          <div className="context-details">
            <ScrollReveal delay={100}>
              <div className="context-item">
                <p className="context-label">Studying</p>
                <p className="context-value">Computer Science & Engineering</p>
              </div>

              <div className="context-item">
                <p className="context-label">CGPA</p>
                <p className="context-value">{portfolio.education.primary.cgpa}</p>
              </div>

              <div className="context-item">
                <p className="context-label">Graduating</p>
                <p className="context-value">2027</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
