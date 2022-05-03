<script setup>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from 'swiper/vue';
import {event} from "vue-gtag";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/autoplay'

// import Swiper core and required modules
import SwiperCore, {Autoplay} from 'swiper';
import axios from "axios";
import store from "@/store";
// install Swiper modules
SwiperCore.use([Autoplay]);

const randomList = function (rand) {
  return rand.map(value => ({value, sort: Math.random()}))
      .sort((a, b) => a.sort - b.sort)
      .map(({value}) => value);
  // return rand.sort(function () {
  //   return 0.5 - Math.random()
  // });
}

const access = async function (id) {
  if (process.env.NODE_ENV === "production") {
    event("sponsor:click", {
      event_category: "id",
      event_label: id,
    });
  }
  axios.get("https://shion1305.com/seiryo22/request?target=" + id);
}
</script>
<template>
  <swiper v-if="store.state.ads.length!==0" :slidesPerView="2" :spaceBetween="10"
          :slidesPerGroup="2"
          :loop="true"
          :autoplay="{
  delay: 4500,
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

    <swiper-slide v-for="ad in randomList(store.state.ads)" :key="ad.id">
      <a :href="`${ad.url}`" target="_blank"
         v-on:click="access(`${ad.sponsor}`)"
         rel="noopener noreferrer"><img
          :src="`${ad.image.url}`" alt=""/></a>
    </swiper-slide>
  </swiper>
</template>

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