import ScrollReveal from "@/components/ScrollReveal";
import { aivieVideo } from "@/data/aivieData";

export default function AivieVideo() {
  return (
    <section id="film" className="py-24 bg-gradient-to-b from-rose-cream to-white">
      <div className="max-w-5xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.25em] uppercase mb-4 block">In Motion</span>
          <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl">Erlebe AIVIE</h2>
        </ScrollReveal>
        <ScrollReveal>
          <div className="relative aspect-video rounded-lg overflow-hidden shadow-luxe bg-rose-ink">
            <video src={aivieVideo} controls playsInline className="w-full h-full object-cover" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}