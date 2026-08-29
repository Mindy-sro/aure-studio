import React from "react";
import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import Navbar from "@/components/aure/Navbar";
import Footer from "@/components/aure/Footer";

const ADDRESS = "Fándlyho 1, 040 17 Košice";
const PHONE_DISPLAY = "+421 904 659 298";
const PHONE_HREF = "tel:+421904659298";
const EMAIL = "info@aurestudio.sk";
const INSTAGRAM_URL = "https://instagram.com/aurestudio";
const FACEBOOK_URL = "https://facebook.com/aurestudio";
const MAP_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

const socials = [
  { label: "Instagram", href: INSTAGRAM_URL, Icon: Instagram },
  { label: "Facebook", href: FACEBOOK_URL, Icon: Facebook },
];

export default function Contact() {
  return (
    <div className="bg-[hsl(var(--chrome))]">
      <Navbar />
      <section id="kontakt" className="pt-40 pb-28 lg:pt-48 lg:pb-36">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="steel-rule mt-16 mb-12" />

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            {/* Contact info */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-1 text-[hsl(var(--burgundy))] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--obsidian))]/50">Adresa štúdia</p>
                  <p className="mt-1 text-base text-[hsl(var(--obsidian))]/85 leading-relaxed">{ADDRESS}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 mt-1 text-[hsl(var(--burgundy))] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--obsidian))]/50">Telefón</p>
                  <a href={PHONE_HREF} className="mt-1 block text-base text-[hsl(var(--obsidian))]/85 hover:text-[hsl(var(--burgundy))] transition-colors">{PHONE_DISPLAY}</a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 mt-1 text-[hsl(var(--burgundy))] shrink-0" />
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--obsidian))]/50">E-mail</p>
                  <a href={`mailto:${EMAIL}`} className="mt-1 block text-base text-[hsl(var(--obsidian))]/85 hover:text-[hsl(var(--burgundy))] transition-colors">{EMAIL}</a>
                </div>
              </div>

              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[hsl(var(--obsidian))]/50 mb-4">Sledovať</p>
                <div className="flex items-center gap-4">
                  {socials.map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="inline-flex items-center justify-center w-12 h-12 text-[hsl(var(--obsidian))]/70 hover:text-[hsl(var(--burgundy))] transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="lg:col-span-7">
              <div className="max-w-[30rem] aspect-[3/4] overflow-hidden rounded-2xl bg-[hsl(var(--steel))] shadow-[0_24px_60px_-30px_rgba(34,25,25,0.45)] ring-1 ring-[hsl(var(--steel))]/60">
                <iframe
                  title="Mapa — AURE Studio, Fándlyho 1, Košice"
                  src={MAP_EMBED}
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}