import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView,
        meta: {
            title: "トップ",
            desc: "横浜国立大学祭「22清陵祭」の公式ホームページのトップ画面です。今年のテーマは『花笑み』。"
        }
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/UnderConstruction'),
        meta: {
            title: '清陵祭とは',
            desc: "清陵祭について紹介しています"
        }
    },
    {
        path: '/events',
        name: 'event_list',
        component: () => import(/* webpackChunkName: "events" */ '../views/EventListView'),
        props: (route) => ({...route.params, type: parseInt(route.params.type)}),
        meta: {
            title: '企画一覧',
            desc: "22清陵祭で実施されるオンライン企画を一覧で紹介しています。それぞれの企画を選択するとその詳細を確認できます。"
        }
    },
    {
        path: '/events/:id',
        name: 'event_detail',
        component: () => import(/* webpackChunkName: "event_detail" */ '../views/EventDetailView.vue'),
        props: (route) => ({...route.params, id: parseInt(route.params.id)}),
        meta: {
            title: 1,
            desc: 1
            //1を設定することで無視する。App.vueを参照
            //企画詳細ページはEventDetailViewのmountedで設定している。
        }
    },
    {
        path: '/pamphlet',
        name: 'pamphlet',
        component: () => import(/* webpackChunkName: "pamphlet" */ '../views/PamphletView'),
        meta: {
            title: 'オンラインパンフレット',
            desc: '22清陵祭のオンラインパンフレットを掲載しています。'
        }
    },
    {
        path: '/preview',
        name: 'preview_warning',
        component: () => import('../views/PreviewEndView'),
        meta: {
            title: 'プレビュー',
            desc: "企画団体用のプレビューサイトです。プレビューサイトの公開は終了しました。"
        }
    },
    {
        path: '/sponsors',
        name: 'sponsors',
        component: () => import('../views/SponsorsView'),
        meta: {
            title: 'ご協賛企業一覧',
            desc: "「22清陵祭」の開催するにあたりご協賛くださった企業の一覧を掲載しています。数多くの企業の皆様に多大なご協力を賜りました。心より感謝申し上げます。"
        }
    },
    {
        path: '/poster',
        name: 'posters',
        component: () => import('../views/UnderConstruction'),
        meta: {
            title: 'ポスター展覧会',
            desc: "2月頃に22清陵祭のポスター案を募集致しました。たくさんのご応募、誠にありがとうございました。このページでは応募作品全3点をご紹介しております。"
        }
    },
    {
        path: '/update',
        name: 'updates',
        component: () => import('../views/UnderConstruction'),
        meta: {
            title: '更新情報',
            desc: "22清陵祭HPの更新情報を掲載しています。"
        }
    },
    {
        path: '/others',
        name: 'other',
        component: () => import(/* webpackChunkName: "others" */ '../views/UnderConstruction'),
        meta: {
            title: '他大学祭紹介',
            desc: "本大学祭と提携している他大学の大学祭を紹介しています。"
        }
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
        meta: {
            title: '浜フェス企画',
            // desc: ""
        }
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
