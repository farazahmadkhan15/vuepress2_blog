<template>
  <nav class="site-nav" style="overflow: visible">
    <div class="site-nav-left-wrapper" style="height: 100%">
      <div class="site-nav-left" style="margin-top: auto">
        <router-link v-if="!isHome && logo" class="site-nav-logo" to="/">
          <img :src="$withBase(logo)" :alt="siteData.title" />
        </router-link>
        <router-link v-if="!isHome && !logo" class="site-nav-logo" to="/">
          {{ siteData.title }}
        </router-link>
        <div class="site-nav-content">
          <ul class="nav" v-if="navItems" role="menu">
            <li v-for="(item, index) in navItems" role="menuitem" :key="index">
              <router-link :class="{ active: item.active }" :to="item.link">{{
                item.text
              }}</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="site-nav-right">
      <SearchBox v-if="isSearchActive" />
      <div class="social-links">
        <social-link
          v-for="(channel, index) in socialLinks"
          :url="channel.url"
          :type="channel.type"
          :key="index"
        />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { useSiteData } from "@vuepress/client";
import { ref } from "vue";
const type = ref("home");

const themeData = useThemeData();
const siteData = useSiteData();
const { logo, socialLinks, isSearchActive, navItems } = themeData;
</script>

<script>
import SocialLink from "./SocialLink.vue";
export default {
  components: { SocialLink },
  computed: {
    isHome() {
      return this.type === "home";
    },
  },
};
</script>
