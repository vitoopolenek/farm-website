import { CardGrid } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { GalleryItemContent } from "@/types/content";

const toneClasses: Record<string, string> = {
  orchard: "gallery-tone-orchard",
  trees: "gallery-tone-trees",
  harvest: "gallery-tone-harvest",
  farm: "gallery-tone-farm",
  cherries: "gallery-tone-cherries",
  season: "gallery-tone-season",
};

type GalleryGridProps = {
  items: GalleryItemContent[];
};

export function GalleryGrid({ items }: GalleryGridProps) {
  return (
    <CardGrid columns="three">
      {items.map((item) => (
        <figure
          key={item.title}
          className="overflow-hidden rounded-2xl border border-line bg-card"
        >
          <div
            className={cn(
              "flex aspect-[4/3] flex-col items-center justify-center p-8 text-center",
              toneClasses[item.tone] ?? item.tone,
            )}
          >
            <span className="text-4xl opacity-70" aria-hidden>
              {item.emoji}
            </span>
            <figcaption className="mt-5 text-sm font-medium text-ink">
              {item.title}
            </figcaption>
            <p className="mt-1 text-[11px] uppercase tracking-wider text-muted">
              Kmalu
            </p>
          </div>
        </figure>
      ))}
    </CardGrid>
  );
}
