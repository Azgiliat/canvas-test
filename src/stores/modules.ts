import { defineStore } from 'pinia';
import { shallowReactive } from 'vue';

import { StoreAppModule } from '@/dto/modules';

export const useModulesStore = defineStore('modules', () => {
  const modules: Record<string, { default: StoreAppModule }> = import.meta.glob(
    './../modules/**/index.ts',
    { eager: true },
  );

  const registeredModulesList = shallowReactive<StoreAppModule[]>(
    Object.values(modules).map((module) => module.default),
  );

  return {
    registeredModulesList,
  };
});
