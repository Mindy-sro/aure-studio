# AURE Studio: pracovné pravidlá

## Zdroj webu a nasadenie
- Zdroj pravdy je https://github.com/Mindy-sro/aure-studio.git, produkčná vetva main.
- Pred úpravami načítaj origin/main a skontroluj rozdiely. Zachovaj cudzie zmeny aj existujúcu históriu.
- Každú dokončenú zmenu commitni do Gitu a odošli do GitHubu. Lokálny commit sám osebe nie je synchronizácia.
- Keď používateľ povie nasadiť na doménu alebo produkciu, autorizuje tým integráciu schválených zmien do main a spustenie existujúceho Cloudflare nasadenia. Netreba znovu žiadať rovnaký súhlas.
- Rešpektuj ochranu main: ak vyžaduje PR/kontroly, použi ich. Nikdy nepoužívaj force push ani neobchádzaj ochrany.
- Pred odoslaním spusti npm run check a npm run deploy:check; pri zmenách vzhľadu skontroluj mobil aj desktop.
- Cloudflare je podľa aktuálnej konfigurácie prepojený s GitHub main; over stav v dashboarde. Build: npm run check, deploy: npm run deploy. Wrangler name musí zodpovedať Workeru obsluhujúcemu aurestudio.sk a www.aurestudio.sk.
- Po pushi over stav Cloudflare buildu/deploymentu a správanie reálneho webu. Push nie je dôkaz publikovania.
- ZIP nenahrávaj ručne do produkcie ako náhradu za GitHub, pokiaľ používateľ tento výnimočný postup výslovne nevyžiada.
- Pri odmietnutí prístupu oznám presnú prekážku. Netvrď, že je zmena na GitHube alebo doméne, pokiaľ to nie je overené.

## Vývoj výhradne zo zdrojov
- React stránky, komponenty, obsah a štýly upravuj v src/. Statické obrázky, logá a fonty patria do public/.
- npm run dev aj npm run build musia používať rovnaké zdroje. Build generuje dist/ odznova.
- Nevyvíjaj nad minifikovaným JS/CSS, v dist/ ani site-release/. Hotový ZIP ani kopírovací release skript nie sú zdroj aplikácie.
- Build výstupy necommituj. Nasadenie vždy zostaví schválené zdroje z Gitu.
- Zachovaj produkčný Worker solitary-leaf-5919 z aktuálnej vzdialenej konfigurácie; nemeň cieľ bez overenia domén.

## Vzhľad a obsah
- Zachovaj pôvodné logo, fonty a fotografie používateľa.
- Všetky obsahové podstránky používajú paletu aure-home, vrátane Kontakt a O mne.
- Tlačidlá Rezervovať termín vedú priamo na BOOKING_URL (Notino). Položka menu Rezervácie vedie na podstránku /rezervacie.
- Rešpektuj požiadavku na náhľad pred zverejnením, ak ju používateľ pri aktuálnej úprave vyžaduje.
