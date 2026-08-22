import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projects[activeIndex];

  const handleSelect = useCallback((i: number) => {
    setActiveIndex(i);
  }, []);

  return (
    <section id="projects" className="section projects" aria-labelledby="projects-title">
      <div className="container container--lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <span className="section-label">// Work</span>
          <h2 id="projects-title" className="section-title">Project Lab</h2>
          <p className="section-subtitle">
            Real software, real code, real problem-solving. Each project represents a different domain of computer science.
          </p>
        </motion.div>

        <div className="projects__showcase">
          {/* Project Selector */}
          <div className="projects__selector" role="tablist" aria-label="Project list">
            {projects.map((project, i) => (
              <button
                key={project.id}
                role="tab"
                aria-selected={i === activeIndex}
                aria-controls={`project-panel-${project.id}`}
                className={`projects__tab ${i === activeIndex ? 'projects__tab--active' : ''}`}
                onClick={() => handleSelect(i)}
                style={{ '--project-color': project.color } as React.CSSProperties}
              >
                <span className="projects__tab-number">{project.number}</span>
                <div className="projects__tab-info">
                  <span className="projects__tab-title">{project.title}</span>
                  <span className="projects__tab-subtitle">{project.subtitle}</span>
                </div>
                {i === activeIndex && (
                  <motion.div
                    className="projects__tab-indicator"
                    layoutId="activeTab"
                    transition={{ type: 'spring', stiffness: 380, damping: 35 }}
                    style={{ background: project.color }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Project Detail */}
          <div className="projects__detail">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.id}
                id={`project-panel-${active.id}`}
                role="tabpanel"
                className="projects__panel"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
              >
                {/* Header */}
                <div className="projects__panel-header">
                  <span className="projects__panel-number" style={{ color: active.color }}>
                    Project {active.number}
                  </span>
                  <h3 className="projects__panel-title">{active.title}</h3>
                  <p className="projects__panel-subtitle">{active.subtitle}</p>
                </div>

                {/* Problem / Solution */}
                <div className="projects__panel-blocks">
                  <div className="projects__block">
                    <h4 className="projects__block-label">Problem</h4>
                    <p className="projects__block-text">{active.problem}</p>
                  </div>
                  <div className="projects__block">
                    <h4 className="projects__block-label">Solution</h4>
                    <p className="projects__block-text">{active.solution}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="projects__features">
                  <h4 className="projects__block-label">Key Features</h4>
                  <ul className="projects__feature-list">
                    {active.features.slice(0, 8).map((f) => (
                      <li key={f} className="projects__feature-item">
                        <span className="projects__feature-dot" style={{ background: active.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  {active.features.length > 8 && (
                    <p className="projects__feature-more">+ {active.features.length - 8} more features</p>
                  )}
                </div>

                {/* Tech Stack */}
                <div className="projects__tech">
                  <h4 className="projects__block-label">Technologies</h4>
                  <div className="projects__tech-tags">
                    {active.technologies.map((tech) => (
                      <span key={tech} className="projects__tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Concepts */}
                <div className="projects__concepts">
                  <h4 className="projects__block-label">Engineering Concepts</h4>
                  <div className="projects__tech-tags">
                    {active.concepts.map((concept) => (
                      <span key={concept} className="projects__concept-tag">{concept}</span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="projects__ctas">
                  <a
                    href={active.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="projects__cta projects__cta--primary"
                    style={{ background: active.color }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                    View on GitHub
                  </a>
                  {active.liveDemo && (
                    <a
                      href={active.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__cta projects__cta--secondary"
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
                      </svg>
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
