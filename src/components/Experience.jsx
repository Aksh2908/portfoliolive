import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Work</h2>
        </div>

        <article className="experience-item">
          <div className="experience-header">
            <h3 className="experience-role">{portfolio.experience.role}</h3>
            <p className="experience-organization">{portfolio.experience.organization}</p>
            <p className="experience-dates">{portfolio.experience.dates}</p>
          </div>

          <ul className="experience-responsibilities">
            {portfolio.experience.responsibilities.map((responsibility, index) => (
              <li key={index}>{responsibility}</li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
