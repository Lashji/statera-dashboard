<template>
  <div class="min-h-screen flex flex-col">
    <main class="flex flex-row flex-grow">
      <SideBar />
      <DashboardMain />
    </main>
  </div>
</template>

<script setup lang="ts">
import SideBar from "../components/Sidebar/SideBar.vue";
import DashboardMain from "../components/Dashboard/DashboardMain.vue";
</script>

<style scoped></style>
