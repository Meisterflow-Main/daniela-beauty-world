import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { Phone, Mail, MapPin, MessageCircle, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";

const WEBHOOK_URL = "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", phone: "", description: "", company: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Bitte geben Sie Ihren Namen ein.";
    if (!form.email.trim()) e.email = "Bitte geben Sie Ihre E-Mail ein.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Bitte geben Sie eine gültige E-Mail ein.";
    if (!form.phone.trim()) e.phone = "Bitte geben Sie Ihre Telefonnummer ein.";
    if (!form.description.trim()) e.description = "Bitte beschreiben Sie Ihr Anliegen.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    if (form.company) return; // honeypot
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          description: form.description,
        }),
      });
      if (res.ok || res.status === 204) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", description: "", company: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  return (
    <section id="contact" className="py-24 md:py-32 bg-gradient-to-b from-white to-rose-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <ScrollReveal>
            <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
              Kontakt
            </span>
            <h2 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-6">
              Vereinbaren Sie jetzt<br />einen <span className="text-gradient-rose">Termin</span>
            </h2>
            <p className="text-rose-ink/70 text-base leading-[1.7] mb-8">
              Haben Sie Fragen oder wünschen Sie einen Termin? Kontaktieren Sie mich jetzt telefonisch, per E-Mail oder über das Kontaktformular – ich freue mich darauf, Ihre natürliche Schönheit professionell zu unterstreichen.
            </p>
            <div className="bg-white rounded-lg shadow-soft p-6 mb-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full gradient-rose flex items-center justify-center text-white font-heading font-bold text-xl">D</div>
                <div>
                  <p className="font-heading font-semibold text-rose-ink text-lg">Daniela Pacifico</p>
                  <p className="text-rose-gold text-sm">Beauty-Expertin</p>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-rose-nude">
                <a href="tel:+41797505152" className="flex items-center gap-3 text-rose-ink/80 hover:text-rose-gold transition-colors text-sm">
                  <Phone className="w-4 h-4 text-rose-gold shrink-0" /> +41 79 750 51 52
                </a>
                <a href="mailto:info@danielabeauty.ch" className="flex items-center gap-3 text-rose-ink/80 hover:text-rose-gold transition-colors text-sm break-all">
                  <Mail className="w-4 h-4 text-rose-gold shrink-0" /> info@danielabeauty.ch
                </a>
                <div className="flex items-start gap-3 text-rose-ink/80 text-sm">
                  <MapPin className="w-4 h-4 text-rose-gold shrink-0 mt-0.5" /> Seengerstrasse 11, 5706 Boniswil
                </div>
              </div>
            </div>
            <a href="https://api.whatsapp.com/send?phone=+41797505152&text=Hallo%20liebe%20Daniela%21%20%0A%0AIch%20w%C3%BCrde%20gerne%20eine%20deiner%20Behandlungen%20buchen.%20%0A%0ALiebe%20Gr%C3%BC%C3%9Fe%21"
              target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-sm font-heading font-semibold text-sm hover:bg-[#1da851] transition-all shadow-soft hover:shadow-luxe">
              <MessageCircle className="w-5 h-5" /> Per WhatsApp kontaktieren
            </a>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            {status === "success" ? (
              <div className="bg-white rounded-lg shadow-luxe p-10 text-center animate-fade-in">
                <CheckCircle className="w-16 h-16 text-rose-gold mx-auto mb-4" />
                <h3 className="font-heading font-bold text-rose-ink text-2xl mb-3">Nachricht gesendet!</h3>
                <p className="text-rose-ink/70 text-sm leading-relaxed mb-6">
                  Vielen Dank für Ihre Nachricht. Ich melde mich so schnell wie möglich bei Ihnen.
                </p>
                <button onClick={() => setStatus("idle")} className="text-rose-gold font-heading font-medium text-sm hover:text-rose-deep transition-colors">
                  Weitere Nachricht senden
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-luxe p-8 space-y-5">
                <div>
                  <label className="block text-rose-ink text-sm font-heading font-medium mb-2">Name *</label>
                  <input type="text" value={form.name} onChange={update("name")} disabled={status === "loading"}
                    className={`w-full px-4 py-3 rounded-sm border ${errors.name ? "border-red-400" : "border-rose-nude"} focus:border-rose-gold focus:outline-none transition-colors text-sm`}
                    placeholder="Ihr vollständiger Name" />
                  {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-rose-ink text-sm font-heading font-medium mb-2">E-Mail *</label>
                    <input type="email" value={form.email} onChange={update("email")} disabled={status === "loading"}
                      className={`w-full px-4 py-3 rounded-sm border ${errors.email ? "border-red-400" : "border-rose-nude"} focus:border-rose-gold focus:outline-none transition-colors text-sm`}
                      placeholder="ihre@email.ch" />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-rose-ink text-sm font-heading font-medium mb-2">Telefon *</label>
                    <input type="tel" value={form.phone} onChange={update("phone")} disabled={status === "loading"}
                      className={`w-full px-4 py-3 rounded-sm border ${errors.phone ? "border-red-400" : "border-rose-nude"} focus:border-rose-gold focus:outline-none transition-colors text-sm`}
                      placeholder="+41 79 ..." />
                    {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                  </div>
                </div>
                <div>
                  <label className="block text-rose-ink text-sm font-heading font-medium mb-2">Nachricht *</label>
                  <textarea rows={5} value={form.description} onChange={update("description")} disabled={status === "loading"}
                    className={`w-full px-4 py-3 rounded-sm border ${errors.description ? "border-red-400" : "border-rose-nude"} focus:border-rose-gold focus:outline-none transition-colors text-sm resize-none`}
                    placeholder="Wie kann ich Ihnen helfen? Welches Treatment interessiert Sie?" />
                  {errors.description && <p className="text-red-400 text-xs mt-1">{errors.description}</p>}
                </div>
                {/* Honeypot */}
                <input type="text" value={form.company} onChange={update("company")} className="hidden" tabIndex={-1} autoComplete="off" />
                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <AlertCircle className="w-4 h-4" /> Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                  </div>
                )}
                <button type="submit" disabled={status === "loading"}
                  className="w-full bg-rose-gold text-white py-4 rounded-sm font-heading font-semibold text-base hover:bg-rose-deep transition-all shadow-soft hover:shadow-luxe disabled:opacity-60 flex items-center justify-center gap-2">
                  {status === "loading" ? (
                    <><Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...</>
                  ) : (
                    <>Nachricht senden <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            )}
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}