<template>
  <DefaultLayout>
    <template #content>
      <div class="offline">
        <img
          class="offline__image"
          width="200"
          src="@/assets/images/nofound.svg"
        />

        <h1 class="offline__h1">NETWORK ERROR</h1>
        <h2 class="offline__h2">WHOOPS, IT SEEMS YOU ARE OFFLINE!!</h2>
        <router-link to="/">
          <button class="offline__btn">Refresh page</button>
        </router-link>
      </div>
    </template>
  </DefaultLayout>
</template>

<script setup>
import DefaultLayout from "@/components/layouts/defaultLayout.vue";
</script>

<style lang="scss" scoped>
.offline {
  margin-top: 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .offline__h1 {
    font-size: 52px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 32px;
    }
  }
  .offline__h2 {
    font-size: 24px;
    font-weight: 600;
    @media screen and (max-width: 768px) {
      font-size: 16px;
    }
  }
  .offline__btn {
    padding: 8px 24px;
    outline: none;
    border: 1px solid var(--black);
    font-size: 16px;
    background-color: var(--black);
    color: var(--white);
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      opacity: 0.8;
      -webkit-animation: heartbeat 1.5s ease-in-out both;
      animation: heartbeat 1.5s ease-in-out both;
    }
  }
}
</style>
