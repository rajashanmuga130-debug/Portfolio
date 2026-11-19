import { useEffect, useRef, useCallback } from 'react';

function InteractiveConstellation() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const count = window.innerWidth < 768 ? 32 : 65;
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 1.8 + 0.8,
        color: Math.random() > 0.4 ? '224, 0, 42' : (Math.random() > 0.5 ? '255, 59, 92' : '168, 85, 247'),
        alpha: Math.random() * 0.5 + 0.25,
      });
    }

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000, active: false };
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mouseleave', onMouseLeave, { passive: true });

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;
      const hasMouse = mouseRef.current.active;

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 135) {
            const alpha = (1 - dist / 135) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(224, 0, 42, ${alpha})`;
            ctx.lineWidth = 0.75;
            ctx.stroke();
          }
        }

        // Connection to mouse
        if (hasMouse) {
          const mdx = particles[i].x - mx;
          const mdy = particles[i].y - my;
          const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
          if (mdist < 180) {
            const malpha = (1 - mdist / 180) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mx, my);
            ctx.strokeStyle = `rgba(255, 59, 92, ${malpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Subtle attraction to mouse
            particles[i].x -= (mdx / mdist) * 0.35;
            particles[i].y -= (mdy / mdist) * 0.35;
          }
        }

        // Particle update & render
        particles[i].x += particles[i].vx;
        particles[i].y += particles[i].vy;

        if (particles[i].x < 0) particles[i].x = canvas.width;
        if (particles[i].x > canvas.width) particles[i].x = 0;
        if (particles[i].y < 0) particles[i].y = canvas.height;
        if (particles[i].y > canvas.height) particles[i].y = 0;

        ctx.beginPath();
        ctx.arc(particles[i].x, particles[i].y, particles[i].radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particles[i].color}, ${particles[i].alpha})`;
        ctx.shadowColor = `rgba(${particles[i].color}, 0.8)`;
        ctx.shadowBlur = 8;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return <canvas ref={canvasRef} className="cinematic-canvas" />;
}

export default function CinematicVideo() {
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);

    if (containerRef.current) {
      const x = (e.clientX / window.innerWidth) - 0.5;
      const y = (e.clientY / window.innerHeight) - 0.5;
      containerRef.current.style.transform =
        `scale(1.02) translate(${x * 12}px, ${y * 8}px)`;
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <>
      <div className="cinematic-video" ref={containerRef}>
        {/* Animated Aurora Glow Orbs */}
        <div className="aurora-orb aurora-orb--1" />
        <div className="aurora-orb aurora-orb--2" />
        <div className="aurora-orb aurora-orb--3" />
        {/* Interactive Constellation Mesh */}
        <InteractiveConstellation />
      </div>

      {/* Cinematic Ambient Overlays */}
      <div className="cine-vignette" />
      <div className="cine-glow" />
      <div className="cine-grain" />
      <div className="cine-scan" />
    </>
  );
}
