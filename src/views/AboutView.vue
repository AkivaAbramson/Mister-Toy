<template>
  <div class="about">
    <h1>Made By Akiva</h1>
  </div>
  <GoogleMap
      api-key="API_KEY"
      style="width: 50%; height: 300px"
      :center="pos1"
      :zoom="15"
  >
      <Marker :options="{ position: pos1, label: 'Shop', title: 'Main Shop' }" />
      <Marker :options="{ position: pos2, label: 'fac', title: 'Factory' }" />
      <Marker :options="{ position: pos3, label: 'S2', title: 'Small Store' }" />
  </GoogleMap>
</template>

<script>
import { GoogleMap, Marker } from 'vue3-google-map'

export default {
  data() {
      return {
          pos1: { lat: 40.689247, lng: -74.044502 },
          pos2: { lat: 40.689247, lng: -74.144502 },
          pos3: { lat: 40.789247, lng: -74.144502 },
      }
  },
  components: { GoogleMap, Marker },
}
</script>
