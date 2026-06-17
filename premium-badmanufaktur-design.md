---
version: alpha
name: premium-badmanufaktur-design-system
description: |
  A high-end design system for a premium bathroom renovation / bath manufactory website.
  The visual language is inspired by cinematic architectural portfolio websites, but adapted
  for conversion-focused German handcraft businesses with high project value.

  The site should feel like entering a calm private spa showroom: warm ivory editorial
  surfaces, near-black navigation and CTAs, large low-weight grotesk headlines, cinematic
  bathroom and interior photography, monospaced uppercase labels, thin architectural
  dividers, staggered image compositions, slow scroll reveals, and a strong sense of
  material quality. The design must communicate premium craft, trust, planning certainty,
  and transformation — not just abstract aesthetics.

  Core positioning:
  "Premium-Badsanierung aus einer Hand — geplant wie ein Wohnraum, gebaut mit Präzision."

  This file should be used to build a demo website for a high-end German bathroom
  renovation company / Badmanufaktur. Do not copy Fluid Glass logos, imagery, text,
  proprietary layout details, or brand claims. Use the broader design grammar:
  cinematic architectural minimalism, showroom-like scrolling, quiet luxury, material
  detail, and clear conversion structure.

colors:
  # Core brand colors
  primary: "#070C0E"
  primary-pressed: "#151B1D"
  primary-soft: "#2B3031"
  on-primary: "#FFFFFF"

  # Text colors
  ink: "#202326"
  ink-strong: "#0B0F11"
  body: "#25282A"
  body-soft: "#4E5253"
  muted: "#8C8F8E"
  muted-soft: "#A8AAA8"
  on-dark: "#FFFFFF"
  on-dark-muted: "rgba(255,255,255,0.68)"
  on-photo: "#FFFFFF"
  on-photo-muted: "rgba(255,255,255,0.76)"

  # Warm editorial surfaces
  canvas: "#F4F1EC"
  canvas-warm: "#EFE9DF"
  canvas-soft: "#F8F6F2"
  surface-card: "#F4F1EC"
  surface-elevated: "#FFFFFF"

  # Dark showroom surfaces
  surface-dark: "#202325"
  surface-dark-deep: "#070C0E"
  surface-menu: "rgba(7,12,14,0.92)"
  surface-dark-warm: "#191715"

  # Lines and borders
  hairline: "#D9D4CB"
  hairline-soft: "#E5E0D8"
  hairline-dark: "rgba(255,255,255,0.14)"
  chip-border: "#DED9D1"

  # Bathroom material palette
  travertine: "#C7B79E"
  sand-stone: "#D8C8AD"
  warm-stone: "#A89A86"
  oak: "#7A6048"
  smoked-oak: "#4F4035"
  bronze: "#8A6A4C"
  brushed-metal: "#A5A29A"
  ceramic-white: "#F8F6F0"
  deep-tile: "#2E3434"
  glass-blue-gray: "#566A74"
  soft-sage: "#8A9382"

  # Photo overlays
  scrim-photo: "rgba(0,0,0,0.34)"
  scrim-photo-strong: "rgba(0,0,0,0.56)"
  scrim-warm: "rgba(25,20,16,0.38)"
  shadow-menu: "rgba(0,0,0,0.22)"

typography:
  display-xl:
    fontFamily: "Suisse Intl, Neue Haas Grotesk Display, Inter, system-ui, sans-serif"
    fontSize: 76px
    fontWeight: 400
    lineHeight: 0.98
    letterSpacing: -3.4px
  display-lg:
    fontFamily: "Suisse Intl, Neue Haas Grotesk Display, Inter, system-ui, sans-serif"
    fontSize: 64px
    fontWeight: 400
    lineHeight: 1.02
    letterSpacing: -2.8px
  display-md:
    fontFamily: "Suisse Intl, Neue Haas Grotesk Display, Inter, system-ui, sans-serif"
    fontSize: 48px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.9px
  heading-lg:
    fontFamily: "Suisse Intl, Neue Haas Grotesk Display, Inter, system-ui, sans-serif"
    fontSize: 36px
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: -1.1px
  heading-md:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 28px
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: -0.7px
  heading-sm:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 22px
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: -0.35px
  body-xl:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 24px
    fontWeight: 400
    lineHeight: 1.25
    letterSpacing: -0.3px
  body-lg:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 21px
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: -0.25px
  body-md:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 17px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: -0.15px
  body-sm:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: 0
  caption:
    fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
    fontSize: 12px
    fontWeight: 400
    lineHeight: 1.4
    letterSpacing: 0.2px
  eyebrow-mono:
    fontFamily: "Suisse Intl Mono, ABC Monument Grotesk Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: 13px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 3.2px
    textTransform: uppercase
  eyebrow-mono-sm:
    fontFamily: "Suisse Intl Mono, ABC Monument Grotesk Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 2.6px
    textTransform: uppercase
  button:
    fontFamily: "Suisse Intl Mono, ABC Monument Grotesk Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 2.1px
    textTransform: uppercase
  nav-link:
    fontFamily: "Suisse Intl Mono, ABC Monument Grotesk Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: 11px
    fontWeight: 700
    lineHeight: 1
    letterSpacing: 1.5px
    textTransform: uppercase
  feature-title:
    fontFamily: "Suisse Intl, Neue Haas Grotesk Display, Inter, system-ui, sans-serif"
    fontSize: 40px
    fontWeight: 400
    lineHeight: 1.05
    letterSpacing: -1.1px

rounded:
  none: 0px
  xs: 2px
  sm: 4px
  md: 6px
  lg: 10px
  xl: 14px
  full: 9999px

spacing:
  xxs: 2px
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
  xxl: 32px
  xxxl: 48px
  section: 96px
  section-lg: 144px
  section-xl: 180px

brand_direction:
  demo_company_type: "Premium-Badmanufaktur / hochwertige Badsanierung"
  target_audience:
    - "Eigentümer von Einfamilienhäusern und hochwertigen Wohnungen"
    - "Menschen mit Sanierungsbedarf und hohem Anspruch an Design, Ruhe und Qualität"
    - "Kunden, die nicht den günstigsten Anbieter suchen, sondern Sicherheit und Premium-Ausführung"
  emotional_keywords:
    - "Ruhe"
    - "Präzision"
    - "Materialqualität"
    - "Privates Spa"
    - "Wohnraum statt Nasszelle"
    - "Planungssicherheit"
    - "Aus einer Hand"
    - "Handwerkliche Perfektion"
  avoid:
    - "billig"
    - "Rabatte"
    - "laute Farben"
    - "generische Baustellenfotos"
    - "SaaS-Karten und Icons"
    - "zu viele spielerische Animationen"
    - "komplizierte Architektur-Sprache ohne Verkaufsnutzen"

copy_direction:
  language: "German"
  tone: "hochwertig, ruhig, klar, vertrauenswürdig, nicht abgehoben"
  rules:
    - "Keine übertrieben abstrakten Agentur-Claims."
    - "Jede schöne Sektion braucht eine klare Verkaufsfunktion."
    - "Premium-Sprache, aber verständlich für normale Eigentümer."
    - "Nicht nur Design verkaufen, sondern Sicherheit, Ablauf, Koordination und Ergebnis."
    - "Kurz, direkt, visuell. Keine langen Absätze."
  example_headlines:
    hero:
      - "Ihr neues Bad. Geplant wie ein Wohnraum. Gebaut mit Präzision."
      - "Bäder, die sich anfühlen wie ein privates Spa."
      - "Hochwertige Badsanierung aus einer Hand."
    intro:
      - "Wir verwandeln funktionale Bäder in Räume, die jeden Tag Ruhe ausstrahlen."
      - "Vom ersten Entwurf bis zur letzten Fuge — jedes Detail folgt einem klaren Plan."
    process:
      - "Ein klarer Ablauf. Ein Ansprechpartner. Ein Ergebnis, das bleibt."
    contact:
      - "Lassen Sie uns über Ihr neues Bad sprechen."
  cta_labels:
    primary:
      - "Beratung anfragen"
      - "Projekt besprechen"
      - "Bad planen lassen"
    secondary:
      - "Projekte ansehen"
      - "Ablauf ansehen"
      - "Materialien entdecken"

components:
  site-header:
    position: absolute
    top: 0
    left: 0
    right: 0
    height: 72px
    padding: 24px 48px
    backgroundColor: transparent
    textColor: "{colors.on-photo}"
    typography: "{typography.nav-link}"
    zIndex: 50
    notes: "Minimal. Do not use a conventional crowded navbar in the hero."

  centered-wordmark:
    textColor: "{colors.on-photo}"
    typography:
      fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
      fontSize: 28px
      fontWeight: 500
      lineHeight: 1
      letterSpacing: -1.1px
    alignment: center
    exampleText: "Aurum Badmanufaktur"

  top-quote-link:
    textColor: "{colors.on-photo}"
    typography: "{typography.button}"
    icon: arrow-bent
    gap: 12px
    opacity: 0.92
    label: "Beratung anfragen"
    hover:
      opacity: 1
      transform: "translateX(2px)"

  floating-nav:
    position: fixed
    bottom: 48px
    left: 50%
    transform: "translateX(-50%)"
    width: 300px
    height: 58px
    backgroundColor: "{colors.surface-menu}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.none}"
    padding: 0 18px
    display: grid
    gridTemplateColumns: "48px 1fr 48px"
    alignItems: center
    shadow: "0 18px 38px {colors.shadow-menu}"
    backdropFilter: "blur(12px)"
    zIndex: 80
    behavior: "Always visible except when full menu overlay is open. Must not cover primary mobile CTA sections."

  floating-nav-logo:
    width: 28px
    height: 28px
    textColor: "{colors.on-primary}"
    strokeWidth: 1.8
    note: "Use a simple abstract bath/architecture mark or the demo brand mark. Do not use Fluid Glass mark."

  floating-nav-home:
    typography: "{typography.nav-link}"
    textColor: "{colors.on-primary}"
    alignment: center
    labels:
      home: "Start"
      projects: "Projekte"
      process: "Ablauf"
      contact: "Kontakt"

  hamburger-button:
    width: 36px
    height: 36px
    backgroundColor: transparent
    textColor: "{colors.on-primary}"
    lineColor: "{colors.on-primary}"
    lineWidth: 24px
    lineGap: 5px
    hover:
      opacity: 0.72

  hero-photo:
    minHeight: 100svh
    backgroundColor: "{colors.surface-dark}"
    imageTreatment: "full-bleed premium bathroom or spa interior photography with natural stone, glass, warm light, quiet luxury, clean composition"
    overlay: "linear-gradient(rgba(0,0,0,0.12), rgba(0,0,0,0.48))"
    avoid: "Do not use generic construction worker hero photos. Use finished premium bathroom atmosphere."

  hero-title:
    textColor: "{colors.on-photo}"
    typography: "{typography.display-lg}"
    maxWidth: 980px
    alignment: center
    marginInline: auto
    position: "absolute bottom 20vh center"
    exampleText: "Ihr neues Bad. Geplant wie ein Wohnraum. Gebaut mit Präzision."

  hero-subline:
    textColor: "{colors.on-photo-muted}"
    typography: "{typography.body-lg}"
    maxWidth: 620px
    alignment: center
    position: "below hero title"
    exampleText: "Premium-Badsanierung aus einer Hand — von der ersten Idee bis zur fertigen Übergabe."

  section-eyebrow:
    textColor: "{colors.ink}"
    typography: "{typography.eyebrow-mono}"
    marker:
      shape: diamond
      size: 7px
      color: "{colors.ink}"
      marginRight: 12px
    examples:
      - "Über die Manufaktur"
      - "Badwelten"
      - "Ablauf"
      - "Materialien"
      - "Projekte"
      - "Beratung"

  editorial-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "128px 48px"
    borderTop: "1px solid {colors.hairline-soft}"

  centered-statement:
    textColor: "{colors.ink}"
    typography: "{typography.display-lg}"
    maxWidth: 1120px
    alignment: center
    marginInline: auto
    exampleText: "Wir planen Bäder nicht als Nebenraum, sondern als täglichen Rückzugsort — präzise, ruhig und bis ins Detail durchdacht."

  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "18px 28px"
    minHeight: 52px
    borderColor: "{colors.primary}"
    icon: arrow-bent
    iconPosition: left
    gap: 14px
    hover:
      backgroundColor: "{colors.primary-pressed}"
      transform: "translateY(-1px)"
    labels:
      - "Beratung anfragen"
      - "Projekt besprechen"
      - "Bad planen lassen"

  button-secondary-dark:
    backgroundColor: "rgba(255,255,255,0.16)"
    textColor: "{colors.on-dark}"
    typography: "{typography.button}"
    rounded: "{rounded.none}"
    padding: "17px 28px"
    minHeight: 50px
    borderColor: "rgba(255,255,255,0.12)"
    hover:
      backgroundColor: "rgba(255,255,255,0.24)"

  trust-strip:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    borderTop: "1px solid {colors.hairline-soft}"
    borderBottom: "1px solid {colors.hairline-soft}"
    layout: "4-column quiet proof strip"
    padding: "32px 48px"
    typography: "{typography.eyebrow-mono-sm}"
    items:
      - "Planung & Umsetzung"
      - "Ein Ansprechpartner"
      - "Hochwertige Materialien"
      - "Saubere Koordination"
    note: "Use this to make the premium design more conversion-oriented. Keep it understated, not badge-like."

  badwelten-section:
    backgroundColor: "{colors.canvas}"
    layout: "asymmetric two-column intro followed by staggered image cards"
    padding: "96px 48px 144px"
    purpose: "Replace Fluid Glass product collection with bathroom transformation categories."

  badwelt-image-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.on-photo}"
    rounded: "{rounded.none}"
    aspectRatio: "4 / 5"
    overflow: hidden
    imageTreatment: "premium bathroom photograph, natural stone, glass, matte fixtures, warm light, no visible clutter"
    titlePosition: center
    titleTypography: "{typography.feature-title}"
    overlay: "rgba(0,0,0,0.18)"
    examples:
      - "Masterbad"
      - "Gäste-WC"
      - "Spa-Bad"
      - "Natursteinbad"
      - "Dachgeschossbad"

  staggered-bath-grid:
    backgroundColor: "{colors.canvas}"
    columns: 3
    gap: "96px 128px"
    itemOffsets:
      first: "translateY(72px)"
      second: "translateY(-24px)"
      third: "translateY(-112px)"
    mobileColumns: 1
    note: "Use fewer, larger images. Let the photography breathe."

  process-section:
    backgroundColor: "{colors.canvas-warm}"
    textColor: "{colors.ink}"
    padding: "128px 48px"
    borderTop: "1px solid {colors.hairline}"
    purpose: "Make the premium visual experience sell trust and planning certainty."

  process-row:
    height: "auto"
    minHeight: 92px
    display: grid
    gridTemplateColumns: "96px 1.2fr 2fr"
    alignItems: start
    borderBottom: "1px solid {colors.hairline-soft}"
    padding: "28px 0"
    numberTypography: "{typography.eyebrow-mono-sm}"
    titleTypography: "{typography.heading-md}"
    bodyTypography: "{typography.body-md}"
    examples:
      - number: "01"
        title: "Beratung"
        body: "Wir verstehen Raum, Wünsche, Budgetrahmen und technische Möglichkeiten."
      - number: "02"
        title: "Planung"
        body: "Grundriss, Materialien, Licht und Ausstattung werden zu einem klaren Konzept."
      - number: "03"
        title: "Koordination"
        body: "Gewerke, Zeitplan und Details laufen über einen zentralen Ansprechpartner."
      - number: "04"
        title: "Umsetzung"
        body: "Saubere Ausführung, präzise Details und Übergabe des fertigen Badezimmers."

  materials-section:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    padding: "128px 48px"
    layout: "large editorial copy with tactile material grid"
    purpose: "Show premium quality through surfaces instead of generic icons."

  material-chip:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow-mono-sm}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
    borderColor: "{colors.chip-border}"
    examples:
      - "Naturstein"
      - "Mikrozement"
      - "Eiche"
      - "Glas"
      - "Bronze"
      - "Keramik"
      - "Lichtplanung"

  before-after-section:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    padding: "128px 48px"
    borderTop: "1px solid {colors.hairline-soft}"
    purpose: "Important conversion section for renovation. Show transformation, not only beauty."

  before-after-card:
    layout: "two images side by side or draggable comparison"
    aspectRatio: "16 / 9"
    imageTreatment: "before image should be clean but clearly outdated; after image should be premium and warm"
    labels: ["Vorher", "Nachher"]
    note: "Keep it elegant. Avoid ugly exaggerated before images."

  featured-projects-header:
    backgroundColor: "{colors.canvas}"
    borderTop: "1px solid {colors.hairline}"
    padding: "72px 48px 104px"
    layout: "left eyebrow, right headline and CTA"
    headlineTypography: "{typography.display-lg}"
    headlineMaxWidth: 880px
    exampleText: "Jedes Bad beginnt mit einem Raum — und endet mit einem neuen Alltag."

  project-list:
    backgroundColor: "{colors.canvas}"
    borderTop: "1px solid {colors.hairline-soft}"
    borderBottom: "1px solid {colors.hairline-soft}"
    purpose: "Use the Fluid Glass-style project index, but make it about bathroom projects."

  project-row:
    height: 82px
    display: grid
    gridTemplateColumns: "1fr 2.4fr 36px"
    alignItems: center
    borderBottom: "1px solid {colors.hairline-soft}"
    textColor: "{colors.muted}"
    typography: "{typography.heading-sm}"
    hover:
      textColor: "{colors.ink}"
      backgroundColor: "{colors.canvas-soft}"
    examples:
      - name: "Villa am Hang"
        tags: ["Masterbad", "Naturstein", "Walk-in-Dusche"]
      - name: "Altbau in der Stadt"
        tags: ["Gäste-WC", "Mikrozement", "Lichtplanung"]
      - name: "Haus am Wald"
        tags: ["Spa-Bad", "Eiche", "Freistehende Wanne"]
      - name: "Penthouse Suite"
        tags: ["Minimalbad", "Bronze", "Großformatfliesen"]

  project-tag:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.eyebrow-mono-sm}"
    rounded: "{rounded.full}"
    padding: "8px 14px"
    borderColor: "{colors.chip-border}"

  dark-showroom-band:
    backgroundColor: "{colors.surface-dark-warm}"
    textColor: "{colors.on-dark}"
    padding: "144px 48px"
    layout: "large central cinematic image, left statement, right consultation block"
    minHeight: 720px
    purpose: "Final emotional conversion section. It should feel like entering a physical showroom."

  showroom-image:
    width: "58vw"
    maxWidth: 980px
    aspectRatio: "16 / 9"
    objectFit: cover
    filter: "contrast(0.94) brightness(0.84)"
    rounded: "{rounded.none}"
    imageTreatment: "warm premium bathroom showroom or material consultation table"

  consultation-block:
    textColor: "{colors.on-dark}"
    typography: "{typography.body-sm}"
    headingTypography: "{typography.eyebrow-mono-sm}"
    alignment: center
    gap: 24px
    exampleText:
      heading: "Beratung"
      body: "Planen Sie ein neues Bad? Wir besprechen Raum, Wünsche und Möglichkeiten in einem ersten Gespräch."
      button: "Beratung anfragen"

  testimonial-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    quoteTypography: "{typography.heading-lg}"
    metaTypography: "{typography.caption}"
    imageTreatment: "small cropped project detail or calm client/homeowner portrait, muted contrast"
    padding: "64px 48px"
    borderTop: "1px solid {colors.hairline-soft}"
    note: "Use believable homeowner/client quotes. Avoid fake-sounding marketing claims."

  faq-section:
    backgroundColor: "{colors.canvas-soft}"
    textColor: "{colors.ink}"
    padding: "104px 48px 144px"
    borderTop: "1px solid {colors.hairline-soft}"
    purpose: "Answer friction points without destroying the premium feel."
    questions:
      - "Wie lange dauert eine hochwertige Badsanierung?"
      - "Übernehmen Sie Planung und Koordination aller Gewerke?"
      - "Kann ein kleines Bad hochwertig wirken?"
      - "Arbeiten Sie mit festen Materialien oder individuellen Konzepten?"
      - "Wie läuft die erste Beratung ab?"

  menu-overlay:
    position: fixed
    inset: 0
    backgroundImage: "full-bleed warm premium bathroom / showroom interior photography"
    overlay: "rgba(0,0,0,0.22)"
    textColor: "{colors.on-photo}"
    zIndex: 100

  menu-panel:
    width: 440px
    minHeight: 540px
    backgroundColor: "rgba(7,12,14,0.90)"
    backdropFilter: "blur(18px)"
    textColor: "{colors.on-primary}"
    padding: "56px 64px"
    rounded: "{rounded.none}"
    shadow: "0 30px 80px rgba(0,0,0,0.28)"

  menu-link:
    textColor: "{colors.on-primary}"
    typography:
      fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
      fontSize: 32px
      fontWeight: 400
      lineHeight: 1.05
      letterSpacing: -0.9px
    hover:
      opacity: 0.66
      transform: "translateX(4px)"
    examples:
      - "Start"
      - "Badwelten"
      - "Projekte"
      - "Ablauf"
      - "Materialien"
      - "Kontakt"

  menu-meta:
    textColor: "{colors.on-dark-muted}"
    typography: "{typography.body-sm}"

  oversized-background-word:
    textColor: "rgba(255,255,255,0.12)"
    typography:
      fontFamily: "Suisse Intl, Inter, system-ui, sans-serif"
      fontSize: 210px
      fontWeight: 500
      lineHeight: 0.8
      letterSpacing: -8px
    position: "absolute bottom -24px left -12px"
    pointerEvents: none
    examples:
      - "BAD"
      - "RUHE"
      - "RAUM"

  footer:
    backgroundColor: "{colors.surface-dark-deep}"
    textColor: "{colors.on-dark}"
    padding: "96px 48px 32px"
    borderTop: "1px solid {colors.hairline-dark}"
    note: "Include legal links quietly. For demo, clearly mark fictional demo if needed."

---

# Premium Badmanufaktur Design System

## 1. Overview

This design system adapts a cinematic architectural portfolio language for a premium bathroom renovation website. It should feel high-end enough to work as a flagship demo on an agency portfolio, but still practical enough to convince real German handcraft businesses.

The site is not a generic Handwerker website. It should position a bathroom renovation company like a premium interior brand: calm, precise, material-focused, and highly trustworthy. The goal is to show that a local handcraft business can look like the market leader in its region.

The visual language is based on:

- full-screen bathroom and interior photography
- warm ivory editorial sections
- near-black rectangular CTAs
- large light grotesk typography
- uppercase mono-like labels
- hairline dividers
- staggered image grids
- dark showroom-style contact sections
- slow scroll-based reveals
- strong conversion sections such as process, trust, before/after, projects, FAQ, and consultation CTA

The site should not feel like SaaS, a tech startup, a playful agency, or a generic construction company. It should feel like a quiet architectural showroom for bathrooms.

## 2. Strategic Goal

The demo has two jobs:

1. **Show high-end design ability**  
   It should prove that the website creator can build a premium, Awwwards-level visual experience with motion, typography, spacing, and strong art direction.

2. **Still sell to real businesses**  
   It must not become pure design art. A real bathroom company owner should understand how this website could help them win better clients and higher-value projects.

The design should communicate:

- premium positioning
- trust
- planning certainty
- clean execution
- one point of contact
- high material quality
- transformation from old bathroom to new living space
- a calm, expensive feeling

## 3. Design Personality

The personality is **quiet luxury for high-end bathroom renovation**.

It combines:

- architectural precision
- spa-like calm
- warm material tactility
- German trust and clarity
- showroom atmosphere
- editorial restraint

The site should feel expensive without shouting. It should use space, photography, typography, and motion instead of decorative elements.

Avoid:

- bright blue construction colors
- generic stock photos of workers smiling
- icon-heavy service grids
- overly rounded cards
- gradients
- cartoon illustrations
- loud hover effects
- complicated abstract claims
- too much text

## 4. Color System

The color system should remain narrow and architectural.

Use warm ivory as the main page background:

```css
--color-canvas: #F4F1EC;
--color-canvas-warm: #EFE9DF;
--color-canvas-soft: #F8F6F2;
```

Use near-black for CTAs, menu panels, navigation, and dark showroom sections:

```css
--color-primary: #070C0E;
--color-surface-dark: #202325;
--color-surface-dark-warm: #191715;
```

Use bathroom material tones sparingly:

```css
--color-travertine: #C7B79E;
--color-sand-stone: #D8C8AD;
--color-oak: #7A6048;
--color-bronze: #8A6A4C;
--color-brushed-metal: #A5A29A;
--color-glass-blue-gray: #566A74;
```

These colors should appear through photography and small material details, not as loud brand blocks.

## 5. Typography

Use a refined neo-grotesk system.

Recommended stack:

```css
--font-sans: "Suisse Intl", "Neue Haas Grotesk Display", Inter, system-ui, sans-serif;
--font-mono-label: "Suisse Intl Mono", "ABC Monument Grotesk Mono", ui-monospace, SFMono-Regular, Menlo, monospace;
```

If custom fonts are not available, use Inter as the main fallback. Keep the design quality through spacing, scale, and weight.

### Display Headings

Headlines should be large, light, and tightly tracked. Do not use bold display headings.

Desktop examples:

```css
.display-lg {
  font-family: var(--font-sans);
  font-size: clamp(48px, 6vw, 76px);
  font-weight: 400;
  line-height: 1.02;
  letter-spacing: -0.045em;
}
```

### Labels and Buttons

Labels, buttons, tags, and nav items should use uppercase mono-like typography with wide tracking.

```css
.label {
  font-family: var(--font-mono-label);
  font-size: 11px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: 0.19em;
  text-transform: uppercase;
}
```

This label style is crucial. It creates the precise, architectural rhythm of the site.

## 6. Layout Principles

The layout should feel like a guided showroom walkthrough.

Alternate between:

1. **immersive visual moments**  
   Full-screen hero, dark photo bands, large images, pinned sections.

2. **quiet editorial sections**  
   Warm ivory background, large statements, generous whitespace, thin lines.

3. **conversion proof sections**  
   Process, before/after, materials, projects, testimonials, FAQ, contact CTA.

The site should not use a typical SaaS landing page layout with many cards in a grid. Keep sections large and intentional.

## 7. Recommended Page Structure

### 1. Hero

Purpose: immediate premium positioning.

Content:

- full-screen finished premium bathroom photo
- centered wordmark at top
- top-right CTA: "Beratung anfragen"
- lower-third headline
- short subline
- optional small scroll indicator

Example copy:

```text
Ihr neues Bad. Geplant wie ein Wohnraum. Gebaut mit Präzision.

Premium-Badsanierung aus einer Hand — von der ersten Idee bis zur fertigen Übergabe.
```

Visual notes:

- Use warm lighting, stone, glass, matte fixtures.
- Do not use a construction site as the first image.
- Add a soft dark overlay for white text contrast.
- Hero title should sit in the lower third, not dead center.

### 2. Trust Strip

Purpose: quickly make the premium design commercially understandable.

Items:

```text
Planung & Umsetzung
Ein Ansprechpartner
Hochwertige Materialien
Saubere Koordination
```

Design:

- warm ivory background
- thin top and bottom hairlines
- uppercase mono labels
- no icons or badges

### 3. Intro Statement

Purpose: emotional positioning.

Example:

```text
Wir planen Bäder nicht als Nebenraum, sondern als täglichen Rückzugsort — präzise, ruhig und bis ins Detail durchdacht.
```

Use one huge centered statement on an ivory background. Add one black CTA underneath.

CTA:

```text
Projekt besprechen
```

### 4. Badwelten

Purpose: replace the product collection idea with bathroom categories.

Cards:

- Masterbad
- Gäste-WC
- Spa-Bad
- Natursteinbad
- Dachgeschossbad

Design:

- large raw image cards
- no rounded corners
- centered white text over image
- subtle overlay
- staggered layout on desktop

This section should feel like a curated interior portfolio, not like a service list.

### 5. Process / Ablauf

Purpose: convert premium interest into trust.

Headline:

```text
Ein klarer Ablauf. Ein Ansprechpartner. Ein Ergebnis, das bleibt.
```

Rows:

1. Beratung  
   Wir verstehen Raum, Wünsche, Budgetrahmen und technische Möglichkeiten.

2. Planung  
   Grundriss, Materialien, Licht und Ausstattung werden zu einem klaren Konzept.

3. Koordination  
   Gewerke, Zeitplan und Details laufen über einen zentralen Ansprechpartner.

4. Umsetzung  
   Saubere Ausführung, präzise Details und Übergabe des fertigen Badezimmers.

Design:

- table-like rows
- thin dividers
- number in mono label style
- no generic icons

### 6. Materials / Materialien

Purpose: show premium quality through tactile surfaces.

Materials:

- Naturstein
- Mikrozement
- Eiche
- Glas
- Bronze
- Keramik
- Lichtplanung

Design:

- macro detail photography
- warm tones
- large images with small labels
- optional horizontal material strip
- avoid icon grids

Example copy:

```text
Materialien bestimmen nicht nur die Optik eines Badezimmers. Sie bestimmen, wie es sich jeden Morgen anfühlt.
```

### 7. Before / After

Purpose: make renovation value obvious.

This is important because bathroom renovation is transformation-driven. The site should not only show beautiful finished spaces. It should show what changes.

Design options:

- draggable before/after comparison
- two large side-by-side images
- project detail card with short explanation

Keep it elegant. Do not make the before image exaggerated or ugly. The transformation should feel believable.

Labels:

```text
Vorher
Nachher
```

### 8. Featured Projects

Purpose: create portfolio credibility.

Use a table-like project list inspired by architectural project indexes.

Example rows:

```text
Villa am Hang        Masterbad / Naturstein / Walk-in-Dusche
Altbau in der Stadt  Gäste-WC / Mikrozement / Lichtplanung
Haus am Wald         Spa-Bad / Eiche / Freistehende Wanne
Penthouse Suite      Minimalbad / Bronze / Großformatfliesen
```

Design:

- muted project names
- pill-shaped mono tags
- thin dividers
- small arrow affordance
- hover darkens text and slightly changes background

### 9. Testimonial / Kundenstimme

Purpose: add human trust without ruining the aesthetic.

Example:

```text
„Vom ersten Entwurf bis zur Übergabe war klar, wer wofür verantwortlich ist. Das Ergebnis wirkt nicht wie ein saniertes Bad, sondern wie ein neuer Raum im Haus."
```

Keep quotes believable and specific. Avoid fake-sounding claims like "best company ever".

### 10. FAQ

Purpose: reduce friction.

Questions:

- Wie lange dauert eine hochwertige Badsanierung?
- Übernehmen Sie Planung und Koordination aller Gewerke?
- Kann ein kleines Bad hochwertig wirken?
- Arbeiten Sie mit festen Materialien oder individuellen Konzepten?
- Wie läuft die erste Beratung ab?

Design:

- accordion rows
- hairline dividers
- simple text
- no boxed FAQ cards

### 11. Dark Showroom Contact Band

Purpose: final conversion.

This should feel like entering a physical showroom or consultation space.

Layout:

- dark warm charcoal background
- central cinematic bathroom/showroom image
- left emotional statement
- right consultation block with CTA

Example copy:

```text
Lassen Sie uns über Ihr neues Bad sprechen.

Planen Sie eine Sanierung? In einem ersten Gespräch klären wir Raum, Wünsche, Budgetrahmen und die nächsten sinnvollen Schritte.
```

CTA:

```text
Beratung anfragen
```

## 8. Navigation

### Header

The top header over the hero should remain minimal.

Use:

- centered brand wordmark
- top-right CTA
- no full traditional nav at top

### Floating Navigation

Use a fixed bottom-centered floating nav as a signature premium interaction.

Structure:

```text
[Logo] [Current Section] [Menu]
```

Desktop:

```css
.floating-nav {
  position: fixed;
  left: 50%;
  bottom: 48px;
  transform: translateX(-50%);
  width: 300px;
  height: 58px;
  display: grid;
  grid-template-columns: 48px 1fr 48px;
  align-items: center;
  padding: 0 18px;
  background: rgba(7, 12, 14, 0.92);
  color: #fff;
  backdrop-filter: blur(12px);
  box-shadow: 0 18px 38px rgba(0,0,0,0.22);
  z-index: 80;
}
```

Mobile:

```css
.floating-nav {
  width: calc(100vw - 48px);
  max-width: 320px;
  bottom: 24px;
}
```

Important:

- It must not cover important CTAs.
- Hide or reposition it when a contact form reaches the bottom if needed.
- Respect safe-area insets on iOS.

## 9. Menu Overlay

The menu should be a full-screen photographic overlay with a dark translucent panel.

Links:

```text
Start
Badwelten
Projekte
Ablauf
Materialien
Kontakt
```

Panel content:

- large links
- phone number
- email
- showroom/location placeholder
- CTA: "Beratung anfragen"

Use warm bathroom/interior photography in the background. Avoid copying any specific original website composition or logo.

## 10. Motion

Motion is central, but it must stay restrained.

Use:

- slow text reveal
- image parallax
- subtle image scale on scroll
- sticky/pinned intro sections
- project row hover
- menu overlay fade and panel reveal
- staggered gallery movement

Avoid:

- bouncing
- elastic easing
- spinning
- colorful transitions
- excessive cursor effects
- long loading animations
- animations that hide CTAs

Recommended easing:

```css
--ease-gallery: cubic-bezier(0.16, 1, 0.3, 1);
--ease-standard: cubic-bezier(0.22, 1, 0.36, 1);
```

### Text Reveal

```css
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition:
    opacity 900ms cubic-bezier(0.16,1,0.3,1),
    transform 900ms cubic-bezier(0.16,1,0.3,1);
}

[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Hero Image Scale

```css
.hero-media {
  transform: scale(calc(1.04 - var(--scroll-progress) * 0.04));
  filter: brightness(calc(0.78 + var(--scroll-progress) * 0.08));
}
```

### Staggered Gallery Parallax

```css
.gallery-item:nth-child(1) { --parallax: -28px; }
.gallery-item:nth-child(2) { --parallax: 42px; }
.gallery-item:nth-child(3) { --parallax: -64px; }
```

## 11. Responsive Rules

### Desktop

- Use 48px page gutters.
- Hero title can reach 64–76px.
- Section vertical padding should be 96–144px.
- Use wide editorial grids.
- Keep images large.
- Use staggered 2–3 column gallery compositions.
- Project rows can include multiple tags inline.

### Tablet

- Reduce display headings to 44–56px.
- Reduce horizontal gaps.
- Keep strong vertical spacing.
- Convert complex grids to simpler two-column layouts.

### Mobile

- Hero remains near full viewport height.
- Hero title should be 34–42px.
- Section padding should be 72px 24px.
- Badwelten and materials become single-column.
- Project rows stack: title, tags, arrow.
- Menu panel becomes nearly full-screen.
- Floating nav uses `calc(100vw - 48px)` and bottom safe area.
- Avoid heavy parallax on mobile.

Mobile typography:

```yaml
mobileTypography:
  display-xl:
    fontSize: 42px
    lineHeight: 1.02
    letterSpacing: -1.6px
  display-lg:
    fontSize: 36px
    lineHeight: 1.05
    letterSpacing: -1.2px
  body-lg:
    fontSize: 18px
    lineHeight: 1.3
  button:
    fontSize: 10px
    letterSpacing: 1.8px
```

## 12. Image Direction

The entire website depends on strong imagery.

Use images with:

- premium bathrooms
- warm natural light
- stone, glass, bronze, oak, ceramic
- clean showers
- freestanding tubs
- soft reflections
- matte black or brushed metal fixtures
- minimal styling
- real spatial depth
- architectural calm

Avoid:

- generic bathroom stock images with unrealistic CGI look
- cluttered bathrooms
- bright blue water graphics
- cheap renovation imagery
- smiling tradespeople as hero images
- overexposed white showroom shots
- tools and construction mess as main premium visuals

Construction/process images may appear later, but they should be clean, detail-focused, and premium.

## 13. Conversion Requirements

This is a high-end demo, but it still needs a strong buyer journey.

Must include:

- clear primary CTA above the fold
- trust strip
- process section
- materials section
- project examples
- before/after transformation
- testimonial
- FAQ
- final consultation CTA

Do not let the page become only a visual portfolio. Every section should answer a buyer question:

- Does this company understand premium bathrooms?
- Can they handle the full process?
- Will the result be worth the money?
- Can I trust them in my home?
- What happens after I contact them?

## 14. Accessibility

- Ensure white text on photography always has sufficient dark overlay.
- Use visible focus states for nav, menu links, CTAs, and form fields.
- Do not rely on the diamond marker alone to communicate section purpose.
- Respect `prefers-reduced-motion`.
- Use semantic headings.
- Make CTAs descriptive.
- Ensure floating nav does not block content or form controls.

Reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  [data-reveal],
  .hero-media,
  .gallery-item {
    transition: none !important;
    transform: none !important;
  }
}
```

## 15. Implementation Notes

Recommended tech approach:

- Use CSS variables for tokens.
- Use `object-fit: cover` for all photography.
- Apply image overlays with pseudo-elements or overlay layers.
- Use `svh` / `dvh` units for mobile hero sections.
- Use native IntersectionObserver, Framer Motion, or GSAP ScrollTrigger for scroll reveals.
- Use CSS sticky for pinned sections where possible.
- Keep all interactions performant.
- Compress and lazy-load images below the fold.
- Use real headings and text, not only visual labels.

Starter CSS variables:

```css
:root {
  --color-primary: #070C0E;
  --color-ink: #202326;
  --color-body: #25282A;
  --color-muted: #8C8F8E;
  --color-canvas: #F4F1EC;
  --color-canvas-warm: #EFE9DF;
  --color-canvas-soft: #F8F6F2;
  --color-hairline: #D9D4CB;
  --color-surface-dark: #202325;
  --color-surface-dark-warm: #191715;
  --color-on-dark: #FFFFFF;

  --font-sans: "Suisse Intl", "Neue Haas Grotesk Display", Inter, system-ui, sans-serif;
  --font-mono-label: "Suisse Intl Mono", "ABC Monument Grotesk Mono", ui-monospace, SFMono-Regular, Menlo, monospace;

  --ease-gallery: cubic-bezier(0.16, 1, 0.3, 1);
  --shadow-floating-nav: 0 18px 38px rgba(0,0,0,0.22);
}
```

## 16. Demo Brand Suggestions

Possible fictional brand names:

- Aurum Badmanufaktur
- Atelier Badraum
- Maison Bad
- Studio Raum & Bad
- Eichenbad Manufaktur
- NOVA Badmanufaktur
- Stein & Wasser

Best fit for this design:

```text
Aurum Badmanufaktur
```

Why: short, premium, warm, works with bronze/stone tones, and sounds like a high-end local brand without being too technical.

## 17. Example Homepage Copy

### Hero

```text
Ihr neues Bad. Geplant wie ein Wohnraum. Gebaut mit Präzision.

Premium-Badsanierung aus einer Hand — von der ersten Idee bis zur fertigen Übergabe.
```

CTA:

```text
Beratung anfragen
```

### Intro

```text
Wir verwandeln funktionale Bäder in Räume, die jeden Tag Ruhe ausstrahlen — mit klarer Planung, hochwertigen Materialien und präziser Umsetzung.
```

### Badwelten

```text
Jedes Bad folgt einem anderen Alltag. Wir gestalten Räume, die zu Ihrem Haus, Ihrem Stil und Ihrer täglichen Routine passen.
```

### Ablauf

```text
Ein hochwertiges Bad entsteht nicht zufällig. Es entsteht durch klare Entscheidungen, saubere Koordination und Handwerk, das bis ins Detail durchdacht ist.
```

### Materialien

```text
Stein, Glas, Holz, Licht und Metall bestimmen nicht nur die Optik eines Badezimmers. Sie bestimmen, wie es sich jeden Morgen anfühlt.
```

### Contact

```text
Lassen Sie uns über Ihr neues Bad sprechen.

In einem ersten Gespräch klären wir Raum, Wünsche, Budgetrahmen und die nächsten sinnvollen Schritte.
```

## 18. Agent Prompt Guide

Use this prompt when asking Claude Code, Codex, or another coding agent to build the website from this design system:

```text
Build a premium German bathroom renovation / Badmanufaktur demo website using the attached DESIGN.md.

The website should feel like a cinematic architectural showroom for high-end bathrooms, not like a generic Handwerker website and not like SaaS. Use warm ivory editorial backgrounds, near-black rectangular CTAs, large low-weight grotesk typography, uppercase mono-style labels with wide tracking, cinematic bathroom photography, thin hairline dividers, staggered image compositions, a fixed bottom-centered floating navigation bar, and restrained scroll-based motion.

Business positioning:
"Premium-Badsanierung aus einer Hand — geplant wie ein Wohnraum, gebaut mit Präzision."

The site must be visually high-end enough to work as a flagship portfolio demo, but it must still convert real homeowners. Include these sections:

1. Full-screen hero with premium bathroom photography, centered wordmark, top-right CTA, lower-third headline, and short subline.
2. Quiet trust strip with 4 proof points: Planung & Umsetzung, Ein Ansprechpartner, Hochwertige Materialien, Saubere Koordination.
3. Large editorial intro statement with black rectangular CTA.
4. Badwelten section replacing a product catalogue: Masterbad, Gäste-WC, Spa-Bad, Natursteinbad, Dachgeschossbad.
5. Process section with 4 table-like rows: Beratung, Planung, Koordination, Umsetzung.
6. Materials section with tactile imagery and chips such as Naturstein, Mikrozement, Eiche, Glas, Bronze, Keramik, Lichtplanung.
7. Elegant before/after transformation section.
8. Featured projects list with row dividers, muted project names, pill tags, and arrow affordance.
9. Testimonial section with believable homeowner quote.
10. FAQ section with hairline accordion rows.
11. Dark showroom/contact band with cinematic image, consultation text, and CTA.
12. Full-screen menu overlay with dark translucent panel over bathroom/showroom photography.

Use German copy. Keep copy premium but understandable. Avoid abstract agency language, fake awards, generic icons, colorful gradients, rounded SaaS cards, heavy shadows, stock handshakes, cheap construction imagery, and excessive animation.

Motion should be slow and gallery-like: subtle text reveals, image parallax, image scale on scroll, sticky/pinned photo sections, and restrained hover states. Use cubic-bezier(0.16, 1, 0.3, 1). Respect prefers-reduced-motion.

Do not copy Fluid Glass logos, exact images, exact copy, proprietary assets, or brand claims. Create an original premium bathroom renovation demo using the same broad architectural, cinematic, precise design language.
```
