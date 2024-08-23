<script setup lang="ts">
const data = {
  ipAddress: '192.212.174.101',
  location: 'Brooklyn, NY 10001',
  timezone: 'UTC -05:00',
  isp: 'SpaceX Starlink'
}
const mapValues = {
  ipAddress: 'Ip Address',
  location: 'Location',
  timezone: 'Timezone',
  isp: 'ISP'
}
</script>

<template>
  <div class="container-summary">
    <span v-for="(value, key) in data" :key="mapValues[key]">
      <p class="text">{{ mapValues[key] }}</p>
      <p class="value">{{ value }}</p>
    </span>
  </div>
</template>

<style scoped>
.container-summary {
  background-color: white;
  border-radius: var(--rounded);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
}
.text {
  color: var(--secondary);
  font-weight: 700;
  font-variant: all-small-caps;
  font-size: 0.75rem;
  letter-spacing: 2px;
  margin: 0;
  margin-bottom: 0.5rem;
}
.value {
  margin: 0;
  font-weight: 600;
  font-size: 1rem;
  color: var(--primary);
}
</style>
