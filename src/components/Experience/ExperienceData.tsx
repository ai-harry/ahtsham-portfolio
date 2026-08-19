export interface ExperienceTheme {
  bg: string;
  text: string;
  accent: string;
  tagStyle?: string;
}

export interface ExperienceItem {
  isIntro?: boolean;
  role?: string;
  company?: string;
  date?: string;
  description?: string;
  tag?: string;
  theme: ExperienceTheme;
}

export const experienceData: ExperienceItem[] = [
  {
    isIntro: true,
    theme: { bg: "bg-[#FAFAFA]", text: "text-[#111111]", accent: "text-[#FF5C39]" }
  },
  {
    role: "Short-Form Editor",
    company: "Freelance",
    // NOTE: placeholder company/date. The Avey TV entry below is the real one.
    date: "2022 - PRESENT · FREELANCE · REMOTE",
    description:
      "Cutting vertical ads, promos, and clips for founders, coaches, and agencies. Every edit is built backwards from the retention curve: hook in the first three seconds, pattern interrupt before the drop-off, payoff held to the last frame.",
    tag: "DIRECT RESPONSE & SOCIAL",
    theme: { bg: "bg-[#111111]", text: "text-[#FAFAFA]", accent: "text-[#FF5C39]", tagStyle: "bg-[#FF5C39]/10 border-[#FF5C39]/30 text-[#FF5C39]" }
  },
  {
    role: "Motion Graphics Artist",
    company: "Brand Work",
    date: "2021 - PRESENT · BRAND & AGENCY WORK · REMOTE",
    description:
      "Brand reveals, title systems, and explainer graphics built in After Effects. Motion is used to carry meaning, not decorate it, so a complex product reads as obvious and a logo resolve lands as arrival.",
    tag: "MOTION DESIGN",
    theme: { bg: "bg-[#FAFAFA]", text: "text-[#111111]", accent: "text-[#FF5C39]", tagStyle: "bg-[#FF5C39]/10 border-[#FF5C39]/30 text-[#FF5C39]" }
  },
  {
    role: "Documentary Editor",
    company: "Avey TV",
    date: "2020 - PRESENT · AVEY TV · REMOTE",
    description:
      "Long-form documentaries and data-led video essays for Avey TV. The hook only buys the first minute; structure, grade, and sound design hold the argument together across twenty-plus minutes without letting the audience out.",
    tag: "LONG-FORM & VIDEO ESSAY",
    theme: { bg: "bg-[#FF5C39]", text: "text-[#111111]", accent: "text-[#111111]", tagStyle: "bg-[#111111]/10 border-[#111111]/20 text-[#111111]" }
  },
];
