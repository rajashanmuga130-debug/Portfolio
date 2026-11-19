import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaUniversity, FaPhoneAlt } from 'react-icons/fa';
import { profile } from '../../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState({ state: 'idle', message: '' });
  const [copiedKey, setCopiedKey] = useState(null);

  const githubUrl = profile.contact.github;
  const emailAddress = profile.contact.email;
  const linkedinUrl = profile.contact.linkedin;
  const phoneNumber = profile.contact.phone;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' });
      return;
    }

    setStatus({ state: 'submitting', message: 'Transmitting message...' });

    // Open user's mail client or simulate instant dispatch
    setTimeout(() => {
      setStatus({
        state: 'success',
        message: 'Thank you for reaching out! Your message has been prepared for transmission.',
      });
      if (emailAddress) {
        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;
      }
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">09 / INITIATE CONTACT</div>
          <h2 className="section-title">
            GET IN <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="section-subtitle">
            Open to internships, entry-level software engineering roles, academic projects, and technical discussions.
          </p>
        </motion.div>

        <div className="contact__grid">
          {/* Direct Transmission Form */}
          <motion.div
            className="glass-panel contact__form"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.25rem', marginBottom: '1.5rem' }}>
              Send a Direct Message
            </h3>

            {status.state === 'success' && (
              <div className="form-success">{status.message}</div>
            )}
            {status.state === 'error' && (
              <div className="form-error">{status.message}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name *</label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g. Recruiter / Engineering Manager"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g. recruiter@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Software Engineering Role / Internship Opportunity"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea
                  id="message"
                  placeholder="Write your message or inquiry here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={status.state === 'submitting'}
                data-magnetic
              >
                <FaPaperPlane size={13} />
                {status.state === 'submitting' ? 'TRANSMITTING...' : 'DISPATCH MESSAGE'}
              </button>
            </form>
          </motion.div>

          {/* Verified Channels & Location */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Email Card */}
            {emailAddress && (
              <div className="glass-panel contact__link-card">
                <div className="contact__link-icon">
                  <FaEnvelope size={18} />
                </div>
                <div style={{ flex: 1, overflow: 'hidden' }}>
                  <span className="contact__link-label">Email Address</span>
                  <a
                    href={`mailto:${emailAddress}`}
                    className="contact__link-value"
                    style={{ display: 'block', textOverflow: 'ellipsis', overflow: 'hidden' }}
                  >
                    {emailAddress}
                  </a>
                </div>
                <button
                  className="contact__copy-btn"
                  onClick={() => handleCopy(emailAddress, 'email')}
                  data-magnetic
                >
                  {copiedKey === 'email' ? 'COPIED' : 'COPY'}
                </button>
              </div>
            )}

            {/* Phone Card */}
            {phoneNumber && (
              <div className="glass-panel contact__link-card">
                <div className="contact__link-icon">
                  <FaPhoneAlt size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <span className="contact__link-label">Phone / WhatsApp</span>
                  <a href={`tel:${phoneNumber.replace(/\s+/g, '')}`} className="contact__link-value">
                    {phoneNumber}
                  </a>
                </div>
                <button
                  className="contact__copy-btn"
                  onClick={() => handleCopy(phoneNumber, 'phone')}
                  data-magnetic
                >
                  {copiedKey === 'phone' ? 'COPIED' : 'COPY'}
                </button>
              </div>
            )}

            {/* LinkedIn Card */}
            {linkedinUrl && (
              <div className="glass-panel contact__link-card">
                <div className="contact__link-icon">
                  <FaLinkedin size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <span className="contact__link-label">LinkedIn</span>
                  <span className="contact__link-value">linkedin.com/in/shanmuga-raja-m-33b920417</span>
                </div>
                <a
                  href={linkedinUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__copy-btn"
                  data-magnetic
                >
                  CONNECT
                </a>
              </div>
            )}

            {/* GitHub Card */}
            {githubUrl && (
              <div className="glass-panel contact__link-card">
                <div className="contact__link-icon">
                  <FaGithub size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <span className="contact__link-label">GitHub Profile</span>
                  <span className="contact__link-value">{githubUrl.replace(/^https?:\/\//, '')}</span>
                </div>
                <a
                  href={githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="contact__copy-btn"
                  data-magnetic
                >
                  VISIT
                </a>
              </div>
            )}

            {/* Institution Card */}
            <div className="glass-panel contact__link-card">
              <div className="contact__link-icon">
                <FaUniversity size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <span className="contact__link-label">Engineering Institution</span>
                <span className="contact__link-value">{profile.education.institution}, Sivakasi</span>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel contact__link-card">
              <div className="contact__link-icon">
                <FaMapMarkerAlt size={18} />
              </div>
              <div style={{ flex: 1 }}>
                <span className="contact__link-label">Location</span>
                <span className="contact__link-value">{profile.location}</span>
              </div>
            </div>

            {/* Current Student Status Notice */}
            <div className="contact__notice">
              <p>
                <strong>Current Academic Status:</strong> Currently studying B.E. Computer Science &amp; Engineering
                (Batch 2023–2027) at PSR Engineering College with a CGPA of 8.0/10. Completed a Cloud Computing Internship
                at SK TECHFORGE LLP. Actively available for software development internships and entry-level engineering roles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
