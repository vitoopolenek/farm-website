import { AppleVarietiesSection } from "@/components/sections/ponudba/apple-varieties-section";
import { PageShell } from "@/components/ui";
import { ponudbaPage } from "@/content/pages/ponudba";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(ponudbaPage.meta);

export default function PonudbaPage() {
  return (
    <main>
      <PageShell {...ponudbaPage.shell}>
        <div className="space-y-16">
          <AppleVarietiesSection
            intro={ponudbaPage.varietiesIntro}
            cherriesNote={ponudbaPage.cherriesNote}
          />
        </div>
      </PageShell>
    </main>
  );
}
