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
  { name: "Suchá manikúra s lakovaním – gél lak", price: "40 €", description: "Precízna úprava a farba, ktorá podčiarkne váš štýl." },
  { name: "Suchá manikúra bez lakovania", price: "20 €", description: "Prirodzená krása nechtov, upravená do detailu." },
  { name: "Pánska manikúra", price: "20 €", description: "Upravené ruky. Nenápadný detail, dobrý dojem." },
  { name: "Odstránenie gél laku na rukách", price: "10 €", description: "Dajte zbohom starej farbe a priestor novému štýlu." },
];

export const GA_MEASUREMENT_ID = "G-LC1FPNB1RN";

export const GA_CONFIGURED = !GA_MEASUREMENT_ID.includes("XXXX");
export const GA_ID_FOR_POLICY = GA_MEASUREMENT_ID.replace(/^G-/, "");
