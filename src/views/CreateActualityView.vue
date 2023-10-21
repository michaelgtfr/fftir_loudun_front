<template>
  <main>
    <div class="actuality-form row">
      <div class="actuality-form__form col-lg-10 offset-lg-1 mt-5 mb-5">
        <div class="row">
          <div class="col-lg-12">
            <h2 class="text-center p-4">Formulaire de création d'un article</h2>
          </div>
          <form @submit.prevent="submitActualityForm">
            <!-- Title input -->
            <div class="col-lg-12 input-form">
              <label for="titleInput" class="form-label">Titre</label>
              <input class="form-control" id="titleInput" v-model="form.title" required />
            </div>
            <!-- Multiselect input -->
            <div class="col-lg-12 input-form">
              <label for="multiselectInput">Choix des types d'articles</label>
              <Multiselect
                id="multiselectInput"
                v-model="form.tags"
                mode="tags"
                :options="tagList"
                :create_option="true"
                required
              >
              </Multiselect>
            </div>
            <!-- File input -->
            <div class="input-form">
              <label for="pictureInput" class="form-label">Photo</label>
              <input
                type="file"
                id="pictureInput"
                class="form-control"
                accept="image/png, image/jpeg"
                required
              />
            </div>
            <!-- Chapo input -->
            <div class="input-form">
              <label for="chapoInput" class="form-label">Chapo</label>
              <textarea
                class="form-control"
                id="ChapoInput"
                v-model="form.chapo"
                placeholder="Écrivez votre chapô ici, un chapô, c'est un texte court résumant votre article."
                :rows="10"
                required
              ></textarea>
            </div>
            <!-- Content input -->
            <div class="input-form">
              <label for="contentInput" class="form-label">Contenu de l'article</label>
              <textarea
                class="form-control"
                id="contentInput"
                v-model="form.content"
                placeholder="Ecrivez votre article ici"
                :rows="20"
                required
              ></textarea>
            </div>
            <!-- Button -->
            <div class="actuality-form__form__button col-lg-12 text-center p-4">
              <button class="actuality-form__form__button__submit btn m-1" type="submit">
                Valider
              </button>
              <button class="actuality-form__form__button__preview btn m-1" @click="previewArticle">
                Voir le resultat
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Multiselect from '@vueform/multiselect'
import axios from 'axios'

export default {
  name: `createAcutalityView`,
  components: {
    Multiselect
  },
  data() {
    return {
      form: {
        title: ``,
        chapo: ``,
        content: ``,
        img: ``,
        tags: []
      },
      tagList: []
    }
  },
  created() {
    this.getTags()
  },
  methods: {
    /**
     * creation d'un article, ne pas oubliez de prendre en compte les porblme possible de donnes dont les champ sont tous requie
     */
    submitActualityForm() {
      console.log(`envoyé`)
    },
    /**
     * Tag recovery request (pagination 20 items by page)
     */
    getTags() {
      axios.get(`${import.meta.env.VITE_API_URL}/tag`).then((response) => {
        this.tagList = response.data.data.map((tag) => (tag.value = tag.name))
      })
    }
  }
}
</script>

<!-- Style for the muliselect -->
<style src="@vueform/multiselect/themes/default.css"></style>
