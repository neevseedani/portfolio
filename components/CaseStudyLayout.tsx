import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/projects";
import type { CaseStudyContent, GalleryImage } from "@/lib/case-studies";
import ScrollReveal from "@/components/ScrollReveal";

// Images wider than this ratio are treated as "landscape" and span full width
const LANDSCAPE_THRESHOLD = 1.4;

interface CaseStudyLayoutProps {
  project: Project;
  content: CaseStudyContent | undefined;
}

export default function CaseStudyLayout({ project, content }: CaseStudyLayoutProps) {
  return (
    <article className="pb-20">

      {/* Dark header band */}
      <header
        className="relative -mt-[72px] overflow-hidden flex flex-col justify-end"
        style={{ background: "var(--dark)", minHeight: "46vh", paddingBottom: "3.5rem" }}
      >
        {/* Grain texture */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            opacity: 0.04,
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            backgroundSize: "192px 192px",
          }}
          aria-hidden
        />

        <div className="relative px-6 mx-auto max-w-[1200px] w-full">
          <Link
            href="/works"
            className="inline-flex items-center gap-2 text-sm font-medium mb-8 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded"
            style={{ color: "rgba(255,255,255,0.40)" }}
          >
            ← All works
          </Link>

          <div className="flex flex-wrap gap-2 mb-5">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-[11px] font-semibold tracking-wide"
                style={{
                  border: "1px solid rgba(255,255,255,0.18)",
                  background: "rgba(255,255,255,0.07)",
                  color: "rgba(255,255,255,0.60)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          <h1
            className="font-display font-bold leading-[0.90]"
            style={{ fontSize: "clamp(2.4rem,6vw,5.5rem)", color: "rgba(255,255,255,0.95)", letterSpacing: "-0.04em" }}
          >
            {project.title}
          </h1>

          <p
            className="mt-4 text-base"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            {project.role} · {project.timeline} · {project.company}
          </p>
        </div>
      </header>

      {/* Hero thumbnail — sized to native aspect ratio, no crop */}
      <ScrollReveal>
        <div
          className="relative w-full"
          style={{
            aspectRatio: `${project.thumbnailWidth} / ${project.thumbnailHeight}`,
            background: "var(--background-alt)",
            maxHeight: "80vh",
          }}
        >
          <Image
            src={project.thumbnail}
            alt=""
            fill
            className="object-contain"
            priority
            sizes="100vw"
          />
        </div>
      </ScrollReveal>

      {/* Gallery — auto-sorted by aspect ratio */}
      {content?.galleryImages && content.galleryImages.length > 0 && (
        <div className="mx-auto max-w-[1200px] px-6 mt-12">
          <h2 className="sr-only">Project visuals</h2>
          {/* 2-column grid; landscape images (ratio ≥ 1.4) span both columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {content.galleryImages.map((img: GalleryImage, i) => {
              const ratio = img.width / img.height;
              const isLandscape = img.fullWidth || ratio >= LANDSCAPE_THRESHOLD;
              return (
                <ScrollReveal
                  key={img.src}
                  delay={i * 0.08}
                  className={isLandscape ? "md:col-span-2" : "col-span-1"}
                >
                  <div
                    className="relative w-full rounded-xl overflow-hidden"
                    style={{
                      aspectRatio: `${img.width} / ${img.height}`,
                      background: "var(--background-alt)",
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={`${project.title} — visual ${i + 1}`}
                      fill
                      className="object-contain"
                      sizes={
                        isLandscape
                          ? "100vw"
                          : "(max-width: 768px) 100vw, 50vw"
                      }
                    />
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      )}

      {/* Body content */}
      <div className="mx-auto max-w-[1200px] px-6 mt-16 space-y-20">
        {content ? (
          <>
            <ScrollReveal>
              <Section id="overview-heading" label="Overview">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                  {content.overview}
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section id="role-heading" label="My Role">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                  {content.myRole}
                </p>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section id="process-heading" label="Process">
                <ol className="space-y-10">
                  {content.process.map((step, i) => (
                    <li key={i}>
                      <h3 className="font-display text-xl font-semibold text-[var(--text-primary)] mb-3 tracking-tight">
                        {i + 1}. {step.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                        {step.body}
                      </p>
                    </li>
                  ))}
                </ol>
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section id="outcomes-heading" label="Outcomes">
                <ul className="list-disc list-inside space-y-2 text-lg text-[var(--text-secondary)] max-w-3xl mb-8">
                  {content.outcomes.map((outcome, i) => (
                    <li key={i}>{outcome}</li>
                  ))}
                </ul>
                {project.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl p-5 border border-[var(--border)] transition-shadow duration-300 hover:shadow-md"
                        style={{ background: "var(--background-alt)" }}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1">
                          {m.label}
                        </p>
                        <p className="font-display text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </Section>
            </ScrollReveal>

            <ScrollReveal>
              <Section id="reflection-heading" label="Reflection">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                  {content.reflection}
                </p>
              </Section>
            </ScrollReveal>
          </>
        ) : (
          <>
            <ScrollReveal>
              <Section id="overview-heading" label="Overview">
                <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-3xl">
                  {project.shortDescription}
                </p>
              </Section>
            </ScrollReveal>
            {project.metrics.length > 0 && (
              <ScrollReveal>
                <Section id="metrics-heading" label="Key metrics">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl p-5 border border-[var(--border)] transition-shadow duration-300 hover:shadow-md"
                        style={{ background: "var(--background-alt)" }}
                      >
                        <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-[var(--text-muted)] mb-1">
                          {m.label}
                        </p>
                        <p className="font-display text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                          {m.value}
                        </p>
                      </div>
                    ))}
                  </div>
                </Section>
              </ScrollReveal>
            )}
          </>
        )}

        <ScrollReveal>
          <nav className="pt-12 border-t border-[var(--border)]" aria-label="Navigation">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-medium text-sm hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
            >
              ← View all projects
            </Link>
          </nav>
        </ScrollReveal>
      </div>
    </article>
  );
}

function Section({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section aria-labelledby={id}>
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-2">
        {label}
      </p>
      <h2
        id={id}
        className="font-display text-2xl sm:text-3xl font-bold text-[var(--text-primary)] mb-6 tracking-[-0.02em]"
      >
        {label}
      </h2>
      {children}
    </section>
  );
}
