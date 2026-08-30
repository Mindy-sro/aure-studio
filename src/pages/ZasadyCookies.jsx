import React from "react";
import Navbar from "@/components/aure/Navbar";
import Footer from "@/components/aure/Footer";
import { openCookieSettings } from "@/components/aure/CookieConsent";
import { ANALYTICS_ENABLED, EMAIL, GA_MEASUREMENT_ID } from "@/lib/site";

const TYPES = [
  {
    name: "Potrebné",
    used: true,
    state: "Používame — vždy zapnuté",
    desc: "Zabezpečujú základné fungovanie stránky a nedajú sa vypnúť. Na tomto webe do tejto kategórie patrí jediná položka: uloženie vášho rozhodnutia z lišty o súhlase.",
  },
  {
    name: "Funkčné",
    used: true,
    state: "Používame — voliteľné",
    desc: "Umožňujú zobraziť obsah tretích strán priamo na stránke, napríklad mapy alebo videá. Na tomto webe ide výhradne o mapu Google na stránke Kontakt.",
  },
  {
    name: "Analytika",
    used: ANALYTICS_ENABLED,
    state: ANALYTICS_ENABLED ? "Používame — voliteľné" : "Zatiaľ nepoužívame",
    desc: ANALYTICS_ENABLED
      ? "Merajú, ako návštevníci stránku používajú — počet návštev, zdroj návštevnosti, ktoré stránky si prezerajú. Používame na to službu Google Analytics. Načíta sa až po vašom súhlase; ak ho odmietnete alebo odvoláte, meranie sa nespustí a už uložené súbory odstránime."
      : "Merajú, ako návštevníci stránku používajú — počet návštev, zdroj návštevnosti, ktoré stránky si prezerajú. Tento web zatiaľ žiadny analytický nástroj nemá, takže táto kategória nič neaktivuje. Prepínač pre ňu v lište ponechávame pripravený pre prípad, že meranie zavedieme.",
  },
  {
    name: "Reklama",
    used: false,
    state: "Nepoužívame",
    desc: "Slúžia na cielenie reklamy a sledovanie návštevníkov naprieč webmi. Tento web žiadny reklamný systém nepoužíva.",
  },
  {
    name: "Výkon",
    used: false,
    state: "Nepoužívame",
    desc: "Sledujú rýchlosť načítania a technické správanie stránky s cieľom zlepšiť jej fungovanie. Tento web nič také nemeria.",
  },
  {
    name: "Iné",
    used: false,
    state: "Nepoužívame",
    desc: "Nezaradené súbory, ktoré ešte neboli priradené do žiadnej kategórie. Na tomto webe sa nevyskytujú.",
  },
];

const GA_COOKIES = ANALYTICS_ENABLED
  ? [
      {
        name: "_ga",
        kind: "Súbor cookie",
        origin: "aurestudio.sk",
        category: "Analytika",
        retention: "2 roky",
        desc: "Nastavuje ho Google Analytics. Prideľuje prehliadaču náhodné číslo, aby vedel odlíšiť nového návštevníka od vracajúceho sa. Vzniká až po vašom súhlase s analytickou kategóriou.",
      },
      {
        name: `_ga_${GA_MEASUREMENT_ID.replace(/^G-/, "")}`,
        kind: "Súbor cookie",
        origin: "aurestudio.sk",
        category: "Analytika",
        retention: "2 roky",
        desc: "Nastavuje ho Google Analytics. Uchováva stav aktuálnej návštevy, aby sa jednotlivé zobrazenia stránok dali spojiť do jednej relácie. Vzniká až po vašom súhlase s analytickou kategóriou.",
      },
    ]
  : [];

const STORED = [
  {
    name: "aure_cookie_consent",
    kind: "Lokálne úložisko prehliadača",
    origin: "aurestudio.sk",
    category: "Potrebné",
    retention: "Do vymazania v prehliadači",
    desc: "Uchováva vaše rozhodnutie z lišty o súhlase, aby sme sa vás nepýtali pri každej návšteve znova. Zostáva vo vašom prehliadači, neodosiela sa na server a neobsahuje údaj, podľa ktorého by vás bolo možné identifikovať.",
  },
  {
    name: "Údaje mapy Google",
    kind: "Lokálne úložisko prehliadača",
    origin: "google.com",
    category: "Funkčné",
    retention: "Určuje Google",
    desc: "Vznikajú až po udelení súhlasu s funkčnou kategóriou a načítaní mapy. Pri našom meraní išlo o položky v lokálnom úložisku, nie o súbory cookies. Rozsah aj trvanlivosť určuje spoločnosť Google a môže ich kedykoľvek zmeniť.",
  },
  ...GA_COOKIES,
];

const THIRD_PARTIES = [
  ...(ANALYTICS_ENABLED
    ? [
        {
          name: "Google Analytics",
          where: "Všetky stránky",
          what: "Meranie návštevnosti. Načíta sa až po vašom súhlase s analytickou kategóriou — dovtedy sa skript vôbec nestiahne. Googlu sa odošle vaša IP adresa v skrátenej podobe, adresa navštívenej stránky a základné údaje o prehliadači. Ak súhlas odvoláte, meranie sa zastaví a uložené súbory odstránime.",
        },
      ]
    : []),
  {
    name: "Google Maps",
    where: "Stránka Kontakt",
    what: "Interaktívna mapa s polohou štúdia. Načíta sa až po vašom súhlase — dovtedy s Googlom neprebehne žiadna komunikácia. Po načítaní sa Googlu odošle vaša IP adresa.",
  },
  {
    name: "Google Fonts",
    where: "Všetky stránky",
    what: "Typografia webu. Písma sa sťahujú zo serverov Google, čím sa mu odošle vaša IP adresa. Súbory cookies sa pri tom nenastavujú. Túto službu nie je možné podmieniť súhlasom bez toho, aby sa narušilo zobrazenie stránky.",
  },
];

const COUNT_WORDS = { 1: "jednej", 2: "dvoch", 3: "troch", 4: "štyroch" };

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
            Tieto zásady vysvetľujú, čo sú súbory cookies, ktoré typy z nich na tomto webe používame
            a ktoré nie, aké údaje sa pri návšteve ukladajú do vášho zariadenia a ako môžete svoje
            nastavenia kedykoľvek zmeniť.
          </p>
          <p className={`mt-4 ${P}`}>
            Opisujú skutočný stav tohto webu. Ak sa niektorá zo služieb v budúcnosti zmení alebo
            pribudne, upravíme aj tento dokument.
          </p>

          <section className="mt-12">
            <SectionTitle>Čo rozumieme pod súbormi cookies</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Súbory cookies sú malé textové súbory, ktoré webová stránka ukladá do vášho zariadenia
              pri jej načítaní. Umožňujú stránke rozpoznať vaše zariadenie pri ďalšej návšteve
              a zapamätať si vaše nastavenia.
            </p>
            <p className={`mt-3 ${P}`}>
              Podobným spôsobom funguje aj lokálne úložisko prehliadača. Technicky nejde o súbory
              cookies, no z hľadiska ochrany súkromia sa posudzuje rovnako, pretože aj ono ukladá
              informácie do vášho zariadenia. Preto ho v týchto zásadách uvádzame spolu s nimi.
            </p>
          </section>

          <section className="mt-10">
            <SectionTitle>Načo slúžia a ako ich používame</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Rozlišujeme súbory prvej strany, ktoré vytvára samotná navštívená stránka, a súbory
              tretích strán, ktoré vytvárajú externé služby vložené do stránky.
            </p>
            {ANALYTICS_ENABLED ? (
              <p className={`mt-3 ${P}`}>
                Tento web nastavuje vlastné súbory cookies <strong>jedine na meranie návštevnosti</strong>,
                a to až po vašom súhlase. Reklamné ani inzertné systémy nepoužívame a nevytvárame
                profily návštevníkov. Kým súhlas nedáte, ukladáme do vášho zariadenia jedinú
                položku — vaše rozhodnutie z lišty.
              </p>
            ) : (
              <p className={`mt-3 ${P}`}>
                Tento web <strong>sám nenastavuje žiadne súbory cookies</strong>. Nepoužívame
                analytické, reklamné ani sledovacie nástroje a nevytvárame profily návštevníkov.
                Do vášho zariadenia ukladáme jedinú položku — vaše rozhodnutie z lišty o súhlase.
              </p>
            )}
            <p className={`mt-3 ${P}`}>
              To však neznamená, že sa k tretím stranám nedostane nič. Web načítava zo serverov
              spoločnosti Google {ANALYTICS_ENABLED ? "písma, mapu aj meranie návštevnosti" : "písma a mapu"},
              takže sa jej pri tom odošle vaša IP adresa. Google sa tak dozvie, že zo zariadenia
              s touto adresou bola stránka načítaná. Podrobnosti nájdete v sekcii o tretích stranách.
            </p>
          </section>

          <section className="mt-10">
            <SectionTitle>Aké typy súborov cookies používame</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Nasledujúce kategórie sú bežne zaužívané. Pri každej uvádzame, či ju tento web
              skutočne využíva.
            </p>
            <div className="mt-5 space-y-5">
              {TYPES.map(({ name, used, state, desc }) => (
                <div key={name} className="border-t border-[hsl(var(--steel))]/50 pt-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className={`text-[0.9rem] ${used ? "text-[hsl(var(--obsidian))]/85" : "text-[hsl(var(--obsidian))]/45"}`}>
                      {name}
                    </p>
                    <p className={used ? "text-[0.6rem] uppercase tracking-[0.2em] text-[hsl(var(--burgundy))]" : LABEL}>
                      {state}
                    </p>
                  </div>
                  <p className={`mt-2 ${P}`}>{desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <SectionTitle>Zoznam toho, čo sa ukladá</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Nižšie uvedený zoznam podrobne popisuje všetko, čo tento web ukladá do vášho zariadenia.
            </p>
            <div className="mt-5 space-y-5">
              {STORED.map(({ name, kind, origin, category, retention, desc }) => (
                <div key={name} className="border-t border-[hsl(var(--steel))]/50 pt-4">
                  <p className="font-mono text-[0.78rem] text-[hsl(var(--obsidian))]/85">{name}</p>
                  <dl className="mt-3 grid grid-cols-2 sm:grid-cols-4 gap-y-3 gap-x-4">
                    <div>
                      <dt className={LABEL}>Typ</dt>
                      <dd className={`mt-1 ${P}`}>{kind}</dd>
                    </div>
                    <div>
                      <dt className={LABEL}>Doména</dt>
                      <dd className={`mt-1 ${P}`}>{origin}</dd>
                    </div>
                    <div>
                      <dt className={LABEL}>Kategória</dt>
                      <dd className={`mt-1 ${P}`}>{category}</dd>
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
              Web načítava obsah z {COUNT_WORDS[THIRD_PARTIES.length] || THIRD_PARTIES.length} externých
              služieb. Všetky prevádzkuje spoločnosť Google LLC.
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
            <SectionTitle>Ako môžem zmeniť nastavenia</SectionTitle>
            <p className={`mt-3 ${P}`}>
              Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať. V lište nájdete prepínače pre
              kategórie, ktoré tento web používa alebo môže v budúcnosti používať. Zmena sa prejaví
              okamžite.
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
