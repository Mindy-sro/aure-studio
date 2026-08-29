import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/aure/Logo";
import { Instagram, Facebook } from "lucide-react";
import { FACEBOOK_URL, INSTAGRAM_URL } from "@/lib/site";
import { openCookieSettings } from "@/components/aure/CookieConsent";

export default function Footer() {
  return (
    <footer id="kontakt" className="bg-[hsl(var(--obsidian))] text-[hsl(var(--chrome))] py-[1.46rem]">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Logo height="4.2rem" dark />
            <p className="mt-4 text-[0.7rem] text-[hsl(var(--chrome))]/60 max-w-xs leading-relaxed">
              Nechtové štúdio. Industriálny luxus a tekutý minimalizmus.
            </p>
          </div>

          <div className="md:col-span-4">
            <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[hsl(var(--steel))] mb-4">Obchodná spoločnosť
</p>
            <p className="text-[0.7rem] text-[hsl(var(--chrome))]/70 leading-relaxed">
              Mindy s. r. o.<br />Opatovská cesta 10<br />040 01 Košice<br />Slovenská republika
            </p>
            <dl className="mt-4 space-y-1 text-[0.6rem] text-[hsl(var(--chrome))]/50">
              <div className="flex gap-2"><dt className="w-16">IČO</dt><dd>47 556 692</dd></div>
              <div className="flex gap-2"><dt className="w-16">DIČ</dt><dd>2023986899</dd></div>
              <div className="flex gap-2"><dt className="w-16">IČ DPH</dt><dd>SK2023986899</dd></div>
            </dl>
          </div>

          <div className="md:col-span-2">
            <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[hsl(var(--steel))] mb-4">Kontakt</p>
            <a href="tel:+421904659298" className="block text-[0.7rem] text-[hsl(var(--chrome))]/70 hover:text-[hsl(var(--chrome))] transition-colors">+421 904 659 298</a>
            <a href="mailto:info@aurestudio.sk" className="block text-[0.7rem] text-[hsl(var(--chrome))]/70 hover:text-[hsl(var(--chrome))] transition-colors">info@aurestudio.sk</a>
          </div>

          <div className="md:col-span-2">
            <p className="text-[0.6rem] uppercase tracking-[0.25em] text-[hsl(var(--steel))] mb-4">Sledovať</p>
            <div className="flex items-center gap-4">
              <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[hsl(var(--chrome))]/70 hover:text-[hsl(var(--chrome))] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-[hsl(var(--chrome))]/70 hover:text-[hsl(var(--chrome))] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="steel-rule my-[2.2rem] opacity-30" />
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-[0.6rem] text-[hsl(var(--chrome))]/40 uppercase tracking-[0.2em]">
          <p>© {new Date().getFullYear()} AURE STUDIO</p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
            <Link
              to="/zasady-cookies"
              className="underline underline-offset-2 hover:text-[hsl(var(--chrome))] transition-colors normal-case tracking-[0.15em]">
              Zásady cookies
            </Link>
            <span aria-hidden>·</span>
            <button
              type="button"
              onClick={openCookieSettings}
              className="underline underline-offset-2 hover:text-[hsl(var(--chrome))] transition-colors normal-case tracking-[0.15em]">
              Nastavenia cookies
            </button>
            <span aria-hidden>·</span>
            <p>Všetky práva vyhradené · Presnosť ako rituál</p>
          </div>
        </div>
      </div>
    </footer>);
}