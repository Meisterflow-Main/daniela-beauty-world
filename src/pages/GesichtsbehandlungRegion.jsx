import { useEffect } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ScrollReveal from "@/components/ScrollReveal";
import { getRegionBySlug, regionen } from "@/data/gesichtsbehandlungRegionen";
import { Phone, Mail, MapPin, Clock, ArrowRight, Check, Star, ExternalLink } from "lucide-react";
import Breadcrumbs from "@/components/Breadcrumbs";

const treatments = [
  { title: "PRX-Therapie", slug: "prx-therapie", desc: "Nadelfreies Anti-Aging, das die Haut strafft und revitalisiert." },
  { title: "Microneedling", slug: "microneedling", desc: "Regt die Kollagenbildung an für ein ebenmässigeres Hautbild." },
  { title: "Collagenfadenlifting", slug: "collagenfadenlifting", desc: "Natürlicher Lifting-Effekt ohne operativen Eingriff." },
];

const usps = [
  { title: "Individuelle Beratung", desc: "Auf dich abgestimmt" },
  { title: "Moderne Methoden", desc: "Fortschrittliche Technik" },
  { title: "Persönliche Betreuung", desc: "Ruhig & entspannt" },
  { title: "Sichtbare Ergebnisse", desc: "Erprobt & bewährt" },
];

export default function GesichtsbehandlungRegion() {
  const { region } = useParams();
  const data = getRegionBySlug(region);

  useEffect(() => {
    if (data) {
      document.title = data.metaTitle;
      let meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute("content", data.metaDescription);
    }
  }, [data]);

  if (!data) return <Navigate to="/" replace />;

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: "Startseite", to: "/" }, { label: "Regionen", to: "/regionen" }, { label: data.name }]} />
      <main>
        {/* Hero */}
        <section className="relative py-20 md:py-28 bg-gradient-to-b from-rose-ink to-rose-ink/90 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-gold blur-3xl" />
          </div>
          <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
            <ScrollReveal>
              <span className="text-rose-light text-sm font-heading font-medium tracking-[0.2em] uppercase mb-4 block">
                {data.heroEyebrow}
              </span>
              <h1 className="font-heading font-bold text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-balance">
                {data.h1}
              </h1>
              <p className="text-white/80 text-lg leading-[1.7] max-w-2xl mx-auto mb-10">
                {data.heroText}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold hover:bg-rose-deep transition-all shadow-luxe hover:-translate-y-1">
                  Jetzt Termin buchen <ArrowRight className="w-5 h-5" />
                </a>
                <a href="tel:+41797505152" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 rounded-sm font-heading font-semibold hover:bg-white/10 transition-all">
                  <Phone className="w-4 h-4" /> Anrufen
                </a>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* USPs */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {usps.map((u, i) => (
              <ScrollReveal key={u.title} delay={i * 100} className="text-center">
                <div className="w-12 h-12 rounded-full bg-rose-gold/15 flex items-center justify-center mx-auto mb-3">
                  <Check className="w-5 h-5 text-rose-gold" />
                </div>
                <p className="font-heading font-semibold text-rose-ink text-sm mb-1">{u.title}</p>
                <p className="text-rose-ink/60 text-xs">{u.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* Einleitung */}
        <section className="py-20 bg-rose-cream">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl mb-6 text-center">
                Gesichtsbehandlung für {data.name} – dein Hautbild verdient Aufmerksamkeit
              </h2>
              <p className="text-rose-ink/70 text-base leading-[1.8]">{data.einleitung}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Leistungen */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <ScrollReveal className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl mb-4">Meine Gesichtsbehandlungen</h2>
              <p className="text-rose-ink/70 text-base leading-[1.7]">
                Ausgewählte Methoden, individuell kombiniert – für ein Ergebnis, das zu deinem Hautbild passt.
              </p>
            </ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {treatments.map((t, i) => (
                <ScrollReveal key={t.title} delay={i * 150} className="bg-rose-cream rounded-lg p-7 hover:shadow-luxe transition-all duration-500">
                  <h3 className="font-heading font-semibold text-rose-ink text-xl mb-3">{t.title}</h3>
                  <p className="text-rose-ink/70 text-sm leading-[1.7] mb-4">{t.desc}</p>
                  <Link to={`/behandlung/${t.slug}`} className="text-rose-gold text-sm font-heading font-medium hover:text-rose-deep transition-colors">
                    Mehr erfahren →
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Warum uns */}
        <section className="py-20 bg-rose-ink">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-6 text-center">
                Warum Kunden aus {data.name} uns wählen
              </h2>
              <p className="text-white/70 text-base leading-[1.8]">{data.warumUns}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Für wen geeignet */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl mb-6 text-center">
                Für wen eignet sich die Behandlung?
              </h2>
              <p className="text-rose-ink/70 text-base leading-[1.8]">{data.fuerWen}</p>
            </ScrollReveal>
          </div>
        </section>

        {/* Lokale Besonderheiten */}
        <section className="py-20 bg-rose-cream">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl mb-6 text-center">
                Was {data.name} auszeichnet
              </h2>
              <p className="text-rose-ink/70 text-base leading-[1.8] mb-6">{data.lokaleBesonderheiten}</p>
              <div className="bg-white rounded-lg p-6 border border-rose-nude">
                <p className="text-rose-ink/70 text-sm leading-[1.7]">
                  <strong className="text-rose-ink font-heading">Typische Kundinnen aus {data.name}:</strong> {data.typischeKunden}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Kontaktblock */}
        <section id="contact" className="py-20 bg-rose-cream">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal className="bg-white rounded-lg shadow-luxe p-8 md:p-10 text-center">
              <h2 className="font-heading font-bold text-rose-ink text-2xl md:text-3xl mb-3">
                Studio Boniswil – {data.fahrzeit} von {data.name}
              </h2>
              <p className="text-rose-ink/70 text-sm mb-8">
                Vereinbare noch heute deinen Termin für eine Gesichtsbehandlung.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left mb-8">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-rose-gold shrink-0 mt-0.5" />
                  <span className="text-rose-ink/80 text-sm">Seengerstrasse 11<br />5706 Boniswil</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-rose-gold shrink-0 mt-0.5" />
                  <span className="text-rose-ink/80 text-sm">Mo bis Sa, 09:00 bis 19:00 Uhr</span>
                </div>
                <a href="tel:+41797505152" className="flex items-center gap-3 text-rose-ink/80 hover:text-rose-gold transition-colors text-sm">
                  <Phone className="w-5 h-5 text-rose-gold shrink-0" /> +41 79 750 51 52
                </a>
                <a href="mailto:info@danielabeauty.ch" className="flex items-center gap-3 text-rose-ink/80 hover:text-rose-gold transition-colors text-sm break-all">
                  <Mail className="w-5 h-5 text-rose-gold shrink-0" /> info@danielabeauty.ch
                </a>
              </div>
              <a href="https://www.google.com/maps/dir/?api=1&destination=Seengerstrasse+11,+5706+Boniswil"
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose-gold text-white px-6 py-3 rounded-sm font-heading font-semibold text-sm hover:bg-rose-deep transition-all shadow-soft">
                <MapPin className="w-4 h-4" /> Route in Google Maps öffnen
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-5 md:px-8">
            <ScrollReveal className="text-center mb-12">
              <h2 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl">Häufige Fragen</h2>
            </ScrollReveal>
            <div className="space-y-4">
              {data.faq.map((item, i) => (
                <ScrollReveal key={item.q} delay={i * 80} className="bg-rose-cream rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-rose-ink text-base mb-2">{item.q}</h3>
                  <p className="text-rose-ink/70 text-sm leading-[1.7]">{item.a}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bewertungen */}
        <section className="py-20 bg-rose-cream">
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <ScrollReveal>
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-6 h-6 fill-rose-gold text-rose-gold" />
                ))}
              </div>
              <h2 className="font-heading font-bold text-rose-ink text-2xl md:text-3xl mb-4">
                Vertrauen, das man sieht
              </h2>
              <p className="text-rose-ink/70 text-base leading-[1.7] mb-6">
                Viele Kundinnen aus {data.name} und der Region Aargau haben ihre Gesichtsbehandlung bei Daniela Beauty World bereits mit einer Bewertung bedacht.
              </p>
              <a href="https://www.google.com/search?q=daniela+bauty+world" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-rose-gold font-heading font-medium text-sm hover:text-rose-deep transition-colors">
                Alle Bewertungen ansehen <ExternalLink className="w-4 h-4" />
              </a>
            </ScrollReveal>
          </div>
        </section>

        {/* Weitere Regionen */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-5 md:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-heading font-semibold text-rose-ink text-xl mb-6">Auch in weiteren Regionen für dich da</h2>
              <Link to="/regionen" className="inline-block text-rose-gold text-sm font-heading font-semibold hover:text-rose-deep transition-colors mb-4">Alle Regionen</Link>
              <div className="flex flex-wrap justify-center gap-2">
                {regionen.filter((r) => r.slug !== data.slug).map((r) => (
                  <Link key={r.slug} to={`/gesichtsbehandlung/${r.slug}`}
                    className="px-4 py-2 rounded-full border border-rose-nude text-rose-ink/70 text-sm hover:border-rose-gold hover:text-rose-gold transition-colors">
                    {r.name}
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        {/* Abschluss CTA */}
        <section className="py-20 gradient-rose">
          <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
            <ScrollReveal>
              <h2 className="font-heading font-bold text-white text-3xl md:text-4xl mb-4">
                Bereit für strahlende Haut, {data.name}?
              </h2>
              <p className="text-white/90 text-base leading-[1.7] mb-8">
                Vereinbare jetzt deinen Termin für eine individuelle Gesichtsbehandlung im Studio Boniswil – ich freue mich auf dich.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-rose-deep px-8 py-4 rounded-sm font-heading font-semibold hover:bg-rose-ink hover:text-white transition-all shadow-luxe">
                Termin buchen <ArrowRight className="w-5 h-5" />
              </a>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}