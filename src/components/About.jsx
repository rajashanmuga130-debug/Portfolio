import { motion } from 'framer-motion';
import { FaCode, FaCloud, FaBrain, FaGraduationCap } from 'react-icons/fa';
import profileImg from '../assets/profile.jpg';
import './About.css';

const focuses = [
    { icon: <FaCode size={20} />, title: 'Problem Solving', desc: 'Strengthening DSA fundamentals with Java and competitive programming.' },
    { icon: <FaBrain size={20} />, title: 'Building Projects', desc: 'Creating real-world applications with React, Node.js, and Spring Boot.' },
    { icon: <FaCloud size={20} />, title: 'Cloud & DevOps', desc: 'Learning AWS services — EC2, S3, Lambda for scalable deployments.' },
    { icon: <FaGraduationCap size={20} />, title: 'Deep Understanding', desc: 'Going beyond tutorials to truly understand systems and architecture.' },
];

const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
    return (
        <section id="about" className="section about">
            <div className="container">
                <div className="about__grid">
                    {/* Image */}
                    <motion.div
                        className="about__img-col"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                    >
                        <div className="about__img-frame">
                            <img src={profileImg} alt="Shanmuga Raja M" className="about__img" />
                            <div className="about__img-border" />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        className="about__text"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                    >
                        <span className="section-label">About</span>
                        <h2 className="section-title">
                            Get to know <span className="text-gradient">me</span>
                        </h2>
                        <p className="about__bio">
                            I&apos;m a Computer Science student focused on building strong fundamentals in DSA
                            and software development. I believe in learning by building — every project I take
                            on is a chance to understand systems deeply, not just surface-level.
                        </p>
                        <p className="about__bio about__bio--dim">
                            My journey spans full-stack development with React &amp; Node.js, data analysis
                            with Python and Tableau, and cloud exploration on AWS. Currently pursuing my B.E.
                            in Computer Science &amp; Engineering (2023–2027).
                        </p>

                        <h3 className="about__focus-title">Current Focus</h3>
                        <motion.div
                            className="about__focus-grid"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            {focuses.map(item => (
                                <motion.div key={item.title} className="focus-card glass-panel" variants={itemVariants}>
                                    <span className="focus-card__icon">{item.icon}</span>
                                    <div>
                                        <strong>{item.title}</strong>
                                        <p>{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
