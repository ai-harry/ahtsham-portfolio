"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import type { WorkVideo } from "@/src/data/work";

type Props = {
  video: WorkVideo | null;
  /** Vertical shorts get a 9:16 player, long form gets 16:9. */
  orientation: "vertical" | "horizontal";
  onClose: () => void;
};

/**
 * Full-screen YouTube player with an editor's-note panel.
 *
 * The iframe is only mounted while a video is selected, so no YouTube request
 * is made until the viewer actually asks for one.
 */
export default function VideoLightbox({ video, orientation, onClose }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Escape to close + scroll lock while open.
  useEffect(() => {
    if (!video) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [video, onClose]);

  // Entrance animation.
  useEffect(() => {
    if (!video) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        rootRef.current,
        { autoAlpha: 0 },
        { autoAlpha: 1, duration: 0.35, ease: "power2.out" }
      );
      gsap.fromTo(
        stageRef.current,
        { autoAlpha: 0, scale: 0.94, y: 24 },
        { autoAlpha: 1, scale: 1, y: 0, duration: 0.7, ease: "power4.out", delay: 0.05 }
      );
      gsap.fromTo(
        panelRef.current ? Array.from(panelRef.current.children) : [],
        { autoAlpha: 0, y: 24 },
        { autoAlpha: 1, y: 0, duration: 0.6, stagger: 0.07, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(
        closeRef.current,
        { autoAlpha: 0, scale: 0.6, rotate: -90 },
        { autoAlpha: 1, scale: 1, rotate: 0, duration: 0.5, ease: "back.out(1.6)", delay: 0.25 }
      );
    }, rootRef);

    return () => ctx.revert();
  }, [video]);

  if (!video) return null;

  const isVertical = orientation === "vertical";
  const src =
    `https://www.youtube-nocookie.com/embed/${video.id}` +
    "?autoplay=1&rel=0&modestbranding=1&playsinline=1";

  return (
    <div
      ref={rootRef}
      role="dialog"
      aria-modal="true"
      aria-label={video.title}
      className="fixed inset-0 z-[120] bg-[#070707]/97 backdrop-blur-xl overflow-y-auto custom-scrollbar"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close video"
        className="fixed z-[130] top-5 right-5 md:top-8 md:right-8 w-11 h-11 md:w-14 md:h-14 rounded-full flex items-center justify-center
          bg-white/10 hover:bg-white text-white hover:text-[#111111] border border-white/20
          backdrop-blur-md transition-colors duration-300 cursor-pointer shadow-xl
          focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C39]"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div
        className={`min-h-full w-full max-w-[100rem] mx-auto px-4 sm:px-8 py-20 md:py-16 flex flex-col gap-10
          ${isVertical ? "lg:flex-row lg:items-center lg:justify-center lg:gap-16" : "lg:gap-14"}`}
      >
        {/* ── Player ── */}
        <div
          ref={stageRef}
          className={`w-full shrink-0 ${isVertical ? "lg:w-auto lg:flex lg:justify-end" : ""}`}
        >
          <div
            className={`relative mx-auto overflow-hidden rounded-2xl md:rounded-[1.75rem] bg-black shadow-[0_40px_120px_rgba(0,0,0,0.7)] ring-1 ring-white/10
              ${isVertical
                ? "w-full max-w-[min(78vw,340px)] sm:max-w-[360px] lg:max-w-none lg:w-[min(38vw,420px)] aspect-[9/16]"
                : "w-full max-w-[min(100%,1180px)] aspect-video"}`}
          >
            <iframe
              src={src}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="eager"
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>

        {/* ── Editor's note ── */}
        <div
          ref={panelRef}
          className={`w-full ${isVertical ? "lg:max-w-xl lg:flex-1" : "max-w-3xl"}`}
        >
          <span className="block font-space text-[11px] md:text-xs font-bold uppercase tracking-[0.22em] text-[#FF5C39] mb-4">
            {video.category}
          </span>

          <h2 className="font-space text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#FAFAFA] leading-[0.92] mb-5">
            {video.title}
          </h2>

          <p className="text-[#FAFAFA] text-lg md:text-xl font-medium leading-snug mb-8">
            {video.hook}
          </p>

          <div className="mb-8">
            <span className="block text-[#5c5c5c] font-space text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold mb-3">
              Retention principle
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FF5C39]/30 bg-[#FF5C39]/10 px-4 py-2 font-space text-xs md:text-sm font-bold uppercase tracking-widest text-[#FF5C39]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#FF5C39]" />
              {video.principle}
            </span>
          </div>

          <div className="mb-10">
            <span className="block text-[#5c5c5c] font-space text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-bold mb-3">
              Editor&apos;s note
            </span>
            <p className="text-[#A0A0A0] text-sm md:text-base leading-relaxed max-w-2xl">
              {video.note}
            </p>
          </div>

          <a
            href={`https://www.youtube.com/watch?v=${video.id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-6 py-3
              font-space text-[11px] md:text-xs font-bold uppercase tracking-[0.18em] text-[#FAFAFA]
              hover:bg-white hover:text-[#111111] transition-colors duration-300"
          >
            Watch on YouTube
            <svg
              className="w-4 h-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
