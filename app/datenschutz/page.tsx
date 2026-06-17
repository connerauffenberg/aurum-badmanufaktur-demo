import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "@/components/icons";
import { BRAND } from "@/lib/content";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzhinweise der fiktiven Demo-Website Aurum Badmanufaktur.",
};

export default function DatenschutzPage() {
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
          Datenschutz
        </h1>

        <p className="legal__demo">
          <span className="label">Demo</span>
          Diese Seite ist Teil einer fiktiven Demo-Website. Es findet keine echte Datenverarbeitung
          statt. Das untenstehende Beispiel zeigt nur den typischen Aufbau einer
          Datenschutzerklärung.
        </p>

        <h2>1. Verantwortlicher</h2>
        <p>
          Verantwortlich für die (beispielhafte) Datenverarbeitung wäre {BRAND.full}, {BRAND.address}
          . In dieser Demo werden keine personenbezogenen Daten erhoben.
        </p>

        <h2>2. Kontaktformular</h2>
        <p>
          Das Kontaktformular dieser Website verarbeitet Ihre Eingaben ausschließlich im Browser
          (clientseitig) für die Demo-Darstellung des Erfolgszustands. Es werden keine Daten an
          einen Server gesendet, gespeichert oder weitergegeben.
        </p>

        <h2>3. Server-Logfiles & Hosting</h2>
        <p>
          Bei einem echten Betrieb würden beim Aufruf der Seite technisch notwendige Daten (z. B.
          IP-Adresse, Zeitpunkt, abgerufene Datei) durch den Hosting-Anbieter verarbeitet. In dieser
          Demo dient dieser Abschnitt nur als Platzhalter.
        </p>

        <h2>4. Bilder</h2>
        <p>
          Alle auf dieser Website verwendeten Bilder werden lokal vom Server dieser Website
          ausgeliefert. Die Bildmotive wurden vom Website-Ersteller mithilfe von KI-Werkzeugen
          generiert; es werden keine Fotografien von externen Bilddiensten geladen und somit keine
          Daten an Dritte übertragen.
        </p>

        <h2>5. Ihre Rechte</h2>
        <p>
          Bei einer realen Verarbeitung hätten Sie u. a. Recht auf Auskunft, Berichtigung, Löschung,
          Einschränkung, Datenübertragbarkeit und Widerspruch sowie ein Beschwerderecht bei einer
          Aufsichtsbehörde.
        </p>

        <h2>6. Kontakt</h2>
        <p>
          Telefon: {BRAND.phone}
          <br />
          E-Mail: {BRAND.email}
        </p>
      </div>
    </main>
  );
}
