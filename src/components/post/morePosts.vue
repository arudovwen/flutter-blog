<template>
  <section class="more__posts">
    <h2 class="more_posts__h2">More Articles</h2>
    <div class="more__posts__post">
      <SinglePost v-for="post in morePosts" :key="post.id" :post="post" />
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import { useStore } from "vuex";

import SinglePost from "../blog/singlePost.vue";

const store = useStore();

const morePosts = computed(() => {
  return store.getters.morePosts;
});
</script>

<style lang="scss" scoped>
.more__posts {
  .more__posts__post {
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

  .more_posts__h2 {
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    color: var(--headerColor);
    margin-bottom: 20px;
  }
}
</style>
