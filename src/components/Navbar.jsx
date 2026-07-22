import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Phone, Instagram, MessageCircle, Facebook, ChevronDown } from "lucide-react";
import { regionen } from "@/data/gesichtsbehandlungRegionen";

const navLinks = [
  { label: "Startseite", href: "/#hero" },
  { label: "Über mich", href: "/#about" },
  { label: "Behandlungen", href: "/#treatments" },
  { label: "Galerie", href: "/#gallery" },
  { label: "Kontakt", href: "/#contact" },
];

const socialLinks = [
  { icon: Instagram, href: "https://www.instagram.com/daniela_beauty_world/?hl=de", label: "Instagram" },
  { icon: MessageCircle, href: "https://api.whatsapp.com/send?phone=+41797505152&text=Hallo%20liebe%20Daniela%21%20%0A%0AIch%20w%C3%BCrde%20gerne%20eine%20deiner%20Behandlungen%20buchen.%20%0A%0ALiebe%20Gr%C3%BC%C3%9Fe%21", label: "WhatsApp" },
  { icon: Facebook, href: "https://www.facebook.com/p/Daniela_beauty_world-100063804061464/", label: "Facebook" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [regionsOpen, setRegionsOpen] = useState(false);
  const [mobileRegionsOpen, setMobileRegionsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "glass shadow-soft py-3" : "bg-transparent py-5"}`}>
      <nav className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <span className={`font-heading font-bold text-lg md:text-xl tracking-tight transition-colors ${scrolled ? "text-rose-ink" : "text-white"}`}>
            Daniela<span className="text-rose-gold"> Beauty</span> World
          </span>
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className={`text-sm font-medium transition-colors hover:text-rose-gold ${scrolled ? "text-rose-ink" : "text-white/90"}`}>
              {link.label}
            </a>
          ))}
          <div
            className="relative"
            onMouseEnter={() => setRegionsOpen(true)}
            onMouseLeave={() => setRegionsOpen(false)}
          >
            <button className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-rose-gold ${scrolled ? "text-rose-ink" : "text-white/90"}`}>
              Regionen <ChevronDown className="w-3.5 h-3.5" />
            </button>
            {regionsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="glass shadow-luxe rounded-lg p-3 grid grid-cols-2 gap-1 w-72 animate-fade-in">
                  {regionen.map((r) => (
                    <Link key={r.slug} to={`/gesichtsbehandlung/${r.slug}`} className="px-3 py-2 rounded-sm text-sm text-rose-ink hover:bg-rose-gold hover:text-white transition-colors">
                      {r.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+41797505152" className={`flex items-center gap-1.5 text-sm font-medium transition-colors hover:text-rose-gold ${scrolled ? "text-rose-ink" : "text-white/90"}`}>
            <Phone className="w-4 h-4" />
            +41 79 750 51 52
          </a>
          <div className="flex items-center gap-2">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all hover:bg-rose-gold hover:text-white ${scrolled ? "text-rose-ink border border-rose-nude" : "text-white border border-white/30"}`}>
                <s.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
          <a href="/#contact" className="bg-rose-gold text-white px-5 py-2.5 rounded-sm text-sm font-heading font-semibold hover:bg-rose-deep transition-all shadow-soft hover:shadow-luxe hover:-translate-y-0.5">
            Termin buchen
          </a>
        </div>

        <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menü">
          {open ? <X className={`w-6 h-6 ${scrolled ? "text-rose-ink" : "text-white"}`} /> : <Menu className={`w-6 h-6 ${scrolled ? "text-rose-ink" : "text-white"}`} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden glass mt-3 mx-4 rounded-lg shadow-luxe p-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} onClick={() => setOpen(false)} className="text-rose-ink font-medium hover:text-rose-gold transition-colors">
                {link.label}
              </a>
            ))}
            <div>
              <button onClick={() => setMobileRegionsOpen(!mobileRegionsOpen)} className="flex items-center justify-between w-full text-rose-ink font-medium hover:text-rose-gold transition-colors">
                Regionen <ChevronDown className={`w-4 h-4 transition-transform ${mobileRegionsOpen ? "rotate-180" : ""}`} />
              </button>
              {mobileRegionsOpen && (
                <div className="grid grid-cols-2 gap-2 mt-3 animate-fade-in">
                  {regionen.map((r) => (
                    <Link key={r.slug} to={`/gesichtsbehandlung/${r.slug}`} onClick={() => setOpen(false)} className="text-rose-ink/70 text-sm hover:text-rose-gold transition-colors">
                      {r.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-rose-nude">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  className="w-10 h-10 rounded-full flex items-center justify-center border border-rose-nude text-rose-ink hover:bg-rose-gold hover:text-white transition-all">
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a href="tel:+41797505152" className="flex items-center gap-2 text-rose-ink font-medium">
              <Phone className="w-4 h-4 text-rose-gold" /> +41 79 750 51 52
            </a>
            <a href="/#contact" onClick={() => setOpen(false)} className="bg-rose-gold text-white px-5 py-3 rounded-sm text-center font-heading font-semibold hover:bg-rose-deep transition-all">
              Termin buchen
            </a>
          </div>
        </div>
      )}
    </header>
  );
}