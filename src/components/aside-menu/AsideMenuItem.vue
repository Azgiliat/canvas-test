<template>
  <router-link
    :to="{ name: rootRouteName }"
    active-class="text-primary"
    class="flex items-center text-gray1 hover:text-primary hover:cursor-pointer"
  >
    <dsh-icon
      class="mr-8 w-8 h-8 transition-colors fill-current"
      :name="icon"
    />
    <span class="font-semibold text-lg transition-colors">{{
      displayName || name
    }}</span>
  </router-link>
</template>

<script setup lang="ts">
import DshIcon from '@/UI/DshIcon';
import { AppModuleName } from '@/dto/modules';

import type { StoreAppModule } from '@/dto/modules';

// workaround ofr https://github.com/vuejs/core/issues/4294
// eslint-disable-next-line
interface Props extends StoreAppModule {}

defineProps<{
  name: AppModuleName;
  icon: string;
  rootRouteName: string;
  displayName?: string;
}>();
</script>
