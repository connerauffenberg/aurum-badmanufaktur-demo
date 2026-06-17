// Zentrale Inhalte & Bildquellen der Demo-Website.
// Alle Bilder sind lokale KI-Bilder und liegen unter public/images.

export const BRAND = {
  name: "Aurum",
  full: "Aurum Badmanufaktur",
  claim: "Premium-Badsanierung aus einer Hand.",
  phone: "+49 30 0000 0000",
  phoneHref: "tel:+493000000000",
  email: "studio@aurum-badmanufaktur.demo",
  emailHref: "mailto:studio@aurum-badmanufaktur.demo",
  city: "Showroom Berlin-Mitte",
  address: "Lindenhof 14 · 10117 Berlin (fiktiv)",
};

export const IMG = {
  hero: "/images/hero.webp",
  showroom: "/images/showroom.webp",
  menu: "/images/menu-bg.webp",
  // Badwelten
  masterbad: "/images/badwelt-masterbad.webp",
  gaestewc: "/images/badwelt-gaestewc.webp",
  spabad: "/images/badwelt-spabad.webp",
  natursteinbad: "/images/badwelt-natursteinbad.webp",
  dachgeschossbad: "/images/badwelt-dachgeschossbad.webp",
  // Materialien
  matNaturstein: "/images/material-naturstein.webp",
  matEiche: "/images/material-eiche.webp",
  matGlas: "/images/material-glas.webp",
  matBronze: "/images/material-bronze.webp",
  matKeramik: "/images/material-keramik.webp",
  matLicht: "/images/material-lichtplanung.webp",
  // Projekte / Vorher-Nachher
  pVilla: "/images/project-villa-am-hang.webp",
  pAltbau: "/images/project-altbau-stadt.webp",
  pStadt: "/images/project-stadtwohnung.webp",
  pFamilie: "/images/project-familienhaus.webp",
  pSpa: "/images/project-spa-suite.webp",
  beforeRaw: "/images/before.webp",
  afterFine: "/images/after.webp",
};

export type Badwelt = {
  id: string;
  title: string;
  image: string;
  lead: string;
  body: string;
  points: string[];
};

export const BADWELTEN: Badwelt[] = [
  {
    id: "masterbad",
    title: "Masterbad",
    image: IMG.masterbad,
    lead: "Das Bad als privater Rückzugsort im eigenen Zuhause.",
    body: "Großzügige Walk-in-Dusche, freistehende Wanne und warme Materialien. Wir planen das Masterbad als ruhigen Raum, der morgens wach macht und abends zur Ruhe bringt — mit durchdachter Wegeführung und indirektem Licht.",
    points: ["Walk-in-Dusche bodengleich", "Doppelwaschtisch aus Naturstein", "Indirekte Lichtplanung", "Gedämmte Akustik"],
  },
  {
    id: "gaestewc",
    title: "Gäste-WC",
    image: IMG.gaestewc,
    lead: "Kleiner Raum, große Wirkung.",
    body: "Gerade auf wenigen Quadratmetern entscheidet jedes Detail. Mit Mikrozement, Wandarmaturen und präziser Lichtführung wird das Gäste-WC vom Funktionsraum zum stimmigen Auftakt für das ganze Haus.",
    points: ["Fugenarme Mikrozement-Flächen", "Wandmontierte Armaturen", "Maßgefertigter Waschtisch", "Punktgenaue Akzentbeleuchtung"],
  },
  {
    id: "spabad",
    title: "Spa-Bad",
    image: IMG.spabad,
    lead: "Wellness-Atmosphäre für den Alltag.",
    body: "Regendusche, Dampf, warme Oberflächen und gedämpftes Licht. Wir verbinden Technik und Materialität so, dass sich Ihr Bad jeden Tag wie ein kleiner Kurzurlaub anfühlt — ohne Effekthascherei.",
    points: ["Regen- & Schwallbrause", "Beheizte Naturstein-Bank", "Warme Holzakzente in Eiche", "Dimmbare Lichtszenen"],
  },
  {
    id: "natursteinbad",
    title: "Natursteinbad",
    image: IMG.natursteinbad,
    lead: "Echtes Material, das mit der Zeit schöner wird.",
    body: "Großformatige Natursteinflächen geben dem Bad Tiefe und Ruhe. Wir wählen Steine nach Maserung und Haptik aus und setzen sie so, dass die Fläche wie aus einem Guss wirkt.",
    points: ["Großformatige Steinplatten", "Durchgehende Maserung", "Geschliffene Kanten", "Imprägnierter Schutz"],
  },
  {
    id: "dachgeschossbad",
    title: "Dachgeschossbad",
    image: IMG.dachgeschossbad,
    lead: "Schrägen clever genutzt, statt versteckt.",
    body: "Dachschrägen sind kein Hindernis, sondern Gestaltungselement. Wir nutzen jede Nische, planen Stauraum millimetergenau und holen mit Licht das Maximum aus dem Raum heraus.",
    points: ["Maßmöbel für Schrägen", "Wanne unter der Gaube", "Tageslicht über Dachfenster", "Versteckter Stauraum"],
  },
];

export type Project = {
  id: string;
  name: string;
  year: string;
  location: string;
  tags: string[];
  image: string;
  summary: string;
  scope: string;
  detail: string;
};

export const PROJECTS: Project[] = [
  {
    id: "villa-am-hang",
    name: "Villa am Hang",
    year: "2025",
    location: "Bodensee",
    tags: ["Masterbad", "Naturstein", "Walk-in-Dusche"],
    image: IMG.pVilla,
    summary: "Masterbad mit Seeblick, das Architektur und Landschaft fortführt.",
    scope: "Komplettsanierung · 24 m² · 9 Wochen",
    detail:
      "Für die Villa am Hang haben wir das bestehende Bad bis auf den Rohbau zurückgebaut. Großformatiger Naturstein, eine bodengleiche Walk-in-Dusche und eine freistehende Wanne am Fenster nehmen den Blick über den See auf. Die Lichtplanung folgt dem Tagesverlauf — morgens klar, abends warm und gedämpft.",
  },
  {
    id: "altbau-stadt",
    name: "Altbau in der Stadt",
    year: "2025",
    location: "Berlin",
    tags: ["Gäste-WC", "Mikrozement", "Lichtplanung"],
    image: IMG.pAltbau,
    summary: "Gründerzeit trifft fugenlose Ruhe auf wenigen Quadratmetern.",
    scope: "Gäste-WC & Bad · 11 m² · 6 Wochen",
    detail:
      "Im Berliner Altbau wurde aus einem dunklen Schlauch ein heller, ruhiger Raum. Fugenarmer Mikrozement an Wand und Boden, wandmontierte Armaturen und eine präzise Akzentbeleuchtung lassen den schmalen Grundriss großzügig wirken — bei vollem Erhalt der originalen Stuckdetails im angrenzenden Flur.",
  },
  {
    id: "stadtwohnung",
    name: "Stadtwohnung",
    year: "2024",
    location: "Hamburg",
    tags: ["Minimalbad", "Bronze", "Großformatfliesen"],
    image: IMG.pStadt,
    summary: "Reduziertes Minimalbad mit warmen Bronze-Akzenten.",
    scope: "Bad · 9 m² · 5 Wochen",
    detail:
      "Klare Linien, große Flächen, wenige Materialien: In dieser Stadtwohnung steht die Ruhe im Vordergrund. Großformatfliesen ohne sichtbare Stöße treffen auf gebürstete Bronze-Armaturen. Stauraum verschwindet hinter grifflosen Fronten, sodass der Raum vollständig zur Wirkung kommt.",
  },
  {
    id: "familienhaus",
    name: "Familienhaus",
    year: "2024",
    location: "Köln",
    tags: ["Familienbad", "Keramik", "Doppelwaschtisch"],
    image: IMG.pFamilie,
    summary: "Robust, warm und alltagstauglich für vier Personen.",
    scope: "Familienbad · 16 m² · 7 Wochen",
    detail:
      "Ein Bad für den Familienalltag muss schön und belastbar zugleich sein. Pflegeleichte Keramik, ein Doppelwaschtisch und eine klar getrennte Dusch- und Wannenzone sorgen für reibungslose Morgenroutinen. Warme Holzakzente nehmen dem Raum die Härte und machen ihn zum gemütlichen Treffpunkt.",
  },
  {
    id: "spa-suite",
    name: "Spa Suite",
    year: "2023",
    location: "Tegernsee",
    tags: ["Spa-Bad", "Eiche", "Freistehende Wanne"],
    image: IMG.pSpa,
    summary: "Hotelhafte Spa-Suite mit Dampfdusche und Eichenwärme.",
    scope: "Spa-Bad · 28 m² · 11 Wochen",
    detail:
      "Diese Suite verbindet Schlafbereich und Bad zu einem fließenden Raum. Eine Dampfdusche, eine freistehende Wanne und beheizte Natursteinflächen schaffen echte Spa-Atmosphäre. Eiche an Möbeln und Decke bringt Wärme, dimmbare Lichtszenen machen aus dem Bad abends einen Ort der Entspannung.",
  },
];

export const MATERIALS = [
  { id: "naturstein", label: "Naturstein", image: IMG.matNaturstein, note: "Tiefe Maserung, kühle Haptik, alterungsschön." },
  { id: "eiche", label: "Eiche", image: IMG.matEiche, note: "Warmes Holz für Möbel, Decken und Akzente." },
  { id: "glas", label: "Glas", image: IMG.matGlas, note: "Rahmenlose Duschen und klare Trennungen." },
  { id: "bronze", label: "Bronze", image: IMG.matBronze, note: "Gebürstete Armaturen mit ruhigem Schimmer." },
  { id: "keramik", label: "Keramik", image: IMG.matKeramik, note: "Pflegeleicht, präzise, in vielen Formaten." },
  { id: "licht", label: "Lichtplanung", image: IMG.matLicht, note: "Szenen für Morgen, Tag und Abend." },
];

export const PROCESS = [
  { number: "01", title: "Beratung", body: "Wir verstehen Raum, Wünsche, Budgetrahmen und technische Möglichkeiten — in Ruhe und ohne Verkaufsdruck." },
  { number: "02", title: "Planung", body: "Grundriss, Materialien, Licht und Ausstattung werden zu einem klaren, verbindlichen Konzept." },
  { number: "03", title: "Bemusterung", body: "Sie sehen und fühlen die Materialien, bevor entschieden wird — Stein, Holz, Armaturen und Oberflächen." },
  { number: "04", title: "Umsetzung", body: "Alle Gewerke laufen über einen zentralen Ansprechpartner. Saubere Ausführung, präzise Details." },
  { number: "05", title: "Übergabe", body: "Wir übergeben ein fertiges Bad — geprüft, gereinigt und bereit für den ersten Morgen." },
];

export const FAQ = [
  {
    q: "Wie lange dauert eine hochwertige Badsanierung?",
    a: "Ein vollständig saniertes Bad dauert je nach Größe und Umfang in der Regel fünf bis elf Wochen. Den genauen Zeitplan legen wir nach der Planung fest — inklusive aller Gewerke, damit Sie früh Sicherheit haben.",
  },
  {
    q: "Übernehmen Sie Planung und Koordination aller Gewerke?",
    a: "Ja. Sie haben einen festen Ansprechpartner, der Planung, Bemusterung, Terminplanung und alle Gewerke koordiniert — von Abbruch und Installation bis zu Fliesen, Möbeln und Licht. Aus einer Hand, ohne Schnittstellenverlust.",
  },
  {
    q: "Kann ein kleines Bad hochwertig wirken?",
    a: "Gerade kleine Bäder profitieren von guter Planung. Mit großformatigen Flächen, fugenarmen Materialien, wandmontierten Armaturen und durchdachtem Licht wirken auch wenige Quadratmeter ruhig, großzügig und wertig.",
  },
  {
    q: "Arbeiten Sie mit festen Materialien oder individuellen Konzepten?",
    a: "Jedes Bad ist individuell. Wir arbeiten mit einer kuratierten Auswahl hochwertiger Materialien und stellen daraus ein Konzept zusammen, das zu Ihrem Raum, Ihrem Stil und Ihrem Budget passt.",
  },
  {
    q: "Wie läuft die erste Beratung ab?",
    a: "Im ersten Gespräch klären wir Raum, Wünsche und Budgetrahmen — telefonisch, im Showroom oder bei Ihnen vor Ort. Sie erhalten eine klare Einschätzung zu Möglichkeiten und nächsten Schritten, unverbindlich.",
  },
];

export const TRUST = [
  "Planung & Umsetzung",
  "Ein Ansprechpartner",
  "Hochwertige Materialien",
  "Kostenfreies Erstgespräch",
];

export const NAV_SECTIONS = [
  { id: "start", label: "Start" },
  { id: "badwelten", label: "Badwelten" },
  { id: "projekte", label: "Projekte" },
  { id: "ablauf", label: "Ablauf" },
  { id: "materialien", label: "Materialien" },
  { id: "kontakt", label: "Kontakt" },
];
