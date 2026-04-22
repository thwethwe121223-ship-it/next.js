"use client";
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white/80">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Privacy <span className="text-[#00F2FF]">Policy</span>
        </h1>
        <p className="text-white/40 mb-12 italic">Last Updated: April 22, 2026</p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Data Collection</h2>
            <p className="leading-relaxed">
              At BIOS AI, we collect information necessary to provide strategic business audits. 
              This includes business metrics, operational data, and contact information provided during 
              the lead capture process.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. AI Analysis & Processing</h2>
            <p className="leading-relaxed">
              Your business data is processed by our proprietary AI models to generate roadmaps. 
              We do not sell your specific business strategy to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Data Security</h2>
            <div className="p-6 border border-[#00F2FF]/20 bg-[#00F2FF]/5 rounded-2xl">
              <p className="text-[#00F2FF]">
                We implement industry-standard encryption to protect your sensitive business information. 
                Data integrity is our top priority for Myanmar SMEs.
              </p>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}