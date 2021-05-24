import i18n from '@/i18n/index'

const state = {
    languages: {
        cat: 'Català',
        es: 'Castellano',
        en: 'English'
    },
    selectedLanguage: 'en'
}

const getters = {
    getLanguages: (state) => {
        return state.languages
    },
    getSelectedLanguage: (state) => {
        return state.selectedLanguage
    }
}

const actions = {}

const mutations = {
    setSelectedLanguage(state, language) {
        state.selectedLanguage = language
        i18n.locale = language
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}
