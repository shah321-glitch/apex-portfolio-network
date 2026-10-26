import React, { useState, useEffect } from 'react';
import { Play, Pause, Navigation, Shield, Award, Sparkles, Terminal, Heart, Zap, Radio, Globe } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';
import Thalapathy3D from './Thalapathy3D';
import Durov3D from './Durov3D';
import Salman3D from './Salman3D';

export default function PersonaCharacter3D({
  personId = 'vijay',
  introData,
  theme,
  onNavigate
}) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [viewMode, setViewMode] = useState('hologram'); // 'hologram' | 'vector3d'

  // Personality-specific portrait for the holographic animation
  const getPersonaImage = () => {
    switch (personId) {
      case 'vijay':
        return '/images/vijay/vijay-cm-official.jpg';
      case 'pavel':
        return '/images/pavel/pavel-visionary-gaze.jpg';
      case 'salman':
        return '/images/salman/salman-iconic-jacket.jpg';
      default:
        return '';
    }
  };

  const personaImage = getPersonaImage();

  const toggleSpeech = () => {
    soundFX.playClick();
    if (isSpeaking) {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(introData.message);
        utterance.rate = 1.0;
        utterance.pitch = personId === 'pavel' ? 1.05 : 0.95;
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
      } else {
        const timer = setTimeout(() => setIsSpeaking(false), 9000);
        return () => clearTimeout(timer);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  return (
    <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* =========================================================================
          LEFT: STUNNING PERSONALITY-MATCHED 3D & HOLOGRAPHIC ANIMATION STAGE
      ========================================================================== */}
      <div className="lg:col-span-7 h-[460px] sm:h-[500px] relative rounded-3xl border border-white/10 overflow-hidden bg-gradient-to-b from-white/[0.03] to-transparent shadow-2xl flex flex-col justify-between p-6">
        
        {/* Top HUD Bar */}
        <div className="relative z-30 flex items-center justify-between font-mono text-[11px] text-zinc-300">
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
            <span
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: theme.accent }}
            />
            <span className="text-white uppercase font-bold tracking-widest">
              {personId === 'vijay' && 'STATECRAFT HOLOGRAPHIC CORE'}
              {personId === 'pavel' && 'CRYPTOGRAPHIC MTPROTO HUD'}
              {personId === 'salman' && 'PLATINUM STARBURST AURA'}
            </span>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center space-x-1 bg-black/60 backdrop-blur-md p-1 rounded-full border border-white/10">
            <button
              onClick={() => { soundFX.playClick(); setViewMode('hologram'); }}
              className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider transition-all ${
                viewMode === 'hologram'
                  ? 'bg-white text-black shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Hologram
            </button>
            <button
              onClick={() => { soundFX.playClick(); setViewMode('vector3d'); }}
              className={`px-2.5 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider transition-all ${
                viewMode === 'vector3d'
                  ? 'bg-white text-black shadow'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              3D Vector
            </button>
          </div>
        </div>

        {/* Center Stage: Personality-Matched Animations */}
        <div className="relative z-20 my-auto flex items-center justify-center">
          
          {viewMode === 'hologram' ? (
            <div className="relative w-64 sm:w-72 h-80 flex items-center justify-center">
              
              {/* --- VIJAY: Dynamic Red/Gold Energy Rings & Swirling Flame Orbits --- */}
              {personId === 'vijay' && (
                <>
                  {/* Outer Pulsing Golden Ring */}
                  <div className="absolute inset-0 rounded-full border border-amber-400/40 animate-[spin_12s_linear_infinite]" />
                  <div className="absolute -inset-4 rounded-full border border-red-500/30 animate-[spin_18s_linear_infinite_reverse]" />
                  <div className="absolute -inset-8 rounded-full border-2 border-dashed border-amber-400/20 animate-[spin_24s_linear_infinite]" />
                  {/* Glowing Energy Flare */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 via-amber-500/10 to-transparent rounded-2xl blur-xl" />
                </>
              )}

              {/* --- PAVEL: Cyberpunk Hexagonal Data Stream & Scanner Beam --- */}
              {personId === 'pavel' && (
                <>
                  {/* Cyan Laser Grid Scanner */}
                  <div className="absolute inset-0 rounded-2xl border border-sky-400/40 shadow-[0_0_30px_rgba(34,211,238,0.25)]" />
                  <div className="absolute -inset-4 rounded-full border border-cyan-400/30 animate-[spin_8s_linear_infinite]" />
                  <div className="absolute -inset-8 rounded-full border-2 border-dashed border-sky-500/20 animate-[spin_20s_linear_infinite_reverse]" />
                  {/* Animated Vertical Laser Scanline */}
                  <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-pulse top-1/2 -translate-y-1/2" />
                </>
              )}

              {/* --- SALMAN: Celestial Golden Starburst & Orbiting Turquoise Crystal --- */}
              {personId === 'salman' && (
                <>
                  <div className="absolute inset-0 rounded-full border border-amber-400/40 shadow-[0_0_35px_rgba(245,158,11,0.2)] animate-[spin_14s_linear_infinite]" />
                  <div className="absolute -inset-4 rounded-full border-2 border-dashed border-teal-400/30 animate-[spin_16s_linear_infinite_reverse]" />
                  <div className="absolute -inset-8 rounded-full border border-amber-500/20 animate-[spin_22s_linear_infinite]" />
                  <div className="absolute -top-3 right-4 w-4 h-4 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-ping" />
                </>
              )}

              {/* Central Holographic Framed Portrait */}
              <div className="relative w-52 h-64 sm:w-56 sm:h-72 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl group backdrop-blur-md">
                <img
                  src={personaImage}
                  alt={introData.title}
                  className={`w-full h-full object-cover object-top transition-all duration-700 ${
                    isSpeaking ? 'scale-105 brightness-110' : 'scale-100 group-hover:scale-105'
                  }`}
                />
                
                {/* Holographic Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.05] to-black/80 pointer-events-none" />

                {/* Persona Insignia Stamp */}
                <div className="absolute bottom-3 left-3 right-3 font-mono text-[10px] text-zinc-300 flex items-center justify-between">
                  <span className="font-bold text-white uppercase">{introData.title}</span>
                  <span style={{ color: theme.accent }}>● LIVE</span>
                </div>
              </div>

            </div>
          ) : (
            /* 3D WebGL Vector Mode */
            <div className="w-full h-72 flex items-center justify-center">
              {personId === 'vijay' && <Thalapathy3D hovered={true} className="h-72 w-full" />}
              {personId === 'pavel' && <Durov3D hovered={true} className="h-72 w-full" />}
              {personId === 'salman' && <Salman3D hovered={true} className="h-72 w-full" />}
            </div>
          )}

        </div>

        {/* Bottom Interactive Voice & Wave Controller */}
        <div className="relative z-30 flex items-center justify-between bg-black/70 backdrop-blur-md p-3 sm:p-4 rounded-2xl border border-white/10">
          <button
            onClick={toggleSpeech}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center space-x-3 px-4 py-2 rounded-xl text-black font-mono text-xs uppercase font-bold tracking-wider transition-all"
            style={{ backgroundColor: theme.accent }}
          >
            {isSpeaking ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pause Voice Introduction</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4" />
                <span>Hear Voice Guide</span>
              </>
            )}
          </button>

          {/* Dynamic Frequency Bars */}
          <div className="flex items-center space-x-1 px-3">
            {[14, 28, 42, 22, 36, 18, 30, 24, 38, 16].map((height, i) => (
              <span
                key={i}
                className="w-1 rounded-full transition-all duration-150"
                style={{
                  height: isSpeaking ? `${Math.max(6, Math.random() * height)}px` : '4px',
                  backgroundColor: isSpeaking ? theme.accent : 'rgba(255,255,255,0.25)'
                }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================================
          RIGHT: EDITORIAL SPEECH BUBBLE & QUICK SUB-PORTFOLIO GUIDE
      ========================================================================== */}
      <div className="lg:col-span-5 space-y-6">
        
        <div
          className="relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 space-y-4"
          style={{
            backgroundColor: theme.panelBg,
            borderColor: isSpeaking ? theme.accent : theme.border,
            boxShadow: isSpeaking ? `0 0 35px ${theme.glow}` : 'none'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="text-white font-bold uppercase tracking-widest flex items-center space-x-2">
              <span style={{ color: theme.accent }}>✦</span>
              <span>{introData.greeting}</span>
            </span>
            <span
              className="text-[10px] font-mono px-2 py-0.5 rounded uppercase font-bold"
              style={{
                backgroundColor: `${theme.primary}30`,
                color: theme.primaryLight
              }}
            >
              Verified Voice Dossier
            </span>
          </div>

          {/* Dialogue Message */}
          <p className="font-sans text-base sm:text-lg text-zinc-200 leading-relaxed font-light italic">
            "{introData.message}"
          </p>

          {/* Navigation Directory Pills */}
          <div className="pt-4 border-t border-white/10 space-y-2">
            <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
              Direct Sub-Portfolio Navigation:
            </div>
            <div className="grid grid-cols-2 gap-2 font-mono text-xs">
              <button
                onClick={() => onNavigate('journey')}
                className="px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-left text-zinc-300 hover:text-white transition-all flex items-center justify-between"
              >
                <span>01. Journey</span>
                <Navigation className="w-3.5 h-3.5 text-zinc-400" />
              </button>
              <button
                onClick={() => onNavigate('career')}
                className="px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-left text-zinc-300 hover:text-white transition-all flex items-center justify-between"
              >
                <span>02. Career</span>
                <Navigation className="w-3.5 h-3.5 text-zinc-400" />
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-left text-zinc-300 hover:text-white transition-all flex items-center justify-between"
              >
                <span>03. About</span>
                <Navigation className="w-3.5 h-3.5 text-zinc-400" />
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-3 py-2 rounded-xl bg-white/[0.04] hover:bg-white/10 border border-white/10 text-left text-zinc-300 hover:text-white transition-all flex items-center justify-between"
              >
                <span>04. Contact</span>
                <Navigation className="w-3.5 h-3.5 text-zinc-400" />
              </button>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
