import React from "react";
import { Image } from "@/components/ui/image";

export default function About({ interiorImage, atmosphereImage }) {
  return (
    <section id="studio" className="relative bg-[hsl(var(--chrome))] py-24 lg:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="relative grid lg:grid-cols-12 gap-0 items-stretch min-h-[34rem]">
          {/* Dark panel — clipped diagonally on large screens */}
          <div
            className="lg:col-span-7 relative bg-[hsl(var(--obsidian))] text-[hsl(var(--chrome))] px-6 py-12 lg:px-14 lg:py-16 flex flex-col justify-center lg:diagonal-clip">
            
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--chrome))]/50 mb-4">04 — Štúdio</p>
            <h2 className="font-heading font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-[hsl(var(--chrome))]">
              Tekutý<br />minimalizmus
            </h2>
            <p className="mt-8 text-base leading-[1.7] text-[hsl(var(--chrome))]/75 max-w-md">
              AURE STUDIO je priestor, kde sa nechtové umenie stretáva s priemyselnou presnosťou.
              Odmietame preplnené „salóny" a tomu zodpovedajúcemu klišé — inšpirujeme sa ateliérmi
              architektonických štúdií. Každý detail je premyslený, každý výsledok stojí zato.
            </p>

            <dl className="mt-12 grid grid-cols-1 gap-4">
              <div className="flex items-baseline gap-4 border-t border-[hsl(var(--chrome))]/15 pt-4">
                <dt className="font-heading text-4xl w-16 text-[hsl(var(--steel))]">1</dt>
                <dd className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--chrome))]/60">rituál pre každú ruku</dd>
              </div>
              <div className="flex items-baseline gap-4 border-t border-[hsl(var(--chrome))]/15 pt-4">
                <dt className="font-heading text-4xl w-16 text-[hsl(var(--steel))]">08</dt>
                <dd className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--chrome))]/60">techník</dd>
              </div>
              <div className="flex items-baseline gap-4 border-t border-[hsl(var(--chrome))]/15 pt-4">
                <dt className="font-heading text-4xl w-16 text-[hsl(var(--steel))]">100%</dt>
                <dd className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--chrome))]/60">sterilné prostredie</dd>
              </div>
            </dl>
          </div>

          {/* Stacked rounded images */}
          <div className="lg:col-span-5 relative flex flex-col gap-4 lg:pl-10 py-6 lg:py-0 justify-center">
            <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-[hsl(var(--steel))] ring-1 ring-[hsl(var(--steel))]/60">
              {interiorImage &&
              <Image
                src={interiorImage}
                alt="Interiér štúdia AURE"
                fittingType="fill"
                className="w-full h-full object-cover" />

              }
            </div>
            <div className="aspect-[16/9] overflow-hidden rounded-2xl bg-[hsl(var(--steel))] ring-1 ring-[hsl(var(--steel))]/60">
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