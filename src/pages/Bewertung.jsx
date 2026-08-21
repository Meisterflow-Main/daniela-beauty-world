import { Star, ExternalLink } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { useEffect } from "react";

const GOOGLE_REVIEW_LINK =
  "https://search.google.com/local/writereview?placeid=ChIJo16hKbsXkEcRUy7qX8cglAs&utm_source";

export default function Bewertung() {
  useEffect(() => {
    document.title = "Bewertung abgeben | Daniela Beauty World";
  }, []);

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen gradient-rose-soft flex items-center justify-center">
        <div className="max-w-2xl mx-auto px-5 md:px-8 text-center">
          <ScrollReveal>
            <div className="w-20 h-20 rounded-full gradient-rose flex items-center justify-center mx-auto mb-8">
              <Star className="w-10 h-10 text-white" fill="white" />
            </div>
            <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
              Bewertung
            </span>
            <h1 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-6">
              Deine Meinung <span className="text-gradient-rose">zählt</span>
            </h1>
            <p className="text-rose-ink/70 text-base md:text-lg leading-[1.7] mb-10">
              Vielen Dank, dass du dir einen Moment nimmst! Mit nur einem Klick kannst du deine Erfahrung bei Daniela Beauty World auf Google teilen – es dauert keine Minute.
            </p>
            <a
              href={GOOGLE_REVIEW_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold text-base hover:bg-rose-deep transition-all shadow-luxe hover:-translate-y-1"
            >
              Auf Google bewerten <ExternalLink className="w-5 h-5" />
            </a>
            <p className="mt-6 text-rose-ink/50 text-xs">
              Du wirst direkt zur Google-Bewertung weitergeleitet.
            </p>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}