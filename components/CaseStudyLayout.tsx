"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";
import type { CaseStudyContent, GalleryImage } from "@/lib/case-studies";

const LANDSCAPE_THRESHOLD = 1.4;

interface CaseStudyLayoutProps {
  project: Project;
  content: CaseStudyContent | undefined;
}

export default function CaseStudyLayout({ project, content }: CaseStudyLayoutProps) {
  const hasGallery = (content?.galleryImages?.length ?? 0) > 0;

  // Section numbers shift if gallery is inline
  const sectionNums = hasGallery
    ? { overview: "01", role: "02", process: "03", visuals: "04", outcomes: "05", reflection: "06" }
    : { overview: "01", role: "02", process: "03", outcomes: "04", reflection: "05" };

  return (
    <article>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Mono:wght@300;400;500&display=swap');
        .cs-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .cs-mono  { font-family: 'DM Mono', 'Courier New', monospace; }
        .cs-section-grid {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 4rem;
          padding: 4rem 0;
        }
        @media (max-width: 768px) {
          .cs-section-grid { grid-template-columns: 1fr; gap: 1.25rem; padding: 3rem 0; }
        }
        .cs-process-row {
          display: grid;
          grid-template-columns: 72px 1fr;
          gap: 2rem;
          padding: 2.25rem 0;
          border-top: 1px solid var(--border);
        }
        @media (max-width: 640px) {
          .cs-process-row { grid-template-columns: 44px 1fr; gap: 1rem; }
        }
        .cs-outcome-item:last-child { border-bottom: none !important; }
        .cs-back-link { transition: color 0.2s ease; }
        .cs-back-link:hover { color: var(--accent) !important; }
        .cs-gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }
        @media (max-width: 640px) {
          .cs-gallery-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HEADER — pulls behind fixed navbar ── */}
      <header
        style={{
          background: "var(--dark)",
          marginTop: -72,
          paddingTop: "calc(72px + clamp(2.5rem, 7vh, 5rem))",
          paddingBottom: "4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle grain */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            opacity: 0.035,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "192px 192px",
            pointerEvents: "none",
          }}
          aria-hidden
        />

        <div style={{ position: "relative", maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>

          {/* Back link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/works"
              className="cs-mono cs-back-link"
              style={{
                display: "block",
                fontSize: 9,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.28)",
                textDecoration: "none",
                marginBottom: "2rem",
              }}
            >
              ← All works
            </Link>
          </motion.div>

          {/* Tags */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.75rem" }}
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="cs-mono"
                style={{
                  fontSize: 8,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.38)",
                  border: "1px solid rgba(255,255,255,0.13)",
                  padding: "3px 10px",
                  borderRadius: 2,
                }}
              >
                {tag}
              </span>
            ))}
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="cs-serif"
            style={{
              fontSize: "clamp(3rem, 8vw, 9rem)",
              fontWeight: 300,
              fontStyle: "italic",
              lineHeight: 0.88,
              letterSpacing: "-0.03em",
              color: "rgba(255,255,255,0.95)",
              marginBottom: "2.5rem",
            }}
          >
            {project.title}
          </motion.h1>

          {/* Metadata row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.38 }}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.5rem 3rem",
              paddingTop: "1.5rem",
              borderTop: "1px solid rgba(255,255,255,0.09)",
            }}
          >
            {[
              { label: "Role", value: project.role },
              { label: "Year", value: project.timeline },
              { label: "Client", value: project.company },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  className="cs-mono"
                  style={{ fontSize: 7, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.22)", marginBottom: "0.3rem" }}
                >
                  {label}
                </p>
                <p
                  className="cs-mono"
                  style={{ fontSize: 11, letterSpacing: "0.06em", color: "rgba(255,255,255,0.58)" }}
                >
                  {value}
                </p>
              </div>
            ))}
          </motion.div>

        </div>
      </header>

      {/* ── HERO IMAGE ── */}
      <div style={{ background: "var(--background-alt)" }}>
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: `${project.thumbnailWidth} / ${project.thumbnailHeight}`,
            maxHeight: "78vh",
          }}
        >
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>
      </div>

      {/* ── VIDEO ── */}
      {content?.videoUrl && (
        <div style={{ maxWidth: 1200, margin: "4rem auto 0", padding: "0 2rem" }}>
          <div style={{ position: "relative", width: "100%", aspectRatio: "16/9" }}>
            <iframe
              src={content.videoUrl}
              title="Project video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                border: "none",
                borderRadius: 3,
              }}
            />
          </div>
        </div>
      )}

      {/* ── CONTENT ── */}
      {content ? (
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 2rem 6rem" }}>

          <Divider />

          {/* Overview */}
          <SectionBlock number={sectionNums.overview} label="Overview">
            <p
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                lineHeight: 1.8,
                color: "var(--text-secondary)",
              }}
            >
              {content.overview}
            </p>
          </SectionBlock>

          <Divider />

          {/* My Role */}
          <SectionBlock number={sectionNums.role} label="My Role">
            <p
              style={{
                fontSize: "clamp(1rem, 1.7vw, 1.2rem)",
                lineHeight: 1.85,
                color: "var(--text-secondary)",
              }}
            >
              {content.myRole}
            </p>
          </SectionBlock>

          <Divider />

          {/* Process */}
          <SectionBlock number={sectionNums.process} label="Process">
            <div>
              {content.process.map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="cs-process-row"
                >
                  <span
                    className="cs-serif"
                    style={{
                      fontSize: "clamp(2rem, 3.5vw, 3rem)",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "var(--border-strong)",
                      lineHeight: 1,
                      paddingTop: "0.2rem",
                      userSelect: "none",
                    }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3
                      className="cs-serif"
                      style={{
                        fontSize: "clamp(1.2rem, 2vw, 1.6rem)",
                        fontWeight: 600,
                        color: "var(--text-primary)",
                        letterSpacing: "-0.01em",
                        lineHeight: 1.2,
                        marginBottom: "0.65rem",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p
                      style={{
                        fontSize: "clamp(0.875rem, 1.4vw, 1rem)",
                        lineHeight: 1.85,
                        color: "var(--text-secondary)",
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </SectionBlock>

          <Divider />

          {/* Gallery */}
          {hasGallery && (
            <>
              <SectionBlock number={sectionNums.visuals!} label="Visuals">
                <div className="cs-gallery-grid">
                  {content.galleryImages!.map((img: GalleryImage, i) => {
                    const ratio = img.width / img.height;
                    const isLandscape = img.fullWidth || ratio >= LANDSCAPE_THRESHOLD;
                    return (
                      <motion.div
                        key={img.src}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.5, delay: i * 0.07 }}
                        style={{
                          gridColumn: isLandscape ? "1 / -1" : "span 1",
                          position: "relative",
                          aspectRatio: `${img.width} / ${img.height}`,
                          background: "var(--background-alt)",
                          overflow: "hidden",
                          borderRadius: 3,
                        }}
                      >
                        <Image
                          src={img.src}
                          alt={`${project.title} — visual ${i + 1}`}
                          fill
                          className="object-contain"
                          sizes={isLandscape ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                        />
                      </motion.div>
                    );
                  })}
                </div>
              </SectionBlock>
              <Divider />
            </>
          )}

          {/* Outcomes */}
          <SectionBlock number={sectionNums.outcomes} label="Outcomes">
            <ul style={{ margin: 0, padding: 0, listStyle: "none" }}>
              {content.outcomes.map((outcome, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="cs-outcome-item"
                  style={{
                    display: "flex",
                    gap: "1.25rem",
                    alignItems: "flex-start",
                    fontSize: "clamp(1rem, 1.6vw, 1.15rem)",
                    lineHeight: 1.6,
                    color: "var(--text-secondary)",
                    padding: "1rem 0",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <span
                    style={{
                      color: "var(--accent)",
                      flexShrink: 0,
                      marginTop: "0.2rem",
                      fontFamily: "serif",
                    }}
                    aria-hidden
                  >
                    →
                  </span>
                  {outcome}
                </motion.li>
              ))}
            </ul>
          </SectionBlock>

          <Divider />

          {/* Reflection */}
          <SectionBlock number={sectionNums.reflection} label="Reflection">
            <blockquote
              className="cs-serif"
              style={{
                fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 1.5,
                color: "var(--text-primary)",
                borderLeft: "2px solid var(--accent)",
                paddingLeft: "1.5rem",
                margin: 0,
                letterSpacing: "-0.01em",
              }}
            >
              {content.reflection}
            </blockquote>
          </SectionBlock>
        </div>
      ) : (
        /* Fallback — no content file yet */
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2rem 2rem 6rem" }}>
          <Divider />
          <SectionBlock number="01" label="Overview">
            <p style={{ fontSize: "clamp(1.1rem, 2vw, 1.35rem)", lineHeight: 1.8, color: "var(--text-secondary)" }}>
              {project.shortDescription}
            </p>
          </SectionBlock>
        </div>
      )}

      {/* ── BACK NAVIGATION ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "2rem 2rem 5rem",
          borderTop: "1px solid var(--border)",
        }}
      >
        <Link
          href="/works"
          className="cs-mono cs-back-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            fontSize: 9,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            textDecoration: "none",
            paddingTop: "0.5rem",
          }}
        >
          ← View all projects
        </Link>
      </div>
    </article>
  );
}

/* ── Sub-components ── */

function SectionBlock({
  number,
  label,
  children,
}: {
  number: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
      className="cs-section-grid"
    >
      {/* Left label column */}
      <div style={{ paddingTop: "0.2rem" }}>
        <p
          className="cs-mono"
          style={{
            fontSize: 8,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "var(--text-muted)",
            marginBottom: "0.4rem",
          }}
        >
          {number}
        </p>
        <p
          className="cs-mono"
          style={{
            fontSize: 9,
            letterSpacing: "0.16em",
            textTransform: "uppercase",
            color: "var(--accent)",
          }}
        >
          {label}
        </p>
      </div>
      {/* Right content column */}
      <div>{children}</div>
    </motion.div>
  );
}

function Divider() {
  return (
    <hr
      style={{
        border: "none",
        borderTop: "1px solid var(--border)",
        margin: 0,
      }}
    />
  );
}
