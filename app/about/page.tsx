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
  { label: "Self-study Interests", value: "Linguistics & Physics" },
  { label: "Play", value: "League of Legends & osu!" },
  { label: "Community", value: "Breakthrough Ambassador" },
  { label: "New Obsession", value: "Thai Tea" },
];

// metadata must be in a server component — moved to layout or keep as static string
// export const metadata = { ... };

export default function AboutPage() {
  return (
    <>
      {/* Full-bleed photo header */}
      <header
        className="relative -mt-[72px] overflow-hidden flex flex-col justify-end"
        style={{ minHeight: "75vh", paddingBottom: "3.5rem" }}
      >
        {/* Background photo */}
        <Image
          src="/images/about-hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden
          sizes="100vw"
        />

        {/* Gradient overlay — heavier at top for navbar, heavier at bottom for text legibility */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(to bottom, rgba(8,6,4,0.30) 0%, rgba(8,6,4,0.02) 45%, rgba(8,6,4,0.45) 100%)",
          }}
          aria-hidden
        />

        <div className="relative px-6 mx-auto max-w-[1200px] w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-3"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            About
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-display font-bold leading-[0.88]"
            style={{ fontSize: "clamp(3.5rem, 9vw, 14rem)", color: "rgba(255,255,255,0.95)", letterSpacing: "-0.05em" }}
          >
            About me
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-5 text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ color: "rgba(255,255,255,0.70)" }}
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
            <div className="flex flex-col md:flex-row md:items-start gap-14">
              <div className="flex-shrink-0 w-full sm:w-72 md:w-96">
                <div
                  className="relative w-full"
                  style={{ aspectRatio: "3/4", boxShadow: "0 12px 48px rgba(0,0,0,0.13)" }}
                >
                  <Image
                    src="/images/about/IMG_7876.jpg"
                    alt="Neev Seedani"
                    fill
                    className="object-cover"
                    style={{ objectPosition: "center 20%" }}
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 288px, 384px"
                  />
                </div>
              </div>
              <div className="flex-1 pt-2">
                <div className="space-y-6 text-base sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-lg">
                  <p>
                    I&apos;m a sophomore at Stanford double-majoring in Psychology (Visual Perception) and Design (UI/UX).
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

          {/* Photo gallery */}
          <ScrollReveal className="mb-24">
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-6">
              Photos
            </p>
            <div className="flex gap-4 overflow-x-auto pb-2 no-scrollbar" style={{ scrollbarWidth: "none" }}>
              <div
                className="relative flex-shrink-0 w-56"
                style={{ aspectRatio: "3/4", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              >
                <Image
                  src="/images/about/IMG_7512.jpg"
                  alt="Neev Seedani"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <div
                className="relative flex-shrink-0 w-56"
                style={{ aspectRatio: "3/4", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              >
                <Image
                  src="/images/about/IMG_6215.jpg"
                  alt="Neev Seedani"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <div
                className="relative flex-shrink-0 w-56"
                style={{ aspectRatio: "3/4", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              >
                <Image
                  src="/images/about/DSF5831.jpg"
                  alt="Neev Seedani"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <div
                className="relative flex-shrink-0 w-56"
                style={{ aspectRatio: "3/4", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              >
                <Image
                  src="/images/about/IMG_4047.jpg"
                  alt="Neev Seedani"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
              <div
                className="relative flex-shrink-0 w-56"
                style={{ aspectRatio: "3/4", boxShadow: "0 8px 32px rgba(0,0,0,0.10)" }}
              >
                <Image
                  src="/images/about/IMG_9736.jpg"
                  alt="Neev Seedani"
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Skills — editorial typographic index */}
          <ScrollReveal>
            <div className="border-t border-[var(--border-strong)] pt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)] mb-10">
                Toolkit
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-[var(--border)]">
                {[
                  { label: "Design", skills: designSkills },
                  { label: "Engineering", skills: engineeringSkills },
                  { label: "Methods", skills: methodsSkills },
                ].map(({ label, skills }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.5, delay: i * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
                    className="py-8 sm:py-0 sm:px-10 first:pl-0 last:pr-0"
                  >
                    <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--accent)] mb-5">
                      {label}
                    </h3>
                    <ul className="space-y-2.5">
                      {skills.map((s) => (
                        <li
                          key={s}
                          className="text-base text-[var(--text-secondary)] font-medium"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Fun facts — magazine dateline strip */}
          <ScrollReveal className="mt-20">
            <div className="border-t border-[var(--border-strong)] pt-10">
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--text-muted)] mb-10">
                Outside the studio
              </p>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-x-0 divide-y divide-[var(--border)] md:divide-y-0 md:divide-x">
                {funFacts.map(({ label, value }, i) => (
                  <motion.div
                    key={label}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{ duration: 0.4, delay: i * 0.06, ease: [0.25, 0.4, 0.25, 1] }}
                    className="px-0 md:px-5 md:first:pl-0 md:last:pr-0 py-4 md:py-2"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
                      {label}
                    </p>
                    <p className="font-display font-bold text-[var(--text-primary)] text-sm leading-snug tracking-tight">
                      {value}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Resume — editorial callout */}
          <ScrollReveal className="mt-20">
            <div
              className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8 px-10 py-10"
              style={{ background: "var(--background-alt)", borderLeft: "3px solid var(--accent)" }}
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--accent)] mb-2">
                  Full picture
                </p>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-[-0.02em]">
                  Neev Seedani
                </h2>
                <p className="text-[var(--text-muted)] text-sm mt-1">
                  Psychology & Design · Stanford University · 2028
                </p>
              </div>
              <a
                href="/Neev_Seedani_Resume.pdf"
                download="Neev_Seedani.pdf"
                className="inline-flex items-center gap-2.5 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-white tracking-wide hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 w-fit flex-shrink-0"
              >
                Download résumé
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/></svg>
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </>
  );
}
