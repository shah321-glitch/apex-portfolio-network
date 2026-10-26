import React from 'react';
import { ArrowUp, Shield, Cpu } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';
import { PROFILES_EXTENDED_DATA } from '../../data/profilesExtendedData';

export default function Footer({ onNavigateToHub, onNavigateToPersona }) {
  const scrollToTop = () => {
    soundFX.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 border-t border-white/[0.08] bg-[#050507] text-zinc-400 font-mono text-xs pt-16 pb-12 overflow-hidden">
      
      {/* Background Editorial Watermark */}
      <div className="absolute right-0 bottom-0 pointer-events-none select-none opacity-[0.03] text-[18vw] leading-none font-editorial font-black text-white whitespace-nowrap">
        APEX NETWORK
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-14 border-b border-white/[0.06]">
          
          {/* Brand Dossier Mission */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center space-x-2 text-white">
              <span className="text-amber-400 font-bold">✦</span>
              <span className="font-editorial text-lg tracking-[0.2em] uppercase font-bold">
                The Apex Network
              </span>
            </div>
            <p className="font-sans text-sm text-zinc-400 leading-relaxed max-w-sm">
              An archival editorial network unifying sovereign leadership, cinematic dynasties, and uncensored digital networks shaping human culture through 2026.
            </p>
            <div className="flex items-center space-x-4 pt-2 text-[11px] text-zinc-400">
              <span className="flex items-center space-x-1.5">
                <Shield className="w-3.5 h-3.5 text-zinc-400" />
                <span>Next.js Architecture</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Cpu className="w-3.5 h-3.5 text-zinc-400" />
                <span>Three.js 3D Avatars</span>
              </span>
            </div>
          </div>

          {/* Sub-Portfolios Directory */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-white text-xs uppercase tracking-widest font-bold">
              Sub-Portfolios // 5-Page Networks
            </h4>
            <ul className="space-y-2.5">
              {Object.values(PROFILES_EXTENDED_DATA).map((p) => (
                <li key={p.id}>
                  <button
                    onClick={() => {
                      soundFX.playTransition();
                      onNavigateToPersona(p.id, 'home');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="hover:text-white transition-colors flex items-center space-x-2 text-left"
                  >
                    <span className="text-amber-400/80">{p.numericIndex}.</span>
                    <span>{p.name} ({p.honorific})</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Spec & Back to Top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="text-left md:text-right space-y-1">
              <div className="text-[11px] text-zinc-400">TECHNOLOGY STACK</div>
              <div className="text-white text-xs font-semibold">REACT 19 • THREE.JS • GSAP</div>
              <div className="text-[10px] text-emerald-400">HARDWARE-ACCELERATED 60FPS</div>
            </div>

            <button
              onClick={scrollToTop}
              onMouseEnter={() => soundFX.playHover()}
              className="mt-6 md:mt-0 group flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 hover:border-white bg-white/[0.02] hover:bg-white text-white hover:text-black transition-all duration-300"
            >
              <span className="text-xs uppercase tracking-wider">Ascend to Top</span>
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>

        {/* Bottom Metadata */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-zinc-400 space-y-3 sm:space-y-0">
          <div>
            © 2026 THE APEX NETWORK. SUB-PORTFOLIO ARCHIVE. ALL RIGHTS RESERVED.
          </div>
          <div className="flex items-center space-x-6">
            <button onClick={onNavigateToHub} className="hover:text-white">
              MAIN HUB
            </button>
            <span>•</span>
            <span>GSAP SCROLLTRIGGER</span>
            <span>•</span>
            <span>ISSUE 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
