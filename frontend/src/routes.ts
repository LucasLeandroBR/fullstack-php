import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/Home.vue";
import ProductEdit from "@/pages/ProductEdit.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/product/:id",
    component: ProductEdit,
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
