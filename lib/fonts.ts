import { Inter } from "next/font/google";

export const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

// Use Inter for both display (headings) and body
export const fontDisplay = fontInter;
export const fontBody = fontInter;
