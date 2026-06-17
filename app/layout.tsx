import type { Metadata } from "next";
import "./globals.css";

const DOMAIN = process.env.NEXT_PUBLIC_BASE_URL ?? "https://sparkaibootcamp.com";

export const metadata: Metadata = {
  title: "Spark — 1-Day AI Build Bootcamp for Professionals | by Penterra AI",
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  description:
    "Build 2 live AI products in 1 day. No code. No tech team. Spark is a hands-on AI bootcamp for non-technical professionals — you leave with a website and an AI tool, both deployed and live.",
  keywords: [
    "AI bootcamp India", "hands-on AI workshop", "build AI tools", "Claude Code bootcamp",
    "non-technical AI course", "AI for professionals India", "learn AI in one day",
  ],
  openGraph: {
    title: "Spark — 1-Day AI Build Bootcamp",
    description: "Build 2 live AI products in 1 day. No code required. June 26.",
    url: DOMAIN,
    siteName: "Spark Bootcamp",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark — 1-Day AI Bootcamp",
    description: "Build 2 live AI products. 1 day. No code.",
  },
  alternates: { canonical: DOMAIN },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
