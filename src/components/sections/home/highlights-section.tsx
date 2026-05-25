import Link from "next/link";
import { cn } from "@/lib/cn";
import { accentLabelClass } from "@/lib/accent-styles";
import { Container } from "@/components/ui";
import type { HighlightContent } from "@/types/content";

type HighlightsSectionProps = {
  items: HighlightContent[];
};

export function HighlightsSection({ items }: HighlightsSectionProps) {
  return (
    <section className="border-t border-line bg-bg-subtle py-20 md:py-28">
      <Container>
        <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="bg-card p-8 md:p-10">
              <p
                className={cn(
                  "text-[11px] font-medium uppercase tracking-[0.2em]",
                  accentLabelClass[item.accent],
                )}
              >
                {item.label}
              </p>
              <h2 className="mt-4 text-xl font-medium tracking-tight text-ink">
                {item.title}
              </h2>
              <p className="mt-3 text-[15px] leading-relaxed text-muted">
                {item.description}
              </p>
              {item.href && item.linkLabel ? (
                <Link
                  href={item.href}
                  className="mt-6 inline-block text-sm font-medium text-ink transition hover:text-muted"
                >
                  {item.linkLabel}
                </Link>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
