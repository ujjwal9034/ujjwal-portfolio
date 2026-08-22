import { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import './Cursor.css';

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [cursorState, setCursorState] = useState<'default' | 'link' | 'project'>('default');
  const isTouchDevice = useMediaQuery('(pointer: coarse)');
  const reducedMotion = useReducedMotion();
  const posRef = useRef({ x: 0, y: 0 });
  const renderedRef = useRef({ x: 0, y: 0 });
  const frameRef = useRef(0);

  useEffect(() => {
    if (isTouchDevice || reducedMotion) return;

    const handleMouseMove = (e: MouseEvent) => {
      posRef.current.x = e.clientX;
      posRef.current.y = e.clientY;
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const closestLink = target.closest('a, button, [role="tab"]');
      const closestProject = target.closest('.projects__tab, .projects__panel');

      if (closestProject && !closestLink) {
        setCursorState('project');
      } else if (closestLink) {
        setCursorState('link');
      } else {
        setCursorState('default');
      }
    };

    const animate = () => {
      const lerp = 0.15;
      renderedRef.current.x += (posRef.current.x - renderedRef.current.x) * lerp;
      renderedRef.current.y += (posRef.current.y - renderedRef.current.y) * lerp;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${renderedRef.current.x}px, ${renderedRef.current.y}px)`;
      }
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${renderedRef.current.x}px, ${renderedRef.current.y}px)`;
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseover', handleMouseOver);
    frameRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(frameRef.current);
    };
  }, [isTouchDevice, reducedMotion]);

  if (isTouchDevice || reducedMotion) return null;

  return (
    <>
      <div ref={dotRef} className="cursor__dot" aria-hidden="true" />
      <div
        ref={ringRef}
        className={`cursor__ring cursor__ring--${cursorState}`}
        aria-hidden="true"
      />
    </>
  );
}
