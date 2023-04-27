<template>
  <default-layout>
    <template #content>
      <section>
        <FeaturedPost :featured="featured" />
      </section>
      <section><AllPost /></section>
      <section><CallToAction /></section>
    </template>
  </default-layout>
</template>

<script setup>
import { provide, computed } from "vue";
import FeaturedPost from "@/components/blog/featuredPost.vue";
import AllPost from "@/components/blog/allPosts.vue";
import DefaultLayout from "@/components/layouts/defaultLayout.vue";
import CallToAction from "@/components/callToAction.vue";

const content = [
  {
    id: "1",
    tag: "Jane Doe",
    title: "A post about the benefits of meditation",
    content:
      "Meditation has been shown to have a number of benefits for both the mind and the body. It can reduce stress and anxiety, improve focus and concentration, and even help to lower blood pressure. In this post, we'll explore some of the science behind meditation and how you can get started with a daily practice. From exercise and meditation to making your bed and setting goals, we've got you covered. In today's fast-paced world, it's easy to get caught up in the hustle and forget to take care of ourselves. But self-care is crucial for maintaining our physical, mental, and emotional health. In this post, we'll explore some simple self-care strategies that busy professionals can incorporate into their daily routines. With cold and flu season in full swing, it's important to take steps to boost our immune systems. In this post, we'll go over five natural ways to support your body's natural defenses, including eating a healthy diet, getting enough sleep, and reducing stress. By following these tips, you can help keep yourself healthy and feeling your best.",
    photo:
      "https://blog.logrocket.com/wp-content/uploads/2020/11/rust-grpc-tonic.png",
    featured: true,
  },
  {
    id: "2",
    tag: "John Smith",
    title: "A guide to creating a successful morning routine",
    content:
      "Starting your day off on the right foot can set the tone for the rest of the day. In this post, we'll go over some tips for creating a morning routine that will help you feel energized, productive, and ready to tackle the day ahead. From exercise and meditation to making your bed and setting goals, we've got you covered.",
    photo:
      "https://images.unsplash.com/photo-1591035897819-f4bdf739f446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    featured: false,
  },
  {
    id: "3",
    tag: "Sara Johnson",
    title: "The importance of self-care for busy professionals",
    content:
      "In today's fast-paced world, it's easy to get caught up in the hustle and forget to take care of ourselves. But self-care is crucial for maintaining our physical, mental, and emotional health. In this post, we'll explore some simple self-care strategies that busy professionals can incorporate into their daily routines. With cold and flu season in full swing, it's important to take steps to boost our immune systems. In this post, we'll go over five natural ways to support your body's natural defenses, including eating a healthy diet, getting enough sleep, and reducing stress. By following these tips, you can help keep yourself healthy and feeling your best.",
    photo:
      "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    featured: false,
  },
  {
    id: "4",
    tag: "Emily Williams",
    title: "5 ways to boost your immune system naturally",
    content:
      "With cold and flu season in full swing, it's important to take steps to boost our immune systems. In this post, we'll go over five natural ways to support your body's natural defenses, including eating a healthy diet, getting enough sleep, and reducing stress. By following these tips, you can help keep yourself healthy and feeling your best.",
    photo:
      "https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    featured: false,
  },
  {
    id: "5",
    tag: "Alex Thompson",
    title: "The benefits of journaling for mental health",
    content:
      "Journaling has long been recognized as a powerful tool for self-reflection and personal growth. In this post, we'll look at the science behind why journaling is so beneficial for mental health and provide some tips for getting started with your own journaling practice.",
    photo:
      "https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGhhcHB5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    featured: false,
  },
  {
    id: "6",
    tag: "Laura Davis",
    title: "The best plant-based protein sources",
    content:
      "If you're trying to incorporate more plant-based protein into your diet, you're in luck! There are plenty of delicious and nutritious options to choose from. In this post, we'll go over some of the best plant-based protein sources, including beans, lentils, tofu, and more. Plus, we'll include some tasty recipe ideas to help you get started.",
    photo:
      "https://images.unsplash.com/photo-1657664073337-31394d7e5c7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    featured: false,
  },
];

const featured = computed(() => {
  if (!content.length) return {};
  return content.find((post) => post.featured);
});
const otherPosts = computed(() => {
  if (!content.length) return {};
  return content.filter((post) => !post.featured);
});
provide("content", otherPosts.value);
</script>
