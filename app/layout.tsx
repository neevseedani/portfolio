import type { Metadata } from "next";
import { fontInter } from "@/lib/fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Neev Seedani — Designer & Developer",
  description:
    "Portfolio of Neev Seedani, a product designer and developer at Stanford specializing in intuitive, accessible digital experiences.",
  openGraph: {
    title: "Neev Seedani — Designer & Developer",
    description:
      "Portfolio of Neev Seedani, a product designer and developer at Stanford specializing in intuitive, accessible digital experiences.",
    type: "website",
  },
  metadataBase: new URL("https://seedani.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fontInter.variable}>
      <body className="min-h-screen flex flex-col font-body antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1 pt-[72px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
