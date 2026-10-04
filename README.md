# aure studio

Web nechtového štúdia v Košiciach: React, Vite, vite-react-ssg a Tailwind. Zdrojové súbory, fotografie, fonty a história zmien patria do GitHub repozitára Mindy-sro/aure-studio. Produkčná vetva je main.

## Vývoj a kontrola

Vyžaduje Node.js 22 alebo novší.

```sh
npm ci
npm run dev
npm run check
npm run deploy:check
```

Aplikácia sa vyvíja v src/. Fotografie, logá a lokálne fonty sú v public/.
`npm run dev` aj `npm run build` používajú rovnaké React zdroje. Build vytvára statické stránky v dist/. Tento adresár sa necommituje.
Priečinok site-release a kopírovanie predpripraveného buildu sa nepoužívajú.
GitHub Actions v .github/workflows/check.yml kontroluje pull requesty a push do main. Neobsahuje deploy: samotné publikovanie má robiť natívne Cloudflare Workers Builds.

## Jednorazové nastavenie automatického nasadenia

Táto konfigurácia je pripravená, ale pripojenie účtu Cloudflare nie je súčasťou Git repozitára a musí byť overené v dashboarde.

1. V Cloudflare otvor existujúci Worker, ktorý aktuálne obsluhuje aurestudio.sk a www.aurestudio.sk. Nevytváraj ďalší náhodne pomenovaný Worker.
2. Over jeho meno oproti name vo wrangler.jsonc. Aktuálna konfigurácia používa solitary-leaf-5919; ak domény obsluhuje iný Worker, najprv zosúlaď meno konfigurácie s overeným produkčným Workerom.
3. Settings → Builds → pripoj GitHub repozitár Mindy-sro/aure-studio.
4. Produkčná vetva: main. Koreň projektu: koreň repozitára. Node: 22.
5. Build command: npm run check. Deploy command: npm run deploy.
6. Over priradenie oboch domén k tomuto Workeru a prvý úspešný build.

Po dokončení prepojenia push do main automaticky spustí build a nasadenie. Build obsahuje lint, preto neúspešná kontrola zastaví nasadenie. História nasadení zostáva v Cloudflare.

## Budúce úpravy

Pracovná vetva → kontrola/náhľad → commit → GitHub → main → Cloudflare → kontrola reálnej domény. Pokyn používateľa nasadiť na produkciu znamená použiť tento postup. ZIP je iba export, nie náhrada synchronizácie zdrojov.

## Stránky

- / — homepage
- /o-mne — Hana Blašková
- /kontakt — kontakt a mapa načítaná až po funkčnom súhlase
- /rezervacie — cenník a Notino
- /zasady-cookies — cookies
- /404 — stránka nenájdená

Všetky obsahové podstránky používajú rovnakú krémovú paletu. Rezervačné tlačidlá odkazujú na https://www.notino.sk/salony/aure-studio_1/. Menu Rezervácie ponecháva prístup k vlastnej podstránke.

## Obsah a analytika

Pôvodné logo je uložené ako SVG s obrysmi písma. Fonty sú lokálne. Portrét Hany a fotografia štúdia sú dodané používateľom; stampovaný makro detail je vizuálny návrh vytvorený pomocou AI. Google Analytics ID je v src/lib/site.js; analytika sa aktivuje až po súhlase a pri odvolaní sa vypne.

## Dokumentácia

https://developers.cloudflare.com/workers/ci-cd/builds/
https://developers.cloudflare.com/workers/ci-cd/builds/configuration/
