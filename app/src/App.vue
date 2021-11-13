<template>
    <div id="app">
        <Nav></Nav>
        <router-view></router-view>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from '@/components/template/Nav.vue'
import Footer from '@/components/template/Footer.vue'

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
