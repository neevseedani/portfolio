import { notFound } from "next/navigation";
import { getProjectBySlug, getAllSlugs } from "@/lib/projects";
import { getCaseStudyContent } from "@/lib/case-studies";
import CaseStudyLayout from "@/components/CaseStudyLayout";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Neev Seedani`,
    description: project.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();
  const content = getCaseStudyContent(slug);

  return <CaseStudyLayout project={project} content={content} />;
}
