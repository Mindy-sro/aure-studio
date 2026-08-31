import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FALLBACK_META, PAGE_META, SITE_URL } from "@/lib/page-meta";

const apply = (selector, attribute, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attribute, value);
};

export default function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const { title, description } = PAGE_META[pathname] || FALLBACK_META;
    const url = `${SITE_URL}${pathname}`;

    document.title = title;
    apply('meta[name="description"]', "content", description);
    apply('meta[property="og:title"]', "content", title);
    apply('meta[property="og:description"]', "content", description);
    apply('meta[property="og:url"]', "content", url);
    apply('link[rel="canonical"]', "href", url);
  }, [pathname]);

  return null;
}
