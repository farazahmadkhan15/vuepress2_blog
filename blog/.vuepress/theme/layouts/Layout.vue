<template>
  <div class="site-wrapper">
    <site-header>
      <site-navigation slot="header"></site-navigation>
    </site-header>
    <posts :posts="articles"></posts>
    <site-footer />
  </div>
</template>

<script setup>
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { useBlogCategory } from "vuepress-plugin-blog2";
import { ref } from "vue";
const type = ref("home");

const articles = useBlogCategory("futurama");
console.log("🚀 ~ file: Layout.vue ~ line 19 ~ articles", articles);
</script>

<script>
// import Post from "./Post.vue";
import Page from "./Page.vue";
import Posts from "./Posts.vue";
import SiteHeader from "../components/Header.vue";
import SiteFooter from "../components/Footer.vue";
import SiteNavigation from "../components/Navigation.vue";

export default {
  components: { Page, Posts, SiteFooter, SiteHeader, SiteNavigation },
  methods: {
    // ...mapActions(["updateSite", "updatePage", "updateParams"]),
    updateLayoutClass() {
      this.$el.parentNode.className = `${this.type}-template`;
    },
  },
  computed: {
    content() {
      switch (this.type) {
        case "home":
        case "tags":
        case "posts":
        case "category":
          return "posts";
        // case "post":
        //   return "post";
        // case "page":
        //   return "page";
      }
    },
  },
  // watch: {
  //   $page() {
  //     this.updatePage(this.$page);
  //     this.updateLayoutClass();
  //   },
  //   $route() {
  //     this.updateParams(this.$route.params);
  //     this.updateLayoutClass();
  //   },
  // },
  // mounted() {
  //   this.updateSite({ site: this.$site, themeConfig: this.themeData });
  //   this.updatePage(this.$page);
  //   console.log(
  //     "🚀 ~ file: Layout.vue ~ line 66 ~ mounted ~ this.$page",
  //     this.$page
  //   );
  //   // TODO: Check this mutation
  //   this.updateParams(this.$route.params);
  //   console.log(this.$route);
  //   this.updateLayoutClass();
  // },
};
</script>

<style>
@import "../styles/global.css";
@import "../styles/screen.css";

/* Code section
  /* ---------------------------------------------------------- */
div[class^="language-"] {
  min-width: 100%;
  max-width: 100%;
}
.search-box input {
  width: 20rem;
}
</style>
