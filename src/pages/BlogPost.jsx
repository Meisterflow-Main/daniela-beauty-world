import { useState, useEffect } from "react";
import { Navigate, useParams, Link } from "react-router-dom";
import { CalendarDays, Clock, User, ListTree, ChevronDown, MessageCircle, Phone } from "lucide-react";
import { getPostBySlug, formatDate, blogPosts } from "@/data/blogPosts";
import { Image } from "@/components/ui/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Breadcrumbs from "@/components/Breadcrumbs";
import BlogCard from "@/components/BlogCard";
import BlogSidebar from "@/components/BlogSidebar";
import ScrollReveal from "@/components/ScrollReveal";

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPostBySlug(slug);
  const [activeFaq, setActiveFaq] = useState(0);

  useEffect(() => {
    window.scrollTo({ top: 0 });
    if (!post) return;
    document.title = post.seo.title;
    let meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", post.seo.description);
    let og = document.querySelector('meta[property="og:title"]');
    if (og) og.setAttribute("content", post.seo.title);
    let ogd = document.querySelector('meta[property="og:description"]');
    if (ogd) ogd.setAttribute("content", post.seo.description);

    const schema = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.title,
      description: post.seo.description,
      datePublished: post.date,
      author: { "@type": "Person", name: post.author },
      publisher: { "@type": "Organization", name: "Daniela Beauty World" },
      mainEntityOfPage: `https://danielabeauty.ch/blog/${post.slug}`,
    };
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    };
    const tag = document.createElement("script");
    tag.type = "application/ld+json";
    tag.dataset.blogSchema = "1";
    tag.innerHTML = JSON.stringify([schema, faqSchema]);
    document.head.appendChild(tag);
    return () => {
      document.head.querySelectorAll('script[data-blog-schema="1"]').forEach((s) => s.remove());
    };
  }, [post]);

  if (!post) return <Navigate to="/blog" replace />;

  const toc = post.content.map((s, i) => ({ id: `${slugify(s.heading)}-${i}`, label: s.heading }));
  const related = post.related.map((r) => getPostBySlug(r)).filter(Boolean);

  return (
    <>
      <Navbar />
      <Breadcrumbs items={[{ label: "Home", to: "/" }, { label: "Blog", to: "/blog" }, { label: post.title }]} />

      {/* Hero */}
      <section className="pb-10">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <span className="text-xs font-heading font-semibold text-rose-gold uppercase tracking-wider">{post.category}</span>
          <h1 className="font-heading font-bold text-rose-ink text-3xl md:text-4xl mt-2 mb-5 leading-tight">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-rose-ink/60">
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" /> {post.author}</span>
            <span className="flex items-center gap-1.5"><CalendarDays className="w-4 h-4" /> {formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" /> {post.readMinutes} Min. Lesezeit</span>
          </div>
        </div>
        <div className="max-w-4xl mx-auto px-5 md:px-8 mt-8">
          <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-luxe">
            <Image src={post.image} alt={post.title} fittingType="fill" className="w-full h-full" />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-5 md:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10">
          {/* Hauptspalte */}
          <article className="min-w-0">
            {/* Inhaltsverzeichnis */}
            <div className="bg-rose-cream/50 rounded-xl border border-rose-nude p-5 mb-8">
              <h2 className="flex items-center gap-2 font-heading font-bold text-rose-ink text-sm uppercase tracking-wider mb-3">
                <ListTree className="w-4 h-4 text-rose-gold" /> Inhaltsverzeichnis
              </h2>
              <ol className="space-y-1.5 list-decimal list-inside text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="text-rose-ink/70 hover:text-rose-gold transition-colors">{t.label}</a>
                  </li>
                ))}
              </ol>
            </div>

            {/* Inhalt */}
            <div className="space-y-8">
              {post.content.map((s, i) => {
                const id = `${slugify(s.heading)}-${i}`;
                return (
                  <section key={id} id={id} className="scroll-mt-28">
                    <h2 className="font-heading font-bold text-rose-ink text-2xl mb-3">{s.heading}</h2>
                    {s.body.map((p, j) => (
                      <p key={j} className="text-rose-ink/75 text-base leading-[1.8] mb-3">{p}</p>
                    ))}
                  </section>
                );
              })}
            </div>

            {/* Interne Verlinkungen */}
            <div className="flex flex-wrap gap-2 mt-8 pt-6 border-t border-rose-nude text-sm">
              <span className="text-rose-ink/50">Weiterlesen:</span>
              <Link to="/dienstleistungen" className="text-rose-gold hover:text-rose-deep transition-colors">Dienstleistungen</Link>
              <Link to="/regionen" className="text-rose-gold hover:text-rose-deep transition-colors">Regionen</Link>
              <Link to="/faq" className="text-rose-gold hover:text-rose-deep transition-colors">FAQ</Link>
              <Link to="/kontakt" className="text-rose-gold hover:text-rose-deep transition-colors">Kontakt</Link>
              <Link to="/blog" className="text-rose-gold hover:text-rose-deep transition-colors">Alle Beiträge</Link>
            </div>

            {/* FAQ */}
            <div className="mt-12">
              <h2 className="font-heading font-bold text-rose-ink text-2xl mb-5">Häufige Fragen</h2>
              <div className="space-y-3">
                {post.faq.map((f, i) => (
                  <div key={i} className="bg-white rounded-lg border border-rose-nude overflow-hidden">
                    <button
                      onClick={() => setActiveFaq(activeFaq === i ? -1 : i)}
                      className="flex items-center justify-between w-full text-left px-5 py-4 hover:bg-rose-cream/40 transition-colors"
                    >
                      <span className="font-heading font-semibold text-rose-ink text-sm md:text-base">{f.q}</span>
                      <ChevronDown className={`w-4 h-4 text-rose-gold shrink-0 transition-transform ${activeFaq === i ? "rotate-180" : ""}`} />
                    </button>
                    {activeFaq === i && (
                      <p className="px-5 pb-5 text-rose-ink/70 text-sm leading-relaxed">{f.a}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="mt-12 bg-gradient-rose rounded-2xl p-8 text-center">
              <h3 className="font-heading font-bold text-white text-2xl mb-3">Bereit für deinen Termin?</h3>
              <p className="text-white/85 text-sm mb-6 max-w-md mx-auto">Ich berate dich persönlich und unverbindlich. Wähle den Weg, der dir am besten passt.</p>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <Link to="/kontakt" className="bg-white text-rose-ink px-5 py-2.5 rounded-sm text-sm font-heading font-semibold hover:bg-rose-cream transition-all">Termin buchen</Link>
                <a href="https://api.whatsapp.com/send?phone=+41797505152&text=Hallo%20liebe%20Daniela%21" target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white px-5 py-2.5 rounded-sm text-sm font-heading font-semibold inline-flex items-center gap-2 hover:opacity-90 transition-opacity">
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a href="tel:+41797505152" className="border border-white/40 text-white px-5 py-2.5 rounded-sm text-sm font-heading font-semibold inline-flex items-center gap-2 hover:bg-white/10 transition-colors">
                  <Phone className="w-4 h-4" /> Anrufen
                </a>
              </div>
            </div>

            {/* Verwandte Artikel */}
            {related.length > 0 && (
              <div className="mt-14">
                <h3 className="font-heading font-bold text-rose-ink text-2xl mb-6">Verwandte Artikel</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {related.map((p) => <BlogCard key={p.slug} post={p} />)}
                </div>
              </div>
            )}

            {/* Mobile Sidebar */}
            <div className="lg:hidden mt-12">
              <BlogSidebar />
            </div>
          </article>

          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <div className="sticky top-28">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}