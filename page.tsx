"use client";

import React from 'react';
import { Calendar, MapPin, Users, ArrowRight, Video } from 'lucide-react';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const upcomingEvents = [
  {
    id: 1,
    title: "AI Strategy for Myanmar Retailers",
    date: "May 15, 2026",
    time: "2:00 PM - 4:00 PM",
    type: "Webinar",
    location: "Online (Zoom)",
    status: "Open",
    accent: "#f59e0b" // Gold
  },
  {
    id: 2,
    title: "SME Digital Transformation Workshop",
    date: "June 02, 2026",
    time: "9:00 AM - 5:00 PM",
    type: "In-Person",
    location: "Lotte Hotel, Yangon",
    status: "Limited",
    accent: "#00F2FF" // Cyan
  }
];

export default function EventPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#00F2FF]/5 blur-[120px] rounded-full" />
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00F2FF]/30 bg-[#00F2FF]/5 mb-6">
            <span className="text-[10px] tracking-[0.2em] text-[#00F2FF] uppercase font-bold">Community & Learning</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-playfair italic mb-6">
            BIOS AI <span className="text-[#f59e0b]">Events</span>
          </h1>
          <p className="text-white/50 text-lg max-w-2xl mx-auto">
            Join our exclusive workshops and webinars to learn how top Myanmar's SMEs are scaling with AI-driven workflows.
          </p>
        </div>
      </section>

      {/* Event Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {upcomingEvents.map((event) => (
            <div 
              key={event.id}
              className="glass-card p-8 border-white/5 group hover:border-[#00F2FF]/30 transition-all duration-500 relative overflow-hidden"
            >
              {/* Background Glow */}
              <div className="absolute -right-20 -top-20 w-40 h-40 blur-[80px] opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: event.accent }} />

              <div className="flex flex-col md:flex-row justify-between gap-6 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold uppercase tracking-wider text-white/70">
                      {event.type}
                    </span>
                    <span className={`text-[10px] font-bold uppercase tracking-wider ${event.status === 'Open' ? 'text-green-400' : 'text-[#f59e0b]'}`}>
                      ● {event.status} Registration
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold group-hover:text-[#00F2FF] transition-colors">{event.title}</h3>
                  
                  <div className="space-y-2 text-white/50 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} className="text-[#00F2FF]" />
                      <span>{event.date} | {event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      {event.type === 'Webinar' ? <Video size={16} /> : <MapPin size={16} />}
                      <span>{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-end">
                  <button 
                    className="px-6 py-3 bg-white/5 border border-white/10 rounded-lg font-bold text-sm hover:bg-[#00F2FF] hover:text-black hover:border-[#00F2FF] transition-all flex items-center gap-2"
                  >
                    REGISTER NOW <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter / Stay Informed */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto glass-card p-12 border-[#f59e0b]/20 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[#f59e0b]/5 pointer-events-none" />
            <h2 className="text-3xl font-playfair italic mb-4">Don't miss the next session</h2>
            <p className="text-white/50 mb-8 max-w-md mx-auto text-sm">
                Get notified when we launch new AI strategy workshops for your specific industry.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input 
                    type="email" 
                    placeholder="Enter your work email" 
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white outline-none focus:border-[#f59e0b]/50 transition-all"
                />
                <button className="px-8 py-3 bg-[#f59e0b] text-black font-bold rounded-lg hover:scale-105 active:scale-95 transition-all">
                    SUBSCRIBE
                </button>
            </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}