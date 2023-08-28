<template>
    <div class="login-form row">
        <div class="login-form__message col-lg-6 d-flex align-items-center">
            <div class="row">
                <p class="col-lg-8 offset-lg-2">{{ loginMessage }}</p>
            </div>
        </div>
        <div class="login-form__form col-lg-6 d-flex align-items-center">
            <div class="row">
                <div class="login-form__form__title text-center col-lg-12 p-3">
                    <h2>Connexion</h2>
                </div>
                <div class="contact-form__form__email-input col-lg-8 offset-lg-2 p-4">
                    <label for="emailInput" class="form-label">Email</label>
                    <input class="form-control" id="passwordInput" v-model="authentication.email" placeholder="xxx@gmail.com"/>
                </div>
                <div class="contact-form__form__password-input col-lg-8 offset-lg-2 p-4">
                    <label for="passwordInput" class="form-label">Password</label>
                    <input class="form-control" id="passwordInput" v-model="authentication.password" />
                </div>
                <div class="contact-form__form__button col-lg-8 offset-lg-2 text-center p-4">
                    <button class="btn p-2" @click="submitLoginForm">Connexion</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'
import { ref } from 'vue'

const store = useStore()

let authentication = computed(() => store.state.login.profile)

const loginMessage = ref(`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`)

function submitLoginForm() {
    store.dispatch('login/setAuthentication', authentication.value)
}

</script>
