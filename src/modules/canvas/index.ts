import { AppModuleName, StoreAppModule } from '@/dto/modules';
import { CANVAS_ROUT_NAMES } from '@/modules/canvas/routes';

export default {
  name: AppModuleName.CANVAS,
  icon: 'canvas',
  rootRouteName: CANVAS_ROUT_NAMES.ROOT,
} as StoreAppModule;
