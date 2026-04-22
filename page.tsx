"use client";
import  {Navbar}  from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { FeaturesGrid } from '@/components/FeaturesGrid';
import { IndustrySolutions } from '@/components/IndustrySolutions';
import { DiagnosisCTA } from '@/components/DiagnosisCTA';
import { DashboardPreview } from "@/components/DashboardPreview";
import { Pricing } from "@/components/Pricing";
import { AboutAndContact } from "@/components/AboutAndContact";
import { Footer } from "@/components/Footer";


export default function Home() {
  const handleStartAudit = () => {
    // Audit start logic (e.g., set quiz state to true)
    console.log("Audit Started");
  };

  return (
    <main className="bg-[#0D1117] min-h-screen">
      <Navbar />
      <Hero onStartAudit={handleStartAudit} />
      <FeaturesGrid onStartAudit={handleStartAudit} />
      <IndustrySolutions />
      <DiagnosisCTA />
      <DashboardPreview />
      <Pricing />
      <AboutAndContact /> 
      <Footer />
    </main>
  );
}