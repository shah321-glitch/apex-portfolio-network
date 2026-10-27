import React from 'react';
import { ArrowUpRight, ChevronRight, Landmark, Lock, Heart, Award, Sparkles, Shield, Send, CheckCircle2, Star } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';
import { PROFILES_EXTENDED_DATA } from '../../data/profilesExtendedData';
import InteractiveTiltCard from '../3d/InteractiveTiltCard';
import GlowingHalo from '../common/GlowingHalo';

export default function HomePage({ onSelectPersona }) {
  const handleLaunch = (personId) => {
    soundFX.playTransition();
    onSelectPersona(personId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-[#f1f1f5] overflow-x-hidden">
    <div className="relative min-h-screen text-[#0f132a] overflow-x-hidden">
      
      {/* =========================================================================
          HERO SECTION: THE MAIN HUB LANDING COVER
      ========================================================================== */}
      <section className="relative min-h-[85vh] flex flex-col justify-between pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
      <section className="relative min-h-[85vh] flex flex-col justify-between pt-8 sm:pt-12 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-[#C1C6EB]">
        
        {/* Top Editorial Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-white/[0.06] font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 sm:pb-12 border-b border-[#C1C6EB] font-mono text-[11px] tracking-[0.2em] uppercase text-[#515987]">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <span className="text-white font-bold">PORTFOLIO NETWORK // 2026 EDITION</span>
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
            <span className="text-[#0f132a] font-bold">PORTFOLIO NETWORK // 2026 EDITION</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <span>UNIFIED ARCHIVE: 3 SUB-PORTFOLIOS</span>
            <span>5 INTERACTIVE PAGES EACH</span>
          </div>
          <div className="text-left sm:text-right">
            <span>INDEX: 01 — 03</span>
          </div>
        </div>

        {/* Center: Massive Bold Editorial Headline */}
        <div className="my-8 sm:my-12 lg:my-16">
          <div className="inline-block px-3 py-1 mb-4 sm:mb-6 rounded-full border border-white/10 bg-white/[0.03] text-[10px] sm:text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
          <div className="inline-block px-3 py-1 mb-4 sm:mb-6 rounded-full border border-[#A6ADE2] bg-white/70 text-[10px] sm:text-[11px] font-mono tracking-widest text-[#3d4470] uppercase shadow-sm">
            Executive Editorial Network
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-8xl lg:text-[7.2rem] font-black uppercase tracking-tight leading-[0.88] text-white">
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-8xl lg:text-[7.2rem] font-black uppercase tracking-tight leading-[0.88] text-[#0f132a]">
            Monuments <br />
            <span className="text-zinc-500 font-light italic">of</span> Power & <br />
            <span className="text-stroke-thick hover:text-white transition-colors duration-500">
            <span className="text-[#676e9d] font-light italic">of</span> Power & <br />
            <span className="text-stroke-thick hover:text-[#0f132a] transition-colors duration-500">
              Sovereignty.
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/[0.06]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#C1C6EB]">
            <div className="md:col-span-7">
              <p className="font-sans text-sm sm:text-base lg:text-lg text-zinc-300 leading-relaxed max-w-2xl font-light">
              <p className="font-sans text-sm sm:text-base lg:text-lg text-[#2d3356] leading-relaxed max-w-2xl font-light">
                Welcome to the unified Main Hub. Explore three bespoke 5-page sub-portfolios featuring crystal-clear 
                editorial dossiers, synchronized voice guides, vertical GSAP scroll timelines, deep career metrics, and glassmorphic PR inquiries for: 
                <span className="text-red-400 font-medium"> CM Vijay Thalapathy</span>, 
                <span className="text-sky-400 font-medium"> Pavel Durov</span>, and 
                <span className="text-amber-400 font-medium"> Salman Khan</span>.
                <span className="text-red-600 font-semibold"> CM Vijay Thalapathy</span>, 
                <span className="text-sky-700 font-semibold"> Pavel Durov</span>, and 
                <span className="text-amber-700 font-semibold"> Salman Khan</span>.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end items-start md:items-end space-y-2 font-mono text-xs text-zinc-400">
            <div className="md:col-span-5 flex flex-col justify-end items-start md:items-end space-y-2 font-mono text-xs text-[#515987]">
              <div className="flex items-center space-x-2">
                <span className="text-amber-400">✦</span>
                <span className="text-zinc-300">EXECUTIVE DOSSIERS ACTIVE</span>
                <span className="text-indigo-600">✦</span>
                <span className="text-[#0f132a] font-bold">EXECUTIVE DOSSIERS ACTIVE</span>
              </div>
              <div className="text-[11px] text-zinc-400">SELECT ANY PROFILE CARD TO ENTER THEIR 5-PAGE WORLD</div>
              <div className="text-[11px] text-[#515987]">SELECT ANY PROFILE CARD TO ENTER THEIR 5-PAGE WORLD</div>
            </div>
          </div>
        </div>

        {/* Bottom Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 font-mono text-xs border-t border-white/[0.06]">
          <div className="border-l-2 border-red-500 pl-3 sm:pl-4">
            <div className="text-[10px] text-zinc-400 uppercase">SUB-PORTFOLIO 01</div>
            <div className="text-white font-bold text-xs sm:text-sm mt-0.5">VIJAY THALAPATHY</div>
            <div className="text-[10px] text-red-400">TN Chief Minister • $30M Film</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 font-mono text-xs border-t border-[#C1C6EB]">
          <div className="border-l-2 border-red-500 pl-3 sm:pl-4 bg-white/50 p-2.5 rounded-r-xl border border-[#C1C6EB]/60 shadow-sm">
            <div className="text-[10px] text-[#515987] uppercase font-bold">SUB-PORTFOLIO 01</div>
            <div className="text-[#0f132a] font-bold text-xs sm:text-sm mt-0.5">VIJAY THALAPATHY</div>
            <div className="text-[10px] text-red-600 font-medium">TN Chief Minister • $30M Film</div>
          </div>
          <div className="border-l-2 border-sky-500 pl-3 sm:pl-4">
            <div className="text-[10px] text-zinc-400 uppercase">SUB-PORTFOLIO 02</div>
            <div className="text-white font-bold text-xs sm:text-sm mt-0.5">PAVEL DUROV</div>
            <div className="text-[10px] text-sky-400">Telegram CEO • 950M+ Citadel</div>
          <div className="border-l-2 border-sky-500 pl-3 sm:pl-4 bg-white/50 p-2.5 rounded-r-xl border border-[#C1C6EB]/60 shadow-sm">
            <div className="text-[10px] text-[#515987] uppercase font-bold">SUB-PORTFOLIO 02</div>
            <div className="text-[#0f132a] font-bold text-xs sm:text-sm mt-0.5">PAVEL DUROV</div>
            <div className="text-[10px] text-sky-700 font-medium">Telegram CEO • 950M+ Citadel</div>
          </div>
          <div className="border-l-2 border-amber-500 pl-3 sm:pl-4">
            <div className="text-[10px] text-zinc-400 uppercase">SUB-PORTFOLIO 03</div>
            <div className="text-white font-bold text-xs sm:text-sm mt-0.5">SALMAN KHAN</div>
            <div className="text-[10px] text-amber-400">₹3,000Cr+ Titan • Being Human</div>
          <div className="border-l-2 border-amber-500 pl-3 sm:pl-4 bg-white/50 p-2.5 rounded-r-xl border border-[#C1C6EB]/60 shadow-sm">
            <div className="text-[10px] text-[#515987] uppercase font-bold">SUB-PORTFOLIO 03</div>
            <div className="text-[#0f132a] font-bold text-xs sm:text-sm mt-0.5">SALMAN KHAN</div>
            <div className="text-[10px] text-amber-700 font-medium">₹3,000Cr+ Titan • Being Human</div>
          </div>
          <div className="border-l-2 border-emerald-500 pl-3 sm:pl-4">
            <div className="text-[10px] text-zinc-400 uppercase">SUB-PORTFOLIO SUITE</div>
            <div className="text-white font-bold text-xs sm:text-sm mt-0.5">5 PAGES PER LEADER</div>
            <div className="text-[10px] text-emerald-400">Home • Journey • Career • About • Contact</div>
          <div className="border-l-2 border-indigo-500 pl-3 sm:pl-4 bg-white/50 p-2.5 rounded-r-xl border border-[#C1C6EB]/60 shadow-sm">
            <div className="text-[10px] text-[#515987] uppercase font-bold">SUB-PORTFOLIO SUITE</div>
            <div className="text-[#0f132a] font-bold text-xs sm:text-sm mt-0.5">5 PAGES PER LEADER</div>
            <div className="text-[10px] text-indigo-700 font-medium">Home • Journey • Career • About • Contact</div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          TRI-PROFILE EDITORIAL CARDS (CLICK TO ENTER SUB-PORTFOLIOS)
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 space-y-20 sm:space-y-28">

        {/* -----------------------------------------------------------------------
            PROFILE 01: CM VIJAY THALAPATHY (DYNAMIC RED / MONOCHROME)
        ------------------------------------------------------------------------ */}
        <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-white/10 pt-12 sm:pt-16">
        <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#C1C6EB] pt-12 sm:pt-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-red-400 uppercase">
              <span className="px-2.5 py-1 bg-red-500/10 border border-red-500/30 rounded-full font-bold">
            <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-red-600 uppercase">
              <span className="px-2.5 py-1 bg-red-100/90 border border-red-300 rounded-full font-bold">
                SUB-PORTFOLIO 01
              </span>
              <span>•</span>
              <span>DYNAMIC RED & STATECRAFT</span>
              <span className="font-semibold">DYNAMIC RED & STATECRAFT</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.92]">
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#0f132a] leading-[0.92]">
              CM Vijay <br />
              <span className="text-red-500">Thalapathy</span>
              <span className="text-red-600">Thalapathy</span>
            </h2>

            <p className="font-mono text-xs sm:text-sm text-zinc-400 tracking-wider uppercase">
            <p className="font-mono text-xs sm:text-sm text-[#474e79] tracking-wider uppercase font-semibold">
              Chief Minister of Tamil Nadu • TVK Founder • India's Highest-Paid Actor
            </p>

            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Commanded an unprecedented <strong className="text-white font-medium">$30M+ remuneration</strong> for his 69th film before founding 
              <strong className="text-red-400 font-medium"> Tamilaga Vettri Kazhagam (TVK)</strong> in Feb 2024 and taking oath as 
              <strong className="text-white font-medium"> Chief Minister of Tamil Nadu on May 10, 2026</strong> following a historic electoral mandate.
            <p className="font-sans text-sm sm:text-base text-[#262c4c] leading-relaxed font-light">
              Commanded an unprecedented <strong className="text-[#0f132a] font-medium">$30M+ remuneration</strong> for his 69th film before founding 
              <strong className="text-red-700 font-medium"> Tamilaga Vettri Kazhagam (TVK)</strong> in Feb 2024 and taking oath as 
              <strong className="text-[#0f132a] font-medium"> Chief Minister of Tamil Nadu on May 10, 2026</strong> following a historic electoral mandate.
            </p>

            {/* Core Achievement Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/20">
                <span className="text-[10px] text-zinc-400 uppercase block">State Mandate</span>
                <span className="text-white font-bold block mt-0.5">CM of Tamil Nadu</span>
                <span className="text-[10px] text-red-400 block">Sworn in May 10, 2026</span>
              <div className="p-3 rounded-xl bg-white/80 border border-[#C1C6EB] shadow-sm">
                <span className="text-[10px] text-[#515987] uppercase block font-semibold">State Mandate</span>
                <span className="text-[#0f132a] font-bold block mt-0.5">CM of Tamil Nadu</span>
                <span className="text-[10px] text-red-600 block font-medium">Sworn in May 10, 2026</span>
              </div>
              <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/20">
                <span className="text-[10px] text-zinc-400 uppercase block">Cinema Contract</span>
                <span className="text-white font-bold block mt-0.5">$30M+ Salary</span>
                <span className="text-[10px] text-zinc-400 block">Thalapathy 69 (#69)</span>
              <div className="p-3 rounded-xl bg-white/80 border border-[#C1C6EB] shadow-sm">
                <span className="text-[10px] text-[#515987] uppercase block font-semibold">Cinema Contract</span>
                <span className="text-[#0f132a] font-bold block mt-0.5">$30M+ Salary</span>
                <span className="text-[10px] text-[#515987] block">Thalapathy 69 (#69)</span>
              </div>
              <div className="p-3 rounded-xl bg-red-950/20 border border-red-500/20">
                <span className="text-[10px] text-zinc-400 uppercase block">State Honor</span>
                <span className="text-white font-bold block mt-0.5">Kalaimaamani</span>
                <span className="text-[10px] text-amber-400 block">Conferred in 1998</span>
              <div className="p-3 rounded-xl bg-white/80 border border-[#C1C6EB] shadow-sm">
                <span className="text-[10px] text-[#515987] uppercase block font-semibold">State Honor</span>
                <span className="text-[#0f132a] font-bold block mt-0.5">Kalaimaamani</span>
                <span className="text-[10px] text-amber-600 block font-medium">Conferred in 1998</span>
              </div>
            </div>

            {/* Quick 5-page directory preview */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs space-y-2">
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
            <div className="p-4 rounded-2xl bg-white/70 border border-[#C1C6EB] font-mono text-xs space-y-2 shadow-sm">
              <div className="text-[10px] text-[#515987] uppercase tracking-widest font-semibold">
                Dedicated 5-Page Sub-Portfolio Directory:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-zinc-300">
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">01. Home</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">02. Journey</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">03. Career</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">04. About</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">05. Contact</span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[#262c4c]">
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">01. Home</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">02. Journey</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">03. Career</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">04. About</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">05. Contact</span>
              </div>
            </div>

            <button
              onClick={() => handleLaunch('vijay')}
              onMouseEnter={() => soundFX.playHover()}
              className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-red-600 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-red-600/20 cursor-pointer"
              className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-red-600 hover:bg-[#0f132a] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-red-600/20 cursor-pointer"
            >
              <span>Launch Vijay Sub-Portfolio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Clean, High-Contrast Editorial Portrait Card (Unobstructed Face, Ambient Glow) */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient Card Outer Glow */}
            <div className="absolute -inset-1 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl bg-red-600/30" />

            <InteractiveTiltCard
              accentColor="#ef4444"
              onClick={() => handleLaunch('vijay')}
              className="p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-[#2a080c] via-[#150406] to-[#080203] border border-red-500/40 shadow-2xl relative overflow-hidden group cursor-pointer"
            >
              {({ isHovered }) => (
                <div className="flex flex-col justify-between h-[480px] sm:h-[520px] relative z-10">
                  
                  {/* Top HUD Badges */}
                  <div className="relative z-20 flex items-center justify-between font-mono text-[10px] tracking-widest">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white font-bold">
                      STATECRAFT & CINEMA
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-red-600 text-white font-bold tracking-wider">
                      OFFICIAL PORTRAIT
                    </span>
                  </div>

                  {/* Clean High-Resolution Editorial Photo - 100% UNOBSTRUCTED FACE */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                    <img
                      src="/images/vijay/vijay-cm-official.jpg"
                      alt="CM Vijay Official Portrait"
                      className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
                    />
                    {/* Deep gradient fade towards bottom for contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/15" />
                  </div>

                  {/* Spacer to keep center face completely clear and pristine */}
                  <div className="relative z-10 my-auto pointer-events-none" />

                  {/* Bottom Navigation Call to Action with Status Badge */}
                  <div className="relative z-20 pt-4 border-t border-white/[0.15] flex items-center justify-between bg-black/85 backdrop-blur-md -mx-1 px-4 py-3 rounded-2xl border border-white/10">
                    <div>
                      <div className="font-editorial text-lg font-bold text-white group-hover:text-red-400 transition-colors flex items-center space-x-2">
                        <span>Enter Portfolio</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">★ 2026 VICTORY</span>
                      </div>
                      <div className="font-mono text-[11px] text-zinc-300">
                        Official Dossier • 5 Dedicated Pages
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-red-500/50 flex items-center justify-center text-red-400 group-hover:bg-red-500 group-hover:text-black transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              )}
            </InteractiveTiltCard>
          </div>
        </article>

        {/* -----------------------------------------------------------------------
            PROFILE 02: PAVEL DUROV (CYBER SLEEK DARK BLUE)
        ------------------------------------------------------------------------ */}
        <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-white/10 pt-12 sm:pt-16">
        <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#C1C6EB] pt-12 sm:pt-16">
          {/* Clean, High-Contrast Editorial Portrait Card (Unobstructed Face, Ambient Glow) */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative group">
            {/* Ambient Card Outer Glow */}
            <div className="absolute -inset-1 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl bg-sky-600/30" />

            <InteractiveTiltCard
              accentColor="#0284c7"
              onClick={() => handleLaunch('pavel')}
              className="p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-[#081320] via-[#060e18] to-[#04080e] border border-sky-500/40 shadow-2xl relative overflow-hidden group cursor-pointer"
            >
              {({ isHovered }) => (
                <div className="flex flex-col justify-between h-[480px] sm:h-[520px] relative z-10">
                  
                  {/* Top HUD Badges */}
                  <div className="relative z-20 flex items-center justify-between font-mono text-[10px] tracking-widest">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white font-bold">
                      ENCRYPTED PROTOCOLS
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-sky-600 text-white font-bold tracking-wider">
                      TELEGRAM ARCHITECT
                    </span>
                  </div>

                  {/* Clean High-Resolution Editorial Photo - 100% UNOBSTRUCTED FACE */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                    <img
                      src="/images/pavel/pavel-visionary-gaze.jpg"
                      alt="Pavel Durov Visionary Portrait"
                      className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/15" />
                  </div>

                  {/* Spacer to keep center face completely clear and pristine */}
                  <div className="relative z-10 my-auto pointer-events-none" />

                  {/* Bottom Navigation Call to Action with Status Badge */}
                  <div className="relative z-20 pt-4 border-t border-white/[0.15] flex items-center justify-between bg-black/85 backdrop-blur-md -mx-1 px-4 py-3 rounded-2xl border border-white/10">
                    <div>
                      <div className="font-editorial text-lg font-bold text-white group-hover:text-sky-400 transition-colors flex items-center space-x-2">
                        <span>Enter Portfolio</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-sky-500/20 text-sky-300 border border-sky-500/30">★ 950M CITIZENS</span>
                      </div>
                      <div className="font-mono text-[11px] text-zinc-300">
                        Cryptographic Visor • 950M Metrics
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-sky-500/50 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-black transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              )}
            </InteractiveTiltCard>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-sky-400 uppercase">
              <span className="px-2.5 py-1 bg-sky-500/10 border border-sky-500/30 rounded-full font-bold">
            <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-sky-700 uppercase">
              <span className="px-2.5 py-1 bg-sky-100/90 border border-sky-300 rounded-full font-bold">
                SUB-PORTFOLIO 02
              </span>
              <span>•</span>
              <span>CYBER SLEEK DARK BLUE</span>
              <span className="font-semibold">CYBER SLEEK DARK BLUE</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.92]">
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#0f132a] leading-[0.92]">
              Pavel <br />
              <span className="text-sky-400">Durov</span>
              <span className="text-sky-700">Durov</span>
            </h2>

            <p className="font-mono text-xs sm:text-sm text-zinc-400 tracking-wider uppercase">
            <p className="font-mono text-xs sm:text-sm text-[#474e79] tracking-wider uppercase font-semibold">
              CEO of Telegram • VKontakte Founder • St. Petersburg Honors (2006)
            </p>

            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Pioneered Eastern Europe's top social network VKontakte (serving as CEO until 2014), then built <strong className="text-sky-300 font-medium">Telegram</strong> into 
              a <strong className="text-white font-medium">950M+ user citadel</strong> with 100% equity autonomy, zero venture debt, and uncompromised cryptographic privacy.
            <p className="font-sans text-sm sm:text-base text-[#262c4c] leading-relaxed font-light">
              Pioneered Eastern Europe's top social network VKontakte (serving as CEO until 2014), then built <strong className="text-sky-700 font-medium">Telegram</strong> into 
              a <strong className="text-[#0f132a] font-medium">950M+ user citadel</strong> with 100% equity autonomy, zero venture debt, and uncompromised cryptographic privacy.
            </p>

            {/* Core Achievement Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-sky-950/20 border border-sky-500/20">
                <span className="text-[10px] text-zinc-400 uppercase block">Global Scale</span>
                <span className="text-white font-bold block mt-0.5">950M+ Active Users</span>
                <span className="text-[10px] text-sky-400 block">$0 Ad Spend (Organic)</span>
              <div className="p-3 rounded-xl bg-white/80 border border-[#C1C6EB] shadow-sm">
                <span className="text-[10px] text-[#515987] uppercase block font-semibold">Global Scale</span>
                <span className="text-[#0f132a] font-bold block mt-0.5">950M+ Active Users</span>
                <span className="text-[10px] text-sky-700 block font-medium">$0 Ad Spend (Organic)</span>
              </div>
              <div className="p-3 rounded-xl bg-sky-950/20 border border-sky-500/20">
                <span className="text-[10px] text-zinc-400 uppercase block">Social Network</span>
                <span className="text-white font-bold block mt-0.5">VKontakte (VK)</span>
                <span className="text-[10px] text-zinc-400 block">Co-Founder & CEO (2006-14)</span>
              <div className="p-3 rounded-xl bg-white/80 border border-[#C1C6EB] shadow-sm">
                <span className="text-[10px] text-[#515987] uppercase block font-semibold">Social Network</span>
                <span className="text-[#0f132a] font-bold block mt-0.5">VKontakte (VK)</span>
                <span className="text-[10px] text-[#515987] block">Co-Founder & CEO (2006-14)</span>
              </div>
              <div className="p-3 rounded-xl bg-sky-950/20 border border-sky-500/20">
                <span className="text-[10px] text-zinc-400 uppercase block">Academic Distinction</span>
                <span className="text-white font-bold block mt-0.5">Honors in Philology</span>
                <span className="text-[10px] text-sky-400 block">St. Petersburg State (2006)</span>
              <div className="p-3 rounded-xl bg-white/80 border border-[#C1C6EB] shadow-sm">
                <span className="text-[10px] text-[#515987] uppercase block font-semibold">Academic Distinction</span>
                <span className="text-[#0f132a] font-bold block mt-0.5">Honors in Philology</span>
                <span className="text-[10px] text-sky-700 block font-medium">St. Petersburg State (2006)</span>
              </div>
            </div>

            {/* Quick 5-page directory preview */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs space-y-2">
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
            <div className="p-4 rounded-2xl bg-white/70 border border-[#C1C6EB] font-mono text-xs space-y-2 shadow-sm">
              <div className="text-[10px] text-[#515987] uppercase tracking-widest font-semibold">
                Dedicated 5-Page Sub-Portfolio Directory:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-zinc-300">
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">01. Home</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">02. Journey</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">03. Career</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">04. About</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">05. Contact</span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[#262c4c]">
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">01. Home</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">02. Journey</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">03. Career</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">04. About</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">05. Contact</span>
              </div>
            </div>

            <button
              onClick={() => handleLaunch('pavel')}
              onMouseEnter={() => soundFX.playHover()}
              className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-sky-500 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-sky-500/20 cursor-pointer"
              className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-sky-600 hover:bg-[#0f132a] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-sky-600/20 cursor-pointer"
            >
              <span>Launch Durov Sub-Portfolio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </article>

        {/* -----------------------------------------------------------------------
            PROFILE 03: SALMAN KHAN (WARM DARK + GOLD / TURQUOISE)
        ------------------------------------------------------------------------ */}
        <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-white/10 pt-12 sm:pt-16">
        <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center border-t border-[#C1C6EB] pt-12 sm:pt-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-amber-400 uppercase">
              <span className="px-2.5 py-1 bg-amber-500/10 border border-amber-500/30 rounded-full font-bold">
            <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-amber-700 uppercase">
              <span className="px-2.5 py-1 bg-amber-100/90 border border-amber-300 rounded-full font-bold">
                SUB-PORTFOLIO 03
              </span>
              <span>•</span>
              <span>WARM DARK & CHARITY GOLD</span>
              <span className="font-semibold">WARM DARK & CHARITY GOLD</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.92]">
            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-[#0f132a] leading-[0.92]">
              Salman <br />
              <span className="text-amber-400">Khan</span>
              <span className="text-amber-700">Khan</span>
            </h2>

            <p className="font-mono text-xs sm:text-sm text-zinc-400 tracking-wider uppercase">
            <p className="font-mono text-xs sm:text-sm text-[#474e79] tracking-wider uppercase font-semibold">
              Box Office Titan • Bigg Boss Sovereign • Founder of Being Human
            </p>

            <p className="font-sans text-sm sm:text-base text-zinc-300 leading-relaxed font-light">
              Filmfare-winning debut in <strong className="text-white font-medium">'Maine Pyar Kiya' (1989)</strong>, 
              winner of Filmfare Best Supporting Actor for <strong className="text-white font-medium">'Kuch Kuch Hota Hai' (1998)</strong>, 
              architect of the ₹3,000Cr+ commercial canon, 15+ seasons of Bigg Boss hosting, and founder of the <strong className="text-teal-400 font-medium">Being Human & VEER</strong> charitable foundations.
            <p className="font-sans text-sm sm:text-base text-[#262c4c] leading-relaxed font-light">
              Filmfare-winning debut in <strong className="text-[#0f132a] font-medium">'Maine Pyar Kiya' (1989)</strong>, 
              winner of Filmfare Best Supporting Actor for <strong className="text-[#0f132a] font-medium">'Kuch Kuch Hota Hai' (1998)</strong>, 
              architect of the ₹3,000Cr+ commercial canon, 15+ seasons of Bigg Boss hosting, and founder of the <strong className="text-teal-700 font-medium">Being Human & VEER</strong> charitable foundations.
            </p>

            {/* Core Achievement Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <span className="text-[10px] text-zinc-400 uppercase block">Philanthropy</span>
                <span className="text-white font-bold block mt-0.5">Being Human & VEER</span>
                <span className="text-[10px] text-teal-400 block">1,500+ Surgeries Funded</span>
              <div className="p-3 rounded-xl bg-white/80 border border-[#C1C6EB] shadow-sm">
                <span className="text-[10px] text-[#515987] uppercase block font-semibold">Philanthropy</span>
                <span className="text-[#0f132a] font-bold block mt-0.5">Being Human & VEER</span>
                <span className="text-[10px] text-teal-700 block font-medium">1,500+ Surgeries Funded</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <span className="text-[10px] text-zinc-400 uppercase block">Debut Filmfare</span>
                <span className="text-white font-bold block mt-0.5">Best Male Debut</span>
                <span className="text-[10px] text-zinc-400 block">Maine Pyar Kiya (1989)</span>
              <div className="p-3 rounded-xl bg-white/80 border border-[#C1C6EB] shadow-sm">
                <span className="text-[10px] text-[#515987] uppercase block font-semibold">Debut Filmfare</span>
                <span className="text-[#0f132a] font-bold block mt-0.5">Best Male Debut</span>
                <span className="text-[10px] text-[#515987] block">Maine Pyar Kiya (1989)</span>
              </div>
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <span className="text-[10px] text-zinc-400 uppercase block">Television Reign</span>
                <span className="text-white font-bold block mt-0.5">Bigg Boss (15+ Years)</span>
                <span className="text-[10px] text-amber-400 block">Highest-Rated TV Host</span>
              <div className="p-3 rounded-xl bg-white/80 border border-[#C1C6EB] shadow-sm">
                <span className="text-[10px] text-[#515987] uppercase block font-semibold">Television Reign</span>
                <span className="text-[#0f132a] font-bold block mt-0.5">Bigg Boss (15+ Years)</span>
                <span className="text-[10px] text-amber-700 block font-medium">Highest-Rated TV Host</span>
              </div>
            </div>

            {/* Quick 5-page directory preview */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs space-y-2">
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
            <div className="p-4 rounded-2xl bg-white/70 border border-[#C1C6EB] font-mono text-xs space-y-2 shadow-sm">
              <div className="text-[10px] text-[#515987] uppercase tracking-widest font-semibold">
                Dedicated 5-Page Sub-Portfolio Directory:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-zinc-300">
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">01. Home</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">02. Journey</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">03. Career</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">04. About</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">05. Contact</span>
              <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 text-[#262c4c]">
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">01. Home</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">02. Journey</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">03. Career</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">04. About</span>
                <span className="px-2.5 py-1 bg-white/90 rounded border border-[#C1C6EB]/60 shadow-xs">05. Contact</span>
              </div>
            </div>

            <button
              onClick={() => handleLaunch('salman')}
              onMouseEnter={() => soundFX.playHover()}
              className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-amber-500 hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-amber-500/20 cursor-pointer"
              className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-amber-600 hover:bg-[#0f132a] text-white font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-amber-600/20 cursor-pointer"
            >
              <span>Launch Salman Sub-Portfolio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          {/* Clean, High-Contrast Editorial Portrait Card (Unobstructed Face, Ambient Glow) */}
          <div className="lg:col-span-5 relative group">
            {/* Ambient Card Outer Glow */}
            <div className="absolute -inset-1 rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl bg-amber-600/30" />

            <InteractiveTiltCard
              accentColor="#d97706"
              onClick={() => handleLaunch('salman')}
              className="p-4 sm:p-6 rounded-3xl bg-gradient-to-br from-[#161208] via-[#100d06] to-[#0a0804] border border-amber-500/40 shadow-2xl relative overflow-hidden group cursor-pointer"
            >
              {({ isHovered }) => (
                <div className="flex flex-col justify-between h-[480px] sm:h-[520px] relative z-10">
                  
                  {/* Top HUD Badges */}
                  <div className="relative z-20 flex items-center justify-between font-mono text-[10px] tracking-widest">
                    <span className="px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-white font-bold">
                      CINEMA & ALTRUISM
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-amber-500 text-black font-bold tracking-wider">
                      BEING HUMAN TITAN
                    </span>
                  </div>

                  {/* Clean High-Resolution Editorial Photo - 100% UNOBSTRUCTED FACE */}
                  <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl">
                    <img
                      src="/images/salman/salman-navy-formal.jpg"
                      alt="Salman Khan Navy Formal Portrait"
                      className="w-full h-full object-cover object-top brightness-95 group-hover:scale-105 group-hover:brightness-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-black/15" />
                  </div>

                  {/* Spacer to keep center face completely clear and pristine */}
                  <div className="relative z-10 my-auto pointer-events-none" />

                  {/* Bottom Navigation Call to Action with Status Badge */}
                  <div className="relative z-20 pt-4 border-t border-white/[0.15] flex items-center justify-between bg-black/85 backdrop-blur-md -mx-1 px-4 py-3 rounded-2xl border border-white/10">
                    <div>
                      <div className="font-editorial text-lg font-bold text-white group-hover:text-amber-400 transition-colors flex items-center space-x-2">
                        <span>Enter Portfolio</span>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">★ ₹3,000Cr TITAN</span>
                      </div>
                      <div className="font-mono text-[11px] text-zinc-300">
                        Turquoise Core • Being Human Mission
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-amber-500/50 flex items-center justify-center text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-all">
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </div>

                </div>
              )}
            </InteractiveTiltCard>
          </div>
        </article>

      </section>

    </div>
  );
}
