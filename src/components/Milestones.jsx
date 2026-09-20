import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Milestones() {
  return (
    <section id="milestones" className="section milestones">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Milestones</p>
          <h2 className="section-title">Achievements</h2>
        </div>

        <div className="milestones-list">
          {portfolio.achievements.map((achievement, index) => (
            <article key={index} className="milestone">
              <div className="milestone-content">
                <h3 className="milestone-title">{achievement.title}</h3>
                <p className="milestone-detail">{achievement.detail}</p>
                <span className="milestone-year">{achievement.year}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
