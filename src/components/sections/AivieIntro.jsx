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
              Welcome to the world of <strong className="font-semibold text-rose-ink">AIVIE</strong>
            </p>
            <p>
              <strong className="font-semibold text-rose-ink">AIVIE</strong> is more than a cream. It's a new understanding of premium skincare. Intelligent. Sensual. Created for skin that deserves the highest standards. Luxury care with intelligent active ingredient power:
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}