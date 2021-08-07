<template>
    <div class="element" id="about_me" @click="$emit('selectedPage', 'about')">
        <div class="title">{{ $t('about_me') }}</div>
        <div class="icon"></div>
        <div class="resume">
            <div class="row">
                <div class="birthday">{{ $t('about_me_description.birthday') }}</div>
                <div class="description">{{ $t('about_me_description.description.part1', { age: age, experience: experience }) }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    computed: {
        age: function () {
            const birthdayYear = 1998
            const currentYear = new Date().getFullYear()
            return currentYear - birthdayYear
        },
        experience: function () {
            const startYear = 2018
            const currentYear = new Date().getFullYear()
            return currentYear - startYear
        }
    }
}
</script>

<style lang="scss">
#about_me {
    .icon {
        background-image: url('../../../public/img/about_me-dark.png');
    }

    .resume {
        .row {
            width: 100%;
            padding: 20px 0 0 10px;

            .birthday {
                font-family: Roboto-Bold;
                font-size: 16px;
                margin-bottom: 3px;
            }

            .description {
                font-size: 14px;
                margin-bottom: 2px;
            }
        }
    }

    @media screen and (max-width: 450px) {
        .resume {
            .row {
                .description {
                    font-size: 12px;
                }
            }
        }
    }
}
</style>
