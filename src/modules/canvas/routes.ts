import { RouteRecordRaw } from 'vue-router';

export const CANVAS_ROUT_NAMES = {
  ROOT: 'canvas',
} as const;

export const routes: RouteRecordRaw[] = [
  {
    name: CANVAS_ROUT_NAMES.ROOT,
    path: '/canvas',
    component: () => import('@/modules/canvas/CanvasPage.vue'),
  },
];
