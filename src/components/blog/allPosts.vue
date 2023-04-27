<template>
  <div class="posts">
    <SinglePost v-for="post in content" :key="post.id" :post="post" />
  </div>
</template>
<script setup>
import { inject } from "vue";
import SinglePost from "./singlePost.vue";

const content = inject("content");
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
