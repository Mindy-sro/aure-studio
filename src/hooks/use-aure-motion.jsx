import { useEffect } from "react";

export default function useAureMotion(pathname) {
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = [...document.querySelectorAll("section h2, section figure, #sluzby .grid > div, #studio .grid > div, main > div > .grid > div")];
    const reset = () => elements.forEach((element) => element.removeAttribute("data-reveal"));
    if (media.matches || !("IntersectionObserver" in window)) return reset;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        if (isIntersecting) {
          target.setAttribute("data-reveal", "visible");
          observer.unobserve(target);
        }
      });
    }, { threshold: 0.08 });
    elements.forEach((element) => {
      if (element.getBoundingClientRect().top >= window.innerHeight) {
        element.setAttribute("data-reveal", "pending");
        observer.observe(element);
      }
    });
    const onPreferenceChange = () => { if (media.matches) { observer.disconnect(); reset(); } };
    media.addEventListener("change", onPreferenceChange);
    return () => { observer.disconnect(); reset(); media.removeEventListener("change", onPreferenceChange); };
  }, [pathname]);
}
