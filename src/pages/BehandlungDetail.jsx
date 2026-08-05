import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Check, Clock, Sparkles, ArrowRight, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CookieBanner from "@/components/CookieBanner";
import ScrollReveal from "@/components/ScrollReveal";
import {
  gesichtsbehandlungen,
  getGesichtsbehandlungBySlug,
} from "@/data/gesichtsbehandlungen";

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

export default function BehandlungDetail() {
  const { slug } = useParams();
  const behandlung = getGesichtsbehandlungBySlug(slug);

  useEffect(() => {
    if (behandlung) {
      document.title = behandlung.seo.title;
      setMeta("description", behandlung.seo.description);
    }
    window.scrollTo({ top: 0 });
  }, [behandlung]);

  if (!behandlung) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 text-center">
          <h1 className="font-heading font-bold text-rose-ink text-3xl mb-4">
            Behandlung nicht gefunden
          </h1>
          <p className="text-rose-ink/70 mb-8">Diese Behandlung ist nicht verfügbar.</p>
          <Link to="/" className="text-rose-gold font-heading font-semibold hover:underline">
            Zurück zur Startseite
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const related = gesichtsbehandlungen.filter((b) => b.slug !== behandlung.slug);
  const priceLine = (b) =>
    b.options.length > 0 ? b.options[0].split("–")[0].trim() : `${b.price} – ${b.duration}`;

  return (
    <>
      <Navbar />
      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-5 md:px-8 pt-28 md:pt-32">
          <nav className="flex items-center gap-2 text-sm text-rose-ink/60">
            <Link to="/" className="hover:text-rose-gold transition-colors">Startseite</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <a href="/#preise" className="hover:text-rose-gold transition-colors">Gesicht</a>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-rose-ink/80">{behandlung.shortName}</span>
          </nav>
        </div>

        {/* Hero */}
        <section className="py-12 md:py-16">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal>
              <span className="inline-flex items-center gap-2 text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-5">
                <Sparkles className="w-4 h-4" /> Gesichtsbehandlung in Boniswil
              </span>
              <h1 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-6">
                {behandlung.name}
              </h1>
              <p className="text-rose-ink/70 text-lg leading-[1.7] mb-8">
                {behandlung.intro}
              </p>

              <div className="bg-rose-cream rounded-lg p-6 border border-rose-nude mb-8">
                {behandlung.options.length > 0 ? (
                  <div className="space-y-3">
                    {behandlung.options.map((opt) => (
                      <p key={opt} className="font-heading font-semibold text-rose-ink text-sm md:text-base">
                        {opt}
                      </p>
                    ))}
                  </div>
                ) : (
                  <>
                    <p className="font-heading font-bold text-rose-gold text-3xl mb-2">
                      {behandlung.price}
                    </p>
                    <p className="flex items-center gap-2 text-rose-ink/70 text-sm">
                      <Clock className="w-4 h-4" /> {behandlung.duration}
                    </p>
                    {(behandlung.kuren.length > 0 || behandlung.addons.length > 0) && (
                      <div className="mt-4 pt-4 border-t border-rose-nude space-y-1.5">
                        {behandlung.kuren.map((k) => (
                          <p key={k} className="text-rose-ink/75 text-sm font-medium">{k}</p>
                        ))}
                        {behandlung.addons.map((a) => (
                          <p key={a} className="text-rose-ink/75 text-sm font-medium">{a}</p>
                        ))}
                      </div>
                    )}
                  </>
                )}
              </div>

              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold hover:bg-rose-deep transition-all shadow-soft hover:shadow-luxe"
              >
                Termin buchen <ArrowRight className="w-4 h-4" />
              </a>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="relative rounded-lg overflow-hidden shadow-luxe aspect-[4/5]">
                <img
                  src={behandlung.image}
                  alt={`${behandlung.shortName} bei Daniela Beauty World in Boniswil`}
                  className="w-full h-full object-cover"
                />
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Über die Behandlung */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-white to-rose-cream">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl mb-6">
                Die {behandlung.shortName} Behandlung
              </h2>
              <p className="text-rose-ink/70 text-base md:text-lg leading-[1.8]">
                {behandlung.about}
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Vorteile */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl mb-4">
                Deine Vorteile
              </h2>
              <p className="text-rose-ink/70 text-base leading-[1.7]">
                Was dich bei dieser Behandlung bei Daniela Beauty World erwartet.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {behandlung.benefits.map((b, i) => (
                <ScrollReveal key={b.title} delay={i * 80}>
                  <div className="bg-rose-cream/60 rounded-lg p-6 h-full border border-rose-nude">
                    <div className="w-10 h-10 rounded-full bg-rose-gold text-white flex items-center justify-center mb-4">
                      <Check className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-semibold text-rose-ink mb-2">{b.title}</h3>
                    <p className="text-rose-ink/70 text-sm leading-[1.6]">{b.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-rose-cream to-white">
          <div className="max-w-5xl mx-auto px-5 md:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl mb-4">
                So läuft deine Behandlung ab
              </h2>
              <p className="text-rose-ink/70 text-base leading-[1.7]">
                In vier entspannten Schritten zu sichtbaren Ergebnissen.
              </p>
            </ScrollReveal>
            <div className="space-y-6">
              {behandlung.process.map((s, i) => (
                <ScrollReveal key={s.title} delay={i * 80}>
                  <div className="flex gap-5 bg-white rounded-lg p-6 shadow-soft border border-rose-nude">
                    <span className="shrink-0 w-12 h-12 rounded-full bg-rose-gold text-white font-heading font-bold flex items-center justify-center text-lg">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-heading font-semibold text-rose-ink text-lg mb-1">{s.title}</h3>
                      <p className="text-rose-ink/70 text-sm leading-[1.6]">{s.text}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl">
                Häufige Fragen
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <Accordion type="single" collapsible className="w-full">
                {behandlung.faq.map((f, i) => (
                  <AccordionItem key={i} value={`item-${i}`}>
                    <AccordionTrigger className="text-rose-ink font-heading font-semibold text-left">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-rose-ink/70 text-sm leading-[1.6]">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </ScrollReveal>
          </div>
        </section>

        {/* Weitere Behandlungen */}
        <section className="py-16 md:py-20 bg-rose-cream/50">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl mb-4">
                Weitere Gesichtsbehandlungen
              </h2>
              <p className="text-rose-ink/70 text-base">Entdecke weitere Angebote von Daniela Beauty World.</p>
            </ScrollReveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {related.slice(0, 4).map((b, i) => (
                <ScrollReveal key={b.slug} delay={i * 60}>
                  <Link
                    to={`/behandlung/${b.slug}`}
                    className="group block h-full bg-white rounded-lg p-5 border border-rose-nude hover:shadow-luxe transition-all"
                  >
                    <h3 className="font-heading font-semibold text-rose-ink text-sm leading-snug mb-2">
                      {b.shortName}
                    </h3>
                    <p className="text-rose-ink/70 text-xs mb-3">{priceLine(b)}</p>
                    <span className="inline-flex items-center gap-1 text-rose-gold text-xs font-heading font-semibold">
                      Mehr <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-20 bg-rose-ink text-center">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-5">
                Bereit für {behandlung.shortName}?
              </h2>
              <p className="text-white/70 text-base md:text-lg mb-8 leading-[1.7]">
                Vereinbare jetzt deinen persönlichen Termin und lass dich in Boniswil verwöhnen.
              </p>
              <a
                href="/#contact"
                className="inline-flex items-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold hover:bg-rose-deep transition-all shadow-luxe"
              >
                Termin buchen <ArrowRight className="w-4 h-4" />
              </a>
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