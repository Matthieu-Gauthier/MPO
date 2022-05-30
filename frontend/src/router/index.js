import { createRouter, createWebHistory } from 'vue-router';

const routes = [
   {
      path: '/',
      name: 'home',
      component: import(/* webpackChunkName: "home" */ '../views/Home.vue')
   },
   {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
   },
   {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes
});

export default router;
