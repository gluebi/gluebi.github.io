import {
  RouteRecordRaw,
  createRouter,
  createWebHistory,
  Router,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "About me",
    component: () => import("@/views/Home.vue"),
    meta: {
      visible: true,
    },
  },
  {
    path: "/references",
    name: "References",
    meta: {
      visible: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/References.vue"),
  },
  {
    path: "/referenzen",
    redirect: { name: "References" },
    meta: {
      visible: false,
    },
  },
  {
    path: "/imprint",
    name: "Imprint",
    meta: {
      visible: true,
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Imprint.vue"),
  },
  {
    path: "/impressum",
    redirect: { name: "Imprint" },
    meta: {
      visible: false,
    },
  },
  {
    path: "/:catchAll(.*)",
    meta: {
      visible: false,
    },
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/NotFoundComponent.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
