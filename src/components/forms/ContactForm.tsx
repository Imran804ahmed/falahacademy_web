"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { PaperPlaneTilt, WarningCircle } from "@phosphor-icons/react";
import { siteConfig } from "@/content/site";
import { cn } from "@/lib/cn";

type Status = "idle" | "submitting" | "success" | "error";
type FieldName = "name" | "email" | "phone" | "subject" | "message";
type Errors = Partial<Record<FieldName, string>>;

const subjectOptions = ["Admission Inquiry", "General Inquiry", "Campus Visit", "School Transport", "Feedback", "Other"];

// base look comes from the `field` utility in globals.css (invalid state via aria-invalid)
const fieldClasses = "field";
// native arrow is removed for consistent styling, so draw a caret in its place
const selectClasses =
  "appearance-none bg-[url('data:image/svg+xml,%3Csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20viewBox=%270%200%2016%2016%27%20fill=%27none%27%20stroke=%27%234a5568%27%20stroke-width=%272%27%20stroke-linecap=%27round%27%20stroke-linejoin=%27round%27%3E%3Cpath%20d=%27m4%206%204%204%204-4%27/%3E%3C/svg%3E')] bg-[length:1rem] bg-[position:right_1rem_center] bg-no-repeat pr-11";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateField(name: FieldName, value: string): string | undefined {
  const v = value.trim();
  switch (name) {
    case "name":
      return v ? undefined : "Please enter your name.";
    case "email":
      if (!v) return "Please enter your email address.";
      return emailPattern.test(v) ? undefined : "Enter a valid email address, like you@example.com.";
    case "subject":
      return v ? undefined : "Please choose a subject.";
    case "message":
      return v ? undefined : "Please write a short message.";
    default:
      return undefined;
  }
}

const required: FieldName[] = ["name", "email", "subject", "message"];

function Field({
  label,
  name,
  children,
  isRequired,
  error,
  className,
}: {
  label: string;
  name: FieldName;
  children: React.ReactNode;
  isRequired?: boolean;
  error?: string;
  className?: string;
}) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label htmlFor={`contact-${name}`} className="text-sm font-bold text-fg">
        {label}
        {isRequired && (
          <span className="text-red-700" aria-hidden="true">
            {" "}
            *
          </span>
        )}
      </label>
      {children}
      <AnimatePresence initial={false}>
        {error && (
          <motion.p
            id={`contact-${name}-error`}
            role="alert"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
            className="flex items-center gap-1.5 text-xs font-semibold text-red-700"
          >
            <WarningCircle size={14} weight="fill" aria-hidden="true" />
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function Spinner() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4 animate-spin" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
      <path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

/**
 * Contact / admission inquiry form. Static site, so delivery is either a
 * static-form provider (siteConfig.contactFormEndpoint) or a pre-filled email
 * in the visitor's own mail app (siteConfig.contact.emailHref). It never claims
 * a message was sent when nothing was.
 */
export function ContactForm({ defaultSubject = "" }: { defaultSubject?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const reduce = useReducedMotion();

  const endpoint = siteConfig.contactFormEndpoint;
  const emailHref = siteConfig.contact.emailHref;
  const mode: "endpoint" | "mailto" | "none" = endpoint ? "endpoint" : emailHref ? "mailto" : "none";

  function checkField(name: FieldName, value: string) {
    const message = validateField(name, value);
    setErrors((prev) => {
      if (prev[name] === message) return prev;
      const next = { ...prev };
      if (message) next[name] = message;
      else delete next[name];
      return next;
    });
  }

  // validate on blur; once a field shows an error, re-check as the user types so it clears promptly
  const fieldProps = (name: FieldName) => ({
    id: `contact-${name}`,
    name,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `contact-${name}-error` : undefined,
    "aria-required": required.includes(name) || undefined,
    onBlur: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      checkField(name, e.currentTarget.value),
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      if (errors[name]) checkField(name, e.currentTarget.value);
    },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const value = (k: FieldName) => String(data.get(k) ?? "");

    const found: Errors = {};
    required.forEach((key) => {
      const message = validateField(key, value(key));
      if (message) found[key] = message;
    });
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      form.querySelector<HTMLElement>(`#contact-${firstInvalid}`)?.focus();
      return;
    }

    if (mode === "none") {
      setStatus("error");
      return;
    }

    if (mode === "mailto") {
      const body = [
        `Name: ${value("name")}`,
        `Email: ${value("email")}`,
        `Phone: ${value("phone")}`,
        "",
        value("message"),
      ].join("\n");
      // a mailto: URL hands off to the visitor's mail app; it is not page navigation
      window.open(`${emailHref}?subject=${encodeURIComponent(
        `${value("subject")}: ${value("name")}`
      )}&body=${encodeURIComponent(body)}`, "_self");
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        role="status"
        initial={reduce ? false : { opacity: 0, scale: 0.97, y: 8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="rounded-lg border border-emerald/30 bg-emerald-soft p-6 text-center sm:p-8"
      >
        <PaperPlaneTilt size={40} weight="duotone" className="mx-auto text-emerald" aria-hidden="true" />
        <h3 className="mt-4 text-title font-bold text-accent-strong">
          {mode === "endpoint" ? "Thank you, your message has been sent" : "Your email app should now be open"}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-fg-muted">
          {mode === "endpoint"
            ? "Our office will get back to you at the email address you provided."
            : "We've prepared your message in a new email. Please review it and press send."}
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-accent underline underline-offset-4"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate aria-busy={status === "submitting"}>
      <div className="grid gap-6 sm:grid-cols-2">
        <Field label="Name" name="name" isRequired error={errors.name}>
          <input {...fieldProps("name")} type="text" autoComplete="name" className={cn(fieldClasses)} placeholder="Your full name" />
        </Field>
        <Field label="Email" name="email" isRequired error={errors.email}>
          <input {...fieldProps("email")} type="email" autoComplete="email" className={cn(fieldClasses)} placeholder="you@example.com" />
        </Field>
        <Field label="Phone" name="phone">
          <input {...fieldProps("phone")} type="tel" autoComplete="tel" className={fieldClasses} placeholder="+92 3XX XXXXXXX" />
        </Field>
        <Field label="Subject" name="subject" isRequired error={errors.subject}>
          <select {...fieldProps("subject")} defaultValue={defaultSubject} className={cn(fieldClasses, selectClasses)}>
            <option value="" disabled>
              Select a subject
            </option>
            {subjectOptions.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </Field>
      </div>
      <Field label="Message" name="message" isRequired error={errors.message}>
        <textarea
          {...fieldProps("message")}
          rows={5}
          className={cn(fieldClasses)}
          placeholder="How can we help? For admissions, please mention your child's age and the class you're applying for."
        />
      </Field>

      {status === "error" && (
        <p role="alert" className="flex items-start gap-2 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-800">
          <WarningCircle size={18} className="mt-0.5 shrink-0" aria-hidden="true" />
          {mode === "none"
            ? `Online messages aren't connected yet. Please call ${siteConfig.contact.phone} or visit the school office during school hours.`
            : `We couldn't send your message. Please try again, or contact the school office at ${siteConfig.contact.phone}.`}
        </p>
      )}

      <div className="flex sm:justify-end">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-accent bg-accent px-8 py-4 text-body font-bold text-accent-fg shadow-[0_10px_24px_-12px_rgb(19_74_148/0.75)] transition-[transform,background-color,box-shadow,opacity] duration-300 hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-[0_16px_30px_-12px_rgb(19_74_148/0.8)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-royal active:translate-y-0 active:scale-[0.98] disabled:translate-y-0 disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? <Spinner /> : <PaperPlaneTilt size={16} weight="bold" aria-hidden="true" />}
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
