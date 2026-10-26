import React, { useRef, useState } from 'react';
import { soundFX } from '../../utils/soundFX';

export default function InteractiveTiltCard({
  children,
  className = "",
  onClick,
  accentColor = "#ffffff"
}) {
  const cardRef = useRef(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12; // tilt degrees
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);

    setGlarePos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.15
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    soundFX.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlarePos(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) ${isHovered ? 'scale3d(1.02, 1.02, 1.02)' : 'scale3d(1, 1, 1)'}`,
        transition: isHovered ? 'transform 0.12s ease-out' : 'transform 0.5s ease-out',
        transformStyle: 'preserve-3d'
      }}
      className={`relative cursor-pointer transition-shadow duration-500 ${className}`}
    >
      {/* Dynamic Specular Glare */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl z-20 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,${glarePos.opacity}), transparent 65%)`
        }}
      />

      {/* Subtle border glow on hover */}
      <div
        className="pointer-events-none absolute -inset-[1px] rounded-2xl z-10 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0.35,
          background: `linear-gradient(135deg, ${accentColor}40, transparent 40%, ${accentColor}20)`
        }}
      />

      <div className="relative z-10 h-full w-full">
        {typeof children === 'function' ? children({ isHovered, rotateX, rotateY }) : children}
      </div>
    </div>
  );
}

