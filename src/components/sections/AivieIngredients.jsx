import ScrollReveal from "@/components/ScrollReveal";
import { Image } from "@/components/ui/image";
import { aivieIngredients, aivieBrand } from "@/data/aivieData";

export default function AivieIngredients() {
  return (
    <section id="wirkstoffe" className="py-24 bg-rose-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.25em] uppercase mb-4 block">Die Wirkstoffe</span>
          <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl mb-4">Intelligente Formel</h2>
          <p className="text-rose-ink/60 max-w-2xl mx-auto">Drei hochwirksame Wirkstoffe, die deine Haut auf zellulärer Ebene revitalisieren.</p>
        </ScrollReveal>
        <div className="space-y-20">
          {aivieIngredients.map((ing, i) => (
            <ScrollReveal key={ing.title} delay={i * 100}>
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                <div className={`relative aspect-[4/5] rounded-lg overflow-hidden shadow-luxe ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                  <Image src={ing.image} alt={ing.title} fittingType="fill" className="w-full h-full block" />
                </div>
                <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                  <span className="text-rose-ink/40 text-xs font-heading tracking-[0.3em] uppercase mb-3 block">{ing.label}</span>
                  <h3 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl mb-6 tracking-tight">{ing.title}</h3>
                  <p className="text-rose-ink/70 text-lg leading-relaxed">
                    {ing.body.map((seg, idx) =>
                      seg.bold ? (
                        <strong key={idx} className="font-semibold text-rose-ink">{seg.text}</strong>
                      ) : (
                        <span key={idx}>{seg.text}</span>
                      )
                    )}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal className="text-center mt-24">
          <p className="font-heading font-bold text-2xl tracking-[0.3em] text-rose-ink">{aivieBrand.name}</p>
          <p className="text-rose-deep text-xs tracking-[0.3em] uppercase mt-2">{aivieBrand.sub}</p>
          <p className="text-rose-gold text-sm italic mt-1">{aivieBrand.tagline}</p>
        </ScrollReveal>
      </div>
    </section>
  );
}