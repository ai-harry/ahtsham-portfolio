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
    name: "SaaS Explainers & Product Videos",
    watermark: "SAAS & PRODUCT",
    deliverables: "UI ANIMATION · DEVICE MOCKUPS · KINETIC TYPE",
    description:
      "Explainers and launch videos that make a complicated product look simple. Your UI animated on clean device mockups, one idea per beat, with script and voiceover included so a viewer gets it in the first 20 seconds.",
    tag: "EXPLAINERS & LAUNCH VIDEOS",
    theme: { bg: "bg-[#FF5C39]", text: "text-[#111111]", accent: "text-[#111111]", tagStyle: "bg-[#111111]/10 border-[#111111]/20 text-[#111111]" }
  },
  {
    name: "Motion Graphics",
    watermark: "MOTION",
    deliverables: "KINETIC TYPE · UI & DEVICE MOCKUPS · EXPLAINER GRAPHICS",
    description:
      "After Effects work that carries meaning instead of decorating it. Kinetic typography, UI and device mockups, data visualisation, and explainer graphics that make a complicated idea read as obvious.",
    tag: "DESIGN & ANIMATION",
    theme: { bg: "bg-[#111111]", text: "text-[#FAFAFA]", accent: "text-[#FF5C39]", tagStyle: "bg-[#FF5C39]/10 border-[#FF5C39]/30 text-[#FF5C39]" }
  },
  {
    name: "AI Video Ads & UGC",
    watermark: "AI VIDEO",
    deliverables: "AI ADS · AI UGC · AI VOICEOVER",
    description:
      "AI tools give you raw generations. I turn them into ads that hold attention: hook, pacing, captions, sound and a clear offer, cut and finished like real footage so it doesn't read as AI slop.",
    tag: "GENERATION TO FINISHED AD",
    theme: { bg: "bg-[#FAFAFA]", text: "text-[#111111]", accent: "text-[#FF5C39]", tagStyle: "bg-[#FF5C39]/10 border-[#FF5C39]/30 text-[#FF5C39]" }
  },
  {
    name: "Short-Form Editing",
    watermark: "SHORT FORM",
    deliverables: "REELS · TIKTOK · SHORTS · PAID ADS",
    description:
      "Vertical edits built to survive the first three seconds. Hook, pattern interrupt, payoff, cut to the retention curve rather than to taste. Talking head, UGC, podcast clips, and direct-response ads for founders, coaches and agencies.",
    tag: "SOCIAL & DIRECT RESPONSE",
    theme: { bg: "bg-[#FF5C39]", text: "text-[#111111]", accent: "text-[#111111]", tagStyle: "bg-[#111111]/10 border-[#111111]/20 text-[#111111]" }
  },
  {
    name: "Documentary",
    watermark: "LONG FORM",
    deliverables: "DOCUMENTARY · VIDEO ESSAY · YOUTUBE",
    description:
      "Twenty minutes and up, held together by nested open loops. Archive, interview and motion unified by grade and sound design so the audience follows the argument instead of noticing the seams. The same slower craft goes into brand films and luxury property tours.",
    tag: "NARRATIVE & ESSAY",
    theme: { bg: "bg-[#111111]", text: "text-[#FAFAFA]", accent: "text-[#FF5C39]", tagStyle: "bg-[#FF5C39]/10 border-[#FF5C39]/30 text-[#FF5C39]" }
  },
];
