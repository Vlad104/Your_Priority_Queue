import Vue from "vue";
import Router from "vue-router";
import MainPage from "@/components/MainPage";
import PostsPage from "@/components/PostsPage";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "MainPage",
      component: MainPage
    },
    {
      path: "/posts",
      name: "PostsPage",
      component: PostsPage
    }
  ]
});
