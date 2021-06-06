<template>
    <div class="element" id="education">
        <div class="title">{{ $t('education') }}</div>
        <div class="icon"></div>
        <div class="resume"></div>
    </div>
</template>

<script>
export default {
    name: 'Education'
}
</script>

<style lang="scss">
#education {
    .icon {
        background-image: url('../../../public/img/education-light.png');
    }
}
</style>
