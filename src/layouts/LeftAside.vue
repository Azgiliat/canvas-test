<template>
  <section class="bg-gray3 flex-grow flex">
    <aside-menu />
    <section class="p-8 w-full">
      <router-view />
    </section>
  </section>
</template>

<script setup lang="ts">
import AsideMenu from '@/components/aside-menu/AsideMenu.vue';
</script>
