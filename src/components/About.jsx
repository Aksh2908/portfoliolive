import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container-text">
        <div className="section-header">
          <p className="section-label">About</p>
          <h2 className="section-title">A Little More</h2>
        </div>

        <p className="about-text">
          Computer Science & Engineering student interested in software development,
          AI/ML, and building practical systems. I enjoy working on projects that solve
          real problems and participating in hackathons to apply what I learn.
        </p>

        <p className="about-text">
          Currently interning in management while building software projects and
          competing in coding challenges. I'm looking for software engineering roles
          where I can contribute to meaningful work and continue learning.
        </p>
      </div>
    </section>
  );
}
