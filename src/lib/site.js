export const STUDIO_NAME = "AURE STUDIO";
export const CONTACT_NAME = "AURE STUDIO — Blašková";

export const ADDRESS_STREET = "Fándlyho 1";
export const ADDRESS_CITY = "Košice";
export const ADDRESS_ZIP = "040 17";
export const ADDRESS = `${ADDRESS_STREET}, ${ADDRESS_ZIP} ${ADDRESS_CITY}`;

export const PHONE_DISPLAY = "+421 904 659 298";
export const PHONE_E164 = "+421904659298";
export const EMAIL = "info@aurestudio.sk";

export const INSTAGRAM_URL = "https://www.instagram.com/aure_studio_kosice/";
export const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=61593707104919";

export const GA_MEASUREMENT_ID = "G-XXXXXXXXXX";

export const GA_CONFIGURED = !GA_MEASUREMENT_ID.includes("XXXX");
export const GA_ID_FOR_POLICY = GA_MEASUREMENT_ID.replace(/^G-/, "");
