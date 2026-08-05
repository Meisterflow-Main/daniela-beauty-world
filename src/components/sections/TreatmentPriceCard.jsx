import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PricingBlock from "@/components/PricingBlock";

// Einzelne, zentrierte Preiskarte (Pfirsich/Nude) nach dem Vorbild für Körper & Zähne.
export default function TreatmentPriceCard({ behandlung }) {
  return (
    <Link
      to={`/behandlung/${behandlung.slug}`}
      className="group block max-w-xl mx-auto bg-rose-nude rounded-xl p-8 md:p-10 shadow-soft hover:shadow-luxe transition-all duration-500 hover:-translate-y-1"
    >
      <h3 className="font-heading font-bold text-rose-ink text-2xl md:text-3xl mb-3">
        {behandlung.name}
      </h3>
      <p className="text-rose-ink/75 text-sm md:text-base leading-[1.6] mb-6">
        {behandlung.tagline}
      </p>
      <div className="border-t border-rose-ink/10 pt-5">
        <PricingBlock behandlung={behandlung} />
      </div>
      <span className="mt-6 inline-flex items-center gap-1 text-rose-ink text-sm font-heading font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
        Mehr erfahren <ArrowUpRight className="w-4 h-4" />
      </span>
    </Link>
  );
}