import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomeView.vue")
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
