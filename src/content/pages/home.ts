import { routes } from "@/config/routes";
import { siteName } from "@/config/site";
import type { HeroContent, HighlightContent } from "@/types/content";

export const homeHero: HeroContent = {
  eyebrow: siteName,
  title: "Domača jabolka iz sadovnjaka v Oplotnici.",
  description:
    "Pridelujemo jabolka različnih sort v družinskem sadovnjaku. Za sodelovanje in informacije o ponudbi nas kontaktirajte — ne prodajamo neposredno na kmetiji niti preko spleta.",
  primaryCta: { label: "Naše sorte", href: routes.ponudba },
  secondaryCta: { label: "Kontakt", href: routes.kontakt },
  visual: {
    emoji: "🍎",
    title: "7 sort jabolk",
    description: "Jonagold, Gala, Topaz, Fuji, Zlati delišej, Idared, Elstar",
  },
};

export const homeHighlights: HighlightContent[] = [
  {
    label: "Ponudba",
    title: "Sorte jabolk",
    accent: "green",
    description:
      "V sadovnjaku gojimo Jonagold, Gala, Topaz, Fuji, Zlati delišej, Idared in Elstar.",
    href: routes.ponudba,
    linkLabel: "Vse sorte →",
  },
  {
    label: "Sezonsko",
    title: "Češnje",
    accent: "red",
    description:
      "Ob primerni letini imamo občasno na voljo tudi češnje. Razpoložljivost sporočimo ob povpraševanju.",
  },
  {
    label: "Sodelovanje",
    title: "Kontaktirajte nas",
    accent: "neutral",
    description:
      "Ne prodajamo na lokaciji ali preko spleta. Za sodelovanje nas pokličite ali pišite.",
    href: routes.kontakt,
    linkLabel: "Kontakt →",
  },
];
