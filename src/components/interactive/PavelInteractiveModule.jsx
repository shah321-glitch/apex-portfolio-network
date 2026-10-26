import React, { useState } from 'react';
import { Send, Shield, Lock, Terminal, Radio, Users, CheckCheck, Eye, Sparkles, Cpu } from 'lucide-react';
import { soundFX } from '../../utils/soundFX';

export default function PavelInteractiveModule({ theme }) {
  const [activeMessageIndex, setActiveMessageIndex] = useState(0);

  const telegramDispatches = [
    {
      date: 'OCTOBER 2026',
      views: '4.8M',
      text: 'Telegram has officially crossed 950 million active users. In 13 years, we have spent precisely $0 on paid advertising or marketing campaigns. Every single user joined because of privacy, speed, and genuine respect for human liberty.',
      tag: 'Scale & Growth'
    },
    {
      date: 'SEPTEMBER 2026',
      views: '3.9M',
      text: 'Privacy is not for sale, and digital rights should never be compromised out of bureaucratic fear. We built Telegram with proprietary MTProto encryption so that no corporation or government can eavesdrop on private human thought.',
      tag: 'Cryptographic Privacy'
    },
    {
      date: 'HISTORIC ARCHIVE',
      views: '2.4M',
      text: 'From writing code in a university dorm room at Saint Petersburg State University (graduated with honors in Philology, 2006) to building VKontakte into Europe\'s top social platform, and then defending user sovereignty with Telegram: freedom is the only non-negotiable metric.',
      tag: 'VK to Telegram Odyssey'
    }
  ];

  return (
    <div
      className="p-6 sm:p-8 rounded-3xl border transition-all duration-500 space-y-6"
      style={{
        backgroundColor: '#040912',
        borderColor: 'rgba(56, 189, 248, 0.25)',
        boxShadow: '0 20px 40px -15px rgba(2, 132, 199, 0.15)'
      }}
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-500/20">
        <div>
          <span className="font-mono text-xs uppercase tracking-widest text-sky-400 block">
            Cryptographic Node // MTProto Protocol
          </span>
          <h3 className="font-editorial text-2xl sm:text-3xl font-bold uppercase text-white mt-1">
            Pavel Durov: Telegram Live Dispatch
          </h3>
        </div>

        {/* Live Network Status Indicator */}
        <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-sky-950/40 border border-sky-400/30 text-sky-300 font-mono text-xs">
          <span className="w-2 h-2 rounded-full bg-sky-400 animate-ping" />
          <span className="font-bold tracking-wider">CHANNEL: @durov [VERIFIED]</span>
        </div>
      </div>

      {/* Network Metrics Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <div className="p-3.5 rounded-2xl bg-black/50 border border-sky-500/20">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Active Users</span>
          <span className="font-editorial text-xl sm:text-2xl font-black text-sky-300 mt-1 block">950M+ MAU</span>
          <span className="font-mono text-[10px] text-zinc-300 block">100% Organic Growth</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/50 border border-sky-500/20">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Marketing Spend</span>
          <span className="font-editorial text-xl sm:text-2xl font-black text-white mt-1 block">$0.00</span>
          <span className="font-mono text-[10px] text-emerald-400 block">Zero Venture Debt</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/50 border border-sky-500/20">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">VKontakte Tenure</span>
          <span className="font-editorial text-xl sm:text-2xl font-black text-white mt-1 block">2006 – 2014</span>
          <span className="font-mono text-[10px] text-zinc-300 block">Co-Founder & CEO</span>
        </div>

        <div className="p-3.5 rounded-2xl bg-black/50 border border-sky-500/20">
          <span className="font-mono text-[10px] text-zinc-400 uppercase tracking-widest block">Alma Mater</span>
          <span className="font-editorial text-xl sm:text-2xl font-black text-white mt-1 block">SPbSU (2006)</span>
          <span className="font-mono text-[10px] text-sky-400 block">Honors in Philology</span>
        </div>
      </div>

      {/* Interactive Telegram Message Viewer */}
      <div className="space-y-3">
        <div className="flex items-center justify-between font-mono text-xs text-zinc-400">
          <span className="uppercase tracking-widest flex items-center space-x-1.5">
            <Send className="w-3.5 h-3.5 text-sky-400" />
            <span>Select Dispatch to Decrypt:</span>
          </span>
          <span>Click any dispatch below</span>
        </div>

        <div className="space-y-3">
          {telegramDispatches.map((dispatch, idx) => {
            const isSelected = activeMessageIndex === idx;
            return (
              <div
                key={idx}
                onClick={() => {
                  soundFX.playClick();
                  setActiveMessageIndex(idx);
                }}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 ${
                  isSelected
                    ? 'bg-sky-950/40 border-2 border-sky-400 shadow-lg shadow-sky-500/20 scale-[1.01]'
                    : 'bg-black/40 border border-white/5 hover:border-sky-500/30 opacity-80 hover:opacity-100'
                }`}
              >
                <div className="flex items-center justify-between font-mono text-xs pb-2 border-b border-white/5">
                  <div className="flex items-center space-x-2">
                    <span className="font-bold text-sky-400">Pavel Durov</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 font-mono">
                      {dispatch.tag}
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 text-zinc-400 text-[10px]">
                    <span className="flex items-center space-x-1">
                      <Eye className="w-3 h-3" />
                      <span>{dispatch.views}</span>
                    </span>
                    <span>{dispatch.date}</span>
                    <CheckCheck className="w-3.5 h-3.5 text-sky-400" />
                  </div>
                </div>

                <p className="font-sans text-sm sm:text-base text-zinc-200 leading-relaxed font-light mt-3">
                  "{dispatch.text}"
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

