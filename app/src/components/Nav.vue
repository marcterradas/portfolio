<template>
    <nav id="nav">
        <div>
            <select v-model="selectedLanguage">
                <option v-for="(language, index) in languages" :key="index" :value="index">{{ language }}</option>
            </select>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Nav',
    computed: {
        languages: function () {
            return this.$store.getters['language/getLanguages']
        },
        selectedLanguage: {
            get: function () {
                return this.$store.getters['language/getSelectedLanguage']
            },
            set: function (language) {
                this.$store.commit('language/setSelectedLanguage', language)
            }
        }
    }
}
</script>

<style lang="scss">
#nav {
}
</style>
