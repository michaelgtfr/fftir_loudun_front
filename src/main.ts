import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { BootstrapVue3 } from 'bootstrap-vue-3'
import './assets/main.scss'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import "leaflet/dist/leaflet.css";

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faPhone , faEnvelope, faHouse } from "@fortawesome/free-solid-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons"

library.add(faPhone);
library.add(faEnvelope)
library.add(faHouse)
library.add(faSquareFacebook)

const app = createApp(App)

app.use(router)
app.use(store)
// Make BootstrapVue available throughout your project
app.use(BootstrapVue3)
app.component("font-awesome-icon", FontAwesomeIcon)

app.mount('#app')
