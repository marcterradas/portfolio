<template>
    <nav id="nav">
        <div class="right">
            <div v-if="selectedPage != 'home'" class="element" @click="changeSelectedPage('home')">{{ $t('home') }}</div>
        </div>
        <div class="left">
            <div class="element" id="cv">
                <a class="button" href="documents/marcterradas.pdf" download>{{ $t('download_cv') }}</a>
            </div>
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
        },
        selectedPage: {
            get: function () {
                return this.$store.getters['getSelectedPage']
            }
        }
    },
    methods: {
        changeSelectedPage: function (page) {
            if (this.selectedPage !== page) {
                this.$router.push(page)
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
    box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
    transition: 1s;

    .right {
        width: 50%;

        .element {
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
            width: fit-content;

            &:hover {
                transition: background-color 1s ease;
                background-color: $white2;
            }
        }
    }

    .left {
        width: 50%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-end;

        .element {
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

            &#cv {
                margin-right: 30px;
                .button {
                    height: 40px;
                    padding: 0 10px;
                    cursor: pointer;
                    border-radius: 4px;
                    border: none;
                    box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.15);
                    color: $black;
                    background-color: $green;
                    transition: 1s;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: $black;
                    text-decoration: none;
                    font-family: Roboto-Regular;

                    &:hover {
                        transition: background-color 1s ease;
                        background-color: $green2;
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .right {
            width: 25%;
        }

        .left {
            width: 75%;
        }
    }

    @media screen and (max-width: 450px) {
        .right,
        .left {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .right {
            margin-bottom: 20px;
        }

        .left {
            justify-content: space-between;
            .element {
                &#cv {
                    margin-right: 0;
                }
            }
        }
    }
}
</style>
