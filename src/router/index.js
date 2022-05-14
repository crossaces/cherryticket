import { createRouter, createWebHistory } from "vue-router";

function importComponent(path) {
  return () => import(`../views/${path}.vue`);
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: importComponent("Home"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
