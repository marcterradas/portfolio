import Vue from 'vue'
import Vuex from 'vuex'

import language from './modules/language'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        selectedPage: 'home'
    },
    getters: {
        getSelectedPage: (state) => {
            return state.selectedPage
        }
    },
    mutations: {
        setSelectedPage: (state, value) => {
            state.selectedPage = value
        }
    },
    actions: {},
    modules: {
        language
    }
})
