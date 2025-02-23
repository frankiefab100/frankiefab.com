"use client";
import Hero from "@/components/layout/Hero";
import { Services } from "@/components/layout/specializations";
import { TechStacks } from "@/components/layout/techStacks";
import { RepoCarousel } from "@/components/layout/repoCarousel";
import { GetInTouch } from "@/components/layout/getInTouch";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto lg:px-16 px-6 relative z-20 text-gray-800 dark:text-white">
      <Hero />
      <Services />
      <TechStacks />
      <RepoCarousel username={"frankiefab100"} />
      <GetInTouch />
    </div>
  );
}
