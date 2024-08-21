import { createRouter, createWebHistory } from "vue-router";
import index from "@/views/index.vue";
import match from "@/views/game.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: index,
    },
    {
      path: "/match",
      name: "match",
      component: match,
    },
  ],
});

export default router;
