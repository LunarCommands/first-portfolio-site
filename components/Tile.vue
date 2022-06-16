<script setup lang="ts">
interface TileProps {
  header: string;
  description: string;
  img: string;
}
const props = defineProps<TileProps>();
</script>

<template>
  <div class="bg-grey rounded-lg border border-gray-500 shadow-xl m-8">
    <div class="px-8 py-8">
      <img :src="`assets/${img}`" class="mb-3 w-24 h-24 mx-auto" />
      <h2 class="text-primary-300 text-center text-2xl mb-5">{{ header }}</h2>
      <p class="text-primary-100 text-lg">{{ description }}</p>
    </div>
  </div>
</template>
