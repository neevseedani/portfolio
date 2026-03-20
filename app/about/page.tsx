import Link from "next/link";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const designSkills = [
  "Figma",
  "Photoshop",
  "InDesign",
  "Premiere Pro",
  "After Effects",
];

const engineeringSkills = [
  "C++",
  "Python",
  "Java",
  "React",
  "Swift",
  "JavaScript",
  "MongoDB",
  "Electron",
  "TypeScript",
  "SQL",
];

const methodsSkills = [
  "User Research",
  "Design Systems",
  "Prototyping",
  "WCAG 2.1 Accessibility",
  "Brand Identity",
];

export const metadata = {
  title: "About — Neev Seedani",
  description:
    "Neev Seedani is a Stanford sophomore double-majoring in Design (UI/UX) and Computer Science (HCI), specializing in bubbly, intuitive experiences.",
};

export default function AboutPage() {
  return (
    <div className="px-6 py-16">
      <div className="mx-auto max-w-[1200px]">
        {/* Hero + photo */}
        <ScrollReveal className="mb-20">
          <div className="flex flex-col md:flex-row md:items-start gap-12">
            <div className="flex-shrink-0">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-2 border-[var(--border)]">
                <Image
                  src="/images/about/neev.webp"
                  alt="Neev Seedani"
                  width={256}
                  height={256}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--text-primary)] mb-6">
                About me
              </h1>
              <div className="space-y-4 text-lg text-[var(--text-secondary)] leading-relaxed">
                <p>
                  I&apos;m a sophomore at Stanford double-majoring in Design (UI/UX) and Computer Science (HCI).
                  I specialize in bubbly, intuitive experiences — with 3 years of work across product design, design systems, and full-stack projects.
                </p>
                <p>
                  I&apos;m Pakistani American, from Duluth, Georgia, and now based at Stanford, CA.
                  I care deeply about accessibility, mental health advocacy, and community building.
                </p>
                <p>
                  Outside of design and code, I&apos;m a Breakthrough Ambassador, on the Collegiate Archery team,
                  do linguistics research, and serve as A3C Publicity Manager. I also love gaming (including osu!) and connecting with people through play.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Skills grid */}
        <ScrollReveal>
          <h2 id="skills-heading" className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-8">
            Skills & tools
          </h2>
          <div className="grid gap-8 sm:grid-cols-3">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--accent-dark)] mb-4">
                Design
              </h3>
              <ul className="flex flex-wrap gap-2" aria-labelledby="skills-heading">
                {designSkills.map((s) => (
                  <li key={s}>
                    <span className="rounded-lg bg-[var(--background-alt)] px-3 py-1.5 text-sm font-medium text-[var(--text-primary)]">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--accent-dark)] mb-4">
                Engineering
              </h3>
              <ul className="flex flex-wrap gap-2">
                {engineeringSkills.map((s) => (
                  <li key={s}>
                    <span className="rounded-lg bg-[var(--background-alt)] px-3 py-1.5 text-sm font-medium text-[var(--text-primary)]">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6">
              <h3 className="font-display text-lg font-semibold text-[var(--accent-dark)] mb-4">
                Methods
              </h3>
              <ul className="flex flex-wrap gap-2">
                {methodsSkills.map((s) => (
                  <li key={s}>
                    <span className="rounded-lg bg-[var(--background-alt)] px-3 py-1.5 text-sm font-medium text-[var(--text-primary)]">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>

        {/* Resume + fun facts */}
        <ScrollReveal className="mt-20 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-8">
          <div>
            <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-2">
              Resume
            </h2>
            <p className="text-[var(--text-secondary)]">
              Download my resume (PDF).
            </p>
          </div>
          <a
            href="/Neev_Seedani_Resume.pdf"
            download
            className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 w-fit"
          >
            Download PDF
          </a>
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <h2 className="font-display text-2xl font-bold text-[var(--text-primary)] mb-4">
            Fun facts
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[var(--text-secondary)]">
            <li>Archery (Collegiate Archery)</li>
            <li>Linguistics research</li>
            <li>Gaming & osu!</li>
            <li>Breakthrough Ambassador</li>
            <li>A3C Publicity Manager</li>
          </ul>
        </ScrollReveal>

        <ScrollReveal className="mt-16">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
          >
            Get in touch
            <span aria-hidden>→</span>
          </Link>
        </ScrollReveal>
      </div>
    </div>
  );
}
