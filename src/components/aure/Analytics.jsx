import { useEffect } from "react";
import { useCookieConsent } from "@/components/aure/CookieConsent";
import { GA_CONFIGURED, GA_MEASUREMENT_ID } from "@/lib/site";

const SCRIPT_ID = "ga-gtag";

const dropGaCookies = () => {
  const host = window.location.hostname;
  const domains = [host, `.${host}`, `.${host.split(".").slice(-2).join(".")}`];
  document.cookie.split(";").forEach((entry) => {
    const name = entry.split("=")[0].trim();
    if (!name.startsWith("_ga")) return;
    domains.forEach((domain) => {
      document.cookie = `${name}=; path=/; domain=${domain}; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    });
    document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
  });
};

export default function Analytics() {
  const { analytics } = useCookieConsent();

  useEffect(() => {
    window[`ga-disable-${GA_MEASUREMENT_ID}`] = !analytics;

    if (!GA_CONFIGURED || !analytics) {
      if (window.gtag) {
        window.gtag("consent", "update", { analytics_storage: "denied" });
      }
      document.getElementById(SCRIPT_ID)?.remove();
      dropGaCookies();
      return;
    }

    if (window.gtag) {
      window.gtag("consent", "update", { analytics_storage: "granted" });
    }
    if (document.getElementById(SCRIPT_ID)) return;

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", GA_MEASUREMENT_ID, { anonymize_ip: true });
  }, [analytics]);

  return null;
}
