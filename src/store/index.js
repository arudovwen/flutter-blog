import { createStore } from "vuex";
// import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    posts: [],
    featuredPost: {},
    post: {},
    morePosts: [],
    isMember: false,
  },
  getters: {
    posts: (state) => state.posts,
    post: (state) => state.post,
    featuredPost: (state) => state.featuredPost,
    morePosts: (state) => state.morePosts,
    isMember: (state) => state.isMember,
  },
  mutations: {
    SET_POSTS(state, data) {
      state.posts = [...state.posts, ...data];
      state.featuredPost = state.posts.unshift();
    },
    SET_POST(state, data) {
      state.post = data;
    },
    SET_MORE_POSTS(state, data) {
      state.morePosts = data;
    },
    SET_IS_MEMBER(state, data) {
      state.isMember = data;
    },
  },

  actions: {},
  modules: {},
  // plugins: [createPersistedState()],
});
