<template>
  <default-layout>
    <template #content>
      <LoaderComponent v-if="isLoading" />
      <section class="post__section" v-else>
        <PostIndex />
      </section>
    </template>
  </default-layout>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

import DefaultLayout from "@/components/layouts/defaultLayout.vue";
import PostIndex from "@/components/post/postIndex.vue";
import LoaderComponent from "@/components/loaderComponent.vue";
import { getPostById, getMorePosts } from "@/services/blogservice";

const route = useRoute();
const store = useStore();
let id = route.params.id;
const isLoading = ref(true);

// Fetch post by id
const fetchPost = async ($state) => {
  getPostById({ id })
    .then(({ data }) => {
      isLoading.value = false;

      store.commit("SET_POST", data);
    })
    .catch(() => {
      $state.error();
      isLoading.value = false;
    });
};

// Fetch more post excluding current
const fetchMorePost = async () => {
  getMorePosts({ page: 1, perPage: 3, id })
    .then(({ data }) => {
      isLoading.value = false;
      store.commit("SET_MORE_POSTS", data);
    })
    .catch(() => {
      isLoading.value = false;
    });
};

onMounted(() => {
  fetchPost();
  fetchMorePost();
});

// watch route change and update
watch(route, () => {
  isLoading.value = true;
  id = route.params.id;
  fetchPost();
  fetchMorePost();
});
</script>

<style scoped lang="scss">
.post__section {
  padding-top: 42px;
}
</style>
