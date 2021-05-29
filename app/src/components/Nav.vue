<template>
    <nav id="nav">
        <div class="right"></div>
        <div class="left">
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
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;
    border-bottom: 1px solid $grey;

    .right {
        width: 50%;
    }

    .left {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        select {
            height: 40px;
            background-color: $grey;
            color: $white;
            padding: 10px;
            cursor: pointer;

            option {
                cursor: pointer;
            }
        }
    }
}
</style>
