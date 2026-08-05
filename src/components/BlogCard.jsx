import { Link } from "react-router-dom";
import { Clock, CalendarDays } from "lucide-react";
import { Image } from "@/components/ui/image";
import { formatDate } from "@/data/blogPosts";

export default function BlogCard({ post, compact = false }) {
  if (compact) {
    return (
      <Link to={`/blog/${post.slug}`} className="group flex gap-3 items-start">
        <div className="w-20 h-20 shrink-0 rounded-md overflow-hidden">
          <Image src={post.image} alt={post.title} fittingType="fill" className="w-full h-full" />
        </div>
        <div className="min-w-0">
          <span className="text-xs font-heading font-semibold text-rose-gold uppercase tracking-wider">{post.category}</span>
          <h4 className="text-sm font-heading font-semibold text-rose-ink leading-snug group-hover:text-rose-gold transition-colors line-clamp-2">{post.title}</h4>
          <span className="text-xs text-rose-ink/50">{formatDate(post.date)}</span>
        </div>
      </Link>
    );
  }

  return (
    <article className="group flex flex-col bg-white rounded-xl overflow-hidden border border-rose-nude shadow-soft hover:shadow-luxe hover:-translate-y-1 transition-all duration-500">
      <Link to={`/blog/${post.slug}`} className="block relative aspect-[16/10] overflow-hidden">
        <Image src={post.image} alt={post.title} fittingType="fill" className="w-full h-full group-hover:scale-105 transition-transform duration-700" />
        <span className="absolute top-3 left-3 bg-white/95 backdrop-blur text-rose-ink text-xs font-heading font-semibold px-3 py-1 rounded-full">{post.category}</span>
      </Link>
      <div className="flex flex-col flex-1 p-5">
        <Link to={`/blog/${post.slug}`}>
          <h3 className="font-heading font-bold text-lg text-rose-ink mb-2 group-hover:text-rose-gold transition-colors leading-snug">{post.title}</h3>
        </Link>
        <p className="text-sm text-rose-ink/70 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between text-xs text-rose-ink/50 mb-4">
          <span className="flex items-center gap-1.5"><CalendarDays className="w-3.5 h-3.5" /> {formatDate(post.date)}</span>
          <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" /> {post.readMinutes} Min.</span>
        </div>
        <Link to={`/blog/${post.slug}`} className="inline-flex items-center justify-center bg-rose-gold text-white px-4 py-2.5 rounded-sm text-sm font-heading font-semibold hover:bg-rose-deep transition-all">
          Artikel lesen
        </Link>
      </div>
    </article>
  );
}