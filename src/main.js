import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createMetaManager} from 'vue-meta'
// import TwitterFeed from "vuejs-twitter-feed";


/**
 * refer https://stackoverflow.com/questions/66228340/how-to-use-vue-3-meta-with-vue-js-3 for vue-meta(for Vue3, alpha version)
 */

createApp(App).use(store)
    .use(createMetaManager())
    // .use(TwitterFeed)
    .use(router).mount('#app')
