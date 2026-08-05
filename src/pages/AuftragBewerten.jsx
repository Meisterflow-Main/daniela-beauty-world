import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { Star, CheckCircle, Loader2, AlertCircle, ExternalLink } from "lucide-react";

const WEBHOOK_URL = "https://app.meisterflow.ch/api/webhooks/enquiries/a902bb23d7e98901900e3750083b670344a14683633ae15f";
const GOOGLE_REVIEW_LINK = "https://www.google.com/search?q=daniela+bauty+world&oq=daniela+bauty+world&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIICAEQABgWGB4yBwgCEAAY7wUyCggDEAAYgAQYogQyBwgEEAAY7wUyBwgFEAAY7wXSAQgzNzcwajBqN6gCALACAA&sourceid=chrome&source=chrome.ob&ie=UTF-8";

const questions = [
  { id: "quality", text: "Wie zufrieden waren Sie mit der Qualität Ihrer Behandlung?", options: ["Sehr zufrieden", "Zufrieden", "Eher unzufrieden", "Sehr unzufrieden"] },
  { id: "atmosphere", text: "Wie hat Ihnen die Atmosphäre im Studio gefallen?", options: ["Sehr angenehm", "Angenehm", "Weniger angenehm", "Unangenehm"] },
  { id: "punctuality", text: "War die Terminvereinbarung und Pünktlichkeit zu Ihrer Zufriedenheit?", options: ["Absolut pünktlich", "Grösstenteils pünktlich", "Leichte Verzögerung", "Unpünktlich"] },
];

export default function AuftragBewerten() {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("idle");

  const isLowRating = rating > 0 && rating <= 3;

  const submitFeedback = async () => {
    setStatus("loading");
    try {
      const res = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Bewertung Feedback",
          email: "internal@review.local",
          phone: "-",
          description: `Sterne: ${rating}/5 | Qualität: ${answers.quality || "-"} | Atmosphäre: ${answers.atmosphere || "-"} | Pünktlichkeit: ${answers.punctuality || "-"} | Feedback: ${feedback}`,
        }),
      });
      if (res.ok || res.status === 204) {
        setStatus("feedback-sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const reset = () => {
    setStep(1);
    setAnswers({});
    setRating(0);
    setFeedback("");
    setStatus("idle");
  };

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-gradient-to-b from-white via-rose-cream to-white">
        <div className="max-w-2xl mx-auto px-5 md:px-8">
          <ScrollReveal className="text-center mb-12">
            <span className="text-rose-gold text-sm font-heading font-medium tracking-[0.15em] uppercase mb-4 block">
              Bewertung
            </span>
            <h1 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl leading-tight mb-4">
              Auftrag <span className="text-gradient-rose">bewerten</span>
            </h1>
            <p className="text-rose-ink/70 text-base leading-[1.7]">
              Ihre Meinung ist mir wichtig! Beantworten Sie kurz drei Fragen und bewerten Sie Ihren Besuch.
            </p>
          </ScrollReveal>

          {/* Progress indicator */}
          {step <= 3 && (
            <div className="flex items-center justify-center gap-2 mb-10">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className={`h-1.5 rounded-full transition-all duration-500 ${s <= step ? "w-12 bg-rose-gold" : "w-6 bg-rose-nude"}`} />
              ))}
            </div>
          )}

          {status === "feedback-sent" ? (
            <div className="bg-white rounded-lg shadow-luxe p-10 text-center animate-fade-in">
              <CheckCircle className="w-16 h-16 text-rose-gold mx-auto mb-4" />
              <h3 className="font-heading font-bold text-rose-ink text-2xl mb-3">Danke für Ihr Feedback!</h3>
              <p className="text-rose-ink/70 text-sm leading-relaxed mb-6">
                Ihr Feedback wurde intern weitergeleitet. Ich werde daran arbeiten, Ihre Erfahrung beim nächsten Besuch zu verbessern.
              </p>
              <button onClick={reset} className="text-rose-gold font-heading font-medium text-sm hover:text-rose-deep transition-colors">
                Neue Bewertung abgeben
              </button>
            </div>
          ) : status === "google-success" || (rating >= 4 && step === 5 && status === "idle") ? (
            <div className="bg-white rounded-lg shadow-luxe p-10 text-center animate-fade-in">
              <div className="w-20 h-20 rounded-full gradient-rose flex items-center justify-center mx-auto mb-6">
                <Star className="w-10 h-10 text-white" fill="white" />
              </div>
              <h3 className="font-heading font-bold text-rose-ink text-2xl mb-4">
                Vielen Dank für Ihre tolle Bewertung!
              </h3>
              <p className="text-rose-ink/70 text-base leading-relaxed mb-8">
                Würden Sie uns auch auf Google weiterempfehlen? Das hilft anderen Kunden, uns zu finden.
              </p>
              <a href={GOOGLE_REVIEW_LINK} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-rose-gold text-white px-8 py-4 rounded-sm font-heading font-semibold text-base hover:bg-rose-deep transition-all shadow-luxe hover:-translate-y-1">
                Auf Google bewerten <ExternalLink className="w-5 h-5" />
              </a>
              <div className="mt-6">
                <button onClick={reset} className="text-rose-ink/50 text-sm hover:text-rose-gold transition-colors">
                  Neue Bewertung abgeben
                </button>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-luxe p-8 md:p-10">
              {step <= 3 && (
                <div>
                  <p className="text-rose-gold text-sm font-heading font-medium mb-2">Frage {step} von 3</p>
                  <h2 className="font-heading font-bold text-rose-ink text-xl md:text-2xl mb-6 leading-snug">
                    {questions[step - 1].text}
                  </h2>
                  <div className="space-y-3 mb-8">
                    {questions[step - 1].options.map((opt) => (
                      <button key={opt} onClick={() => setAnswers({ ...answers, [questions[step - 1].id]: opt })}
                        className={`w-full text-left px-5 py-4 rounded-sm border transition-all text-sm font-medium ${answers[questions[step - 1].id] === opt ? "border-rose-gold bg-rose-gold/5 text-rose-ink" : "border-rose-nude text-rose-ink/70 hover:border-rose-gold/50"}`}>
                        {opt}
                      </button>
                    ))}
                  </div>
                  <button disabled={!answers[questions[step - 1].id]} onClick={() => setStep(step + 1)}
                    className="w-full bg-rose-gold text-white py-4 rounded-sm font-heading font-semibold text-base hover:bg-rose-deep transition-all disabled:opacity-40 disabled:cursor-not-allowed">
                    Weiter
                  </button>
                </div>
              )}

              {step === 4 && (
                <div className="text-center">
                  <p className="text-rose-gold text-sm font-heading font-medium mb-2">Sternebewertung</p>
                  <h2 className="font-heading font-bold text-rose-ink text-xl md:text-2xl mb-8 leading-snug">
                    Wie würden Sie Ihren Besuch insgesamt bewerten?
                  </h2>
                  <div className="flex items-center justify-center gap-3 mb-8">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button key={star} onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)}
                        className="transition-transform hover:scale-125">
                        <Star className={`w-10 h-10 md:w-12 md:h-12 transition-colors ${(hoverRating || rating) >= star ? "fill-rose-gold text-rose-gold" : "text-rose-nude"}`} />
                      </button>
                    ))}
                  </div>
                  {rating > 0 && (
                    <p className="text-rose-ink/70 text-sm mb-6">{rating} von 5 Sternen</p>
                  )}

                  {isLowRating && (
                    <div className="mb-6 text-left animate-fade-in">
                      <label className="block text-rose-ink text-sm font-heading font-medium mb-2">
                        Was können wir verbessern?
                      </label>
                      <textarea rows={4} value={feedback} onChange={(e) => setFeedback(e.target.value)}
                        className="w-full px-4 py-3 rounded-sm border border-rose-nude focus:border-rose-gold focus:outline-none transition-colors text-sm resize-none"
                        placeholder="Ihr Feedback hilft uns, uns zu verbessern..." />
                    </div>
                  )}

                  {rating >= 4 && (
                    <p className="text-rose-ink/60 text-sm mb-6 animate-fade-in">
                      Schön, dass Sie zufrieden waren! Klicken Sie auf „Bewertung absenden", um fortzufahren.
                    </p>
                  )}

                  <button disabled={rating === 0 || (isLowRating && !feedback.trim()) || status === "loading"} onClick={() => {
                    if (isLowRating) { submitFeedback(); } else { setStatus("google-success"); }
                  }}
                    className="w-full bg-rose-gold text-white py-4 rounded-sm font-heading font-semibold text-base hover:bg-rose-deep transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center gap-2">
                    {status === "loading" ? <><Loader2 className="w-5 h-5 animate-spin" /> Wird gesendet...</> : "Bewertung absenden"}
                  </button>

                  {status === "error" && (
                    <div className="flex items-center gap-2 text-red-500 text-sm mt-4 justify-center">
                      <AlertCircle className="w-4 h-4" /> Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}