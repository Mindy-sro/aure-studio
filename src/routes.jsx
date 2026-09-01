import { Outlet } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClientInstance } from "@/lib/query-client";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/components/ScrollToTop";
import PageMeta from "@/components/PageMeta";
import CookieConsent from "@/components/aure/CookieConsent";
import Analytics from "@/components/aure/Analytics";
import PageNotFound from "@/lib/PageNotFound";
import Home from "@/pages/Home";
import AboutMe from "@/pages/AboutMe";
import Contact from "@/pages/Contact";
import ZasadyCookies from "@/pages/ZasadyCookies";

function Layout() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <ScrollToTop />
      <PageMeta />
      <Outlet />
      <CookieConsent />
      <Analytics />
      <Toaster />
    </QueryClientProvider>
  );
}

export const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "o-mne", element: <AboutMe /> },
      { path: "kontakt", element: <Contact /> },
      { path: "zasady-cookies", element: <ZasadyCookies /> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
];
