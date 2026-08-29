import React from "react";
import Navbar from "@/components/aure/Navbar";
import Footer from "@/components/aure/Footer";
import { openCookieSettings } from "@/components/aure/CookieConsent";
import { EMAIL } from "@/lib/site";

const REMOVE_LINKS = [
  ["Mozilla Firefox", "https://support.mozilla.org/sk/kb/odstranenie-cookies"],
  ["Google Chrome", "https://support.google.com/chrome/answer/95647?hl=sk"],
  ["Microsoft Edge", "https://support.microsoft.com/sk-sk/help/4027947/windows-delete-cookies"],
];

const THIRD_PARTIES = [
  {
    name: "Mapa Google",
    where: "stránka Kontakt",
    what: "Mapa sa načíta až po vašom súhlase. Kým ho nedáte, na jej mieste je len statický zástupný obrázok a s Googlom neprebehne žiadna komunikácia. Po načítaní môže Google nastaviť vlastné súbory cookies a spracovať vašu IP adresu.",
  },
  {
    name: "Google Fonts",
    where: "všetky stránky",
    what: "Písma sa sťahujú zo serverov Google. Pri tom sa Googlu odošle vaša IP adresa. Cookies sa pri tom nenastavujú.",
  },
];

function SectionTitle({ children }) {
  return (
    <h2 className="font-heading text-2xl md:text-[1.7rem] text-[hsl(var(--burgundy))] tracking-wide">{children}</h2>
  );
}

const P = "text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70";

export default function ZasadyCookies() {
  return (
    <div className="bg-[hsl(var(--chrome))] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-36 md:pt-44 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[hsl(var(--steel))]">— O zásadách —</p>
          <h1 className="font-heading text-4xl md:text-5xl text-[hsl(var(--obsidian))] mt-3 leading-tight">
            Zásady používania cookies
          </h1>
          <div className="steel-rule my-8" />

          <p className={P}>
            Táto stránka vysvetľuje, čo sa pri návšteve nášho webu ukladá do vášho zariadenia
            a ktoré služby tretích strán sa načítavajú. Opisuje skutočný stav tohto webu —
            nie všeobecný vzor.
          </p>

          <section className="mt-12">
            <SectionTitle>Zhrnutie</SectionTitle>
            <p className={`mt-3 ${P}`}>
              <strong>Sami nenastavujeme žiadne súbory cookies.</strong> Nepoužívame analytiku,
              reklamné ani sledovacie nástroje. Nezhromažďujeme údaje o vašom správaní a nikomu
              ich neodovzdávame.
            </p>
            <p className={`mt-3 ${P}`}>
              Jedinú výnimku tvorí <strong>mapa Google na stránke Kontakt</strong>. Ak si ju
              zobrazíte, Google si svoje vlastné cookies nastaviť môže. Bez vášho súhlasu sa
              nenačíta — podrobnosti nižšie.
            </p>
          </section>

          <section className="mt-10">
            <SectionTitle>Čo si ukladáme</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Jedinú vec — vašu voľbu z lišty o súhlase. Ukladá sa do lokálneho úložiska prehliadača
              (<span className="font-mono text-[0.75rem]">localStorage</span>) pod názvom{" "}
              <span className="font-mono text-[0.75rem]">aure_cookie_consent</span>. Slúži len na to,
              aby sme sa vás nepýtali pri každej návšteve znova.
            </p>
            <p className={`mt-3 ${P}`}>
              Táto položka zostáva výhradne vo vašom zariadení. Na rozdiel od súborov cookies sa
              neodosiela na server pri žiadnej požiadavke. Neobsahuje meno, e-mail ani nič, podľa
              čoho by sa dalo zistiť, kto ste.
            </p>
          </section>

          <section className="mt-10">
            <SectionTitle>Služby tretích strán</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Web načítava obsah z dvoch externých služieb. Obe prevádzkuje spoločnosť Google.
            </p>
            <div className="mt-5 space-y-5">
              {THIRD_PARTIES.map(({ name, where, what }) => (
                <div key={name} className="border-t border-[hsl(var(--steel))]/50 pt-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-[0.9rem] text-[hsl(var(--obsidian))]/85">{name}</p>
                    <p className="text-[0.65rem] uppercase tracking-[0.2em] text-[hsl(var(--obsidian))]/40">{where}</p>
                  </div>
                  <p className={`mt-2 ${P}`}>{what}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionTitle>Ako zmeniť svoj súhlas</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Kedykoľvek. Stačí otvoriť nastavenia a voľbu upraviť — prejaví sa okamžite.
            </p>
            <button
              type="button"
              onClick={openCookieSettings}
              className="mt-5 inline-flex items-center px-7 py-3 text-xs uppercase tracking-[0.25em] bg-[hsl(var(--burgundy))] text-[hsl(var(--chrome))] hover:bg-[hsl(var(--obsidian))] transition-colors">
              Otvoriť nastavenia
            </button>
          </section>

          <section className="mt-10">
            <SectionTitle>Ako vymazať údaje z prehliadača</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Uloženú voľbu aj všetky cookies iných stránok viete odstrániť priamo v prehliadači:
            </p>
            <ul className="mt-4 space-y-2">
              {REMOVE_LINKS.map(([label, href]) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${P} underline underline-offset-2 hover:text-[hsl(var(--burgundy))] transition-colors`}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </section>

          <section className="mt-10">
            <SectionTitle>Otázky</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Ak čomukoľvek nerozumiete alebo chcete vedieť viac, napíšte nám na{" "}
              <a
                href={`mailto:${EMAIL}`}
                className="underline underline-offset-2 hover:text-[hsl(var(--burgundy))] transition-colors">
                {EMAIL}
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
