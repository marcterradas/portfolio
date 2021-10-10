<template>
    <div id="home">
        <div id="aboutMe">
            <div class="avatar"></div>
            <div class="name">{{ $t('name') }}</div>
            <div class="description">{{ $t('title') }}</div>
        </div>
        <div id="information">
            <Work @selectedPage="changeSelectedPage($event)"></Work>
            <Education @selectedPage="changeSelectedPage($event)"></Education>
            <AboutMe @selectedPage="changeSelectedPage($event)"></AboutMe>
        </div>
    </div>
</template>

<script>
import Work from '@/components/resume/Work'
import Education from '@/components/resume/Education'
import AboutMe from '@/components/resume/AboutMe'

export default {
    name: 'Home',
    components: {
        Work,
        Education,
        AboutMe
    },
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
            background-image: url('../../public/img/marc.png');
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
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 20px;
        row-gap: 20px;

        .element {
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
            grid-template-columns: 1fr;
        }
    }
}
</style>
