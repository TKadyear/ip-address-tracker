<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import InputTracker from './components/AppInputTracker.vue'
import SummaryLocation from './components/AppSummaryLocation.vue'
import AppMap from './components/AppMap.vue'
import {
  type IpAddressResponseInterface,
  type LocationInterface,
  type InformationLocationInterface
} from '@/types/types'

const apiUrl = import.meta.env.VITE_API_URL
const apiKey = import.meta.env.VITE_API_KEY

let isLoading: Ref<boolean> = ref(false)
const location: Ref<LocationInterface> = ref({ lat: 0, lng: 0 })
const ipAddress: Ref<string> = ref('')
const information: Ref<InformationLocationInterface> = ref({
  ipAddress: '',
  location: '',
  timezone: '',
  isp: ''
})

onMounted(() => {
  getIpAddress()
})

const getIpAddress = async (searchIpAddress?: string) => {
  let requestUrl = `${apiUrl}/country,city?apiKey=${apiKey}`
  requestUrl += searchIpAddress ? `&ipAddress=${searchIpAddress}` : ''
  isLoading.value = true
  await fetch(requestUrl)
    .then((response) => response.json())
    .then((data: IpAddressResponseInterface) => {
      const { lat, lng, country, city, region, postalCode, timezone } = data.location
      ipAddress.value = data.ip
      location.value = { lat, lng }
      information.value = {
        ipAddress: data.ip,
        location: `${city}, ${region}, ${country} ${postalCode} `,
        isp: data.isp,
        timezone
      }
    })
  isLoading.value = false
}
const handleUpdate = (searchIpAddress: string) => {
  getIpAddress(searchIpAddress)
}
</script>

<template>
  <div v-if="isLoading" class="container-loader"><div class="loader"></div></div>
  <main class="container">
    <h1 class="title">IP Address Tracker</h1>
    <InputTracker :value="ipAddress" @update-ip-address="handleUpdate" />
    <SummaryLocation :information="information" />
  </main>
  <AppMap :location="location" />
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
