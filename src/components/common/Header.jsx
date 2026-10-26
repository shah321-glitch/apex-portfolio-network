import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, ArrowLeft } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';
import { PROFILES_EXTENDED_DATA } from '../../data/profilesExtendedData';

export default function Header({
  currentRoute,
  onNavigateToHub,
  onNavigateToPersona
}) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [timeString, setTimeString] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeString(
        now.toLocaleTimeString('en-US', {
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit'
        }) + ' UTC'
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleSoundToggle = () => {
    const active = soundFX.toggle();
    setSoundEnabled(active);
    if (active) soundFX.playClick();
  };

  const isHub = currentRoute.hub === 'main';

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-[#060608]/90 border-b border-white/[0.08] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Left: Brand & Return to Hub */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              soundFX.playTransition();
              onNavigateToHub();
            }}
            onMouseEnter={() => soundFX.playHover()}
            className="group flex items-center space-x-3 text-left focus:outline-none"
          >
            <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:border-white transition-colors">
              <span className="text-xs font-mono font-bold tracking-widest text-white group-hover:scale-110 transition-transform">
                ✦
              </span>
            </div>
            <div>
              <span className="block text-sm sm:text-base font-editorial tracking-[0.25em] uppercase text-white font-bold group-hover:text-amber-300 transition-colors">
                The Apex Network
              </span>
              <span className="block text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                Main Hub // Issue 2026
              </span>
            </div>
          </button>

          {!isHub && (
            <button
              onClick={() => {
                soundFX.playTransition();
                onNavigateToHub();
              }}
              onMouseEnter={() => soundFX.playHover()}
              className="hidden md:inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all ml-4"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Main Hub</span>
            </button>
          )}
        </div>

        {/* Center: Live Status */}
        <div className="hidden lg:flex items-center space-x-6 text-[11px] font-mono tracking-widest text-zinc-400">
          <div className="flex items-center space-x-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>EXECUTIVE NETWORK: ACTIVE</span>
          </div>
          <span className="text-zinc-600">/</span>
          <span>SYSTEM TIME: {timeString || '12:00:00 UTC'}</span>
        </div>

        {/* Right: Quick Switcher & Audio Toggle */}
        <div className="flex items-center space-x-3 sm:space-x-4">
          {/* Quick Profile Nav Pills */}
          <nav className="flex items-center space-x-1 sm:space-x-2 bg-white/[0.03] p-1 rounded-full border border-white/[0.08]">
            {Object.values(PROFILES_EXTENDED_DATA).map((p) => {
              const active = !isHub && currentRoute.person === p.id;
              return (
                <button
                  key={p.id}
                  onClick={() => {
                    soundFX.playTransition();
                    onNavigateToPersona(p.id, 'home');
                  }}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`text-[10px] sm:text-xs font-mono tracking-wider px-2.5 sm:px-3 py-1 rounded-full transition-all duration-300 ${
                    active
                      ? 'bg-white text-black font-semibold shadow-lg'
                      : 'text-zinc-400 hover:text-white hover:bg-white/10'
                  }`}
                  title={p.name}
                >
                  <span className="hidden sm:inline">{p.numericIndex}. </span>
                  <span>{p.shortName}</span>
                </button>
              );
            })}
          </nav>

          {/* Sound Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => soundFX.playHover()}
            title={soundEnabled ? "Audio Synthesis Active (Click to mute)" : "Enable Web Audio Interactions"}
            className={`w-9 h-9 rounded-full border flex items-center justify-center transition-all ${
              soundEnabled
                ? 'border-amber-400/60 bg-amber-400/10 text-amber-300'
                : 'border-white/15 bg-white/5 text-zinc-400 hover:text-white hover:border-white/30'
            }`}
          >
            {soundEnabled ? (
              <Volume2 className="w-4 h-4 animate-pulse" />
            ) : (
              <VolumeX className="w-4 h-4" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
}
