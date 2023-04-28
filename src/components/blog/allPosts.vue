<!-- eslint-disable no-unused-vars -->
<template>
  <div class="posts">
    <SinglePost v-for="post in content" :key="post.id" :post="post" />
  </div>
  <!-- <InfiniteLoading @infinite="fetchArticles" /> -->
</template>
<script setup>
import { inject, ref } from "vue";
// eslint-disable-next-line no-unused-vars
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";
import axios from "axios";

import SinglePost from "./singlePost.vue";

let page = 1;
const articles = ref([]);
const content = inject("content");

// eslint-disable-next-line no-unused-vars
const fetchArticles = async ($state) => {
  await axios
    .get(`https://jsonplaceholder.typicode.com/comments?_limit=4&_page=${page}`)
    .then((result) => {
      if (result.data.length < 4) $state.complete();
      else {
        articles.value.push(...result.data);
        $state.loaded();
      }
      page++;
    })
    .catch(() => {
      $state.error();
    });
};
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
