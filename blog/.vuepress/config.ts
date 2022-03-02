const { path } = require("@vuepress/utils");
import { blog } from "vuepress-plugin-blog2";
export default {
  theme: path.resolve(__dirname, "./theme/index.ts"),
  title: "Arsala Khan",
  description:
    "Creating tech and art to serve humanity with love, joy & hope. Studied at UofT, interned at Google, founded Grey Software to democratize education through open software.",
  head: [["link", { rel: "icon", href: "/favicon.png" }]],
  markdown: {
    anchor: {
      permalink: false,
      permalinkBefore: false,
    },
  },
  plugins: [
    [
      "@vuepress/plugin-theme-data",
      {
        themeData: {
          logo: "https://avatars.githubusercontent.com/u/19757203",
          coverImage: "https://avatars.githubusercontent.com/u/19757203",
          base: "/",

          navItems: [
            {
              text: "Home",
              link: "/",
            },
            {
              text: "Posts",
              link: "/posts",
            },
            {
              text: "Media",
              link: "/media",
            },
          ],

          footerItems: [
            {
              text: "Latest Posts",
              link: "/posts",
            },
            {
              text: "Twitter",
              link: "https://twitter.com/arsalagrey",
            },
            {
              text: "Github",
              link: "https://github.com/ArsalaBangash",
            },
          ],
          socialLinks: {
            github: "https://github.com/ArsalaBangash",
            twitter: "https://twitter.com/arsalagrey",
          },
          author: {
            link: "https://twitter.com/arsalagrey",
            name: "Arsala Grey",
            image: "https://avatars.githubusercontent.com/u/19757203",
          },
          isSearchActive: true,
          showCover: true,
        },
      },
      blog({
        // your options
      }),
    ],
  ],
};
