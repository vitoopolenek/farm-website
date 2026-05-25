export const routes = {
  home: "/",
  oNas: "/o-nas",
  ponudba: "/ponudba",
  galerija: "/galerija",
  obisk: "/obisk",
  kontakt: "/kontakt",
} as const;

export type RoutePath = (typeof routes)[keyof typeof routes];
