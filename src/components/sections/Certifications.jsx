import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';
import { certificationsData, emptyCertMessage } from '../../data/certifications';

export default function Certifications() {
  const hasCerts = certificationsData && certificationsData.length > 0;

  return (
    <section id="certifications" className="section certifications">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">08 / CREDENTIALS</div>
          <h2 className="section-title">
            HONORS &amp; <span className="text-gradient">CERTIFICATIONS</span>
          </h2>
          <p className="section-subtitle">
            Professional qualifications, internship credentials, and verified technical certificates.
          </p>
        </motion.div>

        {!hasCerts ? (
          <motion.div
            className="glass-panel certifications__empty"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="certifications__empty-icon">
              <FaAward style={{ color: 'var(--accent-red)' }} />
            </div>
            <p className="certifications__empty-text">{emptyCertMessage}</p>
            <div style={{ marginTop: '1.5rem' }}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--text-dim)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                }}
              >
                Ongoing tracks: Python Specialization &bull; SQL Deep Dive &bull; Machine Learning
              </span>
            </div>
          </motion.div>
        ) : (
          <div style={{ marginTop: '3rem' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '1.5rem',
              }}
            >
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={index}
                  className="glass-panel"
                  style={{
                    padding: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div>
                    <FaCertificate
                      size={28}
                      style={{ color: 'var(--accent-red)', marginBottom: '1rem' }}
                    />
                    <h3
                      style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '1.15rem',
                        marginBottom: '0.4rem',
                      }}
                    >
                      {cert.name}
                    </h3>
                    <div style={{ color: 'var(--bright-red)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {cert.issuer}
                    </div>
                    {cert.description && (
                      <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', lineHeight: '1.5' }}>
                        {cert.description}
                      </p>
                    )}
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        color: 'var(--text-dim)',
                      }}
                    >
                      {cert.date}
                    </span>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="project-card__link"
                      >
                        Verify <FaExternalLinkAlt size={10} />
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
