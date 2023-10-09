<template>
  <main>
    <div class="tag-page container-fluid">
      <!-- Table part -->
      <DynamicTable
        :headers="tagHeaders"
        :lines="tagList"
        :title="titleTag"
        :explanation="explanationTag"
        @update="updateTag"
        @delete="deleteTag"
      >
        <!-- Slot part of table -->
        <template v-slot="slotProps">
          <div v-if="slotProps.header.attribute === 'representation'">
            <button class="badge btn-sm" :style="slotProps.line.style">
              {{ slotProps.line.name }}
            </button>
          </div>
        </template>
      </DynamicTable>

      <!-- Pagination part -->
      <div class="tag-page__pagination-and-modal container-fluid">
        <Pagination
          class="col-lg-12"
          :pageDisplay="page"
          :number-total-of-items="totalItem"
          @page-selected="pageSelected"
        />
      </div>

      <!-- Modal part -->
      <Modal
        class="col-lg-12"
        :title-for-creation-or-update="titleForCreationOrUpdate"
        @open-modal="createTag"
        @save="saveTag"
      >
        <!-- slot: input for tag -->
        <div class="row">
          <!-- general message -->
          <div v-if="errorValidationForm" class="alert alert-danger" role="alert">
            {{ errorValidationForm.message }}
          </div>
          <div class="col-lg-6 p-2">
            <label for="tagNameInput" class="form-label">Nom du tag</label>
            <input
              :class="getInputStyle('name')"
              class="form-control"
              id="tagNameInput"
              v-model="form.name"
            />
            <div v-if="showValidationForm" class="invalid-feedback">
              {{ getError('name') }}
            </div>
          </div>
          <div class="col-lg-6 p-2">
            <label for="tagStyleBackgroundColorInput" class="form-label col-lg-12"
              >Couleur du fond</label
            >
            <input
              class="col-lg-12"
              type="color"
              id="tagStyleBackgroundColorInput"
              v-model="form.style.backgroundColor"
            />
          </div>
          <div class="col-lg-6 p-2">
            <label for="tagPresentationInput" class="form-label">Presentation du tag</label>
            <textarea
              class="form-control"
              :class="getInputStyle('presentation')"
              id="tagPresentationInput"
              v-model="form.presentation"
              placeholder="Ecrivez votre message ici"
              :rows="10"
            ></textarea>
            <div class="invalid-feedback">
              {{ getError('presentation') }}
            </div>
          </div>
          <div class="col-lg-6 p-2">
            <label for="tagStyleColorInput" class="form-label col-lg-12">Couleur écriture</label>
            <input
              class="col-lg-12"
              type="color"
              id="tagStyleColorInput"
              v-model="form.style.color"
            />
            <div class="row">
              <span class="test-center p-2 col-lg-12">Representation du tag</span>
              <div>
                <button :style="form.style" class="badge btn-sm">{{ form.name }}</button>
              </div>
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
  name: `tagView`,
  mixins: [modalMixin],
  data() {
    return {
      tagList: [],
      titleTag: `Liste des Tags`,
      explanationTag: `explanation tags`,
      titleForCreationOrUpdate: ``,
      tagHeaders: [
        { name: 'Name', attribute: 'name' },
        { name: 'Presentation', attribute: 'presentation' },
        { name: 'Reprèsentation du tag', attribute: 'representation', slot: true }
      ],
      page: 1,
      totalItem: 0,
      form: {
        name: ``,
        presentation: ``,
        style: {
          backgroundColor: `gray`
        }
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
      this.getTags()
    }
  },
  created() {
    this.getTags()
  },
  methods: {
    /**
     * Tag recovery request (pagination 20 items by page)
     */
    getTags() {
      axios
        .get(`${import.meta.env.VITE_API_URL}/tag`, {
          params: {
            page: this.page
          }
        })
        .then((response) => {
          this.tagList = response.data.data
          this.totalItem = response.data.metadata.totalItem
        })
    },
    /**
     * Saves the tag, if it has an id it sends a modification otherwise it sends a creation
     */
    async saveTag() {
      if (this.form.id) {
        await axios
          .put(`${import.meta.env.VITE_API_URL}/tag/${this.form.id}`, this.form)
          .then((response) => {
            this.tagList.splice(
              this.tagList.findIndex((tag) => tag.id === this.form.id),
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
        .post(`${import.meta.env.VITE_API_URL}/tag`, this.form)
        .then((response) => {
          this.tagList.unshift(response.data.data)
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
     * Delete a tag
     * @param {string} id
     */
    deleteTag(id) {
      axios
        .delete(`${import.meta.env.VITE_API_URL}/tag/${id}`)
        .then(() => {
          this.tagList.splice(
            this.tagList.findIndex((tag) => tag.id === id),
            1
          )
        })
        .catch((error) => {
          this.$emit('flash-message', error)
        })
    },
    /**
     * Set the default value before display the create tag modal
     */
    createTag() {
      this.titleForCreationOrUpdate = `Creation d'un tag`
      this.errorValidationForm = null
      this.showValidationForm = false

      this.form = {
        name: ``,
        presentation: ``,
        style: {
          backgroundColor: `gray`
        }
      }
    },
    /**
     * Places the object in the form so that when the model is opened the data is visible for modification
     * @param {string} id
     */
    updateTag(id) {
      this.titleForCreationOrUpdate = `Modification du tag`
      this.errorValidationForm = null
      this.showValidationForm = false

      Object.assign(
        this.form,
        this.tagList.find((tag) => tag.id === id)
      )
    }
  }
}
</script>
