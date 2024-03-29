<script setup>
import {createClient} from "microcms-js-sdk"; //ES6
import {useMeta} from 'vue-meta';
import store from "@/store";
import {onMounted, ref} from "vue";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const client = createClient({
  serviceDomain: "ynufes-seiryo22", // YOUR_DOMAIN is the XXXX part of XXXX.microcms.io
  apiKey: "26191c4b25ad49f1a00e982735c5831e5ab5",
});
const loaded = ref(false);

function getLatestUpdate() {
  client.get({
    endpoint: 'updates',
  }).then((data) => {
    store.commit('setUpdates', data.contents);
    // this.updates = data.contents.slice(0, 3);
  });
}

function getLatestSlides() {
  client.get({
    endpoint: 'slides'
  }).then((data) => {
        store.commit('setSlide', data.contents)
      }
  );
}

function getLatestSponsors() {
  client.get({
    endpoint: 'ads'
  }).then((data) => {
        store.commit('setSponsors', data.contents);
      }
  );
}

onMounted(() => {
  getLatestSponsors();
  getLatestUpdate();
  window.onload = () => {
    const loader = document.getElementById('loader');
    loader.classList.add('loaded');
    loaded.value = true;
    getLatestSlides();
  }
});
useMeta({
  title: '',
  htmlAttrs: {lang: 'ja', amp: true},
  description: ''
});
</script>
<!--setupは複数回実行される可能性があるのに対し、scriptタグ内は1回のみ実行される。-->
<script>
document.querySelector("[name='description']").remove()
</script>
<template>
  <!--  vue-meta expression starts from here-->
  <metainfo>
    <template v-slot:title="{ content }">{{
        content ? `${content} | 22清陵祭公式ホームページ 横浜国立大学大学祭` : `22清陵祭公式ホームページ 横浜国立大学大学祭`
      }}
    </template>
  </metainfo>
  <!--  vue-meta expression ends here-->
  <div class="wrapper">
    <div id="loader" style="color: white;font-family: 'Kaisei Decol', serif;">
      <div style="font-size: 6rem;font-family: 'Kaisei Decol', serif;">花笑み</div>
      <div style="font-size: 3rem; text-align: center;">22清陵祭</div>
      <div style="font-size: 1.5rem; line-height: 1.1; text-align: center; padding-bottom: 2rem">横浜国立大学<br>オンライン大学祭
      </div>
      <div class="spinner">
        <div class="cube1"></div>
        <div class="cube2"></div>
      </div>
    </div>
    <img alt="" class="background_img" src="@/assets/background_img-1.webp"/>
    <Header v-show="loaded" id="header" class="fadeUp"/>
    <div v-show="loaded" id="body-frame">
      <router-view/>
      <Footer/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
#header {
  position: fixed;
  z-index: 100;
  width: 100vw;
}

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
  position: fixed;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(120deg, #ff5ecc, #ff75a8);
}

#loader.loaded {
  animation: fadeOut 1s forwards;
}

.spinner {
  margin: 0 auto;
  width: 80px;
  height: 80px;
  position: relative;
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
  overflow: hidden;
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

.fadeUp {
  animation-name: fadeUpAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeUpAnime {
  from {
    opacity: 0;
    transform: translateY(100px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fadeLeft {
  animation-name: fadeLeftAnime;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  opacity: 0;
}

@keyframes fadeLeftAnime {
  from {
    opacity: 0;
    transform: translateX(100px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.hover-to-shrink {
  transition: all 0.1s linear;
}

.hover-to-shrink:hover {
  transform: scale(0.9);
}

.hover-to-shrink1 > * {
  transition: all 0.1s linear;
}

.hover-to-shrink1:hover > * {
  transform: scale(0.95);
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
