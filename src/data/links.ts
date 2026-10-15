/**
 * Contact details and social profiles, shared by the footer and the contact
 * page so they can never drift apart.
 */
export const EMAIL = "mahtasham2123@gmail.com";

export const UPWORK_URL = "https://www.upwork.com/freelancers/ahtshameditor";

/**
 * TODO: paste Ahtsham's real LinkedIn profile URL here. While it is empty the
 * LinkedIn link is hidden, rather than pointing at the LinkedIn homepage.
 */
const LINKEDIN_URL = "";

export const socials: { label: string; href: string }[] = [
  { label: "YouTube", href: "https://www.youtube.com/@Editer786" },
  ...(LINKEDIN_URL ? [{ label: "LinkedIn", href: LINKEDIN_URL }] : []),
  { label: "Upwork", href: UPWORK_URL },
];
