import React from 'react';
import { ArrowUpRight, ChevronRight, Landmark, Lock, Heart, Award, Sparkles } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';
import { PROFILES_EXTENDED_DATA } from '../../data/profilesExtendedData';
import InteractiveTiltCard from '../3d/InteractiveTiltCard';
import Thalapathy3D from '../3d/Thalapathy3D';
import Durov3D from '../3d/Durov3D';
import Salman3D from '../3d/Salman3D';

export default function HomePage({ onSelectPersona }) {
  const handleLaunch = (personId) => {
    soundFX.playTransition();
    onSelectPersona(personId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-[#f1f1f5]">
      
      {/* =========================================================================
          HERO SECTION: THE MAIN HUB LANDING COVER
      ========================================================================== */}
      <section className="relative min-h-[90vh] flex flex-col justify-between pt-12 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-b border-white/[0.08]">
        
        {/* Top Editorial Ribbon */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-12 border-b border-white/[0.06] font-mono text-[11px] tracking-[0.2em] uppercase text-zinc-400">
          <div className="flex items-center space-x-3">
            <span className="w-2 h-2 bg-emerald-400 rounded-full animate-ping" />
            <span className="text-white font-bold">PORTFOLIO NETWORK // 2026 EDITION</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <span>UNIFIED ARCHIVE: 3 SUB-PORTFOLIOS</span>
            <span>5 INTERACTIVE PAGES EACH</span>
          </div>
          <div className="text-right">
            <span>INDEX: 01 — 03</span>
          </div>
        </div>

        {/* Center: Massive Bold Editorial Headline */}
        <div className="my-12 lg:my-16">
          <div className="inline-block px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/[0.03] text-[11px] font-mono tracking-widest text-zinc-400 uppercase">
            Executive Editorial Network
          </div>
          <h1 className="font-editorial text-4xl sm:text-6xl md:text-8xl lg:text-[7.2rem] font-black uppercase tracking-tight leading-[0.88] text-white">
            Monuments <br />
            <span className="text-zinc-500 font-light italic">of</span> Power & <br />
            <span className="text-stroke-thick hover:text-white transition-colors duration-500">
              Sovereignty.
            </span>
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 pt-8 border-t border-white/[0.06]">
            <div className="md:col-span-7">
              <p className="font-sans text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl font-light">
                Welcome to the unified Main Hub. Explore three bespoke 5-page sub-portfolios featuring interactive 
                <strong className="text-white font-medium"> 3D character avatars with speech guides</strong>, 
                <strong className="text-white font-medium"> GSAP vertical scroll timelines</strong>, 
                deep career data grids, split-screen biographical essays, and glassmorphic PR inquiries for: 
                <span className="text-amber-400 font-medium"> CM Vijay Thalapathy</span>, 
                <span className="text-sky-400 font-medium"> Pavel Durov</span>, and 
                <span className="text-teal-400 font-medium"> Salman Khan</span>.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-col justify-end items-start md:items-end space-y-2 font-mono text-xs text-zinc-400">
              <div className="flex items-center space-x-3">
                <span className="text-amber-400">✦</span>
                <span className="text-zinc-300">WEBGL CHARACTER AVATARS ACTIVE</span>
              </div>
              <div>CLICK ANY CARD TO ENTER THEIR 5-PAGE PERSONAL PORTFOLIO</div>
            </div>
          </div>
        </div>

        {/* Bottom Metric Badges */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 font-mono text-xs border-t border-white/[0.06]">
          <div className="border-l border-red-500/40 pl-4">
            <div className="text-[10px] text-zinc-400 uppercase">SUB-PORTFOLIO 01</div>
            <div className="text-white font-bold text-sm mt-0.5">VIJAY THALAPATHY</div>
            <div className="text-[10px] text-red-400">TN Chief Minister • $30M Cinema</div>
          </div>
          <div className="border-l border-sky-500/40 pl-4">
            <div className="text-[10px] text-zinc-400 uppercase">SUB-PORTFOLIO 02</div>
            <div className="text-white font-bold text-sm mt-0.5">PAVEL DUROV</div>
            <div className="text-[10px] text-sky-400">Telegram CEO • 950M+ Citadel</div>
          </div>
          <div className="border-l border-teal-500/40 pl-4">
            <div className="text-[10px] text-zinc-400 uppercase">SUB-PORTFOLIO 03</div>
            <div className="text-white font-bold text-sm mt-0.5">SALMAN KHAN</div>
            <div className="text-[10px] text-teal-400">₹3,000Cr+ Titan • Being Human</div>
          </div>
          <div className="border-l border-amber-500/40 pl-4">
            <div className="text-[10px] text-zinc-400 uppercase">SUB-PORTFOLIO SUITE</div>
            <div className="text-white font-bold text-sm mt-0.5">5 PAGES PER LEADER</div>
            <div className="text-[10px] text-amber-400">Home • Journey • Career • About • Contact</div>
          </div>
        </div>

      </section>

      {/* =========================================================================
          MARQUEE STREAM
      ========================================================================== */}
      <div className="relative py-4 bg-white text-black overflow-hidden select-none font-mono text-xs sm:text-sm tracking-[0.25em] font-black uppercase">
        <div className="animate-marquee whitespace-nowrap">
          <span>
            ★ TAMILAGA VETTRI KAZHAGAM • 950 MILLION ENCRYPTED TELEGRAM CITIZENS • ₹3,000 CRORE INDIAN THEATRICAL REIGN • MAY 10 2026 CHIEF MINISTER MANDATE • 100% BOOTSTRAPPED DIGITAL SOVEREIGNTY • BEING HUMAN CHARITABLE FOUNDATION • \$30M+ RECORD CINEMA MILESTONE •&nbsp;
          </span>
          <span>
            ★ TAMILAGA VETTRI KAZHAGAM • 950 MILLION ENCRYPTED TELEGRAM CITIZENS • ₹3,000 CRORE INDIAN THEATRICAL REIGN • MAY 10 2026 CHIEF MINISTER MANDATE • 100% BOOTSTRAPPED DIGITAL SOVEREIGNTY • BEING HUMAN CHARITABLE FOUNDATION • \$30M+ RECORD CINEMA MILESTONE •&nbsp;
          </span>
        </div>
      </div>

      {/* =========================================================================
          TRI-PROFILE EDITORIAL CARDS (CLICK TO ENTER SUB-PORTFOLIOS)
      ========================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28 space-y-28">

        {/* -----------------------------------------------------------------------
            PROFILE 01: CM VIJAY THALAPATHY (DYNAMIC RED / MONOCHROME)
        ------------------------------------------------------------------------ */}
        <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-red-400 uppercase">
              <span className="px-2 py-0.5 bg-red-500/10 border border-red-500/30 rounded">
                SUB-PORTFOLIO 01
              </span>
              <span>•</span>
              <span>DYNAMIC RED & GOLD PALETTE</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.92]">
              CM Vijay <br />
              <span className="text-red-500">Thalapathy</span>
            </h2>

            <p className="font-mono text-xs text-zinc-400 tracking-wider uppercase">
              Chief Minister of Tamil Nadu • TVK Founder • Highest-Paid Indian Actor
            </p>

            <p className="font-sans text-base text-zinc-300 leading-relaxed font-light">
              Commanded an unprecedented <strong className="text-white font-medium">$30M+ compensation</strong> for his 69th film before founding 
              <strong className="text-red-400 font-medium"> Tamilaga Vettri Kazhagam (TVK)</strong> in Feb 2024 and taking oath as 
              <strong className="text-white font-medium"> Chief Minister of Tamil Nadu on May 10, 2026</strong>.
            </p>

            {/* Quick 5-page directory preview */}
            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs space-y-2">
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
                Dedicated 5-Page Sub-Portfolio Directory:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-zinc-300">
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">01. 3D Home</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">02. Journey</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">03. Career</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">04. About</span>
              </div>
            </div>

            <button
              onClick={() => handleLaunch('vijay')}
              onMouseEnter={() => soundFX.playHover()}
              className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-red-600 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-red-600/20"
            >
              <span>Launch Vijay Sub-Portfolio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-5">
            <InteractiveTiltCard
              accentColor="#dc2626"
              onClick={() => handleLaunch('vijay')}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#180a0a] via-[#100606] to-[#080404] border border-red-500/30 shadow-2xl relative overflow-hidden group"
            >
              {({ isHovered }) => (
                <div className="flex flex-col justify-between h-[500px] relative z-10">
                  {/* Background Official CM Photo with Vignette */}
                  <div className="absolute inset-0 -m-6 sm:-m-8 z-0 overflow-hidden pointer-events-none">
                    <img
                      src="/images/vijay/vijay-cm-official.jpg"
                      alt="CM Vijay Official Portrait"
                      className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080404] via-[#080404]/70 to-transparent" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-zinc-300 tracking-widest">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">SECTOR: STATECRAFT & CINEMA</span>
                    <span className="text-red-400 font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-red-500/30">OFFICIAL CM PORTRAIT</span>
                  </div>

                  <div className="relative z-10 my-auto py-2">
                    <Thalapathy3D hovered={isHovered} className="h-56 w-full" />
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/[0.12] flex items-center justify-between bg-black/40 backdrop-blur-sm -mx-2 px-3 py-2 rounded-xl">
                    <div>
                      <div className="font-editorial text-lg font-bold text-white">
                        Enter Personal Portfolio
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
        <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
          <div className="lg:col-span-5 order-2 lg:order-1">
            <InteractiveTiltCard
              accentColor="#0284c7"
              onClick={() => handleLaunch('pavel')}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#081320] via-[#060e18] to-[#04080e] border border-sky-500/30 shadow-2xl relative overflow-hidden group"
            >
              {({ isHovered }) => (
                <div className="flex flex-col justify-between h-[500px] relative z-10">
                  {/* Background Photo with Cyber Cyan Vignette */}
                  <div className="absolute inset-0 -m-6 sm:-m-8 z-0 overflow-hidden pointer-events-none">
                    <img
                      src="/images/pavel/pavel-telegram-phone.jpg"
                      alt="Pavel Durov Telegram Portrait"
                      className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#04080e] via-[#04080e]/70 to-transparent" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-zinc-300 tracking-widest">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">SECTOR: ENCRYPTED PROTOCOLS</span>
                    <span className="text-sky-400 font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-sky-500/30">TELEGRAM ARCHITECT</span>
                  </div>

                  <div className="relative z-10 my-auto py-2">
                    <Durov3D hovered={isHovered} className="h-56 w-full" />
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/[0.12] flex items-center justify-between bg-black/40 backdrop-blur-sm -mx-2 px-3 py-2 rounded-xl">
                    <div>
                      <div className="font-editorial text-lg font-bold text-white">
                        Enter Personal Portfolio
                      </div>
                      <div className="font-mono text-[11px] text-zinc-300">
                        Holographic Visor • 950M Metrics
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
              <span className="px-2 py-0.5 bg-sky-500/10 border border-sky-500/30 rounded">
                SUB-PORTFOLIO 02
              </span>
              <span>•</span>
              <span>CYBER SLEEK DARK BLUE</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.92]">
              Pavel <br />
              <span className="text-sky-400">Durov</span>
            </h2>

            <p className="font-mono text-xs text-zinc-400 tracking-wider uppercase">
              CEO of Telegram • VKontakte Founder • St. Petersburg Honors (2006)
            </p>

            <p className="font-sans text-base text-zinc-300 leading-relaxed font-light">
              Pioneered Eastern Europe's top social network VKontakte, then built <strong className="text-sky-300 font-medium">Telegram</strong> into 
              a <strong className="text-white font-medium">950M+ user citadel</strong> with 100% equity autonomy, zero venture debt, and uncompromised privacy.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs space-y-2">
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
                Dedicated 5-Page Sub-Portfolio Directory:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-zinc-300">
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">01. 3D Home</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">02. Journey</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">03. Career</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">04. About</span>
              </div>
            </div>

            <button
              onClick={() => handleLaunch('pavel')}
              onMouseEnter={() => soundFX.playHover()}
              className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-sky-500 hover:bg-white text-white hover:text-black font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-sky-500/20"
            >
              <span>Launch Durov Sub-Portfolio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </article>

        {/* -----------------------------------------------------------------------
            PROFILE 03: SALMAN KHAN (WARM DARK + GOLD / TURQUOISE)
        ------------------------------------------------------------------------ */}
        <article className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center border-t border-white/10 pt-16">
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center space-x-3 font-mono text-xs tracking-widest text-amber-400 uppercase">
              <span className="px-2 py-0.5 bg-amber-500/10 border border-amber-500/30 rounded">
                SUB-PORTFOLIO 03
              </span>
              <span>•</span>
              <span>WARM DARK & GOLD / CHARITY TURQUOISE</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-bold uppercase tracking-tight text-white leading-[0.92]">
              Salman <br />
              <span className="text-amber-400">Khan</span>
            </h2>

            <p className="font-mono text-xs text-zinc-400 tracking-wider uppercase">
              Box Office Titan • Bigg Boss Sovereign • Founder of Being Human
            </p>

            <p className="font-sans text-base text-zinc-300 leading-relaxed font-light">
              Filmfare-winning debut in <strong className="text-white font-medium">'Maine Pyar Kiya' (1989)</strong>, 
              winner of Filmfare Best Supporting Actor for <strong className="text-white font-medium">'Kuch Kuch Hota Hai' (1998)</strong>, 
              and architect of the ₹3,000Cr+ box office canon and <strong className="text-cyan-400 font-medium">Being Human & VEER</strong> foundations.
            </p>

            <div className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] font-mono text-xs space-y-2">
              <div className="text-[10px] text-zinc-400 uppercase tracking-widest">
                Dedicated 5-Page Sub-Portfolio Directory:
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-zinc-300">
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">01. 3D Home</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">02. Journey</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">03. Career</span>
                <span className="px-2.5 py-1 bg-white/[0.03] rounded">04. About</span>
              </div>
            </div>

            <button
              onClick={() => handleLaunch('salman')}
              onMouseEnter={() => soundFX.playHover()}
              className="group inline-flex items-center space-x-4 px-8 py-4 rounded-full bg-amber-500 hover:bg-white text-black font-mono text-xs uppercase tracking-widest font-bold transition-all duration-300 shadow-xl shadow-amber-500/20"
            >
              <span>Launch Salman Sub-Portfolio</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="lg:col-span-5">
            <InteractiveTiltCard
              accentColor="#d97706"
              onClick={() => handleLaunch('salman')}
              className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#161208] via-[#100d06] to-[#0a0804] border border-amber-500/30 shadow-2xl relative overflow-hidden group"
            >
              {({ isHovered }) => (
                <div className="flex flex-col justify-between h-[500px] relative z-10">
                  {/* Background Photo with Gold & Turquoise Vignette */}
                  <div className="absolute inset-0 -m-6 sm:-m-8 z-0 overflow-hidden pointer-events-none">
                    <img
                      src="/images/salman/salman-iconic-jacket.jpg"
                      alt="Salman Khan Iconic Portrait"
                      className="w-full h-full object-cover object-top opacity-35 group-hover:opacity-55 group-hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0804] via-[#0a0804]/70 to-transparent" />
                  </div>

                  <div className="relative z-10 flex items-center justify-between font-mono text-[10px] text-zinc-300 tracking-widest">
                    <span className="px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10">SECTOR: CINEMA & ALTRUISM</span>
                    <span className="text-amber-400 font-bold px-2 py-0.5 rounded bg-black/60 backdrop-blur-md border border-amber-500/30">BEING HUMAN TITAN</span>
                  </div>

                  <div className="relative z-10 my-auto py-2">
                    <Salman3D hovered={isHovered} className="h-56 w-full" />
                  </div>

                  <div className="relative z-10 pt-4 border-t border-white/[0.12] flex items-center justify-between bg-black/40 backdrop-blur-sm -mx-2 px-3 py-2 rounded-xl">
                    <div>
                      <div className="font-editorial text-lg font-bold text-white">
                        Enter Personal Portfolio
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
