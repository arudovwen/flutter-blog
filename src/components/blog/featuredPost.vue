<template>
  <article class="article">
    <div class="article__image__container">
      <img class="article__image" :src="featured.photo" />
    </div>
    <div class="article__content">
      <div class="article__sub">
        <span class="article__tag">{{ featured.tag }}</span>
        <span class="article__circle" />
        <span class="article__date">1 Hour Ago</span>
      </div>
      <h1 class="article__header">{{ featured.title }}</h1>
      <div class="article__body">
        <p class="article__text">{{ truncatedText }}</p>
      </div>

      <div class="article__footer">
        <span class="article__footer__time">3 Min Read</span>
        <router-link :to="`/post/${featured.title}/${featured.id}`">
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

const props = defineProps({
  featured: {
    type: Object,
  },
});
const truncatedText = computed(() => {
  return `${props.featured.content.substr(0, 500)}`;
});
</script>
<style lang="scss" scoped>
.article {
  display: flex;
  column-gap: 15px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 52px;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    column-gap: 0;
    row-gap: 10px;
  }
  .article__image__container {
    width: 500px;
    height: 280px;
    overflow: hidden;
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
    .article__image {
      width: 100%;
      height: 100%;
      object-fit: fill;
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
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
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
      max-width: 600px;
      margin-bottom: 8px;
    }
    .article__body {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: var(--textColor);
      flex: 1;

      .article__text {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        height: 106px;
        overflow: hidden;
        margin: 0;
      }
    }
    .article__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 36px;
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
