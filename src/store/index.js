import {createStore} from 'vuex'

export default createStore({
    state: {
        slides: [{slide: {url: "/loading.png"}}],
        ads: [{image: {url: "/loading1.png"}}],
        updates: []
    },
    getters: {},
    mutations: {
        setSlide(state, newSlides) {
            state.slides = newSlides;
        },
        setAds(state, newAds) {
            state.ads = newAds;
        },
        setUpdates(state, newUpdates) {
            state.updates = newUpdates;
        }
    },
    actions: {},
    modules: {}
})
