import { cn } from "@/lib/cn";
import type { TextBlock } from "@/types/content";

type TextBlockProps = {
  content: TextBlock;
};

export function TextBlockContent({ content }: TextBlockProps) {
  return (
    <>
      {content.paragraphs?.map((paragraph) => (
        <p
          key={paragraph}
          className={cn("not-first:mt-3", paragraph.startsWith("(") && "text-sm")}
        >
          {paragraph}
        </p>
      ))}

      {content.listItems ? (
        <ul className="mt-4 space-y-2 text-muted">
          {content.listItems.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" aria-hidden />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}
