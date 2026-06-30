import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Services } from "@/components/sections/Services";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { StuckProjectCTA } from "@/components/sections/StuckProjectCTA";
import { WorkMethod } from "@/components/sections/WorkMethod";
import { Experience } from "@/components/sections/Experience";
import { FAQ } from "@/components/sections/FAQ";
import { Insights } from "@/components/sections/Insights";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function HomePage() {
  return (
    <>
      <Header />
      <main className="brand-page">
        <Hero />
        <Projects />
        <Services />
        <WhyChooseUs />
        <StuckProjectCTA />
        <WorkMethod />
        <Experience />
        <FAQ />
        <Insights />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
