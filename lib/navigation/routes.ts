export const routes = {
  home: "/",
  signin: "/signin",
  signup: "/signup",
  profile: "/profile",
  archive: "/archive",
  trash: "/trash",
} as const;

export type AppRoute = (typeof routes)[keyof typeof routes];
