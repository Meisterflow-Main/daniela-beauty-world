import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Impressum() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-rose-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl mb-8">Impressum</h1>
            <div className="bg-white rounded-lg shadow-soft p-8 md:p-10 space-y-6 text-rose-ink/80 text-sm leading-[1.8]">
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">Angaben gemäß Art. 17 DSGVO / revDSG</h2>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-rose-ink mb-1">Unternehmen</h3>
                <p>Daniela Beauty World<br />Inh. Daniela Pacifico<br />Seengerstrasse 11<br />5706 Boniswil<br />Schweiz</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-rose-ink mb-1">Kontaktmöglichkeiten</h3>
                <p>Telefon: <a href="tel:+41797505152" className="text-rose-gold">+41 79 750 51 52</a><br />E-Mail: <a href="mailto:info@danielabeauty.ch" className="text-rose-gold">info@danielabeauty.ch</a></p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-rose-ink mb-1">UID</h3>
                <p>CHE-277.555.xxx (UID-Nummer)</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-rose-ink mb-1">Verantwortlich für den Inhalt</h3>
                <p>Daniela Pacifico<br />Seengerstrasse 11<br />5706 Boniswil, Schweiz</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-rose-ink mb-1">Haftung für Inhalte</h3>
                <p>Als Diensteanbieter sind wir gemäss Art. 17 DSGVO für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Wir sind jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen.</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-rose-ink mb-1">Haftung für Links</h3>
                <p>Unser Angebot enthält ggf. Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen.</p>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-rose-ink mb-1">Urheberrecht</h3>
                <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Schweizer Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung ausserhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}