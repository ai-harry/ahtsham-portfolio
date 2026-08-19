import Hero from "@/src/components/Hero/Hero";
import dynamic from "next/dynamic";
import DeferredSections from "@/src/components/Home/DeferredSections";

const About = dynamic(() => import("@/src/components/About/About"));
const Experience = dynamic(() => import("@/src/components/Experience/Experience"));
const Footer = dynamic(() => import("@/src/components/Footer/Footer"));

export default function Home() {
  return (
    <main className="flex flex-col w-full relative overflow-clip">
      <Hero />
      <About />
      <Experience />
      <DeferredSections />
      <Footer />
    </main>
  );
}
