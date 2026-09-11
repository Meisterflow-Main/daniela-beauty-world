import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import AivieHero from "@/components/sections/AivieHero";
import AivieIntro from "@/components/sections/AivieIntro";
import AivieIngredients from "@/components/sections/AivieIngredients";
import AivieVideo from "@/components/sections/AivieVideo";
import AivieNewsletter from "@/components/sections/AivieNewsletter";
import { useSeo } from "@/hooks/useSeo";

export default function AivieLaunch() {
  useSeo({
    title: "AIVIE – Elevated AI Cream | Daniela Beauty World",
    description: "AIVIE – The Algorithm of Youth. Elevated AI Cream mit Niacinamide, Hexapeptid-8 und Ectoin von Daniela Beauty World.",
    path: "/aivie",
  });
  return (
    <>
      <Navbar />
      <main>
        <AivieHero />
        <AivieIntro />
        <AivieIngredients />
        <AivieVideo />
        <AivieNewsletter />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </>
  );
}