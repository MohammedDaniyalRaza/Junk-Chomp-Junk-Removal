import { Marquee } from "../components/Marquee";
import { ChompDivider } from "../components/ChompDivider";
import { HomeHero } from "../sections/HomeHero";
import { WhatWeChomp } from "../sections/WhatWeChomp";
import { HowItWorks } from "../sections/HowItWorks";
import { CoverageRoute } from "../sections/CoverageRoute";
import { TestimonialsStrip } from "../sections/TestimonialsStrip";
import { BigPhoneCTA } from "../sections/BigPhoneCTA";

export function HomePage() {
  return (
    <div>
      <HomeHero />
      <Marquee variant="lime" />
      <ChompDivider topBg="lime" bottomBg="black" teethColor="#FFFFFF" />
      <WhatWeChomp />
      <ChompDivider topBg="black" bottomBg="surface" teethColor="#FFFFFF" />
      <HowItWorks />
      <CoverageRoute />
      <TestimonialsStrip />
      <BigPhoneCTA topBg="surface" />
    </div>
  );
}
