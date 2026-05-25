import { Button, Container, Eyebrow } from "@/components/ui";
import type { HeroContent } from "@/types/content";

type HeroSectionProps = {
  content: HeroContent;
};

export function HeroSection({ content }: HeroSectionProps) {
  return (
    <Container
      as="section"
      className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20 md:py-28"
    >
      <div className="grid items-end gap-16 lg:grid-cols-2 lg:gap-20">
        <div>
          <Eyebrow>{content.eyebrow}</Eyebrow>

          <h1 className="max-w-2xl text-[2.5rem] font-light leading-[1.08] tracking-tight text-ink sm:text-6xl lg:text-7xl">
            {content.title}
          </h1>

          <p className="mt-8 max-w-md text-lg font-light leading-relaxed text-muted">
            {content.description}
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href={content.primaryCta.href}>{content.primaryCta.label}</Button>
            <Button href={content.secondaryCta.href} variant="secondary">
              {content.secondaryCta.label}
            </Button>
          </div>
        </div>

        <div className="aspect-[4/5] max-h-[520px] w-full max-w-md justify-self-end rounded-2xl border border-line bg-bg-subtle lg:max-w-none">
          <div className="flex h-full flex-col items-center justify-center p-10 text-center">
            <span className="text-6xl opacity-80" aria-hidden>
              {content.visual.emoji}
            </span>
            <p className="mt-8 text-sm font-medium text-ink">{content.visual.title}</p>
            <p className="mt-2 max-w-[220px] text-sm leading-relaxed text-muted">
              {content.visual.description}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
