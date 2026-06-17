// Markenzeichen "Aurum": ein architektonischer Bogen, der zugleich ein
// stilisiertes A und einen Wassertropfen andeutet. Nutzt currentColor.

export function Logo({
  size = 28,
  title = "Aurum Badmanufaktur",
}: {
  size?: number;
  title?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bogen / Archway */}
      <path
        d="M5 27V15.5C5 9.7 9.9 5 16 5C22.1 5 27 9.7 27 15.5V27"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="square"
      />
      {/* A-Querbalken */}
      <path d="M10.5 19.5H21.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="square" />
      {/* Tropfen / Mittelachse */}
      <path
        d="M16 11.5C16 11.5 13.2 14.4 13.2 16.4C13.2 17.95 14.45 19.2 16 19.2C17.55 19.2 18.8 17.95 18.8 16.4C18.8 14.4 16 11.5 16 11.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
