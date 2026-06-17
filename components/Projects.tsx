"use client";

import { useState } from "react";
import { Modal } from "./Modal";
import { ArrowUpRight } from "./icons";
import { PROJECTS, type Project } from "@/lib/content";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projekte" className="projects section">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <span className="eyebrow" data-reveal>
            Projekte
          </span>
          <div>
            <h2 className="display-md sec-head__title" data-reveal>
              Jedes Bad beginnt mit einem Raum — und endet mit einem neuen Alltag.
            </h2>
            <p className="body-lg sec-head__lead" data-reveal style={{ marginTop: 22 }}>
              Beispielhafte Projektfälle dieser fiktiven Demo-Website. Jede Zeile öffnet die
              Details zum Raum, Umfang und Ergebnis.
            </p>
          </div>
        </div>

        <div className="projects__list">
          {PROJECTS.map((p, i) => (
            <button
              key={p.id}
              className="prow"
              data-reveal
              style={{ "--reveal-delay": `${i * 60}ms` } as React.CSSProperties}
              onClick={() => setSelected(p)}
              aria-label={`${p.name} ansehen`}
            >
              <span className="prow__name">
                {p.name}
                <span className="prow__year">
                  {p.location} · {p.year}
                </span>
              </span>
              <span className="prow__tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </span>
              <span className="prow__arrow" aria-hidden="true">
                <ArrowUpRight size={18} />
              </span>
            </button>
          ))}
        </div>
      </div>

      <Modal open={Boolean(selected)} onClose={() => setSelected(null)} labelledBy="project-title">
        {selected && (
          <>
            <div
              className="modal__media"
              style={{ backgroundImage: `url('${selected.image}')` }}
              aria-hidden="true"
            />
            <div className="modal__content">
              <span className="eyebrow">Projekt · {selected.location}</span>
              <h3 id="project-title" className="heading-lg" style={{ margin: "18px 0 10px" }}>
                {selected.name}
              </h3>
              <p className="modal__demo-note label">Fiktiver Demo-Projektfall</p>
              <p className="body-lg" style={{ color: "var(--color-ink)" }}>
                {selected.summary}
              </p>
              <div className="modal__meta label">
                <span>{selected.scope}</span>
              </div>
              <div className="prow__tags" style={{ marginBottom: 4 }}>
                {selected.tags.map((t) => (
                  <span key={t} className="tag">
                    {t}
                  </span>
                ))}
              </div>
              <p className="body-md" style={{ marginTop: 18 }}>
                {selected.detail}
              </p>
              <a
                href="#kontakt"
                className="btn btn--primary"
                style={{ marginTop: 28 }}
                onClick={() => setSelected(null)}
              >
                <ArrowUpRight /> Ähnliches Projekt besprechen
              </a>
            </div>
          </>
        )}
      </Modal>
    </section>
  );
}
