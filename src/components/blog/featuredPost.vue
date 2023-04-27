<template>
  <article class="article">
    <img class="article__image" src="@/assets/images/largeflutter.png" />
    <div class="article__content">
      <div class="article__sub">
        <span class="article__tag">Front end</span>
        <span class="article__circle" />
        <span class="article__date">1 Hour Ago</span>
      </div>
      <h1 class="article__header">Optimizing CSS for faster page loads</h1>
      <div class="article__body">
        <p class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, totam
          ullam assumenda itaque vero velit, sit enim nam modi, laboriosam harum
          ab alias neque culpa voluptatem recusandae temporibus nemo esse.
        </p>
        <p class="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, totam
          ullam assumenda itaque vero velit, sit enim nam modi, laboriosam harum
          ab alias neque culpa voluptatem recusandae temporibus nemo esse.
        </p>
      </div>

      <div class="article__footer">
        <span class="article__footer__time">3 Min Read</span>
        <span class="article__footer__link"
          >Read more <img src="@/assets/images/arrow.svg"
        /></span>
      </div>
    </div>
  </article>
</template>
<script setup></script>
<style lang="scss" scoped>
.article {
  display: flex;
  column-gap: 15px;
  background: #ffffff;
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 52px;
  .article__image {
    flex: 1;
    height: 280px;
    width: 100%;
  }
  .article__content {
    width: 60%;
    display: flex;
    flex-direction: column;
    padding: 2px;
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
    }
    .article__body {
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
      color: var(--textColor);
      flex: 1;
      .article__text {
      }
    }
    .article__footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
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
