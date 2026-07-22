import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function Datenschutz() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-rose-cream">
        <div className="max-w-3xl mx-auto px-5 md:px-8">
          <ScrollReveal>
            <h1 className="font-heading font-bold text-rose-ink text-4xl md:text-5xl mb-8">Datenschutzerklärung</h1>
            <div className="bg-white rounded-lg shadow-soft p-8 md:p-10 space-y-6 text-rose-ink/80 text-sm leading-[1.8]">
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">1. Datenschutz auf einen Blick</h2>
                <p>Der Schutz Ihrer persönlichen Daten ist uns ein wichtiges Anliegen. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften (DSGVO, revDSG) sowie dieser Datenschutzerklärung.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">2. Verantwortliche Stelle</h2>
                <p>Daniela Beauty World<br />Inh. Daniela Pacifico<br />Seengerstrasse 11<br />5706 Boniswil, Schweiz<br />Telefon: +41 79 750 51 52<br />E-Mail: info@danielabeauty.ch</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">3. Erhebung und Speicherung personenbezogener Daten</h2>
                <p>Wenn Sie unser Kontaktformular nutzen, erheben wir die Daten, die Sie uns mitteilen (Name, E-Mail, Telefonnummer, Nachricht). Diese Daten werden ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet und nicht an Dritte weitergegeben.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">4. Cookies</h2>
                <p>Unsere Website verwendet Cookies. Cookies sind Textdateien, die im Internetbrowser bzw. vom Internetbrowser auf dem Computersystem eines Nutzers gespeichert werden. Sie dienen der Verbesserung unseres Angebots. Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und einzeln über deren Annahme entscheiden oder die Annahme generell ausschliessen.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">5. Ihre Rechte</h2>
                <p>Sie haben jederzeit das Recht auf Auskunft über die zu Ihrer Person gespeicherten Daten. Ausserdem haben Sie das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Wenden Sie sich dafür bitte an die oben genannte verantwortliche Stelle.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">6. Google Remarketing</h2>
                <p>Diese Website verwendet Remarketing-Pixel/Cookies von Google, um erneut mit den Besuchern unserer Website zu kommunizieren und sicherzustellen, dass wir sie in Zukunft mit relevanten Nachrichten und Informationen erreichen können. Google schaltet unsere Anzeigen auf Websites Dritter im Internet.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">7. Social Media</h2>
                <p>Unsere Website enthält Verlinkungen zu Social-Media-Plattformen (Instagram, Facebook, WhatsApp). Beim Klick auf diese Links werden Sie auf die jeweiligen Plattformen weitergeleitet. Für die Datenverarbeitung auf diesen Plattformen sind deren jeweilige Datenschutzbestimmungen massgebend.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">8. Facebook-Hinweis</h2>
                <p>Diese Website ist nicht Teil der Facebook-Website oder von Facebook Inc. Darüber hinaus wird diese Website in keiner Weise von Facebook unterstützt. Facebook ist eine Marke von Facebook, Inc.</p>
              </div>
              <div>
                <h2 className="font-heading font-semibold text-rose-ink text-lg mb-2">9. Aktualität der Datenschutzerklärung</h2>
                <p>Diese Datenschutzerklärung ist aktuell gültig. Durch die Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu aktualisieren.</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </main>
      <Footer />
    </>
  );
}