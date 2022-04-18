<template>
  <div class="wrapper">
    <img class="background_img" src="@/assets/background_img.png" alt=""/>
    <Header/>
    <div class="body-frame">
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.background_img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  z-index: -10;
}

.hover-to-shrink {
  //animation-delay: 0.02s;
  transition: all 0.1s linear;
}

.hover-to-shrink:hover {
  transform: scale(0.9);
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 20%;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}

.body-frame {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: clip;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 140px;
  padding-bottom: 220px;

  * {
    z-index: 10;
  }

  .content-frame {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 670px) {
    padding-top: 80px;
  }
}
</style>
<!--style below applies to all components-->
<style>
.hover-to-shrink {
  transition: all 0.1s linear;
}

.hover-to-shrink:hover {
  transform: scale(0.9);
}

.hover-underline-animation {
  display: inline-block;
  position: relative;
}

.hover-underline-animation:after {
  content: '';
  position: absolute;
  width: 100%;
  transform: scaleX(0);
  height: 2px;
  bottom: 20%;
  left: 0;
  background-color: white;
  transform-origin: bottom right;
  transition: transform 0.25s ease-out;
}

.hover-underline-animation:hover:after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
</style>
<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  components: {Header, Footer}
}
</script>