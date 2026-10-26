import React from 'react';
import { ArrowLeft, ArrowRight, Shield, Terminal, Send, CheckCircle2, Lock, Cpu, Calendar, MapPin, Globe } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';
import { PROFILES_DATA } from '../../data/profilesData';
import Durov3D from '../3d/Durov3D';

export default function ProfilePavel({ setCurrentPage }) {
  const profile = PROFILES_DATA.pavel;

  const handleNav = (target) => {
    soundFX.playTransition();
    setCurrentPage(target);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen text-[#f2f2f5] pb-24">
      
      {/* =========================================================================
          HERO BANNER: EDITORIAL SPLIT COVER
      ========================================================================== */}
      <section className="relative border-b border-white/[0.08] bg-[#060a0f] pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="max-w-7xl mx-auto flex items-center justify-between pb-8 border-b border-white/[0.06] font-mono text-xs text-zinc-400">
          <button
            onClick={() => handleNav('home')}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center space-x-2 text-zinc-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>RETURN TO INDEX</span>
          </button>
          <div className="flex items-center space-x-3 text-sky-400 font-bold">
            <span>DOSSIER: {profile.numericIndex} // DIGITAL SOVEREIGNTY</span>
          </div>
        </div>

        {/* Hero Split Header */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-12">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-sky-400/10 border border-sky-400/30 text-sky-300 font-mono text-xs uppercase tracking-widest">
              <Lock className="w-3.5 h-3.5" />
              <span>Co-Founder & CEO of Telegram • VKontakte Co-Founder</span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white leading-[0.9]">
              Pavel <br />
              <span className="text-sky-400">Durov</span>
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-xs text-zinc-400 border-y border-white/[0.06] py-3">
              <span className="flex items-center space-x-1.5">
                <span className="text-sky-400 font-bold">NAME:</span>
                <span className="text-white">{profile.bornName}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <Calendar className="w-3.5 h-3.5 text-zinc-400" />
                <span>{profile.birthDate}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{profile.birthPlace}</span>
              </span>
            </div>

            <p className="font-sans text-lg text-zinc-300 leading-relaxed font-light max-w-2xl">
              {profile.biography.lead}
            </p>

            {/* Quick Badges */}
            <div className="flex flex-wrap gap-3 pt-2 font-mono text-xs">
              <span className="px-3 py-1.5 rounded-lg bg-sky-400/10 border border-sky-400/30 text-sky-300 font-medium">
                ✈ 950M+ Monthly Telegram Users
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-white">
                🎓 Saint Petersburg Univ. Honors (Philology, 2006)
              </span>
              <span className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-zinc-300">
                🛡 VKontakte CEO (2006–2014)
              </span>
            </div>
          </div>

          {/* 3D Interactive Feature Pillar */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#0c1622] via-[#080f17] to-[#05090e] border border-sky-500/30 shadow-2xl overflow-hidden group">
              <div className="absolute top-4 right-4 font-mono text-[10px] text-sky-400 tracking-widest uppercase">
                WebGL Cryptographic Plane
              </div>
              <Durov3D hovered={true} className="h-80 w-full" />
              <div className="mt-4 pt-4 border-t border-white/[0.08] text-center font-mono text-xs text-zinc-400">
                "The Cryptographic Citadel" • MTProto 3D Vector Mesh
              </div>
            </div>
          </div>

        </div>

      </section>

      {/* =========================================================================
          KEY STATS MARQUEE / GRID
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
          {profile.stats.map((s, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-sky-400/50 transition-all group"
            >
              <div className="text-[10px] text-zinc-400 tracking-widest uppercase">
                {s.label}
              </div>
              <div className="text-3xl font-bold text-white mt-2 group-hover:text-sky-400 transition-colors">
                {s.value}
              </div>
              <div className="text-xs text-zinc-400 mt-1">
                {s.detail}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          DEEP BIOGRAPHICAL & CAREER NARRATIVE
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Extensive Biography */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">
                BIOGRAPHICAL DOSSIER
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-white mt-2">
                Linguistics, Resistance, and Global Messaging
              </h2>
            </div>

            <div className="space-y-6 font-sans text-base text-zinc-300 leading-relaxed font-light">
              {profile.biography.body.map((paragraph, idx) => (
                <p key={idx} className="border-l-2 border-white/10 pl-6">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote Block */}
            <div className="p-8 rounded-2xl bg-gradient-to-r from-sky-500/10 via-sky-500/5 to-transparent border border-sky-500/20 font-serif italic text-lg sm:text-xl text-sky-100">
              "{profile.quote}"
              <div className="font-mono not-italic text-xs text-sky-400 uppercase tracking-widest mt-4">
                — {profile.quoteAttribution}
              </div>
            </div>

            {/* Digital Sovereignty Principles */}
            <div className="space-y-4 pt-6">
              <h3 className="font-editorial text-xl font-bold uppercase text-white">
                Core Architectural Tenets of Telegram & Sovereign Tech
              </h3>
              <ul className="space-y-3 font-mono text-xs text-zinc-300">
                {profile.governanceVision.map((point, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Column: Historical Trajectory */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
              <h3 className="font-editorial text-xl font-bold uppercase text-white mb-6 flex items-center space-x-2">
                <Terminal className="w-5 h-5 text-sky-400" />
                <span>Protocol Trajectory</span>
              </h3>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3 before:w-0.5 before:bg-white/10">
                {profile.timeline.map((item, idx) => (
                  <div key={idx} className="relative flex items-start space-x-6">
                    <div className="w-6 h-6 rounded-full bg-sky-400/20 border border-sky-400 flex items-center justify-center shrink-0 z-10">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                    </div>
                    <div className="space-y-1">
                      <span className="font-mono text-xs font-bold text-sky-400 uppercase tracking-wider">
                        {item.year}
                      </span>
                      <h4 className="font-editorial text-base font-bold text-white">
                        {item.title}
                      </h4>
                      <p className="font-sans text-xs text-zinc-400 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================================
          KEY PILLARS SECTION
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-white/[0.08]">
        <div className="mb-12">
          <span className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
            ENGINEERING & PHILOSOPHY
          </span>
          <h2 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-white mt-1">
            The Foundations of Digital Independence
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {profile.keyPillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-sky-400/40 transition-colors space-y-4"
            >
              <div className="font-mono text-[11px] text-sky-400 uppercase tracking-widest">
                {pillar.category}
              </div>
              <h3 className="font-editorial text-2xl font-bold text-white">
                {pillar.title}
              </h3>
              <p className="font-sans text-sm text-zinc-400 leading-relaxed font-light">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================================
          PAGE TRANSITION SWITCHER
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 border-t border-white/[0.08]">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08]">
          <button
            onClick={() => handleNav('vijay')}
            onMouseEnter={() => soundFX.playHover()}
            className="flex items-center space-x-3 font-mono text-xs text-zinc-400 hover:text-white uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Prev Profile: CM Vijay (01)</span>
          </button>

          <button
            onClick={() => handleNav('salman')}
            onMouseEnter={() => soundFX.playHover()}
            className="group flex items-center space-x-3 font-mono text-xs text-teal-400 hover:text-white uppercase tracking-widest font-bold"
          >
            <span>Next Profile: Salman Khan (03)</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </section>

    </div>
  );
}

