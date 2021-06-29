import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/views/Home.vue')
const Work = () => import('@/views/Work.vue')
const Education = () => import('@/views/Education.vue')
const AboutMe = () => import('@/views/AboutMe.vue')

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
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
        name: 'default',
        component: Home
    }
]

const router = new VueRouter({
    mode: 'history',
    routes
})

export default router
