"use client";

import { useCallback, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ArrowUpRight } from "./icons";
import { BRAND, IMG, NAV_SECTIONS } from "@/lib/content";

const MENU_LINKS = [
  { id: "start", label: "Start" },
  { id: "badwelten", label: "Badwelten" },
  { id: "projekte", label: "Projekte" },
  { id: "ablauf", label: "Ablauf" },
  { id: "materialien", label: "Materialien" },
  { id: "kontakt", label: "Kontakt" },
];

export function SiteChrome() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("start");
  const [contactInView, setContactInView] = useState(false);

  // Aktiven Abschnitt für die Floating-Nav ermitteln
  useEffect(() => {
    const sections = NAV_SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el)
    );
    if (!sections.length) return;

    const ratios = new Map<string, number>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => ratios.set(e.target.id, e.isIntersecting ? e.intersectionRatio : 0));
        let best = "start";
        let max = 0;
        ratios.forEach((r, id) => {
          if (r > max) {
            max = r;
            best = id;
          }
        });
        if (max > 0) setActive(best);
        setContactInView((ratios.get("kontakt") ?? 0) > 0.28);
      },
      { threshold: [0.15, 0.3, 0.5, 0.7] }
    );
    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // Body-Scroll sperren + ESC schließt das Menü
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const go = useCallback((id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    }
  }, []);

  const activeLabel = NAV_SECTIONS.find((s) => s.id === active)?.label ?? "Start";

  return (
    <>
      {/* Floating Navigation */}
      <nav className="fnav" data-hidden={open || contactInView} aria-label="Schnellnavigation">
        <button
          className="fnav__logo"
          onClick={() => go("start")}
          aria-label="Zum Seitenanfang"
        >
          <Logo size={26} />
        </button>
        <span className="fnav__center" aria-live="polite">
          {activeLabel}
        </span>
        <button
          className="fnav__menu"
          onClick={() => setOpen((v) => !v)}
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          <span />
          <span />
        </button>
      </nav>

      {/* Fullscreen Menü-Overlay */}
      <div
        className="menu dark-scope"
        data-open={open}
        role="dialog"
        aria-modal="true"
        aria-label="Hauptmenü"
        aria-hidden={!open}
      >
        <div
          className="menu__bg"
          style={{ backgroundImage: `url('${IMG.menu}')` }}
          onClick={() => setOpen(false)}
        />
        <div className="menu__panel">
          <span className="menu__bigword" aria-hidden="true">
            RUHE
          </span>
          <div className="menu__head">
            <span className="menu__brand">
              <Logo size={24} />
              {BRAND.full}
            </span>
            <button className="menu__close" onClick={() => setOpen(false)} aria-label="Menü schließen">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </button>
          </div>

          <div className="menu__links">
            {MENU_LINKS.map((link, i) => (
              <button
                key={link.id}
                className="menu__link"
                style={{ transitionDelay: open ? `${120 + i * 60}ms` : "0ms" }}
                onClick={() => go(link.id)}
              >
                {link.label}
              </button>
            ))}
            <button
              className="menu__link"
              data-cta="true"
              style={{ transitionDelay: open ? `${120 + MENU_LINKS.length * 60}ms` : "0ms" }}
              onClick={() => go("kontakt")}
            >
              Beratung anfragen
              <ArrowUpRight />
            </button>
          </div>

          <div className="menu__meta">
            <span className="label">Kontakt</span>
            <a href={BRAND.phoneHref}>{BRAND.phone}</a>
            <a href={BRAND.emailHref}>{BRAND.email}</a>
            <span style={{ marginTop: 8 }}>{BRAND.city}</span>
            <span style={{ opacity: 0.6 }}>{BRAND.address}</span>
          </div>
        </div>
      </div>
    </>
  );
}
