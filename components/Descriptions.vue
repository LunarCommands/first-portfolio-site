<script setup lang="ts">
import descriptions from "@/data.json";

const descriptionsOrganized = {
  first: [...descriptions].splice(0, 3),
  second: [...descriptions].splice(3, 5),
};
</script>

<template>
  <div class="flex lg:mx-24">
    <div class="md:flex w-screen">
      <div class="md:w-3/6">
        <h1 class="text-primary-100 text-center text-5xl">My skills</h1>
        <div>
          <Tile
            v-for="description in descriptionsOrganized.first"
            :key="description.id"
            :header="description.header"
            :description="description.description"
            :img="description.img"
          />
        </div>
      </div>
      <div class="md:w-3/6">
        <h1 class="text-primary-100 text-center text-5xl">My hobbys</h1>
        <div>
          <Tile
            v-for="description in descriptionsOrganized.second"
            :key="description.id"
            :header="description.header"
            :description="description.description"
            :img="description.img"
          />
        </div>
      </div>
    </div>
  </div>
</template>
