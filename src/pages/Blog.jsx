import { useState, useMemo } from "react";
import { Search, Filter } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumbs from "@/components/Breadcrumbs";
import ScrollReveal from "@/components/ScrollReveal";

export default function Blog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("Alle");
  const [sort, setSort] = useState("neu");

  const filtered = useMemo(() => {
    let list = blogPosts.filter((p) => {
      const okCat = category === "Alle" || p.category === category;
      const okQuery =
        !query ||
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(query.toLowerCase());
      return okCat && okQuery;
    });
    list = [...list].sort((a, b) =>
      sort === "neu" ? new Date(b.date) - new Date(a.date) : new Date(a.date) - new Date(b.date)
    );
    return list;
  }, [query, category, sort]);

  const usedCats = blogCategories.filter((c) => blogPosts.some((p) => p.category === c));

  return (
    <>
      <Navbar />
      <main>
        <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog" }]} />

        {/* Hero */}
        <section className="pb-16 bg-gradient-rose-soft">
          <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
            <h1 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl mb-6 mt-4">Blog</h1>
            <p className="text-rose-ink/70 text-base md:text-lg leading-[1.8]">
              Herzlich willkommen im Blog von Daniela Beauty World. Hier teile ich mein Fachwissen rund um gesunde Haut, individuelle Pflege und ästhetische Behandlungen, die dein Natürliches betonen statt zu verändern. Du findest Ratgeber zu Gesichtsbehandlungen, Tipps für die tägliche Hautpflege, Anleitungen für den richtigen Umgang mit Produkten und Einblicke in meine beliebtesten Dienstleistungen wie Microneedling, PRX-Therapie und VIP Zahnbleaching. Ausserdem erfährst du, warum Kundinnen aus dem ganzen Aargau bis nach Boniswil reisen und was meine Arbeit vor Ort besonders macht. Der Blog richtet sich an alle, die ihre Haut besser verstehen möchten, sich vor einer Behandlung informieren oder einfach Inspiration für mehr Wohlbefinden suchen. Regelmässiges Lesen lohnt sich, weil ich neue Beiträge veröffentliche, aktuelle Pflegethemen verständlich erkläre und dir helfe, die richtigen Entscheidungen für deine Schönheitsroutine zu treffen.
            </p>
          </div>
        </section>

        {/* Filter + Suche */}
        <section className="py-10 bg-white border-y border-rose-nude">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-rose-ink/40" />
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Artikel durchsuchen..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-sm border border-rose-nude bg-rose-cream/40 text-sm focus:outline-none focus:border-rose-gold"
                />
              </div>
              <div className="flex items-center gap-3">
                <label className="flex items-center gap-1.5 text-sm text-rose-ink/60">
                  <Filter className="w-4 h-4" /> Sortieren:
                </label>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="px-3 py-2.5 rounded-sm border border-rose-nude bg-white text-sm focus:outline-none focus:border-rose-gold"
                >
                  <option value="neu">Neueste Beiträge</option>
                  <option value="alt">Älteste Beiträge</option>
                </select>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-5">
              {["Alle", ...usedCats].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    category === cat
                      ? "bg-rose-gold text-white"
                      : "bg-rose-cream text-rose-ink/70 hover:bg-rose-nude"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Karten */}
        <section className="py-16 bg-rose-cream/30">
          <div className="max-w-7xl mx-auto px-5 md:px-8">
            {filtered.length === 0 ? (
              <p className="text-center text-rose-ink/60 py-20">Keine Artikel gefunden. Versuche eine andere Suchanfrage.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((post, i) => (
                  <ScrollReveal key={post.slug} delay={i * 60}>
                    <BlogCard post={post} />
                  </ScrollReveal>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}