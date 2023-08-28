<template>
    <div class="contact-form row">
        <div class="contact-form__form col-lg-10 offset-lg-1 mt-5 mb-5">
            <div class="row">
                <div class="contact-form__form__title text-center col-lg-12 p-3">
                    <h2>Formulaire de contact</h2>
                </div>
                <div class="contact-form__form__name-input col-lg-6 p-4">
                    <label for="nameInput" class="form-label">Name</label>
                    <input class="form-control" id="nameInput" v-model="form.name" />
                </div>
                <div class="contact-form__form__email-input col-lg-6 p-4">
                    <label for="emailInput" class="form-label">Email</label>
                <input class="form-control" id="labelInput" v-model="form.email" placeholder="xxx@gmail.com"/>
                </div>
                <div class="contact-form____form__message col-lg-12 p-4">
                    <label for="messageInput" class="form-label">Email</label>
                    <textarea class="form-control" id="messageInput" v-model="form.message" placeholder="Ecrivez votre message ici" :rows="10"></textarea>
                </div>
                <div class="contact-form__form__button col-lg-12 text-center p-4">
                    <button class="btn" @click="submitContactForm">Valider</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
    name: null,
    email: null,
    message: null
})

function submitContactForm() {
    console.log(`envoyé`)
}

</script>
