import React from "react";
import { Image } from "@/components/ui/image";

const techniques = [
"Hard Gel Architektúra",
"Nail Art Ateliér",
"Rekonštrukcia & Korekcia"];


export default function Portfolio({ portfolioImages }) {
  const imgs = portfolioImages || [];
  const layout = [
  "col-span-2 row-span-2",
  "col-span-1 row-span-2",
  "col-span-1 row-span-1"];


  return (
    <section id="portfolio" className="bg-[hsl(var(--obsidian))] py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--steel))] mb-4">03 — Portfólio textúr</p>
            <h2 className="font-heading font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-[hsl(var(--chrome))]">
              Sochárstvo v makro
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[hsl(var(--chrome))]/60">Asymetrická mozaika detailov — od makro detailov jedného nechtu po celú ruku. Minimalizmus ako filozofia.

          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[180px] md:auto-rows-[240px] gap-3">
          {imgs.slice(0, 3).map((src, i) =>
          <figure
            key={i}
            className={`group relative overflow-hidden rounded-2xl ring-1 ring-[hsl(var(--steel))]/25 bg-[hsl(var(--steel))]/10 ${layout[i % layout.length]}`}>
            
              <Image
              src={src}
              alt={`Portfólio ${techniques[i % techniques.length]}`}
              fittingType="fill"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            
              <figcaption className="absolute inset-0 flex items-end p-4 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-[hsl(var(--obsidian))]/90 to-transparent">
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