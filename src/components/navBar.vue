<template>
    <!-- NAVBAR -->
    <div class="menu_nav">
      <div class="menu_nav__navbar">
        <b-navbar>
            <b-navbar-brand to="/" class="menu_nav__navbar__brand">
                CTPL
            </b-navbar-brand>

          <b-collapse class="d-flex">
            <b-navbar-nav class="me-2">
            <b-nav-item :class="dynamiqueStyle(`home`)" to="/">Home</b-nav-item>
            <b-nav-item :class="dynamiqueStyle(`login`)" to="/login">Connexion</b-nav-item>
            <b-nav-item :class="dynamiqueStyle(`contact`)" to="/contact">Contact</b-nav-item>
            <b-nav-item :class="dynamiqueStyle(`dashboard`)" to="/dashboard">Mon profil</b-nav-item>
            <b-nav-item :class="dynamiqueStyle(`actuality`)" to="/actuality">Actualités</b-nav-item>
            <b-nav-item :class="dynamiqueStyle(`voir article`)" to="/article">article</b-nav-item>
          </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </div>
</template>

<script setup>
import { useRoute } from "vue-router"
import imageNav from "../../src/assets/img/logo_club_tir_loudun.png"

const route = useRoute()

function dynamiqueStyle(name) {
            if (name === route.name) {
                return `active-link`
            }
            return `not-active-link`
        }
</script>

<style lang="scss">
.active-link {
    a {
        color: #09b794 !important
    }
}

.not-active-link {
    a {
        color: black !important
    }
}
</style>
