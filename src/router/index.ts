import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../pages/HomeView.vue";
import ProductView from "../pages/ProductView.vue";
import SearchView from "../pages/SearchView.vue";
import CategoryView from "../pages/CategoryView.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:id",
    name: "product",
    component: ProductView,
  },
  {
    path: "/search/:query",
    name: "search",
    component: SearchView,
  },
  {
    path: "/category/:category",
    name: "category",
    component: CategoryView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
