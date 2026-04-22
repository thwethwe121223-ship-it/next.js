"use client";

import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

const industries = [
  { id: 'gold', name: 'Gold Shops', color: '#f59e0b' },
  { id: 'fashion', name: 'Fashion', color: '#ec4899' },
  { id: 'fnb', name: 'F&B', color: '#10b981' },
  { id: 'cosmetics', name: 'Cosmetics', color: '#a78bfa' },
  { id: 'other', name: 'Other SMEs', color: '#00F2FF' }
];

export default function ContactSales() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    // Analytics: Track Demo Request Started
    // window.gtag('event', 'contact_form_submitted');
    
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      // API call placeholder - POST to /api/email-report
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate delay
      setStatus('success');
    } catch (error) {
      console.error(error);
      setStatus('idle');
    }
  };

  if (status === 'success') {
    return (
      <div className="glass-card p-12 text-center max-w-2xl mx-auto border-[#00F2FF]/30">
        <CheckCircle2 className="w-16 h-16 text-[#00F2FF] mx-auto mb-6" />
        <h3 className="text-3xl font-playfair italic text-white mb-4">Request Received</h3>
        <p className="text-white/60 mb-8">Our strategy team will contact you within 24 hours to schedule your demo.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="px-8 py-3 bg-[#f59e0b] text-black font-bold rounded-lg hover:scale-105 transition-transform"
        >
          SEND ANOTHER MESSAGE
        </button>
      </div>
    );
  }

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          
          {/* Left Side: Context & Trust */}
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F2FF]/30 bg-[#00F2FF]/5 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00F2FF] animate-pulse" />
              <span className="text-[10px] tracking-[0.2em] text-[#00F2FF] uppercase font-bold">Contact Sales</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-playfair italic text-white mb-6 leading-tight">
              Ready to automate your <span className="text-[#f59e0b]">growth trajectory?</span>
            </h2>
            <p className="text-white/50 text-lg mb-10 leading-relaxed">
              Book a personalized demo to see how BIOS AI can solve your industry-specific operational challenges.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#00F2FF]">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">Fast Response</h4>
                  <p className="text-white/40 text-sm">We respond within 24 hours.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#f59e0b]">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold">B2B Grade Security</h4>
                  <p className="text-white/40 text-sm">Your business data is encrypted and private.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="glass-card p-8 border-white/10 relative">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 ml-1">Full Name</label>
                  <input required name="name" type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00F2FF]/50 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase tracking-widest text-white/50 ml-1">Company Name</label>
                  <input required name="company" type="text" placeholder="Enterprise Co." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00F2FF]/50 outline-none transition-all" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 ml-1">Industry Sector</label>
                <select required name="industry" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00F2FF]/50 outline-none transition-all appearance-none">
                  <option value="" className="bg-[#0D1117]">Select Industry</option>
                  {industries.map(ind => (
                    <option key={ind.id} value={ind.id} className="bg-[#0D1117]">{ind.name}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 ml-1">Work Email</label>
                <input required name="email" type="email" placeholder="john@company.com" className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00F2FF]/50 outline-none transition-all" />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-white/50 ml-1">Message</label>
                <textarea name="message" rows={4} placeholder="Tell us about your challenges..." className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:border-[#00F2FF]/50 outline-none transition-all resize-none" />
              </div>

              <button 
                disabled={status === 'loading'}
                type="submit" 
                className="w-full py-4 bg-[#f59e0b] hover:bg-[#d97706] text-black font-bold rounded-lg flex items-center justify-center gap-2 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                {status === 'loading' ? (
                  <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                ) : (
                  <>
                    <span>REQUEST A DEMO</span>
                    <Send size={18} />
                  </>
                )}
              </button>

              <p className="text-[10px] text-center text-white/30 uppercase tracking-tighter">
                By submitting, you agree to our <a href="/docs/privacy" className="underline hover:text-white">Privacy Policy</a>
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}