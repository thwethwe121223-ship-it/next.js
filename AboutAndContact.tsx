"use client";
import React from 'react';

export const AboutAndContact = () => {
  return (
   <section id="contact" className="py-24 px-6 relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: About Section */}
        <div className="space-y-8">
          <div className="inline-block px-4 py-1 rounded-full border border-[#00F2FF]/30 bg-[#00F2FF]/5 text-[#00F2FF] text-sm font-medium">
            About BIOS AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
            Empowering Myanmar SMEs with <span className="text-[#00F2FF]">AI Strategy.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            BIOS AI is the first AI Strategy Co-founder designed specifically for the Myanmar market. 
            We bridge the gap between traditional business management and modern AI efficiency, 
            helping local entrepreneurs scale with data-driven confidence.
          </p>
          
          <div className="grid grid-cols-2 gap-6 pt-4">
            <div className="border-l-2 border-[#00F2FF] pl-4">
              <h4 className="text-white font-bold text-2xl">24/7</h4>
              <p className="text-white/40 text-sm">AI Consulting</p>
            </div>
            <div className="border-l-2 border-[#f59e0b] pl-4">
              <h4 className="text-white font-bold text-2xl">100%</h4>
              <p className="text-white/40 text-sm">Local Context</p>
            </div>
          </div>
        </div>

        {/* Right Side: Contact Sales / Lead Capture Form */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#00F2FF] to-[#f59e0b] rounded-3xl blur opacity-20"></div>
          <div className="relative bg-[#0A0A0A] border border-white/10 p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-2">Contact Sales</h3>
            <p className="text-white/50 text-sm mb-8">Ready to transform your business? Leave your details and our team will get back to you.</p>
            
            <form className="space-y-5">
              <div>
                <label className="block text-white/70 text-sm mb-2">Full Name</label>
                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00F2FF] outline-none transition-all" placeholder="Enter your name" />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Business Type</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00F2FF] outline-none transition-all">
                  <option className="bg-black">Gold Shop</option>
                  <option className="bg-black">F&B Business</option>
                  <option className="bg-black">Fashion & Cosmetics</option>
                  <option className="bg-black">Other</option>
                </select>
              </div>
              {/* Phone Number */}
            <div>
            <label className="block text-white/70 text-sm mb-2">Phone Number</label>
            <input 
             type="tel" 
            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:border-[#00F2FF] outline-none transition-all" 
             placeholder=""  
                />
            </div>
              
              <button className="w-full bg-[#00F2FF] text-black font-bold py-4 rounded-xl hover:shadow-[0_0_20px_rgba(0,242,255,0.4)] transition-all mt-4">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};