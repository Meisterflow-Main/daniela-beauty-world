import { Link } from "react-router-dom";
import { MessageCircle, CalendarClock } from "lucide-react";
import { blogPosts, blogCategories } from "@/data/blogPosts";
import BlogCard from "@/components/BlogCard";

export default function BlogSidebar() {
  const neueste = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 4);
  const beliebte = blogPosts.filter((p) => p.featured).slice(0, 4);

  return (
    <aside className="space-y-8">
      <div className="bg-white rounded-xl border border-rose-nude p-5">
        <h3 className="font-heading font-bold text-rose-ink text-sm uppercase tracking-wider mb-4 flex items-center gap-2">
          <CalendarClock className="w-4 h-4 text-rose-gold" /> Neueste Beiträge
        </h3>
        <div className="space-y-4">{neueste.map((p) => <BlogCard key={p.slug} post={p} compact />)}</div>
      </div>

      <div className="bg-white rounded-xl border border-rose-nude p-5">
        <h3 className="font-heading font-bold text-rose-ink text-sm uppercase tracking-wider mb-4">Beliebte Beiträge</h3>
        <div className="space-y-4">{beliebte.map((p) => <BlogCard key={p.slug} post={p} compact />)}</div>
      </div>

      <div className="bg-white rounded-xl border border-rose-nude p-5">
        <h3 className="font-heading font-bold text-rose-ink text-sm uppercase tracking-wider mb-4">Kategorien</h3>
        <ul className="space-y-2">
          {blogCategories.map((cat) => {
            const count = blogPosts.filter((p) => p.category === cat).length;
            if (count === 0) return null;
            return (
              <li key={cat}>
                <Link to={`/blog`} className="flex items-center justify-between text-sm text-rose-ink/70 hover:text-rose-gold transition-colors">
                  <span>{cat}</span>
                  <span className="text-xs text-rose-ink/40">{count}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="bg-gradient-rose-soft rounded-xl border border-rose-nude p-6 text-center">
        <h3 className="font-heading font-bold text-rose-ink text-lg mb-2">Noch Fragen?</h3>
        <p className="text-sm text-rose-ink/70 mb-4">Ich berate dich persönlich und unverbindlich.</p>
        <Link to="/kontakt" className="block bg-rose-gold text-white px-4 py-2.5 rounded-sm text-sm font-heading font-semibold hover:bg-rose-deep transition-all mb-2">Termin buchen</Link>
        <a href="https://api.whatsapp.com/send?phone=+41797505152&text=Hallo%20liebe%20Daniela%21" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 text-sm text-rose-ink/70 hover:text-rose-gold transition-colors">
          <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp
        </a>
      </div>
    </aside>
  );
}