<template>
  <default-layout>
    <template #content>
      <LoaderComponent v-if="isLoading" />

      <div v-else>
        <FeaturedPost />
        <AllPost />
      </div>
      <div class="infinite__loader">
        <InfiniteLoading @infinite="fetchPosts" />
      </div>
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

// Fetch all posts
const fetchPosts = async ($state) => {
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

provide("fetchPosts", fetchPosts);
</script>
<style scoped lang="scss">
.infinite__loader {
  padding: 24px;
  display: flex;
  justify-content: center;
}
.result {
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-weight: 300;
  width: 400px;
  padding: 10px;
  text-align: center;
  margin: 0 auto 10px auto;
  background: #eceef0;
  border-radius: 10px;
}
</style>
