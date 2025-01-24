import { createWebHistory, createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Signp from "./components/Signp.vue";
import Login from "./components/Login.vue";
import AddR from "./components/AddR.vue";
import UpdateR from "./components/UpdateR.vue";
const routes = [
  {
    name: "Home",
    path: "/",
    component: Home,
  },
  {
    name: "sign-up",
    path: "/sign-up",
    component: Signp,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "add",
    path: "/add",
    component: AddR,
  },
  {
    name: "update",
    path: "/update/:id",
    component: UpdateR,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
