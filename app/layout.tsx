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

export const metadata: Metadata = {
  title: "Ahtsham Ali | Motion Graphics & Video Editing",
  description:
    "Motion graphics artist and video editor with a Master's in Marketing Psychology. Short-form ads, brand motion, and documentary edits built for hook and retention.",
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
