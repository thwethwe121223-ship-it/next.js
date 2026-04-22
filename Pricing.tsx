"use client";
import React from 'react';

const plans = [
  { name: "Free", price: "0", features: ["24-Question Diagnosis", "Basic Scorecard (PDF)", "General Benchmarking"], popular: false },
  { name: "Starter", price: "5", features: ["Weekly Reassessments", "Tailored Action Plan", "Email Support"], popular: false },
  { name: "Pro Business", price: "25", features: ["Full Modules 1, 2 & 3", "Dynamic Re-routing", "Team Collaboration Tools"], popular: true },
  { name: "Enterprise", price: "Custom", features: ["Custom AI Agent Integration", "Competitor Intelligence", "Enterprise Security"], popular: false }
];

export const Pricing = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#0D1117]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-playfair italic text-white mb-4">Choose Your Scale</h2>
          <p className="text-white/40">Simple, transparent pricing for growing Myanmar SMEs.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan) => (
  <div 
    key={plan.name} 
    className={`p-8 border rounded-lg flex flex-col transition-all duration-300 
      ${plan.popular 
        ? 'bg-[#0a0a0a] border-[#00F2FF] shadow-[0_0_25px_rgba(0,242,255,0.15)]' 
        : 'bg-[#050505] border-white/10'
      }`}
  >
              <div className="mb-8">
                <h3 className="text-white font-bold text-lg mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-bold text-white">{plan.price === "Custom" ? "" : "$"}{plan.price}</span>
                  {plan.price !== "Custom" && <span className="text-white/30 text-xs">/mo</span>}
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="text-white/50 text-xs flex items-start gap-3 italic">
                    <span className="text-[#00F2FF]">✓</span> {f}
                  </li>
                ))}
              </ul>
           <button 
      className={`w-full py-3 rounded-lg border font-bold transition-all duration-300 
        hover:-translate-y-1 active:scale-95 
        ${plan.popular 
          ? 'bg-[#00F2FF] border-[#00F2FF] text-black shadow-[0_5px_15px_rgba(0,242,255,0.3)]' 
          : 'border-[#00F2FF]/50 text-[#00F2FF] hover:bg-[#00F2FF] hover:text-black' 
        }`}
    >
      SELECT PLAN
    </button>
  </div>
))}
        </div>
      </div>
    </section>
  );
};