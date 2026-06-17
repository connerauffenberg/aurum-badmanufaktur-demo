"use client";

import { useState } from "react";
import { FAQ } from "@/lib/content";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="faq section">
      <div className="wrap">
        <div className="sec-head sec-head--split">
          <span className="eyebrow" data-reveal>
            Fragen & Antworten
          </span>
          <h2 className="display-md sec-head__title" data-reveal>
            Was Eigentümer vor einer Sanierung wissen wollen.
          </h2>
        </div>

        <div className="faq__list">
          {FAQ.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className="faq__item" key={item.q} data-open={isOpen} data-reveal>
                <button
                  className="faq__q"
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  id={`faq-q-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <span className="faq__q-text">{item.q}</span>
                  <span className="faq__icon" aria-hidden="true" />
                </button>
                <div
                  className="faq__a"
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-q-${i}`}
                >
                  <div className="faq__a-inner">
                    <p className="faq__a-text">{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
