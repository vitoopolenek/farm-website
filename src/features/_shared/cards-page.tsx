import { Button, CardGrid, InfoCard, PageShell, TextLink } from "@/components/ui";
import type { CardsPageContent } from "@/types/content";

type CardsPageProps = {
  content: CardsPageContent;
};

export function CardsPage({ content }: CardsPageProps) {
  const { shell, cards, footerNote, cta } = content;

  return (
    <main>
    <PageShell {...shell}>
      <CardGrid>
        {cards.map((card) => (
          <InfoCard key={card.title} {...card} />
        ))}
      </CardGrid>

      {footerNote ? (
        <p className="mt-12 max-w-2xl leading-relaxed text-muted">
          {footerNote.beforeContact}{" "}
          <TextLink href={footerNote.contactHref}>{footerNote.contactLabel}</TextLink>{" "}
          {footerNote.middle}{" "}
          <TextLink href={footerNote.visitHref}>{footerNote.visitLabel}</TextLink>
          {footerNote.afterVisit}
        </p>
      ) : null}

      {cta ? (
        <p className="mt-10">
          <Button href={cta.href}>{cta.label}</Button>
        </p>
      ) : null}
    </PageShell>
    </main>
  );
}
