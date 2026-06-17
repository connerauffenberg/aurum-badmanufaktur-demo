import Link from "next/link";
import { Logo } from "@/components/Logo";
import { Motion } from "@/components/Motion";
import { SiteChrome } from "@/components/SiteChrome";
import { Badwelten } from "@/components/Badwelten";
import { Projects } from "@/components/Projects";
import { BeforeAfter } from "@/components/BeforeAfter";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { ArrowUpRight } from "@/components/icons";
import { BRAND, IMG, MATERIALS, PROCESS, TRUST } from "@/lib/content";

const TESTIMONIALS = [
  {
    quote:
      "Vom ersten Entwurf bis zur Übergabe war klar, wer wofür verantwortlich ist. Das Ergebnis wirkt nicht wie ein saniertes Bad, sondern wie ein neuer Raum im Haus.",
    name: "Familie K.",
    meta: "Masterbad · Bodensee",
  },
  {
    quote:
      "Wir hatten Respekt vor dem Aufwand. Am Ende lief alles über einen Ansprechpartner — ruhig, sauber und im Zeitplan. Genau das wollten wir.",
    name: "M. & T. Berger",
    meta: "Komplettsanierung · Berlin",
  },
  {
    quote:
      "Die Bemusterung hat den Unterschied gemacht. Material in der Hand zu halten, nimmt jede Unsicherheit. Heute fühlt sich der Morgen anders an.",
    name: "S. Lindner",
    meta: "Spa-Bad · Tegernsee",
  },
];

export default function HomePage() {
  return (
    <>
      <Motion />

      {/* ============ HERO ============ */}
      <header className="site-header">
        <span className="site-header__brand">
          <Logo size={26} />
          {BRAND.full}
        </span>
        <a className="site-header__cta textlink" href="#kontakt">
          Beratung anfragen <ArrowUpRight size={14} />
        </a>
      </header>

      <section id="start" className="hero">
        <div
          className="hero__media"
          style={{ backgroundImage: `url('${IMG.hero}')` }}
          aria-hidden="true"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <h1 className="hero__title display-xl" data-reveal>
            Ihr neues Bad. Geplant wie ein Wohnraum. Gebaut mit Präzision.
          </h1>
          <p className="hero__sub body-lg" data-reveal style={{ "--reveal-delay": "120ms" } as React.CSSProperties}>
            Premium-Badsanierung aus einer Hand — von der ersten Idee bis zur fertigen Übergabe.
          </p>
          <div className="hero__actions" data-reveal style={{ "--reveal-delay": "220ms" } as React.CSSProperties}>
            <a className="btn btn--light" href="#kontakt">
              <ArrowUpRight /> Beratung anfragen
            </a>
            <a className="btn btn--photo" href="#projekte">
              Projekte ansehen
            </a>
          </div>
        </div>
        <a className="hero__scroll label" href="#start-trust" aria-label="Weiter scrollen">
          Scrollen
          <span className="hero__scroll-line" aria-hidden="true" />
        </a>
      </section>

      {/* ============ TRUST STRIP ============ */}
      <section id="start-trust" className="trust" aria-label="Leistungsversprechen">
        <div className="trust__grid">
          {TRUST.map((t) => (
            <div className="trust__item" key={t}>
              <span className="trust__dot" aria-hidden="true" />
              <span className="label">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ INTRO / MANIFESTO ============ */}
      <section className="intro section">
        <div className="wrap">
          <span className="eyebrow intro__eyebrow" data-reveal>
            Über die Manufaktur
          </span>
          <h2 className="intro__statement display-lg" data-reveal>
            Wir verwandeln funktionale Bäder in Räume, die jeden Tag Ruhe ausstrahlen — mit klarer
            Planung, hochwertigen Materialien und präziser Umsetzung. <em>Vom ersten Entwurf bis zur
            letzten Fuge.</em>
          </h2>
          <div className="intro__actions" data-reveal>
            <a className="btn btn--primary" href="#kontakt">
              <ArrowUpRight /> Projekt besprechen
            </a>
            <a className="btn btn--ghost" href="#ablauf">
              Ablauf ansehen
            </a>
          </div>
        </div>
      </section>

      {/* ============ BADWELTEN ============ */}
      <Badwelten />

      {/* ============ PROZESS / ABLAUF ============ */}
      <section id="ablauf" className="process section">
        <div className="wrap">
          <div className="sec-head sec-head--split">
            <span className="eyebrow" data-reveal>
              Ablauf
            </span>
            <div>
              <h2 className="display-md sec-head__title" data-reveal>
                Ein klarer Ablauf. Ein Ansprechpartner. Ein Ergebnis, das bleibt.
              </h2>
              <p className="body-lg sec-head__lead" data-reveal style={{ marginTop: 22 }}>
                Ein hochwertiges Bad entsteht nicht zufällig, sondern durch klare Entscheidungen und
                saubere Koordination — in fünf nachvollziehbaren Schritten.
              </p>
            </div>
          </div>

          <div>
            {PROCESS.map((p) => (
              <div className="process__row" key={p.number} data-reveal>
                <span className="process__num">{p.number}</span>
                <h3 className="process__title heading-md">{p.title}</h3>
                <p className="process__body">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VORHER / NACHHER ============ */}
      <BeforeAfter />

      {/* ============ PROJEKTE ============ */}
      <Projects />

      {/* ============ MATERIALIEN ============ */}
      <section id="materialien" className="materials section">
        <div className="wrap">
          <div className="sec-head sec-head--split">
            <span className="eyebrow" data-reveal>
              Materialien
            </span>
            <div>
              <h2 className="display-md sec-head__title" data-reveal>
                Material bestimmt, wie sich ein Bad jeden Morgen anfühlt.
              </h2>
              <p className="body-lg sec-head__lead" data-reveal style={{ marginTop: 22 }}>
                Stein, Glas, Holz, Licht und Metall sind keine Dekoration. Wir wählen sie nach
                Haptik, Wirkung und Alltagstauglichkeit aus.
              </p>
              <div className="materials__chips" data-reveal>
                {["Naturstein", "Mikrozement", "Eiche", "Glas", "Bronze", "Keramik", "Lichtplanung"].map(
                  (c) => (
                    <span className="chip" key={c}>
                      {c}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>

          <div className="materials__grid">
            {MATERIALS.map((m, i) => (
              <article
                className="material"
                key={m.id}
                data-reveal
                style={{ "--reveal-delay": `${i * 70}ms` } as React.CSSProperties}
              >
                <span
                  className="material__media"
                  style={{ backgroundImage: `url('${m.image}')` }}
                  aria-hidden="true"
                />
                <span className="material__scrim" aria-hidden="true" />
                <div className="material__body">
                  <h3 className="material__label">{m.label}</h3>
                  <p className="material__note">{m.note}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VERTRAUEN / TESTIMONIALS ============ */}
      <section className="testimonials section">
        <div className="wrap">
          <div className="sec-head sec-head--split">
            <span className="eyebrow" data-reveal>
              Vertrauen
            </span>
            <h2 className="display-md sec-head__title" data-reveal>
              Was bleibt, ist das Gefühl, in guten Händen gewesen zu sein.
            </h2>
          </div>
          <div className="testimonials__grid">
            {TESTIMONIALS.map((t, i) => (
              <figure
                className="quote"
                key={t.name}
                data-reveal
                style={{ "--reveal-delay": `${i * 90}ms` } as React.CSSProperties}
              >
                <blockquote className="quote__text">„{t.quote}"</blockquote>
                <figcaption className="quote__meta">
                  {t.name} — {t.meta}
                </figcaption>
              </figure>
            ))}
          </div>
          <p className="form__note" style={{ color: "var(--color-muted)", marginTop: 36 }}>
            Hinweis: Beispielhafte Kundenstimmen einer fiktiven Demo-Website.
          </p>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <Faq />

      {/* ============ DARK SHOWROOM / KONTAKT ============ */}
      <section id="kontakt" className="showroom section dark-scope">
        <div className="wrap">
          <div className="showroom__image" data-reveal>
            <span
              className="badwelten__media"
              style={{ backgroundImage: `url('${IMG.showroom}')`, transform: "none" }}
              aria-hidden="true"
            />
          </div>

          <div className="showroom__grid">
            <div>
              <span className="eyebrow on-dark" data-reveal>
                Beratung
              </span>
              <h2 className="display-md showroom__title" data-reveal style={{ marginTop: 26 }}>
                Lassen Sie uns über Ihr neues Bad sprechen.
              </h2>
              <p className="showroom__lead" data-reveal>
                Planen Sie eine Sanierung? In einem ersten Gespräch klären wir Raum, Wünsche,
                Budgetrahmen und die nächsten sinnvollen Schritte — in Ruhe und unverbindlich.
              </p>
              <p className="showroom__demo-note" data-reveal>
                Im Demo-Formular sehen Besucher, wie eine hochwertige Anfrage-Strecke wirken kann.
                Keine echte Firma, keine Datenübertragung.
              </p>
              <div className="showroom__contacts" data-reveal>
                <a href={BRAND.phoneHref}>
                  <span className="label">Telefon</span> {BRAND.phone}
                </a>
                <a href={BRAND.emailHref}>
                  <span className="label">E-Mail</span> {BRAND.email}
                </a>
                <span style={{ display: "inline-flex", alignItems: "center", gap: 12 }}>
                  <span className="label">Showroom</span> {BRAND.address}
                </span>
              </div>
            </div>

            <div data-reveal>
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="footer dark-scope">
        <div className="wrap">
          <div className="footer__top">
            <div>
              <span className="footer__brand">
                <Logo size={26} />
                {BRAND.full}
              </span>
              <p className="footer__claim">
                Premium-Badsanierung aus einer Hand — geplant wie ein Wohnraum, gebaut mit
                Präzision.
              </p>
            </div>

            <div className="footer__col">
              <h4>Navigation</h4>
              <ul>
                <li>
                  <a href="#start">Start</a>
                </li>
                <li>
                  <a href="#badwelten">Badwelten</a>
                </li>
                <li>
                  <a href="#projekte">Projekte</a>
                </li>
                <li>
                  <a href="#ablauf">Ablauf</a>
                </li>
                <li>
                  <a href="#materialien">Materialien</a>
                </li>
                <li>
                  <a href="#kontakt">Kontakt</a>
                </li>
              </ul>
            </div>

            <div className="footer__col">
              <h4>Kontakt & Rechtliches</h4>
              <ul>
                <li>
                  <a href={BRAND.phoneHref}>{BRAND.phone}</a>
                </li>
                <li>
                  <a href={BRAND.emailHref}>{BRAND.email}</a>
                </li>
                <li>
                  <Link href="/impressum">Impressum</Link>
                </li>
                <li>
                  <Link href="/datenschutz">Datenschutz</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer__bottom">
            <span suppressHydrationWarning>
              © {new Date().getFullYear()} {BRAND.full}
            </span>
            <span className="footer__demo">
              Fiktive Demo-Website · keine echte Firma · keine Datenübertragung
            </span>
          </div>
        </div>
      </footer>

      <SiteChrome />
    </>
  );
}
