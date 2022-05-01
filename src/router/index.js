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
        path: '/events/:id',
        name: 'event_detail',
        component: () => import(/* webpackChunkName: "event_detail" */ '../views/EventDetailView'),
        props: (route) => ({...route.params, id: parseInt(route.params.id)})
    },
    {
        path: '/pamphlet',
        name: 'pamphlet',
        component: () => import(/* webpackChunkName: "pamphlet" */ '../views/PamphletView')
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
        component: () => import('../views/UnderConstruction'),
    },
    {
        path: '/others',
        name: 'other',
        component: () => import(/* webpackChunkName: "others" */ '../views/UnderConstruction'),
    },
    // {
    //     path:'/update/:id',
    //     name: 'update_detail',
    //     component: () => import(/* webpackChunkName: "update_detail" */ '../views/EventDetailView.vue'),
    //     props: (route) => ({...route.params, id: parseInt(route.params.id)})
    // },
    {
        path: '/hama_fes',
        name: 'HamaFes',
        component: () => import('../views/UnderConstruction'),
    },
    {path: '/404', component: () => import('../views/NotFoundView'),meta:{title:"404 ページが存在しません。", desc: "対象のページは見つかりm戦でした。。"}},
    {path: '/:pathMatch(.*)*', redirect: '/404'},
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
// router.redirect({'*': '404'});

export default router
