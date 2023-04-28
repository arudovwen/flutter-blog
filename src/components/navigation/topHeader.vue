<template>
  <nav>
    <div class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo.svg" width="80" height="80" alt="logo"
      /></router-link>
    </div>
    <div class="socials" role="img" aria-label="Site social links">
      <div class="socials__icon" v-for="icon in socialIcons" :key="icon.alt">
        <router-link to="#">
          <img :src="icon.src" :alt="icon.alt" width="20"
        /></router-link>
      </div>
    </div>
  </nav>
</template>
<script setup>
const socialIcons = [
  {
    src: require("@/assets/images/twitterflutter.svg"),
    alt: "twitter",
  },
  {
    src: require("@/assets/images/dribbleflutter.svg"),
    alt: "dribble",
  },
  {
    src: require("@/assets/images/figmaflutter.svg"),
    alt: "figma",
  },
  {
    src: require("@/assets/images/githubflutter.svg"),
    alt: "github",
  },
];
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;

  .socials {
    display: flex;
    column-gap: 24px;
    align-items: center;
    position: relative;

    .socials__icon {
      position: relative;
      height: 20px;
      width: 20px;

      &::after {
        content: "";
        position: absolute;
        right: -50%;
        margin-right: -2px;
        width: 2px;
        height: 2px;
        background-color: #6e6e6e;
        border-radius: 50rem;
        top: 50%;
        margin-top: -1px;
      }
      &:last-child::after {
        content: none;
      }
    }
  }
}
</style>
