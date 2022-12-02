import {
  createRouter, createWebHistory, RouteRecordRaw, RouterScrollBehavior,
} from 'vue-router';

const scrollBehavior: RouterScrollBehavior = (to) => {
  if (to.hash) {
    return {
      el: to.hash,
      behavior: 'smooth',
    };
  }
  return { top: 0 };
};

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/kogi/:uuid',
    name: 'KogiDisplayPage',
    component: () => import('@/views/kogi/_uuid.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
});

export default router;
