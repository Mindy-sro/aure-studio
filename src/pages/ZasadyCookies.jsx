import React from "react";
import Navbar from "@/components/aure/Navbar";
import Footer from "@/components/aure/Footer";

const TYPES = [
  { name: "Analytika", desc: "Analytické cookies sa používajú na pochopenie toho, ako návštevníci interagujú s webovou stránkou. Tieto súbory cookies pomáhajú poskytovať informácie o metrikách, ako je počet návštevníkov, miera odchodov, zdroj návštevnosti atď." },
  { name: "Funkčné", desc: "Funkčné súbory cookies pomáhajú vykonávať určité funkcie, ako je zdieľanie obsahu webovej stránky na platformách sociálnych médií, zhromažďovanie spätnej väzby a ďalšie funkcie tretích strán." },
  { name: "Reklama", desc: "Reklamné súbory cookies sa používajú na poskytovanie relevantných reklám a marketingových kampaní návštevníkom. Tieto súbory cookies sledujú návštevníkov na webových stránkach a zhromažďujú informácie na poskytovanie prispôsobených reklám." },
  { name: "Výkon", desc: "Výkonnostné súbory cookies sa používajú na pochopenie a analýzu kľúčových indexov výkonnosti webovej stránky, čo pomáha pri poskytovaní lepšej používateľskej skúsenosti pre návštevníkov." },
  { name: "Potrebné", desc: "Nevyhnutné súbory cookies sú absolútne nevyhnutné pre správne fungovanie webovej stránky. Tieto súbory cookies anonymne zaisťujú základné funkcie a bezpečnostné prvky webovej stránky." },
  { name: "Iné", desc: "Ďalšie nekategorizované súbory cookies sú tie, ktoré sa analyzujú a zatiaľ neboli zaradené do žiadnej kategórie." },
];

const COOKIES = [
  ["_ga", `Súbor cookie _ga nainštalovaný službou Google Analytics počíta údaje o návštevníkoch, reláciách a kampaniach a tiež sleduje používanie stránky pre analytický prehľad stránky. Súbor cookie ukladá informácie anonymne a priraďuje náhodne vygenerované číslo na rozpoznanie jedinečných návštevníkov.`],
  ["_gat_gtag_UA_42759574_1", `Nastavil Google na rozlíšenie používateľov.`],
  ["_gid", `Súbor cookie _gid nainštalovaný službou Google Analytics ukladá informácie o tom, ako návštevníci používajú webovú stránku, a zároveň vytvára analytickú správu o výkonnosti webovej lokality. Niektoré zo zhromažďovaných údajov zahŕňajú počet návštevníkov, ich zdroj a stránky, ktoré anonymne navštevujú.`],
  ["cookielawinfo-checkbox-", `Tento súbor cookie nastavený doplnkom GDPR Cookie Consent sa používa na zaznamenanie súhlasu používateľa s cookies v kategórii „Reklama".`],
  ["cookielawinfo-checkbox-analytics", `Tento súbor cookie nastavuje doplnok GDPR Cookie Consent. Súbor cookie sa používa na uloženie súhlasu používateľa pre súbory cookie v kategórii „Analytika".`],
  ["cookielawinfo-checkbox-functional", `Súbor cookie je nastavený na základe súhlasu so súbormi cookie GDPR na zaznamenanie súhlasu používateľa pre súbory cookie v kategórii „Funkčné".`],
  ["cookielawinfo-checkbox-necessary", `Tento súbor cookie nastavuje doplnok GDPR Cookie Consent. Súbory cookie sa používajú na uloženie súhlasu používateľa s ukladaním súborov cookie v kategórii „Potrebné".`],
  ["cookielawinfo-checkbox-others", `Tento súbor cookie nastavuje doplnok GDPR Cookie Consent. Súbor cookie sa používa na uloženie súhlasu používateľa pre súbory cookie v kategórii „Iné".`],
  ["cookielawinfo-checkbox-performance", `Tento súbor cookie nastavuje doplnok GDPR Cookie Consent. Súbor cookie sa používa na uloženie súhlasu používateľa pre súbory cookie v kategórii „Výkon".`],
  ["CookieLawInfoConsent", `Zaznamená predvolený stav tlačidla príslušnej kategórie a stav CCPA. Funguje iba v koordinácii s primárnym súborom cookie.`],
  ["elementor", `Tento súbor cookie používa téma WordPress webovej stránky. Umožňuje vlastníkovi webovej stránky implementovať alebo meniť obsah webovej stránky v reálnom čase.`],
  ["viewed_cookie_policy", `Súbor cookie je nastavený doplnkom GDPR Cookie Consent a používa sa na uloženie toho, či používateľ súhlasil alebo nesúhlasil s používaním súborov cookie. Neuchováva žiadne osobné údaje.`],
];

const REMOVE_LINKS = [
  ["Mozilla", "https://support.mozilla.org/sk/kb/odstranenie-cookies"],
  ["Google Chrome", "https://support.google.com/chrome/answer/95647?co=GENIE.Platform%3DDesktop&hl=sk"],
  ["Microsoft Edge", "https://support.microsoft.com/sk-sk/help/4027947/windows-delete-cookies"],
];

function SectionTitle({ children }) {
  return (
    <h2 className="font-heading text-2xl md:text-[1.7rem] text-[hsl(var(--burgundy))] tracking-wide">{children}</h2>
  );
}

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

          <p className="text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
            Tieto zásady používania súborov cookies vysvetľujú, čo sú to súbory cookies a ako ich
            používame, aké typy súborov cookies používame, t. j. aké informácie zhromažďujeme pomocou
            súborov cookies a ako sa tieto informácie používajú, a ako ovládať nastavenia súborov cookies.
          </p>
          <p className="mt-4 text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
            Svoj súhlas môžete kedykoľvek zmeniť alebo odvolať z vyhlásenia o súboroch cookies na našej
            webovej stránke.
          </p>

          <section className="mt-12">
            <SectionTitle>Čo rozumieme pod súbormi cookies</SectionTitle>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
              Súbory cookies sú malé textové súbory, ktoré sa používajú na ukladanie malých informácií.
              Ukladajú sa do vášho zariadenia pri načítaní webovej stránky v prehliadači. Tieto súbory
              cookies nám pomáhajú zabezpečiť správne fungovanie webovej lokality, zvýšiť jej bezpečnosť,
              poskytnúť používateľom lepší zážitok a pochopiť, ako webová lokalita funguje, a analyzovať,
              čo funguje a kde je potrebné zlepšenie.
            </p>
          </section>

          <section className="mt-10">
            <SectionTitle>Načo nám slúžia súbory cookies a ako ich používame?</SectionTitle>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
              Ako väčšina online služieb, aj naša webová stránka používa súbory cookies prvej strany a
              tretích strán na viaceré účely. Súbory cookies prvej strany sú väčšinou potrebné na správne
              fungovanie webovej stránky a nezhromažďujú žiadne vaše osobné údaje.
            </p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
              Súbory cookies tretích strán používané na našej webovej lokalite slúžia najmä na pochopenie
              toho, ako webová lokalita funguje, ako s ňou komunikujete, na udržiavanie bezpečnosti
              našich služieb, na poskytovanie reklám ktoré sú pre vás relevantné. Celkovo vám poskytujú
              lepší a lepší používateľský zážitok a pomáhajú urýchliť vaše budúce interakcie s našou
              webovou lokalitou.
            </p>
          </section>

          <section className="mt-10">
            <SectionTitle>Aké typy súborov cookies používame</SectionTitle>
            <div className="mt-5 space-y-5">
              {TYPES.map((t) => (
                <div key={t.name}>
                  <p className="text-[0.68rem] uppercase tracking-[0.2em] text-[hsl(var(--burgundy))]">{t.name}</p>
                  <p className="mt-1 text-[0.8rem] leading-relaxed text-[hsl(var(--obsidian))]/70">{t.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <p className="text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
              Nižšie uvedený zoznam podrobne popisuje súbory cookies používané na našej webovej lokalite.
            </p>
            <div className="mt-5 ring-1 ring-[hsl(var(--steel))]/50 overflow-hidden">
              <table className="w-full text-left">
                <thead className="bg-[hsl(var(--obsidian))] text-[hsl(var(--chrome))]">
                  <tr>
                    <th className="px-4 py-3 text-[0.6rem] uppercase tracking-[0.2em] w-1/3">Cookie</th>
                    <th className="px-4 py-3 text-[0.6rem] uppercase tracking-[0.2em]">Popis</th>
                  </tr>
                </thead>
                <tbody>
                  {COOKIES.map(([name, desc], i) => (
                    <tr key={name} className={i % 2 ? "bg-[hsl(var(--steel))]/25" : "bg-transparent"}>
                      <td className="px-4 py-3 align-top text-[0.72rem] font-mono text-[hsl(var(--burgundy))] break-all">{name}</td>
                      <td className="px-4 py-3 text-[0.72rem] leading-relaxed text-[hsl(var(--obsidian))]/70">{desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-10">
            <SectionTitle>Ako môžem modifikovať nastavenia súborov cookies?</SectionTitle>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
              Ak sa rozhodnete zmeniť svoje nastavenia neskôr počas prehliadania, môžete kliknúť na odkaz
              „Spravujte svoj súhlas". Tým sa opäť zobrazí oznámenie o súhlase, ktoré vám umožní zmeniť vaše
              preferencie alebo úplne odvolať váš súhlas.
            </p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
              Okrem toho rôzne prehliadače poskytujú rôzne spôsoby blokovania a odstraňovania súborov
              cookies používaných webovými stránkami. Môžete zmeniť nastavenia svojho prehliadača a
              zablokovať/vymazať súbory cookies.
            </p>
            <p className="mt-3 text-[0.82rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
              Zhromaždené cookies súbory sú spracované najmä prostredníctvom služby Google Analytics,
              ktorú prevádzkuje spoločnosť Google Inc., so sídlom 1600 Amphitheatre Parkway, Mountain
              View, CA 94043, USA. Zozbierané cookies súbory sú následne spracované spoločnosťou Google
              Inc. v súlade so Zásadami ochrany súkromia.
            </p>
          </section>

          <section className="mt-10">
            <SectionTitle>Ako odstrániť cookies?</SectionTitle>
            <div className="mt-4 space-y-2">
              {REMOVE_LINKS.map(([name, url]) => (
                <p key={name} className="text-[0.8rem] leading-relaxed text-[hsl(var(--obsidian))]/70">
                  <span className="uppercase tracking-[0.18em] text-[0.62rem] text-[hsl(var(--steel))]">{name}: </span>
                  <a href={url} target="_blank" rel="noopener noreferrer" className="text-[hsl(var(--burgundy))] hover:underline underline-offset-2 break-all">{url}</a>
                </p>
              ))}
            </div>
            <p className="mt-5 text-[0.78rem] leading-relaxed text-[hsl(var(--obsidian))]/55">
              Viac informácií o tom, ako spravovať a odstraňovať súbory cookies, nájdete na stránke
              wikipedia.org, www.allaboutcookies.org.
            </p>
          </section>

          <div className="steel-rule my-12 opacity-40" />
          <p className="text-[0.66rem] uppercase tracking-[0.2em] text-[hsl(var(--obsidian))]/40">
            © {new Date().getFullYear()} AURE STUDIO
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}