<template>
    <!-- Presentation association -->
    <div class="row home-presentation">
        <p class="home-presentation__text col-lg-8 offset-lg-2 mt-5 mb-5">Situé dans le départmeent de la Vienne(86), Nous sommes une association permettant dans deux stands avec infrastructure prévue à cette effet,
            de pratiqué plusieurs sport lié au tir avec arme que ce soit au plomb ou à balle réelle du calibre 4.5mm au 308 win sur des distance de 10m à 75m
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
            </p>
    </div>

    <!--presentation of discipline-->
    <div class="discipline-presentation row p-5">
        <div class="col-lg-8 offset-lg-2">
            <div class="card text-center">
                <div class="card-header discipline-presentation__header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item" v-for="discipline, index in disciplines" :key="index">
                            <a :class="dynamiqueStyleOfDisciplineLink(discipline.title)" @click="selectedDiscipline(discipline.title)">{{ discipline.title }}</a>
                        </li>
                    </ul>
                </div>
                <div class="row border m-2 discipline-presentation__content">
                    <img class="col-lg-3 p-0" :src="disciplineSelected.img" alt="image of discipline"/>
                    <p class="col-lg-9">{{ disciplineSelected.text }}</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Card of presentation to stands -->
    <div class="card-presentation row p-5">
        <h2 class="col-lg-12 text-center card-presentation__title">Stand de tir</h2>
        <div class="col-lg-10 offset-lg-1">
            <div class="row">
                <div class="col-lg-5 offset-1 text-center p-4">
                    <img :src="imageFirstCard" alt="...">
                    <div class="card-presentation__block-text">
                        <h5 class="m-4">Saint Leger</h5>
                        <p>Stand de tir exterieur sur la commune de Saint-Leger, pas de tir allant jusqu'à 75m, calibre jusqu'au 7.62 ou équivalent.</p>
                    </div>
                    <!-- horaire d'ouverture -->
                    <div class="col-lg-12 mt-4">
                        <h5 class="m-4">Horaire d'ouverture</h5>
                        <ul v-for="day, index in weekSaintLeger" :key="index">
                            <li class="row">
                                <p class="col-lg-6">{{ day.day }}</p>
                                <p class="col-lg-6">{{ day.open }}</p>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="btn mt-4">Voir plus d'information</a>
                </div>
                <div class="col-lg-5 text-center p-4">
                    <img :src="imageSecondCard" alt="...">
                    <div class="card-presentation__block-text">
                        <h5 class="m-4">Loudun</h5>
                        <p>Stand de tir interieur sur Loudun. pas de tir 10m, au plomb, carabine et arme de poing.</p>
                    </div>
                    <!-- horaire d'ouverture -->
                    <div class="col-lg-12 mt-4">
                        <h5 class="m-4">Horaire d'ouverture</h5>
                        <ul v-for="day, index in weekSaintLeger" :key="index">
                            <li class="row">
                                <p class="col-lg-6">{{ day.day }}</p>
                                <p class="col-lg-6">{{ day.open }}</p>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="btn mt-4">Voir plus d'information</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import imageFirstCard from "../../src/assets/img/stand_de_tir_saint_leger.jpg"
import imageSecondCard from "../../src/assets/img/stand_de_tir_saint_leger.jpg"
import benchRest from "@/assets/img/bench-rest.jpeg"
import { ref } from "vue"

const disciplines = ref([
                {
                    title: `22hunter à 50m`,
                    text: `Le Hunter est une discipline qui se pratique à 50 mètres avec une carabine .22lr. L'arme est posée sur des supports et équipée d'une lunette. L'objectif est de totaliser le maximum de points en additionnant le total des 25 cibles.`,
                    img: benchRest
                },
                {
                    title: `tir rapide`,
                    text: `tir rapide `,
                    img: benchRest
                },
                {
                    title: `carabine 50m`,
                    text: `carabine 50m`,
                    img: benchRest
                }
            ])

const disciplineSelected = ref(disciplines.value[0])

const weekSaintLeger = ref([
    { day: `dimanche 1`, open: true },
    { day: `dimanche 8`, open: true },
    { day: `dimanche 15`, open: true },
    { day: `dimanche 17`, open: true }
])

function selectedDiscipline(title: string) {
  const selected = disciplines.value.find((discipline) => discipline.title === title);
  if (selected) {
    disciplineSelected.value = selected;
  }
}

function dynamiqueStyleOfDisciplineLink(title: string) {
            if (disciplineSelected.value.title === title) {
                return `nav-link active`
            }
            return `nav-link`
        }
</script>

<style lang="scss">
    .active {
        color: #09b794 !important;
    }
</style>
