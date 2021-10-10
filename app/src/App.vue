<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from '@/components/template/Nav'
import Footer from '@/components/template/Footer'

export default {
    name: 'App',
    components: {
        Nav,
        Footer
    }
}
</script>

<style lang="scss">
#app {
    height: 100%;
}
</style>
