<!-- eslint-disable prettier/prettier -->
<template>
  <article class="article">
    <div class="article__image__container">
      <img
        class="article__image"
        :src="post.parselyMeta['parsely-image-url']"
      />
    </div>
    <div class="article__content">
      <div class="article__sub">
        <span class="article__tag">{{
          post.parselyMeta["parsely-section"]
        }}</span>
        <span class="article__circle" />
        <span class="article__date">{{ moment(post.date).fromNow() }}</span>
      </div>
      <h1 class="article__header">{{ post.parselyMeta["parsely-title"] }}</h1>
      <div class="article__body" v-html="truncatedText"></div>

      <div class="article__footer">
        <span class="article__footer__time">3 Min Read</span>
        <router-link :to="`/post/${post.slug}/${post.id}`">
          <span class="article__footer__link"
            >Read more <img src="@/assets/images/arrow.svg"
          /></span>
        </router-link>
      </div>
    </div>
  </article>
</template>
<script setup>
import { defineProps, computed } from "vue";
import moment from "moment";

const props = defineProps({
  post: {
    type: Object,
  },
});
// eslint-disable-next-line no-unused-vars
const truncatedText = computed(() => {
  return `${props.post.excerpt.rendered.substr(0, 200)}`;
});
</script>
<style lang="scss" scoped>
.article {
  display: flex;
  row-gap: 15px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 8px;

  flex-direction: column;

  .article__image__container {
    width: 100%;
    height: 200px;
    overflow: hidden;

    .article__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      &:hover {
        -webkit-animation: kenburns-top 5s ease-out both;
        animation: kenburns-top 5s ease-out both;
      }
    }
  }
  .article__content {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 2px;
    width: 100%;

    .article__sub {
      display: flex;
      column-gap: 4px;
      align-items: center;
      margin-bottom: 8px;
      .article__tag {
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        color: var(--subColor);
      }
      .article__circle {
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: var(--textColor);
      }
      .article__date {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--textColor);
      }
    }
    .article__header {
      font-style: normal;
      font-weight: 900;
      font-size: 22px;
      line-height: 26px;
      color: var(--headerColor);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 320px;
      margin-bottom: 8px;

      @media only screen and (max-width: 1024px) {
        max-width: 500px;
      }
      @media only screen and (max-width: 996px) {
        max-width: 400px;
      }
      @media only screen and (max-width: 768px) {
        max-width: 300px;
      }
      @media only screen and (max-width: 556px) {
        max-width: 100%;
        white-space: normal;
      }
    }
    .article__body {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: var(--textColor);
      flex: 1;
      p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        height: 74px;
        overflow: hidden;
      }
    }
    .article__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .article__footer__time {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--textColor);
      }
      .article__footer__link {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--primary);
        display: flex;
        align-items: center;
        column-gap: 2px;
      }
    }
  }
}
</style>
