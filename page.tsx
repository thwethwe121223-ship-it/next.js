"use client";

import React from 'react';
import { Navbar } from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { ScanLine, BrainCircuit, Zap, ArrowRight, CheckCircle2 } from "lucide-react";

const modules = [
  {
    id: "01",
    title: "Diagnosis (Auditor)",
    tagline: "Know Your Business",
    description: "24-question AI-powered health audit across 5 dimensions. Instant score. No signup required.",
    icon: <ScanLine className="text-[#00F2FF]" size={24} />,
    features: ["Instant Health Score", "5-Dimensional Analysis", "No Signup Required"],
    highlight: true
  },
  {
    id: "02",
    title: "Strategy (Architect)",
    tagline: "Build Your Roadmap",
    description: "AI-generated strategic roadmap tailored to your industry, score, and specific business goals.",
    icon: <BrainCircuit className="text-[#00F2FF]" size={24} />,
    features: ["Industry Benchmarking", "Growth Roadmaps", "Custom KPI Settings"],
    highlight: false
  },
  {
    id: "03",
    title: "Workflow (Executor)",
    tagline: "Execute With Precision",
    description: "Step-by-step execution plans, task tracking, and real-time progress monitoring.",
    icon: <Zap className="text-[#00F2FF]" size={24} />,
    features: ["Task Automation", "Progress Tracking", "Team Collaboration"],
    highlight: false
  }
];

export default function ServicesPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar />

      <section className="pt-40 pb-20 px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif italic mb-8">
          Three Modules. One <span className="text-[#00F2FF]">Unified Intelligence.</span>
        </h1>
      </section>

      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {modules.map((module) => (
            <div key={module.id} className="p-8 rounded-2xl border border-white/10 bg-white/5">
              <div className="w-12 h-12 rounded-full bg-[#00F2FF]/10 flex items-center justify-center mb-6">
                {module.icon}
              </div>
              <h3 className="text-2xl font-bold mb-2">{module.title}</h3>
              <p className="text-white/50 text-sm mb-6 h-20">{module.description}</p>
              <a href="/contact" className="text-[#00F2FF] font-bold text-sm inline-flex items-center gap-2">
                Learn More <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}