"use client";
import React from 'react';

export const DashboardPreview = () => {
  return (
    <section className="py-24 px-6 bg-[#020202]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
            Strategic <span className="text-[#00F2FF]">Insights Dashboard</span>
          </h2>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Preview how our AI analyzes your business metrics and generates automated growth roadmaps.
          </p>
        </div>

        {/* Dashboard Mockup Container */}
        <div className="relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-4 md:p-8 shadow-[0_0_50px_rgba(0,242,255,0.05)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Metric Card 1 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <p className="text-white/40 text-sm mb-2">Efficiency Score</p>
              <h3 className="text-3xl font-bold text-[#00F2FF]">84%</h3>
              <div className="w-full bg-white/10 h-2 rounded-full mt-4">
                <div className="bg-[#00F2FF] h-full rounded-full w-[84%]" />
              </div>
            </div>

            {/* Metric Card 2 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <p className="text-white/40 text-sm mb-2">Market Opportunity</p>
              <h3 className="text-3xl font-bold text-[#f59e0b]">High</h3>
              <p className="text-xs text-[#f59e0b]/60 mt-4">+12.5% vs last month</p>
            </div>

            {/* Metric Card 3 */}
            <div className="bg-white/5 border border-white/5 rounded-2xl p-6">
              <p className="text-white/40 text-sm mb-2">AI Strategy Status</p>
              <h3 className="text-3xl font-bold text-green-400">Optimized</h3>
              <p className="text-xs text-green-400/60 mt-4">Roadmap Ready</p>
            </div>

            {/* Large Roadmap Preview Area */}
            <div className="md:col-span-3 bg-white/5 border border-white/5 rounded-2xl p-8 mt-4">
              <h4 className="text-white font-semibold mb-6">Automated Roadmap Preview</h4>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5">
                    <div className="w-8 h-8 rounded-full bg-[#00F2FF]/20 flex items-center justify-center text-[#00F2FF] text-xs font-bold">
                      {i}
                    </div>
                    <div className="h-2 bg-white/10 rounded-full w-3/4" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating Glow Effect */}
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#00F2FF]/10 blur-[100px] -z-10" />
        </div>
      </div>
    </section>
  );
};