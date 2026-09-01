import React from "react";
import { Image } from "@/components/ui/image";

export default function Hero({ heroImage }) {
  return (
    <section id="top" className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-[hsl(var(--chrome))]">
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Ruka so štruktúrovanými burgundy nechtami na nerezovej ploche"
          fittingType="fill"
          className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--obsidian))]/70 via-transparent to-[hsl(var(--chrome))]/30" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] w-full px-6 lg:px-10 pb-16 pt-32">
        <h1 className="text-xs uppercase tracking-[0.4em] text-[hsl(var(--chrome))] mb-6">
          Nechtové štúdio · Presnosť ako architektúra
        </h1>
        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <p className="font-logo max-w-md text-lg md:text-xl font-light leading-relaxed tracking-[0.02em] text-[hsl(var(--chrome))]">
            Malý detail, veľký rozdiel.<br />
            Tvorba nechtov je výnimočný rituál, ktorý radi spríjemníme profesionálnym prostredím.<br />
            Nechty s podpisom aure.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#studio"
              className="inline-flex items-center px-8 py-4 text-xs uppercase tracking-[0.25em] bg-[hsl(var(--burgundy))] text-[hsl(var(--chrome))] hover:bg-[hsl(var(--obsidian))] transition-colors">CREATIVE STUDIO


            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center px-8 py-4 text-xs uppercase tracking-[0.25em] border border-[hsl(var(--chrome))]/40 text-[hsl(var(--chrome))] hover:bg-[hsl(var(--chrome))] hover:text-[hsl(var(--obsidian))] transition-colors">
              
              Portfólio
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 steel-rule" />
    </section>);

}