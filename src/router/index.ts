import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/kogi/:uuid',
    name: 'SutandoDisplayPage',
    component: () => import('@/views/sutando/_uuid.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
