import { BOOKING_URL } from "@/lib/site";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Hero({ heroImage }) {
  return (
    <section id="top" className="pt-28 lg:pt-32 bg-[hsl(var(--chrome))] text-[hsl(var(--obsidian))]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="aure-hero-frame relative overflow-hidden">
          <img src={heroImage} alt="Manikúra AURE Studio s lakom upraveným do vínového odtieňa" width={1953} height={805} className="aure-hero-image w-full h-[340px] sm:h-[400px] lg:h-[min(480px,52vh)] object-cover" />
          <span className="aure-hero-label absolute top-5 left-5 sm:top-7 sm:left-7 text-[0.6rem] sm:text-xs uppercase tracking-[0.24em] text-white bg-black/10 backdrop-blur-md px-4 py-2 rounded-full">Nechty s podpisom aure</span>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/30 to-transparent px-4 pb-5 pt-16 sm:px-7 sm:pb-7">
            <div className="flex flex-wrap items-center gap-3">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="aure-action inline-flex gap-2 sm:gap-3 items-center justify-center px-3 sm:px-7 py-3.5 text-[0.6rem] sm:text-xs uppercase tracking-[0.16em] bg-[hsl(var(--burgundy))] text-white hover:bg-[hsl(var(--obsidian))] transition-colors">Rezervovať termín<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
              <a href="#portfolio" className="aure-action inline-flex gap-2 sm:gap-3 items-center justify-center px-3 sm:px-7 py-3.5 text-[0.6rem] sm:text-xs uppercase tracking-[0.16em] border border-white/50 text-white hover:bg-white/15 transition-colors">Portfólio<ArrowUpRight className="w-4 h-4" aria-hidden="true" /></a>
            </div>
          </div>
        </div>
        <div className="pt-6 pb-8 lg:pt-7 lg:pb-10">
          <h1 className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--sage))] mb-3">Nechtové štúdio · Košice Barca</h1>
          <div className="aure-hero-copy grid md:grid-cols-2 gap-5 md:gap-12 items-center"><p className="font-heading font-light text-[clamp(2.25rem,4.4vw,4rem)] leading-[0.95] tracking-[-0.025em]">Malý detail.<br />Veľký rozdiel.</p><p className="max-w-md text-sm sm:text-base leading-relaxed text-[hsl(var(--obsidian))]/70">Tvorba nechtov je výnimočný rituál, ktorý radi spríjemníme profesionálnym prostredím. Precízna manikúra v pokojnej atmosfére aure studio.</p></div>
        </div>
      </div>
    </section>
  );
}
