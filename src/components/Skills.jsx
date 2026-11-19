import { motion } from 'framer-motion';
import { FaJava, FaPython, FaReact, FaNodeJs, FaGitAlt, FaAws } from 'react-icons/fa';
import { IoLogoTableau } from 'react-icons/io5';
import './Skills.css';

const categories = [
    {
        title: 'Programming',
        skills: [
            { name: 'Java', icon: <FaJava size={28} /> },
            { name: 'Python', icon: <FaPython size={28} /> },
        ],
    },
    {
        title: 'Web Development',
        skills: [
            { name: 'React', icon: <FaReact size={28} /> },
            { name: 'Node.js', icon: <FaNodeJs size={28} /> },
        ],
    },
    {
        title: 'Tools & Cloud',
        skills: [
            { name: 'Git', icon: <FaGitAlt size={28} /> },
            { name: 'Tableau', icon: <IoLogoTableau size={28} /> },
            { name: 'AWS', icon: <FaAws size={28} /> },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="section skills">
            <div className="container">
                <span className="section-label">Skills</span>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Tech <span className="text-gradient">Stack</span>
                </motion.h2>
                <p className="section-subtitle">Tools and technologies I work with regularly.</p>

                <div className="skills__grid">
                    {categories.map((cat, ci) => (
                        <motion.div
                            key={cat.title}
                            className="skill-category glass-panel"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: ci * 0.1 }}
                        >
                            <h3 className="skill-category__title">{cat.title}</h3>
                            <div className="skill-category__items">
                                {cat.skills.map(s => (
                                    <div key={s.name} className="skill-item">
                                        <span className="skill-item__icon">{s.icon}</span>
                                        <span className="skill-item__name">{s.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
