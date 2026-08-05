import { useEffect, useState } from "react";
import { Sparkles, Bell } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Image } from "@/components/ui/image";
import { aivieBrand, aivieProductImage } from "@/data/aivieData";

const LAUNCH_DATE = new Date("2026-12-01T10:00:00");

function useCountdown(target) {
  const [now, setNow] = useState(() => Date.now());
  useEffect(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, target.getTime() - now);
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    mins: Math.floor((diff % 3600000) / 60000),
    secs: Math.floor((diff % 60000) / 1000),
  };
}

export default function AivieHero() {
  const t = useCountdown(LAUNCH_DATE);
  const units = [
    { label: "Tage", value: t.days },
    { label: "Stunden", value: t.hours },
    { label: "Minuten", value: t.mins },
    { label: "Sekunden", value: t.secs },
  ];
  return (
    <section id="aivie-hero" className="relative min-h-screen flex items-center overflow-hidden gradient-rose-soft pt-28 pb-16">
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-rose-pink/30 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-rose-nude/50 blur-3xl" />
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 w-full grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center gap-2 text-rose-gold text-sm font-heading font-medium tracking-[0.25em] uppercase mb-6">
            <Sparkles className="w-4 h-4" /> Bald verfügbar
          </span>
          <h1 className="font-heading font-bold text-rose-ink text-5xl sm:text-6xl lg:text-7xl leading-[1.05] tracking-tight mb-4">
            {aivieBrand.name}
          </h1>
          <p className="text-rose-deep text-sm font-heading tracking-[0.3em] uppercase mb-3">{aivieBrand.sub}</p>
          <p className="text-rose-gold text-lg font-heading italic mb-8">{aivieBrand.tagline}</p>
          <p className="text-rose-ink/70 text-base md:text-lg leading-relaxed max-w-xl mb-10">
            Die nächste Generation der Hautpflege – intelligente Wirkstoffe, luxuriöse Texturen und sichtbare Ergebnisse. Erlebe die Zukunft der Schönheit.
          </p>
          <div className="grid grid-cols-4 gap-3 max-w-md mb-10">
            {units.map((u) => (
              <div key={u.label} className="glass rounded-sm p-3 text-center shadow-soft">
                <div className="font-heading font-bold text-2xl text-rose-ink tabular-nums">{String(u.value).padStart(2, "0")}</div>
                <div className="text-[10px] uppercase tracking-wider text-rose-ink/50 mt-1">{u.label}</div>
              </div>
            ))}
          </div>
          <a href="#warteliste" className="group inline-flex items-center justify-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold hover:bg-rose-deep transition-all shadow-luxe hover:-translate-y-1">
            <Bell className="w-5 h-5" /> Benachrichtige mich
          </a>
        </div>
        <ScrollReveal delay={200} className="relative">
          <div className="relative aspect-square rounded-lg overflow-hidden shadow-luxe">
            <Image src={aivieProductImage} alt="AIVIE Elevated AI Cream" fittingType="fill" className="w-full h-full block" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}