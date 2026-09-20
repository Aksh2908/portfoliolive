import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Tools() {
  const skillCategories = [
    { key: 'languages', label: 'Languages' },
    { key: 'web', label: 'Web & UI' },
    { key: 'backend', label: 'Backend & Frameworks' },
    { key: 'aiMl', label: 'AI / ML' },
    { key: 'databases', label: 'Databases' },
    { key: 'methodologies', label: 'Methodologies' }
  ];

  return (
    <section id="tools" className="section tools">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Tools I've Used</p>
          <h2 className="section-title">Skills</h2>
        </div>

        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.key} className="skill-category">
              <h3 className="skill-category-title">{category.label}</h3>
              <div className="skill-list">
                {portfolio.skills[category.key].map((skill, index) => (
                  <span key={index} className="tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
