import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Program from "@/components/Program";
import Process from "@/components/Process";
import WhoItsFor from "@/components/WhoItsFor";
import Commitment from "@/components/Commitment";
import Results from "@/components/Results";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-black text-white selection:bg-accent selection:text-white">
      <Navbar />
      <Hero />
      <Program />
      <Process />
      <WhoItsFor />
      <Commitment />
      <Results />
      <FAQ />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
