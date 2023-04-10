<template>
  <aside class="w-1/4 bg-white px-12 py-8">
    <p class="text-base text-gray2 font-bold mb-6">MAIN MENU</p>
    <ul>
      <li v-for="module of registeredModulesList" :key="module.name">
        <aside-menu-item v-bind="module" />
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';

import AsideMenuItem from '@/components/aside-menu/AsideMenuItem.vue';
import { useModulesStore } from '@/stores/modules';

const { registeredModulesList } = storeToRefs(useModulesStore());
</script>
