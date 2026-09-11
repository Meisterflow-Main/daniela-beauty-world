import { useSeo } from "@/hooks/useSeo";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import Breadcrumbs from "@/components/Breadcrumbs";
import About from "@/components/sections/About";
import Values from "@/components/sections/Values";
import Testimonials from "@/components/sections/Testimonials";

export default function UeberUns() {
  useSeo({
    title: "Über uns | Daniela Beauty World Boniswil",
    description: "Lerne Daniela Pacifico und ihr Kosmetikstudio in Boniswil kennen: persönliche Beratung, moderne Methoden und echte Verwöhnzeit.",
    path: "/ueber-uns",
  });

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