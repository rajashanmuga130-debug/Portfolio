import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa';
import { projectsData } from '../data/projects';
import './ProjectDetail.css';

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === id);

  if (!project) {
    return (
      <section className="section project-detail">
        <div className="container" style={{ textAlign: 'center', padding: '6rem 0' }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', marginBottom: '1rem' }}>
            Project Specification Not Found
          </h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            The requested technical project could not be located in the current repository.
          </p>
          <Link to="/" className="btn btn-outline">
            <FaArrowLeft size={14} /> Return to Mission Control
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="section project-detail" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="container">
        <Link
          to="/#projects"
          className="btn btn-outline"
          style={{ marginBottom: '2rem' }}
          data-magnetic
        >
          <FaArrowLeft size={14} /> Return to Projects
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Banner */}
          <div
            className="pd__hero glass-panel"
            style={{
              padding: '2.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '2rem',
              marginBottom: '3rem',
              borderColor: project.color ? `${project.color}30` : 'var(--glass-border)',
              boxShadow: `0 20px 60px rgba(0, 0, 0, 0.6), 0 0 40px ${project.color ? `${project.color}15` : 'transparent'}`,
            }}
          >
            <span style={{ fontSize: '3.5rem' }}>{project.emoji}</span>
            <div>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  color: project.color || 'var(--accent-red)',
                  letterSpacing: '0.15em',
                  display: 'block',
                  marginBottom: '0.5rem',
                }}
              >
                {project.category}
              </span>
              <h1
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                  color: 'var(--text)',
                }}
              >
                {project.title}
              </h1>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: '3rem',
            }}
          >
            {/* Main Content */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-red)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  SYSTEM OVERVIEW
                </h3>
                <p style={{ color: 'var(--text)', lineHeight: '1.8', fontSize: '1rem' }}>
                  {project.description}
                </p>
              </div>

              <div className="glass-panel" style={{ padding: '2rem' }}>
                <h3
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-red)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  KEY ARCHITECTURAL HIGHLIGHTS
                </h3>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                  {project.features.map((f, i) => (
                    <li
                      key={i}
                      style={{
                        padding: '0.5rem 0',
                        paddingLeft: '1.5rem',
                        position: 'relative',
                        color: 'var(--text)',
                        fontSize: '0.95rem',
                      }}
                    >
                      <span
                        style={{
                          position: 'absolute',
                          left: 0,
                          color: project.color || 'var(--accent-red)',
                        }}
                      >
                        ▸
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="glass-panel" style={{ padding: '1.75rem' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-red)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  TECH ARTIFACTS
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tech.map((t) => (
                    <span key={t} className="tech-tag" style={{ fontSize: '0.75rem' }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="glass-panel" style={{ padding: '1.75rem' }}>
                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.75rem',
                    color: 'var(--accent-red)',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                  }}
                >
                  SOURCE &amp; DEPLOYMENT
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                  {project.github ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline"
                      style={{ justifyContent: 'center' }}
                    >
                      <FaGithub size={16} /> GitHub Repository
                    </a>
                  ) : (
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
                      Source repository restricted / Academic private release
                    </span>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                      style={{ justifyContent: 'center' }}
                    >
                      <FaExternalLinkAlt size={14} /> Launch Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
