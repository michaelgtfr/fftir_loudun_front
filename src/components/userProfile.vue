<template>
    <div class="container-fluid block-dashboard">
        <div class="row">
            <!-- Profile de l'utilisateur -->
            <div class="block-dashboard__profile col-lg-9">
                <div class="row">
                    <h2 class="col-lg-12 text-center pb-4">Mes informations</h2>
                    <div class="col-lg-6">
                        <p><span>Nom: </span>{{ profile.name }}</p>
                        <p><span>Email: </span>{{ profile.email }}</p>
                        <p><span>Adresse: </span>{{ profile.adresse }}</p>
                    </div>
                    <div class="col-lg-6">
                        <p><span>Prénom: </span>{{ profile.first_name }}</p>
                        <p><span>Age: </span>{{ profile.age }}</p>
                        <p><span>Numero de téléphone: </span>{{ profile.cellphone }}</p>
                    </div>
                </div>
            </div>
            <!-- Route specifique au rôle utilisateur-->
            <div class="col-lg-3 block-dashboard__link">
                <h2 class="text-center pb-4">Mes droits</h2>
                <div class="row">
                    <div class="col-lg-12 p-4 border">
                        <router-link to="/tag" class="col-lg-4 route">Gestion des tags</router-link>
                    </div>
                    <div  class="col-lg-12 p-4 border">
                        <router-link to="/openShootingRange" class="col-lg-4 route">Ouverture des stands</router-link>
                    </div>
                    <div class="col-lg-12 p-4 border">
                        <router-link to="/createArticle" class="col-lg-4 route">Créer un article</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { computed } from "vue"
import { useStore } from "vuex"


const store = useStore()
const profile = computed(() => store.state.login.profile)

</script>
