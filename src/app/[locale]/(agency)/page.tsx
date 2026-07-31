import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { TrustBadges } from "@/components/sections/TrustBadges";
import { Marquee } from "@/components/ui/Marquee";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FeaturedProjects } from "@/components/sections/FeaturedProjects";
import { Pricing } from "@/components/sections/Pricing";
import { Process } from "@/components/sections/Process";
import { Portfolio } from "@/components/sections/Portfolio";
import { Stats } from "@/components/sections/Stats";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";

const PriceCalculator = dynamic(
  () =>
    import("@/components/sections/PriceCalculator").then(
      (mod) => mod.PriceCalculator
    ),
  { ssr: true }
);

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <Marquee />
      <About />
      <Services />
      <FeaturedProjects />
      <Pricing />
      <Process />
      <Portfolio />
      <Stats />
      <PriceCalculator />
      <Testimonials />
      <FAQ />
      <Contact />
    </>
  );
}
