export const STUDIO_NAME = "AURE STUDIO";
export const CONTACT_NAME = "AURE STUDIO - Blašková";

export const ADDRESS_STREET = "Fándlyho 1";
export const ADDRESS_CITY = "Košice";
export const ADDRESS_ZIP = "040 17";
export const ADDRESS_DISTRICT = "Barca";
export const ADDRESS = `${ADDRESS_STREET}, ${ADDRESS_ZIP} ${ADDRESS_CITY}-${ADDRESS_DISTRICT}`;
export const ADDRESS_FOR_MAPS = `${ADDRESS_STREET}, ${ADDRESS_ZIP} ${ADDRESS_CITY}`;

export const PHONE_DISPLAY = "+421 904 659 298";
export const PHONE_E164 = "+421904659298";
export const EMAIL = "info@aurestudio.sk";

export const INSTAGRAM_URL = "https://www.instagram.com/aure_studio_kosice/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61593707104919";
export const BOOKING_URL = "https://www.notino.sk/salony/aure-studio_1/";
export const OPENING_HOURS_WEEKDAYS = "Pondelok – piatok: na objednávku";
export const OPENING_HOURS_WEEKEND = "Sobota – nedeľa: zatvorené";
export const PRICE_LIST_VALID_FROM = "1. 11. 2026";
export const SERVICE_MENU = [
  { name: "Manikúra", price: "15 €", description: "Úprava nechtov, práca s nechtovou kožičkou" },
  { name: "Gellak", price: "30 €", description: "Manikúra, gél lak" },
  { name: "Nové gélové nechty", price: "40 €", description: "Manikúra, predĺženie, modeláž, úprava tvaru" },
  { name: "Doplnenie gélových nechtov", price: "35 €", description: "Manikúra, doplnenie, úprava tvaru" },
  { name: "Extra dizajn / Francúzska manikúra", price: "5 €", description: "Francúzska, kamienky, prášok, pečiatky, atď." },
  { name: "Oprava jedného nechta", price: "4 €", description: "" },
];

export const GA_MEASUREMENT_ID = "G-LC1FPNB1RN";

export const GA_CONFIGURED = !GA_MEASUREMENT_ID.includes("XXXX");
export const GA_ID_FOR_POLICY = GA_MEASUREMENT_ID.replace(/^G-/, "");
