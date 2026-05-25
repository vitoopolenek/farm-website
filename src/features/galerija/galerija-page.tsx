import {
  galerijaItems,
  galerijaMeta,
  galerijaShell,
} from "@/content/pages/galerija";
import { GalleryGrid } from "@/components/sections/galerija/gallery-grid";
import { PageShell } from "@/components/ui";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(galerijaMeta);

export default function GalerijaPage() {
  return (
    <main>
      <PageShell {...galerijaShell}>
        <GalleryGrid items={galerijaItems} />
      </PageShell>
    </main>
  );
}
