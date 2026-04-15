"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const designSkills = ["Figma", "Photoshop", "InDesign", "Premiere Pro", "After Effects"];
const engineeringSkills = ["C++", "Python", "Java", "React", "Swift", "JavaScript", "MongoDB", "Electron", "TypeScript", "SQL"];
const methodsSkills = ["User Research", "Design Systems", "Prototyping", "WCAG 2.1 Accessibility", "Brand Identity"];

const skillGroups = [
  { label: "Design", skills: designSkills, color: "#BF5C2C" },
  { label: "Engineering", skills: engineeringSkills, color: "#4A9B7A" },
  { label: "Methods", skills: methodsSkills, color: "#8C7A62" },
];

// Predefined tilts — no Math.random() (hydration safe)
const funFacts = [
  { label: "Sport", value: "Collegiate Archery", rotate: -2.2, bg: "rgba(191,92,44,0.07)", border: "rgba(191,92,44,0.18)" },
  { label: "Self-study", value: "Linguistics & Physics", rotate: 1.6, bg: "rgba(74,154,122,0.07)", border: "rgba(74,154,122,0.18)" },
  { label: "Play", value: "League of Legends & osu!", rotate: -1.0, bg: "rgba(140,122,98,0.07)", border: "rgba(140,122,98,0.18)" },
  { label: "Community", value: "Breakthrough Ambassador", rotate: 2.4, bg: "rgba(191,92,44,0.05)", border: "rgba(191,92,44,0.13)" },
  { label: "New Obsession", value: "Thai Tea 🧋", rotate: -1.8, bg: "rgba(205,133,63,0.07)", border: "rgba(205,133,63,0.18)" },
];

const galleryPhotos = [
  { src: "/images/about/IMG_7512.jpg", rotate: -3.2 },
  { src: "/images/about/IMG_6215.jpg", rotate: 2.1 },
  { src: "/images/about/DSF5831.jpg", rotate: -1.4 },
  { src: "/images/about/IMG_4047.jpg", rotate: 3.0 },
  { src: "/images/about/IMG_9736.jpg", rotate: -0.9 },
];

export default function AboutPage() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Mono:wght@300;400;500&display=swap');
        .ab2-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .ab2-mono  { font-family: 'DM Mono', 'Courier New', monospace; }
        .ab2-skill-pill { transition: background 0.18s ease, color 0.18s ease, border-color 0.18s ease; }
        .ab2-bio-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: center; }
        .ab2-skills-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 3rem; }
        @media (max-width: 768px) {
          .ab2-bio-grid { grid-template-columns: 1fr; gap: 2.5rem; }
          .ab2-skills-grid { grid-template-columns: 1fr; gap: 2rem; }
        }
      `}</style>

      {/* ── Header — dark, matching works page ── */}
      <header style={{ background: "var(--dark)", position: "relative", overflow: "hidden", marginTop: -72 }}>
        {/* Dim hero photo as texture */}
        <Image
          src="/images/about-hero.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden
          sizes="100vw"
          style={{ opacity: 0.45 }}
        />
        <div
          style={{ position: "absolute", inset: 0, background: "linear-gradient(160deg, rgba(13,10,7,0.60) 0%, rgba(13,10,7,0.30) 100%)" }}
          aria-hidden
        />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "calc(72px + clamp(2rem, 6vh, 5rem)) 2rem 3rem" }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="ab2-mono"
            style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.28)", marginBottom: "1rem" }}
          >
            About
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="ab2-serif"
            style={{
              fontSize: "clamp(5rem, 13vw, 13rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 0.84,
              letterSpacing: "-0.035em",
              color: "rgba(255,255,255,0.93)",
            }}
          >
            About me
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="ab2-mono"
            style={{ marginTop: "1.75rem", fontSize: "clamp(0.7rem, 1.4vw, 0.9rem)", color: "rgba(255,255,255,0.38)", maxWidth: 480, lineHeight: 1.7 }}
          >
            Designer + engineer, Stanford sophomore.
            <br />Building at the intersection of computer science, design, and technology.
          </motion.p>
        </div>
      </header>

      {/* ── Content ── */}
      <div style={{ background: "var(--background)", color: "var(--text-primary)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem 6rem" }}>

          {/* ── Bio — offset portrait + pull quote ── */}
          <section style={{ paddingTop: "5rem", paddingBottom: "5rem", borderBottom: "1px solid var(--border)" }}>
            <div className="ab2-bio-grid">

              {/* Tilted portrait — straightens on hover */}
              <motion.div
                initial={{ opacity: 0, x: -24, rotate: -1.8 }}
                whileInView={{ opacity: 1, x: 0, rotate: -1.8 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ rotate: 0, scale: 1.025 }}
                style={{
                  position: "relative",
                  aspectRatio: "3/4",
                  boxShadow: "0 24px 72px rgba(0,0,0,0.2)",
                  overflow: "hidden",
                  cursor: "default",
                  transformOrigin: "center bottom",
                }}
              >
                <Image
                  src="/images/about/IMG_7876.jpg"
                  alt="Neev Seedani"
                  fill
                  className="object-cover"
                  style={{ objectPosition: "center 20%" }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                {/* subtle warm scrim */}
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(191,92,44,0.08) 0%, transparent 40%)" }} aria-hidden />
              </motion.div>

              {/* Bio text */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <p className="ab2-mono" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
                  Background
                </p>
                <blockquote
                  className="ab2-serif"
                  style={{
                    fontSize: "clamp(1.5rem, 2.8vw, 2.4rem)",
                    fontWeight: 300,
                    fontStyle: "italic",
                    lineHeight: 1.3,
                    color: "var(--text-primary)",
                    marginBottom: "2.25rem",
                    letterSpacing: "-0.02em",
                    borderLeft: "2px solid var(--accent)",
                    paddingLeft: "1.25rem",
                  }}
                >
                  "Bubbly, intuitive experiences — where computer science meets design."
                </blockquote>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", fontSize: "clamp(0.875rem, 1.4vw, 1.05rem)", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                  <p>
                    I&apos;m a sophomore at Stanford double-majoring in Computer Science and Design (UI/UX). I specialize in bubbly, intuitive experiences — with 3 years of work across product design, design systems, and full-stack projects.
                  </p>
                  <p>
                    I&apos;m Pakistani American, from Duluth, Georgia, and now based at Stanford, CA. I care deeply about accessibility, mental health advocacy, and community building.
                  </p>
                  <p>
                    Outside of design and code, I&apos;m a Breakthrough Ambassador, on the Collegiate Archery team, do linguistics research, and serve as A3C Publicity Manager.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* ── Fun facts — tilted sticker cards ── */}
          <section style={{ paddingTop: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="ab2-mono"
              style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "2.5rem" }}
            >
              Outside the studio
            </motion.p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "1.25rem" }}>
              {funFacts.map(({ label, value, rotate, bg, border }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20, rotate }}
                  whileInView={{ opacity: 1, y: 0, rotate }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ rotate: 0, scale: 1.06, y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
                  style={{
                    background: bg,
                    border: `1px solid ${border}`,
                    borderRadius: 4,
                    padding: "1.25rem 1.75rem",
                    cursor: "default",
                    minWidth: 170,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
                    transformOrigin: "center center",
                  }}
                >
                  <p className="ab2-mono" style={{ fontSize: 8, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.6rem" }}>
                    {label}
                  </p>
                  <p className="ab2-serif" style={{ fontSize: "1.3rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.2 }}>
                    {value}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Photo gallery — scattered tilts, hover to straighten ── */}
          <section style={{ paddingTop: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="ab2-mono"
              style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "2rem" }}
            >
              Photos
            </motion.p>
            {/* Padding gives room for hover scale/shadow inside the scroll container; negative margin cancels visual indent */}
            <div
              className="no-scrollbar"
              style={{ overflowX: "auto", padding: "2rem", margin: "-2rem" }}
            >
              <div style={{ display: "flex", gap: "1.25rem" }}>
              {galleryPhotos.map(({ src, rotate }, i) => (
                <motion.div
                  key={src}
                  initial={{ opacity: 0, y: 24, rotate }}
                  whileInView={{ opacity: 1, y: 0, rotate }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.55, delay: i * 0.07 }}
                  whileHover={{ rotate: 0, scale: 1.05, zIndex: 10, boxShadow: "0 24px 56px rgba(0,0,0,0.22)" }}
                  style={{
                    position: "relative",
                    flexShrink: 0,
                    width: 210,
                    aspectRatio: "3/4",
                    boxShadow: "0 8px 28px rgba(0,0,0,0.13)",
                    overflow: "hidden",
                    cursor: "zoom-in",
                    transformOrigin: "center bottom",
                  }}
                >
                  <Image src={src} alt="Neev Seedani" fill className="object-cover" sizes="210px" />
                </motion.div>
              ))}
              </div>
            </div>
          </section>

          {/* ── Skills — hoverable pills ── */}
          <section style={{ paddingTop: "4rem", paddingBottom: "4rem", borderBottom: "1px solid var(--border)" }}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="ab2-mono"
              style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "2.5rem" }}
            >
              Toolkit
            </motion.p>
            <div className="ab2-skills-grid">
              {skillGroups.map(({ label, skills, color }, gi) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: gi * 0.1 }}
                >
                  <p className="ab2-mono" style={{ fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", color, marginBottom: "1.25rem" }}>
                    {label}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                    {skills.map((skill, si) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.25, delay: gi * 0.08 + si * 0.04 }}
                        whileHover={{ backgroundColor: color, color: "#fff", borderColor: color, scale: 1.04 }}
                        className="ab2-mono ab2-skill-pill"
                        style={{
                          fontSize: "0.72rem",
                          padding: "0.35rem 0.85rem",
                          border: "1px solid var(--border-strong)",
                          borderRadius: 3,
                          color: "var(--text-secondary)",
                          background: "var(--background-alt)",
                          cursor: "default",
                          display: "inline-block",
                        }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* ── Resume ── */}
          <section style={{ paddingTop: "4rem" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
              <div>
                <p className="ab2-serif" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, fontStyle: "italic", color: "var(--text-primary)", lineHeight: 1.2, letterSpacing: "-0.02em" }}>
                  Want the full story?
                </p>
                <p className="ab2-mono" style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "0.5rem", letterSpacing: "0.1em" }}>
                  Download the PDF résumé
                </p>
              </div>
              <motion.a
                href="/Neev_Seedani_Resume.pdf"
                download="Neev_Seedani.pdf"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="ab2-mono"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  background: "var(--dark)",
                  color: "rgba(255,255,255,0.88)",
                  padding: "1rem 2rem",
                  borderRadius: 3,
                  fontSize: "0.7rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Download résumé
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
                </svg>
              </motion.a>
            </div>
          </section>

        </div>
      </div>
    </>
  );
}
