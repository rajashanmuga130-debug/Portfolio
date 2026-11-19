import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const animRef = useRef(null);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouch(true);
      return;
    }

    const onMouseMove = (e) => {
      targetRef.current.x = e.clientX;
      targetRef.current.y = e.clientY;
    };

    const onMouseOver = (e) => {
      const el = e.target.closest('a, button, [data-magnetic], input, textarea, select, [role="button"]');
      if (el) setHovering(true);
    };

    const onMouseOut = (e) => {
      const el = e.target.closest('a, button, [data-magnetic], input, textarea, select, [role="button"]');
      if (el) setHovering(false);
    };

    const animate = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;

      if (cursorRef.current) {
        cursorRef.current.style.transform =
          `translate3d(${posRef.current.x}px, ${posRef.current.y}px, 0)`;
      }
      animRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', onMouseOver, { passive: true });
    document.addEventListener('mouseout', onMouseOut, { passive: true });
    animRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  if (isTouch) return null;

  return (
    <div
      ref={cursorRef}
      className={`custom-cursor ${hovering ? 'custom-cursor--hovering' : ''}`}
    >
      <div className="custom-cursor__ring" />
      <div className="custom-cursor__dot" />
    </div>
  );
}
