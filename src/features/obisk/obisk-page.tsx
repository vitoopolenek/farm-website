import { CardsPage } from "@/features/_shared/cards-page";
import { obiskPage } from "@/content/pages/obisk";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(obiskPage.meta);

export default function ObiskPage() {
  return <CardsPage content={obiskPage} />;
}
