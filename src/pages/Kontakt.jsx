import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/sections/Contact";

export default function Kontakt() {
  useEffect(() => {
    document.title = "Kontakt | Daniela Beauty World Boniswil";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Kontakt zu Daniela Beauty World in Boniswil: telefonisch, per WhatsApp oder über das Kontaktformular. Jetzt Termin vereinbaren.");
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: "Startseite", to: "/" }, { label: "Kontakt" }]} />
      <main>
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </>
  );
}