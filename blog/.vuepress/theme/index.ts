const { path } = require("@vuepress/utils");

const theme = {
  name: "vuepress-theme-ghost-casper",
  layouts: {
    Layout: path.resolve(__dirname, "./layouts/Layout.vue"),
    Page: path.resolve(__dirname, "./layouts/Page.vue"),
    Post: path.resolve(__dirname, "./layouts/Post.vue"),
    Posts: path.resolve(__dirname, "./layouts/Posts.vue"),
    404: path.resolve(__dirname, "./layouts/404.vue"),
  },
  //   clientAppEnhanceFiles: path.resolve(__dirname, "./clientAppEnhance.ts"),
  plugins: [
    "@vuepress/register-components",
    {
      componentsDir: path.resolve(__dirname, "./components"),
    },
  ],
};

export default theme;
