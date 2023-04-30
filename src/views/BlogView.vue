<template>
  <default-layout>
    <template #content>
      <LoaderComponent v-if="pageLoading" />

      <div v-else>
        <FeaturedPost />
        <AllPost />
        <CallToAction />
      </div>
    </template>
  </default-layout>
</template>

<script setup>
import { provide, ref, onMounted } from "vue";
import { useStore } from "vuex";

import LoaderComponent from "@/components/loaderComponent.vue";
import FeaturedPost from "@/components/blog/featuredPost.vue";
import AllPost from "@/components/blog/allPosts.vue";
import DefaultLayout from "@/components/layouts/defaultLayout.vue";
import CallToAction from "@/components/callToAction.vue";
import { getPosts } from "@/services/blogservice";

let page = 1;
let perPage = 10;
const pageLoading = ref(true);
const isLoading = ref(true);
const store = useStore();

// Fetching all posts
const fetchPosts = async () => {
  isLoading.value = true;
  getPosts({ page, perPage })
    .then(({ data }) => {
      pageLoading.value = isLoading.value = false;

      store.commit("SET_POSTS", data);
      page++;
    })
    .catch(() => {
      pageLoading.value = isLoading.value = false;
    });
};

onMounted(() => {
  fetchPosts();
});

provide("fetchPosts", fetchPosts);
provide("isLoading", isLoading);
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
