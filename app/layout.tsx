import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const corpta = localFont({
  src: "../public/fonts/Corpta DEMO.otf",
  variable: "--font-corpta",
  display: "swap",
});

// Absolute base for link-preview images. Vercel sets the production host; the
// fallback only matters for local builds.
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Muhammad Ahtsham | AI Video Editor & Motion Designer",
  description:
    "AI video editor and motion designer with a Master's in Marketing Psychology. I turn AI generations and raw footage into finished ads, UGC and shorts, plus documentary edits built for hook and retention.",
  authors: [{ name: "Muhammad Ahtsham" }],
  openGraph: {
    title: "Muhammad Ahtsham | AI Video Editor & Motion Designer",
    description:
      "AI video editor and motion designer with a Master's in Marketing Psychology. AI video ads, UGC, shorts and documentary edits built for hook and retention.",
    siteName: "Muhammad Ahtsham",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${corpta.variable} antialiased`}
    >
      <body className="font-sans transition-colors relative">
        {children}
      </body>
    </html>
  );
}
