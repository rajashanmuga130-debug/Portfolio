import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">02 / IDENTITY</div>
          <h2 className="section-title">
            ENGINEERING &amp; <span className="text-gradient">PROBLEM SOLVING</span>
          </h2>
        </motion.div>

        <div className="about__grid">
          {/* Terminal / Code Card */}
          <motion.div
            className="about__terminal"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="about__terminal-bar">
              <span className="about__terminal-dot" />
              <span className="about__terminal-dot" />
              <span className="about__terminal-dot" />
              <span className="about__terminal-title">shanmuga@system:~ profile.json</span>
            </div>
            <div className="about__terminal-body">
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">&gt;</span>
                <span className="about__terminal-key">engineer:</span>{' '}
                <span className="about__terminal-value">&quot;{profile.fullName}&quot;</span>
              </div>
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">&gt;</span>
                <span className="about__terminal-key">degree:</span>{' '}
                <span className="about__terminal-value">&quot;{profile.education.degree}&quot;</span>
              </div>
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">&gt;</span>
                <span className="about__terminal-key">institution:</span>{' '}
                <span className="about__terminal-value">&quot;{profile.education.institution}, Sivakasi&quot;</span>
              </div>
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">&gt;</span>
                <span className="about__terminal-key">status:</span>{' '}
                <span className="about__terminal-value">&quot;Currently Pursuing (2023–2027)&quot;</span>
              </div>
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">&gt;</span>
                <span className="about__terminal-key">cgpa:</span>{' '}
                <span className="about__terminal-value">&quot;{profile.education.cgpa}&quot;</span>
              </div>
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">&gt;</span>
                <span className="about__terminal-key">internship:</span>{' '}
                <span className="about__terminal-value">&quot;Cloud Computing Intern @ SK TECHFORGE LLP&quot;</span>
              </div>
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">&gt;</span>
                <span className="about__terminal-key">location:</span>{' '}
                <span className="about__terminal-value">&quot;{profile.location}&quot;</span>
              </div>
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">&gt;</span>
                <span className="about__terminal-key">focus:</span>{' '}
                <span className="about__terminal-value">&quot;{profile.positioning}&quot;</span>
              </div>
              <div className="about__terminal-line">
                <span className="about__terminal-prompt">&gt;</span>
                <span className="about__terminal-key">mission:</span>{' '}
                <span className="about__terminal-value">&quot;Build efficient software, cloud workflows, and data-driven systems&quot;</span>
              </div>
            </div>
          </motion.div>

          {/* Editorial / Bio */}
          <motion.div
            className="about__info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {profile.bio.map((paragraph, idx) => (
              <p key={idx} className="about__bio">
                {paragraph}
              </p>
            ))}

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-red)',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                marginBottom: '0.75rem',
                fontWeight: 600
              }}>
                AREAS OF EXPLORATION
              </div>
              <div className="about__interests">
                {profile.interests.map((interest) => (
                  <span key={interest} className="about__interest-tag" data-magnetic>
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
              {/* Soft Skills */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--accent-red)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  fontWeight: 600
                }}>
                  SOFT SKILLS
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {profile.softSkills.map((skill) => (
                    <span key={skill} className="tech-tag" style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.03)' }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Languages */}
              <div>
                <div style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: 'var(--accent-red)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.5rem',
                  fontWeight: 600
                }}>
                  LANGUAGES
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {profile.languages.map((lang) => (
                    <span key={lang.name} className="tech-tag" style={{ fontSize: '0.72rem', background: 'rgba(255, 255, 255, 0.03)' }}>
                      {lang.name} <span style={{ color: 'var(--text-dim)', fontSize: '0.65rem' }}>({lang.level})</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
