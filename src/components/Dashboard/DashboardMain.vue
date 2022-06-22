<template>
  <div :class="[container]">
    <dashboard-info-cards />
    <dashboard-charts />
  </div>
</template>

<script setup lang="ts">
import DashboardInfoCards from "./DashboardInfoCards.vue";
import DashboardCharts from "./DashboardCharts.vue";
const container = "flex flex-col";
</script>

<style scoped></style>
