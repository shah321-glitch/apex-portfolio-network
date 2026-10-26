import React, { useState } from 'react';
import { Heart, Film, Award, Tv, Users, HeartHandshake, Star, ChevronRight, Activity } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

export default function SalmanInteractiveModule({ theme }) {
  const [activeTab, setActiveTab] = useState('charity'); // 'charity' | 'boxoffice'

  const charityMetrics = [
    {
      metric: '1,500+',
      label: 'Pediatric Heart Surgeries',
      sub: '100% funded for children from economically disadvantaged families across India.'
    },
    {
      metric: '25,000+',
      label: 'VEER Initiative Beneficiaries',
      sub: 'Vocational training and employment placement for Persons with Disabilities (PwDs).'
    },
    {
      metric: '1st in India',
      label: 'Bone Marrow Donor Registry Support',
      sub: 'Salman Khan was one of India\'s first high-profile citizens to donate bone marrow and champion MDRI.'
    },
    {
      metric: '500+ Cr',
      label: 'Being Human Retail Philanthropy',
      sub: 'Clothing and e-cycle royalties directly diverted to healthcare and education trusts.'
    }
  ];

  const cinematicAchievements = [
    {
      year: '1989',
      award: 'Filmfare Award for Best Male Debut',
      film: 'Maine Pyar Kiya',
      desc: 'Historic commercial blockbuster that revolutionized modern Bollywood romance and launched a four-decade megastardom.'
    },
    {
      year: '1998',
      award: 'Filmfare Award for Best Supporting Actor',
      film: 'Kuch Kuch Hota Hai',
      desc: 'Iconic performance as Aman Mehra that earned widespread critical praise and solidified his pan-India emotional resonance.'
    },
    {
      year: '2010 – Present',
      award: 'Television Kingpin // 15+ Seasons',
      film: 'Bigg Boss (India)',
      desc: 'The defining face of Indian reality television, commanding unmatched weekly viewership ratings and cultural influence.'
    },
    {
      year: 'Blockbuster Canon',
      award: '₹3,000+ Crore Box Office Club',
      film: 'Hum Aapke Hain Koun..!, Dabangg, Bajrangi Bhaijaan, Sultan',
      desc: 'Delivered some of the highest-grossing Indian cinematic spectacles in world cinema history.'
    }
  ];

  return (
    <div
      className="p-6 sm:p-8 rounded-3xl border transition-all duration-500 space-y-6"
      style={{
        backgroundColor: '#0c0a06',
        borderColor: 'rgba(245, 158, 11, 0.25)',
        boxShadow: '0 20px 40px -15px rgba(217, 119, 6, 0.15)'
      }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-amber-500/20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-amber-400 block">
            Philanthropic & Box Office Monolith
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
            Salman Khan: Altruism & Cinema Matrix
          </h3>
        </div>

        {/* Tab Toggle */}
        <div className="flex items-center space-x-1 p-1 rounded-full bg-black/60 border border-amber-500/30">
          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('charity');
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all ${
              activeTab === 'charity'
                ? 'bg-amber-500 text-black shadow-lg shadow-amber-500/40'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Being Human & VEER</span>
          </button>

          <button
            onClick={() => {
              soundFX.playClick();
              setActiveTab('boxoffice');
            }}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider font-bold transition-all ${
              activeTab === 'boxoffice'
                ? 'bg-amber-400 text-black shadow-lg shadow-amber-400/40'
                : 'text-zinc-400 hover:text-white'
            }`}
          >
            <Film className="w-3.5 h-3.5" />
            <span>Box Office Titan</span>
          </button>
        </div>
      </div>

      {/* Content based on Active Tab */}
      {activeTab === 'charity' ? (
        <div className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {charityMetrics.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-black/50 border border-amber-500/20 hover:border-amber-400/50 transition-all space-y-2"
              >
                <div className="flex items-baseline justify-between">
                  <span className="font-editorial text-3xl font-black text-amber-300">
                    {item.metric}
                  </span>
                  <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-teal-500/20 text-teal-300 uppercase tracking-widest">
                    Impact
                  </span>
                </div>
                <h4 className="font-mono text-xs font-bold text-white uppercase tracking-wider">
                  {item.label}
                </h4>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed font-light">
                  {item.sub}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center space-x-2 text-zinc-300">
              <HeartHandshake className="w-4 h-4 text-amber-400" />
              <span>Being Human Foundation registered under Public Trust Act • 100% Tax Exempt</span>
            </div>
            <span className="text-amber-400 font-bold hidden sm:inline">VEER INITIATIVE PARTNER</span>
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          {cinematicAchievements.map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-2xl bg-black/50 border border-white/5 hover:border-amber-500/30 transition-all space-y-2"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 font-mono text-xs">
                <div className="flex items-center space-x-2">
                  <span className="px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 font-bold">
                    {item.year}
                  </span>
                  <span className="text-white font-bold">{item.film}</span>
                </div>
                <span className="text-amber-400 text-[11px] uppercase tracking-wider font-semibold">
                  ★ {item.award}
                </span>
              </div>
              <p className="font-sans text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

