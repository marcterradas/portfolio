<template>
    <div id="about">
        <div>{{ $t('about_me_description.title') }}</div>
        <div>{{ $t('about_me_description.subtitle') }}</div>
        <div>{{ $t('about_me_description.text1', { age: age, experience: experience }) }}</div>
        <div v-html="$t('about_me_description.text2')"></div>
        <div v-html="$t('about_me_description.text3')"></div>
        <div>{{ $t('about_me_description.text4') }}</div>
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
    b {
        font-weight: bold;
    }
}
</style>
