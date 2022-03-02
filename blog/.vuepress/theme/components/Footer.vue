<template>
  <footer class="site-footer outer">
    <div class="site-footer-content inner">
      <section class="copyright">
        <a :href="$withBase('/')">{{ siteData.title }}</a> &copy; {{ year }}
      </section>
      <nav class="site-footer-nav">
        <a
          v-for="(item, index) in themeData.footerItems"
          :key="index"
          :href="item.external ? item.link : $withBase(item.link)"
          :target="item.external ? '_blank' : '_top'"
          rel="noopener"
          >{{ item.text }}</a
        >
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { computed } from "vue";
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import { useSiteData } from "@vuepress/client";
const themeData = useThemeData();
const siteData = useSiteData();
const year = computed(() => {
  return new Date().getFullYear();
});
</script>
