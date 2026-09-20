import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Work() {
  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="projects-grid">
          {portfolio.projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card-image">
                {project.screenshot && (
                  <img
                    src={project.screenshot}
                    alt={project.title}
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.parentElement.style.background = 'var(--color-surface-alt)';
                    }}
                  />
                )}
              </div>

              <div className="project-card-content">
                <div className="project-card-header">
                  <span className="project-number-small">{project.number}</span>
                  <h3 className="project-card-title">{project.title}</h3>
                </div>

                <p className="project-card-description">{project.description}</p>

                {project.technologies && project.technologies.length > 0 && (
                  <div className="project-card-technologies">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {project.metrics && project.metrics.length > 0 && (
                  <div className="project-card-metrics">
                    {project.metrics.slice(0, 2).map((metric, idx) => (
                      <div key={idx} className="project-card-metric">
                        <span className="project-card-metric-value">{metric.value}</span>
                        <span className="project-card-metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="project-card-links">
                  {project.github && (
                    <a
                      href={`https://${project.github}`}
                      className="btn btn-ghost link-external"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="btn btn-ghost link-external"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
