<template>
    <div id="home">
        <div id="aboutMe">
            <div class="avatar"></div>
            <div class="name">{{ $t('name') }}</div>
            <div class="description">{{ $t('title') }}</div>
        </div>
        <div id="information">
            <div class="element" id="work" @click="changeSelectedPage('work')">
                <div class="title">{{ $t('work_title') }}</div>
                <div class="icon"></div>
            </div>
            <div class="element" id="education" @click="changeSelectedPage('education')">
                <div class="title">{{ $t('education_title') }}</div>
                <div class="icon"></div>
            </div>
            <div class="element" id="projects" @click="changeSelectedPage('projects')">
                <div class="title">{{ $t('projects_title') }}</div>
                <div class="icon"></div>
            </div>
            <div class="element" id="aboutMe" @click="changeSelectedPage('about')">
                <div class="title">{{ $t('aboutMe_title') }}</div>
                <div class="icon"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Home',
    computed: {
        selectedPage: {
            get: function () {
                return this.$store.getters['getSelectedPage']
            }
        }
    },
    methods: {
        changeSelectedPage: function (page) {
            this.$router.push(page)
        }
    }
}
</script>
<style lang="scss">
#home {
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: calc(100% - 165px);

    #aboutMe {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .avatar {
            width: 160px;
            height: 160px;
            border-radius: 50%;
            margin-bottom: 20px;
            background-image: url('/img/marc.png');
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center -20px;
            box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.15);
        }

        .name {
            font-family: Roboto-Bold;
            font-size: 36px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
        }

        .description {
            font-family: Roboto-Italic;
            font-size: 24px;
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
        }
    }

    #information {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        column-gap: 30px;
        row-gap: 30px;

        .element {
            max-height: 80px;
            width: 100%;
            border-radius: 4px;
            padding: 20px 0;
            box-shadow: 0px 4px 5px 1px rgba(0, 0, 0, 0.15);
            background-color: $white;
            transition: 1s;
            cursor: pointer;

            .title {
                text-align: center;
                font-family: Roboto-BoldItalic;
                font-size: 20px;
                width: 100%;
                margin-bottom: 20px;
            }

            .icon {
                width: 100%;
                height: 40px;
                background-size: 40px;
                background-repeat: no-repeat;
                background-position: center;
            }

            &:hover {
                transition: background-color 1s ease;
                background-color: $white2;
            }

            &#work {
                .icon {
                    background-image: url('/img/desk.png');
                }
            }

            &#education {
                .icon {
                    background-image: url('/img/education.png');
                }
            }

            &#projects {
                .icon {
                    background-image: url('/img/code.png');
                }
            }

            &#aboutMe {
                .icon {
                    background-image: url('/img/about_me.png');
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        height: fit-content;
        padding-bottom: 80px;

        #aboutMe {
            margin-bottom: 20px;
        }

        #information {
            grid-template-columns: 1fr 1fr;
        }
    }

    @media screen and (max-width: 720px) {
        #aboutMe {
            padding: 0;

            .name {
                font-size: 32px;
            }
        }

        #information {
            margin-top: 20px;
            grid-template-columns: 1fr;
        }
    }
}
</style>
