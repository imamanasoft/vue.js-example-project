import { createRouter, createWebHistory } from "vue-router";

import About from "@/views/AboutComponent.vue";
//##ChatGPT
import Login from "@/views/LoginForm.vue";
import Register from "@/views/RegisterForm.vue";
import Dashboard from "@/views/Dashboard.vue";
//##ChatGPT
import Home from "@/views/HomeComponent.vue";
import Profile from "@/views/ProfileComponent.vue";
import ProjectList from "@/views/ProjectList.vue";
import ProjectCreate from "@/views/ProjectCreate.vue";
import ProjectEdit from "@/views/ProjectEdit.vue";
import ProjectShow from "@/views/ProjectShow.vue";
import NotFound from "@/views/404.vue";

const routes = [
  //##ChatGPT##
  { path: "/login", name: "Login", component: Login },
  { path: "/register", name: "Register", component: Register },
  { path: "/dashboard", name: "Dashboard", component: Dashboard },
  //##ChatGPT##
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/",
    name: "projectList",
    component: ProjectList,
  },
  {
    path: "/create",
    name: "projectCreate",
    component: ProjectCreate,
  },
  {
    path: "/edit/:id",
    name: "projectEdit",
    component: ProjectEdit,
  },
  {
    path: "/show/:id",
    name: "projectShow",
    component: ProjectShow,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: NotFound,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
