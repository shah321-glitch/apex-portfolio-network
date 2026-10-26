import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }
    setIsMounted(true);

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });

      // Check if hovering interactive element
      const target = e.target;
      const interactive = target.closest('button, a, input, [role="button"], .cursor-pointer');
      setIsPointer(!!interactive);
    };

    window.addEventListener('mousemove', onMouseMove);

    // Smooth trailing loop
    let frameId;
    const animateTrailing = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2
      }));
      frameId = requestAnimationFrame(animateTrailing);
    };
    frameId = requestAnimationFrame(animateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, [pos.x, pos.y]);

  if (!isMounted) return null;

  return (
    <>
      {/* Central Sharp Dot */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9999] rounded-full bg-white mix-blend-difference transition-transform duration-75"
        style={{
          transform: `translate3d(${pos.x - 3}px, ${pos.y - 3}px, 0) scale(${isPointer ? 0 : 1})`,
          width: '6px',
          height: '6px'
        }}
      />
      {/* Fluid Trailing Aura */}
      <div
        className="pointer-events-none fixed top-0 left-0 z-[9998] rounded-full border border-white/50 mix-blend-difference transition-all duration-150 ease-out"
        style={{
          transform: `translate3d(${trailingPos.x - (isPointer ? 24 : 16)}px, ${trailingPos.y - (isPointer ? 24 : 16)}px, 0) scale(${isPointer ? 1.4 : 1})`,
          width: isPointer ? '48px' : '32px',
          height: isPointer ? '48px' : '32px',
          backgroundColor: isPointer ? 'rgba(255, 255, 255, 0.15)' : 'transparent'
        }}
      />
    </>
  );
}

