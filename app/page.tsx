"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { getFeaturedProjects } from "@/lib/projects";

const PROFILE_PHOTO = "/images/about/neev.webp";

const skillsMarquee = [
  "Figma",
  "React",
  "Swift",
  "Python",
  "TypeScript",
  "Framer",
  "User Research",
  "Design Systems",
  "Figma",
  "React",
  "Swift",
  "Python",
];

export default function HomePage() {
  const featured = getFeaturedProjects();

  return (
    <>
      {/* Hero — your vision: name + email left, profile + bio right */}
      <section className="relative min-h-[85vh] flex flex-col justify-center px-6 pt-8 pb-20" aria-labelledby="hero-heading">
        <div className="relative mx-auto max-w-[1200px] w-full">
          {/* Top row: name + email left, profile photo right */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center">
            {/* Left: name + email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:col-span-7"
            >
              <h1 id="hero-heading" className="font-display text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] 2xl:text-[14rem] font-bold tracking-[-0.08em] text-[var(--text-primary)] leading-[1.05]">
                <span className="block">NEEV</span>
                <span className="block text-[var(--accent)]">SEEDANI</span>
              </h1>
              <a
                href="mailto:neev@stanford.edu"
                className="mt-6 inline-flex items-center gap-2 text-[var(--text-primary)] font-medium hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
              >
                <span>neev@stanford.edu</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            </motion.div>

            {/* Right: profile photo only */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.4, 0.25, 1] }}
              className="md:col-span-5 flex items-center justify-center md:justify-end"
            >
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden border-2 border-[var(--border)] shadow-lg flex-shrink-0">
                <Image
                  src={PROFILE_PHOTO}
                  alt="Neev Seedani"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                />
              </div>
            </motion.div>
          </div>

          {/* Bio text below — full width, no overlap */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35, ease: [0.25, 0.4, 0.25, 1] }}
            className="mt-10 text-base sm:text-lg text-[var(--text-secondary)] font-bold leading-tight text-justify max-w-xl"
          >
            Hello, I&apos;m a designer specializing in bubbly and intuitive designs with 3 years of expertise — based in Stanford, California. Let&apos;s create!
          </motion.p>
        </div>
      </section>

      {/* Selected Works */}
      <section className="px-6 py-20 bg-[var(--surface)] border-y border-[var(--border)]" aria-labelledby="selected-works-heading">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal>
            <h2 id="selected-works-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-12">
              Selected works
            </h2>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {featured.map((project, i) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={i}
                priority={i < 3}
              />
            ))}
          </div>
          <ScrollReveal className="mt-12 text-center">
            <Link
              href="/works"
              className="inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
            >
              See all projects
              <span aria-hidden>→</span>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* About Teaser */}
      <section className="px-6 py-20" aria-labelledby="about-teaser-heading">
        <div className="mx-auto max-w-[1200px]">
          <ScrollReveal className="flex flex-col md:flex-row md:items-center gap-12">
            <div className="flex-1">
              <h2 id="about-teaser-heading" className="font-display text-3xl sm:text-4xl font-bold text-[var(--text-primary)] mb-6">
                Hi, I&apos;m Neev
              </h2>
              <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl">
                I&apos;m a sophomore at Stanford double-majoring in Design (UI/UX) and Computer Science (HCI).
                I love making products that feel bubbly and intuitive — with 3 years of experience and a focus on accessibility and community.
              </p>
              <Link
                href="/about"
                className="mt-6 inline-flex items-center gap-2 text-[var(--accent)] font-semibold hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
              >
                Learn more
                <span aria-hidden>→</span>
              </Link>
            </div>
            <div className="flex-shrink-0">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-[var(--border)]">
                <Image
                  src="/images/about/neev.webp"
                  alt="Neev Seedani"
                  width={192}
                  height={192}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Skills marquee */}
          <ScrollReveal className="mt-16">
            <div className="overflow-hidden">
              <div className="flex gap-8 animate-marquee whitespace-nowrap py-4" aria-hidden>
                {skillsMarquee.map((skill, i) => (
                  <span
                    key={`${skill}-${i}`}
                    className="text-[var(--text-muted)] font-medium text-lg"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 py-24 bg-[var(--accent-muted)]/50 border-t border-[var(--border)]" aria-labelledby="contact-cta-heading">
        <div className="mx-auto max-w-[1200px] text-center">
          <ScrollReveal>
            <h2 id="contact-cta-heading" className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-6">
              Curious about what we can create together?
            </h2>
            <p className="text-lg text-[var(--text-secondary)] mb-10 max-w-xl mx-auto">
              Let&apos;s build something bubbly and intuitive. I&apos;d love to hear from you.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a
                href="mailto:neev@stanford.edu"
                className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3.5 text-base font-semibold text-white hover:bg-[var(--accent-hover)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2"
              >
                neev@stanford.edu
              </a>
              <a
                href="https://linkedin.com/in/neevseedani"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[var(--text-primary)] font-semibold hover:text-[var(--accent)] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2 rounded"
              >
                LinkedIn
                <span aria-hidden>↗</span>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
