import Link from "next/link";
import { appleVarieties } from "@/config/site";
import { routes } from "@/config/routes";
import { Container } from "@/components/ui";

export function ApplePreviewSection() {
  return (
    <section className="border-y border-line bg-card py-14 md:py-16">
      <Container>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Ponudba
            </p>
            <h2 className="mt-3 text-2xl font-light tracking-tight text-ink md:text-3xl">
              Naše sorte jabolk
            </h2>
          </div>
          <Link
            href={routes.ponudba}
            className="text-sm font-medium text-ink transition hover:text-accent"
          >
            Celotna ponudba →
          </Link>
        </div>

        <ul className="mt-10 flex flex-wrap gap-3">
          {appleVarieties.map((v) => (
            <li key={v.id}>
              <span className="inline-block rounded-full border border-line bg-bg px-4 py-2 text-sm font-medium text-ink">
                {v.name}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
