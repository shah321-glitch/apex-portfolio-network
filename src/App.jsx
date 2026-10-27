import React, { useState, useEffect, useRef } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import CustomCursor from './components/common/CustomCursor';
import GlobalCanvas from './components/3d/GlobalCanvas';
import HomePage from './components/pages/HomePage';
import PersonaPortfolioView from './components/portfolio/PersonaPortfolioView';

export default function App() {
  // route: { hub: 'main' | 'persona', person: 'vijay' | 'pavel' | 'salman', subpage: 'home' | 'journey' | 'career' | 'about' | 'contact' }
  const [route, setRoute] = useState({
    hub: 'main',
    person: 'vijay',
    subpage: 'home'
  });

  const mouseRef = useRef({ x: 0, y: 0 });

  // Parse and sync hash routing
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '').trim();
      if (!hash || hash === 'home') {
        setRoute({ hub: 'main', person: 'vijay', subpage: 'home' });
        return;
      }

      const parts = hash.split('/');
      const personKey = parts[0].toLowerCase();
      const subpageKey = (parts[1] || 'home').toLowerCase();

      if (['vijay', 'pavel', 'salman'].includes(personKey)) {
        setRoute({
          hub: 'persona',
          person: personKey,
          subpage: ['home', 'journey', 'career', 'about', 'contact'].includes(subpageKey)
            ? subpageKey
            : 'home'
        });
      } else {
        setRoute({ hub: 'main', person: 'vijay', subpage: 'home' });
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToHub = () => {
    window.location.hash = '';
    setRoute({ hub: 'main', person: 'vijay', subpage: 'home' });
  };

  const navigateToPersona = (person, subpage = 'home') => {
    window.location.hash = subpage === 'home' ? `#${person}` : `#${person}/${subpage}`;
    setRoute({ hub: 'persona', person, subpage });
  };

  const setSubpage = (subpage) => {
    window.location.hash = subpage === 'home' ? `#${route.person}` : `#${route.person}/${subpage}`;
    setRoute((prev) => ({ ...prev, subpage }));
  };

  // Global mouse coordinates for parallax
  useEffect(() => {
    const onMouseMove = (e) => {
      mouseRef.current = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1
      };
    };
    window.addEventListener('mousemove', onMouseMove);
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#DDE0F8] text-[#0f132a] overflow-x-hidden selection:bg-[#4f46e5] selection:text-white">
      
      {/* Editorial Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none z-40 editorial-grain" />

      {/* Subtle Scanlines Overlay */}
      <div className="fixed inset-0 pointer-events-none z-30 opacity-20 editorial-scanlines" />

      {/* Ambient 3D Three.js WebGL Canvas */}
      <GlobalCanvas mouseRef={mouseRef} />

      {/* High-End Fluid Follower Cursor */}
      <CustomCursor />

      {/* Main Layout Container */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header
          currentRoute={route}
          onNavigateToHub={navigateToHub}
          onNavigateToPersona={navigateToPersona}
        />

        <main className="flex-grow">
          {route.hub === 'main' ? (
            <HomePage onSelectPersona={(person) => navigateToPersona(person, 'home')} />
          ) : (
            <PersonaPortfolioView
              personId={route.person}
              subpage={route.subpage}
              setSubpage={setSubpage}
              onBackToHub={navigateToHub}
            />
          )}
        </main>

        <Footer
          onNavigateToHub={navigateToHub}
          onNavigateToPersona={navigateToPersona}
        />
      </div>

    </div>
  );
}
