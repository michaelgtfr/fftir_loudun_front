<template>
    <div class="actuality-form row">
        <div class="actuality-form__form col-lg-10 offset-lg-1 mt-5 mb-5">
            <div class="row">
                <div>
                    <h2>Formulaire de création d'un article</h2>
                </div>
                <div class="col-lg-7">
                    <label for="titleInput" class="form-label">Titre</label>
                    <input class="form-control" id="titleInput" v-model="form.title" />
                </div>
                <div class="offset-lg-1 col-lg-4">
                        <label for="multiselectInput">Choix des types d'articles</label>
                        <Multiselect
                            id="multiselectInput"
                            class=""
                            v-model="form.tags"
                            mode="tags"
                            :options="listTags"
                            :create_option=true>
                        </Multiselect>
                    </div>
                <div>
                    <label for="chapoInput" class="form-label">Chapo</label>
                    <textarea class="form-control" id="ChapoInput" v-model="form.chapo" placeholder="Ecrivez votre chapo ici" :rows="10"></textarea>
                </div>
                <div>
                    <label for="contentInput" class="form-label">Contenu de l'article</label>
                    <textarea class="form-control" id="contentInput" v-model="form.content" placeholder="Ecrivez votre article ici" :rows="20"></textarea>
                </div>
                <div class="actuality-form__form__button col-lg-12 text-center p-4">
                    <button class="actuality-form__form__button__submit btn m-1" @click="submitActualityForm">Valider</button>
                    <button class="actuality-form__form__button__preview btn m-1" @click="previewArticle">Voir le resultat</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Multiselect from "@vueform/multiselect"

const form = ref({
    title: ``,
    chapo: ``,
    content: ``,
    img: ``,
    tags: []
})

const listTags = ref([
    {
        id: `1`,
        value: `vie du club`,
        label: `vie2`,
        style: {
            backgroundColor: `red`
        }
    },
    {
        id: `dd2`,
        value: `armement`,
        label: `armement2`,
        style: {
            backgroundColor: `#09b794`
        }
    }
])
function submitActualityForm() {
    console.log(`envoyé`)
}

</script>

<!-- Style for the muliselect -->
<style src="@vueform/multiselect/themes/default.css"></style>
