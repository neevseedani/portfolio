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
    <div className="px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        <motion.header
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-12"
        >
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-4">
            All projects
          </h1>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl">
            Product design, engineering, research, and branding work.
          </p>
          <div className="mt-6">
            <FilterBar
              tags={allTags}
              selected={selectedTag}
              onSelect={setSelectedTag}
            />
          </div>
        </motion.header>

        <motion.div
          className="grid gap-8 sm:grid-cols-2"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.06 },
            },
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
  );
}
