import type { Metadata } from "next";
import { notFound } from "next/navigation";
import HomePage from "@/src/components/Home/HomePage";
import { findWork, work } from "@/src/data/work";

// One static page per piece. The showcase reads the slug from the URL on mount
// and opens the player, so this route only has to exist and carry the metadata
// that link previews (WhatsApp, LinkedIn, Upwork messages) read.
export const dynamicParams = false;

export function generateStaticParams() {
  return work.map((v) => ({ slug: v.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const video = findWork((await params).slug);
  if (!video) return {};
  const title = `${video.title} | Muhammad Ahtsham`;
  const description = `${video.format}, ${video.duration}. ${video.hook}`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${video.slug}` },
    openGraph: {
      title,
      description,
      url: `/work/${video.slug}`,
      type: "video.other",
      images: [{ url: video.thumbnail, alt: video.title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [video.thumbnail] },
  };
}

export default async function WorkVideoPage({ params }: Props) {
  if (!findWork((await params).slug)) notFound();
  return <HomePage />;
}
