import Vue from "vue";
import VueRouter from "vue-router";
import register from "../views/register";
import activateUser from "../views/activate-user";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "register",
    component: register,
  },
  {
    path: "/activate-user",
    name: "activateUser",
    component: activateUser,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
