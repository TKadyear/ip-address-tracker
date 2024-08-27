<script setup lang="ts">
import { type InformationLocationInterface } from '@/types/types'

interface Props {
  information: InformationLocationInterface
}
const props = defineProps<Props>()

const detailsTitle = {
  ipAddress: 'Ip Address',
  location: 'Location',
  timezone: 'Timezone',
  isp: 'ISP'
}
</script>

<template>
  <div class="container-summary">
    <template v-for="(title, key,index) in detailsTitle" :key="detailsTitle[key]">
      <div v-if="index != 0" class="divider" />
      <div class="content">
        <p class="title">{{ title }}</p>
        <p class="value">{{ props.information[key] || "empty"}}</p>
      </div>
    </template>
  </div>
</template>

<style scoped>
.container-summary {
  margin: auto;
  background-color: white;
  border-radius: var(--rounded);
  display: grid;
  gap: 1rem;
  padding: 1rem;
  box-shadow: 0 10px 10px var(--shadow);
}
.divider {
  display: none;
}
.title {
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

@media (width >= 768px) {
  .container-summary {
    max-width: 54rem;
    grid-template-columns:repeat(3, 1fr var(--size-divider)) 1fr;
    gap:1.25rem;
  }
  .content {
    display: inline-block;
    text-align: start;
  }
  .title {
    text-align: start;
  }
  .divider {
    width: var(--size-divider);
    background-color: var(--shadow);
    margin: 0;
    display: inline-block;
    height: 100%;
  }
}
</style>
