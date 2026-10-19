/**
 * Contact details and social profiles, shared by the footer and the contact
 * page so they can never drift apart.
 */
export const EMAIL = "mahtsham2123@gmail.com";

export const UPWORK_URL = "https://www.upwork.com/freelancers/ahtshameditor";

/**
 * No LinkedIn profile exists yet. Paste the URL here once it is live; while it
 * is empty the LinkedIn link is hidden everywhere.
 */
const LINKEDIN_URL = "";

export const socials: { label: string; href: string }[] = [
  { label: "YouTube", href: "https://www.youtube.com/@Editer786" },
  ...(LINKEDIN_URL ? [{ label: "LinkedIn", href: LINKEDIN_URL }] : []),
  { label: "Hire me on Upwork", href: UPWORK_URL },
];
