import Hero from "@/src/components/Hero/Hero";
import dynamic from "next/dynamic";
import DeferredSections from "@/src/components/Home/DeferredSections";

const About = dynamic(() => import("@/src/components/About/About"));
const Services = dynamic(() => import("@/src/components/Services/Services"));
const Footer = dynamic(() => import("@/src/components/Footer/Footer"));

/**
 * The home page body. Rendered by `/` and by every `/work/[slug]` route, so a
 * shared video link lands on the full portfolio with that video already open.
 */
export default function HomePage() {
  return (
    <main className="flex flex-col w-full relative overflow-clip">
      <Hero />
      <About />
      <Services />
      <DeferredSections />
      <Footer />
    </main>
  );
}
