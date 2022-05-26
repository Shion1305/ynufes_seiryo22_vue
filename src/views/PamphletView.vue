<script setup>
import {useMeta} from "vue-meta";
import {event} from "vue-gtag";

if (process.env.NODE_ENV === "production") {
  event("pamphlet");
}
useMeta({title: 'デジタルパンフレット', description: '22清陵祭のデジタルパンフレットを掲載しています。ぜひご利用ください。'})

function download() {
  event("pamphlet:download");
}

function downloadL() {
  event("pamphlet:downloadL");
}
</script>
<template>
  <div class="fadeUp"
       style="background: #fff6; padding: 1rem; border-radius: 3rem; text-align: center; animation-delay: 0.3s">
    <div id="section-title">
      <img id="section-back" alt="section background" src="@/assets/home/section_min.webp"/>
      <h1>パンフレット</h1>
    </div>
    2022/05/16更新 Ver. 2.0<br>
    22清陵祭のパンフレットはこちらからダウンロードできます。
    <div id="download-area">
      <a class="hover-to-shrink1"
         href="/data/22清陵祭_パンフレット_軽量版.pdf"
         rel="noreferrer noopener" target="_blank"
         @click="downloadL">
        <div>PDF<br>軽量版<br>8.9MB</div>
      </a>
      <a class="hover-to-shrink1"
         href="/data/22清陵祭_パンフレット.pdf"
         rel="noreferrer noopener" target="_blank"
         @click="download">
        <div>PDF<br>標準版<br>16.4MB</div>
      </a>
    </div>
  </div>
  <div id="main">
    <div class="page-holder">
      <div class="page fadeUp">
        <img alt="パンフレットページ1枚目" src="/image/pamphlet/pamphlet1.webp"/>
      </div>
      <div class="page fadeUp">
        <img alt="パンフレットページ2枚目" src="/image/pamphlet/pamphlet2.webp"/>
      </div>
      <div class="page fadeUp">
        <img alt="パンフレットページ3枚目" src="/image/pamphlet/pamphlet3.webp"/>
      </div>
      <div class="page fadeUp">
        <img alt="パンフレットページ4枚目" src="/image/pamphlet/pamphlet4.webp"/>
      </div>
      <div class="page">
        <img alt="パンフレットページ5枚目" src="/image/pamphlet/pamphlet5.webp"/>
      </div>
      <div class="page">
        <img alt="パンフレットページ6枚目" src="/image/pamphlet/pamphlet6.webp"/>
      </div>
      <div class="page">
        <img alt="パンフレットページ7枚目" src="/image/pamphlet/pamphlet7.webp"/>
      </div>
      <div class="page">
        <img alt="パンフレットページ8枚目" src="/image/pamphlet/pamphlet8.webp"/>
      </div>
      <div class="page">
        <img alt="パンフレットページ9枚目" src="/image/pamphlet/pamphlet9.webp"/>
      </div>
      <div class="page">
        <img alt="パンフレットページ10枚目" src="/image/pamphlet/pamphlet10.webp"/>
      </div>
      <div class="page">
        <img alt="パンフレットページ11枚目" src="/image/pamphlet/pamphlet11.webp"/>
      </div>
    </div>
  </div>
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
    width: 50%;

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
  width: unquote("min(calc(100% - 2rem), 80rem)");
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

  &:nth-child(1) {
    animation-delay: 0.4s;
  }

  &:nth-child(2) {
    animation-delay: 0.48s;
  }

  &:nth-child(3) {
    animation-delay: 0.56s;
  }

  &:nth-child(4) {
    animation-delay: 0.64s;
  }
}

#pdf-area {
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