import { portfolio } from '../data/portfolio.js';
import ScrollReveal from './ScrollReveal.jsx';
import '../styles/components.css';

export default function Hero() {
  return (
    <section className="section hero">
      <div className="container">
        <div className="hero-content">
          <ScrollReveal>
            <h1 className="hero-title">{portfolio.personal.name}</h1>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <p className="hero-headline">{portfolio.personal.headline}</p>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="hero-tagline">{portfolio.personal.tagline}</p>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="hero-actions">
              <a href="#work" className="btn btn-primary">
                View Work
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
                href={`https://${portfolio.personal.linkedin}`}
                className="btn btn-ghost link-external"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
