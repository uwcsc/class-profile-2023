export interface PageRoute {
  name: string;
  url: string;
}

type PageID =
  | "home"
  | "demographics"
  | "academics"
  | "coop"
  | "lifestyleAndInterests"
  | "intimacyAndDrugs"
  | "postGrad"
  | "friends"
  | "miscellaneous"
  | "mentalHealth"
  | "personal"
  | "contributors";

export type PageRoutes = { [key in PageID]: PageRoute };
export const pageRoutes: PageRoutes = {
  home: {
    name: "Home",
    url: "/",
  },
  demographics: {
    name: "Demographics",
    url: "/demographics",
  },
  academics: {
    name: "Academics",
    url: "/academics",
  },
  coop: {
    name: "Co-op",
    url: "/coop",
  },
  lifestyleAndInterests: {
    name: "Lifestyle and Interests",
    url: "/lifestyle-and-interests",
  },
  intimacyAndDrugs: {
    name: "Intimacy and Drugs",
    url: "/intimacy-and-drugs",
  },
  postGrad: {
    name: "Post-grad",
    url: "/post-grad",
  },
  friends: {
    name: "Friends",
    url: "/friends",
  },
  miscellaneous: {
    name: "Miscellaneous",
    url: "/miscellaneous",
  },
  mentalHealth: {
    name: "Mental Health",
    url: "/mental-health",
  },
  personal: {
    name: "Personal",
    url: "/personal",
  },
  contributors: {
    name: "Contributors",
    url: "/contributors",
  },
};
