"use client";

import dynamic from "next/dynamic";

// Both showcases mount client-side only: they carry image grids and a YouTube
// player that nothing above the fold needs.
const ShortsRail = dynamic(() => import("@/src/components/Work/ShortsRail"), { ssr: false });
const LongFormGrid = dynamic(() => import("@/src/components/Work/LongFormGrid"), { ssr: false });

export default function DeferredSections() {
  return (
    <>
      <ShortsRail />
      <LongFormGrid />
    </>
  );
}
