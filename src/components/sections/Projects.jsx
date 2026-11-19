import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaLayerGroup } from 'react-icons/fa';
import { projectsData } from '../../data/projects';

function ProjectCard({ project, onSelectModal }) {
  const cardRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = useCallback((e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  }, []);

  return (
    <motion.div
      ref={cardRef}
      className="glass-panel project-card"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      style={{
        border: isHovered
          ? `1px solid ${project.color || 'var(--accent-red)'}`
          : '1px solid var(--glass-border)',
      }}
    >
      {/* Dynamic Cursor Spotlight */}
      <div
        className="project-card__spotlight"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${project.color ? `${project.color}15` : 'rgba(196, 0, 36, 0.12)'}, transparent 60%)`,
        }}
      />

      <div className="project-card__header">
        <span className="project-card__emoji">{project.emoji}</span>
        <span
          className="project-card__category"
          style={{ color: project.color || 'var(--accent-red)' }}
        >
          {project.category}
        </span>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__tagline">{project.tagline}</p>

        <p style={{
          fontSize: '0.82rem',
          color: 'var(--text-muted)',
          marginBottom: '1rem',
          lineHeight: '1.6'
        }}>
          {project.description}
        </p>

        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="tech-tag">
              {t}
            </span>
          ))}
        </div>
      </div>

      <div className="project-card__footer">
        <button
          className="project-card__link"
          onClick={() => onSelectModal(project)}
          data-magnetic
          style={{ cursor: 'pointer', fontWeight: 600, color: 'var(--text)' }}
        >
          <FaLayerGroup size={12} style={{ color: 'var(--accent-red)' }} />
          Inspect Specs
        </button>

        <div className="project-card__links">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
              title="GitHub Repository"
              data-magnetic
            >
              <FaGithub size={14} />
              <span>Source</span>
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="project-card__link"
              title="Live Demo"
              data-magnetic
            >
              <FaExternalLinkAlt size={12} />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">03 / SHOWCASE</div>
          <h2 className="section-title">
            TECHNICAL &amp; <span className="text-gradient">ACADEMIC SYSTEMS</span>
          </h2>
          <p className="section-subtitle">
            Engineered prototypes bridging sequential machine learning, cybersecurity intelligence,
            and real-time computer vision architectures.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelectModal={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* Cinematic Project Specs Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div
              style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(3, 3, 3, 0.85)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                zIndex: 10000,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem',
              }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="glass-panel"
                style={{
                  maxWidth: '700px',
                  width: '100%',
                  maxHeight: '90vh',
                  overflowY: 'auto',
                  padding: '2.5rem',
                  position: 'relative',
                  border: `1px solid ${selectedProject.color || 'var(--accent-red)'}`,
                  boxShadow: `0 20px 80px rgba(0, 0, 0, 0.9), 0 0 50px ${selectedProject.color ? `${selectedProject.color}30` : 'rgba(196, 0, 36, 0.2)'}`,
                }}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '1.5rem',
                    right: '1.5rem',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-muted)',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    transition: 'var(--transition-fast)',
                  }}
                  aria-label="Close modal"
                >
                  <FaTimes size={16} />
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '3rem' }}>{selectedProject.emoji}</span>
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        textTransform: 'uppercase',
                        color: selectedProject.color || 'var(--accent-red)',
                        letterSpacing: '0.12em',
                      }}
                    >
                      {selectedProject.category}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.6rem',
                        color: 'var(--text)',
                        marginTop: '0.2rem',
                      }}
                    >
                      {selectedProject.title}
                    </h3>
                  </div>
                </div>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.8', marginBottom: '1.75rem' }}>
                  {selectedProject.description}
                </p>

                <div style={{ marginBottom: '1.75rem' }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-red)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                    }}
                  >
                    SYSTEM CAPABILITIES &amp; ARCHITECTURE
                  </h4>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {selectedProject.features.map((feat, idx) => (
                      <li
                        key={idx}
                        style={{
                          fontSize: '0.88rem',
                          color: 'var(--text)',
                          padding: '0.4rem 0',
                          paddingLeft: '1.25rem',
                          position: 'relative',
                        }}
                      >
                        <span
                          style={{
                            position: 'absolute',
                            left: 0,
                            color: selectedProject.color || 'var(--accent-red)',
                          }}
                        >
                          ▸
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <h4
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      color: 'var(--accent-red)',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      marginBottom: '0.75rem',
                    }}
                  >
                    TECHNICAL STACK
                  </h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {selectedProject.tech.map((t) => (
                      <span key={t} className="tech-tag" style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      <FaGithub size={14} /> View On GitHub
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                    >
                      <FaExternalLinkAlt size={12} /> Launch Live Demo
                    </a>
                  )}
                  <button
                    className="btn btn-outline"
                    onClick={() => setSelectedProject(null)}
                  >
                    Close Specifications
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
