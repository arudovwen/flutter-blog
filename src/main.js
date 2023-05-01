import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";

// External plugin
import VueAnimateOnScroll from "vue3-animate-onscroll";

import "@/assets/scss/style.scss";

createApp(App).use(store).use(router).use(VueAnimateOnScroll).mount("#app");
