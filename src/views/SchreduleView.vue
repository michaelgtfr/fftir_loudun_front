<template>
  <main>
    <div class="schredule-page container-fluid">
      <!-- Table part -->
      <DynamicTable
        :headers="schreduleHeaders"
        :lines="schreduleList"
        :title="schreduleTitle"
        :explanation="explanationSchredule"
        @update="updateSchredule"
        @delete="deleteSchredule"
      >
        <!-- Slot part of table -->
        <template v-slot="slotProps">
          <div v-if="slotProps.header.attribute === 'date'">
            <p>{{ dateFormat(slotProps.line.date) }}</p>
          </div>
          <div v-if="slotProps.header.attribute === 'startTime'">
            <p>{{ timeFormat(slotProps.line.startTime) }}</p>
          </div>
          <div v-if="slotProps.header.attribute === 'endTime'">
            <p>{{ timeFormat(slotProps.line.endTime) }}</p>
          </div>
        </template>
      </DynamicTable>

      <!-- Pagination part -->
      <div class="schredule-page__pagination-and-modal container-fluid">
        <Pagination
          class="col-lg-9"
          :pageDisplay="page"
          :number-total-of-items="totalItem"
          @page-selected="pageSelected"
        />
      </div>

      <!-- Modal part -->
      <Modal
        :title-for-creation-or-update="titleForCreationOrUpdate"
        @open-modal="createSchredule"
        @save="saveSchredule"
      >
        <div class="row">
          <!-- general message -->
          <div v-if="errorValidationForm" class="alert alert-danger" role="alert">
            {{ errorValidationForm.message }}
          </div>

          <!-- category input -->
          <div class="col-lg-6 p-2">
            <label for="categoryInput" class="form-label">Categorie</label>
            <select
              class="form-select"
              id="categoryInput"
              v-model="form.category"
              placeholder="Selectionner votre stand de tir si à définir"
            >
              <option>ouverture stand de tir</option>
              <option>réunion</option>
            </select>
            <div v-if="showValidationForm" class="invalid-feedback">
              {{ getError('category') }}
            </div>
          </div>

          <!-- shooting range input -->
          <div class="col-lg-6 p-2">
            <label for="schreduleShootingRangeInput" class="form-label">Stand de tir</label>
            <select
              class="form-select"
              id="schreduleShootingRangeInput"
              v-model="form.shootingRange"
            >
              <option>stand de tir de saint leger</option>
              <option>stand de tir de loudun</option>
            </select>
            <div v-if="showValidationForm" class="invalid-feedback">
              {{ getError('shootingRange') }}
            </div>
          </div>

          <!-- date input -->
          <div class="col-lg-6 p-2">
            <label for="endTimeInput" class="form-label">Date</label>
            <input class="form-control" v-model="form.date" type="date" />
            <div v-if="showValidationForm" class="invalid-feedback">
              {{ getError('date') }}
            </div>
          </div>

          <!-- startTime input -->
          <div class="col-lg-6 p-2">
            <label for="startTimeInput" class="form-label">Heure de début</label>
            <input class="form-control" v-model="form.startTime" type="time" />
            <div v-if="showValidationForm" class="invalid-feedback">
              {{ getError('startTime') }}
            </div>
          </div>

          <!-- endTime input -->
          <div class="col-lg-6 p-2">
            <label for="endTimeInput" class="form-label">Heure de fin</label>
            <input class="form-control" v-model="form.endTime" type="time" />
            <div v-if="showValidationForm" class="invalid-feedback">
              {{ getError('endTime') }}
            </div>
          </div>
        </div>
      </Modal>
    </div>
  </main>
</template>

<script>
import DynamicTable from '@/components/dynamicTable.vue'
import Pagination from '@/components/pagination.vue'
import Modal from '@/components/modal.vue'
import { modalMixin } from '@/mixins/modalMixin'
import axios from 'axios'

export default {
  name: `SchreduleView`,
  mixins: [modalMixin],
  data() {
    return {
      schreduleList: [],
      schreduleTitle: `Liste des ouvertures des stand de tir`,
      explanationSchredule: `explication sur les ouverture de stand`,
      titleForCreateOrUpdate: ``,
      schreduleHeaders: [
        { name: `categorie`, attribute: `category` },
        { name: `date d'ouverture`, attribute: `date`, slot: true },
        { name: `debut d'ouverture du stand`, attribute: `startTime`, slot: true },
        { name: `fermeture du stand`, attribute: `endTime`, slot: true },
        { name: `stand de tir`, attribute: `shootingRange` }
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
    DynamicTable,
    Pagination,
    Modal
  },
  watch: {
    page() {
      this.getSchredules()
    }
  },
  created() {
    this.getSchredules()
  },
  methods: {
    /**
     * Schredule recovery request (pagination 20 items by page)
     */
    getSchredules() {
      axios
        .get(`${import.meta.env.VITE_API_URL}/schredules`, {
          params: {
            page: this.page
          }
        })
        .then((response) => {
          this.schreduleList = response.data.data
          this.totalItem = response.data.metadata.totalItem
        })
    },
    /**
     * Saves the schredule, if it has an id it sends a modification otherwise it sends a creation
     */
    async saveSchredule() {
      if (this.form.id) {
        await axios
          .put(`${import.meta.env.VITE_API_URL}/schredule/${this.form.id}`, this.form)
          .then((response) => {
            this.schreduleList.splice(
              this.schreduleList.findIndex((schredule) => schredule.id === this.form.id),
              1,
              response.data.data
            )
            this.closeModal()
          })
          .catch((error) => {
            if (error.response.status === 400) {
              this.errorValidationForm = error.response.data
              this.showValidationForm = true
            }
          })
        return
      }
      await axios
        .post(`${import.meta.env.VITE_API_URL}/schredule`, this.form)
        .then((response) => {
          this.schreduleList.unshift(response.data.data)
          this.closeModal()
        })
        .catch((error) => {
          if (error.response.status === 400) {
            this.errorValidationForm = error.response.data
            this.showValidationForm = true
          }
        })
    },
    /**
     * Set the default value before display the create schredule modal
     */
    createSchredule() {
      this.titleForCreationOrUpdate = `Nouvelle planification`
      this.errorValidationForm = null
      this.showValidationForm = false

      this.form = {
        shootingRange: ``,
        startTime: ``,
        endTime: ``,
        date: ``
      }
    },
    /**
     * Places the object in the form so that when the model is opened the data is visible for modification
     * @param {string} id
     */
    updateSchredule(id) {
      this.titleForCreationOrUpdate = `Modification du planning`
      this.errorValidationForm = null
      this.showValidationForm = false

      Object.assign(
        this.form,
        this.schreduleList.find((schredule) => schredule.id === id)
      )
    },
    /**
     * Delete a schredule
     * @param {string} id
     */
    deleteSchredule(id) {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/schredule/${id}`)
        .then(() => {
          this.schreduleList.splice(
            this.schreduleList.findIndex((schredule) => schredule.id === id),
            1
          )
        })
        .catch((error) => {
          this.$emit('flash-message', error)
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
    dateFormat(date) {
      return new Date(date).toLocaleDateString('fr')
    }
  }
}
</script>
