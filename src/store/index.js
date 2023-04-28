import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    posts: [],
    featuredPost: {},
    post: {},
  },
  getters: {
    posts: (state) => state.posts,
    post: (state) => state.post,
    featuredPost: (state) => state.featuredPost,
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = [...state.posts, ...data];
      state.featuredPost = state.posts.unshift();
    },
    SET_POST(state, data) {
      state.post = data;
    },
  },
  actions: {},
  modules: {},
  // plugins: [createPersistedState()],
});
