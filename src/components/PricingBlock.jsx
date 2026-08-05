import { Clock } from "lucide-react";

// Flexible Preis-Darstellung für Behandlungen.
// Unterstützt `pricing` (Array) oder klassische Felder (price/duration/options/kuren/addons).
export default function PricingBlock({ behandlung }) {
  const t = behandlung;

  if (t.pricing && t.pricing.length > 0) {
    return (
      <div className="space-y-3">
        {t.pricing.map((p, i) => {
          if (p.kind === "heading") {
            return (
              <p key={i} className="text-rose-ink/60 text-xs font-heading font-semibold tracking-[0.12em] uppercase pt-1">
                {p.value}
              </p>
            );
          }
          if (p.kind === "abo") {
            return (
              <div key={i} className="flex justify-between items-baseline gap-3">
                <span className="font-heading font-semibold text-rose-ink text-sm md:text-base">
                  {p.label} <span className="text-rose-ink/60 font-normal">· {p.note}</span>
                </span>
                <span className="text-rose-ink/60 text-xs whitespace-nowrap">{p.total}</span>
              </div>
            );
          }
          return (
            <p key={i} className="font-heading font-semibold text-rose-ink text-sm md:text-base">
              {p.value}
            </p>
          );
        })}
      </div>
    );
  }

  if (t.options && t.options.length > 0) {
    return (
      <div className="space-y-2">
        {t.options.map((opt) => (
          <p key={opt} className="font-heading font-semibold text-rose-ink text-sm md:text-base">
            {opt}
          </p>
        ))}
      </div>
    );
  }

  return (
    <div>
      <p className="font-heading font-bold text-rose-gold text-3xl mb-2">{t.price}</p>
      <p className="flex items-center gap-2 text-rose-ink/70 text-sm">
        <Clock className="w-4 h-4" /> {t.duration}
      </p>
      {(t.kuren?.length > 0 || t.addons?.length > 0) && (
        <div className="mt-4 pt-4 border-t border-rose-nude space-y-1.5">
          {t.kuren?.map((k) => (
            <p key={k} className="text-rose-ink/75 text-sm font-medium">{k}</p>
          ))}
          {t.addons?.map((a) => (
            <p key={a} className="text-rose-ink/75 text-sm font-medium">{a}</p>
          ))}
        </div>
      )}
    </div>
  );
}