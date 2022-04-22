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
        class="mySwiper"
    >
      <swiper-slide><img src="@/assets/imgs/test1.png"></swiper-slide>
      <swiper-slide><img src="@/assets/imgs/test2.png"></swiper-slide>
      <swiper-slide><img src="@/assets/imgs/test3.png"></swiper-slide>
      <swiper-slide><img src="@/assets/imgs/test4.png"></swiper-slide>
      <swiper-slide><img src="@/assets/imgs/test5.png"></swiper-slide>
    </swiper>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
// import "./style.css";
// import required modules
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
};
</script>
<style scoped>
.swiper {
  overflow: visible;
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
  height: 100%;
  object-fit: cover;
}

.swiper-slide {
  max-width: 50rem;
  width: 80vw;
  max-height: 25rem;
  height: 40vw;
}
</style>
