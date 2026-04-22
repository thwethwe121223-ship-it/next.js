import ContactSales from "@/components/ContactSales"; 
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-[#050505] min-h-screen">
      <Navbar />
      <div className="pt-24"> 
        <ContactSales />
      </div>
      <Footer />
    </main>
  );
}