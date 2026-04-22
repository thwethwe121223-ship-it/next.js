"use client";
import React from 'react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-black text-white/80">
      <Navbar />
      
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-8">
          Terms of <span className="text-[#f59e0b]">Service</span>
        </h1>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="leading-relaxed">
              By accessing BIOS AI diagnosis tools, you agree to comply with our professional 
              standards and usage guidelines for business strategy automation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Limitation of Liability</h2>
            <p className="leading-relaxed">
              While our AI provides strategic recommendations, BIOS AI is not liable for 
              specific business outcomes. Strategy implementation remains the responsibility 
              of the business owner.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}