"use client";

import { useMemo, useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { projects, allTags, type ProjectTag } from "@/lib/projects";

const TAGS: (ProjectTag | "All")[] = ["All", ...allTags];

const TAG_SHORT: Record<string, string> = {
  "All": "All",
  "Product Design": "Design",
  "Engineering": "Eng",
  "Research": "Research",
  "Branding": "Brand",
};

export default function WorksPage() {
  const [selectedTag, setSelectedTag] = useState<ProjectTag | "All">("All");
  const [hoveredSlug, setHoveredSlug] = useState<string | null>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  const filtered = useMemo(() => {
    if (selectedTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(selectedTag));
  }, [selectedTag]);

  // Track mouse position via DOM to avoid re-renders
  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (thumbRef.current) {
      const x = e.clientX + 28;
      const y = e.clientY - 110;
      thumbRef.current.style.transform = `translate(${x}px, ${y}px)`;
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  const hoveredProject = hoveredSlug
    ? projects.find((p) => p.slug === hoveredSlug)
    : null;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&family=DM+Mono:wght@300;400;500&display=swap');
        .wv2-serif { font-family: 'Cormorant Garamond', Georgia, serif; }
        .wv2-mono  { font-family: 'DM Mono', 'Courier New', monospace; }
        .wv2-row { transition: background 0.25s ease; }
        .wv2-row:hover { background: rgba(191, 92, 44, 0.045); }
        .wv2-row:hover .wv2-num { color: #BF5C2C; }
        .wv2-row:hover .wv2-title { letter-spacing: -0.03em; }
        .wv2-row:hover .wv2-arrow { transform: translateX(6px); color: #BF5C2C; }
        .wv2-arrow { transition: transform 0.22s ease, color 0.22s ease; }
        .wv2-num   { transition: color 0.22s ease; }
        .wv2-title { transition: letter-spacing 0.3s ease; }
        .wv2-tag-btn { transition: color 0.2s, border-color 0.2s; }
        @media (max-width: 640px) {
          .wv2-meta { display: none; }
        }
      `}</style>

      {/* Floating thumbnail — container is always mounted for perf; shadow/clip live on inner div */}
      <div
        ref={thumbRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 280,
          height: 210,
          zIndex: 9998,
          pointerEvents: "none",
          willChange: "transform",
        }}
      >
        <AnimatePresence mode="wait">
          {hoveredProject && (
            <motion.div
              key={hoveredProject.slug}
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.18, ease: [0.25, 0.4, 0.25, 1] }}
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(13,10,7,0.28), 0 4px 16px rgba(13,10,7,0.14)",
              }}
            >
              <Image
                src={hoveredProject.thumbnail}
                alt=""
                fill
                className="object-cover"
                sizes="280px"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div
        className="wv2-mono"
        style={{
          background: "var(--background)",
          color: "var(--text-primary)",
          minHeight: "100vh",
        }}
      >
        {/* ── Header — pulls behind fixed navbar ── */}
        <header
          style={{
            background: "var(--dark)",
            marginTop: -72,
            paddingBottom: "2.5rem",
            paddingTop: "calc(72px + clamp(2rem, 6vh, 5rem))",
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: "0 auto",
              padding: "0 2rem",
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            {/* Large italic "Works" */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
              className="wv2-serif"
              style={{
                fontSize: "clamp(5rem, 13vw, 13rem)",
                fontWeight: 300,
                fontStyle: "italic",
                lineHeight: 0.84,
                letterSpacing: "-0.035em",
                color: "rgba(255,255,255,0.93)",
              }}
            >
              Works
            </motion.h1>

            {/* Count + descriptor */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              style={{ textAlign: "right", paddingBottom: "0.6rem", flexShrink: 0 }}
            >
              <p
                style={{
                  fontSize: 9,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.28)",
                  marginBottom: "0.4rem",
                }}
              >
                Projects
              </p>
              <p
                className="wv2-serif"
                style={{
                  fontSize: "clamp(2.5rem, 5vw, 5rem)",
                  fontWeight: 300,
                  lineHeight: 1,
                  color: "rgba(255,255,255,0.28)",
                }}
              >
                {filtered.length}
              </p>
            </motion.div>
          </div>
        </header>

        {/* ── Filter tabs ── */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.25 }}
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 2rem",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <nav
            aria-label="Filter projects"
            style={{ display: "flex", gap: 0, overflowX: "auto" }}
            className="no-scrollbar"
          >
            {TAGS.map((tag) => {
              const active = selectedTag === tag;
              return (
                <button
                  key={tag}
                  type="button"
                  onClick={() => setSelectedTag(tag)}
                  className="wv2-mono wv2-tag-btn"
                  style={{
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    padding: "1rem 1.25rem",
                    color: active ? "var(--text-primary)" : "var(--text-muted)",
                    borderBottom: active
                      ? "2px solid var(--accent)"
                      : "2px solid transparent",
                    background: "none",
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                    marginBottom: -1,
                    fontWeight: active ? 500 : 400,
                  }}
                  aria-pressed={active}
                >
                  {TAG_SHORT[tag] ?? tag}
                </button>
              );
            })}
          </nav>
        </motion.div>

        {/* ── Project rows ── */}
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 2rem 6rem",
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{
                  layout: { duration: 0.3 },
                  opacity: { duration: 0.32, delay: i * 0.055 },
                  y: { duration: 0.32, delay: i * 0.055 },
                }}
              >
                <Link
                  href={`/works/${project.slug}`}
                  className="wv2-row"
                  onMouseEnter={() => setHoveredSlug(project.slug)}
                  onMouseLeave={() => setHoveredSlug(null)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(1rem, 3vw, 2.5rem)",
                    padding: `clamp(1.25rem, 2.5vh, 1.75rem) 2rem`,
                    marginLeft: "-2rem",
                    marginRight: "-2rem",
                    borderBottom: "1px solid var(--border)",
                    textDecoration: "none",
                    cursor: "none",
                  }}
                  aria-label={`View case study: ${project.title}`}
                >
                  {/* Sequential number */}
                  <span
                    className="wv2-serif wv2-num"
                    style={{
                      fontSize: "clamp(0.65rem, 1.2vw, 0.85rem)",
                      fontWeight: 300,
                      fontStyle: "italic",
                      color: "var(--text-muted)",
                      minWidth: "2rem",
                      flexShrink: 0,
                      userSelect: "none",
                    }}
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Project title */}
                  <h2
                    className="wv2-serif wv2-title"
                    style={{
                      fontSize: "clamp(1.5rem, 3.2vw, 2.8rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.025em",
                      lineHeight: 1.05,
                      color: "var(--text-primary)",
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    {project.title}
                  </h2>

                  {/* Meta: tags + year + arrow */}
                  <div
                    className="wv2-meta"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "clamp(0.75rem, 2vw, 1.75rem)",
                      flexShrink: 0,
                    }}
                  >
                    {/* Tags */}
                    <div style={{ display: "flex", gap: "0.5rem" }}>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            fontSize: 8,
                            letterSpacing: "0.16em",
                            textTransform: "uppercase",
                            color: "var(--text-muted)",
                            background: "var(--background-alt)",
                            padding: "3px 9px",
                            borderRadius: 2,
                            border: "1px solid var(--border)",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {TAG_SHORT[tag] ?? tag}
                        </span>
                      ))}
                    </div>

                    {/* Year */}
                    <span
                      style={{
                        fontSize: 10,
                        letterSpacing: "0.12em",
                        color: "var(--text-muted)",
                        minWidth: "2.5rem",
                        textAlign: "right",
                      }}
                    >
                      {project.timeline}
                    </span>

                    {/* Arrow */}
                    <span
                      className="wv2-arrow wv2-serif"
                      style={{
                        fontSize: "1.4rem",
                        color: "var(--text-muted)",
                        fontStyle: "italic",
                        lineHeight: 1,
                        display: "inline-block",
                      }}
                      aria-hidden
                    >
                      →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>

          {filtered.length === 0 && (
            <p
              style={{
                padding: "4rem 0",
                color: "var(--text-muted)",
                fontSize: 10,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              No projects match this filter.
            </p>
          )}
        </div>

      </div>
    </>
  );
}
