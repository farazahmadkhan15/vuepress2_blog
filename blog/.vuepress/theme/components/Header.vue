<template>
  <header :class="headerClasses">
    <div v-if="isArchive" class="outer site-nav-main">
      <div class="inner">
        <slot name="header"></slot>
      </div>
    </div>
    <div
      class="outer"
      :class="headerBackgroundClasses"
      :style="backgroundStyle"
    >
      <div class="inner">
        <slot name="header" v-if="isHome || isPage || isPost"></slot>
        <div class="site-header-content" v-if="showCover">
          <h1 class="site-title">
            <img
              v-if="header.logo"
              class="site-logo"
              :src="$withBase(header.logo)"
              :alt="header.title"
            />
            <span v-else>{{ header.title }}</span>
          </h1>
          <h2 class="site-description" v-if="header.description">
            {{ header.description }}
          </h2>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { useSiteData } from "@vuepress/client";
import { ref } from "vue";
const themeData = useThemeData();
const siteData = useSiteData();
const { title, description } = siteData;
const { logo, showCover, coverImage } = themeData;
const type = ref("home");
</script>

<script>
export default {
  computed: {
    backgroundStyle() {
      if (this.coverImage) {
        return {
          "background-image": `url(${this.$withBase(this.coverImage)})`,
        };
      }

      return {};
    },

    isHome() {
      return this.type === "home";
    },

    isArchive() {
      return (
        this.type === "category" ||
        this.type === "tags" ||
        this.type === "posts"
      );
    },

    isPage() {
      return this.type === "page";
    },

    isPost() {
      return this.type === "post";
    },

    headerClasses() {
      return {
        "site-header": this.isPage || this.isPost,
        "site-home-header": this.isHome,
        "site-archive-header": this.isArchive,
      };
    },

    headerBackgroundClasses() {
      const headerImage = !!this.coverImage;
      return {
        "responsive-header-img": headerImage,
        "no-image": !headerImage,
        "site-header-background": this.isArchive || this.isHome,
        "site-nav-main": this.isPage || this.isPost,
      };
    },
  },
};
</script>
