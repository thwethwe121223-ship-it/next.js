"use client";
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Services", href: "/services" },
    { label: "Solutions", href: "/#solutions" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Docs", href: "/docs" },
    { label: "Event", href: "/event" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#050505]/90 backdrop-blur-md border-b border-white/5 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full border-2 border-[#f59e0b] shadow-[0_0_10px_rgba(245,158,11,0.3)]" />
          <span className="text-xl font-bold text-white tracking-tighter uppercase font-playfair">BIOS AI</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <a key={item.label} href={item.href} className="text-white/60 hover:text-[#f59e0b] transition-colors">
              {item.label}
            </a>
          ))}
          
          {/* Desktop Contact Sales Button */}
          <button 
         onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="bg-[#f59e0b] text-black px-6 py-2 rounded-lg font-bold hover:scale-105 transition-all cursor-pointer relative z-[100]"
            >
          CONTACT SALES
        </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#050505] border-b border-white/5 p-6 flex flex-col gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href} 
              className="text-white/70 text-lg border-b border-white/5 pb-2" 
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </a>
          ))}
          
          {/* Mobile Contact Sales Button */}
          <a 
            href="/contact" 
            onClick={() => setIsOpen(false)}
            className="bg-[#f59e0b] text-black py-4 rounded-lg font-bold text-center uppercase tracking-widest hover:bg-[#fbbf24]"
          >
            Contact Sales
          </a>
        </div>
      )}
    </nav>
  );
};