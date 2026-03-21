"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const designSkills = ["Figma", "Photoshop", "InDesign", "Premiere Pro", "After Effects"];
const engineeringSkills = ["C++", "Python", "Java", "React", "Swift", "JavaScript", "MongoDB", "Electron", "TypeScript", "SQL"];
const methodsSkills = ["User Research", "Design Systems", "Prototyping", "WCAG 2.1 Accessibility", "Brand Identity"];

const funFacts = [
  { label: "Sport", value: "Collegiate Archery" },
  { label: "Research", value: "Linguistics" },
  { label: "Play", value: "Gaming & osu!" },
  { label: "Community", value: "Breakthrough Ambassador" },
  { label: "Role", value: "A3C Publicity Manager" },
];

// metadata must be in a server component — moved to layout or keep as static string
// export const metadata = { ... };

export default function AboutPage() {
  return (
    <>
      {/* Dark cinematic header */}
      <header
        className="relative -mt-[72px] overflow-hidden flex flex-col justify-end"
        style={{ background: "var(--dark)", minHeight: "46vh", paddingBottom: "3.5rem" }}
      >
        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: 0.04, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")", backgroundSize: "192px 192px" }}
          aria-hidden
        />
        <div className="relative px-6 mx-auto max-w-[1200px] w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "rgba(255,255,255,0.35)" }}
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-display font-bold leading-[0.90]"
            style={{ fontSize: "clamp(2.8rem,7vw,6rem)", color: "rgba(255,255,255,0.95)", letterSpacing: "-0.04em" }}
          >
            About me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-lg max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            Designer + engineer, Stanford sophomore.
          </motion.p>
        </div>
      </header>

      {/* Cream content */}
      <div className="px-6 py-16" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-[1200px]">

          {/* Bio + photo */}
          <ScrollReveal className="mb-24">
            <div className="flex flex-col md:flex-row md:items-start gap-12">
              <div className="flex-shrink-0">
                <div className="relative w-56 h-56 rounded-2xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/about/neev.webp"
                    alt="Neev Seedani"
                    width={224}
                    height={224}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
              <div className="flex-1 pt-1">
                <div className="space-y-4 text-base text-[var(--text-secondary)] leading-relaxed max-w-lg">
                  <p>
                    I&apos;m a sophomore at Stanford double-majoring in Design (UI/UX) and Computer Science (HCI).
                    I specialize in bubbly, intuitive experiences — with 3 years of work across product design, design systems, and full-stack projects.
                  </p>
                  <p>
                    I&apos;m Pakistani American, from Duluth, Georgia, and now based at Stanford, CA.
                    I care deeply about accessibility, mental health advocacy, and community building.
                  </p>
                  <p>
                    Outside of design and code, I&apos;m a Breakthrough Ambassador, on the Collegiate Archery team,
                    do linguistics research, and serve as A3C Publicity Manager.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Skills grid */}
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
              Toolkit
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8 tracking-[-0.02em]">
              Skills & tools
            </h2>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                { label: "Design", skills: designSkills },
                { label: "Engineering", skills: engineeringSkills },
                { label: "Methods", skills: methodsSkills },
              ].map(({ label, skills }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.45, delay: i * 0.1, ease: [0.25, 0.4, 0.25, 1] }}
                  className="rounded-2xl border border-[var(--border)] bg-[var(--background-alt)] p-6"
                >
                  <h3 className="font-display text-base font-bold text-[var(--text-primary)] mb-4 tracking-tight">
                    {label}
                  </h3>
                  <ul className="flex flex-wrap gap-2">
                    {skills.map((s) => (
                      <li key={s}>
                        <span className="rounded-lg border border-[var(--border)] bg-[var(--background)] px-2.5 py-1 text-[13px] font-medium text-[var(--text-secondary)]">
                          {s}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Fun facts */}
          <ScrollReveal className="mt-20">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
              Outside the studio
            </p>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-6 tracking-[-0.02em]">
              Fun facts
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {funFacts.map(({ label, value }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: [0.25, 0.4, 0.25, 1] }}
                  className="rounded-xl border border-[var(--border)] bg-[var(--background-alt)] px-5 py-4"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1">
                    {label}
                  </p>
                  <p className="font-display font-bold text-[var(--text-primary)] text-lg tracking-tight">
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </ScrollReveal>

          {/* Resume */}
          <ScrollReveal className="mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 py-8 border-t border-[var(--border)]">
            <div>
              <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-1 tracking-[-0.01em]">
                Resume
              </h2>
              <p className="text-[var(--text-secondary)] text-sm">Download my resume as a PDF.</p>
            </div>
            <a
              href="/Neev_Seedani_Resume.pdf"
              download
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white tracking-wide hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 w-fit"
            >
              Download PDF
            </a>
          </ScrollReveal>

          <ScrollReveal className="mt-12">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded text-sm tracking-wide"
            >
              Get in touch <span aria-hidden>→</span>
            </Link>
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
