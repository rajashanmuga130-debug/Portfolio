import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPaperPlane, FaGithub, FaChevronDown, FaGraduationCap, FaCode, FaRocket, FaAward } from 'react-icons/fa';
import { profile } from '../../data/profile';
import profilePhoto from '../../assets/profile.jpg';

export default function Hero() {
  const sectionRef = useRef(null);

  const scrollToProjects = (e) => {
    e.preventDefault();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = (e) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Build visible stats with custom icons
  const stats = [
    { label: 'Degree', value: profile.stats.degree || 'B.E. CSE (2023–2027)', icon: <FaGraduationCap size={15} /> },
    { label: 'CGPA', value: profile.stats.cgpa || '8.0 / 10 CGPA', icon: <FaAward size={15} /> },
    { label: 'Projects', value: profile.stats.projects || '3+ Engineering Systems', icon: <FaCode size={15} /> },
    { label: 'Status', value: profile.stats.availability || 'Currently Studying • Open for Roles', icon: <FaRocket size={15} /> },
  ];

  return (
    <section id="home" className="hero" ref={sectionRef}>
      <div className="hero__content container">
        {/* Ambient Brand Watermark */}
        <div className="hero__watermark" aria-hidden="true">
          {profile.brandName}
        </div>

        <div className="hero__layout">
          {/* Left Column: Editorial Headline & Actions */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Live Status Pill */}
            <div className="hero__status-pill">
              <span className="hero__status-ping">
                <span className="hero__status-ping-ring" />
                <span className="hero__status-ping-dot" />
              </span>
              <span>CURRENTLY PURSUING B.E. CSE (2023–2027) &bull; OPEN FOR ROLES</span>
            </div>

            {/* Eyebrow */}
            <div className="hero__eyebrow">
              01 / COMPUTER SCIENCE &amp; ENGINEERING
            </div>

            {/* Main Title */}
            <h1 className="hero__title">
              <span className="hero__title-line1">BUILDING IDEAS</span>
              <span className="hero__title-line2">
                INTO EXPERIENCES<span className="hero__title-dot">.</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="hero__subtitle">
              <strong>{profile.shortTitle}</strong>
              <br />
              {profile.subtitle}
            </p>

            {/* Glassmorphic Stats Grid */}
            <motion.div
              className="hero__stats-grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
            >
              {stats.map(s => (
                <div key={s.label} className="hero__stat-card">
                  <div className="hero__stat-icon">
                    {s.icon}
                  </div>
                  <div className="hero__stat-info">
                    <span className="hero__stat-value">{s.value}</span>
                    <span className="hero__stat-label">{s.label}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="hero__actions"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <button className="btn btn-primary" onClick={scrollToProjects} data-magnetic>
                EXPLORE PROJECTS <FaArrowRight size={13} />
              </button>

              <button
                className="btn btn-outline"
                onClick={scrollToContact}
                data-magnetic
              >
                <FaPaperPlane size={13} /> LET&apos;S TALK
              </button>

              {profile.contact.github && (
                <a
                  className="btn btn-outline btn-github"
                  href={profile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  data-magnetic
                  title="View GitHub Profile"
                >
                  <FaGithub size={15} /> GITHUB
                </a>
              )}
            </motion.div>
          </motion.div>

          {/* Right Column: Cinematic Personal Photo Identity Card */}
          <motion.div
            className="hero__portrait-wrapper"
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__portrait-glow" />

            <div className="hero__portrait-card" data-magnetic>
              {/* HUD / Telemetry Header */}
              <div className="hero__portrait-hud">
                <div className="hero__portrait-hud-left">
                  <span className="hero__portrait-hud-pulse" />
                  <span>IDENTITY // VERIFIED</span>
                </div>
                <span>CSE &bull; 2027</span>
              </div>

              {/* Portrait Image with Cinematic Overlays */}
              <div className="hero__portrait-img-box">
                <img
                  src={profilePhoto}
                  alt={profile.fullName}
                  className="hero__portrait-img"
                  loading="eager"
                />
                <div className="hero__portrait-scanlines" />
                <div className="hero__portrait-overlay" />
              </div>

              {/* HUD Footer */}
              <div className="hero__portrait-footer">
                <span className="hero__portrait-name">{profile.fullName}</span>
                <span className="hero__portrait-meta">
                  PSR ENGINEERING COLLEGE &bull; SIVAKASI
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        className="hero__scroll-hint"
        href="#about"
        onClick={e => {
          e.preventDefault();
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
        aria-label="Scroll to About section"
      >
        <FaChevronDown size={12} />
        SCROLL
      </a>
    </section>
  );
}
