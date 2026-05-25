import type { Accent } from "@/types/content";

export const accentLabelClass: Record<Accent, string> = {
  green: "text-accent",
  red: "text-apple",
  neutral: "text-muted",
};

export const accentBorderClass: Record<Accent, string> = {
  green: "border-t-accent",
  red: "border-t-apple",
  neutral: "border-t-line",
};

export const accentGlowClass: Record<Accent, string> = {
  green: "from-accent/5",
  red: "from-apple/5",
  neutral: "from-ink/5",
};
