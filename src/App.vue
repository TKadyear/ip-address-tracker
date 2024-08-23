<script setup lang="ts">
import InputTracker from './components/InputTracker.vue';
</script>

<template>
  <main class="container">
    <h1 class="title">IP Address Tracker</h1>
    <InputTracker />
  </main>
</template>

<style scoped>
.title{
  color: white;
  font-weight: 400;
  font-size: 1.5rem;
}
.container{
  text-align: center;
  font-family: "Rubik";
  background: url(./pattern-bg-mobile.png);
  padding: 1.25rem;
}
</style>
