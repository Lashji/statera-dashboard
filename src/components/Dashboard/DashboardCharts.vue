<template>
  <div :class="[container]">
    <VueApexCharts
      width="500"
      type="bar"
      :options="chartOptions"
      :series="series"
    ></VueApexCharts>
  </div>
</template>

<script setup lang="ts">
import VueApexCharts from "vue3-apexcharts";

const chartOptions = {
  chart: {
    id: "vuechart-example",
  },
  xaxis: {
    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
  },
};
const series = [
  {
    name: "series-1",
    data: [30, 40, 35, 50, 49, 60, 70, 91],
  },
];

const container = "bg-white w-full flex ";
</script>

<style scoped></style>
