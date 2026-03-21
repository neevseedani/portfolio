"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => {
      // Transition once user scrolls past ~90% of the viewport height (hero)
      setScrolled(window.scrollY > window.innerHeight * 0.88);
    };
    onScroll(); // check on mount
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Navbar is see-through only on the home page before scrolling past the hero
  const transparent = isHome && !scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: transparent ? "transparent" : "rgba(247,244,239,0.92)",
        borderBottom: transparent ? "1px solid rgba(255,255,255,0.12)" : "1px solid var(--border)",
        backdropFilter: transparent ? "none" : "blur(12px)",
        WebkitBackdropFilter: transparent ? "none" : "blur(12px)",
      }}
    >
      <nav
        className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4"
        aria-label="Main navigation"
      >
        <Link
          href="/"
          className="font-display text-xl font-bold tracking-tight transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
          style={{ color: transparent ? "rgba(255,255,255,0.95)" : "var(--text-primary)" }}
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
                  className="relative text-sm font-medium tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded group"
                  style={{
                    color: transparent
                      ? isActive ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.65)"
                      : isActive ? "var(--text-primary)" : "var(--text-secondary)",
                    transition: "color 0.2s ease",
                  }}
                  onMouseEnter={e => {
                    if (!isActive) e.currentTarget.style.color = transparent ? "rgba(255,255,255,1)" : "var(--text-primary)";
                  }}
                  onMouseLeave={e => {
                    if (!isActive) e.currentTarget.style.color = transparent ? "rgba(255,255,255,0.65)" : "var(--text-secondary)";
                  }}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute -bottom-0.5 left-0 right-0 h-px rounded-full transition-colors duration-300"
                      style={{ background: transparent ? "rgba(255,255,255,0.60)" : "var(--accent)" }}
                      aria-hidden
                    />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]"
          style={{ color: transparent ? "rgba(255,255,255,0.90)" : "var(--text-primary)" }}
          onClick={() => setMobileOpen((o) => !o)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{mobileOpen ? "Close" : "Menu"}</span>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {mobileOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
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
            className="md:hidden border-t bg-[var(--background)]"
            style={{ borderColor: transparent ? "rgba(255,255,255,0.15)" : "var(--border)" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-2">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setMobileOpen(false)}
                    className={`block py-3 text-base font-medium ${
                      pathname === href ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
                    } focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] rounded`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
