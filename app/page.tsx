"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects, type Project } from "@/lib/projects";

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
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Mono:wght@300;400;500&display=swap');
        .hp-display { font-family: "Futura", "Century Gothic", "Trebuchet MS", sans-serif; }
        .hp-mono  { font-family: 'DM Mono', 'Courier New', monospace; }
        .hp-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .hp-email-btn {
          background: none; border: none; cursor: pointer; padding: 0;
          display: inline-flex; align-items: center; gap: 0.5rem;
          transition: opacity 0.2s;
        }
        .hp-email-btn:hover { opacity: 0.65; }
        .sw-row { display: flex; text-decoration: none; color: inherit; }
        .sw-row:hover .sw-img-inner { transform: scale(1.04); }
        .sw-img-inner { position: absolute; inset: 0; transition: transform 0.6s cubic-bezier(0.25,0.4,0.25,1); }
        .sw-row:hover .sw-overlay { opacity: 0 !important; }
        .sw-row:hover .sw-num { color: #BF5C2C !important; }
        .sw-row:hover .sw-cta { transform: translateX(5px); color: #BF5C2C !important; }
        .sw-cta { transition: transform 0.25s ease, color 0.25s ease; }
        @media (max-width: 680px) {
          .sw-row { flex-direction: column !important; }
          .sw-img-side { flex: none !important; width: 100% !important; }
        }
      `}</style>

      {/* ── HERO — full-bleed photo, name anchored at bottom ── */}
      <section
        className="relative flex flex-col overflow-hidden -mt-[72px]"
        style={{ height: "100dvh" }}
        aria-labelledby="hero-heading"
      >
        {/* Full-bleed photo */}
        <Image
          src={HERO_PHOTO}
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden
          sizes="100vw"
        />

        {/* Uniform dim overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "rgba(8,6,4,0.38)" }}
          aria-hidden
        />

        {/* Content — name centered, skills pinned to bottom */}
        <div className="relative flex-1 flex flex-col justify-between px-6 mx-auto max-w-[1200px] w-full pt-[72px] pb-10">

          {/* Center block: name + description + email */}
          <div className="flex flex-col justify-center flex-1">
            <motion.h1
              id="hero-heading"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, ease: [0.25, 0.4, 0.25, 1] }}
              className="hp-display"
              style={{
                fontSize: "clamp(4.5rem, 12vw, 16rem)",
                fontWeight: 700,
                fontStyle: "normal",
                lineHeight: 0.88,
                letterSpacing: "-0.07em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.97)",
                marginBottom: "1.75rem",
              }}
            >
              <span className="block">Neev</span>
              <span className="block" style={{ color: "rgba(255,255,255,0.80)" }}>Seedani</span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <p
                className="hp-mono"
                style={{ fontSize: "clamp(0.7rem, 1.1vw, 0.85rem)", color: "rgba(255,255,255,0.42)", lineHeight: 1.7, maxWidth: 400, marginBottom: "0.85rem" }}
              >
                Stanford sophomore studying <strong style={{ color: "rgba(255,255,255,0.75)", fontWeight: 500 }}>Computer Science &amp; Design</strong>. Building bubbly, intuitive products at the intersection of design and engineering.
              </p>

              <button
                onClick={handleCopyEmail}
                className="hp-email-btn hp-mono focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
                style={{
                  fontSize: "clamp(0.7rem, 1vw, 0.8rem)",
                  letterSpacing: "0.08em",
                  color: copied ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.45)",
                  transition: "color 0.2s ease",
                }}
                aria-label="Copy email address"
              >
                <AnimatePresence mode="wait">
                  {copied ? (
                    <motion.span key="copied" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }} className="inline-flex items-center gap-1.5">
                      copied!
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5"/></svg>
                    </motion.span>
                  ) : (
                    <motion.span key="email" initial={{ opacity: 0, y: 5 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -5 }} transition={{ duration: 0.15 }} className="inline-flex items-center gap-1.5">
                      neev@stanford.edu
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          </div>

          {/* Skills strip — pinned to bottom */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{ paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.12)" }}
          >
            <div className="flex flex-wrap items-center gap-x-0 gap-y-1">
              {skills.map((skill, i) => (
                <Fragment key={skill}>
                  <span className="hp-mono" style={{ fontSize: "clamp(0.68rem, 0.9vw, 0.78rem)", color: "rgba(255,255,255,0.40)" }}>
                    {skill}
                  </span>
                  {i < skills.length - 1 && (
                    <span className="hp-mono" style={{ color: "rgba(255,255,255,0.18)", padding: "0 0.45rem", fontSize: "0.6rem" }} aria-hidden>·</span>
                  )}
                </Fragment>
              ))}
            </div>
          </motion.div>

        </div>
      </section>

      {/* Selected Works — bento grid */}
      <section
        style={{ background: "var(--background)", padding: "5rem 0 6rem" }}
        aria-labelledby="selected-works-heading"
      >
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "2.5rem" }}
          >
            <div>
              <p className="hp-mono" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.6rem" }}>
                Portfolio
              </p>
              <h2
                id="selected-works-heading"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: "clamp(2.5rem, 5vw, 5rem)", fontWeight: 300, fontStyle: "italic", letterSpacing: "-0.03em", lineHeight: 0.88, color: "var(--text-primary)", margin: 0 }}
              >
                Selected Works
              </h2>
            </div>
            <p className="hp-mono" style={{ fontSize: 9, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", paddingBottom: "0.3rem" }}>
              {String(featured.length).padStart(2, "0")} Projects
            </p>
          </motion.div>

          {/* Magazine rows — natural image dimensions, alternating left/right */}
          <div style={{ borderBottom: "1px solid var(--border)" }}>
            {featured.map((project, i) => (
              <MagazineRow key={project.slug} project={project} index={i} priority={i < 2} />
            ))}
          </div>

          {/* Footer link */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            style={{ marginTop: "2rem", display: "flex", justifyContent: "flex-end" }}
          >
            <Link
              href="/works"
              className="hp-mono"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--accent)",
                textDecoration: "none",
                transition: "opacity 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = "0.65")}
              onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
            >
              All projects →
            </Link>
          </motion.div>

        </div>
      </section>
    </>
  );
}

// ── MagazineRow ───────────────────────────────────────────────────────────────

function MagazineRow({
  project,
  index,
  priority,
}: {
  project: Project;
  index: number;
  priority: boolean;
}) {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.09 }}
      style={{ borderTop: "1px solid var(--border)", padding: "2.5rem 0" }}
    >
      <Link
        href={`/works/${project.slug}`}
        className="sw-row"
        style={{ flexDirection: isEven ? "row" : "row-reverse" }}
        aria-label={`View case study: ${project.title}`}
      >
        {/* Image — natural aspect ratio, no cropping */}
        <div
          className="sw-img-side"
          style={{ flex: "0 0 52%", overflow: "hidden", position: "relative" }}
        >
          <div
            style={{
              position: "relative",
              aspectRatio: `${project.thumbnailWidth} / ${project.thumbnailHeight}`,
              overflow: "hidden",
            }}
          >
            <div className="sw-img-inner">
              <Image
                src={project.thumbnail}
                alt=""
                fill
                className="object-cover"
                sizes="(max-width:680px) 100vw, 52vw"
                priority={priority}
              />
            </div>
            <div
              className="sw-overlay"
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(8,6,4,0.12)",
                pointerEvents: "none",
                transition: "opacity 0.4s ease",
              }}
              aria-hidden
            />
          </div>
        </div>

        {/* Text panel */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(3.5rem, 6vw, 6rem) clamp(2rem, 4vw, 4rem)",
          }}
        >
          {/* Index + tag */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <span
              className="hp-mono sw-num"
              style={{
                fontSize: 9,
                letterSpacing: "0.2em",
                color: "var(--text-muted)",
                transition: "color 0.25s ease",
              }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <span
              style={{ width: 1, height: 10, background: "var(--border)", display: "inline-block" }}
              aria-hidden
            />
            <span
              className="hp-mono"
              style={{
                fontSize: 8,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              {project.tags[0]}
            </span>
          </div>

          {/* Title */}
          <h3
            className="hp-serif"
            style={{
              fontSize: "clamp(2rem, 3.8vw, 4.5rem)",
              fontWeight: 300,
              fontStyle: "italic",
              letterSpacing: "-0.025em",
              lineHeight: 0.92,
              color: "var(--text-primary)",
              marginBottom: "1.25rem",
            }}
          >
            {project.title}
          </h3>

          {/* Description */}
          <p
            className="hp-mono"
            style={{
              fontSize: "clamp(0.68rem, 0.82vw, 0.76rem)",
              lineHeight: 1.8,
              color: "var(--text-secondary)",
              maxWidth: 320,
              marginBottom: "2rem",
            }}
          >
            {project.shortDescription}
          </p>

          {/* Year + CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span
              className="hp-mono"
              style={{ fontSize: 9, letterSpacing: "0.14em", color: "var(--text-muted)" }}
            >
              {project.timeline}
            </span>
            <span className="hp-mono" style={{ color: "var(--border-strong)", fontSize: 9 }} aria-hidden>
              ·
            </span>
            <span
              className="hp-mono sw-cta"
              style={{
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
              }}
            >
              View →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
