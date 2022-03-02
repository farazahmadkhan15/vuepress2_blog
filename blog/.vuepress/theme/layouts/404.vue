<template>
  <div class="site-wrapper">
    <site-header>
      <nav class="site-nav-center">
        <a :href="base" class="site-nav-logo">
          <img v-if="logo" class="site-logo" :src="logo" :alt="title" />
          <span v-else>{{ title }}</span>
        </a>
      </nav>
    </site-header>

    <main id="site-main" class="site-main outer">
      <div class="inner">
        <error description="Page not found" code="404" :link="base" />
      </div>
    </main>

    <aside class="outer" v-if="posts.length > 0">
      <div class="inner">
        <div class="post-feed">
          <card
            v-for="(post, index) in posts.slice(0, 3)"
            :post="post"
            :key="index"
          />
        </div>
      </div>
    </aside>
  </div>
</template>

<script setup>
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { useSiteData } from "@vuepress/client";
// import { useBlogCategory } from "vuepress-plugin-blog2";

import { ref } from "vue";
const themeData = useThemeData();
const siteData = useSiteData();
const { title } = siteData;
const { logo, base } = themeData;
const type = ref("home");
// const posts = useBlogCategory("futurama");
const posts = [];
</script>

<script>
import { mapActions, mapGetters } from "vuex";

import SiteHeader from "../components/Header.vue";
import Card from "../components/Card.vue";
import Error from "../components/Error.vue";

export default {
  components: { Card, Error },
  data() {
    return {
      header: {
        showCover: false,
        coverImage: null,
        title: null,
        description: null,
      },
    };
  },
  components: { SiteHeader, Card, Error },
  methods: {
    ...mapActions(["updateSite", "updatePage", "updateParams"]),
    updateLayoutClass() {
      this.$el.parentNode.className = `error-template`;
    },
  },
  computed: {
    ...mapGetters(["type", "blog", "posts"]),
  },
  watch: {
    $page() {
      this.updatePage(this.$page);
      this.updateLayoutClass();
    },
    $route() {
      this.updateParams(this.$route.params);
    },
  },
  mounted() {
    this.updatePage(this.$page);
    this.updateSite(this.$site);
    this.updateParams(this.$route.params);
    this.updateLayoutClass();
  },
};
</script>

<style>
@import "../styles/global.css";
@import "../styles/screen.css";
</style>
