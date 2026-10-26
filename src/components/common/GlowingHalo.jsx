import React from 'react';

export default function GlowingHalo({
  color = '#f59e0b',       // Primary neon color (Gold: #f59e0b, Crimson: #ef4444, Cyan: #38bdf8)
  size = '360px',          // Diameter of the glowing halo circle
  showPodium = true,       // Whether to render the sleek glowing circular podium beneath
  children = null,         // Elements placed in front of the glowing halo
  className = ''
}) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      
      {/* 1. Ambient Radial Atmospheric Bloom */}
      <div
        className="absolute rounded-full pointer-events-none -z-10 blur-3xl opacity-60 transition-all duration-700 animate-pulse"
        style={{
          width: `calc(${size} * 1.35)`,
          height: `calc(${size} * 1.35)`,
          background: `radial-gradient(circle, ${color}55 0%, ${color}20 45%, transparent 70%)`
        }}
      />

      {/* 2. Crisp Circular Neon Halo Ring (Matches Reference Images 2 & 3) */}
      <div
        className="absolute rounded-full pointer-events-none -z-10 transition-all duration-700"
        style={{
          width: size,
          height: size,
          border: `3px solid ${color}`,
          boxShadow: `
            0 0 15px ${color},
            0 0 35px ${color}cc,
            0 0 75px ${color}88,
            0 0 120px ${color}44,
            inset 0 0 20px ${color}aa,
            inset 0 0 40px ${color}44
          `
        }}
      >
        {/* Subtle inner rotating sparkle highlight */}
        <div
          className="absolute inset-0 rounded-full border border-white/40 opacity-70 animate-[spin_20s_linear_infinite]"
        />
      </div>

      {/* 3. Sleek Glowing Stage / Podium Beneath (Matches Reference Images 2 & 3) */}
      {showPodium && (
        <div
          className="absolute -bottom-6 w-72 sm:w-88 h-14 rounded-[100%] pointer-events-none -z-10 border-t-2"
          style={{
            borderColor: color,
            background: `radial-gradient(ellipse at 50% 0%, ${color}40 0%, ${color}10 50%, transparent 80%)`,
            boxShadow: `
              0 -4px 20px ${color}88,
              0 10px 30px rgba(0,0,0,0.9)
            `
          }}
        />
      )}

      {/* Foreground Content (e.g. Portrait, Cards, Badges) */}
      <div className="relative z-10 w-full flex items-center justify-center">
        {children}
      </div>

    </div>
  );
}

