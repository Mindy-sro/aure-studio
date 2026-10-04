import React from "react";
import { Image } from "@/components/ui/image";

export default function About({ interiorImage, atmosphereImage }) {
  return (
    <section id="studio" className="relative bg-[hsl(var(--sage-light))] py-12 lg:py-16 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          <div
            className="lg:col-span-7 relative text-[hsl(var(--obsidian))] flex flex-col justify-center">
            
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--obsidian))]/50 mb-4">04</p>
            <h2 className="font-heading font-light text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-[0.02em] text-[hsl(var(--obsidian))]">
              aure studio
            </h2>
            <div className="mt-8 space-y-5 text-base leading-[1.7] text-[hsl(var(--obsidian))]/75 max-w-md">
              <p>
                aure studio je priestor, kde sa nechtové umenie stretáva s priemyselnou presnosťou.
                Odmietame preplnenosť klasických salónov a hľadáme inšpiráciu v čistote a atmosfére
                architektonických ateliérov.
              </p>
              <p>Každý detail má svoj význam. Od materiálov a svetla až po samotnú prácu.</p>
              <p>Minimalistický priestor. Precízna technika. Výsledok, ktorý nepotrebuje nič navyše.</p>
            </div>

            <dl className="mt-12 grid grid-cols-1 gap-4">
              <div className="flex items-baseline gap-4 border-t border-[hsl(var(--obsidian))]/15 pt-4">
                <dt className="font-heading text-4xl w-16 text-[hsl(var(--sage))]">01</dt>
                <dd className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--obsidian))]/60">rituál pre každú ruku</dd>
              </div>
              <div className="flex items-baseline gap-4 border-t border-[hsl(var(--obsidian))]/15 pt-4">
                <dt className="font-heading text-4xl w-16 text-[hsl(var(--sage))]">04</dt>
                <dd className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--obsidian))]/60">služby manikúry</dd>
              </div>
              <div className="flex items-baseline gap-4 border-t border-[hsl(var(--obsidian))]/15 pt-4">
                <dt className="font-heading text-4xl w-16 text-[hsl(var(--sage))]">100%</dt>
                <dd className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--obsidian))]/60">sterilné prostredie</dd>
              </div>
            </dl>
          </div>

          
          <div className="lg:col-span-5 relative flex flex-col gap-4  justify-center">
            <div className="aspect-[4/3] aure-photo-frame overflow-hidden rounded-sm bg-[hsl(var(--steel))] ring-1 ring-[hsl(var(--steel))]/60">
              {interiorImage &&
              <Image
                src={interiorImage}
                alt="Interiér štúdia AURE"
                fittingType="fill"
                className="w-full h-full object-cover" />

              }
            </div>
            <div className="aspect-[16/9] aure-photo-frame overflow-hidden rounded-sm bg-[hsl(var(--steel))] ring-1 ring-[hsl(var(--steel))]/60">
              {atmosphereImage &&
              <Image
                src={atmosphereImage}
                alt="Tekutý burgundy"
                fittingType="fill"
                className="w-full h-full object-cover" />

              }
            </div>
          </div>
        </div>
      </div>
    </section>);

}
