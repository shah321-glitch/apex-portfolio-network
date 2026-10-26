import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Shield, Award, Sparkles, Terminal, Heart, Zap, Radio, Globe, ChevronRight } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';
import { voiceEngine } from '../../utils/voiceGuide';
import GlowingHalo from '../common/GlowingHalo';

export default function PersonaCharacter3D({
  personId = 'vijay',
  introData,
  theme,
  onNavigate
}) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [speechProgress, setSpeechProgress] = useState(0);

  // Personality-specific high-resolution portrait
  const getPersonaImage = () => {
    switch (personId) {
      case 'vijay':
        return '/images/vijay/vijay-cm-official.jpg';
      case 'pavel':
        return '/images/pavel/pavel-visionary-gaze.jpg';
      case 'salman':
        return '/images/salman/salman-navy-formal.jpg';
      default:
        return '';
    }
  };

  const personaImage = getPersonaImage();

  const toggleSpeech = () => {
    soundFX.playClick();
    if (isSpeaking) {
      voiceEngine.stop();
      setIsSpeaking(false);
    } else {
      setIsSpeaking(true);
      voiceEngine.speak(
        personId,
        introData.message,
        () => setIsSpeaking(false),
        () => setIsSpeaking(false),
        () => setIsSpeaking(true)
      );
    }
  };

  const replaySpeech = () => {
    soundFX.playClick();
    voiceEngine.stop();
    setIsSpeaking(true);
    voiceEngine.speak(
      personId,
      introData.message,
      () => setIsSpeaking(false),
      () => setIsSpeaking(false),
      () => setIsSpeaking(true)
    );
  };

  useEffect(() => {
    return () => {
      voiceEngine.stop();
    };
  }, []);

  return (
    <div className="relative w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      
      {/* =========================================================================
          LEFT: EXECUTIVE EDITORIAL PORTRAIT & HIGH-FIDELITY VOICE SOUNDSTAGE
      ========================================================================== */}
      <div
        className="lg:col-span-5 relative rounded-3xl border overflow-hidden p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-500"
        style={{
          backgroundColor: theme.panelBg,
          borderColor: theme.border,
          boxShadow: `0 25px 50px -12px ${theme.border}`
        }}
      >
        {/* Top Header HUD Bar */}
        <div className="relative z-20 flex items-center justify-between font-mono text-[11px] pb-4 border-b border-white/[0.08]">
          <div className="flex items-center space-x-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
            <span
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: theme.accent,
                boxShadow: `0 0 10px ${theme.accent}`
              }}
            />
            <span className="text-white uppercase font-bold tracking-widest text-[10px]">
              {personId === 'vijay' && 'STATECRAFT & CINEMA'}
              {personId === 'pavel' && 'DIGITAL SOVEREIGNTY'}
              {personId === 'salman' && 'ALTRUISM & MEGATITAN'}
            </span>
          </div>

          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest">
            OFFICIAL DOSSIER
          </span>
        </div>

        {/* Crisp Central Portrait with Glowing Neon Halo (Matches Reference Images 2 & 3) */}
        <div className="relative z-10 my-6 py-2 flex items-center justify-center">
          <GlowingHalo
            color={theme.accent}
            size="320px"
            showPodium={true}
          >
            <div
              className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/5] rounded-2xl overflow-hidden border-2 shadow-2xl transition-all duration-500 group"
              style={{
                borderColor: isSpeaking ? theme.accent : 'rgba(255,255,255,0.2)',
                boxShadow: isSpeaking
                  ? `0 0 45px ${theme.accent}66, 0 20px 40px rgba(0,0,0,0.8)`
                  : `0 15px 35px rgba(0,0,0,0.7)`
              }}
            >
              <img
                src={personaImage}
                alt={introData.title}
                className={`w-full h-full object-cover object-top transition-transform duration-700 ${
                  isSpeaking ? 'scale-105 brightness-105' : 'group-hover:scale-105'
                }`}
              />

              {/* Gradient Scrim for Editorial Typography */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent pointer-events-none" />

              {/* Badge Overlay */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
                <span className="font-bold text-white tracking-wider uppercase text-sm">
                  {introData.title}
                </span>
                <span
                  className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest"
                  style={{
                    backgroundColor: isSpeaking ? theme.accent : 'rgba(0,0,0,0.6)',
                    color: isSpeaking ? '#000000' : theme.accent,
                    border: `1px solid ${theme.accent}55`
                  }}
                >
                  {isSpeaking ? '● SPEAKING' : 'AUDIO READY'}
                </span>
              </div>
            </div>
          </GlowingHalo>
        </div>

        {/* Bottom Voice Controller */}
        <div className="relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 bg-black/80 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl border border-white/10">
          <div className="flex items-center space-x-2 w-full sm:w-auto">
            <button
              onClick={toggleSpeech}
              onMouseEnter={() => soundFX.playHover()}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-2.5 px-5 py-2.5 rounded-xl font-mono text-xs uppercase font-bold tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
              style={{
                backgroundColor: theme.accent,
                color: '#000000'
              }}
            >
              {isSpeaking ? (
                <>
                  <Pause className="w-4 h-4" />
                  <span>Pause Voice</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Hear Introduction</span>
                </>
              )}
            </button>

            {isSpeaking && (
              <button
                onClick={replaySpeech}
                onMouseEnter={() => soundFX.playHover()}
                className="p-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
                title="Restart Voice"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Dynamic Frequency Bars */}
          <div className="flex items-center space-x-1 px-2">
            {[14, 28, 42, 22, 36, 18, 30, 24, 38, 16].map((height, i) => (
              <span
                key={i}
                className="w-1 rounded-full transition-all duration-150"
                style={{
                  height: isSpeaking ? `${Math.max(6, Math.random() * height)}px` : '4px',
                  backgroundColor: isSpeaking ? theme.accent : 'rgba(255,255,255,0.2)'
                }}
              />
            ))}
          </div>
        </div>

      </div>

      {/* =========================================================================
          RIGHT: EDITORIAL SPEECH TELEPROMPTER & INTERACTIVE SUB-PORTFOLIO NAV
      ========================================================================== */}
      <div className="lg:col-span-7 space-y-6">
        
        {/* Synchronized Teleprompter / Speech Bubble */}
        <div
          className="relative p-6 sm:p-8 rounded-3xl border transition-all duration-300 space-y-4"
          style={{
            backgroundColor: theme.panelBg,
            borderColor: isSpeaking ? theme.accent : theme.border,
            boxShadow: isSpeaking ? `0 0 30px ${theme.accent}15` : 'none'
          }}
        >
          {/* Header */}
          <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-white/[0.08]">
            <span className="text-zinc-400 uppercase tracking-widest flex items-center space-x-2">
              <Volume2 className="w-3.5 h-3.5" style={{ color: theme.accent }} />
              <span>Official Introduction Teleprompter</span>
            </span>
            <span
              className="text-[10px] uppercase font-bold tracking-widest px-2 py-0.5 rounded"
              style={{
                backgroundColor: `${theme.accent}15`,
                color: theme.accent
              }}
            >
              {isSpeaking ? 'Live Narration' : 'Click "Hear Introduction" Above'}
            </span>
          </div>

          {/* Transcript / Spoken Message */}
          <p className="font-editorial text-lg sm:text-2xl text-white leading-relaxed font-light">
            "{introData.message}"
          </p>

          <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-zinc-400">
            <span>Voice Guide: Clear synthesized acoustic profile</span>
            <span style={{ color: theme.accent }}>● 100% Subtitled</span>
          </div>
        </div>

        {/* Quick Subpage Routing Portal */}
        <div
          className="p-6 sm:p-8 rounded-3xl border space-y-4"
          style={{
            backgroundColor: theme.panelBg,
            borderColor: theme.border
          }}
        >
          <div className="flex items-center justify-between font-mono text-xs">
            <span className="uppercase tracking-widest text-zinc-400">
              Explore {introData.title}'s 5-Section Dossier:
            </span>
            <span className="text-zinc-400">Jump directly to:</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
            {[
              { id: 'journey', label: '01. Journey', sub: '3D GSAP Timeline' },
              { id: 'career', label: '02. Career', sub: 'Interactive Metrics' },
              { id: 'about', label: '03. About', sub: 'Split Editorial' },
              { id: 'contact', label: '04. Contact', sub: 'PR & Glass Form' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  soundFX.playTransition();
                  onNavigate(item.id);
                }}
                onMouseEnter={() => soundFX.playHover()}
                className="p-3.5 rounded-2xl bg-white/[0.02] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all text-left group cursor-pointer"
              >
                <span className="block font-bold text-white group-hover:text-amber-300 transition-colors">
                  {item.label}
                </span>
                <span className="block text-[10px] text-zinc-400 mt-0.5">
                  {item.sub}
                </span>
              </button>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
