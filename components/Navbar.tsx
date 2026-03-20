"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/90 backdrop-blur-md border-b border-[var(--border)]">
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-2xl font-bold tracking-tight text-[var(--text-primary)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
          aria-label="Neev Seedani — Home"
        >
          NEEV
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href || pathname.startsWith(href + "/");
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative text-lg font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded ${
                    isActive ? "text-[var(--accent)]" : "text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
                  }`}
                >
                  {label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--accent)] rounded-full" aria-hidden />
                  )}
                </Link>
              </li>
            );
          })}
          <li>
            <span
              className="inline-flex items-center rounded-full bg-[var(--accent-muted)] px-4 py-1.5 text-sm font-semibold text-[var(--accent-dark)]"
              aria-label="Available for work"
            >
              Available for work
            </span>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-[var(--text-primary)] hover:bg-[var(--background-alt)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <>
                <path d="M3 12h18M3 6h18M3 18h18" />
              </>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[var(--border)] bg-[var(--background)]"
          >
            <ul className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 text-lg font-medium ${
                      pathname === href ? "text-[var(--accent)]" : "text-[var(--text-primary)]"
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <span className="inline-flex items-center rounded-full bg-[var(--accent-muted)] px-3 py-1.5 text-sm font-semibold text-[var(--accent-dark)]">
                  Available for work
                </span>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
