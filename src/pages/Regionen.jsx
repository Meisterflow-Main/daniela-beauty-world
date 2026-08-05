import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import ScrollReveal from "@/components/ScrollReveal";
import Breadcrumbs from "@/components/Breadcrumbs";
import { regionen } from "@/data/gesichtsbehandlungRegionen";

export default function Regionen() {
  useEffect(() => {
    document.title = "Regionen | Daniela Beauty World Boniswil";
    const m = document.querySelector('meta[name="description"]');
    if (m) m.setAttribute("content", "Gesichtsbehandlungen für Kundinnen aus Aarau, Lenzburg, Baden, Wohlen und weiteren Orten. Anfahrtszeiten und Infos zu allen Regionen auf einen Blick.");
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: "Startseite", to: "/" }, { label: "Regionen" }]} />
      <main>
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
              <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">Regionen</span>
              <h1 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl mb-6">Gesichtsbehandlung in deiner Region</h1>
              <p className="text-rose-ink/70 text-lg leading-[1.7]">Alle Behandlungen finden im Studio in Boniswil statt. Kundinnen aus der ganzen Region reisen dafür gerne an: hier findest du die Anfahrtszeit und lokale Infos für deinen Ort.</p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {regionen.map((r, i) => (
                <ScrollReveal key={r.slug} delay={i * 60}>
                  <Link to={`/gesichtsbehandlung/${r.slug}`} className="group block h-full bg-white rounded-lg p-7 border border-rose-nude hover:shadow-luxe transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <MapPin className="w-6 h-6 text-rose-gold" />
                      <span className="inline-flex items-center gap-1 text-rose-ink/60 text-xs"><Clock className="w-3.5 h-3.5" /> {r.fahrzeit}</span>
                    </div>
                    <h2 className="font-heading font-semibold text-rose-ink text-xl mb-2">Gesichtsbehandlung {r.name}</h2>
                    <p className="text-rose-ink/60 text-sm leading-[1.7] mb-5">{r.heroEyebrow}. Persönliche Beratung und moderne Methoden im Studio Boniswil.</p>
                    <span className="inline-flex items-center gap-1 text-rose-gold text-sm font-heading font-semibold group-hover:text-rose-deep transition-colors">Zur Regionseite <ArrowRight className="w-4 h-4" /></span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal className="bg-rose-cream rounded-lg p-8 md:p-10 text-center mt-12">
              <h2 className="font-heading font-bold text-rose-ink text-2xl md:text-3xl mb-3">Alle Behandlungen im Überblick</h2>
              <p className="text-rose-ink/70 text-base leading-[1.7] mb-6 max-w-xl mx-auto">Neben Gesichtsbehandlungen biete ich Körperformung und Zahnbleaching an. Entdecke alle Behandlungen mit Preisen und Ablauf.</p>
              <Link to="/dienstleistungen" className="inline-flex items-center gap-2 bg-rose-gold text-white px-6 py-3 rounded-sm font-heading font-semibold hover:bg-rose-deep transition-all">Alle Dienstleistungen <ArrowRight className="w-4 h-4" /></Link>
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