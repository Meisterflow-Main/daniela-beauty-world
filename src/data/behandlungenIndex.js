import { gesichtsbehandlungen } from "./gesichtsbehandlungen";
import { koerperbehandlungen } from "./koerperbehandlungen";
import { zaehnebehandlungen } from "./zaehnebehandlungen";

export const alleBehandlungen = [
  ...gesichtsbehandlungen,
  ...koerperbehandlungen,
  ...zaehnebehandlungen,
];

export function getBehandlungBySlug(slug) {
  return alleBehandlungen.find((b) => b.slug === slug);
}

export function getBehandlungenByCategory(category) {
  return alleBehandlungen.filter((b) => b.category === category);
}

export const categoryLabels = {
  Gesicht: "Gesichtsbehandlungen",
  Körper: "Körperbehandlungen",
  Zähne: "Zahnbehandlungen",
};

export const categoryEyebrows = {
  Gesicht: "Gesichtsbehandlung",
  Körper: "Körperbehandlung",
  Zähne: "Zahnbehandlung",
};

export const pricesAnchors = {
  Gesicht: "#preise",
  Körper: "#preise-koerper",
  Zähne: "#preise-zaehne",
};