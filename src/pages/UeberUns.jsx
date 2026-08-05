import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";
import Testimonials from "@/components/sections/Testimonials";

export default function UeberUns() {
  useEffect(() => {
    document.title = "Über uns | Daniela Beauty World Boniswil";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Lerne Daniela Pacifico und ihr Kosmetikstudio in Boniswil kennen: persönliche Beratung, moderne Methoden und echte Verwöhnzeit.");
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: "Startseite", to: "/" }, { label: "Über uns" }]} />
      <main>
        <About />
        <Values />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </>
  );
}