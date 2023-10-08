<template>
  <main>
    <div class="tag-page container-fluid">
      <!-- Table part -->
      <DynamicTable
        :headers="openShootingRangeHeaders"
        :lines="openShootingRangeList"
        :title="openShootingRangeTitle"
        :explanation="explanationOpenShootingRange"
        @update="updateOpenShootingRange"
        @delete="deleteOpenShootingRange"
      />
    </div>
  </main>
</template>

<script>
import DynamicTable from '@/components/dynamicTable.vue'
import axios from 'axios'

export default {
  name: `OpenShootingRangeView`,
  data() {
    return {
      openShootingRangeList: [],
      openShootingRangeTitle: `Liste des ouvertures des stand de tir`,
      explanationOpenShootingRange: `explication sur les ouverture de stand`,
      titleForCreateOrUpdate: ``,
      openShootingRangeHeaders: [
        { name: `stand de tir`, attribute: `shootingRange` },
        { name: `debut d'ouverture du stand`, attribute: `startTime` },
        { name: `fermeture du stand`, attribute: `endTime` },
        { name: `date d'ouverture`, attribute: `date` }
      ],
      page: 1,
      totalItem: 0,
      form: {
        shootingRange: ``,
        startTime: ``,
        endTime: ``,
        date: ``
      },
      errorValidationForm: null,
      showValidationForm: false
    }
  },
  components: {
    DynamicTable
  },
  watch: {
    page() {
      this.getOpenShootingRange()
    }
  },
  created() {
    this.getOpenShootingRange()
  },
  methods: {
    /**
     * openShootingRange recovery request (pagination 20 items by page)
     *
     * AJOUTER UN PARAMETRE ET CREER UN NOUVEAU LIEN POUR RECUPERER PAR ELEMENT
     */
    getOpenShootingRange() {
      axios.get(`${import.meta.env.VITE_API_URL}/showsSchredules`).then((response) => {
        this.openShootingRangeList = response.data.data
        this.totalItem = response.data.metadata.totalItem
      })
    }
  }
}
</script>
