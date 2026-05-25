import { routes } from "./routes";

export const siteName = "Sadjarstvo Leskovar";

export const siteDescription =
  "Družinska sadjarska kmetija v Oplotnici — pridelava jabolk različnih sort. Za sodelovanje nas kontaktirajte.";

export const siteTagline =
  "Domača pridelava jabolk. Za nabavo in sodelovanje nas kontaktirajte.";

export const collaborationNotice =
  "Ne prodajamo neposredno na kmetiji niti preko spleta. Če želite sodelovati z nami, nas kontaktirajte.";

export const address = {
  street: "Malahorna 21",
  city: "2317 Oplotnica",
  full: "Malahorna 21, 2317 Oplotnica",
} as const;

export const contact = {
  email: "sadjarstvo.leskovar@gmail.com",
} as const;

export const team = [
  {
    name: "Emilija Leskovar",
    phone: "+38641946389",
    phoneDisplay: "041 946 389",
  },
  { name: "Boris Polenek", phone: "+38641335245", phoneDisplay: "041 335 245" },
  { name: "Vito Polenek", phone: "+38631510206", phoneDisplay: "031 510 206" },
] as const;

export const appleVarieties = [
  { id: "jonagold", name: "Jonagold" },
  { id: "gala", name: "Gala" },
  { id: "topaz", name: "Topaz" },
  { id: "fuji", name: "Fuji" },
  { id: "zlati-delisej", name: "Zlati delišej" },
  { id: "idared", name: "Idared" },
  { id: "elstar", name: "Elstar" },
] as const;

export const navItems = [
  { href: routes.home, label: "Domov" },
  { href: routes.ponudba, label: "Ponudba" },
  { href: routes.oNas, label: "O nas" },
  { href: routes.galerija, label: "Galerija" },
  { href: routes.kontakt, label: "Kontakt" },
] as const;
