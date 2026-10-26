import React, { useState } from 'react';
import { Landmark, Film, Award, Users, CheckCircle, ChevronRight, Sparkles, Shield, HeartHandshake, TrendingUp } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

export default function VijayInteractiveModule({ theme }) {
  const [activeTab, setActiveTab] = useState('governance'); // 'governance' | 'cinema'

  const governancePillars = [
    {
      title: 'Universal Digital Education',
      desc: 'Smart classrooms across all 38 districts of Tamil Nadu with AI curriculum integration.',
      tag: 'Policy #1'
    },
    {
      title: 'Universal Healthcare & Welfare',
      desc: 'Free primary diagnostic care and doorstep medical access for elderly and rural families.',
      tag: 'Policy #2'
    },
    {
      title: 'Farmer Welfare & Water Security',
      desc: 'Automated canal modernization, minimum support prices, and organic agriculture subsidies.',
      tag: 'Policy #3'
    },
    {
      title: 'Women Empowerment & Micro-Grants',
      desc: 'Zero-interest business credit lines for self-help groups and women-led rural cooperatives.',
      tag: 'Policy #4'
    }
  ];

  const cinemaMilestones = [
    {
      year: '2026',
      title: 'Thalapathy 69 Historic Milestone',
      desc: 'Reportedly contracted for over $30 Million (₹250+ Cr), making him India\'s highest-paid actor before entering full-time statecraft.',
      badge: 'All-Time Record'
    },
    {
      year: '2024',
      title: 'Formation of TVK Party',
      desc: 'Officially launched Tamilaga Vettri Kazhagam (TVK) in February 2024 with a historic cadre membership drive.',
      badge: 'Political Genesis'
    },
    {
      year: '1998',
      title: 'Kalaimaamani State Award',
      desc: 'Conferred the prestigious Kalaimaamani Award by the Government of Tamil Nadu for cultural cinema excellence.',
      badge: 'State Honor'
    },
    {
      year: '1992',
      title: 'Lead Acting Debut: Naalaiya Theerpu',
      desc: 'Launched a monumental 34-year cinematic reign spanning 68 feature films with historic box office pull.',
      badge: 'Debut'
    }
  ];

  return (
    <div
      className="p-6 sm:p-8 rounded-3xl border transition-all duration-500 space-y-6"
      style={{
        backgroundColor: '#0d0707',
        borderColor: 'rgba(239, 68, 68, 0.25)',
        boxShadow: '0 20px 40px -15px rgba(220, 38, 38, 0.15)'
      }}
    >
      {/* Header & Mode Switcher */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-red-500/20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-red-400 block">
            Interactive Dossier Lens
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
            CM Vijay Thalapathy: Dual Impact Deck
          </h3>
        </div>

        {/* Dual Mode Switcher Tabs */}
        <div className="flex items-center space-x-1 p-1 rounded-full bg-black/60 border border-red-500/30">
          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('governance');
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all ${
              activeTab === 'governance'
                ? 'bg-red-600 text-white shadow-lg shadow-red-600/40'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Landmark className="w-3.5 h-3.5" />
            <span>Statecraft (CM)</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('cinema');
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all ${
              activeTab === 'cinema'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/40'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Cinema Titan</span>
          </button>
        </div>
      </div>

      {/* Content based on Active Tab */}
      {activeTab === 'governance' ? (
        <div className="space-y-6">
          {/* Top Banner: Swearing-in & Mandate */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Official Mandate</span>
              <span className="font-editorial text-2xl font-black text-white mt-1 block">Chief Minister</span>
              <span className="font-mono text-xs text-red-400 mt-1 block">Sworn in May 10, 2026</span>
            </div>

            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Political Vehicle</span>
              <span className="font-editorial text-2xl font-black text-white mt-1 block">TVK Party</span>
              <span className="font-mono text-xs text-zinc-300 mt-1 block">Founded February 2024</span>
            </div>

            <div className="p-4 rounded-2xl bg-red-950/20 border border-red-500/30">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Grassroots Base</span>
              <span className="font-editorial text-2xl font-black text-white mt-1 block">3,000+ Units</span>
              <span className="font-mono text-xs text-amber-400 mt-1 block">Vijay Makkal Iyakkam</span>
            </div>
          </div>

          {/* 4 Governance Pillars */}
          <div>
            <h4 className="font-mono text-xs text-zinc-400 uppercase tracking-widest mb-3 flex items-center space-x-2">
              <Shield className="w-3.5 h-3.5 text-red-400" />
              <span>Core Governance Directives (2026 Mandate)</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {governancePillars.map((p, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-red-500/30 transition-all space-y-1.5"
                >
                  <div className="flex items-center justify-between font-mono text-[11px]">
                    <span className="text-white font-bold">{p.title}</span>
                    <span className="px-2 py-0.5 rounded bg-red-500/10 text-red-400 text-[10px]">{p.tag}</span>
                  </div>
                  <p className="font-sans text-xs text-zinc-300 leading-relaxed font-light">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Top Banner: Box Office Power */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Remuneration Record</span>
              <span className="font-editorial text-2xl font-black text-amber-300 mt-1 block">$30M+ (₹250Cr+)</span>
              <span className="font-mono text-xs text-zinc-400 mt-1 block">Thalapathy 69 (#69 Film)</span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Cinematic Canon</span>
              <span className="font-editorial text-2xl font-black text-white mt-1 block">68 Feature Films</span>
              <span className="font-mono text-xs text-zinc-300 mt-1 block">34-Year Dominant Run</span>
            </div>

            <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30">
              <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">State Accolade</span>
              <span className="font-editorial text-2xl font-black text-white mt-1 block">Kalaimaamani</span>
              <span className="font-mono text-xs text-amber-400 mt-1 block">Conferred 1998</span>
            </div>
          </div>

          {/* Chronological Cinema Milestones */}
          <div className="space-y-3">
            {cinemaMilestones.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/40 border border-white/5 hover:border-amber-500/30 transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-start sm:items-center space-x-3">
                  <span className="font-mono text-sm font-bold text-amber-400 px-2.5 py-1 rounded bg-amber-400/10 border border-amber-400/20">
                    {item.year}
                  </span>
                  <div>
                    <span className="font-editorial text-base font-bold text-white block">
                      {item.title}
                    </span>
                    <span className="font-sans text-xs text-zinc-300 leading-relaxed font-light block">
                      {item.desc}
                    </span>
                  </div>
                </div>
                <span className="self-start sm:self-auto px-2.5 py-1 rounded-full font-mono text-[10px] uppercase tracking-wider bg-white/5 text-zinc-300 border border-white/10 shrink-0">
                  {item.badge}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

