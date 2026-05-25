import { appleVarieties } from "@/config/site";

type AppleVarietiesSectionProps = {
  intro: string;
  cherriesNote: string;
};

export function AppleVarietiesSection({
  intro,
  cherriesNote,
}: AppleVarietiesSectionProps) {
  return (
    <div className="space-y-16">
      <p className="max-w-2xl text-[15px] leading-relaxed text-muted">{intro}</p>

      <ul className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {appleVarieties.map((variety, index) => (
          <li
            key={variety.id}
            className="flex min-h-[7rem] flex-col justify-center bg-card px-6 py-8"
          >
            <span className="text-[11px] font-medium tabular-nums text-muted">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="mt-2 text-xl font-medium tracking-tight text-ink">
              {variety.name}
            </span>
          </li>
        ))}
      </ul>

      <p className="max-w-xl border-t border-line pt-8 text-sm leading-relaxed text-muted">
        <span className="font-medium text-ink">Češnje — </span>
        {cherriesNote}
      </p>
    </div>
  );
}
