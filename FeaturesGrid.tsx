"use client";
import React from 'react';
import { ScanLine, Layers, Zap } from 'lucide-react';

const modules = [
  {
    id: "01",
    title: "Diagnosis",
    tagline: "Know Your Business",
    desc: "24-question AI-powered health audit across 5 dimensions. Instant score. No signup.",
    icon: <ScanLine className="text-[#00F2FF]" size={24} />,
    active: true
  },
  {
    id: "02",
    title: "Strategy",
    tagline: "Build Your Roadmap",
    desc: "AI-generated strategic roadmap tailored to your industry, score, and goals.",
    icon: <Layers className="text-[#00F2FF]" size={24} />,
    active: false
  },
  {
    id: "03",
    title: "Workflow",
    tagline: "Execute With Precision",
    desc: "Step-by-step execution plans, task tracking, and progress monitoring.",
    icon: <Zap className="text-[#00F2FF]" size={24} />,
    active: false
  }
];

export const FeaturesGrid = ({ onStartAudit }: { onStartAudit: () => void }) => {
  return (
    <section className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="inline-block px-3 py-1 bg-[#00F2FF]/10 border border-[#00F2FF]/20 rounded-full text-[10px] text-[#00F2FF] font-bold mb-4">
            ● THE BIOS AI PLATFORM
          </span>
          <h2 className="text-4xl font-playfair text-white mb-4 italic">Three Modules. One Unified Intelligence.</h2>
          <p className="text-white/50 max-w-2xl">From diagnosis to strategy to execution — BIOS AI is your complete business operating system.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.id} className={`p-8 border rounded-lg transition-all relative group ${m.active ? 'bg-white/5 border-[#00F2FF]/30' : 'border-white/5 hover:border-white/20'}`}>
              <span className="absolute top-6 right-8 text-[10px] font-bold text-white/20 uppercase tracking-widest">{m.id}</span>
              <div className="w-12 h-12 rounded-full bg-[#00F2FF]/5 border border-[#00F2FF]/20 flex items-center justify-center mb-8">
                {m.icon}
              </div>
              <h3 className="text-xl font-playfair text-white mb-2">{m.title} <span className="text-sm font-sans font-normal text-white/40 block italic">{m.tagline}</span></h3>
              <p className="text-white/40 text-sm mb-8 leading-relaxed">{m.desc}</p>
              <button onClick={m.active ? onStartAudit : undefined} className="text-[#00F2FF] text-xs font-bold uppercase tracking-widest hover:gap-3 flex items-center gap-2 transition-all">
               <div className="flex items-center gap-2 text-[10px] tracking-widest uppercase font-bold 
                text-white 
                transition-all duration-300 
                hover:text-[#00F2FF] 
                cursor-pointer">
                <span>LEARN MORE</span>
                <span className="transition-transform duration-300 hover:translate-x-1">→</span>
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};