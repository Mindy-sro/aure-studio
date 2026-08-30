import React from "react";
import Navbar from "@/components/aure/Navbar";
import Footer from "@/components/aure/Footer";
import { openCookieSettings } from "@/components/aure/CookieConsent";
import { EMAIL } from "@/lib/site";

const CATEGORIES = [
  {
    name: "Nevyhnutné",
    state: "Vždy zapnuté",
    desc: "Zabezpečujú základné fungovanie stránky. Do tejto kategórie patrí uloženie vášho rozhodnutia o súhlase — bez neho by sme sa vás pýtali pri každej návšteve znova.",
  },
  {
    name: "Funkčné",
    state: "Voliteľné",
    desc: "Umožňujú zobraziť obsah tretích strán priamo na stránke. Na tomto webe ide výhradne o mapu Google na stránke Kontakt.",
  },
  {
    name: "Analytické",
    state: "Voliteľné, momentálne nevyužité",
    desc: "Slúžia na meranie návštevnosti. Tento web žiadny analytický nástroj nepoužíva, takže táto kategória zatiaľ nič neaktivuje. Ponechávame ju pre prípad, že sa meranie v budúcnosti zavedie.",
  },
];

const STORED = [
  {
    name: "Údaje mapy Google",
    kind: "Lokálne úložisko prehliadača",
    origin: "google.com",
    retention: "Určuje Google",
    desc: "Vznikajú až po udelení súhlasu s funkčnou kategóriou a načítaní mapy. Pri našom meraní išlo o položky v lokálnom úložisku, nie o súbory cookies. Rozsah aj trvanlivosť týchto údajov určuje spoločnosť Google a môže ich kedykoľvek zmeniť.",
  },
];

const THIRD_PARTIES = [
  {
    name: "Google Maps",
    where: "Stránka Kontakt",
    what: "Interaktívna mapa s polohou štúdia. Načíta sa až po vašom súhlase — dovtedy s Googlom neprebehne žiadna komunikácia. Po načítaní sa Googlu odošle vaša IP adresa.",
  },
  {
    name: "Google Fonts",
    where: "Všetky stránky",
    what: "Typografia webu. Písma sa sťahujú zo serverov Google, čím sa im odošle vaša IP adresa. Súbory cookies sa pri tom nenastavujú. Túto službu nie je možné podmieniť súhlasom bez toho, aby sa narušilo zobrazenie stránky.",
  },
];

const REMOVE_LINKS = [
  ["Mozilla Firefox", "https://support.mozilla.org/sk/kb/odstranenie-cookies"],
  ["Google Chrome", "https://support.google.com/chrome/answer/95647?hl=sk"],
  ["Microsoft Edge", "https://support.microsoft.com/sk-sk/help/4027947/windows-delete-cookies"],
];

function SectionTitle({ children }) {
  return (
    <h2 className="font-heading text-2xl md:text-[1.7rem] text-[hsl(var(--burgundy))] tracking-wide">{children}</h2>
  );
}

const P = "text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70";
const LABEL = "text-[0.6rem] uppercase tracking-[0.2em] text-[hsl(var(--obsidian))]/40";

export default function ZasadyCookies() {
  return (
    <div className="bg-[hsl(var(--chrome))] min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-36 md:pt-44 pb-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-10">
          <p className="text-[0.6rem] uppercase tracking-[0.3em] text-[hsl(var(--steel))]">— O zásadách —</p>
          <h1 className="font-heading text-4xl md:text-5xl text-[hsl(var(--obsidian))] mt-3 leading-tight">
            Základné zásady používania cookies
          </h1>
          <div className="steel-rule my-8" />

          <p className={P}>
            Tieto zásady vysvetľujú, čo sú súbory cookies, aké údaje sa pri návšteve tohto webu
            ukladajú do vášho zariadenia, na aký účel a ako môžete svoje nastavenia kedykoľvek
            zmeniť. Opisujú skutočný stav tohto webu ku dňu poslednej aktualizácie.
          </p>

          <section className="mt-12">
            <SectionTitle>Čo sú súbory cookies</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Súbory cookies sú malé textové súbory, ktoré webová stránka ukladá do vášho zariadenia
              pri jej načítaní. Umožňujú stránke rozpoznať vaše zariadenie pri ďalšej návšteve
              a zapamätať si vaše nastavenia.
            </p>
            <p className={`mt-3 ${P}`}>
              Podobným spôsobom funguje aj takzvané lokálne úložisko prehliadača. Technicky nejde
              o súbory cookies, no z hľadiska ochrany súkromia sa posudzuje rovnako, pretože aj ono
              ukladá informácie do vášho zariadenia. Preto ho v týchto zásadách uvádzame spolu s nimi.
            </p>
          </section>

          <section className="mt-10">
            <SectionTitle>Ako ich používame</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Tento web <strong>sám nenastavuje žiadne súbory cookies</strong>. Nepoužívame analytické,
              reklamné ani sledovacie nástroje, nevytvárame profily návštevníkov a nikomu neodovzdávame
              údaje o vašom správaní.
            </p>
            <p className={`mt-3 ${P}`}>
              Do vášho zariadenia ukladáme jedinú položku — vaše rozhodnutie z lišty o súhlase.
              Zostáva výhradne vo vašom prehliadači, neodosiela sa na server a neobsahuje žiadny
              údaj, podľa ktorého by vás bolo možné identifikovať. Slúži len na to, aby sme sa vás
              nepýtali pri každej návšteve znova.
            </p>
            <p className={`mt-3 ${P}`}>
              Okrem toho môže po vašom súhlase ukladať vlastné údaje spoločnosť Google
              prostredníctvom mapy na stránke Kontakt. Tie sú uvedené nižšie.
            </p>
          </section>

          <section className="mt-10">
            <SectionTitle>Kategórie a vaše nastavenia</SectionTitle>
            <p className={`mt-3 ${P}`}>
              V lište o súhlase si môžete jednotlivé kategórie povoliť alebo odmietnuť samostatne.
            </p>
            <div className="mt-5 space-y-5">
              {CATEGORIES.map(({ name, state, desc }) => (
                <div key={name} className="border-t border-[hsl(var(--steel))]/50 pt-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-[0.9rem] text-[hsl(var(--obsidian))]/85">{name}</p>
                    <p className={LABEL}>{state}</p>
                  </div>
                  <p className={`mt-2 ${P}`}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionTitle>Čo sa konkrétne ukladá</SectionTitle>
            <div className="mt-5 space-y-5">
              {STORED.map(({ name, kind, origin, retention, desc }) => (
                <div key={name} className="border-t border-[hsl(var(--steel))]/50 pt-4">
                  <p className="font-mono text-[0.78rem] text-[hsl(var(--obsidian))]/85">{name}</p>
                  <dl className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-y-2 gap-x-4">
                    <div>
                      <dt className={LABEL}>Typ</dt>
                      <dd className={`mt-1 ${P}`}>{kind}</dd>
                    </div>
                    <div>
                      <dt className={LABEL}>Doména</dt>
                      <dd className={`mt-1 ${P}`}>{origin}</dd>
                    </div>
                    <div>
                      <dt className={LABEL}>Trvanlivosť</dt>
                      <dd className={`mt-1 ${P}`}>{retention}</dd>
                    </div>
                  </dl>
                  <p className={`mt-3 ${P}`}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionTitle>Spracovanie tretími stranami</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Web načítava obsah z dvoch externých služieb. Obe prevádzkuje spoločnosť Google LLC.
            </p>
            <div className="mt-5 space-y-5">
              {THIRD_PARTIES.map(({ name, where, what }) => (
                <div key={name} className="border-t border-[hsl(var(--steel))]/50 pt-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="text-[0.9rem] text-[hsl(var(--obsidian))]/85">{name}</p>
                    <p className={LABEL}>{where}</p>
                  </div>
                  <p className={`mt-2 ${P}`}>{what}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionTitle>Ako zmeniť nastavenia</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať. Zmena sa prejaví okamžite.
            </p>
            <button
              type="button"
              onClick={openCookieSettings}
              className="mt-5 inline-flex items-center px-7 py-3 text-xs uppercase tracking-[0.25em] bg-[hsl(var(--burgundy))] text-[hsl(var(--chrome))] hover:bg-[hsl(var(--obsidian))] transition-colors">
              Otvoriť nastavenia
            </button>
          </section>

          <section className="mt-10">
            <SectionTitle>Ako odstrániť uložené údaje</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Uložené údaje aj súbory cookies iných stránok viete odstrániť priamo v prehliadači:
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
            <SectionTitle>Kontakt</SectionTitle>
            <p className={`mt-3 ${P}`}>
              S otázkami k týmto zásadám sa na nás obráťte na{" "}
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
