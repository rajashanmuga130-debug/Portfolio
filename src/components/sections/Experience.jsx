import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt, FaCloud } from 'react-icons/fa';
import { profile } from '../../data/profile';

export default function Experience() {
  const experiences = profile.experience || [];

  return (
    <section id="experience" className="section experience">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">05 / PRACTICAL EXPERIENCE</div>
          <h2 className="section-title">
            INTERNSHIP &amp; <span className="text-gradient">EXPERIENCE</span>
          </h2>
          <p className="section-subtitle">
            Hands-on industry training and exposure to practical cloud architectures and engineering workflows.
          </p>
        </motion.div>

        <div style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              className="glass-panel"
              style={{
                padding: '2.5rem',
                position: 'relative',
                borderRadius: 'var(--radius)',
                border: '1px solid var(--border)',
                background: 'var(--glass-bg)',
                backdropFilter: 'blur(16px)',
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6 }}
            >
              {/* Header */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  marginBottom: '1.25rem',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-red)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.12em',
                      marginBottom: '0.5rem',
                    }}
                  >
                    <FaCloud size={14} />
                    <span>PRACTICAL INDUSTRY INTERNSHIP</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                      color: 'var(--text)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {exp.role}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--bright-red)',
                      fontWeight: 600,
                      fontSize: '1rem',
                    }}
                  >
                    <FaBriefcase size={14} />
                    <span>{exp.company}</span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.4rem',
                  }}
                >
                  <span
                    className="tech-tag"
                    style={{
                      background: 'rgba(196, 0, 36, 0.1)',
                      borderColor: 'rgba(196, 0, 36, 0.3)',
                      color: 'var(--text)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                    }}
                  >
                    <FaCalendarAlt size={10} style={{ marginRight: '5px' }} />
                    {exp.duration}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                    }}
                  >
                    <FaMapMarkerAlt size={11} /> {exp.location}
                  </span>
                </div>
              </div>

              {/* Highlights */}
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: '1.25rem 0',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.6rem',
                }}
              >
                {exp.highlights.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    style={{
                      position: 'relative',
                      paddingLeft: '1.5rem',
                      fontSize: '0.92rem',
                      color: 'var(--text-muted)',
                      lineHeight: '1.6',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: 'var(--accent-red)',
                        fontWeight: 700,
                      }}
                    >
                      ▸
                    </span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Skills Tags */}
              {exp.skills && (
                <div
                  style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginTop: '1.5rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  }}
                >
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="tech-tag"
                      style={{
                        fontSize: '0.72rem',
                        background: 'rgba(255, 255, 255, 0.03)',
                        borderColor: 'rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
