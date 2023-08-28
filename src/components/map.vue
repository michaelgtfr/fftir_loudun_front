<template>
  <div class="map p-5" style="height:600px; width:100%">
    <l-map :use-global-leaflet="false" ref="map" v-model:zoom="zoom" :center="[47.0667, 0.0167]">
      <l-tile-layer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        layer-type="base"
        name="OpenStreetMap"
      ></l-tile-layer>
      <l-marker v-for="map, index in maps" :lat-lng="map.marker" :key="index">
        <l-tooltip :content="map.tooltip"/>
    </l-marker>
    </l-map>
  </div>
</template>

<script lang="js">
import { LMap, LTileLayer,  LMarker, LTooltip } from "@vue-leaflet/vue-leaflet"

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LTooltip
  },
  data() {
    return {
      zoom:  12,
      maps : [
        {
            marker: [47.01552, 0.1083186],
            tooltip : `Stand de tir de Saint Leger`
        },
        {
            marker: [47.087491428389114, -0.04757229286419828],
            tooltip : `Stand de tir de Loudun`
        }
      ]
    };
  },
  mounted() {

  }
};
</script>
