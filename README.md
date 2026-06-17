# Aurum Badmanufaktur — Demo-Website

Eine fiktive High-End-Demo für eine Premium-Badmanufaktur. Cinematic architectural
minimalism: warme Ivory-Flächen, near-black CTAs, große leichte Grotesk-Headlines,
monospaced Uppercase-Labels, ruhige Scroll-Reveals, Floating-Navigation und ein
Fullscreen-Menü.

> **Hinweis:** Aurum Badmanufaktur ist keine reale Firma. Alle Inhalte, Namen und
> Kontaktdaten sind frei erfunden. Es findet keine echte Datenverarbeitung statt.

## Tech-Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- Handgeschriebenes CSS mit Design-Tokens (`app/globals.css`)
- **Geist / Geist Mono** (via `geist`-Package) als neo-grotesk Schriftsystem
- Bilder von Unsplash (stabile Remote-URLs)

## Lokal starten

```bash
npm install      # einmalig
npm run dev      # Entwicklung -> http://localhost:3000
```

Produktion:

```bash
npm run build
npm run start
```

## Struktur

```
app/
  layout.tsx          Metadata, Fonts, Favicon-Konfiguration
  page.tsx            Startseite (alle Sektionen)
  globals.css         Design-System & Komponenten-Styles
  icon.svg            Favicon (Markenzeichen)
  apple-icon.tsx      Apple-Touch-Icon (generiert via next/og)
  impressum/page.tsx  Demo-Impressum
  datenschutz/page.tsx Demo-Datenschutz
components/           Logo, SiteChrome (Nav+Menü), Motion, Badwelten,
                      Projects, BeforeAfter, Faq, Contact, Modal, icons
lib/content.ts        Inhalte & Bildquellen
```
