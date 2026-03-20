import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import type { CaseStudyContent } from "@/lib/case-studies";

interface CaseStudyLayoutProps {
  project: Project;
  content: CaseStudyContent | undefined;
}

export default function CaseStudyLayout({ project, content }: CaseStudyLayoutProps) {
  return (
    <article className="pb-20">
      {/* Hero */}
      <header className="px-6 pt-8 pb-12">
        <div className="mx-auto max-w-[1200px]">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-[var(--text-muted)] hover:text-[var(--accent)] text-sm font-medium mb-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
          >
            ← All works
          </Link>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--text-primary)] mb-4">
            {project.title}
          </h1>
          <p className="text-lg text-[var(--text-secondary)]">
            {project.role} <span aria-hidden>·</span> {project.timeline}{" "}
            <span aria-hidden>·</span> {project.company}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--secondary-muted)] px-3 py-1 text-sm font-semibold text-[var(--secondary)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* Hero image */}
      <div className="relative w-full aspect-[21/9] bg-[var(--background-alt)]">
        <Image
          src={project.thumbnail}
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </div>

      {/* Project gallery (when provided) */}
      {content?.galleryImages && content.galleryImages.length > 0 && (
        <div className="mx-auto max-w-[1200px] px-6 mt-12">
          <h2 className="sr-only">Project visuals</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.galleryImages.map((src, i) => (
              <div key={i} className="relative aspect-video rounded-xl overflow-hidden bg-[var(--background-alt)]">
                <Image
                  src={src}
                  alt={`${project.title} — visual ${i + 1}`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mx-auto max-w-[1200px] px-6 mt-16 space-y-20">
        {content ? (
          <>
            {/* Overview */}
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Overview
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                {content.overview}
              </p>
            </section>

            {/* My Role */}
            <section aria-labelledby="role-heading">
              <h2 id="role-heading" className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
                My Role
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                {content.myRole}
              </p>
            </section>

            {/* Process */}
            <section aria-labelledby="process-heading">
              <h2 id="process-heading" className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-10">
                Process
              </h2>
              <ol className="space-y-10">
                {content.process.map((step, i) => (
                  <li key={i}>
                    <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-3">
                      {i + 1}. {step.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                      {step.body}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Outcomes */}
            <section aria-labelledby="outcomes-heading">
              <h2 id="outcomes-heading" className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Outcomes
              </h2>
              <ul className="list-disc list-inside space-y-2 text-lg text-[var(--text-secondary)] max-w-3xl">
                {content.outcomes.map((outcome, i) => (
                  <li key={i}>{outcome}</li>
                ))}
              </ul>
              {project.metrics.length > 0 && (
                <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-[var(--accent-muted)]/50 p-4 border border-[var(--border)]"
                    >
                      <p className="text-sm font-semibold text-[var(--accent-dark)]">{m.label}</p>
                      <p className="font-display text-xl font-bold text-[var(--text-primary)]">{m.value}</p>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* Reflection */}
            <section aria-labelledby="reflection-heading">
              <h2 id="reflection-heading" className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Reflection
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                {content.reflection}
              </p>
            </section>
          </>
        ) : (
          <>
            <section aria-labelledby="overview-heading">
              <h2 id="overview-heading" className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
                Overview
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                {project.shortDescription}
              </p>
            </section>
            {project.metrics.length > 0 && (
              <section aria-labelledby="outcomes-heading">
                <h2 id="outcomes-heading" className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6">
                  Key metrics
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-[var(--accent-muted)]/50 p-4 border border-[var(--border)]"
                    >
                      <p className="text-sm font-semibold text-[var(--accent-dark)]">{m.label}</p>
                      <p className="font-display text-xl font-bold text-[var(--text-primary)]">{m.value}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </>
        )}

        {/* Next project */}
        <nav className="pt-12 border-t border-[var(--border)]" aria-label="Next project">
          <p className="text-sm text-[var(--text-muted)] mb-4">Next project</p>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
          >
            View all projects
            <span aria-hidden>→</span>
          </Link>
        </nav>
      </div>
    </article>
  );
}
