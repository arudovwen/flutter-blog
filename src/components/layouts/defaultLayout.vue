<template>
  <main class="container">
    <!-- Navigation here  -->
    <AppHeader />

    <!-- Page here -->
    <div class="content">
      <slot name="content"></slot>
    </div>
    <!-- scroll to top component  -->
    <ScrollToTop />
  </main>
</template>

<script setup>
import AppHeader from "../navigation/AppHeader.vue";
import ScrollToTop from "../scrollToTop.vue";
</script>
<style lang="scss" scoped>
main {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
}
.content {
  flex: 1;
  padding-top: 3rem;
  padding-bottom: 6rem;
}
</style>
