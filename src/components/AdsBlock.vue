<template>
  <swiper :slidesPerView="2" :spaceBetween="20"
          :loop="true"
          :autoplay="{
  delay: 4000,
  disableOnInteraction: false,
  }"
          :breakpoints="{
          430: {
          slidesPerView: 3,
          spaceBetween: 5,
          },
          800: {
          slidesPerView: 4,
          spaceBetween: 20,
          },

          }"
          class="adsSwiper">

    <swiper-slide v-for="ad in randomList(this.$store.state.ads)" :key="ad.id"><img :src="`${ad.image.url}`" alt=""/>
    </swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'

// import Swiper core and required modules
import SwiperCore, {Autoplay} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay]);


export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {};
  },
  methods: {
    randomList: function (rand) {
      return rand.sort(function () {
        return 0.5 - Math.random()
      });
    }
  },
  props: {}
}
</script>
<style lang="scss">

.swiper {
  max-width: 50rem;
  width: 100vw;
  height: 100%;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>