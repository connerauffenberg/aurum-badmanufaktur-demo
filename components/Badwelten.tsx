"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import { ArrowUpRight } from "./icons";
import { BADWELTEN, type Badwelt } from "@/lib/content";

export function Badwelten() {
  const [selected, setSelected] = useState<Badwelt | null>(null);

  return (
    <section id="badwelten" className="badwelten section">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <span className="eyebrow" data-reveal>
            Badwelten
          </span>
          <div>
            <h2 className="display-md sec-head__title" data-reveal>
              Jedes Bad folgt einem anderen Alltag.
            </h2>
            <p className="body-lg sec-head__lead" data-reveal style={{ marginTop: 22 }}>
              Wir gestalten Räume, die zu Ihrem Haus, Ihrem Stil und Ihrer täglichen Routine passen
              — vom kompakten Gäste-WC bis zur großzügigen Spa-Suite.
            </p>
          </div>
        </div>

        <div className="badwelten__grid">
          {BADWELTEN.map((b) => (
            <button
              key={b.id}
              className="badwelten__card"
              data-reveal
              onClick={() => setSelected(b)}
              aria-label={`${b.title} ansehen`}
            >
              <span
                className="badwelten__media"
                style={{ backgroundImage: `url('${b.image}')` }}
                aria-hidden="true"
              />
              <span className="badwelten__scrim" aria-hidden="true" />
              <span className="badwelten__body">
                <span className="badwelten__title">{b.title}</span>
                <span className="badwelten__hint label">
                  Ansehen <ArrowUpRight size={14} />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Modal open={Boolean(selected)} onClose={() => setSelected(null)} labelledBy="badwelt-title">
        {selected && (
          <>
            <div
              className="modal__media"
              style={{ backgroundImage: `url('${selected.image}')` }}
              aria-hidden="true"
            />
            <div className="modal__content">
              <span className="eyebrow">Badwelt</span>
              <h3 id="badwelt-title" className="heading-lg" style={{ margin: "18px 0 10px" }}>
                {selected.title}
              </h3>
              <p className="body-lg" style={{ color: "var(--color-ink)" }}>
                {selected.lead}
              </p>
              <p className="body-md" style={{ marginTop: 16 }}>
                {selected.body}
              </p>
              <ul className="modal__points">
                {selected.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <a
                href="#kontakt"
                className="btn btn--primary"
                style={{ marginTop: 28 }}
                onClick={() => setSelected(null)}
              >
                <ArrowUpRight /> Diese Badwelt anfragen
              </a>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
