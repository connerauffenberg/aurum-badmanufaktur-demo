import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der fiktiven Demo-Website Aurum Badmanufaktur.",
};

export default function ImpressumPage() {
  return (
    <main className="legal">
      <div className="legal__wrap">
        <div className="legal__top">
          <Link href="/" className="textlink legal__back">
            <ArrowRight size={14} /> Zurück zur Startseite
          </Link>
          <span className="eyebrow">Rechtliches</span>
        </div>

        <h1 className="display-md" style={{ marginTop: 18 }}>
          Impressum
        </h1>

        <p className="legal__demo">
          <span className="label">Demo</span>
          Diese Website ist ein fiktives Demonstrationsprojekt. {BRAND.full} ist keine reale
          Firma. Alle Angaben, Namen und Kontaktdaten sind frei erfunden und dienen ausschließlich
          der Gestaltung.
        </p>

        <h2>Betreiber dieser Demo-Website (verantwortlich gemäß § 5 DDG)</h2>
        <p>
          <address>
            Auffenberg Solutions
            <br />
            Conner Auffenberg
            <br />
            Adlerstraße 20
            <br />
            48429 Rheine
            <br />
            E-Mail: conner@auffenbergsolutions.de
          </address>
        </p>
        <p>
          Auffenberg Solutions hat diese Website als Portfolio-Demonstration erstellt und betreibt
          sie. Die folgenden Angaben gehören zur fiktiven Beispielfirma und beschreiben kein real
          existierendes Unternehmen.
        </p>

        <h2>Fiktive Beispielangaben gemäß § 5 DDG</h2>
        <p>
          <address>
            {BRAND.full} (fiktiv)
            <br />
            {BRAND.address}
            <br />
            Deutschland
          </address>
        </p>

        <h2>Kontakt</h2>
        <p>
          Telefon: {BRAND.phone}
          <br />
          E-Mail: {BRAND.email}
        </p>

        <h2>Vertretungsberechtigte Person</h2>
        <p>Beispiel Geschäftsführung (fiktiv)</p>

        <h2>Umsatzsteuer-ID</h2>
        <p>USt-IdNr. nach § 27 a UStG: DE000000000 (Platzhalter)</p>

        <h2>Verantwortlich für den Inhalt</h2>
        <p>
          Verantwortlich im Sinne des § 18 Abs. 2 MStV: Beispiel Geschäftsführung, Anschrift wie
          oben (fiktiv).
        </p>

        <h2>Haftung & Bildnachweis</h2>
        <p>
          Inhalte dieser Demo dienen nur zu Anschauungszwecken. Die verwendeten Bildmotive wurden vom
          Website-Ersteller mithilfe von KI-Werkzeugen generiert und lokal in dieser Website
          eingebunden.
        </p>
      </div>
    </main>
  );
}
