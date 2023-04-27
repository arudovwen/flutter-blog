<template>
  <default-layout>
    <template #content>
      <section>
        <FeaturedPost />
      </section>
      <section><AllPost /></section>
      <section><CallToAction /></section>
    </template>
  </default-layout>
</template>

<script setup>
import FeaturedPost from "@/components/blog/featuredPost.vue";
import AllPost from "@/components/blog/allPosts.vue";
import DefaultLayout from "@/components/layouts/defaultLayout.vue";
import CallToAction from "@/components/callToAction.vue";
</script>
