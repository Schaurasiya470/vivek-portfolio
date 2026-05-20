import { useEffect, useRef } from 'react';
export default function CursorGlow() {
  const ref = useRef();
  useEffect(() => {
    const fn = e => { if (ref.current) { ref.current.style.left = e.clientX + 'px'; ref.current.style.top = e.clientY + 'px'; } };
    window.addEventListener('mousemove', fn, { passive: true });
    return () => window.removeEventListener('mousemove', fn);
  }, []);
  return <div ref={ref} className="cursor-glow" style={{ left:'-500px', top:'-500px' }} />;
}