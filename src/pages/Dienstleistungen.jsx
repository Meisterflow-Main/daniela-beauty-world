import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { alleBehandlungen, categoryLabels } from "@/data/behandlungenIndex";
import { regionen } from "@/data/gesichtsbehandlungRegionen";

function priceLine(b) {
  if (b.pricing && b.pricing.length > 0) {
    const first = b.pricing.find((p) => p.value);
    return first ? first.value : b.shortName;
  }
  if (b.price) return `${b.price}, ${b.duration}`;
  if (b.options && b.options.length) return b.options[0];
  return b.shortName;
}

const categories = ["Gesicht", "Körper", "Zähne"];

export default function Dienstleistungen() {
  useEffect(() => {
    document.title = "Dienstleistungen | Daniela Beauty World Boniswil";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Alle Behandlungen von Daniela Beauty World: Gesichtsbehandlungen, Körperformung und Zahnbleaching in Boniswil. Jetzt Termin vereinbaren.");
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: "Startseite", to: "/" }, { label: "Dienstleistungen" }]} />
      <main>
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">Dienstleistungen</span>
              <h1 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl mb-6">Behandlungen in Boniswil</h1>
              <p className="text-rose-ink/70 text-lg leading-[1.7]">Gesicht, Körper und Zähne: alle Behandlungen von Daniela Beauty World auf einen Blick. Jede Behandlung hat eine eigene Seite mit Ablauf, Preisen und FAQ.</p>
            </ScrollReveal>

            {categories.map((cat) => {
              const items = alleBehandlungen.filter((b) => b.category === cat);
              return (
                <div key={cat} className="mb-16">
                  <ScrollReveal className="mb-8">
                    <h2 className="font-heading font-bold text-rose-ink text-3xl mb-2">{categoryLabels[cat]}</h2>
                    <p className="text-rose-ink/60 text-sm">{items.length} Behandlungen</p>
                  </ScrollReveal>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((b, i) => (
                      <ScrollReveal key={b.slug} delay={i * 60}>
                        <Link to={`/behandlung/${b.slug}`} className="group block h-full bg-white rounded-lg overflow-hidden border border-rose-nude hover:shadow-luxe transition-all">
                          <div className="aspect-[4/3] overflow-hidden">
                            <img src={b.image} alt={`${b.shortName} in Boniswil`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                          </div>
                          <div className="p-6">
                            <h3 className="font-heading font-semibold text-rose-ink text-lg mb-2">{b.shortName}</h3>
                            <p className="text-rose-ink/60 text-sm leading-[1.6] mb-4 line-clamp-2">{b.tagline}</p>
                            <div className="flex items-center justify-between">
                              <span className="text-rose-gold text-sm font-heading font-semibold">{priceLine(b)}</span>
                              <span className="inline-flex items-center gap-1 text-rose-ink/60 text-xs group-hover:text-rose-gold transition-colors">Mehr <ArrowRight className="w-3.5 h-3.5" /></span>
                            </div>
                          </div>
                        </Link>
                      </ScrollReveal>
                    ))}
                  </div>
                </div>
              );
            })}

            <ScrollReveal className="bg-rose-cream rounded-lg p-8 md:p-10 text-center">
              <MapPin className="w-8 h-8 text-rose-gold mx-auto mb-4" />
              <h2 className="font-heading font-bold text-rose-ink text-2xl md:text-3xl mb-3">Behandlungen in deiner Region</h2>
              <p className="text-rose-ink/70 text-base leading-[1.7] mb-6 max-w-xl mx-auto">Kundinnen aus Aarau, Lenzburg, Baden und weiteren Orten reisen ins Studio nach Boniswil. Auf den Regionseiten findest du Anfahrtszeit und lokale Infos.</p>
              <Link to="/regionen" className="inline-flex items-center gap-2 bg-rose-gold text-white px-6 py-3 rounded-sm font-heading font-semibold hover:bg-rose-deep transition-all">Alle Regionen <ArrowRight className="w-4 h-4" /></Link>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-rose-ink text-center">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-5">Noch unsicher, welche Behandlung passt?</h2>
              <p className="text-white/70 text-base md:text-lg mb-8">Ich berate dich persönlich und finde die richtige Methode für dein Hautbild.</p>
              <Link to="/kontakt" className="inline-flex items-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold hover:bg-rose-deep transition-all shadow-luxe">Kontakt <ArrowRight className="w-4 h-4" /></Link>
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