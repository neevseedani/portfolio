import type { Project } from "./projects";

export interface GalleryImage {
  src: string;
  /** Native pixel width — used to compute aspect ratio and layout weight */
  width: number;
  /** Native pixel height — used to compute aspect ratio and layout weight */
  height: number;
  /** Force this image to span the full row regardless of aspect ratio */
  fullWidth?: boolean;
}

export interface CaseStudyContent {
  overview: string;
  myRole: string;
  /** Optional YouTube embed URL (use youtube.com/embed/VIDEO_ID format) */
  videoUrl?: string;
  process: { title: string; body: string }[];
  outcomes: string[];
  reflection: string;
  /** Optional project visuals / gallery */
  galleryImages?: GalleryImage[];
}

const contentMap: Record<string, CaseStudyContent> = {
  "unicode-consortium": {
    overview:
      "The Unicode Consortium required a multilingual design system to support 6,000+ languages and improve iteration speed for internal tools. We built 130+ components and reduced iteration cycle time by 80% while saving 15 hours per week.",
    myRole:
      "I owned the design system and component library: research on multilingual UI patterns, component design, documentation, and collaboration with engineering for implementation. I also contributed to architecture decisions for the screenshot and block systems.",
    process: [
      {
        title: "Research & Discovery",
        body: "Audit of existing tools and pain points. Research on RTL, vertical text, and language-specific typography and layout needs.",
      },
      {
        title: "Ideation & Wireframes",
        body: "Component inventory and prioritization. Wireframes for key flows and layout patterns that work across scripts.",
      },
      {
        title: "Visual Design & Prototyping",
        body: "130+ components designed and documented. Multilingual UI examples and architecture diagrams for 15k+ screenshot blocks.",
      },
      {
        title: "Testing & Iteration",
        body: "Testing with internal users and language experts. Iteration on component APIs and documentation.",
      },
      {
        title: "Final Deliverables",
        body: "Component library, style guide, and implementation support. Rollout and training for internal teams.",
      },
    ],
    outcomes: [
      "130+ components in the design system",
      "Support for 6,000+ languages",
      "80% reduction in iteration cycle time",
      "15 hours per week saved for the team",
      "15,000+ screenshot blocks supported",
    ],
    reflection:
      "Designing for 6k+ languages pushed me to think beyond Western UI assumptions. I learned how much typography, layout, and component design need to flex for different scripts and reading directions.",
    galleryImages: [
      { src: "/images/projects/mokblok1.png", width: 1080, height: 1080, fullWidth: true },
      { src: "/images/projects/mokblok2.png", width: 1080, height: 1080 },
      { src: "/images/projects/mokblok1b.png", width: 1080, height: 1080 },
    ],
  },
  refactor: {
    overview:
      "Refactor (YC S24) needed a refreshed brand identity and an accessible, responsive web experience. We increased brand recognition by 35%, cut onboarding time by 50%, and improved mobile usability by 45% while reducing bounce rate by 22%.",
    myRole:
      "I led brand identity (logo, color, typography, voice) and the web redesign: information architecture, visual design, responsive layouts, and accessibility (WCAG 2.1 AA). I worked with the founding team to align brand with product narrative.",
    process: [
      {
        title: "Research & Discovery",
        body: "Stakeholder interviews, competitive brand audit, and review of existing assets and messaging.",
      },
      {
        title: "Ideation & Wireframes",
        body: "Brand concepts and mood boards. Site map and wireframes for key pages and flows.",
      },
      {
        title: "Visual Design & Prototyping",
        body: "Brand system (logo, palette, type, imagery). High-fidelity designs and responsive breakpoints. Style guide.",
      },
      {
        title: "Testing & Iteration",
        body: "Accessibility audit and fixes. Usability testing on mobile and desktop. Iteration on onboarding flow.",
      },
      {
        title: "Final Deliverables",
        body: "Brand guidelines, asset library, and implemented website. Documentation for future updates.",
      },
    ],
    outcomes: [
      "35% increase in brand recognition",
      "50% reduction in onboarding time",
      "45% increase in mobile usability",
      "22% reduction in bounce rate",
    ],
    reflection:
      "Balancing brand personality with clarity was key. I'd do more A/B testing on the onboarding flow post-launch to keep improving conversion.",
    galleryImages: [
      { src: "/images/projects/refactor3.png", width: 2614, height: 1174 },
      { src: "/images/projects/refactor4.png", width: 1080, height: 1080 },
      { src: "/images/projects/refactor5.png", width: 1080, height: 1080 },
    ],
  },
  "osu-radio": {
    overview:
      "osu!radio is a personal project: a music streaming desktop app built with Electron, React, and TypeScript. It features metadata caching, playlists, queue, and loop controls — all designed for a smooth, focused listening experience.",
    myRole:
      "Solo project: product, design, and full-stack development. I designed the UI and UX, implemented the app (Electron + React + TypeScript), and set up SQL-based metadata and caching.",
    process: [
      {
        title: "Research & Discovery",
        body: "Explored existing osu! and music streaming workflows. Defined scope: desktop-first, offline-friendly metadata, and simple queue/playlist model.",
      },
      {
        title: "Ideation & Wireframes",
        body: "Wireframes for main views: library, queue, playlist, now playing. Data model for tracks and metadata.",
      },
      {
        title: "Visual Design & Prototyping",
        body: "UI design in Figma. Dark theme optimized for long listening sessions. Prototype for key flows.",
      },
      {
        title: "Development & Iteration",
        body: "Electron + React + TypeScript app. SQLite for metadata. Implemented playlist, queue, loop, and caching. Iterated on performance and UX.",
      },
      {
        title: "Final Deliverables",
        body: "Shipped desktop app with core features. Documentation and (optional) open-source release.",
      },
    ],
    outcomes: [
      "Full-stack desktop app: Electron, React, TypeScript, SQL",
      "Metadata caching for fast load times",
      "Playlist, queue, and loop features",
    ],
    reflection:
      "Building something end-to-end from idea to ship was incredibly rewarding. I'd add more keyboard shortcuts and theming options in a next version.",
    videoUrl: "https://www.youtube.com/embed/JVuWeC5oFCg",
    galleryImages: [
      { src: "/images/projects/osu-radio1.png", width: 1080, height: 1080 },
      { src: "/images/projects/osu-radio2.png", width: 1080, height: 1080 },
    ],
  },
  "threading-stories": {
    overview:
      "Threading Stories is a card game designed for community building, created as part of an A3C project. It uses storytelling and shared prompts to connect people through play.",
    myRole:
      "I contributed to game design, card content, and visual design. I worked with the team on mechanics, playtesting, and production of the physical card set.",
    process: [
      {
        title: "Research & Discovery",
        body: "Community needs and existing card/board games. Goals: accessibility, low barrier to entry, and emphasis on storytelling.",
      },
      {
        title: "Ideation & Prototyping",
        body: "Game mechanics and card concepts. Paper prototypes and playtesting with diverse groups.",
      },
      {
        title: "Visual Design & Production",
        body: "Card layout, typography, and illustration direction. Print-ready files and production coordination.",
      },
    ],
    outcomes: [
      "Shipped card game for community use",
      "Playtested with multiple groups",
      "A3C project showcase",
    ],
    reflection:
      "Designing for physical play and community was a great shift from digital products. I learned how important clear instructions and inclusive prompts are for group dynamics.",
    galleryImages: [
      { src: "/images/projects/threading1.png", width: 1080, height: 1080 },
      { src: "/images/projects/threading2.png", width: 1080, height: 1080 },
    ],
  },
  "stanford-cdr": {
    overview:
      "SCIDR Longevity Research involved deep user research and design for external stakeholders (e.g. LG, Oneskin, Ordinary). We conducted 30+ interviews, created 5 personas, and ran 3 sprints culminating in a stakeholder presentation.",
    myRole:
      "I led user research (interview design, recruitment, synthesis), persona development, journey mapping, and prototype creation. I co-presented findings and design directions to stakeholders.",
    process: [
      {
        title: "Research & Discovery",
        body: "30+ user interviews. Synthesis and affinity mapping. Alignment with stakeholders on research questions.",
      },
      {
        title: "Ideation & Personas",
        body: "5 personas based on research. Journey maps and opportunity areas. Concept generation.",
      },
      {
        title: "Visual Design & Prototyping",
        body: "Prototypes for key concepts. Visual design and usability testing. Iteration based on feedback.",
      },
      {
        title: "Final Deliverables",
        body: "Persona cards, journey maps, prototype demos, and presentation to LG, Oneskin, Ordinary, and symposium audience.",
      },
    ],
    outcomes: [
      "30+ user interviews conducted",
      "5 personas and journey maps",
      "3 design sprints",
      "Stakeholder presentation to LG, Oneskin, Ordinary",
    ],
    reflection:
      "Working with real stakeholders and real users in an academic context was invaluable. I'd allocate more time for follow-up research after the first round of testing.",
    galleryImages: [
      { src: "/images/projects/scidr1.png", width: 1080, height: 1080 },
      { src: "/images/projects/scidr2.png", width: 1080, height: 1080 },
    ],
  },
};

export function getCaseStudyContent(slug: string): CaseStudyContent | undefined {
  return contentMap[slug];
}
