import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Über mich",
    component: Home
  },
  {
    path: "/referenzen",
    name: "Referenzen",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Referenzen.vue")
  },
  {
    path: "/impressum",
    name: "Impressum",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Impressum.vue")
  },
  {
    path: "/:catchAll(.*)",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/NotFoundComponent.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
