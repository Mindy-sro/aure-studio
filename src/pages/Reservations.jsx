import React from "react";
import { ArrowUpRight, CalendarDays, Phone } from "lucide-react";
import Navbar from "@/components/aure/Navbar";
import Footer from "@/components/aure/Footer";
import PriceList from "@/components/aure/PriceList";
import { ADDRESS, BOOKING_URL, PHONE_DISPLAY, PHONE_E164, OPENING_HOURS_WEEKDAYS, OPENING_HOURS_WEEKEND } from "@/lib/site";

const steps = [
  { title: "Vyberte si službu", text: "V rezervačnom systéme nájdete ponuku služieb a ich ceny." },
  { title: "Nájdite svoj termín", text: "Zvoľte si z dostupných dátumov a časov." },
  { title: "Dokončite rezerváciu", text: "Vyplňte potrebné údaje a dokončite objednanie v Notino." },
];

export default function Reservations() {
  return (
    <div className="aure-home bg-[hsl(var(--chrome))]">
      <Navbar />
      <main className="pt-28 pb-12 lg:pt-36 lg:pb-16">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-6 lg:gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-[hsl(var(--sage))] mb-3">AURE Studio · Košice Barca</p>
              <h1 className="font-heading text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.1] text-[hsl(var(--burgundy))]">Váš termín.<br />Váš malý rituál.</h1>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-[hsl(var(--obsidian))]/75">Rezervujte si čas pre svoje ruky. Vyberte si službu a voľný termín online cez Notino.</p>
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="aure-action mt-5 inline-flex items-center justify-center gap-3 px-6 py-3.5 bg-[hsl(var(--burgundy))] text-white text-xs uppercase tracking-[0.2em] hover:bg-[hsl(var(--obsidian))] transition-colors">
                Rezervovať termín <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </a>
              <p className="mt-3 text-xs text-[hsl(var(--obsidian))]/60">Otvorí sa rezervačný systém Notino v novom okne.</p>
            </div>
            <aside className="lg:col-span-5 bg-[hsl(var(--sage-light))] rounded-2xl p-6 lg:p-7 border border-[hsl(var(--steel))]/50">
              <CalendarDays className="w-6 h-6 text-[hsl(var(--sage))] mb-3" aria-hidden="true" />
              <h2 className="font-heading text-3xl text-[hsl(var(--obsidian))]">Tešíme sa na vás</h2>
              <p className="mt-4 leading-relaxed text-[hsl(var(--obsidian))]/75">{ADDRESS}</p>
              <p className="mt-3 text-sm text-[hsl(var(--obsidian))]/75">{OPENING_HOURS_WEEKDAYS}</p>
              <p className="mt-1 text-sm text-[hsl(var(--obsidian))]/75">{OPENING_HOURS_WEEKEND}</p>
              <div className="mt-5 pt-4 border-t border-[hsl(var(--steel))]">
                <p className="text-sm leading-relaxed text-[hsl(var(--obsidian))]/75">Potrebujete poradiť s výberom služby alebo rezerváciou? Zavolajte nám.</p>
                <a href={`tel:${PHONE_E164}`} className="mt-4 inline-flex items-center gap-3 text-[hsl(var(--burgundy))] hover:underline underline-offset-4">
                  <Phone className="w-4 h-4" aria-hidden="true" />{PHONE_DISPLAY}
                </a>
              </div>
            </aside>
          </div>
          <section aria-labelledby="reservation-prices" className="mt-8 lg:mt-10 rounded-2xl border border-[hsl(var(--steel))]/60 bg-[hsl(var(--chrome))]/60 p-5 sm:p-6 lg:p-7">
            <h2 id="reservation-prices" className="font-heading text-2xl sm:text-3xl text-[hsl(var(--obsidian))] mb-3">Služby a cenník</h2>
            <PriceList compact />
          </section>
          <section aria-labelledby="booking-steps" className="mt-8 border-t border-[hsl(var(--steel))] pt-6">
            <h2 id="booking-steps" className="font-heading text-3xl text-[hsl(var(--obsidian))]">Rezervácia v troch krokoch</h2>
            <ol className="mt-5 grid md:grid-cols-3 gap-5 lg:gap-8">
              {steps.map((step, i) => (
                <li key={step.title}>
                  <span className="font-heading text-2xl text-[hsl(var(--sage))]" aria-hidden="true">0{i + 1}</span>
                  <h3 className="mt-1 text-base text-[hsl(var(--obsidian))]">{step.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-[hsl(var(--obsidian))]/70">{step.text}</p>
                </li>
              ))}
            </ol>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
