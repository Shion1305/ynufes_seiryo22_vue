import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/UnderConstruction')
    },
    {
        path: '/events',
        name: 'event_list',
        component: () => import(/* webpackChunkName: "about" */ '../views/EventListView')
    },
    {
        path: '/events/:id',
        name: 'event_detail',
        component: () => import(/* webpackChunkName: "about" */ '../views/EventDetailView.vue'),
        props: (route) => ({...route.params, id: parseInt(route.params.id)})
    },
    {
        path: '/pamphlet',
        name: 'pamphlet',
        component: () => import(/* webpackChunkName: "about" */ '../views/UnderConstruction.vue')
    },
    {
        path: '/preview',
        name: 'preview_warning',
        component: () => import('../views/PreviewEndView'),
    },
    {
        path: '/sponsors',
        name: 'sponsors',
        component: () => import('../views/SponsorsView'),
    },
    {
        path: '/poster',
        name: 'posters',
        component: () => import('../views/PosterView'),
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
