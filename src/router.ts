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
    component: () => import("@/views/References.vue"),
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
    component: () => import("@/views/Imprint.vue"),
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
    component: () => import("@/views/NotFoundComponent.vue"),
  },
];

const router: Router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
