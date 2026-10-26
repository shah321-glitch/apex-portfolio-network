import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Search, X, Menu, ChevronDown, ArrowRight } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';
import { PROFILES_EXTENDED_DATA } from '../../data/profilesExtendedData';

export default function Header({
  currentRoute,
  onNavigateToHub,
  onNavigateToPersona
}) {
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeDropdown, setActiveDropdown] = useState(null); // 'home' | 'journey' | 'career' | 'about' | 'contact' | null
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpandedTab, setMobileExpandedTab] = useState(null);

  const searchRef = useRef(null);
  const navRef = useRef(null);

  const isHub = currentRoute.hub === 'main';
  const currentPerson = currentRoute.person || 'vijay';
  const currentSubpage = currentRoute.subpage || 'home';

  const handleSoundToggle = () => {
    const active = soundFX.toggle();
    setSoundEnabled(active);
    if (active) soundFX.playClick();
  };

  // Close dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchQuery('');
      }
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search database for quick jumping
  const searchDatabase = [
    { name: 'CM Vijay Thalapathy', person: 'vijay', subpage: 'home', tag: 'Chief Minister • Statecraft & Cinema' },
    { name: 'Vijay Assembly Victory 2026', person: 'vijay', subpage: 'journey', tag: 'TVK Political Swearing-in' },
    { name: 'Vijay $30M Contract (#69)', person: 'vijay', subpage: 'career', tag: 'Highest-Paid Actor Record' },
    { name: 'Pavel Durov', person: 'pavel', subpage: 'home', tag: 'CEO of Telegram • VKontakte Founder' },
    { name: 'Telegram 950M Active Users', person: 'pavel', subpage: 'career', tag: 'MTProto Cryptographic Citadel' },
    { name: 'Salman Khan', person: 'salman', subpage: 'home', tag: 'Megastar • Being Human Founder' },
    { name: 'Being Human & VEER Charity', person: 'salman', subpage: 'about', tag: 'Pediatric Surgeries & Altruism' },
    { name: 'Salman ₹3,000Cr+ Box Office', person: 'salman', subpage: 'career', tag: '100+ Commercial Films Canon' }
  ];

  const searchResults = searchQuery.trim() === ''
    ? []
    : searchDatabase.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.tag.toLowerCase().includes(searchQuery.toLowerCase())
      );

  const leaders = [
    {
      id: 'vijay',
      name: 'CM Vijay Thalapathy',
      short: 'Vijay',
      title: 'Chief Minister of Tamil Nadu',
      badge: 'Statecraft & Cinema',
      color: '#ef4444'
    },
    {
      id: 'pavel',
      name: 'Pavel Durov',
      short: 'Pavel',
      title: 'CEO & Founder of Telegram',
      badge: '950M+ Citadel',
      color: '#38bdf8'
    },
    {
      id: 'salman',
      name: 'Salman Khan',
      short: 'Salman',
      title: 'Box Office Titan & Being Human',
      badge: '₹3,000Cr+ Altruism',
      color: '#f59e0b'
    }
  ];

  const navTabs = [
    { id: 'home', label: 'HOME' },
    { id: 'journey', label: 'JOURNEY' },
    { id: 'career', label: 'CAREER' },
    { id: 'about', label: 'ABOUT' },
    { id: 'contact', label: 'CONTACT' }
  ];

  const handleTabClick = (tabId) => {
    soundFX.playTransition();
    if (tabId === 'home') {
      if (activeDropdown === 'home') {
        setActiveDropdown(null);
        onNavigateToHub();
      } else {
        setActiveDropdown('home');
      }
    } else {
      if (activeDropdown === tabId) {
        setActiveDropdown(null);
      } else {
        setActiveDropdown(tabId);
      }
    }
  };

  const selectLeaderForTab = (personId, tabId) => {
    soundFX.playTransition();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    if (tabId === 'home' && personId === 'hub') {
      onNavigateToHub();
    } else {
      onNavigateToPersona(personId, tabId);
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#0a0d14]/90 border-b border-white/[0.08] transition-all duration-300 shadow-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between">
        
        {/* =========================================================================
            LEFT: MINIMALIST GEOMETRIC LOGO & BRAND
        ========================================================================== */}
        <button
          onClick={() => {
            soundFX.playTransition();
            onNavigateToHub();
          }}
          onMouseEnter={() => soundFX.playHover()}
          className="group flex items-center space-x-3 text-left focus:outline-none cursor-pointer"
        >
          {/* Geometric square glyph */}
          <div className="w-9 h-9 rounded-lg border border-white/20 bg-white/[0.03] group-hover:border-white transition-all duration-300 flex items-center justify-center relative overflow-hidden">
            <svg
              className="w-5 h-5 text-white group-hover:scale-105 transition-transform"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <rect x="8" y="10" width="8" height="11" />
            </svg>
          </div>

          <div>
            <span className="block font-editorial text-sm sm:text-base font-bold tracking-[0.24em] uppercase text-white group-hover:text-amber-300 transition-colors">
              THE APEX
            </span>
            <span className="block font-mono text-[9px] tracking-[0.28em] uppercase text-zinc-400 -mt-0.5">
              PORTFOLIO NETWORK
            </span>
          </div>
        </button>

        {/* =========================================================================
            CENTER: RE-DESIGNED NAVIGATION TABS (HOME • JOURNEY • CAREER • ABOUT • CONTACT)
            With Interactive Dropdown for [Vijay, Pavel, Salman]
        ========================================================================== */}
        <nav ref={navRef} className="hidden lg:flex items-center space-x-7 font-mono text-xs tracking-[0.22em] uppercase text-zinc-400 relative">
          {navTabs.map((tab) => {
            const isActive = (!isHub && currentSubpage === tab.id) || (isHub && tab.id === 'home');
            const isDropdownOpen = activeDropdown === tab.id;

            return (
              <div
                key={tab.id}
                className="relative"
                onMouseEnter={() => setActiveDropdown(tab.id)}
              >
                <button
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex items-center space-x-1.5 py-2 transition-colors cursor-pointer relative ${
                    isActive ? 'text-white font-bold' : 'hover:text-white'
                  }`}
                >
                  <span>{tab.label}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-amber-400' : 'text-zinc-500'}`} />
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
                  )}
                </button>

                {/* Dropdown Menu for Vijay, Pavel, Salman on Every Tab */}
                {isDropdownOpen && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl bg-[#0c1017]/95 backdrop-blur-2xl border border-white/15 shadow-2xl p-2 z-50 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3 py-1 font-mono text-[9px] text-zinc-400 uppercase tracking-widest border-b border-white/5 flex justify-between">
                      <span>Select Leader:</span>
                      <span className="text-zinc-500">[{tab.label}]</span>
                    </div>

                    {/* For Home Tab, also offer Main Hub */}
                    {tab.id === 'home' && (
                      <button
                        onClick={() => selectLeaderForTab('hub', 'home')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <span className="block text-xs font-bold text-white group-hover:text-amber-300">
                            ★ The Main Hub (Tri-Cover)
                          </span>
                          <span className="block text-[10px] text-zinc-400 font-mono mt-0.5">
                            Combined Executive Editorial Network
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                      </button>
                    )}

                    {/* Three Leader Options */}
                    {leaders.map((leader) => (
                      <button
                        key={leader.id}
                        onClick={() => selectLeaderForTab(leader.id, tab.id)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: leader.color, boxShadow: `0 0 8px ${leader.color}` }}
                          />
                          <div>
                            <span className="block text-xs font-bold text-white group-hover:text-amber-300">
                              {leader.name}
                            </span>
                            <span className="block text-[10px] text-zinc-400 font-mono">
                              {tab.label} • {leader.badge}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white" />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* =========================================================================
            RIGHT: SEARCH INPUT PILL & AUDIO CONTROLS
        ========================================================================== */}
        <div className="flex items-center space-x-3" ref={searchRef}>
          
          {/* Sleek Search Input Pill */}
          <div className="relative">
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white/[0.06] border border-white/10 hover:border-white/20 focus-within:border-white/40 transition-all text-xs font-mono">
              <Search className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
              <input
                type="text"
                placeholder="SEARCH..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-white placeholder-zinc-500 focus:outline-none w-20 sm:w-28 uppercase text-[11px] tracking-wider"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-zinc-400 hover:text-white cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Live Instant Search Dropdown */}
            {searchQuery && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-[#0d1117]/95 backdrop-blur-2xl border border-white/15 shadow-2xl p-2 z-50 space-y-1">
                <div className="px-3 py-1.5 font-mono text-[10px] text-zinc-400 uppercase tracking-widest border-b border-white/5 flex justify-between">
                  <span>Search Results</span>
                  <span>{searchResults.length} Matches</span>
                </div>
                {searchResults.length > 0 ? (
                  searchResults.map((item, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        soundFX.playTransition();
                        onNavigateToPersona(item.person, item.subpage);
                        setSearchQuery('');
                      }}
                      className="w-full text-left p-2.5 rounded-xl hover:bg-white/10 transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <span className="block text-xs font-bold text-white group-hover:text-amber-300 transition-colors">
                          {item.name}
                        </span>
                        <span className="block text-[10px] text-zinc-400 font-mono mt-0.5">
                          {item.tag}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-white transition-colors" />
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-center text-xs font-mono text-zinc-400">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Web Audio Toggle */}
          <button
            onClick={handleSoundToggle}
            onMouseEnter={() => soundFX.playHover()}
            title={soundEnabled ? "Mute Web Audio" : "Enable Web Audio Interactions"}
            className={`w-8 h-8 rounded-md border flex items-center justify-center transition-all cursor-pointer ${
              soundEnabled
                ? 'border-amber-400/60 bg-amber-400/10 text-amber-300'
                : 'border-white/15 bg-white/5 text-zinc-400 hover:text-white hover:border-white/30'
            }`}
          >
            {soundEnabled ? (
              <Volume2 className="w-3.5 h-3.5 animate-pulse" />
            ) : (
              <VolumeX className="w-3.5 h-3.5" />
            )}
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-zinc-400 hover:text-white cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer (Complete with Vijay, Pavel, Salman on each page) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#090b10] px-4 py-4 space-y-3 font-mono text-xs uppercase tracking-widest">
          {navTabs.map((tab) => {
            const isExpanded = mobileExpandedTab === tab.id;

            return (
              <div key={tab.id} className="border-b border-white/5 pb-2">
                <button
                  onClick={() => setMobileExpandedTab(isExpanded ? null : tab.id)}
                  className="w-full flex items-center justify-between py-2 text-zinc-300 hover:text-white font-bold"
                >
                  <span>{tab.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-amber-400' : 'text-zinc-500'}`} />
                </button>

                {isExpanded && (
                  <div className="pl-3 py-1 space-y-1.5 border-l border-white/10 my-1">
                    {tab.id === 'home' && (
                      <button
                        onClick={() => selectLeaderForTab('hub', 'home')}
                        className="block w-full text-left py-1.5 text-[11px] text-amber-300 hover:text-white"
                      >
                        ★ The Main Hub (Tri-Cover)
                      </button>
                    )}
                    {leaders.map((leader) => (
                      <button
                        key={leader.id}
                        onClick={() => selectLeaderForTab(leader.id, tab.id)}
                        className="flex items-center space-x-2 w-full text-left py-1.5 text-[11px] text-zinc-300 hover:text-white"
                      >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: leader.color }} />
                        <span>{leader.name}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

    </header>
  );
}
