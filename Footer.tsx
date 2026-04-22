"use client";
import React from 'react';

export const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Logo Section */}
        <div className="col-span-1">
          <span className="text-2xl font-bold text-white tracking-tighter uppercase font-serif">
            BIOS <span className="text-[#f59e0b]">AI</span>
          </span>
          <p className="mt-4 text-white/50 text-sm">Strategic AI for Myanmar SMEs.</p>
        </div>

        {/* Solutions Column */}
        <div>
          <h3 className="text-white font-semibold mb-6">Solutions</h3>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><a href="/solutions" className="hover:text-[#f59e0b] transition-colors">Gold Shops</a></li>
            <li><a href="/solutions" className="hover:text-[#f59e0b] transition-colors">F&B Management</a></li>
            <li><a href="/solutions" className="hover:text-[#f59e0b] transition-colors">Retail Strategy</a></li>
          </ul>
        </div>

        {/* Resources Column */}
        <div>
          <h3 className="text-white font-semibold mb-6">Resources</h3>
          <ul className="space-y-4 text-white/50 text-sm">
            <li><a href="/docs" className="hover:text-[#f59e0b] transition-colors">Documentation</a></li>
            <li><a href="/about" className="hover:text-[#f59e0b] transition-colors">About Us</a></li>
            <li><a href="/contact" className="hover:text-[#f59e0b] transition-colors">Contact Support</a></li>
          </ul>
        </div>

        {/* Social Icons Column */}
        <div>
          <h3 className="text-white font-semibold mb-6">Connect</h3>
          <div className="flex gap-4">
            <a href="https://facebook.com" target="_blank" className="text-white/50 hover:text-[#f59e0b] transition-colors">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
            </a>
            <a href="https://twitter.com" target="_blank" className="text-white/50 hover:text-[#f59e0b] transition-colors">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4l11.733 16h4.267l-11.733-16zM4 20l6.768-6.768m2.464-2.464L20 4"></path></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" className="text-white/50 hover:text-[#f59e0b] transition-colors">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto pb-8 flex justify-center gap-8 text-sm text-white/40">
        <a href="/privacy" className="hover:text-[#00F2FF] transition-colors">Privacy Policy</a>
        <a href="/terms" className="hover:text-[#f59e0b] transition-colors">Terms of Service</a>
      </div>
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 text-center">
        <p className="text-white/30 text-xs">© 2026 BIOS AI. All rights reserved.</p>
      </div>
    </footer>
  );
};