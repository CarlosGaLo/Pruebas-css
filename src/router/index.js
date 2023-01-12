import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/StaticCV.vue"),
    },
    {
      path: "/select",
      name: "select",
      component: () => import("../views/SelectCV.vue"),
    },
    {
      path: "/easy-mode",
      name: "easy",
      component: () => import("../views/EasyCV.vue"),
    },
    {
      path: "/yate-prueba/:id?",
      name: "yate-prueba",
      component: () => import("../views/ItemYate.vue"),
    },
    {
      path: "/alt",
      name: "yate-alt",
      component: () => import("../views/alt.vue"),
    },
  ],
});

export default router;
