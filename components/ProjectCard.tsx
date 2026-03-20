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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group"
    >
      <Link
        href={`/works/${project.slug}`}
        className="block rounded-2xl overflow-hidden bg-[var(--surface)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
      >
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--background-alt)]">
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
          />
          <div className="absolute inset-0 bg-[var(--text-primary)]/0 group-hover:bg-[var(--text-primary)]/20 transition-colors duration-300 flex items-center justify-center">
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-white font-semibold text-lg">
              View Case Study →
            </span>
          </div>
        </div>
        <div className="p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-[var(--secondary)] mb-1">
            {project.role}
          </p>
          <h2 className="font-display text-xl font-bold text-[var(--text-primary)] mb-2">
            {project.title}
          </h2>
          <p className="text-[var(--text-secondary)] text-[15px] leading-relaxed">
            {project.shortDescription}
          </p>
        </div>
      </Link>
    </motion.article>
  );
}
