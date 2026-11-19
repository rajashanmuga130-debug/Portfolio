import { motion } from 'framer-motion';
import { FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const education = [
    {
        degree: 'B.E. Computer Science & Engineering',
        institution: 'SRM Institute of Science and Technology',
        period: '2023 – 2027',
        location: 'Chennai, India',
        highlights: [
            'Focus: Software Development & Problem Solving',
            'Active in coding clubs and hackathons',
            'Building full-stack projects from semester 2',
        ],
    },
];

const learnings = [
    { label: 'DSA Problems Solved', value: '300+' },
    { label: 'Projects Built', value: '8+' },
    { label: 'Technologies Used', value: '12+' },
];

export default function Experience() {
    return (
        <section id="experience" className="section experience">
            <div className="container">
                <span className="section-label">Journey</span>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Education & <span className="text-gradient">Growth</span>
                </motion.h2>

                {/* Stats */}
                <div className="exp__stats">
                    {learnings.map(s => (
                        <motion.div
                            key={s.label}
                            className="exp__stat glass-panel"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="exp__stat-num text-gradient">{s.value}</span>
                            <span className="exp__stat-label">{s.label}</span>
                        </motion.div>
                    ))}
                </div>

                {/* Education Timeline */}
                <div className="exp__timeline">
                    {education.map((item, i) => (
                        <motion.div
                            key={i}
                            className="exp__card glass-panel"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="exp__card-icon">
                                <FaGraduationCap size={24} />
                            </div>
                            <div className="exp__card-content">
                                <h3>{item.degree}</h3>
                                <p className="exp__institution">{item.institution}</p>
                                <div className="exp__meta">
                                    <span><FaCalendar size={12} /> {item.period}</span>
                                    <span><FaMapMarkerAlt size={12} /> {item.location}</span>
                                </div>
                                <ul className="exp__highlights">
                                    {item.highlights.map(h => (
                                        <li key={h}>{h}</li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
