import { DM_Sans } from "next/font/google";

// DM Sans — body text. Clean geometric sans-serif.
export const fontBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600"],
});

// Display font is set in globals.css as the system font stack:
// -apple-system (SF Pro on Apple), BlinkMacSystemFont, Segoe UI on Windows.
// No Google Font needed — the system font at weight 700 + tight tracking
// is the design choice.
export const fontDisplay = fontBody; // variable still needed for @theme
export const fontInter = fontBody;
