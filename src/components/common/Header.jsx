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
    <header className="sticky top-0 z-50 w-full backdrop-blur-2xl bg-[#DDE0F8]/85 border-b border-[#C1C6EB] transition-all duration-300 shadow-[0_4px_25px_rgba(80,90,160,0.08)]">
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
          <div className="w-9 h-9 rounded-lg border border-[#A6ADE2] bg-white/70 group-hover:border-[#4f46e5] group-hover:bg-white transition-all duration-300 flex items-center justify-center relative overflow-hidden shadow-sm">
            <svg
              className="w-5 h-5 text-[#0f132a] group-hover:scale-105 transition-transform"
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
            <span className="block font-editorial text-sm sm:text-base font-bold tracking-[0.24em] uppercase text-[#0f132a] group-hover:text-indigo-600 transition-colors">
              THE APEX
            </span>
            <span className="block font-mono text-[9px] tracking-[0.28em] uppercase text-[#474e79] -mt-0.5">
              PORTFOLIO NETWORK
            </span>
          </div>
        </button>

        {/* =========================================================================
            CENTER: RE-DESIGNED NAVIGATION TABS (HOME • JOURNEY • CAREER • ABOUT • CONTACT)
            With Interactive Dropdown for [Vijay, Pavel, Salman]
        ========================================================================== */}
        <nav ref={navRef} className="hidden lg:flex items-center space-x-7 font-mono text-xs tracking-[0.22em] uppercase text-[#3c426e] relative">
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
                    isActive ? 'text-[#0f132a] font-bold' : 'hover:text-[#0f132a]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-indigo-600' : 'text-[#646b9a]'}`} />
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-indigo-600 rounded-full shadow-[0_0_8px_rgba(79,70,229,0.7)]" />
                  )}
                </button>

                {/* Dropdown Menu for Vijay, Pavel, Salman on Every Tab */}
                {isDropdownOpen && (
                  <div
                    onMouseLeave={() => setActiveDropdown(null)}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-64 rounded-2xl bg-white/95 backdrop-blur-2xl border border-[#C1C6EB] shadow-[0_20px_50px_rgba(80,90,160,0.22)] p-2 z-50 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150"
                  >
                    <div className="px-3 py-1 font-mono text-[9px] text-[#515783] uppercase tracking-widest border-b border-[#E1E4F8] flex justify-between">
                      <span>Select Leader:</span>
                      <span className="text-[#71779e]">[{tab.label}]</span>
                    </div>

                    {/* For Home Tab, also offer Main Hub */}
                    {tab.id === 'home' && (
                      <button
                        onClick={() => selectLeaderForTab('hub', 'home')}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[#EFF1FD] transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div>
                          <span className="block text-xs font-bold text-[#0f132a] group-hover:text-indigo-600">
                            ★ The Main Hub (Tri-Cover)
                          </span>
                          <span className="block text-[10px] text-[#515783] font-mono mt-0.5">
                            Combined Executive Editorial Network
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#71779e] group-hover:text-indigo-600" />
                      </button>
                    )}

                    {/* Three Leader Options */}
                    {leaders.map((leader) => (
                      <button
                        key={leader.id}
                        onClick={() => selectLeaderForTab(leader.id, tab.id)}
                        className="w-full text-left p-2.5 rounded-xl hover:bg-[#EFF1FD] transition-colors flex items-center justify-between group cursor-pointer"
                      >
                        <div className="flex items-center space-x-2.5">
                          <span
                            className="w-2 h-2 rounded-full shrink-0"
                            style={{ backgroundColor: leader.color, boxShadow: `0 0 8px ${leader.color}` }}
                          />
                          <div>
                            <span className="block text-xs font-bold text-[#0f132a] group-hover:text-indigo-600">
                              {leader.name}
                            </span>
                            <span className="block text-[10px] text-[#515783] font-mono">
                              {tab.label} • {leader.badge}
                            </span>
                          </div>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-[#71779e] group-hover:text-indigo-600" />
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
            <div className="flex items-center space-x-2 px-3 py-1.5 rounded-md bg-white/70 border border-[#C1C6EB] hover:border-indigo-400 focus-within:border-indigo-600 focus-within:bg-white transition-all text-xs font-mono shadow-sm">
              <Search className="w-3.5 h-3.5 text-[#515783] shrink-0" />
              <input
                type="text"
                placeholder="SEARCH..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-[#0f132a] placeholder-[#737ba8] focus:outline-none w-20 sm:w-28 uppercase text-[11px] tracking-wider"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="text-[#515783] hover:text-[#0f132a] cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* Live Instant Search Dropdown */}
            {searchQuery && (
              <div className="absolute right-0 mt-2 w-72 sm:w-80 rounded-2xl bg-white/95 backdrop-blur-2xl border border-[#C1C6EB] shadow-[0_20px_50px_rgba(80,90,160,0.22)] p-2 z-50 space-y-1">
                <div className="px-3 py-1.5 font-mono text-[10px] text-[#515783] uppercase tracking-widest border-b border-[#E1E4F8] flex justify-between">
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
                      className="w-full text-left p-2.5 rounded-xl hover:bg-[#EFF1FD] transition-colors flex items-center justify-between group cursor-pointer"
                    >
                      <div>
                        <span className="block text-xs font-bold text-[#0f132a] group-hover:text-indigo-600 transition-colors">
                          {item.name}
                        </span>
                        <span className="block text-[10px] text-[#515783] font-mono mt-0.5">
                          {item.tag}
                        </span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5 text-[#71779e] group-hover:text-indigo-600 transition-colors" />
                    </button>
                  ))
                ) : (
                  <div className="p-3 text-center text-xs font-mono text-[#515783]">
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
            className={`w-8 h-8 rounded-md border flex items-center justify-center transition-all cursor-pointer shadow-sm ${
              soundEnabled
                ? 'border-indigo-500 bg-indigo-100 text-indigo-700'
                : 'border-[#C1C6EB] bg-white/70 text-[#3b416e] hover:text-[#0f132a] hover:bg-white hover:border-[#9DA5DE]'
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
            className="lg:hidden p-2 text-[#0f132a] hover:text-indigo-600 cursor-pointer"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

        </div>

      </div>

      {/* Mobile Menu Drawer (Complete with Vijay, Pavel, Salman on each page) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#C1C6EB] bg-[#EFF1FD] px-4 py-4 space-y-3 font-mono text-xs uppercase tracking-widest shadow-lg">
          {navTabs.map((tab) => {
            const isExpanded = mobileExpandedTab === tab.id;

            return (
              <div key={tab.id} className="border-b border-[#D8DCF7] pb-2">
                <button
                  onClick={() => setMobileExpandedTab(isExpanded ? null : tab.id)}
                  className="w-full flex items-center justify-between py-2 text-[#0f132a] hover:text-indigo-600 font-bold"
                >
                  <span>{tab.label}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180 text-indigo-600' : 'text-[#71779e]'}`} />
                </button>

                {isExpanded && (
                  <div className="pl-3 py-1 space-y-1.5 border-l-2 border-indigo-500 my-1">
                    {tab.id === 'home' && (
                      <button
                        onClick={() => selectLeaderForTab('hub', 'home')}
                        className="block w-full text-left py-1.5 text-[11px] text-indigo-600 hover:text-indigo-800 font-bold"
                      >
                        ★ The Main Hub (Tri-Cover)
                      </button>
                    )}
                    {leaders.map((leader) => (
                      <button
                        key={leader.id}
                        onClick={() => selectLeaderForTab(leader.id, tab.id)}
                        className="flex items-center space-x-2 w-full text-left py-1.5 text-[11px] text-[#2c325c] hover:text-[#0f132a]"
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
