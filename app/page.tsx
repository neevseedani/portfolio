"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
  const [copied, setCopied] = useState(false);

  function handleCopyEmail(e: React.MouseEvent) {
    e.preventDefault();
    navigator.clipboard.writeText("neev@stanford.edu").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

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
              "linear-gradient(to bottom, rgba(8,6,4,0.55) 0%, rgba(8,6,4,0.22) 50%, rgba(8,6,4,0.52) 100%)",
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
              className="font-display font-bold text-white leading-[0.88] group cursor-default"
              style={{ fontSize: "clamp(3.5rem, 11vw, 18rem)", letterSpacing: "-0.05em" }}
            >
              <span className="block">
                <span className="relative inline-block">
                  NEEV
                  <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out" style={{ background: "rgba(255,255,255,0.50)" }} aria-hidden />
                </span>
              </span>
              <span className="block" style={{ color: "rgba(255,255,255,0.82)" }}>
                <span className="relative inline-block">
                  SEEDANI
                  <span className="absolute bottom-0 left-0 h-[3px] w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out delay-75" style={{ background: "rgba(255,255,255,0.38)" }} aria-hidden />
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
              className="mt-7 text-base sm:text-lg leading-relaxed max-w-xl"
              style={{
                color: "rgba(255,255,255,1)",
                textShadow: "0 1px 8px rgba(0,0,0,0.55), 0 4px 24px rgba(0,0,0,0.35)",
              }}
            >
              Stanford sophomore studying Psychology & Design. I build bubbly, intuitive products at the intersection of design and engineering.
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              onClick={handleCopyEmail}
              className="mt-4 inline-flex items-center gap-1.5 font-medium text-sm tracking-wide focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded cursor-pointer relative overflow-hidden group/email"
              style={{ color: copied ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.72)", transition: "color 0.2s ease" }}
              aria-label="Copy email address"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span
                    key="copied"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex items-center gap-1.5"
                  >
                    copied!
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </motion.span>
                ) : (
                  <motion.span
                    key="email"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.18 }}
                    className="inline-flex items-center gap-1.5"
                  >
                    neev@stanford.edu
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      <rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
                    </svg>
                    <span
                      className="opacity-0 group-hover/email:opacity-100 -translate-x-1 group-hover/email:translate-x-0 transition-all duration-300 ease-out text-xs tracking-wide"
                      style={{ color: "rgba(255,255,255,0.55)" }}
                      aria-hidden
                    >
                      copy?
                    </span>
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
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
              Selected Works
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

    </>
  );
}
