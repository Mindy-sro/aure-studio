import React from "react";
import ManicurePhoto from "@/components/aure/ManicurePhoto";
import PriceList from "@/components/aure/PriceList";

export default function Services() {
  return (
    <section id="sluzby" className="bg-[hsl(var(--chrome))] pt-4 pb-12 lg:pt-6 lg:pb-16 scroll-mt-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--sage))] mb-4">02 — Služby</p>
          <h2 className="font-heading font-light text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-[hsl(var(--obsidian))]">Starostlivosť<br />do posledného detailu.</h2>
          <div className="mt-8 aure-photo-frame overflow-hidden rounded-sm bg-[hsl(var(--steel))] ring-1 ring-[hsl(var(--steel))]/60"><ManicurePhoto /></div>
        </div>
        <div className="lg:col-span-7 lg:pt-10"><PriceList /></div>
      </div>
    </section>
  );
}
