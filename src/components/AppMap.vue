<script setup lang="ts">
import { onMounted, ref, type Ref } from 'vue'
import L from 'leaflet'
import customIconSvg from '../../public/icon-location.svg'

const map: Ref = ref(null)

onMounted(() => {
  map.value = L.map('map').setView([51.505, -0.09], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value)

  const customIcon = L.icon({
    iconUrl: customIconSvg, 
    iconAnchor: [23,0], 
  })
  L.marker([51.5, -0.09], { icon: customIcon })
    .addTo(map.value)

})
</script>
<template>
  <div id="map" :style="{ height: '500px' }"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: 100%;
}
</style>
