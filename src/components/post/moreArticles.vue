<template>
  <section class="more__articles">
    <h2 class="more_articles__h2">More Articles</h2>
    <div class="more__articles__article">
      <SinglePost v-for="post in content" :key="post.id" :post="post" />
    </div>
  </section>
</template>
<script setup>
import SinglePost from "../blog/singlePost.vue";

const content = [
  {
    id: "1",
    tag: "Jane Doe",
    title: "A post about the benefits of meditation",
    content:
      "Meditation has been shown to have a number of benefits for both the mind and the body. It can reduce stress and anxiety, improve focus and concentration, and even help to lower blood pressure. In this post, we'll explore some of the science behind meditation and how you can get started with a daily practice.",
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
];
</script>

<style lang="scss" scoped>
.more__articles {
  .more__articles__article {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 3em;

    @media only screen and (max-width: 1024px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 556px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  .more_articles__h2 {
    font-weight: 900;
    font-size: 24px;
    line-height: 29px;
    color: var(--headerColor);
    margin-bottom: 20px;
  }
}
</style>
