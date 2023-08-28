import { createStore } from 'vuex'
import login from './login/index'

const store = createStore({
    modules: {
        login
    },
})

export default store
