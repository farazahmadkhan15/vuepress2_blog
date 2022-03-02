<template>
  <main id="site-main" class="site-main outer">
    <div class="inner posts">
      <div class="post-feed">
        <card
          v-for="(post, index) in posts"
          :post="post"
          :key="index"
          :large="!index % 6"
        />
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const type = ref("home");
</script>

<script>
import Card from "../components/Card.vue";
import Error from "../components/Error.vue";

export default {
  components: { Card, Error },
  props: {
    posts: {
      type: Array,
      default: [],
    },
  },
};
</script>
