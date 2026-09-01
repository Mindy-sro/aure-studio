import { useLocation } from "react-router-dom";
import { Head } from "vite-react-ssg";
import { FALLBACK_META, PAGE_META, SITE_URL } from "@/lib/page-meta";

export default function PageMeta() {
  const { pathname } = useLocation();
  const { title, description } = PAGE_META[pathname] || FALLBACK_META;
  const url = `${SITE_URL}${pathname}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <link rel="canonical" href={url} />
    </Head>
  );
}
