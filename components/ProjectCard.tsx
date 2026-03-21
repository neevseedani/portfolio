"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
  priority?: boolean;
}

export default function ProjectCard({ project, index = 0, priority = false }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.25, 0.4, 0.25, 1] }}
      style={{ willChange: "transform" }}
      className="group"
    >
      <Link
        href={`/works/${project.slug}`}
        className="block rounded-2xl overflow-hidden bg-[var(--background-alt)] transition-shadow duration-300 hover:shadow-[0_8px_32px_rgba(0,0,0,0.10)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-cover transition-transform duration-500 ease-[cubic-bezier(0.25,0.4,0.25,1)] group-hover:scale-[1.05]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
          {/* Hover scrim */}
          <div className="absolute inset-0 bg-[var(--dark)]/0 group-hover:bg-[var(--dark)]/15 transition-colors duration-400" />
        </div>

        {/* Card body */}
        <div className="p-5 pt-4">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--secondary)]">
              {project.role}
            </p>
            <span className="text-[var(--text-muted)] text-xs">{project.timeline}</span>
          </div>
          <h2 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2 tracking-[-0.01em]">
            {project.title}
          </h2>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex items-center gap-1 text-[var(--accent)] text-xs font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-200 translate-x-0 group-hover:translate-x-0">
            View case study
            <motion.span
              initial={false}
              className="inline-block"
              animate={{ x: 0 }}
              whileHover={{ x: 3 }}
              aria-hidden
            >
              →
            </motion.span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
