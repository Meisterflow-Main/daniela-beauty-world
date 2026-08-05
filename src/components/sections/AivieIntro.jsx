import ScrollReveal from "@/components/ScrollReveal";

export default function AivieIntro() {
  return (
    <section id="aivie-intro" className="relative py-20 md:py-28 bg-white">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <ScrollReveal>
          <h2 className="font-heading font-bold text-rose-ink text-2xl sm:text-3xl md:text-4xl leading-tight mb-8">
            Wen Hautpflege die Haut verstehst
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="space-y-6 text-rose-ink/75 text-base md:text-lg leading-relaxed">
            <p>
              Willkommen in der Welt von <strong className="font-semibold text-rose-ink">AIVIE</strong>
            </p>
            <p>
              <strong className="font-semibold text-rose-ink">AIVIE</strong> ist mehr als eine Creme. Es ist ein neues Verständnis von Premium-Hautpflege. Intelligent. Sinnlich. Geschaffen für Haut, die höchste Ansprüche verdient. Luxuspflege mit intelligenter Wirkstoffpower:
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}