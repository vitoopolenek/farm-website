import { ContactDetailsSection } from "@/components/sections/kontakt/contact-details-section";
import { PageShell } from "@/components/ui";
import { kontaktMeta, kontaktShell } from "@/content/pages/kontakt";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(kontaktMeta);

export default function KontaktPage() {
  return (
    <main>
      <PageShell {...kontaktShell}>
        <ContactDetailsSection />
      </PageShell>
    </main>
  );
}
