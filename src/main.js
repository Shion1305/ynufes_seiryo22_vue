import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import TwitterFeed from "vuejs-twitter-feed";

createApp(App).use(store)
    // .use(TwitterFeed)
    .use(router).mount('#app')
