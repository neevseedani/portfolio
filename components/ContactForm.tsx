"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const name = data.get("name") as string;
      const email = data.get("email") as string;
      const message = data.get("message") as string;
      const mailto = `mailto:neev@stanford.edu?subject=Portfolio contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${email}\n\n${message}`)}`;
      window.location.href = mailto;
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
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
            {status === "sending" ? "Sending…" : status === "sent" ? "Sent!" : "Send message"}
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
    </>
  );
}
