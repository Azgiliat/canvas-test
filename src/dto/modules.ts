import { RouteRecordRaw } from 'vue-router';

export enum AppModuleName {
  CANVAS = 'canvas',
}

export interface StoreAppModule {
  name: AppModuleName;
  icon: string;
  rootRouteName: string;
  displayName?: string;
}

export interface AppModule {
  routes: RouteRecordRaw[];
  storeModule: StoreAppModule;
}
