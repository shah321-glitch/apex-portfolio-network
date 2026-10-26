import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Calendar,
  MapPin,
  Award,
  Film,
  Shield,
  Heart,
  Send,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  Landmark,
  GraduationCap,
  Tv,
  Star,
  Lock,
  Mail,
  User,
  Building,
  Camera
} from 'lucide-react';
import { soundFX } from '../../utils/soundFX';
import { PROFILES_EXTENDED_DATA } from '../../data/profilesExtendedData';
import PersonaCharacter3D from '../3d/PersonaCharacter3D';
import InteractiveTiltCard from '../3d/InteractiveTiltCard';
import gsap from 'gsap';

export default function PersonaPortfolioView({
  personId = 'vijay',
  subpage = 'home',
  setSubpage,
  onBackToHub
}) {
  const profile = PROFILES_EXTENDED_DATA[personId];
  const [formState, setFormState] = useState({ name: '', organization: '', email: '', type: 'PR & Media', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Default active photo helper
  const getDefaultPhoto = () => {
    if (!profile?.images) return null;
    return profile.images.cmOfficial || profile.images.primary || Object.values(profile.images)[0];
  };

  const [activePhoto, setActivePhoto] = useState(getDefaultPhoto());
  const journeyRef = useRef(null);

  useEffect(() => {
    setActivePhoto(getDefaultPhoto());
  }, [personId]);

  // GSAP animation on subpage change
  useEffect(() => {
    soundFX.playTransition();
    window.scrollTo({ top: 0, behavior: 'smooth' });

    gsap.fromTo(
      '.subpage-content',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
    );
  }, [subpage, personId]);

  const handleNav = (tab) => {
    soundFX.playClick();
    setSubpage(tab);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    soundFX.playClick();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormState({ name: '', organization: '', email: '', type: 'PR & Media', message: '' });
    }, 4500);
  };

  if (!profile) return null;

  // Helper to get image gallery array for the persona
  const getGalleryItems = () => {
    if (personId === 'vijay' && profile.images) {
      return [
        { key: 'cmOfficial', src: profile.images.cmOfficial, label: 'Official CM' },
        { key: 'editorialTuxedo', src: profile.images.editorialTuxedo, label: 'Tuxedo' },
        { key: 'executivePortrait', src: profile.images.executivePortrait, label: 'Executive' },
        { key: 'cinematicGrit', src: profile.images.cinematicGrit, label: 'Cinematic' },
        { key: 'walkingHallway', src: profile.images.walkingHallway, label: 'Hallway' }
      ];
    }
    if (personId === 'pavel' && profile.images) {
      return [
        { key: 'primary', src: profile.images.primary, label: 'Visionary' },
        { key: 'telegramPhone', src: profile.images.telegramPhone, label: 'Telegram App' },
        { key: 'redcarpetTuxedo', src: profile.images.redcarpetTuxedo, label: 'Red Carpet' },
        { key: 'techcrunch', src: profile.images.techcrunch, label: 'TechCrunch' },
        { key: 'capSmile', src: profile.images.capSmile, label: 'Portrait' }
      ];
    }
    if (personId === 'salman' && profile.images) {
      return [
        { key: 'primary', src: profile.images.primary, label: 'Navy Formal' },
        { key: 'blackSuit', src: profile.images.blackSuit, label: 'Black Tailored' },
        { key: 'iconicJacket', src: profile.images.iconicJacket, label: 'Iconic Suede' },
        { key: 'redseaCarpet', src: profile.images.redseaCarpet, label: 'Red Carpet' },
        { key: 'bronzeBlazer', src: profile.images.bronzeBlazer, label: 'Bronze Blazer' }
      ];
    }
    return [];
  };

  const galleryItems = getGalleryItems();

  return (
    <div
      className="min-h-screen text-[#f1f1f5] pb-24 transition-colors duration-500"
      style={{ backgroundColor: profile.theme.bgDark }}
    >
      
      {/* =========================================================================
          PERSISTENT SUB-PORTFOLIO NAVIGATION HEADER
      ========================================================================== */}
      <div className="sticky top-20 z-40 backdrop-blur-xl border-b border-white/[0.08] bg-black/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          
          {/* Back to Main Hub & Persona Label */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onBackToHub}
              onMouseEnter={() => soundFX.playHover()}
              className="flex items-center space-x-2 text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Main Hub</span>
            </button>
            <span className="text-zinc-600">/</span>
            <div className="flex items-center space-x-2 font-mono text-xs">
              <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: profile.theme.accent }}
              />
              <span className="text-white font-bold tracking-wider uppercase">
                {profile.name}
              </span>
            </div>
          </div>

          {/* 5 Distinct Navigation Tabs */}
          <nav className="flex items-center space-x-1 sm:space-x-2 font-mono text-[11px] sm:text-xs">
            {[
              { id: 'home', label: 'Home' },
              { id: 'journey', label: 'Journey' },
              { id: 'career', label: 'Career' },
              { id: 'about', label: 'About' },
              { id: 'contact', label: 'Contact' }
            ].map((tab, idx) => {
              const active = subpage === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleNav(tab.id)}
                  onMouseEnter={() => soundFX.playHover()}
                  className={`px-3 py-1.5 rounded-full uppercase tracking-wider transition-all duration-300 ${
                    active
                      ? 'text-black font-bold shadow-md'
                      : 'text-zinc-400 hover:text-white hover:bg-white/[0.05]'
                  }`}
                  style={{
                    backgroundColor: active ? profile.theme.accent : 'transparent'
                  }}
                >
                  <span className="opacity-60 mr-1 hidden md:inline">0{idx}.</span>
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>

        </div>
      </div>

      {/* =========================================================================
          SUBPAGE 1: HOME (HERO + PERSONALITY-MATCHED 3D/HOLOGRAPHIC ANIMATION + GALLERY)
      ========================================================================== */}
      {subpage === 'home' && (
        <div className="subpage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-16">
          
          {/* Persona Hero Masthead */}
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full font-mono text-xs uppercase tracking-widest border"
              style={{
                backgroundColor: profile.theme.panelBg,
                borderColor: profile.theme.border,
                color: profile.theme.primaryLight
              }}
            >
              <span>{profile.currentOffice}</span>
            </div>

            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-9xl font-black uppercase tracking-tight text-white leading-[0.88]">
              {profile.shortName} <br />
              <span
                className="text-stroke-thick"
                style={{ WebkitTextStrokeColor: profile.theme.primaryLight }}
              >
                {profile.honorific}
              </span>
            </h1>

            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 font-mono text-xs text-zinc-400 border-y border-white/[0.08] py-3">
              <span><strong>LEGAL:</strong> {profile.bornName}</span>
              <span>•</span>
              <span><strong>BORN:</strong> {profile.birthDate}</span>
              <span>•</span>
              <span><strong>ORIGIN:</strong> {profile.birthPlace}</span>
            </div>
          </div>

          {/* Personality-Matched Animated Holographic Stage with Voice Guide */}
          <PersonaCharacter3D
            personId={personId}
            introData={profile.audioIntroduction}
            theme={profile.theme}
            onNavigate={(page) => handleNav(page)}
          />

          {/* Executive Photographic Archive Banner */}
          {galleryItems.length > 0 && (
            <div
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-8 rounded-3xl border"
              style={{
                backgroundColor: profile.theme.panelBg,
                borderColor: profile.theme.border
              }}
            >
              <div
                className="lg:col-span-5 relative group overflow-hidden rounded-2xl border max-h-[460px]"
                style={{ borderColor: profile.theme.border }}
              >
                <img
                  src={activePhoto || galleryItems[0].src}
                  alt={`${profile.name} Photography`}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80" />
                <div className="absolute bottom-4 left-4 right-4 font-mono text-xs">
                  <div
                    className="text-[10px] uppercase tracking-widest"
                    style={{ color: profile.theme.accent }}
                  >
                    EXECUTIVE ARCHIVE // 2026
                  </div>
                  <div className="font-editorial text-lg text-white font-bold uppercase">
                    {profile.name} • Official Monograph
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6">
                <div>
                  <span
                    className="font-mono text-xs uppercase tracking-widest"
                    style={{ color: profile.theme.accent }}
                  >
                    PHOTOGRAPHIC DOSSIER
                  </span>
                  <h3 className="font-editorial text-3xl sm:text-4xl font-bold uppercase text-white mt-1">
                    Authentic Visual Chronicle
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed mt-3">
                    High-contrast editorial portraits capturing the personal style, public authority, and cultural gravitas of {profile.name}.
                  </p>
                </div>

                {/* Interactive Thumbnail Selector Strip */}
                <div className="space-y-2">
                  <div className="font-mono text-[11px] text-zinc-400 uppercase tracking-widest flex items-center space-x-2">
                    <Camera className="w-3.5 h-3.5" style={{ color: profile.theme.accent }} />
                    <span>Select Portrait to Inspect:</span>
                  </div>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {galleryItems.map((item) => (
                      <button
                        key={item.key}
                        onClick={() => {
                          soundFX.playClick();
                          setActivePhoto(item.src);
                        }}
                        onMouseEnter={() => soundFX.playHover()}
                        className={`group relative rounded-xl overflow-hidden border-2 transition-all w-20 sm:w-24 aspect-[3/4] ${
                          (activePhoto || galleryItems[0].src) === item.src
                            ? 'scale-105 shadow-lg'
                            : 'border-white/10 hover:border-white/40 opacity-70 hover:opacity-100'
                        }`}
                        style={{
                          borderColor: (activePhoto || galleryItems[0].src) === item.src ? profile.theme.accent : 'rgba(255,255,255,0.1)'
                        }}
                      >
                        <img
                          src={item.src}
                          alt={item.label}
                          className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors" />
                        <span className="absolute bottom-1 left-1 right-1 text-[8px] font-mono text-center text-white/90 bg-black/60 rounded px-1 truncate">
                          {item.label}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Persona Highlight Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            {profile.careerStats.map((s, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20 transition-all"
              >
                <div className="text-[10px] text-zinc-400 tracking-widest uppercase">
                  {s.label}
                </div>
                <div
                  className="text-3xl font-bold mt-2"
                  style={{ color: profile.theme.accent }}
                >
                  {s.metric}
                </div>
                <div className="text-xs text-zinc-400 mt-1 font-sans">
                  {s.detail}
                </div>
              </div>
            ))}
          </div>

          {/* CTA Row to Journey & Career */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] gap-4">
            <div>
              <div className="font-editorial text-xl font-bold text-white uppercase">
                Explore the Complete Chronological Dossier
              </div>
              <div className="font-mono text-xs text-zinc-400 mt-1">
                Scroll-triggered 3D vertical timeline from early childhood to 2026.
              </div>
            </div>
            <button
              onClick={() => handleNav('journey')}
              onMouseEnter={() => soundFX.playHover()}
              className="px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-black transition-all flex items-center space-x-3"
              style={{ backgroundColor: profile.theme.accent }}
            >
              <span>Launch Journey Timeline</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* =========================================================================
          SUBPAGE 2: JOURNEY (VERTICAL 3D GSAP SCROLL TIMELINE)
      ========================================================================== */}
      {subpage === 'journey' && (
        <div ref={journeyRef} className="subpage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          {/* Header with Persona Portrait */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-6 border-b border-white/[0.08]">
            <div className="lg:col-span-8 space-y-3">
              <span
                className="font-mono text-xs uppercase tracking-widest"
                style={{ color: profile.theme.accent }}
              >
                CHRONOLOGICAL 3D TRAJECTORY
              </span>
              <h2 className="font-editorial text-4xl sm:text-6xl font-bold uppercase text-white">
                The Journey: Childhood to 2026 Status
              </h2>
              <p className="font-sans text-base text-zinc-400 font-light max-w-2xl">
                An interactive vertical progression detailing the defining life phases, breakthroughs, and sovereign moments of {profile.name}.
              </p>
            </div>

            {profile.images && (
              <div className="lg:col-span-4 flex justify-end">
                <div
                  className="relative rounded-2xl overflow-hidden border max-w-[240px] shadow-2xl group"
                  style={{ borderColor: profile.theme.border }}
                >
                  <img
                    src={
                      (personId === 'vijay' && profile.images.editorialTuxedo) ||
                      (personId === 'pavel' && profile.images.redcarpetTuxedo) ||
                      (personId === 'salman' && profile.images.redseaCarpet) ||
                      profile.images.primary
                    }
                    alt={`${profile.name} Journey`}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
                  <div className="absolute bottom-2 left-3 right-3 font-mono text-[10px] text-zinc-300">
                    HISTORICAL APEX • 1970s—2026
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Vertical 3D Timeline Container */}
          <div className="relative pl-6 sm:pl-10 space-y-12 before:absolute before:inset-0 before:left-3 sm:before:left-5 before:w-[2px] before:bg-gradient-to-b before:from-white/30 before:via-white/10 before:to-transparent">
            {profile.journeyMilestones.map((m, idx) => (
              <div key={idx} className="relative group">
                
                {/* Node Dot / 3D Marker */}
                <div
                  className="absolute -left-6 sm:-left-10 top-2 w-6 h-6 sm:w-7 sm:h-7 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-125"
                  style={{
                    backgroundColor: profile.theme.bgDark,
                    borderColor: profile.theme.accent
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: profile.theme.accent }}
                  />
                </div>

                {/* 3D Milestone Card */}
                <InteractiveTiltCard
                  accentColor={profile.theme.accent}
                  className="p-6 sm:p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-white/20"
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 font-mono text-xs">
                      <span
                        className="px-2.5 py-0.5 rounded font-bold uppercase tracking-wider"
                        style={{
                          backgroundColor: `${profile.theme.primary}25`,
                          color: profile.theme.primaryLight
                        }}
                      >
                        {m.phase}
                      </span>
                      <span className="text-zinc-400 tracking-wider">
                        {m.year}
                      </span>
                    </div>

                    <h3 className="font-editorial text-2xl sm:text-3xl font-bold text-white uppercase group-hover:text-amber-200 transition-colors">
                      {m.title}
                    </h3>
                    <div className="font-mono text-xs text-zinc-400 uppercase tracking-widest">
                      {m.subtitle}
                    </div>

                    <p className="font-sans text-sm sm:text-base text-zinc-300 font-light leading-relaxed pt-2">
                      {m.desc}
                    </p>
                  </div>
                </InteractiveTiltCard>

              </div>
            ))}
          </div>

          {/* Bottom Navigation */}
          <div className="pt-8 flex justify-end">
            <button
              onClick={() => handleNav('career')}
              className="px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-black flex items-center space-x-3"
              style={{ backgroundColor: profile.theme.accent }}
            >
              <span>Examine Career Details</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* =========================================================================
          SUBPAGE 3: CAREER (DATA GRIDS & RECORD BENCHMARKS + INTEGRATED PHOTOS)
      ========================================================================== */}
      {subpage === 'career' && (
        <div className="subpage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          <div className="space-y-3">
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: profile.theme.accent }}
            >
              DATA GRIDS & RECORDS
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-bold uppercase text-white">
              Career Achievements & Structural Milestones
            </h2>
            <p className="font-sans text-base text-zinc-400 font-light max-w-2xl">
              Comprehensive statistical documentation across box office supremacy, software infrastructure, and electoral triumphs.
            </p>
          </div>

          {/* Large Metrics Hero Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 font-mono">
            {profile.careerStats.map((stat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] relative overflow-hidden"
              >
                <div className="text-[11px] text-zinc-400 uppercase tracking-widest">
                  {stat.label}
                </div>
                <div
                  className="text-4xl sm:text-5xl font-bold text-white mt-3"
                  style={{ color: profile.theme.accent }}
                >
                  {stat.metric}
                </div>
                <div className="text-xs text-zinc-400 mt-2 font-sans font-light">
                  {stat.detail}
                </div>
              </div>
            ))}
          </div>

          {/* Deep Data Grids with Integrated Portraits */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {profile.careerCategories.map((cat, idx) => (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-6 relative overflow-hidden"
              >
                {/* Embed Persona Image in First Category */}
                {profile.images && idx === 0 && (
                  <div className="flex items-center space-x-4 p-4 rounded-2xl bg-black/40 border border-white/10">
                    <img
                      src={
                        (personId === 'vijay' && profile.images.cinematicGrit) ||
                        (personId === 'pavel' && profile.images.telegramPhone) ||
                        (personId === 'salman' && profile.images.bronzeBlazer) ||
                        profile.images.primary
                      }
                      alt={`${profile.name} Career Focus`}
                      className="w-16 h-16 rounded-xl object-cover object-top border"
                      style={{ borderColor: profile.theme.accent }}
                    />
                    <div>
                      <div
                        className="font-mono text-[10px] uppercase tracking-widest"
                        style={{ color: profile.theme.accent }}
                      >
                        {personId === 'vijay' && 'HISTORIC $30M+ CINEMA CANON'}
                        {personId === 'pavel' && '950M+ CITADEL INFRASTRUCTURE'}
                        {personId === 'salman' && '₹3,000CR+ ALL-TIME BLOCKBUSTERS'}
                      </div>
                      <div className="font-editorial text-base font-bold text-white">
                        {cat.name}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3 border-b border-white/[0.08] pb-4">
                  <Award
                    className="w-5 h-5"
                    style={{ color: profile.theme.accent }}
                  />
                  <h3 className="font-editorial text-xl font-bold uppercase text-white">
                    {cat.name}
                  </h3>
                </div>

                <div className="space-y-4">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/20 transition-all space-y-1"
                    >
                      <div className="font-editorial text-base font-bold text-white">
                        {item.title}
                      </div>
                      <div className="font-mono text-xs text-zinc-400">
                        {item.note}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Switcher */}
          <div className="pt-8 flex justify-end">
            <button
              onClick={() => handleNav('about')}
              className="px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-black flex items-center space-x-3"
              style={{ backgroundColor: profile.theme.accent }}
            >
              <span>Read Early Life & Social Work</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* =========================================================================
          SUBPAGE 4: ABOUT (SPLIT-SCREEN EDITORIAL + EXECUTIVE PORTRAIT)
      ========================================================================== */}
      {subpage === 'about' && (
        <div className="subpage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          <div className="space-y-3">
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: profile.theme.accent }}
            >
              SPLIT-SCREEN EDITORIAL
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-bold uppercase text-white">
              Genesis, Education & Social Missions
            </h2>
            <p className="font-sans text-base text-zinc-400 font-light max-w-2xl">
              An intimate biographical inquiry into early upbringing, intellectual conditioning, and transformative philanthropic enterprises.
            </p>
          </div>

          {/* Split Screen Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Screen: Early Life & Education */}
            <div className="lg:col-span-6 space-y-8">
              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-6">
                
                {/* Embed Early Roots / University Portrait */}
                {profile.images && (
                  <div
                    className="relative rounded-2xl overflow-hidden border max-h-64 mb-6 group"
                    style={{ borderColor: profile.theme.border }}
                  >
                    <img
                      src={
                        (personId === 'vijay' && profile.images.executivePortrait) ||
                        (personId === 'pavel' && profile.images.capSmile) ||
                        (personId === 'salman' && profile.images.iconicJacket) ||
                        profile.images.primary
                      }
                      alt={`${profile.name} Roots`}
                      className="w-full h-64 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                    <div
                      className="absolute bottom-3 left-4 font-mono text-xs"
                      style={{ color: profile.theme.primaryLight }}
                    >
                      EARLY ROOTS & INTELLECTUAL GENESIS
                    </div>
                  </div>
                )}

                <div className="flex items-center space-x-3 text-white">
                  <GraduationCap
                    className="w-5 h-5"
                    style={{ color: profile.theme.accent }}
                  />
                  <h3 className="font-editorial text-2xl font-bold uppercase">
                    Early Life & Roots
                  </h3>
                </div>

                <p className="font-sans text-base text-zinc-300 leading-relaxed font-light">
                  {profile.aboutData.earlyLife}
                </p>

                <div className="pt-4 border-t border-white/[0.08] space-y-2">
                  <div className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                    Academic Background & Training
                  </div>
                  <p className="font-sans text-sm text-zinc-300 leading-relaxed font-light">
                    {profile.aboutData.education}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Screen: Social Work & Philanthropy (TVK Welfare / Being Human / Privacy) */}
            <div className="lg:col-span-6 space-y-8">
              <div
                className="p-8 rounded-3xl border space-y-6"
                style={{
                  backgroundColor: profile.theme.panelBg,
                  borderColor: profile.theme.border
                }}
              >
                <div className="flex items-center space-x-3 text-white">
                  <Heart
                    className="w-5 h-5"
                    style={{ color: profile.theme.accent }}
                  />
                  <h3 className="font-editorial text-2xl font-bold uppercase">
                    {profile.aboutData.socialWorkTitle}
                  </h3>
                </div>

                <p className="font-sans text-base text-zinc-200 leading-relaxed font-light">
                  {profile.aboutData.socialWork}
                </p>

                <div className="pt-4 border-t border-white/10 flex items-center space-x-3 font-mono text-xs text-zinc-400">
                  <CheckCircle2
                    className="w-4 h-4"
                    style={{ color: profile.theme.accent }}
                  />
                  <span>Verified Public & Humanitarian Impact Record</span>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Switcher */}
          <div className="pt-8 flex justify-end">
            <button
              onClick={() => handleNav('contact')}
              className="px-8 py-3.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-black flex items-center space-x-3"
              style={{ backgroundColor: profile.theme.accent }}
            >
              <span>Access PR & Contact Portal</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}

      {/* =========================================================================
          SUBPAGE 5: CONTACT (GLASSMORPHISM PR FORM + BUREAU PHOTO)
      ========================================================================== */}
      {subpage === 'contact' && (
        <div className="subpage-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 space-y-12">
          
          <div className="space-y-3">
            <span
              className="font-mono text-xs uppercase tracking-widest"
              style={{ color: profile.theme.accent }}
            >
              OFFICIAL INQUIRIES & PR
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-bold uppercase text-white">
              Connect With {profile.name}
            </h2>
            <p className="font-sans text-base text-zinc-400 font-light max-w-2xl">
              Direct institutional protocol for press credentials, executive proposals, and verified communication.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left: Minimalist Glassmorphism Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleFormSubmit}
                className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/[0.08] backdrop-blur-xl space-y-6"
              >
                <div className="font-mono text-xs uppercase tracking-widest text-zinc-400 pb-2 border-b border-white/[0.08] flex items-center justify-between">
                  <span>DISPATCH TRANSMISSION</span>
                  <span className="text-emerald-400">SECURE ENCRYPTION</span>
                </div>

                {formSubmitted ? (
                  <div className="py-16 text-center space-y-4">
                    <CheckCircle2
                      className="w-12 h-12 mx-auto animate-bounce"
                      style={{ color: profile.theme.accent }}
                    />
                    <h4 className="font-editorial text-2xl font-bold text-white uppercase">
                      Transmission Received
                    </h4>
                    <p className="font-mono text-xs text-zinc-400 max-w-md mx-auto">
                      Your dossier dispatch has been logged in the executive communication queue. Verified follow-up will be dispatched to your email.
                    </p>
                  </div>
                ) : (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                          Full Name / Title
                        </label>
                        <div className="relative">
                          <User className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            value={formState.name}
                            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                            placeholder="e.g. Elena Rostova"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 font-sans text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                          Organization / Media Outlet
                        </label>
                        <div className="relative">
                          <Building className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                          <input
                            type="text"
                            required
                            value={formState.organization}
                            onChange={(e) => setFormState({ ...formState, organization: e.target.value })}
                            placeholder="e.g. Bloomberg / TVK Press"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 font-sans text-sm"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                          Official Email
                        </label>
                        <div className="relative">
                          <Mail className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5" />
                          <input
                            type="email"
                            required
                            value={formState.email}
                            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                            placeholder="press@domain.com"
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 font-sans text-sm"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                          Inquiry Nature
                        </label>
                        <select
                          value={formState.type}
                          onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#0e0e12] border border-white/10 text-white focus:outline-none focus:border-white/40 font-sans text-sm"
                        >
                          <option value="PR & Media">Press & Media Inquiries</option>
                          <option value="Institutional">Institutional Statecraft</option>
                          <option value="Humanitarian">Charitable / Philanthropy</option>
                          <option value="Venture">Technology & Protocol</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                        Transmission Dispatch Brief
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={formState.message}
                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                        placeholder="Detail the scope of inquiry, deadline, and official credential references..."
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-white/40 font-sans text-sm"
                      />
                    </div>

                    <button
                      type="submit"
                      onMouseEnter={() => soundFX.playHover()}
                      className="w-full py-4 rounded-xl font-mono text-xs font-bold uppercase tracking-widest text-black transition-all flex items-center justify-center space-x-2"
                      style={{ backgroundColor: profile.theme.accent }}
                    >
                      <Send className="w-4 h-4" />
                      <span>Transmit Official Inquiry</span>
                    </button>
                  </>
                )}
              </form>
            </div>

            {/* Right: Bold Official Social Links & Headquarters Photo */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Embed Formal Bureau Photo */}
              {profile.images && (
                <div
                  className="relative rounded-3xl overflow-hidden border max-h-72 shadow-2xl group"
                  style={{ borderColor: profile.theme.border }}
                >
                  <img
                    src={
                      (personId === 'vijay' && profile.images.walkingHallway) ||
                      (personId === 'pavel' && profile.images.techcrunch) ||
                      (personId === 'salman' && profile.images.blackSuit) ||
                      profile.images.primary
                    }
                    alt={`${profile.name} Bureau`}
                    className="w-full h-72 object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 font-mono text-xs text-zinc-200">
                    <div
                      className="text-[10px] uppercase font-bold"
                      style={{ color: profile.theme.accent }}
                    >
                      OFFICIAL BUREAU
                    </div>
                    <div className="font-bold text-white">{profile.contactInfo.office}</div>
                  </div>
                </div>
              )}

              <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.08] space-y-6">
                <div className="font-mono text-xs uppercase tracking-widest text-zinc-400">
                  VERIFIED CHANNELS // BOLD TYPOGRAPHY
                </div>

                <div className="space-y-4">
                  {profile.socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => soundFX.playHover()}
                      className="group flex items-center justify-between p-4 rounded-2xl bg-white/[0.02] border border-white/[0.04] hover:border-white/20 transition-all"
                    >
                      <div>
                        <div className="font-mono text-[10px] text-zinc-400 uppercase">
                          {link.platform}
                        </div>
                        <div
                          className="font-editorial text-lg font-bold group-hover:underline text-white"
                        >
                          {link.handle}
                        </div>
                      </div>
                      <ExternalLink
                        className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                        style={{ color: profile.theme.accent }}
                      />
                    </a>
                  ))}
                </div>

                {/* Headquarters Info */}
                <div className="pt-4 border-t border-white/[0.08] space-y-2 font-mono text-xs text-zinc-400">
                  <div className="text-white font-bold uppercase">
                    {profile.contactInfo.office}
                  </div>
                  <div className="flex items-start space-x-2">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
                    <span>{profile.contactInfo.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Mail className="w-3.5 h-3.5 text-zinc-500 shrink-0" />
                    <span>{profile.contactInfo.email}</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      )}

    </div>
  );
}
