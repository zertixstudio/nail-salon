"use client";

import { useEffect, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";
import BookNowButton from "./BookNowButton";
import { SITE } from "@/lib/translations";

export default function Nav() {
  const { t } = useLanguage();
  const [solid, setSolid] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleMobileMenu = () => setMobileOpen((open) => !open);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    const lenis = (window as any).__lenis;
    if (el && lenis) lenis.scrollTo(el, { offset: 0 });
    else el?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-colors duration-500 ${
        solid ? "bg-cream/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <button
          onClick={() => {
            (window as any).__lenis?.scrollTo(0);
            setMobileOpen(false);
          }}
          className="font-display text-lg font-800 tracking-tight text-ink"
        >
          {SITE.name}
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          <button onClick={() => scrollTo("philosophy")} className="eyebrow text-ink/70 hover:text-ink transition-colors">
            {t.nav.philosophy}
          </button>
          <button onClick={() => scrollTo("services")} className="eyebrow text-ink/70 hover:text-ink transition-colors">
            {t.nav.services}
          </button>
          <button onClick={() => scrollTo("gallery")} className="eyebrow text-ink/70 hover:text-ink transition-colors">
            {t.nav.gallery}
          </button>
          <button onClick={() => scrollTo("visit")} className="eyebrow text-ink/70 hover:text-ink transition-colors">
            {t.nav.visit}
          </button>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <BookNowButton className="hidden sm:inline-flex" />

          <button
            type="button"
            onClick={toggleMobileMenu}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 bg-white text-ink shadow-sm transition hover:border-ink/30 md:hidden"
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{mobileOpen ? "Close menu" : "Open menu"}</span>
            <div className="flex h-5 w-5 flex-col justify-between">
              <span className={`block h-[2px] w-5 bg-current transition-transform ${mobileOpen ? "translate-y-[9px] rotate-45" : ""}`} />
              <span className={`block h-[2px] w-5 bg-current transition-opacity ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`block h-[2px] w-5 bg-current transition-transform ${mobileOpen ? "-translate-y-[9px] -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="md:hidden border-t border-line bg-[rgba(247,244,236,0.92)] px-6 pb-6 pt-4 backdrop-blur-3xl shadow-[0_30px_70px_-30px_rgba(42,38,32,0.45)]">
          <div className="grid gap-3 sm:grid-cols-2">
            <button
              onClick={() => scrollTo("philosophy")}
              className="rounded-[28px] border border-white/35 bg-white/75 px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.3em] text-ink/90 shadow-[0_10px_30px_-18px_rgba(42,38,32,0.4)] transition hover:border-white/60 hover:bg-white/95 hover:text-ink"
            >
              {t.nav.philosophy}
            </button>
            <button
              onClick={() => scrollTo("services")}
              className="rounded-[28px] border border-white/35 bg-white/75 px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.3em] text-ink/90 shadow-[0_10px_30px_-18px_rgba(42,38,32,0.4)] transition hover:border-white/60 hover:bg-white/95 hover:text-ink"
            >
              {t.nav.services}
            </button>
            <button
              onClick={() => scrollTo("gallery")}
              className="rounded-[28px] border border-white/35 bg-white/75 px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.3em] text-ink/90 shadow-[0_10px_30px_-18px_rgba(42,38,32,0.4)] transition hover:border-white/60 hover:bg-white/95 hover:text-ink"
            >
              {t.nav.gallery}
            </button>
            <button
              onClick={() => scrollTo("visit")}
              className="rounded-[28px] border border-white/35 bg-white/75 px-5 py-4 text-left text-sm font-semibold uppercase tracking-[0.3em] text-ink/90 shadow-[0_10px_30px_-18px_rgba(42,38,32,0.4)] transition hover:border-white/60 hover:bg-white/95 hover:text-ink"
            >
              {t.nav.visit}
            </button>
          </div>
          <div className="mt-4 flex items-center justify-between gap-3">
            <BookNowButton className="min-w-[160px] flex-1" />
            <LanguageSwitcher />
          </div>
        </div>
      ) : null}
    </header>
  );
}
