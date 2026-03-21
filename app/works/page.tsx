"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { projects, allTags, type ProjectTag } from "@/lib/projects";
import ProjectCard from "@/components/ProjectCard";
import FilterBar from "@/components/FilterBar";

export default function WorksPage() {
  const [selectedTag, setSelectedTag] = useState<ProjectTag | "All">("All");

  const filtered = useMemo(() => {
    if (selectedTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(selectedTag));
  }, [selectedTag]);

  return (
    <>
      {/* Dark cinematic header — pulls behind navbar */}
      <header
        className="relative -mt-[72px] overflow-hidden flex flex-col justify-end"
        style={{ background: "var(--dark)", minHeight: "42vh", paddingBottom: "3rem" }}
      >
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
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
            className="font-display font-bold leading-[0.90]"
            style={{ fontSize: "clamp(2.8rem,7vw,6rem)", color: "rgba(255,255,255,0.95)", letterSpacing: "-0.04em" }}
          >
            All projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="mt-4 text-lg max-w-lg"
            style={{ color: "rgba(255,255,255,0.50)" }}
          >
            Product design, engineering, research, and branding.
          </motion.p>
        </div>
      </header>

      {/* Cream content */}
      <div className="px-6 pt-10 pb-20" style={{ background: "var(--background)" }}>
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-10">
            <FilterBar
              tags={allTags}
              selected={selectedTag}
              onSelect={setSelectedTag}
            />
          </div>

          <motion.div
            className="grid gap-8 sm:grid-cols-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.06 } },
              hidden: {},
            }}
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.slug}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.4 }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <p className="text-[var(--text-muted)] py-12 text-center">
              No projects match this filter.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
