import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

// Apple-Touch-Icon: Markenzeichen auf near-black Fläche.
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#070C0E",
        }}
      >
        <svg width="120" height="120" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 27V15.5C5 9.7 9.9 5 16 5C22.1 5 27 9.7 27 15.5V27"
            stroke="#F4F1EC"
            strokeWidth="1.7"
            strokeLinecap="square"
          />
          <path d="M10.5 19.5H21.5" stroke="#F4F1EC" strokeWidth="1.7" strokeLinecap="square" />
          <path
            d="M16 11.5C16 11.5 13.2 14.4 13.2 16.4C13.2 17.95 14.45 19.2 16 19.2C17.55 19.2 18.8 17.95 18.8 16.4C18.8 14.4 16 11.5 16 11.5Z"
            fill="#C7B79E"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
