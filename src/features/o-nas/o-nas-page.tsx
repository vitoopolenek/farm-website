import { OurStorySection } from "@/components/sections/story";
import { TeamSection } from "@/components/sections/o-nas/team-section";
import { PageShell } from "@/components/ui";
import { oNasMeta, oNasShell } from "@/content/pages/o-nas";
import { ourStory } from "@/content/pages/story";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(oNasMeta);

export default function ONasPage() {
  return (
    <main>
      <PageShell {...oNasShell} />
      <OurStorySection {...ourStory} />
      <TeamSection />
    </main>
  );
}
