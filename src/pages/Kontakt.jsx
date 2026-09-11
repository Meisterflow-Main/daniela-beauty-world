import { useSeo } from "@/hooks/useSeo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import Contact from "@/components/sections/Contact";

export default function Kontakt() {
  useSeo({
    title: "Kontakt | Daniela Beauty World Boniswil",
    description: "Kontakt zu Daniela Beauty World in Boniswil: telefonisch, per WhatsApp oder über das Kontaktformular. Jetzt Termin vereinbaren.",
    path: "/kontakt",
  });

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