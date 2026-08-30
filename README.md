# AURE Studio

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

Nastav `VITE_GA_MEASUREMENT_ID` (napr. `G-XXXXXXXXXX`) v `.env.local` alebo v prostredí buildu.
Vzor je v `.env.example`.

Táto jediná premenná riadi všetko naraz:

- **prázdna** — gtag sa nenačíta a `/zasady-cookies` analytiku neuvádza
- **vyplnená** — gtag sa načíta až po súhlase s analytickou kategóriou a zásady doplnia
  `_ga`, `_ga_<ID>` aj sekciu o Google Analytics

Text zásad je odvodený z tej istej konštanty ako správanie, takže nemôže tvrdiť niečo iné,
než web reálne robí. Pri odvolaní súhlasu sa `_ga*` cookies odstránia.

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
