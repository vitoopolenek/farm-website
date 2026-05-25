import { cn } from "@/lib/cn";
import { accentLabelClass } from "@/lib/accent-styles";
import type { InfoCardContent } from "@/types/content";
import { TextBlockContent } from "./text-block";

type InfoCardProps = InfoCardContent;

export function InfoCard({ label, title, accent = "neutral", email, body }: InfoCardProps) {
  return (
    <article className="surface-card rounded-2xl p-8 md:p-10">
      <p
        className={cn(
          "text-[11px] font-medium uppercase tracking-[0.2em]",
          accentLabelClass[accent],
        )}
      >
        {label}
      </p>
      <h2 className="mt-4 text-xl font-medium tracking-tight text-ink md:text-2xl">
        {title}
      </h2>
      <div className="mt-4 text-[15px] leading-relaxed text-muted">
        {email ? (
          <p>
            <a
              href={`mailto:${email}`}
              className="font-medium text-ink underline decoration-line underline-offset-4 transition hover:decoration-ink"
            >
              {email}
            </a>
          </p>
        ) : null}
        <TextBlockContent content={body} />
      </div>
    </article>
  );
}
