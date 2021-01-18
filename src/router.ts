import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";

type Route = RouteRecordRaw & { visible: boolean };

const routes: Array<Route> = [
  {
    path: "/",
    name: "About me",
    component: () => import("@/views/Home.vue"),
    visible: true
  },
  {
    path: "/references",
    name: "References",
    visible: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/References.vue")
  },
  {
    path: "/referenzen",
    redirect: { name: "References" },
    visible: false
  },
  {
    path: "/imprint",
    name: "Imprint",
    visible: true,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/Imprint.vue")
  },
  {
    path: "/impressum",
    redirect: { name: "Imprint" },
    visible: false
  },
  {
    path: "/:catchAll(.*)",
    visible: false,
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/NotFoundComponent.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
