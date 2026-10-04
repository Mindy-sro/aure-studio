import React from "react";
import { Image } from "@/components/ui/image";

const techniques = [
"Detail manikúry",
"Jemný stampovaný motív",
"Nechty s podpisom aure"];


export default function Portfolio({ portfolioImages }) {
  const imgs = portfolioImages || [];
  const layout = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-2"];


  return (
    <section id="portfolio" className="bg-[hsl(var(--sage))] py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--steel))] mb-4">03 — Portfólio</p>
            <h2 className="font-heading font-light text-[clamp(2.25rem,4vw,3.5rem)] leading-[0.95] text-[hsl(var(--chrome))]">
              Sochárstvo v makro
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[hsl(var(--chrome))]/60">Jemné detaily, čisté tvary a farby, ktoré ladia.

          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3">
          {imgs.slice(0, 3).map((src, i) =>
          <figure
            key={i}
            className={`aure-portfolio-card group relative overflow-hidden rounded-sm ring-1 ring-[hsl(var(--steel))]/25 bg-[hsl(var(--steel))]/10 ${layout[i % layout.length]}`}>
            
              {<Image
              src={src}
              alt={`Portfólio ${techniques[i % techniques.length]}`}
              fittingType="fill"
              className="w-full h-full object-cover object-center" />}
            
              <figcaption className="absolute inset-0 flex items-end p-4 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[hsl(var(--obsidian))]/90 to-transparent">
                <span className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--chrome))]">
                  {techniques[i % techniques.length]}
                </span>
              </figcaption>
            </figure>
          )}
        </div>
      </div>
    </section>);

}
