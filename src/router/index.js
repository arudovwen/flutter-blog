import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "blog",
    meta: {
      title: "Flutter Blog",
      metaTags: [
        {
          name: "description",
          content: "Blog page",
        },
        {
          property: "og:description",
          content: "Blog page",
        },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "blog" */ "../views/BlogView.vue"),
  },
  {
    path: "/post/:id/:name",
    name: "post",
    meta: {
      title: "Post",
      metaTags: [
        {
          name: "description",
          content: "Post page",
        },
        {
          property: "og:description",
          content: "Post page",
        },
      ],
    },

    component: () =>
      import(/* webpackChunkName: "post" */ "../views/PostView.vue"),
  },
  {
    path: "/offline",
    name: "Offline",
    meta: {
      title: "You Are Offline -Flutter Blog",
      metaTags: [
        {
          name: "description",
          content: "You Are Offline",
        },
        {
          property: "og:description",
          content: "You Are Offline",
        },
      ],
    },
    component: () =>
      import(/* webpackChunkName: "Offline" */ "../OfflineApp.vue"),
  },
  {
    path: "/:catchAll(.*)",
    name: "Not found",
    component: () =>
      import(/* webpackChunkName: "notfound" */ "../views/NotFound"),
  },
];

// handle scroll
const scrollBehavior = (to, from, savedPosition) => {
  return savedPosition || { top: 0, left: 0 };
};

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior,
});

// handle page title, meta tags
router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  const titleFromParams = to.params.name;

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  if (nearestWithTitle) {
    if (titleFromParams) {
      document.title = `${titleFromParams} - ${nearestWithTitle.meta.title}`;
    } else {
      document.title = nearestWithTitle.meta.title;
    }
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

export default router;
