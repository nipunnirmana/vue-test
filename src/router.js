import Vue from "vue";
import Router from "vue-router";
import Home from "./views/home";
import About from "./views/About";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "sss",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    }
  ]
});
