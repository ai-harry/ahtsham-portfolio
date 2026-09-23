/**
 * Portfolio video index.
 *
 * Two kinds of source live side by side:
 *  - `youtube` items embed on click, and their thumbnails are vendored under
 *    /public/work so the grid renders without calling i.ytimg.com.
 *  - `local` items are self-hosted MP4s under /public/work/clips, transcoded
 *    from the original screen recordings (60fps ~9Mbps down to 30fps CRF 27).
 *
 * `category` is the industry axis the filter uses. `orientation` decides which
 * block an item renders in, because 9:16 and 16:9 need different tiles.
 */

export type CategoryId =
  | "real-estate"
  | "automotive"
  | "finance"
  | "tech-ai"
  | "health-fitness"
  | "brand-motion"
  | "agency-creator"
  | "documentary";

export type Category = { id: CategoryId; label: string; blurb: string };

/** Filter order is deliberate: the verticals people search for come first. */
export const categories: Category[] = [
  { id: "real-estate",    label: "Real Estate",       blurb: "Property tours, listings, investor results" },
  { id: "automotive",     label: "Automotive",        blurb: "Car showcases and 3D vehicle renders" },
  { id: "documentary",    label: "Documentary",       blurb: "Long-form films and video essays" },
  { id: "tech-ai",        label: "Tech & AI",         blurb: "Product explainers and AI breakdowns" },
  { id: "finance",        label: "Finance & Business",blurb: "Funding, trading, and business offers" },
  { id: "agency-creator", label: "Agency & Creator",  blurb: "Service offers, podcast clips, lead gen" },
  { id: "brand-motion",   label: "Brand & Motion",    blurb: "Brand reveals and pure motion design" },
  { id: "health-fitness", label: "Health & Fitness",  blurb: "Wellness apps, coaching, performance" },
];

export type VideoSource =
  | { kind: "youtube"; youtubeId: string }
  | { kind: "local"; src: string };

export type WorkVideo = {
  /** Stable key, also used for the thumbnail filename. */
  slug: string;
  title: string;
  category: CategoryId;
  /** How it was shot or built. */
  format: string;
  /** The art-direction read. */
  style: string;
  orientation: "vertical" | "landscape";
  /** Human-readable runtime. */
  duration: string;
  /** The retention principle this edit leans on. */
  principle: string;
  hook: string;
  note: string;
  thumbnail: string;
  source: VideoSource;
};

const yt = (id: string): VideoSource => ({ kind: "youtube", youtubeId: id });
const local = (name: string): VideoSource => ({ kind: "local", src: `/work/clips/${name}.mp4` });

export const work: WorkVideo[] = [
  // ── Real Estate ────────────────────────────────────────────────────────────
  {
    slug: "luxury-estate-tour",
    title: "Luxury Estate, Day to Night",
    category: "real-estate",
    format: "Property tour",
    style: "Cinematic, graded",
    orientation: "vertical",
    duration: "23s",
    principle: "Aspiration framing",
    hook: "Sell the life, and the house comes with it.",
    note: "Exterior, pool and interior cut as one continuous move, with a day-to-evening turn in the middle so the property gets two different moods in under half a minute. A figure walks the frame purely to give the architecture human scale.",
    thumbnail: "/work/clips/luxury-estate-tour.jpg",
    source: local("luxury-estate-tour"),
  },
  {
    slug: "luxury-kitchen-tour",
    title: "Open-Plan Interior Walkthrough",
    category: "real-estate",
    format: "Property tour",
    style: "Shallow depth, warm grade",
    orientation: "vertical",
    duration: "16s",
    principle: "Sensory detail",
    hook: "Finishes sell the room, so hold on the finishes.",
    note: "Shallow focus keeps the eye on cabinetry and flooring rather than the empty middle of the room. Cut to a walking pace instead of a music beat, which is what stops a listing video reading as an advert.",
    thumbnail: "/work/clips/luxury-kitchen-tour.jpg",
    source: local("luxury-kitchen-tour"),
  },
  {
    slug: "property-investor-result",
    title: "Property Investor Result",
    category: "real-estate",
    format: "Testimonial",
    style: "Clean iconography",
    orientation: "landscape",
    duration: "23s",
    principle: "Specific proof",
    hook: "One number does more work than a paragraph.",
    note: "A straight talking-head testimonial carried by a single animated figure on screen. The number lands before the claim is finished, so the viewer has the evidence in hand while the sentence is still arriving.",
    thumbnail: "/work/clips/property-investor-result.jpg",
    source: local("property-investor-result"),
  },

  // ── Automotive ─────────────────────────────────────────────────────────────
  {
    slug: "bmw-m3-render",
    title: "BMW M3 Build Showcase",
    category: "automotive",
    format: "3D product showcase",
    style: "Glitch, studio render",
    orientation: "landscape",
    duration: "17s",
    principle: "Pattern interrupt",
    hook: "Corrupt the frame, then reveal the car clean.",
    note: "Digital glitch and VHS corruption run over the opening so the reveal of the studio-lit 3D model reads as a payoff. Spec callouts sit on an engine-bay cutaway rather than floating in dead space.",
    thumbnail: "/work/clips/bmw-m3-render.jpg",
    source: local("bmw-m3-render"),
  },

  // ── Documentary ────────────────────────────────────────────────────────────
  {
    slug: "nn50lkUMCkM",
    title: "Brainrot Is Ruining You",
    category: "documentary",
    format: "Documentary film",
    style: "Moody, deep blacks",
    orientation: "landscape",
    duration: "23 min",
    principle: "Threat salience",
    hook: "A film about the attention economy, cut to survive it.",
    note: "Twenty-three minutes held together by nested open loops: each chapter answers the last question and opens a new one. Viral clips are composited inside the cinematic frame rather than cut to full screen, so the platforms literally intrude on the shot.",
    thumbnail: "/work/long/nn50lkUMCkM.jpg",
    source: yt("nn50lkUMCkM"),
  },
  {
    slug: "a75st9hykfM",
    title: "Why Are You Becoming So Lonely",
    category: "documentary",
    format: "Video essay, data-led",
    style: "Saturated, colour-blocked",
    orientation: "landscape",
    duration: "17 min",
    principle: "Self-relevance",
    hook: "Population data, framed as though it is about you.",
    note: "Statistics are rebuilt as motion graphics instead of shown as slides, and bold colour blocking keeps a heavy subject from feeling like a lecture. Second-person framing turns research findings into something the viewer reads as personal.",
    thumbnail: "/work/long/a75st9hykfM.jpg",
    source: yt("a75st9hykfM"),
  },
  {
    slug: "g_AUFlUCJow",
    title: "America Doesn't Want Us Anymore",
    category: "documentary",
    format: "Documentary",
    style: "Desaturated, investigative",
    orientation: "landscape",
    duration: "18 min",
    principle: "Narrative tension",
    hook: "Archive, interview and data on one line of argument.",
    note: "Macro shots of hands working through paperwork give bureaucracy a physical texture, and a unified grade holds footage from very different sources together so the audience follows the argument instead of noticing the seams.",
    thumbnail: "/work/long/g_AUFlUCJow.jpg",
    source: yt("g_AUFlUCJow"),
  },

  // ── Tech & AI ──────────────────────────────────────────────────────────────
  {
    slug: "asADXz7VFLs",
    title: "Anthropic Model Announcement",
    category: "tech-ai",
    format: "Talking head, kinetic type",
    style: "Blue studio LED, oversized type",
    orientation: "vertical",
    duration: "1m 41s",
    principle: "Progressive disclosure",
    hook: "One idea per beat, never two.",
    note: "Presenter cut against full-bleed type that lands on the beat, with product screenshots dropped in as evidence rather than described. The type is scaled large enough to carry the emphasis a voice would, so it still reads with the sound off.",
    thumbnail: "/work/shorts/asADXz7VFLs.jpg",
    source: yt("asADXz7VFLs"),
  },
  {
    slug: "EpXuouW04Pc",
    title: "Conway's Game of Life",
    category: "tech-ai",
    format: "Talking head, 3D inserts",
    style: "Blue studio LED, 3D flythrough",
    orientation: "vertical",
    duration: "48s",
    principle: "Aha moment",
    hook: "Show the rule running before you name it.",
    note: "Opens inside a 3D circuit-board flythrough lit by a single travelling trace, then cuts to the presenter and on to real product capture. The abstract idea is established visually before any interface appears, so the demo lands as proof rather than as a tutorial.",
    thumbnail: "/work/shorts/EpXuouW04Pc.jpg",
    source: yt("EpXuouW04Pc"),
  },
  {
    slug: "n53KdMaZ7GY",
    title: "Google Gemma, Explained",
    category: "tech-ai",
    format: "Talking head, screen capture",
    style: "Studio LED, oversized type",
    orientation: "vertical",
    duration: "36s",
    principle: "Relevance and recency",
    hook: "New information is its own hook.",
    note: "A news-led explainer that alternates presenter and source material, showing the announcement itself rather than describing it. No preamble: the edit gets to the delta and lets oversized type carry the pacing between cuts.",
    thumbnail: "/work/shorts/n53KdMaZ7GY.jpg",
    source: yt("n53KdMaZ7GY"),
  },
  {
    slug: "jdsT7IOtHTA",
    title: "Claude Opus, Explained",
    category: "tech-ai",
    format: "Motion graphics, screen capture",
    style: "3D product marks, bold type",
    orientation: "vertical",
    duration: "36s",
    principle: "Cognitive ease",
    hook: "Make a launch feel simple enough to repeat.",
    note: "Stylised 3D product marks anchor each section and the announcement page is shown directly as proof. Motion is used sparingly for emphasis rather than decoration, and clean typographic hierarchy does most of the explaining.",
    thumbnail: "/work/shorts/jdsT7IOtHTA.jpg",
    source: yt("jdsT7IOtHTA"),
  },
  {
    slug: "cinema-vs-ai",
    title: "Cinema Craft Versus AI",
    category: "tech-ai",
    format: "Essay short",
    style: "Archive stills, 3D objects",
    orientation: "vertical",
    duration: "24s",
    principle: "Contrast effect",
    hook: "Identical output, missing something vital.",
    note: "Vintage film-camera archive is cut against clean 3D renders so the argument is made by the edit rather than the narration. A director redirecting light with sheet metal sits directly beside an AI logo, and the comparison does the work.",
    thumbnail: "/work/clips/cinema-vs-ai.jpg",
    source: local("cinema-vs-ai"),
  },
  {
    slug: "8NCuBNUBjN8",
    title: "WhatsApp Booking Automation",
    category: "tech-ai",
    format: "SaaS explainer",
    style: "Teal UI, device mockups",
    orientation: "landscape",
    duration: "21s",
    principle: "Cognitive ease",
    hook: "Make the product look simpler than the problem.",
    note: "Screen recordings rebuilt as clean device mockups, sequenced laptop to phone so cross-platform use is shown rather than claimed. Every step is staged to make the software feel inevitable.",
    thumbnail: "/work/long/8NCuBNUBjN8.jpg",
    source: yt("8NCuBNUBjN8"),
  },

  // ── Finance & Business ─────────────────────────────────────────────────────
  {
    slug: "I5_PNxTEETo",
    title: "Trade With Our Capital",
    category: "finance",
    format: "Talking head, UI overlay",
    style: "Minimal, platform UI",
    orientation: "vertical",
    duration: "39s",
    principle: "Risk reversal",
    hook: "Answer the objection before it forms.",
    note: "Translucent trading-platform overlays borrow the visual grammar of the real product, so the numbers read as a live account rather than as marketing. The objection is handled in the first line.",
    thumbnail: "/work/shorts/I5_PNxTEETo.jpg",
    source: yt("I5_PNxTEETo"),
  },
  {
    slug: "Dc_aYZ3xbig",
    title: "FFB Business Funding Offer",
    category: "finance",
    format: "Talking head",
    style: "Clean corporate, mascot accent",
    orientation: "vertical",
    duration: "35s",
    principle: "Loss aversion",
    hook: "Frame the cost of standing still.",
    note: "Direct-response structure with an animated mascot dropped in to stop a corporate talking head from going flat. Supers carry the terms so the offer survives a muted watch.",
    thumbnail: "/work/shorts/Dc_aYZ3xbig.jpg",
    source: yt("Dc_aYZ3xbig"),
  },
  {
    slug: "galici-financial",
    title: "Galici Financial",
    category: "finance",
    format: "Talking head",
    style: "Kinetic type, warm grade",
    orientation: "vertical",
    duration: "19s",
    principle: "Pattern interrupt",
    hook: "Cut the type to the face, not to the beat.",
    note: "Text reveals are timed to the speaker's expressions and head movement rather than to the music, which gives an abstract financial pitch a comic rhythm and keeps the eye moving across a static frame.",
    thumbnail: "/work/clips/galici-financial.jpg",
    source: local("galici-financial"),
  },
  {
    slug: "mcdonalds-franchise",
    title: "The Franchise Model",
    category: "finance",
    format: "Explainer short",
    style: "Mixed media, print objects",
    orientation: "vertical",
    duration: "18s",
    principle: "Credible sourcing",
    hook: "Put the receipt on the table, literally.",
    note: "Business history told with physical objects: a printed photograph on a desk transitioning into a newspaper clipping. Treating the evidence as a prop makes a statistic feel like a document rather than a caption.",
    thumbnail: "/work/clips/mcdonalds-franchise.jpg",
    source: local("mcdonalds-franchise"),
  },

  // ── Agency & Creator ───────────────────────────────────────────────────────
  {
    slug: "usxuKVzPgV8",
    title: "What You Get With My Edits",
    category: "agency-creator",
    format: "Talking head",
    style: "Night cinematic, kinetic type",
    orientation: "vertical",
    duration: "17s",
    principle: "Specificity bias",
    hook: "Concrete beats clever.",
    note: "Shot at night against a lit skyline so the backdrop does the production-value argument on its own. Every claim is paired with something visible, because specific and verifiable outsells polished and vague.",
    thumbnail: "/work/shorts/usxuKVzPgV8.jpg",
    source: yt("usxuKVzPgV8"),
  },
  {
    slug: "tCAED5HFBTc",
    title: "Dark Seas Division",
    category: "agency-creator",
    format: "Brand film",
    style: "Neon studio, magenta key",
    orientation: "vertical",
    duration: "15s",
    principle: "Social proof",
    hook: "Show the room before you make the claim.",
    note: "Coloured practicals build depth behind the subject so a single-camera setup still reads as a studio. Pacing sits slightly behind the music, which makes the agency feel considered rather than urgent.",
    thumbnail: "/work/shorts/tCAED5HFBTc.jpg",
    source: yt("tCAED5HFBTc"),
  },
  {
    slug: "3EdR4dVm62Y",
    title: "Qualified Leads For Contractors",
    category: "agency-creator",
    format: "Direct response",
    style: "Natural light, warm grade",
    orientation: "vertical",
    duration: "24s",
    principle: "Problem, agitate, solve",
    hook: "Name the pain in the first line.",
    note: "Shot outdoors in daylight rather than in a studio, which reads as approachable for a trades audience. The agitation beat runs just long enough to be felt and is cut before it becomes a lecture.",
    thumbnail: "/work/shorts/3EdR4dVm62Y.jpg",
    source: yt("3EdR4dVm62Y"),
  },
  {
    slug: "Gl55HZfDj40",
    title: "In-House Content Team?",
    category: "agency-creator",
    format: "Podcast clip",
    style: "Warm studio, subtitle-driven",
    orientation: "vertical",
    duration: "16s",
    principle: "Open loop",
    hook: "Enter mid-argument, leave before the answer.",
    note: "Pulled from long-form podcast footage and cut to open on the most contested sentence in the conversation, which hands the viewer a position to disagree with inside the first second.",
    thumbnail: "/work/shorts/Gl55HZfDj40.jpg",
    source: yt("Gl55HZfDj40"),
  },
  {
    slug: "dowMFYrRmv8",
    title: "Whop Clipping, Before and After",
    category: "agency-creator",
    format: "Promo, before/after",
    style: "Amber grade, split layout",
    orientation: "landscape",
    duration: "17s",
    principle: "Contrast effect",
    hook: "The gap does the persuading.",
    note: "Before and after only works when the cut between the two states is tight enough to feel. Labels sit in a fixed layout so the eye compares the same region of frame twice.",
    thumbnail: "/work/long/dowMFYrRmv8.jpg",
    source: yt("dowMFYrRmv8"),
  },
  {
    slug: "founder-podcast",
    title: "Founder Podcast Cut",
    category: "agency-creator",
    format: "Podcast, talking head",
    style: "Low-key cinematic",
    orientation: "landscape",
    duration: "29s",
    principle: "Authority framing",
    hook: "Borrow gravity from something older than the claim.",
    note: "Low-key lighting on a boom-mic setup, cut against a greyscale classical sculpture carrying a scripture quote. Placing a revenue figure next to an ancient warning about wealth gives a business clip an unexpected weight.",
    thumbnail: "/work/clips/founder-podcast.jpg",
    source: local("founder-podcast"),
  },

  // ── Brand & Motion ─────────────────────────────────────────────────────────
  {
    slug: "FazhFpFj_S0",
    title: "Brand Reveal",
    category: "brand-motion",
    format: "Pure motion graphics",
    style: "Light bloom, liquid type",
    orientation: "vertical",
    duration: "13s",
    principle: "Peak-end rule",
    hook: "Build tension, spend it all on the resolve.",
    note: "No footage and no voice. Translucent type flows through a light-bloomed field with the easing tightening as the sequence runs, so the final beat reads as arrival rather than as a stop.",
    thumbnail: "/work/shorts/FazhFpFj_S0.jpg",
    source: yt("FazhFpFj_S0"),
  },
  {
    slug: "effort-perspective",
    title: "The Price Of Effort",
    category: "brand-motion",
    format: "Essay short",
    style: "3D figures, pastel gradient",
    orientation: "vertical",
    duration: "25s",
    principle: "Reframing",
    hook: "Same labour, opposite meaning.",
    note: "Scale is used as the argument: an oversized backpack and a giant paintbrush put a gym membership and a mountain carry in the same frame. Visual irony carries a point that narration would flatten.",
    thumbnail: "/work/clips/effort-perspective.jpg",
    source: local("effort-perspective"),
  },
  {
    slug: "einstein-violin",
    title: "Einstein And The Violin",
    category: "brand-motion",
    format: "Essay short",
    style: "Vintage monochrome, 3D props",
    orientation: "vertical",
    duration: "17s",
    principle: "Curiosity gap",
    hook: "Set up the physicist, pay off the musician.",
    note: "Period monochrome and film grain composited with modern 3D props. Tactile objects, a pocket watch and a violin, are used as metaphors for time and craft instead of stating either out loud.",
    thumbnail: "/work/clips/einstein-violin.jpg",
    source: local("einstein-violin"),
  },
  {
    slug: "neon-motion-study",
    title: "Neon Movement Study",
    category: "brand-motion",
    format: "3D character animation",
    style: "Neon geometry, warm-cool split",
    orientation: "landscape",
    duration: "14s",
    principle: "Visual momentum",
    hook: "Let the room move so the figure does not have to.",
    note: "A rigged figure runs through a geometric neon corridor where receding perspective lines pull the eye into frame. Warm skin against teal architecture keeps the subject readable at every pose.",
    thumbnail: "/work/clips/neon-motion-study.jpg",
    source: local("neon-motion-study"),
  },

  // ── Health & Fitness ───────────────────────────────────────────────────────
  {
    slug: "cougRSzEb6g",
    title: "Lower Your Resting Heart Rate",
    category: "health-fitness",
    format: "Podcast clip, animated overlay",
    style: "Warm neutral, anatomical graphics",
    orientation: "vertical",
    duration: "16s",
    principle: "Curiosity gap",
    hook: "Ask the question, withhold the answer.",
    note: "An animated anatomical heart runs alongside the speaker so a static interview frame keeps moving. The claim lands early and the payoff is deliberately deferred to the last beat.",
    thumbnail: "/work/shorts/cougRSzEb6g.jpg",
    source: yt("cougRSzEb6g"),
  },
  {
    slug: "imn_eetyjHg",
    title: "ShredFast, Get In Shape Anywhere",
    category: "health-fitness",
    format: "UGC product demo",
    style: "Gym dark, neon-green brand",
    orientation: "vertical",
    duration: "16s",
    principle: "Identity appeal",
    hook: "Sell who they become, not what it does.",
    note: "The app is shown running on a handheld phone inside the gym rather than as a clean screen recording, so the product is demonstrated in the exact situation it is meant for. Readable at thumb size with the sound off.",
    thumbnail: "/work/shorts/imn_eetyjHg.jpg",
    source: yt("imn_eetyjHg"),
  },
  {
    slug: "ZNquNvQzrCQ",
    title: "Coaching Talking Head",
    category: "health-fitness",
    format: "Talking head",
    style: "Blue backlight, cinematic",
    orientation: "vertical",
    duration: "15s",
    principle: "Pattern interrupt",
    hook: "Break the rhythm before attention breaks.",
    note: "A blue gel behind the subject isolates them from a dark background and gives a single-location coaching clip some depth. Scale jumps and supers land where retention curves usually dip.",
    thumbnail: "/work/shorts/ZNquNvQzrCQ.jpg",
    source: yt("ZNquNvQzrCQ"),
  },
];

export const verticalWork = work.filter((v) => v.orientation === "vertical");
export const landscapeWork = work.filter((v) => v.orientation === "landscape");

export function countFor(id: CategoryId) {
  return work.filter((v) => v.category === id).length;
}
