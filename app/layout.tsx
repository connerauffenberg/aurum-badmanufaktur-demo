import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://aurum-badmanufaktur.demo"),
  title: {
    default: "Aurum Badmanufaktur — Premium-Badsanierung aus einer Hand",
    template: "%s · Aurum Badmanufaktur",
  },
  description:
    "Aurum Badmanufaktur plant und baut hochwertige Bäder aus einer Hand — Masterbäder, Spa-Bäder, Gäste-WCs und Natursteinbäder. Geplant wie ein Wohnraum, gebaut mit Präzision. (Fiktive Demo-Website.)",
  applicationName: "Aurum Badmanufaktur",
  keywords: [
    "Badsanierung",
    "Badmanufaktur",
    "Premium Bad",
    "Masterbad",
    "Spa-Bad",
    "Natursteinbad",
    "Badplanung",
  ],
  authors: [{ name: "Aurum Badmanufaktur (Demo)" }],
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-icon", sizes: "180x180" }],
  },
  openGraph: {
    title: "Aurum Badmanufaktur — Premium-Badsanierung aus einer Hand",
    description:
      "Hochwertige Badsanierung aus einer Hand — von der ersten Idee bis zur fertigen Übergabe. Fiktive Demo-Website.",
    locale: "de_DE",
    type: "website",
  },
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  themeColor: "#070C0E",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <head>
        {/* Aktiviert den Reveal-Startzustand nur bei aktivem JS (verhindert leere Seite ohne JS). */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js');",
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
