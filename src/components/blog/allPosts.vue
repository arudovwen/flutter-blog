<!-- eslint-disable no-unused-vars -->
<template>
  <div class="posts">
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import SinglePost from "./singlePost.vue";

const store = useStore();

// Setting all post except first post
const posts = computed(() => store.getters.posts.slice(1));
</script>
<style lang="scss" scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3em;

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 556px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
