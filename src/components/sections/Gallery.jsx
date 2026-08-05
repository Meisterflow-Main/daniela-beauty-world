import ScrollReveal from "@/components/ScrollReveal";

const galleryImages = [
  "https://onecdn.io/media/4eac3125-fc90-4bd3-9dd8-3b3548ebb99a/xlg2x",
  "https://onecdn.io/media/d4b28f96-e420-487a-b9dd-76fc4b84fd60/xlg2x",
  "https://onecdn.io/media/408b96a1-6121-4b4a-b44e-74cff6c25aa6/xlg2x",
  "https://onecdn.io/media/a5171221-5c96-4294-84e4-34d508c9f8d3/xlg2x",
  "https://onecdn.io/media/09c60d5d-7af3-4d39-95f1-bf3bd4af71c9/xlg2x",
  "https://onecdn.io/media/787252b5-07de-45b3-a79f-fb29dcbb60e4/xlg2x",
  "https://onecdn.io/media/55182516-4551-4768-8bf3-d99be5a4a38c/xlg2x",
  "https://onecdn.io/media/22364074-94ff-4fde-815d-327dd47a0237/xlg2x",
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 md:py-32 bg-rose-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
            Einblicke
          </span>
          <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight">
            Meine <span className="text-gradient-rose">Galerie</span>
          </h2>
        </ScrollReveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {galleryImages.map((src, i) => (
            <ScrollReveal
              key={i}
              delay={(i % 4) * 100}
              className="group relative overflow-hidden rounded-lg cursor-pointer aspect-square"
            >
              <img
                src={src}
                alt={`Daniela Beauty World Galerie Bild ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-rose-ink/0 group-hover:bg-rose-ink/20 transition-colors duration-500" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}