import ScrollReveal from "@/components/ScrollReveal";
import { Check } from "lucide-react";

const highlights = [
  "Ganzheitlicher Ansatz für Wohlbefinden",
  "Umfassende Fachkompetenz",
  "Individuell zugeschnittene Betreuung",
];

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <ScrollReveal className="relative order-2 lg:order-1">
            <div className="relative rounded-lg overflow-hidden shadow-luxe aspect-[4/5]">
              <img
                src="https://onecdn.io/media/d3b6e39d-366e-417e-b0ed-9e3a66028130/xlg2x"
                alt="Daniela Pacifico – Inhaberin von Daniela Beauty World"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 glass rounded-lg shadow-luxe p-6 max-w-[200px] hidden md:block">
              <p className="font-heading font-bold text-rose-ink text-3xl">Est.</p>
              <p className="text-rose-ink/60 text-sm">Daniela Pacifico<br />Beauty-Expertin</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200} className="order-1 lg:order-2">
            <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
              Das bin ich
            </span>
            <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-6">
              Mein Name ist<br />
              <span className="text-gradient-rose">Daniela Pacifico</span>
            </h2>
            <div className="space-y-4 text-rose-ink/70 text-base leading-[1.7] mb-8">
              <p>Schönheit ist für mich mehr als ein äusserer Eindruck – sie steht für Selbstvertrauen, Wohlbefinden und Persönlichkeit.</p>
              <p>Ich bin Daniela Pacifico und habe Daniela_beauty_world mit viel Leidenschaft und Fachwissen als Ort geschaffen, an dem moderne, wirksame Behandlungen auf individuelle Beratung und hochwertige Pflege treffen.</p>
              <p>Durch kontinuierliche Weiterbildungen und Erfahrung ist es mein Ziel, natürliche Ergebnisse zu erzielen und dich entspannt, strahlend und selbstbewusst zu verabschieden.</p>
              <p className="font-heading font-semibold text-rose-gold text-lg">Wahre Schönheit ist zeitlos. Das Meisterwerk bist du. 💕</p>
            </div>
            <ul className="space-y-3">
              {highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-rose-ink/80">
                  <span className="w-6 h-6 rounded-full bg-rose-gold/15 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5 text-rose-gold" />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}