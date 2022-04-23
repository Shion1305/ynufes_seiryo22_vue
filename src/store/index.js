import {createStore} from 'vuex'

export default createStore({
    state: {
        slides: [{slide: {url: "/loading.png"}}]
    },
    getters: {},
    mutations: {
        setSlide(state, newSlides) {
            state.slides = newSlides;
        }
    },
    actions: {},
    modules: {}
})
