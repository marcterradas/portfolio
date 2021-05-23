import Vue from 'vue'
import VueI18n from 'vue-i18n'

import cat from '../../public/lang/cat.json'
import es from '../../public/lang/es.json'
import en from '../../public/lang/en.json'

Vue.use(VueI18n)

const languages = {
    cat,
    es,
    en
}

const i18n = new VueI18n({
    locale: 'en',
    fallbackLocale: 'en',
    messages: Object.assign(languages)
})

export default i18n
