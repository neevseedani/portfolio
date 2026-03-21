"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

const HERO_PHOTO = "/images/hero.jpg";

const skills = [
  "Figma",
  "React",
  "Swift",
  "TypeScript",
  "Framer",
  "User Research",
  "Design Systems",
  "WCAG Accessibility",
  "Brand Identity",
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero — pulls up behind the fixed navbar */}
      <section
        className="relative min-h-screen flex flex-col overflow-hidden -mt-[72px]"
        aria-labelledby="hero-heading"
      >
        {/* Background photo */}
        <Image
          src={HERO_PHOTO}
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden
          sizes="100vw"
        />

        {/* Gradient overlay — heavier at top where text sits, lighter in the middle, subtle at bottom */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(8,6,4,0.55) 0%, rgba(8,6,4,0.15) 50%, rgba(8,6,4,0.40) 100%)",
          }}
          aria-hidden
        />

        {/* Content — flex column, name at top, skills pinned to bottom */}
        <div className="relative flex-1 flex flex-col justify-between px-6 mx-auto max-w-[1200px] w-full pt-[clamp(5rem,24vh,12rem)] pb-10">

          {/* Name block — lives in the sky */}
          <div>
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
              className="font-display font-bold text-white leading-[0.88]"
              style={{ fontSize: "clamp(3.5rem, 11vw, 13rem)", letterSpacing: "-0.05em" }}
            >
              <span className="block">NEEV</span>
              <span className="block" style={{ color: "rgba(255,255,255,0.82)" }}>SEEDANI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-7 text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: "rgba(255,255,255,0.92)" }}
            >
              Designer specializing in bubbly, intuitive products — with 3 years of experience at the intersection of design and engineering. Based at Stanford, California.
            </motion.p>

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              href="mailto:neev@stanford.edu"
              className="mt-4 inline-flex items-center gap-1.5 font-medium text-sm tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded"
              style={{ color: "rgba(255,255,255,0.72)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,1)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.72)")}
            >
              neev@stanford.edu
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </motion.a>
          </div>

          {/* Skills — pinned to bottom of hero */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="pt-6 border-t"
            style={{ borderColor: "rgba(255,255,255,0.18)" }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-2"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Skills & tools
            </p>
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1">
              {skills.map((skill, i) => (
                <Fragment key={skill}>
                  <span
                    className="text-sm sm:text-base"
                    style={{ color: "rgba(255,255,255,0.60)" }}
                  >
                    {skill}
                  </span>
                  {i < skills.length - 1 && (
                    <span
                      className="text-sm sm:text-base px-1"
                      style={{ color: "rgba(255,255,255,0.22)" }}
                      aria-hidden
                    >
                      ·
                    </span>
                  )}
                </Fragment>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Selected Works */}
      <section
        className="px-6 py-20 bg-[var(--background-alt)] border-y border-[var(--border)]"
        aria-labelledby="selected-works-heading"
      >
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
              Portfolio
            </p>
            <h2
              id="selected-works-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12 tracking-[-0.02em]"
            >
              Selected works
            </h2>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                priority={i < 3}
              />
            ))}
          </div>
          <ScrollReveal className="mt-12 text-center">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded text-sm tracking-wide"
            >
              See all projects
              <span aria-hidden>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* About */}
      <section className="px-6 py-24" aria-labelledby="about-heading">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-center gap-10 md:gap-16">
              {/* Photo */}
              <div className="flex-shrink-0">
                <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl overflow-hidden border border-[var(--border)]">
                  <Image
                    src="/images/about/neev.webp"
                    alt="Neev Seedani"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 192px, 224px"
                  />
                </div>
              </div>

              {/* Text */}
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-3">
                  About
                </p>
                <h2
                  id="about-heading"
                  className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-5 tracking-[-0.02em]"
                >
                  Hi, I&apos;m Neev
                </h2>
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg mb-8">
                  Sophomore at Stanford double-majoring in Design (UI/UX) and Computer Science (HCI).
                  I care deeply about accessibility, community, and making technology feel human.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[var(--accent)] font-medium hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded text-sm tracking-wide"
                >
                  Learn more about me
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA — dark, bleeds into footer */}
      <section
        className="px-6 py-24"
        style={{ background: "var(--dark)" }}
        aria-labelledby="contact-cta-heading"
      >
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <p
              className="text-[10px] font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              Get in touch
            </p>
            <h2
              id="contact-cta-heading"
              className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-[-0.02em] max-w-2xl mb-6"
              style={{ color: "rgba(255,255,255,0.92)", lineHeight: 1.05 }}
            >
              Curious about what we can create together?
            </h2>
            <p
              className="text-lg mb-10 max-w-lg leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)" }}
            >
              Let&apos;s build something bubbly and intuitive. I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap items-center gap-5">
              <a
                href="mailto:neev@stanford.edu"
                className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
                style={{ background: "var(--accent)", color: "#fff" }}
                onMouseEnter={e => (e.currentTarget.style.background = "var(--accent-hover)")}
                onMouseLeave={e => (e.currentTarget.style.background = "var(--accent)")}
              >
                Send an email
              </a>
              <a
                href="https://linkedin.com/in/neevseedani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded"
                style={{ color: "rgba(255,255,255,0.45)" }}
                onMouseEnter={e => (e.currentTarget.style.color = "rgba(255,255,255,0.90)")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.45)")}
              >
                LinkedIn <span aria-hidden>↗</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
