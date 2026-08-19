"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { shorts, type WorkVideo } from "@/src/data/work";
import VideoLightbox from "./VideoLightbox";

const blurDataURL = "data:image/gif;base64,R0lGODlhAQABAAAAACw=";

export default function ShortsRail() {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<WorkVideo | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [current, setCurrent] = useState(1);

  // Drag-to-scroll state. `moved` gates the click so a drag never opens a video.
  const drag = useRef({ down: false, startX: 0, startScroll: 0, moved: false });

  const syncProgress = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    const max = el.scrollWidth - el.clientWidth;
    const ratio = max > 0 ? el.scrollLeft / max : 0;
    setProgress(ratio);
    setCurrent(Math.min(shorts.length, Math.round(ratio * (shorts.length - 1)) + 1));
  }, []);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    // Deferred: the rail can start at a restored scrollLeft, but seeding state
    // synchronously inside the effect body triggers a cascading render.
    const raf = requestAnimationFrame(syncProgress);
    el.addEventListener("scroll", syncProgress, { passive: true });
    window.addEventListener("resize", syncProgress);
    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("scroll", syncProgress);
      window.removeEventListener("resize", syncProgress);
    };
  }, [syncProgress]);

  const scrollByCards = (direction: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-short-card]");
    const step = card ? card.offsetWidth + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: step * direction * 2, behavior: "smooth" });
  };

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Touch devices already have momentum scrolling; only augment mouse input.
    if (e.pointerType === "touch") return;
    const el = railRef.current;
    if (!el) return;
    drag.current = { down: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = railRef.current;
    if (!el || !drag.current.down) return;
    const delta = e.clientX - drag.current.startX;
    if (Math.abs(delta) > 4) drag.current.moved = true;
    el.scrollLeft = drag.current.startScroll - delta;
  };

  const endDrag = () => {
    drag.current.down = false;
    // Let the click handler read `moved` before it resets.
    window.setTimeout(() => (drag.current.moved = false), 0);
  };

  return (
    <>
      <section
        id="shorts"
        className="relative z-20 bg-[#FAFAFA] scroll-mt-24 md:scroll-mt-28 pt-24 md:pt-32 pb-20 md:pb-28 overflow-hidden"
      >
        <style
          dangerouslySetInnerHTML={{
            __html: `
            .shorts-rail { scrollbar-width: none; -ms-overflow-style: none; }
            .shorts-rail::-webkit-scrollbar { display: none; }
          `,
          }}
        />

        {/* ── Header ── */}
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 mb-12 md:mb-14 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#FF5C39]" />
              <span className="font-space text-xs font-bold uppercase tracking-[0.2em] text-[#FF5C39]">
                Short form · 9:16
              </span>
            </div>
            <h2 className="font-corpta text-5xl md:text-7xl font-medium uppercase tracking-tighter text-[#111111] leading-[0.92]">
              Scroll-stoppers.
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-6 lg:items-end xl:items-end">
            <p className="max-w-md text-[#555555] text-lg font-medium">
              Fourteen edits built for the feed. Every one is cut to survive the first three
              seconds, then engineered to hold the thumb for the rest.
            </p>
            <div className="flex items-center gap-3 shrink-0">
              <button
                onClick={() => scrollByCards(-1)}
                aria-label="Previous shorts"
                className="w-12 h-12 rounded-full border border-[#e0e0e0] bg-white text-[#111111] flex items-center justify-center
                  hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-colors duration-300 cursor-pointer
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C39]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={() => scrollByCards(1)}
                aria-label="Next shorts"
                className="w-12 h-12 rounded-full border border-[#e0e0e0] bg-white text-[#111111] flex items-center justify-center
                  hover:bg-[#111111] hover:text-white hover:border-[#111111] transition-colors duration-300 cursor-pointer
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C39]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Rail ── */}
        <div
          ref={railRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="shorts-rail flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory
            px-6 md:px-12 pb-6 cursor-grab active:cursor-grabbing select-none
            [scroll-padding-left:1.5rem] md:[scroll-padding-left:3rem]"
        >
          {shorts.map((video, index) => {
            const isHovered = hovered === index;
            return (
              <button
                key={video.id}
                data-short-card
                type="button"
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                onFocus={() => setHovered(index)}
                onBlur={() => setHovered(null)}
                onClick={() => {
                  if (drag.current.moved) return;
                  setActive(video);
                }}
                aria-label={`Play ${video.title}`}
                className={`group relative shrink-0 snap-start overflow-hidden rounded-[1.5rem] bg-[#111111] text-left
                  w-[68vw] sm:w-[280px] md:w-[300px] lg:w-[316px] aspect-[9/16]
                  ring-1 ring-black/5 transition-all duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)] will-change-transform
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C39]
                  ${isHovered
                    ? "shadow-[0_30px_60px_rgba(0,0,0,0.35)] -translate-y-2"
                    : "shadow-[0_16px_36px_rgba(0,0,0,0.12)]"}`}
              >
                <Image
                  src={video.thumbnail}
                  alt={`${video.title}, short form edit`}
                  fill
                  sizes="(max-width: 640px) 68vw, (max-width: 1024px) 300px, 316px"
                  quality={80}
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL={blurDataURL}
                  draggable={false}
                  className={`object-cover transition-all duration-[0.9s] ease-[cubic-bezier(0.16,1,0.3,1)]
                    ${isHovered ? "scale-[1.06] opacity-100" : "scale-100 opacity-85 grayscale-[15%]"}`}
                />

                {/* Legibility scrim */}
                <div
                  className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700
                    ${isHovered
                      ? "from-[#050505] via-[#050505]/45 to-transparent opacity-95"
                      : "from-[#0a0a0a] via-[#0a0a0a]/25 to-transparent opacity-85"}`}
                />

                {/* Index + principle chip */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-3">
                  <span className="font-space text-[10px] font-bold tracking-[0.2em] text-white/60">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1
                      font-space text-[9px] font-bold uppercase tracking-[0.14em] text-[#FF5C39]
                      transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}
                  >
                    {video.principle}
                  </span>
                </div>

                {/* Play affordance */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-all duration-500
                    ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                >
                  <span className="glass-play flex items-center justify-center w-16 h-16 rounded-full">
                    <svg className="w-6 h-6 ml-1 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </span>
                </div>

                {/* Caption */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="block font-space text-[10px] font-bold uppercase tracking-[0.16em] text-[#FF5C39]/90 mb-2">
                    {video.category}
                  </span>
                  <h3 className="font-space text-lg font-black uppercase tracking-tight text-white leading-[1.08]">
                    {video.title}
                  </h3>
                  <div
                    className={`overflow-hidden transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isHovered ? "max-h-24 opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"}`}
                  >
                    <p className="text-[#cfcfcf] text-[13px] leading-relaxed font-medium">
                      {video.hook}
                    </p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* ── Progress ── */}
        <div className="w-full max-w-[90rem] mx-auto px-6 md:px-12 mt-4 flex items-center gap-6">
          <div className="relative h-[3px] flex-1 rounded-full bg-[#e6e6e6] overflow-hidden">
            <span
              className="absolute inset-y-0 left-0 rounded-full bg-[#FF5C39] transition-[width] duration-200 ease-out"
              style={{ width: `${Math.max(8, progress * 100)}%` }}
            />
          </div>
          <span className="font-space text-xs font-bold tracking-[0.18em] text-[#999999] tabular-nums">
            {String(current).padStart(2, "0")} / {String(shorts.length).padStart(2, "0")}
          </span>
        </div>
      </section>

      <VideoLightbox video={active} orientation="vertical" onClose={() => setActive(null)} />
    </>
  );
}
