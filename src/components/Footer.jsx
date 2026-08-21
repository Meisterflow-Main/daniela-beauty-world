import { Link } from "react-router-dom";
import { Instagram, Facebook, MessageCircle, Phone, MapPin, Mail } from "lucide-react";
import { regionen } from "@/data/gesichtsbehandlungRegionen";

const dienstleistungen = [
  { label: "Mikrodermabrasion", slug: "mikrodermabrasion" },
  { label: "Microneedling", slug: "microneedling" },
  { label: "PRX-Therapie", slug: "prx-therapie" },
  { label: "Bio Face Lifting", slug: "bio-face-lifting" },
  { label: "EM SLIM", slug: "em-slim" },
  { label: "VIP Zahnbleaching", slug: "vip-zahnbleaching" },
];

export default function Footer() {
  return (
    <footer className="bg-rose-ink text-white/80">
      <div className="max-w-7xl mx-auto px-5 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-1">
            <h3 className="font-heading font-bold text-xl text-white mb-4">
              Daniela<span className="text-rose-light"> Beauty</span> World
            </h3>
            <p className="text-sm leading-relaxed text-white/60 mb-6">
              Dein Kosmetikstudio für individuelle Schönheit und Wohlbefinden in Boniswil.
            </p>
            <div className="flex items-center gap-3">
              <a href="https://www.instagram.com/daniela_beauty_world/?hl=de" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose-gold hover:border-rose-gold transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://api.whatsapp.com/send?phone=+41797505152&text=Hallo%20liebe%20Daniela%21" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose-gold hover:border-rose-gold transition-all">
                <MessageCircle className="w-4 h-4" />
              </a>
              <a href="https://www.facebook.com/p/Daniela_beauty_world-100063804061464/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-rose-gold hover:border-rose-gold transition-all">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Dienstleistungen</h4>
            <ul className="space-y-3 text-sm">
              {dienstleistungen.map((d) => (
                <li key={d.slug}><Link to={`/behandlung/${d.slug}`} className="hover:text-rose-light transition-colors">{d.label}</Link></li>
              ))}
              <li><Link to="/dienstleistungen" className="text-rose-light hover:text-rose-gold transition-colors font-medium">Alle Dienstleistungen</Link></li>
              <li><Link to="/aivie" className="text-rose-light hover:text-rose-gold transition-colors font-medium">AIVIE – Pre-Launch</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Regionen</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/regionen" className="text-rose-light hover:text-rose-gold transition-colors font-medium">Alle Regionen</Link></li>
              {regionen.map((r) => (
                <li key={r.slug}>
                  <Link to={`/gesichtsbehandlung/${r.slug}`} className="hover:text-rose-light transition-colors">{r.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Rechtliches</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/impressum" className="hover:text-rose-light transition-colors">Impressum</Link></li>
              <li><Link to="/datenschutz" className="hover:text-rose-light transition-colors">Datenschutz</Link></li>
              <li><Link to="/faq" className="hover:text-rose-light transition-colors">FAQ</Link></li>
              <li><Link to="/blog" className="hover:text-rose-light transition-colors">Blog</Link></li>
              <li><a href="https://search.google.com/local/writereview?placeid=ChIJo16hKbsXkEcRUy7qX8cglAs&utm_source" target="_blank" rel="noopener noreferrer" className="hover:text-rose-light transition-colors">Bewertung abgeben</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-4 text-sm uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-light mt-0.5 shrink-0" />
                <span>Seengerstrasse 11<br />5706 Boniswil, Schweiz</span>
              </li>
              <li>
                <a href="tel:+41797505152" className="flex items-center gap-2 hover:text-rose-light transition-colors">
                  <Phone className="w-4 h-4 text-rose-light shrink-0" /> +41 79 750 51 52
                </a>
              </li>
              <li>
                <a href="mailto:info@danielabeauty.ch" className="flex items-center gap-2 hover:text-rose-light transition-colors break-all">
                  <Mail className="w-4 h-4 text-rose-light shrink-0" /> info@danielabeauty.ch
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-xs text-white/40 leading-relaxed">
          <p className="mb-3">
            Diese Website ist nicht Teil der Facebook-Website oder von Facebook Inc. Darüber hinaus wird diese Website in keiner Weise von Facebook unterstützt. Facebook ist eine Marke von Facebook, Inc. Wir verwenden auf dieser Website Remarketing-Pixel/Cookies von Google, um erneut mit den Besuchern unserer Website zu kommunizieren und sicherzustellen, dass wir sie in Zukunft mit relevanten Nachrichten und Informationen erreichen können.
          </p>
          <p>© {new Date().getFullYear()} Daniela Beauty World · Daniela Pacifico · Alle Rechte vorbehalten</p>
        </div>
      </div>
    </footer>
  );
}