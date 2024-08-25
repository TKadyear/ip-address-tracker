<script setup lang="ts">
import { onMounted, watch, ref, type Ref } from 'vue'
import L from 'leaflet'
import customIconSvg from '/images/icon-location.svg'
import { type LocationInterface } from '@/types/types'

interface Props {
  location: LocationInterface
}

const props = defineProps<Props>()
const { lat, lng } = props.location
const map: Ref = ref(null)

const customIcon = L.icon({
  iconUrl: customIconSvg,
  iconSize: [28, 36],
  iconAnchor: [36, 0]
})
onMounted(() => {
  map.value = L.map('map', {
    zoomControl: false // Disable the default zoom controls
  }).setView([lat, lng], 13)
  L.marker([lat, lng], { icon: customIcon }).addTo(map.value)

  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution:
      '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map.value)

  L.control
    .zoom({
      position: 'bottomright'
    })
    .addTo(map.value)
})

watch(
  () => props.location,
  (newLocation) => {
    if (map.value) {
      map.value.setView([newLocation.lat, newLocation.lng], 13)
      L.marker([newLocation.lat, newLocation.lng], { icon: customIcon }).addTo(map.value)
    }
  },
  { deep: true }
)
</script>
<template>
  <div id="map"></div>
</template>

<style scoped>
#map {
  width: 100%;
  height: calc(100vh - var(--background-desktop) - var(--padding-size));
  z-index: 0;
}
</style>
