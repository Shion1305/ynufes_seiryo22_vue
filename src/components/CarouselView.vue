<template>
  <div class="wrapper">
    <swiper
        :autoplay="{
      delay: 4000,
      disableOnInteraction: false,
    }"
        :centeredSlides="true"
        :loop="true"
        :modules="modules"
        :navigation="true"
        :pagination="{
      clickable: true,
    }"
        :slidesPerView="'auto'"
        :spaceBetween="15"
        class="mainSwiper">
      <swiper-slide>
        <router-link to="/about">
          <img src="@/assets/imgs/top_slide.webp" alt="トップスライド">
        </router-link>
      </swiper-slide>
      <swiper-slide v-for="slide in this.$store.state.slides" :key="slide.id">
        <router-link :to="slide.link" v-if="slide.isRouterLink">
          <img :src="slide.slide.url" alt="">
        </router-link>
        <a v-else :href="slide.link">
          <img :src="slide.slide.url" alt="">
        </a>
      </swiper-slide>
      <!--            <swiper-slide><img src="@/assets/imgs/test2.png"></swiper-slide>-->
      <!--      <swiper-slide><img src="@/assets/imgs/test3.png"></swiper-slide>-->
      <!--      <swiper-slide><img src="@/assets/imgs/test4.png"></swiper-slide>-->
      <!--      <swiper-slide><img src="@/assets/imgs/test5.png"></swiper-slide>-->
    </swiper>
  </div>
</template>
<script>
import {Swiper, SwiperSlide} from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import {Autoplay, Navigation, Pagination} from "swiper";
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  computed: {
  },
};
</script>
<style lang="scss">
/*html {*/
/*  position: relative;*/
/*}*/
.mainSwiper {
  overflow: visible;

  .swiper-slide {
    text-align: center;
    font-size: 18px;
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
    height: 100%;
    object-fit: cover;
  }

  .swiper-slide {
    max-width: 50rem;
    width: 80vw;
    max-height: 25rem;
    height: 40vw;
  }

}
</style>
