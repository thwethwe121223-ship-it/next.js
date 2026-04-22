import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Target, Users, ShieldCheck, Zap } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-[#050505] min-h-screen text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-playfair italic mb-8">
            Empowering Myanmar SMEs with <span className="text-[#f59e0b]">AI Intelligence</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
            BIOS AI is the first strategic co-founder designed specifically for the unique challenges of the Myanmar market.
          </p>
        </div>
      </section>

      {/* Mission & Vision Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="glass-card p-10 border-[#f59e0b]/20">
          <Target className="text-[#f59e0b] mb-6" size={40} />
          <h2 className="text-3xl font-playfair italic mb-4">Our Mission</h2>
          <p className="text-white/50 leading-relaxed">
            To democratize high-level strategy and technology for every local business, from gold shops to fashion retail.
          </p>
        </div>
        <div className="glass-card p-10 border-[#00F2FF]/20">
          <ShieldCheck className="text-[#00F2FF] mb-6" size={40} />
          <h2 className="text-3xl font-playfair italic mb-4">Our Vision</h2>
          <p className="text-white/50 leading-relaxed">
            To become the core operating system for Myanmar digital economy, driving efficiency and growth through AI.
          </p>
        </div>
      </section>

      {/* Team/Values Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-playfair italic mb-16">Why BIOS AI?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
              <Zap className="text-[#00F2FF]" />
            </div>
            <h3 className="font-bold text-xl">Localization First</h3>
            <p className="text-white/40 text-sm">Built for Myanmar businesses, not generic Western models.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
              <Users className="text-[#f59e0b]" />
            </div>
            <h3 className="font-bold text-xl">SME Focused</h3>
            <p className="text-white/40 text-sm">Scalable solutions that fit the budget of growing enterprises.</p>
          </div>
          <div className="space-y-4">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto border border-white/10">
              <ShieldCheck className="text-white" />
            </div>
            <h3 className="font-bold text-xl">Data Security</h3>
            <p className="text-white/40 text-sm">Enterprise-grade protection for your strategic business data.</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}