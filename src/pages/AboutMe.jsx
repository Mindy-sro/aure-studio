import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/aure/Navbar";
import Footer from "@/components/aure/Footer";
import { Image } from "@/components/ui/image";

const PROFILE_PHOTO =
"/images/profile-hana.jpg";

export default function AboutMe() {
  return (
    <div className="bg-[hsl(var(--chrome))]">
      <Navbar />
      <section id="o-mne" className="pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <h1 className="mt-16 font-heading text-2xl lg:text-4xl font-bold burgundy-fill leading-[0.95]">
            Hana Blašková
          </h1>

          <div className="mt-16 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <div className="max-w-[15rem] aspect-[3/4] overflow-hidden rounded-2xl bg-[hsl(var(--steel))] shadow-[0_24px_60px_-30px_rgba(34,25,25,0.45)] ring-1 ring-[hsl(var(--steel))]/60">
                <Image
                  src={PROFILE_PHOTO}
                  alt="Manikérka v ateliéri AURE Studio"
                  fittingType="fill"
                  className="w-full h-full object-cover" />
                
              </div>
              <dl className="mt-8 grid grid-cols-2 gap-4 text-xs uppercase tracking-[0.2em] text-[hsl(var(--obsidian))]/70">
                <div>
                  <dt className="text-[hsl(var(--burgundy))] hidden">Prax</dt>
                  <dd className="mt-1 normal-case tracking-normal text-sm hidden">9 rokov</dd>
                </div>
                <div>
                  <dt className="text-[hsl(var(--burgundy))] hidden">Špecializácia</dt>
                  <dd className="mt-1 normal-case tracking-normal text-sm hidden">Sculpted nails</dd>
                </div>
                <div>
                  <dt className="text-[hsl(var(--burgundy))] hidden">Lokácia</dt>
                  <dd className="mt-1 normal-case tracking-normal text-sm hidden">Košice</dd>
                </div>
                <div>
                  <dt className="text-[hsl(var(--burgundy))] hidden">Vzdelanie</dt>
                  <dd className="mt-1 normal-case tracking-normal text-sm hidden">MMA Academy</dd>
                </div>
              </dl>
            </div>

            <div className="lg:col-span-7">
              <div className="steel-rule mb-10" />
              <p className="text-lg leading-relaxed text-[hsl(var(--obsidian))]/85">
                „Nechty pre mňa nie sú módnym doplnkom, ale architektúrou v mierke jednej ruky.
                Každý tvar, každý prechod a každá línia nesie zámer.“
              </p>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-[hsl(var(--obsidian))]/70">
                <p>
                  Hana založila aure studio s jednou víziou: pretaviť presnosť nerezovej ocele
                  do jemnej choreografie nechtového umenia.
                </p>
                <p>
                  Dnes pracuje výhradne s lakmi prémiovej kvality. Verí, že rituál je rovnako
                  dôležitý ako výsledok — preto každý klient odchádza s pocitom, že bol súčasťou
                  niečoho výnimočného.
                </p>
                <p>
                  Okrem práce v štúdiu sa neustále vzdeláva a zdokonaľuje svoje techniky, aby mohla
                  byť prínosným elementom pre každého, kto jej zverí svoje ruky. Venuje pozornosť
                  detailom, ktoré možno na prvý pohľad nie sú viditeľné, no práve ony vytvárajú
                  výsledok, ktorý pôsobí prirodzene, čisto a dokonale.
                </p>
                <p>
                  Pre Hanu je aure studio viac než miesto, kde vznikajú krásne nechty. Je to
                  priestor, v ktorom sa spája precíznosť, estetika a pokoj — a kde má každý detail
                  svoje miesto.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  to="/#studio"
                  className="inline-flex items-center px-8 py-4 text-xs uppercase tracking-[0.25em] bg-[hsl(var(--burgundy))] text-[hsl(var(--chrome))] hover:bg-[hsl(var(--obsidian))] transition-colors">
                  CREATIVE STUDIO
                </Link>
                <Link
                  to="/"
                  className="inline-flex items-center px-8 py-4 text-xs uppercase tracking-[0.25em] border border-[hsl(var(--obsidian))]/30 text-[hsl(var(--obsidian))] hover:bg-[hsl(var(--obsidian))] hover:text-[hsl(var(--chrome))] transition-colors">
                  Späť domov
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>);

}