<script setup>
import {useMeta} from "vue-meta";
import {event} from "vue-gtag";
import {ref} from "vue";

if (process.env.NODE_ENV === "production") {
  event("data");
}
useMeta({title: 'デジタルパンフレット', description: '22清陵祭のデジタルパンフレットを掲載しています。'})
const showPDF = ref(true);
const iframeError = function () {
  showPDF.value = false;
}
</script>
<template>
  <div style="background: #fff6; padding: 1rem; border-radius: 3rem; text-align: center;
  animation-delay: 0.5s;" class="fadeUp">
    <div id="section-title">
      <img id="section-back" src="@/assets/home/section_min.webp"/>
      <h1>パンフレット</h1>
    </div>
    2022/05/13更新 Ver. 1.0<br>
    22清陵祭のパンフレットはこちらからダウンロードできます。
    <div id="download-area">
      <a class="hover-to-shrink1" href="/data/PamphletLite.pdf" target="_blank" rel="noreferrer noopener">
        <div>軽量版<br>7.0MB</div>
      </a>
      <a class="hover-to-shrink1" href="/data/Pamphlet.pdf" target="_blank" rel="noreferrer noopener">
        <div>標準版<br>23.9MB</div>
      </a>
    </div>
  </div>

  <object id="pdf-area"
          class="fadeUp"
          data="/data/PamphletLite.pdf"
          type="application/pdf" @error="iframeError" v-if="showPDF"/>
</template>

<style lang="scss" scoped>
.anchor {
  display: block;
  position: relative;
  top: -200px;
  visibility: hidden;
}

#download-area {
  margin: auto;
  display: flex;
  text-align: center;
  justify-content: center;
  gap: 3%;
  width: unquote("min(100% - 2rem,600px)");

  > a {
    text-decoration: none;
    font-size: 1.5em;
    color: white;
    width: 30%;

    > div {
      box-shadow: 0 1.9px 2.5px rgba(0, 0, 0, 0.057),
      0 5px 6.1px rgba(0, 0, 0, 0.076);
      display: flex;
      border-radius: 1em;
      width: 100%;
      height: 5em;
      justify-content: center;
      align-items: center;
      background: linear-gradient(120deg, #ff5ecc, #ff75a8);
    }
  }
}

#section-back {
  width: unquote("min(100% - 1rem, 25em)");
}

#main {
  animation-delay: 0.2s;
  width: 100%;
  margin-inline: auto;
  position: relative;
}

#section-title {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  h1 {
    margin: auto;
    position: absolute;
    color: white;
    font-size: 2.2em;
  }
}

.page-holder {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.page {
  box-sizing: border-box;
  padding: 1rem;
  width: 50%;

  img {
    width: 100%;
    object-fit: cover;
  }
}

#pdf-area {
  animation-delay: 0.7s;
  margin-top: 40px;
  width: unquote("min(100vw - 4em, 1200px)");
  height: 60vh;
}

@media screen and (max-width: 1000px) {
  .page {
    box-sizing: border-box;
    padding: 0.25rem 0.5rem;
    width: unquote("min(100%,50rem)");

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }
  }
}

@media screen and (max-width: 380px) {
  #section-title {
    font-size: 15px;
  }
}
</style>