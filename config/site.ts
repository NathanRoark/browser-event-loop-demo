export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Natloop",
  url: "https://natloop.nathanroark.dev",
  ogImage: "https://natloop.nathanroark.dev/og.jpg",
  description:
    "CS690 - Advanced Operating Systems.",
  mainNav: [
    {
      title: "Playground",
      href: "/playground",
    },
    {
      title: "About",
      href: "/about",
    },
  ],
  links: {
    twitter: "https://twitter.com/nathanroark",
    github: "https://github.com/nathanroark",
  },
}
