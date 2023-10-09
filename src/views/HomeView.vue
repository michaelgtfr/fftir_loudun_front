<template>
  <main>
    <HeaderApp />
    <HomePresentation />

    <div class="row">
      <h2>Planning du club</h2>
      <Calendar :items="schredules" />
    </div>
    <LeafletMap />
  </main>
</template>
/
<script>
import HeaderApp from '@/components/header.vue'
import HomePresentation from '@/components/homePresentation.vue'
import LeafletMap from '@/components/map.vue'
import Calendar from '@/components/calendar.vue'
import { LOUDUN, SAINT_LEGER } from '@/constant/appConstant'
import axios from 'axios'

export default {
  name: `HomeView`,
  data() {
    return {
      showDate: new Date(),
      schredules: []
    }
  },
  components: {
    HeaderApp,
    HomePresentation,
    LeafletMap,
    Calendar
  },
  created() {
    this.getShowsShredules()
  },
  methods: {
    /**
     * Retrieve the schredules of club
     */
    getShowsShredules() {
      axios.get(`${import.meta.env.VITE_API_URL}/schredules`).then((response) => {
        this.schredules = this.formatSchredules(response.data.data)
      })
    },
    /**
     * Format schedule data to track requests from the calendar component
     * @param {array} schredules
     */
    formatSchredules(schredules) {
      return schredules.map((schredule) => {
        schredule.startDate = schredule.date
        schredule.title = `${this.timeFormat(schredule.startTime)} - ${this.timeFormat(
          schredule.endTime
        )} : ouverture ${schredule.shootingRange}`
        schredule.classes = this.specificClass(schredule.shootingRange)
        return schredule
      })
    },
    /**
     * Sets up a format for the time
     * @param {string} datetime
     */
    timeFormat(datetime) {
      const date = new Date(datetime)
      const hours = String(date.getHours()).padStart(2, '0')
      const minutes = String(date.getMinutes()).padStart(2, '0')
      return `${hours}:${minutes}`
    },
    specificClass(component) {
      switch (component) {
        case LOUDUN:
          return ['btn-schreduler']
        case SAINT_LEGER:
          return ['btn-schreduler-two']
      }
    }
  }
}
</script>

<style>
.btn-schreduler {
  background-color: blueviolet !important;
  color: white;
  font-size: 0.7rem !important;
  border-radius: 4px !important;
  margin-top: 5px;
  width: auto;
}

.btn-schreduler-two {
  background-color: yellow !important;
  color: black;
  font-size: 0.7rem !important;
  border-radius: 4px !important;
  margin-top: 5px;
  width: auto;
}
</style>
