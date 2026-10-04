import { BOOKING_URL } from "@/lib/site";
import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function Booking() {
  return (
    <section className="bg-[hsl(var(--sage-light))] py-12 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--sage))] mb-4">Váš čas pre seba</p>
          <h2 className="font-heading text-3xl lg:text-4xl text-[hsl(var(--obsidian))]">Nechty s podpisom aure.</h2>
          <p className="mt-4 text-[hsl(var(--obsidian))]/70">Vyberte si službu a termín v našom online rezervačnom systéme.</p>
        </div>
        <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="inline-flex self-start md:self-auto items-center justify-center gap-3 px-8 py-4 bg-[hsl(var(--burgundy))] text-white text-xs uppercase tracking-[0.2em] hover:bg-[hsl(var(--obsidian))] transition-colors">
          Rezervovať termín <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
