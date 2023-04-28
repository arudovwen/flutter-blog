<template>
  <default-layout>
    <template #content>
      <LoaderComponent v-if="isLoading" />

      <div v-else>
        <FeaturedPost />
        <AllPost />
      </div>
      <InfiniteLoading @infinite="fetchArticles" />
      <CallToAction v-if="!isLoading" />
    </template>
  </default-layout>
</template>

<script setup>
import { provide, ref } from "vue";
import { useStore } from "vuex";
import InfiniteLoading from "v3-infinite-loading";
import "v3-infinite-loading/lib/style.css";

import LoaderComponent from "@/components/loaderComponent.vue";
import FeaturedPost from "@/components/blog/featuredPost.vue";
import AllPost from "@/components/blog/allPosts.vue";
import DefaultLayout from "@/components/layouts/defaultLayout.vue";
import CallToAction from "@/components/callToAction.vue";
import { getPosts } from "@/services/blogservice";

let page = 1;
let perPage = 10;
const isLoading = ref(true);
const store = useStore();

// Methods
const fetchArticles = async ($state) => {
  getPosts({ page, perPage })
    .then(({ data }) => {
      isLoading.value = false;
      if (data.length < perPage) $state.complete();
      else {
        $state.loaded();
      }
      store.commit("SET_POSTS", data);
      page++;
    })
    .catch(() => {
      $state.error();
      isLoading.value = false;
    });
};

provide("fetchArticles", fetchArticles);
</script>
