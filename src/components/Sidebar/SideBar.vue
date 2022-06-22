<template>
  <aside class="bg-bgSidebarBlue w-60 shadow-md px-1">
    <sidebar-user-display />

    <ol class="flex-1 flex flex-col justify-center">
      <li :class="[sidebarListItem]">Dashboard</li>
      <li :class="[sidebarListItem]">Pools</li>
      <li :class="[sidebarListItem]">Account</li>
    </ol>
  </aside>
</template>

<script setup lang="ts">
import SidebarUserDisplay from "./SidebarUserDisplay.vue";

const sidebarListItem = " p-2 flex justify-center text-slate-200 cursor-pointer";
</script>

<style scoped></style>
