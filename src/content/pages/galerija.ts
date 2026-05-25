import type { GalleryItemContent, PageMeta, PageShellContent } from "@/types/content";

export const galerijaMeta: PageMeta = {
  title: "Galerija",
  description: "Fotografije sadovnjaka, jabolk in kmetije Sadjarstva Leskovar.",
};

export const galerijaShell: PageShellContent = {
  eyebrow: "Fotografije",
  title: "Galerija",
  intro:
    "Kmalu bomo tukaj objavili fotografije sadovnjaka, žetve in kmetije. Za zdaj so prikazani začasni prostori za slike.",
};

export const galerijaItems: GalleryItemContent[] = [
  { emoji: "🍎", title: "Jabolka v sadovnjaku", tone: "orchard" },
  { emoji: "🌳", title: "Vrstice jablon", tone: "trees" },
  { emoji: "🧺", title: "Obiranje in žetev", tone: "harvest" },
  { emoji: "🏡", title: "Kmetija in okolica", tone: "farm" },
  { emoji: "🍒", title: "Sezonske češnje", tone: "cherries" },
  { emoji: "☀️", title: "Sezona v sadovnjaku", tone: "season" },
];
