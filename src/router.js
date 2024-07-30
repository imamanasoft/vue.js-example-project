import { createRouter, createWebHistory } from 'vue-router'

import About from '@/components/AboutComponent.vue';
import Home from '@/components/HomeComponent.vue';
import Profile from '@/components/ProfileComponent.vue';
import ProjectList from '@/components/pages/ProjectList.vue';
import ProjectCreate from '@/components/pages/ProjectCreate.vue';
import ProjectEdit from '@/components/pages/ProjectEdit.vue';
import ProjectShow from '@/components/pages/ProjectShow.vue';
import NotFound from '@/components/404.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/',
    name: 'projectList',
    component: ProjectList
  },
  {
    path: '/create',
    name: 'projectCreate',
    component: ProjectCreate
  },
  {
    path: '/edit/:id',
    name: 'projectEdit',
    component: ProjectEdit
  },
  {
    path: '/show/:id',
    name: 'projectShow',
    component: ProjectShow
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
});