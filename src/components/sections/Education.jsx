import { motion } from 'framer-motion';
import { FaGraduationCap, FaAward, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
import { profile } from '../../data/profile';

const academicMilestones = [
  {
    period: profile.education.duration,
    degree: profile.education.degree,
    institution: profile.education.institution,
    location: profile.education.location,
    cgpa: profile.education.cgpa,
    status: profile.education.status,
    highlights: [
      'Comprehensive study of Computer Science & Engineering fundamentals, Data Structures & Algorithms, Object-Oriented Programming (OOP), and Database Management Systems (DBMS).',
      'Consistent academic performance maintaining a CGPA of 8.0 / 10 throughout engineering coursework.',
      'Hands-on laboratory implementation of Relational Databases (MySQL, SQL queries), Modern Web Applications (React.js), and Python programming.',
      'Engineering projects spanning centralized Network Threat Intelligence, LSTM-based Stock Price Prediction, and Courier Management Systems.',
    ],
  },
];

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">07 / ACADEMIC FOUNDATION</div>
          <h2 className="section-title">
            EDUCATION &amp; <span className="text-gradient">ACADEMICS</span>
          </h2>
          <p className="section-subtitle">
            Formal engineering degree curriculum and academic milestones at PSR Engineering College.
          </p>
        </motion.div>

        <div style={{ marginTop: '3rem' }}>
          {academicMilestones.map((item, index) => (
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
                    <FaGraduationCap size={15} />
                    <span>UNDERGRADUATE DEGREE</span>
                  </div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.25rem, 2.5vw, 1.6rem)',
                      color: 'var(--text)',
                      marginBottom: '0.35rem',
                    }}
                  >
                    {item.degree}
                  </h3>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.6rem',
                      color: 'var(--text-muted)',
                      fontSize: '1rem',
                    }}
                  >
                    <span>{item.institution}</span>
                    <span>&bull;</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.3rem' }}>
                      <FaMapMarkerAlt size={12} /> {item.location}
                    </span>
                  </div>
                </div>

                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    gap: '0.5rem',
                  }}
                >
                  <span
                    className="tech-tag"
                    style={{
                      background: 'rgba(196, 0, 36, 0.1)',
                      borderColor: 'rgba(196, 0, 36, 0.3)',
                      color: 'var(--bright-red)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                    }}
                  >
                    <FaAward size={12} style={{ marginRight: '5px' }} />
                    CGPA: {item.cgpa}
                  </span>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      color: 'var(--text-dim)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.3rem',
                      fontFamily: 'var(--font-mono)',
                    }}
                  >
                    <FaCalendarAlt size={11} /> {item.period}
                  </span>
                </div>
              </div>

              {/* Academic Highlights */}
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
                {item.highlights.map((highlight, hIdx) => (
                  <li
                    key={hIdx}
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
                    {highlight}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
