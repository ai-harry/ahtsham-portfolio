import { UPWORK_URL } from "@/src/data/links";

type Review = {
  /** The Upwork job title the review was left on. */
  job: string;
  rating: number;
  /** Month the review was left, as Upwork shows it. */
  date: string;
  /**
   * The client's review, copied word for word from Upwork. Never rewrite or
   * shorten it. A review with empty text is not shown.
   */
  text: string;
};

const reviews: Review[] = [
  {
    job: "AI Video Editor & Motion Graphics Specialist for High-Converting E-commerce Ads",
    rating: 5.0,
    date: "Oct 2026",
    text: "Great work, Ahtsham! Fast turnaround, sharp edits, and the hooks and motion graphics were exactly what we needed for short-form ads. Easy to work with and very responsive. Would definitely hire again. Highly recommended! 👍",
  },
  {
    job: "AI-Powered Video Editor & Content Strategist",
    rating: 5.0,
    date: "Sep 2026",
    text: "Ahtsham done an excellent work on my ai powered video edit project, and also his keen eye on psychology behind content is great and like a charry on the top. he delivered high quality work incredibly fast, with none of the generic “AI Slop” u see on social media. Recommended ⭐⭐⭐⭐⭐",
  },
  {
    job: "Motion Graphics Video Editor Needed",
    rating: 5.0,
    date: "Sep 2026",
    text: "Took a chance on him even though he was new to Upwork. Totally worth it. His motion graphics work was way better than I expected, and he was great to work with. highly recommended.",
  },
];

export default function Reviews() {
  const visible = reviews.filter((r) => r.text.trim());
  if (visible.length === 0) return null;

  return (
    <section id="reviews" className="relative z-20 w-full bg-[#FAFAFA] text-[#111111] py-24 md:py-32">
      <div className="max-w-[100rem] mx-auto px-6 md:px-12 xl:px-24">
        <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
          <span className="block w-8 md:w-16 h-px bg-[#FF5C39]" />
          <span className="font-space text-sm md:text-lg font-bold uppercase tracking-[0.2em] text-[#FF5C39]">Reviews</span>
        </div>
        <h2 className="font-corpta text-[10vw] md:text-[6vw] xl:text-[5rem] font-medium uppercase tracking-tighter leading-[0.9] mb-12 md:mb-16">
          What clients said.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-6">
          {visible.map((r) => (
            <figure key={r.job} className="flex flex-col justify-between gap-8 rounded-[1.5rem] border border-[#111111]/10 bg-white p-6 lg:p-8">
              <blockquote className="text-base md:text-lg font-medium leading-relaxed text-[#333333]">
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <figcaption className="flex flex-col gap-1">
                <span className="font-space text-xs font-bold uppercase tracking-widest text-[#FF5C39]">
                  Upwork client · {r.rating.toFixed(1)} ★
                </span>
                <span className="text-sm text-[#888888]">{r.job} · {r.date}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <a
          href={UPWORK_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 mt-10 md:mt-12 font-semibold hover:text-[#FF5C39] transition-colors"
        >
          See all reviews on Upwork
          <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </section>
  );
}
