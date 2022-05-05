import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {createMetaManager} from 'vue-meta'
import VueGtag from "vue-gtag";

/**
 * refer https://stackoverflow.com/questions/66228340/how-to-use-vue-3-meta-with-vue-js-3 for vue-meta(for Vue3, alpha version)
 */


if (process.env.NODE_ENV === "production") {
    createApp(App).use(store)
        .use(createMetaManager())
        .use(router)
        .use(
            VueGtag,
            {
                config: {id: "G-88XSGWF51S"},
            }
        )
        .mount('#app')
} else {
    createApp(App).use(store)
        .use(createMetaManager())
        .use(router)
        .mount('#app')
    console.log("This is NOT a production build")
}