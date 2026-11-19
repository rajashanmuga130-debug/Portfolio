import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaChevronDown } from 'react-icons/fa';
import './Hero.css';

function GeometricCanvas() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animId;
        let shapes = [];

        const resize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resize();
        window.addEventListener('resize', resize);

        // Create shapes
        for (let i = 0; i < 30; i++) {
            shapes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                size: Math.random() * 30 + 10,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.008,
                type: Math.floor(Math.random() * 3), // 0=triangle, 1=hexagon, 2=circle
                alpha: Math.random() * 0.15 + 0.03,
                hue: Math.random() > 0.33 ? (Math.random() > 0.5 ? '139, 92, 246' : '59, 130, 246') : '6, 182, 212',
            });
        }

        // Draw connecting lines between nearby shapes
        const drawLines = () => {
            for (let i = 0; i < shapes.length; i++) {
                for (let j = i + 1; j < shapes.length; j++) {
                    const dx = shapes[i].x - shapes[j].x;
                    const dy = shapes[i].y - shapes[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 200) {
                        ctx.beginPath();
                        ctx.moveTo(shapes[i].x, shapes[i].y);
                        ctx.lineTo(shapes[j].x, shapes[j].y);
                        ctx.strokeStyle = `rgba(139, 92, 246, ${0.1 * (1 - dist / 200)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        };

        const drawShape = (s) => {
            ctx.save();
            ctx.translate(s.x, s.y);
            ctx.rotate(s.rotation);
            ctx.beginPath();

            if (s.type === 0) {
                // Triangle
                const r = s.size;
                ctx.moveTo(0, -r);
                ctx.lineTo(r * 0.866, r * 0.5);
                ctx.lineTo(-r * 0.866, r * 0.5);
                ctx.closePath();
            } else if (s.type === 1) {
                // Hexagon
                for (let k = 0; k < 6; k++) {
                    const angle = (Math.PI / 3) * k;
                    const px = s.size * Math.cos(angle);
                    const py = s.size * Math.sin(angle);
                    k === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py);
                }
                ctx.closePath();
            } else {
                // Circle
                ctx.arc(0, 0, s.size * 0.6, 0, Math.PI * 2);
            }

            ctx.strokeStyle = `rgba(${s.hue}, ${s.alpha + 0.1})`;
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.fillStyle = `rgba(${s.hue}, ${s.alpha * 0.3})`;
            ctx.fill();
            ctx.restore();
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            drawLines();
            shapes.forEach(s => {
                s.x += s.speedX;
                s.y += s.speedY;
                s.rotation += s.rotSpeed;
                if (s.x < -50) s.x = canvas.width + 50;
                if (s.x > canvas.width + 50) s.x = -50;
                if (s.y < -50) s.y = canvas.height + 50;
                if (s.y > canvas.height + 50) s.y = -50;
                drawShape(s);
            });
            animId = requestAnimationFrame(animate);
        };
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', resize);
        };
    }, []);

    return <canvas ref={canvasRef} className="hero__canvas" />;
}

export default function Hero() {
    const scrollToProjects = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="hero">
            <GeometricCanvas />
            <div className="hero__glow hero__glow--1" />
            <div className="hero__glow hero__glow--2" />

            <div className="container hero__content">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                    <p className="hero__label">
                        <span className="hero__label-dot" />
                        Available for opportunities
                    </p>

                    <h1 className="hero__title">
                        Hi, I&apos;m <span className="text-gradient">Shanmuga Raja M</span>
                    </h1>

                    <p className="hero__subtitle">
                        Aspiring Software Engineer &bull; Creative Developer
                    </p>

                    <p className="hero__tagline">
                        Building real solutions with code and creativity. Focused on full-stack development, data analytics, and problem solving.
                    </p>

                    <div className="hero__actions">
                        <button className="btn btn-primary" onClick={scrollToProjects}>
                            Explore Work <FaArrowRight size={14} />
                        </button>
                        <a className="btn btn-outline" href="https://github.com" target="_blank" rel="noreferrer">
                            View GitHub
                        </a>
                    </div>
                </motion.div>
            </div>

            <a
                className="hero__scroll"
                href="#about"
                onClick={e => { e.preventDefault(); document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }); }}
            >
                <FaChevronDown size={14} />
            </a>
        </section>
    );
}
