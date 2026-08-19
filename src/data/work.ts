/**
 * Portfolio video index.
 *
 * Thumbnails are vendored into /public/work so the grid renders without
 * hitting i.ytimg.com (offline dev, no remote-image config, no layout shift).
 * Shorts use YouTube's `oardefault.jpg` (true 720x1280); long form uses
 * `maxresdefault.jpg` (1280x720).
 */

export type WorkVideo = {
  /** YouTube video id. Also the thumbnail filename. */
  id: string;
  title: string;
  /** Client or format bucket, shown as the card eyebrow. */
  category: string;
  /** The retention principle this edit leans on (the psychology angle). */
  principle: string;
  /** One-line hook used on the card. */
  hook: string;
  /** Editor's note shown in the lightbox panel. */
  note: string;
  thumbnail: string;
};

export const shorts: WorkVideo[] = [
  {
    id: "cougRSzEb6g",
    title: "Lower Your Resting Heart Rate",
    category: "Health · Talking head",
    principle: "Curiosity gap",
    hook: "Ask the question, withhold the answer, earn the watch-through.",
    note: "The claim lands in the first ninety frames, then the payoff is deliberately deferred. Kinetic type carries the eye through an otherwise static frame so the viewer never gets a still moment to swipe on.",
    thumbnail: "/work/shorts/cougRSzEb6g.jpg",
  },
  {
    id: "Gl55HZfDj40",
    title: "In-House Content Team?",
    category: "Podcast · Clip",
    principle: "Open loop",
    hook: "Enter mid-argument, exit before the resolution.",
    note: "Cut from long-form podcast footage. The clip opens on the most contested sentence in the conversation, which gives the viewer a position to disagree with in the first second.",
    thumbnail: "/work/shorts/Gl55HZfDj40.jpg",
  },
  {
    id: "ZNquNvQzrCQ",
    title: "Coaching Talking Head",
    category: "Coaching · Short form",
    principle: "Pattern interrupt",
    hook: "Break the rhythm before attention breaks.",
    note: "Scale jumps, punch-ins, and supers are placed on the beats where retention curves typically dip, not on a fixed interval. The interruption is the point.",
    thumbnail: "/work/shorts/ZNquNvQzrCQ.jpg",
  },
  {
    id: "imn_eetyjHg",
    title: "ShredFast, Get In Shape Anywhere",
    category: "App · Performance ad",
    principle: "Identity appeal",
    hook: "Sell who they become, not what it does.",
    note: "Built for the feed: readable at thumb-size, legible with sound off, and cut so the product appears only after the viewer has recognised themselves in the problem.",
    thumbnail: "/work/shorts/imn_eetyjHg.jpg",
  },
  {
    id: "I5_PNxTEETo",
    title: "Trade With Our Capital",
    category: "Fintech · Promo",
    principle: "Risk reversal",
    hook: "Remove the objection before it forms.",
    note: "The edit front-loads the answer to the obvious objection. Motion graphics carry the mechanics so the voiceover never has to slow down to explain them.",
    thumbnail: "/work/shorts/I5_PNxTEETo.jpg",
  },
  {
    id: "FazhFpFj_S0",
    title: "Brand Reveal",
    category: "Motion graphics · Branding",
    principle: "Peak-end rule",
    hook: "Build tension, spend it all on the resolve.",
    note: "Everything is engineered backwards from the logo resolve. Easing tightens as the sequence progresses so the final beat reads as arrival rather than as a stop.",
    thumbnail: "/work/shorts/FazhFpFj_S0.jpg",
  },
  {
    id: "Dc_aYZ3xbig",
    title: "FFB Business Funding Offer",
    category: "Direct response · Finance",
    principle: "Loss aversion",
    hook: "Frame the cost of standing still.",
    note: "Direct-response structure: the opening frames name what the viewer is losing right now, not what they could gain later. Supers reinforce the numbers so the offer survives a muted watch.",
    thumbnail: "/work/shorts/Dc_aYZ3xbig.jpg",
  },
  {
    id: "usxuKVzPgV8",
    title: "What You Get With My Edits",
    category: "Creator · Promo",
    principle: "Specificity bias",
    hook: "Concrete beats clever.",
    note: "Every claim is paired with a visible artifact on screen. Specific and verifiable outperforms polished and vague when the viewer is deciding whether to trust a service.",
    thumbnail: "/work/shorts/usxuKVzPgV8.jpg",
  },
  {
    id: "tCAED5HFBTc",
    title: "Dark Seas Division",
    category: "Agency · Brand film",
    principle: "Social proof",
    hook: "Show the room before you make the claim.",
    note: "Cut to establish credibility first and pitch second. Pacing sits slightly behind the music so the brand reads considered rather than urgent.",
    thumbnail: "/work/shorts/tCAED5HFBTc.jpg",
  },
  {
    id: "3EdR4dVm62Y",
    title: "Qualified Leads For Contractors",
    category: "Lead gen · Promo",
    principle: "Problem, agitate, solve",
    hook: "Name the pain in the first line.",
    note: "Classic PAS pacing compressed into short form. The agitation beat runs just long enough to be felt and is cut the moment it risks becoming a lecture.",
    thumbnail: "/work/shorts/3EdR4dVm62Y.jpg",
  },
  {
    id: "asADXz7VFLs",
    title: "Mythos",
    category: "Brand · Narrative",
    principle: "Narrative transportation",
    hook: "Story first, brand second.",
    note: "Slower build than a performance ad by design. Once a viewer is inside a story, they stop evaluating the pitch, which is exactly what a brand piece needs.",
    thumbnail: "/work/shorts/asADXz7VFLs.jpg",
  },
  {
    id: "n53KdMaZ7GY",
    title: "Google Gemma, Explained",
    category: "Tech · Explainer",
    principle: "Progressive disclosure",
    hook: "One idea per beat, never two.",
    note: "Technical material paced to working-memory limits. Each graphic introduces a single new variable and clears the previous one before the next arrives.",
    thumbnail: "/work/shorts/n53KdMaZ7GY.jpg",
  },
  {
    id: "EpXuouW04Pc",
    title: "Conway's Game of Life",
    category: "Science · Explainer",
    principle: "Aha moment",
    hook: "Withhold the pattern until it clicks.",
    note: "The visual does the teaching. Rules are shown running before they are stated, so the viewer discovers the behaviour a beat ahead of the narration.",
    thumbnail: "/work/shorts/EpXuouW04Pc.jpg",
  },
  {
    id: "jdsT7IOtHTA",
    title: "Claude Opus 4.7, Explained",
    category: "Tech · Explainer",
    principle: "Relevance and recency",
    hook: "New information is its own hook.",
    note: "News-led explainer. The edit spends nothing on preamble and gets to the delta, because with timely material the novelty is already doing the retention work.",
    thumbnail: "/work/shorts/jdsT7IOtHTA.jpg",
  },
];

export const longForm: WorkVideo[] = [
  {
    id: "nn50lkUMCkM",
    title: "Brainrot Is Ruining You",
    category: "Documentary film",
    principle: "Threat salience",
    hook: "A documentary about the attention economy, cut to survive it.",
    note: "Long-form structure held together by nested open loops: every chapter answers the previous question and opens a new one. Colour grade and sound design carry the argument through the sections where the data alone would flatten out.",
    thumbnail: "/work/long/nn50lkUMCkM.jpg",
  },
  {
    id: "a75st9hykfM",
    title: "Why Are You Becoming So Lonely",
    category: "Video essay · Data-led",
    principle: "Self-relevance",
    hook: "Explained with data, framed around the viewer.",
    note: "Charts and statistics are re-cut as motion graphics rather than shown as slides. The second-person framing turns population-level data into something the viewer reads as being about them.",
    thumbnail: "/work/long/a75st9hykfM.jpg",
  },
  {
    id: "g_AUFlUCJow",
    title: "America Doesn't Want Us Anymore",
    category: "Documentary",
    principle: "Narrative tension",
    hook: "Archive, interview, and motion held in one line of argument.",
    note: "Mixed-source documentary edit. Grade and grain unify footage from very different origins so the audience follows the argument instead of noticing the seams.",
    thumbnail: "/work/long/g_AUFlUCJow.jpg",
  },
  {
    id: "dowMFYrRmv8",
    title: "Whop Clipping, Before and After",
    category: "Promo · Before/after",
    principle: "Contrast effect",
    hook: "The gap does the persuading.",
    note: "Before/after only works when the cut between the two states is tight enough to be felt. Transitions are timed so the improvement registers before the viewer can start rationalising it.",
    thumbnail: "/work/long/dowMFYrRmv8.jpg",
  },
  {
    id: "8NCuBNUBjN8",
    title: "WhatsApp Booking Automation",
    category: "SaaS · Explainer",
    principle: "Cognitive ease",
    hook: "Make a complex product feel obvious.",
    note: "Screen recordings rebuilt as clean motion graphics. Every step is staged so the product looks simpler than the problem it replaces, which is the entire job of a software explainer.",
    thumbnail: "/work/long/8NCuBNUBjN8.jpg",
  },
];

export const allWork: WorkVideo[] = [...shorts, ...longForm];
