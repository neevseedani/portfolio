"use client";

import Link from "next/link";

const socialLinks = [
  { href: "https://linkedin.com/in/neevseedani", label: "LinkedIn", external: true },
  { href: "https://github.com/neevseedani", label: "GitHub", external: true },
  { href: "mailto:neev@stanford.edu", label: "Email", external: true },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--dark)" }}>
      <div className="mx-auto max-w-[1200px] px-6 py-14">
        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p
              className="font-display text-2xl font-bold tracking-tight"
              style={{ color: "rgba(255,255,255,0.90)" }}
            >
              NEEV SEEDANI
            </p>
            <p
              className="mt-1.5 text-sm"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Designer & Developer · Stanford University
            </p>
          </div>

          <nav aria-label="Social links">
            <ul className="flex items-center gap-7">
              {socialLinks.map(({ href, label, external }) => (
                <li key={label}>
                  <Link
                    href={href}
                    {...(external && { target: "_blank", rel: "noopener noreferrer" })}
                    className="text-sm font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.90)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
            © {new Date().getFullYear()} Neev Seedani
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
            Built with Next.js · Barlow & DM Sans
          </p>
        </div>
      </div>
    </footer>
  );
}
