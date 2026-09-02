import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-[hsl(var(--chrome))]">
      <div className="max-w-md w-full text-center">
        <p className="font-heading font-light text-7xl text-[hsl(var(--steel))]">404</p>
        <div className="steel-rule my-8" />
        <h1 className="font-heading font-light text-3xl text-[hsl(var(--obsidian))]">
          Stránka sa nenašla
        </h1>
        <p className="mt-4 text-base leading-relaxed text-[hsl(var(--obsidian))]/70">
          Adresa, ktorú ste zadali, na tomto webe neexistuje. Možno sa zmenila alebo je v nej preklep.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-flex items-center px-8 py-4 text-xs uppercase tracking-[0.25em] bg-[hsl(var(--burgundy))] text-[hsl(var(--chrome))] hover:bg-[hsl(var(--obsidian))] transition-colors">
            Domov
          </Link>
          <Link
            to="/kontakt"
            className="inline-flex items-center px-8 py-4 text-xs uppercase tracking-[0.25em] border border-[hsl(var(--obsidian))]/30 text-[hsl(var(--obsidian))] hover:bg-[hsl(var(--obsidian))] hover:text-[hsl(var(--chrome))] transition-colors">
            Kontakt
          </Link>
        </div>
      </div>
    </div>
  );
}
