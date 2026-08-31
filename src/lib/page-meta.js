export const SITE_URL = "https://aurestudio.sk";

const BRAND = "aure studio - Košice";

export const PAGE_META = {
  "/": {
    title: BRAND,
    description:
      "Nechtové štúdio AURE v Košiciach. Hard gel architektúra, japonská manikúra, nail art. Presnosť a minimalizmus v každom detaile.",
  },
  "/o-mne": {
    title: `O nás | ${BRAND}`,
    description:
      "Hana a jej nechtové štúdio v Košiciach. Práca s prémiovými lakmi, dôraz na detail a rituál, ktorý je rovnako dôležitý ako výsledok.",
  },
  "/kontakt": {
    title: `Kontakt | ${BRAND}`,
    description:
      "Telefón, e-mail a adresa nechtového štúdia AURE v Košiciach. Mapa a QR kód na uloženie kontaktu priamo do telefónu.",
  },
  "/zasady-cookies": {
    title: `Zásady cookies | ${BRAND}`,
    description:
      "Aké súbory cookies web AURE STUDIO používa, načo slúžia a ako môžete svoj súhlas kedykoľvek zmeniť alebo odvolať.",
  },
};

export const FALLBACK_META = {
  title: `Stránka sa nenašla | ${BRAND}`,
  description: "Táto stránka neexistuje. Vráťte sa na úvodnú stránku nechtového štúdia AURE.",
};
