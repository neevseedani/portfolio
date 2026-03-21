"use client";

import { useState } from "react";

const WEB3FORMS_ACCESS_KEY = "259878c6-f43b-4698-bf1f-f2f8dc320dd3";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);
    data.append("access_key", WEB3FORMS_ACCESS_KEY);
    data.append("subject", `Portfolio contact from ${data.get("name")}`);
    data.append("from_name", "seedani.com contact form");

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = await res.json();
      if (json.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {status === "sent" ? (
        <div className="rounded-xl border border-[var(--border)] bg-[var(--background-alt)] px-8 py-10 text-center">
          <p className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">Message sent!</p>
          <p className="text-[var(--text-secondary)] text-sm">Thanks for reaching out — I'll get back to you soon.</p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-6 text-[var(--accent)] text-sm font-medium hover:underline underline-offset-4"
          >
            Send another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              autoComplete="name"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-0"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              autoComplete="email"
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-0"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-semibold text-[var(--text-primary)] mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:border-[var(--accent)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-0 resize-y min-h-[120px]"
              placeholder="Tell me about your project or just say hello!"
            />
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors disabled:opacity-70 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              {status === "sending" ? "Sending…" : "Send message"}
            </button>
            <a
              href="mailto:neev@stanford.edu"
              className="inline-flex items-center justify-center rounded-full border-2 border-[var(--border-strong)] px-6 py-3.5 text-base font-semibold text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
            >
              neev@stanford.edu
            </a>
          </div>
          {status === "error" && (
            <p className="text-[var(--accent-dark)] text-sm">
              Something went wrong. Please email neev@stanford.edu directly.
            </p>
          )}
        </form>
      )}
    </>
  );
}
