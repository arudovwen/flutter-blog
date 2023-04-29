<template>
  <section class="post fade-in" v-if="post">
    <div class="post__image__container" v-if="post?.parselyMeta">
      <img
        class="post__image"
        :src="post?.parselyMeta['parsely-image-url']"
        :alt="post?.slug"
        loading="lazy"
      />
    </div>
    <div class="post__content" v-if="post?.parselyMeta">
      <div class="post__sub">
        <span class="post__tag"
          >By {{ post?.parselyMeta["parsely-author"]?.toString() }}</span
        >

        <span class="post__date">{{ moment(post.date).fromNow() }}</span>
      </div>
      <h1 class="post__header" v-html="post?.parselyMeta['parsely-title']"></h1>
      <div class="post__body" v-html="post.content.rendered"></div>
    </div>
  </section>
</template>
<script setup>
import { computed } from "vue";
import moment from "moment";
import { useStore } from "vuex";

const store = useStore();
const post = computed(() => {
  return store.getters.post;
});
</script>
<style lang="scss" scoped>
.post {
  display: flex;
  row-gap: 15px;
  background: #ffffff;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto 8em;

  .post__image__container {
    width: 100%;
    height: 200px;

    .post__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .post__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2px;

    width: 100%;

    .post__sub {
      display: flex;
      column-gap: 4px;
      align-items: center;
      margin-bottom: 10px;
      .post__tag {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--subColor);
      }
      .post__date {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--textColor);
      }
    }
    .post__header {
      font-style: normal;
      font-weight: 900;
      font-size: 32px;
      line-height: 38px;
      color: var(--headerColor);
      margin-bottom: 23px;
    }
    .post__body {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: var(--textColor);
      flex: 1;
      height: 74px;

      .post__text {
      }
    }
  }
}
</style>
