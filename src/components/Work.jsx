import { useState, useEffect, useRef } from 'react';
import { portfolio } from '../data/portfolio.js';
import '../styles/components.css';

export default function Work() {
  const [activeProject, setActiveProject] = useState(0);
  const projectRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = projectRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setActiveProject(index);
            }
          }
        });
      },
      { threshold: 0.3 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const scrollToProject = (index) => {
    const project = projectRefs.current[index];
    if (project) {
      project.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="work" className="section work">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="work-layout">
          <div className="project-index">
            {portfolio.projects.map((project, index) => (
              <button
                key={project.id}
                className={`project-index-item ${activeProject === index ? 'active' : ''}`}
                onClick={() => scrollToProject(index)}
                aria-label={`Navigate to ${project.title}`}
              >
                <span className="project-index-number">{project.number}</span>
                <span className="project-index-name">{project.title}</span>
              </button>
            ))}
          </div>

          <div className="projects-container">
            {portfolio.projects.map((project, index) => (
              <article
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                className={`project project-${index + 1}`}
              >
                <div className="project-layout">
                  <div className="project-visual-container">
                    {project.screenshot && (
                      <img
                        src={project.screenshot}
                        alt={project.title}
                        className="project-image"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.style.background = 'var(--color-surface-alt)';
                        }}
                      />
                    )}
                  </div>

                  <div className="project-content">
                    <div className="project-header">
                      <span className="project-number">{project.number}</span>
                      <h3 className="project-title">{project.title}</h3>
                    </div>

                    <p className="project-description">{project.description}</p>

                    {project.technologies && project.technologies.length > 0 && (
                      <div className="project-technologies">
                        {project.technologies.map((tech, idx) => (
                          <span key={idx} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}

                    {project.metrics && project.metrics.length > 0 && (
                      <div className="project-metrics-inline">
                        {project.metrics.map((metric, idx) => (
                          <span key={idx} className="project-metric-inline">
                            <strong>{metric.value}</strong> {metric.label}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="project-links">
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
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
