export type ProjectTag = "Product Design" | "Engineering" | "Research" | "Branding";

export interface Project {
  slug: string;
  title: string;
  company: string;
  role: string;
  timeline: string;
  tags: ProjectTag[];
  thumbnail: string;
  shortDescription: string;
  featured: boolean;
  featuredOrder?: number;
  metrics: { label: string; value: string }[];
}

export const projects: Project[] = [
  {
    slug: "unicode-consortium",
    title: "Unicode Consortium",
    company: "Unicode Consortium",
    role: "Product Design",
    timeline: "2024",
    tags: ["Product Design", "Engineering"],
    thumbnail: "/images/projects/mokblok1.png",
    shortDescription: "Multilingual design system — 130+ components, 6k+ languages, 80% reduction in iteration time.",
    featured: true,
    featuredOrder: 1,
    metrics: [
      { label: "Components", value: "130+" },
      { label: "Languages supported", value: "6,000+" },
      { label: "Iteration cycle time", value: "80% reduction" },
      { label: "Time saved", value: "15 hr/wk" },
    ],
  },
  {
    slug: "refactor",
    title: "Refactor (YC S24)",
    company: "Refactor",
    role: "Brand Identity + Web",
    timeline: "2024",
    tags: ["Branding", "Product Design"],
    thumbnail: "/images/projects/refactor3.png",
    shortDescription: "Brand identity and accessible web redesign — 35% brand recognition, 50% faster onboarding.",
    featured: true,
    featuredOrder: 2,
    metrics: [
      { label: "Brand recognition", value: "35% increase" },
      { label: "Onboarding time", value: "50% reduction" },
      { label: "Mobile usability", value: "45% increase" },
      { label: "Bounce rate", value: "22% reduction" },
    ],
  },
  {
    slug: "osu-radio",
    title: "osu!radio",
    company: "Personal Project",
    role: "Full-Stack",
    timeline: "2024",
    tags: ["Engineering"],
    thumbnail: "/images/projects/placeholder.svg",
    shortDescription: "Music streaming platform — Electron + React + TypeScript, metadata caching, playlists.",
    featured: true,
    featuredOrder: 3,
    metrics: [
      { label: "Stack", value: "Electron, React, TS, SQL" },
      { label: "Features", value: "Playlist, queue, loop" },
    ],
  },
  {
    slug: "threading-stories",
    title: "Threading Stories",
    company: "A3C",
    role: "Design + Community",
    timeline: "2024",
    tags: ["Product Design", "Research"],
    thumbnail: "/images/projects/placeholder.svg",
    shortDescription: "Card game for community building — A3C project.",
    featured: true,
    featuredOrder: 4,
    metrics: [],
  },
  {
    slug: "stanford-cdr",
    title: "Stanford CDR",
    company: "Stanford CDR",
    role: "Research & Design",
    timeline: "2024",
    tags: ["Research", "Product Design"],
    thumbnail: "/images/projects/placeholder.svg",
    shortDescription: "30+ interviews, 5 personas, 3 sprints — LG/Oneskin/Ordinary stakeholder presentation.",
    featured: false,
    metrics: [
      { label: "Interviews", value: "30+" },
      { label: "Personas", value: "5" },
      { label: "Sprints", value: "3" },
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects
    .filter((p) => p.featured)
    .sort((a, b) => (a.featuredOrder ?? 0) - (b.featuredOrder ?? 0));
}

export function getAllSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export const allTags: ProjectTag[] = [
  "Product Design",
  "Engineering",
  "Research",
  "Branding",
];
