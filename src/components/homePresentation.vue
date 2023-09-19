<template>
    <!-- Presentation association -->
    <div v-if="showPresentation" class="row home-presentation">
        <p class="home-presentation__text col-lg-8 offset-lg-2 mt-5 mb-5">{{ getpersonalizedContent('presentation') }}</p>
    </div>

    <!--Presentation of discipline-->
    <div v-if="showDisciplines" class="discipline-presentation row p-5">
        <div class="col-lg-8 offset-lg-2">
            <div class="card text-center">
                <div class="card-header discipline-presentation__header">
                    <ul class="nav nav-tabs card-header-tabs">
                        <li class="nav-item" v-for="discipline, index in disciplines" :key="index">
                            <a :class="dynamiqueStyleOfDisciplineLink(discipline.id)" @click="selectedDiscipline(discipline.id)">{{ discipline.discipline }}</a>
                        </li>
                    </ul>
                </div>
                <div class="row border m-2 discipline-presentation__content">
                    <img class="col-lg-3 p-0" :src="urlDisciplineImg" alt="image of discipline"/>
                    <p class="col-lg-9">{{ disciplineSelected.presentation }}</p>
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
                        <ul v-for="day, index in  getSchreduleByShootingRange(SAINT_LEGER)" :key="index">
                            <li class="row">
                                <p class="col-lg-6">{{ dateFormat(day.date) }}</p>
                                <p class="col-lg-6">{{ timeFormat(day.startTime) }} - {{ timeFormat(day.endTime) }}</p>
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
                        <ul v-for="day, index in getSchreduleByShootingRange(LOUDUN)" :key="index">
                            <li class="row">
                                <p class="col-lg-6">{{dateFormat(day.date) }}</p>
                                <p class="col-lg-6">{{ timeFormat(day.startTime) }} - {{ timeFormat(day.endTime) }}</p>
                            </li>
                        </ul>
                    </div>
                    <a href="#" class="btn mt-4">Voir plus d'information</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios"
import imageFirstCard from "../../src/assets/img/stand_de_tir_saint_leger.jpg"
import imageSecondCard from "../../src/assets/img/stand_de_tir_saint_leger.jpg"
import { SAINT_LEGER, LOUDUN } from "@/constant/appConstant"

export default ({
    data() {
        return {
            SAINT_LEGER,
            LOUDUN,
            imageFirstCard,
            imageSecondCard,
            disciplines: [],
            disciplineSelected: {},
            schredules: [],
            showDisciplines: false,
            personalizedPage: null,
            showPresentation: false,
            file: {}
        }
    },
    created() {
        this.getShowsShootingsDisciplines()
        this.getShowsShredules()
        this.getPersonnalizedPage()
    },
    computed: {
        /**
         * URL to the images of the discipline part
         */
        urlDisciplineImg()
        {
            return `${import.meta.env.VITE_BASE_IMG_URL}/uploads/disciplineImg/${this.disciplineSelected.disciplinePicture}`
        }
    },
    methods: {
        /**
         * Retrieve the list of disciplines
         */
        getShowsShootingsDisciplines() {
            axios
                .get(`${import.meta.env.VITE_API_URL}/showsShootingsDisciplines`)
                .then((response) => {
                    this.disciplines = response.data.data
                    this.disciplineSelected = this.disciplines[0]
                    this.showDisciplines = true
                });
        },
        /**
         * Retrieve the schredules of club
         */
         getShowsShredules() {
            axios
                .get(`${import.meta.env.VITE_API_URL}/showsSchredules`)
                .then((response) => {
                    this.schredules = response.data.data
                });
        },
        /**
         * Retrieve the list of personalized content
         */
         getPersonnalizedPage() {
            axios
                .get(`${import.meta.env.VITE_API_URL}/personalizedPageContent/homepage`)
                .then((response) => {
                    this.personalizedPage = response.data.data
                    this.showPresentation = true
                });
        },
        /**
         * Displays the chosen discipline
         * @param {integer} id 
         */
        selectedDiscipline(id) {
            const selected = this.disciplines.find((discipline) => discipline.id === id);
            if (selected) {
                this.disciplineSelected = selected;
            }
        },
        /**
         * Add a style to the chosen discipline
         * @param {integer} id 
         */
        dynamiqueStyleOfDisciplineLink(id) {
            if (this.disciplineSelected.id === id) {
                return `nav-link active`
            }
            return `nav-link`
        },
        /**
         * Gives the schedule by shooting range
         * @param {string} shootingRange 
         */
        getSchreduleByShootingRange(shootingRange) {
            return this.schredules.filter((schredules) => schredules.shootingRange === shootingRange)
        },
        /**
         * Provides the requested personalized content
         * @param {string} subpart 
         */
        getpersonalizedContent(subpart) {
            return this.personalizedPage.find((content) => content.subpart == subpart).content
        },
        /**
         * Sets up a format for dates
         * @param {string} date 
         */
        dateFormat(date) {
            return new Date(date).toLocaleDateString("fr")
        },
        /**
         * Sets up a format for the time
         * @param {string} datetime 
         */
        timeFormat(datetime) {
            const date = new Date(datetime);
            const hours = String(date.getHours()).padStart(2, '0');
            const minutes = String(date.getMinutes()).padStart(2, '0');
            return `${hours}:${minutes}`;
        }
    }
})
</script>

<style lang="scss">
    .active {
        color: #09b794 !important;
    }
</style>
