import ScrollReveal from "@/components/ScrollReveal";
import { Award, Heart, Sparkles, Clock, Leaf, Wind } from "lucide-react";

const values = [
  { icon: Award, title: "Erfahrene Expertin", desc: "Profitier von meiner langjährigen Erfahrung und Expertise in der Ästhetik." },
  { icon: Heart, title: "Individuelle Beratung", desc: "Massgeschneiderte Behandlungen, die genau auf Deine Bedürfnisse abgestimmt sind." },
  { icon: Sparkles, title: "Moderne Technologien", desc: "Nur fortschrittliche Geräte und hochwertige Produkte für bestmögliche Ergebnisse." },
  { icon: Clock, title: "Langfristige Ergebnisse", desc: "Regelmässige Pflege für nachhaltige Schönheit." },
  { icon: Leaf, title: "Ganzheitlicher Ansatz", desc: "Schönheit und Wohlbefinden gehen bei uns Hand in Hand." },
  { icon: Wind, title: "Entspannte Atmosphäre", desc: "Geniesse eine ruhige und angenehme Umgebung für pure Erholung." },
];

export default function Values() {
  return (
    <section id="values" className="py-24 md:py-32 bg-rose-ink relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-rose-gold blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-rose-light blur-3xl" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-light text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
            Werte
          </span>
          <h2 className="font-heading font-bold text-white text-4xl md:text-5xl leading-tight mb-6">
            Das zeichnet mich aus
          </h2>
          <p className="text-white/60 text-lg leading-[1.7]">
            Bei mir kannst du dich auf klare Werte und eine Arbeitsweise verlassen, die deinen Besuch angenehm und wirkungsvoll machen.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <ScrollReveal key={v.title} delay={(i % 3) * 150}>
              <div className="group h-full bg-white/5 border border-white/10 rounded-lg p-8 hover:bg-white/10 hover:border-rose-gold/40 transition-all duration-500">
                <div className="w-14 h-14 rounded-lg bg-rose-gold/15 flex items-center justify-center mb-5 group-hover:bg-rose-gold group-hover:scale-110 transition-all duration-500">
                  <v.icon className="w-6 h-6 text-rose-light group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-heading font-semibold text-white text-xl mb-3">{v.title}</h3>
                <p className="text-white/60 text-sm leading-[1.7]">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}