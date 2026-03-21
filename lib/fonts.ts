import { DM_Sans, Barlow } from "next/font/google";

// DM Sans — body text. Clean geometric sans-serif.
export const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

// Barlow — display/hero headings. Geometric grotesk, consistent across all devices.
export const fontDisplay = Barlow({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["700", "800"],
});

export const fontInter = fontBody;
