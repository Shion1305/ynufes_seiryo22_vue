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
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutView')
    },
    {
        path: '/events',
        name: 'event_list',
        component: () => import(/* webpackChunkName: "events" */ '../views/EventListView'),
        props: (route) => ({...route.params, type: parseInt(route.params.type)})
    },
    {
        path: '/events/type/:type',
        name: 'event_list',
        component: () => import(/* webpackChunkName: "events" */ '../views/EventListView'),
        props: (route) => ({...route.params, type: parseInt(route.params.type)})
    },
    {
        path: '/events/:id',
        name: 'event_detail',
        component: () => import(/* webpackChunkName: "event_detail" */ '../views/EventDetailView'),
        props: (route) => ({...route.params, eventId: parseInt(route.params.id)})
    },
    {
        path: '/pamphlet',
        name: 'pamphlet',
        component: () => import(/* webpackChunkName: "data" */ '../views/PamphletView1')
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
        component: () => import('../views/UnderConstruction'),
    },
    {
        path: '/update',
        name: 'updates',
        component: () => import('../views/UpdatesView'),
    },
    {
        path: '/others',
        name: 'other',
        component: () => import(/* webpackChunkName: "others" */ '../views/UnderConstruction'),
    },
    {
        path: '/hama_fes',
        name: 'HamaFes',
        component: () => import('../views/UnderConstruction'),
    },
    {path: '/404', component: () => import('../views/NotFoundView')},
    {path: '/:pathMatch(.*)*', redirect: '/404'},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: routes,
    scrollBehavior(to) {
        if (to.hash) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve({el: to.hash, behavior: 'smooth'})
                }, 500)
            })
        }
        return {top: 0}
    }
})

export default router
