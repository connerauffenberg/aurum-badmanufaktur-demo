"use client";

import { useState } from "react";
import { IMG } from "@/lib/content";

export function BeforeAfter() {
  const [split, setSplit] = useState(50);

  return (
    <section className="beforeafter section">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <span className="eyebrow" data-reveal>
            Vorher / Nachher
          </span>
          <div>
            <h2 className="display-md sec-head__title" data-reveal>
              Die größte Wirkung liegt in der Veränderung.
            </h2>
            <p className="body-lg sec-head__lead" data-reveal style={{ marginTop: 22 }}>
              Ziehen Sie den Regler, um aus einem in die Jahre gekommenen Bad ein ruhiges,
              hochwertiges Raumgefühl werden zu lassen.
            </p>
          </div>
        </div>

        <div className="ba" data-reveal>
          <span
            className="ba__img ba__img--before"
            style={{ backgroundImage: `url('${IMG.beforeRaw}')` }}
            aria-hidden="true"
          />
          <span
            className="ba__img ba__img--after"
            style={
              {
                backgroundImage: `url('${IMG.afterFine}')`,
                "--split": `${split}%`,
              } as React.CSSProperties
            }
            aria-hidden="true"
          />
          <span className="ba__tag ba__tag--before">Vorher</span>
          <span className="ba__tag ba__tag--after">Nachher</span>
          <span className="ba__handle" style={{ "--split": `${split}%` } as React.CSSProperties}>
            <span className="ba__knob" aria-hidden="true">
              <svg width="20" height="14" viewBox="0 0 20 14" fill="none">
                <path d="M7 2L2 7l5 5M13 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </span>
          </span>
          <input
            className="ba__range"
            type="range"
            min={0}
            max={100}
            value={split}
            onChange={(e) => setSplit(Number(e.target.value))}
            aria-label="Vorher-Nachher-Vergleich verschieben"
          />
        </div>

        <div className="ba__caption">
          <span>
            <strong style={{ color: "var(--color-ink)", fontWeight: 500 }}>Vorher</strong> —
            funktionaler Grundriss, dunkle Oberflächen, wenig Ruhe.
          </span>
          <span>
            <strong style={{ color: "var(--color-ink)", fontWeight: 500 }}>Nachher</strong> — warme
            Materialien, klares Licht, durchdachte Wegeführung.
          </span>
        </div>
      </div>
    </section>
  );
}
