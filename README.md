# Ahtsham Ali, Portfolio

Motion graphics artist and video editor with a Master's in Marketing Psychology.
Next.js 16, Tailwind CSS v4, and GSAP.

Adapted from the `harry-portfolio-web` template: the layout, motion language, and
hero interaction are kept; the content, imagery, and showcase sections are new.

## Run it

```bash
corepack pnpm install
corepack pnpm dev
```

Then open http://localhost:3000.

## Structure

| Section | Component | Anchor |
| --- | --- | --- |
| Hero (split portrait, cursor-driven mask) | `src/components/Hero/Hero.tsx` | n/a |
| About + stats | `src/components/About/About.tsx` | `#about` |
| Career portal-plunge | `src/components/Experience/` | `#experience` |
| Short form rail (14 × 9:16) | `src/components/Work/ShortsRail.tsx` | `#shorts` |
| Long form grid (5 × 16:9) | `src/components/Work/LongFormGrid.tsx` | `#films` |
| YouTube lightbox | `src/components/Work/VideoLightbox.tsx` | n/a |
| Footer / contact | `src/components/Footer/`, `app/(site)/contact/` | `#contact` |

## Video showcase

All 19 videos live in one file: **`src/data/work.ts`**. Each entry carries the
YouTube id, title, category, the retention principle the edit leans on, a one-line
hook, and an editor's note. Add or reorder videos there and both sections follow.

Thumbnails are vendored under `public/work/` so the grid renders without calling
out to `i.ytimg.com`. To add a video, drop its id in `work.ts` and fetch the
matching thumbnail:

```bash
curl -o "public/work/shorts/<VIDEO_ID>.jpg" "https://i.ytimg.com/vi/<VIDEO_ID>/oardefault.jpg"
```

Use `oardefault.jpg` for Shorts (true 720×1280) and `maxresdefault.jpg` for
16:9 long form. The player itself is only mounted after a click, so no YouTube
request is made on page load.

## Hero images

Two aligned PNGs with transparent backgrounds, same canvas size:

- `public/hero/Artist.png` is the photograph, background removed. This is the **base**
  layer and is never masked: it supplies the bust that both halves of the split share.
- `public/hero/Mind.png` is the line illustration. This is the **overlay**, sitting on
  top and clipped to everything right of the split.

Both are 1254x1254. The illustration is placed 1:1 at the same canvas size as the
photograph, anchored to the top-left, with the empty space falling at the bottom
where its neck ends. Keep any replacement on the same canvas and the same anchor.
The untouched originals are kept at `public/Artist.png` and `public/Mind.png`.

The split tracks the cursor above 1024px wide and rests at 50.6% otherwise.

## Placeholders still to replace

- About stats (`src/components/About/About.tsx`): 300+ / 40M+ / 6+ are invented.
- Experience company names and dates (`src/components/Experience/ExperienceData.tsx`).
- Contact email (`app/(site)/contact/page.tsx`) and the LinkedIn URL in the footer.
- EmailJS keys in `app/(site)/contact/page.tsx` still point at the template's account.

## Deploying

No environment variables are required. `pnpm build` runs clean on a fresh clone,
and the site is three routes: `/`, `/contact`, and the 404.

The AI-consultancy parts of the original template (`/case-studies`, `/studio`,
`FeaturedProducts`, `LiveDemos`, the Sanity client, and ~310MB of demo media)
have been removed, along with the dependencies only they used. `git remote -v`
still lists the template as `template` if you ever need to diff against it.
