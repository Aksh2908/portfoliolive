import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Background</h2>
        </div>

        <div className="education-grid">
          <article className="education-item education-primary">
            <div className="education-header">
              <h3 className="education-degree">{portfolio.education.primary.degree}</h3>
              <p className="education-institution">{portfolio.education.primary.institution}</p>
              <p className="education-dates">{portfolio.education.primary.dates}</p>
            </div>

            <div className="education-details">
              <div className="education-detail">
                <span className="education-detail-label">CGPA</span>
                <span className="education-detail-value">{portfolio.education.primary.cgpa}</span>
              </div>

              {portfolio.education.primary.coursework && (
                <div className="education-coursework">
                  <p className="education-coursework-label">Relevant Coursework</p>
                  <div className="education-coursework-list">
                    {portfolio.education.primary.coursework.map((course, index) => (
                      <span key={index} className="tag">
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </article>

          {portfolio.education.secondary && (
            <article className="education-item education-secondary">
              <div className="education-header">
                <h3 className="education-degree">{portfolio.education.secondary.degree}</h3>
                <p className="education-institution">{portfolio.education.secondary.institution}</p>
                <p className="education-dates">{portfolio.education.secondary.dates}</p>
              </div>

              <div className="education-details">
                <div className="education-detail">
                  <span className="education-detail-label">Percentage</span>
                  <span className="education-detail-value">{portfolio.education.secondary.percentage}</span>
                </div>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>
  );
}
