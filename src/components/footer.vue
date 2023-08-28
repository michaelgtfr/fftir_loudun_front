<template>
    <div class="footer row p-4">
        <!-- First column with informartion in association-->
        <div class="footer__first-column col-lg-4 d-flex justify-content-center">
            <div class="row">
                <p class="col-lg-12"><font-awesome-icon :icon="['fa', 'phone']" /> 0700000000</p>
                <p class="col-lg-12"><font-awesome-icon :icon="['fas', 'envelope']" /> ctpl86000@gmail.com</p>
                <p class="col-lg-12"><font-awesome-icon :icon="['fas', 'house']" /> loudun</p>
                <p class="col-lg-12">
                    <a href="https://www.facebook.com/ClubdetirduPaysLoudunais/?locale=fr_FR"><font-awesome-icon :icon="['fab', 'square-facebook']" /> Facebook</a>
                </p>
            </div>
        </div>
        <!-- Second column with logo -->
        <div class="footer__second-column d-flex justify-content-center col-lg-4">
            <img :src="imageLogo" alt="logo" />
        </div>
        <!-- menu to application -->
        <div class="footer__third-column col-lg-4 d-flex justify-content-center">
            <div class="row">
                <a class="col-lg-12" to="/">Accueil</a>
                <a class="col-lg-12" to="/login">Login</a>
                <a class="col-lg-12" to="/contact">Contact</a>
            </div>
        </div>
    </div>
</template>

<script setup>
import imageLogo from '@/assets/img/logo_club_tir_loudun.png'
</script>
