import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShow(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-fade-in">
      <div className="max-w-4xl mx-auto glass rounded-lg shadow-luxe p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
        <Cookie className="w-6 h-6 text-rose-gold shrink-0" />
        <p className="text-sm text-rose-ink flex-1 leading-relaxed">
          Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. Mit der Nutzung unserer Website stimmen Sie der Verwendung von Cookies zu.{" "}
          <a href="/datenschutz" className="text-rose-gold underline hover:text-rose-deep">Datenschutzerklärung</a>
        </p>
        <div className="flex gap-3 shrink-0">
          <button onClick={handleDecline} className="px-4 py-2 text-sm font-medium text-rose-ink border border-rose-nude rounded-sm hover:bg-rose-cream transition-colors">
            Ablehnen
          </button>
          <button onClick={handleAccept} className="px-4 py-2 text-sm font-heading font-semibold text-white bg-rose-gold rounded-sm hover:bg-rose-deep transition-colors">
            Akzeptieren
          </button>
          <button onClick={handleDecline} className="absolute top-2 right-2 text-rose-ink/40 hover:text-rose-ink">
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}