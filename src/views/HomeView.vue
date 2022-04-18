<template>
  <div class="content-frame">
    <div class="carouselView">
      <CarouselView id="carousel"/>
    </div>
  </div>
</template>

<script>

import CarouselView from "@/components/CarouselView";

export default {
  name: 'HomeView',
  components: {
    CarouselView,
  }
}
</script>
<style lang="scss" scoped>

.carouselView {
  height: 30rem;
  display: flex;

  CarouselView {
    margin: 0 auto;
  }

}
</style>