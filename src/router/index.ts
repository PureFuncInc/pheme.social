import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/HowToPlay',
    name: 'HowToPlay',
    component: () => import('@/views/HowToPlay.vue'),
  },
  {
    path: '/LitePaper',
    name: 'LitePaper',
    component: () => import('@/views/LitePaper.vue'),
  },
  {
    path: '/WhitePaper',
    name: 'WhitePaper',
    component: () => import('@/views/WhitePaper.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
