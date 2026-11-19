import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const socials = [
    { icon: <FaEnvelope size={20} />, label: 'Email', href: 'mailto:shanmugaraja@example.com', value: 'shanmugaraja@example.com' },
    { icon: <FaLinkedin size={20} />, label: 'LinkedIn', href: 'https://linkedin.com/in/shanmugarajam', value: 'linkedin.com/in/shanmugarajam' },
    { icon: <FaGithub size={20} />, label: 'GitHub', href: 'https://github.com/shanmugarajam', value: 'github.com/shanmugarajam' },
];

export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailto = `mailto:shanmugaraja@example.com?subject=Portfolio Contact from ${encodeURIComponent(form.name)}&body=${encodeURIComponent(form.message)}%0A%0AFrom: ${encodeURIComponent(form.email)}`;
        window.open(mailto, '_blank');
    };

    return (
        <section id="contact" className="section contact">
            <div className="container">
                <span className="section-label">Contact</span>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Get in <span className="text-gradient">Touch</span>
                </motion.h2>
                <p className="section-subtitle">Have a project idea or want to collaborate? I&apos;d love to hear from you.</p>

                <div className="contact__grid">
                    {/* Form */}
                    <motion.form
                        className="contact__form glass-panel"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" id="name" name="name" value={form.name} onChange={handleChange} required placeholder="Your name" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required placeholder="you@email.com" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea id="message" name="message" value={form.message} onChange={handleChange} required rows="5" placeholder="Tell me about your project..." />
                        </div>
                        <button type="submit" className="btn btn-primary contact__submit">
                            <FaPaperPlane size={14} /> Send Message
                        </button>
                    </motion.form>

                    {/* Social Links */}
                    <motion.div
                        className="contact__links"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        {socials.map(s => (
                            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="contact__link-card glass-panel">
                                <span className="contact__link-icon">{s.icon}</span>
                                <div>
                                    <strong>{s.label}</strong>
                                    <p>{s.value}</p>
                                </div>
                            </a>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
