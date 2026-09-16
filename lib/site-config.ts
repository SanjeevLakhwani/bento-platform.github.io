export const siteUrl = "https://bento-platform.github.io";
export const githubOrgUrl = "https://github.com/Bento-Platform";
export const siteName = "Bento Platform";

export const pagePaths = ["", "goals", "features", "releases", "roadmap"] as const;
export type PagePath = (typeof pagePaths)[number];
