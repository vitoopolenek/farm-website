import type { PageShellContent } from "@/types/content";
import { Container } from "./container";
import { Eyebrow } from "./eyebrow";

type PageShellProps = PageShellContent & {
  children?: React.ReactNode;
};

export function PageShell({ eyebrow, title, intro, children }: PageShellProps) {
  return (
    <div>
      <Container as="section" className="py-20 md:py-28">
        {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}

        <h1 className="max-w-3xl text-4xl font-light leading-[1.1] tracking-tight text-ink md:text-5xl">
          {title}
        </h1>

        {intro ? (
          <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted">
            {intro}
          </p>
        ) : null}

        {children ? <div className="mt-16">{children}</div> : null}
      </Container>
    </div>
  );
}
