<template>
  <div class="cta" v-if="!isMember">
    <h2 class="cta__header">Join our Team of Writers</h2>
    <div class="cta__text">
      <p class="cta__text--margin">
        On dasdas, writers earn a living doing what they love.
      </p>
      <p class="cta__text--margin">
        Getting started is easy. Just pay a one time
        <span class="bold">$25 fee</span> and everything is ready to go.
      </p>
    </div>
    <button
      @click="payWithFlutterwave()"
      class="cta__btn cta__btn--lg cta__bg--black cta__color--white"
    >
      JOIN US
    </button>
  </div>

  <div class="cta" v-else>
    <h2 class="cta__header">Welcome to our Team</h2>
    <div class="cta__text">
      <p class="cta__text--margin">
        You are a member of dasdas Team of Writers
      </p>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";
import { makePayment } from "@/plugins/flutterwave";

const store = useStore();
const route = useRoute();
function payWithFlutterwave() {
  makePayment(2500);
}
const isMember = computed(() => store.getters.isMember);
onMounted(() => {
  if (
    route.query?.status?.toLowerCase() === "successful" &&
    route.query?.tx_ref
  ) {
    store.commit("SET_IS_MEMBER", true);
  }
});
</script>
<style scoped lang="scss">
.cta {
  padding: 9em 0;
  text-align: center;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  @media only screen and (max-width: 1024px) {
    padding: 8em 0;
  }

  .cta__header {
    font-style: normal;
    font-weight: 500;
    font-size: 32px;
    line-height: 38px;
    margin-bottom: 12px;
    color: var(--headerColor);
    @media only screen and (max-width: 1024px) {
      font-size: 28px;
      line-height: 32px;
      margin-bottom: 8px;
    }
    @media only screen and (max-width: 556px) {
      font-size: 22px;
      line-height: 38px;
    }
  }
  .cta__text {
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 32px;
    color: var(--textColor);
    margin-top: 0;
    margin-bottom: 32px;
    @media only screen and (max-width: 1024px) {
      font-size: 16px;
      line-height: 28px;
      margin-bottom: 28px;
    }
    @media only screen and (max-width: 556px) {
      font-size: 14px;
      line-height: 22px;
    }
    .cta__text--margin {
      margin: 0;
    }
  }
  .cta__btn {
    padding: 12px 55px;
    text-transform: uppercase;
    outline: none;
    border: 1px solid var(--black);
    font-size: 18px;
    border-radius: 4px;
    cursor: pointer;
    @media screen and (max-width: 565px) {
      font-size: 15px;
    }
    &:hover {
      opacity: 0.8;
      -webkit-animation: heartbeat 1.5s ease-in-out both;
      animation: heartbeat 1.5s ease-in-out both;
    }
    &.cta__bg--black {
      background-color: var(--black);
    }
    &.cta__color--white {
      color: var(--white);
    }
  }
}
</style>
