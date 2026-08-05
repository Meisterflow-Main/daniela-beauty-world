import ScrollReveal from "@/components/ScrollReveal";
import { ArrowUpRight } from "lucide-react";

const treatments = [
  {
    title: "Gesicht",
    image: "https://onecdn.io/media/47372495-8300-4851-adac-7f9af58e5c2e/xlg2x",
    description: "Individuell abgestimmte Gesichtsbehandlungen für reine, strahlende und sichtbar verjüngte Haut, von tiefenwirksamer Reinigung bis zu modernem Anti-Aging mit Sofort-Effekt.",
    tag: "Anti-Aging · Reinigung · Verjüngung",
  },
  {
    title: "Körper",
    image: "https://onecdn.io/media/49a6a982-cdba-4db5-8e60-cf311a9f7103/xlg2x",
    description: "Geniesse exklusive Körperbehandlungen, die Körper und Geist in Einklang bringen. Hochwertige Methoden und persönliche Beratung stehen dabei im Mittelpunkt.",
    tag: "Formung · Entspannung · Pflege",
  },
  {
    title: "Zähne",
    image: "https://onecdn.io/media/94ce8c12-7972-48bb-91a5-bcbe10370ae9/xlg2x",
    description: "Für ein sichtbar helleres, gepflegtes Lächeln biete ich schonende Zahnbleaching-Behandlungen und exklusive VIP-Angebote mit Sofort-Effekt.",
    tag: "Bleaching · VIP-Angebote · Lächeln",
  },
];

export default function Treatments() {
  return (
    <section id="treatments" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
            Leistungen
          </span>
          <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-6">
            Das sind meine <span className="text-gradient-rose">Behandlungen</span>
          </h2>
          <p className="text-rose-ink/70 text-lg leading-[1.7]">
          Entdecke Behandlungen, die deine natürliche Schönheit hervorheben und dein Wohlbefinden steigern. Mit moderner Technik und hochwertigen Produkten sorge ich für Anwendungen, die genau zu deiner Haut und deinen Wünschen passen.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {treatments.map((t, i) => (
            <ScrollReveal key={t.title} delay={i * 150}>
              <article className="group relative overflow-hidden rounded-lg shadow-soft hover:shadow-luxe transition-all duration-500 bg-white">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={t.image}
                    alt={`${t.title} Behandlung bei Daniela Beauty World`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-ink/80 via-rose-ink/10 to-transparent" />
                  <span className="absolute top-4 left-4 glass px-3 py-1.5 rounded-sm text-xs font-heading font-medium text-rose-ink">
                    {t.tag}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="font-heading font-bold text-white text-2xl mb-2">{t.title}</h3>
                    <a href="#contact" className="inline-flex items-center gap-1 text-rose-light text-sm font-heading font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Termin buchen <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-rose-ink/70 text-sm leading-[1.7]">{t.description}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}