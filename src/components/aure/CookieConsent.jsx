import React, { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

const STORAGE_KEY = "aure_cookie_consent";
const SETTINGS_EVENT = "aure:open-cookie-settings";
const CHANGED_EVENT = "aure:cookie-consent-changed";

const DEFAULT_PREFS = { necessary: true, functional: false, analytics: false };

const readConsent = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? { ...DEFAULT_PREFS, ...JSON.parse(stored) } : DEFAULT_PREFS;
  } catch {
    return DEFAULT_PREFS;
  }
};

export const openCookieSettings = () =>
  window.dispatchEvent(new Event(SETTINGS_EVENT));

export function useCookieConsent() {
  const [consent, setConsent] = useState(readConsent);

  useEffect(() => {
    const sync = () => setConsent(readConsent());
    window.addEventListener(CHANGED_EVENT, sync);
    window.addEventListener("storage", sync);
    return () => {
      window.removeEventListener(CHANGED_EVENT, sync);
      window.removeEventListener("storage", sync);
    };
  }, []);

  return consent;
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [prefs, setPrefs] = useState({
    necessary: true,
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    const reopen = () => {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        try {
          setPrefs((p) => ({ ...p, ...JSON.parse(stored) }));
        } catch {
          setPrefs({ necessary: true, functional: false, analytics: false });
        }
      }
      setSettingsOpen(true);
      setVisible(true);
    };
    window.addEventListener(SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(SETTINGS_EVENT, reopen);
  }, []);

  const persist = (value) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
    window.dispatchEvent(new Event(CHANGED_EVENT));
    setVisible(false);
  };

  const acceptAll = () =>
    persist({
      necessary: true,
      functional: true,
      analytics: true,
      consent: "all",
    });

  const rejectAll = () =>
    persist({
      necessary: true,
      functional: false,
      analytics: false,
      consent: "necessary",
    });

  const savePrefs = () =>
    persist({ ...prefs, consent: "custom" });

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-[60] px-4 pb-4 lg:px-10 lg:pb-6 pointer-events-none">
      <div className="pointer-events-auto mx-auto max-w-[1400px] bg-[hsl(var(--obsidian))] text-[hsl(var(--chrome))] ring-1 ring-[hsl(var(--steel))]/30 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.6)]">
        <div className="flex items-start gap-4 px-6 lg:px-8 py-5">
          <Cookie className="hidden sm:block w-6 h-6 text-[hsl(var(--burgundy))] flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-[0.78rem] leading-relaxed text-[hsl(var(--chrome))]/80">
              Táto stránka využíva cookies na vylepšovanie a prispôsobovanie obsahu vašim potrebám.
              Pamätáme si vaše preferencie a opakované návštevy. Kliknutím na „Prijať všetko"
              súhlasíte s používaním všetkých súborov cookies. Môžete však navštíviť „Nastavenia"
              a poskytnúť kontrolovaný súhlas.{" "}
              <a
                href="/zasady-cookies"
                className="inline underline underline-offset-2 text-[hsl(var(--chrome))] hover:text-[hsl(var(--burgundy))] transition-colors">
                Zobraziť viac
              </a>
            </p>

            {settingsOpen && (
              <div className="mt-5 space-y-3 border-t border-[hsl(var(--chrome))]/15 pt-5">
                {[
                  { key: "necessary", label: "Nevyhnutné", desc: "Bez nich stránka nefunguje. Vždy zapnuté.", locked: true },
                  { key: "functional", label: "Funkčné", desc: "Pamätanie preferencií a opakovaných návštev.", locked: false },
                  { key: "analytics", label: "Analytické", desc: "Anonymné štatistiky návštevnosti.", locked: false },
                ].map((row) => (
                  <div key={row.key} className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-[hsl(var(--chrome))]/90">{row.label}</p>
                      <p className="text-[0.7rem] text-[hsl(var(--chrome))]/50 mt-0.5">{row.desc}</p>
                    </div>
                    <button
                      type="button"
                      disabled={row.locked}
                      onClick={() => setPrefs((p) => ({ ...p, [row.key]: !p[row.key] }))}
                      className={`relative h-5 w-10 rounded-full transition-colors flex-shrink-0 ${
                        prefs[row.key] ? "bg-[hsl(var(--burgundy))]" : "bg-[hsl(var(--chrome))]/25"
                      } ${row.locked ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}`}
                      aria-label={`${row.label} ${prefs[row.key] ? "zap" : "vyp"}`}
                    >
                      <span
                        className={`absolute top-0.5 h-4 w-4 rounded-full bg-[hsl(var(--chrome))] transition-transform ${
                          prefs[row.key] ? "translate-x-5" : "translate-x-0.5"
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={acceptAll}
                className="px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] bg-[hsl(var(--burgundy))] text-[hsl(var(--chrome))] hover:bg-[hsl(var(--burgundy))]/85 transition-colors">
                Prijať všetko
              </button>
              <button
                type="button"
                onClick={rejectAll}
                className="px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] border border-[hsl(var(--chrome))]/30 text-[hsl(var(--chrome))]/80 hover:text-[hsl(var(--chrome))] hover:border-[hsl(var(--chrome))]/60 transition-colors">
                Odmietnuť všetko
              </button>
              <button
                type="button"
                onClick={() => setSettingsOpen((s) => !s)}
                className="px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] text-[hsl(var(--chrome))]/60 hover:text-[hsl(var(--chrome))] transition-colors">
                {settingsOpen ? "Zavrieť nastavenia" : "Nastavenia"}
              </button>
              {settingsOpen && (
                <button
                  type="button"
                  onClick={savePrefs}
                  className="px-6 py-3 text-[0.7rem] uppercase tracking-[0.2em] bg-[hsl(var(--chrome))] text-[hsl(var(--obsidian))] hover:bg-[hsl(var(--chrome))]/85 transition-colors">
                  Uložiť & prijať
                </button>
              )}
            </div>
          </div>
          <button
            type="button"
            onClick={rejectAll}
            aria-label="Zavrieť"
            className="text-[hsl(var(--chrome))]/40 hover:text-[hsl(var(--chrome))] transition-colors flex-shrink-0">
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}