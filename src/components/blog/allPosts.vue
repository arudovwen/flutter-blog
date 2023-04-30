<!-- eslint-disable no-unused-vars -->
<template>
  <div class="posts">
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
  </div>
  <div class="load__more">
    <button class="load__more__btn" @click="fetchPosts()" :disabled="c">
      {{ isLoading ? "Loading..." : " Load more" }}
    </button>
  </div>
</template>
<script setup>
import { computed, inject } from "vue";
import { useStore } from "vuex";

import SinglePost from "./singlePost.vue";

const store = useStore();
const fetchPosts = inject("fetchPosts");
const isLoading = inject("isLoading");

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
.load__more {
  display: flex;
  justify-content: center;
  margin-top: 2.4rem;

  .load__more__btn {
    padding: 8px 24px;
    outline: none;
    border: 1px solid var(--black);
    font-size: 14px;
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      opacity: 0.8;
      -webkit-animation: heartbeat 1.5s ease-in-out both;
      animation: heartbeat 1.5s ease-in-out both;
    }
  }
}
</style>
