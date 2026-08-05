import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function Breadcrumbs({ items }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.label,
      ...(it.to ? { item: `https://danielabeauty.ch${it.to}` } : {}),
    })),
  };

  return (
    <div className="max-w-7xl mx-auto px-5 md:px-8 pt-28 md:pt-32">
      <nav className="flex items-center gap-2 text-sm text-rose-ink/60 flex-wrap" aria-label="Brotkrumen">
        {items.map((it, i) => (
          <span key={i} className="flex items-center gap-2">
            {i > 0 && <ChevronRight className="w-3.5 h-3.5" />}
            {it.to && i < items.length - 1 ? (
              <Link to={it.to} className="hover:text-rose-gold transition-colors">{it.label}</Link>
            ) : (
              <span className="text-rose-ink/80">{it.label}</span>
            )}
          </span>
        ))}
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}