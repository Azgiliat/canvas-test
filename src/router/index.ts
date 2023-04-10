import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import BlankScreen from '@/components/BlankScreen.vue';

const modulesRoutes: Record<string, { routes: RouteRecordRaw[] }> =
  import.meta.glob('./../modules/**/routes.ts', { eager: true });

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: BlankScreen,
    },
    ...Object.values(modulesRoutes)
      .map((moduleRoutes) => moduleRoutes.routes)
      .flat(),
    {
      path: '/:notFound(.*)*',
      redirect: '/',
    },
  ],
});

export { router };
