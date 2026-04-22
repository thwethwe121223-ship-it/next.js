"use client";
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ChevronRight, BookOpen, Terminal, ShieldCheck } from 'lucide-react';

export default function DocsPage() {
  const sidebarSections = [
    {
      title: "Getting Started",
      icon: <BookOpen size={16} />,
      items: ["Quick Start Guide", "How the Diagnosis Works", "Understanding Your Score"]
    },
    {
      title: "API Reference (B2B)",
      icon: <Terminal size={16} />,
      items: ["Authentication", "POST /free-assessment", "POST /api/download-pdf"]
    },
    {
      title: "Corporate Policies",
      icon: <ShieldCheck size={16} />,
      items: ["Privacy Policy", "Terms of Service", "Data Retention"]
    }
  ];

  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      
      <div className="flex pt-20">
        {/* Sidebar */}
        <aside className="w-64 fixed h-screen bg-[#0D1117]/80 border-r border-[#00F2FF]/10 p-6 hidden md:block overflow-y-auto">
          <div className="space-y-8">
            {sidebarSections.map((section) => (
              <div key={section.title}>
                <h4 className="text-[#00F2FF]/50 text-[10px] font-bold uppercase tracking-[0.2em] mb-4 flex items-center gap-2">
                  {section.icon} {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="text-white/50 text-xs hover:text-white cursor-pointer transition-colors">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </aside>

        {/* Content Area */}
        <section className="flex-1 md:ml-64 p-8 md:p-16">
          <div className="max-w-3xl">
            <nav className="text-[10px] text-white/30 uppercase tracking-widest mb-8 flex items-center gap-2">
              Docs <ChevronRight size={10} /> Getting Started <ChevronRight size={10} /> <span className="text-[#00F2FF]">Quick Start Guide</span>
            </nav>

            <h1 className="text-4xl font-playfair italic mb-6">Quick Start Guide</h1>
            <p className="text-white/60 leading-relaxed mb-8">
              Welcome to the BIOS AI Documentation. This guide will help you understand how to leverage our AI Strategy Co-founder to scale your business.
            </p>

            <div className="p-6 bg-[#00F2FF]/5 border border-[#00F2FF]/10 rounded-sm mb-8">
              <h3 className="text-[#00F2FF] font-bold text-sm mb-2 uppercase tracking-wider">Note:</h3>
              <p className="text-sm text-white/70 italic">
                Our diagnosis tool is free for Myanmar's SMEs. No API key is required for the basic assessment.
              </p>
            </div>

            <h2 className="text-2xl font-playfair mb-4">Core Concepts</h2>
            <p className="text-white/60 mb-4">
              BIOS AI operates on a 5-dimensional strategy framework designed specifically for the Myanmar market environment.
            </p>
            <ul className="list-disc list-inside space-y-2 text-white/50 text-sm mb-12 ml-4">
              <li>Revenue Strength & Scalability</li>
              <li>Customer Retention Dynamics</li>
              <li>Market Position Index</li>
              <li>Technology Adoption Curve</li>
              <li>Growth Trajectory Planning</li>
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}