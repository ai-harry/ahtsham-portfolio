export interface ServiceTheme {
  bg: string;
  text: string;
  accent: string;
  tagStyle?: string;
}

export interface ServiceItem {
  isIntro?: boolean;
  /** Service name, rendered as the panel's display heading. */
  name?: string;
  /** Formats delivered under this service, shown as the accent line. */
  deliverables?: string;
  /** One-word watermark behind the panel. */
  watermark?: string;
  description?: string;
  /** Discipline pill above the heading. */
  tag?: string;
  theme: ServiceTheme;
}

export const servicesData: ServiceItem[] = [
  {
    isIntro: true,
    theme: { bg: "bg-[#FAFAFA]", text: "text-[#111111]", accent: "text-[#FF5C39]" }
  },
  {
    name: "AI Video Ads & AI UGC",
    watermark: "AI VIDEO",
    deliverables: "SEEDANCE · HIGGSFIELD · HEYGEN · ELEVENLABS",
    description:
      "AI tools give you raw generations. I turn them into ads that hold attention: hook, pacing, captions, sound and a clear offer. Generated shots, AI avatars and AI voiceover, cut and finished like real footage so it doesn't read as \"AI slop\".",
    tag: "GENERATION TO FINISHED AD",
    theme: { bg: "bg-[#FF5C39]", text: "text-[#111111]", accent: "text-[#111111]", tagStyle: "bg-[#111111]/10 border-[#111111]/20 text-[#111111]" }
  },
  {
    name: "Short-Form Editing",
    watermark: "SHORT FORM",
    deliverables: "REELS · TIKTOK · SHORTS · PAID ADS",
    description:
      "Vertical edits built to survive the first three seconds. Hook, pattern interrupt, payoff, cut to the retention curve rather than to taste. Talking head, UGC, podcast clips, and direct-response ads for founders, coaches and agencies.",
    tag: "SOCIAL & DIRECT RESPONSE",
    theme: { bg: "bg-[#111111]", text: "text-[#FAFAFA]", accent: "text-[#FF5C39]", tagStyle: "bg-[#FF5C39]/10 border-[#FF5C39]/30 text-[#FF5C39]" }
  },
  {
    name: "Motion Graphics",
    watermark: "MOTION",
    deliverables: "KINETIC TYPE · UI & DEVICE MOCKUPS · EXPLAINER GRAPHICS",
    description:
      "After Effects work and 3D compositing that carries meaning instead of decorating it. Kinetic typography, UI and device mockups, data visualisation, and explainer graphics that make a complicated idea read as obvious.",
    tag: "DESIGN & ANIMATION",
    theme: { bg: "bg-[#FAFAFA]", text: "text-[#111111]", accent: "text-[#FF5C39]", tagStyle: "bg-[#FF5C39]/10 border-[#FF5C39]/30 text-[#FF5C39]" }
  },
  {
    name: "Documentary",
    watermark: "LONG FORM",
    deliverables: "DOCUMENTARY · VIDEO ESSAY · YOUTUBE",
    description:
      "Twenty minutes and up, held together by nested open loops. Archive, interview and motion unified by grade and sound design so the audience follows the argument instead of noticing the seams.",
    tag: "NARRATIVE & ESSAY",
    theme: { bg: "bg-[#FF5C39]", text: "text-[#111111]", accent: "text-[#111111]", tagStyle: "bg-[#111111]/10 border-[#111111]/20 text-[#111111]" }
  },
  {
    name: "Brand & Property Films",
    watermark: "CINEMATIC",
    deliverables: "REAL ESTATE · BRAND FILM · TESTIMONIAL",
    description:
      "Luxury property tours, brand films and founder testimonials. Slower builds, where the job is to make a place or a company feel worth wanting and then get out before it starts to sound like a pitch.",
    tag: "CINEMATIC & LIFESTYLE",
    theme: { bg: "bg-[#111111]", text: "text-[#FAFAFA]", accent: "text-[#FF5C39]", tagStyle: "bg-[#FF5C39]/10 border-[#FF5C39]/30 text-[#FF5C39]" }
  },
];
