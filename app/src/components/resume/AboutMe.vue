<template>
    <div class="element" id="about_me">
        <div class="title">{{ $t('about_me') }}</div>
        <div class="icon"></div>
        <div class="resume"></div>
    </div>
</template>

<script>
export default {
    name: 'AboutMe'
}
</script>

<style lang="scss">
#about_me {
    .icon {
        background-image: url('../../../public/img/about_me-light.png');
    }
}
</style>
