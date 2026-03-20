"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { ProjectTag } from "@/lib/projects";

interface FilterBarProps {
  tags: ProjectTag[];
  selected: ProjectTag | "All";
  onSelect: (tag: ProjectTag | "All") => void;
}

export default function FilterBar({ tags, selected, onSelect }: FilterBarProps) {
  const options: (ProjectTag | "All")[] = useMemo(() => ["All", ...tags], [tags]);

  return (
    <nav aria-label="Filter projects" className="flex flex-wrap gap-2">
      {options.map((tag) => (
        <button
          key={tag}
          type="button"
          onClick={() => onSelect(tag)}
          className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 ${
            selected === tag
              ? "bg-[var(--accent)] text-white"
              : "bg-[var(--background-alt)] text-[var(--text-secondary)] hover:bg-[var(--border)] hover:text-[var(--text-primary)]"
          }`}
        >
          {tag}
        </button>
      ))}
    </nav>
  );
}
