"use client";

import { useState } from "react";
import { ArrowUpRight } from "./icons";

type Fields = {
  name: string;
  email: string;
  phone: string;
  projekt: string;
  message: string;
};

const EMPTY: Fields = { name: "", email: "", phone: "", projekt: "", message: "" };

const PROJEKT_OPTIONS = [
  "Masterbad",
  "Spa-Bad",
  "Gäste-WC",
  "Natursteinbad",
  "Dachgeschossbad",
  "Komplettsanierung",
  "Noch unklar",
];

export function Contact() {
  const [values, setValues] = useState<Fields>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const validate = (): boolean => {
    const next: Partial<Record<keyof Fields, string>> = {};
    if (values.name.trim().length < 2) next.name = "Bitte Namen angeben";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim()))
      next.email = "Gültige E-Mail-Adresse angeben";
    if (values.phone.trim().length < 5) next.phone = "Bitte Telefonnummer angeben";
    if (!values.projekt) next.projekt = "Bitte Projektart wählen";
    if (values.message.trim().length < 10) next.message = "Bitte kurz das Vorhaben beschreiben";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // Demo: keine echte Backend-Anbindung.
      setSent(true);
    }
  };

  if (sent) {
    return (
      <div className="form__success" role="status" aria-live="polite">
        <span className="form__success-mark" aria-hidden="true">
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path d="M4 11.5L9 16L18 6" stroke="#fff" strokeWidth="1.6" />
          </svg>
        </span>
        <h3 className="heading-md" style={{ color: "var(--color-on-dark)" }}>
          Vielen Dank, {values.name.split(" ")[0] || "und bis bald"}.
        </h3>
        <p style={{ color: "var(--color-on-dark-muted)", lineHeight: 1.6 }}>
          Ihre Anfrage zu „{values.projekt}“ ist eingegangen. Wir melden uns in der Regel innerhalb
          eines Werktags für ein erstes, unverbindliches Gespräch.
        </p>
        <button
          className="btn btn--photo"
          style={{ width: "fit-content", marginTop: 6 }}
          onClick={() => {
            setValues(EMPTY);
            setSent(false);
          }}
        >
          Weitere Anfrage senden
        </button>
        <p className="form__note" style={{ marginTop: 4 }}>
          Hinweis: Dies ist eine fiktive Demo-Website. Es werden keine Daten übertragen oder
          gespeichert.
        </p>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form__row form__row--2">
        <Field label="Name" error={errors.name} id="f-name">
          <input
            id="f-name"
            type="text"
            value={values.name}
            onChange={set("name")}
            placeholder="Ihr Name"
            autoComplete="name"
          />
        </Field>
        <Field label="E-Mail" error={errors.email} id="f-email">
          <input
            id="f-email"
            type="email"
            value={values.email}
            onChange={set("email")}
            placeholder="name@beispiel.de"
            autoComplete="email"
          />
        </Field>
      </div>

      <div className="form__row form__row--2">
        <Field label="Telefon" error={errors.phone} id="f-phone">
          <input
            id="f-phone"
            type="tel"
            value={values.phone}
            onChange={set("phone")}
            placeholder="+49 …"
            autoComplete="tel"
          />
        </Field>
        <Field label="Projektart" error={errors.projekt} id="f-projekt">
          <select id="f-projekt" value={values.projekt} onChange={set("projekt")}>
            <option value="" disabled>
              Bitte wählen
            </option>
            {PROJEKT_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <Field label="Nachricht" error={errors.message} id="f-message">
        <textarea
          id="f-message"
          value={values.message}
          onChange={set("message")}
          placeholder="Erzählen Sie uns kurz von Ihrem Raum und Ihren Wünschen."
          rows={4}
        />
      </Field>

      <button type="submit" className="btn btn--light" style={{ width: "fit-content" }}>
        <ArrowUpRight /> Beratung anfragen
      </button>

      <p className="form__note">
        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur Bearbeitung der Anfrage zu.
        Diese Demo speichert keine Daten.
      </p>
    </form>
  );
}

function Field({
  label,
  error,
  id,
  children,
}: {
  label: string;
  error?: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className={`field${error ? " field--error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <span className="field__error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
}
