import { routes } from "./routes";

/** Maps each public URL to its feature module (see src/features/). */
export const pageRegistry = [
  { path: routes.home, feature: "home" },
  { path: routes.oNas, feature: "o-nas" },
  { path: routes.ponudba, feature: "ponudba" },
  { path: routes.galerija, feature: "galerija" },
  { path: routes.obisk, feature: "obisk" },
  { path: routes.kontakt, feature: "kontakt" },
] as const;
