<template>
    <nav id="nav">
        <div class="right">
            <!-- <div class="element">{{ $t('home') }}</div> -->
        </div>
        <div class="left">
            <div class="element">
                <select v-model="selectedLanguage">
                    <option v-for="(language, index) in languages" :key="index" :value="index">{{ language }}</option>
                </select>
            </div>
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
    },
    methods: {}
}
</script>

<style lang="scss">
#nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 20px;
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
    transition: 1s;

    .right {
        width: 50%;

        .element {
            background-color: $grey;
            color: $white;
            padding: 10px;
            cursor: pointer;
            width: fit-content;
            border-radius: 4px;
            border: 1px solid $grey;
        }
    }

    .left {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;
        select {
            height: 40px;
            color: $white;
            padding: 10px;
            cursor: pointer;
            border-radius: 4px;
            border: none;
            box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.15);
            color: $black;
            font-family: Roboto-Regular;
            background-color: $white;
            transition: 1s;

            &:hover {
                transition: background-color 1s ease;
                background-color: $white2;
            }

            option {
                background-color: $white2;
                color: $black;
                font-family: Roboto-Regular;
                border: none;
            }
        }
    }
}
</style>
