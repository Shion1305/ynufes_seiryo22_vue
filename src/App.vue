<template>
  <div class="wrapper">
    <div id="loader">
      <div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
    </div>
    <img alt="" class="background_img" src="@/assets/background_img.png"/>
    <Header/>
    <div id="body-frame" v-show="loaded">
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<style lang="scss" scoped>

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    display: none;
    opacity: 0;
    z-index: -1;
  }
}

#loader {
  z-index: 110;
  position: absolute;
  width: 100%;
  height: 100vh;

  background: linear-gradient(120deg, #ff5ecc, #ff75a8);
}

#loader.loaded {
  animation: fadeOut 1s forwards;
}

.spinner {
  margin: 0 auto;
  width: 40px;
  height: 40px;
  position: relative;
  top: 50%;
}

.cube1, .cube2 {
  background-color: #ffffff;
  width: 15px;
  height: 15px;
  position: absolute;
  top: 0;
  left: 0;

  -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
  animation: sk-cubemove 1.8s infinite ease-in-out;
}

.cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes sk-cubemove {
  25% {
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5)
  }
  50% {
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg)
  }
  75% {
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5)
  }
  100% {
    -webkit-transform: rotate(-360deg)
  }
}

@keyframes sk-cubemove {
  25% {
    transform: translateX(42px) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);
  }
  50% {
    transform: translateX(42px) translateY(42px) rotate(-179deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);
  }
  50.1% {
    transform: translateX(42px) translateY(42px) rotate(-180deg);
    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);
  }
  75% {
    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);
  }
  100% {
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}


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

#body-frame {
  position: relative;
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: clip;
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 170px;
  padding-bottom: 220px;

  * {
    z-index: 10;
  }

  @media screen and (max-width: 670px) {
    padding-top: 90px;
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
  components: {Header, Footer},
  // data() {
  //   return {loading: true};
  // },
  props: {},
  data() {
    return {loaded: false};
  },
  computed: {
    // isLoading() {
    //   return this.loading;
    // }
  },
  mounted() {
    window.onload = () => {
      console.log("onload");
      const loader = document.getElementById('loader');
      loader.classList.add('loaded');
      this.loaded = true;
    }
  }
}
</script>