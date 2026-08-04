import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import ReelVideo from "@/components/ReelVideo";
import ScrollReveal from "@/components/ScrollReveal";

const REELS = [
  {
    src: "https://media.base44.com/videos/public/6a60cb30ba3b3938399f5ac5/6f0fbcb2b_WhatsAppVideo2026-07-31at001908.mp4",
    title: "Eindrücke aus dem Kosmetikstudio",
  },
  {
    src: "https://media.base44.com/videos/public/6a60cb30ba3b3938399f5ac5/197559031_SCHMERZFREIEHAARENTFERNUNGMITDEMNEUETECHNOLOGIEDIODENLASERHaarfreiindenSommer-K.mp4",
    title: "Schmerzfreie Haarentfernung mit Diodenlaser",
  },
  {
    src: "https://media.base44.com/videos/public/6a60cb30ba3b3938399f5ac5/7aae4007e_KosmetischesZahnbleachingohneWasserstoffperoxidschonendschmerzfreizustrahlendweissenZ.mp4",
    title: "Kosmetisches Zahnbleaching ohne Wasserstoffperoxid",
  },
  {
    src: "https://media.base44.com/videos/public/6a60cb30ba3b3938399f5ac5/c3e56c5c0_SchneHautohneAusfallzeitenDasgehtDiePRX-TherapieistmeineabsoluteLieblingsbehandlun.mp4",
    title: "Schöne Haut ohne Ausfallzeiten – PRX-Therapie",
  },
];

export default function Reels() {
  const trackRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const scrollBy = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("article");
    const step = card ? card.offsetWidth + 16 : 280;
    track.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section id="reels" className="py-24 md:py-28 bg-rose-cream/60">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
                Einblicke
              </span>
              <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-5">
                Erlebe die <span className="text-gradient-rose">Behandlungen</span> in Bewegung
              </h2>
              <p className="text-rose-ink/70 text-base leading-[1.7]">
                Schau dir an, wie modernste Technologie und sanfte, persönliche Anwendung zusammenspielen – echte Eindrücke aus dem Studio, die zeigen, was dich erwartet.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-3">
              <button
                onClick={() => scrollBy(-1)}
                aria-label="Vorherige Videos"
                className="w-12 h-12 rounded-full border border-rose-nude text-rose-ink flex items-center justify-center hover:bg-rose-gold hover:text-white hover:border-rose-gold transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollBy(1)}
                aria-label="Nächste Videos"
                className="w-12 h-12 rounded-full border border-rose-nude text-rose-ink flex items-center justify-center hover:bg-rose-gold hover:text-white hover:border-rose-gold transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <div
            ref={trackRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-1 px-1 scrollbar-thin"
            style={{ scrollbarWidth: "thin" }}
          >
            {REELS.map((r, i) => (
              <ReelVideo
                key={r.src}
                src={r.src}
                title={r.title}
                index={i}
                isMobile={isMobile}
                rootRef={trackRef}
              />
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="mt-14 text-center">
            <p className="text-rose-ink/70 text-sm md:text-base mb-6">
              Überzeugt? Vereinbare jetzt deinen persönlichen Beratungstermin.
            </p>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold text-base hover:bg-rose-deep transition-all shadow-soft hover:shadow-luxe"
            >
              <Calendar className="w-5 h-5" /> Termin buchen
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}