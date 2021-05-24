<template>
    <nav id="nav">
        <div>
            <select v-model="selectedLanguage">
                <option v-for="(index, language) in languages" :key="index">{{ language }}</option>
            </select>
        </div>
        <div>{{ selectedLanguage }}</div>
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
