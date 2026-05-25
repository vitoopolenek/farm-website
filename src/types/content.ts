export type Accent = "green" | "red" | "neutral";

export type PageMeta = {
  title: string;
  description: string;
};

export type PageShellContent = {
  eyebrow?: string;
  title: string;
  intro?: string;
};

export type TextBlock = {
  paragraphs?: string[];
  listItems?: string[];
};

export type InfoCardContent = {
  label: string;
  title: string;
  accent?: Accent;
  email?: string;
  body: TextBlock;
};

export type GalleryItemContent = {
  emoji: string;
  title: string;
  tone: string;
};

export type HighlightContent = {
  label: string;
  title: string;
  description: string;
  accent: Accent;
  href?: string;
  linkLabel?: string;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  visual: {
    emoji: string;
    title: string;
    description: string;
  };
};

export type StoryBeat = {
  id: string;
  step: string;
  title: string;
  text: string;
};

export type OurStoryContent = {
  headline: string;
  beats: StoryBeat[];
};

export type PonudbaPageContent = {
  meta: PageMeta;
  shell: PageShellContent;
  varietiesIntro: string;
  cherriesNote: string;
};

export type CardsPageContent = {
  meta: PageMeta;
  shell: PageShellContent;
  cards: InfoCardContent[];
  footerNote?: {
    beforeContact: string;
    contactLabel: string;
    contactHref: string;
    middle: string;
    visitLabel: string;
    visitHref: string;
    afterVisit: string;
  };
  cta?: { label: string; href: string };
};
