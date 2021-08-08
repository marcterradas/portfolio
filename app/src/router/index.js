import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store/index.js'

const Home = () => import('@/views/Home.vue')
const Work = () => import('@/views/Work.vue')
const Education = () => import('@/views/Education.vue')
const AboutMe = () => import('@/views/AboutMe.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/work',
        name: 'work',
        component: Work
    },
    {
        path: '/education',
        name: 'education',
        component: Education
    },
    {
        path: '/about',
        name: 'about',
        component: AboutMe
    },
    {
        path: '*',
        name: 'home',
        component: Home
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes
})

router.beforeEach((to, from, next) => {
    store.commit('setSelectedPage', to.name)
    next()
    window.scrollTo(0,0);    
})

export default router
