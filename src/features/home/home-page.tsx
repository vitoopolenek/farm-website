import { ApplePreviewSection } from "@/components/sections/home/apple-preview-section";
import { OurStorySection } from "@/components/sections/story";
import { homeHero, homeHighlights } from "@/content/pages/home";
import { ourStory } from "@/content/pages/story";
import { HeroSection } from "@/components/sections/home/hero-section";
import { HighlightsSection } from "@/components/sections/home/highlights-section";

export function HomePage() {
  return (
    <main>
      <HeroSection content={homeHero} />
      <ApplePreviewSection />
      <OurStorySection {...ourStory} />
      <HighlightsSection items={homeHighlights} />
    </main>
  );
}
