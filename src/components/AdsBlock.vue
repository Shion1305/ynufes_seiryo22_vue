<template>
  <swiper :autoplay="{
  delay: 4000,
  disableOnInteraction: false,
  }" :loop="true" :pagination='{
  "clickable": true
}'
          :slidesPerView="3"
          :spaceBetween="40"
          class="mySwiper">
    <swiper-slide><img src="@/assets/ads/dummyAds.png"/></swiper-slide>
    <swiper-slide><img src="@/assets/ads/dummyAds.png"/></swiper-slide>
    <swiper-slide><img src="@/assets/ads/dummyAds.png"/></swiper-slide>
    <swiper-slide><img src="@/assets/ads/dummyAds.png"/></swiper-slide>
    <swiper-slide><img src="@/assets/ads/dummyAds.png"/></swiper-slide>
    <swiper-slide><img src="@/assets/ads/dummyAds.png"/></swiper-slide>
  </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'
import "swiper/css/pagination"


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
  methods: {}

}
</script>
<style>
.swiper {
  max-width: 50rem;
  width: 100%;
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