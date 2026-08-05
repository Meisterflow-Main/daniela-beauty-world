import { useState } from "react";
import { Mail, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AivieNewsletter() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 600);
  };

  return (
    <section id="warteliste" className="py-24 gradient-rose">
      <div className="max-w-3xl mx-auto px-5 md:px-8 text-center">
        <ScrollReveal>
          <span className="text-white/80 text-sm font-heading font-medium tracking-[0.25em] uppercase mb-4 block">Seien Sie die Erste mit einer Weltneuheit</span>
          <h2 className="font-heading font-bold text-white text-4xl md:text-5xl mb-4">Sichere dir deinen Platz</h2>
          <p className="text-white/80 text-lg mb-10">Werde als Erste informiert, sobald AIVIE verfügbar ist – und sichere dir exklusiven Vorabzugang.</p>
          {!sent ? (
            <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Dein Name" className="flex-1 px-5 py-3.5 rounded-sm bg-white/90 text-rose-ink placeholder:text-rose-ink/40 focus:outline-none focus:ring-2 focus:ring-white" />
              <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Deine E-Mail" className="flex-1 px-5 py-3.5 rounded-sm bg-white/90 text-rose-ink placeholder:text-rose-ink/40 focus:outline-none focus:ring-2 focus:ring-white" />
              <button type="submit" disabled={loading} className="inline-flex items-center justify-center gap-2 bg-rose-ink text-white px-6 py-3.5 rounded-sm font-heading font-semibold hover:bg-rose-ink/90 transition-all disabled:opacity-60">
                <Mail className="w-4 h-4" /> {loading ? "Wird gesendet..." : "Anmelden"}
              </button>
            </form>
          ) : (
            <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur px-6 py-4 rounded-sm">
              <Check className="w-5 h-5 text-white" />
              <span className="text-white font-medium">Danke! Du bist auf der Liste – wir melden uns bei dir.</span>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
}