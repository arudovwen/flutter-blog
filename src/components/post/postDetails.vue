<template>
  <section class="article">
    <div class="article__image__container">
      <img class="article__image" :src="post.photo" />
    </div>
    <div class="article__content">
      <div class="article__sub">
        <span class="article__tag">By {{ post.tag }}</span>

        <span class="article__date">1 Hour Ago</span>
      </div>
      <h1 class="article__header">{{ post.title }}</h1>
      <div class="article__body">
        {{ post.content }}
      </div>
    </div>
  </section>
</template>
<script setup>
import { inject } from "vue";

const post = inject("post");
</script>
<style lang="scss" scoped>
.article {
  display: flex;
  row-gap: 15px;
  background: #ffffff;
  flex-direction: column;
  max-width: 768px;
  margin: 0 auto 8em;

  .article__image__container {
    width: 100%;
    height: 200px;

    .article__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
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
      margin-bottom: 10px;
      .article__tag {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--subColor);
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
      font-size: 32px;
      line-height: 38px;
      color: var(--headerColor);
      margin-bottom: 23px;
    }
    .article__body {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: var(--textColor);
      flex: 1;
      height: 74px;

      .article__text {
      }
    }
  }
}
</style>
