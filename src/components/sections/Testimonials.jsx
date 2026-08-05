import ScrollReveal from "@/components/ScrollReveal";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Anna",
    treatment: "PRX-Therapie",
    text: "Die PRX-Therapie bei Daniela ist ein echtes Anti-Aging-Wunder! Meine Haut fühlt sich fester an, wirkt frischer und richtig revitalisiert – und das ganz ohne Nadeln. Ich habe mich von Anfang an wohlgefühlt. Daniela nimmt sich Zeit und arbeitet sehr präzise. Ich komme definitiv wieder.",
  },
  {
    name: "Martha",
    treatment: "Wimpernlifting",
    text: "Ich war zum Wimpernlifting bei Daniela und bin begeistert! Meine Wimpern sehen natürlich, aber mega schön aus. Daniela ist super herzlich und man fühlt sich sofort wohl. Komme definitiv wieder! 💕",
  },
  {
    name: "Nadja",
    treatment: "Collagenfadenlifting",
    text: "Ich habe das Collagenfadenlifting ausprobiert und bin total überrascht vom Ergebnis. Meine Gesichtskonturen sind definierter und die Haut wirkt sichtbar gestrafft. Genau der natürliche Lifting-Effekt, den ich wollte – ohne operativen Eingriff. Daniela versteht ihr Handwerk!",
  },
  {
    name: "Mia",
    treatment: "Erste Behandlung",
    text: "Ich war ziemlich nervös vor meiner ersten Behandlung, aber Daniela hat mir direkt die Angst genommen. Ihre ruhige Art und ihr Wissen haben mich total überzeugt. Am Ende war das Ergebnis wunderschön. Danke, Daniela! 🌸😊",
  },
  {
    name: "Tanja",
    treatment: "Microneedling",
    text: "Ich habe bei Daniela das Microneedling gemacht und bin begeistert! Meine Haut wirkt deutlich straffer, kleine Fältchen sind gemildert und mein Teint ist viel ebenmässiger. Schon nach der ersten Behandlung habe ich einen Unterschied gesehen. Daniela arbeitet extrem professionell und erklärt alles sehr verständlich. Absolute Empfehlung für alle, die ihre Haut sichtbar verjüngen möchten!",
  },
  {
    name: "Roxana",
    treatment: "Stammkundin",
    text: "Gehe seit einigen Monaten regelmässig zu Daniela und jedes Mal fühle ich mich wie neu geboren. Man merkt, dass sie ihre Kundinnen wirklich ernst nimmt. Ich kann sie von Herzen empfehlen! 💖",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-gradient-to-b from-rose-cream to-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
            Bewertungen
          </span>
          <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-6">
            Das sagen meine <span className="text-gradient-rose">Kunden</span>
          </h2>
          <p className="text-rose-ink/70 text-lg leading-[1.7]">
            Echte Erfahrungen und sichtbare Erfolge – lies, wie meine Arbeit das Wohlbefinden und die Zufriedenheit meiner Kunden nachhaltig gesteigert hat.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={(i % 3) * 150}>
              <article className="h-full bg-white rounded-lg shadow-soft hover:shadow-luxe transition-all duration-500 p-7 flex flex-col">
                <Quote className="w-8 h-8 text-rose-gold/30 mb-4" />
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-rose-gold text-rose-gold" />
                  ))}
                </div>
                <p className="text-rose-ink/70 text-sm leading-[1.7] flex-1 mb-6">{t.text}</p>
                <div className="flex items-center gap-3 pt-4 border-t border-rose-nude">
                  <div className="w-11 h-11 rounded-full gradient-rose flex items-center justify-center text-white font-heading font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <p className="font-heading font-semibold text-rose-ink text-sm">{t.name}</p>
                    <p className="text-rose-gold text-xs">{t.treatment}</p>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}