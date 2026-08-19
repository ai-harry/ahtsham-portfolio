"use client";

import { useState } from "react";
import Image from "next/image";
import { longForm, type WorkVideo } from "@/src/data/work";
import VideoLightbox from "./VideoLightbox";

const blurDataURL = "data:image/gif;base64,R0lGODlhAQABAAAAACw=";

export default function LongFormGrid() {
  const [active, setActive] = useState<WorkVideo | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <>
      <section
        id="films"
        className="relative z-20 bg-[#0b0b0b] scroll-mt-24 md:scroll-mt-28 pt-24 md:pt-32 pb-24 md:pb-36 overflow-hidden"
      >
        {/* Ghost watermark, mirrors the About section treatment */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
          <h2 className="font-space text-[clamp(7rem,17vw,24rem)] font-black whitespace-nowrap leading-none tracking-tighter text-white opacity-[0.025]">
            LONG FORM
          </h2>
        </div>

        {/* ── Header ── */}
        <div className="relative w-full max-w-[90rem] mx-auto px-6 md:px-12 mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="block w-8 h-px bg-[#FF5C39]" />
              <span className="font-space text-xs font-bold uppercase tracking-[0.2em] text-[#FF5C39]">
                Long form · 16:9
              </span>
            </div>
            <h2 className="font-corpta text-5xl md:text-7xl font-medium uppercase tracking-tighter text-[#FAFAFA] leading-[0.92]">
              Held attention.
            </h2>
          </div>
          <p className="max-w-md text-[#8f8f8f] text-lg font-medium pb-2">
            Documentaries, essays, and explainers. Different job entirely: the hook only buys the
            first minute, structure has to earn the rest.
          </p>
        </div>

        {/* ── Grid: feature + four ── */}
        <div className="relative w-full max-w-[90rem] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
            {longForm.map((video, index) => {
              const isFeature = index === 0;
              const isHovered = hovered === index;

              return (
                <button
                  key={video.id}
                  type="button"
                  onMouseEnter={() => setHovered(index)}
                  onMouseLeave={() => setHovered(null)}
                  onFocus={() => setHovered(index)}
                  onBlur={() => setHovered(null)}
                  onClick={() => setActive(video)}
                  aria-label={`Play ${video.title}`}
                  className={`group relative overflow-hidden rounded-2xl md:rounded-[1.75rem] bg-[#141414] text-left
                    aspect-video ring-1 ring-white/5 will-change-transform
                    transition-all duration-[0.7s] ease-[cubic-bezier(0.16,1,0.3,1)]
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C39]
                    ${isFeature ? "md:col-span-2 md:aspect-[2.4/1]" : ""}
                    ${isHovered
                      ? "shadow-[0_34px_70px_rgba(0,0,0,0.55)] -translate-y-1.5"
                      : "shadow-[0_18px_40px_rgba(0,0,0,0.3)]"}`}
                >
                  <Image
                    src={video.thumbnail}
                    alt={`${video.title}, long form edit`}
                    fill
                    sizes={isFeature ? "(max-width: 768px) 100vw, 1400px" : "(max-width: 768px) 100vw, 700px"}
                    quality={82}
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    draggable={false}
                    className={`object-cover transition-all duration-[0.9s] ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isHovered ? "scale-[1.05] opacity-100" : "scale-100 opacity-80 grayscale-[20%]"}`}
                  />

                  <div
                    className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-700
                      ${isHovered
                        ? "from-[#040404] via-[#040404]/50 to-transparent opacity-95"
                        : "from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent opacity-90"}`}
                  />

                  {/* Runtime-style index + principle */}
                  <div className="absolute top-5 left-5 right-5 flex items-start justify-between gap-3">
                    <span className="font-space text-[10px] font-bold tracking-[0.2em] text-white/50">
                      {String(index + 1).padStart(2, "0")} / {String(longForm.length).padStart(2, "0")}
                    </span>
                    <span
                      className={`rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-3 py-1
                        font-space text-[9px] font-bold uppercase tracking-[0.14em] text-[#FF5C39]
                        transition-all duration-500 ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}`}
                    >
                      {video.principle}
                    </span>
                  </div>

                  <div
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-500
                      ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
                  >
                    <span
                      className={`glass-play flex items-center justify-center rounded-full
                        ${isFeature ? "w-20 h-20" : "w-16 h-16"}`}
                    >
                      <svg
                        className={`ml-1 text-white ${isFeature ? "w-8 h-8" : "w-6 h-6"}`}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>

                  <div className={`absolute inset-x-0 bottom-0 ${isFeature ? "p-7 md:p-10" : "p-6 md:p-7"}`}>
                    <span className="block font-space text-[10px] md:text-[11px] font-bold uppercase tracking-[0.18em] text-[#FF5C39]/90 mb-2 md:mb-3">
                      {video.category}
                    </span>
                    <h3
                      className={`font-space font-black uppercase tracking-tighter text-white leading-[0.98]
                        ${isFeature ? "text-3xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl"}`}
                    >
                      {video.title}
                    </h3>
                    <div
                      className={`overflow-hidden transition-all duration-[0.8s] ease-[cubic-bezier(0.16,1,0.3,1)]
                        ${isHovered ? "max-h-32 opacity-100 mt-3" : "max-h-0 opacity-0 mt-0"}`}
                    >
                      <p
                        className={`text-[#cfcfcf] font-medium leading-relaxed
                          ${isFeature ? "text-sm md:text-base max-w-xl" : "text-[13px] md:text-sm max-w-md"}`}
                      >
                        {video.hook}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <VideoLightbox video={active} orientation="horizontal" onClose={() => setActive(null)} />
    </>
  );
}
