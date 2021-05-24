<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
    </div>
</template>

<script>
import Nav from '@/components/Nav'

export default {
    name: 'App',
    components: {
        Nav
    }
}
</script>

<style lang="scss">
#app {
}
</style>
