import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Projects.css';

export const projectsData = [
    {
        id: 'courier-management',
        title: 'Courier Management System',
        emoji: '📦',
        tagline: 'Full-stack tracking dashboard with role-based access',
        description: 'A comprehensive courier tracking dashboard built with React JS front-end and Spring Boot back-end. Features real-time status updates, complete CRUD operations, and role-based access control for administrators and customers.',
        problem: 'Courier companies need efficient tracking systems that provide real-time visibility to both staff and customers, with proper access controls.',
        tech: ['React', 'Spring Boot', 'MySQL', 'Java'],
        features: ['Real-time courier status tracking', 'Admin and customer portals', 'CRUD operations for shipment management', 'Role-based authentication', 'Responsive dashboard UI'],
        color: '#7c3aed',
        github: 'https://github.com',
        live: null,
        category: 'Full Stack',
    },
    {
        id: 'voice-transport',
        title: 'Voice Transport Enquiry',
        emoji: '🎙️',
        tagline: 'AI-powered voice assistant for transport schedules',
        description: 'An intelligent conversational assistant for transport schedule enquiries using Python, NLP, and speech recognition. Processes voice commands and returns structured schedule results.',
        problem: 'Commuters need quick, hands-free access to transport schedules without navigating complex websites or apps.',
        tech: ['Python', 'NLP', 'Speech Recognition', 'AI'],
        features: ['Voice command processing', 'Natural language understanding', 'Structured schedule results', 'Multi-transport support'],
        color: '#3b82f6',
        github: 'https://github.com',
        live: null,
        category: 'AI / ML',
    },
    {
        id: 'yolo-road-detection',
        title: 'YOLO Road Detection',
        emoji: '🚗',
        tagline: 'Real-time object detection for road safety analysis',
        description: 'Real-time road and object detection system using YOLOv8, OpenCV, and TensorFlow. Achieves high-accuracy object classification for autonomous driving research applications.',
        problem: 'Road safety analysis requires accurate real-time detection of vehicles, pedestrians, and road conditions.',
        tech: ['Python', 'YOLO', 'OpenCV', 'TensorFlow'],
        features: ['Real-time object detection', 'Multi-class classification', 'Video stream processing', 'Performance metrics dashboard'],
        color: '#06b6d4',
        github: 'https://github.com',
        live: null,
        category: 'AI / ML',
    },
    {
        id: 'netflix-clone',
        title: 'Netflix Clone UI',
        emoji: '🎬',
        tagline: 'Pixel-perfect streaming interface with TMDB API',
        description: 'A Netflix-inspired streaming platform interface built with React JS, featuring dynamic movie browsing, genre-based filtering, and fully responsive design powered by the TMDB API.',
        problem: 'Building a production-quality UI that handles dynamic content loading and responsive media layouts.',
        tech: ['React', 'CSS', 'REST API', 'JavaScript'],
        features: ['Dynamic movie catalog', 'Genre-based filtering', 'Responsive media grid', 'TMDB API integration'],
        color: '#ec4899',
        github: 'https://github.com',
        live: null,
        category: 'Full Stack',
    },
    {
        id: 'course-registration',
        title: 'Course Registration System',
        emoji: '🎓',
        tagline: 'DSA-powered academic enrollment manager',
        description: 'A Java-based academic course registration platform using Data Structures (Queues, HashMaps) to efficiently manage student enrollments, waitlists, and timetable conflict resolution.',
        problem: 'Academic institutions need efficient systems to handle concurrent enrollments, waitlist priorities, and scheduling conflicts.',
        tech: ['Java', 'DSA', 'MySQL', 'OOP'],
        features: ['Queue-based waitlist management', 'HashMap enrollment tracking', 'Timetable conflict detection', 'Student dashboard'],
        color: '#f59e0b',
        github: 'https://github.com',
        live: null,
        category: 'DSA',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section projects">
            <div className="container">
                <span className="section-label">Work</span>
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    Featured <span className="text-gradient">Projects</span>
                </motion.h2>
                <p className="section-subtitle">Real projects, real problems solved. Click any card to see the full breakdown.</p>

                <div className="projects__grid">
                    {projectsData.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                        >
                            <Link to={`/project/${p.id}`} className="project-card glass-panel">
                                <div className="project-card__header" style={{ borderColor: `${p.color}30` }}>
                                    <span className="project-card__emoji">{p.emoji}</span>
                                    <span className="project-card__category" style={{ color: p.color }}>{p.category}</span>
                                </div>
                                <div className="project-card__body">
                                    <h3 className="project-card__title">{p.title}</h3>
                                    <p className="project-card__tagline">{p.tagline}</p>
                                    <div className="project-card__tech">
                                        {p.tech.map(t => (
                                            <span key={t} className="tech-tag">{t}</span>
                                        ))}
                                    </div>
                                </div>
                                <div className="project-card__footer">
                                    <span className="project-card__link">
                                        View Details <FaArrowRight size={12} />
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
