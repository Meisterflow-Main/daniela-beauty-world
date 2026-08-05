// Zentrale Blog-Datenquelle – einfach erweiterbar.
// Jeder Artikel: slug (SEO-URL), SEO-Meta, Content-Sektionen, FAQ, verwandte Artikel.

export const blogCategories = [
  "Ratgeber",
  "Tipps",
  "Anleitungen",
  "Lokale Themen",
  "Dienstleistungen",
  "FAQ",
];

export const blogPosts = [
  {
    slug: "hautpflege-nach-gesichtsbehandlung",
    title: "So pflegst du deine Haut nach der Gesichtsbehandlung richtig",
    excerpt:
      "Die richtigen Massnahmen nach einer Gesichtsbehandlung entscheiden über das Ergebnis. Hier erfährst du, worauf du in den ersten 48 Stunden achten solltest und welche Produkte deine Haut jetzt besonders braucht.",
    category: "Ratgeber",
    image: "https://images.unsplash.com/photo-1570172619644-dex03b252f1f",
    date: "2026-07-28",
    author: "Daniela Pacifico",
    readMinutes: 5,
    featured: true,
    seo: {
      title: "Hautpflege nach der Gesichtsbehandlung – Daniela Beauty World",
      description:
        "Richtige Pflege nach der Gesichtsbehandlung: worauf du in den ersten 48 Stunden achten solltest, welche Produkte helfen und welche du jetzt vermeidest.",
    },
    content: [
      {
        heading: "Warum die Nachsorge so wichtig ist",
        body: [
          "Eine professionelle Gesichtsbehandlung gibt deiner Haut wertvolle Impulse. Damit diese Impulse wirken können, braucht deine Haut in den ersten Tagen nach dem Termin Ruhe, Feuchtigkeit und Schutz. Was du in dieser Zeit tust, beeinflusst das Ergebnis spürbar.",
          "Besonders nach intensiveren Methoden wie Microneedling oder PRX-Therapie ist die Haut aufnahmefähiger und empfindlicher. Mit ein paar einfachen Regeln unterstützt du die Regeneration und verlängerst die Frische.",
        ],
      },
      {
        heading: "Die ersten 48 Stunden",
        body: [
          "In den ersten zwei Tagen nach der Behandlung gilt: weniger ist mehr. Verzichte auf direkte Sonne, Solarium, Sauna und starkes Schwitzen. Reinige dein Gesicht morgens und abends mit einem milden, parfumfreien Reinigungsprodukt und trage eine reichhaltige Feuchtigkeitspflege auf.",
          "Auf Peelings, Retinol oder wichtige Säureprodukte solltest du in dieser Zeit verzichten. Sie können die frisch behandelte Haut reizen und den Heilungsprozess stören.",
        ],
      },
      {
        heading: "Produkte, die jetzt helfen",
        body: [
          "Greife zu feuchtigkeitsspendenden und barrierestärkenden Formeln. Ein Serum mit Hyaluron in Kombination mit einer nährenden Creme ist ideal. Achte darauf, dass die Produkte so wenig Zusatzstoffe wie möglich enthalten.",
          "Wer bereits im Studio nachgefragt hat, erhält von mir eine auf den Hauttyp abgestimmte Empfehlung. So vermeidest du Fehlkäufe und pflegst gezielt weiter.",
        ],
      },
      {
        heading: "Längerfristige Pflege für nachhaltige Ergebnisse",
        body: [
          "Nach etwa einer Woche kannst du deine gewohnte Routine wieder aufnehmen. Für ein langanhaltendes Ergebnis empfehle ich, regelmässig feuchtigkeitsspendende Behandlungen zu ergänzen und den UV-Schutz täglich in deinen Alltag zu integrieren.",
          "Wer seine Haut langfristig unterstützen möchte, kombiniert ideale Hauspflege mit einer wiederkehrenden Behandlung im Studio. Sprich mich gerne an, ich berate dich ehrlich.",
        ],
      },
    ],
    faq: [
      {
        q: "Wann darf ich nach der Behandlung wieder Make-up tragen?",
        a: "In der Regel nach 24 Stunden. Bei intensiveren Methoden wie Microneedling empfehle ich, 48 Stunden zu warten, damit die Haut ruhig heilen kann.",
      },
      {
        q: "Kann ich nach dem Termin direkt Sport machen?",
        a: "Besser nicht. Schwitzen und Körperwärme können die Regeneration in den ersten 24 Stunden belasten. Plane sportliche Aktivitäten idealerweise einen Tag später ein.",
      },
      {
        q: "Wie lange bleibt das Ergebnis sichtbar?",
        a: "Das hängt von deiner Haut und der Methode ab. Mit guter Heimpflege und regelmässigen Auffrischungen hältst du das Ergebnis mehrere Wochen bis Monate.",
      },
    ],
    related: ["microneedling-ablauf-und-ergebnisse", "prx-therapie-wirkung"],
  },
  {
    slug: "microneedling-ablauf-und-ergebnisse",
    title: "Microneedling: Ablauf, Wirkung und was du unbedingt wissen solltest",
    excerpt:
      "Microneedling regt die Haut zur Kollagenproduktion an. Hier erkläre ich dir den genauen Ablauf, die Wirkungsweise und worauf du vor dem Termin achten solltest.",
    category: "Anleitungen",
    image: "https://images.unsplash.com/photo-1614849285861-35d3f8be1f74",
    date: "2026-07-15",
    author: "Daniela Pacifico",
    readMinutes: 6,
    featured: true,
    seo: {
      title: "Microneedling Ablauf und Wirkung – Daniela Beauty World",
      description:
        "Microneedling erklärt: Ablauf einer Behandlung, Wirkungsweise auf Kollagen und Hautbild und worauf du vor und nach dem Termin achten solltest.",
    },
    content: [
      {
        heading: "Wie Microneedling funktioniert",
        body: [
          "Beim Microneedling werden mit feinen Nadeln winzige Kanäle in der obersten Hautschicht gesetzt. Diese Mikroverletzungen regen die natürliche Regeneration an und regen die Produktion von Kollagen und Elastin.",
          "Das Ergebnis: ein frischeres Hautbild, verfeinerte Poren und eine sichtbar glattere Oberfläche. Besonders bei ersten Fältchen, Narben und unregelmässiger Hautstruktur ist Microneedling eine beliebte Methode.",
        ],
      },
      {
        heading: "So läuft deine Behandlung ab",
        body: [
          "Zu Beginn besprechen wir dein Hautbild und deine Wünsche. Ich reinige das Gesicht gründlich und trage eine betäubende Creme auf, damit du den Termin entspannt erlebst.",
          "Anschliessend arbeite ich mit einem professionellen Gerät die Hautbereiche ab. Nach der Behandlung pflege ich die Haut beruhigend und gebe dir genaue Empfehlungen für die erste Zeit zuhause mit.",
        ],
      },
      {
        heading: "Wann sichtst du Ergebnisse",
        body: [
          "Erste Frische siehst du oft schon nach wenigen Tagen. Die volle Wirkung entfaltet sich über mehrere Wochen, weil die Kollagenproduktion Zeit braucht.",
          "Für nachhaltige Ergebnisse empfehle ich meist eine Kur von drei Sitzungen im Abstand von vier bis sechs Wochen. Danach reicht eine Auffrischung alle paar Monate.",
        ],
      },
      {
        heading: "Für wen Microneedling geeignet ist",
        body: [
          "Die Methode eignet sich für viele Hauttypen, besonders bei feinen Linien, vergrösserten Poren, Aknenarben oder ungleichmässigem Hautton. In einem persönlichen Gespräch klären wir, ob sie die richtige Wahl für dich ist.",
          "Erfahre mehr auf der Detailseite unter Microneedling oder vereinbare direkt eine Beratung in Boniswil.",
        ],
      },
    ],
    faq: [
      {
        q: "Ist Microneedling schmerzhaft?",
        a: "Dank betäubender Creme spürst du die Behandlung meist nur als leichtes Vibrationsempfinden. Die meisten Kundinnen empfinden sie als angenehm.",
      },
      {
        q: "Wie lange dauert eine Sitzung?",
        a: "Mit Beratung, Reinigung und Nachsorge rechne mit rund 60 bis 90 Minuten. Die reine Behandlungszeit ist kürzer.",
      },
      {
        q: "Wie oft sollte ich die Behandlung wiederholen?",
        a: "Für sichtbare Ergebnisse empfehle ich eine Kur aus drei Sitzungen und danach Auffrischungen im Abstand von einigen Monaten.",
      },
    ],
    related: ["prx-therapie-wirkung", "hautpflege-nach-gesichtsbehandlung"],
  },
  {
    slug: "prx-therapie-wirkung",
    title: "PRX-Therapie: Der schonende Anti-Aging-Booster für strahlende Haut",
    excerpt:
      "Die PRX-Therapie wirkt tiefenregenerativ, ohne die Haut zu belasten. Hier erkläre ich dir, wie sie funktioniert und für welche Hauttypen sie sich eignet.",
    category: "Dienstleistungen",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
    date: "2026-06-30",
    author: "Daniela Pacifico",
    readMinutes: 5,
    featured: false,
    seo: {
      title: "PRX-Therapie Wirkung und Ablauf – Daniela Beauty World",
      description:
        "PRX-Therapie erklärt: tiefenregenerierende Wirkung, schonender Ablauf und für welche Hauttypen die Behandlung sich eignet.",
    },
    content: [
      {
        heading: "Was die PRX-Therapie besonders macht",
        body: [
          "Die PRX-Therapie kombiniert wirksame Inhaltsstoffe mit einer speziellen Technik, die tief in die Haut eindringt, ohne sie oberflächlich anzugreifen. So entsteht eine Regeneration, die sichtlich Frische schenkt.",
          "Anders als bei vielen Peelings bleibt die Hautbarriere intakt. Das macht die Methode besonders attraktiv für Kundinnen, die wirken wollen, ohne Erholungszeit.",
        ],
      },
      {
        heading: "Für welche Hauttypen PRX geeignet ist",
        body: [
          "Die PRX-Therapie eignet sich bei fahler Haut, ersten Zeichen der Hautalterung, feinen Linien oder ungleichmässigem Teint. Auch bei empfindlicher Haut ist sie oft eine gute Wahl.",
          "Im persönlichen Gespräch analysiere ich dein Hautbild und empfehle dir, ob PRX die passende Methode für dein Ziel ist.",
        ],
      },
      {
        heading: "Was du nach der Behandlung beachten solltest",
        body: [
          "Weil die Hautbarriere weitgehend geschont bleibt, ist die Nachsorge einfach. Du kannst in der Regel schnell in deinen Alltag zurückkehren.",
          "Trotzdem empfehle ich, in den ersten 24 Stunden auf direkte Sonne zu verzichten und die Haut mit sanfter Feuchtigkeitspflege zu unterstützen.",
        ],
      },
    ],
    faq: [
      {
        q: "Brauche ich eine Erholungszeit?",
        a: "In der Regel nicht. Die meisten Kundinnen können sofort nach der Behandlung ihrem Alltag nachgehen.",
      },
      {
        q: "Wie viele Sitzungen sind sinnvoll?",
        a: "Für ein sichtbares Ergebnis empfehle ich meist eine Kur aus mehreren Sitzungen im Abstand von ein bis zwei Wochen.",
      },
      {
        q: "Kann PRX mit anderen Behandlungen kombiniert werden?",
        a: "Ja, die Methode lässt sich gut in einen Pflegeplan integrieren. In der Beratung stimmen wir die Kombination auf deine Haut ab.",
      },
    ],
    related: ["microneedling-ablauf-und-ergebnisse", "hautpflege-nach-gesichtsbehandlung"],
  },
  {
    slug: "kosmetikstudio-boniswil-aargau",
    title: "Warum Kundinnen aus dem ganzen Aargau nach Boniswil reisen",
    excerpt:
      "Ein persönliches Studio, kurze Wege und ehrliche Beratung: Hier erkläre ich, warum Kundinnen aus Aarau, Lenzburg und Umgebung den Weg nach Boniswil auf sich nehmen.",
    category: "Lokale Themen",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
    date: "2026-06-12",
    author: "Daniela Pacifico",
    readMinutes: 4,
    featured: true,
    seo: {
      title: "Kosmetikstudio in Boniswil – Kunden aus dem Aargau",
      description:
        "Warum Kundinnen aus Aarau, Lenzburg, Baden und dem ganzen Aargau ins Kosmetikstudio nach Boniswil reisen: persönliche Beratung und kurze Wege.",
    },
    content: [
      {
        heading: "Persönliche Betreuung statt Fliessband",
        body: [
          "In meinem Studio in Boniswil nehme ich mir Zeit für dich. Du wirst nicht durchgetaktet, sondern individuell beraten. Jede Behandlung beginnt mit einem Gespräch über deine Haut, deine Ziele und deine Fragen.",
          "Diese persönliche Note ist für viele Kundinnen der Grund, den kurzen Weg aus Aarau, Lenzburg oder Baden in Kauf zu nehmen.",
        ],
      },
      {
        heading: "Kurze Wege im Aargau",
        body: [
          "Boniswil liegt zentral zwischen Aarau und Lenzburg. Über die Hauptstrasse erreichst du das Studio in rund 20 Minuten aus der Region. Auch aus Baden, Wohlen oder Seetal ist die Anfahrt unkompliziert.",
          "Ein eigener Parkplatz macht den Besuch stressfrei, ideal für Kundinnen, die sich einen ruhigen Moment gönnen möchten.",
        ],
      },
      {
        heading: "Regionale Kundinnen schätzen",
        body: [
          "Ich kenne die Lebensrealität meiner Kundinnen: Beruf, Familie und wenig Zeit für sich selbst. Genau hier setzt meine Arbeit an. Du kommst, du entschleunigst, du gehst frischer zurück in deinen Alltag.",
          "Erfahre mehr über die Regionen, die ich betreue, auf meiner Übersichtsseite Regionen.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie weit ist Boniswil von Aarau entfernt?",
        a: "Rund 20 Minuten mit dem Auto. Die Anfahrt ist unkompliziert und lohnt sich für die persönliche Betreuung.",
      },
      {
        q: "Brauche ich einen Parkplatz?",
        a: "Parkplätze stehen direkt beim Studio zur Verfügung. Du erreichest den Eingang bequem in wenigen Schritten.",
      },
      {
        q: "Kann ich ausserhalb der Öffnungszeiten einen Termin vereinbaren?",
        a: "Vereinbare deinen Wunschtermin über die Kontaktseite oder per WhatsApp. Ich finde gerne eine passende Lösung.",
      },
    ],
    related: ["zahnbleaching-haeufige-fragen", "hautpflege-nach-gesichtsbehandlung"],
  },
  {
    slug: "zahnbleaching-haeufige-fragen",
    title: "VIP Zahnbleaching: Die 6 wichtigsten Fragen vor der ersten Behandlung",
    excerpt:
      "Vor der ersten Zahnaufhellung fragen sich viele Kundinnen ähnliches. Hier beantworte ich die häufigsten Fragen rund um das VIP Zahnbleaching.",
    category: "FAQ",
    image: "https://images.unsplash.com/photo-1606851094291-6efae4fce4d7",
    date: "2026-05-28",
    author: "Daniela Pacifico",
    readMinutes: 4,
    featured: false,
    seo: {
      title: "VIP Zahnbleaching Fragen – Daniela Beauty World",
      description:
        "Häufige Fragen zum VIP Zahnbleaching: Ablauf, Schmerzempfinden, Haltbarkeit und was du vor und nach der Behandlung beachten solltest.",
    },
    content: [
      {
        heading: "Wie funktioniert das VIP Zahnbleaching",
        body: [
          "Beim VIP Zahnbleaching wird ein professionelles Aufhellungsmittel gezielt auf die Zähne aufgetragen. Mit einer speziellen Aktivierung wirkt das Mittel kontrolliert und gleichmässig.",
          "Im Vergleich zu Hausmethoden ist die Anwendung sicherer und führt zu sichtbareren Ergebnissen in kurzer Zeit.",
        ],
      },
      {
        heading: "Ist die Behandlung schmerzhaft",
        body: [
          "Die meisten Kundinnen empfinden die Behandlung als angenehm. Ein kurzes Zugsgefühl in den Tagen danach ist möglich, klingt aber in der Regel schnell wieder ab.",
          "Ich lege grossen Wert auf eine schonende Vorgehensweise und eine gründliche Vorabklärung deiner Zähne.",
        ],
      },
      {
        heading: "Wie lange bleibt das Ergebnis",
        body: [
          "Mit guter Mundhygiene und normalen Lebensgewohnheiten hält das Ergebnis oft viele Monate. Wer stark färbende Getränke wie Kaffee oder Rotwein reduziert, verlängert das frische Lächeln zusätzlich.",
          "Auffrischungen nach einigen Monaten sichern das Resultat langfristig.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie lange dauert eine Sitzung?",
        a: "Mit Beratung und Nachsorge rechne mit rund 60 Minuten. Die reine Aufhellung ist deutlich kürzer.",
      },
      {
        q: "Beeinträchtigt das Bleaching meinen Zahnschmelz?",
        a: "Bei professioneller Anwendung bleibt der Schmelz intakt. Ich wähle ein schonendes Vorgehen und berate dich individuell.",
      },
      {
        q: "Für wen ist die Behandlung nicht geeignet?",
        a: "Bei tiefen Schäden oder akuten Problemen an Zähnen und Zahnfleisch rate ich zu einer vorherigen zahnärztlichen Abklärung. In einem persönlichen Gespräch klären wir das ab.",
      },
    ],
    related: ["em-slim-korperformung", "kosmetikstudio-boniswil-aargau"],
  },
  {
    slug: "em-slim-korperformung",
    title: "EM SLIM: Wie die Muskelaufbaubehandlung wirklich funktioniert",
    excerpt:
      "EM SLIM trainiert die Muskulatur auf kontrollierte Weise. Hier erkläre ich dir, wie die Technologie funktioniert und was du realistisch erwarten kannst.",
    category: "Tipps",
    image: "https://images.unsplash.com/photo-1583241475884-8c9a9e3a8e8e",
    date: "2026-05-10",
    author: "Daniela Pacifico",
    readMinutes: 5,
    featured: false,
    seo: {
      title: "EM SLIM Muskelaufbau erklärt – Daniela Beauty World",
      description:
        "EM SLIM erklärt: wie die Muskelaufbaubehandlung funktioniert, was sie leistet und wie du das Ergebnis mit der richtigen Einstellung unterstütust.",
    },
    content: [
      {
        heading: "Wie EM SLIM funktioniert",
        body: [
          "EM SLIM nutst gezielte Muskelkontraktionen, um die Muskulatur auf kontrollierte Weise zu trainieren. In einer Sitzung werden viele Kontraktionen ausgelöst, die das Muskelprofil spürbar unterstützen.",
          "Die Methode richtet sich an Kundinnen, die ihre Figur ergänzend zu Bewegung und Ernährung definieren möchten.",
        ],
      },
      {
        heading: "Was du realistisch erwarten kannst",
        body: [
          "EM SLIM ist kein Ersatz für einen gesunden Lebensstil, sondern eine sinnvolle Ergänzung. Die Ergebnisse sind bei mehreren Sitzungen und einer stützenden Lebensweise am deutlichsten.",
          "Ich berate dich ehrlich, ob die Methode zu deinen Zielen passt und wie wir sie am besten in ein Gesamtkonzept einbinden.",
        ],
      },
      {
        heading: "So bereitest du dich vor",
        body: [
          "Vor dem Termin solltest du gut hydriert sein und keine schwere Mahlzeit direkt vor der Sitzung einnehmen. Wähle bequeme Kleidung, die den Zugang zur gewünschten Körperregion erlaubt.",
          "Nach der Behandlung kannst du in der Regel direkt in deinen Alltag zurückkehren.",
        ],
      },
    ],
    faq: [
      {
        q: "Wie viele Sitzungen brauche ich?",
        a: "Für sichtbare Ergebnisse empfehle ich meist eine Kur aus mehreren Sitzungen im kurzen Abstand. In der Beratung entwickeln wir gemeinsam deinen Plan.",
      },
      {
        q: "Empfinde ich die Behandlung als intensiv?",
        a: "Das Gefühl ist ungewohnt, aber die meisten Kundinnen empfinden es als angenehm. Die Intensität lässt sich anpassen.",
      },
      {
        q: "Kann ich EM SLIM mit Bewegung kombinieren?",
        a: "Ja, die Methode ergänzt einen aktiven Lebensstil ideal. Bewegung und eine ausgewogene Ernährung unterstützen das Ergebnis.",
      },
    ],
    related: ["zahnbleaching-haeufige-fragen", "prx-therapie-wirkung"],
  },
];

// Standortspezifische Liste aus den Daten ableiten, falls woanders nötig.
export const getPostBySlug = (slug) => blogPosts.find((p) => p.slug === slug);
export const formatDate = (iso) =>
  new Date(iso).toLocaleDateString("de-CH", { day: "numeric", month: "long", year: "numeric" });