import React from "react";
import { PRICE_LIST_VALID_FROM, SERVICE_MENU } from "@/lib/site";

export default function PriceList({ compact = false }) {
  return (
    <div className={compact ? "aure-prices-compact" : undefined}>
      <table className="w-full text-left">
        <caption className="text-left text-sm text-[hsl(var(--obsidian))]/65 pb-5">Cenník platný od {PRICE_LIST_VALID_FROM}</caption>
        <thead className="sr-only"><tr><th scope="col">Služba</th><th scope="col">Cena s DPH</th></tr></thead>
        <tbody className="divide-y divide-[hsl(var(--steel))]">
          {SERVICE_MENU.map((service) => (
            <tr key={service.name} className="aure-service-row">
              <th scope="row" className="py-6 pr-5 font-normal text-base sm:text-lg leading-relaxed text-[hsl(var(--obsidian))]"><span className="block">{service.name}</span><span className="mt-2 block text-sm leading-relaxed text-[hsl(var(--obsidian))]/60">{service.description}</span></th>
              <td className="py-6 align-top text-right whitespace-nowrap font-heading text-2xl text-[hsl(var(--burgundy))]">{service.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-5 text-sm leading-relaxed text-[hsl(var(--obsidian))]/65">Služby vykonávame na objednanie. Ceny sú uvedené s DPH.<br />Platba v hotovosti alebo kartou.</p>
    </div>
  );
}
