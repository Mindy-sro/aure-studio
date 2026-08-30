import React, { useState } from "react";
import { Image } from "@/components/ui/image";

const services = [
{
  name: "Nail Art Ateliér",
  desc: "Geometria, línie, textúry. Kompozícia šitá presne na vás.",
  price: "od 40 €",
  duration: "120 min"
},
{
  name: "Hard Gel Architektúra",
  desc: "Presná C-krivka. Definovaná dĺžka. Trvanlivosť, na ktorú sa dá spoľahnúť.",
  price: "od 40 €",
  duration: "120 min"
},
{
  name: "Rekonštrukcia & Korekcia",
  desc: "Poškodená doska dostáva druhú šancu — silnejšiu a v správnom tvare.",
  price: "od 40 €",
  duration: "120 min"
}];


export default function Services({ portfolioImages }) {
  const [active, setActive] = useState(0);
  const img = portfolioImages?.[active] || portfolioImages?.[0] || "";

  return (
    <section id="sluzby" className="bg-[hsl(var(--chrome))] py-24 lg:py-36">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-5 lg:sticky lg:top-24 self-start">
            <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--burgundy))] mb-4">02 — Ateliér služieb</p>
            <h2 className="font-heading font-light text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-[hsl(var(--obsidian))] hidden">
              Presnosť ako<br />cenový štítok
            </h2>
            <div className="mt-8 max-w-[15rem] aspect-[3/4] overflow-hidden rounded-2xl bg-[hsl(var(--steel))] shadow-[0_24px_60px_-30px_rgba(34,25,25,0.45)] ring-1 ring-[hsl(var(--steel))]/60">
              {img &&
              <Image
                src={img}
                alt="Detail nechtovej architektúry"
                fittingType="fill"
                className="w-full h-full object-cover" />

              }
            </div>
          </div>

          <ul className="lg:col-span-7 divide-y divide-[hsl(var(--steel))]">
            {services.map((s, i) =>
            <li
              key={s.name}
              onMouseEnter={() => setActive(i)}
              className="group py-7 cursor-default transition-colors">
              
                <div className="flex items-baseline justify-between gap-6">
                  <h3
                  className={`font-heading text-2xl lg:text-3xl font-light transition-colors ${
                  active === i ? "text-[hsl(var(--burgundy))]" : "text-[hsl(var(--obsidian))]"}`
                  }>
                  
                    {s.name}
                  </h3>
                  <span className="font-heading text-xl lg:text-2xl text-[hsl(var(--obsidian))] whitespace-nowrap">
                    {s.price}
                  </span>
                </div>
                <div className="mt-3 flex items-center justify-between gap-6">
                  <p className="text-sm leading-relaxed text-[hsl(var(--obsidian))]/70 max-w-xl">{s.desc}</p>
                  <span className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--obsidian))]/50 whitespace-nowrap">
                    {s.duration}
                  </span>
                </div>
              </li>
            )}
          </ul>
        </div>
      </div>
    </section>);

}