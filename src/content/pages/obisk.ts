import { routes } from "@/config/routes";
import { address } from "@/config/site";
import type { CardsPageContent } from "@/types/content";

export const obiskPage: CardsPageContent = {
  meta: {
    title: "Lokacija",
    description: `Sadjarstvo Leskovar — ${address.full}. Brez neposredne prodaje na kmetiji.`,
  },
  shell: {
    eyebrow: "Kmetija",
    title: "Lokacija",
    intro:
      "Naša kmetija se nahaja v Oplotnici. Na lokaciji ne izvajamo neposredne prodaje — za sodelovanje nas kontaktirajte vnaprej.",
  },
  cards: [
    {
      label: "Naslov",
      title: address.city,
      accent: "neutral",
      body: {
        paragraphs: [address.street, address.city],
      },
    },
    {
      label: "Prodaja",
      title: "Brez neposredne prodaje",
      accent: "green",
      body: {
        paragraphs: [
          "Jabolk ne prodajamo na kmetiji niti preko spletne trgovine. Za nabavo, partnerstva ali druge oblike sodelovanja nas kontaktirajte.",
        ],
      },
    },
    {
      label: "Kontakt",
      title: "Predhodni dogovor",
      accent: "neutral",
      body: {
        paragraphs: [
          "Če nas želite obiskati ali imate poslovno povpraševanje, nas pokličite ali pišite — dogovorimo se glede na sezono in razpoložljivost.",
        ],
      },
    },
  ],
  cta: { label: "Kontaktirajte nas", href: routes.kontakt },
};
