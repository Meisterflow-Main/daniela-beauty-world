import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://onecdn.io/media/8890ff44-eb96-48fe-809c-b7e83d7836d0/xlg2x"
          alt="Daniela Beauty World – Kosmetikstudio Behandlung"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rose-ink/70 via-rose-ink/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-ink/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <span className="inline-block text-rose-light text-sm font-heading font-medium tracking-[0.2em] uppercase mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
            Kosmetikstudio · Boniswil
          </span>
          <h1 className="font-heading font-bold text-white text-5xl sm:text-6xl lg:text-7xl leading-[1.05] mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
            Daniela<br />
            <span className="text-gradient-rose">Beauty World</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
            Deine Schönheit in besten Händen – Für ein strahlendes Ich, das von innen und außen leuchtet.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
            <a href="#contact" className="group inline-flex items-center justify-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold text-base hover:bg-rose-deep transition-all shadow-luxe hover:-translate-y-1">
              Jetzt Termin sichern
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#treatments" className="inline-flex items-center justify-center gap-2 border border-white/40 text-white px-8 py-4 rounded-sm font-heading font-semibold text-base hover:bg-white/10 transition-all backdrop-blur-sm">
              Behandlungen entdecken
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 hidden md:block">
        <div className="w-px h-16 bg-gradient-to-b from-white/60 to-transparent" />
      </div>
    </section>
  );
}