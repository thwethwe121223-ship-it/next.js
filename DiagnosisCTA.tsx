"use client";
import React from 'react';

export const DiagnosisCTA = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto bg-gradient-to-b from-[#0A0A0A] to-[#050505] border border-[#00F2FF]/20 rounded-[2rem] p-12 text-center relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-[#00F2FF]/10 blur-[120px]" />
        
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to See Your <span className="text-[#00F2FF]">Business Strategy?</span>
        </h2>
        <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Unlock your business potential with our AI-driven insights. 
          Start your comprehensive audit today and get a personalized roadmap for growth.
        </p>
        
        {/* Diagnosis Form CTA Button */}
        <button className="bg-[#00F2FF] text-black font-extrabold py-4 px-10 rounded-full hover:scale-105 hover:shadow-[0_0_30px_rgba(0,242,255,0.4)] transition-all duration-300 uppercase tracking-wide">
          Start Free Diagnosis Audit
        </button>
      </div>
    </section>
  );
};