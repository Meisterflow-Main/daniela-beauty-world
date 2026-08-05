import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { globalFaq } from "@/data/globalFaq";

export default function Faq() {
  useEffect(() => {
    document.title = "FAQ | Daniela Beauty World";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Häufige Fragen zu Behandlungen, Terminen, Anfahrt und Geschenkgutscheinen bei Daniela Beauty World in Boniswil.");
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: "Startseite", to: "/" }, { label: "FAQ" }]} />
      <main>
        <section className="py-16 md:py-20">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal className="text-center mb-12">
              <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">FAQ</span>
              <h1 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl mb-4">Häufige Fragen</h1>
              <p className="text-rose-ink/70 text-base leading-[1.7]">Antworten zu Terminen, Behandlungen und Anreise ins Studio Boniswil.</p>
            </ScrollReveal>
            <ScrollReveal>
              <Accordion type="single" collapsible className="w-full">
                {globalFaq.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-rose-ink font-heading font-semibold text-left">{f.q}</AccordionTrigger>
                    <AccordionContent className="text-rose-ink/70 text-sm leading-[1.6]">{f.a}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <CookieBanner />
    </>
  );
}