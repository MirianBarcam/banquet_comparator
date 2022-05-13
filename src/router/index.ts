import VueRouter, { RouteConfig } from "vue-router";

import Home from "../views/Home.vue";
import Vue from "vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/compareTable",
    name: "CompareTable",

    component: () => import("../views/CompareTable.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
