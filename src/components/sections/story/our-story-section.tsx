"use client";

import { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/cn";
import type { OurStoryContent } from "@/types/content";

type OurStorySectionProps = OurStoryContent & {
  className?: string;
};

export function OurStorySection({
  headline,
  beats,
  className,
}: OurStorySectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);
  const beatRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (reducedMotion) {
      setActiveIndex(beats.length - 1);
      return;
    }

    const elements = beatRefs.current.filter(Boolean) as HTMLElement[];
    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = elements.indexOf(entry.target as HTMLElement);
          if (index >= 0) setActiveIndex(index);
        });
      },
      { rootMargin: "-42% 0px -42% 0px", threshold: 0 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [beats.length, reducedMotion]);

  const progress =
    beats.length > 1 ? (activeIndex / (beats.length - 1)) * 100 : 100;

  const scrollToBeat = (index: number) => {
    beatRefs.current[index]?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <section
      id="nasa-zgodba"
      className={cn("border-t border-line bg-bg py-24 md:py-32", className)}
    >
      <Container>
        <div className="grid gap-20 lg:grid-cols-[minmax(0,280px)_1fr] lg:gap-28">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
              Naša zgodba
            </p>
            <h2 className="mt-5 max-w-xs text-3xl font-light leading-[1.15] tracking-tight text-ink md:text-[2.5rem]">
              {headline}
            </h2>

            <div className="mt-14 hidden lg:flex lg:gap-8">
              <div className="relative w-px shrink-0 bg-line">
                <div
                  className={cn(
                    "absolute inset-x-0 top-0 w-px origin-top bg-ink transition-[height] duration-700 ease-out",
                    !reducedMotion && "story-progress-fill",
                  )}
                  style={
                    reducedMotion
                      ? { height: "100%" }
                      : { height: `${progress}%` }
                  }
                  aria-hidden
                />
              </div>

              <ul className="space-y-5" role="tablist" aria-label="Koraki zgodbe">
                {beats.map((beat, index) => (
                  <li key={beat.id}>
                    <button
                      type="button"
                      role="tab"
                      aria-selected={index === activeIndex}
                      onClick={() => scrollToBeat(index)}
                      className={cn(
                        "text-left text-sm transition-colors duration-300",
                        index === activeIndex
                          ? "font-medium text-ink"
                          : "text-muted hover:text-ink",
                      )}
                    >
                      {beat.step}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          <div className="relative">
            {beats.map((beat, index) => (
              <article
                key={beat.id}
                ref={(el) => {
                  beatRefs.current[index] = el;
                }}
                className={cn(
                  "story-beat-in flex flex-col justify-center py-16 md:min-h-[75vh] md:py-24",
                  reducedMotion
                    ? "story-beat-active"
                    : index === activeIndex
                      ? "story-beat-active"
                      : "story-beat-out",
                )}
              >
                <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-muted lg:hidden">
                  {beat.step}
                </span>
                <h3 className="mt-3 max-w-xl text-[2rem] font-light leading-[1.12] tracking-tight text-ink md:mt-0 md:text-5xl lg:text-[3.25rem]">
                  {beat.title}
                </h3>
                <p className="mt-6 max-w-md text-base leading-[1.75] text-muted md:text-lg">
                  {beat.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
