<script setup lang="ts">
import IconArrow from './icons/IconArrow.vue'
const ipAddressV4regex =
  '^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])$'
const valueInput="192.212.174.101"
const handleClick= () =>{
alert(`search ${valueInput}`)
}
</script>

<template>
  <div class="container-search">
    <input
      type="text"
      class="input"
      name="search-ip"
      id="ip-tracker"
      minlength="15"
      maxlength="15"
      :pattern="ipAddressV4regex"
      :value="valueInput"
      placeholder="Search for any IP address or domain"
    />
    <button class="arrow-btn" :onclick="handleClick">
      <IconArrow />
    </button>
  </div>
</template>

<style scoped>
.container-search {
  margin: 1.5rem auto;
  max-width: 35rem;
  background-color: white;
  border-radius: var(--rounded);
  display: flex;
  justify-content: space-between;
}
.input {
  border-radius: var(--rounded) 0 0 var(--rounded);
  padding: 1rem ;
  width: 100%;
  color: var(--primary);
  font-weight: 400;
  font-family: 'Rubik';
  border: 0;
}
.arrow-btn {
  border-radius: 0 var(--rounded) var(--rounded) 0;
  background-color:black;
  transition: 0.3s;
  padding: 1rem 1.25rem;
  border: 0;
  cursor: pointer;
}
.arrow-btn:hover {
  background-color: var(--primary);
}
svg {
  width: 10px;
}
</style>
