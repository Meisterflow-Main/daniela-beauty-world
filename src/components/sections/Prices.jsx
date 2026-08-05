import { Link } from "react-router-dom";
import { Clock, ArrowUpRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { gesichtsbehandlungen } from "@/data/gesichtsbehandlungen";

export default function Prices() {
  return (
    <section id="preise" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <ScrollReveal className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
            Preise
          </span>
          <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-6">
            <span className="text-gradient-rose">Gesicht</span>
          </h2>
          <p className="text-rose-ink/70 text-base md:text-lg leading-[1.7]">
            Hochwertige Gesichtsbehandlungen vereinen moderne Methoden, entspannende Wellnessmomente und eine kostenlose Hautanalyse bei jeder Behandlung – für sichtbar frische, strahlende und gepflegte Haut.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {gesichtsbehandlungen.map((t, i) => (
            <ScrollReveal key={t.slug} delay={i * 80}>
              <Link
                to={`/behandlung/${t.slug}`}
                className="group block h-full bg-rose-pink rounded-xl p-6 shadow-soft hover:shadow-luxe transition-all duration-500 hover:-translate-y-1"
              >
                <h3 className="font-heading font-bold text-rose-ink text-lg leading-snug mb-3">
                  {t.name}
                </h3>
                <p className="text-rose-ink/75 text-sm leading-[1.6] mb-5">
                  {t.tagline}
                </p>

                <div className="space-y-1.5 mb-4">
                  {t.options.length > 0 ? (
                    t.options.map((opt) => (
                      <p key={opt} className="text-rose-ink font-heading font-semibold text-sm">
                        {opt}
                      </p>
                    ))
                  ) : (
                    <>
                      <p className="text-rose-ink font-heading font-bold text-base">
                        {t.price}
                      </p>
                      <p className="flex items-center gap-1.5 text-rose-ink/70 text-sm">
                        <Clock className="w-3.5 h-3.5" /> {t.duration}
                      </p>
                    </>
                  )}
                </div>

                {(t.kuren.length > 0 || t.addons.length > 0) && (
                  <div className="border-t border-rose-ink/10 pt-3 space-y-1">
                    {t.kuren.map((k) => (
                      <p key={k} className="text-rose-ink/70 text-xs font-medium">{k}</p>
                    ))}
                    {t.addons.map((a) => (
                      <p key={a} className="text-rose-ink/70 text-xs font-medium">{a}</p>
                    ))}
                  </div>
                )}

                <span className="mt-5 inline-flex items-center gap-1 text-rose-ink text-sm font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Mehr erfahren <ArrowUpRight className="w-4 h-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={120} className="mt-14 text-center">
          <p className="text-rose-ink/70 text-sm md:text-base mb-6">
            Unentschieden? Ich berate dich gerne persönlich zur passenden Behandlung.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold text-sm hover:bg-rose-deep transition-all shadow-soft hover:shadow-luxe"
          >
            Beratung vereinbaren
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}