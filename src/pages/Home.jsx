import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import Hero from "@/components/sections/Hero";
import Reels from "@/components/sections/Reels";
import Welcome from "@/components/sections/Welcome";
import Treatments from "@/components/sections/Treatments";
import Prices from "@/components/sections/Prices";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import Testimonials from "@/components/sections/Testimonials";
import Values from "@/components/sections/Values";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Reels />
        <Welcome />
        <Treatments />
        <Prices />
        <Gallery />
        <About />
        <Testimonials />
        <Values />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </>
  );
}