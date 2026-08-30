import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/components/aure/Logo";

const links = [
  { label: "Služby", to: "/#sluzby" },
  { label: "Portfólio", to: "/#portfolio" },
  { label: "O mne", to: "/o-mne" },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = (e) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled || open
          ? "bg-[hsl(var(--chrome))] border-b border-[hsl(var(--steel))]"
          : "bg-transparent"
      }`}>
      {!scrolled && !open && (
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/10 to-transparent pointer-events-none" />
      )}

      <nav className="relative w-full flex items-center justify-between px-5 sm:px-8 lg:px-10 py-3 gap-6">
        <Link
          to="/"
          aria-label="AURE Studio — domov"
          onClick={() => setOpen(false)}
          className="group flex-shrink-0">
          <Logo
            size={isDesktop ? "3.3rem" : "2.6rem"}
            dark={!scrolled}
            className="transition-opacity group-hover:opacity-70"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <li key={l.to} className="rounded">
              <Link
                to={l.to}
                className="uppercase tracking-[0.2em] text-[hsl(var(--obsidian))]/70 hover:text-[hsl(var(--burgundy))] transition-colors text-left whitespace-nowrap inline-flex items-center text-base">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label={open ? "Zavrieť menu" : "Otvoriť menu"}
          aria-expanded={open}
          className={`md:hidden relative z-50 p-2 ${scrolled || open ? "text-[hsl(var(--obsidian))]" : "text-[hsl(var(--chrome))] drop-shadow"}`}>
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden relative bg-[hsl(var(--chrome))] border-t border-[hsl(var(--steel))]">
          <ul className="px-5 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="block py-3 uppercase tracking-[0.2em] text-sm text-[hsl(var(--obsidian))]/80 hover:text-[hsl(var(--burgundy))] transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}