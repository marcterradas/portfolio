<template>
    <div id="about">
        <div class="title">{{ $t('about_me_description.title') }}</div>
        <div class="subtitle">{{ $t('about_me_description.subtitle') }}</div>
        <div class="text">{{ $t('about_me_description.text1', { age: age, experience: experience }) }}</div>
        <div class="text" v-html="$t('about_me_description.text2')"></div>
        <div class="text" v-html="$t('about_me_description.text3')"></div>
        <div class="text" >{{ $t('about_me_description.text4') }}</div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe',
    components: {},
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
#about {
    padding: 20px;
    max-width: 1000px;

    .title {
        font-size: 32px;
        margin-bottom: 6px;
    }

    .subtitle {
        font-size: 22px;
        margin-bottom: 12px;
    }

    b {
        font-weight: bold;
    }

    .text {
        line-height: 20px;
    }

}
</style>
