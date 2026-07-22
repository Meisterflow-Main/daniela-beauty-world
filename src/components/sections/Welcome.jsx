import ScrollReveal from "@/components/ScrollReveal";
import { Sparkles } from "lucide-react";

export default function Welcome() {
  return (
    <section id="welcome" className="py-24 md:py-32 bg-gradient-to-b from-white to-rose-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-6">
              <Sparkles className="w-4 h-4" />
              Willkommen
            </span>
            <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-6">
              Willkommen zu<br />
              <span className="text-gradient-rose">Daniela Beauty World</span>
            </h2>
            <p className="text-rose-ink/70 text-lg leading-[1.7] mb-6">
              Deinem Kosmetikstudio für individuelle Schönheit und Wohlbefinden!
            </p>
            <p className="text-rose-ink/70 text-base leading-[1.7] mb-6">
              Mit maßgeschneiderten Behandlungen, modernen Techniken und hochwertigen Produkten biete ich Dir alles, was Deine Haut und Dein Körper verdienen.
            </p>
            <p className="text-rose-ink/70 text-base leading-[1.7] mb-6">
              Ob Gesichtsbehandlungen, Körperformung oder Augenbrauen‒ und Wimpernpflege – bei mir bist Du in besten Händen.
            </p>
            <p className="text-rose-ink/70 text-base leading-[1.7] mb-8">
              Entdecke Deine natürliche Schönheit bei Daniela Beauty World und lass Dich verwöhnen. Ich freue mich auf Deinen Besuch!
            </p>
            <p className="font-heading font-semibold text-rose-gold text-lg">Deine Daniela 💕</p>
          </ScrollReveal>

          <ScrollReveal delay={200} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-luxe aspect-[4/5]">
              <img
                src="https://onecdn.io/media/d23313f1-cf44-45f3-94d5-05b2a226372b/xlg2x"
                alt="Daniela Beauty World Studio Interior"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-rose-gold/20 rounded-lg -z-10 hidden md:block" />
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-rose-gold/30 rounded-lg -z-10 hidden md:block" />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}