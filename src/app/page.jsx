import HomeClient from "./home-client";
import AnimateOnScroll from "@/components/utils/AnimateOnScroll";

import { HomeCTA } from "@/components/home/HomeCTA";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeWork } from "@/components/home/HomeWork";
import { HomeReviews } from "@/components/home/HomeReviews";
import { HomeBenefits } from "@/components/home/HomeBenefits";
import { HomeExplanations } from "@/components/home/HomeExplanations";

export default function Home() {
  return (
    <HomeClient>
      <HomeHero />

      <AnimateOnScroll>
        <HomeBenefits />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <HomeExplanations />
      </AnimateOnScroll>

      <AnimateOnScroll>
        <HomeWork />
      </AnimateOnScroll>

      <HomeReviews />
      <HomeCTA />
    </HomeClient>
  );
}