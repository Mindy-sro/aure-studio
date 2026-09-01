export const SITE_URL = "https://aurestudio.sk";

const BRAND = "aure studio - Nechtové štúdio Košice Barca";

export const PAGE_META = {
  "/": {
    title: BRAND,
    description:
      "Nechtové štúdio aure v Košiciach-Barci. Gélové nechty, gél-lak, manikúra a nail art. Otvorené na objednávku.",
  },
  "/o-mne": {
    title: `O nás | ${BRAND}`,
    description:
      "Hana a jej nechtové štúdio v Košiciach-Barci. Práca s prémiovými lakmi, dôraz na detail a rituál, ktorý je rovnako dôležitý ako výsledok.",
  },
  "/kontakt": {
    title: `Kontakt | ${BRAND}`,
    description:
      "Nechtové štúdio aure na Fándlyho 1 v Košiciach-Barci. Telefón, e-mail, mapa a QR kód na uloženie kontaktu. Otvorené na objednávku.",
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
