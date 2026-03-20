import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Works — Neev Seedani",
  description:
    "Product design, engineering, research, and branding projects by Neev Seedani.",
};

export default function WorksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
