<template>
  <article class="post" v-if="post">
    <div
      class="post__image__container"
      v-if="post?.parselyMeta"
      role="img"
      aria-label="Post featured image"
    >
      <img
        class="post__image"
        :src="post.parselyMeta['parsely-image-url'].replace('w=680', 'w=450')"
        :alt="post.slug"
      />
    </div>
    <div class="post__content" v-if="post?.parselyMeta">
      <div class="post__sub">
        <span class="post__tag">{{ post.parselyMeta["parsely-section"] }}</span>
        <span class="post__circle" />
        <span class="post__date">{{ moment(post.date).fromNow() }}</span>
      </div>
      <router-link
        :to="`/post/${post.id}/${encodeURIComponent(
          post.parselyMeta['parsely-title'].replaceAll(' ', '-')
        )}`"
      >
        <h1
          class="post__header"
          v-html="post?.parselyMeta['parsely-title']"
        ></h1>
      </router-link>
      <div class="post__body" v-html="post?.excerpt.rendered"></div>
      <div class="post__footer">
        <span class="post__footer__time"
          >{{ Math.floor(Math.random() * 11) + 3 }} Min Read</span
        >
        <router-link
          :to="`/post/${encodeURIComponent(
            post.parselyMeta['parsely-title'].replaceAll(' ', '-')
          )}/${post.id}`"
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
import { computed } from "vue";
import { useStore } from "vuex";
import moment from "moment";

const store = useStore();

// Setting first post as featured
const post = computed(() => store.getters.posts[0]);
</script>
<style lang="scss" scoped>
.post {
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
  .post__image__container {
    width: 450px;
    height: 300px;
    overflow: hidden;
    background-color: #f5f5f5;
    @media only screen and (max-width: 768px) {
      width: 100%;
      height: auto;
    }
    .post__image {
      width: 100%;
      height: 100%;
      object-fit: fill;
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
    @media only screen and (max-width: 768px) {
      width: 100%;
    }
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
      font-size: 22px;
      line-height: 26px;
      color: var(--headerColor);
      margin-bottom: 8px;
    }
    .post__body {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: var(--textColor);
      flex: 1;

      .post__text {
        display: -webkit-box;
        -webkit-line-clamp: 5;
        -webkit-box-orient: vertical;
        height: 106px;
        overflow: hidden;
        margin: 0;
      }
    }
    .post__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 36px;
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
