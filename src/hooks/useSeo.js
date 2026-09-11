import { useEffect } from "react";
import { setCanonical } from "@/lib/seo";

function upsertMeta(attr, key, content) {
  if (!content) return;
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Zentraler SEO-Hook: setzt Title, Meta Description, Canonical und
 * Open-Graph-Tags pro Seite. Rein technisch – keine sichtbaren Änderungen.
 */
export function useSeo({ title, description, path }) {
  useEffect(() => {
    if (title) document.title = title;
    upsertMeta("name", "description", description);
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", description);
    if (path) upsertMeta("property", "og:url", `https://danielabeauty.ch${path}`);
    setCanonical(path);
    window.scrollTo({ top: 0 });
  }, [title, description, path]);
}