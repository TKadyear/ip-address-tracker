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
    <span v-for="(title, key,index) in detailsTitle" :key="detailsTitle[key]">
      <div v-if="index != 0" class="divider" />
      <div class="content">
        <p class="title">{{ title }}</p>
        <p class="value">{{ props.information[key] }}</p>
      </div>
    </span>
  </div>
</template>

<style scoped>
.container-summary {
  margin: auto;
  background-color: white;
  border-radius: var(--rounded);
  display: flex;
  flex-direction: column;
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
    flex-direction: row;
    justify-content: space-around;
  }
  .content {
    display: inline-block;
  }
  .title {
    text-align: left;
  }
  .divider {
    width: 2px;
    background-color: var(--shadow);
    margin: 0;
    margin-right: 1.25rem;
    display: inline-block;
    /* TODO: This height is not dynamic set if the value needs to lines the layout will break */
    height: 2.25rem;
  }
}
</style>
