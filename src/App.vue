<script setup lang="ts">
import InputTracker from './components/AppInputTracker.vue'
import SummaryLocation from './components/AppSummaryLocation.vue'
import AppMap from './components/AppMap.vue'
</script>

<template>
  <main class="container">
    <h1 class="title">IP Address Tracker</h1>
    <InputTracker />
    <SummaryLocation />
  </main>
  <AppMap />
</template>

<style scoped>
.title {
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
}
.container {
  position: relative;
  height: var(--background-mobile);
  text-align: center;
  font-family: 'Rubik';
  background: url(/images/pattern-bg-mobile.png);
  padding: var(--padding-size);
  padding-bottom: 0;
  z-index: 1;
}
@media (width >= 375px) {
  .container {
    background: url(/images/pattern-bg-desktop.png);
    background-repeat: no-repeat;
    background-position-x: center;
  }
}
@media (width >= 768px) {
  .container {
    height: var(--background-desktop);
  }
}
@media (width >= 1440px) {
  .container {
    background-size: 100%;
  }
}
</style>
