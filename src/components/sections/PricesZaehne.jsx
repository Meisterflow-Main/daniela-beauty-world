import ScrollReveal from "@/components/ScrollReveal";
import TreatmentPriceCard from "@/components/sections/TreatmentPriceCard";
import { zaehnebehandlungen } from "@/data/zaehnebehandlungen";

export default function PricesZaehne() {
  return (
    <section id="preise-zaehne" className="py-24 md:py-32 bg-rose-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
            Preise
          </span>
          <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-6">
            <span className="text-gradient-rose">Zähne</span>
          </h2>
          <p className="text-rose-ink/70 text-base md:text-lg leading-[1.7]">
            Strahlend schöne Zähne unterstreichen Ausstrahlung, Eleganz und Selbstbewusstsein, für ein Lächeln, das in Erinnerung bleibt.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={120} className="space-y-8">
          {zaehnebehandlungen.map((b) => (
            <TreatmentPriceCard key={b.slug} behandlung={b} />
          ))}
        </ScrollReveal>

        <ScrollReveal delay={160} className="mt-14 text-center">
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold text-sm hover:bg-rose-deep transition-all shadow-soft hover:shadow-luxe"
          >
            Beratung vereinbaren
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}