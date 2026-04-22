const industries = [
  { name: "Gold Shops", icon: "💎", headline: "Stop losing customers to price competition", metric: "34% retention", color: "#f59e0b" },
  { name: "Fashion", icon: "👕", headline: "Turn seasonal spikes into year-round revenue", metric: "28% revenue gain", color: "#ec4899" },
  { name: "F&B", icon: "🍴", headline: "Reduce waste, increase table turns", metric: "22% efficiency gain", color: "#10b981" },
  { name: "Cosmetics", icon: "✨", headline: "Build loyalty beyond the first purchase", metric: "41% repeat rate", color: "#a78bfa" }
];

export const IndustrySolutions = () => {
  return (
    <section id="solutions" className="py-24 px-6 bg-[#050505]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-[10px] text-[#f59e0b] font-bold tracking-[0.3em] uppercase">● Industry Solutions</span>
          <h2 className="text-4xl font-playfair text-white mt-4 italic">Built for Myanmar Most Competitive Industries</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {industries.map((ind) => (
            <div key={ind.name} className="p-8 bg-white/[0.02] border-l-4 border-white/5 hover:border-l-[${ind.color}] hover:bg-white/[0.04] transition-all group" style={{ borderLeftColor: ind.color }}>
              <div className="flex justify-between items-start mb-6">
                <span className="text-3xl">{ind.icon}</span>
                <span className="px-3 py-1 bg-[#00F2FF]/10 text-[#00F2FF] text-[10px] font-bold rounded-full">+{ind.metric}</span>
              </div>
              <h3 className="text-white text-lg font-bold mb-4">{ind.headline}</h3>
              <a href="#contact" className="text-white/30 text-xs font-bold uppercase tracking-widest group-hover:text-white transition-colors">See Case Study →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};