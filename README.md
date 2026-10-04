# AURE Studio

## Aktuálna produkčná verzia

Schválená verzia z `AURE_OPRAVENE_Notino_kremove_pozadie.zip` je uložená v
`site-release/` vrátane HTML, JavaScriptu, obrázkov a lokálnych fontov. ZIP obsahoval
hotový build, nie jeho pôvodné React zdroje. Existujúce `src/` preto zodpovedá
staršej verzii; `npm run dev` a `npm run build:source` pracujú s touto staršou verziou.

Produkčný postup: `npm ci`, `npm run build`, potom `npm run preview` na lokálnu
kontrolu. Build kopíruje schválený obsah zo `site-release/` do `dist/`.
Cloudflare Workers Builds sleduje GitHub vetvu `main`, spúšťa `npm run build`
a `npx wrangler deploy`. Cieľový Worker je `solitary-leaf-5919`. Zmeny produkcie
ukladajte cez Git a push do `main`; nenahrávajte súbory ručne do Cloudflare.
Na ďalší vývoj novej verzie je vhodné získať jej pôvodné zdrojové súbory.

Nasledujúca dokumentácia opisuje pôvodnú zdrojovú verziu.

Statická webová prezentácia nechtového štúdia AURE (Košice). React + Vite + Tailwind.

Pôvodne postavené v Base44, odtiaľ vyexportované a odpojené — aplikácia už nemá žiadny
backend ani závislosť na Base44. Všetky obrázky sú lokálne v `public/images/`.

## Vývoj

```bash
npm install
npm run dev
```

Beží na http://localhost:5173

## Google Analytics

Meracie ID je v `src/lib/site.js` ako `GA_MEASUREMENT_ID`. Zatiaľ je tam zástupná hodnota
`G-XXXXXXXXXX` — nahraď ju skutočným ID z Google Analytics.

Kým tam zástupná hodnota zostáva, skript sa nenačíta a žiadna `_ga` cookie nevznikne.
Zásady cookies Analytics popisujú v oboch prípadoch; z ID sa odvodzuje len názov
`_ga_<ID>` v zozname.

Po nahradení sa gtag načíta až po súhlase s analytickou kategóriou. Pri odvolaní súhlasu
sa `_ga*` cookies odstránia.

## Build

```bash
npm run build
```

Výsledok je v `dist/`.

## Nasadenie (Websupport)

Nahrať **obsah** `dist/` (nie samotný priečinok) do `public_html`.

`public/.htaccess` sa do buildu kopíruje automaticky a zabezpečuje, aby priame otvorenie
podstránky (`/kontakt`, `/o-mne`, `/zasady-cookies`) nevrátilo 404 od Apache.

## Stránky

| cesta | obsah |
|---|---|
| `/` | domov — hero, služby, portfólio, o štúdiu |
| `/o-mne` | profil |
| `/kontakt` | kontaktné údaje a mapa |
| `/zasady-cookies` | zásady používania cookies |

## Známe nedoriešené veci

- **Fotka na `/o-mne`** je stocková fotografia (`public/images/profile-hana.jpg`), nie
  skutočná fotka. Nahradiť súbor.
- **Nedokončený text** v `src/pages/AboutMe.jsx` — posledný odstavec končí uprostred vety.
- **Rezervačný formulár** (`src/components/aure/Booking.jsx`) je nefunkčný a skrytý —
  komponent končí na `return null`. Odosielanie nikdy nikam nič neposielalo.
- **`/zasady-cookies`** popisuje Google Analytics a cookies WordPress pluginov, ktoré sa
  na webe nenachádzajú. Text je prevzatý z iného webu a treba ho prepísať alebo odstrániť.
  Web aktuálne nepoužíva žiadny tracking.
