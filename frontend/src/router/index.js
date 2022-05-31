import { createRouter, createWebHistory } from 'vue-router';
import { pinia } from '@/store/store.pinia';
import { createApp } from 'vue';
import { useAuth } from '@/store/auth';
import App from '../App.vue';

const app = createApp(App);
app.use(pinia);

const routes = [
   {
      path: '/',
      name: 'home',
      component: import(/* webpackChunkName: "home" */ '../views/Home.vue'),
      meta: { requiresAuth: true },
   },
   {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
   },
   {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      meta: { requiresAuth: true },
   },
];

const router = createRouter({
   history: createWebHistory(),
   routes,
});

router.beforeEach(async (to) => {
   const auth = useAuth();
   if (!auth.isAuthenticated) {
      await auth.reAuthenticate();
   }
   if (to.meta.requiresAuth && !auth.isAuthenticated) {
      return '/login';
   }
});

export default router;
