<!-- eslint-disable prettier/prettier -->
<template>
  <article class="post" v-animate-onscroll="'fade-in'" v-if="post">
    <div
      class="post__image__container"
      v-if="post?.parselyMeta"
      role="img"
      aria-label="Post featured image"
    >
      <img
        class="post__image"
        :src="post.parselyMeta['parsely-image-url'].replace('w=680', 'w=339')"
        :alt="post.slug"
        loading="lazy"
      />
    </div>
    <div class="post__content" v-if="post?.parselyMeta">
      <div class="post__sub">
        <span class="post__tag">{{ post.parselyMeta["parsely-section"] }}</span>
        <span class="post__circle" />
        <span class="post__date">{{ moment(post.date).fromNow() }}</span>
      </div>
      <router-link
        :to="`/post/${encodeURIComponent(
          post.parselyMeta['parsely-title'].replaceAll(' ', '-')
        )}/${post.id}`"
      >
        <h2
          class="post__header"
          v-html="post?.parselyMeta['parsely-title']"
        ></h2>
      </router-link>
      <div class="post__body">
        {{ truncate(post?.excerpt.rendered, 150, "...") }}
      </div>

      <div class="post__footer">
        <span class="post__footer__time"
          >{{ Math.floor(Math.random() * 11) + 3 }} Min Read</span
        >
        <router-link
          :to="`/post/${post.id}/${encodeURIComponent(
            post.parselyMeta['parsely-title'].replaceAll(' ', '-')
          )}`"
        >
          <span class="post__footer__link"
            >Read full
            <img
              src="@/assets/images/arrow.svg"
              alt="read more"
              width="20"
              height="16"
            />
            <span class="screen-reader-text"
              >Click here to read full article</span
            >
          </span>
        </router-link>
      </div>
    </div>
  </article>
</template>
<script setup>
import { defineProps } from "vue";
import moment from "moment";

defineProps({
  post: {
    type: Object,
  },
});
function truncate(text, length, clamp) {
  clamp = clamp || "...";
  var node = document.createElement("div");
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
}
</script>
<style lang="scss" scoped>
.post {
  display: flex;
  row-gap: 15px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 8px;

  flex-direction: column;

  .post__image__container {
    width: 100%;
    height: 200px;
    overflow: hidden;

    .post__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      &:hover {
        -webkit-animation: kenburns-top 5s ease-out both;
        animation: kenburns-top 5s ease-out both;
      }
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
      margin-bottom: 8px;
      .post__tag {
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        color: var(--subColor);
      }
      .post__circle {
        width: 2px;
        height: 2px;
        border-radius: 50%;
        background-color: var(--textColor);
      }
      .post__date {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--textColor);
        min-width: 84px;
      }
    }
    .post__header {
      font-style: normal;
      font-weight: 900;
      font-size: 18px;
      line-height: 22px;
      color: var(--headerColor);
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
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
    .post__body {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: var(--textColor);
      flex: 1;

      ~ p {
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
    .post__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      .post__footer__time {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--textColor);
      }
      .post__footer__link {
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: var(--primary);
        display: flex;
        align-items: center;
        column-gap: 2px;
        min-width: 84px;
      }
    }
  }
}
</style>
