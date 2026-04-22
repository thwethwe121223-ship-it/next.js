"use client";
import React from 'react';
import { ShieldCheck, CreditCard, Zap } from 'lucide-react';

export const Hero = ({ onStartAudit }: { onStartAudit: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-[#0D1117]">
      {/* Background Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(0,242,255,0.05)_0%,transparent_70%)]" />

      <div className="max-w-7xl mx-auto text-center relative z-10">
        <span className="inline-block px-4 py-1.5 rounded-full border border-[#00F2FF]/20 bg-[#00F2FF]/5 text-[#00F2FF] text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
          Your AI Strategic Co-founder
        </span>
        
        <h1 className="text-5xl md:text-8xl font-playfair italic text-white mb-8 leading-tight">
          THE AI-POWERED <br /> BUSINESS OPERATING SYSTEM
        </h1>
        
        <p className="max-w-2xl mx-auto text-white/50 text-lg md:text-xl mb-12 font-sans leading-relaxed">
          Scale your business with precision. Our BIOS-Insight-v1 agent guides you through a 24-question strategic audit to identify weaknesses and unlock growth.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20">
          <button 
            onClick={onStartAudit}
            className="w-full md:w-auto bg-[#00F2FF] text-black px-10 py-4 rounded-sm font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(0,242,255,0.4)] hover:shadow-[0_0_30px_rgba(0,242,255,0.6)] transition-all"
          >
            Start Free Audit
          </button>
          <button className="w-full md:w-auto border border-white/10 text-white px-10 py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-white/5 transition-all">
            Book a Demo
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 pt-10 border-t border-white/5">
          <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase tracking-widest font-bold">
            <ShieldCheck size={16} className="text-[#00F2FF]" /> AES-256 Encrypted
          </div>
          <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase tracking-widest font-bold">
            <Zap size={16} className="text-[#00F2FF]" /> No Signup Required
          </div>
          <div className="flex items-center gap-3 text-white/30 text-[10px] uppercase tracking-widest font-bold">
            <CreditCard size={16} className="text-[#00F2FF]" /> No Credit Card Needed
          </div>
        </div>
      </div>
    </section>
  );
};