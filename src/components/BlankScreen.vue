<template>
  <div
    class="p-8 w-full flex flex-grow items-center content-center justify-center flex-wrap"
  >
    <p class="mb-8 w-full text-center">Welcome to the Shapes App</p>
    <dsh-button text="Start" @click="onStartClick" />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';

import DshButton from '@/UI/DshButton';
import { CANVAS_ROUT_NAMES } from '@/modules/canvas/routes';

const router = useRouter();

function onStartClick() {
  router.push({
    name: CANVAS_ROUT_NAMES.ROOT,
  });
}
</script>
