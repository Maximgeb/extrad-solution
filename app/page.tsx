import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Trust from "@/components/Trust";
import Destinations from "@/components/Destinations";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";
import StickyWhatsApp from "@/components/StickyWhatsApp";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Trust />
      <Destinations />
      <Process />
      <FAQ />
      <CtaBanner />
      <Footer />
      <StickyWhatsApp />
    </main>
  );
}
