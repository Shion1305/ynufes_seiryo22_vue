import {createStore} from 'vuex'

export default createStore({
    state: {
        slides: [{slide: {url: "/image/loading.png"}}],
        sponsors: [{image: {url: "/image/loading1.png"}}],
        updates: []
    },
    getters: {},
    mutations: {
        setSlide(state, newSlides) {
            state.slides = newSlides;
        },
        setSponsors(state, newSponsors) {
            state.sponsors = newSponsors;
        },
        setUpdates(state, newUpdates) {
            state.updates = newUpdates;
        }
    },
    actions: {},
    modules: {}
})
